import os
import requests
import stripe
import json
import pandas as pd

account_id = ""
stripe.api_key = ""


# Getting Stripe Secret Store API LIst
# secret_list = stripe.apps.Secret.list(
#     scope = {"type": "account"},
#     limit = 5
# )

# print(secret_list)

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
# res = stripe.Account.delete("acct_1Mda6hSJE1rnS3o9")
# print(res)


# 6. Creating a Dataframe
def check_for_account_id(account_id):
    df = pd.read_json(os.path.join("UserData/UserInfo.json"))
    if account_id in df['account_id'].values:
        user_row = df.loc[df['account_id'] == account_id, ['account_id', 'access_token']]
        user_access_token = user_row['access_token'].values[0]
        return user_access_token
    else:
        return False


print(check_for_account_id(""))




