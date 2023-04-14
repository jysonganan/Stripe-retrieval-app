import {
    ContextView,
    Button,
    Box,
    Badge,
    Banner,
    Spinner
} from '@stripe/ui-extension-sdk/ui';
import * as React from 'react';
import {createOAuthState} from '@stripe/ui-extension-sdk/oauth';
import type {ExtensionContextValue} from '@stripe/ui-extension-sdk/context';
import fetchStripeSignature from '@stripe/ui-extension-sdk/signature';


const {useState, useEffect} = React;

const OAuthApp = ({environment, userContext}: ExtensionContextValue) => {
    // @ts-ignore
    const BACKEND_URL = environment.constants.BACKEND_URL;
    const getAuthURL = (state: string, challenge: string, mode: 'live' | 'test') =>
        BACKEND_URL + `get-oauth-link/?response_type=code&client&redirect&state=${state}&code_challenge=${challenge}&mode=${mode}&code_challenge_method=S256`;
    const {mode} = environment;
    const [authURL, setAuthURL] = useState('');
    const [hasSignedIn, setHasSignedIn] = useState<boolean>(true);
    const [spinnerOpen, setSpinnerOpen] = useState<boolean>(true)
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
                    account_id: userContext?.account.id,
                    mode: mode
                })
            })
            if (data.ok) {
                setSpinnerOpen(false);
            }
            const result = await data.json();
            setHasSignedIn(result.hasSignedIn);
        }
        getStatus();
    }, [mode]);
    return (

        <ContextView title="PayoutView App">

            {hasSignedIn && !spinnerOpen &&
                <Badge type="info">You are Already Authorized to Our App!</Badge>
            }
            {!hasSignedIn &&
                <Banner
                    type="critical"
                    title="You have not Authorized!"
                    description="Please Authorize before you continue"
                    actions={
                        <Button type="primary" href={authURL}>Begin Authorize</Button>
                    }
                />
            }

            <Box css={{
                stack: 'z',
                alignX: 'center',
                alignY: 'center'
            }}>
                {spinnerOpen &&
                    <Spinner size="large"/>
                }
            </Box>
        </ContextView>

    );
};
export default OAuthApp;
