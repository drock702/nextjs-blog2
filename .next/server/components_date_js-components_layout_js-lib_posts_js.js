/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "components_date_js-components_layout_js-lib_posts_js";
exports.ids = ["components_date_js-components_layout_js-lib_posts_js"];
exports.modules = {

/***/ "./components/date.js":
/*!****************************!*\
  !*** ./components/date.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Date; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ \"date-fns\");\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/derrickp/Projects/nextjs-blog/components/date.js\";\n\nfunction Date({\n  dateString\n}) {\n  const date = (0,date_fns__WEBPACK_IMPORTED_MODULE_1__.parseISO)(dateString);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"time\", {\n    dateTime: dateString,\n    children: (0,date_fns__WEBPACK_IMPORTED_MODULE_1__.format)(date, 'LLLL d, yyyy')\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 10\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZWFybi1zdGFydGVyLy4vY29tcG9uZW50cy9kYXRlLmpzP2ViOTEiXSwibmFtZXMiOlsiRGF0ZSIsImRhdGVTdHJpbmciLCJkYXRlIiwicGFyc2VJU08iLCJmb3JtYXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUVlLFNBQVNBLElBQVQsQ0FBYztBQUFFQztBQUFGLENBQWQsRUFBOEI7QUFDM0MsUUFBTUMsSUFBSSxHQUFHQyxrREFBUSxDQUFDRixVQUFELENBQXJCO0FBQ0Esc0JBQU87QUFBTSxZQUFRLEVBQUVBLFVBQWhCO0FBQUEsY0FBNkJHLGdEQUFNLENBQUNGLElBQUQsRUFBTyxjQUFQO0FBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNEIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9kYXRlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcGFyc2VJU08sIGZvcm1hdCB9IGZyb20gJ2RhdGUtZm5zJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEYXRlKHsgZGF0ZVN0cmluZyB9KSB7XG4gIGNvbnN0IGRhdGUgPSBwYXJzZUlTTyhkYXRlU3RyaW5nKVxuICByZXR1cm4gPHRpbWUgZGF0ZVRpbWU9e2RhdGVTdHJpbmd9Pntmb3JtYXQoZGF0ZSwgJ0xMTEwgZCwgeXl5eScpfTwvdGltZT5cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/date.js\n");

/***/ }),

