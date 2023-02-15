import { Box, Button, ContextView } from "@stripe/ui-extension-sdk/ui";
import type { ExtensionContextValue } from "@stripe/ui-extension-sdk/context";
import fetchStripeSignature from "@stripe/ui-extension-sdk/signature";
import { Reducer, useCallback, useEffect, useReducer } from "react";


declare global {
  interface Crypto {
    randomUUID: () => string;
  }
}

const LOGIN_URI = "https://localhost:5000/auth/login";
const LOGOUT_URI = "https://localhost:5000/auth/logout";
const VERIFY_URI = "https://localhost:5000/auth/verify";
const INFO_URI = "https://localhost:5000/auth/userinfo";
const SESSION_URI = "https://localhost:5000/auth/session";

type State =
  | { name: "initializing"; context: { stateKey: string } }
  | {
      name: "logged-out";
      context: { stateKey: string };
    }
  | { name: "logging-out" }
  | { name: "waiting-for-auth"; context: { stateKey: string } }
  | { name: "logged-in"; context: { user: UserInfo } };

type Action =
  | { type: "initialized"; payload: { user: UserInfo | null } }
  | { type: "log-in" }
  | { type: "authorized" }
  | { type: "log-out" }
  | { type: "session-deleted" };

const initialState = (): State => ({
  name: "initializing",
  context: {
    stateKey: window.crypto.randomUUID(),
  },
});

// The following is a simple state machine implemented in plain React. However, in your app you might
// prefer using a library such as XState, Redux or Little State Machine for the same purpose.
const reducer: Reducer<State, Action> = (prevState, action) => {
  const fallthrough = () => {
    console.error("Invalid action", action.type, "for state", prevState.name);
    return prevState;
  };
  switch (prevState.name) {
    case "initializing": {
      switch (action.type) {
        case "initialized":
          return action.payload.user
            ? { name: "logged-in", context: { user: action.payload.user } }
            : {
                name: "logged-out",
                context: prevState.context,
              };
        default:
          return fallthrough();
      }
    }
    case "logged-out": {
      switch (action.type) {
        case "log-in":
          return {
            name: "waiting-for-auth",
            context: prevState.context,
          };
        default:
          return fallthrough();
      }
    }
    case "waiting-for-auth": {
      switch (action.type) {
        case "authorized":
          return initialState();
        case "log-out":
          return { name: "logging-out" };
        default:
          return fallthrough();
      }
    }
    case "logging-out": {
      switch (action.type) {
        case "session-deleted":
          return initialState();
        default:
          return fallthrough();
      }
    }
    case "logged-in": {
      switch (action.type) {
        case "log-out":
          return { name: "logging-out" };
        default:
          return fallthrough();
      }
    }
    default:
      return fallthrough();
  }
};

type UserInfo = {
  name: string;
  email: string;
};

const App = ({ userContext }: ExtensionContextValue) => {
  const [state, dispatch] = useReducer(reducer, null, initialState);
  const fetchWithCredentials = useCallback(
    async (uri: string, { headers, ...options }: RequestInit = {}) => {
      const headersObject = new Headers(headers);
      headersObject.append("stripe-user-id", userContext?.id ?? "");
      headersObject.append("stripe-account-id", userContext?.account.id ?? "");
      headersObject.append("stripe-signature", await fetchStripeSignature());
      return await fetch(uri, {
        ...options,
        headers: headersObject,
      });
    },
    []
  );
  useEffect(() => {
    switch (state.name) {
      case "initializing": {

        const controller = new AbortController();
        fetchWithCredentials(INFO_URI, {
          signal: controller.signal,
        })
          .then((res) => res.json())
          .then((user) =>
            dispatch({
              type: "initialized",
              payload: { user },
            })
          )
          .catch(() => {
            if (!controller.signal.aborted) {
              dispatch({
                type: "initialized",
                payload: { user: null },
              });
            }
          });
        return () => {
          controller.abort();
        };
      }
      case "waiting-for-auth": {

        const interval = setInterval(() => {
          fetchWithCredentials(
            `${VERIFY_URI}?state=${state.context.stateKey}`
          ).then(
            (res) =>
              res.status >= 200 &&
              res.status < 300 &&
              dispatch({
                type: "authorized",
              })
          );
        }, 5000);
        return () => clearInterval(interval);
      }
      case "logging-out": {
        
        const controller = new AbortController();
        fetchWithCredentials(SESSION_URI, {
          signal: controller.signal,
          method: "DELETE",
        }).finally(() => {
          dispatch({
            type: "session-deleted",
          });
        });
        return () => {
          controller.abort();
        };
      }
    }
  }, [state, dispatch]);

  const actions = (state: State) => {
    switch (state.name) {
      case "initializing":
        return "Loading...";
      case "logged-out":
        return (
          <Button
            type="primary"
            
            href={`${LOGIN_URI}?${new URLSearchParams({
              state: state.context.stateKey,
            })}`}
            target="_blank"
            onPress={() => dispatch({ type: "log-in" })}
          >
            Log In
          </Button>
        );
      case "waiting-for-auth":
        return (
          <>
            <Box>Please complete authorization in popup.</Box>
            <Button
              type="destructive"
              onPress={() => dispatch({ type: "log-out" })}
            >
              Cancel
            </Button>
          </>
        );
      case "logged-in":
        return (
          <>
            <Box>
              You are logged in as {state.context.user.name} (
              {state.context.user.email})
            </Box>
            <Button
              type="destructive"
              href={`${LOGOUT_URI}?${new URLSearchParams({
                account: userContext!.account.id,
                user: userContext!.id,
              })}`}
              target="_blank"
              onPress={() => dispatch({ type: "log-out" })}
            >
              Log Out
            </Button>
          </>
        );
      case "logging-out":
        return (
          <Button type="destructive" disabled>
            Log Out
          </Button>
        );
    }
  };
  return (
    <ContextView title="Getting started with Stripe-Apps">
      <Box>{actions(state)}</Box>
    </ContextView>
  );
};

export default App;
