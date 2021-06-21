/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getStaticProps\": function() { return /* binding */ getStaticProps; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout */ \"./components/layout.js\");\n/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/utils.module.css */ \"./styles/utils.module.css\");\n/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _lib_posts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/posts */ \"./lib/posts.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_date__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/date */ \"./components/date.js\");\n\nvar _jsxFileName = \"/Users/derrickp/Projects/nextjs-blog/pages/index.js\";\n\n\n\n\n\n\nasync function getStaticProps() {\n  const allPostsData = (0,_lib_posts__WEBPACK_IMPORTED_MODULE_3__.getSortedPostsData)();\n  return {\n    props: {\n      allPostsData\n    }\n  };\n}\nfunction Home({\n  allPostsData\n}) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_2__.default, {\n    home: true,\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n      className: `${(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_6___default().headingMd)} ${(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_6___default().padding1px)}`,\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n        className: (_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_6___default().headingLg),\n        children: \"Blog\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n        className: (_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_6___default().list),\n        children: allPostsData.map(({\n          id,\n          date,\n          title\n        }) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n          className: (_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_6___default().listItem),\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n            href: `/posts/${id}`,\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n              children: title\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 30,\n              columnNumber: 17\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 29,\n            columnNumber: 15\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 32,\n            columnNumber: 15\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"small\", {\n            className: (_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_6___default().lightText),\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_date__WEBPACK_IMPORTED_MODULE_5__.default, {\n              dateString: date\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 34,\n              columnNumber: 17\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 33,\n            columnNumber: 15\n          }, this)]\n        }, id, true, {\n          fileName: _jsxFileName,\n          lineNumber: 28,\n          columnNumber: 13\n        }, this))\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 20,\n    columnNumber: 5\n  }, this);\n} // export default function Home() {\n//   return (\n//     <Layout home>\n//       <Head>\n//         <title>{siteTitle}</title>\n//       </Head>\n//       <section className={utilStyles.headingMd}>\n//         <p>Hello, I am Derrick.  I am a software engineer learning to better understand microservices and UX development</p>\n//         <p>\n//           (This is a sample website - you’ll be building a site like this on{' '}\n//           <a href=\"https://nextjs.org/learn\">our Next.js tutorial</a>.)\n//         </p>\n//       </section>\n//     </Layout>\n//   )\n// }//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZWFybi1zdGFydGVyLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJnZXRTdGF0aWNQcm9wcyIsImFsbFBvc3RzRGF0YSIsImdldFNvcnRlZFBvc3RzRGF0YSIsInByb3BzIiwiSG9tZSIsInV0aWxTdHlsZXMiLCJtYXAiLCJpZCIsImRhdGUiLCJ0aXRsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sZUFBZUEsY0FBZixHQUFnQztBQUNyQyxRQUFNQyxZQUFZLEdBQUdDLDhEQUFrQixFQUF2QztBQUNBLFNBQU87QUFDTEMsU0FBSyxFQUFFO0FBQ0xGO0FBREs7QUFERixHQUFQO0FBS0Q7QUFFYyxTQUFTRyxJQUFULENBQWU7QUFBRUg7QUFBRixDQUFmLEVBQ2Y7QUFDRSxzQkFDRSw4REFBQyx1REFBRDtBQUFRLFFBQUksTUFBWjtBQUFBLDJCQUlFO0FBQVMsZUFBUyxFQUFHLEdBQUVJLDJFQUFxQixJQUFHQSw0RUFBc0IsRUFBckU7QUFBQSw4QkFDRTtBQUFJLGlCQUFTLEVBQUVBLDJFQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFJLGlCQUFTLEVBQUVBLHNFQUFmO0FBQUEsa0JBQ0dKLFlBQVksQ0FBQ0ssR0FBYixDQUFpQixDQUFDO0FBQUVDLFlBQUY7QUFBTUMsY0FBTjtBQUFZQztBQUFaLFNBQUQsa0JBQ2hCO0FBQUksbUJBQVMsRUFBRUosMEVBQWY7QUFBQSxrQ0FDRSw4REFBQyxrREFBRDtBQUFNLGdCQUFJLEVBQUcsVUFBU0UsRUFBRyxFQUF6QjtBQUFBLG1DQUNFO0FBQUEsd0JBQUlFO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUpGLGVBS0U7QUFBTyxxQkFBUyxFQUFFSiwyRUFBbEI7QUFBQSxtQ0FDRSw4REFBQyxxREFBRDtBQUFNLHdCQUFVLEVBQUVHO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUxGO0FBQUEsV0FBeUNELEVBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREQ7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBdUJELEMsQ0FDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IExheW91dCwgeyBzaXRlVGl0bGUgfSBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dCdcbmltcG9ydCB1dGlsU3R5bGVzIGZyb20gJy4uL3N0eWxlcy91dGlscy5tb2R1bGUuY3NzJ1xuaW1wb3J0IHsgZ2V0U29ydGVkUG9zdHNEYXRhIH0gZnJvbSAnLi4vbGliL3Bvc3RzJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IERhdGUgZnJvbSAnLi4vY29tcG9uZW50cy9kYXRlJ1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gIGNvbnN0IGFsbFBvc3RzRGF0YSA9IGdldFNvcnRlZFBvc3RzRGF0YSgpXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGFsbFBvc3RzRGF0YVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lICh7IGFsbFBvc3RzRGF0YSB9KSBcbntcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0IGhvbWU+XG4gICAgICB7LyogS2VlcCB0aGUgZXhpc3RpbmcgY29kZSBoZXJlICovfVxuXG4gICAgICB7LyogQWRkIHRoaXMgPHNlY3Rpb24+IHRhZyBiZWxvdyB0aGUgZXhpc3RpbmcgPHNlY3Rpb24+IHRhZyAqL31cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17YCR7dXRpbFN0eWxlcy5oZWFkaW5nTWR9ICR7dXRpbFN0eWxlcy5wYWRkaW5nMXB4fWB9PlxuICAgICAgICA8aDIgY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmhlYWRpbmdMZ30+QmxvZzwvaDI+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9e3V0aWxTdHlsZXMubGlzdH0+XG4gICAgICAgICAge2FsbFBvc3RzRGF0YS5tYXAoKHsgaWQsIGRhdGUsIHRpdGxlIH0pID0+IChcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3V0aWxTdHlsZXMubGlzdEl0ZW19IGtleT17aWR9PlxuICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3Bvc3RzLyR7aWR9YH0+XG4gICAgICAgICAgICAgICAgPGE+e3RpdGxlfTwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5saWdodFRleHR9PlxuICAgICAgICAgICAgICAgIDxEYXRlIGRhdGVTdHJpbmc9e2RhdGV9IC8+XG4gICAgICAgICAgICAgIDwvc21hbGw+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9zZWN0aW9uPlxuICAgIDwvTGF5b3V0PlxuICApXG59XG4vLyBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuLy8gICByZXR1cm4gKFxuLy8gICAgIDxMYXlvdXQgaG9tZT5cbi8vICAgICAgIDxIZWFkPlxuLy8gICAgICAgICA8dGl0bGU+e3NpdGVUaXRsZX08L3RpdGxlPlxuLy8gICAgICAgPC9IZWFkPlxuLy8gICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmhlYWRpbmdNZH0+XG4vLyAgICAgICAgIDxwPkhlbGxvLCBJIGFtIERlcnJpY2suICBJIGFtIGEgc29mdHdhcmUgZW5naW5lZXIgbGVhcm5pbmcgdG8gYmV0dGVyIHVuZGVyc3RhbmQgbWljcm9zZXJ2aWNlcyBhbmQgVVggZGV2ZWxvcG1lbnQ8L3A+XG4vLyAgICAgICAgIDxwPlxuLy8gICAgICAgICAgIChUaGlzIGlzIGEgc2FtcGxlIHdlYnNpdGUgLSB5b3XigJlsbCBiZSBidWlsZGluZyBhIHNpdGUgbGlrZSB0aGlzIG9ueycgJ31cbi8vICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9uZXh0anMub3JnL2xlYXJuXCI+b3VyIE5leHQuanMgdHV0b3JpYWw8L2E+Lilcbi8vICAgICAgICAgPC9wPlxuLy8gICAgICAgPC9zZWN0aW9uPlxuLy8gICAgIDwvTGF5b3V0PlxuLy8gICApXG4vLyB9Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "date-fns":
/*!***************************!*\
  !*** external "date-fns" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("date-fns");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ (function(module) {

"use strict";
module.exports = require("fs");;

/***/ }),

/***/ "gray-matter":
/*!******************************!*\
  !*** external "gray-matter" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("gray-matter");;

/***/ }),

/***/ "../next-server/lib/head":
/*!****************************************************!*\
  !*** external "next/dist/next-server/lib/head.js" ***!
  \****************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/head.js");;

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "../next-server/lib/to-base-64":
/*!**********************************************************!*\
  !*** external "next/dist/next-server/lib/to-base-64.js" ***!
  \**********************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/to-base-64.js");;

/***/ }),

/***/ "../next-server/server/image-config":
/*!***************************************************************!*\
  !*** external "next/dist/next-server/server/image-config.js" ***!
  \***************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/image-config.js");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ (function(module) {

"use strict";
module.exports = require("path");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "remark":
/*!*************************!*\
  !*** external "remark" ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = require("remark");;

/***/ }),

/***/ "remark-html":
/*!******************************!*\
  !*** external "remark-html" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("remark-html");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_babel_runtime_helpers_extends_js-node_modules_babel_runtime_helpers_inte-f89ba9","vendors-node_modules_next_image_js-node_modules_next_link_js","components_date_js-components_layout_js-lib_posts_js"], function() { return __webpack_exec__("./pages/index.js"); });
module.exports = __webpack_exports__;

})();