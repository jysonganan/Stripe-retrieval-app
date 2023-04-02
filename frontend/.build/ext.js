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
  var BACKEND_URL = "https://stripe-backend-k7b4-jayateerthdambal.vercel.app/";
  var getAuthURL = (state, challenge, mode) => BACKEND_URL + `/get-oauth-link/?response_type=code&client&redirect&state=${state}&code_challenge=${challenge}&mode=${mode}&code_challenge_method=S256`;
  var OAuthApp = ({ environment, userContext }) => {
    const { mode } = environment;
    const [authURL, setAuthURL] = useState("");
    const [stripeStatus, setStripeStatus] = useState("down");
    const [hasSignedIn, setHasSignedIn] = useState(true);
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
        }).then((response) => response.json()).then((data2) => {
          setHasSignedIn(data2.hasSignedIn);
          setStripeStatus(data2.result == "OK" ? "Up" : "Down");
        });
      });
      getStatus();
    }, [mode]);
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_ui.ContextView, {
      title: "PayoutView App",
      children: [
        hasSignedIn && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.Badge, {
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
            target: "_blank",
            children: "Begin Authorize"
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
  var BACKEND_URL2 = "http://localhost:5000/";
  var getAuthURL2 = (state, challenge, mode) => `${BACKEND_URL2}get-oauth-link/?response_type=code&client&redirect&state=${state}&code_challenge=${challenge}&mode=${mode}&code_challenge_method=S256`;
  var BalanceOverviewView = ({ userContext, environment }) => {
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
    const [spinnerOpen, setSpinnerOpen] = (0, import_react.useState)(false);
    const downloadEndpoint = `${BACKEND_URL2}download-report/?account_id=${userContext == null ? void 0 : userContext.account.id}&current_month=${monthValue}&current_year=${yearValue}&mode=${mode}`;
    (0, import_react.useEffect)(() => {
      (0, import_oauth2.createOAuthState)().then(({ state, challenge }) => {
        setAuthURL(getAuthURL2(state, challenge, mode));
      });
      const getStatus = () => __async(void 0, null, function* () {
        const data2 = yield fetch(BACKEND_URL2 + "health-check/", {
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
        }).then((response) => response.json()).then((data3) => {
          setHasSignedIn(data3.hasSignedIn);
        });
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
      setSpinnerOpen(true);
      const response = yield fetch(BACKEND_URL2 + "get_payouts/", {
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
        setSpinnerOpen(false);
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
      title: "User Details",
      children: [
        hasSignedIn && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_ui2.Box, {
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
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_ui2.Box, {
              css: {
                stack: "z",
                alignX: "center",
                alignY: "center",
                margin: "medium"
              },
              children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_ui2.Button, {
                type: "primary",
                onPress: handleSubmit,
                children: "Get Data"
              })
            })
          ]
        }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_ui2.Box, {
          css: {
            stack: "z",
            alignX: "center",
            alignY: "center"
          },
          children: spinnerOpen && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_ui2.Spinner, {
            size: "large"
          })
        }),
        !gotPayoutData && hasSignedIn && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_ui2.Badge, {
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
                target: "_blank",
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
  var BACKEND_URL3 = "https://stripe-backend-k7b4-jayateerthdambal.vercel.app/";
  var getAuthURL3 = (state, challenge, mode) => BACKEND_URL3 + `/get-oauth-link/?response_type=code&client&redirect&state=${state}&code_challenge=${challenge}&mode=${mode}&code_challenge_method=S256`;
  var AppSettings = ({ userContext, environment }) => {
    const { mode } = environment;
    const [deauth, setDeauth] = (0, import_react2.useState)("");
    const [userExist, setUserExist] = (0, import_react2.useState)();
    const [authURL, setAuthURL] = (0, import_react2.useState)("");
    const [spinnerOpen, setSpinnerOpen] = (0, import_react2.useState)(false);
    const deauthorize_user = () => __async(void 0, null, function* () {
      setSpinnerOpen(true);
      const data = yield fetch(BACKEND_URL3 + "deauthorize_user/", {
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
        setAuthURL(getAuthURL3(state, challenge, mode));
      });
      fetch(BACKEND_URL3 + "check-user/", {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({
          account_id: userContext == null ? void 0 : userContext.account.id,
          mode
        })
      }).then((response) => response.json()).then((data) => {
        setUserExist(data.userExist);
      });
    }, [mode]);
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_ui3.SettingsView, {
      onSave: () => {
      },
      children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_ui3.Box, {
        css: {
          background: "container",
          borderRadius: "medium",
          padding: "large"
        },
        children: [
          userExist && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_ui3.Banner, {
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
            type: "critical",
            title: "Remove Authorization",
            description: "You will no longer able to access your data through App",
            actions: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_ui3.Spinner, {})
          }),
          !userExist && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_ui3.Banner, {
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
    });
  };
  var AppSettings_default = AppSettings;

  // .build/manifest.js
  __reExport(manifest_exports, __toESM(require_version()));
  var BUILD_TIME = "2023-04-02 16:26:30.555926673 +0530 IST m=+0.011214178";
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
          "https://stripe-backend-k7b4-jayateerthdambal.vercel.app/authorize-oauth/",
          "https://stripe-backend-k7b4-jayateerthdambal.vercel.app/get_payouts/",
          "https://stripe-backend-k7b4-jayateerthdambal.vercel.app/download-report/",
          "https://stripe-backend-k7b4-jayateerthdambal.vercel.app/check-user/",
          "https://stripe-backend-k7b4-jayateerthdambal.vercel.app/deauthorize_user/"
        ],
        "image-src": null,
        "purpose": "Send Data to VercelDeploy"
      }
    }
  };
  return __toCommonJS(manifest_exports);
})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0BzdHJpcGUvc3JjL3VpL0BzYWlsL3VpL2luZGV4LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9Ac3RyaXBlL3NyYy91aS9Ac3RyaXBlLWludGVybmFsL3RhaWxvci1kYXNoYm9hcmQtY29tcG9uZW50cy9pbmRleC50cyIsICIuLi9ub2RlX21vZHVsZXMvQHN0cmlwZS9zcmMvdWkvbWFudWFsX2NvbXBvbmVudHMudHMiLCAiLi4vbm9kZV9tb2R1bGVzL0BzdHJpcGUvc3JjL3VpL2luZGV4LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9pbnZhcmlhbnQvYnJvd3Nlci5qcyIsICIuLi9ub2RlX21vZHVsZXMvQHN0cmlwZS9zcmMvdXRpbHMvX2VuZHBvaW50LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9Ac3RyaXBlL3NyYy91dGlscy9vYXV0aC50cyIsICIuLi9ub2RlX21vZHVsZXMvQHN0cmlwZS9zcmMvb2F1dGgudHMiLCAiLi4vbm9kZV9tb2R1bGVzL0BzdHJpcGUvc3JjL3V0aWxzL3NpZ25hdHVyZS50cyIsICIuLi9ub2RlX21vZHVsZXMvQHN0cmlwZS9zcmMvc2lnbmF0dXJlLnRzIiwgIi4uL25vZGVfbW9kdWxlcy9Ac3RyaXBlL3NyYy92ZXJzaW9uLnRzIiwgIm1hbmlmZXN0LmpzIiwgIi4uL3NyYy92aWV3cy9BcHAudHN4IiwgIi4uL3NyYy92aWV3cy9CYWxhbmNlT3ZlcnZpZXdWaWV3LnRzeCIsICIuLi9zcmMvdmlld3MvQXBwU2V0dGluZ3MudHN4Il0sCiAgInNvdXJjZXNDb250ZW50IjogW251bGwsIG51bGwsIG51bGwsIG51bGwsICIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBVc2UgaW52YXJpYW50KCkgdG8gYXNzZXJ0IHN0YXRlIHdoaWNoIHlvdXIgcHJvZ3JhbSBhc3N1bWVzIHRvIGJlIHRydWUuXG4gKlxuICogUHJvdmlkZSBzcHJpbnRmLXN0eWxlIGZvcm1hdCAob25seSAlcyBpcyBzdXBwb3J0ZWQpIGFuZCBhcmd1bWVudHNcbiAqIHRvIHByb3ZpZGUgaW5mb3JtYXRpb24gYWJvdXQgd2hhdCBicm9rZSBhbmQgd2hhdCB5b3Ugd2VyZVxuICogZXhwZWN0aW5nLlxuICpcbiAqIFRoZSBpbnZhcmlhbnQgbWVzc2FnZSB3aWxsIGJlIHN0cmlwcGVkIGluIHByb2R1Y3Rpb24sIGJ1dCB0aGUgaW52YXJpYW50XG4gKiB3aWxsIHJlbWFpbiB0byBlbnN1cmUgbG9naWMgZG9lcyBub3QgZGlmZmVyIGluIHByb2R1Y3Rpb24uXG4gKi9cblxudmFyIGludmFyaWFudCA9IGZ1bmN0aW9uKGNvbmRpdGlvbiwgZm9ybWF0LCBhLCBiLCBjLCBkLCBlLCBmKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFyaWFudCByZXF1aXJlcyBhbiBlcnJvciBtZXNzYWdlIGFyZ3VtZW50Jyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKCFjb25kaXRpb24pIHtcbiAgICB2YXIgZXJyb3I7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBlcnJvciA9IG5ldyBFcnJvcihcbiAgICAgICAgJ01pbmlmaWVkIGV4Y2VwdGlvbiBvY2N1cnJlZDsgdXNlIHRoZSBub24tbWluaWZpZWQgZGV2IGVudmlyb25tZW50ICcgK1xuICAgICAgICAnZm9yIHRoZSBmdWxsIGVycm9yIG1lc3NhZ2UgYW5kIGFkZGl0aW9uYWwgaGVscGZ1bCB3YXJuaW5ncy4nXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgYXJncyA9IFthLCBiLCBjLCBkLCBlLCBmXTtcbiAgICAgIHZhciBhcmdJbmRleCA9IDA7XG4gICAgICBlcnJvciA9IG5ldyBFcnJvcihcbiAgICAgICAgZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJnc1thcmdJbmRleCsrXTsgfSlcbiAgICAgICk7XG4gICAgICBlcnJvci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgIH1cblxuICAgIGVycm9yLmZyYW1lc1RvUG9wID0gMTsgLy8gd2UgZG9uJ3QgY2FyZSBhYm91dCBpbnZhcmlhbnQncyBvd24gZnJhbWVcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBpbnZhcmlhbnQ7XG4iLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAiXG5cbmltcG9ydCBBcHAgZnJvbSAnLi4vc3JjL3ZpZXdzL0FwcCc7XG5cbmltcG9ydCBCYWxhbmNlT3ZlcnZpZXdWaWV3IGZyb20gJy4uL3NyYy92aWV3cy9CYWxhbmNlT3ZlcnZpZXdWaWV3JztcblxuaW1wb3J0IEFwcFNldHRpbmdzIGZyb20gJy4uL3NyYy92aWV3cy9BcHBTZXR0aW5ncyc7XG5cblxuZXhwb3J0ICogZnJvbSAnQHN0cmlwZS91aS1leHRlbnNpb24tc2RrL3ZlcnNpb24nO1xuZXhwb3J0IGNvbnN0IEJVSUxEX1RJTUUgPSAnMjAyMy0wNC0wMiAxNjoyNjozMC41NTU5MjY2NzMgKzA1MzAgSVNUIG09KzAuMDExMjE0MTc4J1xuXG5leHBvcnQge1xuXHRcblx0QXBwLFxuXHRcblx0QmFsYW5jZU92ZXJ2aWV3Vmlldyxcblx0XG5cdEFwcFNldHRpbmdzLFxuXHRcbn07XG5leHBvcnQgZGVmYXVsdCB7XG4gIFwiaWRcIjogXCJjb20uZXhhbXBsZS5zdHJpcGUtYXBwXy1wYXlvdXRcIixcbiAgXCJ2ZXJzaW9uXCI6IFwiMC4wLjJcIixcbiAgXCJuYW1lXCI6IFwiU3RyaXBlUmV0cmlldmFsQXBwXCIsXG4gIFwiaWNvblwiOiBcIlwiLFxuICBcInBlcm1pc3Npb25zXCI6IFtcbiAgICB7XG4gICAgICBcInBlcm1pc3Npb25cIjogXCJzZWNyZXRfd3JpdGVcIixcbiAgICAgIFwicHVycG9zZVwiOiBcIkFsbG93cyBzdG9yaW5nIHNlY3JldHMgYmV0d2VlbiBwYWdlIHJlbG9hZHNcIlxuICAgIH1cbiAgXSxcbiAgXCJhcHBfYmFja2VuZFwiOiB7XG4gICAgXCJ3ZWJob29rc1wiOiBudWxsXG4gIH0sXG4gIFwidWlfZXh0ZW5zaW9uXCI6IHtcbiAgICBcInZpZXdzXCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJ2aWV3cG9ydFwiOiBcInN0cmlwZS5kYXNoYm9hcmQuaG9tZS5vdmVydmlld1wiLFxuICAgICAgICBcImNvbXBvbmVudFwiOiBcIkFwcFwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcInZpZXdwb3J0XCI6IFwic3RyaXBlLmRhc2hib2FyZC5iYWxhbmNlLm92ZXJ2aWV3XCIsXG4gICAgICAgIFwiY29tcG9uZW50XCI6IFwiQmFsYW5jZU92ZXJ2aWV3Vmlld1wiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcInZpZXdwb3J0XCI6IFwic2V0dGluZ3NcIixcbiAgICAgICAgXCJjb21wb25lbnRcIjogXCJBcHBTZXR0aW5nc1wiXG4gICAgICB9XG4gICAgXSxcbiAgICBcImNvbnRlbnRfc2VjdXJpdHlfcG9saWN5XCI6IHtcbiAgICAgIFwiY29ubmVjdC1zcmNcIjogW1xuICAgICAgICBcImh0dHBzOi8vc3RyaXBlLWJhY2tlbmQtazdiNC1qYXlhdGVlcnRoZGFtYmFsLnZlcmNlbC5hcHAvaGVhbHRoLWNoZWNrL1wiLFxuICAgICAgICBcImh0dHBzOi8vc3RyaXBlLWJhY2tlbmQtazdiNC1qYXlhdGVlcnRoZGFtYmFsLnZlcmNlbC5hcHAvZ2V0LW9hdXRoLWxpbmsvXCIsXG4gICAgICAgIFwiaHR0cHM6Ly9zdHJpcGUtYmFja2VuZC1rN2I0LWpheWF0ZWVydGhkYW1iYWwudmVyY2VsLmFwcC9hdXRob3JpemUtb2F1dGgvXCIsXG4gICAgICAgIFwiaHR0cHM6Ly9zdHJpcGUtYmFja2VuZC1rN2I0LWpheWF0ZWVydGhkYW1iYWwudmVyY2VsLmFwcC9nZXRfcGF5b3V0cy9cIixcbiAgICAgICAgXCJodHRwczovL3N0cmlwZS1iYWNrZW5kLWs3YjQtamF5YXRlZXJ0aGRhbWJhbC52ZXJjZWwuYXBwL2Rvd25sb2FkLXJlcG9ydC9cIixcbiAgICAgICAgXCJodHRwczovL3N0cmlwZS1iYWNrZW5kLWs3YjQtamF5YXRlZXJ0aGRhbWJhbC52ZXJjZWwuYXBwL2NoZWNrLXVzZXIvXCIsXG4gICAgICAgIFwiaHR0cHM6Ly9zdHJpcGUtYmFja2VuZC1rN2I0LWpheWF0ZWVydGhkYW1iYWwudmVyY2VsLmFwcC9kZWF1dGhvcml6ZV91c2VyL1wiXG4gICAgICBdLFxuICAgICAgXCJpbWFnZS1zcmNcIjogbnVsbCxcbiAgICAgIFwicHVycG9zZVwiOiBcIlNlbmQgRGF0YSB0byBWZXJjZWxEZXBsb3lcIlxuICAgIH1cbiAgfVxufVxuIiwgImltcG9ydCB7Q29udGV4dFZpZXcsIEJ1dHRvbiwgQm94LCBCYWRnZSwgQmFubmVyfSBmcm9tICdAc3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvdWknO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtjcmVhdGVPQXV0aFN0YXRlfSBmcm9tICdAc3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvb2F1dGgnO1xuaW1wb3J0IHR5cGUge0V4dGVuc2lvbkNvbnRleHRWYWx1ZX0gZnJvbSAnQHN0cmlwZS91aS1leHRlbnNpb24tc2RrL2NvbnRleHQnO1xuaW1wb3J0IGZldGNoU3RyaXBlU2lnbmF0dXJlIGZyb20gJ0BzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay9zaWduYXR1cmUnO1xuXG5cbmNvbnN0IHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSA9IFJlYWN0O1xuXG5cbmNvbnN0IEJBQ0tFTkRfVVJMID0gJ2h0dHBzOi8vc3RyaXBlLWJhY2tlbmQtazdiNC1qYXlhdGVlcnRoZGFtYmFsLnZlcmNlbC5hcHAvJztcbi8vIGNvbnN0IEJBQ0tFTkRfVVJMID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC8nXG5cbmNvbnN0IGdldFJlZGlyZWN0VVJMID0gKG1vZGU6ICdsaXZlJyB8ICd0ZXN0JykgPT4gYGh0dHBzOi8vZGFzaGJvYXJkLnN0cmlwZS5jb20vJHttb2RlID09PSAndGVzdCcgPyAndGVzdC8nIDogJ2xpdmUvJ31hcHBzLW9hdXRoL2NvbS5leGFtcGxlLm9hdXRoLWV4YW1wbGVgO1xuXG5jb25zdCBnZXRBdXRoVVJMID0gKHN0YXRlOiBzdHJpbmcsIGNoYWxsZW5nZTogc3RyaW5nLCBtb2RlOiAnbGl2ZScgfCAndGVzdCcpID0+XG4gICAgQkFDS0VORF9VUkwgKyBgL2dldC1vYXV0aC1saW5rLz9yZXNwb25zZV90eXBlPWNvZGUmY2xpZW50JnJlZGlyZWN0JnN0YXRlPSR7c3RhdGV9JmNvZGVfY2hhbGxlbmdlPSR7Y2hhbGxlbmdlfSZtb2RlPSR7bW9kZX0mY29kZV9jaGFsbGVuZ2VfbWV0aG9kPVMyNTZgO1xuXG5cbmNvbnN0IE9BdXRoQXBwID0gKHtlbnZpcm9ubWVudCwgdXNlckNvbnRleHR9OiBFeHRlbnNpb25Db250ZXh0VmFsdWUpID0+IHtcbiAgICBjb25zdCB7bW9kZX0gPSBlbnZpcm9ubWVudDtcbiAgICBjb25zdCBbYXV0aFVSTCwgc2V0QXV0aFVSTF0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW3N0cmlwZVN0YXR1cywgc2V0U3RyaXBlU3RhdHVzXSA9IHVzZVN0YXRlPHN0cmluZz4oJ2Rvd24nKTtcbiAgICBjb25zdCBbaGFzU2lnbmVkSW4sIHNldEhhc1NpZ25lZEluXSA9IHVzZVN0YXRlPGJvb2xlYW4+KHRydWUpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY3JlYXRlT0F1dGhTdGF0ZSgpLnRoZW4oKHtzdGF0ZSwgY2hhbGxlbmdlfSkgPT4ge1xuICAgICAgICAgICAgc2V0QXV0aFVSTChnZXRBdXRoVVJMKHN0YXRlLCBjaGFsbGVuZ2UsIG1vZGUpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IGdldFN0YXR1cyA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaChCQUNLRU5EX1VSTCArICdoZWFsdGgtY2hlY2svJywge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAnc3RyaXBlLXNpZ25hdHVyZSc6IGF3YWl0IGZldGNoU3RyaXBlU2lnbmF0dXJlKCksXG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgICAgIHVzZXJfaWQ6IHVzZXJDb250ZXh0Py5pZCxcbiAgICAgICAgICAgICAgICAgICAgYWNjb3VudF9pZDogdXNlckNvbnRleHQ/LmFjY291bnQuaWQsXG4gICAgICAgICAgICAgICAgICAgIG1vZGU6IG1vZGVcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSkudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNldEhhc1NpZ25lZEluKGRhdGEuaGFzU2lnbmVkSW4pO1xuICAgICAgICAgICAgICAgICAgICBzZXRTdHJpcGVTdGF0dXMoZGF0YS5yZXN1bHQgPT0gJ09LJyA/ICdVcCcgOiAnRG93bicpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgXG4gICAgICAgIH1cbiAgICAgICAgZ2V0U3RhdHVzKCk7ICAgICAgICBcbiAgICAgICAgXG4gICAgfSwgW21vZGVdKTtcbiAgICByZXR1cm4gKFxuXG4gICAgICAgIDxDb250ZXh0VmlldyB0aXRsZT1cIlBheW91dFZpZXcgQXBwXCI+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHtoYXNTaWduZWRJbiAmJlxuICAgICAgICAgICAgICAgIDxCYWRnZSB0eXBlPVwiaW5mb1wiPllvdSBhcmUgQWxyZWFkeSBBdXRob3JpemVkIHRvIE91ciBBcHAhPC9CYWRnZT5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHshaGFzU2lnbmVkSW4gJiZcbiAgICAgICAgICAgICAgICA8QmFubmVyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjcml0aWNhbFwiXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiWW91IGhhdmUgbm90IEF1dGhvcml6ZWQhXCJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJQbGVhc2UgQXV0aG9yaXplIGJlZm9yZSB5b3UgY29udGludWVcIlxuICAgICAgICAgICAgICAgICAgICBhY3Rpb25zPXtcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBocmVmPXthdXRoVVJMfSB0YXJnZXQ9XCJfYmxhbmtcIj5CZWdpbiBBdXRob3JpemU8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB9XG4gICAgICAgIDwvQ29udGV4dFZpZXc+XG5cbiAgICApXG4gICAgICAgIDtcblxuXG59O1xuZXhwb3J0IGRlZmF1bHQgT0F1dGhBcHA7XG5cblxuXG5cbi8qXG4gIFwiaWRcIjogXCJjb20uZXhhbXBsZS5iYXNpYy1vYXV0aDItdGVzdFwiLFxuICBcInZlcnNpb25cIjogXCIwLjAuMlwiLFxuICBcIm5hbWVcIjogXCJCYXNpYy1PQXV0aDIgVGVzdFwiLFxuKi8iLCAiaW1wb3J0IHtcbiAgICBCb3gsXG4gICAgQ29udGV4dFZpZXcsXG4gICAgTGlzdEl0ZW0sXG4gICAgTGlzdCxcbiAgICBCdXR0b24sXG4gICAgQmFubmVyLFxuICAgIEJhZGdlLFxuICAgIEZvcm1GaWVsZEdyb3VwLFxuICAgIFRleHRGaWVsZCxcbiAgICBTcGlubmVyXG59IGZyb20gXCJAc3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvdWlcIjtcbmltcG9ydCB0eXBlIHsgRXh0ZW5zaW9uQ29udGV4dFZhbHVlIH0gZnJvbSBcIkBzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay9jb250ZXh0XCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjcmVhdGVPQXV0aFN0YXRlIH0gZnJvbSBcIkBzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay9vYXV0aFwiO1xuaW1wb3J0IGZldGNoU3RyaXBlU2lnbmF0dXJlIGZyb20gXCJAc3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvc2lnbmF0dXJlXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuXG4vLyBjb25zdCBCQUNLRU5EX1VSTCA9ICdodHRwczovL3N0cmlwZS1iYWNrZW5kLWs3YjQtamF5YXRlZXJ0aGRhbWJhbC52ZXJjZWwuYXBwLyc7XG5jb25zdCBCQUNLRU5EX1VSTCA9ICdodHRwOi8vbG9jYWxob3N0OjUwMDAvJ1xuXG5jb25zdCBnZXRBdXRoVVJMID0gKHN0YXRlOiBzdHJpbmcsIGNoYWxsZW5nZTogc3RyaW5nLCBtb2RlOiAnbGl2ZScgfCAndGVzdCcpID0+XG4gICAgYCR7QkFDS0VORF9VUkx9Z2V0LW9hdXRoLWxpbmsvP3Jlc3BvbnNlX3R5cGU9Y29kZSZjbGllbnQmcmVkaXJlY3Qmc3RhdGU9JHtzdGF0ZX0mY29kZV9jaGFsbGVuZ2U9JHtjaGFsbGVuZ2V9Jm1vZGU9JHttb2RlfSZjb2RlX2NoYWxsZW5nZV9tZXRob2Q9UzI1NmA7XG5cblxuY29uc3QgQmFsYW5jZU92ZXJ2aWV3VmlldyA9ICh7IHVzZXJDb250ZXh0LCBlbnZpcm9ubWVudCB9OiBFeHRlbnNpb25Db250ZXh0VmFsdWUpID0+IHtcbiAgICBjb25zdCBtYXhMZW5ndGhGb3JNb250aDogbnVtYmVyID0gMjtcbiAgICBjb25zdCBtYXhMZW5ndGhGb3JZZWFyOiBudW1iZXIgPSA0O1xuICAgIGNvbnN0IHsgbW9kZSB9ID0gZW52aXJvbm1lbnQ7XG4gICAgbGV0IHZpZXdEYXRhOiBvYmplY3QgPSB7fVxuICAgIGNvbnN0IFtkYXRhLCBzZXRNeURhdGFdID0gdXNlU3RhdGUoW10pO1xuICAgIGNvbnN0IFthdXRoVVJMLCBzZXRBdXRoVVJMXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbaGFzU2lnbmVkSW4sIHNldEhhc1NpZ25lZEluXSA9IHVzZVN0YXRlKHRydWUpXG4gICAgY29uc3QgW21vbnRoVmFsdWUsIHNldE1vbnRoVmFsdWVdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFt5ZWFyVmFsdWUsIHNldFllYXJWYWx1ZV0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW2dvdFBheW91dERhdGEsIHNldFBheW91dERhdGFdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpXG4gICAgY29uc3QgW2dvdFJlc3BvbnNlLCBzZXRnb3RSZXNwb25zZV0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSlcbiAgICBjb25zdCBbc3Bpbm5lck9wZW4sIHNldFNwaW5uZXJPcGVuXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKVxuICAgIGNvbnN0IGRvd25sb2FkRW5kcG9pbnQgPSBgJHtCQUNLRU5EX1VSTH1kb3dubG9hZC1yZXBvcnQvP2FjY291bnRfaWQ9JHt1c2VyQ29udGV4dD8uYWNjb3VudC5pZH0mY3VycmVudF9tb250aD0ke21vbnRoVmFsdWV9JmN1cnJlbnRfeWVhcj0ke3llYXJWYWx1ZX0mbW9kZT0ke21vZGV9YDtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNyZWF0ZU9BdXRoU3RhdGUoKS50aGVuKCh7IHN0YXRlLCBjaGFsbGVuZ2UgfSkgPT4ge1xuICAgICAgICAgICAgc2V0QXV0aFVSTChnZXRBdXRoVVJMKHN0YXRlLCBjaGFsbGVuZ2UsIG1vZGUpKTtcbiAgICAgICAgfSk7XG5cblxuICAgICAgICBjb25zdCBnZXRTdGF0dXMgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2goQkFDS0VORF9VUkwgKyAnaGVhbHRoLWNoZWNrLycsIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgJ3N0cmlwZS1zaWduYXR1cmUnOiBhd2FpdCBmZXRjaFN0cmlwZVNpZ25hdHVyZSgpLFxuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgICAgIHVzZXJfaWQ6IHVzZXJDb250ZXh0Py5pZCxcbiAgICAgICAgICAgICAgICAgICAgYWNjb3VudF9pZDogdXNlckNvbnRleHQ/LmFjY291bnQuaWQsXG4gICAgICAgICAgICAgICAgICAgIG1vZGU6IG1vZGVcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSkudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNldEhhc1NpZ25lZEluKGRhdGEuaGFzU2lnbmVkSW4pO1xuXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGdldFN0YXR1cygpO1xuICAgIH0sIFtdKTtcblxuXG4gICAgLy8gSGFuZGxpbmcgRGF0ZUZvcm0gRGF0YVxuICAgIGNvbnN0IG1vbnRoVmFsdWVIYW5kbGVyID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIHNldE1vbnRoVmFsdWUoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICB9XG4gICAgY29uc3QgeWVhclZhbHVlSGFuZGxlciA9IChldmVudCkgPT4ge1xuICAgICAgICBzZXRZZWFyVmFsdWUoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZXZlbnQpID0+IHtcbiAgICAgICAgc2V0U3Bpbm5lck9wZW4odHJ1ZSlcbiAgICAgICAgLy8gZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChCQUNLRU5EX1VSTCArICdnZXRfcGF5b3V0cy8nLCB7XG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIG1vbnRoOiBtb250aFZhbHVlLFxuICAgICAgICAgICAgICAgIHllYXI6IHllYXJWYWx1ZSxcbiAgICAgICAgICAgICAgICBhY2NvdW50X2lkOiB1c2VyQ29udGV4dD8uYWNjb3VudC5pZCxcbiAgICAgICAgICAgICAgICBtb2RlOiBtb2RlXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuXG4gICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSFRUUCBlcnJvciEgc3RhdHVzOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcbiAgICAgICAgfSBlbHNlIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpXG4gICAgICAgICAgICBzZXRQYXlvdXREYXRhKHRydWUpXG4gICAgICAgICAgICBzZXRTcGlubmVyT3BlbihmYWxzZSlcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcbiAgICAgICAgc2V0TXlEYXRhKEpTT04ucGFyc2UoZGF0YS5vdXRwdXRfZGZfanNvbikpO1xuICAgICAgICBzZXRIYXNTaWduZWRJbihkYXRhLmhhc1NpZ25lZEluKTtcbiAgICAgICAgc2V0Z290UmVzcG9uc2UoZGF0YS5oYXNEYXRhKVxuICAgICAgICBpZiAoZGF0YS5lcnJvcil7XG4gICAgICAgICAgICBzZXRTcGlubmVyT3BlbihmYWxzZSk7XG4gICAgICAgIH1cblxuXG4gICAgfVxuXG4gICAgbGV0IGNyZWF0ZWQ6IG5ldmVyW10gPSBbXVxuICAgIGxldCBkZXNjcjogbmV2ZXJbXSA9IFtdXG4gICAgbGV0IGFtb3VudDogbmV2ZXJbXSA9IFtdXG4gICAgbGV0IG5ldDogbmV2ZXJbXSA9IFtdXG4gICAgY29uc3QgdmFsdWVzID0gT2JqZWN0LnZhbHVlcyhkYXRhKVxuICAgIGZvciAobGV0IHZhbCBpbiB2YWx1ZXMpIHtcbiAgICAgICAgY3JlYXRlZC5wdXNoKHZhbHVlc1t2YWxdLkNyZWF0ZWQpXG4gICAgICAgIGRlc2NyLnB1c2godmFsdWVzW3ZhbF0uRGVzY3JpcHRpb24pXG4gICAgICAgIG5ldC5wdXNoKHZhbHVlc1t2YWxdLk5ldClcbiAgICB9XG4gICAgbGV0IG5ld19jcmVhdGVkID0gY3JlYXRlZC5tYXAoY3JlYXRlID0+IG5ldyBEYXRlKGNyZWF0ZSkudG9Mb2NhbGVTdHJpbmcoXCJlbi1VU1wiLCB7XG4gICAgICAgIHllYXI6IFwibnVtZXJpY1wiLFxuICAgICAgICBtb250aDogXCJsb25nXCIsXG4gICAgICAgIGRheTogXCJudW1lcmljXCIsXG4gICAgfSkpXG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxDb250ZXh0VmlldyB0aXRsZT1cIlVzZXIgRGV0YWlsc1wiPlxuICAgICAgICAgICAge2hhc1NpZ25lZEluICYmXG4gICAgICAgICAgICAgICAgPEJveCBjc3M9e3tcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogJ21lZGl1bScsXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAncHJpbWFyeScsXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJ2xhcmdlJyxcblxuICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybUZpZWxkR3JvdXAgbGVnZW5kPVwiRW50ZXIgTW9udGggYW5kIFllYXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJFbnRlciB0aGUgWWVhciBhbmQgTW9udGggZnJvbSB3aGljaCB5b3Ugd2FudCB0byBmZXRjaCBkYXRhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIHR5cGU9XCJudW1iZXJcIiBvbkNoYW5nZT17bW9udGhWYWx1ZUhhbmRsZXJ9IG1heExlbmd0aD17bWF4TGVuZ3RoRm9yTW9udGh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJNb250aFwiIG5hbWU9XCJtb250aFwiIHBsYWNlaG9sZGVyPVwiTU1cIiBoaWRkZW5FbGVtZW50cz17WydsYWJlbCddfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCB0eXBlPVwibnVtYmVyXCIgb25DaGFuZ2U9e3llYXJWYWx1ZUhhbmRsZXJ9IG1heExlbmd0aD17bWF4TGVuZ3RoRm9yWWVhcn0gbGFiZWw9XCJZZWFyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwieWVhclwiIHBsYWNlaG9sZGVyPVwiWVlZWVwiIGhpZGRlbkVsZW1lbnRzPXtbJ2xhYmVsJ119IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybUZpZWxkR3JvdXA+XG4gICAgICAgICAgICAgICAgICAgIDxCb3ggY3NzPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFjazogJ3onLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ25YOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduWTogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46ICdtZWRpdW0nXG4gICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIG9uUHJlc3M9e2hhbmRsZVN1Ym1pdH0+R2V0IERhdGE8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG5cbiAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgPEJveCBjc3M9e3tcbiAgICAgICAgICAgICAgICBzdGFjazogJ3onLFxuICAgICAgICAgICAgICAgIGFsaWduWDogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgYWxpZ25ZOiAnY2VudGVyJ1xuICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAge3NwaW5uZXJPcGVuICYmXG4gICAgICAgICAgICAgICAgICAgIDxTcGlubmVyIHNpemU9XCJsYXJnZVwiIC8+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9Cb3g+XG5cbiAgICAgICAgICAgIHshZ290UGF5b3V0RGF0YSAmJiBoYXNTaWduZWRJbiAmJlxuICAgICAgICAgICAgICAgIDxCYWRnZSB0eXBlPVwiaW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICBQbGVhc2UgRW50ZXIgTW9udGggYW5kIFllYXIgVmFsdWVzLCB0byB2aWV3IERhdGFcbiAgICAgICAgICAgICAgICA8L0JhZGdlPlxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB7Z290UGF5b3V0RGF0YSAmJiAhZGF0YS5sZW5ndGggJiYgaGFzU2lnbmVkSW4gJiZcbiAgICAgICAgICAgICAgICA8QmFkZ2UgdHlwZT1cIndhcm5pbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgVGhlcmUgaXMgbm8gRGF0YSBQcmVzZW50IGZvciB0aGlzIE1vbnRoIGFuZCBZZWFyXG4gICAgICAgICAgICAgICAgPC9CYWRnZT5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAge2dvdFJlc3BvbnNlICYmIGhhc1NpZ25lZEluICYmIDxMaXN0PlxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bmV0WzBdfVxuICAgICAgICAgICAgICAgICAgICBpZD1cIjJcIlxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17PEJveD57bmV3X2NyZWF0ZWRbMF19PC9Cb3g+fVxuICAgICAgICAgICAgICAgICAgICBzZWNvbmRhcnlUaXRsZT17PEJveD57ZGVzY3JbMF19PC9Cb3g+fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPExpc3RJdGVtXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtuZXRbMV19XG4gICAgICAgICAgICAgICAgICAgIGlkPVwiMlwiXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXs8Qm94PntuZXdfY3JlYXRlZFsxXX08L0JveD59XG4gICAgICAgICAgICAgICAgICAgIHNlY29uZGFyeVRpdGxlPXs8Qm94PntkZXNjclsxXX08L0JveD59XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e25ldFsyXX1cbiAgICAgICAgICAgICAgICAgICAgaWQ9XCIyXCJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9ezxCb3g+e25ld19jcmVhdGVkWzJdfTwvQm94Pn1cbiAgICAgICAgICAgICAgICAgICAgc2Vjb25kYXJ5VGl0bGU9ezxCb3g+e2Rlc2NyWzJdfTwvQm94Pn1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bmV0WzNdfVxuICAgICAgICAgICAgICAgICAgICBpZD1cIjJcIlxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17PEJveD57bmV3X2NyZWF0ZWRbM119PC9Cb3g+fVxuICAgICAgICAgICAgICAgICAgICBzZWNvbmRhcnlUaXRsZT17PEJveD57ZGVzY3JbM119PC9Cb3g+fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPExpc3RJdGVtXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtuZXRbNF19XG4gICAgICAgICAgICAgICAgICAgIGlkPVwiMlwiXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXs8Qm94PntuZXdfY3JlYXRlZFs0XX08L0JveD59XG4gICAgICAgICAgICAgICAgICAgIHNlY29uZGFyeVRpdGxlPXs8Qm94PntkZXNjcls0XX08L0JveD59XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e25ldFs1XX1cbiAgICAgICAgICAgICAgICAgICAgaWQ9XCIyXCJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9ezxCb3g+e25ld19jcmVhdGVkWzVdfTwvQm94Pn1cbiAgICAgICAgICAgICAgICAgICAgc2Vjb25kYXJ5VGl0bGU9ezxCb3g+e2Rlc2NyWzVdfTwvQm94Pn1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bmV0WzZdfVxuICAgICAgICAgICAgICAgICAgICBpZD1cIjJcIlxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17PEJveD57bmV3X2NyZWF0ZWRbNl19PC9Cb3g+fVxuICAgICAgICAgICAgICAgICAgICBzZWNvbmRhcnlUaXRsZT17PEJveD57ZGVzY3JbNl19PC9Cb3g+fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPExpc3RJdGVtXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtuZXRbN119XG4gICAgICAgICAgICAgICAgICAgIGlkPVwiMlwiXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXs8Qm94PntuZXdfY3JlYXRlZFs3XX08L0JveD59XG4gICAgICAgICAgICAgICAgICAgIHNlY29uZGFyeVRpdGxlPXs8Qm94PntkZXNjcls3XX08L0JveD59XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e25ldFs4XX1cbiAgICAgICAgICAgICAgICAgICAgaWQ9XCIyXCJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9ezxCb3g+e25ld19jcmVhdGVkWzhdfTwvQm94Pn1cbiAgICAgICAgICAgICAgICAgICAgc2Vjb25kYXJ5VGl0bGU9ezxCb3g+e2Rlc2NyWzhdfTwvQm94Pn1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9MaXN0Pn1cblxuICAgICAgICAgICAgPEJveCBjc3M9e3sgc3RhY2s6ICd5JywgZ2FwOiAnbGFyZ2UnLCBtYXJnaW46ICdsYXJnZScgfX0+XG4gICAgICAgICAgICAgICAge2dvdFJlc3BvbnNlICYmXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gaHJlZj17ZG93bmxvYWRFbmRwb2ludH0gdHlwZT1cInByaW1hcnlcIiBjc3M9e3sgd2lkdGg6ICdmaWxsJywgYWxpZ25YOiAnY2VudGVyJyB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCI+RG93bmxvYWRcbiAgICAgICAgICAgICAgICAgICAgICAgIENTVjwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHshaGFzU2lnbmVkSW4gJiZcbiAgICAgICAgICAgICAgICAgICAgPEJhbm5lclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNyaXRpY2FsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiWW91IGhhdmUgbm90IFNpZ24gSW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJQbGVhc2Ugc2lnbiBpbiBiZWZvcmUgeW91IGNvbnRpbnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbnM9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBocmVmPXthdXRoVVJMfSB0YXJnZXQ9XCJfYmxhbmtcIj5CZWdpbiBBdXRob3JpemU8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIDwvQm94PlxuXG4gICAgICAgIDwvQ29udGV4dFZpZXc+XG4gICAgKVxufTtcblxuZXhwb3J0IGRlZmF1bHQgQmFsYW5jZU92ZXJ2aWV3VmlldzsiLCAiaW1wb3J0IHtcbiAgICBCb3gsXG4gICAgQnV0dG9uLFxuICAgIEJhbm5lcixcbiAgICBTZXR0aW5nc1ZpZXcsXG4gICAgU3Bpbm5lclxufSBmcm9tIFwiQHN0cmlwZS91aS1leHRlbnNpb24tc2RrL3VpXCI7XG5pbXBvcnQgdHlwZSB7IEV4dGVuc2lvbkNvbnRleHRWYWx1ZSB9IGZyb20gXCJAc3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvY29udGV4dFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY3JlYXRlT0F1dGhTdGF0ZSB9IGZyb20gJ0BzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay9vYXV0aCc7XG5cbmNvbnN0IEJBQ0tFTkRfVVJMID0gJ2h0dHBzOi8vc3RyaXBlLWJhY2tlbmQtazdiNC1qYXlhdGVlcnRoZGFtYmFsLnZlcmNlbC5hcHAvJztcbi8vIGNvbnN0IEJBQ0tFTkRfVVJMID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC8nXG5cbmNvbnN0IGdldEF1dGhVUkwgPSAoc3RhdGU6IHN0cmluZywgY2hhbGxlbmdlOiBzdHJpbmcsIG1vZGU6ICdsaXZlJyB8ICd0ZXN0JykgPT5cbiAgICBCQUNLRU5EX1VSTCArIGAvZ2V0LW9hdXRoLWxpbmsvP3Jlc3BvbnNlX3R5cGU9Y29kZSZjbGllbnQmcmVkaXJlY3Qmc3RhdGU9JHtzdGF0ZX0mY29kZV9jaGFsbGVuZ2U9JHtjaGFsbGVuZ2V9Jm1vZGU9JHttb2RlfSZjb2RlX2NoYWxsZW5nZV9tZXRob2Q9UzI1NmA7XG5cblxuY29uc3QgQXBwU2V0dGluZ3MgPSAoeyB1c2VyQ29udGV4dCwgZW52aXJvbm1lbnQgfTogRXh0ZW5zaW9uQ29udGV4dFZhbHVlKSA9PiB7XG4gICAgY29uc3QgeyBtb2RlIH0gPSBlbnZpcm9ubWVudDtcbiAgICBjb25zdCBbZGVhdXRoLCBzZXREZWF1dGhdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFt1c2VyRXhpc3QsIHNldFVzZXJFeGlzdF0gPSB1c2VTdGF0ZTxib29sZWFuPigpO1xuICAgIGNvbnN0IFthdXRoVVJMLCBzZXRBdXRoVVJMXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbc3Bpbm5lck9wZW4sIHNldFNwaW5uZXJPcGVuXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKVxuICAgIGNvbnN0IGRlYXV0aG9yaXplX3VzZXIgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIHNldFNwaW5uZXJPcGVuKHRydWUpXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaChCQUNLRU5EX1VSTCArICdkZWF1dGhvcml6ZV91c2VyLycsIHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICB1c2VyX2lkOiB1c2VyQ29udGV4dD8uaWQsXG4gICAgICAgICAgICAgICAgYWNjb3VudF9pZDogdXNlckNvbnRleHQ/LmFjY291bnQuaWQsXG4gICAgICAgICAgICAgICAgbW9kZTogbW9kZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSkudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IHNldFVzZXJFeGlzdChkYXRhLnVzZXJFeGlzdCkpXG4gICAgfVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY3JlYXRlT0F1dGhTdGF0ZSgpLnRoZW4oKHsgc3RhdGUsIGNoYWxsZW5nZSB9KSA9PiB7XG4gICAgICAgICAgICBzZXRBdXRoVVJMKGdldEF1dGhVUkwoc3RhdGUsIGNoYWxsZW5nZSwgbW9kZSkpO1xuICAgICAgICB9KTtcbiAgICAgICAgZmV0Y2goQkFDS0VORF9VUkwgKyAnY2hlY2stdXNlci8nLCB7XG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgYWNjb3VudF9pZDogdXNlckNvbnRleHQ/LmFjY291bnQuaWQsXG4gICAgICAgICAgICAgICAgbW9kZTogbW9kZVxuICAgICAgICAgICAgfSlcblxuICAgICAgICB9KS50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIHNldFVzZXJFeGlzdChkYXRhLnVzZXJFeGlzdCk7XG4gICAgICAgICAgICB9KVxuICAgIH0sIFttb2RlXSk7XG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxTZXR0aW5nc1ZpZXcgb25TYXZlPXsoKSA9PiB7XG4gICAgICAgIH19PlxuICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICAgIGNzcz17e1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBcImNvbnRhaW5lclwiLFxuICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwibWVkaXVtXCIsXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwibGFyZ2VcIixcbiAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICB7dXNlckV4aXN0ICYmXG4gICAgICAgICAgICAgICAgICAgIDxCYW5uZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjcml0aWNhbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlJlbW92ZSBBdXRob3JpemF0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiWW91IHdpbGwgbm8gbG9uZ2VyIGFibGUgdG8gYWNjZXNzIHlvdXIgZGF0YSB0aHJvdWdoIEFwcFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb25zPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uUHJlc3M9e2RlYXV0aG9yaXplX3VzZXJ9IHR5cGU9XCJkZXN0cnVjdGl2ZVwiPlJlbW92ZSBBdXRob3JpemF0aW9uPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHt1c2VyRXhpc3QgJiYgc3Bpbm5lck9wZW4gJiZcbiAgICAgICAgICAgICAgICAgICAgPEJhbm5lclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNyaXRpY2FsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiUmVtb3ZlIEF1dGhvcml6YXRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJZb3Ugd2lsbCBubyBsb25nZXIgYWJsZSB0byBhY2Nlc3MgeW91ciBkYXRhIHRocm91Z2ggQXBwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbnM9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGlubmVyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgeyF1c2VyRXhpc3QgJiZcbiAgICAgICAgICAgICAgICAgICAgPEJhbm5lclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImRlZmF1bHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJCZWdpbiBBdXRob3JpemF0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiWW91IGFyZSBub3QgYXV0aG9yaXplZCB5b3VyIGFjY291bnQgd2l0aCBvdXIgc2VydmVycywgUGxlYXNlIGJlZ2luIHRoZSBBdXRob3JpemF0aW9uIFByb2Nlc3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9ucz17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBocmVmPXthdXRoVVJMfSB0eXBlPVwicHJpbWFyeVwiPkJlZ2luIEF1dGhvcml6YXRpb248L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9TZXR0aW5nc1ZpZXc+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFwcFNldHRpbmdzO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsVUFBQSxVQUFBLFVBQUE7QUFFYSxjQUFBLGFBQVksR0FBQSxRQUFBLDRCQUd2QixXQUFXO0FBR0EsY0FBQSxpQkFBZ0IsR0FBQSxRQUFBLDRCQUczQixpQkFBaUI7UUFDakIsZUFB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QUEsZUFBQSxTQUFBLFFBQUEsRUFBQSxZQUFBLE1BQUEsS0FBQSxXQUFBO0FBQUEsZUFBQSxLQUFBO01BQUksRUFBQSxDQUFBO0FBQ0osYUFBQSxlQUFBLFNBQUEsWUFBQSxFQUFBLFlBQUEsTUFBQSxLQUFBLFdBQUE7QUFBQSxlQUFBLEtBQUE7TUFBUSxFQUFBLENBQUE7QUFDUixhQUFBLGVBQUEsU0FBQSxRQUFBLEVBQUEsWUFBQSxNQUFBLEtBQUEsV0FBQTtBQUFBLGVBQUEsS0FBQTtNQUFJLEVBQUEsQ0FBQTtBQUNKLGFBQUEsZUFBQSxTQUFBLGFBQUEsRUFBQSxZQUFBLE1BQUEsS0FBQSxXQUFBO0FBQUEsZUFBQSxLQUFBO01BQVMsRUFBQSxDQUFBO0FBQ1QsYUFBQSxlQUFBLFNBQUEsWUFBQSxFQUFBLFlBQUEsTUFBQSxLQUFBLFdBQUE7QUFBQSxlQUFBLEtBQUE7TUFBUSxFQUFBLENBQUE7QUFLUixhQUFBLGVBQUEsU0FBQSxXQUFBLEVBQUEsWUFBQSxNQUFBLEtBQUEsV0FBQTtBQUFBLGVBQUEsS0FBQTtNQUFPLEVBQUEsQ0FBQTtBQUVQLGFBQUEsZUFBQSxTQUFBLE9BQUEsRUFBQSxZQUFBLE1BQUEsS0FBQSxXQUFBO0FBQUEsZUFBQSxLQUFBO01BQUcsRUFBQSxDQUFBO0FBQ0gsYUFBQSxlQUFBLFNBQUEsV0FBQSxFQUFBLFlBQUEsTUFBQSxLQUFBLFdBQUE7QUFBQSxlQUFBLEtBQUE7TUFBTyxFQUFBLENBQUE7QUFDUCxhQUFBLGVBQUEsU0FBQSxZQUFBLEVBQUEsWUFBQSxNQUFBLEtBQUEsV0FBQTtBQUFBLGVBQUEsS0FBQTtNQUFRLEVBQUEsQ0FBQTtBQUNSLGFBQUEsZUFBQSxTQUFBLGFBQUEsRUFBQSxZQUFBLE1BQUEsS0FBQSxXQUFBO0FBQUEsZUFBQSxLQUFBO01BQVMsRUFBQSxDQUFBO0FBQ1QsYUFBQSxlQUFBLFNBQUEsU0FBQSxFQUFBLFlBQUEsTUFBQSxLQUFBLFdBQUE7QUFBQSxlQUFBLEtBQUE7TUFBSyxFQUFBLENBQUE7QUFDTCxhQUFBLGVBQUEsU0FBQSxhQUFBLEVB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QUEsWUFDWixTQUNJLDZDQUFDLHNCQUFRO0FBQUEsV0FFakI7QUFBQSxVQUdILENBQUMsYUFDRSw2Q0FBQztBQUFBLFlBQ0csTUFBSztBQUFBLFlBQ0wsT0FBTTtBQUFBLFlBQ04sYUFBWTtBQUFBLFlBQ1osU0FDSSw2Q0FBQztBQUFBLGNBQU8sTUFBTTtBQUFBLGNBQVMsTUFBSztBQUFBLGNBQVU7QUFBQSxhQUFtQjtBQUFBLFdBRWpFO0FBQUE7QUFBQSxPQUVSO0FBQUEsS0FDSjtBQUFBLEVBRVI7QUFFQSxNQUFPLHNCQUFROzs7QUhqR2YsK0JBQWM7QUFDUCxNQUFNLGFBQWE7QUFXMUIsTUFBTyxtQkFBUTtBQUFBLElBQ2IsTUFBTTtBQUFBLElBQ04sV0FBVztBQUFBLElBQ1gsUUFBUTtBQUFBLElBQ1IsUUFBUTtBQUFBLElBQ1IsZUFBZTtBQUFBLE1BQ2I7QUFBQSxRQUNFLGNBQWM7QUFBQSxRQUNkLFdBQVc7QUFBQSxNQUNiO0FBQUEsSUFDRjtBQUFBLElBQ0EsZUFBZTtBQUFBLE1BQ2IsWUFBWTtBQUFBLElBQ2Q7QUFBQSxJQUNBLGdCQUFnQjtBQUFBLE1BQ2QsU0FBUztBQUFBLFFBQ1A7QUFBQSxVQUNFLFlBQVk7QUFBQSxVQUNaLGFBQWE7QUFBQSxRQUNmO0FBQUEsUUFDQTtBQUFBLFVBQ0UsWUFBWTtBQUFBLFVBQ1osYUFBYTtBQUFBLFFBQ2Y7QUFBQSxRQUNBO0FBQUEsVUFDRSxZQUFZO0FBQUEsVUFDWixhQUFhO0FBQUEsUUFDZjtBQUFBLE1BQ0Y7QUFBQSxNQUNBLDJCQUEyQjtBQUFBLFFBQ3pCLGVBQWU7QUFBQSxVQUNiO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0EsYUFBYTtBQUFBLFFBQ2IsV0FBVztBQUFBLE1BQ2I7QUFBQSxJQUNGO0FBQUEsRUFDRjsiLAogICJuYW1lcyI6IFsiY3JlYXRlT0F1dGhTdGF0ZSIsICJmZXRjaFN0cmlwZVNpZ25hdHVyZSIsICJmZXRjaFN0cmlwZVNpZ25hdHVyZSIsICJkYXRhIiwgImltcG9ydF91aSIsICJpbXBvcnRfb2F1dGgiLCAiaW1wb3J0X3NpZ25hdHVyZSIsICJpbXBvcnRfanN4X3J1bnRpbWUiLCAiQkFDS0VORF9VUkwiLCAiZ2V0QXV0aFVSTCIsICJkYXRhIiwgImZldGNoU3RyaXBlU2lnbmF0dXJlIiwgImltcG9ydF91aSIsICJpbXBvcnRfcmVhY3QiLCAiaW1wb3J0X29hdXRoIiwgImltcG9ydF9qc3hfcnVudGltZSIsICJCQUNLRU5EX1VSTCIsICJnZXRBdXRoVVJMIiwgImRhdGEiXQp9Cg==
