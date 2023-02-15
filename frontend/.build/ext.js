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
  var __objRest = (source, exclude) => {
    var target = {};
    for (var prop in source)
      if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
        target[prop] = source[prop];
    if (source != null && __getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(source)) {
        if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
          target[prop] = source[prop];
      }
    return target;
  };
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
    default: () => manifest_default
  });

  // src/views/App.tsx
  var import_ui = __toESM(require_ui2());
  var import_signature = __toESM(require_signature2());
  var import_react = __require("react");
  var import_jsx_runtime = __require("react/jsx-runtime");
  var LOGIN_URI = "https://localhost:5000/auth/login";
  var LOGOUT_URI = "https://localhost:5000/auth/logout";
  var VERIFY_URI = "https://localhost:5000/auth/verify";
  var INFO_URI = "https://localhost:5000/auth/userinfo";
  var SESSION_URI = "https://localhost:5000/auth/session";
  var initialState = () => ({
    name: "initializing",
    context: {
      stateKey: window.crypto.randomUUID()
    }
  });
  var reducer = (prevState, action) => {
    const fallthrough = () => {
      console.error("Invalid action", action.type, "for state", prevState.name);
      return prevState;
    };
    switch (prevState.name) {
      case "initializing": {
        switch (action.type) {
          case "initialized":
            return action.payload.user ? { name: "logged-in", context: { user: action.payload.user } } : {
              name: "logged-out",
              context: prevState.context
            };
          default:
            return fallthrough();
        }
      }
      case "logged-out": {
        switch (action.type) {
          case "log-in":
            return {
              name: "waiting-for-auth",
              context: prevState.context
            };
          default:
            return fallthrough();
        }
      }
      case "waiting-for-auth": {
        switch (action.type) {
          case "authorized":
            return initialState();
          case "log-out":
            return { name: "logging-out" };
          default:
            return fallthrough();
        }
      }
      case "logging-out": {
        switch (action.type) {
          case "session-deleted":
            return initialState();
          default:
            return fallthrough();
        }
      }
      case "logged-in": {
        switch (action.type) {
          case "log-out":
            return { name: "logging-out" };
          default:
            return fallthrough();
        }
      }
      default:
        return fallthrough();
    }
  };
  var App = ({ userContext }) => {
    const [state, dispatch] = (0, import_react.useReducer)(reducer, null, initialState);
    const fetchWithCredentials = (0, import_react.useCallback)(
      (_0, ..._1) => __async(void 0, [_0, ..._1], function* (uri, _a = {}) {
        var _b = _a, { headers } = _b, options = __objRest(_b, ["headers"]);
        var _a2, _b2;
        const headersObject = new Headers(headers);
        headersObject.append("stripe-user-id", (_a2 = userContext == null ? void 0 : userContext.id) != null ? _a2 : "");
        headersObject.append("stripe-account-id", (_b2 = userContext == null ? void 0 : userContext.account.id) != null ? _b2 : "");
        headersObject.append("stripe-signature", yield (0, import_signature.default)());
        return yield fetch(uri, __spreadProps(__spreadValues({}, options), {
          headers: headersObject
        }));
      }),
      []
    );
    (0, import_react.useEffect)(() => {
      switch (state.name) {
        case "initializing": {
          const controller = new AbortController();
          fetchWithCredentials(INFO_URI, {
            signal: controller.signal
          }).then((res) => res.json()).then(
            (user) => dispatch({
              type: "initialized",
              payload: { user }
            })
          ).catch(() => {
            if (!controller.signal.aborted) {
              dispatch({
                type: "initialized",
                payload: { user: null }
              });
            }
          });
          return () => {
            controller.abort();
          };
        }
        case "waiting-for-auth": {
          const interval = setInterval(() => {
            fetchWithCredentials(
              `${VERIFY_URI}?state=${state.context.stateKey}`
            ).then(
              (res) => res.status >= 200 && res.status < 300 && dispatch({
                type: "authorized"
              })
            );
          }, 5e3);
          return () => clearInterval(interval);
        }
        case "logging-out": {
          const controller = new AbortController();
          fetchWithCredentials(SESSION_URI, {
            signal: controller.signal,
            method: "DELETE"
          }).finally(() => {
            dispatch({
              type: "session-deleted"
            });
          });
          return () => {
            controller.abort();
          };
        }
      }
    }, [state, dispatch]);
    const actions = (state2) => {
      switch (state2.name) {
        case "initializing":
          return "Loading...";
        case "logged-out":
          return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.Button, {
            type: "primary",
            href: `${LOGIN_URI}?${new URLSearchParams({
              state: state2.context.stateKey
            })}`,
            target: "_blank",
            onPress: () => dispatch({ type: "log-in" }),
            children: "Log In"
          });
        case "waiting-for-auth":
          return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.Box, {
                children: "Please complete authorization in popup."
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.Button, {
                type: "destructive",
                onPress: () => dispatch({ type: "log-out" }),
                children: "Cancel"
              })
            ]
          });
        case "logged-in":
          return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_ui.Box, {
                children: [
                  "You are logged in as ",
                  state2.context.user.name,
                  " (",
                  state2.context.user.email,
                  ")"
                ]
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.Button, {
                type: "destructive",
                href: `${LOGOUT_URI}?${new URLSearchParams({
                  account: userContext.account.id,
                  user: userContext.id
                })}`,
                target: "_blank",
                onPress: () => dispatch({ type: "log-out" }),
                children: "Log Out"
              })
            ]
          });
        case "logging-out":
          return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.Button, {
            type: "destructive",
            disabled: true,
            children: "Log Out"
          });
      }
    };
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.ContextView, {
      title: "Getting started with Stripe-Apps",
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.Box, {
        children: actions(state)
      })
    });
  };
  var App_default = App;

  // .build/manifest.js
  __reExport(manifest_exports, __toESM(require_version()));
  var BUILD_TIME = "2023-02-15 20:48:28.9864094 +0530 IST m=+0.012315493";
  var manifest_default = {
    "id": "com.example.basic-oauth2-test",
    "version": "0.0.2",
    "name": "Basic-OAuth2 Test",
    "icon": "",
    "permissions": [],
    "app_backend": {
      "webhooks": null
    },
    "ui_extension": {
      "views": [
        {
          "viewport": "stripe.dashboard.home.overview",
          "component": "App"
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0BzdHJpcGUvc3JjL3VpL0BzYWlsL3VpL2luZGV4LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9Ac3RyaXBlL3NyYy91aS9Ac3RyaXBlLWludGVybmFsL3RhaWxvci1kYXNoYm9hcmQtY29tcG9uZW50cy9pbmRleC50cyIsICIuLi9ub2RlX21vZHVsZXMvQHN0cmlwZS9zcmMvdWkvbWFudWFsX2NvbXBvbmVudHMudHMiLCAiLi4vbm9kZV9tb2R1bGVzL0BzdHJpcGUvc3JjL3VpL2luZGV4LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9pbnZhcmlhbnQvYnJvd3Nlci5qcyIsICIuLi9ub2RlX21vZHVsZXMvQHN0cmlwZS9zcmMvdXRpbHMvX2VuZHBvaW50LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9Ac3RyaXBlL3NyYy91dGlscy9zaWduYXR1cmUudHMiLCAiLi4vbm9kZV9tb2R1bGVzL0BzdHJpcGUvc3JjL3NpZ25hdHVyZS50cyIsICIuLi9ub2RlX21vZHVsZXMvQHN0cmlwZS9zcmMvdmVyc2lvbi50cyIsICJtYW5pZmVzdC5qcyIsICIuLi9zcmMvdmlld3MvQXBwLnRzeCJdLAogICJzb3VyY2VzQ29udGVudCI6IFtudWxsLCBudWxsLCBudWxsLCBudWxsLCAiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogVXNlIGludmFyaWFudCgpIHRvIGFzc2VydCBzdGF0ZSB3aGljaCB5b3VyIHByb2dyYW0gYXNzdW1lcyB0byBiZSB0cnVlLlxuICpcbiAqIFByb3ZpZGUgc3ByaW50Zi1zdHlsZSBmb3JtYXQgKG9ubHkgJXMgaXMgc3VwcG9ydGVkKSBhbmQgYXJndW1lbnRzXG4gKiB0byBwcm92aWRlIGluZm9ybWF0aW9uIGFib3V0IHdoYXQgYnJva2UgYW5kIHdoYXQgeW91IHdlcmVcbiAqIGV4cGVjdGluZy5cbiAqXG4gKiBUaGUgaW52YXJpYW50IG1lc3NhZ2Ugd2lsbCBiZSBzdHJpcHBlZCBpbiBwcm9kdWN0aW9uLCBidXQgdGhlIGludmFyaWFudFxuICogd2lsbCByZW1haW4gdG8gZW5zdXJlIGxvZ2ljIGRvZXMgbm90IGRpZmZlciBpbiBwcm9kdWN0aW9uLlxuICovXG5cbnZhciBpbnZhcmlhbnQgPSBmdW5jdGlvbihjb25kaXRpb24sIGZvcm1hdCwgYSwgYiwgYywgZCwgZSwgZikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhcmlhbnQgcmVxdWlyZXMgYW4gZXJyb3IgbWVzc2FnZSBhcmd1bWVudCcpO1xuICAgIH1cbiAgfVxuXG4gIGlmICghY29uZGl0aW9uKSB7XG4gICAgdmFyIGVycm9yO1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoXG4gICAgICAgICdNaW5pZmllZCBleGNlcHRpb24gb2NjdXJyZWQ7IHVzZSB0aGUgbm9uLW1pbmlmaWVkIGRldiBlbnZpcm9ubWVudCAnICtcbiAgICAgICAgJ2ZvciB0aGUgZnVsbCBlcnJvciBtZXNzYWdlIGFuZCBhZGRpdGlvbmFsIGhlbHBmdWwgd2FybmluZ3MuJ1xuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGFyZ3MgPSBbYSwgYiwgYywgZCwgZSwgZl07XG4gICAgICB2YXIgYXJnSW5kZXggPSAwO1xuICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoXG4gICAgICAgIGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbigpIHsgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107IH0pXG4gICAgICApO1xuICAgICAgZXJyb3IubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICB9XG5cbiAgICBlcnJvci5mcmFtZXNUb1BvcCA9IDE7IC8vIHdlIGRvbid0IGNhcmUgYWJvdXQgaW52YXJpYW50J3Mgb3duIGZyYW1lXG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gaW52YXJpYW50O1xuIiwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgIlxuXG5pbXBvcnQgQXBwIGZyb20gJy4uL3NyYy92aWV3cy9BcHAnO1xuXG5cbmV4cG9ydCAqIGZyb20gJ0BzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay92ZXJzaW9uJztcbmV4cG9ydCBjb25zdCBCVUlMRF9USU1FID0gJzIwMjMtMDItMTUgMjA6NDg6MjguOTg2NDA5NCArMDUzMCBJU1QgbT0rMC4wMTIzMTU0OTMnXG5cbmV4cG9ydCB7XG5cdFxuXHRBcHAsXG5cdFxufTtcbmV4cG9ydCBkZWZhdWx0IHtcbiAgXCJpZFwiOiBcImNvbS5leGFtcGxlLmJhc2ljLW9hdXRoMi10ZXN0XCIsXG4gIFwidmVyc2lvblwiOiBcIjAuMC4yXCIsXG4gIFwibmFtZVwiOiBcIkJhc2ljLU9BdXRoMiBUZXN0XCIsXG4gIFwiaWNvblwiOiBcIlwiLFxuICBcInBlcm1pc3Npb25zXCI6IFtdLFxuICBcImFwcF9iYWNrZW5kXCI6IHtcbiAgICBcIndlYmhvb2tzXCI6IG51bGxcbiAgfSxcbiAgXCJ1aV9leHRlbnNpb25cIjoge1xuICAgIFwidmlld3NcIjogW1xuICAgICAge1xuICAgICAgICBcInZpZXdwb3J0XCI6IFwic3RyaXBlLmRhc2hib2FyZC5ob21lLm92ZXJ2aWV3XCIsXG4gICAgICAgIFwiY29tcG9uZW50XCI6IFwiQXBwXCJcbiAgICAgIH1cbiAgICBdLFxuICAgIFwiYWN0aW9uc1wiOiBbXSxcbiAgICBcImNvbnRlbnRfc2VjdXJpdHlfcG9saWN5XCI6IHtcbiAgICAgIFwiY29ubmVjdC1zcmNcIjogbnVsbCxcbiAgICAgIFwiaW1hZ2Utc3JjXCI6IG51bGwsXG4gICAgICBcInB1cnBvc2VcIjogXCJcIlxuICAgIH1cbiAgfSxcbiAgXCJwb3N0X2luc3RhbGxfYWN0aW9uXCI6IG51bGwsXG4gIFwiY29uc3RhbnRzXCI6IG51bGxcbn1cbiIsICJpbXBvcnQgeyBCb3gsIEJ1dHRvbiwgQ29udGV4dFZpZXcgfSBmcm9tIFwiQHN0cmlwZS91aS1leHRlbnNpb24tc2RrL3VpXCI7XG5pbXBvcnQgdHlwZSB7IEV4dGVuc2lvbkNvbnRleHRWYWx1ZSB9IGZyb20gXCJAc3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvY29udGV4dFwiO1xuaW1wb3J0IGZldGNoU3RyaXBlU2lnbmF0dXJlIGZyb20gXCJAc3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvc2lnbmF0dXJlXCI7XG5pbXBvcnQgeyBSZWR1Y2VyLCB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VSZWR1Y2VyIH0gZnJvbSBcInJlYWN0XCI7XG5cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgQ3J5cHRvIHtcbiAgICByYW5kb21VVUlEOiAoKSA9PiBzdHJpbmc7XG4gIH1cbn1cblxuY29uc3QgTE9HSU5fVVJJID0gXCJodHRwczovL2xvY2FsaG9zdDo1MDAwL2F1dGgvbG9naW5cIjtcbmNvbnN0IExPR09VVF9VUkkgPSBcImh0dHBzOi8vbG9jYWxob3N0OjUwMDAvYXV0aC9sb2dvdXRcIjtcbmNvbnN0IFZFUklGWV9VUkkgPSBcImh0dHBzOi8vbG9jYWxob3N0OjUwMDAvYXV0aC92ZXJpZnlcIjtcbmNvbnN0IElORk9fVVJJID0gXCJodHRwczovL2xvY2FsaG9zdDo1MDAwL2F1dGgvdXNlcmluZm9cIjtcbmNvbnN0IFNFU1NJT05fVVJJID0gXCJodHRwczovL2xvY2FsaG9zdDo1MDAwL2F1dGgvc2Vzc2lvblwiO1xuXG50eXBlIFN0YXRlID1cbiAgfCB7IG5hbWU6IFwiaW5pdGlhbGl6aW5nXCI7IGNvbnRleHQ6IHsgc3RhdGVLZXk6IHN0cmluZyB9IH1cbiAgfCB7XG4gICAgICBuYW1lOiBcImxvZ2dlZC1vdXRcIjtcbiAgICAgIGNvbnRleHQ6IHsgc3RhdGVLZXk6IHN0cmluZyB9O1xuICAgIH1cbiAgfCB7IG5hbWU6IFwibG9nZ2luZy1vdXRcIiB9XG4gIHwgeyBuYW1lOiBcIndhaXRpbmctZm9yLWF1dGhcIjsgY29udGV4dDogeyBzdGF0ZUtleTogc3RyaW5nIH0gfVxuICB8IHsgbmFtZTogXCJsb2dnZWQtaW5cIjsgY29udGV4dDogeyB1c2VyOiBVc2VySW5mbyB9IH07XG5cbnR5cGUgQWN0aW9uID1cbiAgfCB7IHR5cGU6IFwiaW5pdGlhbGl6ZWRcIjsgcGF5bG9hZDogeyB1c2VyOiBVc2VySW5mbyB8IG51bGwgfSB9XG4gIHwgeyB0eXBlOiBcImxvZy1pblwiIH1cbiAgfCB7IHR5cGU6IFwiYXV0aG9yaXplZFwiIH1cbiAgfCB7IHR5cGU6IFwibG9nLW91dFwiIH1cbiAgfCB7IHR5cGU6IFwic2Vzc2lvbi1kZWxldGVkXCIgfTtcblxuY29uc3QgaW5pdGlhbFN0YXRlID0gKCk6IFN0YXRlID0+ICh7XG4gIG5hbWU6IFwiaW5pdGlhbGl6aW5nXCIsXG4gIGNvbnRleHQ6IHtcbiAgICBzdGF0ZUtleTogd2luZG93LmNyeXB0by5yYW5kb21VVUlEKCksXG4gIH0sXG59KTtcblxuLy8gVGhlIGZvbGxvd2luZyBpcyBhIHNpbXBsZSBzdGF0ZSBtYWNoaW5lIGltcGxlbWVudGVkIGluIHBsYWluIFJlYWN0LiBIb3dldmVyLCBpbiB5b3VyIGFwcCB5b3UgbWlnaHRcbi8vIHByZWZlciB1c2luZyBhIGxpYnJhcnkgc3VjaCBhcyBYU3RhdGUsIFJlZHV4IG9yIExpdHRsZSBTdGF0ZSBNYWNoaW5lIGZvciB0aGUgc2FtZSBwdXJwb3NlLlxuY29uc3QgcmVkdWNlcjogUmVkdWNlcjxTdGF0ZSwgQWN0aW9uPiA9IChwcmV2U3RhdGUsIGFjdGlvbikgPT4ge1xuICBjb25zdCBmYWxsdGhyb3VnaCA9ICgpID0+IHtcbiAgICBjb25zb2xlLmVycm9yKFwiSW52YWxpZCBhY3Rpb25cIiwgYWN0aW9uLnR5cGUsIFwiZm9yIHN0YXRlXCIsIHByZXZTdGF0ZS5uYW1lKTtcbiAgICByZXR1cm4gcHJldlN0YXRlO1xuICB9O1xuICBzd2l0Y2ggKHByZXZTdGF0ZS5uYW1lKSB7XG4gICAgY2FzZSBcImluaXRpYWxpemluZ1wiOiB7XG4gICAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgXCJpbml0aWFsaXplZFwiOlxuICAgICAgICAgIHJldHVybiBhY3Rpb24ucGF5bG9hZC51c2VyXG4gICAgICAgICAgICA/IHsgbmFtZTogXCJsb2dnZWQtaW5cIiwgY29udGV4dDogeyB1c2VyOiBhY3Rpb24ucGF5bG9hZC51c2VyIH0gfVxuICAgICAgICAgICAgOiB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJsb2dnZWQtb3V0XCIsXG4gICAgICAgICAgICAgICAgY29udGV4dDogcHJldlN0YXRlLmNvbnRleHQsXG4gICAgICAgICAgICAgIH07XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuIGZhbGx0aHJvdWdoKCk7XG4gICAgICB9XG4gICAgfVxuICAgIGNhc2UgXCJsb2dnZWQtb3V0XCI6IHtcbiAgICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSBcImxvZy1pblwiOlxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuYW1lOiBcIndhaXRpbmctZm9yLWF1dGhcIixcbiAgICAgICAgICAgIGNvbnRleHQ6IHByZXZTdGF0ZS5jb250ZXh0LFxuICAgICAgICAgIH07XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuIGZhbGx0aHJvdWdoKCk7XG4gICAgICB9XG4gICAgfVxuICAgIGNhc2UgXCJ3YWl0aW5nLWZvci1hdXRoXCI6IHtcbiAgICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSBcImF1dGhvcml6ZWRcIjpcbiAgICAgICAgICByZXR1cm4gaW5pdGlhbFN0YXRlKCk7XG4gICAgICAgIGNhc2UgXCJsb2ctb3V0XCI6XG4gICAgICAgICAgcmV0dXJuIHsgbmFtZTogXCJsb2dnaW5nLW91dFwiIH07XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuIGZhbGx0aHJvdWdoKCk7XG4gICAgICB9XG4gICAgfVxuICAgIGNhc2UgXCJsb2dnaW5nLW91dFwiOiB7XG4gICAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgXCJzZXNzaW9uLWRlbGV0ZWRcIjpcbiAgICAgICAgICByZXR1cm4gaW5pdGlhbFN0YXRlKCk7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuIGZhbGx0aHJvdWdoKCk7XG4gICAgICB9XG4gICAgfVxuICAgIGNhc2UgXCJsb2dnZWQtaW5cIjoge1xuICAgICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIFwibG9nLW91dFwiOlxuICAgICAgICAgIHJldHVybiB7IG5hbWU6IFwibG9nZ2luZy1vdXRcIiB9O1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybiBmYWxsdGhyb3VnaCgpO1xuICAgICAgfVxuICAgIH1cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZhbGx0aHJvdWdoKCk7XG4gIH1cbn07XG5cbnR5cGUgVXNlckluZm8gPSB7XG4gIG5hbWU6IHN0cmluZztcbiAgZW1haWw6IHN0cmluZztcbn07XG5cbmNvbnN0IEFwcCA9ICh7IHVzZXJDb250ZXh0IH06IEV4dGVuc2lvbkNvbnRleHRWYWx1ZSkgPT4ge1xuICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIocmVkdWNlciwgbnVsbCwgaW5pdGlhbFN0YXRlKTtcbiAgY29uc3QgZmV0Y2hXaXRoQ3JlZGVudGlhbHMgPSB1c2VDYWxsYmFjayhcbiAgICBhc3luYyAodXJpOiBzdHJpbmcsIHsgaGVhZGVycywgLi4ub3B0aW9ucyB9OiBSZXF1ZXN0SW5pdCA9IHt9KSA9PiB7XG4gICAgICBjb25zdCBoZWFkZXJzT2JqZWN0ID0gbmV3IEhlYWRlcnMoaGVhZGVycyk7XG4gICAgICBoZWFkZXJzT2JqZWN0LmFwcGVuZChcInN0cmlwZS11c2VyLWlkXCIsIHVzZXJDb250ZXh0Py5pZCA/PyBcIlwiKTtcbiAgICAgIGhlYWRlcnNPYmplY3QuYXBwZW5kKFwic3RyaXBlLWFjY291bnQtaWRcIiwgdXNlckNvbnRleHQ/LmFjY291bnQuaWQgPz8gXCJcIik7XG4gICAgICBoZWFkZXJzT2JqZWN0LmFwcGVuZChcInN0cmlwZS1zaWduYXR1cmVcIiwgYXdhaXQgZmV0Y2hTdHJpcGVTaWduYXR1cmUoKSk7XG4gICAgICByZXR1cm4gYXdhaXQgZmV0Y2godXJpLCB7XG4gICAgICAgIC4uLm9wdGlvbnMsXG4gICAgICAgIGhlYWRlcnM6IGhlYWRlcnNPYmplY3QsXG4gICAgICB9KTtcbiAgICB9LFxuICAgIFtdXG4gICk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc3dpdGNoIChzdGF0ZS5uYW1lKSB7XG4gICAgICBjYXNlIFwiaW5pdGlhbGl6aW5nXCI6IHtcblxuICAgICAgICBjb25zdCBjb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpO1xuICAgICAgICBmZXRjaFdpdGhDcmVkZW50aWFscyhJTkZPX1VSSSwge1xuICAgICAgICAgIHNpZ25hbDogY29udHJvbGxlci5zaWduYWwsXG4gICAgICAgIH0pXG4gICAgICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgICAudGhlbigodXNlcikgPT5cbiAgICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgdHlwZTogXCJpbml0aWFsaXplZFwiLFxuICAgICAgICAgICAgICBwYXlsb2FkOiB7IHVzZXIgfSxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgKVxuICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgICBpZiAoIWNvbnRyb2xsZXIuc2lnbmFsLmFib3J0ZWQpIHtcbiAgICAgICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgIHR5cGU6IFwiaW5pdGlhbGl6ZWRcIixcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiB7IHVzZXI6IG51bGwgfSxcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgY29udHJvbGxlci5hYm9ydCgpO1xuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgY2FzZSBcIndhaXRpbmctZm9yLWF1dGhcIjoge1xuXG4gICAgICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgIGZldGNoV2l0aENyZWRlbnRpYWxzKFxuICAgICAgICAgICAgYCR7VkVSSUZZX1VSSX0/c3RhdGU9JHtzdGF0ZS5jb250ZXh0LnN0YXRlS2V5fWBcbiAgICAgICAgICApLnRoZW4oXG4gICAgICAgICAgICAocmVzKSA9PlxuICAgICAgICAgICAgICByZXMuc3RhdHVzID49IDIwMCAmJlxuICAgICAgICAgICAgICByZXMuc3RhdHVzIDwgMzAwICYmXG4gICAgICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICB0eXBlOiBcImF1dGhvcml6ZWRcIixcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICApO1xuICAgICAgICB9LCA1MDAwKTtcbiAgICAgICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgfVxuICAgICAgY2FzZSBcImxvZ2dpbmctb3V0XCI6IHtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGNvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKCk7XG4gICAgICAgIGZldGNoV2l0aENyZWRlbnRpYWxzKFNFU1NJT05fVVJJLCB7XG4gICAgICAgICAgc2lnbmFsOiBjb250cm9sbGVyLnNpZ25hbCxcbiAgICAgICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXG4gICAgICAgIH0pLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgIHR5cGU6IFwic2Vzc2lvbi1kZWxldGVkXCIsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgIGNvbnRyb2xsZXIuYWJvcnQoKTtcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtzdGF0ZSwgZGlzcGF0Y2hdKTtcblxuICBjb25zdCBhY3Rpb25zID0gKHN0YXRlOiBTdGF0ZSkgPT4ge1xuICAgIHN3aXRjaCAoc3RhdGUubmFtZSkge1xuICAgICAgY2FzZSBcImluaXRpYWxpemluZ1wiOlxuICAgICAgICByZXR1cm4gXCJMb2FkaW5nLi4uXCI7XG4gICAgICBjYXNlIFwibG9nZ2VkLW91dFwiOlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIHR5cGU9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaHJlZj17YCR7TE9HSU5fVVJJfT8ke25ldyBVUkxTZWFyY2hQYXJhbXMoe1xuICAgICAgICAgICAgICBzdGF0ZTogc3RhdGUuY29udGV4dC5zdGF0ZUtleSxcbiAgICAgICAgICAgIH0pfWB9XG4gICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgb25QcmVzcz17KCkgPT4gZGlzcGF0Y2goeyB0eXBlOiBcImxvZy1pblwiIH0pfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIExvZyBJblxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICApO1xuICAgICAgY2FzZSBcIndhaXRpbmctZm9yLWF1dGhcIjpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPEJveD5QbGVhc2UgY29tcGxldGUgYXV0aG9yaXphdGlvbiBpbiBwb3B1cC48L0JveD5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgdHlwZT1cImRlc3RydWN0aXZlXCJcbiAgICAgICAgICAgICAgb25QcmVzcz17KCkgPT4gZGlzcGF0Y2goeyB0eXBlOiBcImxvZy1vdXRcIiB9KX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgQ2FuY2VsXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKTtcbiAgICAgIGNhc2UgXCJsb2dnZWQtaW5cIjpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPEJveD5cbiAgICAgICAgICAgICAgWW91IGFyZSBsb2dnZWQgaW4gYXMge3N0YXRlLmNvbnRleHQudXNlci5uYW1lfSAoXG4gICAgICAgICAgICAgIHtzdGF0ZS5jb250ZXh0LnVzZXIuZW1haWx9KVxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIHR5cGU9XCJkZXN0cnVjdGl2ZVwiXG4gICAgICAgICAgICAgIGhyZWY9e2Ake0xPR09VVF9VUkl9PyR7bmV3IFVSTFNlYXJjaFBhcmFtcyh7XG4gICAgICAgICAgICAgICAgYWNjb3VudDogdXNlckNvbnRleHQhLmFjY291bnQuaWQsXG4gICAgICAgICAgICAgICAgdXNlcjogdXNlckNvbnRleHQhLmlkLFxuICAgICAgICAgICAgICB9KX1gfVxuICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICBvblByZXNzPXsoKSA9PiBkaXNwYXRjaCh7IHR5cGU6IFwibG9nLW91dFwiIH0pfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBMb2cgT3V0XG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKTtcbiAgICAgIGNhc2UgXCJsb2dnaW5nLW91dFwiOlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxCdXR0b24gdHlwZT1cImRlc3RydWN0aXZlXCIgZGlzYWJsZWQ+XG4gICAgICAgICAgICBMb2cgT3V0XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gKFxuICAgIDxDb250ZXh0VmlldyB0aXRsZT1cIkdldHRpbmcgc3RhcnRlZCB3aXRoIFN0cmlwZS1BcHBzXCI+XG4gICAgICA8Qm94PnthY3Rpb25zKHN0YXRlKX08L0JveD5cbiAgICA8L0NvbnRleHRWaWV3PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxVQUFBLFVBQUEsVUFBQTtBQUVhLGNBQUEsYUFBWSxHQUFBLFFBQUEsNEJBR3ZCLFdBQVc7QUFHQSxjQUFBLGlCQUFnQixHQUFBLFFBQUEsNEJBRzNCLGlCQUFpQjtRQUNqQixlQUFlLENBQUMsU0FBUyxZQUFZLFNBQVMsU0FBUztPQUN4RDtBQUdZLGNBQUEsU0FBUSxHQUFBLFFBQUEsNEJBQWdELE9BQU87QUFHL0QsY0FBQSxVQUFTLEdBQUEsUUFBQSw0QkFDcEIsVUFDQTtRQUNFLGVBQWUsQ0FBQyxlQUFlLFNBQVMsU0FBUztPQUNsRDtBQUlVLGNBQUEsVUFBUyxHQUFBLFFBQUEsNEJBQ3BCLFFBQVE7QUFJRyxjQUFBLGVBQWMsR0FBQSxRQUFBLDRCQUd6QixlQUFlO1FBQ2YsZUFBZSxDQUFDLGFBQWE7T0FDOUI7QUFHWSxjQUFBLFlBQVcsR0FBQSxRQUFBLDRCQUN0QixZQUNBO1FBQ0UsZUFBZSxDQUFDLE9BQU87T0FDeEI7QUFJVSxjQUFBLFFBQU8sR0FBQSxRQUFBLDRCQUE4QyxNQUFNO0FBRzNELGNBQUEsWUFBVyxHQUFBLFFBQUEsNEJBQ3RCLFVBQVU7QUFJQyxjQUFBLFdBQVUsR0FBQSxRQUFBLDRCQUNyQixTQUFTO0FBSUUsY0FBQSxr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QUEsS0FBQSxXQUFBO0FBQUEsZUFBQSxLQUFBO01BQU8sRUFBQSxDQUFBO0FBRVAsYUFBQSxlQUFBLFNBQUEsT0FBQSxFQUFBLFlBQUEsTUFBQSxLQUFBLFdBQUE7QUFBQSxlQUFBLEtBQUE7TUFBRyxFQUFBLENBQUE7QUFDSCxhQUFBLGVBQUEsU0FBQSxXQUFBLEVBQUEsWUFBQSxNQUFBLEtBQUEsV0FBQTtBQUFBLGVBQUEsS0FBQTtNQUFPLEVBQUEsQ0FBQTtBQUNQLGFBQUEsZUFBQSxTQUFBLFlBQUEsRUFBQSxZQUFBLE1BQUEsS0FBQSxXQUFBO0FBQUEsZUFBQSxLQUFBO01BQVEsRUFBQSxDQUFBO0FBQ1IsYUFBQSxlQUFBLFNBQUEsYUFBQSxFQUFBLFlBQUEsTUFBQSxLQUFBLFdBQUE7QUFBQSxlQUFBLEtBQUE7TUFBUyxFQUFBLENBQUE7QUFDVCxhQUFBLGVBQUEsU0FBQSxTQUFBLEVBQUEsWUFBQSxNQUFBLEtBQUEsV0FBQTtBQUFBLGVBQUEsS0FBQTtNQUFLLEVBQUEsQ0FBQTtBQUNMLGFBQUEsZUFBQSxTQUFBLGFBQUEsRUFBQSxZQUFBLE1BQUEsS0FBQSxXQUFBO0FBQUEsZUFBQSxLQUFBO01BQVMsRUFBQSxDQUFBO0FBQ1QsYUFBQSxlQUFBLFNBQUEsYUFBQSxFQUFBLFlBQUEsTUFBQSxLQUFBLFdBQUE7QUFBQSxlQUFBLEtBQUE7TUFBUyxFQUFBLENBQUE7QUFDVCxhQUFBLGVBQUEsU0FBQSxlQUFBLEVBQUEsWUFBQSxNQUFBLEtBQUEsV0FBQTtBQUFBLGVBQUEsS0FBQTtNQUFXLEVBQUEsQ0FBQTtBQUNYLGFBQUEsZUFBQSxTQUFBLGFBQUEsRUFBQSxZQUFBLE1BQUEsS0FBQSxXQUFBO0FBQUEsZUFBQSxLQUFBO01BQVMsRUFBQSxDQUFBO0FBQ1QsYUFBQSxlQUFBLFNBQUEsbUJBQUEsRUFBQSxZQUFBLE1BQUEsS0FBQSxXQUFBO0FBQUEsZUFBQSxLQUFBO01BQWUsRUFBQSxDQUFBO0FBQ2YsYUFBQSxlQUFBLFNBQUEsWUFBQSxFQUFBLFlBQUEsTUFBQSxLQUFBLFdBQUE7QUFBQSxlQUFBLEtBQUE7TUFBUSxFQUFBLENBQUE7QUFDUixhQUFBLGVBQUEsU0FBQSxRQUFBLEVBQUEsWUFBQSxNQUFBLEtBQUEsV0FBQTtBQUFBLGVBQUEsS0FBQTtNQUFJLEVBQUEsQ0FBQTtBQUlKLGFBQUEsZUFBQSxTQUFBLFdBQUEsRUFBQSxZQUFBLE1BQUEsS0FBQSxXQUFBO0FBQUEsZUFBQSxLQUFBO01BQU8sRUFBQSxDQUFBO0FBRVQsbUJBQUEsdUNBQUEsT0FBQTtBQUNBLFVBQUEsc0JBQUE7QUFDRSxhQUFBLGVBQUEsU0FBQSxPQUFBLEVBQUEsWUFBQSxNQUFBLEtBQUEsV0FBQTtBQUFBLGVBQUEsb0JBQUE7TUFBRyxFQUFBLENBQUE7QUFDSCxhQUFBLGVBQUEsU0FBQSxVQUFBLEVBQUEsWUFBQSxNQUFBLEtBQUEsV0FBQTtBQUFBLGVBQUEsb0JBQUE7TUFBTSxFQUFBLENBQUE7QUFDTixhQUFBLGVBQUEsU0FBQSxZQUFBLEVBQUEsWUFBQSxNQUFBLEtBQUEsV0FBQTtBQUFBLGVBQUEsb0JBQUE7TUFBUSxFQUFBLENBQUE7QUFDUixhQUFBLGVBQUEsU0FBQSxhQUFBLEVBQUEsWUFBQSxNQUFBLEtBQUEsV0FBQTtBQUFBLGVBQUEsb0JBQUE7TUFBUyxFQUFBLENBQUE7QUFDVCxhQUFBLGVBQUEsU0FBQSxRQUFBLEVBQUEsWUFBQSxNQUFBLEtBQUEsV0FBQTtBQUFBLGVBQUEsb0JBQUE7TUFBSSxFQUFBLENBQUE7QUFDSixhQUFBLGVBQUEsU0FBQSxVQUFBLEVBQUEsWUFBQSxNQUFBLEtBQUEsV0FBQTtBQUFBLGVBQUEsb0JBQUE7TUFBTSxFQUFBLENBQUE7QUFDTixhQUFBLGVBQUEsU0FBQSxRQUFBLEVBQUEsWUFBQSxNQUFBLEtBQUEsV0FBQTtBQUFBLGVBQUEsb0JBQUE7TUFBSSxFQUFBLENBQUE7QUFDSixhQUFBLGVBQUEsU0FBQSxTQUFBLEVBQUEsWUFBQSxNQUFBLEtBQUEsV0FBQTtBQUFBLGVBQUEsb0JBQUE7TUFBSyxFQUFBLENBQUE7QUFDTCxhQUFBLGVBQUEsU0FBQSxVQUFBLEVBQUEsWUFBQSxNQUFBLEtBQUEsV0FBQTtBQUFBLGVBQUEsb0JBQUE7TUFBTSxFQUFBLENBQUE7QUFDTixhQUFBLGVBQUEsU0FBQSxVQUFBLEVBQUEsWUFBQSxNQUFBLEtBQUEsV0FBQTtBQUFBLGVBQUEsb0JBQUE7TUFBTSxFQUFBLENBQUE7QUFDTixhQUFBLGVBQUEsU0FBQSxZQUFBLEVBQUEsWUFBQSxNQUFBLEtBQUEsV0FBQTtBQUFBLGVBQUEsb0JBQUE7TUFBUSxFQUFBLENBQUE7QUFDUixhQUFBLGVBQUEsU0FBQSxhQUFBLEVBQUEsWUFBQSxNQUFBLEtBQUEsV0FBQTtBQUFBLGVBQUEsb0JBQUE7TUFBUyxFQUFBLENBQUE7Ozs7O0FDekRYO0FBQUE7QUFBQTtBQW9CQSxVQUFJLFlBQVksU0FBUyxXQUFXLFFBQVEsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7QUFDNUQsWUFBSSxNQUF1QztBQUN6QyxjQUFJLFdBQVcsUUFBVztBQUN4QixrQkFBTSxJQUFJLE1BQU0sOENBQThDO0FBQUEsVUFDaEU7QUFBQSxRQUNGO0FBRUEsWUFBSSxDQUFDLFdBQVc7QUFDZCxjQUFJO0FBQ0osY0FBSSxXQUFXLFFBQVc7QUFDeEIsb0JBQVEsSUFBSTtBQUFBLGNBQ1Y7QUFBQSxZQUVGO0FBQUEsVUFDRixPQUFPO0FBQ0wsZ0JBQUksT0FBTyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBQzVCLGdCQUFJLFdBQVc7QUFDZixvQkFBUSxJQUFJO0FBQUEsY0FDVixPQUFPLFFBQVEsT0FBTyxXQUFXO0FBQUUsdUJBQU8sS0FBSztBQUFBLGNBQWEsQ0FBQztBQUFBLFlBQy9EO0FBQ0Esa0JBQU0sT0FBTztBQUFBLFVBQ2Y7QUFFQSxnQkFBTSxjQUFjO0FBQ3BCLGdCQUFNO0FBQUEsUUFDUjtBQUFBLE1BQ0Y7QUFFQSxhQUFPLFVBQVU7QUFBQTtBQUFBOzs7Ozs7Ozs7OztBQzFDakIsVUFBQSxjQUFBLGdCQUFBLGlCQUFBO0FBR08sVUFBTSxrQkFBa0IsTUFBNkI7QUFDMUQsY0FBTSxlQUNKLFdBQVcsbUJBQW1CO0FBQ2hDLFNBQUEsR0FBQSxZQUFBLFNBQVUsY0FBYyx1Q0FBdUM7QUFDL0QsZUFBTztNQUNUO0FBTGEsY0FBQSxrQkFBZTs7Ozs7Ozs7OztBQ1Q1QixVQUFBLGNBQUE7QUFTTyxVQUFNQSx3QkFBNkMsQ0FDeEQsc0JBQ0U7QUFDRixnQkFBTyxHQUFBLFlBQUEsaUJBQWUsRUFBRyxLQUFLLHFCQUFxQixpQkFBaUI7TUFDdEU7QUFKYSxjQUFBLHVCQUFvQkE7Ozs7Ozs7OztBQ1BqQyxVQUFBLGNBQUE7QUFHQSxjQUFBLFVBQWUsWUFBQTs7Ozs7Ozs7OztBQ0xGLGNBQUEsY0FBYztBQUNkLGNBQUEsYUFBYTs7Ozs7QUNEMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUNBQSxrQkFBeUM7QUFFekMseUJBQWlDO0FBQ2pDLHFCQUE0RDtBQTZMbEQ7QUFwTFYsTUFBTSxZQUFZO0FBQ2xCLE1BQU0sYUFBYTtBQUNuQixNQUFNLGFBQWE7QUFDbkIsTUFBTSxXQUFXO0FBQ2pCLE1BQU0sY0FBYztBQW1CcEIsTUFBTSxlQUFlLE9BQWM7QUFBQSxJQUNqQyxNQUFNO0FBQUEsSUFDTixTQUFTO0FBQUEsTUFDUCxVQUFVLE9BQU8sT0FBTyxXQUFXO0FBQUEsSUFDckM7QUFBQSxFQUNGO0FBSUEsTUFBTSxVQUFrQyxDQUFDLFdBQVcsV0FBVztBQUM3RCxVQUFNLGNBQWMsTUFBTTtBQUN4QixjQUFRLE1BQU0sa0JBQWtCLE9BQU8sTUFBTSxhQUFhLFVBQVUsSUFBSTtBQUN4RSxhQUFPO0FBQUEsSUFDVDtBQUNBLFlBQVEsVUFBVSxNQUFNO0FBQUEsTUFDdEIsS0FBSyxnQkFBZ0I7QUFDbkIsZ0JBQVEsT0FBTyxNQUFNO0FBQUEsVUFDbkIsS0FBSztBQUNILG1CQUFPLE9BQU8sUUFBUSxPQUNsQixFQUFFLE1BQU0sYUFBYSxTQUFTLEVBQUUsTUFBTSxPQUFPLFFBQVEsS0FBSyxFQUFFLElBQzVEO0FBQUEsY0FDRSxNQUFNO0FBQUEsY0FDTixTQUFTLFVBQVU7QUFBQSxZQUNyQjtBQUFBLFVBQ047QUFDRSxtQkFBTyxZQUFZO0FBQUEsUUFDdkI7QUFBQSxNQUNGO0FBQUEsTUFDQSxLQUFLLGNBQWM7QUFDakIsZ0JBQVEsT0FBTyxNQUFNO0FBQUEsVUFDbkIsS0FBSztBQUNILG1CQUFPO0FBQUEsY0FDTCxNQUFNO0FBQUEsY0FDTixTQUFTLFVBQVU7QUFBQSxZQUNyQjtBQUFBLFVBQ0Y7QUFDRSxtQkFBTyxZQUFZO0FBQUEsUUFDdkI7QUFBQSxNQUNGO0FBQUEsTUFDQSxLQUFLLG9CQUFvQjtBQUN2QixnQkFBUSxPQUFPLE1BQU07QUFBQSxVQUNuQixLQUFLO0FBQ0gsbUJBQU8sYUFBYTtBQUFBLFVBQ3RCLEtBQUs7QUFDSCxtQkFBTyxFQUFFLE1BQU0sY0FBYztBQUFBLFVBQy9CO0FBQ0UsbUJBQU8sWUFBWTtBQUFBLFFBQ3ZCO0FBQUEsTUFDRjtBQUFBLE1BQ0EsS0FBSyxlQUFlO0FBQ2xCLGdCQUFRLE9BQU8sTUFBTTtBQUFBLFVBQ25CLEtBQUs7QUFDSCxtQkFBTyxhQUFhO0FBQUEsVUFDdEI7QUFDRSxtQkFBTyxZQUFZO0FBQUEsUUFDdkI7QUFBQSxNQUNGO0FBQUEsTUFDQSxLQUFLLGFBQWE7QUFDaEIsZ0JBQVEsT0FBTyxNQUFNO0FBQUEsVUFDbkIsS0FBSztBQUNILG1CQUFPLEVBQUUsTUFBTSxjQUFjO0FBQUEsVUFDL0I7QUFDRSxtQkFBTyxZQUFZO0FBQUEsUUFDdkI7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUNFLGVBQU8sWUFBWTtBQUFBLElBQ3ZCO0FBQUEsRUFDRjtBQU9BLE1BQU0sTUFBTSxDQUFDLEVBQUUsWUFBWSxNQUE2QjtBQUN0RCxVQUFNLENBQUMsT0FBTyxRQUFRLFFBQUkseUJBQVcsU0FBUyxNQUFNLFlBQVk7QUFDaEUsVUFBTSwyQkFBdUI7QUFBQSxNQUMzQixDQUFPLE9BQTJELHdCQUEzRCxJQUEyRCxtQkFBM0QsS0FBYSxLQUF1QyxDQUFDLEdBQU07QUFBOUMscUJBQUUsVUFqSDFCLElBaUh3QixJQUFjLG9CQUFkLElBQWMsQ0FBWjtBQWpIMUIsWUFBQUMsS0FBQUM7QUFrSE0sY0FBTSxnQkFBZ0IsSUFBSSxRQUFRLE9BQU87QUFDekMsc0JBQWMsT0FBTyxtQkFBa0JELE1BQUEsMkNBQWEsT0FBYixPQUFBQSxNQUFtQixFQUFFO0FBQzVELHNCQUFjLE9BQU8sc0JBQXFCQyxNQUFBLDJDQUFhLFFBQVEsT0FBckIsT0FBQUEsTUFBMkIsRUFBRTtBQUN2RSxzQkFBYyxPQUFPLG9CQUFvQixVQUFNLGlCQUFBQyxTQUFxQixDQUFDO0FBQ3JFLGVBQU8sTUFBTSxNQUFNLEtBQUssaUNBQ25CLFVBRG1CO0FBQUEsVUFFdEIsU0FBUztBQUFBLFFBQ1gsRUFBQztBQUFBLE1BQ0g7QUFBQSxNQUNBLENBQUM7QUFBQSxJQUNIO0FBQ0EsZ0NBQVUsTUFBTTtBQUNkLGNBQVEsTUFBTSxNQUFNO0FBQUEsUUFDbEIsS0FBSyxnQkFBZ0I7QUFFbkIsZ0JBQU0sYUFBYSxJQUFJLGdCQUFnQjtBQUN2QywrQkFBcUIsVUFBVTtBQUFBLFlBQzdCLFFBQVEsV0FBVztBQUFBLFVBQ3JCLENBQUMsRUFDRSxLQUFLLENBQUMsUUFBUSxJQUFJLEtBQUssQ0FBQyxFQUN4QjtBQUFBLFlBQUssQ0FBQyxTQUNMLFNBQVM7QUFBQSxjQUNQLE1BQU07QUFBQSxjQUNOLFNBQVMsRUFBRSxLQUFLO0FBQUEsWUFDbEIsQ0FBQztBQUFBLFVBQ0gsRUFDQyxNQUFNLE1BQU07QUFDWCxnQkFBSSxDQUFDLFdBQVcsT0FBTyxTQUFTO0FBQzlCLHVCQUFTO0FBQUEsZ0JBQ1AsTUFBTTtBQUFBLGdCQUNOLFNBQVMsRUFBRSxNQUFNLEtBQUs7QUFBQSxjQUN4QixDQUFDO0FBQUEsWUFDSDtBQUFBLFVBQ0YsQ0FBQztBQUNILGlCQUFPLE1BQU07QUFDWCx1QkFBVyxNQUFNO0FBQUEsVUFDbkI7QUFBQSxRQUNGO0FBQUEsUUFDQSxLQUFLLG9CQUFvQjtBQUV2QixnQkFBTSxXQUFXLFlBQVksTUFBTTtBQUNqQztBQUFBLGNBQ0UsR0FBRyxvQkFBb0IsTUFBTSxRQUFRO0FBQUEsWUFDdkMsRUFBRTtBQUFBLGNBQ0EsQ0FBQyxRQUNDLElBQUksVUFBVSxPQUNkLElBQUksU0FBUyxPQUNiLFNBQVM7QUFBQSxnQkFDUCxNQUFNO0FBQUEsY0FDUixDQUFDO0FBQUEsWUFDTDtBQUFBLFVBQ0YsR0FBRyxHQUFJO0FBQ1AsaUJBQU8sTUFBTSxjQUFjLFFBQVE7QUFBQSxRQUNyQztBQUFBLFFBQ0EsS0FBSyxlQUFlO0FBRWxCLGdCQUFNLGFBQWEsSUFBSSxnQkFBZ0I7QUFDdkMsK0JBQXFCLGFBQWE7QUFBQSxZQUNoQyxRQUFRLFdBQVc7QUFBQSxZQUNuQixRQUFRO0FBQUEsVUFDVixDQUFDLEVBQUUsUUFBUSxNQUFNO0FBQ2YscUJBQVM7QUFBQSxjQUNQLE1BQU07QUFBQSxZQUNSLENBQUM7QUFBQSxVQUNILENBQUM7QUFDRCxpQkFBTyxNQUFNO0FBQ1gsdUJBQVcsTUFBTTtBQUFBLFVBQ25CO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxJQUNGLEdBQUcsQ0FBQyxPQUFPLFFBQVEsQ0FBQztBQUVwQixVQUFNLFVBQVUsQ0FBQ0MsV0FBaUI7QUFDaEMsY0FBUUEsT0FBTSxNQUFNO0FBQUEsUUFDbEIsS0FBSztBQUNILGlCQUFPO0FBQUEsUUFDVCxLQUFLO0FBQ0gsaUJBQ0UsNENBQUM7QUFBQSxZQUNDLE1BQUs7QUFBQSxZQUVMLE1BQU0sR0FBRyxhQUFhLElBQUksZ0JBQWdCO0FBQUEsY0FDeEMsT0FBT0EsT0FBTSxRQUFRO0FBQUEsWUFDdkIsQ0FBQztBQUFBLFlBQ0QsUUFBTztBQUFBLFlBQ1AsU0FBUyxNQUFNLFNBQVMsRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUFBLFlBQzNDO0FBQUEsV0FFRDtBQUFBLFFBRUosS0FBSztBQUNILGlCQUNFO0FBQUEsWUFDRTtBQUFBLDBEQUFDO0FBQUEsZ0JBQUk7QUFBQSxlQUF1QztBQUFBLGNBQzVDLDRDQUFDO0FBQUEsZ0JBQ0MsTUFBSztBQUFBLGdCQUNMLFNBQVMsTUFBTSxTQUFTLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFBQSxnQkFDNUM7QUFBQSxlQUVEO0FBQUE7QUFBQSxXQUNGO0FBQUEsUUFFSixLQUFLO0FBQ0gsaUJBQ0U7QUFBQSxZQUNFO0FBQUEsMkRBQUM7QUFBQSxnQkFBSTtBQUFBO0FBQUEsa0JBQ21CQSxPQUFNLFFBQVEsS0FBSztBQUFBLGtCQUFLO0FBQUEsa0JBQzdDQSxPQUFNLFFBQVEsS0FBSztBQUFBLGtCQUFNO0FBQUE7QUFBQSxlQUM1QjtBQUFBLGNBQ0EsNENBQUM7QUFBQSxnQkFDQyxNQUFLO0FBQUEsZ0JBQ0wsTUFBTSxHQUFHLGNBQWMsSUFBSSxnQkFBZ0I7QUFBQSxrQkFDekMsU0FBUyxZQUFhLFFBQVE7QUFBQSxrQkFDOUIsTUFBTSxZQUFhO0FBQUEsZ0JBQ3JCLENBQUM7QUFBQSxnQkFDRCxRQUFPO0FBQUEsZ0JBQ1AsU0FBUyxNQUFNLFNBQVMsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUFBLGdCQUM1QztBQUFBLGVBRUQ7QUFBQTtBQUFBLFdBQ0Y7QUFBQSxRQUVKLEtBQUs7QUFDSCxpQkFDRSw0Q0FBQztBQUFBLFlBQU8sTUFBSztBQUFBLFlBQWMsVUFBUTtBQUFBLFlBQUM7QUFBQSxXQUVwQztBQUFBLE1BRU47QUFBQSxJQUNGO0FBQ0EsV0FDRSw0Q0FBQztBQUFBLE1BQVksT0FBTTtBQUFBLE1BQ2pCLHNEQUFDO0FBQUEsUUFBSyxrQkFBUSxLQUFLO0FBQUEsT0FBRTtBQUFBLEtBQ3ZCO0FBQUEsRUFFSjtBQUVBLE1BQU8sY0FBUTs7O0FEdFBmLCtCQUFjO0FBQ1AsTUFBTSxhQUFhO0FBTzFCLE1BQU8sbUJBQVE7QUFBQSxJQUNiLE1BQU07QUFBQSxJQUNOLFdBQVc7QUFBQSxJQUNYLFFBQVE7QUFBQSxJQUNSLFFBQVE7QUFBQSxJQUNSLGVBQWUsQ0FBQztBQUFBLElBQ2hCLGVBQWU7QUFBQSxNQUNiLFlBQVk7QUFBQSxJQUNkO0FBQUEsSUFDQSxnQkFBZ0I7QUFBQSxNQUNkLFNBQVM7QUFBQSxRQUNQO0FBQUEsVUFDRSxZQUFZO0FBQUEsVUFDWixhQUFhO0FBQUEsUUFDZjtBQUFBLE1BQ0Y7QUFBQSxNQUNBLFdBQVcsQ0FBQztBQUFBLE1BQ1osMkJBQTJCO0FBQUEsUUFDekIsZUFBZTtBQUFBLFFBQ2YsYUFBYTtBQUFBLFFBQ2IsV0FBVztBQUFBLE1BQ2I7QUFBQSxJQUNGO0FBQUEsSUFDQSx1QkFBdUI7QUFBQSxJQUN2QixhQUFhO0FBQUEsRUFDZjsiLAogICJuYW1lcyI6IFsiZmV0Y2hTdHJpcGVTaWduYXR1cmUiLCAiX2EiLCAiX2IiLCAiZmV0Y2hTdHJpcGVTaWduYXR1cmUiLCAic3RhdGUiXQp9Cg==
