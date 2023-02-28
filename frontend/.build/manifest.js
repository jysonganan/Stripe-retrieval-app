

import App from '../src/views/App';

import BalanceOverviewView from '../src/views/BalanceOverviewView';


export * from '@stripe/ui-extension-sdk/version';
export const BUILD_TIME = '2023-02-28 20:49:34.859003739 +0530 IST m=+0.011678670'

export {
	
	App,
	
	BalanceOverviewView,
	
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
