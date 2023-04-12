

import App from '../src/views/App';

import BalanceOverviewView from '../src/views/BalanceOverviewView';

import AppSettings from '../src/views/AppSettings';


export * from '@stripe/ui-extension-sdk/version';
export const BUILD_TIME = '2023-04-11 22:06:32.571776 -0700 PDT m=+0.036500546'

export {
	
	App,
	
	BalanceOverviewView,
	
	AppSettings,
	
};
export default {
  "id": "com.example.myStripePayout",
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
    "actions": null,
    "content_security_policy": {
      "connect-src": [
        "https://stripe-retrieval-app.vercel.app/health-check/",
        "https://stripe-retrieval-app.vercel.app/get-oauth-link/",
        "https://stripe-retrieval-app.vercel.app/authorize_oauth/",
        "https://stripe-retrieval-app.vercel.app/get_payouts/",
        "https://stripe-retrieval-app.vercel.app/download-report/",
        "https://stripe-retrieval-app.vercel.app/check-user/",
        "https://stripe-retrieval-app.vercel.app/deauthorize_user/"
      ],
      "image-src": null,
      "purpose": "Send Data to VercelDeploy"
    }
  },
  "post_install_action": null,
  "constants": {
    "BACKEND_URL": "https://stripe-retrieval-app.vercel.app/"
  }
}
