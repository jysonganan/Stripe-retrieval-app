import stripe
import numpy as np
import pandas as pd
import datetime
import time


def retrieve_current_payouts(api_key, current_month='', current_year=''):
    stripe.api_key = api_key
    dt = datetime.datetime(int(current_year), int(current_month), 1)
    epoch_time = int(time.mktime(dt.timetuple()))
    new_epoch_time = dt + datetime.timedelta(days=30)
    new_epoch_time = int(new_epoch_time.timestamp())

    data_2 = stripe.Payout.list(arrival_date={
        'gte': f'{epoch_time}',
        'lt': f'{new_epoch_time}'
    })
    vals = []
    result = pd.DataFrame()
    for i in range(0, len(data_2)):
        vals.append(data_2.data[i]["id"])

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

