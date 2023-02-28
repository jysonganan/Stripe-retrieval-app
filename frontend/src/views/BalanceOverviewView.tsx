import {Box, ContextView, Divider, ListItem, List, Button} from "@stripe/ui-extension-sdk/ui";
import type {ExtensionContextValue} from "@stripe/ui-extension-sdk/context";
import {useEffect, useState} from "react";

// Download Endpoint


const BalanceOverviewView = ({userContext, environment}: ExtensionContextValue) => {
    const downloadEndpoint = "http://localhost:5000/download-report/";
    let viewData: object = {}
    const [data, setMyData] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/get_payouts/', {
            method: 'POST',
            headers: {"Content-type": 'application/json'},
            body: JSON.stringify({account_id: userContext?.account.id})
        }).then(response => response.json())
            .then(data => {
                setMyData(JSON.parse(data))
            })
    }, []);
    let created: never[] = []
    let descr: never[] = []
    let amount: never[] = []
    let net: never[] = []
    const values = Object.values(data)
    for (let val in values) {
        created.push(values[val].Created)
        descr.push(values[val].Description)
        net.push(values[val].Net)
    }
    let new_created = created.map(create => new Date(create).toLocaleString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    }))

    // 2. Downloading A CSV File
    const downloadCSV = () => {
        fetch('http://localhost:5000/download-report/')
            .then(response => response.blob())
            .then(blob => {
                const url = window.URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', 'PayoutData.csv');
                document.body.appendChild(link);
                link.click();


            })
    }

    return (
        <ContextView title="User Details">
            <List>
                <ListItem
                    value={net[0]}
                    id="2"
                    title={<Box>{new_created[0]}</Box>}
                    secondaryTitle={<Box>{descr[0]}</Box>}
                />
                <ListItem
                    value={net[1]}
                    id="2"
                    title={<Box>{new_created[1]}</Box>}
                    secondaryTitle={<Box>{descr[1]}</Box>}
                />
                <ListItem
                    value={net[2]}
                    id="2"
                    title={<Box>{new_created[2]}</Box>}
                    secondaryTitle={<Box>{descr[2]}</Box>}
                />
                <ListItem
                    value={net[3]}
                    id="2"
                    title={<Box>{new_created[3]}</Box>}
                    secondaryTitle={<Box>{descr[3]}</Box>}
                />
                <ListItem
                    value={net[4]}
                    id="2"
                    title={<Box>{new_created[4]}</Box>}
                    secondaryTitle={<Box>{descr[4]}</Box>}
                />
                <ListItem
                    value={net[5]}
                    id="2"
                    title={<Box>{new_created[5]}</Box>}
                    secondaryTitle={<Box>{descr[5]}</Box>}
                />
                <ListItem
                    value={net[6]}
                    id="2"
                    title={<Box>{new_created[6]}</Box>}
                    secondaryTitle={<Box>{descr[6]}</Box>}
                />
                <ListItem
                    value={net[7]}
                    id="2"
                    title={<Box>{new_created[7]}</Box>}
                    secondaryTitle={<Box>{descr[7]}</Box>}
                />
                <ListItem
                    value={net[8]}
                    id="2"
                    title={<Box>{new_created[8]}</Box>}
                    secondaryTitle={<Box>{descr[8]}</Box>}
                />


            </List>

            <Box css={{stack: 'y', gap: 'large', margin: 'large'}}>
                <Button href={downloadEndpoint} type="primary" css={{width: 'fill', alignX: 'center'}} target="_blank">Download
                    CSV</Button></Box>
        </ContextView>
    )
};

export default BalanceOverviewView;

