/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/style.css */ \"./src/style.css\");\n/* harmony import */ var _src_view_main_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/view/main.js */ \"./src/view/main.js\");\n\r\n\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", _src_view_main_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\n//# sourceURL=webpack://meal-finder/./app.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://meal-finder/./src/style.css?");

/***/ }),

/***/ "./src/component/detail-section.js":
/*!*****************************************!*\
  !*** ./src/component/detail-section.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _meal_detail__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./meal-detail */ \"./src/component/meal-detail.js\");\n/* harmony import */ var _meal_detail__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_meal_detail__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\nclass DetailSection extends HTMLElement {\r\n  constructor() {\r\n    super();\r\n    this.shadowDOM = this.attachShadow({mode: \"open\"});\r\n  }\r\n\r\n  set mealsdetail(meal) {\r\n    this._mealsdetail = meal;\r\n    this.render();\r\n  }\r\n\r\n  render() {\r\n    this.shadowDOM.innerHTML = `\r\n      <style>\r\n        @import \"../style.css\"\r\n      </style>\r\n      <section id=\"meal-detail\" class=\"mt-8 w-full p-4 flex flex-col items-center justify-center\">\r\n        \r\n      </section>\r\n    `;\r\n    this._mealsdetail.forEach(meal => {\r\n      const mealDetailElement = document.createElement(\"meal-detail\");\r\n      mealDetailElement.meal = meal;\r\n      this.shadowDOM.querySelector(\"#meal-detail\").appendChild(mealDetailElement);\r\n    })\r\n  }\r\n}\r\n\r\ncustomElements.define(\"detail-section\", DetailSection);\n\n//# sourceURL=webpack://meal-finder/./src/component/detail-section.js?");

/***/ }),

/***/ "./src/component/meal-detail.js":
/*!**************************************!*\
  !*** ./src/component/meal-detail.js ***!
  \**************************************/
/***/ (() => {

eval("class MealDetail extends HTMLElement {\r\n  constructor() {\r\n    super();\r\n    this.shadowDOM = this.attachShadow({mode: \"open\"});\r\n  }\r\n\r\n  set meal(meal) {\r\n    this._meal = meal;\r\n    this.render();\r\n  }\r\n\r\n  render() {\r\n    if (this._meal === null) {\r\n      this.shadowDOM.innerHTML = \"\";\r\n    } else {\r\n      let instructions = this._meal.strInstructions;\r\n      instructions = instructions.split(\". \");\r\n      this.shadowDOM.innerHTML = `\r\n        <style>\r\n          @import \"../style.css\"\r\n        </style>\r\n        <article class=\"w-full flex flex-col items-center justify-center\">\r\n          <h2 class=\"text-3xl font-bold text-center\">${this._meal.strMeal}</h2>\r\n          <img src=\"${this._meal.strMealThumb}\" alt=\"${this._meal.strMealThumb}\" class=\"mt-4 w-1/2 h-1/2 border-2 border-white rounded-lg\">\r\n          <div class=\"mt-4 w-full text-center px-8 py-12 border-2 border-dashed border-white rounded-lg\">\r\n            <p>Meal Category: <b>${this._meal.strCategory}</b></p>\r\n            <p>Nationality: <b>${this._meal.strArea}</b></p>\r\n          </div>\r\n          <ul class=\"mt-4 list-decimal\">\r\n            ${instructions.map(item => {\r\n              return `<li>${item}</li>`\r\n            }).join(\" \")}\r\n          </ul>\r\n        </article>\r\n      `;\r\n    }\r\n  }\r\n}\r\n\r\ncustomElements.define(\"meal-detail\", MealDetail);\n\n//# sourceURL=webpack://meal-finder/./src/component/meal-detail.js?");

/***/ }),

/***/ "./src/component/meal-item.js":
/*!************************************!*\
  !*** ./src/component/meal-item.js ***!
  \************************************/
