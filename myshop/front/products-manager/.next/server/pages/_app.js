/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/context/ProductContext.js":
/*!***************************************!*\
  !*** ./src/context/ProductContext.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ProductProvider: () => (/* binding */ ProductProvider),\n/* harmony export */   useProduct: () => (/* binding */ useProduct)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst ProductContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst ProductProvider = ({ children })=>{\n    const [selectedProductId, setSelectedProductId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [userId, setUserId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [refreshCart, setRefreshCart] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProductContext.Provider, {\n        value: {\n            selectedProductId,\n            setSelectedProductId,\n            userId,\n            setUserId,\n            refreshCart,\n            setRefreshCart\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Vermillion\\\\Desktop\\\\Proyecto_Final\\\\Proyecto_Final\\\\myshop\\\\front\\\\products-manager\\\\src\\\\context\\\\ProductContext.js\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, undefined);\n};\nconst useProduct = ()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ProductContext);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dC9Qcm9kdWN0Q29udGV4dC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQW1FO0FBRW5FLE1BQU1JLCtCQUFpQkgsb0RBQWFBO0FBRTdCLE1BQU1JLGtCQUFrQixDQUFDLEVBQUVDLFFBQVEsRUFBRTtJQUMxQyxNQUFNLENBQUNDLG1CQUFtQkMscUJBQXFCLEdBQUdOLCtDQUFRQSxDQUFDO0lBQzNELE1BQU0sQ0FBQ08sUUFBUUMsVUFBVSxHQUFHUiwrQ0FBUUEsQ0FBQztJQUNyQyxNQUFNLENBQUNTLGFBQWFDLGVBQWUsR0FBR1YsK0NBQVFBLENBQUM7SUFFL0MscUJBQ0UsOERBQUNFLGVBQWVTLFFBQVE7UUFDdEJDLE9BQU87WUFDTFA7WUFDQUM7WUFDQUM7WUFDQUM7WUFDQUM7WUFDQUM7UUFDRjtrQkFFQ047Ozs7OztBQUdQLEVBQUU7QUFFSyxNQUFNUyxhQUFhLElBQU1aLGlEQUFVQSxDQUFDQyxnQkFBZ0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teXNob3AvLi9zcmMvY29udGV4dC9Qcm9kdWN0Q29udGV4dC5qcz9mMjM0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgUHJvZHVjdENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5leHBvcnQgY29uc3QgUHJvZHVjdFByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIGNvbnN0IFtzZWxlY3RlZFByb2R1Y3RJZCwgc2V0U2VsZWN0ZWRQcm9kdWN0SWRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3VzZXJJZCwgc2V0VXNlcklkXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtyZWZyZXNoQ2FydCwgc2V0UmVmcmVzaENhcnRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFByb2R1Y3RDb250ZXh0LlByb3ZpZGVyXHJcbiAgICAgIHZhbHVlPXt7XHJcbiAgICAgICAgc2VsZWN0ZWRQcm9kdWN0SWQsXHJcbiAgICAgICAgc2V0U2VsZWN0ZWRQcm9kdWN0SWQsXHJcbiAgICAgICAgdXNlcklkLFxyXG4gICAgICAgIHNldFVzZXJJZCxcclxuICAgICAgICByZWZyZXNoQ2FydCxcclxuICAgICAgICBzZXRSZWZyZXNoQ2FydCxcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9Qcm9kdWN0Q29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZVByb2R1Y3QgPSAoKSA9PiB1c2VDb250ZXh0KFByb2R1Y3RDb250ZXh0KTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsInVzZVN0YXRlIiwidXNlQ29udGV4dCIsIlByb2R1Y3RDb250ZXh0IiwiUHJvZHVjdFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJzZWxlY3RlZFByb2R1Y3RJZCIsInNldFNlbGVjdGVkUHJvZHVjdElkIiwidXNlcklkIiwic2V0VXNlcklkIiwicmVmcmVzaENhcnQiLCJzZXRSZWZyZXNoQ2FydCIsIlByb3ZpZGVyIiwidmFsdWUiLCJ1c2VQcm9kdWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/context/ProductContext.js\n");

/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/global.css */ \"./src/styles/global.css\");\n/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_global_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_ProductContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/ProductContext */ \"./src/context/ProductContext.js\");\n\n\n\nfunction App({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_ProductContext__WEBPACK_IMPORTED_MODULE_2__.ProductProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Vermillion\\\\Desktop\\\\Proyecto_Final\\\\Proyecto_Final\\\\myshop\\\\front\\\\products-manager\\\\src\\\\pages\\\\_app.js\",\n            lineNumber: 7,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Vermillion\\\\Desktop\\\\Proyecto_Final\\\\Proyecto_Final\\\\myshop\\\\front\\\\products-manager\\\\src\\\\pages\\\\_app.js\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTBDO0FBQ2tCO0FBRTdDLFNBQVNFLElBQUksRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQUU7SUFDbEQscUJBQ0UsOERBQUNILG9FQUFlQTtrQkFDZCw0RUFBQ0U7WUFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7OztBQUc5QiIsInNvdXJjZXMiOlsid2VicGFjazovL215c2hvcC8uL3NyYy9wYWdlcy9fYXBwLmpzPzhmZGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL2dsb2JhbC5jc3NcIjtcclxuaW1wb3J0IHsgUHJvZHVjdFByb3ZpZGVyIH0gZnJvbSBcIi4uL2NvbnRleHQvUHJvZHVjdENvbnRleHRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPFByb2R1Y3RQcm92aWRlcj5cclxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgPC9Qcm9kdWN0UHJvdmlkZXI+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsic3R5bGVzIiwiUHJvZHVjdFByb3ZpZGVyIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n");

/***/ }),

/***/ "./src/styles/global.css":
/*!*******************************!*\
  !*** ./src/styles/global.css ***!
  \*******************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.js"));
module.exports = __webpack_exports__;

})();