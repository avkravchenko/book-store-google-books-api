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

/***/ "./src/addToCart.js":
/*!**************************!*\
  !*** ./src/addToCart.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addToCart\": () => (/* binding */ addToCart)\n/* harmony export */ });\n/* harmony import */ var _getFromLocal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getFromLocal */ \"./src/getFromLocal.js\");\n\n\nfunction addToCart(item, cart){\n    const data = (0,_getFromLocal__WEBPACK_IMPORTED_MODULE_0__.getFromLocal)();\n    if(data === null){\n        cart[item] = true;\n        localStorage.setItem('shoppingCart', JSON.stringify(cart));\n    } else {\n        data[item] = true;\n        localStorage.setItem('shoppingCart', JSON.stringify(data));\n    } \n} \n\n//# sourceURL=webpack://home-work-12/./src/addToCart.js?");

/***/ }),

/***/ "./src/booksRendering.js":
/*!*******************************!*\
  !*** ./src/booksRendering.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"booksRendering\": () => (/* binding */ booksRendering)\n/* harmony export */ });\n/* harmony import */ var _getFromLocal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getFromLocal */ \"./src/getFromLocal.js\");\n/* harmony import */ var _buttonsLogic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buttonsLogic */ \"./src/buttonsLogic.js\");\n/* harmony import */ var _getStarRating__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getStarRating */ \"./src/getStarRating.js\");\n\n\n\n\nfunction booksRendering(place, data, cart){\n  const dataFromLocal = (0,_getFromLocal__WEBPACK_IMPORTED_MODULE_0__.getFromLocal)();\n\n  console.log(data)\n    data.forEach(item => {\n        const booksCard = document.createElement('div');\n        booksCard.classList.add('main__content__books__card');\n        const starRating = (0,_getStarRating__WEBPACK_IMPORTED_MODULE_2__.getStarRating)(item.volumeInfo.averageRating);\n        if(dataFromLocal) {\n        booksCard.innerHTML = `\n          <div class=\"main__content__books__card__image\"><img src=\"${item.volumeInfo.imageLinks ? item.volumeInfo.imageLinks.thumbnail : \"/images/default-cover.jpg\"}\"></div>\n\n\n          <div class=\"main__content__books__card__description\">\n            <div class=\"main__content__books__card__description__authors\">${item.volumeInfo.authors ? item.volumeInfo.authors.join(\", \") : ''}</div>\n            <div class=\"main__content__books__card__description__title\"><h3>${item.volumeInfo.title}</h3></div>\n\n            <div class=\"main__content__books__card__description__rating\">${(item.volumeInfo.averageRating) ? starRating : '' }<span style=\"color: black\"> ${(item.volumeInfo.ratingsCount) ? item.volumeInfo.ratingsCount + ' review': ''}</span></div>\n\n            <div class=\"main__content__books__card__description__text\">${item.volumeInfo.description ? item.volumeInfo.description.slice(0, 100) + \"...\" : \"\"}</div>\n            <div class=\"main__content__books__card__description__price\"><strong>${item.saleInfo && item.saleInfo.listPrice ? item.saleInfo.listPrice.amount + \" \" + item.saleInfo.listPrice.currencyCode : \"\"}</strong></div>\n\n            <div class=\"main__content__books__card__description__button-container\">\n            <button data-id =${item.id} class=\"main__content__books__card__description__in-cart${(dataFromLocal[item.id]) ? ' main__content__books__card__description__in-cart--active' : ''}\">${(dataFromLocal[item.id]) ? 'in the cart' : 'Buy now'}</button></div>\n          </div>\n        `\n      } else{\n        booksCard.innerHTML = `\n        <div class=\"main__content__books__card__image\"><img src=\"${item.volumeInfo.imageLinks ? item.volumeInfo.imageLinks.thumbnail : \"/images/default-cover.jpg\"}\"></div>\n        <div class=\"main__content__books__card__description\">\n          <div class=\"main__content__books__card__description__authors\">${item.volumeInfo.authors ? item.volumeInfo.authors.join(\", \") : 'Authors not found'}</div>\n          <div class=\"main__content__books__card__description__title\"><h3>${item.volumeInfo.title}</h3></div>\n          \n          <div class=\"main__content__books__card__description__text\">${item.volumeInfo.description ? item.volumeInfo.description.slice(0, 100) + \"...\" : \"Description not found\"}</div>\n          <div class=\"main__content__books__card__description__price\"><strong>${item.saleInfo && item.saleInfo.listPrice ? item.saleInfo.listPrice.amount + \" \" + item.saleInfo.listPrice.currencyCode : \"Price not defined\"}</strong></div>\n          <div class=\"main__content__books__card__description__button-container\"><button data-id =${item.id} class=\"main__content__books__card__description__in-cart\">Buy now</button></div>\n        </div>\n        `\n      }\n        place.appendChild(booksCard)\n    })\n    \n    ;(0,_buttonsLogic__WEBPACK_IMPORTED_MODULE_1__.handleBtnClick)(place, cart);\n}\n\n//# sourceURL=webpack://home-work-12/./src/booksRendering.js?");

