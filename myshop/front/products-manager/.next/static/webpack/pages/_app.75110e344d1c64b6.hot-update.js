"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/context/ProductContext.js":
/*!***************************************!*\
  !*** ./src/context/ProductContext.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ProductProvider: function() { return /* binding */ ProductProvider; },\n/* harmony export */   useProduct: function() { return /* binding */ useProduct; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\nconst ProductContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst ProductProvider = (param)=>{\n    let { children } = param;\n    _s();\n    const [selectedProductId, setSelectedProductId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProductContext.Provider, {\n        value: {\n            selectedProductId,\n            setSelectedProductId\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Vermillion\\\\Desktop\\\\Proyecto_Final\\\\Proyecto_Final\\\\myshop\\\\front\\\\products-manager\\\\src\\\\context\\\\ProductContext.js\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ProductProvider, \"hSB+pMrcg0UIDG4gD6KnkxJYArE=\");\n_c = ProductProvider;\nconst useProduct = ()=>{\n    _s1();\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ProductContext);\n};\n_s1(useProduct, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nvar _c;\n$RefreshReg$(_c, \"ProductProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dC9Qcm9kdWN0Q29udGV4dC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFtRTtBQUVuRSxNQUFNSSwrQkFBaUJILG9EQUFhQTtBQUU3QixNQUFNSSxrQkFBa0I7UUFBQyxFQUFFQyxRQUFRLEVBQUU7O0lBQzFDLE1BQU0sQ0FBQ0MsbUJBQW1CQyxxQkFBcUIsR0FBR04sK0NBQVFBLENBQUM7SUFFM0QscUJBQ0UsOERBQUNFLGVBQWVLLFFBQVE7UUFDdEJDLE9BQU87WUFBRUg7WUFBbUJDO1FBQXFCO2tCQUVoREY7Ozs7OztBQUdQLEVBQUU7R0FWV0Q7S0FBQUE7QUFZTixNQUFNTSxhQUFhOztJQUFNUixPQUFBQSxpREFBVUEsQ0FBQ0M7QUFBYyxFQUFFO0lBQTlDTyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29udGV4dC9Qcm9kdWN0Q29udGV4dC5qcz9mMjM0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgUHJvZHVjdENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5leHBvcnQgY29uc3QgUHJvZHVjdFByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIGNvbnN0IFtzZWxlY3RlZFByb2R1Y3RJZCwgc2V0U2VsZWN0ZWRQcm9kdWN0SWRdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UHJvZHVjdENvbnRleHQuUHJvdmlkZXJcclxuICAgICAgdmFsdWU9e3sgc2VsZWN0ZWRQcm9kdWN0SWQsIHNldFNlbGVjdGVkUHJvZHVjdElkIH19XHJcbiAgICA+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvUHJvZHVjdENvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VQcm9kdWN0ID0gKCkgPT4gdXNlQ29udGV4dChQcm9kdWN0Q29udGV4dCk7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VTdGF0ZSIsInVzZUNvbnRleHQiLCJQcm9kdWN0Q29udGV4dCIsIlByb2R1Y3RQcm92aWRlciIsImNoaWxkcmVuIiwic2VsZWN0ZWRQcm9kdWN0SWQiLCJzZXRTZWxlY3RlZFByb2R1Y3RJZCIsIlByb3ZpZGVyIiwidmFsdWUiLCJ1c2VQcm9kdWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/context/ProductContext.js\n"));

/***/ })

});