import json
import os
from flask_cors import CORS
import requests
import stripe
from dotenv import load_dotenv, find_dotenv
from flask import Flask, jsonify, redirect, request, session, make_response, send_file
import urllib
import pandas as pd
import retrieve_current_payouts
from database_utils import DatabaseUtils

database_utils = DatabaseUtils()

load_dotenv(find_dotenv())
stripe.api_key = os.getenv('STRIPE_SECRET_KEY')
stripe.api_version = os.getenv('STRIPE_API_VERSION', '2022-11-15')

static_dir = str(os.path.abspath(os.path.join(
    __file__, "..", os.getenv("STATIC_DIR"))))
app = Flask(__name__, static_folder=static_dir,
            static_url_path="", template_folder=static_dir)

cors = CORS(app)
app.config['CORS_HEADERS'] = ['Content-type', 'Stripe-Signature']
app.secret_key = b'_5#y2L"JF878z\n\xec]/'

USER_INFO_FILE = os.path.join("UserData/UserInfo.json")


@app.route("/home")
def home_page():
    return "HelloFlask!!"


@app.route("/get-oauth-link/", methods=["GET", 'POST'])
def construct_oauth_link():
    global mode_oauth
    get_data = request.args.to_dict()
    state = get_data['state']
    mode_oauth = get_data['mode']
    print("mode_oauth: ", mode_oauth)
    session['state'] = state
    session['mode'] = mode_oauth
    args = {
        "client_id": os.getenv('STRIPE_CLIENT_ID'),
        "state": state,
        "scope": "read_write",
        "response_type": "code",
        "mode": mode_oauth
    }
    url = "https://connect.stripe.com/oauth/authorize?{}".format(
        urllib.parse.urlencode(args))
    print("URL: ", url)
    return redirect(url)


@app.route("/authorize-oauth/", methods=["GET"])
def handle_oauth_redirect():
    if request.args.get("state") != session['state']:
        return json.dumps({"error": "Incorrect state parameter: " + request.args.get("state")}), 403

    # Send the authorization code to Stripe's API.
    code = request.args.get("code")
    mode = mode_oauth
    print(request.args)
    try:
        if mode == 'live':
            stripe.api_key = os.getenv("STRIPE_LIVE_SECRET_KEY")
            response = stripe.OAuth.token(
                grant_type="authorization_code", code=code, )
        else:
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
        'mode': mode
    }
    tokenData = json.dumps(tokenData)
    print("[FLASK INFO]", tokenData)
    database_utils.insert_to_db(data=tokenData)
    secret_store = stripe.apps.Secret.create(
        name='My_API_KEY',
        payload=tokenData,
        scope={'type': 'account'}
    )
    print("Secret Store API:", secret_store)
    return redirect("https://dashboard.stripe.com/test/dashboard")



@app.route('/health-check', methods=["GET", "POST"])
def verify_user():
    signature = request.headers.get('stripe-signature')
    payload = request.data.decode('utf-8')
    payload_json = json.loads(payload)
    account_id = payload_json['account_id']
    mode = payload_json["mode"]
    user_data_access_token = database_utils.find_in_db(account_id=account_id, mode=mode)
    try:
        if mode == 'live':
            stripe.api_key = os.getenv("STRIPE_LIVE_SECRET_KEY")
            event = stripe.Webhook.construct_event(
                payload, signature, os.getenv('STRIPE_APP_SECRET')
            )
        else:
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
    if user_data_access_token is not False:
        hasSignedIn = True
    else:
        hasSignedIn = False
    return jsonify({"result": result, 'hasSignedIn': hasSignedIn})





@app.route('/get_customers/', methods=["POST"])
def get_customers_list():
    # Getting the Account ID From Body
    payload = request.data.decode('utf-8')
    payload_json = json.loads(payload)
    account_id = payload_json['account_id']

    # Performing Actions to receive data from Stripe API
    name = []
    customer_id = []
    res = stripe.Customer.list(limit=3, stripe_account=account_id)
    for i in range(0, len(res["data"])):
        name.append(res["data"][i]["name"])
        customer_id.append(res["data"][i]["id"])
    name = json.dumps(name)
    customer_id = json.dumps(customer_id)
    return jsonify({'names': name, 'customer_id': customer_id})


# Getting Payouts in JSON Object
@app.route("/get_payouts/", methods=["POST"])
def get_payouts_by_date():
    if request.method == "OPTIONS":
        return _build_cors_preflight_response()
    
    if request.method == "POST":
        values = json.loads(request.data.decode("utf-8"))
        month = values["month"]
        year = values["year"]
        account_id = values["account_id"]
        mode = values["mode"]
        user_access_token = database_utils.find_in_db(account_id=account_id, mode=mode)
        print(user_access_token)
        if not user_access_token:
            return jsonify({"hasSignedIn": False})
        output_df = retrieve_current_payouts.retrieve_current_payouts(api_key=user_access_token,
                                                                      current_month=month,
                                                                        current_year=year)
        output_df_json = output_df.to_json(orient='records')
        if output_df_json is not None:
            hasData = True
        return _corsify_actual_response(jsonify({"output_df_json": output_df_json, 'hasSignedIn': True, 'hasData': hasData}))
    

@app.route('/download-report/', methods=["GET"])
def download_csv():
    account_id = request.args.get("account_id")
    current_month = request.args.get("current_month")
    current_year = request.args.get("current_year")
    user_access_token = database_utils.find_in_db(account_id=account_id)
    res = retrieve_current_payouts.retrieve_current_payouts(
        api_key=user_access_token, current_month=current_month, current_year=current_year)
    filename = os.path.join('UserData', f'{account_id}-PayoutData.csv')
    res.to_csv(filename, index=False)
    return send_file(filename, mimetype='text/csv', as_attachment=True)


# De-Authorizing an User
@app.route("/deauthorize_user/", methods=["POST"])
def deauthorize_user():
    procCompleted = False
    if request.method == 'OPTIONS':
        return _build_cors_preflight_response()

    if request.method == "POST":
        payload_json = json.loads(request.data.decode('utf-8'))
        account_id = payload_json['account_id']
        result = stripe.OAuth.deauthorize(
            stripe_user_id=account_id,
            client_id=os.getenv("STRIPE_CLIENT_ID")
        )
        print("[De-Authorize User: ]", result)
        database_utils.remove_from_db(account_id=account_id)
        procCompleted = True
        return jsonify({"result": procCompleted})




def _build_cors_preflight_response():
    response = make_response()
    response.headers.add("Access-Control-Allow-Origin", "*")
    response.headers.add('Access-Control-Allow-Headers', "*")
    response.headers.add('Access-Control-Allow-Methods', "*")
    return response


def _corsify_actual_response(response):
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response


if __name__ == '__main__':
    app.run(debug=True)
