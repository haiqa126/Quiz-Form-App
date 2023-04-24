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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @tanstack/react-query */ \"./node_modules/@tanstack/react-query/build/lib/index.mjs\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Navbar */ \"./src/components/Navbar.js\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Footer */ \"./src/components/Footer.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n//defining the fetchquizrequest function\nasync function fetchQuizesRequest() {\n    const response = await fetch(\"/api/quiz\");\n    console.log(\"i made the request\");\n    const data = await response.json();\n    console.log(\"The data I got is:\");\n    console.log(data);\n    const { quiz  } = data;\n    console.log(\"The data I got in quizes:\");\n    console.log(quiz);\n    return quiz;\n}\nfunction Home() {\n    _s();\n    const { data: quizes  } = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_7__.useQuery)([\n        \"quizes\"\n    ], fetchQuizesRequest);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ashra\\\\Desktop\\\\Noor\\\\QuizV1.2 - HA version\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Haiqa Ashraf Tech Test\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ashra\\\\Desktop\\\\Noor\\\\QuizV1.2 - HA version\\\\src\\\\pages\\\\index.tsx\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ashra\\\\Desktop\\\\Noor\\\\QuizV1.2 - HA version\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col justify-center items-center bg-gradient-to-r from-violet-200 to-pink-200 \",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-6xl text-black font-semibold tracking-wide text-center py-10\",\n                                children: \"List of Quizzes\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ashra\\\\Desktop\\\\Noor\\\\QuizV1.2 - HA version\\\\src\\\\pages\\\\index.tsx\",\n                                lineNumber: 36,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-64 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                    href: \"/create\",\n                                    children: \"Create Quiz\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ashra\\\\Desktop\\\\Noor\\\\QuizV1.2 - HA version\\\\src\\\\pages\\\\index.tsx\",\n                                    lineNumber: 40,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ashra\\\\Desktop\\\\Noor\\\\QuizV1.2 - HA version\\\\src\\\\pages\\\\index.tsx\",\n                                lineNumber: 39,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ashra\\\\Desktop\\\\Noor\\\\QuizV1.2 - HA version\\\\src\\\\pages\\\\index.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-wrap items-center justify-evenly bg-gradient-to-r from-violet-200 to-pink-200\",\n                        children: quizes && quizes.map((quiz)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"w-full max-w-sm bg-white border border-black-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            href: \"#\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                src: \"/images/quiztime.jpg\",\n                                                alt: \"My Image\",\n                                                width: 500,\n                                                height: 500\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\ashra\\\\Desktop\\\\Noor\\\\QuizV1.2 - HA version\\\\src\\\\pages\\\\index.tsx\",\n                                                lineNumber: 50,\n                                                columnNumber: 21\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\ashra\\\\Desktop\\\\Noor\\\\QuizV1.2 - HA version\\\\src\\\\pages\\\\index.tsx\",\n                                            lineNumber: 49,\n                                            columnNumber: 19\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"px-5 pb-5\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                                    className: \"text-xl font-semibold tracking-tight text-gray-900 dark:text-white\",\n                                                    children: \"Title:\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\ashra\\\\Desktop\\\\Noor\\\\QuizV1.2 - HA version\\\\src\\\\pages\\\\index.tsx\",\n                                                    lineNumber: 59,\n                                                    columnNumber: 21\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"flex items-center justify-between\",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                            className: \"text-3xl font-bold text-gray-900 dark:text-white\",\n                                                            children: quiz.name\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\Users\\\\ashra\\\\Desktop\\\\Noor\\\\QuizV1.2 - HA version\\\\src\\\\pages\\\\index.tsx\",\n                                                            lineNumber: 64,\n                                                            columnNumber: 23\n                                                        }, this),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                            className: \"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800\",\n                                                            onClick: ()=>{\n                                                                router.push({\n                                                                    pathname: \"/quizes/\".concat(quiz.id)\n                                                                });\n                                                            },\n                                                            children: \"View Quiz\"\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\Users\\\\ashra\\\\Desktop\\\\Noor\\\\QuizV1.2 - HA version\\\\src\\\\pages\\\\index.tsx\",\n                                                            lineNumber: 68,\n                                                            columnNumber: 23\n                                                        }, this)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"C:\\\\Users\\\\ashra\\\\Desktop\\\\Noor\\\\QuizV1.2 - HA version\\\\src\\\\pages\\\\index.tsx\",\n                                                    lineNumber: 63,\n                                                    columnNumber: 21\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\ashra\\\\Desktop\\\\Noor\\\\QuizV1.2 - HA version\\\\src\\\\pages\\\\index.tsx\",\n                                            lineNumber: 58,\n                                            columnNumber: 19\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\ashra\\\\Desktop\\\\Noor\\\\QuizV1.2 - HA version\\\\src\\\\pages\\\\index.tsx\",\n                                    lineNumber: 48,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ashra\\\\Desktop\\\\Noor\\\\QuizV1.2 - HA version\\\\src\\\\pages\\\\index.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ashra\\\\Desktop\\\\Noor\\\\QuizV1.2 - HA version\\\\src\\\\pages\\\\index.tsx\",\n                        lineNumber: 84,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ashra\\\\Desktop\\\\Noor\\\\QuizV1.2 - HA version\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"UniJMZsNxlYsSJ10RjrdFoq5vbo=\", false, function() {\n    return [\n        _tanstack_react_query__WEBPACK_IMPORTED_MODULE_7__.useQuery,\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQWlEO0FBQ3BCO0FBQ0U7QUFDRjtBQUNXO0FBQ0U7QUFDQTtBQUkxQyx3Q0FBd0M7QUFDeEMsZUFBZU8scUJBQXFCO0lBQ2xDLE1BQU1DLFdBQVcsTUFBTUMsTUFBTTtJQUM3QkMsUUFBUUMsR0FBRyxDQUFDO0lBQ1osTUFBTUMsT0FBTyxNQUFNSixTQUFTSyxJQUFJO0lBQ2hDSCxRQUFRQyxHQUFHLENBQUM7SUFDWkQsUUFBUUMsR0FBRyxDQUFDQztJQUNaLE1BQU0sRUFBRUUsS0FBSSxFQUFFLEdBQUdGO0lBQ2pCRixRQUFRQyxHQUFHLENBQUM7SUFDWkQsUUFBUUMsR0FBRyxDQUFDRztJQUNaLE9BQU9BO0FBQ1Q7QUFFZSxTQUFTQyxPQUFPOztJQUM3QixNQUFNLEVBQUVILE1BQU1JLE9BQU0sRUFBRSxHQUFHaEIsK0RBQVFBLENBQUM7UUFBQztLQUFTLEVBQUVPO0lBQzlDLE1BQU1VLFNBQVNiLHNEQUFTQTtJQUV4QixxQkFDRTs7MEJBQ0UsOERBQUNDLDBEQUFNQTs7Ozs7MEJBQ1AsOERBQUNKLGtEQUFJQTswQkFDSCw0RUFBQ2lCOzhCQUFNOzs7Ozs7Ozs7OzswQkFFVCw4REFBQ0M7O2tDQUNDLDhEQUFDQzt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNDO2dDQUFHRCxXQUFVOzBDQUFvRTs7Ozs7OzBDQUdsRiw4REFBQ0Q7Z0NBQUlDLFdBQVU7MENBQ2IsNEVBQUNsQixrREFBSUE7b0NBQUNvQixNQUFLOzhDQUFVOzs7Ozs7Ozs7Ozs7Ozs7OztrQ0FJekIsOERBQUNIO3dCQUFJQyxXQUFVO2tDQUNaTCxVQUNDQSxPQUFPUSxHQUFHLENBQUMsQ0FBQ1YscUJBQ1Y7MENBQ0UsNEVBQUNNO29DQUFJQyxXQUFVOztzREFDYiw4REFBQ0k7NENBQUVGLE1BQUs7c0RBQ04sNEVBQUNyQixtREFBS0E7Z0RBQ0p3QixLQUFJO2dEQUNKQyxLQUFJO2dEQUNKQyxPQUFPO2dEQUNQQyxRQUFROzs7Ozs7Ozs7OztzREFJWiw4REFBQ1Q7NENBQUlDLFdBQVU7OzhEQUNiLDhEQUFDUztvREFBR1QsV0FBVTs4REFBcUU7Ozs7Ozs4REFJbkYsOERBQUNEO29EQUFJQyxXQUFVOztzRUFDYiw4REFBQ1U7NERBQUtWLFdBQVU7c0VBQ2JQLEtBQUtrQixJQUFJOzs7Ozs7c0VBR1osOERBQUNDOzREQUNDWixXQUFVOzREQUNWYSxTQUFTLElBQU07Z0VBQ2JqQixPQUFPa0IsSUFBSSxDQUFDO29FQUNWQyxVQUFVLFdBQW1CLE9BQVJ0QixLQUFLdUIsRUFBRTtnRUFDOUI7NERBQ0Y7c0VBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FTZiw4REFBQy9CLDBEQUFNQTs7Ozs7Ozs7Ozs7OztBQUlmLENBQUM7R0FoRXVCUzs7UUFDR2YsMkRBQVFBO1FBQ2xCSSxrREFBU0E7OztLQUZGVyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaW5kZXgudHN4PzE5YTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tIFwiQHRhbnN0YWNrL3JlYWN0LXF1ZXJ5XCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IE5hdmJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9OYXZiYXJcIjtcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvRm9vdGVyXCI7XG5cbmltcG9ydCB7IFF1aXogfSBmcm9tIFwiLi4vaW50ZXJmYWNlc1wiO1xuXG4vL2RlZmluaW5nIHRoZSBmZXRjaHF1aXpyZXF1ZXN0IGZ1bmN0aW9uXG5hc3luYyBmdW5jdGlvbiBmZXRjaFF1aXplc1JlcXVlc3QoKSB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCIvYXBpL3F1aXpcIik7XG4gIGNvbnNvbGUubG9nKFwiaSBtYWRlIHRoZSByZXF1ZXN0XCIpO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICBjb25zb2xlLmxvZyhcIlRoZSBkYXRhIEkgZ290IGlzOlwiKTtcbiAgY29uc29sZS5sb2coZGF0YSk7XG4gIGNvbnN0IHsgcXVpeiB9ID0gZGF0YTtcbiAgY29uc29sZS5sb2coXCJUaGUgZGF0YSBJIGdvdCBpbiBxdWl6ZXM6XCIpO1xuICBjb25zb2xlLmxvZyhxdWl6KTtcbiAgcmV0dXJuIHF1aXo7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IHsgZGF0YTogcXVpemVzIH0gPSB1c2VRdWVyeShbXCJxdWl6ZXNcIl0sIGZldGNoUXVpemVzUmVxdWVzdCk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxOYXZiYXIgLz5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+SGFpcWEgQXNocmFmIFRlY2ggVGVzdDwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8bWFpbj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBiZy1ncmFkaWVudC10by1yIGZyb20tdmlvbGV0LTIwMCB0by1waW5rLTIwMCBcIj5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC02eGwgdGV4dC1ibGFjayBmb250LXNlbWlib2xkIHRyYWNraW5nLXdpZGUgdGV4dC1jZW50ZXIgcHktMTBcIj5cbiAgICAgICAgICAgIExpc3Qgb2YgUXVpenplc1xuICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTY0IHRleHQtd2hpdGUgYmctZ3JhZGllbnQtdG8tYnIgZnJvbS1wdXJwbGUtNjAwIHRvLWJsdWUtNTAwIGhvdmVyOmJnLWdyYWRpZW50LXRvLWJsIGZvY3VzOnJpbmctNCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy1ibHVlLTMwMCBkYXJrOmZvY3VzOnJpbmctYmx1ZS04MDAgZm9udC1tZWRpdW0gcm91bmRlZC1sZyB0ZXh0LXNtIHB4LTUgcHktMi41IHRleHQtY2VudGVyIG1yLTIgbWItMlwiPlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jcmVhdGVcIj5DcmVhdGUgUXVpejwvTGluaz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBpdGVtcy1jZW50ZXIganVzdGlmeS1ldmVubHkgYmctZ3JhZGllbnQtdG8tciBmcm9tLXZpb2xldC0yMDAgdG8tcGluay0yMDBcIj5cbiAgICAgICAgICB7cXVpemVzICYmXG4gICAgICAgICAgICBxdWl6ZXMubWFwKChxdWl6OiBRdWl6KSA9PiAoXG4gICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWF4LXctc20gYmctd2hpdGUgYm9yZGVyIGJvcmRlci1ibGFjay0yMDAgcm91bmRlZC1sZyBzaGFkb3cgZGFyazpiZy1ncmF5LTgwMCBkYXJrOmJvcmRlci1ncmF5LTcwMFwiPlxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2ltYWdlcy9xdWl6dGltZS5qcGdcIlxuICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIk15IEltYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17NTAwfVxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17NTAwfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9hPlxuXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTUgcGItNVwiPlxuICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LXNlbWlib2xkIHRyYWNraW5nLXRpZ2h0IHRleHQtZ3JheS05MDAgZGFyazp0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgVGl0bGU6XG4gICAgICAgICAgICAgICAgICAgIDwvaDU+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJvbGQgdGV4dC1ncmF5LTkwMCBkYXJrOnRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtxdWl6Lm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuXG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBiZy1ibHVlLTcwMCBob3ZlcjpiZy1ibHVlLTgwMCBmb2N1czpyaW5nLTQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctYmx1ZS0zMDAgZm9udC1tZWRpdW0gcm91bmRlZC1sZyB0ZXh0LXNtIHB4LTUgcHktMi41IHRleHQtY2VudGVyIGRhcms6YmctYmx1ZS02MDAgZGFyazpob3ZlcjpiZy1ibHVlLTcwMCBkYXJrOmZvY3VzOnJpbmctYmx1ZS04MDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXIucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6IGAvcXVpemVzLyR7cXVpei5pZH1gLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgVmlldyBRdWl6XG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICA8L21haW4+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlUXVlcnkiLCJIZWFkIiwiSW1hZ2UiLCJMaW5rIiwidXNlUm91dGVyIiwiTmF2YmFyIiwiRm9vdGVyIiwiZmV0Y2hRdWl6ZXNSZXF1ZXN0IiwicmVzcG9uc2UiLCJmZXRjaCIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwianNvbiIsInF1aXoiLCJIb21lIiwicXVpemVzIiwicm91dGVyIiwidGl0bGUiLCJtYWluIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJocmVmIiwibWFwIiwiYSIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwiaDUiLCJzcGFuIiwibmFtZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJwdXNoIiwicGF0aG5hbWUiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});