/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contactView": () => (/* binding */ contactView)
/* harmony export */ });


function contactView() {
    console.log('contact entered')
    let subContainer = document.getElementById('belowTheNavbar')
    subContainer.innerHTML = ''
    let title = document.createElement('h2')
    title.innerHTML = 'Contact Us'

    subContainer.appendChild(title)

    let address = document.createElement('p')
    address.id = 'address'
    address.innerHTML = '53 A, Kazi Sayed Street, Chinch Bunder <br> Mumbai, Maharashtra 400009 <br> Ph number: 02223445579'
    subContainer.appendChild(address)

    let mapSection = document.createElement('div')
    mapSection.id = 'map'
    subContainer.appendChild(mapSection)
    var mymap = L.map('map').setView([51.505, -0.09], 13);

    
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoicmVhbGFraGlsYmFidSIsImEiOiJja2s5a2JqYmgweWg1MnZwYjJjMnNxdHF1In0.kyzeyOOquFHWrW-f2B9pCw', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoicmVhbGFraGlsYmFidSIsImEiOiJja2s5a2JqYmgweWg1MnZwYjJjMnNxdHF1In0.kyzeyOOquFHWrW-f2B9pCw'
}).addTo(mymap);


}



/***/ }),

/***/ "./src/homepage.js":
/*!*************************!*\
  !*** ./src/homepage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "homepageView": () => (/* binding */ homepageView)
/* harmony export */ });
/* harmony import */ var _kitchen_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./kitchen.jpg */ "./src/kitchen.jpg");


function homepageView() {
    let container = document.getElementById('belowTheNavbar')
    container.innerHTML = ''
    let homepageContainer = document.createElement('div')
    homepageContainer.id = 'homepage'
    let statement = document.createElement('p')
    statement.id = 'statement'
    statement.innerHTML = 'To serve exquisite and authentic Factorian Cuisine representing our cultures and legendary culinary gastronomy with typical dishes with a creative and talented touch, delivering a distinctly unique dining experience to fulfill our guest expectations.'
    homepageContainer.appendChild(statement)

    let statementAuthor = document.createElement('p')
    statementAuthor.id =  'statementAuthor'
    statementAuthor.innerHTML = ' - Manikandan Kumaraswami, Founder and CEO'
    homepageContainer.appendChild(statementAuthor)

    let image = new Image()
    image.src = _kitchen_jpg__WEBPACK_IMPORTED_MODULE_0__
    image.style.width = '100%'
    image.style.marginTop = '50px'
    image.style.marginBottom = '200px'
    homepageContainer.appendChild(image)
    container.appendChild(homepageContainer)
}




/***/ }),

/***/ "./src/kitchen.jpg":
/*!*************************!*\
  !*** ./src/kitchen.jpg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4fe6cc92aa590df7280d.jpg";

/***/ }),

/***/ "./src/menu-images/banana-porridge.jpg":
/*!*********************************************!*\
  !*** ./src/menu-images/banana-porridge.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5c4427428b9f9acb5666.jpg";

/***/ }),

/***/ "./src/menu-images/chicken.jpg":
/*!*************************************!*\
  !*** ./src/menu-images/chicken.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "478a30e1e4ac6366ed22.jpg";

/***/ }),

/***/ "./src/menu-images/khichdi.jpg":
/*!*************************************!*\
  !*** ./src/menu-images/khichdi.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "700fb1f70d562f4f55c5.jpg";

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menuView": () => (/* binding */ menuView)
/* harmony export */ });
/* harmony import */ var _menu_images_banana_porridge_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu-images/banana-porridge.jpg */ "./src/menu-images/banana-porridge.jpg");
/* harmony import */ var _menu_images_chicken_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu-images/chicken.jpg */ "./src/menu-images/chicken.jpg");
/* harmony import */ var _menu_images_khichdi_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu-images/khichdi.jpg */ "./src/menu-images/khichdi.jpg");
/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navbar */ "./src/navbar.js");







