from flask import Flask

app = Flask(__name__)

@app.route('/auth/login')
def auth_login():
    return "Done"

if __name__ == '__main__':
    app.run(debug=True)
