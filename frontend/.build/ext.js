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
  var React = __toESM(__require("react"));
  var import_oauth = __toESM(require_oauth2());
  var import_jsx_runtime = __require("react/jsx-runtime");
  var { useState, useEffect } = React;
  var getAuthURL = (state, challenge, mode) => `http://localhost:5000/get-oauth-link/?response_type=code&client&redirect&state=${state}&code_challenge=${challenge}&code_challenge_method=S256`;
  var OAuthApp = ({ environment, userContext }) => {
    const { mode } = environment;
    const [authURL, setAuthURL] = useState("");
    const [stripeStatus, setStripeStatus] = useState("down");
    const getStatus = () => __async(void 0, null, function* () {
      const { status } = yield fetch("http://localhost:5000/health-check", {
        method: "GET",
        headers: {
          "Content-type": "application/json"
        }
      }).then((res) => res.json()).then((result) => setStripeStatus(result == "OK" ? "up" : "down"));
      setStripeStatus(status == "OK" ? "up" : "down");
    });
    getStatus();
    useEffect(() => {
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
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.Button, {
          type: "primary",
          href: authURL,
          target: "_blank",
          children: "Begin Authorize"
        })
      ]
    });
  };
  var App_default = OAuthApp;

  // .build/manifest.js
  __reExport(manifest_exports, __toESM(require_version()));
  var BUILD_TIME = "2023-02-23 20:13:04.846413261 +0530 IST m=+0.060712294";
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0BzdHJpcGUvc3JjL3VpL0BzYWlsL3VpL2luZGV4LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9Ac3RyaXBlL3NyYy91aS9Ac3RyaXBlLWludGVybmFsL3RhaWxvci1kYXNoYm9hcmQtY29tcG9uZW50cy9pbmRleC50cyIsICIuLi9ub2RlX21vZHVsZXMvQHN0cmlwZS9zcmMvdWkvbWFudWFsX2NvbXBvbmVudHMudHMiLCAiLi4vbm9kZV9tb2R1bGVzL0BzdHJpcGUvc3JjL3VpL2luZGV4LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9pbnZhcmlhbnQvYnJvd3Nlci5qcyIsICIuLi9ub2RlX21vZHVsZXMvQHN0cmlwZS9zcmMvdXRpbHMvX2VuZHBvaW50LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9Ac3RyaXBlL3NyYy91dGlscy9vYXV0aC50cyIsICIuLi9ub2RlX21vZHVsZXMvQHN0cmlwZS9zcmMvb2F1dGgudHMiLCAiLi4vbm9kZV9tb2R1bGVzL0BzdHJpcGUvc3JjL3ZlcnNpb24udHMiLCAibWFuaWZlc3QuanMiLCAiLi4vc3JjL3ZpZXdzL0FwcC50c3giXSwKICAic291cmNlc0NvbnRlbnQiOiBbbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFVzZSBpbnZhcmlhbnQoKSB0byBhc3NlcnQgc3RhdGUgd2hpY2ggeW91ciBwcm9ncmFtIGFzc3VtZXMgdG8gYmUgdHJ1ZS5cbiAqXG4gKiBQcm92aWRlIHNwcmludGYtc3R5bGUgZm9ybWF0IChvbmx5ICVzIGlzIHN1cHBvcnRlZCkgYW5kIGFyZ3VtZW50c1xuICogdG8gcHJvdmlkZSBpbmZvcm1hdGlvbiBhYm91dCB3aGF0IGJyb2tlIGFuZCB3aGF0IHlvdSB3ZXJlXG4gKiBleHBlY3RpbmcuXG4gKlxuICogVGhlIGludmFyaWFudCBtZXNzYWdlIHdpbGwgYmUgc3RyaXBwZWQgaW4gcHJvZHVjdGlvbiwgYnV0IHRoZSBpbnZhcmlhbnRcbiAqIHdpbGwgcmVtYWluIHRvIGVuc3VyZSBsb2dpYyBkb2VzIG5vdCBkaWZmZXIgaW4gcHJvZHVjdGlvbi5cbiAqL1xuXG52YXIgaW52YXJpYW50ID0gZnVuY3Rpb24oY29uZGl0aW9uLCBmb3JtYXQsIGEsIGIsIGMsIGQsIGUsIGYpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignaW52YXJpYW50IHJlcXVpcmVzIGFuIGVycm9yIG1lc3NhZ2UgYXJndW1lbnQnKTtcbiAgICB9XG4gIH1cblxuICBpZiAoIWNvbmRpdGlvbikge1xuICAgIHZhciBlcnJvcjtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGVycm9yID0gbmV3IEVycm9yKFxuICAgICAgICAnTWluaWZpZWQgZXhjZXB0aW9uIG9jY3VycmVkOyB1c2UgdGhlIG5vbi1taW5pZmllZCBkZXYgZW52aXJvbm1lbnQgJyArXG4gICAgICAgICdmb3IgdGhlIGZ1bGwgZXJyb3IgbWVzc2FnZSBhbmQgYWRkaXRpb25hbCBoZWxwZnVsIHdhcm5pbmdzLidcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBhcmdzID0gW2EsIGIsIGMsIGQsIGUsIGZdO1xuICAgICAgdmFyIGFyZ0luZGV4ID0gMDtcbiAgICAgIGVycm9yID0gbmV3IEVycm9yKFxuICAgICAgICBmb3JtYXQucmVwbGFjZSgvJXMvZywgZnVuY3Rpb24oKSB7IHJldHVybiBhcmdzW2FyZ0luZGV4KytdOyB9KVxuICAgICAgKTtcbiAgICAgIGVycm9yLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgfVxuXG4gICAgZXJyb3IuZnJhbWVzVG9Qb3AgPSAxOyAvLyB3ZSBkb24ndCBjYXJlIGFib3V0IGludmFyaWFudCdzIG93biBmcmFtZVxuICAgIHRocm93IGVycm9yO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGludmFyaWFudDtcbiIsIG51bGwsIG51bGwsIG51bGwsIG51bGwsICJcblxuaW1wb3J0IEFwcCBmcm9tICcuLi9zcmMvdmlld3MvQXBwJztcblxuXG5leHBvcnQgKiBmcm9tICdAc3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvdmVyc2lvbic7XG5leHBvcnQgY29uc3QgQlVJTERfVElNRSA9ICcyMDIzLTAyLTIzIDIwOjEzOjA0Ljg0NjQxMzI2MSArMDUzMCBJU1QgbT0rMC4wNjA3MTIyOTQnXG5cbmV4cG9ydCB7XG5cdFxuXHRBcHAsXG5cblx0XG59O1xuZXhwb3J0IGRlZmF1bHQge1xuICBcImlkXCI6IFwiY29tLmV4YW1wbGUuYmFzaWMtb2F1dGgyLXRlc3RcIixcbiAgXCJ2ZXJzaW9uXCI6IFwiMC4wLjJcIixcbiAgXCJuYW1lXCI6IFwiQmFzaWMtT0F1dGgyIFRlc3RcIixcbiAgXCJpY29uXCI6IFwiXCIsXG4gIFwicGVybWlzc2lvbnNcIjogW1xuICAgIHtcbiAgICAgIFwicGVybWlzc2lvblwiOiBcInNlY3JldF93cml0ZVwiLFxuICAgICAgXCJwdXJwb3NlXCI6IFwiQWxsb3dzIHN0b3Jpbmcgc2VjcmV0cyBiZXR3ZWVuIHBhZ2UgcmVsb2Fkc1wiXG4gICAgfVxuICBdLFxuICBcImFwcF9iYWNrZW5kXCI6IHtcbiAgICBcIndlYmhvb2tzXCI6IG51bGxcbiAgfSxcbiAgXCJ1aV9leHRlbnNpb25cIjoge1xuICAgIFwidmlld3NcIjogW1xuICAgICAge1xuICAgICAgICBcInZpZXdwb3J0XCI6IFwic3RyaXBlLmRhc2hib2FyZC5ob21lLm92ZXJ2aWV3XCIsXG4gICAgICAgIFwiY29tcG9uZW50XCI6IFwiQXBwXCJcbiAgICAgIH0sXG5cbiAgICBdLFxuICAgIFwiYWN0aW9uc1wiOiBbXSxcbiAgICBcImNvbnRlbnRfc2VjdXJpdHlfcG9saWN5XCI6IHtcbiAgICAgIFwiY29ubmVjdC1zcmNcIjogbnVsbCxcbiAgICAgIFwiaW1hZ2Utc3JjXCI6IG51bGwsXG4gICAgICBcInB1cnBvc2VcIjogXCJcIlxuICAgIH1cbiAgfSxcbiAgXCJwb3N0X2luc3RhbGxfYWN0aW9uXCI6IG51bGwsXG4gIFwiY29uc3RhbnRzXCI6IG51bGxcbn1cbiIsICJpbXBvcnQge0NvbnRleHRWaWV3LCBCdXR0b24sIEJveCwgTGlua30gZnJvbSAnQHN0cmlwZS91aS1leHRlbnNpb24tc2RrL3VpJztcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7Y3JlYXRlT0F1dGhTdGF0ZX0gZnJvbSAnQHN0cmlwZS91aS1leHRlbnNpb24tc2RrL29hdXRoJztcbmltcG9ydCB0eXBlIHtFeHRlbnNpb25Db250ZXh0VmFsdWV9IGZyb20gJ0BzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay9jb250ZXh0JztcbmltcG9ydCBmZXRjaFN0cmlwZVNpZ25hdHVyZSBmcm9tICdAc3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvc2lnbmF0dXJlJztcblxuXG5jb25zdCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gPSBSZWFjdDtcblxuXG5jb25zdCBCQUNLRU5EX1VSTCA9ICdodHRwOi8vbG9jYWxob3N0OjUwMDAvdmFsaWRhdGV1c2VyLyc7XG5cbmNvbnN0IGdldFJlZGlyZWN0VVJMID0gKG1vZGU6ICdsaXZlJyB8ICd0ZXN0JykgPT4gYGh0dHBzOi8vZGFzaGJvYXJkLnN0cmlwZS5jb20vJHttb2RlID09PSAndGVzdCcgPyAndGVzdC8nIDogJyd9YXBwcy1vYXV0aC9jb20uZXhhbXBsZS5vYXV0aC1leGFtcGxlYDtcblxuY29uc3QgZ2V0QXV0aFVSTCA9IChzdGF0ZTogc3RyaW5nLCBjaGFsbGVuZ2U6IHN0cmluZywgbW9kZTogJ2xpdmUnIHwgJ3Rlc3QnKSA9PlxuICAgIGBodHRwOi8vbG9jYWxob3N0OjUwMDAvZ2V0LW9hdXRoLWxpbmsvP3Jlc3BvbnNlX3R5cGU9Y29kZSZjbGllbnQmcmVkaXJlY3Qmc3RhdGU9JHtzdGF0ZX0mY29kZV9jaGFsbGVuZ2U9JHtjaGFsbGVuZ2V9JmNvZGVfY2hhbGxlbmdlX21ldGhvZD1TMjU2YDtcblxuXG5jb25zdCBPQXV0aEFwcCA9ICh7ZW52aXJvbm1lbnQsIHVzZXJDb250ZXh0fTogRXh0ZW5zaW9uQ29udGV4dFZhbHVlKSA9PiB7XG4gICAgY29uc3Qge21vZGV9ID0gZW52aXJvbm1lbnQ7XG4gICAgY29uc3QgW2F1dGhVUkwsIHNldEF1dGhVUkxdID0gdXNlU3RhdGUoJycpO1xuICAgIC8vIGNvbnN0IFtoYXNTaWduZWRJbiwgc2V0aGFzU2lnbmVkSW5dID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuICAgIGNvbnN0IFtzdHJpcGVTdGF0dXMsIHNldFN0cmlwZVN0YXR1c10gPSB1c2VTdGF0ZTxzdHJpbmc+KCdkb3duJyk7XG5cbiAgICBjb25zdCBnZXRTdGF0dXMgPSBhc3luYyAoKSA9PntcbiAgICAgICAgY29uc3Qge3N0YXR1c30gPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo1MDAwL2hlYWx0aC1jaGVjaycsIHtcbiAgICAgICAgICAgIG1ldGhvZDpcIkdFVFwiLFxuICAgICAgICAgICAgaGVhZGVyczp7XG4gICAgICAgICAgICAgICAgLy8gJ3N0cmlwZS1zaWduYXR1cmUnOiBhd2FpdCBmZXRjaFN0cmlwZVNpZ25hdHVyZSgpLFxuICAgICAgICAgICAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvLyBib2R5OkpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgIC8vICAgICB1c2VyX2lkOiB1c2VyQ29udGV4dD8uaWQsXG4gICAgICAgICAgICAvLyAgICAgYWNjb3VudF9pZDogdXNlckNvbnRleHQ/LmFjY291bnQuaWRcbiAgICAgICAgICAgIC8vIH0pXG4gICAgICAgIH0pLnRoZW4oKHJlcyk9PiByZXMuanNvbigpKVxuICAgICAgICAgICAgLnRoZW4ocmVzdWx0PT4gc2V0U3RyaXBlU3RhdHVzKHJlc3VsdD09J09LJz8gJ3VwJzogJ2Rvd24nKSlcbiAgICAgICAgc2V0U3RyaXBlU3RhdHVzKHN0YXR1cyA9PSAnT0snPyAndXAnOiAnZG93bicpXG4gICAgfVxuICAgIGdldFN0YXR1cygpO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIC8vIHZhbGlkYXRlVXNlcigpO1xuXG4gICAgICAgIGNyZWF0ZU9BdXRoU3RhdGUoKS50aGVuKCh7c3RhdGUsIGNoYWxsZW5nZX0pID0+IHtcbiAgICAgICAgICAgIHNldEF1dGhVUkwoZ2V0QXV0aFVSTChzdGF0ZSwgY2hhbGxlbmdlLCBtb2RlKSk7XG4gICAgICAgIH0pO1xuICAgIH0sIFttb2RlXSk7XG4gICAgcmV0dXJuIChcblxuICAgICAgICA8Q29udGV4dFZpZXcgdGl0bGU9XCJQYXlvdXQgQXBwW1RFU1RdXCI+XG4gICAgICAgICAgICA8Qm94PlN0cmlwZSBpcyB7c3RyaXBlU3RhdHVzfTwvQm94PlxuICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIGhyZWY9e2F1dGhVUkx9IHRhcmdldD1cIl9ibGFua1wiPkJlZ2luIEF1dGhvcml6ZTwvQnV0dG9uPlxuICAgICAgICA8L0NvbnRleHRWaWV3PlxuXG4gICAgKTtcblxuXG59O1xuZXhwb3J0IGRlZmF1bHQgT0F1dGhBcHA7XG5cblxuXG5cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLFVBQUEsVUFBQSxVQUFBO0FBRWEsY0FBQSxhQUFZLEdBQUEsUUFBQSw0QkFHdkIsV0FBVztB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QSxLQUFBLFdBQUE7QUFBQSxlQUFBLEtBQUE7TUFBYyxFQUFBLENBQUE7QUFHZCxhQUFBLGVBQUEsU0FBQSxRQUFBLEVBQUEsWUFBQSxNQUFBLEtBQUEsV0FBQTtBQUFBLGVBQUEsS0FBQTtNQUFJLEVBQUEsQ0FBQTtBQUNKLGFBQUEsZUFBQSxTQUFBLFlBQUEsRUFBQSxZQUFBLE1BQUEsS0FBQSxXQUFBO0FBQUEsZUFBQSxLQUFBO01BQVEsRUFBQSxDQUFBO0FBQ1IsYUFBQSxlQUFBLFNBQUEsUUFBQSxFQUFBLFlBQUEsTUFBQSxLQUFBLFdBQUE7QUFBQSxlQUFBLEtBQUE7TUFBSSxFQUFBLENBQUE7QUFDSixhQUFBLGVBQUEsU0FBQSxhQUFBLEVBQUEsWUFBQSxNQUFBLEtBQUEsV0FBQTtBQUFBLGVBQUEsS0FBQTtNQUFTLEVBQUEsQ0FBQTtBQUNULGFBQUEsZUFBQSxTQUFBLFlBQUEsRUFBQSxZQUFBLE1BQUEsS0FBQSxXQUFBO0FBQUEsZUFBQSxLQUFBO01BQVEsRUFBQSxDQUFBO0FBS1IsYUFBQSxlQUFBLFNBQUEsV0FBQSxFQUFBLFlBQUEsTUFBQSxLQUFBLFdBQUE7QUFBQSxlQUFBLEtBQUE7TUFBTyxFQUFBLENBQUE7QUFFUCxhQUFBLGVBQUEsU0FBQSxPQUFBLEVBQUEsWUFBQSxNQUFBLEtBQUEsV0FBQTtBQUFBLGVBQUEsS0FBQTtNQUFHLEVBQUEsQ0FBQTtBQUNILGFBQUEsZUFBQSxTQUFBLFdBQUEsRUFBQSxZQUFBLE1BQUEsS0FBQSxXQUFBO0FBQUEsZUFBQSxLQUFBO01BQU8sRUFBQSxDQUFBO0FBQ1AsYUFBQSxlQUFBLFNBQUEsWUFBQSxFQUFBLFlBQUEsTUFBQSxLQUFBLFdBQUE7QUFBQSxlQUFBLEtBQUE7TUFBUSxFQUFBLENBQUE7QUFDUixhQUFBLGVBQUEsU0FBQSxhQUFBLEVBQUEsWUFBQSxNQUFBLEtBQUEsV0FBQTtBQUFBLGVBQUEsS0FBQTtNQUFTLEVBQUEsQ0FBQTtBQUNULGFBQUEsZUFBQSxTQUFBLFNBQUEsRUFBQSxZQUFBLE1BQUEsS0FBQSxXQUFBO0FBQUEsZUFB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