/***/ }),

/***/ "./src/buttonsLogic.js":
/*!*****************************!*\
  !*** ./src/buttonsLogic.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"handleBtnClick\": () => (/* binding */ handleBtnClick)\n/* harmony export */ });\n/* harmony import */ var _addToCart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addToCart */ \"./src/addToCart.js\");\n/* harmony import */ var _counterLogic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./counterLogic */ \"./src/counterLogic.js\");\n/* harmony import */ var _getFromLocal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getFromLocal */ \"./src/getFromLocal.js\");\n/* harmony import */ var _removeFromCart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./removeFromCart */ \"./src/removeFromCart.js\");\n/* harmony import */ var _removeFromLocal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./removeFromLocal */ \"./src/removeFromLocal.js\");\n\n\n\n\n\n\nconst indi = document.querySelector('.nav__divs__image__span');\n\nlet initialCounterData = (0,_getFromLocal__WEBPACK_IMPORTED_MODULE_2__.getFromLocal)();\nlet quantityInLocal = Object.keys(initialCounterData).length;\n\nif (initialCounterData) {\n  indi.innerHTML = quantityInLocal;\n  indi.style.display = 'flex';\n} \n\nif (quantityInLocal === 0) {\n  indi.textContent = '';\n  indi.style.display = 'none';\n}\n\nfunction handleBtnClick(place, cart) {\n  let counter = 0;\n    \n    function handleClick(e) {\n      const data = (0,_getFromLocal__WEBPACK_IMPORTED_MODULE_2__.getFromLocal)();\n      \n      if(e.target.classList.contains('main__content__books__card__description__in-cart')) {\n        const clickedButton = e.target;\n        const clickedButtonId = clickedButton.getAttribute('data-id');\n\n        if (data[clickedButtonId]) {\n          (0,_removeFromCart__WEBPACK_IMPORTED_MODULE_3__.removeFromCart)(clickedButtonId, cart);\n          (0,_removeFromLocal__WEBPACK_IMPORTED_MODULE_4__.removeFromLocal)(clickedButtonId);\n          clickedButton.textContent = \"Buy now\";\n          clickedButton.classList.remove('main__content__books__card__description__in-cart--active');\n          counter--\n          ;(0,_counterLogic__WEBPACK_IMPORTED_MODULE_1__.counterLogicRemove)(indi)\n          \n        } else {\n          (0,_addToCart__WEBPACK_IMPORTED_MODULE_0__.addToCart)(clickedButtonId, cart);\n          clickedButton.textContent = \"in the cart\";\n          clickedButton.classList.add('main__content__books__card__description__in-cart--active');\n          counter++\n          ;(0,_counterLogic__WEBPACK_IMPORTED_MODULE_1__.counterLogicAdd)(indi)\n        }\n      }\n    }\n    // check if place already has an event listener\n    if (place.onclick) {\n      place.removeEventListener('click', place.onclick);\n    }\n  \n    place.onclick = handleClick;\n  }\n  \n  \n\n//# sourceURL=webpack://home-work-12/./src/buttonsLogic.js?");

/***/ }),

