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

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @tanstack/react-query */ \"./node_modules/@tanstack/react-query/build/lib/index.mjs\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Navbar */ \"./src/components/Navbar.js\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Footer */ \"./src/components/Footer.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n//defining the fetchquizrequest function\nasync function fetchQuizesRequest() {\n    const response = await fetch(\"/api/quiz\");\n    const data = await response.json();\n    const { quiz  } = data;\n    return quiz;\n}\nfunction Home() {\n    _s();\n    const { data: quizes  } = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_7__.useQuery)([\n        \"quizes\"\n    ], fetchQuizesRequest);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ashra\\\\Desktop\\\\Noor\\\\QuizV1.2 - HA version\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Haiqa Ashraf Tech Test\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ashra\\\\Desktop\\\\Noor\\\\QuizV1.2 - HA version\\\\src\\\\pages\\\\index.tsx\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ashra\\\\Desktop\\\\Noor\\\\QuizV1.2 - HA version\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col justify-center items-center bg-gradient-to-r from-violet-200 to-pink-200 pt-4\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"w-64 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                href: \"/create\",\n                                children: \"Create Quiz\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ashra\\\\Desktop\\\\Noor\\\\QuizV1.2 - HA version\\\\src\\\\pages\\\\index.tsx\",\n                                lineNumber: 35,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ashra\\\\Desktop\\\\Noor\\\\QuizV1.2 - HA version\\\\src\\\\pages\\\\index.tsx\",\n                            lineNumber: 34,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ashra\\\\Desktop\\\\Noor\\\\QuizV1.2 - HA version\\\\src\\\\pages\\\\index.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-wrap items-center justify-evenly bg-gradient-to-r from-violet-200 to-pink-200\",\n                        children: quizes && quizes.map((quiz)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"w-full max-w-sm bg-white border border-black-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-7\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            href: \"#\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                src: \"/images/quiztime.jpg\",\n                                                alt: \"My Image\",\n                                                width: 500,\n                                                height: 500\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\ashra\\\\Desktop\\\\Noor\\\\QuizV1.2 - HA version\\\\src\\\\pages\\\\index.tsx\",\n                                                lineNumber: 45,\n                                                columnNumber: 21\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\ashra\\\\Desktop\\\\Noor\\\\QuizV1.2 - HA version\\\\src\\\\pages\\\\index.tsx\",\n                                            lineNumber: 44,\n                                            columnNumber: 19\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"px-5 pb-5\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                                    className: \"text-xl font-semibold tracking-tight text-gray-900 dark:text-white\",\n                                                    children: \"Title:\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\ashra\\\\Desktop\\\\Noor\\\\QuizV1.2 - HA version\\\\src\\\\pages\\\\index.tsx\",\n                                                    lineNumber: 54,\n                                                    columnNumber: 21\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"flex items-center justify-between\",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                            className: \"text-3xl font-bold text-gray-900 dark:text-white\",\n                                                            children: quiz.name\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\Users\\\\ashra\\\\Desktop\\\\Noor\\\\QuizV1.2 - HA version\\\\src\\\\pages\\\\index.tsx\",\n                                                            lineNumber: 59,\n                                                            columnNumber: 23\n                                                        }, this),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                            className: \"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800\",\n                                                            onClick: ()=>{\n                                                                router.push({\n                                                                    pathname: \"/quizes/\".concat(quiz.id)\n                                                                });\n                                                            },\n                                                            children: \"View Quiz\"\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\Users\\\\ashra\\\\Desktop\\\\Noor\\\\QuizV1.2 - HA version\\\\src\\\\pages\\\\index.tsx\",\n                                                            lineNumber: 63,\n                                                            columnNumber: 23\n                                                        }, this)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"C:\\\\Users\\\\ashra\\\\Desktop\\\\Noor\\\\QuizV1.2 - HA version\\\\src\\\\pages\\\\index.tsx\",\n                                                    lineNumber: 58,\n                                                    columnNumber: 21\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\ashra\\\\Desktop\\\\Noor\\\\QuizV1.2 - HA version\\\\src\\\\pages\\\\index.tsx\",\n                                            lineNumber: 53,\n                                            columnNumber: 19\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\ashra\\\\Desktop\\\\Noor\\\\QuizV1.2 - HA version\\\\src\\\\pages\\\\index.tsx\",\n                                    lineNumber: 43,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ashra\\\\Desktop\\\\Noor\\\\QuizV1.2 - HA version\\\\src\\\\pages\\\\index.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ashra\\\\Desktop\\\\Noor\\\\QuizV1.2 - HA version\\\\src\\\\pages\\\\index.tsx\",\n                        lineNumber: 79,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ashra\\\\Desktop\\\\Noor\\\\QuizV1.2 - HA version\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"UniJMZsNxlYsSJ10RjrdFoq5vbo=\", false, function() {\n    return [\n        _tanstack_react_query__WEBPACK_IMPORTED_MODULE_7__.useQuery,\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQWlEO0FBQ3BCO0FBQ0U7QUFDRjtBQUNXO0FBQ0U7QUFDQTtBQUkxQyx3Q0FBd0M7QUFDeEMsZUFBZU8scUJBQXFCO0lBQ2xDLE1BQU1DLFdBQVcsTUFBTUMsTUFBTTtJQUU3QixNQUFNQyxPQUFPLE1BQU1GLFNBQVNHLElBQUk7SUFFaEMsTUFBTSxFQUFFQyxLQUFJLEVBQUUsR0FBR0Y7SUFFakIsT0FBT0U7QUFDVDtBQUVlLFNBQVNDLE9BQU87O0lBQzdCLE1BQU0sRUFBRUgsTUFBTUksT0FBTSxFQUFFLEdBQUdkLCtEQUFRQSxDQUFDO1FBQUM7S0FBUyxFQUFFTztJQUM5QyxNQUFNUSxTQUFTWCxzREFBU0E7SUFFeEIscUJBQ0U7OzBCQUNFLDhEQUFDQywwREFBTUE7Ozs7OzBCQUNQLDhEQUFDSixrREFBSUE7MEJBQ0gsNEVBQUNlOzhCQUFNOzs7Ozs7Ozs7OzswQkFFVCw4REFBQ0M7O2tDQUNDLDhEQUFDQzt3QkFBSUMsV0FBVTtrQ0FDYiw0RUFBQ0Q7NEJBQUlDLFdBQVU7c0NBQ2IsNEVBQUNoQixrREFBSUE7Z0NBQUNpQixNQUFLOzBDQUFVOzs7Ozs7Ozs7Ozs7Ozs7O2tDQUl6Qiw4REFBQ0Y7d0JBQUlDLFdBQVU7a0NBQ1pMLFVBQ0NBLE9BQU9PLEdBQUcsQ0FBQyxDQUFDVCxxQkFDVjswQ0FDRSw0RUFBQ007b0NBQUlDLFdBQVU7O3NEQUNiLDhEQUFDRzs0Q0FBRUYsTUFBSztzREFDTiw0RUFBQ2xCLG1EQUFLQTtnREFDSnFCLEtBQUk7Z0RBQ0pDLEtBQUk7Z0RBQ0pDLE9BQU87Z0RBQ1BDLFFBQVE7Ozs7Ozs7Ozs7O3NEQUlaLDhEQUFDUjs0Q0FBSUMsV0FBVTs7OERBQ2IsOERBQUNRO29EQUFHUixXQUFVOzhEQUFxRTs7Ozs7OzhEQUluRiw4REFBQ0Q7b0RBQUlDLFdBQVU7O3NFQUNiLDhEQUFDUzs0REFBS1QsV0FBVTtzRUFDYlAsS0FBS2lCLElBQUk7Ozs7OztzRUFHWiw4REFBQ0M7NERBQ0NYLFdBQVU7NERBQ1ZZLFNBQVMsSUFBTTtnRUFDYmhCLE9BQU9pQixJQUFJLENBQUM7b0VBQ1ZDLFVBQVUsV0FBbUIsT0FBUnJCLEtBQUtzQixFQUFFO2dFQUM5Qjs0REFDRjtzRUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQVNmLDhEQUFDNUIsMERBQU1BOzs7Ozs7Ozs7Ozs7O0FBSWYsQ0FBQztHQTdEdUJPOztRQUNHYiwyREFBUUE7UUFDbEJJLGtEQUFTQTs7O0tBRkZTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbmRleC50c3g/MTlhMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gXCJAdGFuc3RhY2svcmVhY3QtcXVlcnlcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuLi9jb21wb25lbnRzL05hdmJhclwiO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vY29tcG9uZW50cy9Gb290ZXJcIjtcblxuaW1wb3J0IHsgUXVpeiB9IGZyb20gXCIuLi9pbnRlcmZhY2VzXCI7XG5cbi8vZGVmaW5pbmcgdGhlIGZldGNocXVpenJlcXVlc3QgZnVuY3Rpb25cbmFzeW5jIGZ1bmN0aW9uIGZldGNoUXVpemVzUmVxdWVzdCgpIHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi9hcGkvcXVpelwiKTtcblxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gIGNvbnN0IHsgcXVpeiB9ID0gZGF0YTtcblxuICByZXR1cm4gcXVpejtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgeyBkYXRhOiBxdWl6ZXMgfSA9IHVzZVF1ZXJ5KFtcInF1aXplc1wiXSwgZmV0Y2hRdWl6ZXNSZXF1ZXN0KTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPE5hdmJhciAvPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5IYWlxYSBBc2hyYWYgVGVjaCBUZXN0PC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxtYWluPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGJnLWdyYWRpZW50LXRvLXIgZnJvbS12aW9sZXQtMjAwIHRvLXBpbmstMjAwIHB0LTRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctNjQgdGV4dC13aGl0ZSBiZy1ncmFkaWVudC10by1iciBmcm9tLXB1cnBsZS02MDAgdG8tYmx1ZS01MDAgaG92ZXI6YmctZ3JhZGllbnQtdG8tYmwgZm9jdXM6cmluZy00IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLWJsdWUtMzAwIGRhcms6Zm9jdXM6cmluZy1ibHVlLTgwMCBmb250LW1lZGl1bSByb3VuZGVkLWxnIHRleHQtc20gcHgtNSBweS0yLjUgdGV4dC1jZW50ZXIgbXItMiBtYi0yXCI+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2NyZWF0ZVwiPkNyZWF0ZSBRdWl6PC9MaW5rPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWV2ZW5seSBiZy1ncmFkaWVudC10by1yIGZyb20tdmlvbGV0LTIwMCB0by1waW5rLTIwMFwiPlxuICAgICAgICAgIHtxdWl6ZXMgJiZcbiAgICAgICAgICAgIHF1aXplcy5tYXAoKHF1aXo6IFF1aXopID0+IChcbiAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBtYXgtdy1zbSBiZy13aGl0ZSBib3JkZXIgYm9yZGVyLWJsYWNrLTIwMCByb3VuZGVkLWxnIHNoYWRvdyBkYXJrOmJnLWdyYXktODAwIGRhcms6Ym9yZGVyLWdyYXktNzAwIG1iLTdcIj5cbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9pbWFnZXMvcXVpenRpbWUuanBnXCJcbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJNeSBJbWFnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezUwMH1cbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezUwMH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvYT5cblxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC01IHBiLTVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1zZW1pYm9sZCB0cmFja2luZy10aWdodCB0ZXh0LWdyYXktOTAwIGRhcms6dGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgIFRpdGxlOlxuICAgICAgICAgICAgICAgICAgICA8L2g1PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkIHRleHQtZ3JheS05MDAgZGFyazp0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7cXVpei5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cblxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgYmctYmx1ZS03MDAgaG92ZXI6YmctYmx1ZS04MDAgZm9jdXM6cmluZy00IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLWJsdWUtMzAwIGZvbnQtbWVkaXVtIHJvdW5kZWQtbGcgdGV4dC1zbSBweC01IHB5LTIuNSB0ZXh0LWNlbnRlciBkYXJrOmJnLWJsdWUtNjAwIGRhcms6aG92ZXI6YmctYmx1ZS03MDAgZGFyazpmb2N1czpyaW5nLWJsdWUtODAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVyLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiBgL3F1aXplcy8ke3F1aXouaWR9YCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIFZpZXcgUXVpelxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPEZvb3RlciAvPlxuICAgICAgPC9tYWluPlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVF1ZXJ5IiwiSGVhZCIsIkltYWdlIiwiTGluayIsInVzZVJvdXRlciIsIk5hdmJhciIsIkZvb3RlciIsImZldGNoUXVpemVzUmVxdWVzdCIsInJlc3BvbnNlIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsInF1aXoiLCJIb21lIiwicXVpemVzIiwicm91dGVyIiwidGl0bGUiLCJtYWluIiwiZGl2IiwiY2xhc3NOYW1lIiwiaHJlZiIsIm1hcCIsImEiLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsImg1Iiwic3BhbiIsIm5hbWUiLCJidXR0b24iLCJvbkNsaWNrIiwicHVzaCIsInBhdGhuYW1lIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});