const itemFactory = (title, description, price, image) => {
    let itemContainer = document.createElement('li')
    itemContainer.classList.add('itemContainer')
    let itemTitle = document.createElement('h2')
    itemTitle.classList.add('itemTitle')
    itemTitle.innerHTML = title;
    let itemDescription = document.createElement('p')
    itemDescription.classList.add('itemDescription')
    itemDescription.innerHTML = description
    let itemPrice = document.createElement('p')
    itemPrice.classList.add('itemPrice')
    itemPrice.innerHTML = price
    itemContainer.appendChild(itemTitle)
    itemContainer.appendChild(itemDescription)
    itemContainer.appendChild(itemPrice)
    let imageObject = new Image();
    imageObject.src = image;
    imageObject.classList.add('itemImage')
    itemContainer.appendChild(imageObject)
    return itemContainer
}

function menuView() {
    let subContainer = document.getElementById('belowTheNavbar')
    subContainer.innerHTML = ''

    let menuList = document.createElement('ul')
    menuList.style.listStyle = 'none'

    let firstItem = itemFactory('Banana Porridge',
     'Yummy and nutritious porridge made from a recipe inspired by tradional himalayan waterfall cafes. Perfect for a healthy and quick breakfast to give you that extra boost of energy while remaining light on your stomach.'
      , '$20.00', _menu_images_banana_porridge_jpg__WEBPACK_IMPORTED_MODULE_0__)
    menuList.appendChild(firstItem)

    let secondItem = itemFactory('Chicken and Beans', "A classic lunch recipe with slow roasted chicken and sauteed beans cooked in our special chef's sauce. Served with a helping of mashed potatoes.",
    '$30.00', _menu_images_chicken_jpg__WEBPACK_IMPORTED_MODULE_1__)
    menuList.appendChild(secondItem)

    let thirdItem = itemFactory('Factori Special Khichdi', 'A dish inspired from a favourite of our beloved factorians, slow cooked dal and rice mix flavoured with the subtle yet savoury spices of the subcontinent.',
    '$20.00', _menu_images_khichdi_jpg__WEBPACK_IMPORTED_MODULE_2__)
    menuList.appendChild(thirdItem)
    subContainer.appendChild(menuList)
}



/***/ }),

/***/ "./src/navbar.js":
/*!***********************!*\
  !*** ./src/navbar.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "navbarView": () => (/* binding */ navbarView)
/* harmony export */ });
/* harmony import */ var _homepage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage */ "./src/homepage.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ "./src/contact.js");






function navbarUpdate(pages) {
    let activePage = pages.filter(e => {return e.active})
    console.log(activePage)
    pages.forEach(page => {
        if(page.active) {
            let button = document.getElementById(page.page);
            button.removeEventListener('mouseover', page.ul)
            button.removeEventListener('mouseleave', page.removeUL)
            button.style.borderBottomStyle = 'solid'
            button.style.borderBottomColor = '#274f72'
        }

        else {
            let button = document.getElementById(page.page);
            button.style.borderBottomStyle = 'none'
            button.addEventListener('mouseover', page.ul)
            button.addEventListener('mouseleave', page.removeUL)
        }
    })
}

