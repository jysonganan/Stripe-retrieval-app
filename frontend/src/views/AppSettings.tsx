import {
    Box,
    Button,
    Banner,
    Inline,
    SettingsView,
} from "@stripe/ui-extension-sdk/ui";
import type { ExtensionContextValue } from "@stripe/ui-extension-sdk/context";
import { useEffect, useState } from "react";
import { createOAuthState } from "@stripe/ui-extension-sdk/oauth";

const getAuthURL = (state: string, challenge: string, mode: 'live' | 'test') =>
    `http://localhost:5000/get-oauth-link/?response_type=code&client&redirect&state=${state}&code_challenge=${challenge}&mode=${mode}&code_challenge_method=S256`;


const AppSettings = ({ userContext, environment }: ExtensionContextValue) => {
    const [deauth, setDeauth] = useState<boolean>()
    const [authURL, setAuthURL] = useState('');
    const { mode } = environment;
    useEffect(() =>{
        createOAuthState().then(({ state, challenge }) => {
            setAuthURL(getAuthURL(state, challenge, mode));
        });
    });
    const check_user = async () => {
        const data = await fetch('http://localhost:5000/deauthorize_user/', {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                user_id: userContext?.id,
                account_id: userContext?.account.id
            })
        }).then(response => response.json())
            .then(data => setDeauth(data.result))
    }

    return (
        <SettingsView onSave={() => {
        }}>
            {!deauth &&
                <Box
                    css={{
                        background: "container",
                        borderRadius: "medium",
                        padding: "large",
                    }}>
                    <Banner
                        type="critical"
                        title="Remove Authorization"
                        description="You will no longer able to access your data through App"
                        actions={
                            <Button onPress={check_user} type="destructive">Remove Authorization</Button>
                        }
                    />
                </Box>}

            {deauth &&
                <Box
                    css={{
                        background: "container",
                        borderRadius: "medium",
                        padding: "large",
                    }}>
                    <Banner
                        type="default"
                        title="You have successfully Removed Authorization!"
                        description="To continuw with the App, try Authorizing yourself again!"
                        actions={
                            <Button type="primary" href={authURL} target="_blank">Begin Authorize</Button>
                        }
                    />
                </Box>}
        </SettingsView>
    );
};

export default AppSettings;
