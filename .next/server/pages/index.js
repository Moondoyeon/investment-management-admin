"use strict";
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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./src/components/Layout/Seo.tsx":
/*!***************************************!*\
  !*** ./src/components/Layout/Seo.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Seo({ title  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n            children: title\n        }, void 0, false, {\n            fileName: \"/Users/a./dev/projects/mdy/week3-2_mdy/src/components/Layout/Seo.tsx\",\n            lineNumber: 9,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/a./dev/projects/mdy/week3-2_mdy/src/components/Layout/Seo.tsx\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Seo);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9MYXlvdXQvU2VvLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQTZCO0FBSzdCLFNBQVNDLEdBQUcsQ0FBQyxFQUFFQyxLQUFLLEdBQVMsRUFBRTtJQUM3QixxQkFDRSw4REFBQ0Ysa0RBQUk7a0JBQ0gsNEVBQUNFLE9BQUs7c0JBQUVBLEtBQUs7Ozs7O2dCQUFTOzs7OztZQUNqQixDQUNQO0NBQ0g7QUFDRCxpRUFBZUQsR0FBRyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLXRzLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L1Nlby50c3g/ZGY1OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICB0aXRsZTogc3RyaW5nO1xufVxuZnVuY3Rpb24gU2VvKHsgdGl0bGUgfTogUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8SGVhZD5cbiAgICAgIDx0aXRsZT57dGl0bGV9PC90aXRsZT5cbiAgICA8L0hlYWQ+XG4gICk7XG59XG5leHBvcnQgZGVmYXVsdCBTZW87XG4iXSwibmFtZXMiOlsiSGVhZCIsIlNlbyIsInRpdGxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Layout/Seo.tsx\n");

/***/ }),

/***/ "./src/hooks/useHeaderTitleDispatch.ts":
/*!*********************************************!*\
  !*** ./src/hooks/useHeaderTitleDispatch.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var src_store_headerTitleSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/store/headerTitleSlice */ \"./src/store/headerTitleSlice.ts\");\n\n\nfunction useHeaderTitleDispatch() {\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useDispatch)();\n    const dispatchTitle = (title)=>{\n        dispatch((0,src_store_headerTitleSlice__WEBPACK_IMPORTED_MODULE_1__.setTitle)(title));\n    };\n    return dispatchTitle;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useHeaderTitleDispatch);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9va3MvdXNlSGVhZGVyVGl0bGVEaXNwYXRjaC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTBDO0FBQ1k7QUFFdEQsU0FBU0Usc0JBQXNCLEdBQUc7SUFDaEMsTUFBTUMsUUFBUSxHQUFHSCx3REFBVyxFQUFFO0lBRTlCLE1BQU1JLGFBQWEsR0FBRyxDQUFDQyxLQUFhLEdBQUs7UUFDdkNGLFFBQVEsQ0FBQ0Ysb0VBQVEsQ0FBQ0ksS0FBSyxDQUFDLENBQUMsQ0FBQztLQUMzQjtJQUVELE9BQU9ELGFBQWEsQ0FBQztDQUN0QjtBQUNELGlFQUFlRixzQkFBc0IsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy10cy8uL3NyYy9ob29rcy91c2VIZWFkZXJUaXRsZURpc3BhdGNoLnRzPzM2MmEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBzZXRUaXRsZSB9IGZyb20gJ3NyYy9zdG9yZS9oZWFkZXJUaXRsZVNsaWNlJztcblxuZnVuY3Rpb24gdXNlSGVhZGVyVGl0bGVEaXNwYXRjaCgpIHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuXG4gIGNvbnN0IGRpc3BhdGNoVGl0bGUgPSAodGl0bGU6IHN0cmluZykgPT4ge1xuICAgIGRpc3BhdGNoKHNldFRpdGxlKHRpdGxlKSk7XG4gIH07XG5cbiAgcmV0dXJuIGRpc3BhdGNoVGl0bGU7XG59XG5leHBvcnQgZGVmYXVsdCB1c2VIZWFkZXJUaXRsZURpc3BhdGNoO1xuIl0sIm5hbWVzIjpbInVzZURpc3BhdGNoIiwic2V0VGl0bGUiLCJ1c2VIZWFkZXJUaXRsZURpc3BhdGNoIiwiZGlzcGF0Y2giLCJkaXNwYXRjaFRpdGxlIiwidGl0bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/hooks/useHeaderTitleDispatch.ts\n");

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Dashboard)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout_Seo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/Layout/Seo */ \"./src/components/Layout/Seo.tsx\");\n/* harmony import */ var _hooks_useHeaderTitleDispatch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @hooks/useHeaderTitleDispatch */ \"./src/hooks/useHeaderTitleDispatch.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction Dashboard() {\n    const dispatchTitle = (0,_hooks_useHeaderTitleDispatch__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        dispatchTitle(\"\\uB300\\uC2DC\\uBCF4\\uB4DC\");\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout_Seo__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                title: \"D. PREFACE | \\uB300\\uC2DC\\uBCF4\\uB4DC\"\n            }, void 0, false, {\n                fileName: \"/Users/a./dev/projects/mdy/week3-2_mdy/src/pages/index.tsx\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Dashboard\"\n            }, void 0, false, {\n                fileName: \"/Users/a./dev/projects/mdy/week3-2_mdy/src/pages/index.tsx\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/a./dev/projects/mdy/week3-2_mdy/src/pages/index.tsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, this);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUF5QztBQUMwQjtBQUNqQztBQUVuQixTQUFTRyxTQUFTLEdBQUc7SUFDbEMsTUFBTUMsYUFBYSxHQUFHSCx5RUFBc0IsRUFBRTtJQUU5Q0MsZ0RBQVMsQ0FBQyxJQUFNO1FBQ2RFLGFBQWEsQ0FBQywwQkFBTSxDQUFTLENBQUM7S0FDdkIsRUFBTixFQUFFLENBQUMsQ0FBQztJQUNQLHFCQUNFLDhEQUFDQyxLQUFHOzswQkFDRiw4REFBQ0wsOERBQUc7Z0JBQUNNLEtBQUssRUFBQyx1Q0FBbUI7Ozs7O29CQUFHOzBCQUNqQyw4REFBQ0MsSUFBRTswQkFBQyxXQUFTOzs7OztvQkFBSzs7Ozs7O1lBQ2QsQ0FDTjtDQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLXRzLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD8xOWEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTZW8gZnJvbSAnQGNvbXBvbmVudHMvTGF5b3V0L1Nlbyc7XG5pbXBvcnQgdXNlSGVhZGVyVGl0bGVEaXNwYXRjaCBmcm9tICdAaG9va3MvdXNlSGVhZGVyVGl0bGVEaXNwYXRjaCc7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERhc2hib2FyZCgpIHtcbiAgY29uc3QgZGlzcGF0Y2hUaXRsZSA9IHVzZUhlYWRlclRpdGxlRGlzcGF0Y2goKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRpc3BhdGNoVGl0bGUoJ+uMgOyLnOuztOuTnCcpO1xuICB9LCBbXSk7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxTZW8gdGl0bGU9XCJELiBQUkVGQUNFIHwg64yA7Iuc67O065OcXCIgLz5cbiAgICAgIDxoMT5EYXNoYm9hcmQ8L2gxPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlNlbyIsInVzZUhlYWRlclRpdGxlRGlzcGF0Y2giLCJ1c2VFZmZlY3QiLCJEYXNoYm9hcmQiLCJkaXNwYXRjaFRpdGxlIiwiZGl2IiwidGl0bGUiLCJoMSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ }),

