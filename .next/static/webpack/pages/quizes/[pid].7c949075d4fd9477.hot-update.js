"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/quizes/[pid]",{

/***/ "./src/pages/quizes/[pid].tsx":
/*!************************************!*\
  !*** ./src/pages/quizes/[pid].tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst QuizPage = (param)=>{\n    let { quiz  } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    console.log(quiz);\n    if (router.isFallback) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\ashra\\\\Desktop\\\\Noor\\\\QuizV1.2 - HA version\\\\src\\\\pages\\\\quizes\\\\[pid].tsx\",\n            lineNumber: 40,\n            columnNumber: 12\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"quizId: \",\n                    quiz.id\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ashra\\\\Desktop\\\\Noor\\\\QuizV1.2 - HA version\\\\src\\\\pages\\\\quizes\\\\[pid].tsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"name: \",\n                    quiz.name\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ashra\\\\Desktop\\\\Noor\\\\QuizV1.2 - HA version\\\\src\\\\pages\\\\quizes\\\\[pid].tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, undefined),\n            quiz.questions.map((question)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \" Question \",\n                            question.text\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ashra\\\\Desktop\\\\Noor\\\\QuizV1.2 - HA version\\\\src\\\\pages\\\\quizes\\\\[pid].tsx\",\n                        lineNumber: 48,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false))\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ashra\\\\Desktop\\\\Noor\\\\QuizV1.2 - HA version\\\\src\\\\pages\\\\quizes\\\\[pid].tsx\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, undefined);\n};\n_s(QuizPage, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = QuizPage;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (QuizPage);\nvar _c;\n$RefreshReg$(_c, \"QuizPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcXVpemVzL1twaWRdLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUF3QztBQW1DeEMsTUFBTUMsV0FBVyxTQUF5QjtRQUF4QixFQUFFQyxLQUFJLEVBQWE7O0lBQ25DLE1BQU1DLFNBQVNILHNEQUFTQTtJQUN4QkksUUFBUUMsR0FBRyxDQUFDSDtJQUNaLElBQUlDLE9BQU9HLFVBQVUsRUFBRTtRQUNyQixxQkFBTyw4REFBQ0M7c0JBQUk7Ozs7OztJQUNkLENBQUM7SUFDRCxxQkFDRSw4REFBQ0E7OzBCQUNDLDhEQUFDQzs7b0JBQUU7b0JBQVNOLEtBQUtPLEVBQUU7Ozs7Ozs7MEJBQ25CLDhEQUFDRDs7b0JBQUU7b0JBQU9OLEtBQUtRLElBQUk7Ozs7Ozs7WUFDbEJSLEtBQUtTLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLENBQUNDLHlCQUNuQjs4QkFDRSw0RUFBQ0w7OzRCQUFFOzRCQUFXSyxTQUFTQyxJQUFJOzs7Ozs7Ozs7Ozs7OztBQUtyQztHQWpCTWI7O1FBQ1dELGtEQUFTQTs7O0tBRHBCQzs7QUFtQk4sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3F1aXplcy9bcGlkXS50c3g/NjZkNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgUXVpeiwgUXVlc3Rpb24gfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlc1wiO1xyXG5cclxuaW50ZXJmYWNlIFBhZ2VQcm9wcyB7XHJcbiAgcGFyYW1zOiB7XHJcbiAgICBwaWQ6IHN0cmluZztcclxuICB9O1xyXG59XHJcblxyXG5pbnRlcmZhY2UgUXVpelByb3BzIHtcclxuICBxdWl6OiBRdWl6O1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoeyBwYXJhbXMgfTogUGFnZVByb3BzKSB7XHJcbiAgY29uc3QgaWQgPSBwYXJzZUludChwYXJhbXMucGlkIGFzIHN0cmluZyk7XHJcbiAgLy8gIGNvbnN0IG5hbWUgPSBxdWVyeS5uYW1lIGFzIHN0cmluZztcclxuXHJcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvcXVpei9nZXRxdWl6P2lkPSR7aWR9YCk7XHJcbiAgY29uc3QgbmV3cmVzcG9uc2UgPSBhd2FpdCByZXMuanNvbigpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgcXVpejogbmV3cmVzcG9uc2UucXVpeixcclxuICAgIH0sXHJcbiAgICByZXZhbGlkYXRlOiA2MCxcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHBhdGhzOiBbXSxcclxuICAgIGZhbGxiYWNrOiBcImJsb2NraW5nXCIsIC8vaW5kaWNhdGVzIHRoZSB0eXBlIG9mIGZhbGxiYWNrXHJcbiAgfTtcclxufVxyXG5cclxuY29uc3QgUXVpelBhZ2UgPSAoeyBxdWl6IH06IFF1aXpQcm9wcykgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnNvbGUubG9nKHF1aXopO1xyXG4gIGlmIChyb3V0ZXIuaXNGYWxsYmFjaykge1xyXG4gICAgcmV0dXJuIDxkaXY+TG9hZGluZy4uLjwvZGl2PjtcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxwPnF1aXpJZDoge3F1aXouaWR9PC9wPlxyXG4gICAgICA8cD5uYW1lOiB7cXVpei5uYW1lfTwvcD5cclxuICAgICAge3F1aXoucXVlc3Rpb25zLm1hcCgocXVlc3Rpb246IFF1ZXN0aW9uKSA9PiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxwPiBRdWVzdGlvbiB7cXVlc3Rpb24udGV4dH08L3A+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICkpfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFF1aXpQYWdlO1xyXG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwiUXVpelBhZ2UiLCJxdWl6Iiwicm91dGVyIiwiY29uc29sZSIsImxvZyIsImlzRmFsbGJhY2siLCJkaXYiLCJwIiwiaWQiLCJuYW1lIiwicXVlc3Rpb25zIiwibWFwIiwicXVlc3Rpb24iLCJ0ZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/quizes/[pid].tsx\n"));

/***/ })

});