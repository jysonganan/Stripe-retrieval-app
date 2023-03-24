import urllib
import os
import stripe
import json
from database_utils import DatabaseUtils
from retrieve_current_payouts import retrieve_current_payouts
from flask import jsonify
import requests

database_utils = DatabaseUtils()

stripe.api_key = os.environ.get("STRIPE_SECRET_KEY")


def get_oauth_link(data):
    state = data["state"]
    mode = data["mode"]
    args = {
        "client_id": os.environ.get("STRIPE_CLIENT_ID"),
        "state": state,
        "scope": "read_write",
        "response_type": "code",
        "mode": mode
    }

    url = "https://connect.stripe.com/oauth/authorize?{}".format(
        urllib.parse.urlencode(args))
    return url

def save_user_data(get_data):
    code = get_data["code"]
    try:
        response = stripe.OAuth.token(
            grant_type="authorization_code", code=code, )
    except stripe.oauth_error.OAuthError as e:
        return json.dumps({"error": "Invalid authorization code: " + code}), 400
    except Exception as e:
        return json.dumps({"error": "An unknown error occurred."}), 500
    access_token = response['access_token']
    connected_account_id = response["stripe_user_id"]
    tokenData = {
        'account_id': connected_account_id,
        'access_token': access_token
    }
    tokenData = json.dumps(tokenData)
    database_utils.insert_to_db(data=tokenData)
    secret_store = stripe.apps.Secret.create(
        name='My_API_KEY',
        payload=tokenData,
        scope={'type': 'account'}
    )
    url = "https://dashboard.stripe.com/test/dashboard"
    return url

def get_user_payouts(data):
    account_id = data["account_id"]
    user_access_token = database_utils.find_in_db(account_id=account_id)
    if not user_access_token:
        response = {"hasSignedIn": False}
        return response
    output_df = retrieve_current_payouts(api_key=user_access_token)
    output_df_json = output_df.to_json(orient='records')
    response = {"output_df_json":output_df_json, "hasSignedIn": True}
    return response

def download_payout_report(account_id):
    user_access_token = database_utils.find_in_db(account_id=account_id)
    res = retrieve_current_payouts(
        api_key=user_access_token)
    filename = os.path.join('UserData', f'{account_id}-PayoutData.csv')
    res.to_csv(filename, index=False)
    return filename

def check_user_creds(payload, signature, account_id):
    user_access_token = database_utils.find_in_db(account_id=account_id)
    try:
        event = stripe.Webhook.construct_event(
            payload, signature, os.getenv('STRIPE_APP_SECRET')
        )

    except ValueError as e:
        return jsonify({'error': str(e)}, 400)

    except stripe.error.SignatureVerificationError as e:
        print("[ERROR] ", e)
        return jsonify({'error': str(e)}, 400)

    response = requests.get('https://api.stripe.com/healthcheck')
    result = response.reason
    if user_access_token is not False:
        hasSignedIn = True
    else:
        hasSignedIn = False
    response = {"result": result, 'hasSignedIn': hasSignedIn}
    return response

def deauthorize_user(account_id):
    res = stripe.OAuth.deauthorize(
        stripe_user_id=account_id,
        client_id=os.environ.get("STRIPE_CLIENT_ID")
    )
    database_utils.remove_from_db(account_id=account_id)
    return res