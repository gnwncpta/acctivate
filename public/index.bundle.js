/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\n    --dark-bg: #111;\\n    --light-text: white;\\n}\\n\\n* {\\n    padding: 0;\\n    margin: 0;\\n    font-family: 'Poppins', sans-serif;\\n}\\n\\n.hidden {\\n    display: none;\\n}\\n\\n.container {\\n    width: 80%;\\n    margin: auto;\\n}\\n\\n.empty-state {\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n\\n    margin-top: 200px;\\n}\\n\\n.empty-state.hidden {\\n    display: none;\\n}\\n\\n.empty-info {\\n    width: 250px;\\n    margin-bottom: 200px;\\n}\\n\\n@keyframes modal-animation {\\n    0% {\\n        top: -70%;\\n    }\\n\\n    100% {\\n        top: 15%;\\n    }\\n}\\n\\n.add-modal {\\n    width: 400px;\\n\\n    position: absolute;\\n    top: 15%;\\n    left: 40%;\\n\\n    padding: 20px;\\n    border-radius: 8px;\\n    background-color: white;\\n    box-shadow: 0px 4px 20px 0 rgba(0,0,0,.25);\\n    animation: modal-animation .8s ease-in-out;\\n}\\n\\n.add-modal h1 {\\n    font-size: 26px;\\n    font-weight: 500;\\n}\\n\\n.add-modal form {\\n    margin-top: 30px;\\n}\\n\\n.add-modal form button.reset.disabled {\\n    cursor: not-allowed;\\n    opacity: .4;\\n}\\n\\n.add-modal form button.reset.disabled:hover {\\n    border: 1px solid rgb(234, 234, 234);\\n    background-color: rgb(234, 234, 234);\\n}\\n\\n/* Add Modal -> Account */\\n.add-modal form .account {\\n    display: flex;\\n    margin-bottom: 25px;\\n}\\n\\n.add-modal form .account .reset-account {\\n    cursor: pointer;\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n\\n    width: 50px;\\n    padding: 10px;\\n    box-sizing: border-box;\\n\\n    border: 1px solid rgb(234, 234, 234);\\n    background-color: rgb(234, 234, 234);\\n    transition: .1s ease-in-out;\\n}\\n\\n.add-modal form .account .reset-account:hover {\\n    border: 2px solid rgb(205, 111, 111);\\n    background-color: rgb(250, 135, 135);\\n}\\n/* -> End of Account Name <- */\\n\\n\\n/* Add Modal -> Owner Name */\\n.add-modal form .owner-name {\\n    display: flex;\\n    margin-bottom: 25px;\\n}\\n\\n.add-modal form .owner-name .reset-name {\\n    cursor: pointer;\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n\\n    width: 50px;\\n    padding: 10px;\\n    box-sizing: border-box;\\n\\n    border: 1px solid rgb(234, 234, 234);\\n    background-color: rgb(234, 234, 234);\\n    transition: .1s ease-in-out;\\n}\\n\\n.add-modal form .owner-name .reset-name:hover {\\n    border: 2px solid rgb(205, 111, 111);\\n    background-color: rgb(250, 135, 135);\\n}\\n/* -> End of Owner Name <- */\\n\\n\\n/* Add Modal -> Active Period */\\n.add-modal form .active-period {\\n    display: flex;\\n    margin-bottom: 25px;\\n}\\n\\n.add-modal form .active-period .reset-period {\\n    cursor: pointer;\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n\\n    width: 50px;\\n    padding: 10px;\\n    box-sizing: border-box;\\n\\n    border: 1px solid rgb(234, 234, 234);\\n    background-color: rgb(234, 234, 234);\\n    transition: .1s ease-in-out;\\n}\\n\\n.add-modal form .active-period .reset-period:hover {\\n    border: 2px solid rgb(205, 111, 111);\\n    background-color: rgb(250, 135, 135);\\n}\\n/* -> End of Active Period <- */\\n\\n.add-modal form label {\\n    font-size: 14px;\\n    color: rgb(55, 55, 55);\\n}\\n\\n/* Input Styling */\\n.add-modal form input {\\n    width: 100%;\\n    display: block;\\n\\n    padding: 10px;\\n    box-sizing: border-box;\\n    border-radius: 3px 0px 0px 3px;\\n    border: 1px solid rgb(234, 234, 234);\\n    transition: .3s ease-in-out;\\n    background-color: rgb(234, 234, 234);\\n}\\n\\n.add-modal form input::placeholder {\\n    font-weight: 300;\\n}\\n\\n.add-modal form input:focus {\\n    outline: none;\\n    border: 1px solid #12BC19;\\n}\\n\\n.add-modal form #active-from {\\n    cursor: pointer;\\n}\\n/* End of Input Styling */\\n\\n/* Buttons Styling */\\n.add-modal form .buttons {\\n    display: grid;\\n    gap: 10px;\\n    grid-template-columns: repeat(2, 1fr);\\n}\\n\\n.add-modal form .buttons button {\\n    cursor: pointer;\\n\\n    width: 100%;\\n    border-radius: 3px;\\n    font-size: 15px;\\n    color: white;\\n    \\n    margin-top: 40px;\\n    padding: 6px 30px;\\n    box-sizing: border-box;\\n}\\n\\n.add-modal form .buttons button.save {\\n    background-color: #14CC1B;\\n    border: 2px solid #12BC19;\\n}\\n\\n.add-modal form .buttons button.save:hover {\\n    background-color: #12BC19;\\n}\\n\\n.add-modal form .buttons button.cancel {\\n    background-color: #bababa;\\n    border: 2px solid #bababa;\\n    transition: .2s ease-in-out;\\n}\\n\\n.add-modal form .buttons button.cancel:hover {\\n    background-color: #cc1414;\\n    border: 2px solid #bc1212;\\n}\\n/* End of Button Styling */\\n\\n/* Tech Stack Design */\\n@keyframes animation-tech {\\n    0% {\\n        opacity: 0;\\n        top: 80%;\\n    }\\n\\n    100%{\\n        opacity: 1;\\n        top: 25%;\\n    }\\n}\\n\\n.tech-stack {\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: space-between;\\n    position: absolute;\\n    top: 25%;\\n    left: 42%;\\n    opacity: 1;\\n    \\n    width: 300px;\\n    height: 120px;\\n    padding: 25px;\\n\\n    text-align: left;\\n    border-radius: 10px;\\n    background-color: white;\\n    box-shadow: 0px 4px 10px 2px rgba(0, 0, 0, .25);\\n\\n    animation: animation-tech .5s ease-in-out;\\n}\\n\\n.tech-stack.hidden {\\n    display: none;\\n}\\n\\n.tech-stack .head {\\n    display: flex;\\n    align-items: center;\\n    justify-content: space-between;\\n}\\n\\n.tech-stack .head .close {\\n    cursor: pointer;\\n}\\n\\n.tech-stack p {\\n    font-size: 20px;\\n    font-weight: 500;\\n}\\n\\n.tech-stack .logo {\\n    display: flex;\\n    align-items: center;\\n    justify-content: space-evenly;\\n}\\n\\nmain  {\\n    height: 100vh;\\n    transition: .3s ease-in-out;\\n}\\n\\nmain.dark {\\n    color: white;\\n    background-color: var(--dark-bg);\\n}\\n\\nheader {\\n    padding: 30px 0;\\n\\n    display: flex;\\n    align-items: center;\\n    justify-content: space-between;\\n}\\n\\n\\nheader .toggle {\\n    cursor: pointer;\\n    display: flex;\\n    align-items: center;\\n\\n    width: 50px;\\n    height: 24px;\\n    padding: 6px 4px;\\n    border-radius: 50px;\\n    box-sizing: border-box;\\n\\n    background-color: rgb(213, 213, 213);\\n    transition: .5s ease-in-out;\\n}\\n\\nheader .toggle.dark {\\n    justify-content: flex-end;\\n    background-color: rgb(9, 3, 181);\\n}\\n\\nheader .toggle:active {\\n    justify-content: flex-end;\\n}\\n\\nheader .toggle .round {\\n    width: 19px;\\n    height: 18px;\\n    background-color: rgb(13, 213, 13);\\n    border-radius: 50px;\\n}\\n\\nheader .toggle .round.dark {\\n    background-color: white;\\n}\\n\\nheader a {\\n    font-size: 14px;\\n    font-weight: 300;\\n    padding: 7px 15px;\\n    border-radius: 50px;\\n    color: #111;\\n    text-decoration: none;\\n}\\n\\nheader a:hover {\\n    color: white;\\n    background-color: #111;\\n}\\n\\nheader a.dark {\\n    color: white;\\n}\\n\\nheader a.dark:hover {\\n    color: #111;\\n    background-color: white;\\n}\\n\\nsection.account {\\n    margin-top: 50px;\\n}\\n\\nsection.account .title {\\n    display: flex;\\n    align-items: center;\\n    justify-content: space-between;\\n}\\n\\nsection.account .title h3 {\\n    font-size: 24px;\\n    font-weight: 500;\\n}\\n\\nsection.account .title button {\\n    cursor: pointer;\\n    color: white;\\n    font-size: 15px;\\n    padding: 6px 20px;\\n    box-sizing: border-box;\\n    background-color: #14CC1B;\\n    border: 2px solid #12BC19;\\n    border-radius: 3px;\\n    transition: .1s ease-in-out;\\n}\\n\\nsection.account .title button:hover {\\n    transform: translateY(5px);\\n}\\n\\nsection.account table {\\n    margin-top: 50px;\\n    width: 100%;\\n    box-sizing: border-box;\\n}\\n\\nsection.account table thead {\\n    border-radius: 10px 10px 0 0;\\n}\\n\\nsection.account table thead tr td {\\n    font-weight: 500;\\n    font-size: 14px;\\n    padding: 10px 15px;\\n    box-sizing: border-box;\\n    background-color: rgb(231, 231, 231);\\n    transition: .3s ease-in-out;\\n}\\n\\nsection.account table thead tr td.dark {\\n    color: white;\\n    background-color: rgb(30, 30, 30);\\n}\\n\\nsection.account table thead tr td:first-child {\\n    border-radius: 10px 0 0 0;\\n}\\n\\nsection.account table thead tr td:last-child {\\n    border-radius: 0 10px 0 0;\\n}\\n\\n/* Body Row Styling */\\nsection.account table tbody tr td {\\n    padding: 10px 15px;\\n    font-size: 14px;\\n    box-sizing: border-box;\\n    background-color: transparent;\\n}\\n\\nsection.account table tbody tr td button {\\n    cursor: pointer;\\n    color: white;\\n    font-size: 14px;\\n    padding: 6px 15px;\\n    box-sizing: border-box;\\n    background-color: #cc1414;\\n    border: 2px solid #bc1212;\\n    border-radius: 3px;\\n}\\n\\nsection.account table tbody tr td button:hover {\\n    background-color: #bc1212;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://acctivate/./src/index.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://acctivate/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ \"./node_modules/css-loader/dist/cjs.js!./src/index.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__.default, options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);\n\n\n//# sourceURL=webpack://acctivate/./src/index.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://acctivate/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://acctivate/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var style = document.createElement(\"style\");\n  options.setAttributes(style, options.attributes);\n  options.insert(style);\n  return style;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://acctivate/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(style) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    style.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://acctivate/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute(\"media\", media);\n  } else {\n    style.removeAttribute(\"media\");\n  }\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, style);\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var style = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(style, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(style);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://acctivate/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, style) {\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://acctivate/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/Collections.js":
/*!****************************!*\
  !*** ./src/Collections.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Collection = {\n    showCollections(){\n        return localStorage.Collections;\n    },\n    addCollections(item){\n        console.log(item);\n        let arr = localStorage.Collections = [];\n        arr.push(item);\n        console.log(localStorage.Collections);\n        return \"Berhasil menambahkan data!\";\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Collection);\n\n//# sourceURL=webpack://acctivate/./src/Collections.js?");

/***/ }),

