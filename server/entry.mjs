import { setImportBuildGetters } from "vike/__internal/loadImportBuild";
const pageFilesLazy = {};
const pageFilesEager = {};
const pageFilesExportNamesLazy = {};
const pageFilesExportNamesEager = {};
const pageFilesList = [];
const neverLoaded = {};
const pageConfigsSerialized = [
  {
    pageId: "/pages/_error",
    isErrorPage: true,
    routeFilesystem: void 0,
    loadConfigValuesAll: () => import("./entries/pages_error.mjs"),
    configValuesSerialized: {
      ["isClientRuntimeLoaded"]: {
        type: "computed",
        definedAtData: null,
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      },
      ["clientRouting"]: {
        type: "standard",
        definedAtData: { "filePathToShowToUser": "vike-react/config", "fileExportPathToShowToUser": ["default", "clientRouting"] },
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      }
    }
  },
  {
    pageId: "/pages/index",
    isErrorPage: void 0,
    routeFilesystem: { "routeString": "/", "definedBy": "/pages/index/" },
    loadConfigValuesAll: () => import("./entries/pages_index.mjs"),
    configValuesSerialized: {
      ["isClientRuntimeLoaded"]: {
        type: "computed",
        definedAtData: null,
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      },
      ["clientRouting"]: {
        type: "standard",
        definedAtData: { "filePathToShowToUser": "vike-react/config", "fileExportPathToShowToUser": ["default", "clientRouting"] },
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      }
    }
  }
];
const pageConfigGlobalSerialized = {
  configValuesSerialized: {}
};
const pageFilesLazyIsomorph1 = /* @__PURE__ */ Object.assign({});
const pageFilesLazyIsomorph = { ...pageFilesLazyIsomorph1 };
pageFilesLazy[".page"] = pageFilesLazyIsomorph;
const pageFilesExportNamesEagerIsomorph1 = /* @__PURE__ */ Object.assign({});
const pageFilesExportNamesEagerIsomorph = { ...pageFilesExportNamesEagerIsomorph1 };
pageFilesExportNamesEager[".page"] = pageFilesExportNamesEagerIsomorph;
const pageFilesLazyServer1 = /* @__PURE__ */ Object.assign({});
const pageFilesLazyServer = { ...pageFilesLazyServer1 };
pageFilesLazy[".page.server"] = pageFilesLazyServer;
const pageFilesExportNamesEagerServer1 = /* @__PURE__ */ Object.assign({});
const pageFilesExportNamesEagerServer = { ...pageFilesExportNamesEagerServer1 };
pageFilesExportNamesEager[".page.server"] = pageFilesExportNamesEagerServer;
const pageFilesEagerRoute1 = /* @__PURE__ */ Object.assign({});
const pageFilesEagerRoute = { ...pageFilesEagerRoute1 };
pageFilesEager[".page.route"] = pageFilesEagerRoute;
const pageFilesExportNamesEagerClient1 = /* @__PURE__ */ Object.assign({});
const pageFilesExportNamesEagerClient = { ...pageFilesExportNamesEagerClient1 };
pageFilesExportNamesEager[".page.client"] = pageFilesExportNamesEagerClient;
const pageFiles = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  neverLoaded,
  pageConfigGlobalSerialized,
  pageConfigsSerialized,
  pageFilesEager,
  pageFilesExportNamesEager,
  pageFilesExportNamesLazy,
  pageFilesLazy,
  pageFilesList
}, Symbol.toStringTag, { value: "Module" }));
{
  const assetsManifest = {
  "KFOmCnqEu92Fr1Mu4WxKOzY.woff2": {
    "file": "assets/static/KFOmCnqEu92Fr1Mu4WxKOzY.LPh2sqOm.woff2",
    "src": "KFOmCnqEu92Fr1Mu4WxKOzY.woff2"
  },
  "KFOmCnqEu92Fr1Mu4mxK.woff2": {
    "file": "assets/static/KFOmCnqEu92Fr1Mu4mxK.DXyFPIdK.woff2",
    "src": "KFOmCnqEu92Fr1Mu4mxK.woff2"
  },
  "KFOmCnqEu92Fr1Mu5mxKOzY.woff2": {
    "file": "assets/static/KFOmCnqEu92Fr1Mu5mxKOzY.BiRJyiea.woff2",
    "src": "KFOmCnqEu92Fr1Mu5mxKOzY.woff2"
  },
  "KFOmCnqEu92Fr1Mu72xKOzY.woff2": {
    "file": "assets/static/KFOmCnqEu92Fr1Mu72xKOzY.D76n7Daw.woff2",
    "src": "KFOmCnqEu92Fr1Mu72xKOzY.woff2"
  },
  "KFOmCnqEu92Fr1Mu7GxKOzY.woff2": {
    "file": "assets/static/KFOmCnqEu92Fr1Mu7GxKOzY.DgXbz5gU.woff2",
    "src": "KFOmCnqEu92Fr1Mu7GxKOzY.woff2"
  },
  "KFOmCnqEu92Fr1Mu7WxKOzY.woff2": {
    "file": "assets/static/KFOmCnqEu92Fr1Mu7WxKOzY.DhTUfTw_.woff2",
    "src": "KFOmCnqEu92Fr1Mu7WxKOzY.woff2"
  },
  "KFOmCnqEu92Fr1Mu7mxKOzY.woff2": {
    "file": "assets/static/KFOmCnqEu92Fr1Mu7mxKOzY.Dduq6i1a.woff2",
    "src": "KFOmCnqEu92Fr1Mu7mxKOzY.woff2"
  },
  "_chunk-!~{004}~.js": {
    "file": "assets/static/vike-react-b64a028b.BcWtY8Ol.css",
    "src": "_chunk-!~{004}~.js"
  },
  "_chunk-D6lHprcd.js": {
    "file": "assets/chunks/chunk-D6lHprcd.js",
    "name": "executeHook"
  },
  "_chunk-_XjeYp_M.js": {
    "file": "assets/chunks/chunk-_XjeYp_M.js",
    "name": "emotion-react-jsx-runtime.browser.esm",
    "imports": [
      "_chunk-D6lHprcd.js"
    ],
    "css": [
      "assets/static/vike-react-b64a028b.BcWtY8Ol.css"
    ]
  },
  "node_modules/vike/dist/esm/client/client-routing-runtime/entry.js": {
    "file": "assets/entries/entry-client-routing.DNiujVhE.js",
    "name": "entries/entry-client-routing",
    "src": "node_modules/vike/dist/esm/client/client-routing-runtime/entry.js",
    "isEntry": true,
    "imports": [
      "_chunk-D6lHprcd.js"
    ],
    "dynamicImports": [
      "virtual:vike:pageConfigValuesAll:client:/pages/_error",
      "virtual:vike:pageConfigValuesAll:client:/pages/index"
    ]
  },
  "virtual:vike:pageConfigValuesAll:client:/pages/_error": {
    "file": "assets/entries/pages_error.DzcZC0IE.js",
    "name": "entries/pages/_error",
    "src": "virtual:vike:pageConfigValuesAll:client:/pages/_error",
    "isEntry": true,
    "isDynamicEntry": true,
    "imports": [
      "_chunk-_XjeYp_M.js",
      "_chunk-D6lHprcd.js"
    ],
    "css": [
      "assets/static/vike-react-b64a028b.BcWtY8Ol.css"
    ]
  },
  "virtual:vike:pageConfigValuesAll:client:/pages/index": {
    "file": "assets/entries/pages_index.y7zhtVQW.js",
    "name": "entries/pages/index",
    "src": "virtual:vike:pageConfigValuesAll:client:/pages/index",
    "isEntry": true,
    "isDynamicEntry": true,
    "imports": [
      "_chunk-_XjeYp_M.js",
      "_chunk-D6lHprcd.js"
    ],
    "css": [
      "assets/static/vike-react-b64a028b.BcWtY8Ol.css"
    ]
  },
  "webfonts.css": {
    "file": "assets/static/webfonts.DbfLT38o.css",
    "src": "webfonts.css"
  }
};
  const pluginManifest = {
    "version": "0.4.201",
    "usesClientRouter": false,
    "baseServer": "/vike-react-ts/",
    "baseAssets": "/vike-react-ts/",
    "includeAssetsImportedByServer": true,
    "redirects": {},
    "trailingSlash": false,
    "disableUrlNormalization": false
  };
  setImportBuildGetters({
    pageFiles: () => pageFiles,
    getAssetsManifest: () => assetsManifest,
    pluginManifest: () => pluginManifest
  });
}
//# sourceMappingURL=entry.mjs.map
