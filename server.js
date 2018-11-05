/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		5: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./" + chunkId + ".server.js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.resolve();
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// uncatched error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using System.import().catch()
/******/ 		});
/******/ 	};
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_loadable__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_loadable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_loadable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Loading__ = __webpack_require__(26);



var routes = [{
  path: '/',
  exact: true,
  component: __WEBPACK_IMPORTED_MODULE_1_react_loadable___default()({
    loader: function loader() {
      return __webpack_require__.e/* import() */(4).then(__webpack_require__.bind(null, 27));
    },
    loading: __WEBPACK_IMPORTED_MODULE_2__components_Loading__["a" /* default */]
  })
}, {
  path: '/languages',
  exact: true,
  component: __WEBPACK_IMPORTED_MODULE_1_react_loadable___default()({
    loader: function loader() {
      return __webpack_require__.e/* import() */(3).then(__webpack_require__.bind(null, 28));
    },
    loading: __WEBPACK_IMPORTED_MODULE_2__components_Loading__["a" /* default */]
  })
}, {
  path: '/languages/:id',
  component: __WEBPACK_IMPORTED_MODULE_1_react_loadable___default()({
    loader: function loader() {
      return __webpack_require__.e/* import() */(1).then(__webpack_require__.bind(null, 29));
    },
    loading: __WEBPACK_IMPORTED_MODULE_2__components_Loading__["a" /* default */]
  }),
  loadData: function loadData() {
    var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    return Object(__WEBPACK_IMPORTED_MODULE_0__api__["a" /* fetchPopularRepos */])(path.split('/').pop());
  }
}, {
  path: '/users',
  exact: true,
  component: __WEBPACK_IMPORTED_MODULE_1_react_loadable___default()({
    loader: function loader() {
      return __webpack_require__.e/* import() */(2).then(__webpack_require__.bind(null, 30));
    },
    loading: __WEBPACK_IMPORTED_MODULE_2__components_Loading__["a" /* default */]
  })
}, {
  path: '/users/:id',
  component: __WEBPACK_IMPORTED_MODULE_1_react_loadable___default()({
    loader: function loader() {
      return __webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, 31));
    },
    loading: __WEBPACK_IMPORTED_MODULE_2__components_Loading__["a" /* default */]
  }),
  loadData: function loadData() {
    var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    return Object(__WEBPACK_IMPORTED_MODULE_0__api__["b" /* fetchUser */])(path.split('/').pop());
  }
}];
/* harmony default export */ __webpack_exports__["a"] = (routes);

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-loadable");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = fetchPopularRepos;
/* harmony export (immutable) */ __webpack_exports__["b"] = fetchUser;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch__);

function fetchPopularRepos() {
  var language = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'all';
  var encodedURI = encodeURI("https://api.github.com/search/repositories?q=stars:>1+language:".concat(language, "&sort=stars&order=desc&type=Repositories"));
  return __WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch___default()(encodedURI).then(function (data) {
    return data.json();
  }).then(function (repos) {
    return repos.items;
  }).catch(function (err) {
    console.warn(err);
    return null;
  });
}
function fetchUser() {
  var user = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ' ';
  var encodedURI = encodeURI("https://api.github.com/users/".concat(user));
  return __WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch___default()(encodedURI).then(function (data) {
    return data.json();
  }).catch(function (err) {
    console.warn(err);
    return null;
  });
}

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_dom__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom_server__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom_server___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom_server__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_serialize_javascript__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_serialize_javascript___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_serialize_javascript__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_reducers__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_redux__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_routes__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_loadable__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_loadable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_loadable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_redux__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_App__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_express__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_cors__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_cors___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_cors__);












