import { Box, ContextView, ListItem, List, Button, Banner, Badge, FormFieldGroup, TextField } from "@stripe/ui-extension-sdk/ui";
import type { ExtensionContextValue } from "@stripe/ui-extension-sdk/context";
import { useEffect, useState } from "react";
import { createOAuthState } from "@stripe/ui-extension-sdk/oauth";
import fetchStripeSignature from "@stripe/ui-extension-sdk/signature";
import * as React from "react";


const BACKEND_URL = 'https://stripe-backend-k7b4-jayateerthdambal.vercel.app/';
// const BACKEND_URL = 'http://localhost:5000/'

const getAuthURL = (state: string, challenge: string, mode: 'live' | 'test') =>
    `${BACKEND_URL}get-oauth-link/?response_type=code&client&redirect&state=${state}&code_challenge=${challenge}&mode=${mode}&code_challenge_method=S256`;

const BalanceOverviewView = ({ userContext, environment }: ExtensionContextValue) => {
    const maxLengthForMonth: number = 2
    const maxLengthForYear: number = 4
    const { mode } = environment;
    let viewData: object = {}
    const [data, setMyData] = useState([]);
    const [authURL, setAuthURL] = useState('');
    const [hasSignedIn, setHasSignedIn] = useState(true)
    const [monthValue, setMonthValue] = useState('');
    const [yearValue, setYearValue] = useState('');
    const [gotPayoutData, setPayoutData] = useState<boolean>()
    const downloadEndpoint = `${BACKEND_URL}download-report/?account_id=${userContext?.account.id}&current_month=${monthValue}&current_year=${yearValue}`;

    useEffect(() => {
        createOAuthState().then(({ state, challenge }) => {
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
                    account_id: userContext?.account.id
                })
            }).then(response => response.json())
                .then(data => {
                    setHasSignedIn(data.hasSignedIn);

                })
        }

        getStatus();
    }, []);


    // Handling DateForm Data
    const monthValueHandler = (event) => {
        setMonthValue(event.target.value);
    }
    const yearValueHandler = (event) => {
        setYearValue(event.target.value);
    }

    const handleSubmit = async (event) => {
        // event.preventDefault();
        const response = await fetch(BACKEND_URL + 'get_payouts/', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                month: monthValue,
                year: yearValue,
                account_id: userContext?.account.id,
                mode: mode
            })
        })
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json()
        setMyData(JSON.parse(data.output_df_json));
        setHasSignedIn(data.hasSignedIn);
        setPayoutData(data.hasData);
        console.log(gotPayoutData)
    }

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
            {hasSignedIn &&
                <Box css={{
                    padding: 'medium',
                    color: 'primary',
                    borderRadius: 'large',

                }}>
                    <FormFieldGroup legend="Enter Month and Year" description="Enter the Year and Month from which you want to fetch data">
                        <TextField type="number" onChange={monthValueHandler} maxLength={maxLengthForMonth} label="Month" name="month" placeholder="MM" hiddenElements={['label']} />
                        <TextField type="number" onChange={yearValueHandler} maxLength={maxLengthForYear} label="Year" name="year" placeholder="YYYY" hiddenElements={['label']} />
                    </FormFieldGroup>
                    <Box css={{
                        stack: 'z',
                        alignX: 'center',
                        alignY: 'center',
                        margin: 'medium'
                    }}>
                        <Button type="primary" onPress={handleSubmit}>Get Data</Button>
                    </Box>

                </Box>
            }
            {!gotPayoutData && !data.length &&
                <Badge type="info">
                There is no Data Present for this Month and Year
              </Badge>
              
            }
            {gotPayoutData && hasSignedIn && <List>
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

            <Box css={{ stack: 'y', gap: 'large', margin: 'large' }}>
                {gotPayoutData &&
                    <Button href={downloadEndpoint} type="primary" css={{ width: 'fill', alignX: 'center' }}
                        target="_blank">Download
                        CSV</Button>
                }

                {!hasSignedIn &&
                    <Banner
                        type="critical"
                        title="You have not Sign In"
                        description="Please sign in before you continue"
                        actions={
                            <Button type="primary" href={authURL} target="_blank">Begin Authorize</Button>
                        }
                    />
                }

            </Box>

        </ContextView>
    )
};

export default BalanceOverviewView;