/***/ (() => {

eval("class MealItem extends HTMLElement {\r\n  constructor() {\r\n    super();\r\n    this.shadowDOM = this.attachShadow({mode: \"open\"});\r\n  }\r\n\r\n  set meal(meal) {\r\n    this._meal = meal\r\n    this.setAttribute(\"data-mealID\", this._meal.idMeal)\r\n    this.render();\r\n  }\r\n\r\n  render() {\r\n    this.shadowDOM.innerHTML = `\r\n      <style>\r\n        @import \"../style.css\"\r\n      </style>\r\n      <article id=\"meal\" class=\"relative cursor-pointer w-44 h-44 text-center\">\r\n        <img src=\"${this._meal.strMealThumb}\" alt=\"${this._meal.strMeal}\" class=\"w-full h-full border-2 border-white rounded-lg\">\r\n        <div id=\"meal-info\" data-mealID=\"${this._meal.idMeal}\" class=\"absolute meal-info top-0 left-0 w-full h-full rounded-lg bg-black bg-opacity-75 flex items-center justify-center transition-opacity opacity-0 hover:opacity-100\">\r\n          <h3 class=\"font-bold\">${this._meal.strMeal}</h3>\r\n        </div>\r\n      </article>\r\n    `;\r\n  }\r\n}\r\n\r\ncustomElements.define(\"meal-item\", MealItem)\n\n//# sourceURL=webpack://meal-finder/./src/component/meal-item.js?");

/***/ }),

/***/ "./src/component/meals-list.js":
/*!*************************************!*\
  !*** ./src/component/meals-list.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _meal_item_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./meal-item.js */ \"./src/component/meal-item.js\");\n/* harmony import */ var _meal_item_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_meal_item_js__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\nclass MealsList extends HTMLElement {\r\n  constructor() {\r\n    super();\r\n    this.shadowDOM = this.attachShadow({mode: \"open\"});\r\n  }\r\n\r\n  set meals(meals) {\r\n    this.meal = meals;\r\n    this.render()\r\n  }\r\n\r\n  set itemClick(event) {\r\n    this._itemClick = event;\r\n    this.render();\r\n  }\r\n\r\n  render() {\r\n    this.shadowDOM.innerHTML = `\r\n      <style>\r\n        @import \"../style.css\"\r\n      </style>\r\n      <section id=\"list-component\" class=\"grid grid-cols-4 gap-6 mt-8 justify-items-center text-center\">\r\n        \r\n      </section>\r\n    `;\r\n    this.meal.forEach(meal => {\r\n      const mealItemElement = document.createElement(\"meal-item\");\r\n      mealItemElement.meal = meal;\r\n      this.shadowDOM.querySelector(\"#list-component\").appendChild(mealItemElement);\r\n    });\r\n    this.shadowDOM.querySelector(\"#list-component\").addEventListener(\"click\", this._itemClick);\r\n  }\r\n}\r\n\r\ncustomElements.define(\"meals-list\", MealsList);\n\n//# sourceURL=webpack://meal-finder/./src/component/meals-list.js?");

/***/ }),

/***/ "./src/component/search-bar.js":
/*!*************************************!*\
  !*** ./src/component/search-bar.js ***!
  \*************************************/
/***/ (() => {

eval("class SearchBar extends HTMLElement {\r\n  constructor() {\r\n    super();\r\n    this.shadowDOM = this.attachShadow({mode: \"open\"});\r\n  }\r\n\r\n  connectedCallback() {\r\n    this.render();\r\n  }\r\n\r\n  set onSearch(event) {\r\n    this._onSearch = event;\r\n    this.render();\r\n  }\r\n\r\n  set randomSearch(event) {\r\n    this._randomSearch = event;\r\n    this.render()\r\n  }\r\n\r\n  get searchValue() {\r\n    return this.shadowDOM.querySelector('#search-field').value;\r\n  }\r\n\r\n  render() {\r\n    this.shadowDOM.innerHTML = `\r\n      <style>\r\n        @import \"../style.css\"\r\n      </style>\r\n      <section id=\"search-component\" class=\"flex flex-row justify-center w-full mt-8\">\r\n        <input id=\"search-field\" type=\"search\" class=\"p-4 w-3/5 font-bold rounded-tl-xl rounded-bl-xl focus:outline-none text-black\" placeholder=\"Search your meal here...\" />\r\n        <button id=\"search-button\" type=\"submit\" class=\"p-4 font-bold bg-brown-soft rounded-tr-xl rounded-br-xl\">\r\n          Search\r\n        </button>\r\n        <button type=\"submit\" id=\"randomize\" class=\"ml-4 p-4 font-bold text-brown-soft rounded-xl bg-cream-skin\">\r\n          Random\r\n        </button>\r\n      </section>\r\n    `;\r\n    this.shadowDOM.querySelector('#search-button').addEventListener(\"click\", this._onSearch);\r\n    this.shadowDOM.querySelector('#randomize').addEventListener(\"click\", this._randomSearch);\r\n  }\r\n}\r\n\r\ncustomElements.define('search-bar', SearchBar)\n\n//# sourceURL=webpack://meal-finder/./src/component/search-bar.js?");

/***/ }),

