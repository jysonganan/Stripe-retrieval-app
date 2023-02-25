import requests
import stripe
import json

account_id = "acct_1MavwaSH4jjnFx7c"
api_key = "sk_test_51MavwaSH4jjnFx7cPtFaSOCTvFPR1yTWydwANf1JQNu6u8O00n26tE7Dzd11wsDSpLzpeQ0sMyfZkSj7yyHKVSSV0087g5pNsL"
stripe.api_key = "sk_test_51MavwaSH4jjnFx7cPtFaSOCTvFPR1yTWydwANf1JQNu6u8O00n26tE7Dzd11wsDSpLzpeQ0sMyfZkSj7yyHKVSSV0087g5pNsL"
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
# res = stripe.Payout.create(stripe_account=account_id, api_key=api_key, amount=2000, currency="inr")
# print(res)

# 4. Listing all Customer
res = stripe.Customer.list(limit=2)
# print(res["data"])
name = []
customer_id = []

for i in range(0, len(res["data"])):
    name.append(res["data"][i]["name"])
    customer_id.append(res["data"][i]["id"])

print("Names: ", name)
print("Customer ID: ", customer_id)