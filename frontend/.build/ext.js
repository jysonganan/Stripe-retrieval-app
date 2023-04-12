"use strict";
var __StripeExtExports = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
  }) : x)(function(x) {
    if (typeof require !== "undefined")
      return require.apply(this, arguments);
    throw new Error('Dynamic require of "' + x + '" is not supported');
  });
  var __commonJS = (cb, mod) => function __require2() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
  var __async = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e) {
          reject(e);
        }
      };
      var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };

  // node_modules/@stripe/ui-extension-sdk/ui/@sail/ui/index.js
  var require_ui = __commonJS({
    "node_modules/@stripe/ui-extension-sdk/ui/@sail/ui/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.TailorDateField = exports.List = exports.ListItem = exports.Tooltip = exports.TextField = exports.TextArea = exports.TabPanels = exports.TabList = exports.Tabs = exports.TabPanel = exports.Tab = exports.TableHeaderCell = exports.TableCell = exports.TableFooter = exports.TableRow = exports.TableBody = exports.TableHead = exports.Table = exports.Switch = exports.Spinner = exports.Select = exports.Radio = exports.Notice = exports.Menu = exports.MenuGroup = exports.MenuItem = exports.Link = exports.Icon = exports.FormFieldGroup = exports.Divider = exports.ChipList = exports.Chip = exports.Checkbox = exports.ButtonGroup = exports.Button = exports.Banner = exports.Badge = exports.AccordionItem = exports.Accordion = void 0;
      var react_1 = __require("@remote-ui/react");
      exports.Accordion = (0, react_1.createRemoteReactComponent)("Accordion");
      exports.AccordionItem = (0, react_1.createRemoteReactComponent)("AccordionItem", {
        fragmentProps: ["title", "subtitle", "media", "actions"]
      });
      exports.Badge = (0, react_1.createRemoteReactComponent)("Badge");
      exports.Banner = (0, react_1.createRemoteReactComponent)("Banner", {
        fragmentProps: ["description", "title", "actions"]
      });
      exports.Button = (0, react_1.createRemoteReactComponent)("Button");
      exports.ButtonGroup = (0, react_1.createRemoteReactComponent)("ButtonGroup", {
        fragmentProps: ["menuTrigger"]
      });
      exports.Checkbox = (0, react_1.createRemoteReactComponent)("Checkbox", {
        fragmentProps: ["label"]
      });
      exports.Chip = (0, react_1.createRemoteReactComponent)("Chip");
      exports.ChipList = (0, react_1.createRemoteReactComponent)("ChipList");
      exports.Divider = (0, react_1.createRemoteReactComponent)("Divider");
      exports.FormFieldGroup = (0, react_1.createRemoteReactComponent)("FormFieldGroup");
      exports.Icon = (0, react_1.createRemoteReactComponent)("Icon");
      exports.Link = (0, react_1.createRemoteReactComponent)("Link");
      exports.MenuItem = (0, react_1.createRemoteReactComponent)("MenuItem");
      exports.MenuGroup = (0, react_1.createRemoteReactComponent)("MenuGroup", {
        fragmentProps: ["title"]
      });
      exports.Menu = (0, react_1.createRemoteReactComponent)("Menu", {
        fragmentProps: ["trigger"]
      });
      exports.Notice = (0, react_1.createRemoteReactComponent)("Notice", {
        fragmentProps: ["description", "title", "actions"]
      });
      exports.Radio = (0, react_1.createRemoteReactComponent)("Radio", {
        fragmentProps: ["label"]
      });
      exports.Select = (0, react_1.createRemoteReactComponent)("Select", {
        fragmentProps: ["label"]
      });
      exports.Spinner = (0, react_1.createRemoteReactComponent)("Spinner");
      exports.Switch = (0, react_1.createRemoteReactComponent)("Switch", {
        fragmentProps: ["label"]
      });
      exports.Table = (0, react_1.createRemoteReactComponent)("Table");
      exports.TableHead = (0, react_1.createRemoteReactComponent)("TableHead");
      exports.TableBody = (0, react_1.createRemoteReactComponent)("TableBody");
      exports.TableRow = (0, react_1.createRemoteReactComponent)("TableRow");
      exports.TableFooter = (0, react_1.createRemoteReactComponent)("TableFooter");
      exports.TableCell = (0, react_1.createRemoteReactComponent)("TableCell");
      exports.TableHeaderCell = (0, react_1.createRemoteReactComponent)("TableHeaderCell");
      exports.Tab = (0, react_1.createRemoteReactComponent)("Tab");
      exports.TabPanel = (0, react_1.createRemoteReactComponent)("TabPanel");
      exports.Tabs = (0, react_1.createRemoteReactComponent)("Tabs");
      exports.TabList = (0, react_1.createRemoteReactComponent)("TabList");
      exports.TabPanels = (0, react_1.createRemoteReactComponent)("TabPanels");
      exports.TextArea = (0, react_1.createRemoteReactComponent)("TextArea", {
        fragmentProps: ["label"]
      });
      exports.TextField = (0, react_1.createRemoteReactComponent)("TextField", {
        fragmentProps: ["label"]
      });
      exports.Tooltip = (0, react_1.createRemoteReactComponent)("Tooltip", {
        fragmentProps: ["trigger"]
      });
      exports.ListItem = (0, react_1.createRemoteReactComponent)("ListItem", {
        fragmentProps: ["value", "title", "secondaryTitle", "icon", "image"]
      });
      exports.List = (0, react_1.createRemoteReactComponent)("List");
      exports.TailorDateField = (0, react_1.createRemoteReactComponent)("TailorDateField", {
        fragmentProps: ["label"]
      });
    }
  });

  // node_modules/@stripe/ui-extension-sdk/ui/@stripe-internal/tailor-dashboard-components/index.js
  var require_tailor_dashboard_components = __commonJS({
    "node_modules/@stripe/ui-extension-sdk/ui/@stripe-internal/tailor-dashboard-components/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.SettingsView = exports.Img = exports.FocusView = exports.ContextView = exports.LineChart = exports.BarChart = void 0;
      var react_1 = __require("@remote-ui/react");
      exports.BarChart = (0, react_1.createRemoteReactComponent)("BarChart");
      exports.LineChart = (0, react_1.createRemoteReactComponent)("LineChart");
      exports.ContextView = (0, react_1.createRemoteReactComponent)("ContextView", {
        fragmentProps: [
          "actions",
          "banner",
          "primaryAction",
          "secondaryAction",
          "footerContent"
        ]
      });
      exports.FocusView = (0, react_1.createRemoteReactComponent)("FocusView", {
        fragmentProps: ["primaryAction", "secondaryAction", "footerContent"]
      });
      exports.Img = (0, react_1.createRemoteReactComponent)("Img");
      exports.SettingsView = (0, react_1.createRemoteReactComponent)("SettingsView");
    }
  });

  // node_modules/@stripe/ui-extension-sdk/ui/manual_components.js
  var require_manual_components = __commonJS({
    "node_modules/@stripe/ui-extension-sdk/ui/manual_components.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.DateField = exports.Icon = exports.Button = exports.Link = exports.Checkbox = exports.Switch = exports.Radio = exports.Select = exports.TextArea = exports.TextField = exports.Inline = exports.Box = void 0;
      var react_1 = __require("@remote-ui/react");
      exports.Box = (0, react_1.createRemoteReactComponent)("Box");
      exports.Inline = (0, react_1.createRemoteReactComponent)("Inline");
      exports.TextField = (0, react_1.createRemoteReactComponent)("TextField", {
        fragmentProps: ["label"]
      });
      exports.TextArea = (0, react_1.createRemoteReactComponent)("TextArea", {
        fragmentProps: ["label"]
      });
      exports.Select = (0, react_1.createRemoteReactComponent)("Select", {
        fragmentProps: ["label"]
      });
      exports.Radio = (0, react_1.createRemoteReactComponent)("Radio", {
        fragmentProps: ["label"]
      });
      exports.Switch = (0, react_1.createRemoteReactComponent)("Switch", {
        fragmentProps: ["label"]
      });
      exports.Checkbox = (0, react_1.createRemoteReactComponent)("Checkbox", {
        fragmentProps: ["label"]
      });
      exports.Link = (0, react_1.createRemoteReactComponent)("Link");
      exports.Button = (0, react_1.createRemoteReactComponent)("Button");
      exports.Icon = (0, react_1.createRemoteReactComponent)("Icon");
      exports.DateField = (0, react_1.createRemoteReactComponent)("DateField", {
        fragmentProps: ["label"]
      });
    }
  });

  // node_modules/@stripe/ui-extension-sdk/ui/index.js
  var require_ui2 = __commonJS({
    "node_modules/@stripe/ui-extension-sdk/ui/index.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __exportStar = exports && exports.__exportStar || function(m, exports2) {
        for (var p in m)
          if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
            __createBinding(exports2, m, p);
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.TextField = exports.TextArea = exports.Switch = exports.Select = exports.Radio = exports.Link = exports.Inline = exports.Icon = exports.DateField = exports.Checkbox = exports.Button = exports.Box = exports.Tooltip = exports.Tabs = exports.TableRow = exports.TableHeaderCell = exports.TableHead = exports.TableFooter = exports.TableCell = exports.TableBody = exports.Table = exports.TabPanels = exports.TabPanel = exports.TabList = exports.Tab = exports.Spinner = exports.MenuItem = exports.MenuGroup = exports.Menu = exports.ListItem = exports.List = exports.FormFieldGroup = exports.Divider = exports.ChipList = exports.Chip = exports.ButtonGroup = exports.Banner = exports.Badge = exports.AccordionItem = exports.Accordion = void 0;
      var ui_1 = require_ui();
      Object.defineProperty(exports, "Accordion", { enumerable: true, get: function() {
        return ui_1.Accordion;
      } });
      Object.defineProperty(exports, "AccordionItem", { enumerable: true, get: function() {
        return ui_1.AccordionItem;
      } });
      Object.defineProperty(exports, "Badge", { enumerable: true, get: function() {
        return ui_1.Badge;
      } });
      Object.defineProperty(exports, "Banner", { enumerable: true, get: function() {
        return ui_1.Banner;
      } });
      Object.defineProperty(exports, "ButtonGroup", { enumerable: true, get: function() {
        return ui_1.ButtonGroup;
      } });
      Object.defineProperty(exports, "Chip", { enumerable: true, get: function() {
        return ui_1.Chip;
      } });
      Object.defineProperty(exports, "ChipList", { enumerable: true, get: function() {
        return ui_1.ChipList;
      } });
      Object.defineProperty(exports, "Divider", { enumerable: true, get: function() {
        return ui_1.Divider;
      } });
      Object.defineProperty(exports, "FormFieldGroup", { enumerable: true, get: function() {
        return ui_1.FormFieldGroup;
      } });
      Object.defineProperty(exports, "List", { enumerable: true, get: function() {
        return ui_1.List;
      } });
      Object.defineProperty(exports, "ListItem", { enumerable: true, get: function() {
        return ui_1.ListItem;
      } });
      Object.defineProperty(exports, "Menu", { enumerable: true, get: function() {
        return ui_1.Menu;
      } });
      Object.defineProperty(exports, "MenuGroup", { enumerable: true, get: function() {
        return ui_1.MenuGroup;
      } });
      Object.defineProperty(exports, "MenuItem", { enumerable: true, get: function() {
        return ui_1.MenuItem;
      } });
      Object.defineProperty(exports, "Spinner", { enumerable: true, get: function() {
        return ui_1.Spinner;
      } });
      Object.defineProperty(exports, "Tab", { enumerable: true, get: function() {
        return ui_1.Tab;
      } });
      Object.defineProperty(exports, "TabList", { enumerable: true, get: function() {
        return ui_1.TabList;
      } });
      Object.defineProperty(exports, "TabPanel", { enumerable: true, get: function() {
        return ui_1.TabPanel;
      } });
      Object.defineProperty(exports, "TabPanels", { enumerable: true, get: function() {
        return ui_1.TabPanels;
      } });
      Object.defineProperty(exports, "Table", { enumerable: true, get: function() {
        return ui_1.Table;
      } });
      Object.defineProperty(exports, "TableBody", { enumerable: true, get: function() {
        return ui_1.TableBody;
      } });
      Object.defineProperty(exports, "TableCell", { enumerable: true, get: function() {
        return ui_1.TableCell;
      } });
      Object.defineProperty(exports, "TableFooter", { enumerable: true, get: function() {
        return ui_1.TableFooter;
      } });
      Object.defineProperty(exports, "TableHead", { enumerable: true, get: function() {
        return ui_1.TableHead;
      } });
      Object.defineProperty(exports, "TableHeaderCell", { enumerable: true, get: function() {
        return ui_1.TableHeaderCell;
      } });
      Object.defineProperty(exports, "TableRow", { enumerable: true, get: function() {
        return ui_1.TableRow;
      } });
      Object.defineProperty(exports, "Tabs", { enumerable: true, get: function() {
        return ui_1.Tabs;
      } });
      Object.defineProperty(exports, "Tooltip", { enumerable: true, get: function() {
        return ui_1.Tooltip;
      } });
      __exportStar(require_tailor_dashboard_components(), exports);
      var manual_components_1 = require_manual_components();
      Object.defineProperty(exports, "Box", { enumerable: true, get: function() {
        return manual_components_1.Box;
      } });
      Object.defineProperty(exports, "Button", { enumerable: true, get: function() {
        return manual_components_1.Button;
      } });
      Object.defineProperty(exports, "Checkbox", { enumerable: true, get: function() {
        return manual_components_1.Checkbox;
      } });
      Object.defineProperty(exports, "DateField", { enumerable: true, get: function() {
        return manual_components_1.DateField;
      } });
      Object.defineProperty(exports, "Icon", { enumerable: true, get: function() {
        return manual_components_1.Icon;
      } });
      Object.defineProperty(exports, "Inline", { enumerable: true, get: function() {
        return manual_components_1.Inline;
      } });
      Object.defineProperty(exports, "Link", { enumerable: true, get: function() {
        return manual_components_1.Link;
      } });
      Object.defineProperty(exports, "Radio", { enumerable: true, get: function() {
        return manual_components_1.Radio;
      } });
      Object.defineProperty(exports, "Select", { enumerable: true, get: function() {
        return manual_components_1.Select;
      } });
      Object.defineProperty(exports, "Switch", { enumerable: true, get: function() {
        return manual_components_1.Switch;
      } });
      Object.defineProperty(exports, "TextArea", { enumerable: true, get: function() {
        return manual_components_1.TextArea;
      } });
      Object.defineProperty(exports, "TextField", { enumerable: true, get: function() {
        return manual_components_1.TextField;
      } });
    }
  });

  // node_modules/invariant/browser.js
  var require_browser = __commonJS({
    "node_modules/invariant/browser.js"(exports, module) {
      "use strict";
      var invariant = function(condition, format, a, b, c, d, e, f) {
        if (true) {
          if (format === void 0) {
            throw new Error("invariant requires an error message argument");
          }
        }
        if (!condition) {
          var error;
          if (format === void 0) {
            error = new Error(
              "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."
            );
          } else {
            var args = [a, b, c, d, e, f];
            var argIndex = 0;
            error = new Error(
              format.replace(/%s/g, function() {
                return args[argIndex++];
              })
            );
            error.name = "Invariant Violation";
          }
          error.framesToPop = 1;
          throw error;
        }
      };
      module.exports = invariant;
    }
  });

  // node_modules/@stripe/ui-extension-sdk/utils/_endpoint.js
  var require_endpoint = __commonJS({
    "node_modules/@stripe/ui-extension-sdk/utils/_endpoint.js"(exports) {
      "use strict";
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.getHostEndpoint = void 0;
      var invariant_1 = __importDefault(require_browser());
      var getHostEndpoint = () => {
        const hostEndpoint = globalThis.__StripeExtExports.endpoint;
        (0, invariant_1.default)(hostEndpoint, "hostEndpoint has not been initialized");
        return hostEndpoint;
      };
      exports.getHostEndpoint = getHostEndpoint;
    }
  });

  // node_modules/@stripe/ui-extension-sdk/utils/oauth.js
  var require_oauth = __commonJS({
    "node_modules/@stripe/ui-extension-sdk/utils/oauth.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.createOAuthState = void 0;
      var _endpoint_1 = require_endpoint();
      var createOAuthState4 = (state = "") => {
        return (0, _endpoint_1.getHostEndpoint)().call.createOAuthState(state);
      };
      exports.createOAuthState = createOAuthState4;
    }
  });

  // node_modules/@stripe/ui-extension-sdk/oauth.js
  var require_oauth2 = __commonJS({
    "node_modules/@stripe/ui-extension-sdk/oauth.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.createOAuthState = void 0;
      var oauth_1 = require_oauth();
      Object.defineProperty(exports, "createOAuthState", { enumerable: true, get: function() {
        return oauth_1.createOAuthState;
      } });
      exports.default = oauth_1.createOAuthState;
    }
  });

  // node_modules/@stripe/ui-extension-sdk/utils/signature.js
  var require_signature = __commonJS({
    "node_modules/@stripe/ui-extension-sdk/utils/signature.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.fetchStripeSignature = void 0;
      var _endpoint_1 = require_endpoint();
      var fetchStripeSignature3 = (additionalPayload) => {
        return (0, _endpoint_1.getHostEndpoint)().call.fetchStripeSignature(additionalPayload);
      };
      exports.fetchStripeSignature = fetchStripeSignature3;
    }
  });

  // node_modules/@stripe/ui-extension-sdk/signature.js
  var require_signature2 = __commonJS({
    "node_modules/@stripe/ui-extension-sdk/signature.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var signature_1 = require_signature();
      exports.default = signature_1.fetchStripeSignature;
    }
  });

  // node_modules/@stripe/ui-extension-sdk/version.js
  var require_version = __commonJS({
    "node_modules/@stripe/ui-extension-sdk/version.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.UI_VERSION = exports.SDK_VERSION = void 0;
      exports.SDK_VERSION = "8.0.0";
      exports.UI_VERSION = "31.4.1";
    }
  });

  // .build/manifest.js
  var manifest_exports = {};
  __export(manifest_exports, {
    App: () => App_default,
    AppSettings: () => AppSettings_default,
    BUILD_TIME: () => BUILD_TIME,
    BalanceOverviewView: () => BalanceOverviewView_default,
    default: () => manifest_default
  });

  // src/views/App.tsx
  var import_ui = __toESM(require_ui2());
  var React = __toESM(__require("react"));
  var import_oauth = __toESM(require_oauth2());
  var import_signature = __toESM(require_signature2());
  var import_jsx_runtime = __require("react/jsx-runtime");
  var { useState, useEffect } = React;
  var OAuthApp = ({ environment, userContext }) => {
    const BACKEND_URL2 = environment.constants.BACKEND_URL;
    const getAuthURL = (state, challenge, mode2) => BACKEND_URL2 + `get-oauth-link/?response_type=code&client&redirect&state=${state}&code_challenge=${challenge}&mode=${mode2}&code_challenge_method=S256`;
    const { mode } = environment;
    const [authURL, setAuthURL] = useState("");
    const [hasSignedIn, setHasSignedIn] = useState(true);
    const [spinnerOpen, setSpinnerOpen] = useState(true);
    useEffect(() => {
      (0, import_oauth.createOAuthState)().then(({ state, challenge }) => {
        setAuthURL(getAuthURL(state, challenge, mode));
      });
      const getStatus = () => __async(void 0, null, function* () {
        const data = yield fetch(BACKEND_URL2 + "health-check/", {
          method: "POST",
          headers: {
            "stripe-signature": yield (0, import_signature.default)(),
            "Content-type": "application/json"
          },
          body: JSON.stringify({
            user_id: userContext == null ? void 0 : userContext.id,
            account_id: userContext == null ? void 0 : userContext.account.id,
            mode
          })
        });
        if (data.ok) {
          setSpinnerOpen(false);
        }
        const result = yield data.json();
        setHasSignedIn(result.hasSignedIn);
      });
      getStatus();
      console.log(environment.constants.BACKEND_URL);
    }, [mode]);
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_ui.ContextView, {
      title: "PayoutView App",
      children: [
        hasSignedIn && !spinnerOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.Badge, {
          type: "info",
          children: "You are Already Authorized to Our App!"
        }),
        !hasSignedIn && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.Banner, {
          type: "critical",
          title: "You have not Authorized!",
          description: "Please Authorize before you continue",
          actions: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.Button, {
            type: "primary",
            href: authURL,
            children: "Begin Authorize"
          })
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.Box, {
          css: {
            stack: "z",
            alignX: "center",
            alignY: "center"
          },
          children: spinnerOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.Spinner, {
            size: "large"
          })
        })
      ]
    });
  };
  var App_default = OAuthApp;

  // src/views/BalanceOverviewView.tsx
  var import_ui2 = __toESM(require_ui2());
  var import_react = __require("react");
  var import_oauth2 = __toESM(require_oauth2());
  var import_signature2 = __toESM(require_signature2());
  var import_jsx_runtime2 = __require("react/jsx-runtime");
  var BACKEND_URL = "https://stripe-backend-k7b4-jayateerthdambal.vercel.app/";
  var BalanceOverviewView = ({ userContext, environment }) => {
    const getAuthURL = (state, challenge, mode2) => BACKEND_URL + `/get-oauth-link/?response_type=code&client&redirect&state=${state}&code_challenge=${challenge}&mode=${mode2}&code_challenge_method=S256`;
    const maxLengthForMonth = 2;
    const maxLengthForYear = 4;
    const { mode } = environment;
    const [data, setMyData] = (0, import_react.useState)([]);
    const [authURL, setAuthURL] = (0, import_react.useState)("");
    const [hasSignedIn, setHasSignedIn] = (0, import_react.useState)(true);
    const [monthValue, setMonthValue] = (0, import_react.useState)("");
    const [yearValue, setYearValue] = (0, import_react.useState)("");
    const [gotPayoutData, setPayoutData] = (0, import_react.useState)(false);
    const [gotResponse, setgotResponse] = (0, import_react.useState)(false);
    const [spinnerOpen, setSpinnerOpen] = (0, import_react.useState)(true);
    const [payoutLoad, setPayoutLoad] = (0, import_react.useState)(false);
    const downloadEndpoint = `${BACKEND_URL}download-report/?account_id=${userContext == null ? void 0 : userContext.account.id}&current_month=${monthValue}&current_year=${yearValue}&mode=${mode}`;
    (0, import_react.useEffect)(() => {
      (0, import_oauth2.createOAuthState)().then(({ state, challenge }) => {
        setAuthURL(getAuthURL(state, challenge, mode));
      });
      const getStatus = () => __async(void 0, null, function* () {
        const data2 = yield fetch(BACKEND_URL + "health-check/", {
          method: "POST",
          headers: {
            "stripe-signature": yield (0, import_signature2.default)(),
            "Content-type": "application/json"
          },
          body: JSON.stringify({
            user_id: userContext == null ? void 0 : userContext.id,
            account_id: userContext == null ? void 0 : userContext.account.id,
            mode
          })
        });
        if (data2.ok) {
          setSpinnerOpen(false);
        }
        const result = yield data2.json();
        setHasSignedIn(result.hasSignedIn);
      });
      getStatus();
    }, []);
    const monthValueHandler = (event) => {
      setMonthValue(event.target.value);
    };
    const yearValueHandler = (event) => {
      setYearValue(event.target.value);
    };
    const handleSubmit = (event) => __async(void 0, null, function* () {
      setPayoutLoad(true);
      const response = yield fetch(BACKEND_URL + "get_payouts/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          month: monthValue,
          year: yearValue,
          account_id: userContext == null ? void 0 : userContext.account.id,
          mode
        })
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      } else if (response.ok) {
        setPayoutLoad(false);
      }
      const result = yield response.json();
      if (result.hasData == true) {
        setPayoutData(false);
        setMyData(JSON.parse(result.output_df_json));
      } else if (result.hasData == false) {
        setPayoutData(true);
      }
      setHasSignedIn(result.hasSignedIn);
      setgotResponse(result.hasData);
      if (result.error) {
        setSpinnerOpen(false);
      }
    });
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_ui2.ContextView, {
      title: "PayoutView",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_ui2.Box, {
          css: {
            stack: "z",
            alignX: "center",
            alignY: "center"
          },
          children: spinnerOpen && hasSignedIn && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_ui2.Spinner, {
            size: "large"
          })
        }),
        !spinnerOpen && hasSignedIn && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_ui2.Box, {
          css: {
            padding: "small",
            color: "primary",
            borderRadius: "large"
          },
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_ui2.FormFieldGroup, {
              legend: "Enter Month and Year",
              description: "Enter the Year and Month from which you want to fetch data",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_ui2.TextField, {
                  type: "number",
                  onChange: monthValueHandler,
                  maxLength: maxLengthForMonth,
                  label: "Month",
                  name: "month",
                  placeholder: "MM",
                  hiddenElements: ["label"]
                }),
                /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_ui2.TextField, {
                  type: "number",
                  onChange: yearValueHandler,
                  maxLength: maxLengthForYear,
                  label: "Year",
                  name: "year",
                  placeholder: "YYYY",
                  hiddenElements: ["label"]
                })
              ]
            }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_ui2.Box, {
              css: {
                stack: "z",
                alignX: "center",
                alignY: "center",
                margin: "medium"
              },
              children: [
                payoutLoad && hasSignedIn && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_ui2.Spinner, {
                  size: "large"
                }),
                !payoutLoad && hasSignedIn && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_ui2.Button, {
                  type: "primary",
                  onPress: handleSubmit,
                  children: "Get Data"
                })
              ]
            })
          ]
        }),
        !gotPayoutData && gotResponse && hasSignedIn && !spinnerOpen && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_ui2.Badge, {
          type: "info",
          children: "Please Enter Month and Year Values, to view Data"
        }),
        gotPayoutData && !gotResponse && !data.length && hasSignedIn && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_ui2.Badge, {
          type: "warning",
          children: "There is no Data Present for this Month and Year"
        }),
        gotResponse && hasSignedIn && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_ui2.Box, {
          css: {
            padding: "xsmall",
            color: "primary",
            borderRadius: "xsmall"
          },
          children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_ui2.Badge, {
            type: "info",
            children: [
              "Total Payouts for this Month and Year: ",
              data.length
            ]
          })
        }),
        gotResponse && hasSignedIn && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_ui2.List, {
          children: data.map((inline_data) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_ui2.ListItem, {
            value: inline_data.Net,
            id: "1",
            title: new Date(inline_data.Created).toLocaleString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric"
            }),
            secondaryTitle: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_ui2.Box, {
              children: inline_data.Description
            })
          }))
        }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_ui2.Box, {
          css: { stack: "y", gap: "large", margin: "large" },
          children: [
            gotResponse && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_ui2.Button, {
              href: downloadEndpoint,
              type: "primary",
              css: { width: "fill", alignX: "center" },
              target: "_blank",
              children: "DownloadCSV"
            }),
            !hasSignedIn && !spinnerOpen && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_ui2.Banner, {
              type: "critical",
              title: "You have not Sign In",
              description: "Please sign in before you continue",
              actions: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_ui2.Button, {
                type: "primary",
                href: authURL,
                children: "Begin Authorize"
              })
            })
          ]
        })
      ]
    });
  };
  var BalanceOverviewView_default = BalanceOverviewView;

  // src/views/AppSettings.tsx
  var import_ui3 = __toESM(require_ui2());
  var import_react2 = __require("react");
  var import_oauth3 = __toESM(require_oauth2());
  var import_jsx_runtime3 = __require("react/jsx-runtime");
  var AppSettings = ({ userContext, environment }) => {
    const BACKEND_URL2 = environment.constants.BACKEND_URL;
    const getAuthURL = (state, challenge, mode2) => BACKEND_URL2 + `/get-oauth-link/?response_type=code&client&redirect&state=${state}&code_challenge=${challenge}&mode=${mode2}&code_challenge_method=S256`;
    const { mode } = environment;
    const [deauth, setDeauth] = (0, import_react2.useState)("");
    const [userExist, setUserExist] = (0, import_react2.useState)();
    const [authURL, setAuthURL] = (0, import_react2.useState)("");
    const [spinnerOpen, setSpinnerOpen] = (0, import_react2.useState)(false);
    const [loadingSpinner, setLoadingSpinner] = (0, import_react2.useState)(true);
    const deauthorize_user = () => __async(void 0, null, function* () {
      setSpinnerOpen(true);
      const data = yield fetch(BACKEND_URL2 + "deauthorize_user/", {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({
          user_id: userContext == null ? void 0 : userContext.id,
          account_id: userContext == null ? void 0 : userContext.account.id,
          mode
        })
      }).then((response) => response.json()).then((data2) => setUserExist(data2.userExist));
    });
    (0, import_react2.useEffect)(() => {
      (0, import_oauth3.createOAuthState)().then(({ state, challenge }) => {
        setAuthURL(getAuthURL(state, challenge, mode));
      });
      const getUserStatus = () => __async(void 0, null, function* () {
        const response = yield fetch(BACKEND_URL2 + "check-user/", {
          method: "POST",
          headers: {
            "Content-type": "application/json"
          },
          body: JSON.stringify({
            account_id: userContext == null ? void 0 : userContext.account.id,
            mode
          })
        });
        if (response.ok) {
          setLoadingSpinner(false);
        }
        const data = yield response.json();
        setUserExist(data.userExist);
      });
      getUserStatus();
    }, [mode]);
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_ui3.SettingsView, {
      onSave: () => {
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_ui3.Box, {
          css: {
            stack: "z",
            alignX: "center",
            alignY: "center"
          },
          children: loadingSpinner && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_ui3.Spinner, {
            size: "large"
          })
        }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_ui3.Box, {
          css: {
            background: "container",
            borderRadius: "medium",
            padding: "large"
          },
          children: [
            userExist && !spinnerOpen && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_ui3.Banner, {
              type: "critical",
              title: "Remove Authorization",
              description: "You will no longer able to access your data through App",
              actions: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_ui3.Button, {
                onPress: deauthorize_user,
                type: "destructive",
                children: "Remove Authorization"
              })
            }),
            userExist && spinnerOpen && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_ui3.Banner, {
              type: "caution",
              title: "Removing Authorization",
              description: "Don't worry you can add authorization again after this prcoess gets complete.",
              actions: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_ui3.Spinner, {
                size: "large"
              })
            }),
            !userExist && !loadingSpinner && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_ui3.Banner, {
              type: "default",
              title: "Begin Authorization",
              description: "You are not authorized your account with our servers, Please begin the Authorization Process",
              actions: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_ui3.Button, {
                href: authURL,
                type: "primary",
                children: "Begin Authorization"
              })
            })
          ]
        })
      ]
    });
  };
  var AppSettings_default = AppSettings;

  // .build/manifest.js
  __reExport(manifest_exports, __toESM(require_version()));
  var BUILD_TIME = "2023-04-12 09:48:34.243579554 +0530 IST m=+0.090954247";
  var manifest_default = {
    "id": "com.example.stripe-app_-payout",
    "version": "0.0.2",
    "name": "StripeRetrievalApp",
    "icon": "",
    "permissions": [
      {
        "permission": "secret_write",
        "purpose": "Allows storing secrets between page reloads"
      }
    ],
    "app_backend": {
      "webhooks": null
    },
    "ui_extension": {
      "views": [
        {
          "viewport": "stripe.dashboard.home.overview",
          "component": "App"
        },
        {
          "viewport": "stripe.dashboard.balance.overview",
          "component": "BalanceOverviewView"
        },
        {
          "viewport": "settings",
          "component": "AppSettings"
        }
      ],
      "content_security_policy": {
        "connect-src": [
          "https://stripe-backend-k7b4-jayateerthdambal.vercel.app/health-check/",
          "https://stripe-backend-k7b4-jayateerthdambal.vercel.app/get-oauth-link/",
          "https://stripe-backend-k7b4-jayateerthdambal.vercel.app/authorize_oauth/",
          "https://stripe-backend-k7b4-jayateerthdambal.vercel.app/get_payouts/",
          "https://stripe-backend-k7b4-jayateerthdambal.vercel.app/download-report/",
          "https://stripe-backend-k7b4-jayateerthdambal.vercel.app/check-user/",
          "https://stripe-backend-k7b4-jayateerthdambal.vercel.app/deauthorize_user/"
        ],
        "image-src": null,
        "purpose": "Send Data to VercelDeploy"
      }
    },
    "constants": {
      "BACKEND_URL": "https://stripe-backend-k7b4-jayateerthdambal.vercel.app/"
    }
  };
  return __toCommonJS(manifest_exports);
})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0BzdHJpcGUvc3JjL3VpL0BzYWlsL3VpL2luZGV4LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9Ac3RyaXBlL3NyYy91aS9Ac3RyaXBlLWludGVybmFsL3RhaWxvci1kYXNoYm9hcmQtY29tcG9uZW50cy9pbmRleC50cyIsICIuLi9ub2RlX21vZHVsZXMvQHN0cmlwZS9zcmMvdWkvbWFudWFsX2NvbXBvbmVudHMudHMiLCAiLi4vbm9kZV9tb2R1bGVzL0BzdHJpcGUvc3JjL3VpL2luZGV4LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9pbnZhcmlhbnQvYnJvd3Nlci5qcyIsICIuLi9ub2RlX21vZHVsZXMvQHN0cmlwZS9zcmMvdXRpbHMvX2VuZHBvaW50LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9Ac3RyaXBlL3NyYy91dGlscy9vYXV0aC50cyIsICIuLi9ub2RlX21vZHVsZXMvQHN0cmlwZS9zcmMvb2F1dGgudHMiLCAiLi4vbm9kZV9tb2R1bGVzL0BzdHJpcGUvc3JjL3V0aWxzL3NpZ25hdHVyZS50cyIsICIuLi9ub2RlX21vZHVsZXMvQHN0cmlwZS9zcmMvc2lnbmF0dXJlLnRzIiwgIi4uL25vZGVfbW9kdWxlcy9Ac3RyaXBlL3NyYy92ZXJzaW9uLnRzIiwgIm1hbmlmZXN0LmpzIiwgIi4uL3NyYy92aWV3cy9BcHAudHN4IiwgIi4uL3NyYy92aWV3cy9CYWxhbmNlT3ZlcnZpZXdWaWV3LnRzeCIsICIuLi9zcmMvdmlld3MvQXBwU2V0dGluZ3MudHN4Il0sCiAgInNvdXJjZXNDb250ZW50IjogW251bGwsIG51bGwsIG51bGwsIG51bGwsICIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBVc2UgaW52YXJpYW50KCkgdG8gYXNzZXJ0IHN0YXRlIHdoaWNoIHlvdXIgcHJvZ3JhbSBhc3N1bWVzIHRvIGJlIHRydWUuXG4gKlxuICogUHJvdmlkZSBzcHJpbnRmLXN0eWxlIGZvcm1hdCAob25seSAlcyBpcyBzdXBwb3J0ZWQpIGFuZCBhcmd1bWVudHNcbiAqIHRvIHByb3ZpZGUgaW5mb3JtYXRpb24gYWJvdXQgd2hhdCBicm9rZSBhbmQgd2hhdCB5b3Ugd2VyZVxuICogZXhwZWN0aW5nLlxuICpcbiAqIFRoZSBpbnZhcmlhbnQgbWVzc2FnZSB3aWxsIGJlIHN0cmlwcGVkIGluIHByb2R1Y3Rpb24sIGJ1dCB0aGUgaW52YXJpYW50XG4gKiB3aWxsIHJlbWFpbiB0byBlbnN1cmUgbG9naWMgZG9lcyBub3QgZGlmZmVyIGluIHByb2R1Y3Rpb24uXG4gKi9cblxudmFyIGludmFyaWFudCA9IGZ1bmN0aW9uKGNvbmRpdGlvbiwgZm9ybWF0LCBhLCBiLCBjLCBkLCBlLCBmKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFyaWFudCByZXF1aXJlcyBhbiBlcnJvciBtZXNzYWdlIGFyZ3VtZW50Jyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKCFjb25kaXRpb24pIHtcbiAgICB2YXIgZXJyb3I7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBlcnJvciA9IG5ldyBFcnJvcihcbiAgICAgICAgJ01pbmlmaWVkIGV4Y2VwdGlvbiBvY2N1cnJlZDsgdXNlIHRoZSBub24tbWluaWZpZWQgZGV2IGVudmlyb25tZW50ICcgK1xuICAgICAgICAnZm9yIHRoZSBmdWxsIGVycm9yIG1lc3NhZ2UgYW5kIGFkZGl0aW9uYWwgaGVscGZ1bCB3YXJuaW5ncy4nXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgYXJncyA9IFthLCBiLCBjLCBkLCBlLCBmXTtcbiAgICAgIHZhciBhcmdJbmRleCA9IDA7XG4gICAgICBlcnJvciA9IG5ldyBFcnJvcihcbiAgICAgICAgZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJnc1thcmdJbmRleCsrXTsgfSlcbiAgICAgICk7XG4gICAgICBlcnJvci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgIH1cblxuICAgIGVycm9yLmZyYW1lc1RvUG9wID0gMTsgLy8gd2UgZG9uJ3QgY2FyZSBhYm91dCBpbnZhcmlhbnQncyBvd24gZnJhbWVcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBpbnZhcmlhbnQ7XG4iLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAiXG5cbmltcG9ydCBBcHAgZnJvbSAnLi4vc3JjL3ZpZXdzL0FwcCc7XG5cbmltcG9ydCBCYWxhbmNlT3ZlcnZpZXdWaWV3IGZyb20gJy4uL3NyYy92aWV3cy9CYWxhbmNlT3ZlcnZpZXdWaWV3JztcblxuaW1wb3J0IEFwcFNldHRpbmdzIGZyb20gJy4uL3NyYy92aWV3cy9BcHBTZXR0aW5ncyc7XG5cblxuZXhwb3J0ICogZnJvbSAnQHN0cmlwZS91aS1leHRlbnNpb24tc2RrL3ZlcnNpb24nO1xuZXhwb3J0IGNvbnN0IEJVSUxEX1RJTUUgPSAnMjAyMy0wNC0xMiAwOTo0ODozNC4yNDM1Nzk1NTQgKzA1MzAgSVNUIG09KzAuMDkwOTU0MjQ3J1xuXG5leHBvcnQge1xuXHRcblx0QXBwLFxuXHRcblx0QmFsYW5jZU92ZXJ2aWV3Vmlldyxcblx0XG5cdEFwcFNldHRpbmdzLFxuXHRcbn07XG5leHBvcnQgZGVmYXVsdCB7XG4gIFwiaWRcIjogXCJjb20uZXhhbXBsZS5zdHJpcGUtYXBwXy1wYXlvdXRcIixcbiAgXCJ2ZXJzaW9uXCI6IFwiMC4wLjJcIixcbiAgXCJuYW1lXCI6IFwiU3RyaXBlUmV0cmlldmFsQXBwXCIsXG4gIFwiaWNvblwiOiBcIlwiLFxuICBcInBlcm1pc3Npb25zXCI6IFtcbiAgICB7XG4gICAgICBcInBlcm1pc3Npb25cIjogXCJzZWNyZXRfd3JpdGVcIixcbiAgICAgIFwicHVycG9zZVwiOiBcIkFsbG93cyBzdG9yaW5nIHNlY3JldHMgYmV0d2VlbiBwYWdlIHJlbG9hZHNcIlxuICAgIH1cbiAgXSxcbiAgXCJhcHBfYmFja2VuZFwiOiB7XG4gICAgXCJ3ZWJob29rc1wiOiBudWxsXG4gIH0sXG4gIFwidWlfZXh0ZW5zaW9uXCI6IHtcbiAgICBcInZpZXdzXCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJ2aWV3cG9ydFwiOiBcInN0cmlwZS5kYXNoYm9hcmQuaG9tZS5vdmVydmlld1wiLFxuICAgICAgICBcImNvbXBvbmVudFwiOiBcIkFwcFwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcInZpZXdwb3J0XCI6IFwic3RyaXBlLmRhc2hib2FyZC5iYWxhbmNlLm92ZXJ2aWV3XCIsXG4gICAgICAgIFwiY29tcG9uZW50XCI6IFwiQmFsYW5jZU92ZXJ2aWV3Vmlld1wiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcInZpZXdwb3J0XCI6IFwic2V0dGluZ3NcIixcbiAgICAgICAgXCJjb21wb25lbnRcIjogXCJBcHBTZXR0aW5nc1wiXG4gICAgICB9XG4gICAgXSxcbiAgICBcImNvbnRlbnRfc2VjdXJpdHlfcG9saWN5XCI6IHtcbiAgICAgIFwiY29ubmVjdC1zcmNcIjogW1xuICAgICAgICBcImh0dHBzOi8vc3RyaXBlLWJhY2tlbmQtazdiNC1qYXlhdGVlcnRoZGFtYmFsLnZlcmNlbC5hcHAvaGVhbHRoLWNoZWNrL1wiLFxuICAgICAgICBcImh0dHBzOi8vc3RyaXBlLWJhY2tlbmQtazdiNC1qYXlhdGVlcnRoZGFtYmFsLnZlcmNlbC5hcHAvZ2V0LW9hdXRoLWxpbmsvXCIsXG4gICAgICAgIFwiaHR0cHM6Ly9zdHJpcGUtYmFja2VuZC1rN2I0LWpheWF0ZWVydGhkYW1iYWwudmVyY2VsLmFwcC9hdXRob3JpemVfb2F1dGgvXCIsXG4gICAgICAgIFwiaHR0cHM6Ly9zdHJpcGUtYmFja2VuZC1rN2I0LWpheWF0ZWVydGhkYW1iYWwudmVyY2VsLmFwcC9nZXRfcGF5b3V0cy9cIixcbiAgICAgICAgXCJodHRwczovL3N0cmlwZS1iYWNrZW5kLWs3YjQtamF5YXRlZXJ0aGRhbWJhbC52ZXJjZWwuYXBwL2Rvd25sb2FkLXJlcG9ydC9cIixcbiAgICAgICAgXCJodHRwczovL3N0cmlwZS1iYWNrZW5kLWs3YjQtamF5YXRlZXJ0aGRhbWJhbC52ZXJjZWwuYXBwL2NoZWNrLXVzZXIvXCIsXG4gICAgICAgIFwiaHR0cHM6Ly9zdHJpcGUtYmFja2VuZC1rN2I0LWpheWF0ZWVydGhkYW1iYWwudmVyY2VsLmFwcC9kZWF1dGhvcml6ZV91c2VyL1wiXG4gICAgICBdLFxuICAgICAgXCJpbWFnZS1zcmNcIjogbnVsbCxcbiAgICAgIFwicHVycG9zZVwiOiBcIlNlbmQgRGF0YSB0byBWZXJjZWxEZXBsb3lcIlxuICAgIH1cbiAgfSxcbiAgXCJjb25zdGFudHNcIjoge1xuICAgIFwiQkFDS0VORF9VUkxcIjogXCJodHRwczovL3N0cmlwZS1iYWNrZW5kLWs3YjQtamF5YXRlZXJ0aGRhbWJhbC52ZXJjZWwuYXBwL1wiXG4gIH1cbn1cbiIsICJpbXBvcnQge1xuICAgIENvbnRleHRWaWV3LFxuICAgIEJ1dHRvbixcbiAgICBCb3gsXG4gICAgQmFkZ2UsXG4gICAgQmFubmVyLFxuICAgIFNwaW5uZXJcbn0gZnJvbSAnQHN0cmlwZS91aS1leHRlbnNpb24tc2RrL3VpJztcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNyZWF0ZU9BdXRoU3RhdGUgfSBmcm9tICdAc3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvb2F1dGgnO1xuaW1wb3J0IHR5cGUgeyBFeHRlbnNpb25Db250ZXh0VmFsdWUgfSBmcm9tICdAc3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvY29udGV4dCc7XG5pbXBvcnQgZmV0Y2hTdHJpcGVTaWduYXR1cmUgZnJvbSAnQHN0cmlwZS91aS1leHRlbnNpb24tc2RrL3NpZ25hdHVyZSc7XG5cblxuY29uc3QgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gPSBSZWFjdDtcblxuLy8gY29uc3QgQkFDS0VORF9VUkwgPSAnaHR0cDovL2xvY2FsaG9zdDo1MDAwLydcblxuY29uc3QgZ2V0UmVkaXJlY3RVUkwgPSAobW9kZTogJ2xpdmUnIHwgJ3Rlc3QnKSA9PiBgaHR0cHM6Ly9kYXNoYm9hcmQuc3RyaXBlLmNvbS8ke21vZGUgPT09ICd0ZXN0JyA/ICd0ZXN0LycgOiAnbGl2ZS8nfWFwcHMtb2F1dGgvY29tLmV4YW1wbGUub2F1dGgtZXhhbXBsZWA7XG5cblxuXG5jb25zdCBPQXV0aEFwcCA9ICh7IGVudmlyb25tZW50LCB1c2VyQ29udGV4dCB9OiBFeHRlbnNpb25Db250ZXh0VmFsdWUpID0+IHtcbiAgICBjb25zdCBCQUNLRU5EX1VSTCA9IGVudmlyb25tZW50LmNvbnN0YW50cy5CQUNLRU5EX1VSTDtcblxuICAgIGNvbnN0IGdldEF1dGhVUkwgPSAoc3RhdGU6IHN0cmluZywgY2hhbGxlbmdlOiBzdHJpbmcsIG1vZGU6ICdsaXZlJyB8ICd0ZXN0JykgPT5cbiAgICAgICAgQkFDS0VORF9VUkwgKyBgZ2V0LW9hdXRoLWxpbmsvP3Jlc3BvbnNlX3R5cGU9Y29kZSZjbGllbnQmcmVkaXJlY3Qmc3RhdGU9JHtzdGF0ZX0mY29kZV9jaGFsbGVuZ2U9JHtjaGFsbGVuZ2V9Jm1vZGU9JHttb2RlfSZjb2RlX2NoYWxsZW5nZV9tZXRob2Q9UzI1NmA7XG4gICAgY29uc3QgeyBtb2RlIH0gPSBlbnZpcm9ubWVudDtcbiAgICBjb25zdCBbYXV0aFVSTCwgc2V0QXV0aFVSTF0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW2hhc1NpZ25lZEluLCBzZXRIYXNTaWduZWRJbl0gPSB1c2VTdGF0ZTxib29sZWFuPih0cnVlKTtcbiAgICBjb25zdCBbc3Bpbm5lck9wZW4sIHNldFNwaW5uZXJPcGVuXSA9IHVzZVN0YXRlPGJvb2xlYW4+KHRydWUpXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY3JlYXRlT0F1dGhTdGF0ZSgpLnRoZW4oKHsgc3RhdGUsIGNoYWxsZW5nZSB9KSA9PiB7XG4gICAgICAgICAgICBzZXRBdXRoVVJMKGdldEF1dGhVUkwoc3RhdGUsIGNoYWxsZW5nZSwgbW9kZSkpO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgZ2V0U3RhdHVzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoKEJBQ0tFTkRfVVJMICsgJ2hlYWx0aC1jaGVjay8nLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICdzdHJpcGUtc2lnbmF0dXJlJzogYXdhaXQgZmV0Y2hTdHJpcGVTaWduYXR1cmUoKSxcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcblxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgICAgICB1c2VyX2lkOiB1c2VyQ29udGV4dD8uaWQsXG4gICAgICAgICAgICAgICAgICAgIGFjY291bnRfaWQ6IHVzZXJDb250ZXh0Py5hY2NvdW50LmlkLFxuICAgICAgICAgICAgICAgICAgICBtb2RlOiBtb2RlXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBpZiAoZGF0YS5vaykge1xuICAgICAgICAgICAgICAgIHNldFNwaW5uZXJPcGVuKGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGRhdGEuanNvbigpO1xuICAgICAgICAgICAgc2V0SGFzU2lnbmVkSW4ocmVzdWx0Lmhhc1NpZ25lZEluKTtcblxuICAgICAgICB9XG4gICAgICAgIGdldFN0YXR1cygpO1xuICAgICAgICBjb25zb2xlLmxvZyhlbnZpcm9ubWVudC5jb25zdGFudHMuQkFDS0VORF9VUkwpO1xuICAgIH0sIFttb2RlXSk7XG4gICAgcmV0dXJuIChcblxuICAgICAgICA8Q29udGV4dFZpZXcgdGl0bGU9XCJQYXlvdXRWaWV3IEFwcFwiPlxuXG4gICAgICAgICAgICB7aGFzU2lnbmVkSW4gJiYgIXNwaW5uZXJPcGVuICYmXG4gICAgICAgICAgICAgICAgPEJhZGdlIHR5cGU9XCJpbmZvXCI+WW91IGFyZSBBbHJlYWR5IEF1dGhvcml6ZWQgdG8gT3VyIEFwcCE8L0JhZGdlPlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgeyFoYXNTaWduZWRJbiAmJlxuICAgICAgICAgICAgICAgIDxCYW5uZXJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNyaXRpY2FsXCJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJZb3UgaGF2ZSBub3QgQXV0aG9yaXplZCFcIlxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIlBsZWFzZSBBdXRob3JpemUgYmVmb3JlIHlvdSBjb250aW51ZVwiXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbnM9e1xuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIGhyZWY9e2F1dGhVUkx9PkJlZ2luIEF1dGhvcml6ZTwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgPEJveCBjc3M9e3tcbiAgICAgICAgICAgICAgICBzdGFjazogJ3onLFxuICAgICAgICAgICAgICAgIGFsaWduWDogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgYWxpZ25ZOiAnY2VudGVyJ1xuICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAge3NwaW5uZXJPcGVuICYmXG4gICAgICAgICAgICAgICAgICAgIDxTcGlubmVyIHNpemU9XCJsYXJnZVwiIC8+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvQ29udGV4dFZpZXc+XG5cbiAgICApXG4gICAgICAgIDtcblxuXG59O1xuZXhwb3J0IGRlZmF1bHQgT0F1dGhBcHA7XG5cblxuXG5cbi8qXG4gIFwiaWRcIjogXCJjb20uZXhhbXBsZS5iYXNpYy1vYXV0aDItdGVzdFwiLFxuICBcInZlcnNpb25cIjogXCIwLjAuMlwiLFxuICBcIm5hbWVcIjogXCJCYXNpYy1PQXV0aDIgVGVzdFwiLFxuKi8iLCAiaW1wb3J0IHtcbiAgICBCb3gsXG4gICAgQ29udGV4dFZpZXcsXG4gICAgTGlzdEl0ZW0sXG4gICAgTGlzdCxcbiAgICBCdXR0b24sXG4gICAgQmFubmVyLFxuICAgIEJhZGdlLFxuICAgIEZvcm1GaWVsZEdyb3VwLFxuICAgIFRleHRGaWVsZCxcbiAgICBTcGlubmVyLFxuICAgIElubGluZVxufSBmcm9tIFwiQHN0cmlwZS91aS1leHRlbnNpb24tc2RrL3VpXCI7XG5pbXBvcnQgdHlwZSB7IEV4dGVuc2lvbkNvbnRleHRWYWx1ZSB9IGZyb20gXCJAc3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvY29udGV4dFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY3JlYXRlT0F1dGhTdGF0ZSB9IGZyb20gXCJAc3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvb2F1dGhcIjtcbmltcG9ydCBmZXRjaFN0cmlwZVNpZ25hdHVyZSBmcm9tIFwiQHN0cmlwZS91aS1leHRlbnNpb24tc2RrL3NpZ25hdHVyZVwiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IEJBQ0tFTkRfVVJMID0gJ2h0dHBzOi8vc3RyaXBlLWJhY2tlbmQtazdiNC1qYXlhdGVlcnRoZGFtYmFsLnZlcmNlbC5hcHAvJztcbi8vIGNvbnN0IEJBQ0tFTkRfVVJMID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC8nXG5cblxuXG5jb25zdCBCYWxhbmNlT3ZlcnZpZXdWaWV3ID0gKHsgdXNlckNvbnRleHQsIGVudmlyb25tZW50IH06IEV4dGVuc2lvbkNvbnRleHRWYWx1ZSkgPT4ge1xuICAgIC8vIGNvbnN0IEJBQ0tFTkRfVVJMID0gZW52aXJvbm1lbnQuY29uc3RhbnRzLkJBQ0tFTkRfVVJMO1xuICAgIGNvbnN0IGdldEF1dGhVUkwgPSAoc3RhdGU6IHN0cmluZywgY2hhbGxlbmdlOiBzdHJpbmcsIG1vZGU6ICdsaXZlJyB8ICd0ZXN0JykgPT5cbiAgICAgICAgQkFDS0VORF9VUkwgKyBgL2dldC1vYXV0aC1saW5rLz9yZXNwb25zZV90eXBlPWNvZGUmY2xpZW50JnJlZGlyZWN0JnN0YXRlPSR7c3RhdGV9JmNvZGVfY2hhbGxlbmdlPSR7Y2hhbGxlbmdlfSZtb2RlPSR7bW9kZX0mY29kZV9jaGFsbGVuZ2VfbWV0aG9kPVMyNTZgO1xuICAgIGNvbnN0IG1heExlbmd0aEZvck1vbnRoOiBudW1iZXIgPSAyO1xuICAgIGNvbnN0IG1heExlbmd0aEZvclllYXI6IG51bWJlciA9IDQ7XG4gICAgY29uc3QgeyBtb2RlIH0gPSBlbnZpcm9ubWVudDtcbiAgICBjb25zdCBbZGF0YSwgc2V0TXlEYXRhXSA9IHVzZVN0YXRlKFtdKTtcbiAgICBjb25zdCBbYXV0aFVSTCwgc2V0QXV0aFVSTF0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW2hhc1NpZ25lZEluLCBzZXRIYXNTaWduZWRJbl0gPSB1c2VTdGF0ZSh0cnVlKVxuICAgIGNvbnN0IFttb250aFZhbHVlLCBzZXRNb250aFZhbHVlXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbeWVhclZhbHVlLCBzZXRZZWFyVmFsdWVdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtnb3RQYXlvdXREYXRhLCBzZXRQYXlvdXREYXRhXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKVxuICAgIGNvbnN0IFtnb3RSZXNwb25zZSwgc2V0Z290UmVzcG9uc2VdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpXG4gICAgY29uc3QgW3NwaW5uZXJPcGVuLCBzZXRTcGlubmVyT3Blbl0gPSB1c2VTdGF0ZTxib29sZWFuPih0cnVlKVxuICAgIGNvbnN0IFtwYXlvdXRMb2FkLCBzZXRQYXlvdXRMb2FkXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKVxuICAgIGNvbnN0IGRvd25sb2FkRW5kcG9pbnQgPSBgJHtCQUNLRU5EX1VSTH1kb3dubG9hZC1yZXBvcnQvP2FjY291bnRfaWQ9JHt1c2VyQ29udGV4dD8uYWNjb3VudC5pZH0mY3VycmVudF9tb250aD0ke21vbnRoVmFsdWV9JmN1cnJlbnRfeWVhcj0ke3llYXJWYWx1ZX0mbW9kZT0ke21vZGV9YDtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNyZWF0ZU9BdXRoU3RhdGUoKS50aGVuKCh7IHN0YXRlLCBjaGFsbGVuZ2UgfSkgPT4ge1xuICAgICAgICAgICAgc2V0QXV0aFVSTChnZXRBdXRoVVJMKHN0YXRlLCBjaGFsbGVuZ2UsIG1vZGUpKTtcbiAgICAgICAgfSk7XG5cblxuICAgICAgICBjb25zdCBnZXRTdGF0dXMgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2goQkFDS0VORF9VUkwgKyAnaGVhbHRoLWNoZWNrLycsIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgJ3N0cmlwZS1zaWduYXR1cmUnOiBhd2FpdCBmZXRjaFN0cmlwZVNpZ25hdHVyZSgpLFxuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgICAgIHVzZXJfaWQ6IHVzZXJDb250ZXh0Py5pZCxcbiAgICAgICAgICAgICAgICAgICAgYWNjb3VudF9pZDogdXNlckNvbnRleHQ/LmFjY291bnQuaWQsXG4gICAgICAgICAgICAgICAgICAgIG1vZGU6IG1vZGVcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGlmIChkYXRhLm9rKSB7XG4gICAgICAgICAgICAgICAgc2V0U3Bpbm5lck9wZW4oZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZGF0YS5qc29uKCk7XG4gICAgICAgICAgICBzZXRIYXNTaWduZWRJbihyZXN1bHQuaGFzU2lnbmVkSW4pO1xuICAgICAgICB9XG5cbiAgICAgICAgZ2V0U3RhdHVzKCk7XG4gICAgfSwgW10pO1xuXG5cbiAgICAvLyBIYW5kbGluZyBEYXRlRm9ybSBEYXRhXG4gICAgY29uc3QgbW9udGhWYWx1ZUhhbmRsZXIgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgc2V0TW9udGhWYWx1ZShldmVudC50YXJnZXQudmFsdWUpO1xuICAgIH1cbiAgICBjb25zdCB5ZWFyVmFsdWVIYW5kbGVyID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIHNldFllYXJWYWx1ZShldmVudC50YXJnZXQudmFsdWUpO1xuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChldmVudCkgPT4ge1xuICAgICAgICBzZXRQYXlvdXRMb2FkKHRydWUpXG4gICAgICAgIC8vIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goQkFDS0VORF9VUkwgKyAnZ2V0X3BheW91dHMvJywge1xuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICBtb250aDogbW9udGhWYWx1ZSxcbiAgICAgICAgICAgICAgICB5ZWFyOiB5ZWFyVmFsdWUsXG4gICAgICAgICAgICAgICAgYWNjb3VudF9pZDogdXNlckNvbnRleHQ/LmFjY291bnQuaWQsXG4gICAgICAgICAgICAgICAgbW9kZTogbW9kZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcblxuICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEhUVFAgZXJyb3IhIHN0YXR1czogJHtyZXNwb25zZS5zdGF0dXN9YCk7XG4gICAgICAgIH0gZWxzZSBpZiAocmVzcG9uc2Uub2spIHtcblxuICAgICAgICAgICAgc2V0UGF5b3V0TG9hZChmYWxzZSlcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuICAgICAgICBpZiAocmVzdWx0Lmhhc0RhdGEgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgc2V0UGF5b3V0RGF0YShmYWxzZSlcbiAgICAgICAgICAgIHNldE15RGF0YShKU09OLnBhcnNlKHJlc3VsdC5vdXRwdXRfZGZfanNvbikpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihyZXN1bHQuaGFzRGF0YSA9PSBmYWxzZSl7XG4gICAgICAgICAgICBzZXRQYXlvdXREYXRhKHRydWUpXG4gICAgICAgICAgICAvLyBzZXRnb3RSZXNwb25zZSh0cnVlKVxuICAgICAgICB9XG4gICAgICAgIHNldEhhc1NpZ25lZEluKHJlc3VsdC5oYXNTaWduZWRJbik7XG4gICAgICAgIHNldGdvdFJlc3BvbnNlKHJlc3VsdC5oYXNEYXRhKVxuICAgICAgICBpZiAocmVzdWx0LmVycm9yKSB7XG4gICAgICAgICAgICBzZXRTcGlubmVyT3BlbihmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8Q29udGV4dFZpZXcgdGl0bGU9XCJQYXlvdXRWaWV3XCI+XG5cbiAgICAgICAgICAgIDxCb3ggY3NzPXt7XG4gICAgICAgICAgICAgICAgc3RhY2s6ICd6JyxcbiAgICAgICAgICAgICAgICBhbGlnblg6ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgIGFsaWduWTogJ2NlbnRlcidcbiAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgIHtzcGlubmVyT3BlbiAmJiBoYXNTaWduZWRJbiAmJlxuICAgICAgICAgICAgICAgICAgICA8U3Bpbm5lciBzaXplPVwibGFyZ2VcIiAvPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgeyFzcGlubmVyT3BlbiAmJiBoYXNTaWduZWRJbiAmJlxuICAgICAgICAgICAgICAgIDxCb3ggY3NzPXt7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6ICdzbWFsbCcsXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAncHJpbWFyeScsXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJ2xhcmdlJyxcblxuICAgICAgICAgICAgICAgIH19PlxuXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtRmllbGRHcm91cCBsZWdlbmQ9XCJFbnRlciBNb250aCBhbmQgWWVhclwiXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIkVudGVyIHRoZSBZZWFyIGFuZCBNb250aCBmcm9tIHdoaWNoIHlvdSB3YW50IHRvIGZldGNoIGRhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgdHlwZT1cIm51bWJlclwiIG9uQ2hhbmdlPXttb250aFZhbHVlSGFuZGxlcn0gbWF4TGVuZ3RoPXttYXhMZW5ndGhGb3JNb250aH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIk1vbnRoXCIgbmFtZT1cIm1vbnRoXCIgcGxhY2Vob2xkZXI9XCJNTVwiIGhpZGRlbkVsZW1lbnRzPXtbJ2xhYmVsJ119IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIHR5cGU9XCJudW1iZXJcIiBvbkNoYW5nZT17eWVhclZhbHVlSGFuZGxlcn0gbWF4TGVuZ3RoPXttYXhMZW5ndGhGb3JZZWFyfSBsYWJlbD1cIlllYXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ5ZWFyXCIgcGxhY2Vob2xkZXI9XCJZWVlZXCIgaGlkZGVuRWxlbWVudHM9e1snbGFiZWwnXX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtRmllbGRHcm91cD5cblxuICAgICAgICAgICAgICAgICAgICA8Qm94IGNzcz17e1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhY2s6ICd6JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduWDogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnblk6ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAnbWVkaXVtJ1xuICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtwYXlvdXRMb2FkICYmIGhhc1NpZ25lZEluICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwaW5uZXIgc2l6ZT1cImxhcmdlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHshcGF5b3V0TG9hZCAmJiBoYXNTaWduZWRJbiAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBvblByZXNzPXtoYW5kbGVTdWJtaXR9PkdldCBEYXRhPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG5cbiAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICB7IWdvdFBheW91dERhdGEgJiYgZ290UmVzcG9uc2UgJiYgaGFzU2lnbmVkSW4gJiYgIXNwaW5uZXJPcGVuICYmXG4gICAgICAgICAgICAgICAgPEJhZGdlIHR5cGU9XCJpbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgIFBsZWFzZSBFbnRlciBNb250aCBhbmQgWWVhciBWYWx1ZXMsIHRvIHZpZXcgRGF0YVxuICAgICAgICAgICAgICAgIDwvQmFkZ2U+XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHtnb3RQYXlvdXREYXRhICYmICFnb3RSZXNwb25zZSAmJiAhZGF0YS5sZW5ndGggJiYgaGFzU2lnbmVkSW4gJiZcbiAgICAgICAgICAgICAgICA8QmFkZ2UgdHlwZT1cIndhcm5pbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgVGhlcmUgaXMgbm8gRGF0YSBQcmVzZW50IGZvciB0aGlzIE1vbnRoIGFuZCBZZWFyXG4gICAgICAgICAgICAgICAgPC9CYWRnZT5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHtnb3RSZXNwb25zZSAmJiBoYXNTaWduZWRJbiAmJlxuICAgICAgICAgICAgICAgIDxCb3ggY3NzPXt7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6ICd4c21hbGwnLFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3ByaW1hcnknLFxuICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICd4c21hbGwnLFxuICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICA8QmFkZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJpbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBUb3RhbCBQYXlvdXRzIGZvciB0aGlzIE1vbnRoIGFuZCBZZWFyOiB7ZGF0YS5sZW5ndGh9XG4gICAgICAgICAgICAgICAgICAgIDwvQmFkZ2U+XG5cbiAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHtnb3RSZXNwb25zZSAmJiBoYXNTaWduZWRJbiAmJiA8TGlzdD5cbiAgICAgICAgICAgICAgICB7ZGF0YS5tYXAoKGlubGluZV9kYXRhKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2lubGluZV9kYXRhLk5ldH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17bmV3IERhdGUoaW5saW5lX2RhdGEuQ3JlYXRlZCkudG9Mb2NhbGVTdHJpbmcoXCJlbi1VU1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeWVhcjogXCJudW1lcmljXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9udGg6IFwibG9uZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRheTogXCJudW1lcmljXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHNlY29uZGFyeVRpdGxlPXs8Qm94PntpbmxpbmVfZGF0YS5EZXNjcmlwdGlvbn08L0JveD59XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L0xpc3Q+XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIDxCb3ggY3NzPXt7IHN0YWNrOiAneScsIGdhcDogJ2xhcmdlJywgbWFyZ2luOiAnbGFyZ2UnIH19PlxuICAgICAgICAgICAgICAgIHtnb3RSZXNwb25zZSAmJlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGhyZWY9e2Rvd25sb2FkRW5kcG9pbnR9IHR5cGU9XCJwcmltYXJ5XCIgY3NzPXt7IHdpZHRoOiAnZmlsbCcsIGFsaWduWDogJ2NlbnRlcicgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiPkRvd25sb2FkQ1NWPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgeyFoYXNTaWduZWRJbiAmJiAhc3Bpbm5lck9wZW4gJiZcbiAgICAgICAgICAgICAgICAgICAgPEJhbm5lclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNyaXRpY2FsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiWW91IGhhdmUgbm90IFNpZ24gSW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJQbGVhc2Ugc2lnbiBpbiBiZWZvcmUgeW91IGNvbnRpbnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbnM9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBocmVmPXthdXRoVVJMfT5CZWdpbiBBdXRob3JpemU8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIDwvQm94PlxuXG4gICAgICAgIDwvQ29udGV4dFZpZXc+XG4gICAgKVxufTtcblxuZXhwb3J0IGRlZmF1bHQgQmFsYW5jZU92ZXJ2aWV3VmlldzsiLCAiaW1wb3J0IHtcbiAgICBCb3gsXG4gICAgQnV0dG9uLFxuICAgIEJhbm5lcixcbiAgICBTZXR0aW5nc1ZpZXcsXG4gICAgU3Bpbm5lclxufSBmcm9tIFwiQHN0cmlwZS91aS1leHRlbnNpb24tc2RrL3VpXCI7XG5pbXBvcnQgdHlwZSB7IEV4dGVuc2lvbkNvbnRleHRWYWx1ZSB9IGZyb20gXCJAc3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvY29udGV4dFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY3JlYXRlT0F1dGhTdGF0ZSB9IGZyb20gJ0BzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay9vYXV0aCc7XG5cbmNvbnN0IEJBQ0tFTkRfVVJMID0gJ2h0dHBzOi8vc3RyaXBlLWJhY2tlbmQtazdiNC1qYXlhdGVlcnRoZGFtYmFsLnZlcmNlbC5hcHAvJztcblxuY29uc3QgQXBwU2V0dGluZ3MgPSAoeyB1c2VyQ29udGV4dCwgZW52aXJvbm1lbnQgfTogRXh0ZW5zaW9uQ29udGV4dFZhbHVlKSA9PiB7XG4gICAgY29uc3QgQkFDS0VORF9VUkwgPSBlbnZpcm9ubWVudC5jb25zdGFudHMuQkFDS0VORF9VUkw7XG4gICAgY29uc3QgZ2V0QXV0aFVSTCA9IChzdGF0ZTogc3RyaW5nLCBjaGFsbGVuZ2U6IHN0cmluZywgbW9kZTogJ2xpdmUnIHwgJ3Rlc3QnKSA9PlxuICAgIEJBQ0tFTkRfVVJMICsgYC9nZXQtb2F1dGgtbGluay8/cmVzcG9uc2VfdHlwZT1jb2RlJmNsaWVudCZyZWRpcmVjdCZzdGF0ZT0ke3N0YXRlfSZjb2RlX2NoYWxsZW5nZT0ke2NoYWxsZW5nZX0mbW9kZT0ke21vZGV9JmNvZGVfY2hhbGxlbmdlX21ldGhvZD1TMjU2YDtcbiAgICBjb25zdCB7IG1vZGUgfSA9IGVudmlyb25tZW50O1xuICAgIGNvbnN0IFtkZWF1dGgsIHNldERlYXV0aF0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW3VzZXJFeGlzdCwgc2V0VXNlckV4aXN0XSA9IHVzZVN0YXRlPGJvb2xlYW4+KCk7XG4gICAgY29uc3QgW2F1dGhVUkwsIHNldEF1dGhVUkxdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtzcGlubmVyT3Blbiwgc2V0U3Bpbm5lck9wZW5dID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpXG4gICAgY29uc3QgW2xvYWRpbmdTcGlubmVyLCBzZXRMb2FkaW5nU3Bpbm5lcl0gPSB1c2VTdGF0ZTxib29sZWFuPih0cnVlKVxuICAgIGNvbnN0IGRlYXV0aG9yaXplX3VzZXIgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIHNldFNwaW5uZXJPcGVuKHRydWUpXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaChCQUNLRU5EX1VSTCArICdkZWF1dGhvcml6ZV91c2VyLycsIHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICB1c2VyX2lkOiB1c2VyQ29udGV4dD8uaWQsXG4gICAgICAgICAgICAgICAgYWNjb3VudF9pZDogdXNlckNvbnRleHQ/LmFjY291bnQuaWQsXG4gICAgICAgICAgICAgICAgbW9kZTogbW9kZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSkudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IHNldFVzZXJFeGlzdChkYXRhLnVzZXJFeGlzdCkpXG4gICAgfVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY3JlYXRlT0F1dGhTdGF0ZSgpLnRoZW4oKHsgc3RhdGUsIGNoYWxsZW5nZSB9KSA9PiB7XG4gICAgICAgICAgICBzZXRBdXRoVVJMKGdldEF1dGhVUkwoc3RhdGUsIGNoYWxsZW5nZSwgbW9kZSkpO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgZ2V0VXNlclN0YXR1cyA9YXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChCQUNLRU5EX1VSTCArICdjaGVjay11c2VyLycsIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgICAgICBhY2NvdW50X2lkOiB1c2VyQ29udGV4dD8uYWNjb3VudC5pZCxcbiAgICAgICAgICAgICAgICAgICAgbW9kZTogbW9kZVxuICAgICAgICAgICAgICAgIH0pXG4gICAgXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLm9rKXtcbiAgICAgICAgICAgICAgICBzZXRMb2FkaW5nU3Bpbm5lcihmYWxzZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICBzZXRVc2VyRXhpc3QoZGF0YS51c2VyRXhpc3QpO1xuICAgICAgICB9XG4gICAgICAgIGdldFVzZXJTdGF0dXMoKTtcbiAgICAgICAgXG4gICAgfSwgW21vZGVdKTtcblxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFNldHRpbmdzVmlldyBvblNhdmU9eygpID0+IHtcbiAgICAgICAgfX0+XG4gICAgICAgICAgICA8Qm94IGNzcz17e1xuICAgICAgICAgICAgICAgIHN0YWNrOiAneicsXG4gICAgICAgICAgICAgICAgYWxpZ25YOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICBhbGlnblk6ICdjZW50ZXInXG4gICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICB7bG9hZGluZ1NwaW5uZXIgJiZcbiAgICAgICAgICAgICAgICAgICAgPFNwaW5uZXIgc2l6ZT1cImxhcmdlXCIgLz5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgICBjc3M9e3tcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogXCJjb250YWluZXJcIixcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIm1lZGl1bVwiLFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBcImxhcmdlXCIsXG4gICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAge3VzZXJFeGlzdCAmJiAhc3Bpbm5lck9wZW4gJiZcbiAgICAgICAgICAgICAgICAgICAgPEJhbm5lclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNyaXRpY2FsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiUmVtb3ZlIEF1dGhvcml6YXRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJZb3Ugd2lsbCBubyBsb25nZXIgYWJsZSB0byBhY2Nlc3MgeW91ciBkYXRhIHRocm91Z2ggQXBwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbnM9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25QcmVzcz17ZGVhdXRob3JpemVfdXNlcn0gdHlwZT1cImRlc3RydWN0aXZlXCI+UmVtb3ZlIEF1dGhvcml6YXRpb248L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAge3VzZXJFeGlzdCAmJiBzcGlubmVyT3BlbiAmJlxuICAgICAgICAgICAgICAgICAgICA8QmFubmVyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2F1dGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlJlbW92aW5nIEF1dGhvcml6YXRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJEb24ndCB3b3JyeSB5b3UgY2FuIGFkZCBhdXRob3JpemF0aW9uIGFnYWluIGFmdGVyIHRoaXMgcHJjb2VzcyBnZXRzIGNvbXBsZXRlLlwiXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb25zPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3Bpbm5lciBzaXplPVwibGFyZ2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHshdXNlckV4aXN0ICYmICFsb2FkaW5nU3Bpbm5lciAmJlxuICAgICAgICAgICAgICAgICAgICA8QmFubmVyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZGVmYXVsdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkJlZ2luIEF1dGhvcml6YXRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJZb3UgYXJlIG5vdCBhdXRob3JpemVkIHlvdXIgYWNjb3VudCB3aXRoIG91ciBzZXJ2ZXJzLCBQbGVhc2UgYmVnaW4gdGhlIEF1dGhvcml6YXRpb24gUHJvY2Vzc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb25zPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGhyZWY9e2F1dGhVUkx9IHR5cGU9XCJwcmltYXJ5XCI+QmVnaW4gQXV0aG9yaXphdGlvbjwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L1NldHRpbmdzVmlldz5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwU2V0dGluZ3M7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxVQUFBLFVBQUEsVUFBQTtBQUVhLGNBQUEsYUFBWSxHQUFBLFFBQUEsNEJBR3ZCLFdBQVc7QUFHQSxjQUFBLGlCQUFn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QUEsZUFBQSxLQUFBO01BQWMsRUFBQSxDQUFBO0FBR2QsYUFBQSxlQUFBLFNBQUEsUUFBQSxFQUFBLFlBQUEsTUFBQSxLQUFBLFdBQUE7QUFBQSxlQUFBLEtBQUE7TUFBSSxFQUFBLENBQUE7QUFDSixhQUFBLGVBQUEsU0FBQSxZQUFBLEVBQUEsWUFBQSxNQUFBLEtBQUEsV0FBQTtBQUFBLGVBQUEsS0FBQTtNQUFRLEVBQUEsQ0FBQTtBQUNSLGFBQUEsZUFBQSxTQUFBLFFBQUEsRUFBQSxZQUFBLE1BQUEsS0FBQSxXQUFBO0FBQUEsZUFBQSxLQUFBO01BQUksRUFBQSxDQUFBO0FBQ0osYUFBQSxlQUFBLFNBQUEsYUFBQSxFQUFBLFlBQUEsTUFBQSxLQUFBLFdBQUE7QUFBQSxlQUFBLEtBQUE7TUFBUyxFQUFBLENBQUE7QUFDVCxhQUFBLGVBQUEsU0FBQSxZQUFBLEVBQUEsWUFBQSxNQUFBLEtBQUEsV0FBQTtBQUFBLGVBQUEsS0FBQTtNQUFRLEVBQUEsQ0FBQTtBQUtSLGFBQUEsZUFBQSxTQUFBLFdBQUEsRUFBQSxZQUFBLE1BQUEsS0FBQSxXQUFBO0FBQUEsZUFBQSxLQUFBO01BQU8sRUFBQSxDQUFBO0FBRVAsYUFBQSxlQUFBLFNBQUEsT0FBQSxFQUFBLFlBQUEsTUFBQSxLQUFBLFdBQUE7QUFBQSxlQUFBLEtBQUE7TUFBRyxFQUFBLENBQUE7QUFDSCxhQUFBLGVBQUEsU0FBQSxXQUFBLEVBQUEsWUFBQSxNQUFBLEtBQUEsV0FBQTtBQUFBLGVBQUEsS0FBQTtNQUFPLEVBQUEsQ0FBQTtBQUNQLGFBQUEsZUFBQSxTQUFBLFlBQUEsRUFBQSxZQUFBLE1BQUEsS0FBQSxXQUFBO0FBQUEsZUFBQSxLQUFBO01BQVEsRUFBQSxDQUFBO0FBQ1IsYUFBQSxlQUFBLFNBQUEsYUFBQSxFQUFBLFlBQUEsTUFBQSxLQUFBLFdBQUE7QUFBQSxlQUFBLEtBQUE7TUFBUyxFQUFBLENBQUE7QUFDVCxhQUFBLGVBQUEsU0FBQSxTQUFBLEVBQUEsWUFBQSxNQUFBLEtBQUEsV0FBQTtBQUFBLGVBQUEsS0FBQTtNQUFLLEVBQUEsQ0FBQTtBQUNMLGFBQUEsZUFBQSxTQUFBLGFBQUEsRUFBQSxZQUFBLE1BQUEsS0FBQSxXQUFBO0FBQUEsZUFBQSxLQUFBO01BQVMsRUFBQSxDQUFBO0FBQ1QsYUFBQSxlQUFBLFNBQUEsYUFBQSxFQUFBLFlBQUEsTUFBQSxLQUFBLFdBQUE7QUFBQSxlQUFBLEtBQUE7TUFBUyxFQUFBLENBQUE7QUFDVCxhQUFBLGVBQUEsU0FBQSxlQUFBLEVBQUEsWUFBQSxNQUFBLEtBQUEsV0FBQTtBQUFBLGVBQUEsS0FBQTtNQUFXLEVBQUEsQ0FBQTtBQUNYLGFBQUEsZUFBQSxTQUFBLGFBQUEsRUFBQSxZQUFBLE1BQUEsS0FBQSxXQUFBO0FBQUEsZUFBQSxLQUFBO01BQVMsRUFBQSxDQUFBO0FBQ1QsYUFBQSxlQUFBLFNBQUEsbUJBQUEsRUFBQSxZQUFBLE1BQUEsS0FBQSxXQUFBO0FBQUEsZUFBQSxLQUFBO01BQWUsRUFBQSxDQUFBO0FBQ2YsYUFBQSxlQUFBLFNBQUEsWUFBQSxFQUFBLFlBQUEsTUFBQSxLQUFBLFdBQUE7QUFBQSxlQUFBLEtBQUE7TUFBUSxFQUFBLENBQUE7QUFDUixhQUFBLGVBQUEsU0FBQSxRQUFBLEVBQUEsWUFBQSxNQUFBLEtBQUEsV0FBQTtBQUFBLGVBQUEsS0FBQTtNQUFJLEVBQUEsQ0FBQTtBQUlKLGFBQUEsZUFBQSxTQUFBLFdBQUEsRUFBQSxZQUFBLE1BQUEsS0FBQSxXQUFBO0FBQUEsZUFBQSxLQUFBO01BQU8sRUFBQSxDQUFBO0FBRVQsbUJBQUEsdUNBQUEsT0FBQTtBQUNBLFVBQUEsc0JBQUE7QUFDRSxhQUFBLGVBQUEsU0FBQSxPQUFBLEVBQUEsWUFBQSxNQUFBLEtBQUEsV0FBQTtBQUFBLGVBQUEsb0JBQUE7TUFBRyxFQUFBLENBQUE7QUFDSCxhQUFBLGVBQUEsU0FBQSxVQUFBLEVBQUEsWUFBQSxNQUFBLEtBQUEsV0FBQTtBQUFBLGVBQUEsb0JBQUE7TUFBTSxFQUFBLENBQUE7QUFDTixhQUFBLGVBQUEsU0FBQSxZQUFBLEVBQUEsWUFBQSxNQUFBLEtBQUEsV0FBQTtB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QUEyQjtBQUFBLFFBQ3pCLGVBQWU7QUFBQSxVQUNiO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0EsYUFBYTtBQUFBLFFBQ2IsV0FBVztBQUFBLE1BQ2I7QUFBQSxJQUNGO0FBQUEsSUFDQSxhQUFhO0FBQUEsTUFDWCxlQUFlO0FBQUEsSUFDakI7QUFBQSxFQUNGOyIsCiAgIm5hbWVzIjogWyJjcmVhdGVPQXV0aFN0YXRlIiwgImZldGNoU3RyaXBlU2lnbmF0dXJlIiwgIkJBQ0tFTkRfVVJMIiwgIm1vZGUiLCAiZmV0Y2hTdHJpcGVTaWduYXR1cmUiLCAiaW1wb3J0X3VpIiwgImltcG9ydF9vYXV0aCIsICJpbXBvcnRfc2lnbmF0dXJlIiwgImltcG9ydF9qc3hfcnVudGltZSIsICJtb2RlIiwgImRhdGEiLCAiZmV0Y2hTdHJpcGVTaWduYXR1cmUiLCAiaW1wb3J0X3VpIiwgImltcG9ydF9yZWFjdCIsICJpbXBvcnRfb2F1dGgiLCAiaW1wb3J0X2pzeF9ydW50aW1lIiwgIkJBQ0tFTkRfVVJMIiwgIm1vZGUiLCAiZGF0YSJdCn0K
