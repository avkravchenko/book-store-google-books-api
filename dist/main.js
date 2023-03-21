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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"booksRendering\": () => (/* binding */ booksRendering)\n/* harmony export */ });\n/* harmony import */ var _setIdToCollection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setIdToCollection */ \"./src/setIdToCollection.js\");\n\n\nfunction booksRendering(place, data){\n    data.forEach(item => {\n        const booksCard = document.createElement('div');\n        booksCard.innerHTML = `\n        <div class=\"main__content__books__card__image\"><img src=\"${item.volumeInfo.imageLinks ? item.volumeInfo.imageLinks.thumbnail : \"/images/default-cover.jpg\"}\"></div>\n        <div class=\"main__content__books__card__description\">\n          <div class=\"main__content__books__card__description__authors\">${item.volumeInfo.authors ? item.volumeInfo.authors.join(\", \") : 'Authors not found'}</div>\n          <div class=\"main__content__books__card__description__title\"><h3>${item.volumeInfo.title}</h3></div>\n          \n          <div class=\"main__content__books__card__description__text\">${item.volumeInfo.description ? item.volumeInfo.description.slice(0, 100) + \"...\" : \"Description not found\"}</div>\n          <div class=\"main__content__books__card__description__price\"><strong>${item.saleInfo && item.saleInfo.listPrice ? item.saleInfo.listPrice.amount + \" \" + item.saleInfo.listPrice.currencyCode : \"Price not defined\"}</strong></div>\n          <div class=\"main__content__books__card__description__button-container\"><button class=\"main__content__books__card__description__in-cart\">Buy now</button></div>\n        </div>\n        `\n        place.appendChild(booksCard)\n    })\n    \n    ;(0,_setIdToCollection__WEBPACK_IMPORTED_MODULE_0__.setId)(place, data);\n}\n\n//# sourceURL=webpack://home-work-12/./src/booksRendering.js?");

/***/ }),

/***/ "./src/buttonsLogic.js":
/*!*****************************!*\
  !*** ./src/buttonsLogic.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"activeButton\": () => (/* binding */ activeButton)\n/* harmony export */ });\n/* harmony import */ var _removeItemFromLocal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./removeItemFromLocal */ \"./src/removeItemFromLocal.js\");\n/* harmony import */ var _toLocalStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toLocalStorage */ \"./src/toLocalStorage.js\");\n\n\n\nfunction addToCart(item, cart) {\n    cart[item] = true;\n    console.log(cart);\n    (0,_toLocalStorage__WEBPACK_IMPORTED_MODULE_1__.addToLocal)(cart)\n}\n\nfunction removeFromCart(item, cart) {\n    delete cart[item];\n    console.log(cart);\n    (0,_removeItemFromLocal__WEBPACK_IMPORTED_MODULE_0__.removeItemFromLocal)(cart[item])\n}\n\nfunction test(e, cart) {\n    if (e.target.classList.contains('main__content__books__card__description__in-cart')) {\n      let selectedButton = e.target;\n      let clickedBtnId = selectedButton.getAttribute('data-id');\n      console.log(clickedBtnId);\n  \n      selectedButton.classList.toggle('main__content__books__card__description__in-cart--active');\n  \n      if (!cart[clickedBtnId]) {\n        addToCart(clickedBtnId, cart);\n        selectedButton.textContent = 'In the cart';\n      } else {\n        removeFromCart(clickedBtnId, cart);\n        selectedButton.textContent = 'Buy now';\n      }\n    }\n  }\n  \n  function activeButton(parent, cart) {\n    let clickAdded = false;\n  \n    function handleClick(event) {\n      test(event, cart);\n    }\n  \n    function addClick() {\n      parent.addEventListener('click', handleClick);\n      clickAdded = true;\n    }\n  \n    function removeClick() {\n      parent.removeEventListener('click', handleClick);\n      clickAdded = false;\n    }\n  \n    if (!clickAdded) {\n      addClick();\n    }\n  \n    else {\n      removeClick();\n    }\n  }\n  \n  \n      \n\n    \n  \n\n//# sourceURL=webpack://home-work-12/./src/buttonsLogic.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fetchData\": () => (/* binding */ fetchData)\n/* harmony export */ });\nfunction fetchData(data, index){\n    return fetch(`https://www.googleapis.com/books/v1/volumes?q=\"subject:${data}\"&printType=books&startIndex=${index}&maxResults=6&langRestrict=en`)\n    .then(respone => respone.json())\n    .then(books => books.items);\n  }\n\n//# sourceURL=webpack://home-work-12/./src/fetchData.js?");

