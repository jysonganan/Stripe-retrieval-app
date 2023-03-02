import stripe
import numpy as np
import pandas as pd
import datetime

api_key = ""


def retrieve_current_payouts(api_key, current_month='01', current_year='2023'):
    stripe.api_key = api_key

    arrival_dates = [
        datetime.datetime.fromtimestamp(stripe.Payout.list(limit=10)['data'][i]['arrival_date']).strftime("%m/%d/%Y")
        for i in range(len(stripe.Payout.list()['data']))]
    arrival_dates_month_year = list(map(lambda x: x[:2] + ' ' + x[-4:], arrival_dates))
    current_pay_out_ids = np.where(np.array(arrival_dates_month_year) == current_month + ' ' + current_year)
    current_pay_out_ids = [stripe.Payout.list()['data'][i]['id'] for i in current_pay_out_ids[0]]

    output_df = pd.DataFrame([])
    sec_output_df = pd.DataFrame([])
    for pay_out_id in current_pay_out_ids:
        transactions = stripe.BalanceTransaction.list(payout=pay_out_id, limit=10)
        payout_total = transactions['data'][0]['amount'] / 100 * (-1)

        for i in range(1, len(transactions['data'])):
            created = datetime.datetime.fromtimestamp(transactions['data'][i]['created'])
            description = transactions['data'][i]['description']
            amount = transactions['data'][i]['amount'] / 100
            currency = transactions['data'][i]['currency']
            converted_amount = transactions['data'][i]['amount'] / 100
            fees = transactions['data'][i]['fee'] / 100
            net = transactions['data'][i]['net'] / 100

            output_df = pd.concat([output_df, pd.DataFrame([pay_out_id, payout_total, created,
                                                            description, amount, currency,
                                                            converted_amount, fees,
                                                            net]).T], axis=0)

            sec_output_df = pd.concat([sec_output_df, pd.DataFrame([created, description, amount, net]).T], axis=0)
    if output_df.shape[0] != 0: 
       output_df.columns = ['payout_id', 'payout_total', 'Created', 'Description', 'Amount', 'Currency',
                            'Converted Amount', 'Fees', 'Net']
    if sec_output_df.shape[0] != 0:
       sec_output_df.columns = ['Created', 'Description', 'Amount', 'Net']
    sec_output_df_json = sec_output_df.to_json(orient='records')
    return output_df


if __name__ == '__main__':
    res = retrieve_current_payouts(api_key=api_key)
