import { Box, ContextView, Inline, ListItem, List } from "@stripe/ui-extension-sdk/ui";
import type { ExtensionContextValue } from "@stripe/ui-extension-sdk/context";
import {useEffect, useState} from "react";

const BalanceOverviewView = ({userContext, environment}: ExtensionContextValue) => {
    const [myData, setMyData] = useState(null);
        useEffect(() => {
            async function fetchData(){
                const response = await fetch('http://localhost:5000/get_customers/', {
                    method: "POST",
                    headers: {'Content-type': 'application/json'},
                    body: JSON.stringify({account_id: userContext?.account.id})
                })
                const data = await response.json()
                setMyData(data);
            }
            fetchData();
        });

        console.log(myData);
        return(
            <ContextView title="User Details">

            </ContextView>
        )
};

export default BalanceOverviewView;
