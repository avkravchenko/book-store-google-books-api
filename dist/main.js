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

/***/ "./src/booksRendering.js":
/*!*******************************!*\
  !*** ./src/booksRendering.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"booksRendering\": () => (/* binding */ booksRendering)\n/* harmony export */ });\nfunction booksRendering(place, data){\n    data.forEach(item => {\n        const booksCard = document.createElement('div');\n        booksCard.innerHTML = `\n        <div class=\"main__content__books__card__image\"><img src=\"${item.volumeInfo.imageLinks ? item.volumeInfo.imageLinks.thumbnail : \"/images/default-cover.jpg\"}\"></div>\n        <div class=\"main__content__books__card__description\">\n          <div class=\"main__content__books__card__description__authors\">${item.volumeInfo.authors ? item.volumeInfo.authors.join(\", \") : 'Authors not found'}</div>\n          <div class=\"main__content__books__card__description__title\"><h3>${item.volumeInfo.title}</h3></div>\n          \n          <div class=\"main__content__books__card__description__text\">${item.volumeInfo.description ? item.volumeInfo.description.slice(0, 100) + \"...\" : \"Description not found\"}</div>\n          <div class=\"main__content__books__card__description__price\"><strong>${item.saleInfo && item.saleInfo.listPrice ? item.saleInfo.listPrice.amount + \" \" + item.saleInfo.listPrice.currencyCode : \"Price not defined\"}</strong></div>\n          <div class=\"main__content__books__card__description__button-container\"><button class=\"main__content__books__card__description__in-cart\">Buy now</button></div>\n        </div>\n        `\n        place.appendChild(booksCard)\n    })\n}\n\n//# sourceURL=webpack://home-work-12/./src/booksRendering.js?");

/***/ }),

/***/ "./src/collectChildren.js":
/*!********************************!*\
  !*** ./src/collectChildren.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"collectChildren\": () => (/* binding */ collectChildren)\n/* harmony export */ });\nfunction collectChildren(element){\n    const collection = element.children;\n    console.log(collection)\n    for (let i = 0; i < collection.length; i++) {\n        collection[i].classList.remove('main__content__categories__list__item--active')\n    }\n}\n\n//# sourceURL=webpack://home-work-12/./src/collectChildren.js?");

/***/ }),

/***/ "./src/fetchData.js":
/*!**************************!*\
  !*** ./src/fetchData.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fetchData\": () => (/* binding */ fetchData)\n/* harmony export */ });\nfunction fetchData(data){\n    return fetch(`https://www.googleapis.com/books/v1/volumes?q=\"subject:${data}\"&printType=books&startIndex=0&maxResults=6&langRestrict=en`)\n    .then(respone => respone.json())\n    .then(books => books.items)\n  }\n\n//# sourceURL=webpack://home-work-12/./src/fetchData.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _booksRendering__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./booksRendering */ \"./src/booksRendering.js\");\n/* harmony import */ var _collectChildren__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./collectChildren */ \"./src/collectChildren.js\");\n/* harmony import */ var _fetchData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fetchData */ \"./src/fetchData.js\");\n/* harmony import */ var _removeBooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./removeBooks */ \"./src/removeBooks.js\");\n/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./slider */ \"./src/slider.js\");\n\n\n\n\n\n(0,_slider__WEBPACK_IMPORTED_MODULE_4__.mySlider)();\n\n\nconst pasteBooks = document.querySelector('.main__content__books');\nconst categoriesList = document.querySelector('.main__content__categories__list');\nlet clickedCategory = '';\nlet activeCategory = null;\n\ncategoriesList.addEventListener('click', (e) => {\n  (0,_removeBooks__WEBPACK_IMPORTED_MODULE_3__.removeBooks)(pasteBooks)\n  ;(0,_collectChildren__WEBPACK_IMPORTED_MODULE_1__.collectChildren)(categoriesList)\n  if (e.target.classList.contains('main__content__categories__list__item')) {\n    clickedCategory = e.target.textContent;\n    activeCategory = e.target;\n    activeCategory.classList.add('main__content__categories__list__item--active');\n\n    (0,_fetchData__WEBPACK_IMPORTED_MODULE_2__.fetchData)(clickedCategory)\n    .then(bookItems => (0,_booksRendering__WEBPACK_IMPORTED_MODULE_0__.booksRendering)(pasteBooks, bookItems))\n    .catch(error => console.log(error));\n  }\n})\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://home-work-12/./src/index.js?");

/***/ }),

/***/ "./src/removeBooks.js":
/*!****************************!*\
  !*** ./src/removeBooks.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"removeBooks\": () => (/* binding */ removeBooks)\n/* harmony export */ });\nfunction removeBooks(place){\n    place.innerHTML = '';\n}\n\n//# sourceURL=webpack://home-work-12/./src/removeBooks.js?");

/***/ }),

/***/ "./src/slider.js":
/*!***********************!*\
  !*** ./src/slider.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"mySlider\": () => (/* binding */ mySlider)\n/* harmony export */ });\nfunction mySlider(){\n\nconst sliderImages = document.querySelectorAll('.main__slider__image');\nconst sliderDots = document.querySelectorAll('.main__slider__dot');\n\nlet currentSlide = 0;\nlet currentDot = 0;\n\n\nfunction automaticSlider(){\n  sliderImages[currentSlide].classList.remove('main__slider__image--active');\n  currentSlide = (currentSlide + 1) % sliderImages.length;\n  sliderImages[currentSlide].classList.add('main__slider__image--active');\n  \n  sliderDots[currentDot].classList.remove('main__slider__dot--active');\n  currentDot = (currentDot + 1) % sliderDots.length;\n  sliderDots[currentDot].classList.add('main__slider__dot--active');\n}\n\n\nlet interval = setInterval(automaticSlider, 5000);\n\nsliderDots.forEach((dot, index) => {\n  dot.style.cursor = \"pointer\";\n  dot.addEventListener('click', () => {\n    \n    sliderImages.forEach((slide) => {\n      slide.classList.remove('main__slider__image--active');\n      \n    })\n    sliderDots.forEach((dot) => {\n      dot.classList.remove('main__slider__dot--active');\n      \n    })\n\n    sliderImages[index].classList.add('main__slider__image--active');\n    sliderDots[index].classList.add('main__slider__dot--active');\n\n    currentSlide = index;\n    currentDot = index;\n\n    clearInterval(interval);\n    interval = setInterval(automaticSlider, 5000);\n  })\n})\n}\n\n\n\n\n//# sourceURL=webpack://home-work-12/./src/slider.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;