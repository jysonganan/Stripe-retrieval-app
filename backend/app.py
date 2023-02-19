import json
import os
import secrets
import string

import stripe
from dotenv import load_dotenv, find_dotenv
from flask import Flask, jsonify, render_template, redirect, request, session, send_from_directory
import urllib

# Setup Stripe python client library
load_dotenv(find_dotenv())
stripe.api_key = os.getenv('STRIPE_SECRET_KEY')
stripe.api_version = os.getenv('STRIPE_API_VERSION', '2019-12-03')

static_dir = str(os.path.abspath(os.path.join(__file__ , "..", os.getenv("STATIC_DIR"))))
app = Flask(__name__, static_folder=static_dir,
            static_url_path="", template_folder=static_dir)

# Set the secret key to some random bytes. Keep this really secret!
# This enables Flask sessions.
app.secret_key = b'_5#y2L"JF878z\n\xec]/'

@app.route("/get-oauth-link/", methods=["GET"])
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
    url = "https://connect.stripe.com/oauth/authorize?{}".format(urllib.parse.urlencode(args))
    print("URL: ", url)
    return redirect(url)


@app.route("/authorize-oauth", methods=["GET"])
def handle_oauth_redirect():
  if request.args.get("state") != session['state']:
    return json.dumps({"error": "Incorrect state parameter: " + request.args.get("state")}), 403

  # Send the authorization code to Stripe's API.
  code = request.args.get("code")
  try:
    response = stripe.OAuth.token(grant_type="authorization_code", code=code,)
  except stripe.oauth_error.OAuthError as e:
    return json.dumps({"error": "Invalid authorization code: " + code}), 400
  except Exception as e:
    return json.dumps({"error": "An unknown error occurred."}), 500

  connected_account_id = response["stripe_user_id"]
  save_account_id(connected_account_id)

  
  return redirect("https://dashboard.stripe.com/test/dashboard")

def save_account_id(id):
  # Save the connected account ID from the response to your database.
  print("Connected account ID: ", id)

if __name__ == '__main__':
    app.run(debug=True)