/***/ "./components/layout.js":
/*!******************************!*\
  !*** ./components/layout.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"siteTitle\": function() { return /* binding */ siteTitle; },\n/* harmony export */   \"default\": function() { return /* binding */ Layout; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _layout_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout.module.css */ \"./components/layout.module.css\");\n/* harmony import */ var _layout_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_layout_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/utils.module.css */ \"./styles/utils.module.css\");\n/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _jsxFileName = \"/Users/derrickp/Projects/nextjs-blog/components/layout.js\";\n\n\n\n\n\nconst name = 'Derrick';\nconst siteTitle = 'Next.js Sample Website';\nfunction Layout({\n  children,\n  home\n}) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: (_layout_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n        rel: \"icon\",\n        href: \"/favicon.ico\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n        name: \"description\",\n        content: \"Learn how to build a personal website using Next.js\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n        property: \"og:image\",\n        content: `https://og-image.vercel.app/${encodeURI(siteTitle)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n        name: \"og:title\",\n        content: siteTitle\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n        name: \"twitter:card\",\n        content: \"summary_large_image\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n      className: (_layout_module_css__WEBPACK_IMPORTED_MODULE_4___default().header),\n      children: home ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n          priority: true,\n          src: \"/images/profile.jpg\",\n          className: (_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5___default().borderCircle),\n          height: 144,\n          width: 144,\n          alt: name\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 13\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n          className: (_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5___default().heading2Xl),\n          children: name\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 13\n        }, this)]\n      }, void 0, true) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n          href: \"/\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n              priority: true,\n              src: \"/images/profile.jpg\",\n              className: (_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5___default().borderCircle),\n              height: 108,\n              width: 108,\n              alt: name\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 45,\n              columnNumber: 17\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 44,\n            columnNumber: 15\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 43,\n          columnNumber: 13\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n          className: (_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5___default().headingLg),\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n            href: \"/\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n              className: (_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5___default().colorInherit),\n              children: name\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 57,\n              columnNumber: 17\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 56,\n            columnNumber: 15\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 55,\n          columnNumber: 13\n        }, this)]\n      }, void 0, true)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n      children: children\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 7\n    }, this), !home && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_layout_module_css__WEBPACK_IMPORTED_MODULE_4___default().backToHome),\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n        href: \"/\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n          children: \"\\u2190 Back to home\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 67,\n          columnNumber: 13\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 66,\n        columnNumber: 11\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 9\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 12,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZWFybi1zdGFydGVyLy4vY29tcG9uZW50cy9sYXlvdXQuanM/MDlhNyJdLCJuYW1lcyI6WyJuYW1lIiwic2l0ZVRpdGxlIiwiTGF5b3V0IiwiY2hpbGRyZW4iLCJob21lIiwic3R5bGVzIiwiZW5jb2RlVVJJIiwidXRpbFN0eWxlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUEsSUFBSSxHQUFHLFNBQWI7QUFDTyxNQUFNQyxTQUFTLEdBQUcsd0JBQWxCO0FBRVEsU0FBU0MsTUFBVCxDQUFnQjtBQUFFQyxVQUFGO0FBQVlDO0FBQVosQ0FBaEIsRUFBb0M7QUFDakQsc0JBQ0U7QUFBSyxhQUFTLEVBQUVDLHFFQUFoQjtBQUFBLDRCQUNFLDhEQUFDLGtEQUFEO0FBQUEsOEJBQ0U7QUFBTSxXQUFHLEVBQUMsTUFBVjtBQUFpQixZQUFJLEVBQUM7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFDRSxZQUFJLEVBQUMsYUFEUDtBQUVFLGVBQU8sRUFBQztBQUZWO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRixlQU1FO0FBQ0UsZ0JBQVEsRUFBQyxVQURYO0FBRUUsZUFBTyxFQUFHLCtCQUE4QkMsU0FBUyxDQUMvQ0wsU0FEK0MsQ0FFL0M7QUFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTkYsZUFZRTtBQUFNLFlBQUksRUFBQyxVQUFYO0FBQXNCLGVBQU8sRUFBRUE7QUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVpGLGVBYUU7QUFBTSxZQUFJLEVBQUMsY0FBWDtBQUEwQixlQUFPLEVBQUM7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBZ0JFO0FBQVEsZUFBUyxFQUFFSSxrRUFBbkI7QUFBQSxnQkFDR0QsSUFBSSxnQkFDSDtBQUFBLGdDQUNFLDhEQUFDLG1EQUFEO0FBQ0Usa0JBQVEsTUFEVjtBQUVFLGFBQUcsRUFBQyxxQkFGTjtBQUdFLG1CQUFTLEVBQUVHLDhFQUhiO0FBSUUsZ0JBQU0sRUFBRSxHQUpWO0FBS0UsZUFBSyxFQUFFLEdBTFQ7QUFNRSxhQUFHLEVBQUVQO0FBTlA7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQVNFO0FBQUksbUJBQVMsRUFBRU8sNEVBQWY7QUFBQSxvQkFBdUNQO0FBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBVEY7QUFBQSxzQkFERyxnQkFhSDtBQUFBLGdDQUNFLDhEQUFDLGtEQUFEO0FBQU0sY0FBSSxFQUFDLEdBQVg7QUFBQSxpQ0FDRTtBQUFBLG1DQUNFLDhEQUFDLG1EQUFEO0FBQ0Usc0JBQVEsTUFEVjtBQUVFLGlCQUFHLEVBQUMscUJBRk47QUFHRSx1QkFBUyxFQUFFTyw4RUFIYjtBQUlFLG9CQUFNLEVBQUUsR0FKVjtBQUtFLG1CQUFLLEVBQUUsR0FMVDtBQU1FLGlCQUFHLEVBQUVQO0FBTlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBYUU7QUFBSSxtQkFBUyxFQUFFTywyRUFBZjtBQUFBLGlDQUNFLDhEQUFDLGtEQUFEO0FBQU0sZ0JBQUksRUFBQyxHQUFYO0FBQUEsbUNBQ0U7QUFBRyx1QkFBUyxFQUFFQSw4RUFBZDtBQUFBLHdCQUF3Q1A7QUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWJGO0FBQUE7QUFkSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBaEJGLGVBbURFO0FBQUEsZ0JBQU9HO0FBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQW5ERixFQW9ERyxDQUFDQyxJQUFELGlCQUNDO0FBQUssZUFBUyxFQUFFQyxzRUFBaEI7QUFBQSw2QkFDRSw4REFBQyxrREFBRDtBQUFNLFlBQUksRUFBQyxHQUFYO0FBQUEsK0JBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXJESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQThERCIsImZpbGUiOiIuL2NvbXBvbmVudHMvbGF5b3V0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vbGF5b3V0Lm1vZHVsZS5jc3MnXG5pbXBvcnQgdXRpbFN0eWxlcyBmcm9tICcuLi9zdHlsZXMvdXRpbHMubW9kdWxlLmNzcydcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuY29uc3QgbmFtZSA9ICdEZXJyaWNrJ1xuZXhwb3J0IGNvbnN0IHNpdGVUaXRsZSA9ICdOZXh0LmpzIFNhbXBsZSBXZWJzaXRlJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYXlvdXQoeyBjaGlsZHJlbiwgaG9tZSB9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgICAgPG1ldGFcbiAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICAgIGNvbnRlbnQ9XCJMZWFybiBob3cgdG8gYnVpbGQgYSBwZXJzb25hbCB3ZWJzaXRlIHVzaW5nIE5leHQuanNcIlxuICAgICAgICAvPlxuICAgICAgICA8bWV0YVxuICAgICAgICAgIHByb3BlcnR5PVwib2c6aW1hZ2VcIlxuICAgICAgICAgIGNvbnRlbnQ9e2BodHRwczovL29nLWltYWdlLnZlcmNlbC5hcHAvJHtlbmNvZGVVUkkoXG4gICAgICAgICAgICBzaXRlVGl0bGVcbiAgICAgICAgICApfS5wbmc/dGhlbWU9bGlnaHQmbWQ9MCZmb250U2l6ZT03NXB4JmltYWdlcz1odHRwcyUzQSUyRiUyRmFzc2V0cy52ZXJjZWwuY29tJTJGaW1hZ2UlMkZ1cGxvYWQlMkZmcm9udCUyRmFzc2V0cyUyRmRlc2lnbiUyRm5leHRqcy1ibGFjay1sb2dvLnN2Z2B9XG4gICAgICAgIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9e3NpdGVUaXRsZX0gLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6Y2FyZFwiIGNvbnRlbnQ9XCJzdW1tYXJ5X2xhcmdlX2ltYWdlXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT5cbiAgICAgICAge2hvbWUgPyAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICBwcmlvcml0eVxuICAgICAgICAgICAgICBzcmM9XCIvaW1hZ2VzL3Byb2ZpbGUuanBnXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmJvcmRlckNpcmNsZX1cbiAgICAgICAgICAgICAgaGVpZ2h0PXsxNDR9XG4gICAgICAgICAgICAgIHdpZHRoPXsxNDR9XG4gICAgICAgICAgICAgIGFsdD17bmFtZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmhlYWRpbmcyWGx9PntuYW1lfTwvaDE+XG4gICAgICAgICAgPC8+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgcHJpb3JpdHlcbiAgICAgICAgICAgICAgICAgIHNyYz1cIi9pbWFnZXMvcHJvZmlsZS5qcGdcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmJvcmRlckNpcmNsZX1cbiAgICAgICAgICAgICAgICAgIGhlaWdodD17MTA4fVxuICAgICAgICAgICAgICAgICAgd2lkdGg9ezEwOH1cbiAgICAgICAgICAgICAgICAgIGFsdD17bmFtZX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmhlYWRpbmdMZ30+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmNvbG9ySW5oZXJpdH0+e25hbWV9PC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2gyPlxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuICAgICAgPC9oZWFkZXI+XG4gICAgICA8bWFpbj57Y2hpbGRyZW59PC9tYWluPlxuICAgICAgeyFob21lICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5iYWNrVG9Ib21lfT5cbiAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgPGE+4oaQIEJhY2sgdG8gaG9tZTwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/layout.js\n");

