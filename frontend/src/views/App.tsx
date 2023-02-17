import {
  ContextView,
  Button,
} from '@stripe/ui-extension-sdk/ui';
import * as React from 'react';
import {createOAuthState} from '@stripe/ui-extension-sdk/oauth';
import type {ExtensionContextValue} from '@stripe/ui-extension-sdk/context';

const {useState, useEffect} = React;

const clientID = 'ca_NMVdZWTZSaRhb4nrYRxpPwJ3un4nMSqI';
const getRedirectURL = (mode: 'live' | 'test') => `https://dashboard.stripe.com/${
  mode === 'test' ? 'test/' : ''}apps-oauth/com.example.oauth-example`;
const getAuthURL = (state: string, challenge: string, mode: 'live' | 'test') =>
  `http://localhost:5000/oauth/login/?response_type=code&client_id=${clientID}&redirect_uri=${getRedirectURL(mode)}&state=${state}&code_challenge=${challenge}&code_challenge_method=S256`;

  interface TokenData{
    account_id: string;
    access_token: string;
    expires_in: number;
  }


  const OAuthApp = ({environment}: ExtensionContextValue) => {
  const {mode} = environment;
  const [authURL, setAuthURL] = useState('');
  useEffect(() => {
    createOAuthState().then(({state, challenge}) => {
      setAuthURL(getAuthURL(state, challenge, mode));
    });
  }, [mode]);

  return (
    <ContextView title="OAuth">
      <Button type="primary" href={authURL} target="_blank">Begin Authorize</Button>
    </ContextView>
  );
};
export default OAuthApp;

const getTokenFromAuthServer = async ({code, verifier, mode}: {code: string, verifier: string, mode: 'live' | 'test'}): Promise<null | TokenData> => {
  try {
    const response = await fetch(`https://api.example.com/oauth2/token?code=${code}&grant_type=authorization_code&code_verifier=${verifier}&client_id=${clientID}&redirect_uri=${getRedirectURL(mode)}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    });
    if (response.ok) {
      return await response.json();
    }
    throw new Error(await response.text());
  } catch (e) {
    console.error('Unable to retrieve token from authorization server:', (e as Error).message);
    return null;
  }
};

const RetrieveAccessToken = ({environment, oauthContext}: ExtensionContextValue)=> {
  const [tokenData, setTokenData] = useState<TokenData | null>(null);
  const code = oauthContext?.code || '';
  const verifier = oauthContext?.verifier || '';
  const {mode} = environment;
}