/***/ "./src/store/headerTitleSlice.ts":
/*!***************************************!*\
  !*** ./src/store/headerTitleSlice.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"headerTitleSlice\": () => (/* binding */ headerTitleSlice),\n/* harmony export */   \"setTitle\": () => (/* binding */ setTitle)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n\nconst initialState = \"\";\nconst headerTitleSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"headerTitle\",\n    initialState,\n    reducers: {\n        setTitle: (state, action)=>action.payload\n    }\n});\nconst { setTitle  } = headerTitleSlice.actions;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUvaGVhZGVyVGl0bGVTbGljZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQStDO0FBSS9DLE1BQU1DLFlBQVksR0FBcUIsRUFBRTtBQUNsQyxNQUFNQyxnQkFBZ0IsR0FBR0YsNkRBQVcsQ0FBQztJQUMxQ0csSUFBSSxFQUFFLGFBQWE7SUFDbkJGLFlBQVk7SUFDWkcsUUFBUSxFQUFFO1FBQ1JDLFFBQVEsRUFBRSxDQUFDQyxLQUFLLEVBQUVDLE1BQTJCLEdBQUtBLE1BQU0sQ0FBQ0MsT0FBTztLQUNqRTtDQUNGLENBQUMsQ0FBQztBQUVJLE1BQU0sRUFBRUgsUUFBUSxHQUFFLEdBQUdILGdCQUFnQixDQUFDTyxPQUFPLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtdHMvLi9zcmMvc3RvcmUvaGVhZGVyVGl0bGVTbGljZS50cz8yNTg5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNsaWNlIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XG5cbmV4cG9ydCB0eXBlIEhlYWRlclRpdGxlU3RhdGUgPSBzdHJpbmc7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZTogSGVhZGVyVGl0bGVTdGF0ZSA9ICcnO1xuZXhwb3J0IGNvbnN0IGhlYWRlclRpdGxlU2xpY2UgPSBjcmVhdGVTbGljZSh7XG4gIG5hbWU6ICdoZWFkZXJUaXRsZScsXG4gIGluaXRpYWxTdGF0ZSxcbiAgcmVkdWNlcnM6IHtcbiAgICBzZXRUaXRsZTogKHN0YXRlLCBhY3Rpb246IHsgcGF5bG9hZDogc3RyaW5nIH0pID0+IGFjdGlvbi5wYXlsb2FkLFxuICB9LFxufSk7XG5cbmV4cG9ydCBjb25zdCB7IHNldFRpdGxlIH0gPSBoZWFkZXJUaXRsZVNsaWNlLmFjdGlvbnM7XG4iXSwibmFtZXMiOlsiY3JlYXRlU2xpY2UiLCJpbml0aWFsU3RhdGUiLCJoZWFkZXJUaXRsZVNsaWNlIiwibmFtZSIsInJlZHVjZXJzIiwic2V0VGl0bGUiLCJzdGF0ZSIsImFjdGlvbiIsInBheWxvYWQiLCJhY3Rpb25zIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/store/headerTitleSlice.ts\n");

/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/index.tsx"));
module.exports = __webpack_exports__;

})();