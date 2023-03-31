

import App from '../src/views/App';

import BalanceOverviewView from '../src/views/BalanceOverviewView';

import AppSettings from '../src/views/AppSettings';


export * from '@stripe/ui-extension-sdk/version';
export const BUILD_TIME = '2023-03-31 20:36:45.03450521 +0530 IST m=+0.011746460'

export {
	
	App,
	
	BalanceOverviewView,
	
	AppSettings,
	
};
export default {
  "id": "com.example.stripe-app_-payout",
  "version": "0.0.2",
  "name": "StripeRetrievalApp",
  "icon": "",
  "permissions": [
    {
      "permission": "secret_write",
      "purpose": "Allows storing secrets between page reloads"
    }
  ],
  "app_backend": {
    "webhooks": null
  },
  "ui_extension": {
    "views": [
      {
        "viewport": "stripe.dashboard.home.overview",
        "component": "App"
      },
      {
        "viewport": "stripe.dashboard.balance.overview",
        "component": "BalanceOverviewView"
      },
      {
        "viewport": "settings",
        "component": "AppSettings"
      }
    ],
    "content_security_policy": {
      "connect-src": [
        "https://stripe-backend-k7b4-jayateerthdambal.vercel.app/health-check/",
        "https://stripe-backend-k7b4-jayateerthdambal.vercel.app/get-oauth-link/",
        "https://stripe-backend-k7b4-jayateerthdambal.vercel.app/authorize-oauth/",
        "https://stripe-backend-k7b4-jayateerthdambal.vercel.app/get_payouts/",
        "https://stripe-backend-k7b4-jayateerthdambal.vercel.app/download-report/",
        "https://stripe-backend-k7b4-jayateerthdambal.vercel.app/check-user/",
        "https://stripe-backend-k7b4-jayateerthdambal.vercel.app/deauthorize_user/"
      ],
      "image-src": null,
      "purpose": "Send Data to VercelDeploy"
    }
  }
}
