

import App from '../src/views/App';

import CustomerDetailView from '../src/views/CustomerDetailView';


export * from '@stripe/ui-extension-sdk/version';
export const BUILD_TIME = '2023-02-22 10:12:27.16384986 +0530 IST m=+0.027963585'

export {
	
	App,
	
	CustomerDetailView,
	
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
        "viewport": "stripe.dashboard.customer.detail",
        "component": "CustomerDetailView"
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
