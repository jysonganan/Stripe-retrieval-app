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
    const BACKEND_URL = environment.constants.BACKEND_URL;
    const getAuthURL = (state, challenge, mode2) => BACKEND_URL + `get-oauth-link/?response_type=code&client&redirect&state=${state}&code_challenge=${challenge}&mode=${mode2}&code_challenge_method=S256`;
    const { mode } = environment;
    const [authURL, setAuthURL] = useState("");
    const [hasSignedIn, setHasSignedIn] = useState(true);
    const [spinnerOpen, setSpinnerOpen] = useState(true);
    useEffect(() => {
      (0, import_oauth.createOAuthState)().then(({ state, challenge }) => {
        setAuthURL(getAuthURL(state, challenge, mode));
      });
      const getStatus = () => __async(void 0, null, function* () {
        const data = yield fetch(BACKEND_URL + "health-check/", {
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
  var BalanceOverviewView = ({ userContext, environment }) => {
    const BACKEND_URL = environment.constants.BACKEND_URL;
    const getAuthURL = (state, challenge, mode2) => BACKEND_URL + `/get-oauth-link/?response_type=code&client&redirect&state=${state}&code_challenge=${challenge}&mode=${mode2}&code_challenge_method=S256`;
    const maxLengthForMonth = 2;
    const maxLengthForYear = 4;
    const { mode } = environment;
    let viewData = {};
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
        console.log(response);
        setPayoutData(true);
        setPayoutLoad(false);
      }
      const data2 = yield response.json();
      setMyData(JSON.parse(data2.output_df_json));
      setHasSignedIn(data2.hasSignedIn);
      setgotResponse(data2.hasData);
      if (data2.error) {
        setSpinnerOpen(false);
      }
    });
    let created = [];
    let descr = [];
    let amount = [];
    let net = [];
    const values = Object.values(data);
    for (let val in values) {
      created.push(values[val].Created);
      descr.push(values[val].Description);
      net.push(values[val].Net);
    }
    let new_created = created.map((create) => new Date(create).toLocaleString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    }));
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
            padding: "medium",
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
        !gotPayoutData && hasSignedIn && !spinnerOpen && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_ui2.Badge, {
          type: "info",
          children: "Please Enter Month and Year Values, to view Data"
        }),
        gotPayoutData && !data.length && hasSignedIn && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_ui2.Badge, {
          type: "warning",
          children: "There is no Data Present for this Month and Year"
        }),
        gotResponse && hasSignedIn && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_ui2.List, {
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_ui2.ListItem, {
              value: net[0],
              id: "2",
              title: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_ui2.Box, {
                children: new_created[0]
              }),
              secondaryTitle: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_ui2.Box, {
                children: descr[0]
              })
            }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_ui2.ListItem, {
              value: net[1],
              id: "2",
              title: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_ui2.Box, {
                children: new_created[1]
              }),
              secondaryTitle: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_ui2.Box, {
                children: descr[1]
              })
            }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_ui2.ListItem, {
              value: net[2],
              id: "2",
              title: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_ui2.Box, {
                children: new_created[2]
              }),
              secondaryTitle: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_ui2.Box, {
                children: descr[2]
              })
            }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_ui2.ListItem, {
              value: net[3],
              id: "2",
              title: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_ui2.Box, {
                children: new_created[3]
              }),
              secondaryTitle: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_ui2.Box, {
                children: descr[3]
              })
            }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_ui2.ListItem, {
              value: net[4],
              id: "2",
              title: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_ui2.Box, {
                children: new_created[4]
              }),
              secondaryTitle: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_ui2.Box, {
                children: descr[4]
              })
            }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_ui2.ListItem, {
              value: net[5],
              id: "2",
              title: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_ui2.Box, {
                children: new_created[5]
              }),
              secondaryTitle: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_ui2.Box, {
                children: descr[5]
              })
            }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_ui2.ListItem, {
              value: net[6],
              id: "2",
              title: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_ui2.Box, {
                children: new_created[6]
              }),
              secondaryTitle: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_ui2.Box, {
                children: descr[6]
              })
            }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_ui2.ListItem, {
              value: net[7],
              id: "2",
              title: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_ui2.Box, {
                children: new_created[7]
              }),
              secondaryTitle: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_ui2.Box, {
                children: descr[7]
              })
            }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_ui2.ListItem, {
              value: net[8],
              id: "2",
              title: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_ui2.Box, {
                children: new_created[8]
              }),
              secondaryTitle: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_ui2.Box, {
                children: descr[8]
              })
            })
          ]
        }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_ui2.Box, {
          css: { stack: "y", gap: "large", margin: "large" },
          children: [
            gotResponse && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_ui2.Button, {
              href: downloadEndpoint,
              type: "primary",
              css: { width: "fill", alignX: "center" },
              target: "_blank",
              children: "Download CSV"
            }),
            !hasSignedIn && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_ui2.Banner, {
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
    const BACKEND_URL = environment.constants.BACKEND_URL;
    const getAuthURL = (state, challenge, mode2) => BACKEND_URL + `/get-oauth-link/?response_type=code&client&redirect&state=${state}&code_challenge=${challenge}&mode=${mode2}&code_challenge_method=S256`;
    const { mode } = environment;
    const [deauth, setDeauth] = (0, import_react2.useState)("");
    const [userExist, setUserExist] = (0, import_react2.useState)();
    const [authURL, setAuthURL] = (0, import_react2.useState)("");
    const [spinnerOpen, setSpinnerOpen] = (0, import_react2.useState)(false);
    const [loadingSpinner, setLoadingSpinner] = (0, import_react2.useState)(true);
    const deauthorize_user = () => __async(void 0, null, function* () {
      setSpinnerOpen(true);
      const data = yield fetch(BACKEND_URL + "deauthorize_user/", {
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
        const response = yield fetch(BACKEND_URL + "check-user/", {
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
  var BUILD_TIME = "2023-04-09 22:29:18.004495503 +0530 IST m=+0.077206494";
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0BzdHJpcGUvc3JjL3VpL0BzYWlsL3VpL2luZGV4LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9Ac3RyaXBlL3NyYy91aS9Ac3RyaXBlLWludGVybmFsL3RhaWxvci1kYXNoYm9hcmQtY29tcG9uZW50cy9pbmRleC50cyIsICIuLi9ub2RlX21vZHVsZXMvQHN0cmlwZS9zcmMvdWkvbWFudWFsX2NvbXBvbmVudHMudHMiLCAiLi4vbm9kZV9tb2R1bGVzL0BzdHJpcGUvc3JjL3VpL2luZGV4LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9pbnZhcmlhbnQvYnJvd3Nlci5qcyIsICIuLi9ub2RlX21vZHVsZXMvQHN0cmlwZS9zcmMvdXRpbHMvX2VuZHBvaW50LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9Ac3RyaXBlL3NyYy91dGlscy9vYXV0aC50cyIsICIuLi9ub2RlX21vZHVsZXMvQHN0cmlwZS9zcmMvb2F1dGgudHMiLCAiLi4vbm9kZV9tb2R1bGVzL0BzdHJpcGUvc3JjL3V0aWxzL3NpZ25hdHVyZS50cyIsICIuLi9ub2RlX21vZHVsZXMvQHN0cmlwZS9zcmMvc2lnbmF0dXJlLnRzIiwgIi4uL25vZGVfbW9kdWxlcy9Ac3RyaXBlL3NyYy92ZXJzaW9uLnRzIiwgIm1hbmlmZXN0LmpzIiwgIi4uL3NyYy92aWV3cy9BcHAudHN4IiwgIi4uL3NyYy92aWV3cy9CYWxhbmNlT3ZlcnZpZXdWaWV3LnRzeCIsICIuLi9zcmMvdmlld3MvQXBwU2V0dGluZ3MudHN4Il0sCiAgInNvdXJjZXNDb250ZW50IjogW251bGwsIG51bGwsIG51bGwsIG51bGwsICIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBVc2UgaW52YXJpYW50KCkgdG8gYXNzZXJ0IHN0YXRlIHdoaWNoIHlvdXIgcHJvZ3JhbSBhc3N1bWVzIHRvIGJlIHRydWUuXG4gKlxuICogUHJvdmlkZSBzcHJpbnRmLXN0eWxlIGZvcm1hdCAob25seSAlcyBpcyBzdXBwb3J0ZWQpIGFuZCBhcmd1bWVudHNcbiAqIHRvIHByb3ZpZGUgaW5mb3JtYXRpb24gYWJvdXQgd2hhdCBicm9rZSBhbmQgd2hhdCB5b3Ugd2VyZVxuICogZXhwZWN0aW5nLlxuICpcbiAqIFRoZSBpbnZhcmlhbnQgbWVzc2FnZSB3aWxsIGJlIHN0cmlwcGVkIGluIHByb2R1Y3Rpb24sIGJ1dCB0aGUgaW52YXJpYW50XG4gKiB3aWxsIHJlbWFpbiB0byBlbnN1cmUgbG9naWMgZG9lcyBub3QgZGlmZmVyIGluIHByb2R1Y3Rpb24uXG4gKi9cblxudmFyIGludmFyaWFudCA9IGZ1bmN0aW9uKGNvbmRpdGlvbiwgZm9ybWF0LCBhLCBiLCBjLCBkLCBlLCBmKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFyaWFudCByZXF1aXJlcyBhbiBlcnJvciBtZXNzYWdlIGFyZ3VtZW50Jyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKCFjb25kaXRpb24pIHtcbiAgICB2YXIgZXJyb3I7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBlcnJvciA9IG5ldyBFcnJvcihcbiAgICAgICAgJ01pbmlmaWVkIGV4Y2VwdGlvbiBvY2N1cnJlZDsgdXNlIHRoZSBub24tbWluaWZpZWQgZGV2IGVudmlyb25tZW50ICcgK1xuICAgICAgICAnZm9yIHRoZSBmdWxsIGVycm9yIG1lc3NhZ2UgYW5kIGFkZGl0aW9uYWwgaGVscGZ1bCB3YXJuaW5ncy4nXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgYXJncyA9IFthLCBiLCBjLCBkLCBlLCBmXTtcbiAgICAgIHZhciBhcmdJbmRleCA9IDA7XG4gICAgICBlcnJvciA9IG5ldyBFcnJvcihcbiAgICAgICAgZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJnc1thcmdJbmRleCsrXTsgfSlcbiAgICAgICk7XG4gICAgICBlcnJvci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgIH1cblxuICAgIGVycm9yLmZyYW1lc1RvUG9wID0gMTsgLy8gd2UgZG9uJ3QgY2FyZSBhYm91dCBpbnZhcmlhbnQncyBvd24gZnJhbWVcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBpbnZhcmlhbnQ7XG4iLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAiXG5cbmltcG9ydCBBcHAgZnJvbSAnLi4vc3JjL3ZpZXdzL0FwcCc7XG5cbmltcG9ydCBCYWxhbmNlT3ZlcnZpZXdWaWV3IGZyb20gJy4uL3NyYy92aWV3cy9CYWxhbmNlT3ZlcnZpZXdWaWV3JztcblxuaW1wb3J0IEFwcFNldHRpbmdzIGZyb20gJy4uL3NyYy92aWV3cy9BcHBTZXR0aW5ncyc7XG5cblxuZXhwb3J0ICogZnJvbSAnQHN0cmlwZS91aS1leHRlbnNpb24tc2RrL3ZlcnNpb24nO1xuZXhwb3J0IGNvbnN0IEJVSUxEX1RJTUUgPSAnMjAyMy0wNC0wOSAyMjoyOToxOC4wMDQ0OTU1MDMgKzA1MzAgSVNUIG09KzAuMDc3MjA2NDk0J1xuXG5leHBvcnQge1xuXHRcblx0QXBwLFxuXHRcblx0QmFsYW5jZU92ZXJ2aWV3Vmlldyxcblx0XG5cdEFwcFNldHRpbmdzLFxuXHRcbn07XG5leHBvcnQgZGVmYXVsdCB7XG4gIFwiaWRcIjogXCJjb20uZXhhbXBsZS5zdHJpcGUtYXBwXy1wYXlvdXRcIixcbiAgXCJ2ZXJzaW9uXCI6IFwiMC4wLjJcIixcbiAgXCJuYW1lXCI6IFwiU3RyaXBlUmV0cmlldmFsQXBwXCIsXG4gIFwiaWNvblwiOiBcIlwiLFxuICBcInBlcm1pc3Npb25zXCI6IFtcbiAgICB7XG4gICAgICBcInBlcm1pc3Npb25cIjogXCJzZWNyZXRfd3JpdGVcIixcbiAgICAgIFwicHVycG9zZVwiOiBcIkFsbG93cyBzdG9yaW5nIHNlY3JldHMgYmV0d2VlbiBwYWdlIHJlbG9hZHNcIlxuICAgIH1cbiAgXSxcbiAgXCJhcHBfYmFja2VuZFwiOiB7XG4gICAgXCJ3ZWJob29rc1wiOiBudWxsXG4gIH0sXG4gIFwidWlfZXh0ZW5zaW9uXCI6IHtcbiAgICBcInZpZXdzXCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJ2aWV3cG9ydFwiOiBcInN0cmlwZS5kYXNoYm9hcmQuaG9tZS5vdmVydmlld1wiLFxuICAgICAgICBcImNvbXBvbmVudFwiOiBcIkFwcFwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcInZpZXdwb3J0XCI6IFwic3RyaXBlLmRhc2hib2FyZC5iYWxhbmNlLm92ZXJ2aWV3XCIsXG4gICAgICAgIFwiY29tcG9uZW50XCI6IFwiQmFsYW5jZU92ZXJ2aWV3Vmlld1wiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcInZpZXdwb3J0XCI6IFwic2V0dGluZ3NcIixcbiAgICAgICAgXCJjb21wb25lbnRcIjogXCJBcHBTZXR0aW5nc1wiXG4gICAgICB9XG4gICAgXSxcbiAgICBcImNvbnRlbnRfc2VjdXJpdHlfcG9saWN5XCI6IHtcbiAgICAgIFwiY29ubmVjdC1zcmNcIjogW1xuICAgICAgICBcImh0dHBzOi8vc3RyaXBlLWJhY2tlbmQtazdiNC1qYXlhdGVlcnRoZGFtYmFsLnZlcmNlbC5hcHAvaGVhbHRoLWNoZWNrL1wiLFxuICAgICAgICBcImh0dHBzOi8vc3RyaXBlLWJhY2tlbmQtazdiNC1qYXlhdGVlcnRoZGFtYmFsLnZlcmNlbC5hcHAvZ2V0LW9hdXRoLWxpbmsvXCIsXG4gICAgICAgIFwiaHR0cHM6Ly9zdHJpcGUtYmFja2VuZC1rN2I0LWpheWF0ZWVydGhkYW1iYWwudmVyY2VsLmFwcC9hdXRob3JpemVfb2F1dGgvXCIsXG4gICAgICAgIFwiaHR0cHM6Ly9zdHJpcGUtYmFja2VuZC1rN2I0LWpheWF0ZWVydGhkYW1iYWwudmVyY2VsLmFwcC9nZXRfcGF5b3V0cy9cIixcbiAgICAgICAgXCJodHRwczovL3N0cmlwZS1iYWNrZW5kLWs3YjQtamF5YXRlZXJ0aGRhbWJhbC52ZXJjZWwuYXBwL2Rvd25sb2FkLXJlcG9ydC9cIixcbiAgICAgICAgXCJodHRwczovL3N0cmlwZS1iYWNrZW5kLWs3YjQtamF5YXRlZXJ0aGRhbWJhbC52ZXJjZWwuYXBwL2NoZWNrLXVzZXIvXCIsXG4gICAgICAgIFwiaHR0cHM6Ly9zdHJpcGUtYmFja2VuZC1rN2I0LWpheWF0ZWVydGhkYW1iYWwudmVyY2VsLmFwcC9kZWF1dGhvcml6ZV91c2VyL1wiXG4gICAgICBdLFxuICAgICAgXCJpbWFnZS1zcmNcIjogbnVsbCxcbiAgICAgIFwicHVycG9zZVwiOiBcIlNlbmQgRGF0YSB0byBWZXJjZWxEZXBsb3lcIlxuICAgIH1cbiAgfSxcbiAgXCJjb25zdGFudHNcIjoge1xuICAgIFwiQkFDS0VORF9VUkxcIjogXCJodHRwczovL3N0cmlwZS1iYWNrZW5kLWs3YjQtamF5YXRlZXJ0aGRhbWJhbC52ZXJjZWwuYXBwL1wiXG4gIH1cbn1cbiIsICJpbXBvcnQge1xuICAgIENvbnRleHRWaWV3LFxuICAgIEJ1dHRvbixcbiAgICBCb3gsXG4gICAgQmFkZ2UsXG4gICAgQmFubmVyLFxuICAgIFNwaW5uZXJcbn0gZnJvbSAnQHN0cmlwZS91aS1leHRlbnNpb24tc2RrL3VpJztcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNyZWF0ZU9BdXRoU3RhdGUgfSBmcm9tICdAc3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvb2F1dGgnO1xuaW1wb3J0IHR5cGUgeyBFeHRlbnNpb25Db250ZXh0VmFsdWUgfSBmcm9tICdAc3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvY29udGV4dCc7XG5pbXBvcnQgZmV0Y2hTdHJpcGVTaWduYXR1cmUgZnJvbSAnQHN0cmlwZS91aS1leHRlbnNpb24tc2RrL3NpZ25hdHVyZSc7XG5cblxuY29uc3QgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gPSBSZWFjdDtcblxuLy8gY29uc3QgQkFDS0VORF9VUkwgPSAnaHR0cDovL2xvY2FsaG9zdDo1MDAwLydcblxuY29uc3QgZ2V0UmVkaXJlY3RVUkwgPSAobW9kZTogJ2xpdmUnIHwgJ3Rlc3QnKSA9PiBgaHR0cHM6Ly9kYXNoYm9hcmQuc3RyaXBlLmNvbS8ke21vZGUgPT09ICd0ZXN0JyA/ICd0ZXN0LycgOiAnbGl2ZS8nfWFwcHMtb2F1dGgvY29tLmV4YW1wbGUub2F1dGgtZXhhbXBsZWA7XG5cblxuXG5jb25zdCBPQXV0aEFwcCA9ICh7IGVudmlyb25tZW50LCB1c2VyQ29udGV4dCB9OiBFeHRlbnNpb25Db250ZXh0VmFsdWUpID0+IHtcbiAgICBjb25zdCBCQUNLRU5EX1VSTCA9IGVudmlyb25tZW50LmNvbnN0YW50cy5CQUNLRU5EX1VSTDtcblxuICAgIGNvbnN0IGdldEF1dGhVUkwgPSAoc3RhdGU6IHN0cmluZywgY2hhbGxlbmdlOiBzdHJpbmcsIG1vZGU6ICdsaXZlJyB8ICd0ZXN0JykgPT5cbiAgICAgICAgQkFDS0VORF9VUkwgKyBgZ2V0LW9hdXRoLWxpbmsvP3Jlc3BvbnNlX3R5cGU9Y29kZSZjbGllbnQmcmVkaXJlY3Qmc3RhdGU9JHtzdGF0ZX0mY29kZV9jaGFsbGVuZ2U9JHtjaGFsbGVuZ2V9Jm1vZGU9JHttb2RlfSZjb2RlX2NoYWxsZW5nZV9tZXRob2Q9UzI1NmA7XG4gICAgY29uc3QgeyBtb2RlIH0gPSBlbnZpcm9ubWVudDtcbiAgICBjb25zdCBbYXV0aFVSTCwgc2V0QXV0aFVSTF0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW2hhc1NpZ25lZEluLCBzZXRIYXNTaWduZWRJbl0gPSB1c2VTdGF0ZTxib29sZWFuPih0cnVlKTtcbiAgICBjb25zdCBbc3Bpbm5lck9wZW4sIHNldFNwaW5uZXJPcGVuXSA9IHVzZVN0YXRlPGJvb2xlYW4+KHRydWUpXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY3JlYXRlT0F1dGhTdGF0ZSgpLnRoZW4oKHsgc3RhdGUsIGNoYWxsZW5nZSB9KSA9PiB7XG4gICAgICAgICAgICBzZXRBdXRoVVJMKGdldEF1dGhVUkwoc3RhdGUsIGNoYWxsZW5nZSwgbW9kZSkpO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgZ2V0U3RhdHVzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoKEJBQ0tFTkRfVVJMICsgJ2hlYWx0aC1jaGVjay8nLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICdzdHJpcGUtc2lnbmF0dXJlJzogYXdhaXQgZmV0Y2hTdHJpcGVTaWduYXR1cmUoKSxcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcblxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgICAgICB1c2VyX2lkOiB1c2VyQ29udGV4dD8uaWQsXG4gICAgICAgICAgICAgICAgICAgIGFjY291bnRfaWQ6IHVzZXJDb250ZXh0Py5hY2NvdW50LmlkLFxuICAgICAgICAgICAgICAgICAgICBtb2RlOiBtb2RlXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBpZiAoZGF0YS5vaykge1xuICAgICAgICAgICAgICAgIHNldFNwaW5uZXJPcGVuKGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGRhdGEuanNvbigpO1xuICAgICAgICAgICAgc2V0SGFzU2lnbmVkSW4ocmVzdWx0Lmhhc1NpZ25lZEluKTtcblxuICAgICAgICB9XG4gICAgICAgIGdldFN0YXR1cygpO1xuICAgICAgICBjb25zb2xlLmxvZyhlbnZpcm9ubWVudC5jb25zdGFudHMuQkFDS0VORF9VUkwpO1xuICAgIH0sIFttb2RlXSk7XG4gICAgcmV0dXJuIChcblxuICAgICAgICA8Q29udGV4dFZpZXcgdGl0bGU9XCJQYXlvdXRWaWV3IEFwcFwiPlxuXG4gICAgICAgICAgICB7aGFzU2lnbmVkSW4gJiYgIXNwaW5uZXJPcGVuICYmXG4gICAgICAgICAgICAgICAgPEJhZGdlIHR5cGU9XCJpbmZvXCI+WW91IGFyZSBBbHJlYWR5IEF1dGhvcml6ZWQgdG8gT3VyIEFwcCE8L0JhZGdlPlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgeyFoYXNTaWduZWRJbiAmJlxuICAgICAgICAgICAgICAgIDxCYW5uZXJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNyaXRpY2FsXCJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJZb3UgaGF2ZSBub3QgQXV0aG9yaXplZCFcIlxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIlBsZWFzZSBBdXRob3JpemUgYmVmb3JlIHlvdSBjb250aW51ZVwiXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbnM9e1xuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIGhyZWY9e2F1dGhVUkx9PkJlZ2luIEF1dGhvcml6ZTwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgPEJveCBjc3M9e3tcbiAgICAgICAgICAgICAgICBzdGFjazogJ3onLFxuICAgICAgICAgICAgICAgIGFsaWduWDogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgYWxpZ25ZOiAnY2VudGVyJ1xuICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAge3NwaW5uZXJPcGVuICYmXG4gICAgICAgICAgICAgICAgICAgIDxTcGlubmVyIHNpemU9XCJsYXJnZVwiIC8+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvQ29udGV4dFZpZXc+XG5cbiAgICApXG4gICAgICAgIDtcblxuXG59O1xuZXhwb3J0IGRlZmF1bHQgT0F1dGhBcHA7XG5cblxuXG5cbi8qXG4gIFwiaWRcIjogXCJjb20uZXhhbXBsZS5iYXNpYy1vYXV0aDItdGVzdFwiLFxuICBcInZlcnNpb25cIjogXCIwLjAuMlwiLFxuICBcIm5hbWVcIjogXCJCYXNpYy1PQXV0aDIgVGVzdFwiLFxuKi8iLCAiaW1wb3J0IHtcbiAgICBCb3gsXG4gICAgQ29udGV4dFZpZXcsXG4gICAgTGlzdEl0ZW0sXG4gICAgTGlzdCxcbiAgICBCdXR0b24sXG4gICAgQmFubmVyLFxuICAgIEJhZGdlLFxuICAgIEZvcm1GaWVsZEdyb3VwLFxuICAgIFRleHRGaWVsZCxcbiAgICBTcGlubmVyLFxuICAgIElubGluZVxufSBmcm9tIFwiQHN0cmlwZS91aS1leHRlbnNpb24tc2RrL3VpXCI7XG5pbXBvcnQgdHlwZSB7IEV4dGVuc2lvbkNvbnRleHRWYWx1ZSB9IGZyb20gXCJAc3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvY29udGV4dFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY3JlYXRlT0F1dGhTdGF0ZSB9IGZyb20gXCJAc3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvb2F1dGhcIjtcbmltcG9ydCBmZXRjaFN0cmlwZVNpZ25hdHVyZSBmcm9tIFwiQHN0cmlwZS91aS1leHRlbnNpb24tc2RrL3NpZ25hdHVyZVwiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cblxuY29uc3QgQkFDS0VORF9VUkwgPSAnaHR0cHM6Ly9zdHJpcGUtYmFja2VuZC1rN2I0LWpheWF0ZWVydGhkYW1iYWwudmVyY2VsLmFwcC8nO1xuLy8gY29uc3QgQkFDS0VORF9VUkwgPSAnaHR0cDovL2xvY2FsaG9zdDo1MDAwLydcblxuXG5cbmNvbnN0IEJhbGFuY2VPdmVydmlld1ZpZXcgPSAoeyB1c2VyQ29udGV4dCwgZW52aXJvbm1lbnQgfTogRXh0ZW5zaW9uQ29udGV4dFZhbHVlKSA9PiB7XG4gICAgY29uc3QgQkFDS0VORF9VUkwgPSBlbnZpcm9ubWVudC5jb25zdGFudHMuQkFDS0VORF9VUkw7XG4gICAgY29uc3QgZ2V0QXV0aFVSTCA9IChzdGF0ZTogc3RyaW5nLCBjaGFsbGVuZ2U6IHN0cmluZywgbW9kZTogJ2xpdmUnIHwgJ3Rlc3QnKSA9PlxuICAgIEJBQ0tFTkRfVVJMICsgYC9nZXQtb2F1dGgtbGluay8/cmVzcG9uc2VfdHlwZT1jb2RlJmNsaWVudCZyZWRpcmVjdCZzdGF0ZT0ke3N0YXRlfSZjb2RlX2NoYWxsZW5nZT0ke2NoYWxsZW5nZX0mbW9kZT0ke21vZGV9JmNvZGVfY2hhbGxlbmdlX21ldGhvZD1TMjU2YDtcbiAgICBjb25zdCBtYXhMZW5ndGhGb3JNb250aDogbnVtYmVyID0gMjtcbiAgICBjb25zdCBtYXhMZW5ndGhGb3JZZWFyOiBudW1iZXIgPSA0O1xuICAgIGNvbnN0IHsgbW9kZSB9ID0gZW52aXJvbm1lbnQ7XG4gICAgbGV0IHZpZXdEYXRhOiBvYmplY3QgPSB7fVxuICAgIGNvbnN0IFtkYXRhLCBzZXRNeURhdGFdID0gdXNlU3RhdGUoW10pO1xuICAgIGNvbnN0IFthdXRoVVJMLCBzZXRBdXRoVVJMXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbaGFzU2lnbmVkSW4sIHNldEhhc1NpZ25lZEluXSA9IHVzZVN0YXRlKHRydWUpXG4gICAgY29uc3QgW21vbnRoVmFsdWUsIHNldE1vbnRoVmFsdWVdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFt5ZWFyVmFsdWUsIHNldFllYXJWYWx1ZV0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW2dvdFBheW91dERhdGEsIHNldFBheW91dERhdGFdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpXG4gICAgY29uc3QgW2dvdFJlc3BvbnNlLCBzZXRnb3RSZXNwb25zZV0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSlcbiAgICBjb25zdCBbc3Bpbm5lck9wZW4sIHNldFNwaW5uZXJPcGVuXSA9IHVzZVN0YXRlPGJvb2xlYW4+KHRydWUpXG4gICAgY29uc3QgW3BheW91dExvYWQsIHNldFBheW91dExvYWRdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpXG4gICAgY29uc3QgZG93bmxvYWRFbmRwb2ludCA9IGAke0JBQ0tFTkRfVVJMfWRvd25sb2FkLXJlcG9ydC8/YWNjb3VudF9pZD0ke3VzZXJDb250ZXh0Py5hY2NvdW50LmlkfSZjdXJyZW50X21vbnRoPSR7bW9udGhWYWx1ZX0mY3VycmVudF95ZWFyPSR7eWVhclZhbHVlfSZtb2RlPSR7bW9kZX1gO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY3JlYXRlT0F1dGhTdGF0ZSgpLnRoZW4oKHsgc3RhdGUsIGNoYWxsZW5nZSB9KSA9PiB7XG4gICAgICAgICAgICBzZXRBdXRoVVJMKGdldEF1dGhVUkwoc3RhdGUsIGNoYWxsZW5nZSwgbW9kZSkpO1xuICAgICAgICB9KTtcblxuXG4gICAgICAgIGNvbnN0IGdldFN0YXR1cyA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaChCQUNLRU5EX1VSTCArICdoZWFsdGgtY2hlY2svJywge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAnc3RyaXBlLXNpZ25hdHVyZSc6IGF3YWl0IGZldGNoU3RyaXBlU2lnbmF0dXJlKCksXG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG5cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICAgICAgdXNlcl9pZDogdXNlckNvbnRleHQ/LmlkLFxuICAgICAgICAgICAgICAgICAgICBhY2NvdW50X2lkOiB1c2VyQ29udGV4dD8uYWNjb3VudC5pZCxcbiAgICAgICAgICAgICAgICAgICAgbW9kZTogbW9kZVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgaWYgKGRhdGEub2spIHtcbiAgICAgICAgICAgICAgICBzZXRTcGlubmVyT3BlbihmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBkYXRhLmpzb24oKTtcbiAgICAgICAgICAgIHNldEhhc1NpZ25lZEluKHJlc3VsdC5oYXNTaWduZWRJbik7XG4gICAgICAgIH1cblxuICAgICAgICBnZXRTdGF0dXMoKTtcbiAgICB9LCBbXSk7XG5cblxuICAgIC8vIEhhbmRsaW5nIERhdGVGb3JtIERhdGFcbiAgICBjb25zdCBtb250aFZhbHVlSGFuZGxlciA9IChldmVudCkgPT4ge1xuICAgICAgICBzZXRNb250aFZhbHVlKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgfVxuICAgIGNvbnN0IHllYXJWYWx1ZUhhbmRsZXIgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgc2V0WWVhclZhbHVlKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgICAgIHNldFBheW91dExvYWQodHJ1ZSlcbiAgICAgICAgLy8gZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChCQUNLRU5EX1VSTCArICdnZXRfcGF5b3V0cy8nLCB7XG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIG1vbnRoOiBtb250aFZhbHVlLFxuICAgICAgICAgICAgICAgIHllYXI6IHllYXJWYWx1ZSxcbiAgICAgICAgICAgICAgICBhY2NvdW50X2lkOiB1c2VyQ29udGV4dD8uYWNjb3VudC5pZCxcbiAgICAgICAgICAgICAgICBtb2RlOiBtb2RlXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuXG4gICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSFRUUCBlcnJvciEgc3RhdHVzOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcbiAgICAgICAgfSBlbHNlIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpXG4gICAgICAgICAgICBzZXRQYXlvdXREYXRhKHRydWUpXG4gICAgICAgICAgICBzZXRQYXlvdXRMb2FkKGZhbHNlKVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuICAgICAgICBzZXRNeURhdGEoSlNPTi5wYXJzZShkYXRhLm91dHB1dF9kZl9qc29uKSk7XG4gICAgICAgIHNldEhhc1NpZ25lZEluKGRhdGEuaGFzU2lnbmVkSW4pO1xuICAgICAgICBzZXRnb3RSZXNwb25zZShkYXRhLmhhc0RhdGEpXG4gICAgICAgIGlmIChkYXRhLmVycm9yKSB7XG4gICAgICAgICAgICBzZXRTcGlubmVyT3BlbihmYWxzZSk7XG4gICAgICAgIH1cblxuXG4gICAgfVxuXG4gICAgbGV0IGNyZWF0ZWQ6IG5ldmVyW10gPSBbXVxuICAgIGxldCBkZXNjcjogbmV2ZXJbXSA9IFtdXG4gICAgbGV0IGFtb3VudDogbmV2ZXJbXSA9IFtdXG4gICAgbGV0IG5ldDogbmV2ZXJbXSA9IFtdXG4gICAgY29uc3QgdmFsdWVzID0gT2JqZWN0LnZhbHVlcyhkYXRhKVxuICAgIGZvciAobGV0IHZhbCBpbiB2YWx1ZXMpIHtcbiAgICAgICAgY3JlYXRlZC5wdXNoKHZhbHVlc1t2YWxdLkNyZWF0ZWQpXG4gICAgICAgIGRlc2NyLnB1c2godmFsdWVzW3ZhbF0uRGVzY3JpcHRpb24pXG4gICAgICAgIG5ldC5wdXNoKHZhbHVlc1t2YWxdLk5ldClcbiAgICB9XG4gICAgbGV0IG5ld19jcmVhdGVkID0gY3JlYXRlZC5tYXAoY3JlYXRlID0+IG5ldyBEYXRlKGNyZWF0ZSkudG9Mb2NhbGVTdHJpbmcoXCJlbi1VU1wiLCB7XG4gICAgICAgIHllYXI6IFwibnVtZXJpY1wiLFxuICAgICAgICBtb250aDogXCJsb25nXCIsXG4gICAgICAgIGRheTogXCJudW1lcmljXCIsXG4gICAgfSkpXG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxDb250ZXh0VmlldyB0aXRsZT1cIlBheW91dFZpZXdcIj5cblxuICAgICAgICAgICAgPEJveCBjc3M9e3tcbiAgICAgICAgICAgICAgICBzdGFjazogJ3onLFxuICAgICAgICAgICAgICAgIGFsaWduWDogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgYWxpZ25ZOiAnY2VudGVyJ1xuICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAge3NwaW5uZXJPcGVuICYmIGhhc1NpZ25lZEluICYmXG4gICAgICAgICAgICAgICAgICAgIDxTcGlubmVyIHNpemU9XCJsYXJnZVwiIC8+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICB7IXNwaW5uZXJPcGVuICYmIGhhc1NpZ25lZEluICYmXG4gICAgICAgICAgICAgICAgPEJveCBjc3M9e3tcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogJ21lZGl1bScsXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAncHJpbWFyeScsXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJ2xhcmdlJyxcblxuICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybUZpZWxkR3JvdXAgbGVnZW5kPVwiRW50ZXIgTW9udGggYW5kIFllYXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJFbnRlciB0aGUgWWVhciBhbmQgTW9udGggZnJvbSB3aGljaCB5b3Ugd2FudCB0byBmZXRjaCBkYXRhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIHR5cGU9XCJudW1iZXJcIiBvbkNoYW5nZT17bW9udGhWYWx1ZUhhbmRsZXJ9IG1heExlbmd0aD17bWF4TGVuZ3RoRm9yTW9udGh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJNb250aFwiIG5hbWU9XCJtb250aFwiIHBsYWNlaG9sZGVyPVwiTU1cIiBoaWRkZW5FbGVtZW50cz17WydsYWJlbCddfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCB0eXBlPVwibnVtYmVyXCIgb25DaGFuZ2U9e3llYXJWYWx1ZUhhbmRsZXJ9IG1heExlbmd0aD17bWF4TGVuZ3RoRm9yWWVhcn0gbGFiZWw9XCJZZWFyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwieWVhclwiIHBsYWNlaG9sZGVyPVwiWVlZWVwiIGhpZGRlbkVsZW1lbnRzPXtbJ2xhYmVsJ119IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybUZpZWxkR3JvdXA+XG4gICAgICAgICAgICAgICAgICAgIDxCb3ggY3NzPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFjazogJ3onLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ25YOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduWTogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46ICdtZWRpdW0nXG4gICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwYXlvdXRMb2FkICYmIGhhc1NpZ25lZEluICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGlubmVyIHNpemU9XCJsYXJnZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHshcGF5b3V0TG9hZCAmJiBoYXNTaWduZWRJbiAmJiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIG9uUHJlc3M9e2hhbmRsZVN1Ym1pdH0+R2V0IERhdGE8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG5cbiAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIH1cbnsvKiBcbiAgICAgICAgICAgIDxCb3ggY3NzPXt7XG4gICAgICAgICAgICAgICAgc3RhY2s6ICd6JyxcbiAgICAgICAgICAgICAgICBhbGlnblg6ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgIGFsaWduWTogJ2NlbnRlcidcbiAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgIHtwYXlvdXRMb2FkICYmIGhhc1NpZ25lZEluICYmXG4gICAgICAgICAgICAgICAgICAgIDxTcGlubmVyIHNpemU9XCJsYXJnZVwiIC8+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9Cb3g+ICovfVxuXG4gICAgICAgICAgICB7IWdvdFBheW91dERhdGEgJiYgaGFzU2lnbmVkSW4gJiYgIXNwaW5uZXJPcGVuICYmXG4gICAgICAgICAgICAgICAgPEJhZGdlIHR5cGU9XCJpbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgIFBsZWFzZSBFbnRlciBNb250aCBhbmQgWWVhciBWYWx1ZXMsIHRvIHZpZXcgRGF0YVxuICAgICAgICAgICAgICAgIDwvQmFkZ2U+XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHtnb3RQYXlvdXREYXRhICYmICFkYXRhLmxlbmd0aCAmJiBoYXNTaWduZWRJbiAmJlxuICAgICAgICAgICAgICAgIDxCYWRnZSB0eXBlPVwid2FybmluZ1wiPlxuICAgICAgICAgICAgICAgICAgICBUaGVyZSBpcyBubyBEYXRhIFByZXNlbnQgZm9yIHRoaXMgTW9udGggYW5kIFllYXJcbiAgICAgICAgICAgICAgICA8L0JhZGdlPlxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB7Z290UmVzcG9uc2UgJiYgaGFzU2lnbmVkSW4gJiYgPExpc3Q+XG4gICAgICAgICAgICAgICAgPExpc3RJdGVtXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtuZXRbMF19XG4gICAgICAgICAgICAgICAgICAgIGlkPVwiMlwiXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXs8Qm94PntuZXdfY3JlYXRlZFswXX08L0JveD59XG4gICAgICAgICAgICAgICAgICAgIHNlY29uZGFyeVRpdGxlPXs8Qm94PntkZXNjclswXX08L0JveD59XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e25ldFsxXX1cbiAgICAgICAgICAgICAgICAgICAgaWQ9XCIyXCJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9ezxCb3g+e25ld19jcmVhdGVkWzFdfTwvQm94Pn1cbiAgICAgICAgICAgICAgICAgICAgc2Vjb25kYXJ5VGl0bGU9ezxCb3g+e2Rlc2NyWzFdfTwvQm94Pn1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bmV0WzJdfVxuICAgICAgICAgICAgICAgICAgICBpZD1cIjJcIlxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17PEJveD57bmV3X2NyZWF0ZWRbMl19PC9Cb3g+fVxuICAgICAgICAgICAgICAgICAgICBzZWNvbmRhcnlUaXRsZT17PEJveD57ZGVzY3JbMl19PC9Cb3g+fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPExpc3RJdGVtXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtuZXRbM119XG4gICAgICAgICAgICAgICAgICAgIGlkPVwiMlwiXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXs8Qm94PntuZXdfY3JlYXRlZFszXX08L0JveD59XG4gICAgICAgICAgICAgICAgICAgIHNlY29uZGFyeVRpdGxlPXs8Qm94PntkZXNjclszXX08L0JveD59XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e25ldFs0XX1cbiAgICAgICAgICAgICAgICAgICAgaWQ9XCIyXCJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9ezxCb3g+e25ld19jcmVhdGVkWzRdfTwvQm94Pn1cbiAgICAgICAgICAgICAgICAgICAgc2Vjb25kYXJ5VGl0bGU9ezxCb3g+e2Rlc2NyWzRdfTwvQm94Pn1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bmV0WzVdfVxuICAgICAgICAgICAgICAgICAgICBpZD1cIjJcIlxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17PEJveD57bmV3X2NyZWF0ZWRbNV19PC9Cb3g+fVxuICAgICAgICAgICAgICAgICAgICBzZWNvbmRhcnlUaXRsZT17PEJveD57ZGVzY3JbNV19PC9Cb3g+fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPExpc3RJdGVtXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtuZXRbNl19XG4gICAgICAgICAgICAgICAgICAgIGlkPVwiMlwiXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXs8Qm94PntuZXdfY3JlYXRlZFs2XX08L0JveD59XG4gICAgICAgICAgICAgICAgICAgIHNlY29uZGFyeVRpdGxlPXs8Qm94PntkZXNjcls2XX08L0JveD59XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e25ldFs3XX1cbiAgICAgICAgICAgICAgICAgICAgaWQ9XCIyXCJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9ezxCb3g+e25ld19jcmVhdGVkWzddfTwvQm94Pn1cbiAgICAgICAgICAgICAgICAgICAgc2Vjb25kYXJ5VGl0bGU9ezxCb3g+e2Rlc2NyWzddfTwvQm94Pn1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bmV0WzhdfVxuICAgICAgICAgICAgICAgICAgICBpZD1cIjJcIlxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17PEJveD57bmV3X2NyZWF0ZWRbOF19PC9Cb3g+fVxuICAgICAgICAgICAgICAgICAgICBzZWNvbmRhcnlUaXRsZT17PEJveD57ZGVzY3JbOF19PC9Cb3g+fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0xpc3Q+fVxuXG4gICAgICAgICAgICA8Qm94IGNzcz17eyBzdGFjazogJ3knLCBnYXA6ICdsYXJnZScsIG1hcmdpbjogJ2xhcmdlJyB9fT5cbiAgICAgICAgICAgICAgICB7Z290UmVzcG9uc2UgJiZcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBocmVmPXtkb3dubG9hZEVuZHBvaW50fSB0eXBlPVwicHJpbWFyeVwiIGNzcz17eyB3aWR0aDogJ2ZpbGwnLCBhbGlnblg6ICdjZW50ZXInIH19XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIj5Eb3dubG9hZFxuICAgICAgICAgICAgICAgICAgICAgICAgQ1NWPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgeyFoYXNTaWduZWRJbiAmJlxuICAgICAgICAgICAgICAgICAgICA8QmFubmVyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY3JpdGljYWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJZb3UgaGF2ZSBub3QgU2lnbiBJblwiXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIlBsZWFzZSBzaWduIGluIGJlZm9yZSB5b3UgY29udGludWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9ucz17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIGhyZWY9e2F1dGhVUkx9PkJlZ2luIEF1dGhvcml6ZTwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgPC9Cb3g+XG5cbiAgICAgICAgPC9Db250ZXh0Vmlldz5cbiAgICApXG59O1xuXG5leHBvcnQgZGVmYXVsdCBCYWxhbmNlT3ZlcnZpZXdWaWV3OyIsICJpbXBvcnQge1xuICAgIEJveCxcbiAgICBCdXR0b24sXG4gICAgQmFubmVyLFxuICAgIFNldHRpbmdzVmlldyxcbiAgICBTcGlubmVyXG59IGZyb20gXCJAc3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvdWlcIjtcbmltcG9ydCB0eXBlIHsgRXh0ZW5zaW9uQ29udGV4dFZhbHVlIH0gZnJvbSBcIkBzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay9jb250ZXh0XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjcmVhdGVPQXV0aFN0YXRlIH0gZnJvbSAnQHN0cmlwZS91aS1leHRlbnNpb24tc2RrL29hdXRoJztcblxuY29uc3QgQkFDS0VORF9VUkwgPSAnaHR0cHM6Ly9zdHJpcGUtYmFja2VuZC1rN2I0LWpheWF0ZWVydGhkYW1iYWwudmVyY2VsLmFwcC8nO1xuXG5jb25zdCBBcHBTZXR0aW5ncyA9ICh7IHVzZXJDb250ZXh0LCBlbnZpcm9ubWVudCB9OiBFeHRlbnNpb25Db250ZXh0VmFsdWUpID0+IHtcbiAgICBjb25zdCBCQUNLRU5EX1VSTCA9IGVudmlyb25tZW50LmNvbnN0YW50cy5CQUNLRU5EX1VSTDtcbiAgICBjb25zdCBnZXRBdXRoVVJMID0gKHN0YXRlOiBzdHJpbmcsIGNoYWxsZW5nZTogc3RyaW5nLCBtb2RlOiAnbGl2ZScgfCAndGVzdCcpID0+XG4gICAgQkFDS0VORF9VUkwgKyBgL2dldC1vYXV0aC1saW5rLz9yZXNwb25zZV90eXBlPWNvZGUmY2xpZW50JnJlZGlyZWN0JnN0YXRlPSR7c3RhdGV9JmNvZGVfY2hhbGxlbmdlPSR7Y2hhbGxlbmdlfSZtb2RlPSR7bW9kZX0mY29kZV9jaGFsbGVuZ2VfbWV0aG9kPVMyNTZgO1xuICAgIGNvbnN0IHsgbW9kZSB9ID0gZW52aXJvbm1lbnQ7XG4gICAgY29uc3QgW2RlYXV0aCwgc2V0RGVhdXRoXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbdXNlckV4aXN0LCBzZXRVc2VyRXhpc3RdID0gdXNlU3RhdGU8Ym9vbGVhbj4oKTtcbiAgICBjb25zdCBbYXV0aFVSTCwgc2V0QXV0aFVSTF0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW3NwaW5uZXJPcGVuLCBzZXRTcGlubmVyT3Blbl0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSlcbiAgICBjb25zdCBbbG9hZGluZ1NwaW5uZXIsIHNldExvYWRpbmdTcGlubmVyXSA9IHVzZVN0YXRlPGJvb2xlYW4+KHRydWUpXG4gICAgY29uc3QgZGVhdXRob3JpemVfdXNlciA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgc2V0U3Bpbm5lck9wZW4odHJ1ZSlcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoKEJBQ0tFTkRfVVJMICsgJ2RlYXV0aG9yaXplX3VzZXIvJywge1xuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIHVzZXJfaWQ6IHVzZXJDb250ZXh0Py5pZCxcbiAgICAgICAgICAgICAgICBhY2NvdW50X2lkOiB1c2VyQ29udGV4dD8uYWNjb3VudC5pZCxcbiAgICAgICAgICAgICAgICBtb2RlOiBtb2RlXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KS50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4gc2V0VXNlckV4aXN0KGRhdGEudXNlckV4aXN0KSlcbiAgICB9XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjcmVhdGVPQXV0aFN0YXRlKCkudGhlbigoeyBzdGF0ZSwgY2hhbGxlbmdlIH0pID0+IHtcbiAgICAgICAgICAgIHNldEF1dGhVUkwoZ2V0QXV0aFVSTChzdGF0ZSwgY2hhbGxlbmdlLCBtb2RlKSk7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBnZXRVc2VyU3RhdHVzID1hc3luYyAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKEJBQ0tFTkRfVVJMICsgJ2NoZWNrLXVzZXIvJywge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgICAgIGFjY291bnRfaWQ6IHVzZXJDb250ZXh0Py5hY2NvdW50LmlkLFxuICAgICAgICAgICAgICAgICAgICBtb2RlOiBtb2RlXG4gICAgICAgICAgICAgICAgfSlcbiAgICBcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uub2spe1xuICAgICAgICAgICAgICAgIHNldExvYWRpbmdTcGlubmVyKGZhbHNlKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgIHNldFVzZXJFeGlzdChkYXRhLnVzZXJFeGlzdCk7XG4gICAgICAgIH1cbiAgICAgICAgZ2V0VXNlclN0YXR1cygpO1xuICAgICAgICBcbiAgICB9LCBbbW9kZV0pO1xuXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8U2V0dGluZ3NWaWV3IG9uU2F2ZT17KCkgPT4ge1xuICAgICAgICB9fT5cbiAgICAgICAgICAgIDxCb3ggY3NzPXt7XG4gICAgICAgICAgICAgICAgc3RhY2s6ICd6JyxcbiAgICAgICAgICAgICAgICBhbGlnblg6ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgIGFsaWduWTogJ2NlbnRlcidcbiAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgIHtsb2FkaW5nU3Bpbm5lciAmJlxuICAgICAgICAgICAgICAgICAgICA8U3Bpbm5lciBzaXplPVwibGFyZ2VcIiAvPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICAgIGNzcz17e1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBcImNvbnRhaW5lclwiLFxuICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwibWVkaXVtXCIsXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwibGFyZ2VcIixcbiAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICB7dXNlckV4aXN0ICYmICFzcGlubmVyT3BlbiAmJlxuICAgICAgICAgICAgICAgICAgICA8QmFubmVyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY3JpdGljYWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJSZW1vdmUgQXV0aG9yaXphdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIllvdSB3aWxsIG5vIGxvbmdlciBhYmxlIHRvIGFjY2VzcyB5b3VyIGRhdGEgdGhyb3VnaCBBcHBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9ucz17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvblByZXNzPXtkZWF1dGhvcml6ZV91c2VyfSB0eXBlPVwiZGVzdHJ1Y3RpdmVcIj5SZW1vdmUgQXV0aG9yaXphdGlvbjwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB7dXNlckV4aXN0ICYmIHNwaW5uZXJPcGVuICYmXG4gICAgICAgICAgICAgICAgICAgIDxCYW5uZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjYXV0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiUmVtb3ZpbmcgQXV0aG9yaXphdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIkRvbid0IHdvcnJ5IHlvdSBjYW4gYWRkIGF1dGhvcml6YXRpb24gYWdhaW4gYWZ0ZXIgdGhpcyBwcmNvZXNzIGdldHMgY29tcGxldGUuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbnM9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGlubmVyIHNpemU9XCJsYXJnZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgeyF1c2VyRXhpc3QgJiYgIWxvYWRpbmdTcGlubmVyICYmXG4gICAgICAgICAgICAgICAgICAgIDxCYW5uZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJkZWZhdWx0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiQmVnaW4gQXV0aG9yaXphdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIllvdSBhcmUgbm90IGF1dGhvcml6ZWQgeW91ciBhY2NvdW50IHdpdGggb3VyIHNlcnZlcnMsIFBsZWFzZSBiZWdpbiB0aGUgQXV0aG9yaXphdGlvbiBQcm9jZXNzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbnM9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gaHJlZj17YXV0aFVSTH0gdHlwZT1cInByaW1hcnlcIj5CZWdpbiBBdXRob3JpemF0aW9uPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvU2V0dGluZ3NWaWV3PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBcHBTZXR0aW5ncztcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLFVBQUEsVUFBQSxVQUFBO0FBRWEsY0FBQSxhQUFZLEdBQUEsUUFBQSw0QkFHdkIsV0FBVztBQUdBLGNBQUEsaUJBQWdCLEdBQUEsUUFBQSw0QkFHM0IsaUJBQWlCO1FBQ2pCLGVBQWUsQ0FBQyxTQUFTLFlBQVksU0FBUyxTQUFTO09BQ3hEO0FBR1ksY0FBQSxT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QUFBLGVBQUEsS0FBQTtNQUFJLEVBQUEsQ0FBQTtBQUNKLGFBQUEsZUFBQSxTQUFBLFlBQUEsRUFBQSxZQUFBLE1BQUEsS0FBQSxXQUFBO0FBQUEsZUFBQSxLQUFBO01BQVEsRUFBQSxDQUFBO0FBQ1IsYUFBQSxlQUFBLFNBQUEsUUFBQSxFQUFBLFlBQUEsTUFBQSxLQUFBLFdBQUE7QUFBQSxlQUFBLEtBQUE7TUFBSSxFQUFBLENBQUE7QUFDSixhQUFBLGVBQUEsU0FBQSxhQUFBLEVBQUEsWUFBQSxNQUFBLEtBQUEsV0FBQTtBQUFBLGVBQUEsS0FBQTtNQUFTLEVBQUEsQ0FBQTtBQUNULGFBQUEsZUFBQSxTQUFBLFlBQUEsRUFBQSxZQUFBLE1BQUEsS0FBQSxXQUFBO0FBQUEsZUFBQSxLQUFBO01BQVEsRUFBQSxDQUFBO0FBS1IsYUFBQSxlQUFBLFNBQUEsV0FBQSxFQUFBLFlBQUEsTUFBQSxLQUFBLFdBQUE7QUFBQSxlQUFBLEtBQUE7TUFBTyxFQUFBLENBQUE7QUFFUCxhQUFBLGVBQUEsU0FBQSxPQUFBLEVBQUEsWUFBQSxNQUFBLEtBQUEsV0FBQTtBQUFBLGVBQUEsS0FBQTtNQUFHLEVBQUEsQ0FBQTtBQUNILGFBQUEsZUFBQSxTQUFBLFdBQUEsRUFBQSxZQUFBLE1BQUEsS0FBQSxXQUFBO0FBQUEsZUFBQSxLQUFBO01BQU8sRUFBQSxDQUFBO0FBQ1AsYUFBQSxlQUFBLFNBQUEsWUFBQSxFQUFBLFlBQUEsTUFBQSxLQUFBLFdBQUE7QUFBQSxlQUFBLEtBQUE7TUFBUSxFQUFBLENBQUE7QUFDUixhQUFBLGVBQUEsU0FBQSxhQUFBLEVBQUEsWUFBQSxNQUFBLEtBQUEsV0FBQTtBQUFBLGVBQUEsS0FBQTtNQUFTLEVBQUEsQ0FBQTtBQUNULGFBQUEsZUFBQSxTQUFBLFNBQUEsRUFBQSxZQUFBLE1BQUEsS0FBQSxXQUFBO0FBQUEsZUFBQSxLQUFBO01BQUssRUFBQSxDQUFBO0FBQ0wsYUFBQSxlQUFBLFNBQUEsYUFBQSxFQUFBLFlBQUEsTUFBQSxLQUFBLFdBQUE7QUFBQSxlQUFBLEtBQUE7TUFBUyxF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TixXQUFXO0FBQUEsSUFDWCxRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixlQUFlO0FBQUEsTUFDYjtBQUFBLFFBQ0UsY0FBYztBQUFBLFFBQ2QsV0FBVztBQUFBLE1BQ2I7QUFBQSxJQUNGO0FBQUEsSUFDQSxlQUFlO0FBQUEsTUFDYixZQUFZO0FBQUEsSUFDZDtBQUFBLElBQ0EsZ0JBQWdCO0FBQUEsTUFDZCxTQUFTO0FBQUEsUUFDUDtBQUFBLFVBQ0UsWUFBWTtBQUFBLFVBQ1osYUFBYTtBQUFBLFFBQ2Y7QUFBQSxRQUNBO0FBQUEsVUFDRSxZQUFZO0FBQUEsVUFDWixhQUFhO0FBQUEsUUFDZjtBQUFBLFFBQ0E7QUFBQSxVQUNFLFlBQVk7QUFBQSxVQUNaLGFBQWE7QUFBQSxRQUNmO0FBQUEsTUFDRjtBQUFBLE1BQ0EsMkJBQTJCO0FBQUEsUUFDekIsZUFBZTtBQUFBLFVBQ2I7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQSxhQUFhO0FBQUEsUUFDYixXQUFXO0FBQUEsTUFDYjtBQUFBLElBQ0Y7QUFBQSxJQUNBLGFBQWE7QUFBQSxNQUNYLGVBQWU7QUFBQSxJQUNqQjtBQUFBLEVBQ0Y7IiwKICAibmFtZXMiOiBbImNyZWF0ZU9BdXRoU3RhdGUiLCAiZmV0Y2hTdHJpcGVTaWduYXR1cmUiLCAibW9kZSIsICJmZXRjaFN0cmlwZVNpZ25hdHVyZSIsICJpbXBvcnRfdWkiLCAiaW1wb3J0X29hdXRoIiwgImltcG9ydF9zaWduYXR1cmUiLCAiaW1wb3J0X2pzeF9ydW50aW1lIiwgIm1vZGUiLCAiZGF0YSIsICJmZXRjaFN0cmlwZVNpZ25hdHVyZSIsICJpbXBvcnRfdWkiLCAiaW1wb3J0X3JlYWN0IiwgImltcG9ydF9vYXV0aCIsICJpbXBvcnRfanN4X3J1bnRpbWUiLCAibW9kZSIsICJkYXRhIl0KfQo=
