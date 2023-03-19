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
      var createOAuthState3 = (state = "") => {
        return (0, _endpoint_1.getHostEndpoint)().call.createOAuthState(state);
      };
      exports.createOAuthState = createOAuthState3;
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
  var getAuthURL = (state, challenge, mode) => `http://localhost:5000/get-oauth-link/?response_type=code&client&redirect&state=${state}&code_challenge=${challenge}&mode=${mode}&code_challenge_method=S256`;
  var OAuthApp = ({ environment, userContext }) => {
    const { mode } = environment;
    const [authURL, setAuthURL] = useState("");
    const [stripeStatus, setStripeStatus] = useState("down");
    const [hasSignedIn, setHasSignedIn] = useState(true);
    const getStatus = () => __async(void 0, null, function* () {
      const data = yield fetch("http://localhost:5000/health-check", {
        method: "POST",
        headers: {
          "stripe-signature": yield (0, import_signature.default)(),
          "Content-type": "application/json"
        },
        body: JSON.stringify({
          user_id: userContext == null ? void 0 : userContext.id,
          account_id: userContext == null ? void 0 : userContext.account.id
        })
      }).then((response) => response.json()).then((data2) => {
        setHasSignedIn(data2.hasSignedIn);
        setStripeStatus(data2.result == "OK" ? "Up" : "Down");
      });
    });
    getStatus();
    useEffect(() => {
      if (hasSignedIn) {
      }
      (0, import_oauth.createOAuthState)().then(({ state, challenge }) => {
        setAuthURL(getAuthURL(state, challenge, mode));
      });
    }, [mode]);
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_ui.ContextView, {
      title: "Payout App[TEST]",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_ui.Box, {
          children: [
            "Stripe is ",
            stripeStatus
          ]
        }),
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
  var getAuthURL2 = (state, challenge, mode) => `http://localhost:5000/get-oauth-link/?response_type=code&client&redirect&state=${state}&code_challenge=${challenge}&mode=${mode}&code_challenge_method=S256`;
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
    const downloadEndpoint = `http://localhost:5000/download-report/?account_id=${userContext == null ? void 0 : userContext.account.id}&current_month=${monthValue}&current_year=${yearValue}`;
    (0, import_react.useEffect)(() => {
      (0, import_oauth2.createOAuthState)().then(({ state, challenge }) => {
        setAuthURL(getAuthURL2(state, challenge, mode));
      });
      const getStatus = () => __async(void 0, null, function* () {
        const data2 = yield fetch("http://localhost:5000/health-check", {
          method: "POST",
          headers: {
            "stripe-signature": yield (0, import_signature2.default)(),
            "Content-type": "application/json"
          },
          body: JSON.stringify({
            user_id: userContext == null ? void 0 : userContext.id,
            account_id: userContext == null ? void 0 : userContext.account.id
          })
        }).then((response) => response.json()).then((data3) => setHasSignedIn(data3.hasSignedIn));
      });
    }, []);
    const monthValueHandler = (event) => {
      setMonthValue(event.target.value);
    };
    const yearValueHandler = (event) => {
      setYearValue(event.target.value);
    };
    const handleSubmit = (event) => __async(void 0, null, function* () {
      const response = yield fetch("http://localhost:5000/get_payouts/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          month: monthValue,
          year: yearValue,
          account_id: userContext == null ? void 0 : userContext.account.id
        })
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data2 = yield response.json();
      setMyData(JSON.parse(data2.output_df_json));
      setHasSignedIn(data2.hasSignedIn);
      setPayoutData(data2.hasData);
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
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_ui2.Box, {
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
                  placeholder: "YY",
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
        gotPayoutData && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_ui2.List, {
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
            gotPayoutData && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_ui2.Button, {
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
  var import_jsx_runtime3 = __require("react/jsx-runtime");
  var AppSettings = ({ userContext, environment }) => {
    const [deauth, setDeauth] = (0, import_react2.useState)("");
    const check_user = () => __async(void 0, null, function* () {
      const data = yield fetch("http://localhost:5000/deauthorize_user/", {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({
          user_id: userContext == null ? void 0 : userContext.id,
          account_id: userContext == null ? void 0 : userContext.account.id
        })
      }).then((response) => response.json()).then((data2) => console.log(data2));
    });
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_ui3.SettingsView, {
      onSave: () => {
      },
      children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_ui3.Box, {
        css: {
          background: "container",
          borderRadius: "medium",
          padding: "large"
        },
        children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_ui3.Banner, {
          type: "critical",
          title: "Remove Authorization",
          description: "You will no longer able to access your data through App",
          actions: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_ui3.Button, {
            onPress: check_user,
            type: "destructive",
            children: "Remove Authorization"
          })
        })
      })
    });
  };
  var AppSettings_default = AppSettings;

  // .build/manifest.js
  __reExport(manifest_exports, __toESM(require_version()));
  var BUILD_TIME = "2023-03-19 22:45:08.731944571 +0530 IST m=+0.011271799";
  var manifest_default = {
    "id": "com.example.basic-oauth2-test",
    "version": "0.0.2",
    "name": "Basic-OAuth2 Test",
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
      "actions": [],
      "content_security_policy": {
        "connect-src": null,
        "image-src": null,
        "purpose": ""
      }
    },
    "post_install_action": null,
    "constants": null
  };
  return __toCommonJS(manifest_exports);
})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0BzdHJpcGUvc3JjL3VpL0BzYWlsL3VpL2luZGV4LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9Ac3RyaXBlL3NyYy91aS9Ac3RyaXBlLWludGVybmFsL3RhaWxvci1kYXNoYm9hcmQtY29tcG9uZW50cy9pbmRleC50cyIsICIuLi9ub2RlX21vZHVsZXMvQHN0cmlwZS9zcmMvdWkvbWFudWFsX2NvbXBvbmVudHMudHMiLCAiLi4vbm9kZV9tb2R1bGVzL0BzdHJpcGUvc3JjL3VpL2luZGV4LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9pbnZhcmlhbnQvYnJvd3Nlci5qcyIsICIuLi9ub2RlX21vZHVsZXMvQHN0cmlwZS9zcmMvdXRpbHMvX2VuZHBvaW50LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9Ac3RyaXBlL3NyYy91dGlscy9vYXV0aC50cyIsICIuLi9ub2RlX21vZHVsZXMvQHN0cmlwZS9zcmMvb2F1dGgudHMiLCAiLi4vbm9kZV9tb2R1bGVzL0BzdHJpcGUvc3JjL3V0aWxzL3NpZ25hdHVyZS50cyIsICIuLi9ub2RlX21vZHVsZXMvQHN0cmlwZS9zcmMvc2lnbmF0dXJlLnRzIiwgIi4uL25vZGVfbW9kdWxlcy9Ac3RyaXBlL3NyYy92ZXJzaW9uLnRzIiwgIm1hbmlmZXN0LmpzIiwgIi4uL3NyYy92aWV3cy9BcHAudHN4IiwgIi4uL3NyYy92aWV3cy9CYWxhbmNlT3ZlcnZpZXdWaWV3LnRzeCIsICIuLi9zcmMvdmlld3MvQXBwU2V0dGluZ3MudHN4Il0sCiAgInNvdXJjZXNDb250ZW50IjogW251bGwsIG51bGwsIG51bGwsIG51bGwsICIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBVc2UgaW52YXJpYW50KCkgdG8gYXNzZXJ0IHN0YXRlIHdoaWNoIHlvdXIgcHJvZ3JhbSBhc3N1bWVzIHRvIGJlIHRydWUuXG4gKlxuICogUHJvdmlkZSBzcHJpbnRmLXN0eWxlIGZvcm1hdCAob25seSAlcyBpcyBzdXBwb3J0ZWQpIGFuZCBhcmd1bWVudHNcbiAqIHRvIHByb3ZpZGUgaW5mb3JtYXRpb24gYWJvdXQgd2hhdCBicm9rZSBhbmQgd2hhdCB5b3Ugd2VyZVxuICogZXhwZWN0aW5nLlxuICpcbiAqIFRoZSBpbnZhcmlhbnQgbWVzc2FnZSB3aWxsIGJlIHN0cmlwcGVkIGluIHByb2R1Y3Rpb24sIGJ1dCB0aGUgaW52YXJpYW50XG4gKiB3aWxsIHJlbWFpbiB0byBlbnN1cmUgbG9naWMgZG9lcyBub3QgZGlmZmVyIGluIHByb2R1Y3Rpb24uXG4gKi9cblxudmFyIGludmFyaWFudCA9IGZ1bmN0aW9uKGNvbmRpdGlvbiwgZm9ybWF0LCBhLCBiLCBjLCBkLCBlLCBmKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFyaWFudCByZXF1aXJlcyBhbiBlcnJvciBtZXNzYWdlIGFyZ3VtZW50Jyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKCFjb25kaXRpb24pIHtcbiAgICB2YXIgZXJyb3I7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBlcnJvciA9IG5ldyBFcnJvcihcbiAgICAgICAgJ01pbmlmaWVkIGV4Y2VwdGlvbiBvY2N1cnJlZDsgdXNlIHRoZSBub24tbWluaWZpZWQgZGV2IGVudmlyb25tZW50ICcgK1xuICAgICAgICAnZm9yIHRoZSBmdWxsIGVycm9yIG1lc3NhZ2UgYW5kIGFkZGl0aW9uYWwgaGVscGZ1bCB3YXJuaW5ncy4nXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgYXJncyA9IFthLCBiLCBjLCBkLCBlLCBmXTtcbiAgICAgIHZhciBhcmdJbmRleCA9IDA7XG4gICAgICBlcnJvciA9IG5ldyBFcnJvcihcbiAgICAgICAgZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJnc1thcmdJbmRleCsrXTsgfSlcbiAgICAgICk7XG4gICAgICBlcnJvci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgIH1cblxuICAgIGVycm9yLmZyYW1lc1RvUG9wID0gMTsgLy8gd2UgZG9uJ3QgY2FyZSBhYm91dCBpbnZhcmlhbnQncyBvd24gZnJhbWVcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBpbnZhcmlhbnQ7XG4iLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAiXG5cbmltcG9ydCBBcHAgZnJvbSAnLi4vc3JjL3ZpZXdzL0FwcCc7XG5cbmltcG9ydCBCYWxhbmNlT3ZlcnZpZXdWaWV3IGZyb20gJy4uL3NyYy92aWV3cy9CYWxhbmNlT3ZlcnZpZXdWaWV3JztcblxuaW1wb3J0IEFwcFNldHRpbmdzIGZyb20gJy4uL3NyYy92aWV3cy9BcHBTZXR0aW5ncyc7XG5cblxuZXhwb3J0ICogZnJvbSAnQHN0cmlwZS91aS1leHRlbnNpb24tc2RrL3ZlcnNpb24nO1xuZXhwb3J0IGNvbnN0IEJVSUxEX1RJTUUgPSAnMjAyMy0wMy0xOSAyMjo0NTowOC43MzE5NDQ1NzEgKzA1MzAgSVNUIG09KzAuMDExMjcxNzk5J1xuXG5leHBvcnQge1xuXHRcblx0QXBwLFxuXHRcblx0QmFsYW5jZU92ZXJ2aWV3Vmlldyxcblx0XG5cdEFwcFNldHRpbmdzLFxuXHRcbn07XG5leHBvcnQgZGVmYXVsdCB7XG4gIFwiaWRcIjogXCJjb20uZXhhbXBsZS5iYXNpYy1vYXV0aDItdGVzdFwiLFxuICBcInZlcnNpb25cIjogXCIwLjAuMlwiLFxuICBcIm5hbWVcIjogXCJCYXNpYy1PQXV0aDIgVGVzdFwiLFxuICBcImljb25cIjogXCJcIixcbiAgXCJwZXJtaXNzaW9uc1wiOiBbXG4gICAge1xuICAgICAgXCJwZXJtaXNzaW9uXCI6IFwic2VjcmV0X3dyaXRlXCIsXG4gICAgICBcInB1cnBvc2VcIjogXCJBbGxvd3Mgc3RvcmluZyBzZWNyZXRzIGJldHdlZW4gcGFnZSByZWxvYWRzXCJcbiAgICB9XG4gIF0sXG4gIFwiYXBwX2JhY2tlbmRcIjoge1xuICAgIFwid2ViaG9va3NcIjogbnVsbFxuICB9LFxuICBcInVpX2V4dGVuc2lvblwiOiB7XG4gICAgXCJ2aWV3c1wiOiBbXG4gICAgICB7XG4gICAgICAgIFwidmlld3BvcnRcIjogXCJzdHJpcGUuZGFzaGJvYXJkLmhvbWUub3ZlcnZpZXdcIixcbiAgICAgICAgXCJjb21wb25lbnRcIjogXCJBcHBcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJ2aWV3cG9ydFwiOiBcInN0cmlwZS5kYXNoYm9hcmQuYmFsYW5jZS5vdmVydmlld1wiLFxuICAgICAgICBcImNvbXBvbmVudFwiOiBcIkJhbGFuY2VPdmVydmlld1ZpZXdcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJ2aWV3cG9ydFwiOiBcInNldHRpbmdzXCIsXG4gICAgICAgIFwiY29tcG9uZW50XCI6IFwiQXBwU2V0dGluZ3NcIlxuICAgICAgfVxuICAgIF0sXG4gICAgXCJhY3Rpb25zXCI6IFtdLFxuICAgIFwiY29udGVudF9zZWN1cml0eV9wb2xpY3lcIjoge1xuICAgICAgXCJjb25uZWN0LXNyY1wiOiBudWxsLFxuICAgICAgXCJpbWFnZS1zcmNcIjogbnVsbCxcbiAgICAgIFwicHVycG9zZVwiOiBcIlwiXG4gICAgfVxuICB9LFxuICBcInBvc3RfaW5zdGFsbF9hY3Rpb25cIjogbnVsbCxcbiAgXCJjb25zdGFudHNcIjogbnVsbFxufVxuIiwgImltcG9ydCB7Q29udGV4dFZpZXcsIEJ1dHRvbiwgQm94LCBCYWRnZSwgQmFubmVyfSBmcm9tICdAc3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvdWknO1xuaW1wb3J0IHtzaG93VG9hc3R9IGZyb20gJ0BzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay91dGlscyc7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge2NyZWF0ZU9BdXRoU3RhdGV9IGZyb20gJ0BzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay9vYXV0aCc7XG5pbXBvcnQgdHlwZSB7RXh0ZW5zaW9uQ29udGV4dFZhbHVlfSBmcm9tICdAc3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvY29udGV4dCc7XG5pbXBvcnQgZmV0Y2hTdHJpcGVTaWduYXR1cmUgZnJvbSAnQHN0cmlwZS91aS1leHRlbnNpb24tc2RrL3NpZ25hdHVyZSc7XG5cblxuY29uc3Qge3VzZVN0YXRlLCB1c2VFZmZlY3R9ID0gUmVhY3Q7XG5cblxuY29uc3QgQkFDS0VORF9VUkwgPSAnaHR0cDovL2xvY2FsaG9zdDo1MDAwL3ZhbGlkYXRldXNlci8nO1xuXG5jb25zdCBnZXRSZWRpcmVjdFVSTCA9IChtb2RlOiAnbGl2ZScgfCAndGVzdCcpID0+IGBodHRwczovL2Rhc2hib2FyZC5zdHJpcGUuY29tLyR7bW9kZSA9PT0gJ3Rlc3QnID8gJ3Rlc3QvJyA6ICdsaXZlLyd9YXBwcy1vYXV0aC9jb20uZXhhbXBsZS5vYXV0aC1leGFtcGxlYDtcblxuY29uc3QgZ2V0QXV0aFVSTCA9IChzdGF0ZTogc3RyaW5nLCBjaGFsbGVuZ2U6IHN0cmluZywgbW9kZTogJ2xpdmUnIHwgJ3Rlc3QnKSA9PlxuICAgIGBodHRwOi8vbG9jYWxob3N0OjUwMDAvZ2V0LW9hdXRoLWxpbmsvP3Jlc3BvbnNlX3R5cGU9Y29kZSZjbGllbnQmcmVkaXJlY3Qmc3RhdGU9JHtzdGF0ZX0mY29kZV9jaGFsbGVuZ2U9JHtjaGFsbGVuZ2V9Jm1vZGU9JHttb2RlfSZjb2RlX2NoYWxsZW5nZV9tZXRob2Q9UzI1NmA7XG5cblxuY29uc3QgT0F1dGhBcHAgPSAoe2Vudmlyb25tZW50LCB1c2VyQ29udGV4dH06IEV4dGVuc2lvbkNvbnRleHRWYWx1ZSkgPT4ge1xuICAgIGNvbnN0IHttb2RlfSA9IGVudmlyb25tZW50O1xuICAgIGNvbnN0IFthdXRoVVJMLCBzZXRBdXRoVVJMXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbc3RyaXBlU3RhdHVzLCBzZXRTdHJpcGVTdGF0dXNdID0gdXNlU3RhdGU8c3RyaW5nPignZG93bicpO1xuICAgIGNvbnN0IFtoYXNTaWduZWRJbiwgc2V0SGFzU2lnbmVkSW5dID0gdXNlU3RhdGU8Ym9vbGVhbj4odHJ1ZSk7XG4gICAgY29uc3QgZ2V0U3RhdHVzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9oZWFsdGgtY2hlY2snLCB7XG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdzdHJpcGUtc2lnbmF0dXJlJzogYXdhaXQgZmV0Y2hTdHJpcGVTaWduYXR1cmUoKSxcbiAgICAgICAgICAgICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIHVzZXJfaWQ6IHVzZXJDb250ZXh0Py5pZCxcbiAgICAgICAgICAgICAgICBhY2NvdW50X2lkOiB1c2VyQ29udGV4dD8uYWNjb3VudC5pZFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSkudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICBzZXRIYXNTaWduZWRJbihkYXRhLmhhc1NpZ25lZEluKTtcbiAgICAgICAgICAgICAgICBzZXRTdHJpcGVTdGF0dXMoZGF0YS5yZXN1bHQgPT0gJ09LJyA/ICdVcCcgOiAnRG93bicpO1xuICAgICAgICAgICAgfSlcblxuICAgIH1cblxuXG4gICAgZ2V0U3RhdHVzKCk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgLy8gdmFsaWRhdGVVc2VyKCk7XG4gICAgICAgIGlmIChoYXNTaWduZWRJbikge1xuICAgICAgICAgICAgLy8gR2V0dGluZyBQYXlvdXRzIERldGFpbHNcbiAgICAgICAgfVxuXG4gICAgICAgIGNyZWF0ZU9BdXRoU3RhdGUoKS50aGVuKCh7c3RhdGUsIGNoYWxsZW5nZX0pID0+IHtcbiAgICAgICAgICAgIHNldEF1dGhVUkwoZ2V0QXV0aFVSTChzdGF0ZSwgY2hhbGxlbmdlLCBtb2RlKSk7XG4gICAgICAgIH0pO1xuICAgIH0sIFttb2RlXSk7XG4gICAgcmV0dXJuIChcblxuICAgICAgICA8Q29udGV4dFZpZXcgdGl0bGU9XCJQYXlvdXQgQXBwW1RFU1RdXCI+XG4gICAgICAgICAgICA8Qm94PlN0cmlwZSBpcyB7c3RyaXBlU3RhdHVzfTwvQm94PlxuICAgICAgICAgICAge2hhc1NpZ25lZEluICYmXG4gICAgICAgICAgICAgICAgPEJhZGdlIHR5cGU9XCJpbmZvXCI+WW91IGFyZSBBbHJlYWR5IEF1dGhvcml6ZWQgdG8gT3VyIEFwcCE8L0JhZGdlPlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgeyFoYXNTaWduZWRJbiAmJlxuICAgICAgICAgICAgICAgIDxCYW5uZXJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNyaXRpY2FsXCJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJZb3UgaGF2ZSBub3QgQXV0aG9yaXplZCFcIlxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIlBsZWFzZSBBdXRob3JpemUgYmVmb3JlIHlvdSBjb250aW51ZVwiXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbnM9e1xuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIGhyZWY9e2F1dGhVUkx9IHRhcmdldD1cIl9ibGFua1wiPkJlZ2luIEF1dGhvcml6ZTwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIH1cbiAgICAgICAgPC9Db250ZXh0Vmlldz5cblxuICAgIClcbiAgICAgICAgO1xuXG5cbn07XG5leHBvcnQgZGVmYXVsdCBPQXV0aEFwcDtcblxuXG5cblxuIiwgImltcG9ydCB7IEJveCwgQ29udGV4dFZpZXcsIExpc3RJdGVtLCBMaXN0LCBCdXR0b24sIEJhbm5lciwgRm9ybUZpZWxkR3JvdXAsIFRleHRGaWVsZCB9IGZyb20gXCJAc3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvdWlcIjtcbmltcG9ydCB0eXBlIHsgRXh0ZW5zaW9uQ29udGV4dFZhbHVlIH0gZnJvbSBcIkBzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay9jb250ZXh0XCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjcmVhdGVPQXV0aFN0YXRlIH0gZnJvbSBcIkBzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay9vYXV0aFwiO1xuaW1wb3J0IGZldGNoU3RyaXBlU2lnbmF0dXJlIGZyb20gXCJAc3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvc2lnbmF0dXJlXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuXG4vLyBEb3dubG9hZCBFbmRwb2ludFxuXG5jb25zdCBnZXRBdXRoVVJMID0gKHN0YXRlOiBzdHJpbmcsIGNoYWxsZW5nZTogc3RyaW5nLCBtb2RlOiAnbGl2ZScgfCAndGVzdCcpID0+XG4gICAgYGh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9nZXQtb2F1dGgtbGluay8/cmVzcG9uc2VfdHlwZT1jb2RlJmNsaWVudCZyZWRpcmVjdCZzdGF0ZT0ke3N0YXRlfSZjb2RlX2NoYWxsZW5nZT0ke2NoYWxsZW5nZX0mbW9kZT0ke21vZGV9JmNvZGVfY2hhbGxlbmdlX21ldGhvZD1TMjU2YDtcblxuY29uc3QgQmFsYW5jZU92ZXJ2aWV3VmlldyA9ICh7IHVzZXJDb250ZXh0LCBlbnZpcm9ubWVudCB9OiBFeHRlbnNpb25Db250ZXh0VmFsdWUpID0+IHtcbiAgICBjb25zdCBtYXhMZW5ndGhGb3JNb250aDogbnVtYmVyID0gMlxuICAgIGNvbnN0IG1heExlbmd0aEZvclllYXI6IG51bWJlciA9IDRcbiAgICBjb25zdCB7IG1vZGUgfSA9IGVudmlyb25tZW50O1xuICAgIGxldCB2aWV3RGF0YTogb2JqZWN0ID0ge31cbiAgICBjb25zdCBbZGF0YSwgc2V0TXlEYXRhXSA9IHVzZVN0YXRlKFtdKTtcbiAgICBjb25zdCBbYXV0aFVSTCwgc2V0QXV0aFVSTF0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW2hhc1NpZ25lZEluLCBzZXRIYXNTaWduZWRJbl0gPSB1c2VTdGF0ZSh0cnVlKVxuICAgIGNvbnN0IFttb250aFZhbHVlLCBzZXRNb250aFZhbHVlXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbeWVhclZhbHVlLCBzZXRZZWFyVmFsdWVdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtnb3RQYXlvdXREYXRhLCBzZXRQYXlvdXREYXRhXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKVxuICAgIGNvbnN0IGRvd25sb2FkRW5kcG9pbnQgPSBgaHR0cDovL2xvY2FsaG9zdDo1MDAwL2Rvd25sb2FkLXJlcG9ydC8/YWNjb3VudF9pZD0ke3VzZXJDb250ZXh0Py5hY2NvdW50LmlkfSZjdXJyZW50X21vbnRoPSR7bW9udGhWYWx1ZX0mY3VycmVudF95ZWFyPSR7eWVhclZhbHVlfWA7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjcmVhdGVPQXV0aFN0YXRlKCkudGhlbigoeyBzdGF0ZSwgY2hhbGxlbmdlIH0pID0+IHtcbiAgICAgICAgICAgIHNldEF1dGhVUkwoZ2V0QXV0aFVSTChzdGF0ZSwgY2hhbGxlbmdlLCBtb2RlKSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGdldFN0YXR1cyA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo1MDAwL2hlYWx0aC1jaGVjaycsIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgJ3N0cmlwZS1zaWduYXR1cmUnOiBhd2FpdCBmZXRjaFN0cmlwZVNpZ25hdHVyZSgpLFxuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgICAgIHVzZXJfaWQ6IHVzZXJDb250ZXh0Py5pZCxcbiAgICAgICAgICAgICAgICAgICAgYWNjb3VudF9pZDogdXNlckNvbnRleHQ/LmFjY291bnQuaWRcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSkudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiBzZXRIYXNTaWduZWRJbihkYXRhLmhhc1NpZ25lZEluKSlcblxuICAgICAgICB9XG5cbiAgICB9LCBbXSk7XG5cbiAgICAvLyBIYW5kbGluZyBEYXRlRm9ybSBEYXRhXG4gICAgY29uc3QgbW9udGhWYWx1ZUhhbmRsZXIgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgc2V0TW9udGhWYWx1ZShldmVudC50YXJnZXQudmFsdWUpO1xuICAgIH1cbiAgICBjb25zdCB5ZWFyVmFsdWVIYW5kbGVyID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIHNldFllYXJWYWx1ZShldmVudC50YXJnZXQudmFsdWUpO1xuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChldmVudCkgPT4ge1xuICAgICAgICAvLyBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjUwMDAvZ2V0X3BheW91dHMvJywge1xuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICBtb250aDogbW9udGhWYWx1ZSxcbiAgICAgICAgICAgICAgICB5ZWFyOiB5ZWFyVmFsdWUsXG4gICAgICAgICAgICAgICAgYWNjb3VudF9pZDogdXNlckNvbnRleHQ/LmFjY291bnQuaWRcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICAgIGlmKCFyZXNwb25zZS5vayl7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEhUVFAgZXJyb3IhIHN0YXR1czogJHtyZXNwb25zZS5zdGF0dXN9YCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuICAgICAgICBzZXRNeURhdGEoSlNPTi5wYXJzZShkYXRhLm91dHB1dF9kZl9qc29uKSk7XG4gICAgICAgIHNldEhhc1NpZ25lZEluKGRhdGEuaGFzU2lnbmVkSW4pO1xuICAgICAgICBzZXRQYXlvdXREYXRhKGRhdGEuaGFzRGF0YSk7XG4gICAgfVxuXG4gICAgbGV0IGNyZWF0ZWQ6IG5ldmVyW10gPSBbXVxuICAgIGxldCBkZXNjcjogbmV2ZXJbXSA9IFtdXG4gICAgbGV0IGFtb3VudDogbmV2ZXJbXSA9IFtdXG4gICAgbGV0IG5ldDogbmV2ZXJbXSA9IFtdXG4gICAgY29uc3QgdmFsdWVzID0gT2JqZWN0LnZhbHVlcyhkYXRhKVxuICAgIGZvciAobGV0IHZhbCBpbiB2YWx1ZXMpIHtcbiAgICAgICAgY3JlYXRlZC5wdXNoKHZhbHVlc1t2YWxdLkNyZWF0ZWQpXG4gICAgICAgIGRlc2NyLnB1c2godmFsdWVzW3ZhbF0uRGVzY3JpcHRpb24pXG4gICAgICAgIG5ldC5wdXNoKHZhbHVlc1t2YWxdLk5ldClcbiAgICB9XG4gICAgbGV0IG5ld19jcmVhdGVkID0gY3JlYXRlZC5tYXAoY3JlYXRlID0+IG5ldyBEYXRlKGNyZWF0ZSkudG9Mb2NhbGVTdHJpbmcoXCJlbi1VU1wiLCB7XG4gICAgICAgIHllYXI6IFwibnVtZXJpY1wiLFxuICAgICAgICBtb250aDogXCJsb25nXCIsXG4gICAgICAgIGRheTogXCJudW1lcmljXCIsXG4gICAgfSkpXG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxDb250ZXh0VmlldyB0aXRsZT1cIlVzZXIgRGV0YWlsc1wiPlxuICAgICAgICAgICAgPEJveCBjc3M9e3tcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAnbWVkaXVtJyxcbiAgICAgICAgICAgICAgICBjb2xvcjogJ3ByaW1hcnknLFxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJ2xhcmdlJyxcblxuICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgPEZvcm1GaWVsZEdyb3VwIGxlZ2VuZD1cIkVudGVyIE1vbnRoIGFuZCBZZWFyXCIgZGVzY3JpcHRpb249XCJFbnRlciB0aGUgWWVhciBhbmQgTW9udGggZnJvbSB3aGljaCB5b3Ugd2FudCB0byBmZXRjaCBkYXRhXCI+XG4gICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgdHlwZT1cIm51bWJlclwiIG9uQ2hhbmdlPXttb250aFZhbHVlSGFuZGxlcn0gbWF4TGVuZ3RoPXttYXhMZW5ndGhGb3JNb250aH0gbGFiZWw9XCJNb250aFwiIG5hbWU9XCJtb250aFwiIHBsYWNlaG9sZGVyPVwiTU1cIiBoaWRkZW5FbGVtZW50cz17WydsYWJlbCddfSAvPlxuICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIHR5cGU9XCJudW1iZXJcIiBvbkNoYW5nZT17eWVhclZhbHVlSGFuZGxlcn0gbWF4TGVuZ3RoPXttYXhMZW5ndGhGb3JZZWFyfSBsYWJlbD1cIlllYXJcIiBuYW1lPVwieWVhclwiIHBsYWNlaG9sZGVyPVwiWVlcIiBoaWRkZW5FbGVtZW50cz17WydsYWJlbCddfSAvPlxuICAgICAgICAgICAgICAgIDwvRm9ybUZpZWxkR3JvdXA+XG4gICAgICAgICAgICAgICAgPEJveCBjc3M9e3tcbiAgICAgICAgICAgICAgICAgICAgc3RhY2s6ICd6JyxcbiAgICAgICAgICAgICAgICAgICAgYWxpZ25YOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICAgICAgYWxpZ25ZOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAnbWVkaXVtJ1xuICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgb25QcmVzcz17aGFuZGxlU3VibWl0fT5HZXQgRGF0YTwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvQm94PlxuXG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIHtnb3RQYXlvdXREYXRhICYmIDxMaXN0PlxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bmV0WzBdfVxuICAgICAgICAgICAgICAgICAgICBpZD1cIjJcIlxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17PEJveD57bmV3X2NyZWF0ZWRbMF19PC9Cb3g+fVxuICAgICAgICAgICAgICAgICAgICBzZWNvbmRhcnlUaXRsZT17PEJveD57ZGVzY3JbMF19PC9Cb3g+fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPExpc3RJdGVtXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtuZXRbMV19XG4gICAgICAgICAgICAgICAgICAgIGlkPVwiMlwiXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXs8Qm94PntuZXdfY3JlYXRlZFsxXX08L0JveD59XG4gICAgICAgICAgICAgICAgICAgIHNlY29uZGFyeVRpdGxlPXs8Qm94PntkZXNjclsxXX08L0JveD59XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e25ldFsyXX1cbiAgICAgICAgICAgICAgICAgICAgaWQ9XCIyXCJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9ezxCb3g+e25ld19jcmVhdGVkWzJdfTwvQm94Pn1cbiAgICAgICAgICAgICAgICAgICAgc2Vjb25kYXJ5VGl0bGU9ezxCb3g+e2Rlc2NyWzJdfTwvQm94Pn1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bmV0WzNdfVxuICAgICAgICAgICAgICAgICAgICBpZD1cIjJcIlxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17PEJveD57bmV3X2NyZWF0ZWRbM119PC9Cb3g+fVxuICAgICAgICAgICAgICAgICAgICBzZWNvbmRhcnlUaXRsZT17PEJveD57ZGVzY3JbM119PC9Cb3g+fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPExpc3RJdGVtXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtuZXRbNF19XG4gICAgICAgICAgICAgICAgICAgIGlkPVwiMlwiXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXs8Qm94PntuZXdfY3JlYXRlZFs0XX08L0JveD59XG4gICAgICAgICAgICAgICAgICAgIHNlY29uZGFyeVRpdGxlPXs8Qm94PntkZXNjcls0XX08L0JveD59XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e25ldFs1XX1cbiAgICAgICAgICAgICAgICAgICAgaWQ9XCIyXCJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9ezxCb3g+e25ld19jcmVhdGVkWzVdfTwvQm94Pn1cbiAgICAgICAgICAgICAgICAgICAgc2Vjb25kYXJ5VGl0bGU9ezxCb3g+e2Rlc2NyWzVdfTwvQm94Pn1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bmV0WzZdfVxuICAgICAgICAgICAgICAgICAgICBpZD1cIjJcIlxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17PEJveD57bmV3X2NyZWF0ZWRbNl19PC9Cb3g+fVxuICAgICAgICAgICAgICAgICAgICBzZWNvbmRhcnlUaXRsZT17PEJveD57ZGVzY3JbNl19PC9Cb3g+fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPExpc3RJdGVtXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtuZXRbN119XG4gICAgICAgICAgICAgICAgICAgIGlkPVwiMlwiXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXs8Qm94PntuZXdfY3JlYXRlZFs3XX08L0JveD59XG4gICAgICAgICAgICAgICAgICAgIHNlY29uZGFyeVRpdGxlPXs8Qm94PntkZXNjcls3XX08L0JveD59XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e25ldFs4XX1cbiAgICAgICAgICAgICAgICAgICAgaWQ9XCIyXCJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9ezxCb3g+e25ld19jcmVhdGVkWzhdfTwvQm94Pn1cbiAgICAgICAgICAgICAgICAgICAgc2Vjb25kYXJ5VGl0bGU9ezxCb3g+e2Rlc2NyWzhdfTwvQm94Pn1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9MaXN0Pn1cblxuICAgICAgICAgICAgPEJveCBjc3M9e3sgc3RhY2s6ICd5JywgZ2FwOiAnbGFyZ2UnLCBtYXJnaW46ICdsYXJnZScgfX0+XG4gICAgICAgICAgICAgICAge2dvdFBheW91dERhdGEgJiZcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBocmVmPXtkb3dubG9hZEVuZHBvaW50fSB0eXBlPVwicHJpbWFyeVwiIGNzcz17eyB3aWR0aDogJ2ZpbGwnLCBhbGlnblg6ICdjZW50ZXInIH19XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIj5Eb3dubG9hZFxuICAgICAgICAgICAgICAgICAgICAgICAgQ1NWPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgeyFoYXNTaWduZWRJbiAmJlxuICAgICAgICAgICAgICAgICAgICA8QmFubmVyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY3JpdGljYWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJZb3UgaGF2ZSBub3QgU2lnbiBJblwiXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIlBsZWFzZSBzaWduIGluIGJlZm9yZSB5b3UgY29udGludWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9ucz17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIGhyZWY9e2F1dGhVUkx9IHRhcmdldD1cIl9ibGFua1wiPkJlZ2luIEF1dGhvcml6ZTwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgPC9Cb3g+XG5cbiAgICAgICAgPC9Db250ZXh0Vmlldz5cbiAgICApXG59O1xuXG5leHBvcnQgZGVmYXVsdCBCYWxhbmNlT3ZlcnZpZXdWaWV3OyIsICJpbXBvcnQge1xuICAgIEJveCxcbiAgICBCdXR0b24sXG4gICAgQmFubmVyLFxuICAgIElubGluZSxcbiAgICBTZXR0aW5nc1ZpZXcsXG59IGZyb20gXCJAc3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvdWlcIjtcbmltcG9ydCB0eXBlIHtFeHRlbnNpb25Db250ZXh0VmFsdWV9IGZyb20gXCJAc3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvY29udGV4dFwiO1xuaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XG5jb25zdCBBcHBTZXR0aW5ncyA9ICh7dXNlckNvbnRleHQsIGVudmlyb25tZW50fTogRXh0ZW5zaW9uQ29udGV4dFZhbHVlKSA9PiB7XG4gICAgY29uc3QgW2RlYXV0aCwgc2V0RGVhdXRoXSA9IHVzZVN0YXRlKCcnKVxuICAgIGNvbnN0IGNoZWNrX3VzZXIgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo1MDAwL2RlYXV0aG9yaXplX3VzZXIvJywge1xuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIHVzZXJfaWQ6IHVzZXJDb250ZXh0Py5pZCxcbiAgICAgICAgICAgICAgICBhY2NvdW50X2lkOiB1c2VyQ29udGV4dD8uYWNjb3VudC5pZFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSkudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IGNvbnNvbGUubG9nKGRhdGEpKVxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8U2V0dGluZ3NWaWV3IG9uU2F2ZT17KCkgPT4ge1xuICAgICAgICB9fT5cbiAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgICBjc3M9e3tcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogXCJjb250YWluZXJcIixcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIm1lZGl1bVwiLFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBcImxhcmdlXCIsXG4gICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgPEJhbm5lclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY3JpdGljYWxcIlxuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlJlbW92ZSBBdXRob3JpemF0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJZb3Ugd2lsbCBubyBsb25nZXIgYWJsZSB0byBhY2Nlc3MgeW91ciBkYXRhIHRocm91Z2ggQXBwXCJcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9ucz17XG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uUHJlc3M9e2NoZWNrX3VzZXJ9IHR5cGU9XCJkZXN0cnVjdGl2ZVwiPlJlbW92ZSBBdXRob3JpemF0aW9uPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvU2V0dGluZ3NWaWV3PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBcHBTZXR0aW5ncztcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLFVBQUEsVUFBQSxVQUFBO0FBRWEsY0FBQSxhQUFZLEdBQUEsUUFBQSw0QkFHdkIsV0FBVztBQUdBLGNBQUEsaUJBQWdCLEdBQUEsUUFBQSw0QkFHM0IsaUJBQWlCO1FBQ2pCLGVBQWUsQ0FBQyxTQUFTLFlBQVksU0FBUyxTQUFTO09BQ3hEO0FBR1ksY0FBQSxTQUFRLEdBQUEsUUFBQSw0QkFBZ0QsT0FBTztBQUcvRCxjQUFBLFVBQVMsR0FB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QUFBLFlBQUEsRUFBQSxZQUFBLE1BQUEsS0FBQSxXQUFBO0FBQUEsZUFBQSxLQUFBO01BQVEsRUFBQSxDQUFBO0FBQ1IsYUFBQSxlQUFBLFNBQUEsUUFBQSxFQUFBLFlBQUEsTUFBQSxLQUFBLFdBQUE7QUFBQSxlQUFBLEtBQUE7TUFBSSxFQUFBLENBQUE7QUFDSixhQUFBLGVBQUEsU0FBQSxhQUFBLEVBQUEsWUFBQSxNQUFBLEtBQUEsV0FBQTtBQUFBLGVBQUEsS0FBQTtNQUFTLEVBQUEsQ0FBQTtBQUNULGFBQUEsZUFBQSxTQUFBLFlBQUEsRUFBQSxZQUFBLE1BQUEsS0FBQSxXQUFBO0FBQUEsZUFBQSxLQUFBO01BQVEsRUFBQSxDQUFBO0FBS1IsYUFBQSxlQUFBLFNBQUEsV0FBQSxFQUFBLFlBQUEsTUFBQSxLQUFBLFdBQUE7QUFBQSxlQUFBLEtBQUE7TUFBTyxFQUFBLENBQUE7QUFFUCxhQUFBLGVBQUEsU0FBQSxPQUFBLEVBQUEsWUFBQSxNQUFBLEtBQUEsV0FBQTtBQUFBLGVBQUEsS0FBQTtNQUFHLEVBQUEsQ0FBQTtBQUNILGFBQUEsZUFBQSxTQUFBLFdBQUEsRUFBQSxZQUFBLE1BQUEsS0FBQSxXQUFBO0FBQUEsZUFBQSxLQUFBO01BQU8sRUFBQSxDQUFBO0FBQ1AsYUFBQSxlQUFBLFNBQUEsWUFBQSxFQUFBLFlBQUEsTUFBQSxLQUFBLFdBQUE7QUFBQSxlQUFBLEtBQUE7TUFBUSxFQUFBLENBQUE7QUFDUixhQUFBLGVBQUEsU0FBQSxhQUFBLEVBQUEsWUFBQSxNQUFBLEtBQUEsV0FBQTtBQUFBLGVBQUEsS0FBQTtNQUFTLEVBQUEsQ0FBQTtBQUNULGFBQUEsZUFBQSxTQUFBLFNBQUEsRUFBQSxZQUFBLE1BQUEsS0FBQSxXQUFBO0FBQUEsZUFBQSxLQUFBO01BQUssRUFBQSxDQUFBO0FBQ0wsYUFBQSxlQUFBLFNBQUEsYUFBQSxFQUFBLFlBQUEsTUFBQSxLQUFBLFdBQUE7QUFBQSxlQUFBLEtBQUE7TUFBUyxFQUFBLENBQUE7QUFDVCxhQUFBLGVBQUEsU0FBQSxhQUFBLEVBQUEsWUFBQSxN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QUssY0FBWSxTQUFTLEtBQUssQ0FBQyxFQUM5QixLQUFLLENBQUFDLFVBQVEsUUFBUSxJQUFJQSxLQUFJLENBQUM7QUFBQSxJQUN2QztBQUNBLFdBQ0ksNkNBQUM7QUFBQSxNQUFhLFFBQVEsTUFBTTtBQUFBLE1BQzVCO0FBQUEsTUFDSSx1REFBQztBQUFBLFFBQ0csS0FBSztBQUFBLFVBQ0QsWUFBWTtBQUFBLFVBQ1osY0FBYztBQUFBLFVBQ2QsU0FBUztBQUFBLFFBQ2I7QUFBQSxRQUNBLHVEQUFDO0FBQUEsVUFDRyxNQUFLO0FBQUEsVUFDTCxPQUFNO0FBQUEsVUFDTixhQUFZO0FBQUEsVUFDWixTQUNJLDZDQUFDO0FBQUEsWUFBTyxTQUFTO0FBQUEsWUFBWSxNQUFLO0FBQUEsWUFBYztBQUFBLFdBQW9CO0FBQUEsU0FFNUU7QUFBQSxPQUNKO0FBQUEsS0FDSjtBQUFBLEVBRVI7QUFFQSxNQUFPLHNCQUFROzs7QUhyQ2YsK0JBQWM7QUFDUCxNQUFNLGFBQWE7QUFXMUIsTUFBTyxtQkFBUTtBQUFBLElBQ2IsTUFBTTtBQUFBLElBQ04sV0FBVztBQUFBLElBQ1gsUUFBUTtBQUFBLElBQ1IsUUFBUTtBQUFBLElBQ1IsZUFBZTtBQUFBLE1BQ2I7QUFBQSxRQUNFLGNBQWM7QUFBQSxRQUNkLFdBQVc7QUFBQSxNQUNiO0FBQUEsSUFDRjtBQUFBLElBQ0EsZUFBZTtBQUFBLE1BQ2IsWUFBWTtBQUFBLElBQ2Q7QUFBQSxJQUNBLGdCQUFnQjtBQUFBLE1BQ2QsU0FBUztBQUFBLFFBQ1A7QUFBQSxVQUNFLFlBQVk7QUFBQSxVQUNaLGFBQWE7QUFBQSxRQUNmO0FBQUEsUUFDQTtBQUFBLFVBQ0UsWUFBWTtBQUFBLFVBQ1osYUFBYTtBQUFBLFFBQ2Y7QUFBQSxRQUNBO0FBQUEsVUFDRSxZQUFZO0FBQUEsVUFDWixhQUFhO0FBQUEsUUFDZjtBQUFBLE1BQ0Y7QUFBQSxNQUNBLFdBQVcsQ0FBQztBQUFBLE1BQ1osMkJBQTJCO0FBQUEsUUFDekIsZUFBZTtBQUFBLFFBQ2YsYUFBYTtBQUFBLFFBQ2IsV0FBVztBQUFBLE1BQ2I7QUFBQSxJQUNGO0FBQUEsSUFDQSx1QkFBdUI7QUFBQSxJQUN2QixhQUFhO0FBQUEsRUFDZjsiLAogICJuYW1lcyI6IFsiY3JlYXRlT0F1dGhTdGF0ZSIsICJmZXRjaFN0cmlwZVNpZ25hdHVyZSIsICJmZXRjaFN0cmlwZVNpZ25hdHVyZSIsICJkYXRhIiwgImltcG9ydF91aSIsICJpbXBvcnRfb2F1dGgiLCAiaW1wb3J0X3NpZ25hdHVyZSIsICJpbXBvcnRfanN4X3J1bnRpbWUiLCAiZ2V0QXV0aFVSTCIsICJkYXRhIiwgImZldGNoU3RyaXBlU2lnbmF0dXJlIiwgImltcG9ydF91aSIsICJpbXBvcnRfcmVhY3QiLCAiaW1wb3J0X2pzeF9ydW50aW1lIiwgImRhdGEiXQp9Cg==
