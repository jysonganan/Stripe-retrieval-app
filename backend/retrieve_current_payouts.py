import stripe
import numpy as np
import pandas as pd
import datetime

def retrieve_current_payouts(api_key, current_month='', current_year=''):
    stripe.api_key = api_key
    current_month = int(current_month)
    current_year = int(current_year)
    start_date = datetime.datetime(current_year, current_month, 1)
    if current_month == 12:
        end_date = datetime.date(current_year+1, 1, 1) - datetime.timedelta(days=1)
    else:
        end_date = datetime.date(current_year, current_month+1, 1) - datetime.timedelta(days=1)
    start_epoch = int(datetime.datetime(start_date.year, start_date.month, start_date.day).timestamp())
    end_epoch = int(datetime.datetime(end_date.year, end_date.month, end_date.day).timestamp())

    payout_data = stripe.Payout.list(arrival_date={
        'gte': f'{start_epoch}',
        'lt': f'{end_epoch}'
    })
    vals = []
    result = pd.DataFrame()
    for i in range(0, len(payout_data)):
        vals.append(payout_data.data[i]["id"])

    for val in vals:
        transactions = stripe.BalanceTransaction.list(payout=val, limit=100)
        payout_total = transactions['data'][0]['amount'] / 100 * (-1)
        for j in range(1, len(transactions['data'])):
            created = datetime.datetime.fromtimestamp(transactions['data'][j]['created'])
            description = transactions['data'][j]['description']
            amount = transactions['data'][j]['amount'] / 100
            currency = transactions['data'][j]['currency']
            converted_amount = transactions['data'][j]['amount'] / 100
            fees = transactions['data'][j]['fee'] / 100
            net = transactions['data'][j]['net'] / 100

            result = pd.concat([result, pd.DataFrame([val, payout_total, created,
                                                            description, amount, currency,
                                                            converted_amount, fees,
                                                            net]).T], axis=0)
    if result.shape[0] != 0:
        result.columns = ['payout_id', 'payout_total', 'Created', 'Description', 'Amount', 'Currency',
                                'Converted Amount', 'Fees', 'Net']
    return result
