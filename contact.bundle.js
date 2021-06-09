/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
var __webpack_exports__ = {};
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
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


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWVwYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWVwYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lcGFnZS8uL3NyYy9jb250YWN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxtREFBbUQsR0FBRyxRQUFRLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRTtBQUN4RSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7OztBQUdEIiwiZmlsZSI6ImNvbnRhY3QuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJcblxuZnVuY3Rpb24gY29udGFjdFZpZXcoKSB7XG4gICAgY29uc29sZS5sb2coJ2NvbnRhY3QgZW50ZXJlZCcpXG4gICAgbGV0IHN1YkNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiZWxvd1RoZU5hdmJhcicpXG4gICAgc3ViQ29udGFpbmVyLmlubmVySFRNTCA9ICcnXG4gICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxuICAgIHRpdGxlLmlubmVySFRNTCA9ICdDb250YWN0IFVzJ1xuXG4gICAgc3ViQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKVxuXG4gICAgbGV0IGFkZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBhZGRyZXNzLmlkID0gJ2FkZHJlc3MnXG4gICAgYWRkcmVzcy5pbm5lckhUTUwgPSAnNTMgQSwgS2F6aSBTYXllZCBTdHJlZXQsIENoaW5jaCBCdW5kZXIgPGJyPiBNdW1iYWksIE1haGFyYXNodHJhIDQwMDAwOSA8YnI+IFBoIG51bWJlcjogMDIyMjM0NDU1NzknXG4gICAgc3ViQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZHJlc3MpXG5cbiAgICBsZXQgbWFwU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgbWFwU2VjdGlvbi5pZCA9ICdtYXAnXG4gICAgc3ViQ29udGFpbmVyLmFwcGVuZENoaWxkKG1hcFNlY3Rpb24pXG4gICAgdmFyIG15bWFwID0gTC5tYXAoJ21hcCcpLnNldFZpZXcoWzUxLjUwNSwgLTAuMDldLCAxMyk7XG5cbiAgICBcbiAgICBMLnRpbGVMYXllcignaHR0cHM6Ly9hcGkubWFwYm94LmNvbS9zdHlsZXMvdjEve2lkfS90aWxlcy97en0ve3h9L3t5fT9hY2Nlc3NfdG9rZW49cGsuZXlKMUlqb2ljbVZoYkdGcmFHbHNZbUZpZFNJc0ltRWlPaUpqYTJzNWEySnFZbWd3ZVdnMU1uWndZakpqTW5OeGRIRjFJbjAua3l6ZXlPT3F1RkhXclctZjJCOXBDdycsIHtcbiAgICBhdHRyaWJ1dGlvbjogJ01hcCBkYXRhICZjb3B5OyA8YSBocmVmPVwiaHR0cHM6Ly93d3cub3BlbnN0cmVldG1hcC5vcmcvY29weXJpZ2h0XCI+T3BlblN0cmVldE1hcDwvYT4gY29udHJpYnV0b3JzLCBJbWFnZXJ5IMKpIDxhIGhyZWY9XCJodHRwczovL3d3dy5tYXBib3guY29tL1wiPk1hcGJveDwvYT4nLFxuICAgIG1heFpvb206IDE4LFxuICAgIGlkOiAnbWFwYm94L3N0cmVldHMtdjExJyxcbiAgICB0aWxlU2l6ZTogNTEyLFxuICAgIHpvb21PZmZzZXQ6IC0xLFxuICAgIGFjY2Vzc1Rva2VuOiAncGsuZXlKMUlqb2ljbVZoYkdGcmFHbHNZbUZpZFNJc0ltRWlPaUpqYTJzNWEySnFZbWd3ZVdnMU1uWndZakpqTW5OeGRIRjFJbjAua3l6ZXlPT3F1RkhXclctZjJCOXBDdydcbn0pLmFkZFRvKG15bWFwKTtcblxuXG59XG5cbmV4cG9ydCB7Y29udGFjdFZpZXd9Il0sInNvdXJjZVJvb3QiOiIifQ==