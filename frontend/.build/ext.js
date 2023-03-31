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
  var BACKEND_URL2 = "https://stripe-backend-k7b4-jayateerthdambal.vercel.app/";
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
        spinnerOpen && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_ui2.Spinner, {
          size: "large"
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
    const deauthorize_user = () => __async(void 0, null, function* () {
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
  var BUILD_TIME = "2023-03-31 20:36:45.03450521 +0530 IST m=+0.011746460";
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0BzdHJpcGUvc3JjL3VpL0BzYWlsL3VpL2luZGV4LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9Ac3RyaXBlL3NyYy91aS9Ac3RyaXBlLWludGVybmFsL3RhaWxvci1kYXNoYm9hcmQtY29tcG9uZW50cy9pbmRleC50cyIsICIuLi9ub2RlX21vZHVsZXMvQHN0cmlwZS9zcmMvdWkvbWFudWFsX2NvbXBvbmVudHMudHMiLCAiLi4vbm9kZV9tb2R1bGVzL0BzdHJpcGUvc3JjL3VpL2luZGV4LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9pbnZhcmlhbnQvYnJvd3Nlci5qcyIsICIuLi9ub2RlX21vZHVsZXMvQHN0cmlwZS9zcmMvdXRpbHMvX2VuZHBvaW50LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9Ac3RyaXBlL3NyYy91dGlscy9vYXV0aC50cyIsICIuLi9ub2RlX21vZHVsZXMvQHN0cmlwZS9zcmMvb2F1dGgudHMiLCAiLi4vbm9kZV9tb2R1bGVzL0BzdHJpcGUvc3JjL3V0aWxzL3NpZ25hdHVyZS50cyIsICIuLi9ub2RlX21vZHVsZXMvQHN0cmlwZS9zcmMvc2lnbmF0dXJlLnRzIiwgIi4uL25vZGVfbW9kdWxlcy9Ac3RyaXBlL3NyYy92ZXJzaW9uLnRzIiwgIm1hbmlmZXN0LmpzIiwgIi4uL3NyYy92aWV3cy9BcHAudHN4IiwgIi4uL3NyYy92aWV3cy9CYWxhbmNlT3ZlcnZpZXdWaWV3LnRzeCIsICIuLi9zcmMvdmlld3MvQXBwU2V0dGluZ3MudHN4Il0sCiAgInNvdXJjZXNDb250ZW50IjogW251bGwsIG51bGwsIG51bGwsIG51bGwsICIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBVc2UgaW52YXJpYW50KCkgdG8gYXNzZXJ0IHN0YXRlIHdoaWNoIHlvdXIgcHJvZ3JhbSBhc3N1bWVzIHRvIGJlIHRydWUuXG4gKlxuICogUHJvdmlkZSBzcHJpbnRmLXN0eWxlIGZvcm1hdCAob25seSAlcyBpcyBzdXBwb3J0ZWQpIGFuZCBhcmd1bWVudHNcbiAqIHRvIHByb3ZpZGUgaW5mb3JtYXRpb24gYWJvdXQgd2hhdCBicm9rZSBhbmQgd2hhdCB5b3Ugd2VyZVxuICogZXhwZWN0aW5nLlxuICpcbiAqIFRoZSBpbnZhcmlhbnQgbWVzc2FnZSB3aWxsIGJlIHN0cmlwcGVkIGluIHByb2R1Y3Rpb24sIGJ1dCB0aGUgaW52YXJpYW50XG4gKiB3aWxsIHJlbWFpbiB0byBlbnN1cmUgbG9naWMgZG9lcyBub3QgZGlmZmVyIGluIHByb2R1Y3Rpb24uXG4gKi9cblxudmFyIGludmFyaWFudCA9IGZ1bmN0aW9uKGNvbmRpdGlvbiwgZm9ybWF0LCBhLCBiLCBjLCBkLCBlLCBmKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFyaWFudCByZXF1aXJlcyBhbiBlcnJvciBtZXNzYWdlIGFyZ3VtZW50Jyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKCFjb25kaXRpb24pIHtcbiAgICB2YXIgZXJyb3I7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBlcnJvciA9IG5ldyBFcnJvcihcbiAgICAgICAgJ01pbmlmaWVkIGV4Y2VwdGlvbiBvY2N1cnJlZDsgdXNlIHRoZSBub24tbWluaWZpZWQgZGV2IGVudmlyb25tZW50ICcgK1xuICAgICAgICAnZm9yIHRoZSBmdWxsIGVycm9yIG1lc3NhZ2UgYW5kIGFkZGl0aW9uYWwgaGVscGZ1bCB3YXJuaW5ncy4nXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgYXJncyA9IFthLCBiLCBjLCBkLCBlLCBmXTtcbiAgICAgIHZhciBhcmdJbmRleCA9IDA7XG4gICAgICBlcnJvciA9IG5ldyBFcnJvcihcbiAgICAgICAgZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJnc1thcmdJbmRleCsrXTsgfSlcbiAgICAgICk7XG4gICAgICBlcnJvci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgIH1cblxuICAgIGVycm9yLmZyYW1lc1RvUG9wID0gMTsgLy8gd2UgZG9uJ3QgY2FyZSBhYm91dCBpbnZhcmlhbnQncyBvd24gZnJhbWVcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBpbnZhcmlhbnQ7XG4iLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAiXG5cbmltcG9ydCBBcHAgZnJvbSAnLi4vc3JjL3ZpZXdzL0FwcCc7XG5cbmltcG9ydCBCYWxhbmNlT3ZlcnZpZXdWaWV3IGZyb20gJy4uL3NyYy92aWV3cy9CYWxhbmNlT3ZlcnZpZXdWaWV3JztcblxuaW1wb3J0IEFwcFNldHRpbmdzIGZyb20gJy4uL3NyYy92aWV3cy9BcHBTZXR0aW5ncyc7XG5cblxuZXhwb3J0ICogZnJvbSAnQHN0cmlwZS91aS1leHRlbnNpb24tc2RrL3ZlcnNpb24nO1xuZXhwb3J0IGNvbnN0IEJVSUxEX1RJTUUgPSAnMjAyMy0wMy0zMSAyMDozNjo0NS4wMzQ1MDUyMSArMDUzMCBJU1QgbT0rMC4wMTE3NDY0NjAnXG5cbmV4cG9ydCB7XG5cdFxuXHRBcHAsXG5cdFxuXHRCYWxhbmNlT3ZlcnZpZXdWaWV3LFxuXHRcblx0QXBwU2V0dGluZ3MsXG5cdFxufTtcbmV4cG9ydCBkZWZhdWx0IHtcbiAgXCJpZFwiOiBcImNvbS5leGFtcGxlLnN0cmlwZS1hcHBfLXBheW91dFwiLFxuICBcInZlcnNpb25cIjogXCIwLjAuMlwiLFxuICBcIm5hbWVcIjogXCJTdHJpcGVSZXRyaWV2YWxBcHBcIixcbiAgXCJpY29uXCI6IFwiXCIsXG4gIFwicGVybWlzc2lvbnNcIjogW1xuICAgIHtcbiAgICAgIFwicGVybWlzc2lvblwiOiBcInNlY3JldF93cml0ZVwiLFxuICAgICAgXCJwdXJwb3NlXCI6IFwiQWxsb3dzIHN0b3Jpbmcgc2VjcmV0cyBiZXR3ZWVuIHBhZ2UgcmVsb2Fkc1wiXG4gICAgfVxuICBdLFxuICBcImFwcF9iYWNrZW5kXCI6IHtcbiAgICBcIndlYmhvb2tzXCI6IG51bGxcbiAgfSxcbiAgXCJ1aV9leHRlbnNpb25cIjoge1xuICAgIFwidmlld3NcIjogW1xuICAgICAge1xuICAgICAgICBcInZpZXdwb3J0XCI6IFwic3RyaXBlLmRhc2hib2FyZC5ob21lLm92ZXJ2aWV3XCIsXG4gICAgICAgIFwiY29tcG9uZW50XCI6IFwiQXBwXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwidmlld3BvcnRcIjogXCJzdHJpcGUuZGFzaGJvYXJkLmJhbGFuY2Uub3ZlcnZpZXdcIixcbiAgICAgICAgXCJjb21wb25lbnRcIjogXCJCYWxhbmNlT3ZlcnZpZXdWaWV3XCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwidmlld3BvcnRcIjogXCJzZXR0aW5nc1wiLFxuICAgICAgICBcImNvbXBvbmVudFwiOiBcIkFwcFNldHRpbmdzXCJcbiAgICAgIH1cbiAgICBdLFxuICAgIFwiY29udGVudF9zZWN1cml0eV9wb2xpY3lcIjoge1xuICAgICAgXCJjb25uZWN0LXNyY1wiOiBbXG4gICAgICAgIFwiaHR0cHM6Ly9zdHJpcGUtYmFja2VuZC1rN2I0LWpheWF0ZWVydGhkYW1iYWwudmVyY2VsLmFwcC9oZWFsdGgtY2hlY2svXCIsXG4gICAgICAgIFwiaHR0cHM6Ly9zdHJpcGUtYmFja2VuZC1rN2I0LWpheWF0ZWVydGhkYW1iYWwudmVyY2VsLmFwcC9nZXQtb2F1dGgtbGluay9cIixcbiAgICAgICAgXCJodHRwczovL3N0cmlwZS1iYWNrZW5kLWs3YjQtamF5YXRlZXJ0aGRhbWJhbC52ZXJjZWwuYXBwL2F1dGhvcml6ZS1vYXV0aC9cIixcbiAgICAgICAgXCJodHRwczovL3N0cmlwZS1iYWNrZW5kLWs3YjQtamF5YXRlZXJ0aGRhbWJhbC52ZXJjZWwuYXBwL2dldF9wYXlvdXRzL1wiLFxuICAgICAgICBcImh0dHBzOi8vc3RyaXBlLWJhY2tlbmQtazdiNC1qYXlhdGVlcnRoZGFtYmFsLnZlcmNlbC5hcHAvZG93bmxvYWQtcmVwb3J0L1wiLFxuICAgICAgICBcImh0dHBzOi8vc3RyaXBlLWJhY2tlbmQtazdiNC1qYXlhdGVlcnRoZGFtYmFsLnZlcmNlbC5hcHAvY2hlY2stdXNlci9cIixcbiAgICAgICAgXCJodHRwczovL3N0cmlwZS1iYWNrZW5kLWs3YjQtamF5YXRlZXJ0aGRhbWJhbC52ZXJjZWwuYXBwL2RlYXV0aG9yaXplX3VzZXIvXCJcbiAgICAgIF0sXG4gICAgICBcImltYWdlLXNyY1wiOiBudWxsLFxuICAgICAgXCJwdXJwb3NlXCI6IFwiU2VuZCBEYXRhIHRvIFZlcmNlbERlcGxveVwiXG4gICAgfVxuICB9XG59XG4iLCAiaW1wb3J0IHtDb250ZXh0VmlldywgQnV0dG9uLCBCb3gsIEJhZGdlLCBCYW5uZXJ9IGZyb20gJ0BzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay91aSc7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge2NyZWF0ZU9BdXRoU3RhdGV9IGZyb20gJ0BzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay9vYXV0aCc7XG5pbXBvcnQgdHlwZSB7RXh0ZW5zaW9uQ29udGV4dFZhbHVlfSBmcm9tICdAc3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvY29udGV4dCc7XG5pbXBvcnQgZmV0Y2hTdHJpcGVTaWduYXR1cmUgZnJvbSAnQHN0cmlwZS91aS1leHRlbnNpb24tc2RrL3NpZ25hdHVyZSc7XG5cblxuY29uc3Qge3VzZVN0YXRlLCB1c2VFZmZlY3R9ID0gUmVhY3Q7XG5cblxuY29uc3QgQkFDS0VORF9VUkwgPSAnaHR0cHM6Ly9zdHJpcGUtYmFja2VuZC1rN2I0LWpheWF0ZWVydGhkYW1iYWwudmVyY2VsLmFwcC8nO1xuLy8gY29uc3QgQkFDS0VORF9VUkwgPSAnaHR0cDovL2xvY2FsaG9zdDo1MDAwLydcblxuY29uc3QgZ2V0UmVkaXJlY3RVUkwgPSAobW9kZTogJ2xpdmUnIHwgJ3Rlc3QnKSA9PiBgaHR0cHM6Ly9kYXNoYm9hcmQuc3RyaXBlLmNvbS8ke21vZGUgPT09ICd0ZXN0JyA/ICd0ZXN0LycgOiAnbGl2ZS8nfWFwcHMtb2F1dGgvY29tLmV4YW1wbGUub2F1dGgtZXhhbXBsZWA7XG5cbmNvbnN0IGdldEF1dGhVUkwgPSAoc3RhdGU6IHN0cmluZywgY2hhbGxlbmdlOiBzdHJpbmcsIG1vZGU6ICdsaXZlJyB8ICd0ZXN0JykgPT5cbiAgICBCQUNLRU5EX1VSTCArIGAvZ2V0LW9hdXRoLWxpbmsvP3Jlc3BvbnNlX3R5cGU9Y29kZSZjbGllbnQmcmVkaXJlY3Qmc3RhdGU9JHtzdGF0ZX0mY29kZV9jaGFsbGVuZ2U9JHtjaGFsbGVuZ2V9Jm1vZGU9JHttb2RlfSZjb2RlX2NoYWxsZW5nZV9tZXRob2Q9UzI1NmA7XG5cblxuY29uc3QgT0F1dGhBcHAgPSAoe2Vudmlyb25tZW50LCB1c2VyQ29udGV4dH06IEV4dGVuc2lvbkNvbnRleHRWYWx1ZSkgPT4ge1xuICAgIGNvbnN0IHttb2RlfSA9IGVudmlyb25tZW50O1xuICAgIGNvbnN0IFthdXRoVVJMLCBzZXRBdXRoVVJMXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbc3RyaXBlU3RhdHVzLCBzZXRTdHJpcGVTdGF0dXNdID0gdXNlU3RhdGU8c3RyaW5nPignZG93bicpO1xuICAgIGNvbnN0IFtoYXNTaWduZWRJbiwgc2V0SGFzU2lnbmVkSW5dID0gdXNlU3RhdGU8Ym9vbGVhbj4odHJ1ZSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjcmVhdGVPQXV0aFN0YXRlKCkudGhlbigoe3N0YXRlLCBjaGFsbGVuZ2V9KSA9PiB7XG4gICAgICAgICAgICBzZXRBdXRoVVJMKGdldEF1dGhVUkwoc3RhdGUsIGNoYWxsZW5nZSwgbW9kZSkpO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgZ2V0U3RhdHVzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoKEJBQ0tFTkRfVVJMICsgJ2hlYWx0aC1jaGVjay8nLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICdzdHJpcGUtc2lnbmF0dXJlJzogYXdhaXQgZmV0Y2hTdHJpcGVTaWduYXR1cmUoKSxcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICAgICAgdXNlcl9pZDogdXNlckNvbnRleHQ/LmlkLFxuICAgICAgICAgICAgICAgICAgICBhY2NvdW50X2lkOiB1c2VyQ29udGV4dD8uYWNjb3VudC5pZCxcbiAgICAgICAgICAgICAgICAgICAgbW9kZTogbW9kZVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KS50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2V0SGFzU2lnbmVkSW4oZGF0YS5oYXNTaWduZWRJbik7XG4gICAgICAgICAgICAgICAgICAgIHNldFN0cmlwZVN0YXR1cyhkYXRhLnJlc3VsdCA9PSAnT0snID8gJ1VwJyA6ICdEb3duJyk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICBcbiAgICAgICAgfVxuICAgICAgICBnZXRTdGF0dXMoKTsgICAgICAgIFxuICAgICAgICBcbiAgICB9LCBbbW9kZV0pO1xuICAgIHJldHVybiAoXG5cbiAgICAgICAgPENvbnRleHRWaWV3IHRpdGxlPVwiUGF5b3V0VmlldyBBcHBcIj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAge2hhc1NpZ25lZEluICYmXG4gICAgICAgICAgICAgICAgPEJhZGdlIHR5cGU9XCJpbmZvXCI+WW91IGFyZSBBbHJlYWR5IEF1dGhvcml6ZWQgdG8gT3VyIEFwcCE8L0JhZGdlPlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgeyFoYXNTaWduZWRJbiAmJlxuICAgICAgICAgICAgICAgIDxCYW5uZXJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNyaXRpY2FsXCJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJZb3UgaGF2ZSBub3QgQXV0aG9yaXplZCFcIlxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIlBsZWFzZSBBdXRob3JpemUgYmVmb3JlIHlvdSBjb250aW51ZVwiXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbnM9e1xuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIGhyZWY9e2F1dGhVUkx9IHRhcmdldD1cIl9ibGFua1wiPkJlZ2luIEF1dGhvcml6ZTwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIH1cbiAgICAgICAgPC9Db250ZXh0Vmlldz5cblxuICAgIClcbiAgICAgICAgO1xuXG5cbn07XG5leHBvcnQgZGVmYXVsdCBPQXV0aEFwcDtcblxuXG5cblxuLypcbiAgXCJpZFwiOiBcImNvbS5leGFtcGxlLmJhc2ljLW9hdXRoMi10ZXN0XCIsXG4gIFwidmVyc2lvblwiOiBcIjAuMC4yXCIsXG4gIFwibmFtZVwiOiBcIkJhc2ljLU9BdXRoMiBUZXN0XCIsXG4qLyIsICJpbXBvcnQge1xuICAgIEJveCxcbiAgICBDb250ZXh0VmlldyxcbiAgICBMaXN0SXRlbSxcbiAgICBMaXN0LFxuICAgIEJ1dHRvbixcbiAgICBCYW5uZXIsXG4gICAgQmFkZ2UsXG4gICAgRm9ybUZpZWxkR3JvdXAsXG4gICAgVGV4dEZpZWxkLFxuICAgIFNwaW5uZXJcbn0gZnJvbSBcIkBzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay91aVwiO1xuaW1wb3J0IHR5cGUge0V4dGVuc2lvbkNvbnRleHRWYWx1ZX0gZnJvbSBcIkBzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay9jb250ZXh0XCI7XG5pbXBvcnQge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtjcmVhdGVPQXV0aFN0YXRlfSBmcm9tIFwiQHN0cmlwZS91aS1leHRlbnNpb24tc2RrL29hdXRoXCI7XG5pbXBvcnQgZmV0Y2hTdHJpcGVTaWduYXR1cmUgZnJvbSBcIkBzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay9zaWduYXR1cmVcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5cbmNvbnN0IEJBQ0tFTkRfVVJMID0gJ2h0dHBzOi8vc3RyaXBlLWJhY2tlbmQtazdiNC1qYXlhdGVlcnRoZGFtYmFsLnZlcmNlbC5hcHAvJztcbi8vIGNvbnN0IEJBQ0tFTkRfVVJMID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC8nXG5cbmNvbnN0IGdldEF1dGhVUkwgPSAoc3RhdGU6IHN0cmluZywgY2hhbGxlbmdlOiBzdHJpbmcsIG1vZGU6ICdsaXZlJyB8ICd0ZXN0JykgPT5cbiAgICBgJHtCQUNLRU5EX1VSTH1nZXQtb2F1dGgtbGluay8/cmVzcG9uc2VfdHlwZT1jb2RlJmNsaWVudCZyZWRpcmVjdCZzdGF0ZT0ke3N0YXRlfSZjb2RlX2NoYWxsZW5nZT0ke2NoYWxsZW5nZX0mbW9kZT0ke21vZGV9JmNvZGVfY2hhbGxlbmdlX21ldGhvZD1TMjU2YDtcblxuY29uc3QgQmFsYW5jZU92ZXJ2aWV3VmlldyA9ICh7dXNlckNvbnRleHQsIGVudmlyb25tZW50fTogRXh0ZW5zaW9uQ29udGV4dFZhbHVlKSA9PiB7XG4gICAgY29uc3QgbWF4TGVuZ3RoRm9yTW9udGg6IG51bWJlciA9IDJcbiAgICBjb25zdCBtYXhMZW5ndGhGb3JZZWFyOiBudW1iZXIgPSA0XG4gICAgY29uc3Qge21vZGV9ID0gZW52aXJvbm1lbnQ7XG4gICAgbGV0IHZpZXdEYXRhOiBvYmplY3QgPSB7fVxuICAgIGNvbnN0IFtkYXRhLCBzZXRNeURhdGFdID0gdXNlU3RhdGUoW10pO1xuICAgIGNvbnN0IFthdXRoVVJMLCBzZXRBdXRoVVJMXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbaGFzU2lnbmVkSW4sIHNldEhhc1NpZ25lZEluXSA9IHVzZVN0YXRlKHRydWUpXG4gICAgY29uc3QgW21vbnRoVmFsdWUsIHNldE1vbnRoVmFsdWVdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFt5ZWFyVmFsdWUsIHNldFllYXJWYWx1ZV0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW2dvdFBheW91dERhdGEsIHNldFBheW91dERhdGFdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpXG4gICAgY29uc3QgW2dvdFJlc3BvbnNlLCBzZXRnb3RSZXNwb25zZV0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSlcbiAgICBjb25zdCBbc3Bpbm5lck9wZW4sIHNldFNwaW5uZXJPcGVuXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKVxuICAgIGNvbnN0IGRvd25sb2FkRW5kcG9pbnQgPSBgJHtCQUNLRU5EX1VSTH1kb3dubG9hZC1yZXBvcnQvP2FjY291bnRfaWQ9JHt1c2VyQ29udGV4dD8uYWNjb3VudC5pZH0mY3VycmVudF9tb250aD0ke21vbnRoVmFsdWV9JmN1cnJlbnRfeWVhcj0ke3llYXJWYWx1ZX0mbW9kZT0ke21vZGV9YDtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNyZWF0ZU9BdXRoU3RhdGUoKS50aGVuKCh7c3RhdGUsIGNoYWxsZW5nZX0pID0+IHtcbiAgICAgICAgICAgIHNldEF1dGhVUkwoZ2V0QXV0aFVSTChzdGF0ZSwgY2hhbGxlbmdlLCBtb2RlKSk7XG4gICAgICAgIH0pO1xuXG5cbiAgICAgICAgY29uc3QgZ2V0U3RhdHVzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoKEJBQ0tFTkRfVVJMICsgJ2hlYWx0aC1jaGVjay8nLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICdzdHJpcGUtc2lnbmF0dXJlJzogYXdhaXQgZmV0Y2hTdHJpcGVTaWduYXR1cmUoKSxcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcblxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgICAgICB1c2VyX2lkOiB1c2VyQ29udGV4dD8uaWQsXG4gICAgICAgICAgICAgICAgICAgIGFjY291bnRfaWQ6IHVzZXJDb250ZXh0Py5hY2NvdW50LmlkLFxuICAgICAgICAgICAgICAgICAgICBtb2RlOiBtb2RlXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZXRIYXNTaWduZWRJbihkYXRhLmhhc1NpZ25lZEluKTtcblxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICBnZXRTdGF0dXMoKTtcbiAgICB9LCBbXSk7XG5cblxuICAgIC8vIEhhbmRsaW5nIERhdGVGb3JtIERhdGFcbiAgICBjb25zdCBtb250aFZhbHVlSGFuZGxlciA9IChldmVudCkgPT4ge1xuICAgICAgICBzZXRNb250aFZhbHVlKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgfVxuICAgIGNvbnN0IHllYXJWYWx1ZUhhbmRsZXIgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgc2V0WWVhclZhbHVlKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgICAgIHNldFNwaW5uZXJPcGVuKHRydWUpXG4gICAgICAgIC8vIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goQkFDS0VORF9VUkwgKyAnZ2V0X3BheW91dHMvJywge1xuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICBtb250aDogbW9udGhWYWx1ZSxcbiAgICAgICAgICAgICAgICB5ZWFyOiB5ZWFyVmFsdWUsXG4gICAgICAgICAgICAgICAgYWNjb3VudF9pZDogdXNlckNvbnRleHQ/LmFjY291bnQuaWQsXG4gICAgICAgICAgICAgICAgbW9kZTogbW9kZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcblxuICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEhUVFAgZXJyb3IhIHN0YXR1czogJHtyZXNwb25zZS5zdGF0dXN9YCk7XG4gICAgICAgIH0gZWxzZSBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxuICAgICAgICAgICAgc2V0UGF5b3V0RGF0YSh0cnVlKVxuICAgICAgICAgICAgc2V0U3Bpbm5lck9wZW4oZmFsc2UpXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG4gICAgICAgIHNldE15RGF0YShKU09OLnBhcnNlKGRhdGEub3V0cHV0X2RmX2pzb24pKTtcbiAgICAgICAgc2V0SGFzU2lnbmVkSW4oZGF0YS5oYXNTaWduZWRJbik7XG4gICAgICAgIHNldGdvdFJlc3BvbnNlKGRhdGEuaGFzRGF0YSlcblxuXG4gICAgfVxuXG4gICAgbGV0IGNyZWF0ZWQ6IG5ldmVyW10gPSBbXVxuICAgIGxldCBkZXNjcjogbmV2ZXJbXSA9IFtdXG4gICAgbGV0IGFtb3VudDogbmV2ZXJbXSA9IFtdXG4gICAgbGV0IG5ldDogbmV2ZXJbXSA9IFtdXG4gICAgY29uc3QgdmFsdWVzID0gT2JqZWN0LnZhbHVlcyhkYXRhKVxuICAgIGZvciAobGV0IHZhbCBpbiB2YWx1ZXMpIHtcbiAgICAgICAgY3JlYXRlZC5wdXNoKHZhbHVlc1t2YWxdLkNyZWF0ZWQpXG4gICAgICAgIGRlc2NyLnB1c2godmFsdWVzW3ZhbF0uRGVzY3JpcHRpb24pXG4gICAgICAgIG5ldC5wdXNoKHZhbHVlc1t2YWxdLk5ldClcbiAgICB9XG4gICAgbGV0IG5ld19jcmVhdGVkID0gY3JlYXRlZC5tYXAoY3JlYXRlID0+IG5ldyBEYXRlKGNyZWF0ZSkudG9Mb2NhbGVTdHJpbmcoXCJlbi1VU1wiLCB7XG4gICAgICAgIHllYXI6IFwibnVtZXJpY1wiLFxuICAgICAgICBtb250aDogXCJsb25nXCIsXG4gICAgICAgIGRheTogXCJudW1lcmljXCIsXG4gICAgfSkpXG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxDb250ZXh0VmlldyB0aXRsZT1cIlVzZXIgRGV0YWlsc1wiPlxuICAgICAgICAgICAge2hhc1NpZ25lZEluICYmXG4gICAgICAgICAgICAgICAgPEJveCBjc3M9e3tcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogJ21lZGl1bScsXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAncHJpbWFyeScsXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJ2xhcmdlJyxcblxuICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybUZpZWxkR3JvdXAgbGVnZW5kPVwiRW50ZXIgTW9udGggYW5kIFllYXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJFbnRlciB0aGUgWWVhciBhbmQgTW9udGggZnJvbSB3aGljaCB5b3Ugd2FudCB0byBmZXRjaCBkYXRhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIHR5cGU9XCJudW1iZXJcIiBvbkNoYW5nZT17bW9udGhWYWx1ZUhhbmRsZXJ9IG1heExlbmd0aD17bWF4TGVuZ3RoRm9yTW9udGh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiTW9udGhcIiBuYW1lPVwibW9udGhcIiBwbGFjZWhvbGRlcj1cIk1NXCIgaGlkZGVuRWxlbWVudHM9e1snbGFiZWwnXX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCB0eXBlPVwibnVtYmVyXCIgb25DaGFuZ2U9e3llYXJWYWx1ZUhhbmRsZXJ9IG1heExlbmd0aD17bWF4TGVuZ3RoRm9yWWVhcn0gbGFiZWw9XCJZZWFyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInllYXJcIiBwbGFjZWhvbGRlcj1cIllZWVlcIiBoaWRkZW5FbGVtZW50cz17WydsYWJlbCddfS8+XG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybUZpZWxkR3JvdXA+XG4gICAgICAgICAgICAgICAgICAgIDxCb3ggY3NzPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFjazogJ3onLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ25YOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduWTogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46ICdtZWRpdW0nXG4gICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIG9uUHJlc3M9e2hhbmRsZVN1Ym1pdH0+R2V0IERhdGE8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG5cbiAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHtzcGlubmVyT3BlbiAmJlxuICAgICAgICAgICAgICAgIDxTcGlubmVyIHNpemU9XCJsYXJnZVwiIC8+XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHshZ290UGF5b3V0RGF0YSAgJiYgaGFzU2lnbmVkSW4gJiZcbiAgICAgICAgICAgICAgICA8QmFkZ2UgdHlwZT1cImluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgUGxlYXNlIEVudGVyIE1vbnRoIGFuZCBZZWFyIFZhbHVlcywgdG8gdmlldyBEYXRhXG4gICAgICAgICAgICAgICAgPC9CYWRnZT5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHtnb3RQYXlvdXREYXRhICYmICFkYXRhLmxlbmd0aCAmJiBoYXNTaWduZWRJbiAmJlxuICAgICAgICAgICAgICAgIDxCYWRnZSB0eXBlPVwid2FybmluZ1wiPlxuICAgICAgICAgICAgICAgICAgICBUaGVyZSBpcyBubyBEYXRhIFByZXNlbnQgZm9yIHRoaXMgTW9udGggYW5kIFllYXJcbiAgICAgICAgICAgICAgICA8L0JhZGdlPlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAge2dvdFJlc3BvbnNlICYmIGhhc1NpZ25lZEluICYmIDxMaXN0PlxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bmV0WzBdfVxuICAgICAgICAgICAgICAgICAgICBpZD1cIjJcIlxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17PEJveD57bmV3X2NyZWF0ZWRbMF19PC9Cb3g+fVxuICAgICAgICAgICAgICAgICAgICBzZWNvbmRhcnlUaXRsZT17PEJveD57ZGVzY3JbMF19PC9Cb3g+fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPExpc3RJdGVtXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtuZXRbMV19XG4gICAgICAgICAgICAgICAgICAgIGlkPVwiMlwiXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXs8Qm94PntuZXdfY3JlYXRlZFsxXX08L0JveD59XG4gICAgICAgICAgICAgICAgICAgIHNlY29uZGFyeVRpdGxlPXs8Qm94PntkZXNjclsxXX08L0JveD59XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e25ldFsyXX1cbiAgICAgICAgICAgICAgICAgICAgaWQ9XCIyXCJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9ezxCb3g+e25ld19jcmVhdGVkWzJdfTwvQm94Pn1cbiAgICAgICAgICAgICAgICAgICAgc2Vjb25kYXJ5VGl0bGU9ezxCb3g+e2Rlc2NyWzJdfTwvQm94Pn1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bmV0WzNdfVxuICAgICAgICAgICAgICAgICAgICBpZD1cIjJcIlxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17PEJveD57bmV3X2NyZWF0ZWRbM119PC9Cb3g+fVxuICAgICAgICAgICAgICAgICAgICBzZWNvbmRhcnlUaXRsZT17PEJveD57ZGVzY3JbM119PC9Cb3g+fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPExpc3RJdGVtXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtuZXRbNF19XG4gICAgICAgICAgICAgICAgICAgIGlkPVwiMlwiXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXs8Qm94PntuZXdfY3JlYXRlZFs0XX08L0JveD59XG4gICAgICAgICAgICAgICAgICAgIHNlY29uZGFyeVRpdGxlPXs8Qm94PntkZXNjcls0XX08L0JveD59XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e25ldFs1XX1cbiAgICAgICAgICAgICAgICAgICAgaWQ9XCIyXCJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9ezxCb3g+e25ld19jcmVhdGVkWzVdfTwvQm94Pn1cbiAgICAgICAgICAgICAgICAgICAgc2Vjb25kYXJ5VGl0bGU9ezxCb3g+e2Rlc2NyWzVdfTwvQm94Pn1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bmV0WzZdfVxuICAgICAgICAgICAgICAgICAgICBpZD1cIjJcIlxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17PEJveD57bmV3X2NyZWF0ZWRbNl19PC9Cb3g+fVxuICAgICAgICAgICAgICAgICAgICBzZWNvbmRhcnlUaXRsZT17PEJveD57ZGVzY3JbNl19PC9Cb3g+fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPExpc3RJdGVtXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtuZXRbN119XG4gICAgICAgICAgICAgICAgICAgIGlkPVwiMlwiXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXs8Qm94PntuZXdfY3JlYXRlZFs3XX08L0JveD59XG4gICAgICAgICAgICAgICAgICAgIHNlY29uZGFyeVRpdGxlPXs8Qm94PntkZXNjcls3XX08L0JveD59XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e25ldFs4XX1cbiAgICAgICAgICAgICAgICAgICAgaWQ9XCIyXCJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9ezxCb3g+e25ld19jcmVhdGVkWzhdfTwvQm94Pn1cbiAgICAgICAgICAgICAgICAgICAgc2Vjb25kYXJ5VGl0bGU9ezxCb3g+e2Rlc2NyWzhdfTwvQm94Pn1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9MaXN0Pn1cblxuICAgICAgICAgICAgPEJveCBjc3M9e3tzdGFjazogJ3knLCBnYXA6ICdsYXJnZScsIG1hcmdpbjogJ2xhcmdlJ319PlxuICAgICAgICAgICAgICAgIHtnb3RSZXNwb25zZSAmJlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGhyZWY9e2Rvd25sb2FkRW5kcG9pbnR9IHR5cGU9XCJwcmltYXJ5XCIgY3NzPXt7d2lkdGg6ICdmaWxsJywgYWxpZ25YOiAnY2VudGVyJ319XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCI+RG93bmxvYWRcbiAgICAgICAgICAgICAgICAgICAgICAgIENTVjwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHshaGFzU2lnbmVkSW4gJiZcbiAgICAgICAgICAgICAgICAgICAgPEJhbm5lclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNyaXRpY2FsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiWW91IGhhdmUgbm90IFNpZ24gSW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJQbGVhc2Ugc2lnbiBpbiBiZWZvcmUgeW91IGNvbnRpbnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbnM9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBocmVmPXthdXRoVVJMfSB0YXJnZXQ9XCJfYmxhbmtcIj5CZWdpbiBBdXRob3JpemU8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIDwvQm94PlxuXG4gICAgICAgIDwvQ29udGV4dFZpZXc+XG4gICAgKVxufTtcblxuZXhwb3J0IGRlZmF1bHQgQmFsYW5jZU92ZXJ2aWV3VmlldzsiLCAiaW1wb3J0IHtcbiAgICBCb3gsXG4gICAgQnV0dG9uLFxuICAgIEJhbm5lcixcbiAgICBTZXR0aW5nc1ZpZXcsXG59IGZyb20gXCJAc3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvdWlcIjtcbmltcG9ydCB0eXBlIHsgRXh0ZW5zaW9uQ29udGV4dFZhbHVlIH0gZnJvbSBcIkBzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay9jb250ZXh0XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjcmVhdGVPQXV0aFN0YXRlIH0gZnJvbSAnQHN0cmlwZS91aS1leHRlbnNpb24tc2RrL29hdXRoJztcblxuY29uc3QgQkFDS0VORF9VUkwgPSAnaHR0cHM6Ly9zdHJpcGUtYmFja2VuZC1rN2I0LWpheWF0ZWVydGhkYW1iYWwudmVyY2VsLmFwcC8nO1xuLy8gY29uc3QgQkFDS0VORF9VUkwgPSAnaHR0cDovL2xvY2FsaG9zdDo1MDAwLydcblxuY29uc3QgZ2V0QXV0aFVSTCA9IChzdGF0ZTogc3RyaW5nLCBjaGFsbGVuZ2U6IHN0cmluZywgbW9kZTogJ2xpdmUnIHwgJ3Rlc3QnKSA9PlxuICAgIEJBQ0tFTkRfVVJMICsgYC9nZXQtb2F1dGgtbGluay8/cmVzcG9uc2VfdHlwZT1jb2RlJmNsaWVudCZyZWRpcmVjdCZzdGF0ZT0ke3N0YXRlfSZjb2RlX2NoYWxsZW5nZT0ke2NoYWxsZW5nZX0mbW9kZT0ke21vZGV9JmNvZGVfY2hhbGxlbmdlX21ldGhvZD1TMjU2YDtcblxuXG5jb25zdCBBcHBTZXR0aW5ncyA9ICh7IHVzZXJDb250ZXh0LCBlbnZpcm9ubWVudCB9OiBFeHRlbnNpb25Db250ZXh0VmFsdWUpID0+IHtcbiAgICBjb25zdCB7IG1vZGUgfSA9IGVudmlyb25tZW50O1xuICAgIGNvbnN0IFtkZWF1dGgsIHNldERlYXV0aF0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW3VzZXJFeGlzdCwgc2V0VXNlckV4aXN0XSA9IHVzZVN0YXRlPGJvb2xlYW4+KCk7XG4gICAgY29uc3QgW2F1dGhVUkwsIHNldEF1dGhVUkxdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IGRlYXV0aG9yaXplX3VzZXIgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaChCQUNLRU5EX1VSTCArICdkZWF1dGhvcml6ZV91c2VyLycsIHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICB1c2VyX2lkOiB1c2VyQ29udGV4dD8uaWQsXG4gICAgICAgICAgICAgICAgYWNjb3VudF9pZDogdXNlckNvbnRleHQ/LmFjY291bnQuaWQsXG4gICAgICAgICAgICAgICAgbW9kZTogbW9kZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSkudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IHNldFVzZXJFeGlzdChkYXRhLnVzZXJFeGlzdCkpXG4gICAgfVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY3JlYXRlT0F1dGhTdGF0ZSgpLnRoZW4oKHsgc3RhdGUsIGNoYWxsZW5nZSB9KSA9PiB7XG4gICAgICAgICAgICBzZXRBdXRoVVJMKGdldEF1dGhVUkwoc3RhdGUsIGNoYWxsZW5nZSwgbW9kZSkpO1xuICAgICAgICB9KTtcbiAgICAgICAgZmV0Y2goQkFDS0VORF9VUkwgKyAnY2hlY2stdXNlci8nLCB7XG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgYWNjb3VudF9pZDogdXNlckNvbnRleHQ/LmFjY291bnQuaWQsXG4gICAgICAgICAgICAgICAgbW9kZTogbW9kZVxuICAgICAgICAgICAgfSlcblxuICAgICAgICB9KS50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIHNldFVzZXJFeGlzdChkYXRhLnVzZXJFeGlzdCk7XG4gICAgICAgICAgICB9KVxuICAgIH0sIFttb2RlXSk7XG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxTZXR0aW5nc1ZpZXcgb25TYXZlPXsoKSA9PiB7XG4gICAgICAgIH19PlxuICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICAgIGNzcz17e1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBcImNvbnRhaW5lclwiLFxuICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwibWVkaXVtXCIsXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwibGFyZ2VcIixcbiAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICB7dXNlckV4aXN0ICYmXG4gICAgICAgICAgICAgICAgICAgIDxCYW5uZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjcml0aWNhbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlJlbW92ZSBBdXRob3JpemF0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiWW91IHdpbGwgbm8gbG9uZ2VyIGFibGUgdG8gYWNjZXNzIHlvdXIgZGF0YSB0aHJvdWdoIEFwcFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb25zPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uUHJlc3M9e2RlYXV0aG9yaXplX3VzZXJ9IHR5cGU9XCJkZXN0cnVjdGl2ZVwiPlJlbW92ZSBBdXRob3JpemF0aW9uPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgeyF1c2VyRXhpc3QgJiZcbiAgICAgICAgICAgICAgICAgICAgPEJhbm5lclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImRlZmF1bHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJCZWdpbiBBdXRob3JpemF0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiWW91IGFyZSBub3QgYXV0aG9yaXplZCB5b3VyIGFjY291bnQgd2l0aCBvdXIgc2VydmVycywgUGxlYXNlIGJlZ2luIHRoZSBBdXRob3JpemF0aW9uIFByb2Nlc3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9ucz17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBocmVmPXthdXRoVVJMfSB0eXBlPVwicHJpbWFyeVwiPkJlZ2luIEF1dGhvcml6YXRpb248L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9TZXR0aW5nc1ZpZXc+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFwcFNldHRpbmdzO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QSxLQUFBO01BQVMsRUFBQSxDQUFBO0FBQ1QsYUFBQSxlQUFBLFNBQUEsU0FBQSxFQUFBLFlBQUEsTUFBQSxLQUFBLFdBQUE7QUFBQSxlQUFBLEtBQUE7TUFBSyxFQUFBLENBQUE7QUFDTCxhQUFBLGVBQUEsU0FBQSxhQUFBLEVBQUEsWUFBQSxNQUFBLEtBQUEsV0FBQTtBQUFBLGVBQUEsS0FBQTtNQUFTLEVBQUEsQ0FBQTtBQUNULGFBQUEsZUFBQSxTQUFBLGFBQUEsRUFBQSxZQUFBLE1BQUEsS0FBQSxXQUFBO0FBQUEsZUFBQSxLQUFBO01BQVMsRUFBQSxDQUFBO0FBQ1QsYUFBQSxlQUFBLFNBQUEsZUFBQSxFQUFBLFlBQUEsTUFBQSxLQUFBLFdBQUE7QUFBQSxlQUFBLEtBQUE7TUFBVyxFQUFBLENBQUE7QUFDWCxhQUFBLGVBQUEsU0FBQSxhQUFBLEVBQUEsWUFBQSxNQUFBLEtBQUEsV0FBQTtBQUFBLGVBQUEsS0FBQTtNQUFTLEVBQUEsQ0FBQTtBQUNULGFBQUEsZUFBQSxTQUFBLG1CQUFBLEVBQUEsWUFBQSxNQUFBLEtBQUEsV0FBQTtBQUFBLGVBQUEsS0FBQTtNQUFlLEVBQUEsQ0FBQTtBQUNmLGFBQUEsZUFBQSxTQUFBLFlBQUEsRUFBQSxZQUFBLE1BQUEsS0FBQSxXQUFBO0FBQUEsZUFBQSxLQUFBO01BQVEsRUFBQSxDQUFBO0FBQ1IsYUFBQSxlQUFBLFNBQUEsUUFBQSxFQUFBLFlBQUEsTUFBQSxLQUFBLFdBQUE7QUFBQSxlQUFBLEtBQUE7TUFBSSxFQUFBLENBQUE7QUFJSixhQUFBLGVBQUEsU0FBQSxXQUFBLEVBQUEsWUFBQSxNQUFBLEtBQUEsV0FBQTtBQUFBLGVBQUEsS0FBQTtNQUFPLEVBQUEsQ0FBQTtBQUVULG1CQUFBLHVDQUFBLE9BQUE7QUFDQSxVQUFBLHNCQUFBO0FBQ0UsYUFBQSxlQUFBLFNBQUEsT0FBQSxFQUFBLFlBQUEsTUFBQSxLQUFBLFdBQUE7QUFBQSxlQUFBLG9CQUFBO01BQUcsRUFBQSxDQUFBO0FBQ0gsYUFBQSxlQUFBLFNBQUEsVUFBQSxFQUFBLFlBQUEsTUFBQSxLQUFBLFdBQUE7QUFBQSxlQUFBLG9CQUFBO01BQU0sRUFBQSxDQUFBO0FBQ04sYUFBQSxlQUFBLFNBQUEsWUFBQSxFQUFBLFlBQUEsTUFBQSxLQUFBLFdBQUE7QUFBQSxlQUFBLG9CQUFBO01BQVEsRUFBQSxDQUFBO0FBQ1IsYUFBQSxlQUFBLFNBQUEsYUFBQSxFQUFBLFlBQUEsTUFBQSxLQUFBLFdBQUE7QUFBQSxlQUFBLG9CQUFBO01BQVMsRUFBQSxDQUFBO0FBQ1QsYUFBQSxlQUFBLFNBQUEsUUFBQSxFQUFBLFlBQUEsTUFBQSxLQUFBLFdBQUE7QUFBQSxlQUFBLG9CQUFBO01BQUksRUFBQSxDQUFBO0FBQ0osYUFBQSxlQUFBLFNBQUEsVUFBQSxFQUFBLFlBQUEsTUFBQSxLQUFBLFdBQUE7QUFBQSxlQUFBLG9CQUFBO01BQU0sRUFBQSxDQUFBO0FBQ04sYUFBQSxlQUFBLFNBQUEsUUFBQSxFQUFBLFlBQUEsTUFBQSxLQUFBLFdBQUE7QUFBQSxlQUFBLG9CQUFBO01BQUksRUFBQSxDQUFBO0FBQ0osYUFBQSxlQUFBLFNBQUEsU0FBQSxFQUFBLFlBQUEsTUFBQSxLQUFBLFdBQUE7QUFBQSxlQUFBLG9CQUFBO01BQUssRUFBQSxDQUFBO0FBQ0wsYUFBQSxlQUFBLFNBQUEsVUFBQSxFQUFBLFlBQUEsTUFBQSxLQUFBLFdBQUE7QUFBQSxlQUFBLG9CQUFBO01BQU0sRUFBQSxDQUFBO0FBQ04sYUFBQSxlQUFBLFNBQUEsVUFBQSxFQUFBLFlBQUEsTUFBQSxLQUFBLFdBQUE7QUFBQSxlQUFBLG9CQUFBO01BQU0sRUFBQSxDQUFBO0FBQ04sYUFBQSxlQUFBLFNBQUEsWUFBQSxFQUFBLFlBQUEsTUFBQSxLQUFBLFdBQUE7QUFBQSxlQUFBLG9CQUFBO01BQVEsRUFBQSxDQUFBO0FBQ1IsYUFBQSxlQUFBLFNBQUEsYUFBQSxFQUFBLFlBQUEsTUFBQSxLQUFBLFdBQUE7QUFBQSxlQUFBLG9CQUFBO01BQVMsRUFBQSxDQUFBOzs7OztBQ3pEWDtBQUFBO0FBQUE7QUFvQkEsVUFBSSxZQUFZLFNBQVMsV0FBVyxR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V0FFakU7QUFBQTtBQUFBLE9BRVI7QUFBQSxLQUNKO0FBQUEsRUFFUjtBQUVBLE1BQU8sc0JBQVE7OztBSHBGZiwrQkFBYztBQUNQLE1BQU0sYUFBYTtBQVcxQixNQUFPLG1CQUFRO0FBQUEsSUFDYixNQUFNO0FBQUEsSUFDTixXQUFXO0FBQUEsSUFDWCxRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixlQUFlO0FBQUEsTUFDYjtBQUFBLFFBQ0UsY0FBYztBQUFBLFFBQ2QsV0FBVztBQUFBLE1BQ2I7QUFBQSxJQUNGO0FBQUEsSUFDQSxlQUFlO0FBQUEsTUFDYixZQUFZO0FBQUEsSUFDZDtBQUFBLElBQ0EsZ0JBQWdCO0FBQUEsTUFDZCxTQUFTO0FBQUEsUUFDUDtBQUFBLFVBQ0UsWUFBWTtBQUFBLFVBQ1osYUFBYTtBQUFBLFFBQ2Y7QUFBQSxRQUNBO0FBQUEsVUFDRSxZQUFZO0FBQUEsVUFDWixhQUFhO0FBQUEsUUFDZjtBQUFBLFFBQ0E7QUFBQSxVQUNFLFlBQVk7QUFBQSxVQUNaLGFBQWE7QUFBQSxRQUNmO0FBQUEsTUFDRjtBQUFBLE1BQ0EsMkJBQTJCO0FBQUEsUUFDekIsZUFBZTtBQUFBLFVBQ2I7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQSxhQUFhO0FBQUEsUUFDYixXQUFXO0FBQUEsTUFDYjtBQUFBLElBQ0Y7QUFBQSxFQUNGOyIsCiAgIm5hbWVzIjogWyJjcmVhdGVPQXV0aFN0YXRlIiwgImZldGNoU3RyaXBlU2lnbmF0dXJlIiwgImZldGNoU3RyaXBlU2lnbmF0dXJlIiwgImRhdGEiLCAiaW1wb3J0X3VpIiwgImltcG9ydF9vYXV0aCIsICJpbXBvcnRfc2lnbmF0dXJlIiwgImltcG9ydF9qc3hfcnVudGltZSIsICJCQUNLRU5EX1VSTCIsICJnZXRBdXRoVVJMIiwgImRhdGEiLCAiZmV0Y2hTdHJpcGVTaWduYXR1cmUiLCAiaW1wb3J0X3VpIiwgImltcG9ydF9yZWFjdCIsICJpbXBvcnRfb2F1dGgiLCAiaW1wb3J0X2pzeF9ydW50aW1lIiwgIkJBQ0tFTkRfVVJMIiwgImdldEF1dGhVUkwiLCAiZGF0YSJdCn0K
