import json
import os
import stripe
from dotenv import load_dotenv, find_dotenv
from flask import Flask, jsonify, render_template, redirect, request, session, send_from_directory
import urllib


load_dotenv(find_dotenv())
stripe.api_key = os.getenv('STRIPE_SECRET_KEY')
stripe.api_version = os.getenv('STRIPE_API_VERSION', '2019-12-03')

static_dir = str(os.path.abspath(os.path.join(
    __file__, "..", os.getenv("STATIC_DIR"))))
app = Flask(__name__, static_folder=static_dir,
            static_url_path="", template_folder=static_dir)


app.secret_key = b'_5#y2L"JF878z\n\xec]/'


@app.route("/get-oauth-link/", methods=["GET", 'POST'])
def construct_oauth_link():
    # state = ''.join([secrets.choice(string.ascii_letters + string.digits) for n in range(16)])
    get_data = request.args.to_dict()

    state = get_data['state']
    session['state'] = state
    args = {
        "client_id": os.getenv('STRIPE_CLIENT_ID'),
        "state": state,
        "scope": "read_write",
        "response_type": "code",
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
    try:
        response = stripe.OAuth.token(
            grant_type="authorization_code", code=code,)
    except stripe.oauth_error.OAuthError as e:
        return json.dumps({"error": "Invalid authorization code: " + code}), 400
    except Exception as e:
        return json.dumps({"error": "An unknown error occurred."}), 500
    access_token = response['access_token']
    # print("Access-Token:", access_token)
    print("Response: ", response)
    connected_account_id = response["stripe_user_id"]
    tokenData = {
        'account_id': connected_account_id,
        'access_token': access_token
    }
    with open('./data.json', 'a') as f:
        f.write(json.dumps(tokenData, ensure_ascii=False, indent=4))
    tokenData = json.dumps(tokenData)
    secret_store = stripe.apps.Secret.create(
        name='My_API_KEY',
        payload=tokenData,
        scope={'type': 'account'}
    )
    print("Secret Store API:", secret_store)
    save_account_id(connected_account_id)
    # Setting Secret Store API

    return redirect("https://dashboard.stripe.com/test/dashboard")


def save_account_id(id):
    # We can save the connected Account ID to our Database
    print("Connected account ID: ", id)


@app.route('/verify_user/', methods=["POST", 'GET'])
def verify_user():
    payload = request.data
    sig_header = request.headers.get('Stripe-Signature')
    print("Payload: ", payload)

    return payload


if __name__ == '__main__':
    app.run(debug=True)