/***/ }),

/***/ "./src/getFromLocal.js":
/*!*****************************!*\
  !*** ./src/getFromLocal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getFromLocal\": () => (/* binding */ getFromLocal)\n/* harmony export */ });\nfunction getFromLocal(){\n    const response = localStorage.getItem('myKey')\n    const data = JSON.parse(response);\n    console.log(response)\n    return data;\n}   \n\n//# sourceURL=webpack://home-work-12/./src/getFromLocal.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _booksRendering__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./booksRendering */ \"./src/booksRendering.js\");\n/* harmony import */ var _buttonsLogic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buttonsLogic */ \"./src/buttonsLogic.js\");\n/* harmony import */ var _collectChildren__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./collectChildren */ \"./src/collectChildren.js\");\n/* harmony import */ var _fetchData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fetchData */ \"./src/fetchData.js\");\n/* harmony import */ var _loadMore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loadMore */ \"./src/loadMore.js\");\n/* harmony import */ var _removeBooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./removeBooks */ \"./src/removeBooks.js\");\n/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./slider */ \"./src/slider.js\");\n\n\n\n\n\n\n\n\n(0,_slider__WEBPACK_IMPORTED_MODULE_6__.mySlider)();\n\n\nconst buttonHolder = document.querySelector('.main__content__books__wrapper'); \nlet newButtonElem = null; \n\nconst pasteBooks = document.querySelector('.main__content__books');\n\nconst categoriesList = document.querySelector('.main__content__categories__list');\nlet clickedCategory = '';\nlet activeCategory = null;\nlet startIndex = 0;\nlet counter = 0;\nlet cart = {};\n\n(0,_buttonsLogic__WEBPACK_IMPORTED_MODULE_1__.activeButton)(pasteBooks, cart) \n\ncategoriesList.addEventListener('click', (e) => {\n  ;(0,_removeBooks__WEBPACK_IMPORTED_MODULE_5__.removeBooks)(pasteBooks)\n  ;(0,_collectChildren__WEBPACK_IMPORTED_MODULE_2__.collectChildren)(categoriesList)\n  \n  if (newButtonElem) {\n    newButtonElem.remove(); \n  }\n  \n  if (e.target.classList.contains('main__content__categories__list__item')) {\n    clickedCategory = e.target.textContent;\n    activeCategory = e.target;\n    activeCategory.classList.add('main__content__categories__list__item--active');\n    newButtonElem = document.createElement('button');\n    newButtonElem.innerHTML = \"load more\";\n    buttonHolder.appendChild(newButtonElem);\n\n    (0,_fetchData__WEBPACK_IMPORTED_MODULE_3__.fetchData)(clickedCategory, startIndex)\n    .then(bookItems => (0,_booksRendering__WEBPACK_IMPORTED_MODULE_0__.booksRendering)(pasteBooks, bookItems))\n    .catch(error => console.log(error));\n\n    (0,_loadMore__WEBPACK_IMPORTED_MODULE_4__.loadMore)(newButtonElem, clickedCategory, startIndex, pasteBooks);\n    \n  }\n})\n\ncategoriesList.firstElementChild.click();\n\n\n//# sourceURL=webpack://home-work-12/./src/index.js?");

/***/ }),

/***/ "./src/loadMore.js":
/*!*************************!*\
  !*** ./src/loadMore.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadMore\": () => (/* binding */ loadMore)\n/* harmony export */ });\n/* harmony import */ var _booksRendering__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./booksRendering */ \"./src/booksRendering.js\");\n/* harmony import */ var _fetchData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetchData */ \"./src/fetchData.js\");\n\n\n\n\nfunction loadMore(button, currentCategory, startIndex, place) {\n    button.addEventListener('click', () => {\n        startIndex += 6;\n        console.log(startIndex)\n        console.log(currentCategory)\n        ;(0,_fetchData__WEBPACK_IMPORTED_MODULE_1__.fetchData)(currentCategory, startIndex)\n        .then(data => (0,_booksRendering__WEBPACK_IMPORTED_MODULE_0__.booksRendering)(place, data));\n    })\n}\n\n//# sourceURL=webpack://home-work-12/./src/loadMore.js?");

