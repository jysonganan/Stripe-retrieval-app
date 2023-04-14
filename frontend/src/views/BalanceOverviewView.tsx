import {
    Box,
    ContextView,
    ListItem,
    List,
    Button,
    Banner,
    Badge,
    FormFieldGroup,
    TextField,
    Spinner,
    Inline
} from "@stripe/ui-extension-sdk/ui";
import type {ExtensionContextValue} from "@stripe/ui-extension-sdk/context";
import {useEffect, useState} from "react";
import {createOAuthState} from "@stripe/ui-extension-sdk/oauth";
import fetchStripeSignature from "@stripe/ui-extension-sdk/signature";
import * as React from "react";


const BalanceOverviewView = ({userContext, environment}: ExtensionContextValue) => {
    const BACKEND_URL = environment.constants.BACKEND_URL;
    const getAuthURL = (state: string, challenge: string, mode: 'live' | 'test') =>
        BACKEND_URL + `/get-oauth-link/?response_type=code&client&redirect&state=${state}&code_challenge=${challenge}&mode=${mode}&code_challenge_method=S256`;
    const maxLengthForMonth: number = 2;
    const maxLengthForYear: number = 4;
    const {mode} = environment;
    const [data, setMyData] = useState([]);
    const [authURL, setAuthURL] = useState('');
    const [hasSignedIn, setHasSignedIn] = useState(true)
    const [monthValue, setMonthValue] = useState('');
    const [yearValue, setYearValue] = useState('');
    const [gotPayoutData, setPayoutData] = useState<boolean>(true)
    const [gotResponse, setgotResponse] = useState<boolean>(false)
    const [spinnerOpen, setSpinnerOpen] = useState<boolean>(true)
    const [payoutLoad, setPayoutLoad] = useState<boolean>(false)
    const downloadEndpoint = `${BACKEND_URL}download-report/?account_id=${userContext?.account.id}&current_month=${monthValue}&current_year=${yearValue}&mode=${mode}`;

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
    }, []);


    // Handling DateForm Data
    const monthValueHandler = (event) => {
        setMonthValue(event.target.value);
    }
    const yearValueHandler = (event) => {
        setYearValue(event.target.value);
    }

    const handleSubmit = async (event) => {
        setPayoutLoad(true)
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
        } else if (response.ok) {
            setPayoutLoad(false)
            setgotResponse(true)
        }

        const result = await response.json()
        if (result.hasData == true) {
            setPayoutData(true)
            setMyData(JSON.parse(result.output_df_json))
        } else if (result.hasData == false) {
            setPayoutData(false)
            setMyData([])
        }
        setHasSignedIn(result.hasSignedIn);
        if (result.error) {
            setSpinnerOpen(false);
        }
    }

    return (
        <ContextView title="PayoutView">

            <Box css={{
                stack: 'z',
                alignX: 'center',
                alignY: 'center'
            }}>
                {spinnerOpen && hasSignedIn &&
                    <Spinner size="large"/>
                }
            </Box>
            {!spinnerOpen && hasSignedIn &&
                <Box css={{
                    padding: 'small',
                    color: 'primary',
                    borderRadius: 'large',

                }}>

                    <FormFieldGroup legend="Enter Month and Year"
                                    description="Enter the Year and Month from which you want to fetch data">
                        <TextField type="number" onChange={monthValueHandler} maxLength={maxLengthForMonth}
                                   label="Month" name="month" placeholder="MM" hiddenElements={['label']}/>
                        <TextField type="number" onChange={yearValueHandler} maxLength={maxLengthForYear} label="Year"
                                   name="year" placeholder="YYYY" hiddenElements={['label']}/>
                    </FormFieldGroup>

                    <Box css={{
                        stack: 'z',
                        alignX: 'center',
                        alignY: 'center',
                        margin: 'medium'
                    }}>
                        {payoutLoad && hasSignedIn &&
                            <Spinner size="large"/>
                        }
                        {!payoutLoad && hasSignedIn &&
                            <Button type="primary" onPress={handleSubmit}>Get Data</Button>
                        }

                    </Box>

                </Box>
            }

            {!gotPayoutData && gotResponse && hasSignedIn &&
                    <Badge type="warning">
                        There are no Payouts present for this Month and Year.
                    </Badge>
            }

            {gotResponse && hasSignedIn && gotPayoutData &&
                <Box css={{
                    stack: 'z',
                    alignX: 'center',
                    alignY: 'center',
                }}>
                    <Badge
                        type="info">
                        Total Number of Payouts : {data.length}
                    </Badge>

                </Box>
            }

            {gotResponse && hasSignedIn && <List>
                {data.map((inline_data) => (
                    <ListItem
                        value={inline_data.Net}
                        id="1"
                        title={new Date(inline_data.Created).toLocaleString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                        })}
                        secondaryTitle={<Box>{inline_data.Description}</Box>}
                    />
                ))
                }
            </List>
            }

            <Box css={{stack: 'y', gap: 'large', margin: 'large'}}>
                {gotResponse && gotPayoutData &&
                    <Button href={downloadEndpoint} type="primary" css={{width: 'fill', alignX: 'center'}}
                            target="_blank">DownloadCSV</Button>
                }

                {!hasSignedIn && !spinnerOpen &&
                    <Banner
                        type="critical"
                        title="You have not Sign In"
                        description="Please sign in before you continue"
                        actions={
                            <Button type="primary" href={authURL}>Begin Authorize</Button>
                        }
                    />
                }

            </Box>

        </ContextView>
    )
};

export default BalanceOverviewView;