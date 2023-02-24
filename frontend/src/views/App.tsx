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
    const [result, setResult] = useState(null)
    const [hasSignedIn, setHasSignedIn] = useState<boolean>(false);
    const getStatus = async () =>{
        const data = await fetch('http://localhost:5000/health-check', {
            method:"POST",
            headers:{
                'stripe-signature': await fetchStripeSignature(),
                'Content-type': 'application/json'
            },
            body:JSON.stringify({
                user_id: userContext?.id,
                account_id: userContext?.account.id
            })
        }).then(response => response.json())
            .then(data => setHasSignedIn(data.hasSignedIn))
        console.log(hasSignedIn)


        setStripeStatus(hasSignedIn? 'up': 'down')

        // setStripeStatus(status == 'OK'? 'up': 'down')
    }
    const getPayoutsDetails = async () =>{
        const data = await fetch('http://localhost:5000/get_customers/', {
            method: "GET",
            body:JSON.stringify({
                account_id: userContext?.account.id
            })
        })
    }
    getPayoutsDetails();
    getStatus();
    useEffect(() => {
        // validateUser();
        if(hasSignedIn){
            // Getting Payouts Details
        }        createOAuthState().then(({state, challenge}) => {
            setAuthURL(getAuthURL(state, challenge, mode));
        });
    }, [mode]);
    return (

        <ContextView title="Payout App[TEST]">
            <Box>Stripe is {stripeStatus}</Box>
            {!hasSignedIn &&

            <Button type="primary" href={authURL} target="_blank">Begin Authorize</Button>
            }
        </ContextView>

    );


};
export default OAuthApp;




