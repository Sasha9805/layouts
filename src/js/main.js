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

/***/ "./src/js/modules/burger.js":
/*!**********************************!*\
  !*** ./src/js/modules/burger.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction burger() {\r\n  const headerList = document.querySelector('.nav__list'),\r\n        burgerBtn = document.querySelector('.nav__burger-logo');\r\n\r\n  burgerBtn.addEventListener('click', () => {\r\n    headerList.classList.toggle('nav__list_burger');\r\n  });\r\n\r\n  window.addEventListener('resize', () => {\r\n    if (document.documentElement.clientWidth > 992) {\r\n      headerList.classList.remove('nav__list_burger');\r\n    }\r\n  });\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (burger);\n\n//# sourceURL=webpack://layouts/./src/js/modules/burger.js?");

/***/ }),

/***/ "./src/js/modules/modal.js":
/*!*********************************!*\
  !*** ./src/js/modules/modal.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction modal(btnSelector, modalSelector, closeSelector) {\r\n\r\n  const btns = document.querySelectorAll(btnSelector),\r\n        modal = document.querySelector(modalSelector),\r\n        close = document.querySelector(closeSelector),\r\n        scrollWidth = calcScroll();\r\n\r\n  btns.forEach(btn => {\r\n\r\n    btn.addEventListener('click', () => {\r\n\r\n      modal.style.display = 'flex';\r\n      document.body.style.overflow = 'hidden';\r\n      document.body.style.paddingRight = scrollWidth + 'px';\r\n\r\n    });\r\n    \r\n  });\r\n\r\n  modal.addEventListener('click', (event) => {\r\n\r\n    if (event.target.closest('.modal-dialog')) {\r\n      return;\r\n    }\r\n\r\n    modal.style.display = '';\r\n    document.body.style.overflow = '';\r\n    document.body.style.paddingRight = '';\r\n\r\n  });\r\n\r\n  close.addEventListener('click', () => {\r\n\r\n    modal.style.display = '';\r\n    document.body.style.overflow = '';\r\n    document.body.style.paddingRight = '';\r\n\r\n  });\r\n\r\n  function calcScroll() {\r\n    let div = document.createElement('div');\r\n    div.style.width = '50px';\r\n    div.style.height = '50px';\r\n    document.body.append(div);\r\n    const widthBefore = div.clientWidth;\r\n    div.style.overflow = 'scroll';\r\n    const widthAfter = div.clientWidth;\r\n    div.remove();\r\n    div = null;\r\n    return widthBefore - widthAfter;\r\n  }\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack://layouts/./src/js/modules/modal.js?");

/***/ }),

/***/ "./src/js/modules/scroll-up.js":
/*!*************************************!*\
  !*** ./src/js/modules/scroll-up.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction scrollUp(arrowSelector, heightToVisible) {\r\n\r\n  const arrow = document.querySelector(arrowSelector);\r\n\r\n  window.addEventListener('scroll', () => {\r\n\r\n    if (window.pageYOffset >= heightToVisible) {\r\n      arrow.style.display = 'flex';\r\n    } else {\r\n      arrow.style.display = '';\r\n    }\r\n\r\n  });\r\n  \r\n  // let timer;\r\n  // arrow.addEventListener('click', () => {\r\n  //   timer = setInterval(() => step(50), 20);\r\n  //   timer = null;\r\n  // });\r\n\r\n  // function step(count) {\r\n  //   window.scrollBy(0, -count);\r\n  //   if (window.pageYOffset === 0) {\r\n  //     clearInterval(timer);\r\n  //   }\r\n  // }\r\n\r\n  arrow.addEventListener('click', () => {\r\n    step();\r\n  });\r\n\r\n  function step() {\r\n    window.scrollBy(0, -50);\r\n    if (window.pageYOffset !== 0) {\r\n      requestAnimationFrame(step);\r\n    }\r\n  }\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scrollUp);\n\n//# sourceURL=webpack://layouts/./src/js/modules/scroll-up.js?");

/***/ }),

