/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_loadable__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_loadable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_loadable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Loading__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_NoMatch__ = __webpack_require__(17);




var routes = [{
  path: '/',
  exact: true,
  component: __WEBPACK_IMPORTED_MODULE_1_react_loadable___default()({
    loader: function loader() {
      return __webpack_require__.e/* import() */(10).then(__webpack_require__.bind(null, 21));
    },
    loading: __WEBPACK_IMPORTED_MODULE_2__components_Loading__["a" /* default */]
  })
}, {
  path: '/languages',
  exact: true,
  component: __WEBPACK_IMPORTED_MODULE_1_react_loadable___default()({
    loader: function loader() {
      return __webpack_require__.e/* import() */(9).then(__webpack_require__.bind(null, 22));
    },
    loading: __WEBPACK_IMPORTED_MODULE_2__components_Loading__["a" /* default */]
  })
}, {
  path: '/languages/:id',
  component: __WEBPACK_IMPORTED_MODULE_1_react_loadable___default()({
    loader: function loader() {
      return __webpack_require__.e/* import() */(7).then(__webpack_require__.bind(null, 23));
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
      return __webpack_require__.e/* import() */(8).then(__webpack_require__.bind(null, 24));
    },
    loading: __WEBPACK_IMPORTED_MODULE_2__components_Loading__["a" /* default */]
  })
}, {
  path: '/users/:id',
  component: __WEBPACK_IMPORTED_MODULE_1_react_loadable___default()({
    loader: function loader() {
      return __webpack_require__.e/* import() */(6).then(__webpack_require__.bind(null, 25));
    },
    loading: __WEBPACK_IMPORTED_MODULE_2__components_Loading__["a" /* default */]
  }),
  loadData: function loadData() {
    var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    return Object(__WEBPACK_IMPORTED_MODULE_0__api__["b" /* fetchUser */])(path.split('/').pop());
  }
}, {
  path: '*',
  component: __WEBPACK_IMPORTED_MODULE_3__components_NoMatch__["a" /* default */]
}];
/* harmony default export */ __webpack_exports__["a"] = (routes);

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_dom__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom_server__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom_server___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom_server__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_serialize_javascript__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_serialize_javascript___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_serialize_javascript__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_reducers__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_redux__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_routes__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_loadable__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_loadable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_loadable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_redux__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_App__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_express__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_cors__ = __webpack_require__(16);
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
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__counterReducer__ = __webpack_require__(8);


