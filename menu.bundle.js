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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/menu.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWVwYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lcGFnZS8uL3NyYy9ob21lcGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWVwYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lcGFnZS8uL3NyYy9uYXZiYXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWVwYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWVwYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWVwYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZXBhZ2Uvd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLG1EQUFtRCxHQUFHLFFBQVEsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFO0FBQ3hFLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7O0FBR0Q7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEN3Qzs7QUFFeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLHlDQUFZO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFdUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCNEM7QUFDZjtBQUNBO0FBQ2Y7OztBQUdyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQiw2REFBbUI7QUFDckM7O0FBRUE7QUFDQSxjQUFjLHFEQUFZO0FBQzFCOztBQUVBO0FBQ0EsY0FBYyxxREFBWTtBQUMxQjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqRHlDO0FBQ1Y7QUFDTTs7OztBQUlyQztBQUNBLHdDQUF3QyxnQkFBZ0I7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLEtBQUs7QUFDTCxDQUFDO0FBQ0Q7Ozs7Ozs7O1VDM0VBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEVBQUU7V0FDRjtXQUNBO1dBQ0EsQ0FBQyxJOzs7OztXQ1BELHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGtDOzs7OztVQ2ZBO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6Im1lbnUuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbmZ1bmN0aW9uIGNvbnRhY3RWaWV3KCkge1xuICAgIGNvbnNvbGUubG9nKCdjb250YWN0IGVudGVyZWQnKVxuICAgIGxldCBzdWJDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmVsb3dUaGVOYXZiYXInKVxuICAgIHN1YkNvbnRhaW5lci5pbm5lckhUTUwgPSAnJ1xuICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcbiAgICB0aXRsZS5pbm5lckhUTUwgPSAnQ29udGFjdCBVcydcblxuICAgIHN1YkNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZSlcblxuICAgIGxldCBhZGRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgYWRkcmVzcy5pZCA9ICdhZGRyZXNzJ1xuICAgIGFkZHJlc3MuaW5uZXJIVE1MID0gJzUzIEEsIEthemkgU2F5ZWQgU3RyZWV0LCBDaGluY2ggQnVuZGVyIDxicj4gTXVtYmFpLCBNYWhhcmFzaHRyYSA0MDAwMDkgPGJyPiBQaCBudW1iZXI6IDAyMjIzNDQ1NTc5J1xuICAgIHN1YkNvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRyZXNzKVxuXG4gICAgbGV0IG1hcFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIG1hcFNlY3Rpb24uaWQgPSAnbWFwJ1xuICAgIHN1YkNvbnRhaW5lci5hcHBlbmRDaGlsZChtYXBTZWN0aW9uKVxuICAgIHZhciBteW1hcCA9IEwubWFwKCdtYXAnKS5zZXRWaWV3KFs1MS41MDUsIC0wLjA5XSwgMTMpO1xuXG4gICAgXG4gICAgTC50aWxlTGF5ZXIoJ2h0dHBzOi8vYXBpLm1hcGJveC5jb20vc3R5bGVzL3YxL3tpZH0vdGlsZXMve3p9L3t4fS97eX0/YWNjZXNzX3Rva2VuPXBrLmV5SjFJam9pY21WaGJHRnJhR2xzWW1GaWRTSXNJbUVpT2lKamEyczVhMkpxWW1nd2VXZzFNblp3WWpKak1uTnhkSEYxSW4wLmt5emV5T09xdUZIV3JXLWYyQjlwQ3cnLCB7XG4gICAgYXR0cmlidXRpb246ICdNYXAgZGF0YSAmY29weTsgPGEgaHJlZj1cImh0dHBzOi8vd3d3Lm9wZW5zdHJlZXRtYXAub3JnL2NvcHlyaWdodFwiPk9wZW5TdHJlZXRNYXA8L2E+IGNvbnRyaWJ1dG9ycywgSW1hZ2VyeSDCqSA8YSBocmVmPVwiaHR0cHM6Ly93d3cubWFwYm94LmNvbS9cIj5NYXBib3g8L2E+JyxcbiAgICBtYXhab29tOiAxOCxcbiAgICBpZDogJ21hcGJveC9zdHJlZXRzLXYxMScsXG4gICAgdGlsZVNpemU6IDUxMixcbiAgICB6b29tT2Zmc2V0OiAtMSxcbiAgICBhY2Nlc3NUb2tlbjogJ3BrLmV5SjFJam9pY21WaGJHRnJhR2xzWW1GaWRTSXNJbUVpT2lKamEyczVhMkpxWW1nd2VXZzFNblp3WWpKak1uTnhkSEYxSW4wLmt5emV5T09xdUZIV3JXLWYyQjlwQ3cnXG59KS5hZGRUbyhteW1hcCk7XG5cblxufVxuXG5leHBvcnQge2NvbnRhY3RWaWV3fSIsImltcG9ydCBraXRjaGVuSW1hZ2UgZnJvbSAnLi9raXRjaGVuLmpwZydcblxuZnVuY3Rpb24gaG9tZXBhZ2VWaWV3KCkge1xuICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmVsb3dUaGVOYXZiYXInKVxuICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSAnJ1xuICAgIGxldCBob21lcGFnZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgaG9tZXBhZ2VDb250YWluZXIuaWQgPSAnaG9tZXBhZ2UnXG4gICAgbGV0IHN0YXRlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIHN0YXRlbWVudC5pZCA9ICdzdGF0ZW1lbnQnXG4gICAgc3RhdGVtZW50LmlubmVySFRNTCA9ICdUbyBzZXJ2ZSBleHF1aXNpdGUgYW5kIGF1dGhlbnRpYyBGYWN0b3JpYW4gQ3Vpc2luZSByZXByZXNlbnRpbmcgb3VyIGN1bHR1cmVzIGFuZCBsZWdlbmRhcnkgY3VsaW5hcnkgZ2FzdHJvbm9teSB3aXRoIHR5cGljYWwgZGlzaGVzIHdpdGggYSBjcmVhdGl2ZSBhbmQgdGFsZW50ZWQgdG91Y2gsIGRlbGl2ZXJpbmcgYSBkaXN0aW5jdGx5IHVuaXF1ZSBkaW5pbmcgZXhwZXJpZW5jZSB0byBmdWxmaWxsIG91ciBndWVzdCBleHBlY3RhdGlvbnMuJ1xuICAgIGhvbWVwYWdlQ29udGFpbmVyLmFwcGVuZENoaWxkKHN0YXRlbWVudClcblxuICAgIGxldCBzdGF0ZW1lbnRBdXRob3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBzdGF0ZW1lbnRBdXRob3IuaWQgPSAgJ3N0YXRlbWVudEF1dGhvcidcbiAgICBzdGF0ZW1lbnRBdXRob3IuaW5uZXJIVE1MID0gJyAtIE1hbmlrYW5kYW4gS3VtYXJhc3dhbWksIEZvdW5kZXIgYW5kIENFTydcbiAgICBob21lcGFnZUNvbnRhaW5lci5hcHBlbmRDaGlsZChzdGF0ZW1lbnRBdXRob3IpXG5cbiAgICBsZXQgaW1hZ2UgPSBuZXcgSW1hZ2UoKVxuICAgIGltYWdlLnNyYyA9IGtpdGNoZW5JbWFnZVxuICAgIGltYWdlLnN0eWxlLndpZHRoID0gJzEwMCUnXG4gICAgaW1hZ2Uuc3R5bGUubWFyZ2luVG9wID0gJzUwcHgnXG4gICAgaW1hZ2Uuc3R5bGUubWFyZ2luQm90dG9tID0gJzIwMHB4J1xuICAgIGhvbWVwYWdlQ29udGFpbmVyLmFwcGVuZENoaWxkKGltYWdlKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChob21lcGFnZUNvbnRhaW5lcilcbn1cblxuZXhwb3J0IHsgaG9tZXBhZ2VWaWV3IH1cbiIsIlxuaW1wb3J0IGJhbmFuYVBvcnJpZGdlSW1hZ2UgZnJvbSAnLi9tZW51LWltYWdlcy9iYW5hbmEtcG9ycmlkZ2UuanBnJ1xuaW1wb3J0IGNoaWNrZW5JbWFnZSBmcm9tICcuL21lbnUtaW1hZ2VzL2NoaWNrZW4uanBnJ1xuaW1wb3J0IGtoaWNoZGlJbWFnZSBmcm9tICcuL21lbnUtaW1hZ2VzL2toaWNoZGkuanBnJ1xuaW1wb3J0IHsgbmF2YmFyVmlldyB9IGZyb20gJy4vbmF2YmFyJ1xuXG5cbmNvbnN0IGl0ZW1GYWN0b3J5ID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJpY2UsIGltYWdlKSA9PiB7XG4gICAgbGV0IGl0ZW1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG4gICAgaXRlbUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdpdGVtQ29udGFpbmVyJylcbiAgICBsZXQgaXRlbVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxuICAgIGl0ZW1UaXRsZS5jbGFzc0xpc3QuYWRkKCdpdGVtVGl0bGUnKVxuICAgIGl0ZW1UaXRsZS5pbm5lckhUTUwgPSB0aXRsZTtcbiAgICBsZXQgaXRlbURlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgaXRlbURlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ2l0ZW1EZXNjcmlwdGlvbicpXG4gICAgaXRlbURlc2NyaXB0aW9uLmlubmVySFRNTCA9IGRlc2NyaXB0aW9uXG4gICAgbGV0IGl0ZW1QcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIGl0ZW1QcmljZS5jbGFzc0xpc3QuYWRkKCdpdGVtUHJpY2UnKVxuICAgIGl0ZW1QcmljZS5pbm5lckhUTUwgPSBwcmljZVxuICAgIGl0ZW1Db250YWluZXIuYXBwZW5kQ2hpbGQoaXRlbVRpdGxlKVxuICAgIGl0ZW1Db250YWluZXIuYXBwZW5kQ2hpbGQoaXRlbURlc2NyaXB0aW9uKVxuICAgIGl0ZW1Db250YWluZXIuYXBwZW5kQ2hpbGQoaXRlbVByaWNlKVxuICAgIGxldCBpbWFnZU9iamVjdCA9IG5ldyBJbWFnZSgpO1xuICAgIGltYWdlT2JqZWN0LnNyYyA9IGltYWdlO1xuICAgIGltYWdlT2JqZWN0LmNsYXNzTGlzdC5hZGQoJ2l0ZW1JbWFnZScpXG4gICAgaXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZChpbWFnZU9iamVjdClcbiAgICByZXR1cm4gaXRlbUNvbnRhaW5lclxufVxuXG5mdW5jdGlvbiBtZW51VmlldygpIHtcbiAgICBsZXQgc3ViQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JlbG93VGhlTmF2YmFyJylcbiAgICBzdWJDb250YWluZXIuaW5uZXJIVE1MID0gJydcblxuICAgIGxldCBtZW51TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJylcbiAgICBtZW51TGlzdC5zdHlsZS5saXN0U3R5bGUgPSAnbm9uZSdcblxuICAgIGxldCBmaXJzdEl0ZW0gPSBpdGVtRmFjdG9yeSgnQmFuYW5hIFBvcnJpZGdlJyxcbiAgICAgJ1l1bW15IGFuZCBudXRyaXRpb3VzIHBvcnJpZGdlIG1hZGUgZnJvbSBhIHJlY2lwZSBpbnNwaXJlZCBieSB0cmFkaW9uYWwgaGltYWxheWFuIHdhdGVyZmFsbCBjYWZlcy4gUGVyZmVjdCBmb3IgYSBoZWFsdGh5IGFuZCBxdWljayBicmVha2Zhc3QgdG8gZ2l2ZSB5b3UgdGhhdCBleHRyYSBib29zdCBvZiBlbmVyZ3kgd2hpbGUgcmVtYWluaW5nIGxpZ2h0IG9uIHlvdXIgc3RvbWFjaC4nXG4gICAgICAsICckMjAuMDAnLCBiYW5hbmFQb3JyaWRnZUltYWdlKVxuICAgIG1lbnVMaXN0LmFwcGVuZENoaWxkKGZpcnN0SXRlbSlcblxuICAgIGxldCBzZWNvbmRJdGVtID0gaXRlbUZhY3RvcnkoJ0NoaWNrZW4gYW5kIEJlYW5zJywgXCJBIGNsYXNzaWMgbHVuY2ggcmVjaXBlIHdpdGggc2xvdyByb2FzdGVkIGNoaWNrZW4gYW5kIHNhdXRlZWQgYmVhbnMgY29va2VkIGluIG91ciBzcGVjaWFsIGNoZWYncyBzYXVjZS4gU2VydmVkIHdpdGggYSBoZWxwaW5nIG9mIG1hc2hlZCBwb3RhdG9lcy5cIixcbiAgICAnJDMwLjAwJywgY2hpY2tlbkltYWdlKVxuICAgIG1lbnVMaXN0LmFwcGVuZENoaWxkKHNlY29uZEl0ZW0pXG5cbiAgICBsZXQgdGhpcmRJdGVtID0gaXRlbUZhY3RvcnkoJ0ZhY3RvcmkgU3BlY2lhbCBLaGljaGRpJywgJ0EgZGlzaCBpbnNwaXJlZCBmcm9tIGEgZmF2b3VyaXRlIG9mIG91ciBiZWxvdmVkIGZhY3RvcmlhbnMsIHNsb3cgY29va2VkIGRhbCBhbmQgcmljZSBtaXggZmxhdm91cmVkIHdpdGggdGhlIHN1YnRsZSB5ZXQgc2F2b3VyeSBzcGljZXMgb2YgdGhlIHN1YmNvbnRpbmVudC4nLFxuICAgICckMjAuMDAnLCBraGljaGRpSW1hZ2UpXG4gICAgbWVudUxpc3QuYXBwZW5kQ2hpbGQodGhpcmRJdGVtKVxuICAgIHN1YkNvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51TGlzdClcbn1cblxuZXhwb3J0IHttZW51Vmlld30iLCJpbXBvcnQgeyBob21lcGFnZVZpZXcgfSBmcm9tIFwiLi9ob21lcGFnZVwiXG5pbXBvcnQge21lbnVWaWV3fSBmcm9tICcuL21lbnUnXG5pbXBvcnQge2NvbnRhY3RWaWV3fSBmcm9tICcuL2NvbnRhY3QnXG5cblxuXG5mdW5jdGlvbiBuYXZiYXJVcGRhdGUocGFnZXMpIHtcbiAgICBsZXQgYWN0aXZlUGFnZSA9IHBhZ2VzLmZpbHRlcihlID0+IHtyZXR1cm4gZS5hY3RpdmV9KVxuICAgIGNvbnNvbGUubG9nKGFjdGl2ZVBhZ2UpXG4gICAgcGFnZXMuZm9yRWFjaChwYWdlID0+IHtcbiAgICAgICAgaWYocGFnZS5hY3RpdmUpIHtcbiAgICAgICAgICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwYWdlLnBhZ2UpO1xuICAgICAgICAgICAgYnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIHBhZ2UudWwpXG4gICAgICAgICAgICBidXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIHBhZ2UucmVtb3ZlVUwpXG4gICAgICAgICAgICBidXR0b24uc3R5bGUuYm9yZGVyQm90dG9tU3R5bGUgPSAnc29saWQnXG4gICAgICAgICAgICBidXR0b24uc3R5bGUuYm9yZGVyQm90dG9tQ29sb3IgPSAnIzI3NGY3MidcbiAgICAgICAgfVxuXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHBhZ2UucGFnZSk7XG4gICAgICAgICAgICBidXR0b24uc3R5bGUuYm9yZGVyQm90dG9tU3R5bGUgPSAnbm9uZSdcbiAgICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCBwYWdlLnVsKVxuICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBwYWdlLnJlbW92ZVVMKVxuICAgICAgICB9XG4gICAgfSlcbn1cblxuZnVuY3Rpb24gbmF2YmFyVmlldyhjb250YWluZXIsIHBhZ2VzKSB7XG4gICAgbGV0IG5hdmJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgbmF2YmFyLmlkID0gJ25hdmJhcidcblxuICAgIGxldCBob21lQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgbGV0IG1lbnVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBsZXQgY29udGFjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuXG4gICAgaG9tZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCduYXZiYXJCdXR0b24nKVxuICAgIG1lbnVCdXR0b24uY2xhc3NMaXN0LmFkZCgnbmF2YmFyQnV0dG9uJylcbiAgICBjb250YWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ25hdmJhckJ1dHRvbicpXG5cbiAgICBob21lQnV0dG9uLmlkID0gJ0hvbWUnXG4gICAgbWVudUJ1dHRvbi5pZCA9ICdNZW51J1xuICAgIGNvbnRhY3RCdXR0b24uaWQgPSAnQ29udGFjdCdcblxuICAgIGNvbnNvbGUubG9nKCdob3dpZGUnKVxuICAgIGhvbWVCdXR0b24uaW5uZXJIVE1MID0gJ0hvbWUnXG4gICAgbWVudUJ1dHRvbi5pbm5lckhUTUwgPSAnTWVudSdcbiAgICBjb250YWN0QnV0dG9uLmlubmVySFRNTCA9ICdDb250YWN0J1xuXG4gICAgbmF2YmFyLmFwcGVuZENoaWxkKGhvbWVCdXR0b24pXG4gICAgbmF2YmFyLmFwcGVuZENoaWxkKG1lbnVCdXR0b24pXG4gICAgbmF2YmFyLmFwcGVuZENoaWxkKGNvbnRhY3RCdXR0b24pXG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobmF2YmFyKVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5hcHBlbmRDaGlsZChjb250YWluZXIpXG4gICAgbmF2YmFyVXBkYXRlKHBhZ2VzKVxuXG4gICAgbGV0IG5hdmJhckFycmF5ID0gQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduYXZiYXJCdXR0b24nKSlcbiAgICBuYXZiYXJBcnJheS5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgcGFnZXMuZm9yRWFjaChwYWdlID0+IHtcbiAgICAgICAgICAgICAgICBpZihwYWdlLnBhZ2U9PWJ1dHRvbi5pZCkge1xuICAgICAgICAgICAgICAgICAgICBwYWdlLmFjdGl2ZSA9IHRydWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHBhZ2UuYWN0aXZlID0gZmFsc2VcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgbmF2YmFyVXBkYXRlKHBhZ2VzKVxuICAgICAgICAgICAgcGFnZXMuZm9yRWFjaChwYWdlID0+IHtcbiAgICAgICAgICAgICAgICBpZihwYWdlLmFjdGl2ZSkge1xuICAgICAgICAgICAgICAgICAgICBwYWdlLnZpZXcoKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgfSlcbn0pXG59XG5cbmV4cG9ydCB7bmF2YmFyVmlld30iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9tZW51LmpzXCIpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==