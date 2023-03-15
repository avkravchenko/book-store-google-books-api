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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slider */ \"./src/slider.js\");\n\n(0,_slider__WEBPACK_IMPORTED_MODULE_0__.mySlider)();\n\nconst cart = {};\nconst checkData = localStorage.getItem('myKey');\nconst parsedData = JSON.parse(checkData);\n\n\nconst categories = document.querySelectorAll('.main__content__categories__list__item');\nlet counter = 0;\nconst numberIndi = document.querySelector('.nav__divs__image__span');\n\n\ncategories.forEach(category => {\n  category.style.cursor = \"pointer\";\n  category.addEventListener('click', handleClick);\n});\n\nfunction handleClick(e){\n  const clickedCategory = e.target.textContent;\n    categories.forEach((item) => {\n      item.classList.remove('main__content__categories__list__item--active');\n    })\n    this.classList.add('main__content__categories__list__item--active');\n\n   \n    function fetchingBooksData(clickedCategory) {\n      return fetch(`https://www.googleapis.com/books/v1/volumes?q=\"subject:${clickedCategory}\"&printType=books&startIndex=0&maxResults=6&langRestrict=en`)\n      .then(response => response.json())\n      .then(data => data)\n    }\n\n    function renderBooks(book) {\n      const bookConteiner = document.querySelectorAll('.main__content__books__card');\n      const bookItems = book.items;\n      console.log(bookItems);\n      bookConteiner.forEach((conteiner, index) => {\n        const item = bookItems[index];\n        const cartData = JSON.parse(checkData);\n        // here we can try to add some staff for button rendering\n        console.log(cartData)\n        if (item) {\n          conteiner.innerHTML = `\n            <div class=\"main__content__books__card__image\"><img src=\"${item.volumeInfo.imageLinks ? item.volumeInfo.imageLinks.thumbnail : \"/images/default-cover.jpg\"}\"></div>\n            <div class=\"main__content__books__card__description\">\n              <div class=\"main__content__books__card__description__authors\">${item.volumeInfo.authors ? item.volumeInfo.authors.join(\", \") : 'Authors not found'}</div>\n              <div class=\"main__content__books__card__description__title\"><h3>${item.volumeInfo.title}</h3></div>\n              <div class=\"main__content__books__card__description__rating\"></div>\n              <div class=\"main__content__books__card__description__text\">${item.volumeInfo.description ? item.volumeInfo.description.slice(0, 100) + \"...\" : \"Description not found\"}</div>\n              <div class=\"main__content__books__card__description__price\">${item.saleInfo && item.saleInfo.listPrice ? item.saleInfo.listPrice.amount + \" \" + item.saleInfo.listPrice.currencyCode : \"Price not defined\"}</div>\n              <div class=\"main__content__books__card__description__button-container\"><button class=\"main__content__books__card__description__in-cart\">Buy now</button></div>\n            </div>\n          `;\n\n        } else {\n          conteiner.innerHTML = `\n            <div class=\"main__content__books__card__image\"><img src=\"/images/default-cover.jpg\"></div>\n            <div class=\"main__content__books__card__description\">\n              <div class=\"main__content__books__card__description__authors\">Authors not found</div>\n              <div class=\"main__content__books__card__description__title\"><h3>Title not found</h3></div>\n              <div class=\"main__content__books__card__description__rating\">Rating not found</div>\n              <div class=\"main__content__books__card__description__text\">Description not found</div>\n              <div class=\"main__content__books__card__description__price\">Price not defined</div>\n            </div>\n          `;\n        }\n\n        \n      });\n\n      const buttons = document.querySelectorAll('.main__content__books__card__description__in-cart');\n\n      \n\n      buttons.forEach((button, index) => {\n        const clickedButton = bookItems[index].id;\n        button.addEventListener('click', () => {\n          if (!cart[clickedButton]) {\n            // Add to cart\n            cart[clickedButton] = true;\n            button.textContent = \"in the cart\";\n            counter++\n            console.log(counter)\n          } else {\n            // Remove from cart\n            delete cart[clickedButton];\n            button.textContent = \"buy now\";\n            counter--\n            console.log(counter)\n          }\n          const saveInLocal = JSON.stringify(cart);\n          localStorage.setItem('myKey', saveInLocal);\n        });\n        // Set the initial text of the button based on the cart\n        if (cart[clickedButton]) {\n          button.textContent = \"in the cart\";\n        }\n      });\n    }\n\n    fetchingBooksData(clickedCategory)\n        .then(book => renderBooks(book));\n}\n\ncategories[0].classList.add('main__content__categories__list__item--active');\ncategories[0].click();\n\n\n   \n\n//# sourceURL=webpack://home-work-12/./src/index.js?");

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