/***/ "./src/collectChildren.js":
/*!********************************!*\
  !*** ./src/collectChildren.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"collectChildren\": () => (/* binding */ collectChildren)\n/* harmony export */ });\nfunction collectChildren(element){\n    const collection = element.children;\n\n    for (let i = 0; i < collection.length; i++) {\n        collection[i].classList.remove('main__content__categories__list__item--active')\n    }\n}\n\n//# sourceURL=webpack://home-work-12/./src/collectChildren.js?");

/***/ }),

/***/ "./src/counterLogic.js":
/*!*****************************!*\
  !*** ./src/counterLogic.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"counterLogicAdd\": () => (/* binding */ counterLogicAdd),\n/* harmony export */   \"counterLogicRemove\": () => (/* binding */ counterLogicRemove)\n/* harmony export */ });\n/* harmony import */ var _getFromLocal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getFromLocal */ \"./src/getFromLocal.js\");\n\n\n\n\nfunction counterLogicAdd (indi) {\n    const data = (0,_getFromLocal__WEBPACK_IMPORTED_MODULE_0__.getFromLocal)();\n    let quantity = Object.keys(data).length;\n    indi.innerHTML =  quantity + \" \";\n    indi.style.display = 'flex';\n}\n\nfunction counterLogicRemove (indi) {\n    const data = (0,_getFromLocal__WEBPACK_IMPORTED_MODULE_0__.getFromLocal)();\n    let quantity = Object.keys(data).length;\n    indi.textContent = quantity;\n\n    if (quantity === 0) {\n        indi.textContent = '';\n        indi.style.display = 'none';\n    }\n}\n\n//# sourceURL=webpack://home-work-12/./src/counterLogic.js?");

/***/ }),

/***/ "./src/fetchData.js":
/*!**************************!*\
  !*** ./src/fetchData.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fetchData\": () => (/* binding */ fetchData)\n/* harmony export */ });\nfunction fetchData(data, index){\n    return fetch(`https://www.googleapis.com/books/v1/volumes?q=\"subject:${data}\"&printType=books&startIndex=${index}&maxResults=6&langRestrict=en`)\n    .then(respone => respone.json())\n    .then(books => books.items);\n  }\n\n  \n\n//# sourceURL=webpack://home-work-12/./src/fetchData.js?");

/***/ }),

/***/ "./src/getFromLocal.js":
/*!*****************************!*\
  !*** ./src/getFromLocal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getFromLocal\": () => (/* binding */ getFromLocal)\n/* harmony export */ });\nfunction getFromLocal(){\n    if (localStorage.getItem('shoppingCart') === null) {\n        localStorage.setItem('shoppingCart', JSON.stringify({}));\n    }\n    const response = localStorage.getItem('shoppingCart')\n    const data = JSON.parse(response);\n    return data;\n}   \n\n//# sourceURL=webpack://home-work-12/./src/getFromLocal.js?");

/***/ }),

