import fetchStripeSignature from '@stripe/ui-extension-sdk/signature';
import type {ExtensionContextValue} from '@stripe/ui-extension-sdk/context';
import * as React from "react";

const AuthView = ({ userContext }: ExtensionContextValue) => {
  const reqtoBackend = async () => {
    const signaturePayload = {
      user_id: userContext?.id,
      account_id: userContext?.account.id
    };
    return fetch('http://localhost:5000/verify_user/', {
      method: "POST",
      headers: {
        'Stripe-Signature': await fetchStripeSignature(),
        'Content-type': 'application/json',
      },
      // Including Account ID and User ID in the body
      body:JSON.stringify({
        ...signaturePayload
      }),
    });
  }

};

export default AuthView;
