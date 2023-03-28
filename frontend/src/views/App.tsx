import {ContextView, Button, Box, Badge, Banner} from '@stripe/ui-extension-sdk/ui';
import * as React from 'react';
import {createOAuthState} from '@stripe/ui-extension-sdk/oauth';
import type {ExtensionContextValue} from '@stripe/ui-extension-sdk/context';
import fetchStripeSignature from '@stripe/ui-extension-sdk/signature';


const {useState, useEffect} = React;


const BACKEND_URL = 'https://stripe-backend-k7b4-jayateerthdambal.vercel.app/';
// const BACKEND_URL = 'http://localhost:5000/'

const getRedirectURL = (mode: 'live' | 'test') => `https://dashboard.stripe.com/${mode === 'test' ? 'test/' : 'live/'}apps-oauth/com.example.oauth-example`;

const getAuthURL = (state: string, challenge: string, mode: 'live' | 'test') =>
    BACKEND_URL + `/get-oauth-link/?response_type=code&client&redirect&state=${state}&code_challenge=${challenge}&mode=${mode}&code_challenge_method=S256`;


const OAuthApp = ({environment, userContext}: ExtensionContextValue) => {
    const {mode} = environment;
    const [authURL, setAuthURL] = useState('');
    const [stripeStatus, setStripeStatus] = useState<string>('down');
    const [hasSignedIn, setHasSignedIn] = useState<boolean>(true);

    useEffect(() => {
        createOAuthState().then(({state, challenge}) => {
            setAuthURL(getAuthURL(state, challenge, mode));
        });
        const getStatus = async () => {
            const data = await fetch(BACKEND_URL + 'health-check/', {
                method: "POST",
                headers: {
                    'stripe-signature': await fetchStripeSignature(),
                    'Content-type': 'application/json',
    
                },
                body: JSON.stringify({
                    user_id: userContext?.id,
                    account_id: userContext?.account.id
                })
            }).then(response => response.json())
                .then(data => {
                    setHasSignedIn(data.hasSignedIn);
                    setStripeStatus(data.result == 'OK' ? 'Up' : 'Down');
                })
    
        }
        getStatus();        
        
    }, [mode]);
    return (

        <ContextView title="PayoutView App">
            
            {hasSignedIn &&
                <Badge type="info">You are Already Authorized to Our App!</Badge>
            }
            {!hasSignedIn &&
                <Banner
                    type="critical"
                    title="You have not Authorized!"
                    description="Please Authorize before you continue"
                    actions={
                        <Button type="primary" href={authURL} target="_blank">Begin Authorize</Button>
                    }
                />
            }
        </ContextView>

    )
        ;


};
export default OAuthApp;




