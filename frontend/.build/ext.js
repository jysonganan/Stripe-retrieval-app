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
        !gotPayoutData && !gotResponse && hasSignedIn && !spinnerOpen && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_ui2.Badge, {
          type: "info",
          children: "Please Enter Month and Year Values, to view Data"
        }),
        gotPayoutData && gotResponse && !data.length && hasSignedIn && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_ui2.Badge, {
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
  var BUILD_TIME = "2023-04-11 23:18:06.009592282 +0530 IST m=+0.010966317";
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0BzdHJpcGUvc3JjL3VpL0BzYWlsL3VpL2luZGV4LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9Ac3RyaXBlL3NyYy91aS9Ac3RyaXBlLWludGVybmFsL3RhaWxvci1kYXNoYm9hcmQtY29tcG9uZW50cy9pbmRleC50cyIsICIuLi9ub2RlX21vZHVsZXMvQHN0cmlwZS9zcmMvdWkvbWFudWFsX2NvbXBvbmVudHMudHMiLCAiLi4vbm9kZV9tb2R1bGVzL0BzdHJpcGUvc3JjL3VpL2luZGV4LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9pbnZhcmlhbnQvYnJvd3Nlci5qcyIsICIuLi9ub2RlX21vZHVsZXMvQHN0cmlwZS9zcmMvdXRpbHMvX2VuZHBvaW50LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9Ac3RyaXBlL3NyYy91dGlscy9vYXV0aC50cyIsICIuLi9ub2RlX21vZHVsZXMvQHN0cmlwZS9zcmMvb2F1dGgudHMiLCAiLi4vbm9kZV9tb2R1bGVzL0BzdHJpcGUvc3JjL3V0aWxzL3NpZ25hdHVyZS50cyIsICIuLi9ub2RlX21vZHVsZXMvQHN0cmlwZS9zcmMvc2lnbmF0dXJlLnRzIiwgIi4uL25vZGVfbW9kdWxlcy9Ac3RyaXBlL3NyYy92ZXJzaW9uLnRzIiwgIm1hbmlmZXN0LmpzIiwgIi4uL3NyYy92aWV3cy9BcHAudHN4IiwgIi4uL3NyYy92aWV3cy9CYWxhbmNlT3ZlcnZpZXdWaWV3LnRzeCIsICIuLi9zcmMvdmlld3MvQXBwU2V0dGluZ3MudHN4Il0sCiAgInNvdXJjZXNDb250ZW50IjogW251bGwsIG51bGwsIG51bGwsIG51bGwsICIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBVc2UgaW52YXJpYW50KCkgdG8gYXNzZXJ0IHN0YXRlIHdoaWNoIHlvdXIgcHJvZ3JhbSBhc3N1bWVzIHRvIGJlIHRydWUuXG4gKlxuICogUHJvdmlkZSBzcHJpbnRmLXN0eWxlIGZvcm1hdCAob25seSAlcyBpcyBzdXBwb3J0ZWQpIGFuZCBhcmd1bWVudHNcbiAqIHRvIHByb3ZpZGUgaW5mb3JtYXRpb24gYWJvdXQgd2hhdCBicm9rZSBhbmQgd2hhdCB5b3Ugd2VyZVxuICogZXhwZWN0aW5nLlxuICpcbiAqIFRoZSBpbnZhcmlhbnQgbWVzc2FnZSB3aWxsIGJlIHN0cmlwcGVkIGluIHByb2R1Y3Rpb24sIGJ1dCB0aGUgaW52YXJpYW50XG4gKiB3aWxsIHJlbWFpbiB0byBlbnN1cmUgbG9naWMgZG9lcyBub3QgZGlmZmVyIGluIHByb2R1Y3Rpb24uXG4gKi9cblxudmFyIGludmFyaWFudCA9IGZ1bmN0aW9uKGNvbmRpdGlvbiwgZm9ybWF0LCBhLCBiLCBjLCBkLCBlLCBmKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFyaWFudCByZXF1aXJlcyBhbiBlcnJvciBtZXNzYWdlIGFyZ3VtZW50Jyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKCFjb25kaXRpb24pIHtcbiAgICB2YXIgZXJyb3I7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBlcnJvciA9IG5ldyBFcnJvcihcbiAgICAgICAgJ01pbmlmaWVkIGV4Y2VwdGlvbiBvY2N1cnJlZDsgdXNlIHRoZSBub24tbWluaWZpZWQgZGV2IGVudmlyb25tZW50ICcgK1xuICAgICAgICAnZm9yIHRoZSBmdWxsIGVycm9yIG1lc3NhZ2UgYW5kIGFkZGl0aW9uYWwgaGVscGZ1bCB3YXJuaW5ncy4nXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgYXJncyA9IFthLCBiLCBjLCBkLCBlLCBmXTtcbiAgICAgIHZhciBhcmdJbmRleCA9IDA7XG4gICAgICBlcnJvciA9IG5ldyBFcnJvcihcbiAgICAgICAgZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJnc1thcmdJbmRleCsrXTsgfSlcbiAgICAgICk7XG4gICAgICBlcnJvci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgIH1cblxuICAgIGVycm9yLmZyYW1lc1RvUG9wID0gMTsgLy8gd2UgZG9uJ3QgY2FyZSBhYm91dCBpbnZhcmlhbnQncyBvd24gZnJhbWVcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBpbnZhcmlhbnQ7XG4iLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAiXG5cbmltcG9ydCBBcHAgZnJvbSAnLi4vc3JjL3ZpZXdzL0FwcCc7XG5cbmltcG9ydCBCYWxhbmNlT3ZlcnZpZXdWaWV3IGZyb20gJy4uL3NyYy92aWV3cy9CYWxhbmNlT3ZlcnZpZXdWaWV3JztcblxuaW1wb3J0IEFwcFNldHRpbmdzIGZyb20gJy4uL3NyYy92aWV3cy9BcHBTZXR0aW5ncyc7XG5cblxuZXhwb3J0ICogZnJvbSAnQHN0cmlwZS91aS1leHRlbnNpb24tc2RrL3ZlcnNpb24nO1xuZXhwb3J0IGNvbnN0IEJVSUxEX1RJTUUgPSAnMjAyMy0wNC0xMSAyMzoxODowNi4wMDk1OTIyODIgKzA1MzAgSVNUIG09KzAuMDEwOTY2MzE3J1xuXG5leHBvcnQge1xuXHRcblx0QXBwLFxuXHRcblx0QmFsYW5jZU92ZXJ2aWV3Vmlldyxcblx0XG5cdEFwcFNldHRpbmdzLFxuXHRcbn07XG5leHBvcnQgZGVmYXVsdCB7XG4gIFwiaWRcIjogXCJjb20uZXhhbXBsZS5zdHJpcGUtYXBwXy1wYXlvdXRcIixcbiAgXCJ2ZXJzaW9uXCI6IFwiMC4wLjJcIixcbiAgXCJuYW1lXCI6IFwiU3RyaXBlUmV0cmlldmFsQXBwXCIsXG4gIFwiaWNvblwiOiBcIlwiLFxuICBcInBlcm1pc3Npb25zXCI6IFtcbiAgICB7XG4gICAgICBcInBlcm1pc3Npb25cIjogXCJzZWNyZXRfd3JpdGVcIixcbiAgICAgIFwicHVycG9zZVwiOiBcIkFsbG93cyBzdG9yaW5nIHNlY3JldHMgYmV0d2VlbiBwYWdlIHJlbG9hZHNcIlxuICAgIH1cbiAgXSxcbiAgXCJhcHBfYmFja2VuZFwiOiB7XG4gICAgXCJ3ZWJob29rc1wiOiBudWxsXG4gIH0sXG4gIFwidWlfZXh0ZW5zaW9uXCI6IHtcbiAgICBcInZpZXdzXCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJ2aWV3cG9ydFwiOiBcInN0cmlwZS5kYXNoYm9hcmQuaG9tZS5vdmVydmlld1wiLFxuICAgICAgICBcImNvbXBvbmVudFwiOiBcIkFwcFwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcInZpZXdwb3J0XCI6IFwic3RyaXBlLmRhc2hib2FyZC5iYWxhbmNlLm92ZXJ2aWV3XCIsXG4gICAgICAgIFwiY29tcG9uZW50XCI6IFwiQmFsYW5jZU92ZXJ2aWV3Vmlld1wiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcInZpZXdwb3J0XCI6IFwic2V0dGluZ3NcIixcbiAgICAgICAgXCJjb21wb25lbnRcIjogXCJBcHBTZXR0aW5nc1wiXG4gICAgICB9XG4gICAgXSxcbiAgICBcImNvbnRlbnRfc2VjdXJpdHlfcG9saWN5XCI6IHtcbiAgICAgIFwiY29ubmVjdC1zcmNcIjogW1xuICAgICAgICBcImh0dHBzOi8vc3RyaXBlLWJhY2tlbmQtazdiNC1qYXlhdGVlcnRoZGFtYmFsLnZlcmNlbC5hcHAvaGVhbHRoLWNoZWNrL1wiLFxuICAgICAgICBcImh0dHBzOi8vc3RyaXBlLWJhY2tlbmQtazdiNC1qYXlhdGVlcnRoZGFtYmFsLnZlcmNlbC5hcHAvZ2V0LW9hdXRoLWxpbmsvXCIsXG4gICAgICAgIFwiaHR0cHM6Ly9zdHJpcGUtYmFja2VuZC1rN2I0LWpheWF0ZWVydGhkYW1iYWwudmVyY2VsLmFwcC9hdXRob3JpemVfb2F1dGgvXCIsXG4gICAgICAgIFwiaHR0cHM6Ly9zdHJpcGUtYmFja2VuZC1rN2I0LWpheWF0ZWVydGhkYW1iYWwudmVyY2VsLmFwcC9nZXRfcGF5b3V0cy9cIixcbiAgICAgICAgXCJodHRwczovL3N0cmlwZS1iYWNrZW5kLWs3YjQtamF5YXRlZXJ0aGRhbWJhbC52ZXJjZWwuYXBwL2Rvd25sb2FkLXJlcG9ydC9cIixcbiAgICAgICAgXCJodHRwczovL3N0cmlwZS1iYWNrZW5kLWs3YjQtamF5YXRlZXJ0aGRhbWJhbC52ZXJjZWwuYXBwL2NoZWNrLXVzZXIvXCIsXG4gICAgICAgIFwiaHR0cHM6Ly9zdHJpcGUtYmFja2VuZC1rN2I0LWpheWF0ZWVydGhkYW1iYWwudmVyY2VsLmFwcC9kZWF1dGhvcml6ZV91c2VyL1wiXG4gICAgICBdLFxuICAgICAgXCJpbWFnZS1zcmNcIjogbnVsbCxcbiAgICAgIFwicHVycG9zZVwiOiBcIlNlbmQgRGF0YSB0byBWZXJjZWxEZXBsb3lcIlxuICAgIH1cbiAgfSxcbiAgXCJjb25zdGFudHNcIjoge1xuICAgIFwiQkFDS0VORF9VUkxcIjogXCJodHRwczovL3N0cmlwZS1iYWNrZW5kLWs3YjQtamF5YXRlZXJ0aGRhbWJhbC52ZXJjZWwuYXBwL1wiXG4gIH1cbn1cbiIsICJpbXBvcnQge1xuICAgIENvbnRleHRWaWV3LFxuICAgIEJ1dHRvbixcbiAgICBCb3gsXG4gICAgQmFkZ2UsXG4gICAgQmFubmVyLFxuICAgIFNwaW5uZXJcbn0gZnJvbSAnQHN0cmlwZS91aS1leHRlbnNpb24tc2RrL3VpJztcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNyZWF0ZU9BdXRoU3RhdGUgfSBmcm9tICdAc3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvb2F1dGgnO1xuaW1wb3J0IHR5cGUgeyBFeHRlbnNpb25Db250ZXh0VmFsdWUgfSBmcm9tICdAc3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvY29udGV4dCc7XG5pbXBvcnQgZmV0Y2hTdHJpcGVTaWduYXR1cmUgZnJvbSAnQHN0cmlwZS91aS1leHRlbnNpb24tc2RrL3NpZ25hdHVyZSc7XG5cblxuY29uc3QgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gPSBSZWFjdDtcblxuLy8gY29uc3QgQkFDS0VORF9VUkwgPSAnaHR0cDovL2xvY2FsaG9zdDo1MDAwLydcblxuY29uc3QgZ2V0UmVkaXJlY3RVUkwgPSAobW9kZTogJ2xpdmUnIHwgJ3Rlc3QnKSA9PiBgaHR0cHM6Ly9kYXNoYm9hcmQuc3RyaXBlLmNvbS8ke21vZGUgPT09ICd0ZXN0JyA/ICd0ZXN0LycgOiAnbGl2ZS8nfWFwcHMtb2F1dGgvY29tLmV4YW1wbGUub2F1dGgtZXhhbXBsZWA7XG5cblxuXG5jb25zdCBPQXV0aEFwcCA9ICh7IGVudmlyb25tZW50LCB1c2VyQ29udGV4dCB9OiBFeHRlbnNpb25Db250ZXh0VmFsdWUpID0+IHtcbiAgICBjb25zdCBCQUNLRU5EX1VSTCA9IGVudmlyb25tZW50LmNvbnN0YW50cy5CQUNLRU5EX1VSTDtcblxuICAgIGNvbnN0IGdldEF1dGhVUkwgPSAoc3RhdGU6IHN0cmluZywgY2hhbGxlbmdlOiBzdHJpbmcsIG1vZGU6ICdsaXZlJyB8ICd0ZXN0JykgPT5cbiAgICAgICAgQkFDS0VORF9VUkwgKyBgZ2V0LW9hdXRoLWxpbmsvP3Jlc3BvbnNlX3R5cGU9Y29kZSZjbGllbnQmcmVkaXJlY3Qmc3RhdGU9JHtzdGF0ZX0mY29kZV9jaGFsbGVuZ2U9JHtjaGFsbGVuZ2V9Jm1vZGU9JHttb2RlfSZjb2RlX2NoYWxsZW5nZV9tZXRob2Q9UzI1NmA7XG4gICAgY29uc3QgeyBtb2RlIH0gPSBlbnZpcm9ubWVudDtcbiAgICBjb25zdCBbYXV0aFVSTCwgc2V0QXV0aFVSTF0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW2hhc1NpZ25lZEluLCBzZXRIYXNTaWduZWRJbl0gPSB1c2VTdGF0ZTxib29sZWFuPih0cnVlKTtcbiAgICBjb25zdCBbc3Bpbm5lck9wZW4sIHNldFNwaW5uZXJPcGVuXSA9IHVzZVN0YXRlPGJvb2xlYW4+KHRydWUpXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY3JlYXRlT0F1dGhTdGF0ZSgpLnRoZW4oKHsgc3RhdGUsIGNoYWxsZW5nZSB9KSA9PiB7XG4gICAgICAgICAgICBzZXRBdXRoVVJMKGdldEF1dGhVUkwoc3RhdGUsIGNoYWxsZW5nZSwgbW9kZSkpO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgZ2V0U3RhdHVzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoKEJBQ0tFTkRfVVJMICsgJ2hlYWx0aC1jaGVjay8nLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICdzdHJpcGUtc2lnbmF0dXJlJzogYXdhaXQgZmV0Y2hTdHJpcGVTaWduYXR1cmUoKSxcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcblxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgICAgICB1c2VyX2lkOiB1c2VyQ29udGV4dD8uaWQsXG4gICAgICAgICAgICAgICAgICAgIGFjY291bnRfaWQ6IHVzZXJDb250ZXh0Py5hY2NvdW50LmlkLFxuICAgICAgICAgICAgICAgICAgICBtb2RlOiBtb2RlXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBpZiAoZGF0YS5vaykge1xuICAgICAgICAgICAgICAgIHNldFNwaW5uZXJPcGVuKGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGRhdGEuanNvbigpO1xuICAgICAgICAgICAgc2V0SGFzU2lnbmVkSW4ocmVzdWx0Lmhhc1NpZ25lZEluKTtcblxuICAgICAgICB9XG4gICAgICAgIGdldFN0YXR1cygpO1xuICAgICAgICBjb25zb2xlLmxvZyhlbnZpcm9ubWVudC5jb25zdGFudHMuQkFDS0VORF9VUkwpO1xuICAgIH0sIFttb2RlXSk7XG4gICAgcmV0dXJuIChcblxuICAgICAgICA8Q29udGV4dFZpZXcgdGl0bGU9XCJQYXlvdXRWaWV3IEFwcFwiPlxuXG4gICAgICAgICAgICB7aGFzU2lnbmVkSW4gJiYgIXNwaW5uZXJPcGVuICYmXG4gICAgICAgICAgICAgICAgPEJhZGdlIHR5cGU9XCJpbmZvXCI+WW91IGFyZSBBbHJlYWR5IEF1dGhvcml6ZWQgdG8gT3VyIEFwcCE8L0JhZGdlPlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgeyFoYXNTaWduZWRJbiAmJlxuICAgICAgICAgICAgICAgIDxCYW5uZXJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNyaXRpY2FsXCJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJZb3UgaGF2ZSBub3QgQXV0aG9yaXplZCFcIlxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIlBsZWFzZSBBdXRob3JpemUgYmVmb3JlIHlvdSBjb250aW51ZVwiXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbnM9e1xuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIGhyZWY9e2F1dGhVUkx9PkJlZ2luIEF1dGhvcml6ZTwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgPEJveCBjc3M9e3tcbiAgICAgICAgICAgICAgICBzdGFjazogJ3onLFxuICAgICAgICAgICAgICAgIGFsaWduWDogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgYWxpZ25ZOiAnY2VudGVyJ1xuICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAge3NwaW5uZXJPcGVuICYmXG4gICAgICAgICAgICAgICAgICAgIDxTcGlubmVyIHNpemU9XCJsYXJnZVwiIC8+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvQ29udGV4dFZpZXc+XG5cbiAgICApXG4gICAgICAgIDtcblxuXG59O1xuZXhwb3J0IGRlZmF1bHQgT0F1dGhBcHA7XG5cblxuXG5cbi8qXG4gIFwiaWRcIjogXCJjb20uZXhhbXBsZS5iYXNpYy1vYXV0aDItdGVzdFwiLFxuICBcInZlcnNpb25cIjogXCIwLjAuMlwiLFxuICBcIm5hbWVcIjogXCJCYXNpYy1PQXV0aDIgVGVzdFwiLFxuKi8iLCAiaW1wb3J0IHtcbiAgICBCb3gsXG4gICAgQ29udGV4dFZpZXcsXG4gICAgTGlzdEl0ZW0sXG4gICAgTGlzdCxcbiAgICBCdXR0b24sXG4gICAgQmFubmVyLFxuICAgIEJhZGdlLFxuICAgIEZvcm1GaWVsZEdyb3VwLFxuICAgIFRleHRGaWVsZCxcbiAgICBTcGlubmVyLFxuICAgIElubGluZVxufSBmcm9tIFwiQHN0cmlwZS91aS1leHRlbnNpb24tc2RrL3VpXCI7XG5pbXBvcnQgdHlwZSB7IEV4dGVuc2lvbkNvbnRleHRWYWx1ZSB9IGZyb20gXCJAc3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvY29udGV4dFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY3JlYXRlT0F1dGhTdGF0ZSB9IGZyb20gXCJAc3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvb2F1dGhcIjtcbmltcG9ydCBmZXRjaFN0cmlwZVNpZ25hdHVyZSBmcm9tIFwiQHN0cmlwZS91aS1leHRlbnNpb24tc2RrL3NpZ25hdHVyZVwiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUGF5b3V0TGlzdFZpZXcgZnJvbSBcIi4vUGF5b3V0TGlzdFZJZXdcIjtcblxuY29uc3QgQkFDS0VORF9VUkwgPSAnaHR0cHM6Ly9zdHJpcGUtYmFja2VuZC1rN2I0LWpheWF0ZWVydGhkYW1iYWwudmVyY2VsLmFwcC8nO1xuLy8gY29uc3QgQkFDS0VORF9VUkwgPSAnaHR0cDovL2xvY2FsaG9zdDo1MDAwLydcblxuXG5cbmNvbnN0IEJhbGFuY2VPdmVydmlld1ZpZXcgPSAoeyB1c2VyQ29udGV4dCwgZW52aXJvbm1lbnQgfTogRXh0ZW5zaW9uQ29udGV4dFZhbHVlKSA9PiB7XG4gICAgLy8gY29uc3QgQkFDS0VORF9VUkwgPSBlbnZpcm9ubWVudC5jb25zdGFudHMuQkFDS0VORF9VUkw7XG4gICAgY29uc3QgZ2V0QXV0aFVSTCA9IChzdGF0ZTogc3RyaW5nLCBjaGFsbGVuZ2U6IHN0cmluZywgbW9kZTogJ2xpdmUnIHwgJ3Rlc3QnKSA9PlxuICAgICAgICBCQUNLRU5EX1VSTCArIGAvZ2V0LW9hdXRoLWxpbmsvP3Jlc3BvbnNlX3R5cGU9Y29kZSZjbGllbnQmcmVkaXJlY3Qmc3RhdGU9JHtzdGF0ZX0mY29kZV9jaGFsbGVuZ2U9JHtjaGFsbGVuZ2V9Jm1vZGU9JHttb2RlfSZjb2RlX2NoYWxsZW5nZV9tZXRob2Q9UzI1NmA7XG4gICAgY29uc3QgbWF4TGVuZ3RoRm9yTW9udGg6IG51bWJlciA9IDI7XG4gICAgY29uc3QgbWF4TGVuZ3RoRm9yWWVhcjogbnVtYmVyID0gNDtcbiAgICBjb25zdCB7IG1vZGUgfSA9IGVudmlyb25tZW50O1xuICAgIGNvbnN0IFtkYXRhLCBzZXRNeURhdGFdID0gdXNlU3RhdGUoW10pO1xuICAgIGNvbnN0IFthdXRoVVJMLCBzZXRBdXRoVVJMXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbaGFzU2lnbmVkSW4sIHNldEhhc1NpZ25lZEluXSA9IHVzZVN0YXRlKHRydWUpXG4gICAgY29uc3QgW21vbnRoVmFsdWUsIHNldE1vbnRoVmFsdWVdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFt5ZWFyVmFsdWUsIHNldFllYXJWYWx1ZV0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW2dvdFBheW91dERhdGEsIHNldFBheW91dERhdGFdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpXG4gICAgY29uc3QgW2dvdFJlc3BvbnNlLCBzZXRnb3RSZXNwb25zZV0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSlcbiAgICBjb25zdCBbc3Bpbm5lck9wZW4sIHNldFNwaW5uZXJPcGVuXSA9IHVzZVN0YXRlPGJvb2xlYW4+KHRydWUpXG4gICAgY29uc3QgW3BheW91dExvYWQsIHNldFBheW91dExvYWRdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpXG4gICAgY29uc3QgZG93bmxvYWRFbmRwb2ludCA9IGAke0JBQ0tFTkRfVVJMfWRvd25sb2FkLXJlcG9ydC8/YWNjb3VudF9pZD0ke3VzZXJDb250ZXh0Py5hY2NvdW50LmlkfSZjdXJyZW50X21vbnRoPSR7bW9udGhWYWx1ZX0mY3VycmVudF95ZWFyPSR7eWVhclZhbHVlfSZtb2RlPSR7bW9kZX1gO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY3JlYXRlT0F1dGhTdGF0ZSgpLnRoZW4oKHsgc3RhdGUsIGNoYWxsZW5nZSB9KSA9PiB7XG4gICAgICAgICAgICBzZXRBdXRoVVJMKGdldEF1dGhVUkwoc3RhdGUsIGNoYWxsZW5nZSwgbW9kZSkpO1xuICAgICAgICB9KTtcblxuXG4gICAgICAgIGNvbnN0IGdldFN0YXR1cyA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaChCQUNLRU5EX1VSTCArICdoZWFsdGgtY2hlY2svJywge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAnc3RyaXBlLXNpZ25hdHVyZSc6IGF3YWl0IGZldGNoU3RyaXBlU2lnbmF0dXJlKCksXG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG5cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICAgICAgdXNlcl9pZDogdXNlckNvbnRleHQ/LmlkLFxuICAgICAgICAgICAgICAgICAgICBhY2NvdW50X2lkOiB1c2VyQ29udGV4dD8uYWNjb3VudC5pZCxcbiAgICAgICAgICAgICAgICAgICAgbW9kZTogbW9kZVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgaWYgKGRhdGEub2spIHtcbiAgICAgICAgICAgICAgICBzZXRTcGlubmVyT3BlbihmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBkYXRhLmpzb24oKTtcbiAgICAgICAgICAgIHNldEhhc1NpZ25lZEluKHJlc3VsdC5oYXNTaWduZWRJbik7XG4gICAgICAgIH1cblxuICAgICAgICBnZXRTdGF0dXMoKTtcbiAgICB9LCBbXSk7XG5cblxuICAgIC8vIEhhbmRsaW5nIERhdGVGb3JtIERhdGFcbiAgICBjb25zdCBtb250aFZhbHVlSGFuZGxlciA9IChldmVudCkgPT4ge1xuICAgICAgICBzZXRNb250aFZhbHVlKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgfVxuICAgIGNvbnN0IHllYXJWYWx1ZUhhbmRsZXIgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgc2V0WWVhclZhbHVlKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgICAgIHNldFBheW91dExvYWQodHJ1ZSlcbiAgICAgICAgLy8gZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChCQUNLRU5EX1VSTCArICdnZXRfcGF5b3V0cy8nLCB7XG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIG1vbnRoOiBtb250aFZhbHVlLFxuICAgICAgICAgICAgICAgIHllYXI6IHllYXJWYWx1ZSxcbiAgICAgICAgICAgICAgICBhY2NvdW50X2lkOiB1c2VyQ29udGV4dD8uYWNjb3VudC5pZCxcbiAgICAgICAgICAgICAgICBtb2RlOiBtb2RlXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuXG4gICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSFRUUCBlcnJvciEgc3RhdHVzOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcbiAgICAgICAgfSBlbHNlIGlmIChyZXNwb25zZS5vaykge1xuXG4gICAgICAgICAgICBzZXRQYXlvdXRMb2FkKGZhbHNlKVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG4gICAgICAgIGlmIChyZXN1bHQuaGFzRGF0YSA9PSB0cnVlKSB7XG4gICAgICAgICAgICBzZXRQYXlvdXREYXRhKGZhbHNlKVxuICAgICAgICAgICAgc2V0TXlEYXRhKEpTT04ucGFyc2UocmVzdWx0Lm91dHB1dF9kZl9qc29uKSlcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKHJlc3VsdC5oYXNEYXRhID09IGZhbHNlKXtcbiAgICAgICAgICAgIHNldFBheW91dERhdGEodHJ1ZSlcbiAgICAgICAgfVxuICAgICAgICBzZXRIYXNTaWduZWRJbihyZXN1bHQuaGFzU2lnbmVkSW4pO1xuICAgICAgICBzZXRnb3RSZXNwb25zZShyZXN1bHQuaGFzRGF0YSlcbiAgICAgICAgaWYgKHJlc3VsdC5lcnJvcikge1xuICAgICAgICAgICAgc2V0U3Bpbm5lck9wZW4oZmFsc2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPENvbnRleHRWaWV3IHRpdGxlPVwiUGF5b3V0Vmlld1wiPlxuXG4gICAgICAgICAgICA8Qm94IGNzcz17e1xuICAgICAgICAgICAgICAgIHN0YWNrOiAneicsXG4gICAgICAgICAgICAgICAgYWxpZ25YOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICBhbGlnblk6ICdjZW50ZXInXG4gICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICB7c3Bpbm5lck9wZW4gJiYgaGFzU2lnbmVkSW4gJiZcbiAgICAgICAgICAgICAgICAgICAgPFNwaW5uZXIgc2l6ZT1cImxhcmdlXCIgLz5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIHshc3Bpbm5lck9wZW4gJiYgaGFzU2lnbmVkSW4gJiZcbiAgICAgICAgICAgICAgICA8Qm94IGNzcz17e1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAnc21hbGwnLFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3ByaW1hcnknLFxuICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICdsYXJnZScsXG5cbiAgICAgICAgICAgICAgICB9fT5cblxuICAgICAgICAgICAgICAgICAgICA8Rm9ybUZpZWxkR3JvdXAgbGVnZW5kPVwiRW50ZXIgTW9udGggYW5kIFllYXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJFbnRlciB0aGUgWWVhciBhbmQgTW9udGggZnJvbSB3aGljaCB5b3Ugd2FudCB0byBmZXRjaCBkYXRhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIHR5cGU9XCJudW1iZXJcIiBvbkNoYW5nZT17bW9udGhWYWx1ZUhhbmRsZXJ9IG1heExlbmd0aD17bWF4TGVuZ3RoRm9yTW9udGh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJNb250aFwiIG5hbWU9XCJtb250aFwiIHBsYWNlaG9sZGVyPVwiTU1cIiBoaWRkZW5FbGVtZW50cz17WydsYWJlbCddfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCB0eXBlPVwibnVtYmVyXCIgb25DaGFuZ2U9e3llYXJWYWx1ZUhhbmRsZXJ9IG1heExlbmd0aD17bWF4TGVuZ3RoRm9yWWVhcn0gbGFiZWw9XCJZZWFyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwieWVhclwiIHBsYWNlaG9sZGVyPVwiWVlZWVwiIGhpZGRlbkVsZW1lbnRzPXtbJ2xhYmVsJ119IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybUZpZWxkR3JvdXA+XG5cbiAgICAgICAgICAgICAgICAgICAgPEJveCBjc3M9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YWNrOiAneicsXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnblg6ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ25ZOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogJ21lZGl1bSdcbiAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7cGF5b3V0TG9hZCAmJiBoYXNTaWduZWRJbiAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGlubmVyIHNpemU9XCJsYXJnZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB7IXBheW91dExvYWQgJiYgaGFzU2lnbmVkSW4gJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgb25QcmVzcz17aGFuZGxlU3VibWl0fT5HZXQgRGF0YTwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIDwvQm94PlxuXG4gICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgeyFnb3RQYXlvdXREYXRhICYmICFnb3RSZXNwb25zZSAmJiBoYXNTaWduZWRJbiAmJiAhc3Bpbm5lck9wZW4gJiZcbiAgICAgICAgICAgICAgICA8QmFkZ2UgdHlwZT1cImluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgUGxlYXNlIEVudGVyIE1vbnRoIGFuZCBZZWFyIFZhbHVlcywgdG8gdmlldyBEYXRhXG4gICAgICAgICAgICAgICAgPC9CYWRnZT5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAge2dvdFBheW91dERhdGEgJiYgZ290UmVzcG9uc2UgJiYgIWRhdGEubGVuZ3RoICYmIGhhc1NpZ25lZEluICYmXG4gICAgICAgICAgICAgICAgPEJhZGdlIHR5cGU9XCJ3YXJuaW5nXCI+XG4gICAgICAgICAgICAgICAgICAgIFRoZXJlIGlzIG5vIERhdGEgUHJlc2VudCBmb3IgdGhpcyBNb250aCBhbmQgWWVhclxuICAgICAgICAgICAgICAgIDwvQmFkZ2U+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB7Z290UmVzcG9uc2UgJiYgaGFzU2lnbmVkSW4gJiZcbiAgICAgICAgICAgICAgICA8Qm94IGNzcz17e1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAneHNtYWxsJyxcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICdwcmltYXJ5JyxcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAneHNtYWxsJyxcbiAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgPEJhZGdlXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiaW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgVG90YWwgUGF5b3V0cyBmb3IgdGhpcyBNb250aCBhbmQgWWVhcjoge2RhdGEubGVuZ3RofVxuICAgICAgICAgICAgICAgICAgICA8L0JhZGdlPlxuXG4gICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB7Z290UmVzcG9uc2UgJiYgaGFzU2lnbmVkSW4gJiYgPExpc3Q+XG4gICAgICAgICAgICAgICAge2RhdGEubWFwKChpbmxpbmVfZGF0YSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpbmxpbmVfZGF0YS5OZXR9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cIjFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e25ldyBEYXRlKGlubGluZV9kYXRhLkNyZWF0ZWQpLnRvTG9jYWxlU3RyaW5nKFwiZW4tVVNcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHllYXI6IFwibnVtZXJpY1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vbnRoOiBcImxvbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXk6IFwibnVtZXJpY1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWNvbmRhcnlUaXRsZT17PEJveD57aW5saW5lX2RhdGEuRGVzY3JpcHRpb259PC9Cb3g+fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9MaXN0PlxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICA8Qm94IGNzcz17eyBzdGFjazogJ3knLCBnYXA6ICdsYXJnZScsIG1hcmdpbjogJ2xhcmdlJyB9fT5cbiAgICAgICAgICAgICAgICB7Z290UmVzcG9uc2UgJiZcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBocmVmPXtkb3dubG9hZEVuZHBvaW50fSB0eXBlPVwicHJpbWFyeVwiIGNzcz17eyB3aWR0aDogJ2ZpbGwnLCBhbGlnblg6ICdjZW50ZXInIH19XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIj5Eb3dubG9hZENTVjwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHshaGFzU2lnbmVkSW4gJiYgIXNwaW5uZXJPcGVuICYmXG4gICAgICAgICAgICAgICAgICAgIDxCYW5uZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjcml0aWNhbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIllvdSBoYXZlIG5vdCBTaWduIEluXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiUGxlYXNlIHNpZ24gaW4gYmVmb3JlIHlvdSBjb250aW51ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb25zPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgaHJlZj17YXV0aFVSTH0+QmVnaW4gQXV0aG9yaXplPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICA8L0JveD5cblxuICAgICAgICA8L0NvbnRleHRWaWV3PlxuICAgIClcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJhbGFuY2VPdmVydmlld1ZpZXc7IiwgImltcG9ydCB7XG4gICAgQm94LFxuICAgIEJ1dHRvbixcbiAgICBCYW5uZXIsXG4gICAgU2V0dGluZ3NWaWV3LFxuICAgIFNwaW5uZXJcbn0gZnJvbSBcIkBzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay91aVwiO1xuaW1wb3J0IHR5cGUgeyBFeHRlbnNpb25Db250ZXh0VmFsdWUgfSBmcm9tIFwiQHN0cmlwZS91aS1leHRlbnNpb24tc2RrL2NvbnRleHRcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNyZWF0ZU9BdXRoU3RhdGUgfSBmcm9tICdAc3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvb2F1dGgnO1xuXG5jb25zdCBCQUNLRU5EX1VSTCA9ICdodHRwczovL3N0cmlwZS1iYWNrZW5kLWs3YjQtamF5YXRlZXJ0aGRhbWJhbC52ZXJjZWwuYXBwLyc7XG5cbmNvbnN0IEFwcFNldHRpbmdzID0gKHsgdXNlckNvbnRleHQsIGVudmlyb25tZW50IH06IEV4dGVuc2lvbkNvbnRleHRWYWx1ZSkgPT4ge1xuICAgIGNvbnN0IEJBQ0tFTkRfVVJMID0gZW52aXJvbm1lbnQuY29uc3RhbnRzLkJBQ0tFTkRfVVJMO1xuICAgIGNvbnN0IGdldEF1dGhVUkwgPSAoc3RhdGU6IHN0cmluZywgY2hhbGxlbmdlOiBzdHJpbmcsIG1vZGU6ICdsaXZlJyB8ICd0ZXN0JykgPT5cbiAgICBCQUNLRU5EX1VSTCArIGAvZ2V0LW9hdXRoLWxpbmsvP3Jlc3BvbnNlX3R5cGU9Y29kZSZjbGllbnQmcmVkaXJlY3Qmc3RhdGU9JHtzdGF0ZX0mY29kZV9jaGFsbGVuZ2U9JHtjaGFsbGVuZ2V9Jm1vZGU9JHttb2RlfSZjb2RlX2NoYWxsZW5nZV9tZXRob2Q9UzI1NmA7XG4gICAgY29uc3QgeyBtb2RlIH0gPSBlbnZpcm9ubWVudDtcbiAgICBjb25zdCBbZGVhdXRoLCBzZXREZWF1dGhdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFt1c2VyRXhpc3QsIHNldFVzZXJFeGlzdF0gPSB1c2VTdGF0ZTxib29sZWFuPigpO1xuICAgIGNvbnN0IFthdXRoVVJMLCBzZXRBdXRoVVJMXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbc3Bpbm5lck9wZW4sIHNldFNwaW5uZXJPcGVuXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKVxuICAgIGNvbnN0IFtsb2FkaW5nU3Bpbm5lciwgc2V0TG9hZGluZ1NwaW5uZXJdID0gdXNlU3RhdGU8Ym9vbGVhbj4odHJ1ZSlcbiAgICBjb25zdCBkZWF1dGhvcml6ZV91c2VyID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBzZXRTcGlubmVyT3Blbih0cnVlKVxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2goQkFDS0VORF9VUkwgKyAnZGVhdXRob3JpemVfdXNlci8nLCB7XG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgdXNlcl9pZDogdXNlckNvbnRleHQ/LmlkLFxuICAgICAgICAgICAgICAgIGFjY291bnRfaWQ6IHVzZXJDb250ZXh0Py5hY2NvdW50LmlkLFxuICAgICAgICAgICAgICAgIG1vZGU6IG1vZGVcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiBzZXRVc2VyRXhpc3QoZGF0YS51c2VyRXhpc3QpKVxuICAgIH1cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNyZWF0ZU9BdXRoU3RhdGUoKS50aGVuKCh7IHN0YXRlLCBjaGFsbGVuZ2UgfSkgPT4ge1xuICAgICAgICAgICAgc2V0QXV0aFVSTChnZXRBdXRoVVJMKHN0YXRlLCBjaGFsbGVuZ2UsIG1vZGUpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IGdldFVzZXJTdGF0dXMgPWFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goQkFDS0VORF9VUkwgKyAnY2hlY2stdXNlci8nLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICAgICAgYWNjb3VudF9pZDogdXNlckNvbnRleHQ/LmFjY291bnQuaWQsXG4gICAgICAgICAgICAgICAgICAgIG1vZGU6IG1vZGVcbiAgICAgICAgICAgICAgICB9KVxuICAgIFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5vayl7XG4gICAgICAgICAgICAgICAgc2V0TG9hZGluZ1NwaW5uZXIoZmFsc2UpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgc2V0VXNlckV4aXN0KGRhdGEudXNlckV4aXN0KTtcbiAgICAgICAgfVxuICAgICAgICBnZXRVc2VyU3RhdHVzKCk7XG4gICAgICAgIFxuICAgIH0sIFttb2RlXSk7XG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxTZXR0aW5nc1ZpZXcgb25TYXZlPXsoKSA9PiB7XG4gICAgICAgIH19PlxuICAgICAgICAgICAgPEJveCBjc3M9e3tcbiAgICAgICAgICAgICAgICBzdGFjazogJ3onLFxuICAgICAgICAgICAgICAgIGFsaWduWDogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgYWxpZ25ZOiAnY2VudGVyJ1xuICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAge2xvYWRpbmdTcGlubmVyICYmXG4gICAgICAgICAgICAgICAgICAgIDxTcGlubmVyIHNpemU9XCJsYXJnZVwiIC8+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgICAgY3NzPXt7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IFwiY29udGFpbmVyXCIsXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCJtZWRpdW1cIixcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCJsYXJnZVwiLFxuICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgIHt1c2VyRXhpc3QgJiYgIXNwaW5uZXJPcGVuICYmXG4gICAgICAgICAgICAgICAgICAgIDxCYW5uZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjcml0aWNhbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlJlbW92ZSBBdXRob3JpemF0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiWW91IHdpbGwgbm8gbG9uZ2VyIGFibGUgdG8gYWNjZXNzIHlvdXIgZGF0YSB0aHJvdWdoIEFwcFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb25zPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uUHJlc3M9e2RlYXV0aG9yaXplX3VzZXJ9IHR5cGU9XCJkZXN0cnVjdGl2ZVwiPlJlbW92ZSBBdXRob3JpemF0aW9uPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHt1c2VyRXhpc3QgJiYgc3Bpbm5lck9wZW4gJiZcbiAgICAgICAgICAgICAgICAgICAgPEJhbm5lclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNhdXRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJSZW1vdmluZyBBdXRob3JpemF0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiRG9uJ3Qgd29ycnkgeW91IGNhbiBhZGQgYXV0aG9yaXphdGlvbiBhZ2FpbiBhZnRlciB0aGlzIHByY29lc3MgZ2V0cyBjb21wbGV0ZS5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9ucz17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwaW5uZXIgc2l6ZT1cImxhcmdlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB7IXVzZXJFeGlzdCAmJiAhbG9hZGluZ1NwaW5uZXIgJiZcbiAgICAgICAgICAgICAgICAgICAgPEJhbm5lclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImRlZmF1bHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJCZWdpbiBBdXRob3JpemF0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiWW91IGFyZSBub3QgYXV0aG9yaXplZCB5b3VyIGFjY291bnQgd2l0aCBvdXIgc2VydmVycywgUGxlYXNlIGJlZ2luIHRoZSBBdXRob3JpemF0aW9uIFByb2Nlc3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9ucz17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBocmVmPXthdXRoVVJMfSB0eXBlPVwicHJpbWFyeVwiPkJlZ2luIEF1dGhvcml6YXRpb248L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9TZXR0aW5nc1ZpZXc+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFwcFNldHRpbmdzO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsVUFBQSxVQUFBLFVBQUE7QUFFYSxjQUFBLGFBQVksR0FBQSxRQUFBLDRCQUd2QixXQUFXO0FB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O0FBQUEsTUFDQSwyQkFBMkI7QUFBQSxRQUN6QixlQUFlO0FBQUEsVUFDYjtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBLGFBQWE7QUFBQSxRQUNiLFdBQVc7QUFBQSxNQUNiO0FBQUEsSUFDRjtBQUFBLElBQ0EsYUFBYTtBQUFBLE1BQ1gsZUFBZTtBQUFBLElBQ2pCO0FBQUEsRUFDRjsiLAogICJuYW1lcyI6IFsiY3JlYXRlT0F1dGhTdGF0ZSIsICJmZXRjaFN0cmlwZVNpZ25hdHVyZSIsICJCQUNLRU5EX1VSTCIsICJtb2RlIiwgImZldGNoU3RyaXBlU2lnbmF0dXJlIiwgImltcG9ydF91aSIsICJpbXBvcnRfb2F1dGgiLCAiaW1wb3J0X3NpZ25hdHVyZSIsICJpbXBvcnRfanN4X3J1bnRpbWUiLCAibW9kZSIsICJkYXRhIiwgImZldGNoU3RyaXBlU2lnbmF0dXJlIiwgImltcG9ydF91aSIsICJpbXBvcnRfcmVhY3QiLCAiaW1wb3J0X29hdXRoIiwgImltcG9ydF9qc3hfcnVudGltZSIsICJCQUNLRU5EX1VSTCIsICJtb2RlIiwgImRhdGEiXQp9Cg==
