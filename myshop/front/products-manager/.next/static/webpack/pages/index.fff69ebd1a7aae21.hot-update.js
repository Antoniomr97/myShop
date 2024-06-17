"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/api/cartFetch.js":
/*!******************************!*\
  !*** ./src/api/cartFetch.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CreateCartProductFetch: function() { return /* binding */ CreateCartProductFetch; },\n/* harmony export */   deleteCartProductFetch: function() { return /* binding */ deleteCartProductFetch; },\n/* harmony export */   deleteProductsByUserId: function() { return /* binding */ deleteProductsByUserId; },\n/* harmony export */   getCartProductsFetch: function() { return /* binding */ getCartProductsFetch; }\n/* harmony export */ });\nconst getCartProductsFetch = async ()=>{\n    try {\n        const response = await fetch(\"http://localhost:9000/cart\");\n        if (!response.ok) {\n            throw new Error(\"Failed to fetch cart products\");\n        }\n        const products = await response.json();\n        return products;\n    } catch (error) {\n        console.error(\"Error fetching cart products:\", error);\n        throw error;\n    }\n};\nconst deleteCartProductFetch = async (id)=>{\n    try {\n        const response = await fetch(\"http://localhost:9000/cart/\".concat(id), {\n            method: \"DELETE\"\n        });\n        const data = await response.json();\n        if (response.ok) {\n            console.log(\"Product Deleted Successfully\");\n        } else {\n            throw new Error(data.error);\n        }\n        return data;\n    } catch (error) {\n        console.error(\"Error deleting product:\", error);\n        throw error;\n    }\n};\nconst CreateCartProductFetch = async (data)=>{\n    try {\n        const response = await fetch(\"http://localhost:9000/cart\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify(data)\n        });\n        const productCreated = await response.json();\n        if (productCreated.error) {\n            throw new Error(productCreated.error);\n        }\n        return productCreated;\n    } catch (error) {\n        console.error(\"Error creating cart product:\", error);\n        throw error;\n    }\n};\n_c = CreateCartProductFetch;\nconst deleteProductsByUserId = async (userId)=>{\n    try {\n        const response = await fetch(\"http://localhost:9000/cart/deleteByUserId/\".concat(userId), {\n            method: \"DELETE\"\n        });\n        const data = await response.json();\n        if (response.ok) {\n            console.log(\"Product Deleted Successfully\");\n        } else {\n            throw new Error(data.error);\n        }\n        return data;\n    } catch (error) {\n        console.error(\"Error deleting product:\", error);\n        throw error;\n    }\n};\nvar _c;\n$RefreshReg$(_c, \"CreateCartProductFetch\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBpL2NhcnRGZXRjaC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQU8sTUFBTUEsdUJBQXVCO0lBQ2xDLElBQUk7UUFDRixNQUFNQyxXQUFXLE1BQU1DLE1BQU07UUFDN0IsSUFBSSxDQUFDRCxTQUFTRSxFQUFFLEVBQUU7WUFDaEIsTUFBTSxJQUFJQyxNQUFNO1FBQ2xCO1FBQ0EsTUFBTUMsV0FBVyxNQUFNSixTQUFTSyxJQUFJO1FBQ3BDLE9BQU9EO0lBQ1QsRUFBRSxPQUFPRSxPQUFPO1FBQ2RDLFFBQVFELEtBQUssQ0FBQyxpQ0FBaUNBO1FBQy9DLE1BQU1BO0lBQ1I7QUFDRixFQUFFO0FBRUssTUFBTUUseUJBQXlCLE9BQU9DO0lBQzNDLElBQUk7UUFDRixNQUFNVCxXQUFXLE1BQU1DLE1BQU0sOEJBQWlDLE9BQUhRLEtBQU07WUFDL0RDLFFBQVE7UUFDVjtRQUNBLE1BQU1DLE9BQU8sTUFBTVgsU0FBU0ssSUFBSTtRQUNoQyxJQUFJTCxTQUFTRSxFQUFFLEVBQUU7WUFDZkssUUFBUUssR0FBRyxDQUFDO1FBQ2QsT0FBTztZQUNMLE1BQU0sSUFBSVQsTUFBTVEsS0FBS0wsS0FBSztRQUM1QjtRQUNBLE9BQU9LO0lBQ1QsRUFBRSxPQUFPTCxPQUFPO1FBQ2RDLFFBQVFELEtBQUssQ0FBQywyQkFBMkJBO1FBQ3pDLE1BQU1BO0lBQ1I7QUFDRixFQUFFO0FBRUssTUFBTU8seUJBQXlCLE9BQU9GO0lBQzNDLElBQUk7UUFDRixNQUFNWCxXQUFXLE1BQU1DLE1BQU0sOEJBQThCO1lBQ3pEUyxRQUFRO1lBQ1JJLFNBQVM7Z0JBQUUsZ0JBQWdCO1lBQW1CO1lBQzlDQyxNQUFNQyxLQUFLQyxTQUFTLENBQUNOO1FBQ3ZCO1FBQ0EsTUFBTU8saUJBQWlCLE1BQU1sQixTQUFTSyxJQUFJO1FBQzFDLElBQUlhLGVBQWVaLEtBQUssRUFBRTtZQUN4QixNQUFNLElBQUlILE1BQU1lLGVBQWVaLEtBQUs7UUFDdEM7UUFDQSxPQUFPWTtJQUNULEVBQUUsT0FBT1osT0FBTztRQUNkQyxRQUFRRCxLQUFLLENBQUMsZ0NBQWdDQTtRQUM5QyxNQUFNQTtJQUNSO0FBQ0YsRUFBRTtLQWhCV087QUFrQk4sTUFBTU0seUJBQXlCLE9BQU9DO0lBQzNDLElBQUk7UUFDRixNQUFNcEIsV0FBVyxNQUFNQyxNQUNyQiw2Q0FBb0QsT0FBUG1CLFNBQzdDO1lBQ0VWLFFBQVE7UUFDVjtRQUVGLE1BQU1DLE9BQU8sTUFBTVgsU0FBU0ssSUFBSTtRQUNoQyxJQUFJTCxTQUFTRSxFQUFFLEVBQUU7WUFDZkssUUFBUUssR0FBRyxDQUFDO1FBQ2QsT0FBTztZQUNMLE1BQU0sSUFBSVQsTUFBTVEsS0FBS0wsS0FBSztRQUM1QjtRQUNBLE9BQU9LO0lBQ1QsRUFBRSxPQUFPTCxPQUFPO1FBQ2RDLFFBQVFELEtBQUssQ0FBQywyQkFBMkJBO1FBQ3pDLE1BQU1BO0lBQ1I7QUFDRixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcGkvY2FydEZldGNoLmpzPzM1OTEiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGdldENhcnRQcm9kdWN0c0ZldGNoID0gYXN5bmMgKCkgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo5MDAwL2NhcnRcIik7XHJcbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBmZXRjaCBjYXJ0IHByb2R1Y3RzXCIpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgcHJvZHVjdHMgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICByZXR1cm4gcHJvZHVjdHM7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBjYXJ0IHByb2R1Y3RzOlwiLCBlcnJvcik7XHJcbiAgICB0aHJvdyBlcnJvcjtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZGVsZXRlQ2FydFByb2R1Y3RGZXRjaCA9IGFzeW5jIChpZCkgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjkwMDAvY2FydC8ke2lkfWAsIHtcclxuICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiUHJvZHVjdCBEZWxldGVkIFN1Y2Nlc3NmdWxseVwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihkYXRhLmVycm9yKTtcclxuICAgIH1cclxuICAgIHJldHVybiBkYXRhO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZGVsZXRpbmcgcHJvZHVjdDpcIiwgZXJyb3IpO1xyXG4gICAgdGhyb3cgZXJyb3I7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IENyZWF0ZUNhcnRQcm9kdWN0RmV0Y2ggPSBhc3luYyAoZGF0YSkgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo5MDAwL2NhcnRcIiwge1xyXG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBwcm9kdWN0Q3JlYXRlZCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIGlmIChwcm9kdWN0Q3JlYXRlZC5lcnJvcikge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IocHJvZHVjdENyZWF0ZWQuZXJyb3IpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHByb2R1Y3RDcmVhdGVkO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgY3JlYXRpbmcgY2FydCBwcm9kdWN0OlwiLCBlcnJvcik7XHJcbiAgICB0aHJvdyBlcnJvcjtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZGVsZXRlUHJvZHVjdHNCeVVzZXJJZCA9IGFzeW5jICh1c2VySWQpID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcclxuICAgICAgYGh0dHA6Ly9sb2NhbGhvc3Q6OTAwMC9jYXJ0L2RlbGV0ZUJ5VXNlcklkLyR7dXNlcklkfWAsXHJcbiAgICAgIHtcclxuICAgICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiUHJvZHVjdCBEZWxldGVkIFN1Y2Nlc3NmdWxseVwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihkYXRhLmVycm9yKTtcclxuICAgIH1cclxuICAgIHJldHVybiBkYXRhO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZGVsZXRpbmcgcHJvZHVjdDpcIiwgZXJyb3IpO1xyXG4gICAgdGhyb3cgZXJyb3I7XHJcbiAgfVxyXG59O1xyXG4iXSwibmFtZXMiOlsiZ2V0Q2FydFByb2R1Y3RzRmV0Y2giLCJyZXNwb25zZSIsImZldGNoIiwib2siLCJFcnJvciIsInByb2R1Y3RzIiwianNvbiIsImVycm9yIiwiY29uc29sZSIsImRlbGV0ZUNhcnRQcm9kdWN0RmV0Y2giLCJpZCIsIm1ldGhvZCIsImRhdGEiLCJsb2ciLCJDcmVhdGVDYXJ0UHJvZHVjdEZldGNoIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicHJvZHVjdENyZWF0ZWQiLCJkZWxldGVQcm9kdWN0c0J5VXNlcklkIiwidXNlcklkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/api/cartFetch.js\n"));

/***/ })

});