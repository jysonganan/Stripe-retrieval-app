import {Box, ContextView, ListItem, List, Button, Badge} from "@stripe/ui-extension-sdk/ui";
import type {ExtensionContextValue} from "@stripe/ui-extension-sdk/context";
import {useEffect, useState} from "react";
import {createOAuthState} from "@stripe/ui-extension-sdk/oauth";
import fetchStripeSignature from "@stripe/ui-extension-sdk/signature";
import * as React from "react";


// Download Endpoint

const getAuthURL = (state: string, challenge: string, mode: 'live' | 'test') =>
    `http://localhost:5000/get-oauth-link/?response_type=code&client&redirect&state=${state}&code_challenge=${challenge}&mode=${mode}&code_challenge_method=S256`;

const BalanceOverviewView = ({userContext, environment}: ExtensionContextValue) => {
    const {mode} = environment;
    const downloadEndpoint = `http://localhost:5000/download-report/?account_id=${userContext?.account.id}`;
    let viewData: object = {}
    const [data, setMyData] = useState([]);
    const [authURL, setAuthURL] = useState('');
    const [hasSignedIn, setHasSignedIn] = useState(true)

    useEffect(() => {
        createOAuthState().then(({state, challenge}) => {
            setAuthURL(getAuthURL(state, challenge, mode));
        });

        const getStatus = async () => {
            const data = await fetch('http://localhost:5000/health-check', {
                method: "POST",
                headers: {
                    'stripe-signature': await fetchStripeSignature(),
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    user_id: userContext?.id,
                    account_id: userContext?.account.id
                })
            }).then(response => response.json())
                .then(data => setHasSignedIn(data.hasSignedIn))

        }
        getStatus();
        fetch('http://localhost:5000/get_payouts/', {
            method: 'POST',
            headers: {"Content-type": 'application/json'},
            body: JSON.stringify({account_id: userContext?.account.id})
        }).then(response => response.json())
            .then(data => {
                setMyData(JSON.parse(data));
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


    return (
        <ContextView title="User Details">
            {hasSignedIn && <List>
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
            </List>}

            <Box css={{stack: 'y', gap: 'large', margin: 'large'}}>
                {hasSignedIn &&
                    <Button href={downloadEndpoint} type="primary" css={{width: 'fill', alignX: 'center'}}
                            target="_blank">Download
                        CSV</Button>
                }
                {!hasSignedIn &&
                    <Badge type="urgent">Please Authorize before beginning</Badge>
                }
                {!hasSignedIn &&
                    <Button type="primary" href={authURL} target="_blank">Begin Authorize</Button>
                }

            </Box>

        </ContextView>
    )
};

export default BalanceOverviewView;