/***/ "./src/js/modules/slider-client.js":
/*!*****************************************!*\
  !*** ./src/js/modules/slider-client.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction sliderClient(sliderSelector, sliderItemsSelector, arrowLeftSelector, arrowRightSelector) {\r\n\r\n  let slider = document.querySelector(sliderSelector),\r\n      sliderItems = document.querySelectorAll(sliderItemsSelector),\r\n      btnLeft = document.querySelector(arrowLeftSelector),\r\n      btnRight = document.querySelector(arrowRightSelector);\r\n\r\n  btnRight.addEventListener('click', () => {\r\n\r\n    slider.append(sliderItems[0]);\r\n    const sliderCopy = slider.cloneNode(true);\r\n    slider.replaceWith(sliderCopy);\r\n\r\n    slider = document.querySelector(sliderSelector);\r\n    sliderItems = document.querySelectorAll(sliderItemsSelector);\r\n\r\n  });\r\n\r\n  btnLeft.addEventListener('click', () => {\r\n\r\n    slider.prepend(sliderItems[sliderItems.length - 1]);\r\n    const sliderCopy = slider.cloneNode(true);\r\n    slider.replaceWith(sliderCopy);\r\n\r\n    slider = document.querySelector(sliderSelector);\r\n    sliderItems = document.querySelectorAll(sliderItemsSelector);\r\n\r\n  });\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sliderClient);\n\n//# sourceURL=webpack://layouts/./src/js/modules/slider-client.js?");

/***/ }),

/***/ "./src/js/modules/slider.js":
/*!**********************************!*\
  !*** ./src/js/modules/slider.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction slider(slidesSelector, arrowLeftSelector, arrowRightSelector) {\r\n\r\n  const sliderItems = document.querySelectorAll(slidesSelector),\r\n        sliderItemsCount = sliderItems.length,\r\n        btnLeft = document.querySelector(arrowLeftSelector),\r\n        btnRight = document.querySelector(arrowRightSelector);\r\n\r\n  let slideIndex = 0;\r\n\r\n  function hideAll() {\r\n    sliderItems.forEach(item => {\r\n      item.style.display = 'none';\r\n    });\r\n  }\r\n\r\n  function showSlide(ind = 0) {\r\n    sliderItems[ind].style.display = '';\r\n  }\r\n\r\n  hideAll();\r\n  showSlide();\r\n\r\n  btnLeft.addEventListener('click', () => {\r\n    hideAll();\r\n    slideIndex = slideIndex - 1 < 0 ? sliderItemsCount - 1 : slideIndex - 1;\r\n    console.log(slideIndex);\r\n    showSlide(slideIndex);\r\n  });\r\n\r\n  btnRight.addEventListener('click', () => {\r\n    hideAll();\r\n    slideIndex = slideIndex + 1 > sliderItemsCount - 1 ? 0 : slideIndex + 1;\r\n    console.log(slideIndex);\r\n    showSlide(slideIndex);\r\n  });\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n//# sourceURL=webpack://layouts/./src/js/modules/slider.js?");

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_burger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/burger */ \"./src/js/modules/burger.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/slider */ \"./src/js/modules/slider.js\");\n/* harmony import */ var _modules_slider_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/slider-client */ \"./src/js/modules/slider-client.js\");\n/* harmony import */ var _modules_scroll_up__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/scroll-up */ \"./src/js/modules/scroll-up.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/modal */ \"./src/js/modules/modal.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nwindow.addEventListener('DOMContentLoaded', () => {\r\n\r\n  (0,_modules_burger__WEBPACK_IMPORTED_MODULE_0__.default)();\r\n\r\n  (0,_modules_slider__WEBPACK_IMPORTED_MODULE_1__.default)('.projects__slide', '#projects-arrow-left', '#projects-arrow-right');\r\n\r\n  (0,_modules_slider_client__WEBPACK_IMPORTED_MODULE_2__.default)('.clients__slider-wrapper', '.clients__slide', '#clients-arrow-left', '#clients-arrow-right');\r\n\r\n  (0,_modules_scroll_up__WEBPACK_IMPORTED_MODULE_3__.default)('.arrow-up', 1000);\r\n\r\n  (0,_modules_modal__WEBPACK_IMPORTED_MODULE_4__.default)('.modal-link', '.modal', '.modal-close');\r\n\r\n});\n\n//# sourceURL=webpack://layouts/./src/js/script.js?");

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
/******/ 			// no module.id needed
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/script.js");
/******/ 	
/******/ })()
;