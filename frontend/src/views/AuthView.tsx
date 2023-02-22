import fetchStripeSignature from '@stripe/ui-extension-sdk/signature';
import type { ExtensionContextValue } from '@stripe/ui-extension-sdk/context';

import {ContextView, Button, Box,} from '@stripe/ui-extension-sdk/ui';

const BACKEND_URL = 'http://localhost:5000/verify_user/';


