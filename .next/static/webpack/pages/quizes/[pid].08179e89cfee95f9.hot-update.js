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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst QuizPage = (quiz)=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    if (router.isFallback) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\ashra\\\\Desktop\\\\Noor\\\\QuizV1.2 - HA version\\\\src\\\\pages\\\\quizes\\\\[pid].tsx\",\n            lineNumber: 36,\n            columnNumber: 12\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"quizId: \",\n                    quiz.id\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ashra\\\\Desktop\\\\Noor\\\\QuizV1.2 - HA version\\\\src\\\\pages\\\\quizes\\\\[pid].tsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"name: \",\n                    quiz.name\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ashra\\\\Desktop\\\\Noor\\\\QuizV1.2 - HA version\\\\src\\\\pages\\\\quizes\\\\[pid].tsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ashra\\\\Desktop\\\\Noor\\\\QuizV1.2 - HA version\\\\src\\\\pages\\\\quizes\\\\[pid].tsx\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, undefined);\n};\n_s(QuizPage, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = QuizPage;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (QuizPage);\nvar _c;\n$RefreshReg$(_c, \"QuizPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcXVpemVzL1twaWRdLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUF3QztBQStCeEMsTUFBTUMsV0FBVyxDQUFDQyxPQUFlOztJQUMvQixNQUFNQyxTQUFTSCxzREFBU0E7SUFFeEIsSUFBSUcsT0FBT0MsVUFBVSxFQUFFO1FBQ3JCLHFCQUFPLDhEQUFDQztzQkFBSTs7Ozs7O0lBQ2QsQ0FBQztJQUNELHFCQUNFLDhEQUFDQTs7MEJBQ0MsOERBQUNDOztvQkFBRTtvQkFBU0osS0FBS0ssRUFBRTs7Ozs7OzswQkFDbkIsOERBQUNEOztvQkFBRTtvQkFBT0osS0FBS00sSUFBSTs7Ozs7Ozs7Ozs7OztBQUd6QjtHQVpNUDs7UUFDV0Qsa0RBQVNBOzs7S0FEcEJDOztBQWNOLCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9xdWl6ZXMvW3BpZF0udHN4PzY2ZDciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IFF1aXogfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlc1wiO1xyXG5cclxuaW50ZXJmYWNlIFBhZ2VQcm9wcyB7XHJcbiAgcGFyYW1zOiB7XHJcbiAgICBwaWQ6IHN0cmluZztcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoeyBwYXJhbXMgfTogUGFnZVByb3BzKSB7XHJcbiAgY29uc3QgaWQgPSBwYXJzZUludChwYXJhbXMucGlkIGFzIHN0cmluZyk7XHJcbiAgLy8gIGNvbnN0IG5hbWUgPSBxdWVyeS5uYW1lIGFzIHN0cmluZztcclxuXHJcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3F1aXovZ2V0cXVpelwiKTtcclxuICBjb25zdCBuZXdyZXNwb25zZSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBxdWl6OiBuZXdyZXNwb25zZSxcclxuICAgIH0sXHJcbiAgICByZXZhbGlkYXRlOiA2MCxcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHBhdGhzOiBbXSxcclxuICAgIGZhbGxiYWNrOiBcImJsb2NraW5nXCIsIC8vaW5kaWNhdGVzIHRoZSB0eXBlIG9mIGZhbGxiYWNrXHJcbiAgfTtcclxufVxyXG5cclxuY29uc3QgUXVpelBhZ2UgPSAocXVpejogUXVpeikgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBpZiAocm91dGVyLmlzRmFsbGJhY2spIHtcclxuICAgIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj47XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8cD5xdWl6SWQ6IHtxdWl6LmlkfTwvcD5cclxuICAgICAgPHA+bmFtZToge3F1aXoubmFtZX08L3A+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUXVpelBhZ2U7XHJcbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJRdWl6UGFnZSIsInF1aXoiLCJyb3V0ZXIiLCJpc0ZhbGxiYWNrIiwiZGl2IiwicCIsImlkIiwibmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/quizes/[pid].tsx\n"));

/***/ })

});