import {ContextView, Button, Box, Link} from '@stripe/ui-extension-sdk/ui';
import * as React from 'react';
import {createOAuthState} from '@stripe/ui-extension-sdk/oauth';
import type {ExtensionContextValue} from '@stripe/ui-extension-sdk/context';
import fetchStripeSignature from '@stripe/ui-extension-sdk/signature';


const {useState, useEffect} = React;


const BACKEND_URL = 'http://localhost:5000/validateuser/';

const getRedirectURL = (mode: 'live' | 'test') => `https://dashboard.stripe.com/${mode === 'test' ? 'test/' : ''}apps-oauth/com.example.oauth-example`;

const getAuthURL = (state: string, challenge: string, mode: 'live' | 'test') =>
    `http://localhost:5000/get-oauth-link/?response_type=code&client&redirect&state=${state}&code_challenge=${challenge}&code_challenge_method=S256`;


const OAuthApp = ({environment, userContext}: ExtensionContextValue) => {
    const {mode} = environment;
    const [authURL, setAuthURL] = useState('');
    // const [hasSignedIn, sethasSignedIn] = useState<boolean>(false);
    const [stripeStatus, setStripeStatus] = useState<string>('down');

    const getStatus = async () =>{
        const {status} = await fetch('http://localhost:5000/health-check', {
            method:"GET",
            headers:{
                // 'stripe-signature': await fetchStripeSignature(),
                'Content-type': 'application/json'
            },
            // body:JSON.stringify({
            //     user_id: userContext?.id,
            //     account_id: userContext?.account.id
            // })
        }).then((res)=> res.json())
            .then(result=> setStripeStatus(result=='OK'? 'up': 'down'))
        setStripeStatus(status == 'OK'? 'up': 'down')
    }
    getStatus();
    useEffect(() => {
        // validateUser();

        createOAuthState().then(({state, challenge}) => {
            setAuthURL(getAuthURL(state, challenge, mode));
        });
    }, [mode]);
    return (

        <ContextView title="Payout App[TEST]">
            <Box>Stripe is {stripeStatus}</Box>
            <Button type="primary" href={authURL} target="_blank">Begin Authorize</Button>
        </ContextView>

    );


};
export default OAuthApp;