/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0_redux__["combineReducers"])({
  counter: __WEBPACK_IMPORTED_MODULE_1__counterReducer__["a" /* default */]
}));

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = dataReducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(9);
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
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return INCREMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DECREMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_USER; });
var INCREMENT = "INCREMENT";
var DECREMENT = "DECREMENT";
var ADD_USER = "ADD_USER";

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("react-loadable");

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return App; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_config__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_router_config__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__routes__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_router__);
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
/* 13 */
/***/ (function(module, exports) {

module.exports = require("react-router-config");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = NoMatch;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);

function NoMatch() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", null, " Error: Four Oh Four "), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", null, " Invalid rout. "));
}

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = fetchPopularRepos;
/* harmony export (immutable) */ __webpack_exports__["b"] = fetchUser;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch__ = __webpack_require__(19);
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
/* 19 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Loading;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYmI2NDgyYjU2YmU2YTkyZWJlYTUiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL3JvdXRlcy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy8uL3NyYy9zZXJ2ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtcm91dGVyLWRvbVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWRvbS9zZXJ2ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzZXJpYWxpemUtamF2YXNjcmlwdFwiIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvcmVkdWNlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9yZWR1Y2Vycy9jb3VudGVyUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL2NvbnN0YW50cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWxvYWRhYmxlXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9BcHAuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtcm91dGVyLWNvbmZpZ1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JzXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9jb21wb25lbnRzL05vTWF0Y2guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9hcGkuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaXNvbW9ycGhpYy1mZXRjaFwiIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvY29tcG9uZW50cy9Mb2FkaW5nLmpzIl0sIm5hbWVzIjpbInJvdXRlcyIsInBhdGgiLCJleGFjdCIsImNvbXBvbmVudCIsIkxvYWRhYmxlIiwibG9hZGVyIiwibG9hZGluZyIsIkxvYWRpbmciLCJsb2FkRGF0YSIsImZldGNoUG9wdWxhclJlcG9zIiwic3BsaXQiLCJwb3AiLCJmZXRjaFVzZXIiLCJOb01hdGNoIiwiYXBwIiwiZXhwcmVzcyIsInBvcnQiLCJ1c2UiLCJjb3JzIiwic3RhdGljIiwiZ2V0IiwicmVxIiwicmVzIiwibmV4dCIsImFjdGl2ZVJvdXRlIiwiZmluZCIsInJvdXRlIiwibWF0Y2hQYXRoIiwidXJsIiwicHJvbWlzZSIsIlByb21pc2UiLCJyZXNvbHZlIiwidGhlbiIsImRhdGEiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwicmVkdWNlcnMiLCJwcmVsb2FkZWRTdGF0ZSIsImdldFN0YXRlIiwiY29udGV4dCIsIm1hcmt1cCIsInJlbmRlclRvU3RyaW5nIiwic2VuZCIsInNlcmlhbGl6ZSIsImNhdGNoIiwicHJlbG9hZEFsbCIsImxpc3RlbiIsImNvbnNvbGUiLCJsb2ciLCJjb21iaW5lUmVkdWNlcnMiLCJjb3VudGVyIiwiZGF0YVJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJBRERfVVNFUiIsIk9iamVjdCIsImFzc2lnbiIsInBheWxvYWQiLCJJTkNSRU1FTlQiLCJERUNSRU1FTlQiLCJBcHAiLCJyZW5kZXJSb3V0ZXMiLCJDb21wb25lbnQiLCJsYW5ndWFnZSIsImVuY29kZWRVUkkiLCJlbmNvZGVVUkkiLCJmZXRjaCIsImpzb24iLCJyZXBvcyIsIml0ZW1zIiwiZXJyIiwid2FybiIsInVzZXIiLCJwcm9wcyIsImVycm9yIiwicmV0cnkiLCJwYXN0RGVsYXkiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtB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QjtBQUFBLE1BQVo2RCxJQUFZLHVFQUFMLEdBQUs7QUFDbEMsTUFBTVIsVUFBVSxHQUFHQyxTQUFTLHdDQUFpQ08sSUFBakMsRUFBNUI7QUFFQSxTQUFPTix3REFBSyxDQUFDRixVQUFELENBQUwsQ0FDRmpDLElBREUsQ0FDRyxVQUFBQyxJQUFJO0FBQUEsV0FBSUEsSUFBSSxDQUFDbUMsSUFBTCxFQUFKO0FBQUEsR0FEUCxFQUVGeEIsS0FGRSxDQUVJLFVBQUEyQixHQUFHLEVBQUk7QUFDVnhCLFdBQU8sQ0FBQ3lCLElBQVIsQ0FBYUQsR0FBYjtBQUNBLFdBQU8sSUFBUDtBQUNILEdBTEUsQ0FBUDtBQU1ILEM7Ozs7OztBQ3ZCRCw2Qzs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBRWUsU0FBU2hFLE9BQVQsQ0FBaUJtRSxLQUFqQixFQUF3QjtBQUNuQyxNQUFJQSxLQUFLLENBQUNDLEtBQVYsRUFBaUI7QUFDYixXQUNJLHlFQUNJLGtGQURKLEVBRUk7QUFBUSxhQUFPLEVBQUdELEtBQUssQ0FBQ0U7QUFBeEIsaUJBRkosQ0FESjtBQU1ILEdBUEQsTUFPTyxJQUFJRixLQUFLLENBQUNHLFNBQVYsRUFBcUI7QUFDeEIsV0FDSSx5RUFDSSxvRkFESixDQURKO0FBS0gsR0FOTSxNQU1BO0FBQ0gsV0FBTyxJQUFQO0FBQ0g7QUFDSixDIiwiZmlsZSI6InNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgY2h1bmtzXG4gXHQvLyBcIjBcIiBtZWFucyBcImFscmVhZHkgbG9hZGVkXCJcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdDA6IDBcbiBcdH07XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuIFx0Ly8gVGhpcyBmaWxlIGNvbnRhaW5zIG9ubHkgdGhlIGVudHJ5IGNodW5rLlxuIFx0Ly8gVGhlIGNodW5rIGxvYWRpbmcgZnVuY3Rpb24gZm9yIGFkZGl0aW9uYWwgY2h1bmtzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmUgPSBmdW5jdGlvbiByZXF1aXJlRW5zdXJlKGNodW5rSWQpIHtcbiBcdFx0Ly8gXCIwXCIgaXMgdGhlIHNpZ25hbCBmb3IgXCJhbHJlYWR5IGxvYWRlZFwiXG4gXHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSAhPT0gMCkge1xuIFx0XHRcdHZhciBjaHVuayA9IHJlcXVpcmUoXCIuL1wiICsgY2h1bmtJZCArIFwiLnNlcnZlci5qc1wiKTtcbiBcdFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBjaHVuay5tb2R1bGVzLCBjaHVua0lkcyA9IGNodW5rLmlkcztcbiBcdFx0XHRmb3IodmFyIG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKVxuIFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRzW2ldXSA9IDA7XG4gXHRcdH1cbiBcdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuIFx0fTtcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cbiBcdC8vIHVuY2F0Y2hlZCBlcnJvciBoYW5kbGVyIGZvciB3ZWJwYWNrIHJ1bnRpbWVcbiBcdF9fd2VicGFja19yZXF1aXJlX18ub2UgPSBmdW5jdGlvbihlcnIpIHtcbiBcdFx0cHJvY2Vzcy5uZXh0VGljayhmdW5jdGlvbigpIHtcbiBcdFx0XHR0aHJvdyBlcnI7IC8vIGNhdGNoIHRoaXMgZXJyb3IgYnkgdXNpbmcgU3lzdGVtLmltcG9ydCgpLmNhdGNoKClcbiBcdFx0fSk7XG4gXHR9O1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDMpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGJiNjQ4MmI1NmJlNmE5MmViZWE1IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWR1eFwiXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IGZldGNoUG9wdWxhclJlcG9zLCBmZXRjaFVzZXIgfSBmcm9tICcuL2FwaSdcclxuaW1wb3J0IExvYWRhYmxlIGZyb20gXCJyZWFjdC1sb2FkYWJsZVwiXHJcbmltcG9ydCBMb2FkaW5nIGZyb20gJy4vY29tcG9uZW50cy9Mb2FkaW5nJ1xyXG5pbXBvcnQgTm9NYXRjaCBmcm9tIFwiLi9jb21wb25lbnRzL05vTWF0Y2hcIjtcclxuXHJcbmNvbnN0IHJvdXRlcyA9ICBbXHJcbiAgICB7XHJcbiAgICAgICAgcGF0aDogJy8nLFxyXG4gICAgICAgIGV4YWN0OiB0cnVlLFxyXG4gICAgICAgIGNvbXBvbmVudDogTG9hZGFibGUoe1xyXG4gICAgICAgICAgICBsb2FkZXI6ICgpID0+IGltcG9ydCgnLi9jb21wb25lbnRzL0hvbWUnKSxcclxuICAgICAgICAgICAgbG9hZGluZzogTG9hZGluZ1xyXG4gICAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHBhdGg6ICcvbGFuZ3VhZ2VzJyxcclxuICAgICAgICBleGFjdDogdHJ1ZSxcclxuICAgICAgICBjb21wb25lbnQ6IExvYWRhYmxlKHtcclxuICAgICAgICAgICAgbG9hZGVyOiAoKSA9PiBpbXBvcnQoJy4vY29tcG9uZW50cy9MYW5ndWFnZXMnKSxcclxuICAgICAgICAgICAgbG9hZGluZzogTG9hZGluZ1xyXG4gICAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHBhdGg6ICcvbGFuZ3VhZ2VzLzppZCcsXHJcbiAgICAgICAgY29tcG9uZW50OiBMb2FkYWJsZSh7XHJcbiAgICAgICAgICAgIGxvYWRlcjogKCkgPT4gaW1wb3J0KCcuL2NvbXBvbmVudHMvcmVwb0dyaWQnKSxcclxuICAgICAgICAgICAgbG9hZGluZzogTG9hZGluZ1xyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIGxvYWREYXRhOiAocGF0aCA9ICcnKSA9PiBmZXRjaFBvcHVsYXJSZXBvcyhcclxuICAgICAgICAgICAgICAgIHBhdGguc3BsaXQoJy8nKS5wb3AoKVxyXG4gICAgICAgICAgICApXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHBhdGg6ICcvdXNlcnMnLFxyXG4gICAgICAgIGV4YWN0OiB0cnVlLFxyXG4gICAgICAgIGNvbXBvbmVudDogTG9hZGFibGUoe1xyXG4gICAgICAgICAgICBsb2FkZXI6ICgpID0+IGltcG9ydCgnLi9jb21wb25lbnRzL1VzZXJzJyksXHJcbiAgICAgICAgICAgIGxvYWRpbmc6IExvYWRpbmdcclxuICAgICAgICB9KVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBwYXRoOiAnL3VzZXJzLzppZCcsXHJcbiAgICAgICAgY29tcG9uZW50OiBMb2FkYWJsZSh7XHJcbiAgICAgICAgICAgIGxvYWRlcjogKCkgPT4gaW1wb3J0KCcuL2NvbXBvbmVudHMvdXNlckdyaWQnKSxcclxuICAgICAgICAgICAgbG9hZGluZzogTG9hZGluZ1xyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIGxvYWREYXRhOiAocGF0aCA9ICcnKSA9PiBmZXRjaFVzZXIoXHJcbiAgICAgICAgICAgICAgICBwYXRoLnNwbGl0KCcvJykucG9wKClcclxuICAgICAgICAgICAgKVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBwYXRoOiAnKicsXHJcbiAgICAgICAgY29tcG9uZW50OiAgTm9NYXRjaFxyXG4gICAgfVxyXG5dXHJcblxyXG5leHBvcnQgZGVmYXVsdCByb3V0ZXNcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2hhcmVkL3JvdXRlcy5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVhY3RcIlxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBTdGF0aWNSb3V0ZXIsIG1hdGNoUGF0aCB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCJcclxuaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tICdyZWFjdC1kb20vc2VydmVyJ1xyXG5pbXBvcnQgc2VyaWFsaXplIGZyb20gXCJzZXJpYWxpemUtamF2YXNjcmlwdFwiXHJcbmltcG9ydCByZWR1Y2VycyBmcm9tICcuLi9zaGFyZWQvcmVkdWNlcnMnXHJcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCByb3V0ZXMgZnJvbSAnLi4vc2hhcmVkL3JvdXRlcydcclxuaW1wb3J0IExvYWRhYmxlIGZyb20gJ3JlYWN0LWxvYWRhYmxlJ1xyXG5pbXBvcnQgeyBjcmVhdGVTdG9yZSB9IGZyb20gJ3JlZHV4J1xyXG5pbXBvcnQgQXBwIGZyb20gJy4uL3NoYXJlZC9BcHAnXHJcbmltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGNvcnMgZnJvbSAnY29ycydcclxuXHJcbmNvbnN0IGFwcCA9IGV4cHJlc3MoKVxyXG5jb25zdCBwb3J0ID0gMzAwMDtcclxuXHJcbmFwcC51c2UoY29ycygpKVxyXG5cclxuYXBwLnVzZShleHByZXNzLnN0YXRpYygncHVibGljJykpXHJcblxyXG5hcHAuZ2V0KCAnKicgLCAocmVxLCByZXMsIG5leHQpID0+IHtcclxuICAgIGNvbnN0IGFjdGl2ZVJvdXRlID0gcm91dGVzLmZpbmQoKHJvdXRlKSA9PiBtYXRjaFBhdGgocmVxLnVybCwgcm91dGUpKSB8fCB7fVxyXG5cclxuICAgIGNvbnN0IHByb21pc2UgPSBhY3RpdmVSb3V0ZS5sb2FkRGF0YVxyXG4gICAgICAgID8gYWN0aXZlUm91dGUubG9hZERhdGEocmVxLnBhdGgpXHJcbiAgICAgICAgOiBQcm9taXNlLnJlc29sdmUoKVxyXG5cclxuXHJcbiAgICBwcm9taXNlXHJcbiAgICAgICAgLnRoZW4oIGRhdGEgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXJzKVxyXG4gICAgICAgICAgICBjb25zdCBwcmVsb2FkZWRTdGF0ZSA9IHN0b3JlLmdldFN0YXRlKClcclxuICAgICAgICAgICAgY29uc3QgY29udGV4dCA9IHsgZGF0YSB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBtYXJrdXAgPSByZW5kZXJUb1N0cmluZyhcclxuICAgICAgICAgICAgICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxTdGF0aWNSb3V0ZXIgbG9jYXRpb249e3JlcS51cmx9ICBjb250ZXh0PXtjb250ZXh0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEFwcCBkYXRhPXtkYXRhfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9TdGF0aWNSb3V0ZXI+XHJcbiAgICAgICAgICAgICAgICA8L1Byb3ZpZGVyPlxyXG4gICAgICAgICAgICApXHJcblxyXG4gICAgICAgICAgICByZXMuc2VuZChgXHJcbiAgICAgICAgICAgICAgICA8IWRvY3R5cGUgaHRtbD5cclxuICAgICAgICAgICAgICAgIDxodG1sPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIDxoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aXRsZT5NeSBhcHA8L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzY3JpcHQgc3JjPVwiL2J1bmRsZS5qc1wiIGRlZmVyPjwvc2NyaXB0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzY3JpcHQ+IHdpbmRvdy5fX0lOSVRJQUxfREFUQV9fID0gJHtzZXJpYWxpemUoZGF0YSl9IDwvc2NyaXB0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzY3JpcHQ+IHdpbmRvdy5fX1BSRUxPQURFRF9TVEFURV9fID0gJHtzZXJpYWxpemUocHJlbG9hZGVkU3RhdGUpfSA8L3NjcmlwdD4gXHJcbiAgICAgICAgICAgICAgICAgIDwvaGVhZD5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICA8Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiYXBwXCI+ICR7bWFya3VwfSA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9ib2R5PlxyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvaHRtbD5cclxuICAgICAgICAgICAgYClcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChuZXh0KVxyXG59KVxyXG5cclxuTG9hZGFibGUucHJlbG9hZEFsbCgpLnRoZW4oKCkgPT4ge1xyXG4gICAgYXBwLmxpc3RlbiggcG9ydCwgKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBTZXJ2ZXIgaXMgbGlzdGVuaW5nIG9uIHBvcnQ6ICR7cG9ydH1gKVxyXG4gICAgfSlcclxufSlcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2VydmVyL2luZGV4LmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtcm91dGVyLWRvbVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlYWN0LXJvdXRlci1kb21cIlxuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1kb20vc2VydmVyXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVhY3QtZG9tL3NlcnZlclwiXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNlcmlhbGl6ZS1qYXZhc2NyaXB0XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwic2VyaWFsaXplLWphdmFzY3JpcHRcIlxuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCBjb3VudGVyIGZyb20gJy4vY291bnRlclJlZHVjZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29tYmluZVJlZHVjZXJzKHtcclxuICAgIGNvdW50ZXJcclxufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NoYXJlZC9yZWR1Y2Vycy9pbmRleC5qcyIsImltcG9ydCB7IElOQ1JFTUVOVCwgREVDUkVNRU5ULCBBRERfVVNFUiB9IGZyb20gJy4uL2NvbnN0YW50cydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRhdGFSZWR1Y2VyKHN0YXRlID0ge30sIGFjdGlvbil7XHJcbiAgICBzd2l0Y2goYWN0aW9uLnR5cGUpe1xyXG4gICAgICAgIGNhc2UgQUREX1VTRVI6XHJcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwgeyBbYWN0aW9uLnBheWxvYWRdOiAwIH0pXHJcbiAgICAgICAgY2FzZSBJTkNSRU1FTlQ6XHJcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwgeyBbYWN0aW9uLnBheWxvYWRdOiArK3N0YXRlW2FjdGlvbi5wYXlsb2FkXSB9KVxyXG4gICAgICAgIGNhc2UgREVDUkVNRU5UOlxyXG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHsgW2FjdGlvbi5wYXlsb2FkXTogLS1zdGF0ZVthY3Rpb24ucGF5bG9hZF0gfSlcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGVcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zaGFyZWQvcmVkdWNlcnMvY291bnRlclJlZHVjZXIuanMiLCJleHBvcnQgY29uc3QgSU5DUkVNRU5UID0gXCJJTkNSRU1FTlRcIjtcclxuZXhwb3J0IGNvbnN0IERFQ1JFTUVOVCA9IFwiREVDUkVNRU5UXCI7XHJcbmV4cG9ydCBjb25zdCBBRERfVVNFUiA9IFwiQUREX1VTRVJcIjtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NoYXJlZC9jb25zdGFudHMvaW5kZXguanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlYWN0LXJlZHV4XCJcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWxvYWRhYmxlXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVhY3QtbG9hZGFibGVcIlxuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgcmVuZGVyUm91dGVzIH0gZnJvbSAncmVhY3Qtcm91dGVyLWNvbmZpZydcclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgcm91dGVzIGZyb20gJy4vcm91dGVzJ1xyXG5pbXBvcnQgeyBSb3V0ZSwgU3dpdGNoIH0gZnJvbSAncmVhY3Qtcm91dGVyJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGgxPlRoaXMgaXMgQXBwIHJvb3QgcGFnZS48L2gxPlxyXG4gICAgICAgICAgICAgICAgPGhyLz5cclxuICAgICAgICAgICAgICAgIHtyZW5kZXJSb3V0ZXMocm91dGVzKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2hhcmVkL0FwcC5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJvdXRlci1jb25maWdcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWFjdC1yb3V0ZXItY29uZmlnXCJcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJvdXRlclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlYWN0LXJvdXRlclwiXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiZXhwcmVzc1wiXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29yc1wiXG4vLyBtb2R1bGUgaWQgPSAxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOb01hdGNoICgpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGgxPiBFcnJvcjogRm91ciBPaCBGb3VyIDwvaDE+XHJcbiAgICAgICAgICAgIDxwPiBJbnZhbGlkIHJvdXQuIDwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zaGFyZWQvY29tcG9uZW50cy9Ob01hdGNoLmpzIiwiaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtZmV0Y2gnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hQb3B1bGFyUmVwb3MgKGxhbmd1YWdlID0gJ2FsbCcpIHtcclxuICAgIGNvbnN0IGVuY29kZWRVUkkgPSBlbmNvZGVVUkkoYGh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vc2VhcmNoL3JlcG9zaXRvcmllcz9xPXN0YXJzOj4xK2xhbmd1YWdlOiR7bGFuZ3VhZ2V9JnNvcnQ9c3RhcnMmb3JkZXI9ZGVzYyZ0eXBlPVJlcG9zaXRvcmllc2ApXHJcblxyXG4gICAgcmV0dXJuIGZldGNoKGVuY29kZWRVUkkpXHJcbiAgICAgICAgLnRoZW4oZGF0YSA9PiBkYXRhLmpzb24oKSApXHJcbiAgICAgICAgLnRoZW4ocmVwb3MgPT4gcmVwb3MuaXRlbXMpXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihlcnIpXHJcbiAgICAgICAgICAgIHJldHVybiBudWxsXHJcbiAgICAgICAgfSlcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoVXNlcih1c2VyID0gJyAnKSB7XHJcbiAgICBjb25zdCBlbmNvZGVkVVJJID0gZW5jb2RlVVJJKGBodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzLyR7dXNlcn1gKVxyXG5cclxuICAgIHJldHVybiBmZXRjaChlbmNvZGVkVVJJKVxyXG4gICAgICAgIC50aGVuKGRhdGEgPT4gZGF0YS5qc29uKCkgKVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oZXJyKVxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgICAgIH0pXHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2hhcmVkL2FwaS5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImlzb21vcnBoaWMtZmV0Y2hcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJpc29tb3JwaGljLWZldGNoXCJcbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvYWRpbmcocHJvcHMpIHtcclxuICAgIGlmIChwcm9wcy5lcnJvcikge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8cD4gRXJyb3IhIDwvcD5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17IHByb3BzLnJldHJ5IH0+IFJldHJ5IDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKVxyXG4gICAgfSBlbHNlIGlmIChwcm9wcy5wYXN0RGVsYXkpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPHA+TG9hZGluZy4uLjwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NoYXJlZC9jb21wb25lbnRzL0xvYWRpbmcuanMiXSwic291cmNlUm9vdCI6IiJ9