var app = __WEBPACK_IMPORTED_MODULE_9_express___default()();
var port = 3000;
app.use(__WEBPACK_IMPORTED_MODULE_11_cors___default()());
app.use(__WEBPACK_IMPORTED_MODULE_9_express___default.a.static('public'));
app.get('*', function (req, res, next) {
  var activeRoute = __WEBPACK_IMPORTED_MODULE_5__shared_routes__["a" /* default */].find(function (route) {
    return Object(__WEBPACK_IMPORTED_MODULE_0_react_router_dom__["matchPath"])(req.url, route);
  }) || {};
  var promise = activeRoute.loadData ? activeRoute.loadData(req.path) : Promise.resolve();
  promise.then(function (data) {
    var store = Object(__WEBPACK_IMPORTED_MODULE_7_redux__["createStore"])(__WEBPACK_IMPORTED_MODULE_3__shared_reducers__["a" /* default */]);
    var preloadedState = store.getState();
    var context = {
      data: data
    };
    var markup = Object(__WEBPACK_IMPORTED_MODULE_1_react_dom_server__["renderToString"])(__WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_redux__["Provider"], {
      store: store
    }, __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react_router_dom__["StaticRouter"], {
      location: req.url,
      context: context
    }, __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__shared_App__["a" /* default */], {
      data: data
    }))));
    res.send("\n                <!doctype html>\n                <html>\n                \n                  <head>\n                    <title>My app</title>\n                    <script src=\"/bundle.js\" defer></script>\n                    <script> window.__INITIAL_DATA__ = ".concat(__WEBPACK_IMPORTED_MODULE_2_serialize_javascript___default()(data), " </script>\n                    <script> window.__PRELOADED_STATE__ = ").concat(__WEBPACK_IMPORTED_MODULE_2_serialize_javascript___default()(preloadedState), " </script> \n                  </head>\n                \n                  <body>\n                    <div id=\"app\"> ").concat(markup, " </div>\n                  </body>\n                  \n                </html>\n            "));
  }).catch(next);
});
__WEBPACK_IMPORTED_MODULE_6_react_loadable___default.a.preloadAll().then(function () {
  app.listen(port, function () {
    console.log("Server is listening on port: ".concat(port));
  });
});

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),
/* 10 */,
/* 11 */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return App; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_config__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_router_config__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__routes__ = __webpack_require__(1);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var App =
/*#__PURE__*/
function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, _getPrototypeOf(App).apply(this, arguments));
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", null, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h1", null, "This is App root page."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("hr", null), Object(__WEBPACK_IMPORTED_MODULE_0_react_router_config__["renderRoutes"])(__WEBPACK_IMPORTED_MODULE_2__routes__["a" /* default */]));
    }
  }]);

  return App;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);



/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("react-router-config");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__counterReducer__ = __webpack_require__(17);


/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0_redux__["combineReducers"])({
  counter: __WEBPACK_IMPORTED_MODULE_1__counterReducer__["a" /* default */]
}));

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = dataReducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(25);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


function dataReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* ADD_USER */]:
      return Object.assign({}, state, _defineProperty({}, action.payload, 0));

    case __WEBPACK_IMPORTED_MODULE_0__constants__["c" /* INCREMENT */]:
      return Object.assign({}, state, _defineProperty({}, action.payload, ++state[action.payload]));

    case __WEBPACK_IMPORTED_MODULE_0__constants__["b" /* DECREMENT */]:
      return Object.assign({}, state, _defineProperty({}, action.payload, --state[action.payload]));

    default:
      return state;
  }
}

/***/ }),
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return INCREMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DECREMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_USER; });
var INCREMENT = "INCREMENT";
var DECREMENT = "DECREMENT";
var ADD_USER = "ADD_USER";

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Loading;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);