/***/ }),

/***/ "./lib/posts.js":
/*!**********************!*\
  !*** ./lib/posts.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getSortedPostsData\": function() { return /* binding */ getSortedPostsData; },\n/* harmony export */   \"getAllPostIds\": function() { return /* binding */ getAllPostIds; },\n/* harmony export */   \"getPostData\": function() { return /* binding */ getPostData; }\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gray-matter */ \"gray-matter\");\n/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var remark__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! remark */ \"remark\");\n/* harmony import */ var remark__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(remark__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var remark_html__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! remark-html */ \"remark-html\");\n/* harmony import */ var remark_html__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(remark_html__WEBPACK_IMPORTED_MODULE_4__);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\nconst postsDirectory = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), 'posts');\nfunction getSortedPostsData() {\n  // Get file names under /posts\n  const fileNames = fs__WEBPACK_IMPORTED_MODULE_0___default().readdirSync(postsDirectory);\n  const allPostsData = fileNames.map(fileName => {\n    // Remove \".md\" from file name to get id\n    const id = fileName.replace(/\\.md$/, ''); // Read markdown file as string\n\n    const fullPath = path__WEBPACK_IMPORTED_MODULE_1___default().join(postsDirectory, fileName);\n    const fileContents = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(fullPath, 'utf8'); // Use gray-matter to parse the post metadata section\n\n    const matterResult = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(fileContents); // Combine the data with the id\n\n    return _objectSpread({\n      id\n    }, matterResult.data);\n  }); // Sort posts by date\n\n  return allPostsData.sort(({\n    date: a\n  }, {\n    date: b\n  }) => {\n    if (a < b) {\n      return 1;\n    } else if (a > b) {\n      return -1;\n    } else {\n      return 0;\n    }\n  });\n}\nfunction getAllPostIds() {\n  const fileNames = fs__WEBPACK_IMPORTED_MODULE_0___default().readdirSync(postsDirectory); // Returns an array that looks like this:\n  // [\n  //   {\n  //     params: {\n  //       id: 'ssg-ssr'\n  //     }\n  //   },\n  //   {\n  //     params: {\n  //       id: 'pre-rendering'\n  //     }\n  //   }\n  // ]\n\n  return fileNames.map(fileName => {\n    return {\n      params: {\n        id: fileName.replace(/\\.md$/, '')\n      }\n    };\n  });\n}\nasync function getPostData(id) {\n  const fullPath = path__WEBPACK_IMPORTED_MODULE_1___default().join(postsDirectory, `${id}.md`);\n  const fileContents = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(fullPath, 'utf8'); // Use gray-matter to parse the post metadata section\n\n  const matterResult = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(fileContents); // Use remark to convert markdown into HTML string\n\n  const processedContent = await remark__WEBPACK_IMPORTED_MODULE_3___default()().use((remark_html__WEBPACK_IMPORTED_MODULE_4___default())).process(matterResult.content);\n  const contentHtml = processedContent.toString(); // Combine the data with the id and contentHtml\n\n  return _objectSpread({\n    id,\n    contentHtml\n  }, matterResult.data);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZWFybi1zdGFydGVyLy4vbGliL3Bvc3RzLmpzPzk3NTQiXSwibmFtZXMiOlsicG9zdHNEaXJlY3RvcnkiLCJwYXRoIiwicHJvY2VzcyIsImN3ZCIsImdldFNvcnRlZFBvc3RzRGF0YSIsImZpbGVOYW1lcyIsImZzIiwiYWxsUG9zdHNEYXRhIiwibWFwIiwiZmlsZU5hbWUiLCJpZCIsInJlcGxhY2UiLCJmdWxsUGF0aCIsImZpbGVDb250ZW50cyIsIm1hdHRlclJlc3VsdCIsIm1hdHRlciIsImRhdGEiLCJzb3J0IiwiZGF0ZSIsImEiLCJiIiwiZ2V0QWxsUG9zdElkcyIsInBhcmFtcyIsImdldFBvc3REYXRhIiwicHJvY2Vzc2VkQ29udGVudCIsInJlbWFyayIsInVzZSIsImh0bWwiLCJjb250ZW50IiwiY29udGVudEh0bWwiLCJ0b1N0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxjQUFjLEdBQUdDLGdEQUFBLENBQVVDLE9BQU8sQ0FBQ0MsR0FBUixFQUFWLEVBQXlCLE9BQXpCLENBQXZCO0FBRU8sU0FBU0Msa0JBQVQsR0FBOEI7QUFDbkM7QUFDQSxRQUFNQyxTQUFTLEdBQUdDLHFEQUFBLENBQWVOLGNBQWYsQ0FBbEI7QUFDQSxRQUFNTyxZQUFZLEdBQUdGLFNBQVMsQ0FBQ0csR0FBVixDQUFjQyxRQUFRLElBQUk7QUFDN0M7QUFDQSxVQUFNQyxFQUFFLEdBQUdELFFBQVEsQ0FBQ0UsT0FBVCxDQUFpQixPQUFqQixFQUEwQixFQUExQixDQUFYLENBRjZDLENBSTdDOztBQUNBLFVBQU1DLFFBQVEsR0FBR1gsZ0RBQUEsQ0FBVUQsY0FBVixFQUEwQlMsUUFBMUIsQ0FBakI7QUFDQSxVQUFNSSxZQUFZLEdBQUdQLHNEQUFBLENBQWdCTSxRQUFoQixFQUEwQixNQUExQixDQUFyQixDQU42QyxDQVE3Qzs7QUFDQSxVQUFNRSxZQUFZLEdBQUdDLGtEQUFNLENBQUNGLFlBQUQsQ0FBM0IsQ0FUNkMsQ0FXN0M7O0FBQ0E7QUFDRUg7QUFERixPQUVLSSxZQUFZLENBQUNFLElBRmxCO0FBSUQsR0FoQm9CLENBQXJCLENBSG1DLENBb0JuQzs7QUFDQSxTQUFPVCxZQUFZLENBQUNVLElBQWIsQ0FBa0IsQ0FBQztBQUFFQyxRQUFJLEVBQUVDO0FBQVIsR0FBRCxFQUFjO0FBQUVELFFBQUksRUFBRUU7QUFBUixHQUFkLEtBQThCO0FBQ3JELFFBQUlELENBQUMsR0FBR0MsQ0FBUixFQUFXO0FBQ1QsYUFBTyxDQUFQO0FBQ0QsS0FGRCxNQUVPLElBQUlELENBQUMsR0FBR0MsQ0FBUixFQUFXO0FBQ2hCLGFBQU8sQ0FBQyxDQUFSO0FBQ0QsS0FGTSxNQUVBO0FBQ0wsYUFBTyxDQUFQO0FBQ0Q7QUFDRixHQVJNLENBQVA7QUFTRDtBQUVNLFNBQVNDLGFBQVQsR0FBeUI7QUFDOUIsUUFBTWhCLFNBQVMsR0FBR0MscURBQUEsQ0FBZU4sY0FBZixDQUFsQixDQUQ4QixDQUc5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxTQUFPSyxTQUFTLENBQUNHLEdBQVYsQ0FBY0MsUUFBUSxJQUFJO0FBQy9CLFdBQU87QUFDTGEsWUFBTSxFQUFFO0FBQ05aLFVBQUUsRUFBRUQsUUFBUSxDQUFDRSxPQUFULENBQWlCLE9BQWpCLEVBQTBCLEVBQTFCO0FBREU7QUFESCxLQUFQO0FBS0QsR0FOTSxDQUFQO0FBT0Q7QUFFUSxlQUFlWSxXQUFmLENBQTJCYixFQUEzQixFQUErQjtBQUNwQyxRQUFNRSxRQUFRLEdBQUdYLGdEQUFBLENBQVVELGNBQVYsRUFBMkIsR0FBRVUsRUFBRyxLQUFoQyxDQUFqQjtBQUNBLFFBQU1HLFlBQVksR0FBR1Asc0RBQUEsQ0FBZ0JNLFFBQWhCLEVBQTBCLE1BQTFCLENBQXJCLENBRm9DLENBSXBDOztBQUNBLFFBQU1FLFlBQVksR0FBR0Msa0RBQU0sQ0FBQ0YsWUFBRCxDQUEzQixDQUxvQyxDQU9wQzs7QUFDQSxRQUFNVyxnQkFBZ0IsR0FBRyxNQUFNQyw2Q0FBTSxHQUNoQ0MsR0FEMEIsQ0FDdEJDLG9EQURzQixFQUUxQnpCLE9BRjBCLENBRWxCWSxZQUFZLENBQUNjLE9BRkssQ0FBL0I7QUFHQSxRQUFNQyxXQUFXLEdBQUdMLGdCQUFnQixDQUFDTSxRQUFqQixFQUFwQixDQVhvQyxDQWFwQzs7QUFDQTtBQUNJcEIsTUFESjtBQUVJbUI7QUFGSixLQUdPZixZQUFZLENBQUNFLElBSHBCO0FBS0QiLCJmaWxlIjoiLi9saWIvcG9zdHMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZnMgZnJvbSAnZnMnXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xuaW1wb3J0IG1hdHRlciBmcm9tICdncmF5LW1hdHRlcidcbmltcG9ydCByZW1hcmsgZnJvbSAncmVtYXJrJ1xuaW1wb3J0IGh0bWwgZnJvbSAncmVtYXJrLWh0bWwnXG5cbmNvbnN0IHBvc3RzRGlyZWN0b3J5ID0gcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksICdwb3N0cycpXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTb3J0ZWRQb3N0c0RhdGEoKSB7XG4gIC8vIEdldCBmaWxlIG5hbWVzIHVuZGVyIC9wb3N0c1xuICBjb25zdCBmaWxlTmFtZXMgPSBmcy5yZWFkZGlyU3luYyhwb3N0c0RpcmVjdG9yeSlcbiAgY29uc3QgYWxsUG9zdHNEYXRhID0gZmlsZU5hbWVzLm1hcChmaWxlTmFtZSA9PiB7XG4gICAgLy8gUmVtb3ZlIFwiLm1kXCIgZnJvbSBmaWxlIG5hbWUgdG8gZ2V0IGlkXG4gICAgY29uc3QgaWQgPSBmaWxlTmFtZS5yZXBsYWNlKC9cXC5tZCQvLCAnJylcblxuICAgIC8vIFJlYWQgbWFya2Rvd24gZmlsZSBhcyBzdHJpbmdcbiAgICBjb25zdCBmdWxsUGF0aCA9IHBhdGguam9pbihwb3N0c0RpcmVjdG9yeSwgZmlsZU5hbWUpXG4gICAgY29uc3QgZmlsZUNvbnRlbnRzID0gZnMucmVhZEZpbGVTeW5jKGZ1bGxQYXRoLCAndXRmOCcpXG5cbiAgICAvLyBVc2UgZ3JheS1tYXR0ZXIgdG8gcGFyc2UgdGhlIHBvc3QgbWV0YWRhdGEgc2VjdGlvblxuICAgIGNvbnN0IG1hdHRlclJlc3VsdCA9IG1hdHRlcihmaWxlQ29udGVudHMpXG5cbiAgICAvLyBDb21iaW5lIHRoZSBkYXRhIHdpdGggdGhlIGlkXG4gICAgcmV0dXJuIHtcbiAgICAgIGlkLFxuICAgICAgLi4ubWF0dGVyUmVzdWx0LmRhdGFcbiAgICB9XG4gIH0pXG4gIC8vIFNvcnQgcG9zdHMgYnkgZGF0ZVxuICByZXR1cm4gYWxsUG9zdHNEYXRhLnNvcnQoKHsgZGF0ZTogYSB9LCB7IGRhdGU6IGIgfSkgPT4ge1xuICAgIGlmIChhIDwgYikge1xuICAgICAgcmV0dXJuIDFcbiAgICB9IGVsc2UgaWYgKGEgPiBiKSB7XG4gICAgICByZXR1cm4gLTFcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIDBcbiAgICB9XG4gIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBbGxQb3N0SWRzKCkge1xuICBjb25zdCBmaWxlTmFtZXMgPSBmcy5yZWFkZGlyU3luYyhwb3N0c0RpcmVjdG9yeSlcblxuICAvLyBSZXR1cm5zIGFuIGFycmF5IHRoYXQgbG9va3MgbGlrZSB0aGlzOlxuICAvLyBbXG4gIC8vICAge1xuICAvLyAgICAgcGFyYW1zOiB7XG4gIC8vICAgICAgIGlkOiAnc3NnLXNzcidcbiAgLy8gICAgIH1cbiAgLy8gICB9LFxuICAvLyAgIHtcbiAgLy8gICAgIHBhcmFtczoge1xuICAvLyAgICAgICBpZDogJ3ByZS1yZW5kZXJpbmcnXG4gIC8vICAgICB9XG4gIC8vICAgfVxuICAvLyBdXG4gIHJldHVybiBmaWxlTmFtZXMubWFwKGZpbGVOYW1lID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgcGFyYW1zOiB7XG4gICAgICAgIGlkOiBmaWxlTmFtZS5yZXBsYWNlKC9cXC5tZCQvLCAnJylcbiAgICAgIH1cbiAgICB9XG4gIH0pXG59XG5cbiAgZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFBvc3REYXRhKGlkKSB7XG4gICAgY29uc3QgZnVsbFBhdGggPSBwYXRoLmpvaW4ocG9zdHNEaXJlY3RvcnksIGAke2lkfS5tZGApXG4gICAgY29uc3QgZmlsZUNvbnRlbnRzID0gZnMucmVhZEZpbGVTeW5jKGZ1bGxQYXRoLCAndXRmOCcpXG4gIFxuICAgIC8vIFVzZSBncmF5LW1hdHRlciB0byBwYXJzZSB0aGUgcG9zdCBtZXRhZGF0YSBzZWN0aW9uXG4gICAgY29uc3QgbWF0dGVyUmVzdWx0ID0gbWF0dGVyKGZpbGVDb250ZW50cylcbiAgXG4gICAgLy8gVXNlIHJlbWFyayB0byBjb252ZXJ0IG1hcmtkb3duIGludG8gSFRNTCBzdHJpbmdcbiAgICBjb25zdCBwcm9jZXNzZWRDb250ZW50ID0gYXdhaXQgcmVtYXJrKClcbiAgICAgICAgLnVzZShodG1sKVxuICAgICAgICAucHJvY2VzcyhtYXR0ZXJSZXN1bHQuY29udGVudClcbiAgICBjb25zdCBjb250ZW50SHRtbCA9IHByb2Nlc3NlZENvbnRlbnQudG9TdHJpbmcoKVxuXG4gICAgLy8gQ29tYmluZSB0aGUgZGF0YSB3aXRoIHRoZSBpZCBhbmQgY29udGVudEh0bWxcbiAgICByZXR1cm4ge1xuICAgICAgICBpZCxcbiAgICAgICAgY29udGVudEh0bWwsXG4gICAgICAgIC4uLm1hdHRlclJlc3VsdC5kYXRhXG4gICAgfVxuICB9XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/posts.js\n");

