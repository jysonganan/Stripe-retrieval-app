import { ContextView, Button, Box} from '@stripe/ui-extension-sdk/ui';
import * as React from 'react';
import { createOAuthState } from '@stripe/ui-extension-sdk/oauth';
import type { ExtensionContextValue } from '@stripe/ui-extension-sdk/context';
import fetchStripeSignature from '@stripe/ui-extension-sdk/signature';


const { useState, useEffect } = React;
const [hasSignedIn, sethasSignedIn] = useState<boolean>(false);

const BACKEND_URL = 'http://localhost:5000/verify_user/';

const getRedirectURL = (mode: 'live' | 'test') => `https://dashboard.stripe.com/${mode === 'test' ? 'test/' : ''}apps-oauth/com.example.oauth-example`;

const getAuthURL = (state: string, challenge: string, mode: 'live' | 'test') =>
  `http://localhost:5000/get-oauth-link/?response_type=code&client&redirect&state=${state}&code_challenge=${challenge}&code_challenge_method=S256`;


const OAuthApp = ({ environment, userContext }: ExtensionContextValue) => {
  const { mode } = environment;
  const [authURL, setAuthURL] = useState('');


  // 1. Getting OAuth URL


  // 2. Verify User
  const payload = JSON.stringify({
    user_id: userContext?.id,
    account_id: userContext?.account.id
  });
  const validateUser= async() =>{
    try{
      const response = await fetch(BACKEND_URL, {
        method: "POST",
        headers:{
          'Content-type': 'application/json',
          'Stripe-Signature': await fetchStripeSignature(),
        },
        body: payload
      });
      const body = await response.json()
    
    }catch(error){
      console.error(error);
    }
  };

  useEffect(() => {
    validateUser();
    if(!hasSignedIn){
      
    }
    createOAuthState().then(({ state, challenge }) => {
      setAuthURL(getAuthURL(state, challenge, mode));
    });
  }, [mode]);
  return (
    <ContextView title="Payout App[TEST]">
      <Box css={{padding:"large"}}>

      </Box>
      {/* <Button type="primary" href={authURL} target="_blank">Begin Authorize</Button> */}

    </ContextView>

  );



};
export default OAuthApp;




