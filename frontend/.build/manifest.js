

import App from '../src/views/App';

import BalanceOverviewView from '../src/views/BalanceOverviewView';

import AppSettings from '../src/views/AppSettings';


export * from '@stripe/ui-extension-sdk/version';
export const BUILD_TIME = '2023-03-13 15:52:59.312979223 +0530 IST m=+0.052115062'

export {
	
	App,
	
	BalanceOverviewView,
	
	AppSettings,
	
};
export default {
  "id": "com.example.basic-oauth2-test",
  "version": "0.0.2",
  "name": "Basic-OAuth2 Test",
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
    "actions": [],
    "content_security_policy": {
      "connect-src": null,
      "image-src": null,
      "purpose": ""
    }
  },
  "post_install_action": null,
  "constants": null
}
