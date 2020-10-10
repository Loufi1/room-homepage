module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/loufi/Documents/Projets/room-homepage/pages/index.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\nconst paragraphs = [\"We provide unmatched quality, comfort, and style for property owners across the country.\\n\" + \"  Our experts combine form andnfunction in bringing your vision to life. Create a room in your\\n\" + \"  own style with our collection and make your property a reflection of you and what you love.\", \"With stores all over the world, it's easy for you to find furniture for your home or place of business.\\n\" + \"  Locally, we’re in most major cities throughout the country. Find the branch nearest you using our\\n\" + \"  store locator. Any questions? Don't hesitate to contact us today.\", \"Our modern furniture store provide a high level of quality. Our company has invested in advanced technology\\n\" + \"  to ensure that every product is made as perfect and as consistent as possible. With three decades of\\n\" + \"  experience in this industry, we understand what customers want for their home and office.\"];\nconst titles = [\"Discover innovative ways to decorate\", \"We are available all across the globe\", \"Manufactured with the best materials\"];\nclass Home extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  constructor(props) {\n    super(props);\n    this.page = 1;\n    this.state = {\n      page: 1\n    };\n  }\n\n  prevPage() {\n    this.page === 1 ? this.page = 3 : this.page--;\n    this.setState({\n      page: this.page\n    });\n    document.getElementById('top-left-section').style.backgroundImage = \"url('./images/desktop-image-hero-\" + this.page + \".jpg')\";\n    document.getElementById('title').innerText = titles[this.page - 1];\n    document.getElementById('paragraph').innerText = paragraphs[this.page - 1];\n  }\n\n  nextPage() {\n    this.page === 3 ? this.page = 1 : this.page++;\n    this.setState({\n      page: this.page\n    });\n    document.getElementById('top-left-section').style.backgroundImage = \"url('./images/desktop-image-hero-\" + this.page + \".jpg')\";\n    document.getElementById('title').innerText = titles[this.page - 1];\n    document.getElementById('paragraph').innerText = paragraphs[this.page - 1];\n  }\n\n  render() {\n    return __jsx(\"div\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 9\n      }\n    }, __jsx(\"div\", {\n      className: \"row\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 11\n      }\n    }, __jsx(\"div\", {\n      id: \"top-left-section\",\n      className: \"top-left-section\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 13\n      }\n    }, __jsx(\"div\", {\n      className: \"row nav-bar\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 15\n      }\n    }, __jsx(\"div\", {\n      className: \"heading\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 17\n      }\n    }, \"room\"), __jsx(\"div\", {\n      className: \"nav-items\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 17\n      }\n    }, \"home\", __jsx(\"hr\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 19\n      }\n    })), __jsx(\"div\", {\n      className: \"nav-items\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 17\n      }\n    }, \"shop\", __jsx(\"hr\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 19\n      }\n    })), __jsx(\"div\", {\n      className: \"nav-items\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 17\n      }\n    }, \"about\", __jsx(\"hr\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 61,\n        columnNumber: 19\n      }\n    })), __jsx(\"div\", {\n      className: \"nav-items\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 17\n      }\n    }, \"contact\", __jsx(\"hr\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 64,\n        columnNumber: 19\n      }\n    })))), __jsx(\"div\", {\n      className: \"top-right-section\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 68,\n        columnNumber: 13\n      }\n    }, __jsx(\"div\", {\n      className: \"center-top\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 69,\n        columnNumber: 15\n      }\n    }, __jsx(\"h2\", {\n      id: \"title\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 70,\n        columnNumber: 17\n      }\n    }, \"Discover innovative ways to decorate\"), __jsx(\"p\", {\n      id: \"paragraph\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 71,\n        columnNumber: 17\n      }\n    }, \"We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form andnfunction in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.\"), __jsx(\"div\", {\n      className: \"shop\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 76,\n        columnNumber: 17\n      }\n    }, __jsx(\"span\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 77,\n        columnNumber: 19\n      }\n    }, \"Shop now\"), __jsx(\"img\", {\n      className: \"arrow-right\",\n      src: \"images/icon-arrow.svg\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 78,\n        columnNumber: 19\n      }\n    }))), __jsx(\"div\", {\n      className: \"row arrow-container\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 81,\n        columnNumber: 15\n      }\n    }, __jsx(\"div\", {\n      className: \"arrow\",\n      onClick: this.prevPage.bind(this),\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 82,\n        columnNumber: 17\n      }\n    }, __jsx(\"img\", {\n      src: \"images/icon-angle-left.svg\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 83,\n        columnNumber: 19\n      }\n    })), __jsx(\"div\", {\n      className: \"arrow\",\n      onClick: this.nextPage.bind(this),\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 85,\n        columnNumber: 17\n      }\n    }, __jsx(\"img\", {\n      src: \"images/icon-angle-right.svg\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 86,\n        columnNumber: 19\n      }\n    }))))), __jsx(\"div\", {\n      className: \"row\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 91,\n        columnNumber: 11\n      }\n    }, __jsx(\"div\", {\n      className: \"bottom-left-section\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 92,\n        columnNumber: 13\n      }\n    }), __jsx(\"div\", {\n      className: \"bottom-middle-section\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 94,\n        columnNumber: 13\n      }\n    }, __jsx(\"div\", {\n      className: \"center-bottom\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 95,\n        columnNumber: 15\n      }\n    }, __jsx(\"h3\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 96,\n        columnNumber: 17\n      }\n    }, \"About our furniture\"), __jsx(\"p\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 97,\n        columnNumber: 17\n      }\n    }, \"Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that best express your interests and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space.\"))), __jsx(\"div\", {\n      className: \"bottom-right-section\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 105,\n        columnNumber: 13\n      }\n    })));\n  }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbInBhcmFncmFwaHMiLCJ0aXRsZXMiLCJIb21lIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwicGFnZSIsInN0YXRlIiwicHJldlBhZ2UiLCJzZXRTdGF0ZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzdHlsZSIsImJhY2tncm91bmRJbWFnZSIsImlubmVyVGV4dCIsIm5leHRQYWdlIiwicmVuZGVyIiwiYmluZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLE1BQU1BLFVBQVUsR0FBRyxDQUNqQiwrRkFDQSxrR0FEQSxHQUVBLCtGQUhpQixFQUlqQiw4R0FDQSx1R0FEQSxHQUVBLHFFQU5pQixFQU9qQixrSEFDQSwwR0FEQSxHQUVBLDZGQVRpQixDQUFuQjtBQVlBLE1BQU1DLE1BQU0sR0FBRyxDQUNiLHNDQURhLEVBRWIsdUNBRmEsRUFHYixzQ0FIYSxDQUFmO0FBTWUsTUFBTUMsSUFBTixTQUFtQkMsNENBQUssQ0FBQ0MsU0FBekIsQ0FBa0M7QUFFL0NDLGFBQVcsQ0FBQ0MsS0FBRCxFQUFRO0FBQ2pCLFVBQU1BLEtBQU47QUFDQSxTQUFLQyxJQUFMLEdBQVksQ0FBWjtBQUNBLFNBQUtDLEtBQUwsR0FBYTtBQUNYRCxVQUFJLEVBQUU7QUFESyxLQUFiO0FBR0Q7O0FBRURFLFVBQVEsR0FBRztBQUNULFNBQUtGLElBQUwsS0FBYyxDQUFkLEdBQWtCLEtBQUtBLElBQUwsR0FBWSxDQUE5QixHQUFrQyxLQUFLQSxJQUFMLEVBQWxDO0FBQ0EsU0FBS0csUUFBTCxDQUFjO0FBQUNILFVBQUksRUFBRSxLQUFLQTtBQUFaLEtBQWQ7QUFFQUksWUFBUSxDQUFDQyxjQUFULENBQXdCLGtCQUF4QixFQUE0Q0MsS0FBNUMsQ0FBa0RDLGVBQWxELEdBQW9FLHNDQUFzQyxLQUFLUCxJQUEzQyxHQUFrRCxRQUF0SDtBQUNBSSxZQUFRLENBQUNDLGNB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QUEsTUFkRixDQTFDRixDQURKO0FBOEREOztBQTNGOEMiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHBhcmFncmFwaHMgPSBbXG4gIFwiV2UgcHJvdmlkZSB1bm1hdGNoZWQgcXVhbGl0eSwgY29tZm9ydCwgYW5kIHN0eWxlIGZvciBwcm9wZXJ0eSBvd25lcnMgYWNyb3NzIHRoZSBjb3VudHJ5LlxcblwiICtcbiAgXCIgIE91ciBleHBlcnRzIGNvbWJpbmUgZm9ybSBhbmRuZnVuY3Rpb24gaW4gYnJpbmdpbmcgeW91ciB2aXNpb24gdG8gbGlmZS4gQ3JlYXRlIGEgcm9vbSBpbiB5b3VyXFxuXCIgK1xuICBcIiAgb3duIHN0eWxlIHdpdGggb3VyIGNvbGxlY3Rpb24gYW5kIG1ha2UgeW91ciBwcm9wZXJ0eSBhIHJlZmxlY3Rpb24gb2YgeW91IGFuZCB3aGF0IHlvdSBsb3ZlLlwiLFxuICBcIldpdGggc3RvcmVzIGFsbCBvdmVyIHRoZSB3b3JsZCwgaXQncyBlYXN5IGZvciB5b3UgdG8gZmluZCBmdXJuaXR1cmUgZm9yIHlvdXIgaG9tZSBvciBwbGFjZSBvZiBidXNpbmVzcy5cXG5cIiArXG4gIFwiICBMb2NhbGx5LCB3ZeKAmXJlIGluIG1vc3QgbWFqb3IgY2l0aWVzIHRocm91Z2hvdXQgdGhlIGNvdW50cnkuIEZpbmQgdGhlIGJyYW5jaCBuZWFyZXN0IHlvdSB1c2luZyBvdXJcXG5cIiArXG4gIFwiICBzdG9yZSBsb2NhdG9yLiBBbnkgcXVlc3Rpb25zPyBEb24ndCBoZXNpdGF0ZSB0byBjb250YWN0IHVzIHRvZGF5LlwiLFxuICBcIk91ciBtb2Rlcm4gZnVybml0dXJlIHN0b3JlIHByb3ZpZGUgYSBoaWdoIGxldmVsIG9mIHF1YWxpdHkuIE91ciBjb21wYW55IGhhcyBpbnZlc3RlZCBpbiBhZHZhbmNlZCB0ZWNobm9sb2d5XFxuXCIgK1xuICBcIiAgdG8gZW5zdXJlIHRoYXQgZXZlcnkgcHJvZHVjdCBpcyBtYWRlIGFzIHBlcmZlY3QgYW5kIGFzIGNvbnNpc3RlbnQgYXMgcG9zc2libGUuIFdpdGggdGhyZWUgZGVjYWRlcyBvZlxcblwiICtcbiAgXCIgIGV4cGVyaWVuY2UgaW4gdGhpcyBpbmR1c3RyeSwgd2UgdW5kZXJzdGFuZCB3aGF0IGN1c3RvbWVycyB3YW50IGZvciB0aGVpciBob21lIGFuZCBvZmZpY2UuXCJcbl1cblxuY29uc3QgdGl0bGVzID0gW1xuICBcIkRpc2NvdmVyIGlubm92YXRpdmUgd2F5cyB0byBkZWNvcmF0ZVwiLFxuICBcIldlIGFyZSBhdmFpbGFibGUgYWxsIGFjcm9zcyB0aGUgZ2xvYmVcIixcbiAgXCJNYW51ZmFjdHVyZWQgd2l0aCB0aGUgYmVzdCBtYXRlcmlhbHNcIixcbl1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9tZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnBhZ2UgPSAxO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBwYWdlOiAxLFxuICAgIH07XG4gIH1cblxuICBwcmV2UGFnZSgpIHtcbiAgICB0aGlzLnBhZ2UgPT09IDEgPyB0aGlzLnBhZ2UgPSAzIDogdGhpcy5wYWdlLS07XG4gICAgdGhpcy5zZXRTdGF0ZSh7cGFnZTogdGhpcy5wYWdlfSk7XG5cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9wLWxlZnQtc2VjdGlvbicpLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IFwidXJsKCcuL2ltYWdlcy9kZXNrdG9wLWltYWdlLWhlcm8tXCIgKyB0aGlzLnBhZ2UgKyBcIi5qcGcnKVwiO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpLmlubmVyVGV4dCA9IHRpdGxlc1t0aGlzLnBhZ2UgLSAxXTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFyYWdyYXBoJykuaW5uZXJUZXh0ID0gcGFyYWdyYXBoc1t0aGlzLnBhZ2UgLSAxXTtcbiAgfVxuXG4gIG5leHRQYWdlKCkge1xuICAgIHRoaXMucGFnZSA9PT0gMyA/IHRoaXMucGFnZSA9IDEgOiB0aGlzLnBhZ2UrKztcbiAgICB0aGlzLnNldFN0YXRlKHtwYWdlOiB0aGlzLnBhZ2V9KTtcblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b3AtbGVmdC1zZWN0aW9uJykuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJ1cmwoJy4vaW1hZ2VzL2Rlc2t0b3AtaW1hZ2UtaGVyby1cIiArIHRoaXMucGFnZSArIFwiLmpwZycpXCI7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlJykuaW5uZXJUZXh0ID0gdGl0bGVzW3RoaXMucGFnZSAtIDFdO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXJhZ3JhcGgnKS5pbm5lclRleHQgPSBwYXJhZ3JhcGhzW3RoaXMucGFnZSAtIDFdO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJ0b3AtbGVmdC1zZWN0aW9uXCIgY2xhc3NOYW1lPVwidG9wLWxlZnQtc2VjdGlvblwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBuYXYtYmFyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkaW5nXCI+cm9vbTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2LWl0ZW1zXCI+aG9tZVxuICAgICAgICAgICAgICAgICAgPGhyLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi1pdGVtc1wiPnNob3BcbiAgICAgICAgICAgICAgICAgIDxoci8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtaXRlbXNcIj5hYm91dFxuICAgICAgICAgICAgICAgICAgPGhyLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi1pdGVtc1wiPmNvbnRhY3RcbiAgICAgICAgICAgICAgICAgIDxoci8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvcC1yaWdodC1zZWN0aW9uXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2VudGVyLXRvcFwiPlxuICAgICAgICAgICAgICAgIDxoMiBpZD1cInRpdGxlXCI+RGlzY292ZXIgaW5ub3ZhdGl2ZSB3YXlzIHRvIGRlY29yYXRlPC9oMj5cbiAgICAgICAgICAgICAgICA8cCBpZD1cInBhcmFncmFwaFwiPlxuICAgICAgICAgICAgICAgICAgV2UgcHJvdmlkZSB1bm1hdGNoZWQgcXVhbGl0eSwgY29tZm9ydCwgYW5kIHN0eWxlIGZvciBwcm9wZXJ0eSBvd25lcnMgYWNyb3NzIHRoZSBjb3VudHJ5LlxuICAgICAgICAgICAgICAgICAgT3VyIGV4cGVydHMgY29tYmluZSBmb3JtIGFuZG5mdW5jdGlvbiBpbiBicmluZ2luZyB5b3VyIHZpc2lvbiB0byBsaWZlLiBDcmVhdGUgYSByb29tIGluIHlvdXJcbiAgICAgICAgICAgICAgICAgIG93biBzdHlsZSB3aXRoIG91ciBjb2xsZWN0aW9uIGFuZCBtYWtlIHlvdXIgcHJvcGVydHkgYSByZWZsZWN0aW9uIG9mIHlvdSBhbmQgd2hhdCB5b3UgbG92ZS5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaG9wXCI+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj5TaG9wIG5vdzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiYXJyb3ctcmlnaHRcIiBzcmM9XCJpbWFnZXMvaWNvbi1hcnJvdy5zdmdcIi8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBhcnJvdy1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFycm93XCIgb25DbGljaz17dGhpcy5wcmV2UGFnZS5iaW5kKHRoaXMpfT5cbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1hZ2VzL2ljb24tYW5nbGUtbGVmdC5zdmdcIi8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnJvd1wiIG9uQ2xpY2s9e3RoaXMubmV4dFBhZ2UuYmluZCh0aGlzKX0+XG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltYWdlcy9pY29uLWFuZ2xlLXJpZ2h0LnN2Z1wiLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3R0b20tbGVmdC1zZWN0aW9uXCI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm90dG9tLW1pZGRsZS1zZWN0aW9uXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2VudGVyLWJvdHRvbVwiPlxuICAgICAgICAgICAgICAgIDxoMz5BYm91dCBvdXIgZnVybml0dXJlPC9oMz5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgIE91ciBtdWx0aWZ1bmN0aW9uYWwgY29sbGVjdGlvbiBibGVuZHMgZGVzaWduIGFuZCBmdW5jdGlvbiB0byBzdWl0IHlvdXIgaW5kaXZpZHVhbCB0YXN0ZS5cbiAgICAgICAgICAgICAgICAgIE1ha2UgZWFjaCByb29tIHVuaXF1ZSwgb3IgcGljayBhIGNvaGVzaXZlIHRoZW1lIHRoYXQgYmVzdCBleHByZXNzIHlvdXIgaW50ZXJlc3RzIGFuZCB3aGF0XG4gICAgICAgICAgICAgICAgICBpbnNwaXJlcyB5b3UuIEZpbmQgdGhlIGZ1cm5pdHVyZSBwaWVjZXMgeW91IG5lZWQsIGZyb20gdHJhZGl0aW9uYWwgdG8gY29udGVtcG9yYXJ5IHN0eWxlc1xuICAgICAgICAgICAgICAgICAgb3IgYW55dGhpbmcgaW4gYmV0d2Vlbi4gUHJvZHVjdCBzcGVjaWFsaXN0cyBhcmUgYXZhaWxhYmxlIHRvIGhlbHAgeW91IGNyZWF0ZSB5b3VyIGRyZWFtIHNwYWNlLlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm90dG9tLXJpZ2h0LXNlY3Rpb25cIj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });