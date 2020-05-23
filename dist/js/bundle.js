/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _test__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./test */ \"./src/js/test.js\");\n\r\nconsole.log(`I imported ${_test__WEBPACK_IMPORTED_MODULE_0__[\"default\"]} from another module`);\r\nconst bannerBtn = document.querySelector('.banner-btn');\r\nconst xBtn = document.querySelector('.x-btn');\r\nconst EnteredName = document.querySelector(\".name-input\");\r\nconst Name = document.querySelector('.entered-name');\r\nconst gender = document.querySelector('.user-gender');\r\nconst options = document.getElementById(\"Selected-option\");\r\nconst Image = document.querySelector('.banner');\r\nconst downloadBtn = document.querySelector('.download-btn');\r\nlet i = 0;\r\n\r\n \r\n\r\n\r\n\r\nbannerBtn.addEventListener('click', () => {\r\n    document.querySelector('.banner_2').style.display = 'none';\r\n    document.querySelector('.banner').style.cssText = 'opacity: 1; visibility: visible';\r\n    document.querySelector('.container').style.cssText = \" background:rgb(243, 247, 251)\"\r\n    typing();\r\n});\r\n\r\nxBtn.addEventListener('click', () => {\r\n    document.querySelector('.banner_2').style.display = 'flex';\r\n    document.querySelector('.banner').style.cssText = 'opacity: 0; visibility: hidden';\r\n    document.querySelector('.container').style.cssText = ' background:linear-gradient(to right, rgb(5, 85, 136), rgb(243, 247, 251));';\r\n});\r\n\r\ndownloadBtn.addEventListener('click', () => {\r\n    domtoimage.toBlob(Image)\r\n    .then(function(blob) {\r\n      window.saveAs(blob, 'my-node.png');\r\n    });\r\n}); \r\n/*\r\n$('.download-btn').click(function() { \r\n    var elm = $('.banner').get(0);\r\n    var lebar = \"600\";\r\n    var tinggi = \"450\";\r\n    var type = \"jpg\";\r\n    var fileName = \"happyEid\";\r\n    html2canvas(elm).then(function(canvas) {\r\n        var canWidth = canvas.width;\r\n        var canHeight = canvas.height;\r\n        var img = Canvas2Image.convertToImage(canvas, canWidth, canHeight);\r\n        Canvas2Image.saveAsImage(canvas, lebar, tinggi, type, fileName);\r\n    })\r\n})*/\r\n\r\nconst typing = () => {\r\n    let userGender = options.options[options.selectedIndex].text;\r\n\tlet name = userGender + \" \"  + EnteredName.value;\r\n\tconsole.log(name);\r\n\t\r\n    if (i < name.length) {\r\n        Name.innerText += name.charAt(i);\r\n        i++;\r\n        setTimeout(typing, 100);\r\n    }\r\n    \r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/js/app.js?");

/***/ }),

/***/ "./src/js/test.js":
/*!************************!*\
  !*** ./src/js/test.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconsole.log('Iported Module');\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (23);\n\n//# sourceURL=webpack:///./src/js/test.js?");

/***/ })

/******/ });