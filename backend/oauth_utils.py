import urllib
import os
import stripe
import json
from database_utils import DatabaseUtils
from retrieve_current_payouts import retrieve_current_payouts
from flask import jsonify
import requests
import threading
import queue

database_utils = DatabaseUtils()
stripe.api_key = ""
oauth_mode = ""
redirect_uri = "https://stripe-backend-k7b4-jayateerthdambal.vercel.app/authorize_oauth/"


def get_oauth_link(data):
    global oauth_mode
    mode = data["mode"]
    oauth_mode = mode
    if oauth_mode.lower() == 'live':
        args = {
            "client_id": os.environ.get("STRIPE_CLIENT_ID_LIVE"),
            "scope": "read_write",
            "response_type": "code",
            "mode": mode,
            "redirect_uri": redirect_uri
        }
    else:
        args = {
            "client_id": os.environ.get("STRIPE_CLIENT_ID"),
            "scope": "read_write",
            "response_type": "code",
            "mode": mode,
            "redirect_uri": redirect_uri
        }

    url = "https://connect.stripe.com/oauth/authorize?{}".format(
        urllib.parse.urlencode(args))
    print("URL: ", url)
    return url


def save_user_data(get_data):
    global oauth_mode
    code = get_data["code"]
    try:
        if oauth_mode.lower() == 'live':
            stripe.api_key = os.environ.get("STRIPE_SECRET_KEY_LIVE")
            response = stripe.OAuth.token(
                grant_type="authorization_code", code=code, )
        else:
            stripe.api_key = os.environ.get("STRIPE_SECRET_KEY")
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
        'access_token': access_token,
        'mode': oauth_mode.lower()
    }
    tokenData = json.dumps(tokenData)
    database_utils.insert_to_db(data=tokenData)
    if oauth_mode.lower() == 'live':
        url = "https://dashboard.stripe.com/dashboard"
    else:
        url = "https://dashboard.stripe.com/test/dashboard"

    return url


def check_user_creds(account_id, mode):
    try:
        user_access_token = database_utils.find_in_db(
            account_id=account_id, mode=mode)
        if mode.lower() == 'live':
            stripe.api_key = os.environ.get("STRIPE_SECRET_KEY_LIVE")
        else:
            stripe.api_key = os.environ.get("STRIPE_SECRET_KEY")

    except ValueError as e:
        return jsonify({'error': str(e)}, 400)

    except stripe.error.SignatureVerificationError as e:
        print("[ERROR] ", e)
        return jsonify({'error': str(e)}, 400)

    result = requests.get('https://api.stripe.com/healthcheck').reason
    if user_access_token is not False:
        hasSignedIn = True
    else:
        hasSignedIn = False
    return hasSignedIn, result


class ThreadedPayoutFunction(threading.Thread):
    def __init__(self, api_key, month, year, result_queue):
        super().__init__()
        self.api_key = api_key
        self.month = month
        self.year = year
        self.result_queue = result_queue

    def run(self):
        result = retrieve_current_payouts(
            api_key=self.api_key, current_month=self.month, current_year=self.year)
        self.result_queue.put(result)


def get_user_payouts(data):
    account_id = data["account_id"]
    mode = data["mode"]
    month = data["month"]
    year = data["year"]
    response = {}
    user_access_token = database_utils.find_in_db(
        account_id=account_id, mode=mode)
    if not user_access_token:
        response["hasSignedIn"] = False
        return response
    response["hasSignedIn"] = True
    result_queue = queue.Queue()
    thread = ThreadedPayoutFunction(
        api_key=user_access_token, month=month, year=year, result_queue=result_queue)
    thread.start()

    thread.join(timeout=60)

    if thread.is_alive():
        print("Thread Error")
        response["error"] = True
        response["hasData"] = False
        return response
    output_df = result_queue.get()
    output_df_json = output_df.to_json(orient='records')
    output_data = json.loads(output_df_json)
    if len(output_data) == 0:
        response["hasData"] = False
    else:
        response["hasData"] = True
        response["output_df_json"] = output_df_json
        response["error"] = False
    return response


def download_payout_report(account_id, mode, month, year):
    user_access_token = database_utils.find_in_db(
        account_id=account_id, mode=mode)
    res = retrieve_current_payouts(
        api_key=user_access_token, current_month=month, current_year=year)
    return res


def deauthorize_user_handler(account_id, mode):
    if mode.lower() == 'live':
        stripe.api_key = os.environ.get("STRIPE_SECRET_KEY_LIVE")
        res = stripe.OAuth.deauthorize(
            stripe_user_id=account_id,
            client_id=os.environ.get("STRIPE_CLIENT_ID_LIVE")
        )
    else:
        stripe.api_key = os.environ.get("STRIPE_SECRET_KEY")
        res = stripe.OAuth.deauthorize(
            stripe_user_id=account_id,
            client_id=os.environ.get("STRIPE_CLIENT_ID")
        )
    database_utils.remove_from_db(account_id=account_id, mode=mode)
    return res


def check_user_existence(data):
    account_id = data["account_id"]
    mode = data["mode"]
    userExist = database_utils.find_user_in_db(
        account_id=account_id, mode=mode)
    return userExist
