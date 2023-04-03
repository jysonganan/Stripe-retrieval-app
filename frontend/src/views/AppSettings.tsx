import {
    Box,
    Button,
    Banner,
    SettingsView,
    Spinner
} from "@stripe/ui-extension-sdk/ui";
import type { ExtensionContextValue } from "@stripe/ui-extension-sdk/context";
import { useState, useEffect } from "react";
import { createOAuthState } from '@stripe/ui-extension-sdk/oauth';

const BACKEND_URL = 'https://stripe-backend-k7b4-jayateerthdambal.vercel.app/';
// const BACKEND_URL = 'http://localhost:5000/'

const getAuthURL = (state: string, challenge: string, mode: 'live' | 'test') =>
    BACKEND_URL + `/get-oauth-link/?response_type=code&client&redirect&state=${state}&code_challenge=${challenge}&mode=${mode}&code_challenge_method=S256`;


const AppSettings = ({ userContext, environment }: ExtensionContextValue) => {
    const { mode } = environment;
    const [deauth, setDeauth] = useState('');
    const [userExist, setUserExist] = useState<boolean>();
    const [authURL, setAuthURL] = useState('');
    const [spinnerOpen, setSpinnerOpen] = useState<boolean>(false)
    const [loadingSpinner, setLoadingSpinner] = useState<boolean>(true)
    const deauthorize_user = async () => {
        setSpinnerOpen(true)
        const data = await fetch(BACKEND_URL + 'deauthorize_user/', {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                user_id: userContext?.id,
                account_id: userContext?.account.id,
                mode: mode
            })
        }).then(response => response.json())
            .then(data => setUserExist(data.userExist))
    }

    useEffect(() => {
        createOAuthState().then(({ state, challenge }) => {
            setAuthURL(getAuthURL(state, challenge, mode));
        });
        const getUserStatus =async () => {
            const response = await fetch(BACKEND_URL + 'check-user/', {
                method: "POST",
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    account_id: userContext?.account.id,
                    mode: mode
                })
    
            })
            if (response.ok){
                setLoadingSpinner(false)
            }
            const data = await response.json();
            setUserExist(data.userExist);
        }
        getUserStatus();
        
    }, [mode]);


    return (
        <SettingsView onSave={() => {
        }}>
            <Box css={{
                stack: 'z',
                alignX: 'center',
                alignY: 'center'
            }}>
                {loadingSpinner &&
                    <Spinner size="large" />
                }
            </Box>
            <Box
                css={{
                    background: "container",
                    borderRadius: "medium",
                    padding: "large",
                }}>
                {userExist && !spinnerOpen &&
                    <Banner
                        type="critical"
                        title="Remove Authorization"
                        description="You will no longer able to access your data through App"
                        actions={
                            <Button onPress={deauthorize_user} type="destructive">Remove Authorization</Button>
                        }
                    />
                }
                {userExist && spinnerOpen &&
                    <Banner
                        type="caution"
                        title="Removing Authorization"
                        description="Don't worry you can add authorization again after this prcoess gets complete."
                        actions={
                            <Spinner size="large" />
                        }
                    />
                }

                {!userExist && !loadingSpinner &&
                    <Banner
                        type="default"
                        title="Begin Authorization"
                        description="You are not authorized your account with our servers, Please begin the Authorization Process"
                        actions={
                            <Button href={authURL} type="primary">Begin Authorization</Button>
                        }
                    />
                }
            </Box>
        </SettingsView>
    );
};

export default AppSettings;