/***/ }),

/***/ "./src/removeBooks.js":
/*!****************************!*\
  !*** ./src/removeBooks.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"removeBooks\": () => (/* binding */ removeBooks)\n/* harmony export */ });\nfunction removeBooks(place){\n    place.innerHTML = '';\n}\n\n//# sourceURL=webpack://home-work-12/./src/removeBooks.js?");

/***/ }),

/***/ "./src/removeItemFromLocal.js":
/*!************************************!*\
  !*** ./src/removeItemFromLocal.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"removeItemFromLocal\": () => (/* binding */ removeItemFromLocal)\n/* harmony export */ });\n/* harmony import */ var _getFromLocal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getFromLocal */ \"./src/getFromLocal.js\");\n\n\nfunction removeItemFromLocal(item) {\n    const data = (0,_getFromLocal__WEBPACK_IMPORTED_MODULE_0__.getFromLocal)();\n    console.log(data)\n    /* .then(data => () => {\n        \n        for (let key in data) {\n           if (key === item) {\n            localStorage.removeItem('myKey', item);\n        }\n    }\n}) */\n}\n\n//# sourceURL=webpack://home-work-12/./src/removeItemFromLocal.js?");

/***/ }),

/***/ "./src/setIdToCollection.js":
/*!**********************************!*\
  !*** ./src/setIdToCollection.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setId\": () => (/* binding */ setId)\n/* harmony export */ });\nfunction setId(place, data) {\n    const buttons = place.getElementsByTagName('button');\n    console.log(buttons)\n    for (let i = 0; i < buttons.length; i++) {\n        const id = data[i].id;\n        buttons[i].setAttribute('data-id', id);\n    }\n}\n\n//# sourceURL=webpack://home-work-12/./src/setIdToCollection.js?");

/***/ }),

/***/ "./src/slider.js":
/*!***********************!*\
  !*** ./src/slider.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"mySlider\": () => (/* binding */ mySlider)\n/* harmony export */ });\nfunction mySlider(){\n\nconst sliderImages = document.querySelectorAll('.main__slider__image');\nconst sliderDots = document.querySelectorAll('.main__slider__dot');\n\nlet currentSlide = 0;\nlet currentDot = 0;\n\n\nfunction automaticSlider(){\n  sliderImages[currentSlide].classList.remove('main__slider__image--active');\n  currentSlide = (currentSlide + 1) % sliderImages.length;\n  sliderImages[currentSlide].classList.add('main__slider__image--active');\n  \n  sliderDots[currentDot].classList.remove('main__slider__dot--active');\n  currentDot = (currentDot + 1) % sliderDots.length;\n  sliderDots[currentDot].classList.add('main__slider__dot--active');\n}\n\n\nlet interval = setInterval(automaticSlider, 5000);\n\nsliderDots.forEach((dot, index) => {\n  dot.style.cursor = \"pointer\";\n  dot.addEventListener('click', () => {\n    \n    sliderImages.forEach((slide) => {\n      slide.classList.remove('main__slider__image--active');\n      \n    })\n    sliderDots.forEach((dot) => {\n      dot.classList.remove('main__slider__dot--active');\n      \n    })\n\n    sliderImages[index].classList.add('main__slider__image--active');\n    sliderDots[index].classList.add('main__slider__dot--active');\n\n    currentSlide = index;\n    currentDot = index;\n\n    clearInterval(interval);\n    interval = setInterval(automaticSlider, 5000);\n  })\n})\n}\n\n\n\n\n//# sourceURL=webpack://home-work-12/./src/slider.js?");

/***/ }),

/***/ "./src/toLocalStorage.js":
/*!*******************************!*\
  !*** ./src/toLocalStorage.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addToLocal\": () => (/* binding */ addToLocal)\n/* harmony export */ });\nfunction addToLocal(item) {\n    const convertToJson = JSON.stringify(item);\n    localStorage.setItem('myKey', convertToJson);\n}\n\n//# sourceURL=webpack://home-work-12/./src/toLocalStorage.js?");

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