/***/ }),

/***/ "./components/layout.module.css":
/*!**************************************!*\
  !*** ./components/layout.module.css ***!
  \**************************************/
/***/ (function(module) {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"layout_container__2t4v2\",\n\t\"header\": \"layout_header__2rhWq\",\n\t\"backToHome\": \"layout_backToHome__1vZsp\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZWFybi1zdGFydGVyLy4vY29tcG9uZW50cy9sYXlvdXQubW9kdWxlLmNzcz9kZGU5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL2NvbXBvbmVudHMvbGF5b3V0Lm1vZHVsZS5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJsYXlvdXRfY29udGFpbmVyX18ydDR2MlwiLFxuXHRcImhlYWRlclwiOiBcImxheW91dF9oZWFkZXJfXzJyaFdxXCIsXG5cdFwiYmFja1RvSG9tZVwiOiBcImxheW91dF9iYWNrVG9Ib21lX18xdlpzcFwiXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/layout.module.css\n");

/***/ }),

/***/ "./styles/utils.module.css":
/*!*********************************!*\
  !*** ./styles/utils.module.css ***!
  \*********************************/
/***/ (function(module) {

eval("// Exports\nmodule.exports = {\n\t\"heading2Xl\": \"utils_heading2Xl__1I65m\",\n\t\"headingXl\": \"utils_headingXl__1XecN\",\n\t\"headingLg\": \"utils_headingLg__de7p0\",\n\t\"headingMd\": \"utils_headingMd__3de6G\",\n\t\"borderCircle\": \"utils_borderCircle__13qdJ\",\n\t\"colorInherit\": \"utils_colorInherit__3Gudf\",\n\t\"padding1px\": \"utils_padding1px__oCny8\",\n\t\"list\": \"utils_list__S7_pe\",\n\t\"listItem\": \"utils_listItem__2eJpJ\",\n\t\"lightText\": \"utils_lightText__12Ckm\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZWFybi1zdGFydGVyLy4vc3R5bGVzL3V0aWxzLm1vZHVsZS5jc3M/MjNiZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL3N0eWxlcy91dGlscy5tb2R1bGUuY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiaGVhZGluZzJYbFwiOiBcInV0aWxzX2hlYWRpbmcyWGxfXzFJNjVtXCIsXG5cdFwiaGVhZGluZ1hsXCI6IFwidXRpbHNfaGVhZGluZ1hsX18xWGVjTlwiLFxuXHRcImhlYWRpbmdMZ1wiOiBcInV0aWxzX2hlYWRpbmdMZ19fZGU3cDBcIixcblx0XCJoZWFkaW5nTWRcIjogXCJ1dGlsc19oZWFkaW5nTWRfXzNkZTZHXCIsXG5cdFwiYm9yZGVyQ2lyY2xlXCI6IFwidXRpbHNfYm9yZGVyQ2lyY2xlX18xM3FkSlwiLFxuXHRcImNvbG9ySW5oZXJpdFwiOiBcInV0aWxzX2NvbG9ySW5oZXJpdF9fM0d1ZGZcIixcblx0XCJwYWRkaW5nMXB4XCI6IFwidXRpbHNfcGFkZGluZzFweF9fb0NueThcIixcblx0XCJsaXN0XCI6IFwidXRpbHNfbGlzdF9fUzdfcGVcIixcblx0XCJsaXN0SXRlbVwiOiBcInV0aWxzX2xpc3RJdGVtX18yZUpwSlwiLFxuXHRcImxpZ2h0VGV4dFwiOiBcInV0aWxzX2xpZ2h0VGV4dF9fMTJDa21cIlxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./styles/utils.module.css\n");

/***/ }),

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;