/***/ "./src/data/MealsData.js":
/*!*******************************!*\
  !*** ./src/data/MealsData.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass MealsData {\r\n  static async searchMeal(keyword) {\r\n    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`);\r\n    const data = await res.json();\r\n    return data.meals;\r\n  }\r\n\r\n  static async randomMeal() {\r\n    const res = await fetch(\"https://www.themealdb.com/api/json/v1/1/random.php\");\r\n    const data = await res.json();\r\n    return data.meals;\r\n  }\r\n\r\n  static async mealDetail(id) {\r\n    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);\r\n    const data = await res.json();\r\n    return data.meals;\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MealsData);\n\n//# sourceURL=webpack://meal-finder/./src/data/MealsData.js?");

/***/ }),

/***/ "./src/view/main.js":
/*!**************************!*\
  !*** ./src/view/main.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _component_search_bar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../component/search-bar.js */ \"./src/component/search-bar.js\");\n/* harmony import */ var _component_search_bar_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_component_search_bar_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _component_meals_list_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../component/meals-list.js */ \"./src/component/meals-list.js\");\n/* harmony import */ var _component_detail_section__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../component/detail-section */ \"./src/component/detail-section.js\");\n/* harmony import */ var _data_MealsData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/MealsData */ \"./src/data/MealsData.js\");\n\r\n\r\n\r\n\r\n\r\nconst main = () => {\r\n  const searchElement = document.querySelector(\"search-bar\");\r\n  const mealListElement = document.querySelector(\"meals-list\");\r\n  const mealItemElement = document.querySelector(\"meal-item\");\r\n  const detailSectionElement = document.querySelector(\"detail-section\");\r\n  const resultTextTemplate = document.querySelector(\"#result-template\");\r\n\r\n  const renderResult = results => {\r\n    mealListElement.meals = results;\r\n  }\r\n\r\n  const renderSingleMeal = result => {\r\n    detailSectionElement.mealsdetail = result;\r\n  }\r\n\r\n  const onSearchClicked = async () => {\r\n    try {\r\n      const result = await _data_MealsData__WEBPACK_IMPORTED_MODULE_3__[\"default\"].searchMeal(searchElement.searchValue);\r\n      if (result === null) {\r\n        resultTextTemplate.innerText = `No result found for ${searchElement.searchValue}`;\r\n      } else {\r\n        resultTextTemplate.innerText = `Search result for ${searchElement.searchValue}`;\r\n        renderResult(result);\r\n      }\r\n    }\r\n    catch (err) {\r\n      resultTextTemplate.innerText = \"\";\r\n      alert(err)\r\n    }\r\n  }\r\n\r\n  const randomSearchClicked = async () => {\r\n    try {\r\n      const result = await _data_MealsData__WEBPACK_IMPORTED_MODULE_3__[\"default\"].randomMeal();\r\n      renderResult(result);\r\n    }\r\n    catch (err) {\r\n      alert(err)\r\n    }\r\n  }\r\n\r\n  const onItemClicked = async (e) => {\r\n    try {\r\n      const mealID = e.target.getAttribute(\"data-mealID\");\r\n      const result = await _data_MealsData__WEBPACK_IMPORTED_MODULE_3__[\"default\"].mealDetail(mealID);\r\n      renderSingleMeal(result)\r\n    }\r\n    catch (err) {\r\n      console.log(err)\r\n    }\r\n  }\r\n\r\n  searchElement.onSearch = onSearchClicked;\r\n  searchElement.randomSearch = randomSearchClicked;\r\n  mealListElement.itemClick = onItemClicked;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (main);\n\n//# sourceURL=webpack://meal-finder/./src/view/main.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./app.js");
/******/ 	
/******/ })()
;