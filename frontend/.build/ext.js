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
    const downloadEndpoint = `http://localhost:5000/download-report/?account_id=${userContext == null ? void 0 : userContext.account.id}`;
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
      fetch("http://localhost:5000/get_payouts/", {
        method: "POST",
        headers: { "Content-type": "application/json" },
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
      const response = yield fetch("http://localhost:5000/get_payouts_by_date/", {
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
  var BUILD_TIME = "2023-03-13 15:52:59.312979223 +0530 IST m=+0.052115062";
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0BzdHJpcGUvc3JjL3VpL0BzYWlsL3VpL2luZGV4LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9Ac3RyaXBlL3NyYy91aS9Ac3RyaXBlLWludGVybmFsL3RhaWxvci1kYXNoYm9hcmQtY29tcG9uZW50cy9pbmRleC50cyIsICIuLi9ub2RlX21vZHVsZXMvQHN0cmlwZS9zcmMvdWkvbWFudWFsX2NvbXBvbmVudHMudHMiLCAiLi4vbm9kZV9tb2R1bGVzL0BzdHJpcGUvc3JjL3VpL2luZGV4LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9pbnZhcmlhbnQvYnJvd3Nlci5qcyIsICIuLi9ub2RlX21vZHVsZXMvQHN0cmlwZS9zcmMvdXRpbHMvX2VuZHBvaW50LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9Ac3RyaXBlL3NyYy91dGlscy9vYXV0aC50cyIsICIuLi9ub2RlX21vZHVsZXMvQHN0cmlwZS9zcmMvb2F1dGgudHMiLCAiLi4vbm9kZV9tb2R1bGVzL0BzdHJpcGUvc3JjL3V0aWxzL3NpZ25hdHVyZS50cyIsICIuLi9ub2RlX21vZHVsZXMvQHN0cmlwZS9zcmMvc2lnbmF0dXJlLnRzIiwgIi4uL25vZGVfbW9kdWxlcy9Ac3RyaXBlL3NyYy92ZXJzaW9uLnRzIiwgIm1hbmlmZXN0LmpzIiwgIi4uL3NyYy92aWV3cy9BcHAudHN4IiwgIi4uL3NyYy92aWV3cy9CYWxhbmNlT3ZlcnZpZXdWaWV3LnRzeCIsICIuLi9zcmMvdmlld3MvQXBwU2V0dGluZ3MudHN4Il0sCiAgInNvdXJjZXNDb250ZW50IjogW251bGwsIG51bGwsIG51bGwsIG51bGwsICIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBVc2UgaW52YXJpYW50KCkgdG8gYXNzZXJ0IHN0YXRlIHdoaWNoIHlvdXIgcHJvZ3JhbSBhc3N1bWVzIHRvIGJlIHRydWUuXG4gKlxuICogUHJvdmlkZSBzcHJpbnRmLXN0eWxlIGZvcm1hdCAob25seSAlcyBpcyBzdXBwb3J0ZWQpIGFuZCBhcmd1bWVudHNcbiAqIHRvIHByb3ZpZGUgaW5mb3JtYXRpb24gYWJvdXQgd2hhdCBicm9rZSBhbmQgd2hhdCB5b3Ugd2VyZVxuICogZXhwZWN0aW5nLlxuICpcbiAqIFRoZSBpbnZhcmlhbnQgbWVzc2FnZSB3aWxsIGJlIHN0cmlwcGVkIGluIHByb2R1Y3Rpb24sIGJ1dCB0aGUgaW52YXJpYW50XG4gKiB3aWxsIHJlbWFpbiB0byBlbnN1cmUgbG9naWMgZG9lcyBub3QgZGlmZmVyIGluIHByb2R1Y3Rpb24uXG4gKi9cblxudmFyIGludmFyaWFudCA9IGZ1bmN0aW9uKGNvbmRpdGlvbiwgZm9ybWF0LCBhLCBiLCBjLCBkLCBlLCBmKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFyaWFudCByZXF1aXJlcyBhbiBlcnJvciBtZXNzYWdlIGFyZ3VtZW50Jyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKCFjb25kaXRpb24pIHtcbiAgICB2YXIgZXJyb3I7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBlcnJvciA9IG5ldyBFcnJvcihcbiAgICAgICAgJ01pbmlmaWVkIGV4Y2VwdGlvbiBvY2N1cnJlZDsgdXNlIHRoZSBub24tbWluaWZpZWQgZGV2IGVudmlyb25tZW50ICcgK1xuICAgICAgICAnZm9yIHRoZSBmdWxsIGVycm9yIG1lc3NhZ2UgYW5kIGFkZGl0aW9uYWwgaGVscGZ1bCB3YXJuaW5ncy4nXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgYXJncyA9IFthLCBiLCBjLCBkLCBlLCBmXTtcbiAgICAgIHZhciBhcmdJbmRleCA9IDA7XG4gICAgICBlcnJvciA9IG5ldyBFcnJvcihcbiAgICAgICAgZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJnc1thcmdJbmRleCsrXTsgfSlcbiAgICAgICk7XG4gICAgICBlcnJvci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgIH1cblxuICAgIGVycm9yLmZyYW1lc1RvUG9wID0gMTsgLy8gd2UgZG9uJ3QgY2FyZSBhYm91dCBpbnZhcmlhbnQncyBvd24gZnJhbWVcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBpbnZhcmlhbnQ7XG4iLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAiXG5cbmltcG9ydCBBcHAgZnJvbSAnLi4vc3JjL3ZpZXdzL0FwcCc7XG5cbmltcG9ydCBCYWxhbmNlT3ZlcnZpZXdWaWV3IGZyb20gJy4uL3NyYy92aWV3cy9CYWxhbmNlT3ZlcnZpZXdWaWV3JztcblxuaW1wb3J0IEFwcFNldHRpbmdzIGZyb20gJy4uL3NyYy92aWV3cy9BcHBTZXR0aW5ncyc7XG5cblxuZXhwb3J0ICogZnJvbSAnQHN0cmlwZS91aS1leHRlbnNpb24tc2RrL3ZlcnNpb24nO1xuZXhwb3J0IGNvbnN0IEJVSUxEX1RJTUUgPSAnMjAyMy0wMy0xMyAxNTo1Mjo1OS4zMTI5NzkyMjMgKzA1MzAgSVNUIG09KzAuMDUyMTE1MDYyJ1xuXG5leHBvcnQge1xuXHRcblx0QXBwLFxuXHRcblx0QmFsYW5jZU92ZXJ2aWV3Vmlldyxcblx0XG5cdEFwcFNldHRpbmdzLFxuXHRcbn07XG5leHBvcnQgZGVmYXVsdCB7XG4gIFwiaWRcIjogXCJjb20uZXhhbXBsZS5iYXNpYy1vYXV0aDItdGVzdFwiLFxuICBcInZlcnNpb25cIjogXCIwLjAuMlwiLFxuICBcIm5hbWVcIjogXCJCYXNpYy1PQXV0aDIgVGVzdFwiLFxuICBcImljb25cIjogXCJcIixcbiAgXCJwZXJtaXNzaW9uc1wiOiBbXG4gICAge1xuICAgICAgXCJwZXJtaXNzaW9uXCI6IFwic2VjcmV0X3dyaXRlXCIsXG4gICAgICBcInB1cnBvc2VcIjogXCJBbGxvd3Mgc3RvcmluZyBzZWNyZXRzIGJldHdlZW4gcGFnZSByZWxvYWRzXCJcbiAgICB9XG4gIF0sXG4gIFwiYXBwX2JhY2tlbmRcIjoge1xuICAgIFwid2ViaG9va3NcIjogbnVsbFxuICB9LFxuICBcInVpX2V4dGVuc2lvblwiOiB7XG4gICAgXCJ2aWV3c1wiOiBbXG4gICAgICB7XG4gICAgICAgIFwidmlld3BvcnRcIjogXCJzdHJpcGUuZGFzaGJvYXJkLmhvbWUub3ZlcnZpZXdcIixcbiAgICAgICAgXCJjb21wb25lbnRcIjogXCJBcHBcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJ2aWV3cG9ydFwiOiBcInN0cmlwZS5kYXNoYm9hcmQuYmFsYW5jZS5vdmVydmlld1wiLFxuICAgICAgICBcImNvbXBvbmVudFwiOiBcIkJhbGFuY2VPdmVydmlld1ZpZXdcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJ2aWV3cG9ydFwiOiBcInNldHRpbmdzXCIsXG4gICAgICAgIFwiY29tcG9uZW50XCI6IFwiQXBwU2V0dGluZ3NcIlxuICAgICAgfVxuICAgIF0sXG4gICAgXCJhY3Rpb25zXCI6IFtdLFxuICAgIFwiY29udGVudF9zZWN1cml0eV9wb2xpY3lcIjoge1xuICAgICAgXCJjb25uZWN0LXNyY1wiOiBudWxsLFxuICAgICAgXCJpbWFnZS1zcmNcIjogbnVsbCxcbiAgICAgIFwicHVycG9zZVwiOiBcIlwiXG4gICAgfVxuICB9LFxuICBcInBvc3RfaW5zdGFsbF9hY3Rpb25cIjogbnVsbCxcbiAgXCJjb25zdGFudHNcIjogbnVsbFxufVxuIiwgImltcG9ydCB7Q29udGV4dFZpZXcsIEJ1dHRvbiwgQm94LCBCYWRnZSwgQmFubmVyfSBmcm9tICdAc3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvdWknO1xuaW1wb3J0IHtzaG93VG9hc3R9IGZyb20gJ0BzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay91dGlscyc7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge2NyZWF0ZU9BdXRoU3RhdGV9IGZyb20gJ0BzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay9vYXV0aCc7XG5pbXBvcnQgdHlwZSB7RXh0ZW5zaW9uQ29udGV4dFZhbHVlfSBmcm9tICdAc3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvY29udGV4dCc7XG5pbXBvcnQgZmV0Y2hTdHJpcGVTaWduYXR1cmUgZnJvbSAnQHN0cmlwZS91aS1leHRlbnNpb24tc2RrL3NpZ25hdHVyZSc7XG5cblxuY29uc3Qge3VzZVN0YXRlLCB1c2VFZmZlY3R9ID0gUmVhY3Q7XG5cblxuY29uc3QgQkFDS0VORF9VUkwgPSAnaHR0cDovL2xvY2FsaG9zdDo1MDAwL3ZhbGlkYXRldXNlci8nO1xuXG5jb25zdCBnZXRSZWRpcmVjdFVSTCA9IChtb2RlOiAnbGl2ZScgfCAndGVzdCcpID0+IGBodHRwczovL2Rhc2hib2FyZC5zdHJpcGUuY29tLyR7bW9kZSA9PT0gJ3Rlc3QnID8gJ3Rlc3QvJyA6ICdsaXZlLyd9YXBwcy1vYXV0aC9jb20uZXhhbXBsZS5vYXV0aC1leGFtcGxlYDtcblxuY29uc3QgZ2V0QXV0aFVSTCA9IChzdGF0ZTogc3RyaW5nLCBjaGFsbGVuZ2U6IHN0cmluZywgbW9kZTogJ2xpdmUnIHwgJ3Rlc3QnKSA9PlxuICAgIGBodHRwOi8vbG9jYWxob3N0OjUwMDAvZ2V0LW9hdXRoLWxpbmsvP3Jlc3BvbnNlX3R5cGU9Y29kZSZjbGllbnQmcmVkaXJlY3Qmc3RhdGU9JHtzdGF0ZX0mY29kZV9jaGFsbGVuZ2U9JHtjaGFsbGVuZ2V9Jm1vZGU9JHttb2RlfSZjb2RlX2NoYWxsZW5nZV9tZXRob2Q9UzI1NmA7XG5cblxuY29uc3QgT0F1dGhBcHAgPSAoe2Vudmlyb25tZW50LCB1c2VyQ29udGV4dH06IEV4dGVuc2lvbkNvbnRleHRWYWx1ZSkgPT4ge1xuICAgIGNvbnN0IHttb2RlfSA9IGVudmlyb25tZW50O1xuICAgIGNvbnN0IFthdXRoVVJMLCBzZXRBdXRoVVJMXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbc3RyaXBlU3RhdHVzLCBzZXRTdHJpcGVTdGF0dXNdID0gdXNlU3RhdGU8c3RyaW5nPignZG93bicpO1xuICAgIGNvbnN0IFtoYXNTaWduZWRJbiwgc2V0SGFzU2lnbmVkSW5dID0gdXNlU3RhdGU8Ym9vbGVhbj4odHJ1ZSk7XG4gICAgY29uc3QgZ2V0U3RhdHVzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9oZWFsdGgtY2hlY2snLCB7XG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdzdHJpcGUtc2lnbmF0dXJlJzogYXdhaXQgZmV0Y2hTdHJpcGVTaWduYXR1cmUoKSxcbiAgICAgICAgICAgICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIHVzZXJfaWQ6IHVzZXJDb250ZXh0Py5pZCxcbiAgICAgICAgICAgICAgICBhY2NvdW50X2lkOiB1c2VyQ29udGV4dD8uYWNjb3VudC5pZFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSkudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICBzZXRIYXNTaWduZWRJbihkYXRhLmhhc1NpZ25lZEluKTtcbiAgICAgICAgICAgICAgICBzZXRTdHJpcGVTdGF0dXMoZGF0YS5yZXN1bHQgPT0gJ09LJyA/ICdVcCcgOiAnRG93bicpO1xuICAgICAgICAgICAgfSlcblxuICAgIH1cblxuXG4gICAgZ2V0U3RhdHVzKCk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgLy8gdmFsaWRhdGVVc2VyKCk7XG4gICAgICAgIGlmIChoYXNTaWduZWRJbikge1xuICAgICAgICAgICAgLy8gR2V0dGluZyBQYXlvdXRzIERldGFpbHNcbiAgICAgICAgfVxuXG4gICAgICAgIGNyZWF0ZU9BdXRoU3RhdGUoKS50aGVuKCh7c3RhdGUsIGNoYWxsZW5nZX0pID0+IHtcbiAgICAgICAgICAgIHNldEF1dGhVUkwoZ2V0QXV0aFVSTChzdGF0ZSwgY2hhbGxlbmdlLCBtb2RlKSk7XG4gICAgICAgIH0pO1xuICAgIH0sIFttb2RlXSk7XG4gICAgcmV0dXJuIChcblxuICAgICAgICA8Q29udGV4dFZpZXcgdGl0bGU9XCJQYXlvdXQgQXBwW1RFU1RdXCI+XG4gICAgICAgICAgICA8Qm94PlN0cmlwZSBpcyB7c3RyaXBlU3RhdHVzfTwvQm94PlxuICAgICAgICAgICAge2hhc1NpZ25lZEluICYmXG4gICAgICAgICAgICAgICAgPEJhZGdlIHR5cGU9XCJpbmZvXCI+WW91IGFyZSBBbHJlYWR5IEF1dGhvcml6ZWQgdG8gT3VyIEFwcCE8L0JhZGdlPlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgeyFoYXNTaWduZWRJbiAmJlxuICAgICAgICAgICAgICAgIDxCYW5uZXJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNyaXRpY2FsXCJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJZb3UgaGF2ZSBub3QgQXV0aG9yaXplZCFcIlxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIlBsZWFzZSBBdXRob3JpemUgYmVmb3JlIHlvdSBjb250aW51ZVwiXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbnM9e1xuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIGhyZWY9e2F1dGhVUkx9IHRhcmdldD1cIl9ibGFua1wiPkJlZ2luIEF1dGhvcml6ZTwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIH1cbiAgICAgICAgPC9Db250ZXh0Vmlldz5cblxuICAgIClcbiAgICAgICAgO1xuXG5cbn07XG5leHBvcnQgZGVmYXVsdCBPQXV0aEFwcDtcblxuXG5cblxuIiwgImltcG9ydCB7IEJveCwgQ29udGV4dFZpZXcsIExpc3RJdGVtLCBMaXN0LCBCdXR0b24sIEJhbm5lciwgRm9ybUZpZWxkR3JvdXAsIFRleHRGaWVsZCB9IGZyb20gXCJAc3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvdWlcIjtcbmltcG9ydCB0eXBlIHsgRXh0ZW5zaW9uQ29udGV4dFZhbHVlIH0gZnJvbSBcIkBzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay9jb250ZXh0XCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjcmVhdGVPQXV0aFN0YXRlIH0gZnJvbSBcIkBzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay9vYXV0aFwiO1xuaW1wb3J0IGZldGNoU3RyaXBlU2lnbmF0dXJlIGZyb20gXCJAc3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvc2lnbmF0dXJlXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuXG4vLyBEb3dubG9hZCBFbmRwb2ludFxuXG5jb25zdCBnZXRBdXRoVVJMID0gKHN0YXRlOiBzdHJpbmcsIGNoYWxsZW5nZTogc3RyaW5nLCBtb2RlOiAnbGl2ZScgfCAndGVzdCcpID0+XG4gICAgYGh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9nZXQtb2F1dGgtbGluay8/cmVzcG9uc2VfdHlwZT1jb2RlJmNsaWVudCZyZWRpcmVjdCZzdGF0ZT0ke3N0YXRlfSZjb2RlX2NoYWxsZW5nZT0ke2NoYWxsZW5nZX0mbW9kZT0ke21vZGV9JmNvZGVfY2hhbGxlbmdlX21ldGhvZD1TMjU2YDtcblxuY29uc3QgQmFsYW5jZU92ZXJ2aWV3VmlldyA9ICh7IHVzZXJDb250ZXh0LCBlbnZpcm9ubWVudCB9OiBFeHRlbnNpb25Db250ZXh0VmFsdWUpID0+IHtcbiAgICBjb25zdCBtYXhMZW5ndGhGb3JNb250aDogbnVtYmVyID0gMlxuICAgIGNvbnN0IG1heExlbmd0aEZvclllYXI6IG51bWJlciA9IDRcbiAgICBjb25zdCB7IG1vZGUgfSA9IGVudmlyb25tZW50O1xuICAgIGNvbnN0IGRvd25sb2FkRW5kcG9pbnQgPSBgaHR0cDovL2xvY2FsaG9zdDo1MDAwL2Rvd25sb2FkLXJlcG9ydC8/YWNjb3VudF9pZD0ke3VzZXJDb250ZXh0Py5hY2NvdW50LmlkfWA7XG4gICAgbGV0IHZpZXdEYXRhOiBvYmplY3QgPSB7fVxuICAgIGNvbnN0IFtkYXRhLCBzZXRNeURhdGFdID0gdXNlU3RhdGUoW10pO1xuICAgIGNvbnN0IFthdXRoVVJMLCBzZXRBdXRoVVJMXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbaGFzU2lnbmVkSW4sIHNldEhhc1NpZ25lZEluXSA9IHVzZVN0YXRlKHRydWUpXG4gICAgY29uc3QgW2RhdGVWYWx1ZSwgc2V0RGF0ZVZhbHVlXSA9IHVzZVN0YXRlKHtcbiAgICAgICAgbW9udGg6ICcnLCB5ZWFyOiAnJ1xuICAgIH0pO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNyZWF0ZU9BdXRoU3RhdGUoKS50aGVuKCh7IHN0YXRlLCBjaGFsbGVuZ2UgfSkgPT4ge1xuICAgICAgICAgICAgc2V0QXV0aFVSTChnZXRBdXRoVVJMKHN0YXRlLCBjaGFsbGVuZ2UsIG1vZGUpKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgZ2V0U3RhdHVzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjUwMDAvaGVhbHRoLWNoZWNrJywge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAnc3RyaXBlLXNpZ25hdHVyZSc6IGF3YWl0IGZldGNoU3RyaXBlU2lnbmF0dXJlKCksXG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICAgICAgdXNlcl9pZDogdXNlckNvbnRleHQ/LmlkLFxuICAgICAgICAgICAgICAgICAgICBhY2NvdW50X2lkOiB1c2VyQ29udGV4dD8uYWNjb3VudC5pZFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KS50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgICAgICAgICAudGhlbihkYXRhID0+IHNldEhhc1NpZ25lZEluKGRhdGEuaGFzU2lnbmVkSW4pKVxuXG4gICAgICAgIH1cbiAgICAgICAgLy8gZ2V0U3RhdHVzKCk7XG4gICAgICAgIGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjUwMDAvZ2V0X3BheW91dHMvJywge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC10eXBlXCI6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBhY2NvdW50X2lkOiB1c2VyQ29udGV4dD8uYWNjb3VudC5pZCB9KVxuICAgICAgICB9KS50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIHNldE15RGF0YShKU09OLnBhcnNlKGRhdGEub3V0cHV0X2RmX2pzb24pKTtcbiAgICAgICAgICAgICAgICBzZXRIYXNTaWduZWRJbihkYXRhLmhhc1NpZ25lZEluKVxuICAgICAgICAgICAgfSlcblxuICAgIH0sIFtdKTtcblxuICAgIC8vIEhhbmRsaW5nIERhdGVGb3JtIERhdGFcbiAgICBjb25zdCBJbnB1dENoYW5nZUhhbmRsZXIgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICBzZXREYXRlVmFsdWUoKHByZXZTdGF0ZSkgPT4gKHtcbiAgICAgICAgICAgIC4uLnByZXZTdGF0ZSwgW25hbWVdOiB2YWx1ZVxuICAgICAgICB9KSk7XG5cbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjUwMDAvZ2V0X3BheW91dHNfYnlfZGF0ZS8nLCB7XG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe2RhdGVWYWx1ZX0pXG4gICAgICAgIH0pXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2VEYXRhKSAgXG4gICAgfVxuXG4gICAgbGV0IGNyZWF0ZWQ6IG5ldmVyW10gPSBbXVxuICAgIGxldCBkZXNjcjogbmV2ZXJbXSA9IFtdXG4gICAgbGV0IGFtb3VudDogbmV2ZXJbXSA9IFtdXG4gICAgbGV0IG5ldDogbmV2ZXJbXSA9IFtdXG4gICAgY29uc3QgdmFsdWVzID0gT2JqZWN0LnZhbHVlcyhkYXRhKVxuICAgIGZvciAobGV0IHZhbCBpbiB2YWx1ZXMpIHtcbiAgICAgICAgY3JlYXRlZC5wdXNoKHZhbHVlc1t2YWxdLkNyZWF0ZWQpXG4gICAgICAgIGRlc2NyLnB1c2godmFsdWVzW3ZhbF0uRGVzY3JpcHRpb24pXG4gICAgICAgIG5ldC5wdXNoKHZhbHVlc1t2YWxdLk5ldClcbiAgICB9XG4gICAgbGV0IG5ld19jcmVhdGVkID0gY3JlYXRlZC5tYXAoY3JlYXRlID0+IG5ldyBEYXRlKGNyZWF0ZSkudG9Mb2NhbGVTdHJpbmcoXCJlbi1VU1wiLCB7XG4gICAgICAgIHllYXI6IFwibnVtZXJpY1wiLFxuICAgICAgICBtb250aDogXCJsb25nXCIsXG4gICAgICAgIGRheTogXCJudW1lcmljXCIsXG4gICAgfSkpXG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxDb250ZXh0VmlldyB0aXRsZT1cIlVzZXIgRGV0YWlsc1wiPlxuICAgICAgICAgICAgPEJveCBjc3M9e3tcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAnbWVkaXVtJyxcbiAgICAgICAgICAgICAgICBjb2xvcjogJ3ByaW1hcnknLFxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJ2xhcmdlJyxcblxuICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgPEZvcm1GaWVsZEdyb3VwIGxlZ2VuZD1cIkVudGVyIE1vbnRoIGFuZCBZZWFyXCIgZGVzY3JpcHRpb249XCJFbnRlciB0aGUgWWVhciBhbmQgTW9udGggZnJvbSB3aGljaCB5b3Ugd2FudCB0byBmZXRjaCBkYXRhXCI+XG4gICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgdHlwZT1cIm51bWJlclwiIG9uQ2hhbmdlPXtJbnB1dENoYW5nZUhhbmRsZXJ9ICBtYXhMZW5ndGg9e21heExlbmd0aEZvck1vbnRofSBsYWJlbD1cIk1vbnRoXCIgbmFtZT1cIm1vbnRoXCIgcGxhY2Vob2xkZXI9XCJNTVwiIGhpZGRlbkVsZW1lbnRzPXtbJ2xhYmVsJ119IC8+XG4gICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgdHlwZT1cIm51bWJlclwiIG9uQ2hhbmdlPXtJbnB1dENoYW5nZUhhbmRsZXJ9ICBtYXhMZW5ndGg9e21heExlbmd0aEZvclllYXJ9IGxhYmVsPVwiWWVhclwiIG5hbWU9XCJ5ZWFyXCIgcGxhY2Vob2xkZXI9XCJZWVwiIGhpZGRlbkVsZW1lbnRzPXtbJ2xhYmVsJ119IC8+XG4gICAgICAgICAgICAgICAgPC9Gb3JtRmllbGRHcm91cD5cbiAgICAgICAgICAgICAgICA8Qm94IGNzcz17e1xuICAgICAgICAgICAgICAgICAgICBzdGFjazogJ3onLFxuICAgICAgICAgICAgICAgICAgICBhbGlnblg6ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgICAgICBhbGlnblk6ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46ICdtZWRpdW0nXG4gICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIj5HZXQgRGF0YTwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvQm94PlxuXG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIHtoYXNTaWduZWRJbiAmJiA8TGlzdD5cbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e25ldFswXX1cbiAgICAgICAgICAgICAgICAgICAgaWQ9XCIyXCJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9ezxCb3g+e25ld19jcmVhdGVkWzBdfTwvQm94Pn1cbiAgICAgICAgICAgICAgICAgICAgc2Vjb25kYXJ5VGl0bGU9ezxCb3g+e2Rlc2NyWzBdfTwvQm94Pn1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bmV0WzFdfVxuICAgICAgICAgICAgICAgICAgICBpZD1cIjJcIlxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17PEJveD57bmV3X2NyZWF0ZWRbMV19PC9Cb3g+fVxuICAgICAgICAgICAgICAgICAgICBzZWNvbmRhcnlUaXRsZT17PEJveD57ZGVzY3JbMV19PC9Cb3g+fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPExpc3RJdGVtXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtuZXRbMl19XG4gICAgICAgICAgICAgICAgICAgIGlkPVwiMlwiXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXs8Qm94PntuZXdfY3JlYXRlZFsyXX08L0JveD59XG4gICAgICAgICAgICAgICAgICAgIHNlY29uZGFyeVRpdGxlPXs8Qm94PntkZXNjclsyXX08L0JveD59XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e25ldFszXX1cbiAgICAgICAgICAgICAgICAgICAgaWQ9XCIyXCJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9ezxCb3g+e25ld19jcmVhdGVkWzNdfTwvQm94Pn1cbiAgICAgICAgICAgICAgICAgICAgc2Vjb25kYXJ5VGl0bGU9ezxCb3g+e2Rlc2NyWzNdfTwvQm94Pn1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bmV0WzRdfVxuICAgICAgICAgICAgICAgICAgICBpZD1cIjJcIlxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17PEJveD57bmV3X2NyZWF0ZWRbNF19PC9Cb3g+fVxuICAgICAgICAgICAgICAgICAgICBzZWNvbmRhcnlUaXRsZT17PEJveD57ZGVzY3JbNF19PC9Cb3g+fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPExpc3RJdGVtXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtuZXRbNV19XG4gICAgICAgICAgICAgICAgICAgIGlkPVwiMlwiXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXs8Qm94PntuZXdfY3JlYXRlZFs1XX08L0JveD59XG4gICAgICAgICAgICAgICAgICAgIHNlY29uZGFyeVRpdGxlPXs8Qm94PntkZXNjcls1XX08L0JveD59XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e25ldFs2XX1cbiAgICAgICAgICAgICAgICAgICAgaWQ9XCIyXCJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9ezxCb3g+e25ld19jcmVhdGVkWzZdfTwvQm94Pn1cbiAgICAgICAgICAgICAgICAgICAgc2Vjb25kYXJ5VGl0bGU9ezxCb3g+e2Rlc2NyWzZdfTwvQm94Pn1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bmV0WzddfVxuICAgICAgICAgICAgICAgICAgICBpZD1cIjJcIlxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17PEJveD57bmV3X2NyZWF0ZWRbN119PC9Cb3g+fVxuICAgICAgICAgICAgICAgICAgICBzZWNvbmRhcnlUaXRsZT17PEJveD57ZGVzY3JbN119PC9Cb3g+fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPExpc3RJdGVtXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtuZXRbOF19XG4gICAgICAgICAgICAgICAgICAgIGlkPVwiMlwiXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXs8Qm94PntuZXdfY3JlYXRlZFs4XX08L0JveD59XG4gICAgICAgICAgICAgICAgICAgIHNlY29uZGFyeVRpdGxlPXs8Qm94PntkZXNjcls4XX08L0JveD59XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvTGlzdD59XG5cbiAgICAgICAgICAgIDxCb3ggY3NzPXt7IHN0YWNrOiAneScsIGdhcDogJ2xhcmdlJywgbWFyZ2luOiAnbGFyZ2UnIH19PlxuICAgICAgICAgICAgICAgIHtoYXNTaWduZWRJbiAmJlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGhyZWY9e2Rvd25sb2FkRW5kcG9pbnR9IHR5cGU9XCJwcmltYXJ5XCIgY3NzPXt7IHdpZHRoOiAnZmlsbCcsIGFsaWduWDogJ2NlbnRlcicgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiPkRvd25sb2FkXG4gICAgICAgICAgICAgICAgICAgICAgICBDU1Y8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB7IWhhc1NpZ25lZEluICYmXG4gICAgICAgICAgICAgICAgICAgIDxCYW5uZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjcml0aWNhbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIllvdSBoYXZlIG5vdCBTaWduIEluXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiUGxlYXNlIHNpZ24gaW4gYmVmb3JlIHlvdSBjb250aW51ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb25zPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgaHJlZj17YXV0aFVSTH0gdGFyZ2V0PVwiX2JsYW5rXCI+QmVnaW4gQXV0aG9yaXplPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICA8L0JveD5cblxuICAgICAgICA8L0NvbnRleHRWaWV3PlxuICAgIClcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJhbGFuY2VPdmVydmlld1ZpZXc7IiwgImltcG9ydCB7XG4gICAgQm94LFxuICAgIEJ1dHRvbixcbiAgICBCYW5uZXIsXG4gICAgSW5saW5lLFxuICAgIFNldHRpbmdzVmlldyxcbn0gZnJvbSBcIkBzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay91aVwiO1xuaW1wb3J0IHR5cGUge0V4dGVuc2lvbkNvbnRleHRWYWx1ZX0gZnJvbSBcIkBzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay9jb250ZXh0XCI7XG5pbXBvcnQge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcbmNvbnN0IEFwcFNldHRpbmdzID0gKHt1c2VyQ29udGV4dCwgZW52aXJvbm1lbnR9OiBFeHRlbnNpb25Db250ZXh0VmFsdWUpID0+IHtcbiAgICBjb25zdCBbZGVhdXRoLCBzZXREZWF1dGhdID0gdXNlU3RhdGUoJycpXG4gICAgY29uc3QgY2hlY2tfdXNlciA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjUwMDAvZGVhdXRob3JpemVfdXNlci8nLCB7XG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgdXNlcl9pZDogdXNlckNvbnRleHQ/LmlkLFxuICAgICAgICAgICAgICAgIGFjY291bnRfaWQ6IHVzZXJDb250ZXh0Py5hY2NvdW50LmlkXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KS50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4gY29uc29sZS5sb2coZGF0YSkpXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgIDxTZXR0aW5nc1ZpZXcgb25TYXZlPXsoKSA9PiB7XG4gICAgICAgIH19PlxuICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICAgIGNzcz17e1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBcImNvbnRhaW5lclwiLFxuICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwibWVkaXVtXCIsXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwibGFyZ2VcIixcbiAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICA8QmFubmVyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjcml0aWNhbFwiXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiUmVtb3ZlIEF1dGhvcml6YXRpb25cIlxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIllvdSB3aWxsIG5vIGxvbmdlciBhYmxlIHRvIGFjY2VzcyB5b3VyIGRhdGEgdGhyb3VnaCBBcHBcIlxuICAgICAgICAgICAgICAgICAgICBhY3Rpb25zPXtcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25QcmVzcz17Y2hlY2tfdXNlcn0gdHlwZT1cImRlc3RydWN0aXZlXCI+UmVtb3ZlIEF1dGhvcml6YXRpb248L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9TZXR0aW5nc1ZpZXc+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFwcFNldHRpbmdzO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxVQUFBLFVBQUEsVUFBQTtBQUVhLGNBQUEsYUFBWSxHQUFBLFFBQUEsNEJBR3ZCLFdBQVc7QUFHQSxjQUFBLGlCQUFnQixHQUFBLFFBQUEsNEJBRzNCLGlCQUFpQjtRQUNqQixlQUFlLENBQUMsU0FBUyxZQUFZLFNBQVMsU0FBUztPQUN4RDtBQUdZLGNBQUEsU0FBUSxH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QUFBLEtBQUE7TUFBSSxFQUFBLENBQUE7QUFDSixhQUFBLGVBQUEsU0FBQSxZQUFBLEVBQUEsWUFBQSxNQUFBLEtBQUEsV0FBQTtBQUFBLGVBQUEsS0FBQTtNQUFRLEVBQUEsQ0FBQTtBQUNSLGFBQUEsZUFBQSxTQUFBLFFBQUEsRUFBQSxZQUFBLE1BQUEsS0FBQSxXQUFBO0FBQUEsZUFBQSxLQUFBO01BQUksRUFBQSxDQUFBO0FBQ0osYUFBQSxlQUFBLFNBQUEsYUFBQSxFQUFBLFlBQUEsTUFBQSxLQUFBLFdBQUE7QUFBQSxlQUFBLEtBQUE7TUFBUyxFQUFBLENBQUE7QUFDVCxhQUFBLGVBQUEsU0FBQSxZQUFBLEVBQUEsWUFBQSxNQUFBLEtBQUEsV0FBQTtBQUFBLGVBQUEsS0FBQTtNQUFRLEVBQUEsQ0FBQTtBQUtSLGFBQUEsZUFBQSxTQUFBLFdBQUEsRUFBQSxZQUFBLE1BQUEsS0FBQSxXQUFBO0FBQUEsZUFBQSxLQUFBO01BQU8sRUFBQSxDQUFBO0FBRVAsYUFBQSxlQUFBLFNBQUEsT0FBQSxFQUFBLFlBQUEsTUFBQSxLQUFBLFdBQUE7QUFBQSxlQUFBLEtBQUE7TUFBRyxFQUFBLENBQUE7QUFDSCxhQUFBLGVBQUEsU0FBQSxXQUFBLEVBQUEsWUFBQSxNQUFBLEtBQUEsV0FBQTtBQUFBLGVBQUEsS0FBQTtNQUFPLEVBQUEsQ0FBQTtBQUNQLGFBQUEsZUFBQSxTQUFBLFlBQUEsRUFBQSxZQUFBLE1BQUEsS0FBQSxXQUFBO0FBQUEsZUFBQSxLQUFBO01BQVEsRUFBQSxDQUFBO0FBQ1IsYUFBQSxlQUFBLFNBQUEsYUFBQSxFQUFBLFlBQUEsTUFBQSxLQUFBLFdBQUE7QUFBQSxlQUFBLEtBQUE7TUFBUyxFQUFBLENBQUE7QUFDVCxhQUFBLGVBQUEsU0FBQSxTQUFBLEVBQUEsWUFBQSxNQUFBLEtBQUEsV0FBQTtBQUFBLGVBQUEsS0FBQTtNQUFLLEVBQUEsQ0FBQTtBQUNMLGFBQUEsZUFBQSxTQUFBLGFBQUEsRUFBQSxZQUFBLE1BQUEsS0FBQSxXQUFBO0FBQUEsZUFBQSxLQUFBO01BQVMsRUFBQSxDQUFBO0FBQ1QsYUFBQSxlQUFBLFNBQUEsYUFBQSxFQUFBLFlBQUEsTUFBQSxLQUFBLFdBQUE7QUFBQSxlQUFBLEtBQUE7TUFBUyxFQUFBLENBQUE7QUFDVCxhQUFBLGVBQUEsU0FBQSxlQUFBLEVBQUEsWUFBQSxNQUFBLEtBQUEsV0FBQTtBQUFBLGVBQUEsS0FBQTtNQUFXLEVBQUEsQ0FBQTtBQUNYLGFBQUEsZUFBQSxTQUFBLGFBQUEsRUFBQSxZQUFBLE1BQUEsS0FBQSxXQUFBO0FBQUEsZUFBQSxLQUFBO01BQVMsRUFBQSxDQUFBO0FBQ1QsYUFBQSxlQUFBLFNBQUEsbUJBQUEsRUFBQSxZQUFBLE1BQUEsS0FBQSxXQUFBO0FBQUEsZUFBQSxLQUFBO01BQWUsRUFBQSxDQUFBO0FBQ2YsYUFBQSxlQUFBLFNBQUEsWUFBQSxFQUFBLFlBQUEsTUFBQSxLQUFBLFdBQUE7QUFBQSxlQUFBLEtBQUE7TUFBUSxFQUFBLENBQUE7QUFDUixhQUFBLGVBQUEsU0FBQSxRQUFBLEVBQUEsWUFBQSxNQUFBLEtBQUEsV0FBQTtBQUFBLGVBQUEsS0FBQTtNQUFJLEVBQUEsQ0FBQTtBQUlKLGFBQUEsZUFBQSxTQUFBLFdBQUEsRUFBQSxZQUFBLE1BQUEsS0FBQSxXQUFBO0FBQUEsZUFBQSxLQUFBO01BQU8sRUFBQSxDQUFBO0FBRVQsbUJBQUEsdUNBQUEsT0FBQTtBQUNBLFVBQUEsc0JBQUE7QUFDRSxhQUFBLGVBQUEsU0FBQSxPQUFBLEVBQUEsWUFBQSxNQUFBLEtBQUEsV0FBQTtBQUFBLGVBQUEsb0JBQUE7TUFBRyxFQUFBLENBQUE7QUFDSCxhQUFBLGVBQUEsU0FBQSxVQUFBLEVBQUEsWUFBQSxNQUFBLEtBQUEsV0FBQTtBQUFBLGVBQUEsb0JBQUE7TUFBTSxFQUFBLENBQUE7QUFDTixhQUFBLGVBQUEsU0FBQSxZQUFBLEVBQUEsWUFBQSxNQUFBLEtBQUEsV0FBQTtBQUFBLGVBQUEsb0JBQUE7TUFBUSxFQUFBLENBQUE7QUFDUixhQUFBLGVBQUEsU0FBQSxhQUFBLEVBQUEsWUFBQSxNQUFBLEtBQUEsV0FBQTtBQUFB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SyxVQUFVO0FBQUEsVUFDakIsU0FBUywyQ0FBYTtBQUFBLFVBQ3RCLFlBQVksMkNBQWEsUUFBUTtBQUFBLFFBQ3JDLENBQUM7QUFBQSxNQUNMLENBQUMsRUFBRSxLQUFLLGNBQVksU0FBUyxLQUFLLENBQUMsRUFDOUIsS0FBSyxDQUFBQyxVQUFRLFFBQVEsSUFBSUEsS0FBSSxDQUFDO0FBQUEsSUFDdkM7QUFDQSxXQUNJLDZDQUFDO0FBQUEsTUFBYSxRQUFRLE1BQU07QUFBQSxNQUM1QjtBQUFBLE1BQ0ksdURBQUM7QUFBQSxRQUNHLEtBQUs7QUFBQSxVQUNELFlBQVk7QUFBQSxVQUNaLGNBQWM7QUFBQSxVQUNkLFNBQVM7QUFBQSxRQUNiO0FBQUEsUUFDQSx1REFBQztBQUFBLFVBQ0csTUFBSztBQUFBLFVBQ0wsT0FBTTtBQUFBLFVBQ04sYUFBWTtBQUFBLFVBQ1osU0FDSSw2Q0FBQztBQUFBLFlBQU8sU0FBUztBQUFBLFlBQVksTUFBSztBQUFBLFlBQWM7QUFBQSxXQUFvQjtBQUFBLFNBRTVFO0FBQUEsT0FDSjtBQUFBLEtBQ0o7QUFBQSxFQUVSO0FBRUEsTUFBTyxzQkFBUTs7O0FIckNmLCtCQUFjO0FBQ1AsTUFBTSxhQUFhO0FBVzFCLE1BQU8sbUJBQVE7QUFBQSxJQUNiLE1BQU07QUFBQSxJQUNOLFdBQVc7QUFBQSxJQUNYLFFBQVE7QUFBQSxJQUNSLFFBQVE7QUFBQSxJQUNSLGVBQWU7QUFBQSxNQUNiO0FBQUEsUUFDRSxjQUFjO0FBQUEsUUFDZCxXQUFXO0FBQUEsTUFDYjtBQUFBLElBQ0Y7QUFBQSxJQUNBLGVBQWU7QUFBQSxNQUNiLFlBQVk7QUFBQSxJQUNkO0FBQUEsSUFDQSxnQkFBZ0I7QUFBQSxNQUNkLFNBQVM7QUFBQSxRQUNQO0FBQUEsVUFDRSxZQUFZO0FBQUEsVUFDWixhQUFhO0FBQUEsUUFDZjtBQUFBLFFBQ0E7QUFBQSxVQUNFLFlBQVk7QUFBQSxVQUNaLGFBQWE7QUFBQSxRQUNmO0FBQUEsUUFDQTtBQUFBLFVBQ0UsWUFBWTtBQUFBLFVBQ1osYUFBYTtBQUFBLFFBQ2Y7QUFBQSxNQUNGO0FBQUEsTUFDQSxXQUFXLENBQUM7QUFBQSxNQUNaLDJCQUEyQjtBQUFBLFFBQ3pCLGVBQWU7QUFBQSxRQUNmLGFBQWE7QUFBQSxRQUNiLFdBQVc7QUFBQSxNQUNiO0FBQUEsSUFDRjtBQUFBLElBQ0EsdUJBQXVCO0FBQUEsSUFDdkIsYUFBYTtBQUFBLEVBQ2Y7IiwKICAibmFtZXMiOiBbImNyZWF0ZU9BdXRoU3RhdGUiLCAiZmV0Y2hTdHJpcGVTaWduYXR1cmUiLCAiZmV0Y2hTdHJpcGVTaWduYXR1cmUiLCAiZGF0YSIsICJpbXBvcnRfdWkiLCAiaW1wb3J0X29hdXRoIiwgImltcG9ydF9zaWduYXR1cmUiLCAiaW1wb3J0X2pzeF9ydW50aW1lIiwgImdldEF1dGhVUkwiLCAiZGF0YSIsICJmZXRjaFN0cmlwZVNpZ25hdHVyZSIsICJpbXBvcnRfdWkiLCAiaW1wb3J0X3JlYWN0IiwgImltcG9ydF9qc3hfcnVudGltZSIsICJkYXRhIl0KfQo=
