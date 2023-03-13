import os
import requests
import stripe
import json
import pandas as pd
from urllib.parse import urlparse, parse_qs, urlencode
import urllib
from cryptography.fernet import Fernet
from dotenv import load_dotenv, find_dotenv

load_dotenv(find_dotenv())
stripe.api_key = os.getenv("STRIPE_SECRET_KEY")


# Getting Stripe Secret Store API LIst
# secret_list = stripe.apps.Secret.list(
#     scope = {"type": "account"},
#     limit = 5
# )
#
# print(secret_list)
#
# 2. Getting a List of Connected Accounts
# list_accounts = stripe.Account.list(limit=10)
# for i in range(0, len(list_accounts)):
#     print(list_accounts.data[i]['id'])

# 3. Creating a Payout
# res = stripe.Payout.list(stripe_account=account_id, limit=10)
# print(res)

# 4. Listing all Customer
# res = stripe.Customer.list(limit=2, stripe_account=account_id)
# # print(res["data"])
# name = []
# customer_id = []
#
# for i in range(0, len(res["data"])):
#     name.append(res["data"][i]["name"])
#     customer_id.append(res["data"][i]["id"])
#
# print("Names: ", name)
# print("Customer ID: ", customer_id)

# 5. Delete an Account
# res = stripe.Account.delete("")
# print(res)


# 6. Creating a Dataframez`
# def check_for_account_id(account_id):
#     df = pd.read_json(os.path.join("UserData/UserInfo.json"))
#     if account_id in df['account_id'].values:
#         user_row = df.loc[df['account_id'] == account_id, ['account_id', 'access_token']]
#         user_access_token = user_row['access_token'].values[0]
#         return user_access_token
#     else:
#         return False


# 7. Fetch Access token for an AccountID
# def fetch_access_token(account_id):
#     params = {
#         "response_type": "code",
#         "client_id": "ca_NMVdZWTZSaRhb4nrYRxpPwJ3un4nMSqI",
#         "scope": "read_write",
#         "redirect_uri": "http://localhost:5000/authorize-oauth/",
#         "stripe_landing": "login",
#         "stripe_user": account_id
#     }
#     url = "https://connect.stripe.com/oauth/authorize?{}".format(
#         urllib.parse.urlencode(params))
#     print(url)
#     response = requests.get(url)
#     print(response)


# print(fetch_access_token("acct_1JD9NgCgQjBmqTNT"))

# 8. Deauthorize a Connected Account
# res = stripe.OAuth.deauthorize(
#     stripe_user_id="acct_1MjhJiSAv0t2qRwW",
#     client_id="ca_NMVdZWTZSaRhb4nrYRxpPwJ3un4nMSqI"
# )
#
# print(res)

# Setting a Secret Key
# def create_store_key(account_id, access_token):
#     tokenData = {
#         'account_id': account_id,
#         'access_token': access_token
#     }
#     tokenData = json.dumps(tokenData)
#     secret_store = stripe.apps.Secret.create(
#         name='My_API_KEY',
#         payload=tokenData,
#         scope={'type': 'account'}
#     )
#     print("Secret Store Key: ", secret_store)


# Encrypting Access Token

# class AccessTokenEncryption:
#     def __init__(self, key=None):
#         if key is None:
#             key = Fernet.generate_key()
#         self.key = key 
#         self.fer_obj = Fernet(self.key)
#         print("Key: ", self.key)

#         self.salt = b"tyUQW@*A"
#     def encryption(self, token):
#         encrypted_token = self.fer_obj.encrypt(token.encode())
#         encrypted_token = encrypted_token + self.salt + self.key
#         return encrypted_token
    
#     def decryption(self, encrypted_access_token):
#         decrypted_access_token = self.fer_obj.decrypt(encrypted_access_token).decode()
#         return decrypted_access_token
            


    