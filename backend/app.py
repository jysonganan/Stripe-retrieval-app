import json
from flask_cors import CORS
from flask import Flask, jsonify, redirect, request, session, make_response, send_file
from oauth_utils import get_oauth_link, save_user_data, get_user_payouts, download_payout_report
from oauth_utils import check_user_creds, deauthorize_user_handler, check_user_existence
import tempfile
import os

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = ['Content-type', 'Stripe-Signature']
app.secret_key = b'_5#y2L"JF878z\n\xec]/'


@app.route("/")
def home_page():
    return jsonify({"result": "HelloFlask!"})


@app.after_request
def add_csp_headers(response):
    csp_header = "default-src 'self'; connect-src 'self' https://dashboard.stripe.com/;"
    response.headers.add('Content-Security-Policy', csp_header)
    return response


@app.route("/get-oauth-link/", methods=["GET", 'POST'])
def construct_oauth_link():
    get_data = request.args.to_dict()
    url = get_oauth_link(data=get_data)
    return redirect(url)


@app.route("/authorize_oauth/", methods=["GET"])
def handle_oauth_redirect():
    get_data = request.args.to_dict()
    url = save_user_data(get_data=get_data)
    return redirect(url)


@app.route('/health-check/', methods=["GET", "POST"])
def verify_user():
    signature = request.headers.get('stripe-signature')
    payload = request.data.decode('utf-8')
    payload_json = json.loads(payload)
    account_id = payload_json['account_id']
    mode = payload_json["mode"]
    hasSignedIn, result = check_user_creds(account_id=account_id, mode=mode)
    return jsonify({"result": result, "hasSignedIn": hasSignedIn})


# Getting Payouts in JSON Object
@app.route('/get_payouts/', methods=["POST"])
def get_payouts():
    if request.method == 'OPTIONS':
        return _build_cors_preflight_response()

    if request.method == "POST":
        payload_json = json.loads(request.data.decode('utf-8'))
        response = get_user_payouts(payload_json)
        return _corsify_actual_response(jsonify(response))


def create_temp_downloadable_file(res, account_id):
    file_name = f'{account_id}-PayoutData-'
    with tempfile.NamedTemporaryFile(delete=False, prefix=file_name, suffix='.csv') as temp_file:
        res.to_csv(temp_file, index=False)
        return temp_file.name


@app.route('/download-report/', methods=["GET"])
def download_csv():
    account_id = request.args.get("account_id")
    mode = request.args.get("mode")
    month = request.args.get("current_month")
    year = request.args.get("current_year")
    res = download_payout_report(account_id=account_id, mode=mode, month=month, year=year)
    temp_file_path = create_temp_downloadable_file(res, account_id)
    file_name = f"PayoutReport--{year}-{month}.csv"
    response = send_file(temp_file_path, mimetype='text/csv', as_attachment=True, download_name=file_name)
    os.remove(temp_file_path)
    return response


@app.route("/check-user/", methods=["POST"])
def check_user():
    payload = json.loads(request.data.decode('utf-8'))
    userExist = check_user_existence(payload)

    if userExist:
        return jsonify({"userExist": True})
    else:
        return jsonify({"userExist": False})


# De-Authorizing an User
@app.route("/deauthorize_user/", methods=["POST"])
def deauthorize_user():
    if request.method == 'OPTIONS':
        return _build_cors_preflight_response()

    if request.method == "POST":
        payload_json = json.loads(request.data.decode('utf-8'))
        account_id = payload_json['account_id']
        mode = payload_json["mode"]
        result = deauthorize_user_handler(account_id=account_id, mode=mode)
        return jsonify(result)


def _build_cors_preflight_response():
    response = make_response()
    response.headers.add("Access-Control-Allow-Origin", "*")
    response.headers.add('Access-Control-Allow-Headers', "*")
    response.headers.add('Access-Control-Allow-Methods', "*")
    return response


def _corsify_actual_response(response):
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response


# Increasing the TIMEOUT VALUE from 30 Secs to 60 Secs


if __name__ == '__main__':
    app.run(debug=True)