function navbarView(container, pages) {
    let navbar = document.createElement('div')
    navbar.id = 'navbar'

    let homeButton = document.createElement('p')
    let menuButton = document.createElement('p')
    let contactButton = document.createElement('p')

    homeButton.classList.add('navbarButton')
    menuButton.classList.add('navbarButton')
    contactButton.classList.add('navbarButton')

    homeButton.id = 'Home'
    menuButton.id = 'Menu'
    contactButton.id = 'Contact'

    console.log('howide')
    homeButton.innerHTML = 'Home'
    menuButton.innerHTML = 'Menu'
    contactButton.innerHTML = 'Contact'

    navbar.appendChild(homeButton)
    navbar.appendChild(menuButton)
    navbar.appendChild(contactButton)

    container.appendChild(navbar)
    document.querySelector('body').appendChild(container)
    navbarUpdate(pages)

    let navbarArray = Array.from(document.getElementsByClassName('navbarButton'))
    navbarArray.forEach((button) => {
        button.addEventListener('click', () => {
            pages.forEach(page => {
                if(page.page==button.id) {
                    page.active = true
                }
                else {
                    page.active = false
                }
            })
            navbarUpdate(pages)
            pages.forEach(page => {
                if(page.active) {
                    page.view()
                }
            })
    })
})
}



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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/navbar.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWVwYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lcGFnZS8uL3NyYy9ob21lcGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWVwYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lcGFnZS8uL3NyYy9uYXZiYXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWVwYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWVwYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWVwYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZXBhZ2Uvd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLG1EQUFtRCxHQUFHLFFBQVEsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFO0FBQ3hFLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7O0FBR0Q7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEN3Qzs7QUFFeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLHlDQUFZO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFdUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCNEM7QUFDZjtBQUNBO0FBQ2Y7OztBQUdyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQiw2REFBbUI7QUFDckM7O0FBRUE7QUFDQSxjQUFjLHFEQUFZO0FBQzFCOztBQUVBO0FBQ0EsY0FBYyxxREFBWTtBQUMxQjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqRHlDO0FBQ1Y7QUFDTTs7OztBQUlyQztBQUNBLHdDQUF3QyxnQkFBZ0I7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLEtBQUs7QUFDTCxDQUFDO0FBQ0Q7Ozs7Ozs7O1VDM0VBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEVBQUU7V0FDRjtXQUNBO1dBQ0EsQ0FBQyxJOzs7OztXQ1BELHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGtDOzs7OztVQ2ZBO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6Im5hdmJhci5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuZnVuY3Rpb24gY29udGFjdFZpZXcoKSB7XG4gICAgY29uc29sZS5sb2coJ2NvbnRhY3QgZW50ZXJlZCcpXG4gICAgbGV0IHN1YkNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiZWxvd1RoZU5hdmJhcicpXG4gICAgc3ViQ29udGFpbmVyLmlubmVySFRNTCA9ICcnXG4gICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxuICAgIHRpdGxlLmlubmVySFRNTCA9ICdDb250YWN0IFVzJ1xuXG4gICAgc3ViQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKVxuXG4gICAgbGV0IGFkZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBhZGRyZXNzLmlkID0gJ2FkZHJlc3MnXG4gICAgYWRkcmVzcy5pbm5lckhUTUwgPSAnNTMgQSwgS2F6aSBTYXllZCBTdHJlZXQsIENoaW5jaCBCdW5kZXIgPGJyPiBNdW1iYWksIE1haGFyYXNodHJhIDQwMDAwOSA8YnI+IFBoIG51bWJlcjogMDIyMjM0NDU1NzknXG4gICAgc3ViQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZHJlc3MpXG5cbiAgICBsZXQgbWFwU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgbWFwU2VjdGlvbi5pZCA9ICdtYXAnXG4gICAgc3ViQ29udGFpbmVyLmFwcGVuZENoaWxkKG1hcFNlY3Rpb24pXG4gICAgdmFyIG15bWFwID0gTC5tYXAoJ21hcCcpLnNldFZpZXcoWzUxLjUwNSwgLTAuMDldLCAxMyk7XG5cbiAgICBcbiAgICBMLnRpbGVMYXllcignaHR0cHM6Ly9hcGkubWFwYm94LmNvbS9zdHlsZXMvdjEve2lkfS90aWxlcy97en0ve3h9L3t5fT9hY2Nlc3NfdG9rZW49cGsuZXlKMUlqb2ljbVZoYkdGcmFHbHNZbUZpZFNJc0ltRWlPaUpqYTJzNWEySnFZbWd3ZVdnMU1uWndZakpqTW5OeGRIRjFJbjAua3l6ZXlPT3F1RkhXclctZjJCOXBDdycsIHtcbiAgICBhdHRyaWJ1dGlvbjogJ01hcCBkYXRhICZjb3B5OyA8YSBocmVmPVwiaHR0cHM6Ly93d3cub3BlbnN0cmVldG1hcC5vcmcvY29weXJpZ2h0XCI+T3BlblN0cmVldE1hcDwvYT4gY29udHJpYnV0b3JzLCBJbWFnZXJ5IMKpIDxhIGhyZWY9XCJodHRwczovL3d3dy5tYXBib3guY29tL1wiPk1hcGJveDwvYT4nLFxuICAgIG1heFpvb206IDE4LFxuICAgIGlkOiAnbWFwYm94L3N0cmVldHMtdjExJyxcbiAgICB0aWxlU2l6ZTogNTEyLFxuICAgIHpvb21PZmZzZXQ6IC0xLFxuICAgIGFjY2Vzc1Rva2VuOiAncGsuZXlKMUlqb2ljbVZoYkdGcmFHbHNZbUZpZFNJc0ltRWlPaUpqYTJzNWEySnFZbWd3ZVdnMU1uWndZakpqTW5OeGRIRjFJbjAua3l6ZXlPT3F1RkhXclctZjJCOXBDdydcbn0pLmFkZFRvKG15bWFwKTtcblxuXG59XG5cbmV4cG9ydCB7Y29udGFjdFZpZXd9IiwiaW1wb3J0IGtpdGNoZW5JbWFnZSBmcm9tICcuL2tpdGNoZW4uanBnJ1xuXG5mdW5jdGlvbiBob21lcGFnZVZpZXcoKSB7XG4gICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiZWxvd1RoZU5hdmJhcicpXG4gICAgY29udGFpbmVyLmlubmVySFRNTCA9ICcnXG4gICAgbGV0IGhvbWVwYWdlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBob21lcGFnZUNvbnRhaW5lci5pZCA9ICdob21lcGFnZSdcbiAgICBsZXQgc3RhdGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgc3RhdGVtZW50LmlkID0gJ3N0YXRlbWVudCdcbiAgICBzdGF0ZW1lbnQuaW5uZXJIVE1MID0gJ1RvIHNlcnZlIGV4cXVpc2l0ZSBhbmQgYXV0aGVudGljIEZhY3RvcmlhbiBDdWlzaW5lIHJlcHJlc2VudGluZyBvdXIgY3VsdHVyZXMgYW5kIGxlZ2VuZGFyeSBjdWxpbmFyeSBnYXN0cm9ub215IHdpdGggdHlwaWNhbCBkaXNoZXMgd2l0aCBhIGNyZWF0aXZlIGFuZCB0YWxlbnRlZCB0b3VjaCwgZGVsaXZlcmluZyBhIGRpc3RpbmN0bHkgdW5pcXVlIGRpbmluZyBleHBlcmllbmNlIHRvIGZ1bGZpbGwgb3VyIGd1ZXN0IGV4cGVjdGF0aW9ucy4nXG4gICAgaG9tZXBhZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQoc3RhdGVtZW50KVxuXG4gICAgbGV0IHN0YXRlbWVudEF1dGhvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIHN0YXRlbWVudEF1dGhvci5pZCA9ICAnc3RhdGVtZW50QXV0aG9yJ1xuICAgIHN0YXRlbWVudEF1dGhvci5pbm5lckhUTUwgPSAnIC0gTWFuaWthbmRhbiBLdW1hcmFzd2FtaSwgRm91bmRlciBhbmQgQ0VPJ1xuICAgIGhvbWVwYWdlQ29udGFpbmVyLmFwcGVuZENoaWxkKHN0YXRlbWVudEF1dGhvcilcblxuICAgIGxldCBpbWFnZSA9IG5ldyBJbWFnZSgpXG4gICAgaW1hZ2Uuc3JjID0ga2l0Y2hlbkltYWdlXG4gICAgaW1hZ2Uuc3R5bGUud2lkdGggPSAnMTAwJSdcbiAgICBpbWFnZS5zdHlsZS5tYXJnaW5Ub3AgPSAnNTBweCdcbiAgICBpbWFnZS5zdHlsZS5tYXJnaW5Cb3R0b20gPSAnMjAwcHgnXG4gICAgaG9tZXBhZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQoaW1hZ2UpXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGhvbWVwYWdlQ29udGFpbmVyKVxufVxuXG5leHBvcnQgeyBob21lcGFnZVZpZXcgfVxuIiwiXG5pbXBvcnQgYmFuYW5hUG9ycmlkZ2VJbWFnZSBmcm9tICcuL21lbnUtaW1hZ2VzL2JhbmFuYS1wb3JyaWRnZS5qcGcnXG5pbXBvcnQgY2hpY2tlbkltYWdlIGZyb20gJy4vbWVudS1pbWFnZXMvY2hpY2tlbi5qcGcnXG5pbXBvcnQga2hpY2hkaUltYWdlIGZyb20gJy4vbWVudS1pbWFnZXMva2hpY2hkaS5qcGcnXG5pbXBvcnQgeyBuYXZiYXJWaWV3IH0gZnJvbSAnLi9uYXZiYXInXG5cblxuY29uc3QgaXRlbUZhY3RvcnkgPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBwcmljZSwgaW1hZ2UpID0+IHtcbiAgICBsZXQgaXRlbUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgICBpdGVtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2l0ZW1Db250YWluZXInKVxuICAgIGxldCBpdGVtVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG4gICAgaXRlbVRpdGxlLmNsYXNzTGlzdC5hZGQoJ2l0ZW1UaXRsZScpXG4gICAgaXRlbVRpdGxlLmlubmVySFRNTCA9IHRpdGxlO1xuICAgIGxldCBpdGVtRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBpdGVtRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnaXRlbURlc2NyaXB0aW9uJylcbiAgICBpdGVtRGVzY3JpcHRpb24uaW5uZXJIVE1MID0gZGVzY3JpcHRpb25cbiAgICBsZXQgaXRlbVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgaXRlbVByaWNlLmNsYXNzTGlzdC5hZGQoJ2l0ZW1QcmljZScpXG4gICAgaXRlbVByaWNlLmlubmVySFRNTCA9IHByaWNlXG4gICAgaXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtVGl0bGUpXG4gICAgaXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtRGVzY3JpcHRpb24pXG4gICAgaXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtUHJpY2UpXG4gICAgbGV0IGltYWdlT2JqZWN0ID0gbmV3IEltYWdlKCk7XG4gICAgaW1hZ2VPYmplY3Quc3JjID0gaW1hZ2U7XG4gICAgaW1hZ2VPYmplY3QuY2xhc3NMaXN0LmFkZCgnaXRlbUltYWdlJylcbiAgICBpdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKGltYWdlT2JqZWN0KVxuICAgIHJldHVybiBpdGVtQ29udGFpbmVyXG59XG5cbmZ1bmN0aW9uIG1lbnVWaWV3KCkge1xuICAgIGxldCBzdWJDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmVsb3dUaGVOYXZiYXInKVxuICAgIHN1YkNvbnRhaW5lci5pbm5lckhUTUwgPSAnJ1xuXG4gICAgbGV0IG1lbnVMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKVxuICAgIG1lbnVMaXN0LnN0eWxlLmxpc3RTdHlsZSA9ICdub25lJ1xuXG4gICAgbGV0IGZpcnN0SXRlbSA9IGl0ZW1GYWN0b3J5KCdCYW5hbmEgUG9ycmlkZ2UnLFxuICAgICAnWXVtbXkgYW5kIG51dHJpdGlvdXMgcG9ycmlkZ2UgbWFkZSBmcm9tIGEgcmVjaXBlIGluc3BpcmVkIGJ5IHRyYWRpb25hbCBoaW1hbGF5YW4gd2F0ZXJmYWxsIGNhZmVzLiBQZXJmZWN0IGZvciBhIGhlYWx0aHkgYW5kIHF1aWNrIGJyZWFrZmFzdCB0byBnaXZlIHlvdSB0aGF0IGV4dHJhIGJvb3N0IG9mIGVuZXJneSB3aGlsZSByZW1haW5pbmcgbGlnaHQgb24geW91ciBzdG9tYWNoLidcbiAgICAgICwgJyQyMC4wMCcsIGJhbmFuYVBvcnJpZGdlSW1hZ2UpXG4gICAgbWVudUxpc3QuYXBwZW5kQ2hpbGQoZmlyc3RJdGVtKVxuXG4gICAgbGV0IHNlY29uZEl0ZW0gPSBpdGVtRmFjdG9yeSgnQ2hpY2tlbiBhbmQgQmVhbnMnLCBcIkEgY2xhc3NpYyBsdW5jaCByZWNpcGUgd2l0aCBzbG93IHJvYXN0ZWQgY2hpY2tlbiBhbmQgc2F1dGVlZCBiZWFucyBjb29rZWQgaW4gb3VyIHNwZWNpYWwgY2hlZidzIHNhdWNlLiBTZXJ2ZWQgd2l0aCBhIGhlbHBpbmcgb2YgbWFzaGVkIHBvdGF0b2VzLlwiLFxuICAgICckMzAuMDAnLCBjaGlja2VuSW1hZ2UpXG4gICAgbWVudUxpc3QuYXBwZW5kQ2hpbGQoc2Vjb25kSXRlbSlcblxuICAgIGxldCB0aGlyZEl0ZW0gPSBpdGVtRmFjdG9yeSgnRmFjdG9yaSBTcGVjaWFsIEtoaWNoZGknLCAnQSBkaXNoIGluc3BpcmVkIGZyb20gYSBmYXZvdXJpdGUgb2Ygb3VyIGJlbG92ZWQgZmFjdG9yaWFucywgc2xvdyBjb29rZWQgZGFsIGFuZCByaWNlIG1peCBmbGF2b3VyZWQgd2l0aCB0aGUgc3VidGxlIHlldCBzYXZvdXJ5IHNwaWNlcyBvZiB0aGUgc3ViY29udGluZW50LicsXG4gICAgJyQyMC4wMCcsIGtoaWNoZGlJbWFnZSlcbiAgICBtZW51TGlzdC5hcHBlbmRDaGlsZCh0aGlyZEl0ZW0pXG4gICAgc3ViQ29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVMaXN0KVxufVxuXG5leHBvcnQge21lbnVWaWV3fSIsImltcG9ydCB7IGhvbWVwYWdlVmlldyB9IGZyb20gXCIuL2hvbWVwYWdlXCJcbmltcG9ydCB7bWVudVZpZXd9IGZyb20gJy4vbWVudSdcbmltcG9ydCB7Y29udGFjdFZpZXd9IGZyb20gJy4vY29udGFjdCdcblxuXG5cbmZ1bmN0aW9uIG5hdmJhclVwZGF0ZShwYWdlcykge1xuICAgIGxldCBhY3RpdmVQYWdlID0gcGFnZXMuZmlsdGVyKGUgPT4ge3JldHVybiBlLmFjdGl2ZX0pXG4gICAgY29uc29sZS5sb2coYWN0aXZlUGFnZSlcbiAgICBwYWdlcy5mb3JFYWNoKHBhZ2UgPT4ge1xuICAgICAgICBpZihwYWdlLmFjdGl2ZSkge1xuICAgICAgICAgICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHBhZ2UucGFnZSk7XG4gICAgICAgICAgICBidXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgcGFnZS51bClcbiAgICAgICAgICAgIGJ1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgcGFnZS5yZW1vdmVVTClcbiAgICAgICAgICAgIGJ1dHRvbi5zdHlsZS5ib3JkZXJCb3R0b21TdHlsZSA9ICdzb2xpZCdcbiAgICAgICAgICAgIGJ1dHRvbi5zdHlsZS5ib3JkZXJCb3R0b21Db2xvciA9ICcjMjc0ZjcyJ1xuICAgICAgICB9XG5cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocGFnZS5wYWdlKTtcbiAgICAgICAgICAgIGJ1dHRvbi5zdHlsZS5ib3JkZXJCb3R0b21TdHlsZSA9ICdub25lJ1xuICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIHBhZ2UudWwpXG4gICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIHBhZ2UucmVtb3ZlVUwpXG4gICAgICAgIH1cbiAgICB9KVxufVxuXG5mdW5jdGlvbiBuYXZiYXJWaWV3KGNvbnRhaW5lciwgcGFnZXMpIHtcbiAgICBsZXQgbmF2YmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBuYXZiYXIuaWQgPSAnbmF2YmFyJ1xuXG4gICAgbGV0IGhvbWVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBsZXQgbWVudUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIGxldCBjb250YWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG5cbiAgICBob21lQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ25hdmJhckJ1dHRvbicpXG4gICAgbWVudUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCduYXZiYXJCdXR0b24nKVxuICAgIGNvbnRhY3RCdXR0b24uY2xhc3NMaXN0LmFkZCgnbmF2YmFyQnV0dG9uJylcblxuICAgIGhvbWVCdXR0b24uaWQgPSAnSG9tZSdcbiAgICBtZW51QnV0dG9uLmlkID0gJ01lbnUnXG4gICAgY29udGFjdEJ1dHRvbi5pZCA9ICdDb250YWN0J1xuXG4gICAgY29uc29sZS5sb2coJ2hvd2lkZScpXG4gICAgaG9tZUJ1dHRvbi5pbm5lckhUTUwgPSAnSG9tZSdcbiAgICBtZW51QnV0dG9uLmlubmVySFRNTCA9ICdNZW51J1xuICAgIGNvbnRhY3RCdXR0b24uaW5uZXJIVE1MID0gJ0NvbnRhY3QnXG5cbiAgICBuYXZiYXIuYXBwZW5kQ2hpbGQoaG9tZUJ1dHRvbilcbiAgICBuYXZiYXIuYXBwZW5kQ2hpbGQobWVudUJ1dHRvbilcbiAgICBuYXZiYXIuYXBwZW5kQ2hpbGQoY29udGFjdEJ1dHRvbilcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChuYXZiYXIpXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmFwcGVuZENoaWxkKGNvbnRhaW5lcilcbiAgICBuYXZiYXJVcGRhdGUocGFnZXMpXG5cbiAgICBsZXQgbmF2YmFyQXJyYXkgPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25hdmJhckJ1dHRvbicpKVxuICAgIG5hdmJhckFycmF5LmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBwYWdlcy5mb3JFYWNoKHBhZ2UgPT4ge1xuICAgICAgICAgICAgICAgIGlmKHBhZ2UucGFnZT09YnV0dG9uLmlkKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhZ2UuYWN0aXZlID0gdHJ1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcGFnZS5hY3RpdmUgPSBmYWxzZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBuYXZiYXJVcGRhdGUocGFnZXMpXG4gICAgICAgICAgICBwYWdlcy5mb3JFYWNoKHBhZ2UgPT4ge1xuICAgICAgICAgICAgICAgIGlmKHBhZ2UuYWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhZ2UudmlldygpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICB9KVxufSlcbn1cblxuZXhwb3J0IHtuYXZiYXJWaWV3fSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL25hdmJhci5qc1wiKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=