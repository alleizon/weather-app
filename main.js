/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/DOM.js":
/*!***********************!*\
  !*** ./src/js/DOM.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_icons_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/icons.json */ "./src/assets/icons.json");


const DOM = (() => {
  const currentIcon = (weather) => {
    console.log(weather);
  };

  const updateCurrent = (obj) => {
    console.log(obj);
    currentIcon(obj.weather);
  };

  return { updateCurrent };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DOM);


/***/ }),

/***/ "./src/js/processors.js":
/*!******************************!*\
  !*** ./src/js/processors.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Process = (() => {
  const currentWeather = (obj) => {
    const { name } = obj;
    const { temp } = obj.main;
    const weather = obj.weather[0];
    return { name, temp, weather };
  };

  return { currentWeather };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Process);


/***/ }),

/***/ "./src/js/requestAPI.js":
/*!******************************!*\
  !*** ./src/js/requestAPI.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const API = (() => {
  const API_KEY = "0899300cbaa38468fa1729a1906d7b78";

  const APICall = async (url) => {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`${response.status}`);
      const obj = await response.json();
      return obj;
    } catch (err) {
      return console.error(err);
    }
  };

  const currentCall = (city, unit) => {
    const CURRENT_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${unit}`;
    return APICall(CURRENT_URL);
  };

  const forecastCall = (city, unit) => {
    const FORECAST_URL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=${unit}`;
    return APICall(FORECAST_URL);
  };

  return { currentCall, forecastCall };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (API);


/***/ }),

/***/ "./src/assets/icons.json":
/*!*******************************!*\
  !*** ./src/assets/icons.json ***!
  \*******************************/
/***/ ((module) => {

module.exports = JSON.parse('{"200":{"label":"thunderstorm with light rain","icon":"storm-showers"},"201":{"label":"thunderstorm with rain","icon":"storm-showers"},"202":{"label":"thunderstorm with heavy rain","icon":"storm-showers"},"210":{"label":"light thunderstorm","icon":"storm-showers"},"211":{"label":"thunderstorm","icon":"thunderstorm"},"212":{"label":"heavy thunderstorm","icon":"thunderstorm"},"221":{"label":"ragged thunderstorm","icon":"thunderstorm"},"230":{"label":"thunderstorm with light drizzle","icon":"storm-showers"},"231":{"label":"thunderstorm with drizzle","icon":"storm-showers"},"232":{"label":"thunderstorm with heavy drizzle","icon":"storm-showers"},"300":{"label":"light intensity drizzle","icon":"sprinkle"},"301":{"label":"drizzle","icon":"sprinkle"},"302":{"label":"heavy intensity drizzle","icon":"sprinkle"},"310":{"label":"light intensity drizzle rain","icon":"sprinkle"},"311":{"label":"drizzle rain","icon":"sprinkle"},"312":{"label":"heavy intensity drizzle rain","icon":"sprinkle"},"313":{"label":"shower rain and drizzle","icon":"sprinkle"},"314":{"label":"heavy shower rain and drizzle","icon":"sprinkle"},"321":{"label":"shower drizzle","icon":"sprinkle"},"500":{"label":"light rain","icon":"rain"},"501":{"label":"moderate rain","icon":"rain"},"502":{"label":"heavy intensity rain","icon":"rain"},"503":{"label":"very heavy rain","icon":"rain"},"504":{"label":"extreme rain","icon":"rain"},"511":{"label":"freezing rain","icon":"rain-mix"},"520":{"label":"light intensity shower rain","icon":"showers"},"521":{"label":"shower rain","icon":"showers"},"522":{"label":"heavy intensity shower rain","icon":"showers"},"531":{"label":"ragged shower rain","icon":"showers"},"600":{"label":"light snow","icon":"snow"},"601":{"label":"snow","icon":"snow"},"602":{"label":"heavy snow","icon":"snow"},"611":{"label":"sleet","icon":"sleet"},"612":{"label":"shower sleet","icon":"sleet"},"615":{"label":"light rain and snow","icon":"rain-mix"},"616":{"label":"rain and snow","icon":"rain-mix"},"620":{"label":"light shower snow","icon":"rain-mix"},"621":{"label":"shower snow","icon":"rain-mix"},"622":{"label":"heavy shower snow","icon":"rain-mix"},"701":{"label":"mist","icon":"sprinkle"},"711":{"label":"smoke","icon":"smoke"},"721":{"label":"haze","icon":"day-haze"},"731":{"label":"sand, dust whirls","icon":"cloudy-gusts"},"741":{"label":"fog","icon":"fog"},"751":{"label":"sand","icon":"cloudy-gusts"},"761":{"label":"dust","icon":"dust"},"762":{"label":"volcanic ash","icon":"smog"},"771":{"label":"squalls","icon":"day-windy"},"781":{"label":"tornado","icon":"tornado"},"800":{"label":"clear sky","icon":"sunny"},"801":{"label":"few clouds","icon":"cloudy"},"802":{"label":"scattered clouds","icon":"cloudy"},"803":{"label":"broken clouds","icon":"cloudy"},"804":{"label":"overcast clouds","icon":"cloudy"},"900":{"label":"tornado","icon":"tornado"},"901":{"label":"tropical storm","icon":"hurricane"},"902":{"label":"hurricane","icon":"hurricane"},"903":{"label":"cold","icon":"snowflake-cold"},"904":{"label":"hot","icon":"hot"},"905":{"label":"windy","icon":"windy"},"906":{"label":"hail","icon":"hail"},"951":{"label":"calm","icon":"sunny"},"952":{"label":"light breeze","icon":"cloudy-gusts"},"953":{"label":"gentle breeze","icon":"cloudy-gusts"},"954":{"label":"moderate breeze","icon":"cloudy-gusts"},"955":{"label":"fresh breeze","icon":"cloudy-gusts"},"956":{"label":"strong breeze","icon":"cloudy-gusts"},"957":{"label":"high wind, near gale","icon":"cloudy-gusts"},"958":{"label":"gale","icon":"cloudy-gusts"},"959":{"label":"severe gale","icon":"cloudy-gusts"},"960":{"label":"storm","icon":"thunderstorm"},"961":{"label":"violent storm","icon":"thunderstorm"},"962":{"label":"hurricane","icon":"cloudy-gusts"}}');

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _requestAPI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./requestAPI */ "./src/js/requestAPI.js");
/* harmony import */ var _processors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./processors */ "./src/js/processors.js");
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DOM */ "./src/js/DOM.js");