/***/ "./src/Date/instantiateCurrent.js":
/*!****************************************!*\
  !*** ./src/Date/instantiateCurrent.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction instantiateCurrent(activeBefore){\n    // Instantiate the Date\n    let dt = new Date(activeBefore);\n\n    const dateBefore = dt.toString();\n    const dayFrom = dateBefore.slice(0, 3); // get the dayFrom\n    const monthFrom = dateBefore.slice(4, 7) // get Month Before\n    const dateFrom = dateBefore.slice(8, 10); // get the date\n    const yearFrom = dateBefore.slice(11, 15); // get the Year\n\n    return `${dayFrom}, ${dateFrom} ${monthFrom} ${yearFrom}`;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (instantiateCurrent);\n\n//# sourceURL=webpack://acctivate/./src/Date/instantiateCurrent.js?");

/***/ }),

/***/ "./src/Date/instantiateExpired.js":
/*!****************************************!*\
  !*** ./src/Date/instantiateExpired.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction instantiateExpired(activeBefore, days){\n    // Instantiate the Date\n    let dt = new Date(activeBefore);\n    dt.setDate(dt.getDate() + parseInt(days)); // get the Future Date\n\n    const dateAfter = dt.toString();\n    const dayExp = dateAfter.slice(0, 3);\n    const monthExp = dateAfter.slice(4, 7);\n    const dateExp = dateAfter.slice(8, 10);\n    const yearExp = dateAfter.slice(11, 15);\n\n    return `${dayExp}, ${dateExp} ${monthExp} ${yearExp}`;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (instantiateExpired);\n\n//# sourceURL=webpack://acctivate/./src/Date/instantiateExpired.js?");

/***/ }),

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nlet data = [\n    // {\n    //     id: 1,\n    //     account: 'Netflix Premium',\n    //     name: 'Gunawan Cipta',\n    //     status: 'Active',\n    //     activeFrom: 'Friday, 23 July 2021',\n    //     expired: 'Saturday, 24 July 2021'\n    // } -> the data format\n];\n\nconst Data = {\n    showData(){\n        return data;\n    },\n    addData(item){\n        data.push(item);\n        console.log(data);\n        return \"Success Add Data!\";\n    },\n    deleteData(id){\n        data.forEach(item => {\n            if(id == item.id){\n                data.splice(item.id - 1, 1);\n                console.log('Found! Deleted.');\n            }\n        });\n        \n        console.log(data);\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Data);\n\n//# sourceURL=webpack://acctivate/./src/data.js?");

/***/ }),

