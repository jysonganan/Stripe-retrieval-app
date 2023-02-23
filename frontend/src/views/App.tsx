import { ContextView, Button, Box, Link } from '@stripe/ui-extension-sdk/ui';
import * as React from 'react';
import { createOAuthState } from '@stripe/ui-extension-sdk/oauth';
import type { ExtensionContextValue } from '@stripe/ui-extension-sdk/context';
import fetchStripeSignature from '@stripe/ui-extension-sdk/signature';


const { useState, useEffect } = React;


const BACKEND_URL = 'http://localhost:8000/validateuser/';

const getRedirectURL = (mode: 'live' | 'test') => `https://dashboard.stripe.com/${mode === 'test' ? 'test/' : ''}apps-oauth/com.example.oauth-example`;

const getAuthURL = (state: string, challenge: string, mode: 'live' | 'test') =>
  `http://localhost:5000/get-oauth-link/?response_type=code&client&redirect&state=${state}&code_challenge=${challenge}&code_challenge_method=S256`;


const OAuthApp = ({ environment, userContext }: ExtensionContextValue) => {
  const { mode } = environment;
  const [authURL, setAuthURL] = useState('');
  const [hasSignedIn, sethasSignedIn] = useState<boolean>(false);


  // 1. Getting OAuth URL


  // 2. Verify User
  const payload = JSON.stringify({
    user_id: userContext?.id,
    account_id: userContext?.account.id
  });
  const validateUser = async () => {
    try {
      const response = await fetch(BACKEND_URL, {
        method: "POST",
        headers: {
          'Content-type': 'application/json',
          'Stripe-Signature': await fetchStripeSignature(),
          'Access-Control-Allow-Origin': '*',
        },
        body: payload
      });
      const body = await response.json()
      sethasSignedIn(body.isActive);
      console.log(body);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    validateUser();

    createOAuthState().then(({ state, challenge }) => {
      setAuthURL(getAuthURL(state, challenge, mode));
    });
  }, [mode]);
  return (
    <ContextView title="Payout App[TEST]">
      {hasSignedIn && (
        <Box>
          <Box css={{ stack: 'y', gap: 'medium', distribute: 'space-between', alignY: 'center', width: 'fill' }}>
            <Button type="primary" href={authURL} target="_blank">Begin Authorize</Button>
          </Box>
        </Box>


      )}
      {!hasSignedIn && (
        <Box>
          
          <Box css={{ stack: 'y', gap: 'medium', distribute: 'space-between', alignY: 'center', width: 'fill' }}>
            <Box css={{ fontWeight: 'semibold' }}>Thanks for signing up!</Box>
            <Box>This user  has access to the rest of the Stripe App</Box>
          </Box>
        </Box>
      )}
    </ContextView>

  );



};
export default OAuthApp;