let city = "Bucharest";
let unit = "metric";

_requestAPI__WEBPACK_IMPORTED_MODULE_0__["default"].currentCall(city, unit).then((result) => {
  const obj = _processors__WEBPACK_IMPORTED_MODULE_1__["default"].currentWeather(result);
  _DOM__WEBPACK_IMPORTED_MODULE_2__["default"].updateCurrent(obj);
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBZ0Q7O0FBRWhEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWCxDQUFDOztBQUVELGlFQUFlLEdBQUcsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDZm5CO0FBQ0E7QUFDQSxZQUFZLE9BQU87QUFDbkIsWUFBWSxPQUFPO0FBQ25CO0FBQ0EsYUFBYTtBQUNiOztBQUVBLFdBQVc7QUFDWCxDQUFDOztBQUVELGlFQUFlLE9BQU8sRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDWHZCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLGdCQUFnQjtBQUMzRDtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDZFQUE2RSxLQUFLLFNBQVMsUUFBUSxTQUFTLEtBQUs7QUFDakg7QUFDQTs7QUFFQTtBQUNBLCtFQUErRSxLQUFLLFNBQVMsUUFBUSxTQUFTLEtBQUs7QUFDbkg7QUFDQTs7QUFFQSxXQUFXO0FBQ1gsQ0FBQzs7QUFFRCxpRUFBZSxHQUFHLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDM0JuQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOK0I7QUFDSTtBQUNYOztBQUV4QjtBQUNBOztBQUVBLCtEQUFlO0FBQ2YsY0FBYyxrRUFBc0I7QUFDcEMsRUFBRSwwREFBaUI7QUFDbkIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2pzL0RPTS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9qcy9wcm9jZXNzb3JzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2pzL3JlcXVlc3RBUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9qcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgd2VhdGhlckljb25zIGZyb20gXCIuLi9hc3NldHMvaWNvbnMuanNvblwiO1xuXG5jb25zdCBET00gPSAoKCkgPT4ge1xuICBjb25zdCBjdXJyZW50SWNvbiA9ICh3ZWF0aGVyKSA9PiB7XG4gICAgY29uc29sZS5sb2cod2VhdGhlcik7XG4gIH07XG5cbiAgY29uc3QgdXBkYXRlQ3VycmVudCA9IChvYmopID0+IHtcbiAgICBjb25zb2xlLmxvZyhvYmopO1xuICAgIGN1cnJlbnRJY29uKG9iai53ZWF0aGVyKTtcbiAgfTtcblxuICByZXR1cm4geyB1cGRhdGVDdXJyZW50IH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBET007XG4iLCJjb25zdCBQcm9jZXNzID0gKCgpID0+IHtcbiAgY29uc3QgY3VycmVudFdlYXRoZXIgPSAob2JqKSA9PiB7XG4gICAgY29uc3QgeyBuYW1lIH0gPSBvYmo7XG4gICAgY29uc3QgeyB0ZW1wIH0gPSBvYmoubWFpbjtcbiAgICBjb25zdCB3ZWF0aGVyID0gb2JqLndlYXRoZXJbMF07XG4gICAgcmV0dXJuIHsgbmFtZSwgdGVtcCwgd2VhdGhlciB9O1xuICB9O1xuXG4gIHJldHVybiB7IGN1cnJlbnRXZWF0aGVyIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBQcm9jZXNzO1xuIiwiY29uc3QgQVBJID0gKCgpID0+IHtcbiAgY29uc3QgQVBJX0tFWSA9IFwiMDg5OTMwMGNiYWEzODQ2OGZhMTcyOWExOTA2ZDdiNzhcIjtcblxuICBjb25zdCBBUElDYWxsID0gYXN5bmMgKHVybCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XG4gICAgICBpZiAoIXJlc3BvbnNlLm9rKSB0aHJvdyBuZXcgRXJyb3IoYCR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuICAgICAgY29uc3Qgb2JqID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgcmV0dXJuIG9iajtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiBjb25zb2xlLmVycm9yKGVycik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGN1cnJlbnRDYWxsID0gKGNpdHksIHVuaXQpID0+IHtcbiAgICBjb25zdCBDVVJSRU5UX1VSTCA9IGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7Y2l0eX0mYXBwaWQ9JHtBUElfS0VZfSZ1bml0cz0ke3VuaXR9YDtcbiAgICByZXR1cm4gQVBJQ2FsbChDVVJSRU5UX1VSTCk7XG4gIH07XG5cbiAgY29uc3QgZm9yZWNhc3RDYWxsID0gKGNpdHksIHVuaXQpID0+IHtcbiAgICBjb25zdCBGT1JFQ0FTVF9VUkwgPSBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L2ZvcmVjYXN0P3E9JHtjaXR5fSZhcHBpZD0ke0FQSV9LRVl9JnVuaXRzPSR7dW5pdH1gO1xuICAgIHJldHVybiBBUElDYWxsKEZPUkVDQVNUX1VSTCk7XG4gIH07XG5cbiAgcmV0dXJuIHsgY3VycmVudENhbGwsIGZvcmVjYXN0Q2FsbCB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgQVBJO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgQVBJIGZyb20gXCIuL3JlcXVlc3RBUElcIjtcbmltcG9ydCBQcm9jZXNzIGZyb20gXCIuL3Byb2Nlc3NvcnNcIjtcbmltcG9ydCBET00gZnJvbSBcIi4vRE9NXCI7XG5cbmxldCBjaXR5ID0gXCJCdWNoYXJlc3RcIjtcbmxldCB1bml0ID0gXCJtZXRyaWNcIjtcblxuQVBJLmN1cnJlbnRDYWxsKGNpdHksIHVuaXQpLnRoZW4oKHJlc3VsdCkgPT4ge1xuICBjb25zdCBvYmogPSBQcm9jZXNzLmN1cnJlbnRXZWF0aGVyKHJlc3VsdCk7XG4gIERPTS51cGRhdGVDdXJyZW50KG9iaik7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==