from flask import Flask
import stripe
from flask import request


stripe.api_key = ""
app = Flask(__name__)


@app.route('/oauth/login/', methods=['GET', 'POST'])
def auth_login():
    args = request.args.to_dict()
    print(args)
    return args


if __name__ == '__main__':
    app.run(debug=True)
