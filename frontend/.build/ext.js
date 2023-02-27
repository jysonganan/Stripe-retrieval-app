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
      var createOAuthState2 = (state = "") => {
        return (0, _endpoint_1.getHostEndpoint)().call.createOAuthState(state);
      };
      exports.createOAuthState = createOAuthState2;
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
      var fetchStripeSignature2 = (additionalPayload) => {
        return (0, _endpoint_1.getHostEndpoint)().call.fetchStripeSignature(additionalPayload);
      };
      exports.fetchStripeSignature = fetchStripeSignature2;
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
  var getAuthURL = (state, challenge, mode) => `http://localhost:5000/get-oauth-link/?response_type=code&client&redirect&state=${state}&code_challenge=${challenge}&code_challenge_method=S256`;
  var OAuthApp = ({ environment, userContext }) => {
    const { mode } = environment;
    const [authURL, setAuthURL] = useState("");
    const [stripeStatus, setStripeStatus] = useState("down");
    const [result, setResult] = useState(null);
    const [hasSignedIn, setHasSignedIn] = useState(false);
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
      }).then((response) => response.json()).then((data2) => setHasSignedIn(data2.hasSignedIn));
      console.log(hasSignedIn);
      setStripeStatus(hasSignedIn ? "up" : "down");
    });
    const getPayoutsDetails = () => __async(void 0, null, function* () {
      const data = yield fetch("http://localhost:5000/get_customers/", {
        method: "GET",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({
          account_id: userContext == null ? void 0 : userContext.account.id
        })
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
        !hasSignedIn && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.Button, {
          type: "primary",
          href: authURL,
          target: "_blank",
          children: "Begin Authorize"
        })
      ]
    });
  };
  var App_default = OAuthApp;

  // src/views/BalanceOverviewView.tsx
  var import_ui2 = __toESM(require_ui2());
  var import_react = __require("react");
  var import_jsx_runtime2 = __require("react/jsx-runtime");
  var BalanceOverviewView = ({ userContext, environment }) => {
    let viewData = {};
    const [data, setMyData] = (0, import_react.useState)([]);
    (0, import_react.useEffect)(() => {
      fetch("http://localhost:5000/get_payouts/", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ account_id: userContext == null ? void 0 : userContext.account.id })
      }).then((response) => response.json()).then((data2) => {
        setMyData(JSON.parse(data2));
      });
    }, []);
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
    let new_created = created.map((create) => new Date(created[0]).toLocaleString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    }));
    console.log(new_created);
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_ui2.ContextView, {
      title: "User Details",
      children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_ui2.List, {
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
      })
    });
  };
  var BalanceOverviewView_default = BalanceOverviewView;

  // .build/manifest.js
  __reExport(manifest_exports, __toESM(require_version()));
  var BUILD_TIME = "2023-02-27 21:57:56.961690104 +0530 IST m=+0.066777887";
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0BzdHJpcGUvc3JjL3VpL0BzYWlsL3VpL2luZGV4LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9Ac3RyaXBlL3NyYy91aS9Ac3RyaXBlLWludGVybmFsL3RhaWxvci1kYXNoYm9hcmQtY29tcG9uZW50cy9pbmRleC50cyIsICIuLi9ub2RlX21vZHVsZXMvQHN0cmlwZS9zcmMvdWkvbWFudWFsX2NvbXBvbmVudHMudHMiLCAiLi4vbm9kZV9tb2R1bGVzL0BzdHJpcGUvc3JjL3VpL2luZGV4LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9pbnZhcmlhbnQvYnJvd3Nlci5qcyIsICIuLi9ub2RlX21vZHVsZXMvQHN0cmlwZS9zcmMvdXRpbHMvX2VuZHBvaW50LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9Ac3RyaXBlL3NyYy91dGlscy9vYXV0aC50cyIsICIuLi9ub2RlX21vZHVsZXMvQHN0cmlwZS9zcmMvb2F1dGgudHMiLCAiLi4vbm9kZV9tb2R1bGVzL0BzdHJpcGUvc3JjL3V0aWxzL3NpZ25hdHVyZS50cyIsICIuLi9ub2RlX21vZHVsZXMvQHN0cmlwZS9zcmMvc2lnbmF0dXJlLnRzIiwgIi4uL25vZGVfbW9kdWxlcy9Ac3RyaXBlL3NyYy92ZXJzaW9uLnRzIiwgIm1hbmlmZXN0LmpzIiwgIi4uL3NyYy92aWV3cy9BcHAudHN4IiwgIi4uL3NyYy92aWV3cy9CYWxhbmNlT3ZlcnZpZXdWaWV3LnRzeCJdLAogICJzb3VyY2VzQ29udGVudCI6IFtudWxsLCBudWxsLCBudWxsLCBudWxsLCAiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogVXNlIGludmFyaWFudCgpIHRvIGFzc2VydCBzdGF0ZSB3aGljaCB5b3VyIHByb2dyYW0gYXNzdW1lcyB0byBiZSB0cnVlLlxuICpcbiAqIFByb3ZpZGUgc3ByaW50Zi1zdHlsZSBmb3JtYXQgKG9ubHkgJXMgaXMgc3VwcG9ydGVkKSBhbmQgYXJndW1lbnRzXG4gKiB0byBwcm92aWRlIGluZm9ybWF0aW9uIGFib3V0IHdoYXQgYnJva2UgYW5kIHdoYXQgeW91IHdlcmVcbiAqIGV4cGVjdGluZy5cbiAqXG4gKiBUaGUgaW52YXJpYW50IG1lc3NhZ2Ugd2lsbCBiZSBzdHJpcHBlZCBpbiBwcm9kdWN0aW9uLCBidXQgdGhlIGludmFyaWFudFxuICogd2lsbCByZW1haW4gdG8gZW5zdXJlIGxvZ2ljIGRvZXMgbm90IGRpZmZlciBpbiBwcm9kdWN0aW9uLlxuICovXG5cbnZhciBpbnZhcmlhbnQgPSBmdW5jdGlvbihjb25kaXRpb24sIGZvcm1hdCwgYSwgYiwgYywgZCwgZSwgZikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhcmlhbnQgcmVxdWlyZXMgYW4gZXJyb3IgbWVzc2FnZSBhcmd1bWVudCcpO1xuICAgIH1cbiAgfVxuXG4gIGlmICghY29uZGl0aW9uKSB7XG4gICAgdmFyIGVycm9yO1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoXG4gICAgICAgICdNaW5pZmllZCBleGNlcHRpb24gb2NjdXJyZWQ7IHVzZSB0aGUgbm9uLW1pbmlmaWVkIGRldiBlbnZpcm9ubWVudCAnICtcbiAgICAgICAgJ2ZvciB0aGUgZnVsbCBlcnJvciBtZXNzYWdlIGFuZCBhZGRpdGlvbmFsIGhlbHBmdWwgd2FybmluZ3MuJ1xuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGFyZ3MgPSBbYSwgYiwgYywgZCwgZSwgZl07XG4gICAgICB2YXIgYXJnSW5kZXggPSAwO1xuICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoXG4gICAgICAgIGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbigpIHsgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107IH0pXG4gICAgICApO1xuICAgICAgZXJyb3IubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICB9XG5cbiAgICBlcnJvci5mcmFtZXNUb1BvcCA9IDE7IC8vIHdlIGRvbid0IGNhcmUgYWJvdXQgaW52YXJpYW50J3Mgb3duIGZyYW1lXG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gaW52YXJpYW50O1xuIiwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgIlxuXG5pbXBvcnQgQXBwIGZyb20gJy4uL3NyYy92aWV3cy9BcHAnO1xuXG5pbXBvcnQgQmFsYW5jZU92ZXJ2aWV3VmlldyBmcm9tICcuLi9zcmMvdmlld3MvQmFsYW5jZU92ZXJ2aWV3Vmlldyc7XG5cblxuZXhwb3J0ICogZnJvbSAnQHN0cmlwZS91aS1leHRlbnNpb24tc2RrL3ZlcnNpb24nO1xuZXhwb3J0IGNvbnN0IEJVSUxEX1RJTUUgPSAnMjAyMy0wMi0yNyAyMTo1Nzo1Ni45NjE2OTAxMDQgKzA1MzAgSVNUIG09KzAuMDY2Nzc3ODg3J1xuXG5leHBvcnQge1xuXHRcblx0QXBwLFxuXHRcblx0QmFsYW5jZU92ZXJ2aWV3Vmlldyxcblx0XG59O1xuZXhwb3J0IGRlZmF1bHQge1xuICBcImlkXCI6IFwiY29tLmV4YW1wbGUuYmFzaWMtb2F1dGgyLXRlc3RcIixcbiAgXCJ2ZXJzaW9uXCI6IFwiMC4wLjJcIixcbiAgXCJuYW1lXCI6IFwiQmFzaWMtT0F1dGgyIFRlc3RcIixcbiAgXCJpY29uXCI6IFwiXCIsXG4gIFwicGVybWlzc2lvbnNcIjogW1xuICAgIHtcbiAgICAgIFwicGVybWlzc2lvblwiOiBcInNlY3JldF93cml0ZVwiLFxuICAgICAgXCJwdXJwb3NlXCI6IFwiQWxsb3dzIHN0b3Jpbmcgc2VjcmV0cyBiZXR3ZWVuIHBhZ2UgcmVsb2Fkc1wiXG4gICAgfVxuICBdLFxuICBcImFwcF9iYWNrZW5kXCI6IHtcbiAgICBcIndlYmhvb2tzXCI6IG51bGxcbiAgfSxcbiAgXCJ1aV9leHRlbnNpb25cIjoge1xuICAgIFwidmlld3NcIjogW1xuICAgICAge1xuICAgICAgICBcInZpZXdwb3J0XCI6IFwic3RyaXBlLmRhc2hib2FyZC5ob21lLm92ZXJ2aWV3XCIsXG4gICAgICAgIFwiY29tcG9uZW50XCI6IFwiQXBwXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwidmlld3BvcnRcIjogXCJzdHJpcGUuZGFzaGJvYXJkLmJhbGFuY2Uub3ZlcnZpZXdcIixcbiAgICAgICAgXCJjb21wb25lbnRcIjogXCJCYWxhbmNlT3ZlcnZpZXdWaWV3XCJcbiAgICAgIH1cbiAgICBdLFxuICAgIFwiYWN0aW9uc1wiOiBbXSxcbiAgICBcImNvbnRlbnRfc2VjdXJpdHlfcG9saWN5XCI6IHtcbiAgICAgIFwiY29ubmVjdC1zcmNcIjogbnVsbCxcbiAgICAgIFwiaW1hZ2Utc3JjXCI6IG51bGwsXG4gICAgICBcInB1cnBvc2VcIjogXCJcIlxuICAgIH1cbiAgfSxcbiAgXCJwb3N0X2luc3RhbGxfYWN0aW9uXCI6IG51bGwsXG4gIFwiY29uc3RhbnRzXCI6IG51bGxcbn1cbiIsICJpbXBvcnQge0NvbnRleHRWaWV3LCBCdXR0b24sIEJveCwgTGlua30gZnJvbSAnQHN0cmlwZS91aS1leHRlbnNpb24tc2RrL3VpJztcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7Y3JlYXRlT0F1dGhTdGF0ZX0gZnJvbSAnQHN0cmlwZS91aS1leHRlbnNpb24tc2RrL29hdXRoJztcbmltcG9ydCB0eXBlIHtFeHRlbnNpb25Db250ZXh0VmFsdWV9IGZyb20gJ0BzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay9jb250ZXh0JztcbmltcG9ydCBmZXRjaFN0cmlwZVNpZ25hdHVyZSBmcm9tICdAc3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvc2lnbmF0dXJlJztcblxuXG5jb25zdCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gPSBSZWFjdDtcblxuXG5jb25zdCBCQUNLRU5EX1VSTCA9ICdodHRwOi8vbG9jYWxob3N0OjUwMDAvdmFsaWRhdGV1c2VyLyc7XG5cbmNvbnN0IGdldFJlZGlyZWN0VVJMID0gKG1vZGU6ICdsaXZlJyB8ICd0ZXN0JykgPT4gYGh0dHBzOi8vZGFzaGJvYXJkLnN0cmlwZS5jb20vJHttb2RlID09PSAndGVzdCcgPyAndGVzdC8nIDogJyd9YXBwcy1vYXV0aC9jb20uZXhhbXBsZS5vYXV0aC1leGFtcGxlYDtcblxuY29uc3QgZ2V0QXV0aFVSTCA9IChzdGF0ZTogc3RyaW5nLCBjaGFsbGVuZ2U6IHN0cmluZywgbW9kZTogJ2xpdmUnIHwgJ3Rlc3QnKSA9PlxuICAgIGBodHRwOi8vbG9jYWxob3N0OjUwMDAvZ2V0LW9hdXRoLWxpbmsvP3Jlc3BvbnNlX3R5cGU9Y29kZSZjbGllbnQmcmVkaXJlY3Qmc3RhdGU9JHtzdGF0ZX0mY29kZV9jaGFsbGVuZ2U9JHtjaGFsbGVuZ2V9JmNvZGVfY2hhbGxlbmdlX21ldGhvZD1TMjU2YDtcblxuXG5jb25zdCBPQXV0aEFwcCA9ICh7ZW52aXJvbm1lbnQsIHVzZXJDb250ZXh0fTogRXh0ZW5zaW9uQ29udGV4dFZhbHVlKSA9PiB7XG4gICAgY29uc3Qge21vZGV9ID0gZW52aXJvbm1lbnQ7XG4gICAgY29uc3QgW2F1dGhVUkwsIHNldEF1dGhVUkxdID0gdXNlU3RhdGUoJycpO1xuICAgIC8vIGNvbnN0IFtoYXNTaWduZWRJbiwgc2V0aGFzU2lnbmVkSW5dID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuICAgIGNvbnN0IFtzdHJpcGVTdGF0dXMsIHNldFN0cmlwZVN0YXR1c10gPSB1c2VTdGF0ZTxzdHJpbmc+KCdkb3duJyk7XG4gICAgY29uc3QgW3Jlc3VsdCwgc2V0UmVzdWx0XSA9IHVzZVN0YXRlKG51bGwpXG4gICAgY29uc3QgW2hhc1NpZ25lZEluLCBzZXRIYXNTaWduZWRJbl0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gICAgY29uc3QgZ2V0U3RhdHVzID0gYXN5bmMgKCkgPT57XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo1MDAwL2hlYWx0aC1jaGVjaycsIHtcbiAgICAgICAgICAgIG1ldGhvZDpcIlBPU1RcIixcbiAgICAgICAgICAgIGhlYWRlcnM6e1xuICAgICAgICAgICAgICAgICdzdHJpcGUtc2lnbmF0dXJlJzogYXdhaXQgZmV0Y2hTdHJpcGVTaWduYXR1cmUoKSxcbiAgICAgICAgICAgICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTpKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgdXNlcl9pZDogdXNlckNvbnRleHQ/LmlkLFxuICAgICAgICAgICAgICAgIGFjY291bnRfaWQ6IHVzZXJDb250ZXh0Py5hY2NvdW50LmlkXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KS50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4gc2V0SGFzU2lnbmVkSW4oZGF0YS5oYXNTaWduZWRJbikpXG4gICAgICAgIGNvbnNvbGUubG9nKGhhc1NpZ25lZEluKVxuXG5cbiAgICAgICAgc2V0U3RyaXBlU3RhdHVzKGhhc1NpZ25lZEluPyAndXAnOiAnZG93bicpXG5cbiAgICAgICAgLy8gc2V0U3RyaXBlU3RhdHVzKHN0YXR1cyA9PSAnT0snPyAndXAnOiAnZG93bicpXG4gICAgfVxuICAgIGNvbnN0IGdldFBheW91dHNEZXRhaWxzID0gYXN5bmMgKCkgPT57XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo1MDAwL2dldF9jdXN0b21lcnMvJywge1xuICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICAgICAgaGVhZGVyczp7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6SlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIGFjY291bnRfaWQ6IHVzZXJDb250ZXh0Py5hY2NvdW50LmlkXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGdldFN0YXR1cygpO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIC8vIHZhbGlkYXRlVXNlcigpO1xuICAgICAgICBpZihoYXNTaWduZWRJbil7XG4gICAgICAgICAgICAvLyBHZXR0aW5nIFBheW91dHMgRGV0YWlsc1xuICAgICAgICB9ICAgICAgICBjcmVhdGVPQXV0aFN0YXRlKCkudGhlbigoe3N0YXRlLCBjaGFsbGVuZ2V9KSA9PiB7XG4gICAgICAgICAgICBzZXRBdXRoVVJMKGdldEF1dGhVUkwoc3RhdGUsIGNoYWxsZW5nZSwgbW9kZSkpO1xuICAgICAgICB9KTtcbiAgICB9LCBbbW9kZV0pO1xuICAgIHJldHVybiAoXG5cbiAgICAgICAgPENvbnRleHRWaWV3IHRpdGxlPVwiUGF5b3V0IEFwcFtURVNUXVwiPlxuICAgICAgICAgICAgPEJveD5TdHJpcGUgaXMge3N0cmlwZVN0YXR1c308L0JveD5cbiAgICAgICAgICAgIHshaGFzU2lnbmVkSW4gJiZcblxuICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIGhyZWY9e2F1dGhVUkx9IHRhcmdldD1cIl9ibGFua1wiPkJlZ2luIEF1dGhvcml6ZTwvQnV0dG9uPlxuICAgICAgICAgICAgfVxuICAgICAgICA8L0NvbnRleHRWaWV3PlxuXG4gICAgKTtcblxuXG59O1xuZXhwb3J0IGRlZmF1bHQgT0F1dGhBcHA7XG5cblxuXG5cbiIsICJpbXBvcnQge0JveCwgQ29udGV4dFZpZXcsIElubGluZSwgTGlzdEl0ZW0sIExpc3R9IGZyb20gXCJAc3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvdWlcIjtcbmltcG9ydCB0eXBlIHtFeHRlbnNpb25Db250ZXh0VmFsdWV9IGZyb20gXCJAc3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvY29udGV4dFwiO1xuaW1wb3J0IHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgQmFsYW5jZU92ZXJ2aWV3VmlldyA9ICh7dXNlckNvbnRleHQsIGVudmlyb25tZW50fTogRXh0ZW5zaW9uQ29udGV4dFZhbHVlKSA9PiB7XG4gICAgbGV0IHZpZXdEYXRhOiBvYmplY3QgPSB7fVxuICAgIGNvbnN0IFtkYXRhLCBzZXRNeURhdGFdID0gdXNlU3RhdGUoW10pO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjUwMDAvZ2V0X3BheW91dHMvJywge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XCJDb250ZW50LXR5cGVcIjogJ2FwcGxpY2F0aW9uL2pzb24nfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHthY2NvdW50X2lkOiB1c2VyQ29udGV4dD8uYWNjb3VudC5pZH0pXG4gICAgICAgIH0pLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0TXlEYXRhKEpTT04ucGFyc2UoZGF0YSkpXG4gICAgICAgICAgICB9KVxuICAgIH0sIFtdKTtcbiAgICBsZXQgY3JlYXRlZDogbmV2ZXJbXSA9IFtdXG4gICAgbGV0IGRlc2NyOiBuZXZlcltdID0gW11cbiAgICBsZXQgYW1vdW50OiBuZXZlcltdID0gW11cbiAgICBsZXQgbmV0OiBuZXZlcltdID0gW11cbiAgICBjb25zdCB2YWx1ZXMgPSBPYmplY3QudmFsdWVzKGRhdGEpXG4gICAgZm9yIChsZXQgdmFsIGluIHZhbHVlcykge1xuICAgICAgICBjcmVhdGVkLnB1c2godmFsdWVzW3ZhbF0uQ3JlYXRlZClcbiAgICAgICAgZGVzY3IucHVzaCh2YWx1ZXNbdmFsXS5EZXNjcmlwdGlvbilcbiAgICAgICAgbmV0LnB1c2godmFsdWVzW3ZhbF0uTmV0KVxuICAgIH1cbiAgICBsZXQgbmV3X2NyZWF0ZWQgPSBjcmVhdGVkLm1hcChjcmVhdGUgPT4gbmV3IERhdGUoY3JlYXRlZFswXSkudG9Mb2NhbGVTdHJpbmcoXCJlbi1VU1wiLCB7XG4gICAgICAgIHllYXI6IFwibnVtZXJpY1wiLFxuICAgICAgICBtb250aDogXCJsb25nXCIsXG4gICAgICAgIGRheTogXCJudW1lcmljXCIsXG4gICAgfSkpXG5cbiAgICBjb25zb2xlLmxvZyhuZXdfY3JlYXRlZClcblxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPENvbnRleHRWaWV3IHRpdGxlPVwiVXNlciBEZXRhaWxzXCI+XG4gICAgICAgICAgICA8TGlzdD5cbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e25ldFswXX1cbiAgICAgICAgICAgICAgICAgICAgaWQ9XCIyXCJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9ezxCb3g+e25ld19jcmVhdGVkWzBdfTwvQm94Pn1cbiAgICAgICAgICAgICAgICAgICAgc2Vjb25kYXJ5VGl0bGU9ezxCb3g+e2Rlc2NyWzBdfTwvQm94Pn1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bmV0WzFdfVxuICAgICAgICAgICAgICAgICAgICBpZD1cIjJcIlxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17PEJveD57bmV3X2NyZWF0ZWRbMV19PC9Cb3g+fVxuICAgICAgICAgICAgICAgICAgICBzZWNvbmRhcnlUaXRsZT17PEJveD57ZGVzY3JbMV19PC9Cb3g+fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPExpc3RJdGVtXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtuZXRbMl19XG4gICAgICAgICAgICAgICAgICAgIGlkPVwiMlwiXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXs8Qm94PntuZXdfY3JlYXRlZFsyXX08L0JveD59XG4gICAgICAgICAgICAgICAgICAgIHNlY29uZGFyeVRpdGxlPXs8Qm94PntkZXNjclsyXX08L0JveD59XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e25ldFszXX1cbiAgICAgICAgICAgICAgICAgICAgaWQ9XCIyXCJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9ezxCb3g+e25ld19jcmVhdGVkWzNdfTwvQm94Pn1cbiAgICAgICAgICAgICAgICAgICAgc2Vjb25kYXJ5VGl0bGU9ezxCb3g+e2Rlc2NyWzNdfTwvQm94Pn1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bmV0WzRdfVxuICAgICAgICAgICAgICAgICAgICBpZD1cIjJcIlxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17PEJveD57bmV3X2NyZWF0ZWRbNF19PC9Cb3g+fVxuICAgICAgICAgICAgICAgICAgICBzZWNvbmRhcnlUaXRsZT17PEJveD57ZGVzY3JbNF19PC9Cb3g+fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPExpc3RJdGVtXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtuZXRbNV19XG4gICAgICAgICAgICAgICAgICAgIGlkPVwiMlwiXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXs8Qm94PntuZXdfY3JlYXRlZFs1XX08L0JveD59XG4gICAgICAgICAgICAgICAgICAgIHNlY29uZGFyeVRpdGxlPXs8Qm94PntkZXNjcls1XX08L0JveD59XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e25ldFs2XX1cbiAgICAgICAgICAgICAgICAgICAgaWQ9XCIyXCJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9ezxCb3g+e25ld19jcmVhdGVkWzZdfTwvQm94Pn1cbiAgICAgICAgICAgICAgICAgICAgc2Vjb25kYXJ5VGl0bGU9ezxCb3g+e2Rlc2NyWzZdfTwvQm94Pn1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bmV0WzddfVxuICAgICAgICAgICAgICAgICAgICBpZD1cIjJcIlxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17PEJveD57bmV3X2NyZWF0ZWRbN119PC9Cb3g+fVxuICAgICAgICAgICAgICAgICAgICBzZWNvbmRhcnlUaXRsZT17PEJveD57ZGVzY3JbN119PC9Cb3g+fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPExpc3RJdGVtXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtuZXRbOF19XG4gICAgICAgICAgICAgICAgICAgIGlkPVwiMlwiXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXs8Qm94PntuZXdfY3JlYXRlZFs4XX08L0JveD59XG4gICAgICAgICAgICAgICAgICAgIHNlY29uZGFyeVRpdGxlPXs8Qm94PntkZXNjcls4XX08L0JveD59XG4gICAgICAgICAgICAgICAgLz5cblxuXG4gICAgICAgICAgICA8L0xpc3Q+XG4gICAgICAgIDwvQ29udGV4dFZpZXc+XG4gICAgKVxufTtcblxuZXhwb3J0IGRlZmF1bHQgQmFsYW5jZU92ZXJ2aWV3VmlldztcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7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LFNBQUEsV0FBQSxFQUFBLFlBQUEsTUFBQSxLQUFBLFdBQUE7QUFBQSxlQUFBLEtBQUE7TUFBTyxFQUFBLENBQUE7QUFDUCxhQUFBLGVBQUEsU0FBQSxrQkFBQSxFQUFBLFlBQUEsTUFBQSxLQUFBLFdBQUE7QUFBQSxlQUFBLEtBQUE7TUFBYyxFQUFBLENBQUE7QUFHZCxhQUFBLGVBQUEsU0FBQSxRQUFBLEVBQUEsWUFBQSxNQUFBLEtBQUEsV0FBQTtBQUFBLGVBQUEsS0FBQTtNQUFJLEVBQUEsQ0FBQTtBQUNKLGFBQUEsZUFBQSxTQUFBLFlBQUEsRUFBQSxZQUFBLE1BQUEsS0FBQSxXQUFBO0FBQUEsZUFBQSxLQUFBO01BQVEsRUFBQSxDQUFBO0FBQ1IsYUFBQSxlQUFBLFNBQUEsUUFBQSxFQUFBLFlBQUEsTUFBQSxLQUFBLFdBQUE7QUFBQSxlQUFBLEtBQUE7TUFBSSxFQUFBLENBQUE7QUFDSixhQUFBLGVBQUEsU0FBQSxhQUFBLEVBQUEsWUFBQSxNQUFBLEtBQUEsV0FBQTtBQUFBLGVBQUEsS0FBQTtNQUFTLEVBQUEsQ0FBQTtBQUNULGFBQUEsZUFBQSxTQUFBLFlBQUEsRUFBQSxZQUFBLE1BQUEsS0FBQSxXQUFBO0FBQUEsZUFBQSxLQUFBO01BQVEsRUFBQSxDQUFBO0FBS1IsYUFBQSxlQUFBLFNBQUEsV0FBQSxFQUFBLFlBQUEsTUFBQSxLQUFBLFdBQUE7QUFBQSxlQUFBLEtBQUE7TUFBTyxFQUFBLENBQUE7QUFFUCxhQUFBLGVBQUEsU0FBQSxPQUFBLEVBQUEsWUFBQSxNQUFBLEtBQUEsV0FBQTtBQUFBLGVBQUEsS0FBQTtNQUFHLEVBQUEsQ0FBQTtBQUNILGFBQUEsZUFBQSxTQUFBLFdBQUEsRUFBQSxZQUFBLE1BQUEsS0FBQSxXQUFBO0FBQUEsZUFBQSxLQUFBO01BQU8sRUFBQSxDQUFBO0FBQ1AsYUFBQSxlQUFBLFNBQUEsWUFBQSxFQUFBLFlBQUEsTUFBQSxLQUFBLFdBQUE7QUFBQSxlQUFBLEtBQUE7TUFBUSxFQUFBLENBQUE7QUFDUixhQUFBLGVBQUEsU0FBQSxhQUFBLEVBQUEsWUFBQSxNQUFBLEtBQUEsV0FBQTtBQUFBLGVBQUEsS0FBQTtNQUFTLEVBQUEsQ0FBQTtBQUNULGFBQUEsZUFBQSxTQUFBLFNBQUEsRUFBQSxZQUFBLE1BQUEsS0FBQSxXQUFBO0FBQUEsZUFBQSxLQUFBO01BQUssRUFBQSxDQUFBO0FBQ0wsYUFBQSxlQUFBLFNBQUEsYUFBQSxFQUFBLFlBQUEsTUFBQSxLQUFBLFdBQUE7QUFBQSxlQUFBLEtBQUE7TUFBUyxFQUFBLENBQUE7QUFDVCxhQUFBLGVBQUEsU0FBQSxhQUFBLEVBQUEsWUFBQSxNQUFBLEtBQUEsV0FBQTtBQUFBLGVBQUEsS0FBQTtNQUFTLEVBQUEsQ0FBQTtBQUNULGFBQUEsZUFBQSxTQUFBLGVBQUEsRUFBQSxZQUFBLE1BQUEsS0FBQSxXQUFBO0FBQUEsZUFBQSxLQUFBO01BQVcsRUFBQSxDQUFBO0FBQ1gsYUFBQSxlQUFBLFNBQUEsYUFBQSxFQUFBLFlBQUEsTUFBQSxLQUFBLFdBQUE7QUFBQSxlQUFBLEtBQUE7TUFBUyxFQUFBLENBQUE7QUFDVCxhQUFBLGVBQUEsU0FBQSxtQkFBQSxFQUFBLFlBQUEsTUFBQSxLQUFBLFdBQUE7QUFBQSxlQUFBLEtBQUE7TUFBZSxFQUFBLENBQUE7QUFDZixhQUFBLGVBQUEsU0FBQSxZQUFBLEVBQUEsWUFBQSxNQUFBLEtBQUEsV0FBQTtBQUFBLGVBQUEsS0FBQTtNQUFRLEVBQUEsQ0FBQTtBQUNSLGFBQUEsZUFBQSxTQUFBLFFBQUEsRUFBQSxZQUFBLE1BQUEsS0FBQSxXQUFBO0FBQUEsZUFBQSxLQUFBO01BQUksRUFBQSxDQUFBO0FBSUosYUFBQSxlQUFBLFNBQUEsV0FBQSxFQUFBLFlBQUEsTUFBQSxLQUFBLFdBQUE7QUFBQSxlQUFBLEtBQUE7TUFBTyxFQUFBLENBQUE7QUFFVCxtQkFBQSx1Q0FBQSxPQUFBO0FBQ0EsVUFBQSxzQkFBQTtBQUNFLGFBQUEsZUFBQSxTQUFBLE9BQUEsRUFBQSxZQUFBLE1BQUEsS0FBQSxXQUFBO0FBQUEsZUFBQSxvQkFBQTtNQUFHLEVBQUEsQ0FBQTtBQUNILGFBQUEsZUFBQSxTQUFBLFVBQUEsRUFBQSxZQUFBLE1BQUEsS0FBQSxXQUFBO0FBQUEsZUFBQSxvQkFBQTtNQUFNLEVBQUEsQ0FBQTtBQUNOLGFBQUEsZUFBQSxTQUFBLFlBQUEsRUFBQSxZQUFBLE1BQUEsS0FBQSxXQUFBO0FBQUEsZUFBQSxvQkFBQTtNQUFRLEVBQUEsQ0FBQTtBQUNSLGFBQUEsZUFBQSxTQUFBLGFBQUEsRUFBQSxZQUFBLE1BQUEsS0FBQSxXQUFBO0FBQUEsZUFBQSxvQkFBQTtNQUFTLEVBQUEsQ0FBQTtBQUNULGFBQUEsZUFBQSxTQUFBLFFBQUEsRUFBQSxZQUFBLE1BQUEsS0FBQSxXQUFBO0FBQUEsZUFBQSxvQkFBQTtNQUFJLEVBQUEsQ0FBQTtBQUNKLGFBQUEsZUFBQSxTQUFBLFVBQUEsRUFBQSxZQUFBLE1BQUEsS0FBQSxXQUFBO0FBQUEsZUFBQSxvQkFBQTtNQUFNLEVBQUEsQ0FBQTtBQUNOLGFBQUEsZUFBQSxTQUFBLFFBQUEsRUFBQSxZQUFBLE1BQUEsS0FBQSxXQUFBO0FBQUEsZUFBQSxvQkFBQTtNQUFJLEVBQUEsQ0FBQTtBQUNKLGFBQUEsZUFBQSxTQUFBLFNBQUEsRUFBQSxZQUFBLE1BQUEsS0FBQSxXQUFBO0FBQUEsZUFBQSxvQkFBQTtNQUFLLEVBQUEsQ0FBQTtBQUNMLGFBQUEsZUFBQSxTQUFBLFVBQUEsRUFBQSxZQUFBLE1BQUEsS0FBQSxXQUFBO0FBQUEsZUFBQSxvQkFBQTtNQUFNLEVBQUEsQ0FBQTtBQUNOLGFBQUEsZUFBQSxTQUFBLFVBQUEsRUFBQSxZQUFBLE1BQUEsS0FBQSxXQUFBO0FBQUEsZUFBQSxvQkFBQTtNQUFNLEVBQUEsQ0FBQTtBQUNOLGFBQUEsZUFBQSxTQUFBLFlBQUEsRUFBQSxZQUFBLE1BQUEsS0FBQSxXQUFBO0FBQUEsZUFBQSxvQkFBQTtNQUFRLEVBQUEsQ0FBQTtBQUNSLGFBQUEsZUFBQSxTQUFBLGFBQUEsRUFBQSxZQUFBLE1BQUEsS0FBQSxXQUFBO0FBQUEsZUFBQSxvQkFBQTtNQUFTLEVBQUEsQ0FBQTs7Ozs7QUN6RFg7QUFBQTtBQUFBO0FB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QSxZQUM1QixnQkFBZ0IsNkNBQUM7QUFBQSxjQUFLLGdCQUFNO0FBQUEsYUFBRztBQUFBLFdBQ25DO0FBQUEsVUFDQSw2Q0FBQztBQUFBLFlBQ0csT0FBTyxJQUFJO0FBQUEsWUFDWCxJQUFHO0FBQUEsWUFDSCxPQUFPLDZDQUFDO0FBQUEsY0FBSyxzQkFBWTtBQUFBLGFBQUc7QUFBQSxZQUM1QixnQkFBZ0IsNkNBQUM7QUFBQSxjQUFLLGdCQUFNO0FBQUEsYUFBRztBQUFBLFdBQ25DO0FBQUEsVUFDQSw2Q0FBQztBQUFBLFlBQ0csT0FBTyxJQUFJO0FBQUEsWUFDWCxJQUFHO0FBQUEsWUFDSCxPQUFPLDZDQUFDO0FBQUEsY0FBSyxzQkFBWTtBQUFBLGFBQUc7QUFBQSxZQUM1QixnQkFBZ0IsNkNBQUM7QUFBQSxjQUFLLGdCQUFNO0FBQUEsYUFBRztBQUFBLFdBQ25DO0FBQUE7QUFBQSxPQUdKO0FBQUEsS0FDSjtBQUFBLEVBRVI7QUFFQSxNQUFPLDhCQUFROzs7QUY3RmYsK0JBQWM7QUFDUCxNQUFNLGFBQWE7QUFTMUIsTUFBTyxtQkFBUTtBQUFBLElBQ2IsTUFBTTtBQUFBLElBQ04sV0FBVztBQUFBLElBQ1gsUUFBUTtBQUFBLElBQ1IsUUFBUTtBQUFBLElBQ1IsZUFBZTtBQUFBLE1BQ2I7QUFBQSxRQUNFLGNBQWM7QUFBQSxRQUNkLFdBQVc7QUFBQSxNQUNiO0FBQUEsSUFDRjtBQUFBLElBQ0EsZUFBZTtBQUFBLE1BQ2IsWUFBWTtBQUFBLElBQ2Q7QUFBQSxJQUNBLGdCQUFnQjtBQUFBLE1BQ2QsU0FBUztBQUFBLFFBQ1A7QUFBQSxVQUNFLFlBQVk7QUFBQSxVQUNaLGFBQWE7QUFBQSxRQUNmO0FBQUEsUUFDQTtBQUFBLFVBQ0UsWUFBWTtBQUFBLFVBQ1osYUFBYTtBQUFBLFFBQ2Y7QUFBQSxNQUNGO0FBQUEsTUFDQSxXQUFXLENBQUM7QUFBQSxNQUNaLDJCQUEyQjtBQUFBLFFBQ3pCLGVBQWU7QUFBQSxRQUNmLGFBQWE7QUFBQSxRQUNiLFdBQVc7QUFBQSxNQUNiO0FBQUEsSUFDRjtBQUFBLElBQ0EsdUJBQXVCO0FBQUEsSUFDdkIsYUFBYTtBQUFBLEVBQ2Y7IiwKICAibmFtZXMiOiBbImNyZWF0ZU9BdXRoU3RhdGUiLCAiZmV0Y2hTdHJpcGVTaWduYXR1cmUiLCAiZmV0Y2hTdHJpcGVTaWduYXR1cmUiLCAiZGF0YSIsICJpbXBvcnRfdWkiLCAiaW1wb3J0X2pzeF9ydW50aW1lIiwgImRhdGEiXQp9Cg==
