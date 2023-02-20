import {
  ContextView,
  Button,
  SignInView
} from '@stripe/ui-extension-sdk/ui';
import * as React from 'react';
import {createOAuthState} from '@stripe/ui-extension-sdk/oauth';
import type {ExtensionContextValue} from '@stripe/ui-extension-sdk/context';

const {useState, useEffect} = React;

const clientID = 'ca_NMVdZWTZSaRhb4nrYRxpPwJ3un4nMSqI';
const getRedirectURL = (mode: 'live' | 'test') => `https://dashboard.stripe.com/${
  mode === 'test' ? 'test/' : ''}apps-oauth/com.example.oauth-example`;
const getAuthURL = (state: string, challenge: string, mode: 'live' | 'test') =>
  `http://localhost:5000/get-oauth-link/?response_type=code&client&redirect&state=${state}&code_challenge=${challenge}&code_challenge_method=S256`;

  interface TokenData{
    account_id: string;
    access_token: string;
    expires_in: number;
  }
  


  const OAuthApp = ({environment, oauthContext}: ExtensionContextValue) => {
  const {mode} = environment;
  const [authURL, setAuthURL] = useState('');
  
  const [tokenData, setTokenData] = useState<TokenData | null>(null);
  const code = oauthContext?.code || '';
  const verifier = oauthContext?.verifier || '';

  // 1. Getting OAuth URL
  useEffect(() => {
    createOAuthState().then(({state, challenge}) => {
      setAuthURL(getAuthURL(state, challenge, mode));
    });
  }, [mode]);


  return (
    <ContextView title="Getting Started with OAuth">
      <Button type="primary" href={authURL} target="_blank">Begin Authorize</Button>
    </ContextView>
  );
};
export default OAuthApp;