function Loading(props) {
  if (props.error) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", null, " Error! "), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
      onClick: props.retry
    }, " Retry "));
  } else if (props.pastDelay) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", null, "Loading..."));
  } else {
    return null;
  }
}

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNGYzNjA3NmNkNWU5Y2VlYzgyOTciLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL3JvdXRlcy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1sb2FkYWJsZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtcm91dGVyLWRvbVwiIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvYXBpLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHByZXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaXNvbW9ycGhpYy1mZXRjaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1kb20vc2VydmVyXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9BcHAuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtcm91dGVyLWNvbmZpZ1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInNlcmlhbGl6ZS1qYXZhc2NyaXB0XCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9yZWR1Y2Vycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL3JlZHVjZXJzL2NvdW50ZXJSZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvY29uc3RhbnRzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvY29tcG9uZW50cy9Mb2FkaW5nLmpzIl0sIm5hbWVzIjpbInJvdXRlcyIsInBhdGgiLCJleGFjdCIsImNvbXBvbmVudCIsIkxvYWRhYmxlIiwibG9hZGVyIiwibG9hZGluZyIsIkxvYWRpbmciLCJsb2FkRGF0YSIsImZldGNoUG9wdWxhclJlcG9zIiwic3BsaXQiLCJwb3AiLCJmZXRjaFVzZXIiLCJsYW5ndWFnZSIsImVuY29kZWRVUkkiLCJlbmNvZGVVUkkiLCJmZXRjaCIsInRoZW4iLCJkYXRhIiwianNvbiIsInJlcG9zIiwiaXRlbXMiLCJjYXRjaCIsImVyciIsImNvbnNvbGUiLCJ3YXJuIiwidXNlciIsImFwcCIsImV4cHJlc3MiLCJwb3J0IiwidXNlIiwiY29ycyIsInN0YXRpYyIsImdldCIsInJlcSIsInJlcyIsIm5leHQiLCJhY3RpdmVSb3V0ZSIsImZpbmQiLCJyb3V0ZSIsIm1hdGNoUGF0aCIsInVybCIsInByb21pc2UiLCJQcm9taXNlIiwicmVzb2x2ZSIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJyZWR1Y2VycyIsInByZWxvYWRlZFN0YXRlIiwiZ2V0U3RhdGUiLCJjb250ZXh0IiwibWFya3VwIiwicmVuZGVyVG9TdHJpbmciLCJzZW5kIiwic2VyaWFsaXplIiwicHJlbG9hZEFsbCIsImxpc3RlbiIsImxvZyIsIkFwcCIsInJlbmRlclJvdXRlcyIsIkNvbXBvbmVudCIsImNvbWJpbmVSZWR1Y2VycyIsImNvdW50ZXIiLCJkYXRhUmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsIkFERF9VU0VSIiwiT2JqZWN0IiwiYXNzaWduIiwicGF5bG9hZCIsIklOQ1JFTUVOVCIsIkRFQ1JFTUVOVCIsInByb3BzIiwiZXJyb3IiLCJyZXRyeSIsInBhc3REZWxheSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBa0IscUJB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QUFRLEdBQUcsVUFBakIsQzs7Ozs7OztBQ0ZQO0FBQUE7QUFBQTtBQUFBO0FBRWUsU0FBUzVELE9BQVQsQ0FBaUJrRSxLQUFqQixFQUF3QjtBQUNuQyxNQUFJQSxLQUFLLENBQUNDLEtBQVYsRUFBaUI7QUFDYixXQUNJLHlFQUNJLGtGQURKLEVBRUk7QUFBUSxhQUFPLEVBQUdELEtBQUssQ0FBQ0U7QUFBeEIsaUJBRkosQ0FESjtBQU1ILEdBUEQsTUFPTyxJQUFJRixLQUFLLENBQUNHLFNBQVYsRUFBcUI7QUFDeEIsV0FDSSx5RUFDSSxvRkFESixDQURKO0FBS0gsR0FOTSxNQU1BO0FBQ0gsV0FBTyxJQUFQO0FBQ0g7QUFDSixDIiwiZmlsZSI6InNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgY2h1bmtzXG4gXHQvLyBcIjBcIiBtZWFucyBcImFscmVhZHkgbG9hZGVkXCJcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdDU6IDBcbiBcdH07XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuIFx0Ly8gVGhpcyBmaWxlIGNvbnRhaW5zIG9ubHkgdGhlIGVudHJ5IGNodW5rLlxuIFx0Ly8gVGhlIGNodW5rIGxvYWRpbmcgZnVuY3Rpb24gZm9yIGFkZGl0aW9uYWwgY2h1bmtzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmUgPSBmdW5jdGlvbiByZXF1aXJlRW5zdXJlKGNodW5rSWQpIHtcbiBcdFx0Ly8gXCIwXCIgaXMgdGhlIHNpZ25hbCBmb3IgXCJhbHJlYWR5IGxvYWRlZFwiXG4gXHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSAhPT0gMCkge1xuIFx0XHRcdHZhciBjaHVuayA9IHJlcXVpcmUoXCIuL1wiICsgY2h1bmtJZCArIFwiLnNlcnZlci5qc1wiKTtcbiBcdFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBjaHVuay5tb2R1bGVzLCBjaHVua0lkcyA9IGNodW5rLmlkcztcbiBcdFx0XHRmb3IodmFyIG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKVxuIFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRzW2ldXSA9IDA7XG4gXHRcdH1cbiBcdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuIFx0fTtcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cbiBcdC8vIHVuY2F0Y2hlZCBlcnJvciBoYW5kbGVyIGZvciB3ZWJwYWNrIHJ1bnRpbWVcbiBcdF9fd2VicGFja19yZXF1aXJlX18ub2UgPSBmdW5jdGlvbihlcnIpIHtcbiBcdFx0cHJvY2Vzcy5uZXh0VGljayhmdW5jdGlvbigpIHtcbiBcdFx0XHR0aHJvdyBlcnI7IC8vIGNhdGNoIHRoaXMgZXJyb3IgYnkgdXNpbmcgU3lzdGVtLmltcG9ydCgpLmNhdGNoKClcbiBcdFx0fSk7XG4gXHR9O1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDcpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDRmMzYwNzZjZDVlOWNlZWM4Mjk3IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWFjdFwiXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gNSIsImltcG9ydCB7IGZldGNoUG9wdWxhclJlcG9zLCBmZXRjaFVzZXIgfSBmcm9tICcuL2FwaSdcclxuaW1wb3J0IExvYWRhYmxlIGZyb20gXCJyZWFjdC1sb2FkYWJsZVwiXHJcbmltcG9ydCBMb2FkaW5nIGZyb20gJy4vY29tcG9uZW50cy9Mb2FkaW5nJ1xyXG5cclxuY29uc3Qgcm91dGVzID0gIFtcclxuICAgIHtcclxuICAgICAgICBwYXRoOiAnLycsXHJcbiAgICAgICAgZXhhY3Q6IHRydWUsXHJcbiAgICAgICAgY29tcG9uZW50OiBMb2FkYWJsZSh7XHJcbiAgICAgICAgICAgIGxvYWRlcjogKCkgPT4gaW1wb3J0KCcuL2NvbXBvbmVudHMvSG9tZScpLFxyXG4gICAgICAgICAgICBsb2FkaW5nOiBMb2FkaW5nXHJcbiAgICAgICAgfSlcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgcGF0aDogJy9sYW5ndWFnZXMnLFxyXG4gICAgICAgIGV4YWN0OiB0cnVlLFxyXG4gICAgICAgIGNvbXBvbmVudDogTG9hZGFibGUoe1xyXG4gICAgICAgICAgICBsb2FkZXI6ICgpID0+IGltcG9ydCgnLi9jb21wb25lbnRzL0xhbmd1YWdlcycpLFxyXG4gICAgICAgICAgICBsb2FkaW5nOiBMb2FkaW5nXHJcbiAgICAgICAgfSlcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgcGF0aDogJy9sYW5ndWFnZXMvOmlkJyxcclxuICAgICAgICBjb21wb25lbnQ6IExvYWRhYmxlKHtcclxuICAgICAgICAgICAgbG9hZGVyOiAoKSA9PiBpbXBvcnQoJy4vY29tcG9uZW50cy9yZXBvR3JpZCcpLFxyXG4gICAgICAgICAgICBsb2FkaW5nOiBMb2FkaW5nXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgbG9hZERhdGE6IChwYXRoID0gJycpID0+IGZldGNoUG9wdWxhclJlcG9zKFxyXG4gICAgICAgICAgICAgICAgcGF0aC5zcGxpdCgnLycpLnBvcCgpXHJcbiAgICAgICAgICAgIClcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgcGF0aDogJy91c2VycycsXHJcbiAgICAgICAgZXhhY3Q6IHRydWUsXHJcbiAgICAgICAgY29tcG9uZW50OiBMb2FkYWJsZSh7XHJcbiAgICAgICAgICAgIGxvYWRlcjogKCkgPT4gaW1wb3J0KCcuL2NvbXBvbmVudHMvVXNlcnMnKSxcclxuICAgICAgICAgICAgbG9hZGluZzogTG9hZGluZ1xyXG4gICAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHBhdGg6ICcvdXNlcnMvOmlkJyxcclxuICAgICAgICBjb21wb25lbnQ6IExvYWRhYmxlKHtcclxuICAgICAgICAgICAgbG9hZGVyOiAoKSA9PiBpbXBvcnQoJy4vY29tcG9uZW50cy91c2VyR3JpZCcpLFxyXG4gICAgICAgICAgICBsb2FkaW5nOiBMb2FkaW5nXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgbG9hZERhdGE6IChwYXRoID0gJycpID0+IGZldGNoVXNlcihcclxuICAgICAgICAgICAgICAgIHBhdGguc3BsaXQoJy8nKS5wb3AoKVxyXG4gICAgICAgICAgICApXHJcbiAgICB9XHJcbl1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvdXRlc1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zaGFyZWQvcm91dGVzLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtbG9hZGFibGVcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWFjdC1sb2FkYWJsZVwiXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gNSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVkdXhcIlxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yb3V0ZXItZG9tXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVhY3Qtcm91dGVyLWRvbVwiXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gNSIsImltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLWZldGNoJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoUG9wdWxhclJlcG9zIChsYW5ndWFnZSA9ICdhbGwnKSB7XHJcbiAgICBjb25zdCBlbmNvZGVkVVJJID0gZW5jb2RlVVJJKGBodHRwczovL2FwaS5naXRodWIuY29tL3NlYXJjaC9yZXBvc2l0b3JpZXM/cT1zdGFyczo+MStsYW5ndWFnZToke2xhbmd1YWdlfSZzb3J0PXN0YXJzJm9yZGVyPWRlc2MmdHlwZT1SZXBvc2l0b3JpZXNgKVxyXG5cclxuICAgIHJldHVybiBmZXRjaChlbmNvZGVkVVJJKVxyXG4gICAgICAgIC50aGVuKGRhdGEgPT4gZGF0YS5qc29uKCkgKVxyXG4gICAgICAgIC50aGVuKHJlcG9zID0+IHJlcG9zLml0ZW1zKVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oZXJyKVxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgICAgIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmZXRjaFVzZXIodXNlciA9ICcgJykge1xyXG4gICAgY29uc3QgZW5jb2RlZFVSSSA9IGVuY29kZVVSSShgaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy8ke3VzZXJ9YClcclxuXHJcbiAgICByZXR1cm4gZmV0Y2goZW5jb2RlZFVSSSlcclxuICAgICAgICAudGhlbihkYXRhID0+IGRhdGEuanNvbigpIClcclxuICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKGVycilcclxuICAgICAgICAgICAgcmV0dXJuIG51bGxcclxuICAgICAgICB9KVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NoYXJlZC9hcGkuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlYWN0LXJlZHV4XCJcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwiaW1wb3J0IHsgU3RhdGljUm91dGVyLCBtYXRjaFBhdGggfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiXHJcbmltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSAncmVhY3QtZG9tL3NlcnZlcidcclxuaW1wb3J0IHNlcmlhbGl6ZSBmcm9tIFwic2VyaWFsaXplLWphdmFzY3JpcHRcIlxyXG5pbXBvcnQgcmVkdWNlcnMgZnJvbSAnLi4vc2hhcmVkL3JlZHVjZXJzJ1xyXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgcm91dGVzIGZyb20gJy4uL3NoYXJlZC9yb3V0ZXMnXHJcbmltcG9ydCBMb2FkYWJsZSBmcm9tICdyZWFjdC1sb2FkYWJsZSdcclxuaW1wb3J0IHsgY3JlYXRlU3RvcmUgfSBmcm9tICdyZWR1eCdcclxuaW1wb3J0IEFwcCBmcm9tICcuLi9zaGFyZWQvQXBwJ1xyXG5pbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJ1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBjb3JzIGZyb20gJ2NvcnMnXHJcblxyXG5jb25zdCBhcHAgPSBleHByZXNzKClcclxuY29uc3QgcG9ydCA9IDMwMDA7XHJcblxyXG5hcHAudXNlKGNvcnMoKSlcclxuXHJcbmFwcC51c2UoZXhwcmVzcy5zdGF0aWMoJ3B1YmxpYycpKVxyXG5cclxuYXBwLmdldCggJyonICwgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XHJcbiAgICBjb25zdCBhY3RpdmVSb3V0ZSA9IHJvdXRlcy5maW5kKChyb3V0ZSkgPT4gbWF0Y2hQYXRoKHJlcS51cmwsIHJvdXRlKSkgfHwge31cclxuXHJcbiAgICBjb25zdCBwcm9taXNlID0gYWN0aXZlUm91dGUubG9hZERhdGFcclxuICAgICAgICA/IGFjdGl2ZVJvdXRlLmxvYWREYXRhKHJlcS5wYXRoKVxyXG4gICAgICAgIDogUHJvbWlzZS5yZXNvbHZlKClcclxuXHJcblxyXG4gICAgcHJvbWlzZVxyXG4gICAgICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXJzKVxyXG4gICAgICAgICAgICBjb25zdCBwcmVsb2FkZWRTdGF0ZSA9IHN0b3JlLmdldFN0YXRlKClcclxuICAgICAgICAgICAgY29uc3QgY29udGV4dCA9IHsgZGF0YSB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBtYXJrdXAgPSByZW5kZXJUb1N0cmluZyhcclxuICAgICAgICAgICAgICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxTdGF0aWNSb3V0ZXIgbG9jYXRpb249e3JlcS51cmx9ICBjb250ZXh0PXtjb250ZXh0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEFwcCBkYXRhPXtkYXRhfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9TdGF0aWNSb3V0ZXI+XHJcbiAgICAgICAgICAgICAgICA8L1Byb3ZpZGVyPlxyXG4gICAgICAgICAgICApXHJcblxyXG4gICAgICAgICAgICByZXMuc2VuZChgXHJcbiAgICAgICAgICAgICAgICA8IWRvY3R5cGUgaHRtbD5cclxuICAgICAgICAgICAgICAgIDxodG1sPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIDxoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aXRsZT5NeSBhcHA8L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzY3JpcHQgc3JjPVwiL2J1bmRsZS5qc1wiIGRlZmVyPjwvc2NyaXB0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzY3JpcHQ+IHdpbmRvdy5fX0lOSVRJQUxfREFUQV9fID0gJHtzZXJpYWxpemUoZGF0YSl9IDwvc2NyaXB0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzY3JpcHQ+IHdpbmRvdy5fX1BSRUxPQURFRF9TVEFURV9fID0gJHtzZXJpYWxpemUocHJlbG9hZGVkU3RhdGUpfSA8L3NjcmlwdD4gXHJcbiAgICAgICAgICAgICAgICAgIDwvaGVhZD5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICA8Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiYXBwXCI+ICR7bWFya3VwfSA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9ib2R5PlxyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvaHRtbD5cclxuICAgICAgICAgICAgYClcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChuZXh0KVxyXG59KVxyXG5cclxuTG9hZGFibGUucHJlbG9hZEFsbCgpLnRoZW4oKCkgPT4ge1xyXG4gICAgYXBwLmxpc3RlbiggcG9ydCwgKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBTZXJ2ZXIgaXMgbGlzdGVuaW5nIG9uIHBvcnQ6ICR7cG9ydH1gKVxyXG4gICAgfSlcclxufSlcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2VydmVyL2luZGV4LmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImV4cHJlc3NcIlxuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpc29tb3JwaGljLWZldGNoXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiaXNvbW9ycGhpYy1mZXRjaFwiXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gNSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcnNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb3JzXCJcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gNSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWRvbS9zZXJ2ZXJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWFjdC1kb20vc2VydmVyXCJcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gNSIsImltcG9ydCB7IHJlbmRlclJvdXRlcyB9IGZyb20gJ3JlYWN0LXJvdXRlci1jb25maWcnXHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHJvdXRlcyBmcm9tICcuL3JvdXRlcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxoMT5UaGlzIGlzIEFwcCByb290IHBhZ2UuPC9oMT5cclxuICAgICAgICAgICAgICAgIDxoci8+XHJcbiAgICAgICAgICAgICAgICB7cmVuZGVyUm91dGVzKHJvdXRlcyl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NoYXJlZC9BcHAuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yb3V0ZXItY29uZmlnXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVhY3Qtcm91dGVyLWNvbmZpZ1wiXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzZXJpYWxpemUtamF2YXNjcmlwdFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInNlcmlhbGl6ZS1qYXZhc2NyaXB0XCJcbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gNSIsImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IGNvdW50ZXIgZnJvbSAnLi9jb3VudGVyUmVkdWNlcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb21iaW5lUmVkdWNlcnMoe1xyXG4gICAgY291bnRlclxyXG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2hhcmVkL3JlZHVjZXJzL2luZGV4LmpzIiwiaW1wb3J0IHsgSU5DUkVNRU5ULCBERUNSRU1FTlQsIEFERF9VU0VSIH0gZnJvbSAnLi4vY29uc3RhbnRzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGF0YVJlZHVjZXIoc3RhdGUgPSB7fSwgYWN0aW9uKXtcclxuICAgIHN3aXRjaChhY3Rpb24udHlwZSl7XHJcbiAgICAgICAgY2FzZSBBRERfVVNFUjpcclxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7IFthY3Rpb24ucGF5bG9hZF06IDAgfSlcclxuICAgICAgICBjYXNlIElOQ1JFTUVOVDpcclxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7IFthY3Rpb24ucGF5bG9hZF06ICsrc3RhdGVbYWN0aW9uLnBheWxvYWRdIH0pXHJcbiAgICAgICAgY2FzZSBERUNSRU1FTlQ6XHJcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwgeyBbYWN0aW9uLnBheWxvYWRdOiAtLXN0YXRlW2FjdGlvbi5wYXlsb2FkXSB9KVxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZVxyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NoYXJlZC9yZWR1Y2Vycy9jb3VudGVyUmVkdWNlci5qcyIsImV4cG9ydCBjb25zdCBJTkNSRU1FTlQgPSBcIklOQ1JFTUVOVFwiO1xyXG5leHBvcnQgY29uc3QgREVDUkVNRU5UID0gXCJERUNSRU1FTlRcIjtcclxuZXhwb3J0IGNvbnN0IEFERF9VU0VSID0gXCJBRERfVVNFUlwiO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2hhcmVkL2NvbnN0YW50cy9pbmRleC5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvYWRpbmcocHJvcHMpIHtcclxuICAgIGlmIChwcm9wcy5lcnJvcikge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8cD4gRXJyb3IhIDwvcD5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17IHByb3BzLnJldHJ5IH0+IFJldHJ5IDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKVxyXG4gICAgfSBlbHNlIGlmIChwcm9wcy5wYXN0RGVsYXkpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPHA+TG9hZGluZy4uLjwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NoYXJlZC9jb21wb25lbnRzL0xvYWRpbmcuanMiXSwic291cmNlUm9vdCI6IiJ9