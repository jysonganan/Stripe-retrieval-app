import requests
import stripe
import json

stripe.api_key = "sk_test_51MavwaSH4jjnFx7cPtFaSOCTvFPR1yTWydwANf1JQNu6u8O00n26tE7Dzd11wsDSpLzpeQ0sMyfZkSj7yyHKVSSV0087g5pNsL"
# Getting Stripe Secret Store API LIst
secret_list = stripe.apps.Secret.list(
    scope = {"type": "account"},
    limit = 5
)

print(secret_list)