/***/ "./src/getStarRating.js":
/*!******************************!*\
  !*** ./src/getStarRating.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getStarRating\": () => (/* binding */ getStarRating)\n/* harmony export */ });\nfunction getStarRating(averageRating) {\n    const roundedRating = Math.round(averageRating);\n    const maxRating = 5;\n    let starRating = '';\n    \n    for (let i = 0; i < maxRating; i++) {\n      if (i < roundedRating) {\n        starRating += '★'; // full star icon\n      } else {\n        starRating += '☆'; // empty star icon\n      }\n    }\n    \n    return starRating;\n  }\n  \n  \n\n  \n\n//# sourceURL=webpack://home-work-12/./src/getStarRating.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _booksRendering__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./booksRendering */ \"./src/booksRendering.js\");\n/* harmony import */ var _collectChildren__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./collectChildren */ \"./src/collectChildren.js\");\n/* harmony import */ var _fetchData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fetchData */ \"./src/fetchData.js\");\n/* harmony import */ var _loadMore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loadMore */ \"./src/loadMore.js\");\n/* harmony import */ var _removeBooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./removeBooks */ \"./src/removeBooks.js\");\n/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./slider */ \"./src/slider.js\");\n\n\n\n\n\n\n\nconst buttonHolder = document.querySelector('.main__content__books__wrapper'); \nlet newButtonElem = null; \nconst pasteBooks = document.querySelector('.main__content__books');\nconst categoriesList = document.querySelector('.main__content__categories__list');\nlet clickedCategory = '';\nlet activeCategory = null;\nlet startIndex = 0;\nconst cart = {};\n\n(0,_slider__WEBPACK_IMPORTED_MODULE_5__.mySlider)();\n\ncategoriesList.addEventListener('click', (e) => {\n \n  \n  if (e.target.classList.contains('main__content__categories__list__item')) {\n    (0,_removeBooks__WEBPACK_IMPORTED_MODULE_4__.removeBooks)(pasteBooks)\n    ;(0,_collectChildren__WEBPACK_IMPORTED_MODULE_1__.collectChildren)(categoriesList)\n    \n    if (newButtonElem) {\n      newButtonElem.remove(); \n    }\n\n    clickedCategory = e.target.textContent;\n    activeCategory = e.target;\n    activeCategory.classList.add('main__content__categories__list__item--active');\n\n    newButtonElem = document.createElement('button');\n    newButtonElem.innerHTML = \"load more\";\n    newButtonElem.classList.add('main__content__books__wrapper__button')\n    buttonHolder.appendChild(newButtonElem);\n\n    (0,_fetchData__WEBPACK_IMPORTED_MODULE_2__.fetchData)(clickedCategory, startIndex)\n    .then(bookItems => (0,_booksRendering__WEBPACK_IMPORTED_MODULE_0__.booksRendering)(pasteBooks, bookItems, cart))\n    .catch(error => console.log(error));\n\n    (0,_loadMore__WEBPACK_IMPORTED_MODULE_3__.loadMore)(newButtonElem, clickedCategory, startIndex, pasteBooks, cart);\n  }\n})\n\ncategoriesList.firstElementChild.click();\n\n\n//# sourceURL=webpack://home-work-12/./src/index.js?");

/***/ }),

/***/ "./src/loadMore.js":
/*!*************************!*\
  !*** ./src/loadMore.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadMore\": () => (/* binding */ loadMore)\n/* harmony export */ });\n/* harmony import */ var _booksRendering__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./booksRendering */ \"./src/booksRendering.js\");\n/* harmony import */ var _fetchData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetchData */ \"./src/fetchData.js\");\n\n\n\n\nfunction loadMore(button, currentCategory, startIndex, place, cart)  {\n    button.addEventListener('click', () => {\n        startIndex += 6;\n        console.log(startIndex)\n        console.log(currentCategory)\n        ;(0,_fetchData__WEBPACK_IMPORTED_MODULE_1__.fetchData)(currentCategory, startIndex)\n        .then(data => (0,_booksRendering__WEBPACK_IMPORTED_MODULE_0__.booksRendering)(place, data, cart));\n    })\n}\n\n//# sourceURL=webpack://home-work-12/./src/loadMore.js?");

/***/ }),

/***/ "./src/removeBooks.js":
/*!****************************!*\
  !*** ./src/removeBooks.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"removeBooks\": () => (/* binding */ removeBooks)\n/* harmony export */ });\nfunction removeBooks(place){\n    place.innerHTML = '';\n}\n\n//# sourceURL=webpack://home-work-12/./src/removeBooks.js?");

/***/ }),

/***/ "./src/removeFromCart.js":
/*!*******************************!*\
  !*** ./src/removeFromCart.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"removeFromCart\": () => (/* binding */ removeFromCart)\n/* harmony export */ });\nfunction removeFromCart(item, cart){\n    delete cart[item];\n}\n\n//# sourceURL=webpack://home-work-12/./src/removeFromCart.js?");

/***/ }),

/***/ "./src/removeFromLocal.js":
/*!********************************!*\
  !*** ./src/removeFromLocal.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"removeFromLocal\": () => (/* binding */ removeFromLocal)\n/* harmony export */ });\n/* harmony import */ var _getFromLocal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getFromLocal */ \"./src/getFromLocal.js\");\n\n\nfunction removeFromLocal(item){\n    const dataFromLocal = (0,_getFromLocal__WEBPACK_IMPORTED_MODULE_0__.getFromLocal)();\n    delete dataFromLocal[item];\n    localStorage.setItem('shoppingCart', JSON.stringify(dataFromLocal));\n}\n\n//# sourceURL=webpack://home-work-12/./src/removeFromLocal.js?");

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