/***/ "./src/disabled.js":
/*!*************************!*\
  !*** ./src/disabled.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst resetAccount = document.querySelector('.add-modal form .account .reset-account');\nconst resetName = document.querySelector('.add-modal form .owner-name .reset-name');\nconst resetPeriod = document.querySelector('.add-modal form .active-period .reset-period');\n\nfunction makeResetDisabled(){\n    resetAccount.classList.add('disabled');\n    resetName.classList.add('disabled');\n    resetPeriod.classList.add('disabled');\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (makeResetDisabled);\n\n//# sourceURL=webpack://acctivate/./src/disabled.js?");

/***/ }),

/***/ "./src/emptyContents.js":
/*!******************************!*\
  !*** ./src/emptyContents.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst account = document.querySelector('.add-modal form #account');\nconst name = document.querySelector('.add-modal form #name');\nconst totalDays = document.querySelector('.add-modal form #active-period');\nconst activeFrom = document.querySelector('.add-modal form #active-from');\n\nfunction emptyFields(){\n    account.value = '';\n    name.value = '';\n    totalDays.value = '';\n    activeFrom.value = 'dd/mm/yyyy';\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (emptyFields);\n\n//# sourceURL=webpack://acctivate/./src/emptyContents.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ \"./src/index.css\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data */ \"./src/data.js\");\n/* harmony import */ var _Collections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Collections */ \"./src/Collections.js\");\n/* harmony import */ var _disabled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./disabled */ \"./src/disabled.js\");\n/* harmony import */ var _emptyContents__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./emptyContents */ \"./src/emptyContents.js\");\n/* harmony import */ var _Date_instantiateCurrent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Date/instantiateCurrent */ \"./src/Date/instantiateCurrent.js\");\n/* harmony import */ var _Date_instantiateExpired__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Date/instantiateExpired */ \"./src/Date/instantiateExpired.js\");\n\n\n\n\n\n\n\n\n// Instantiate localStorage to zero length of Array\nlocalStorage.Collections = []\n\n// Masalah yang harus dihadapi sekarang adalah\n// Memasukkan data JSON ke dalam localStorage.Collections\n// localStorage.Collections ini harus bertipe data Array agar nanti bisa di looping\n// lalu memasukkan data object ke dalam localStorage.Collections array\n\nconst data = {\n    num: 0,\n    dark: false\n}\n\n// Toggle Dark Mode\nconst toggleBtn = document.querySelector('header .toggle');\nconst round = document.querySelector('header .toggle .round');\nconst mainBg = document.querySelector('main');\nconst tableHead = document.querySelectorAll('section.account table thead tr td');\n\n// Form Selection\nconst formModal = document.querySelector('.add-modal');\nconst account = document.querySelector('.add-modal form #account');\nconst name = document.querySelector('.add-modal form #name');\nconst totalDays = document.querySelector('.add-modal form #active-period');\nconst activeFrom = document.querySelector('.add-modal form #active-from');\n\n// Reset From Value\nconst resetAccountBtn = document.querySelector('.add-modal form .account button.reset-account');\nconst resetNameBtn = document.querySelector('.add-modal form .owner-name button.reset-name');\nconst resetPeriodBtn = document.querySelector('.add-modal form .active-period button.reset-period');\n\n// Modal Button Selection\nconst saveButtonModal = document.querySelector('.add-modal form .buttons button:first-child');\nconst cancelButtonModal = document.querySelector('.add-modal form .buttons button:last-child');\nconst addButton = document.querySelector('section.account .title button');\n\n// Header Container Selection\nconst stack = document.querySelector('header a');\n\n// Table Body Selection\nconst accList = document.querySelector('tbody');\n\n// Empty State Selection\nconst emptyState = document.querySelector('.empty-state');\n\n// Tech Stack Selection\nconst techStackModal = document.querySelector('.tech-stack');\nconst close = document.querySelector('.tech-stack .head .close');\n\n// Form -> Event\naccount.addEventListener('input', (e) => {\n    if(e.target.value == ''){\n        resetAccountBtn.classList.add('disabled');\n        resetAccountBtn.setAttribute('disabled', ' ');\n    } else {\n        resetAccountBtn.classList.remove('disabled');\n        resetAccountBtn.removeAttribute('disabled');\n    }\n});\n\nname.addEventListener('input', (e) => {\n    if(e.target.value == ''){\n        resetNameBtn.classList.add('disabled');\n        resetNameBtn.setAttribute('disabled', ' ');\n    } else {\n        resetNameBtn.classList.remove('disabled');\n        resetNameBtn.removeAttribute('disabled');\n    }\n});\n\ntotalDays.addEventListener('input', (e) => {\n    if(e.target.value == ''){\n        resetPeriodBtn.classList.add('disabled');\n        resetPeriodBtn.setAttribute('disabled', ' ');\n    } else {\n        resetPeriodBtn.classList.remove('disabled');\n        resetPeriodBtn.removeAttribute('disabled');\n    }\n});\n\n// Reset -> Event\nresetAccountBtn.addEventListener('click', (e) => {\n    e.preventDefault();\n\n    resetAccountBtn.classList.add('disabled');\n    resetAccountBtn.setAttribute('disabled', ' ');\n    account.value = '';\n});\n\nresetNameBtn.addEventListener('click', (e) => { \n    e.preventDefault();\n\n    resetNameBtn.classList.add('disabled');\n    resetNameBtn.setAttribute('disabled', ' ');\n    name.value = '';\n});\n\nresetPeriodBtn.addEventListener('click', (e) => { \n    e.preventDefault();\n    \n    resetPeriodBtn.classList.add('disabled');\n    resetPeriodBtn.setAttribute('disabled', ' ');\n    totalDays.value = '';\n});\n\nconst everythingDark = () => {\n\n    // Button Toggle Dark\n    toggleBtn.classList.toggle('dark');\n    round.classList.toggle('dark');\n\n    // Main BG\n    mainBg.classList.toggle('dark');\n\n    // Table head to Dark\n    tableHead.forEach(td => td.classList.toggle('dark'));\n\n    // Stack button to Dark\n    stack.classList.toggle('dark');\n}\n\n// Toggle Dark Mode\n\ntoggleBtn.addEventListener('click', () => {\n    everythingDark();\n\n    // Save to localStorage\n    if(localStorage.darkMode === 'true'){\n        localStorage.setItem('darkMode', false);\n    } else if(localStorage.darkMode === 'false'){\n        localStorage.setItem('darkMode', true);\n    }\n\n});\n\nstack.addEventListener('click', () => {\n    techStackModal.classList.toggle('hidden');\n})\n\nclose.addEventListener('click', (e) => {\n    e.target.parentElement.parentElement.classList.toggle('hidden');\n});\n\nfunction showData(reshow){\n    let listDOM = '';\n\n    if(_data__WEBPACK_IMPORTED_MODULE_1__.default.showData().length === 0){\n        if(reshow){\n            emptyState.classList.add('hidden');\n            listDOM = null;\n            accList.innerHTML = listDOM;\n        }\n        return null;\n    }\n\n    _data__WEBPACK_IMPORTED_MODULE_1__.default.showData().forEach((item, index) => {\n\n        listDOM += `<tr>\n                        <td>${index+1}</td>\n                        <td>${item.account}</td>\n                        <td>${item.name}</td>\n                        <td>${item.status}</td>\n                        <td>${item.activePeriod} ${item.activePeriod > 1 ? 'Days' : 'Day'}</td>\n                        <td>${item.activeFrom}</td>\n                        <td>${item.expired}</td>\n                        <td><button class=\"delete\" data-id=\"${index+1}\">Delete</button></td>\n                    </tr>`;\n    \n        accList.innerHTML = listDOM;\n    });\n}\n\naddButton.addEventListener('click', () => {\n    formModal.classList.toggle('hidden');\n});\n\ncancelButtonModal.addEventListener('click', (e) => {\n    e.preventDefault();\n    formModal.classList.toggle('hidden');\n    (0,_emptyContents__WEBPACK_IMPORTED_MODULE_4__.default)();\n    (0,_disabled__WEBPACK_IMPORTED_MODULE_3__.default)();\n});\n\ndocument.body.addEventListener('click', (e) => {\n\n    // If users click delete button\n    if(e.target.classList.contains('delete')){\n        let id = e.target.dataset.id;\n        _data__WEBPACK_IMPORTED_MODULE_1__.default.deleteData(id);\n        showData(true);\n\n        data.num -= 1;\n    }\n});\n\nsaveButtonModal.addEventListener('click', (e) => {\n    e.preventDefault();\n\n    data.num += 1;\n\n    const accountName = account.value;\n    const nameOwner = name.value;\n    const days = totalDays.value;\n    const activeBefore = activeFrom.value;\n\n    let item = {   \n        id: data.num,\n        account: accountName.trim(), \n        name: nameOwner.trim(),\n        status: `${(0,_Date_instantiateCurrent__WEBPACK_IMPORTED_MODULE_5__.default)(activeBefore) != (0,_Date_instantiateExpired__WEBPACK_IMPORTED_MODULE_6__.default)(activeBefore, days) ? \"Active\" : \"Not Active\"}`,\n        activePeriod: days.trim(),\n        activeFrom: `${(0,_Date_instantiateCurrent__WEBPACK_IMPORTED_MODULE_5__.default)(activeBefore)}`,\n        expired: `${(0,_Date_instantiateExpired__WEBPACK_IMPORTED_MODULE_6__.default)(activeBefore, days)}`\n    }\n    \n    // Add Data\n    console.log(_data__WEBPACK_IMPORTED_MODULE_1__.default.addData(item));\n    localStorage.setItem('dataSaved', true);\n\n    let jsonify = JSON.stringify(item);\n    console.log(_Collections__WEBPACK_IMPORTED_MODULE_2__.default.addCollections(jsonify));\n\n    (0,_emptyContents__WEBPACK_IMPORTED_MODULE_4__.default)();\n    (0,_disabled__WEBPACK_IMPORTED_MODULE_3__.default)();\n\n    formModal.classList.toggle('hidden');\n    emptyState.classList.add('hidden');\n    accList.innerHTML = 'Loading ...';\n\n    setTimeout(() => {\n        showData();\n    }, 500);\n})\n\nif(localStorage.getItem('dataSaved') === 'true'){   \n    console.log('Found Data on localStorage!');\n}\n\nif(localStorage.getItem('darkMode') === 'true'){\n    everythingDark();\n}\n\n//# sourceURL=webpack://acctivate/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;