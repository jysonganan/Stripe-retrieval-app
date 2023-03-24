import {
    Box,
    Button,
    Banner,
    SettingsView,
} from "@stripe/ui-extension-sdk/ui";
import type {ExtensionContextValue} from "@stripe/ui-extension-sdk/context";
import {useState} from "react";
const AppSettings = ({userContext, environment}: ExtensionContextValue) => {
    const [deauth, setDeauth] = useState('')
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
            .then(data => console.log(data))
    }
    return (
        <SettingsView onSave={() => {
        }}>
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
            </Box>
        </SettingsView>
    );
};

export default AppSettings;
