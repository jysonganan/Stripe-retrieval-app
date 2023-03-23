"use strict";
var __StripeExtExports = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
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
  var BACKEND_URL = "https://stripe-backend-k7b4-jayateerthdambal.vercel.app/";
  var getAuthURL = (state, challenge, mode) => BACKEND_URL + `/get-oauth-link/?response_type=code&client&redirect&state=${state}&code_challenge=${challenge}&mode=${mode}&code_challenge_method=S256`;
  var OAuthApp = ({ environment, userContext }) => {
    const { mode } = environment;
    const [authURL, setAuthURL] = useState("");
    const [stripeStatus, setStripeStatus] = useState("down");
    const [hasSignedIn, setHasSignedIn] = useState(true);
    const getStatus = () => __async(void 0, null, function* () {
      const data = yield fetch(BACKEND_URL + "health-check/", {
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
  var BACKEND_URL2 = "https://stripe-backend-k7b4-jayateerthdambal.vercel.app";
  var getAuthURL2 = (state, challenge, mode) => BACKEND_URL2 + `/get-oauth-link/?response_type=code&client&redirect&state=${state}&code_challenge=${challenge}&mode=${mode}&code_challenge_method=S256`;
  var BalanceOverviewView = ({ userContext, environment }) => {
    const maxLengthForMonth = 2;
    const maxLengthForYear = 4;
    const { mode } = environment;
    const downloadEndpoint = BACKEND_URL2 + `/download-report/?account_id=${userContext == null ? void 0 : userContext.account.id}`;
    let viewData = {};
    const [data, setMyData] = (0, import_react.useState)([]);
    const [authURL, setAuthURL] = (0, import_react.useState)("");
    const [hasSignedIn, setHasSignedIn] = (0, import_react.useState)(true);
    const [dateValue, setDateValue] = (0, import_react.useState)({
      month: "",
      year: ""
    });
    (0, import_react.useEffect)(() => {
      (0, import_oauth2.createOAuthState)().then(({ state, challenge }) => {
        setAuthURL(getAuthURL2(state, challenge, mode));
      });
      const getStatus = () => __async(void 0, null, function* () {
        const data2 = yield fetch(BACKEND_URL2 + "/health-check", {
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
      fetch(BACKEND_URL2 + "/get_payouts/", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          "Content-Security-Policy": "default-src 'self'; connect-src  https://stripe-backend-k7b4.vercel.app dashboard.stripe.com"
        },
        body: JSON.stringify({ account_id: userContext == null ? void 0 : userContext.account.id })
      }).then((response) => response.json()).then((data2) => {
        setMyData(JSON.parse(data2.output_df_json));
        setHasSignedIn(data2.hasSignedIn);
      });
    }, []);
    const InputChangeHandler = (event) => {
      const { name, value } = event.target;
      setDateValue((prevState) => __spreadProps(__spreadValues({}, prevState), {
        [name]: value
      }));
    };
    const handleSubmit = (event) => __async(void 0, null, function* () {
      const formData = new FormData();
      event.preventDefault();
      const response = yield fetch(BACKEND_URL2 + "/get_payouts_by_date/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ dateValue })
      });
      const responseData = yield response.json();
      console.log(responseData);
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
                  onChange: InputChangeHandler,
                  maxLength: maxLengthForMonth,
                  label: "Month",
                  name: "month",
                  placeholder: "MM",
                  hiddenElements: ["label"]
                }),
                /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_ui2.TextField, {
                  type: "number",
                  onChange: InputChangeHandler,
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
                children: "Get Data"
              })
            })
          ]
        }),
        hasSignedIn && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_ui2.List, {
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
            hasSignedIn && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_ui2.Button, {
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
  var BUILD_TIME = "2023-03-23 23:31:14.155449057 +0530 IST m=+0.011721911";
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
      "content_security_policy": {
        "connect-src": [
          "https://stripe-backend-k7b4-jayateerthdambal.vercel.app/"
        ],
        "image-src": null,
        "purpose": "Send data to example service"
      }
    }
  };
  return __toCommonJS(manifest_exports);
})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0BzdHJpcGUvc3JjL3VpL0BzYWlsL3VpL2luZGV4LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9Ac3RyaXBlL3NyYy91aS9Ac3RyaXBlLWludGVybmFsL3RhaWxvci1kYXNoYm9hcmQtY29tcG9uZW50cy9pbmRleC50cyIsICIuLi9ub2RlX21vZHVsZXMvQHN0cmlwZS9zcmMvdWkvbWFudWFsX2NvbXBvbmVudHMudHMiLCAiLi4vbm9kZV9tb2R1bGVzL0BzdHJpcGUvc3JjL3VpL2luZGV4LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9pbnZhcmlhbnQvYnJvd3Nlci5qcyIsICIuLi9ub2RlX21vZHVsZXMvQHN0cmlwZS9zcmMvdXRpbHMvX2VuZHBvaW50LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9Ac3RyaXBlL3NyYy91dGlscy9vYXV0aC50cyIsICIuLi9ub2RlX21vZHVsZXMvQHN0cmlwZS9zcmMvb2F1dGgudHMiLCAiLi4vbm9kZV9tb2R1bGVzL0BzdHJpcGUvc3JjL3V0aWxzL3NpZ25hdHVyZS50cyIsICIuLi9ub2RlX21vZHVsZXMvQHN0cmlwZS9zcmMvc2lnbmF0dXJlLnRzIiwgIi4uL25vZGVfbW9kdWxlcy9Ac3RyaXBlL3NyYy92ZXJzaW9uLnRzIiwgIm1hbmlmZXN0LmpzIiwgIi4uL3NyYy92aWV3cy9BcHAudHN4IiwgIi4uL3NyYy92aWV3cy9CYWxhbmNlT3ZlcnZpZXdWaWV3LnRzeCIsICIuLi9zcmMvdmlld3MvQXBwU2V0dGluZ3MudHN4Il0sCiAgInNvdXJjZXNDb250ZW50IjogW251bGwsIG51bGwsIG51bGwsIG51bGwsICIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBVc2UgaW52YXJpYW50KCkgdG8gYXNzZXJ0IHN0YXRlIHdoaWNoIHlvdXIgcHJvZ3JhbSBhc3N1bWVzIHRvIGJlIHRydWUuXG4gKlxuICogUHJvdmlkZSBzcHJpbnRmLXN0eWxlIGZvcm1hdCAob25seSAlcyBpcyBzdXBwb3J0ZWQpIGFuZCBhcmd1bWVudHNcbiAqIHRvIHByb3ZpZGUgaW5mb3JtYXRpb24gYWJvdXQgd2hhdCBicm9rZSBhbmQgd2hhdCB5b3Ugd2VyZVxuICogZXhwZWN0aW5nLlxuICpcbiAqIFRoZSBpbnZhcmlhbnQgbWVzc2FnZSB3aWxsIGJlIHN0cmlwcGVkIGluIHByb2R1Y3Rpb24sIGJ1dCB0aGUgaW52YXJpYW50XG4gKiB3aWxsIHJlbWFpbiB0byBlbnN1cmUgbG9naWMgZG9lcyBub3QgZGlmZmVyIGluIHByb2R1Y3Rpb24uXG4gKi9cblxudmFyIGludmFyaWFudCA9IGZ1bmN0aW9uKGNvbmRpdGlvbiwgZm9ybWF0LCBhLCBiLCBjLCBkLCBlLCBmKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFyaWFudCByZXF1aXJlcyBhbiBlcnJvciBtZXNzYWdlIGFyZ3VtZW50Jyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKCFjb25kaXRpb24pIHtcbiAgICB2YXIgZXJyb3I7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBlcnJvciA9IG5ldyBFcnJvcihcbiAgICAgICAgJ01pbmlmaWVkIGV4Y2VwdGlvbiBvY2N1cnJlZDsgdXNlIHRoZSBub24tbWluaWZpZWQgZGV2IGVudmlyb25tZW50ICcgK1xuICAgICAgICAnZm9yIHRoZSBmdWxsIGVycm9yIG1lc3NhZ2UgYW5kIGFkZGl0aW9uYWwgaGVscGZ1bCB3YXJuaW5ncy4nXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgYXJncyA9IFthLCBiLCBjLCBkLCBlLCBmXTtcbiAgICAgIHZhciBhcmdJbmRleCA9IDA7XG4gICAgICBlcnJvciA9IG5ldyBFcnJvcihcbiAgICAgICAgZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJnc1thcmdJbmRleCsrXTsgfSlcbiAgICAgICk7XG4gICAgICBlcnJvci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgIH1cblxuICAgIGVycm9yLmZyYW1lc1RvUG9wID0gMTsgLy8gd2UgZG9uJ3QgY2FyZSBhYm91dCBpbnZhcmlhbnQncyBvd24gZnJhbWVcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBpbnZhcmlhbnQ7XG4iLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAiXG5cbmltcG9ydCBBcHAgZnJvbSAnLi4vc3JjL3ZpZXdzL0FwcCc7XG5cbmltcG9ydCBCYWxhbmNlT3ZlcnZpZXdWaWV3IGZyb20gJy4uL3NyYy92aWV3cy9CYWxhbmNlT3ZlcnZpZXdWaWV3JztcblxuaW1wb3J0IEFwcFNldHRpbmdzIGZyb20gJy4uL3NyYy92aWV3cy9BcHBTZXR0aW5ncyc7XG5cblxuZXhwb3J0ICogZnJvbSAnQHN0cmlwZS91aS1leHRlbnNpb24tc2RrL3ZlcnNpb24nO1xuZXhwb3J0IGNvbnN0IEJVSUxEX1RJTUUgPSAnMjAyMy0wMy0yMyAyMzozMToxNC4xNTU0NDkwNTcgKzA1MzAgSVNUIG09KzAuMDExNzIxOTExJ1xuXG5leHBvcnQge1xuXHRcblx0QXBwLFxuXHRcblx0QmFsYW5jZU92ZXJ2aWV3Vmlldyxcblx0XG5cdEFwcFNldHRpbmdzLFxuXHRcbn07XG5leHBvcnQgZGVmYXVsdCB7XG4gIFwiaWRcIjogXCJjb20uZXhhbXBsZS5iYXNpYy1vYXV0aDItdGVzdFwiLFxuICBcInZlcnNpb25cIjogXCIwLjAuMlwiLFxuICBcIm5hbWVcIjogXCJCYXNpYy1PQXV0aDIgVGVzdFwiLFxuICBcImljb25cIjogXCJcIixcbiAgXCJwZXJtaXNzaW9uc1wiOiBbXG4gICAge1xuICAgICAgXCJwZXJtaXNzaW9uXCI6IFwic2VjcmV0X3dyaXRlXCIsXG4gICAgICBcInB1cnBvc2VcIjogXCJBbGxvd3Mgc3RvcmluZyBzZWNyZXRzIGJldHdlZW4gcGFnZSByZWxvYWRzXCJcbiAgICB9XG4gIF0sXG4gIFwiYXBwX2JhY2tlbmRcIjoge1xuICAgIFwid2ViaG9va3NcIjogbnVsbFxuICB9LFxuICBcInVpX2V4dGVuc2lvblwiOiB7XG4gICAgXCJ2aWV3c1wiOiBbXG4gICAgICB7XG4gICAgICAgIFwidmlld3BvcnRcIjogXCJzdHJpcGUuZGFzaGJvYXJkLmhvbWUub3ZlcnZpZXdcIixcbiAgICAgICAgXCJjb21wb25lbnRcIjogXCJBcHBcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJ2aWV3cG9ydFwiOiBcInN0cmlwZS5kYXNoYm9hcmQuYmFsYW5jZS5vdmVydmlld1wiLFxuICAgICAgICBcImNvbXBvbmVudFwiOiBcIkJhbGFuY2VPdmVydmlld1ZpZXdcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJ2aWV3cG9ydFwiOiBcInNldHRpbmdzXCIsXG4gICAgICAgIFwiY29tcG9uZW50XCI6IFwiQXBwU2V0dGluZ3NcIlxuICAgICAgfVxuICAgIF0sXG4gICAgXCJjb250ZW50X3NlY3VyaXR5X3BvbGljeVwiOiB7XG4gICAgICBcImNvbm5lY3Qtc3JjXCI6IFtcbiAgICAgICAgXCJodHRwczovL3N0cmlwZS1iYWNrZW5kLWs3YjQtamF5YXRlZXJ0aGRhbWJhbC52ZXJjZWwuYXBwL1wiXG4gICAgICBdLFxuICAgICAgXCJpbWFnZS1zcmNcIjogbnVsbCxcbiAgICAgIFwicHVycG9zZVwiOiBcIlNlbmQgZGF0YSB0byBleGFtcGxlIHNlcnZpY2VcIlxuICAgIH1cbiAgfVxufVxuIiwgImltcG9ydCB7Q29udGV4dFZpZXcsIEJ1dHRvbiwgQm94LCBCYWRnZSwgQmFubmVyfSBmcm9tICdAc3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvdWknO1xuaW1wb3J0IHtzaG93VG9hc3R9IGZyb20gJ0BzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay91dGlscyc7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge2NyZWF0ZU9BdXRoU3RhdGV9IGZyb20gJ0BzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay9vYXV0aCc7XG5pbXBvcnQgdHlwZSB7RXh0ZW5zaW9uQ29udGV4dFZhbHVlfSBmcm9tICdAc3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvY29udGV4dCc7XG5pbXBvcnQgZmV0Y2hTdHJpcGVTaWduYXR1cmUgZnJvbSAnQHN0cmlwZS91aS1leHRlbnNpb24tc2RrL3NpZ25hdHVyZSc7XG5cblxuY29uc3Qge3VzZVN0YXRlLCB1c2VFZmZlY3R9ID0gUmVhY3Q7XG5cblxuY29uc3QgQkFDS0VORF9VUkwgPSAnaHR0cHM6Ly9zdHJpcGUtYmFja2VuZC1rN2I0LWpheWF0ZWVydGhkYW1iYWwudmVyY2VsLmFwcC8nO1xuXG5jb25zdCBnZXRSZWRpcmVjdFVSTCA9IChtb2RlOiAnbGl2ZScgfCAndGVzdCcpID0+IGBodHRwczovL2Rhc2hib2FyZC5zdHJpcGUuY29tLyR7bW9kZSA9PT0gJ3Rlc3QnID8gJ3Rlc3QvJyA6ICdsaXZlLyd9YXBwcy1vYXV0aC9jb20uZXhhbXBsZS5vYXV0aC1leGFtcGxlYDtcblxuY29uc3QgZ2V0QXV0aFVSTCA9IChzdGF0ZTogc3RyaW5nLCBjaGFsbGVuZ2U6IHN0cmluZywgbW9kZTogJ2xpdmUnIHwgJ3Rlc3QnKSA9PlxuICAgIEJBQ0tFTkRfVVJMICsgYC9nZXQtb2F1dGgtbGluay8/cmVzcG9uc2VfdHlwZT1jb2RlJmNsaWVudCZyZWRpcmVjdCZzdGF0ZT0ke3N0YXRlfSZjb2RlX2NoYWxsZW5nZT0ke2NoYWxsZW5nZX0mbW9kZT0ke21vZGV9JmNvZGVfY2hhbGxlbmdlX21ldGhvZD1TMjU2YDtcblxuXG5jb25zdCBPQXV0aEFwcCA9ICh7ZW52aXJvbm1lbnQsIHVzZXJDb250ZXh0fTogRXh0ZW5zaW9uQ29udGV4dFZhbHVlKSA9PiB7XG4gICAgY29uc3Qge21vZGV9ID0gZW52aXJvbm1lbnQ7XG4gICAgY29uc3QgW2F1dGhVUkwsIHNldEF1dGhVUkxdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtzdHJpcGVTdGF0dXMsIHNldFN0cmlwZVN0YXR1c10gPSB1c2VTdGF0ZTxzdHJpbmc+KCdkb3duJyk7XG4gICAgY29uc3QgW2hhc1NpZ25lZEluLCBzZXRIYXNTaWduZWRJbl0gPSB1c2VTdGF0ZTxib29sZWFuPih0cnVlKTtcbiAgICBjb25zdCBnZXRTdGF0dXMgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaChCQUNLRU5EX1VSTCArICdoZWFsdGgtY2hlY2svJywge1xuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnc3RyaXBlLXNpZ25hdHVyZSc6IGF3YWl0IGZldGNoU3RyaXBlU2lnbmF0dXJlKCksXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcblxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICB1c2VyX2lkOiB1c2VyQ29udGV4dD8uaWQsXG4gICAgICAgICAgICAgICAgYWNjb3VudF9pZDogdXNlckNvbnRleHQ/LmFjY291bnQuaWRcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0SGFzU2lnbmVkSW4oZGF0YS5oYXNTaWduZWRJbik7XG4gICAgICAgICAgICAgICAgc2V0U3RyaXBlU3RhdHVzKGRhdGEucmVzdWx0ID09ICdPSycgPyAnVXAnIDogJ0Rvd24nKTtcbiAgICAgICAgICAgIH0pXG5cbiAgICB9XG5cblxuICAgIGdldFN0YXR1cygpO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIC8vIHZhbGlkYXRlVXNlcigpO1xuICAgICAgICBpZiAoaGFzU2lnbmVkSW4pIHtcbiAgICAgICAgICAgIC8vIEdldHRpbmcgUGF5b3V0cyBEZXRhaWxzXG4gICAgICAgIH1cblxuICAgICAgICBjcmVhdGVPQXV0aFN0YXRlKCkudGhlbigoe3N0YXRlLCBjaGFsbGVuZ2V9KSA9PiB7XG4gICAgICAgICAgICBzZXRBdXRoVVJMKGdldEF1dGhVUkwoc3RhdGUsIGNoYWxsZW5nZSwgbW9kZSkpO1xuICAgICAgICB9KTtcbiAgICB9LCBbbW9kZV0pO1xuICAgIHJldHVybiAoXG5cbiAgICAgICAgPENvbnRleHRWaWV3IHRpdGxlPVwiUGF5b3V0IEFwcFtURVNUXVwiPlxuICAgICAgICAgICAgPEJveD5TdHJpcGUgaXMge3N0cmlwZVN0YXR1c308L0JveD5cbiAgICAgICAgICAgIHtoYXNTaWduZWRJbiAmJlxuICAgICAgICAgICAgICAgIDxCYWRnZSB0eXBlPVwiaW5mb1wiPllvdSBhcmUgQWxyZWFkeSBBdXRob3JpemVkIHRvIE91ciBBcHAhPC9CYWRnZT5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHshaGFzU2lnbmVkSW4gJiZcbiAgICAgICAgICAgICAgICA8QmFubmVyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjcml0aWNhbFwiXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiWW91IGhhdmUgbm90IEF1dGhvcml6ZWQhXCJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJQbGVhc2UgQXV0aG9yaXplIGJlZm9yZSB5b3UgY29udGludWVcIlxuICAgICAgICAgICAgICAgICAgICBhY3Rpb25zPXtcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBocmVmPXthdXRoVVJMfSB0YXJnZXQ9XCJfYmxhbmtcIj5CZWdpbiBBdXRob3JpemU8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB9XG4gICAgICAgIDwvQ29udGV4dFZpZXc+XG5cbiAgICApXG4gICAgICAgIDtcblxuXG59O1xuZXhwb3J0IGRlZmF1bHQgT0F1dGhBcHA7XG5cblxuXG5cbiIsICJpbXBvcnQgeyBCb3gsIENvbnRleHRWaWV3LCBMaXN0SXRlbSwgTGlzdCwgQnV0dG9uLCBCYW5uZXIsIEZvcm1GaWVsZEdyb3VwLCBUZXh0RmllbGQgfSBmcm9tIFwiQHN0cmlwZS91aS1leHRlbnNpb24tc2RrL3VpXCI7XG5pbXBvcnQgdHlwZSB7IEV4dGVuc2lvbkNvbnRleHRWYWx1ZSB9IGZyb20gXCJAc3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvY29udGV4dFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY3JlYXRlT0F1dGhTdGF0ZSB9IGZyb20gXCJAc3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvb2F1dGhcIjtcbmltcG9ydCBmZXRjaFN0cmlwZVNpZ25hdHVyZSBmcm9tIFwiQHN0cmlwZS91aS1leHRlbnNpb24tc2RrL3NpZ25hdHVyZVwiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cblxuLy8gQkFDS0VORCBVUkxcbmNvbnN0IEJBQ0tFTkRfVVJMID0gJ2h0dHBzOi8vc3RyaXBlLWJhY2tlbmQtazdiNC1qYXlhdGVlcnRoZGFtYmFsLnZlcmNlbC5hcHAnO1xuXG5cblxuXG5jb25zdCBnZXRBdXRoVVJMID0gKHN0YXRlOiBzdHJpbmcsIGNoYWxsZW5nZTogc3RyaW5nLCBtb2RlOiAnbGl2ZScgfCAndGVzdCcpID0+XG4gICAgQkFDS0VORF9VUkwgKyBgL2dldC1vYXV0aC1saW5rLz9yZXNwb25zZV90eXBlPWNvZGUmY2xpZW50JnJlZGlyZWN0JnN0YXRlPSR7c3RhdGV9JmNvZGVfY2hhbGxlbmdlPSR7Y2hhbGxlbmdlfSZtb2RlPSR7bW9kZX0mY29kZV9jaGFsbGVuZ2VfbWV0aG9kPVMyNTZgO1xuXG5jb25zdCBCYWxhbmNlT3ZlcnZpZXdWaWV3ID0gKHsgdXNlckNvbnRleHQsIGVudmlyb25tZW50IH06IEV4dGVuc2lvbkNvbnRleHRWYWx1ZSkgPT4ge1xuICAgIGNvbnN0IG1heExlbmd0aEZvck1vbnRoOiBudW1iZXIgPSAyXG4gICAgY29uc3QgbWF4TGVuZ3RoRm9yWWVhcjogbnVtYmVyID0gNFxuICAgIGNvbnN0IHsgbW9kZSB9ID0gZW52aXJvbm1lbnQ7XG4gICAgY29uc3QgZG93bmxvYWRFbmRwb2ludCA9IEJBQ0tFTkRfVVJMICsgYC9kb3dubG9hZC1yZXBvcnQvP2FjY291bnRfaWQ9JHt1c2VyQ29udGV4dD8uYWNjb3VudC5pZH1gO1xuICAgIGxldCB2aWV3RGF0YTogb2JqZWN0ID0ge31cbiAgICBjb25zdCBbZGF0YSwgc2V0TXlEYXRhXSA9IHVzZVN0YXRlKFtdKTtcbiAgICBjb25zdCBbYXV0aFVSTCwgc2V0QXV0aFVSTF0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW2hhc1NpZ25lZEluLCBzZXRIYXNTaWduZWRJbl0gPSB1c2VTdGF0ZSh0cnVlKVxuICAgIGNvbnN0IFtkYXRlVmFsdWUsIHNldERhdGVWYWx1ZV0gPSB1c2VTdGF0ZSh7XG4gICAgICAgIG1vbnRoOiAnJywgeWVhcjogJydcbiAgICB9KTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjcmVhdGVPQXV0aFN0YXRlKCkudGhlbigoeyBzdGF0ZSwgY2hhbGxlbmdlIH0pID0+IHtcbiAgICAgICAgICAgIHNldEF1dGhVUkwoZ2V0QXV0aFVSTChzdGF0ZSwgY2hhbGxlbmdlLCBtb2RlKSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGdldFN0YXR1cyA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaChCQUNLRU5EX1VSTCArICcvaGVhbHRoLWNoZWNrJywge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAnc3RyaXBlLXNpZ25hdHVyZSc6IGF3YWl0IGZldGNoU3RyaXBlU2lnbmF0dXJlKCksXG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICAgICAgdXNlcl9pZDogdXNlckNvbnRleHQ/LmlkLFxuICAgICAgICAgICAgICAgICAgICBhY2NvdW50X2lkOiB1c2VyQ29udGV4dD8uYWNjb3VudC5pZFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KS50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgICAgICAgICAudGhlbihkYXRhID0+IHNldEhhc1NpZ25lZEluKGRhdGEuaGFzU2lnbmVkSW4pKVxuXG4gICAgICAgIH1cbiAgICAgICAgLy8gZ2V0U3RhdHVzKCk7XG4gICAgICAgIGZldGNoKEJBQ0tFTkRfVVJMICsnL2dldF9wYXlvdXRzLycsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtdHlwZVwiOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAnQ29udGVudC1TZWN1cml0eS1Qb2xpY3knOiBcImRlZmF1bHQtc3JjICdzZWxmJzsgY29ubmVjdC1zcmMgIGh0dHBzOi8vc3RyaXBlLWJhY2tlbmQtazdiNC52ZXJjZWwuYXBwIGRhc2hib2FyZC5zdHJpcGUuY29tXCIsXG4gICAgICAgIH0sXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGFjY291bnRfaWQ6IHVzZXJDb250ZXh0Py5hY2NvdW50LmlkIH0pXG4gICAgICAgIH0pLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0TXlEYXRhKEpTT04ucGFyc2UoZGF0YS5vdXRwdXRfZGZfanNvbikpO1xuICAgICAgICAgICAgICAgIHNldEhhc1NpZ25lZEluKGRhdGEuaGFzU2lnbmVkSW4pXG4gICAgICAgICAgICB9KVxuXG4gICAgfSwgW10pO1xuXG4gICAgLy8gSGFuZGxpbmcgRGF0ZUZvcm0gRGF0YVxuICAgIGNvbnN0IElucHV0Q2hhbmdlSGFuZGxlciA9IChldmVudCkgPT4ge1xuICAgICAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBldmVudC50YXJnZXQ7XG4gICAgICAgIHNldERhdGVWYWx1ZSgocHJldlN0YXRlKSA9PiAoe1xuICAgICAgICAgICAgLi4ucHJldlN0YXRlLCBbbmFtZV06IHZhbHVlXG4gICAgICAgIH0pKTtcblxuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZXZlbnQpID0+IHtcbiAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goQkFDS0VORF9VUkwgKyAnL2dldF9wYXlvdXRzX2J5X2RhdGUvJywge1xuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtkYXRlVmFsdWV9KVxuICAgICAgICB9KVxuICAgICAgICBjb25zdCByZXNwb25zZURhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlRGF0YSkgIFxuICAgIH1cblxuICAgIGxldCBjcmVhdGVkOiBuZXZlcltdID0gW11cbiAgICBsZXQgZGVzY3I6IG5ldmVyW10gPSBbXVxuICAgIGxldCBhbW91bnQ6IG5ldmVyW10gPSBbXVxuICAgIGxldCBuZXQ6IG5ldmVyW10gPSBbXVxuICAgIGNvbnN0IHZhbHVlcyA9IE9iamVjdC52YWx1ZXMoZGF0YSlcbiAgICBmb3IgKGxldCB2YWwgaW4gdmFsdWVzKSB7XG4gICAgICAgIGNyZWF0ZWQucHVzaCh2YWx1ZXNbdmFsXS5DcmVhdGVkKVxuICAgICAgICBkZXNjci5wdXNoKHZhbHVlc1t2YWxdLkRlc2NyaXB0aW9uKVxuICAgICAgICBuZXQucHVzaCh2YWx1ZXNbdmFsXS5OZXQpXG4gICAgfVxuICAgIGxldCBuZXdfY3JlYXRlZCA9IGNyZWF0ZWQubWFwKGNyZWF0ZSA9PiBuZXcgRGF0ZShjcmVhdGUpLnRvTG9jYWxlU3RyaW5nKFwiZW4tVVNcIiwge1xuICAgICAgICB5ZWFyOiBcIm51bWVyaWNcIixcbiAgICAgICAgbW9udGg6IFwibG9uZ1wiLFxuICAgICAgICBkYXk6IFwibnVtZXJpY1wiLFxuICAgIH0pKVxuXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8Q29udGV4dFZpZXcgdGl0bGU9XCJVc2VyIERldGFpbHNcIj5cbiAgICAgICAgICAgIDxCb3ggY3NzPXt7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogJ21lZGl1bScsXG4gICAgICAgICAgICAgICAgY29sb3I6ICdwcmltYXJ5JyxcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICdsYXJnZScsXG5cbiAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgIDxGb3JtRmllbGRHcm91cCBsZWdlbmQ9XCJFbnRlciBNb250aCBhbmQgWWVhclwiIGRlc2NyaXB0aW9uPVwiRW50ZXIgdGhlIFllYXIgYW5kIE1vbnRoIGZyb20gd2hpY2ggeW91IHdhbnQgdG8gZmV0Y2ggZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIHR5cGU9XCJudW1iZXJcIiBvbkNoYW5nZT17SW5wdXRDaGFuZ2VIYW5kbGVyfSAgbWF4TGVuZ3RoPXttYXhMZW5ndGhGb3JNb250aH0gbGFiZWw9XCJNb250aFwiIG5hbWU9XCJtb250aFwiIHBsYWNlaG9sZGVyPVwiTU1cIiBoaWRkZW5FbGVtZW50cz17WydsYWJlbCddfSAvPlxuICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIHR5cGU9XCJudW1iZXJcIiBvbkNoYW5nZT17SW5wdXRDaGFuZ2VIYW5kbGVyfSAgbWF4TGVuZ3RoPXttYXhMZW5ndGhGb3JZZWFyfSBsYWJlbD1cIlllYXJcIiBuYW1lPVwieWVhclwiIHBsYWNlaG9sZGVyPVwiWVlcIiBoaWRkZW5FbGVtZW50cz17WydsYWJlbCddfSAvPlxuICAgICAgICAgICAgICAgIDwvRm9ybUZpZWxkR3JvdXA+XG4gICAgICAgICAgICAgICAgPEJveCBjc3M9e3tcbiAgICAgICAgICAgICAgICAgICAgc3RhY2s6ICd6JyxcbiAgICAgICAgICAgICAgICAgICAgYWxpZ25YOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICAgICAgYWxpZ25ZOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAnbWVkaXVtJ1xuICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCI+R2V0IERhdGE8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L0JveD5cblxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICB7aGFzU2lnbmVkSW4gJiYgPExpc3Q+XG4gICAgICAgICAgICAgICAgPExpc3RJdGVtXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtuZXRbMF19XG4gICAgICAgICAgICAgICAgICAgIGlkPVwiMlwiXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXs8Qm94PntuZXdfY3JlYXRlZFswXX08L0JveD59XG4gICAgICAgICAgICAgICAgICAgIHNlY29uZGFyeVRpdGxlPXs8Qm94PntkZXNjclswXX08L0JveD59XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e25ldFsxXX1cbiAgICAgICAgICAgICAgICAgICAgaWQ9XCIyXCJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9ezxCb3g+e25ld19jcmVhdGVkWzFdfTwvQm94Pn1cbiAgICAgICAgICAgICAgICAgICAgc2Vjb25kYXJ5VGl0bGU9ezxCb3g+e2Rlc2NyWzFdfTwvQm94Pn1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bmV0WzJdfVxuICAgICAgICAgICAgICAgICAgICBpZD1cIjJcIlxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17PEJveD57bmV3X2NyZWF0ZWRbMl19PC9Cb3g+fVxuICAgICAgICAgICAgICAgICAgICBzZWNvbmRhcnlUaXRsZT17PEJveD57ZGVzY3JbMl19PC9Cb3g+fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPExpc3RJdGVtXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtuZXRbM119XG4gICAgICAgICAgICAgICAgICAgIGlkPVwiMlwiXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXs8Qm94PntuZXdfY3JlYXRlZFszXX08L0JveD59XG4gICAgICAgICAgICAgICAgICAgIHNlY29uZGFyeVRpdGxlPXs8Qm94PntkZXNjclszXX08L0JveD59XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e25ldFs0XX1cbiAgICAgICAgICAgICAgICAgICAgaWQ9XCIyXCJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9ezxCb3g+e25ld19jcmVhdGVkWzRdfTwvQm94Pn1cbiAgICAgICAgICAgICAgICAgICAgc2Vjb25kYXJ5VGl0bGU9ezxCb3g+e2Rlc2NyWzRdfTwvQm94Pn1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bmV0WzVdfVxuICAgICAgICAgICAgICAgICAgICBpZD1cIjJcIlxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17PEJveD57bmV3X2NyZWF0ZWRbNV19PC9Cb3g+fVxuICAgICAgICAgICAgICAgICAgICBzZWNvbmRhcnlUaXRsZT17PEJveD57ZGVzY3JbNV19PC9Cb3g+fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPExpc3RJdGVtXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtuZXRbNl19XG4gICAgICAgICAgICAgICAgICAgIGlkPVwiMlwiXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXs8Qm94PntuZXdfY3JlYXRlZFs2XX08L0JveD59XG4gICAgICAgICAgICAgICAgICAgIHNlY29uZGFyeVRpdGxlPXs8Qm94PntkZXNjcls2XX08L0JveD59XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e25ldFs3XX1cbiAgICAgICAgICAgICAgICAgICAgaWQ9XCIyXCJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9ezxCb3g+e25ld19jcmVhdGVkWzddfTwvQm94Pn1cbiAgICAgICAgICAgICAgICAgICAgc2Vjb25kYXJ5VGl0bGU9ezxCb3g+e2Rlc2NyWzddfTwvQm94Pn1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bmV0WzhdfVxuICAgICAgICAgICAgICAgICAgICBpZD1cIjJcIlxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17PEJveD57bmV3X2NyZWF0ZWRbOF19PC9Cb3g+fVxuICAgICAgICAgICAgICAgICAgICBzZWNvbmRhcnlUaXRsZT17PEJveD57ZGVzY3JbOF19PC9Cb3g+fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0xpc3Q+fVxuXG4gICAgICAgICAgICA8Qm94IGNzcz17eyBzdGFjazogJ3knLCBnYXA6ICdsYXJnZScsIG1hcmdpbjogJ2xhcmdlJyB9fT5cbiAgICAgICAgICAgICAgICB7aGFzU2lnbmVkSW4gJiZcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBocmVmPXtkb3dubG9hZEVuZHBvaW50fSB0eXBlPVwicHJpbWFyeVwiIGNzcz17eyB3aWR0aDogJ2ZpbGwnLCBhbGlnblg6ICdjZW50ZXInIH19XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIj5Eb3dubG9hZFxuICAgICAgICAgICAgICAgICAgICAgICAgQ1NWPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgeyFoYXNTaWduZWRJbiAmJlxuICAgICAgICAgICAgICAgICAgICA8QmFubmVyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY3JpdGljYWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJZb3UgaGF2ZSBub3QgU2lnbiBJblwiXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIlBsZWFzZSBzaWduIGluIGJlZm9yZSB5b3UgY29udGludWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9ucz17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIGhyZWY9e2F1dGhVUkx9IHRhcmdldD1cIl9ibGFua1wiPkJlZ2luIEF1dGhvcml6ZTwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgPC9Cb3g+XG5cbiAgICAgICAgPC9Db250ZXh0Vmlldz5cbiAgICApXG59O1xuXG5leHBvcnQgZGVmYXVsdCBCYWxhbmNlT3ZlcnZpZXdWaWV3OyIsICJpbXBvcnQge1xuICAgIEJveCxcbiAgICBCdXR0b24sXG4gICAgQmFubmVyLFxuICAgIElubGluZSxcbiAgICBTZXR0aW5nc1ZpZXcsXG59IGZyb20gXCJAc3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvdWlcIjtcbmltcG9ydCB0eXBlIHtFeHRlbnNpb25Db250ZXh0VmFsdWV9IGZyb20gXCJAc3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvY29udGV4dFwiO1xuaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XG5jb25zdCBBcHBTZXR0aW5ncyA9ICh7dXNlckNvbnRleHQsIGVudmlyb25tZW50fTogRXh0ZW5zaW9uQ29udGV4dFZhbHVlKSA9PiB7XG4gICAgY29uc3QgW2RlYXV0aCwgc2V0RGVhdXRoXSA9IHVzZVN0YXRlKCcnKVxuICAgIGNvbnN0IGNoZWNrX3VzZXIgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo1MDAwL2RlYXV0aG9yaXplX3VzZXIvJywge1xuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIHVzZXJfaWQ6IHVzZXJDb250ZXh0Py5pZCxcbiAgICAgICAgICAgICAgICBhY2NvdW50X2lkOiB1c2VyQ29udGV4dD8uYWNjb3VudC5pZFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSkudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IGNvbnNvbGUubG9nKGRhdGEpKVxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8U2V0dGluZ3NWaWV3IG9uU2F2ZT17KCkgPT4ge1xuICAgICAgICB9fT5cbiAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgICBjc3M9e3tcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogXCJjb250YWluZXJcIixcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIm1lZGl1bVwiLFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBcImxhcmdlXCIsXG4gICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgPEJhbm5lclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY3JpdGljYWxcIlxuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlJlbW92ZSBBdXRob3JpemF0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJZb3Ugd2lsbCBubyBsb25nZXIgYWJsZSB0byBhY2Nlc3MgeW91ciBkYXRhIHRocm91Z2ggQXBwXCJcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9ucz17XG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uUHJlc3M9e2NoZWNrX3VzZXJ9IHR5cGU9XCJkZXN0cnVjdGl2ZVwiPlJlbW92ZSBBdXRob3JpemF0aW9uPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvU2V0dGluZ3NWaWV3PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBcHBTZXR0aW5ncztcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7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ZUFBQSxTQUFBLGFBQUEsRUFBQSxZQUFBLE1BQUEsS0FBQSxXQUFBO0FBQUEsZUFBQSxLQUFBO01BQVMsRUFBQSxDQUFBO0FBQ1QsYUFBQSxlQUFBLFNBQUEsU0FBQSxFQUFBLFlBQUEsTUFBQSxLQUFBLFdBQUE7QUFBQSxlQUFBLEtBQUE7TUFBSyxFQUFBLENBQUE7QUFDTCxhQUFBLGVBQUEsU0FBQSxhQUFBLEVBQUEsWUFBQSxNQUFBLEtBQUEsV0FBQTtBQUFBLGVBQUEsS0FBQTtNQUFTLEVBQUEsQ0FBQTtBQUNULGFBQUEsZUFBQSxTQUFBLGFBQUEsRUFBQSxZQUFBLE1BQUEsS0FBQSxXQUFBO0FBQUEsZUFBQSxLQUFBO01BQVMsRUFBQSxDQUFBO0FBQ1QsYUFBQSxlQUFBLFNBQUEsZUFBQSxFQUFBLFlBQUEsTUFBQSxLQUFBLFdBQUE7QUFBQSxlQUFBLEtBQUE7TUFBVyxFQUFBLENBQUE7QUFDWCxhQUFBLGVBQUEsU0FBQSxhQUFBLEVBQUEsWUFBQSxNQUFBLEtBQUEsV0FBQTtBQUFBLGVBQUEsS0FBQTtNQUFTLEVBQUEsQ0FBQTtBQUNULGFBQUEsZUFBQSxTQUFBLG1CQUFBLEVBQUEsWUFBQSxNQUFBLEtBQUEsV0FBQTtBQUFBLGVBQUEsS0FBQTtNQUFlLEVBQUEsQ0FBQTtBQUNmLGFBQUEsZUFBQSxTQUFBLFlBQUEsRUFBQSxZQUFBLE1BQUEsS0FBQSxXQUFBO0FBQUEsZUFBQSxLQUFBO01BQVEsRUFBQSxDQUFBO0FBQ1IsYUFBQSxlQUFBLFNBQUEsUUFBQSxFQUFBLFlBQUEsTUFBQSxLQUFBLFdBQUE7QUFBQSxlQUFBLEtBQUE7TUFBSSxFQUFBLENBQUE7QUFJSixhQUFBLGVBQUEsU0FBQSxXQUFBLEVBQUEsWUFBQSxNQUFBLEtBQUEsV0FBQTtBQUFBLGVBQUEsS0FBQTtNQUFPLEVBQUEsQ0FBQTtBQUVULG1CQUFBLHVDQUFBLE9BQUE7QUFDQSxVQUFBLHNCQUFBO0FBQ0UsYUFBQSxlQUFBLFNBQUEsT0FBQSxFQUFBLFlBQUEsTUFBQSxLQUFBLFdBQUE7QUFBQSxlQUFBLG9CQUFBO01BQUcsRUFBQSxDQUFBO0FBQ0gsYUFBQSxlQUFBLFNBQUEsVUFBQSxFQUFBLFlBQUEsTUFBQSxLQUFBLFdBQUE7QUFBQSxlQUFBLG9CQUFBO01BQU0sRUFBQSxDQUFBO0FBQ04sYUFBQSxlQUFBLFNBQUEsWUFBQSxFQUFBLFlBQUEsTUFBQSxLQUFBLFdBQUE7QUFBQSxlQUFBLG9CQUFBO01BQVEsRUFBQSxDQUFBO0FBQ1IsYUFBQSxlQUFBLFNBQUEsYUFBQSxFQUFBLFlBQUEsTUFBQSxLQUFBLFdBQUE7QUFBQSxlQUFBLG9CQUFBO01BQVMsRUFBQSxDQUFBO0FBQ1QsYUFBQSxlQUFBLFNBQUEsUUFBQSxFQUFBLFlBQUEsTUFBQSxLQUFBLFdBQUE7QUFBQSxlQUFBLG9CQUFBO01BQUksRUFBQSxDQUFBO0FBQ0osYUFBQSxlQUFBLFNBQUEsVUFBQSxFQUFBLFlBQUEsTUFBQSxLQUFBLFdBQUE7QUFBQSxlQUFBLG9CQUFBO01BQU0sRUFBQSxDQUFBO0FBQ04sYUFBQSxlQUFBLFNBQUEsUUFBQSxFQUFBLFlBQUEsTUFBQSxLQUFBLFdBQUE7QUFBQSxlQUFBLG9CQUFBO01BQUksRUFBQSxDQUFBO0FBQ0osYUFBQSxlQUFBLFNBQUEsU0FBQSxFQUFBLFlBQUEsTUFBQSxLQUFBLFdBQUE7QUFBQSxlQUFBLG9CQUFBO01BQUssRUFBQSxDQUFBO0FBQ0wsYUFBQSxlQUFBLFNBQUEsVUFBQSxFQUFBLFlBQUEsTUFBQSxLQUFBLFdBQUE7QUFBQSxlQUFBLG9CQUFBO01BQU0sRUFBQSxDQUFBO0FBQ04sYUFBQSxlQUFBLFNBQUEsVUFBQSxFQUFBLFlBQUEsTUFBQSxLQUFBLFdBQUE7QUFBQSxlQUFBLG9CQUFBO01BQU0sRUFBQSxDQUFBO0FBQ04sYUFBQSxlQUFBLFNBQUEsWUFBQSxFQUFBLFlBQUEsTUFBQSxLQUFBLFdBQUE7QUFBQSxlQUFBLG9CQUFBO01BQVEsRUFBQSxDQUFBO0FBQ1IsYUFBQSxlQUFBLFNBQUEsYUFBQSxFQUFBLFlBQUEsTUFBQSxLQUFBLFdBQUE7QUFBQSxlQUFBLG9CQUFBO01BQVMsRUFBQSxDQUFB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SUFDWCxRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixlQUFlO0FBQUEsTUFDYjtBQUFBLFFBQ0UsY0FBYztBQUFBLFFBQ2QsV0FBVztBQUFBLE1BQ2I7QUFBQSxJQUNGO0FBQUEsSUFDQSxlQUFlO0FBQUEsTUFDYixZQUFZO0FBQUEsSUFDZDtBQUFBLElBQ0EsZ0JBQWdCO0FBQUEsTUFDZCxTQUFTO0FBQUEsUUFDUDtBQUFBLFVBQ0UsWUFBWTtBQUFBLFVBQ1osYUFBYTtBQUFBLFFBQ2Y7QUFBQSxRQUNBO0FBQUEsVUFDRSxZQUFZO0FBQUEsVUFDWixhQUFhO0FBQUEsUUFDZjtBQUFBLFFBQ0E7QUFBQSxVQUNFLFlBQVk7QUFBQSxVQUNaLGFBQWE7QUFBQSxRQUNmO0FBQUEsTUFDRjtBQUFBLE1BQ0EsMkJBQTJCO0FBQUEsUUFDekIsZUFBZTtBQUFBLFVBQ2I7QUFBQSxRQUNGO0FBQUEsUUFDQSxhQUFhO0FBQUEsUUFDYixXQUFXO0FBQUEsTUFDYjtBQUFBLElBQ0Y7QUFBQSxFQUNGOyIsCiAgIm5hbWVzIjogWyJjcmVhdGVPQXV0aFN0YXRlIiwgImZldGNoU3RyaXBlU2lnbmF0dXJlIiwgImZldGNoU3RyaXBlU2lnbmF0dXJlIiwgImRhdGEiLCAiaW1wb3J0X3VpIiwgImltcG9ydF9vYXV0aCIsICJpbXBvcnRfc2lnbmF0dXJlIiwgImltcG9ydF9qc3hfcnVudGltZSIsICJCQUNLRU5EX1VSTCIsICJnZXRBdXRoVVJMIiwgImRhdGEiLCAiZmV0Y2hTdHJpcGVTaWduYXR1cmUiLCAiaW1wb3J0X3VpIiwgImltcG9ydF9yZWFjdCIsICJpbXBvcnRfanN4X3J1bnRpbWUiLCAiZGF0YSJdCn0K
