/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./Resources/Scripts/footer.ts":
/*!*************************************!*\
  !*** ./Resources/Scripts/footer.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.setFooterHeight = exports.setCopyright = void 0;
const copy = document.getElementById('copy');
const footer = document.querySelector('footer');
const body = document.querySelector('body');
function setCopyright() {
    if (copy) {
        copy.innerText = `© ${new Date().getFullYear()} Lucie Vidářová. All rights reserved.`;
    }
}
exports.setCopyright = setCopyright;
function setFooterHeight() {
    body.style.setProperty('--footer-height', `${footer.clientHeight}px`);
}
exports.setFooterHeight = setFooterHeight;


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!***********************************!*\
  !*** ./Resources/Scripts/init.ts ***!
  \***********************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const footer_1 = __webpack_require__(/*! ./footer */ "./Resources/Scripts/footer.ts");
document.addEventListener("DOMContentLoaded", function () {
    (0, footer_1.setCopyright)();
});

})();

/******/ })()
;
//# sourceMappingURL=init.js.map