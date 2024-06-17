"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/productDetails",{

/***/ "./src/components/uploadProductDetails/UploadProductDetails.jsx":
/*!**********************************************************************!*\
  !*** ./src/components/uploadProductDetails/UploadProductDetails.jsx ***!
  \**********************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ UploadProductDetails; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context_ProductContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/ProductContext */ \"./src/context/ProductContext.js\");\n/* harmony import */ var _UploadProductDetails_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./UploadProductDetails.module.css */ \"./src/components/uploadProductDetails/UploadProductDetails.module.css\");\n/* harmony import */ var _UploadProductDetails_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_UploadProductDetails_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _api_productFetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../api/productFetch */ \"./src/api/productFetch.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction UploadProductDetails() {\n    _s();\n    const { selectedProductId, setSelectedProductId } = (0,_context_ProductContext__WEBPACK_IMPORTED_MODULE_3__.useProduct)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { id: queryId } = router.query;\n    const id = selectedProductId || queryId;\n    const [product, setProduct] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        image: \"\",\n        name: \"\",\n        category: \"\",\n        price: 0,\n        score: 0\n    });\n    const [visible, setVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (queryId) {\n            setSelectedProductId(queryId); // Actualizar el ID del producto seleccionado en el contexto si viene de la URL\n        }\n    }, [\n        queryId,\n        setSelectedProductId\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchProduct = async ()=>{\n            try {\n                const response = await (0,_api_productFetch__WEBPACK_IMPORTED_MODULE_5__.getProductById)(id);\n                setProduct(response.data);\n            } catch (error) {\n                console.error(\"Error fetching product:\", error);\n            }\n        };\n        if (id) {\n            fetchProduct();\n        }\n    }, [\n        id\n    ]);\n    const handlerOnChange = (e)=>{\n        const { name, value } = e.target;\n        setProduct((prevProduct)=>({\n                ...prevProduct,\n                [name]: name === \"score\" || name === \"price\" ? parseFloat(value) : value\n            }));\n    };\n    const uploadProduct = async ()=>{\n        console.log(\"Uploading product with ID:\", id);\n        try {\n            const response = await (0,_api_productFetch__WEBPACK_IMPORTED_MODULE_5__.updateProduct)(id, product);\n            console.log(\"Product updated:\", response);\n            setProduct(response.data); // Actualizar el estado con los nuevos datos del producto\n        // No necesitas hacer setVisible(false) aquí si quieres que el formulario siga visible\n        } catch (error) {\n            console.error(\"Error updating product:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_UploadProductDetails_module_css__WEBPACK_IMPORTED_MODULE_4___default().edit_container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: \"Updating Product Details\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Vermillion\\\\Desktop\\\\Proyecto_Final\\\\Proyecto_Final\\\\myshop\\\\front\\\\products-manager\\\\src\\\\components\\\\uploadProductDetails\\\\UploadProductDetails.jsx\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                className: (_UploadProductDetails_module_css__WEBPACK_IMPORTED_MODULE_4___default().updateInput),\n                type: \"text\",\n                name: \"image\",\n                value: product.image,\n                onChange: handlerOnChange,\n                placeholder: \"New URL Image\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Vermillion\\\\Desktop\\\\Proyecto_Final\\\\Proyecto_Final\\\\myshop\\\\front\\\\products-manager\\\\src\\\\components\\\\uploadProductDetails\\\\UploadProductDetails.jsx\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                className: (_UploadProductDetails_module_css__WEBPACK_IMPORTED_MODULE_4___default().updateInput),\n                type: \"text\",\n                name: \"name\",\n                value: product.name,\n                onChange: handlerOnChange,\n                placeholder: \"New Name\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Vermillion\\\\Desktop\\\\Proyecto_Final\\\\Proyecto_Final\\\\myshop\\\\front\\\\products-manager\\\\src\\\\components\\\\uploadProductDetails\\\\UploadProductDetails.jsx\",\n                lineNumber: 74,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                className: (_UploadProductDetails_module_css__WEBPACK_IMPORTED_MODULE_4___default().updateInput),\n                type: \"text\",\n                name: \"category\",\n                value: product.category,\n                onChange: handlerOnChange,\n                placeholder: \"New Gender\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Vermillion\\\\Desktop\\\\Proyecto_Final\\\\Proyecto_Final\\\\myshop\\\\front\\\\products-manager\\\\src\\\\components\\\\uploadProductDetails\\\\UploadProductDetails.jsx\",\n                lineNumber: 82,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                className: (_UploadProductDetails_module_css__WEBPACK_IMPORTED_MODULE_4___default().updateInput),\n                type: \"number\",\n                name: \"price\",\n                value: product.price,\n                onChange: handlerOnChange,\n                placeholder: \"New Price\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Vermillion\\\\Desktop\\\\Proyecto_Final\\\\Proyecto_Final\\\\myshop\\\\front\\\\products-manager\\\\src\\\\components\\\\uploadProductDetails\\\\UploadProductDetails.jsx\",\n                lineNumber: 90,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                className: (_UploadProductDetails_module_css__WEBPACK_IMPORTED_MODULE_4___default().updateInput),\n                type: \"number\",\n                name: \"score\",\n                value: product.score,\n                onChange: handlerOnChange,\n                placeholder: \"New Score\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Vermillion\\\\Desktop\\\\Proyecto_Final\\\\Proyecto_Final\\\\myshop\\\\front\\\\products-manager\\\\src\\\\components\\\\uploadProductDetails\\\\UploadProductDetails.jsx\",\n                lineNumber: 98,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: (_UploadProductDetails_module_css__WEBPACK_IMPORTED_MODULE_4___default().uploadButton),\n                    onClick: uploadProduct,\n                    children: \"Upload\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Vermillion\\\\Desktop\\\\Proyecto_Final\\\\Proyecto_Final\\\\myshop\\\\front\\\\products-manager\\\\src\\\\components\\\\uploadProductDetails\\\\UploadProductDetails.jsx\",\n                    lineNumber: 107,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Vermillion\\\\Desktop\\\\Proyecto_Final\\\\Proyecto_Final\\\\myshop\\\\front\\\\products-manager\\\\src\\\\components\\\\uploadProductDetails\\\\UploadProductDetails.jsx\",\n                lineNumber: 106,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Vermillion\\\\Desktop\\\\Proyecto_Final\\\\Proyecto_Final\\\\myshop\\\\front\\\\products-manager\\\\src\\\\components\\\\uploadProductDetails\\\\UploadProductDetails.jsx\",\n        lineNumber: 64,\n        columnNumber: 5\n    }, this);\n}\n_s(UploadProductDetails, \"TLqp7ASFCOT0r58f5qj7v5bnV0g=\", false, function() {\n    return [\n        _context_ProductContext__WEBPACK_IMPORTED_MODULE_3__.useProduct,\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = UploadProductDetails;\nvar _c;\n$RefreshReg$(_c, \"UploadProductDetails\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy91cGxvYWRQcm9kdWN0RGV0YWlscy9VcGxvYWRQcm9kdWN0RGV0YWlscy5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFtRDtBQUNYO0FBQ2tCO0FBQ0g7QUFDZ0I7QUFFeEQsU0FBU1E7O0lBQ3RCLE1BQU0sRUFBRUMsaUJBQWlCLEVBQUVDLG9CQUFvQixFQUFFLEdBQUdOLG1FQUFVQTtJQUM5RCxNQUFNTyxTQUFTUixzREFBU0E7SUFDeEIsTUFBTSxFQUFFUyxJQUFJQyxPQUFPLEVBQUUsR0FBR0YsT0FBT0csS0FBSztJQUNwQyxNQUFNRixLQUFLSCxxQkFBcUJJO0lBRWhDLE1BQU0sQ0FBQ0UsU0FBU0MsV0FBVyxHQUFHZCwrQ0FBUUEsQ0FBQztRQUNyQ2UsT0FBTztRQUNQQyxNQUFNO1FBQ05DLFVBQVU7UUFDVkMsT0FBTztRQUNQQyxPQUFPO0lBQ1Q7SUFDQSxNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR3JCLCtDQUFRQSxDQUFDO0lBRXZDRCxnREFBU0EsQ0FBQztRQUNSLElBQUlZLFNBQVM7WUFDWEgscUJBQXFCRyxVQUFVLCtFQUErRTtRQUNoSDtJQUNGLEdBQUc7UUFBQ0E7UUFBU0g7S0FBcUI7SUFFbENULGdEQUFTQSxDQUFDO1FBQ1IsTUFBTXVCLGVBQWU7WUFDbkIsSUFBSTtnQkFDRixNQUFNQyxXQUFXLE1BQU1sQixpRUFBY0EsQ0FBQ0s7Z0JBQ3RDSSxXQUFXUyxTQUFTQyxJQUFJO1lBQzFCLEVBQUUsT0FBT0MsT0FBTztnQkFDZEMsUUFBUUQsS0FBSyxDQUFDLDJCQUEyQkE7WUFDM0M7UUFDRjtRQUVBLElBQUlmLElBQUk7WUFDTlk7UUFDRjtJQUNGLEdBQUc7UUFBQ1o7S0FBRztJQUVQLE1BQU1pQixrQkFBa0IsQ0FBQ0M7UUFDdkIsTUFBTSxFQUFFWixJQUFJLEVBQUVhLEtBQUssRUFBRSxHQUFHRCxFQUFFRSxNQUFNO1FBQ2hDaEIsV0FBVyxDQUFDaUIsY0FBaUI7Z0JBQzNCLEdBQUdBLFdBQVc7Z0JBQ2QsQ0FBQ2YsS0FBSyxFQUFFQSxTQUFTLFdBQVdBLFNBQVMsVUFBVWdCLFdBQVdILFNBQVNBO1lBQ3JFO0lBQ0Y7SUFFQSxNQUFNSSxnQkFBZ0I7UUFDcEJQLFFBQVFRLEdBQUcsQ0FBQyw4QkFBOEJ4QjtRQUMxQyxJQUFJO1lBQ0YsTUFBTWEsV0FBVyxNQUFNbkIsZ0VBQWFBLENBQUNNLElBQUlHO1lBQ3pDYSxRQUFRUSxHQUFHLENBQUMsb0JBQW9CWDtZQUNoQ1QsV0FBV1MsU0FBU0MsSUFBSSxHQUFHLHlEQUF5RDtRQUNwRixzRkFBc0Y7UUFDeEYsRUFBRSxPQUFPQyxPQUFPO1lBQ2RDLFFBQVFELEtBQUssQ0FBQywyQkFBMkJBO1FBQzNDO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ1U7UUFBSUMsV0FBV2pDLHdGQUFxQjs7MEJBQ25DLDhEQUFDbUM7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ0M7Z0JBQ0NILFdBQVdqQyxxRkFBa0I7Z0JBQzdCc0MsTUFBSztnQkFDTHpCLE1BQUs7Z0JBQ0xhLE9BQU9oQixRQUFRRSxLQUFLO2dCQUNwQjJCLFVBQVVmO2dCQUNWZ0IsYUFBWTs7Ozs7OzBCQUVkLDhEQUFDSjtnQkFDQ0gsV0FBV2pDLHFGQUFrQjtnQkFDN0JzQyxNQUFLO2dCQUNMekIsTUFBSztnQkFDTGEsT0FBT2hCLFFBQVFHLElBQUk7Z0JBQ25CMEIsVUFBVWY7Z0JBQ1ZnQixhQUFZOzs7Ozs7MEJBRWQsOERBQUNKO2dCQUNDSCxXQUFXakMscUZBQWtCO2dCQUM3QnNDLE1BQUs7Z0JBQ0x6QixNQUFLO2dCQUNMYSxPQUFPaEIsUUFBUUksUUFBUTtnQkFDdkJ5QixVQUFVZjtnQkFDVmdCLGFBQVk7Ozs7OzswQkFFZCw4REFBQ0o7Z0JBQ0NILFdBQVdqQyxxRkFBa0I7Z0JBQzdCc0MsTUFBSztnQkFDTHpCLE1BQUs7Z0JBQ0xhLE9BQU9oQixRQUFRSyxLQUFLO2dCQUNwQndCLFVBQVVmO2dCQUNWZ0IsYUFBWTs7Ozs7OzBCQUVkLDhEQUFDSjtnQkFDQ0gsV0FBV2pDLHFGQUFrQjtnQkFDN0JzQyxNQUFLO2dCQUNMekIsTUFBSztnQkFDTGEsT0FBT2hCLFFBQVFNLEtBQUs7Z0JBQ3BCdUIsVUFBVWY7Z0JBQ1ZnQixhQUFZOzs7Ozs7MEJBRWQsOERBQUNSOzBCQUNDLDRFQUFDUztvQkFBT1IsV0FBV2pDLHNGQUFtQjtvQkFBRTJDLFNBQVNiOzhCQUFlOzs7Ozs7Ozs7Ozs7Ozs7OztBQU14RTtHQTFHd0IzQjs7UUFDOEJKLCtEQUFVQTtRQUMvQ0Qsa0RBQVNBOzs7S0FGRksiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdXBsb2FkUHJvZHVjdERldGFpbHMvVXBsb2FkUHJvZHVjdERldGFpbHMuanN4PzE3YTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHVzZVByb2R1Y3QgfSBmcm9tIFwiLi4vLi4vY29udGV4dC9Qcm9kdWN0Q29udGV4dFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL1VwbG9hZFByb2R1Y3REZXRhaWxzLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IHsgdXBkYXRlUHJvZHVjdCwgZ2V0UHJvZHVjdEJ5SWQgfSBmcm9tIFwiLi4vLi4vYXBpL3Byb2R1Y3RGZXRjaFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVXBsb2FkUHJvZHVjdERldGFpbHMoKSB7XHJcbiAgY29uc3QgeyBzZWxlY3RlZFByb2R1Y3RJZCwgc2V0U2VsZWN0ZWRQcm9kdWN0SWQgfSA9IHVzZVByb2R1Y3QoKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB7IGlkOiBxdWVyeUlkIH0gPSByb3V0ZXIucXVlcnk7XHJcbiAgY29uc3QgaWQgPSBzZWxlY3RlZFByb2R1Y3RJZCB8fCBxdWVyeUlkO1xyXG5cclxuICBjb25zdCBbcHJvZHVjdCwgc2V0UHJvZHVjdF0gPSB1c2VTdGF0ZSh7XHJcbiAgICBpbWFnZTogXCJcIixcclxuICAgIG5hbWU6IFwiXCIsXHJcbiAgICBjYXRlZ29yeTogXCJcIixcclxuICAgIHByaWNlOiAwLFxyXG4gICAgc2NvcmU6IDAsXHJcbiAgfSk7XHJcbiAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAocXVlcnlJZCkge1xyXG4gICAgICBzZXRTZWxlY3RlZFByb2R1Y3RJZChxdWVyeUlkKTsgLy8gQWN0dWFsaXphciBlbCBJRCBkZWwgcHJvZHVjdG8gc2VsZWNjaW9uYWRvIGVuIGVsIGNvbnRleHRvIHNpIHZpZW5lIGRlIGxhIFVSTFxyXG4gICAgfVxyXG4gIH0sIFtxdWVyeUlkLCBzZXRTZWxlY3RlZFByb2R1Y3RJZF0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hQcm9kdWN0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZ2V0UHJvZHVjdEJ5SWQoaWQpO1xyXG4gICAgICAgIHNldFByb2R1Y3QocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIHByb2R1Y3Q6XCIsIGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBpZiAoaWQpIHtcclxuICAgICAgZmV0Y2hQcm9kdWN0KCk7XHJcbiAgICB9XHJcbiAgfSwgW2lkXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZXJPbkNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBlLnRhcmdldDtcclxuICAgIHNldFByb2R1Y3QoKHByZXZQcm9kdWN0KSA9PiAoe1xyXG4gICAgICAuLi5wcmV2UHJvZHVjdCxcclxuICAgICAgW25hbWVdOiBuYW1lID09PSBcInNjb3JlXCIgfHwgbmFtZSA9PT0gXCJwcmljZVwiID8gcGFyc2VGbG9hdCh2YWx1ZSkgOiB2YWx1ZSxcclxuICAgIH0pKTtcclxuICB9O1xyXG5cclxuICBjb25zdCB1cGxvYWRQcm9kdWN0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJVcGxvYWRpbmcgcHJvZHVjdCB3aXRoIElEOlwiLCBpZCk7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHVwZGF0ZVByb2R1Y3QoaWQsIHByb2R1Y3QpO1xyXG4gICAgICBjb25zb2xlLmxvZyhcIlByb2R1Y3QgdXBkYXRlZDpcIiwgcmVzcG9uc2UpO1xyXG4gICAgICBzZXRQcm9kdWN0KHJlc3BvbnNlLmRhdGEpOyAvLyBBY3R1YWxpemFyIGVsIGVzdGFkbyBjb24gbG9zIG51ZXZvcyBkYXRvcyBkZWwgcHJvZHVjdG9cclxuICAgICAgLy8gTm8gbmVjZXNpdGFzIGhhY2VyIHNldFZpc2libGUoZmFsc2UpIGFxdcOtIHNpIHF1aWVyZXMgcXVlIGVsIGZvcm11bGFyaW8gc2lnYSB2aXNpYmxlXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgdXBkYXRpbmcgcHJvZHVjdDpcIiwgZXJyb3IpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmVkaXRfY29udGFpbmVyfT5cclxuICAgICAgPGgzPlVwZGF0aW5nIFByb2R1Y3QgRGV0YWlsczwvaDM+XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnVwZGF0ZUlucHV0fVxyXG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICBuYW1lPVwiaW1hZ2VcIlxyXG4gICAgICAgIHZhbHVlPXtwcm9kdWN0LmltYWdlfVxyXG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVyT25DaGFuZ2V9XHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJOZXcgVVJMIEltYWdlXCJcclxuICAgICAgLz5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMudXBkYXRlSW5wdXR9XHJcbiAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgIG5hbWU9XCJuYW1lXCJcclxuICAgICAgICB2YWx1ZT17cHJvZHVjdC5uYW1lfVxyXG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVyT25DaGFuZ2V9XHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJOZXcgTmFtZVwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnVwZGF0ZUlucHV0fVxyXG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICBuYW1lPVwiY2F0ZWdvcnlcIlxyXG4gICAgICAgIHZhbHVlPXtwcm9kdWN0LmNhdGVnb3J5fVxyXG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVyT25DaGFuZ2V9XHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJOZXcgR2VuZGVyXCJcclxuICAgICAgLz5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMudXBkYXRlSW5wdXR9XHJcbiAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgbmFtZT1cInByaWNlXCJcclxuICAgICAgICB2YWx1ZT17cHJvZHVjdC5wcmljZX1cclxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlck9uQ2hhbmdlfVxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiTmV3IFByaWNlXCJcclxuICAgICAgLz5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMudXBkYXRlSW5wdXR9XHJcbiAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgbmFtZT1cInNjb3JlXCJcclxuICAgICAgICB2YWx1ZT17cHJvZHVjdC5zY29yZX1cclxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlck9uQ2hhbmdlfVxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiTmV3IFNjb3JlXCJcclxuICAgICAgLz5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLnVwbG9hZEJ1dHRvbn0gb25DbGljaz17dXBsb2FkUHJvZHVjdH0+XHJcbiAgICAgICAgICBVcGxvYWRcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwidXNlUHJvZHVjdCIsInN0eWxlcyIsInVwZGF0ZVByb2R1Y3QiLCJnZXRQcm9kdWN0QnlJZCIsIlVwbG9hZFByb2R1Y3REZXRhaWxzIiwic2VsZWN0ZWRQcm9kdWN0SWQiLCJzZXRTZWxlY3RlZFByb2R1Y3RJZCIsInJvdXRlciIsImlkIiwicXVlcnlJZCIsInF1ZXJ5IiwicHJvZHVjdCIsInNldFByb2R1Y3QiLCJpbWFnZSIsIm5hbWUiLCJjYXRlZ29yeSIsInByaWNlIiwic2NvcmUiLCJ2aXNpYmxlIiwic2V0VmlzaWJsZSIsImZldGNoUHJvZHVjdCIsInJlc3BvbnNlIiwiZGF0YSIsImVycm9yIiwiY29uc29sZSIsImhhbmRsZXJPbkNoYW5nZSIsImUiLCJ2YWx1ZSIsInRhcmdldCIsInByZXZQcm9kdWN0IiwicGFyc2VGbG9hdCIsInVwbG9hZFByb2R1Y3QiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJlZGl0X2NvbnRhaW5lciIsImgzIiwiaW5wdXQiLCJ1cGRhdGVJbnB1dCIsInR5cGUiLCJvbkNoYW5nZSIsInBsYWNlaG9sZGVyIiwiYnV0dG9uIiwidXBsb2FkQnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/uploadProductDetails/UploadProductDetails.jsx\n"));

/***/ })

});