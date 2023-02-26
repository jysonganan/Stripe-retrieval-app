import {Box, ContextView, Inline, ListItem, List} from "@stripe/ui-extension-sdk/ui";
import type {ExtensionContextValue} from "@stripe/ui-extension-sdk/context";
import {useEffect, useState} from "react";

const BalanceOverviewView = ({userContext, environment}: ExtensionContextValue) => {
    let viewData: object = {}
    const [data, setMyData] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/get_customers/', {
            method: 'POST',
            headers: {"Content-type": 'application/json'},
            body: JSON.stringify({account_id: userContext?.account.id})
        }).then(response => response.json())
            .then(data => {
                setMyData(data)
            })
    }, []);
    let customer_ids = []
    let customer_names = []
    for (const key in data) {
        let values = Object.values(data)
        customer_ids = JSON.parse(values[0].split(", "));
        customer_names = JSON.parse(values[1].split(", "))
    }
    console.log(customer_ids)
    return (
        <ContextView title="User Details">
            <List>
                <ListItem
                    value="$1200.00"
                    id="2"
                    title={<Box>{customer_names[0]}</Box>}
                    secondaryTitle={<Box>{customer_ids[0]}</Box>}
                />
                <ListItem
                value="$1000.00"
                id="2"
                title={<Box>{customer_names[1]}</Box>}
                secondaryTitle={<Box>{customer_ids[1]}</Box>}
            />
            </List>
        </ContextView>
    )
};

export default BalanceOverviewView;
