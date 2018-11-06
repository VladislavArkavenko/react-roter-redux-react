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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_loadable__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_loadable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_loadable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Loading__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_NoMatch__ = __webpack_require__(15);




var routes = [{
  path: '/',
  exact: true,
  component: __WEBPACK_IMPORTED_MODULE_1_react_loadable___default()({
    loader: function loader() {
      return __webpack_require__.e/* import() */(4).then(__webpack_require__.bind(null, 21));
    },
    loading: __WEBPACK_IMPORTED_MODULE_2__components_Loading__["a" /* default */]
  })
}, {
  path: '/languages',
  exact: true,
  component: __WEBPACK_IMPORTED_MODULE_1_react_loadable___default()({
    loader: function loader() {
      return __webpack_require__.e/* import() */(3).then(__webpack_require__.bind(null, 22));
    },
    loading: __WEBPACK_IMPORTED_MODULE_2__components_Loading__["a" /* default */]
  })
}, {
  path: '/languages/:id',
  component: __WEBPACK_IMPORTED_MODULE_1_react_loadable___default()({
    loader: function loader() {
      return __webpack_require__.e/* import() */(1).then(__webpack_require__.bind(null, 23));
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
      return __webpack_require__.e/* import() */(2).then(__webpack_require__.bind(null, 24));
    },
    loading: __WEBPACK_IMPORTED_MODULE_2__components_Loading__["a" /* default */]
  })
}, {
  path: '/users/:id',
  component: __WEBPACK_IMPORTED_MODULE_1_react_loadable___default()({
    loader: function loader() {
      return __webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, 25));
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
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-loadable");

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch__ = __webpack_require__(13);
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
/* unused harmony export INCREMENT */
/* unused harmony export DECREMENT */
/* unused harmony export ADD_USER */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return increment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return decrement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addUser; });
/* harmony export (immutable) */ __webpack_exports__["c"] = reducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__reducerRegistry__ = __webpack_require__(12);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // Initial State

var initialState = {}; // Constants

var INCREMENT = "INCREMENT";
var DECREMENT = "DECREMENT";
var ADD_USER = "ADD_USER"; // Actions

var increment = function increment(user) {
  return {
    type: INCREMENT,
    payload: user
  };
};
var decrement = function decrement(user) {
  return {
    type: DECREMENT,
    payload: user
  };
};
var addUser = function addUser(user) {
  return {
    type: ADD_USER,
    payload: user
  };
}; // Reducer Name

var reducerName = 'counter'; // Reducer

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case ADD_USER:
      return Object.assign({}, state, _defineProperty({}, action.payload, 0));

    case INCREMENT:
      return Object.assign({}, state, _defineProperty({}, action.payload, ++state[action.payload]));

    case DECREMENT:
      return Object.assign({}, state, _defineProperty({}, action.payload, --state[action.payload]));

    default:
      return state;
  }
} //Register Reducer

__WEBPACK_IMPORTED_MODULE_0__reducerRegistry__["a" /* default */].register(reducerName, reducer);

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_dom__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom_server__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom_server___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom_server__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_serialize_javascript__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_serialize_javascript___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_serialize_javascript__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reduxReducers__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_routes__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_loadable__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_loadable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_loadable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_redux__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__common_App__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_express__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_cors__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_cors___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_cors__);












var app = __WEBPACK_IMPORTED_MODULE_9_express___default()();
var port = 3000;
app.use(__WEBPACK_IMPORTED_MODULE_11_cors___default()());
app.use(__WEBPACK_IMPORTED_MODULE_9_express___default.a.static('public'));
app.get('*', function (req, res, next) {
  var activeRoute = __WEBPACK_IMPORTED_MODULE_5__common_routes__["a" /* default */].find(function (route) {
    return Object(__WEBPACK_IMPORTED_MODULE_0_react_router_dom__["matchPath"])(req.url, route);
  }) || {};
  var promise = activeRoute.loadData ? activeRoute.loadData(req.path) : Promise.resolve();
  promise.then(function (data) {
    var store = Object(__WEBPACK_IMPORTED_MODULE_7_redux__["createStore"])(__WEBPACK_IMPORTED_MODULE_4__reduxReducers__["a" /* default */]);
    var preloadedState = store.getState();
    var context = {
      data: data
    };
    var markup = Object(__WEBPACK_IMPORTED_MODULE_1_react_dom_server__["renderToString"])(__WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_redux__["Provider"], {
      store: store
    }, __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react_router_dom__["StaticRouter"], {
      location: req.url,
      context: context
    }, __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__common_App__["a" /* default */], {
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
/* 9 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_redux_moduls_counterModule__ = __webpack_require__(7);


/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0_redux__["combineReducers"])({
  counter: __WEBPACK_IMPORTED_MODULE_1__common_redux_moduls_counterModule__["c" /* default */]
}));

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ReducerRegistry */
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ReducerRegistry =
/*#__PURE__*/
function () {
  function ReducerRegistry() {
    _classCallCheck(this, ReducerRegistry);

    this._emitChange = null;
    this._reducers = {};
  }

  _createClass(ReducerRegistry, [{
    key: "getReducers",
    value: function getReducers() {
      return _objectSpread({}, this._reducers);
    }
  }, {
    key: "register",
    value: function register(name, reducer) {
      this._reducers = _objectSpread({}, this._reducers, _defineProperty({}, name, reducer));

      if (this._emitChange) {
        this._emitChange(this.getReducers());
      }
    }
  }, {
    key: "setChangeListener",
    value: function setChangeListener(listener) {
      this._emitChange = listener;
    }
  }]);

  return ReducerRegistry;
}();
var reducerRegistry = new ReducerRegistry();
/* harmony default export */ __webpack_exports__["a"] = (reducerRegistry);

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),
/* 14 */
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

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = NoMatch;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);

function NoMatch() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", null, " Error: Four Oh Four "), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", null, " Invalid rout. "));
}

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return App; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_config__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_router_config__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__routes__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router__ = __webpack_require__(18);
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
/* 17 */
/***/ (function(module, exports) {

module.exports = require("react-router-config");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMzAxZWZmZTBlY2I5YzEzZjRmMWYiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vcm91dGVzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWxvYWRhYmxlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtcm91dGVyLWRvbVwiIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vYXBpLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9yZWR1eC1tb2R1bHMvY291bnRlck1vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWRvbS9zZXJ2ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzZXJpYWxpemUtamF2YXNjcmlwdFwiIiwid2VicGFjazovLy8uL3NyYy9zZXJ2ZXIvcmVkdXhSZWR1Y2Vycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL3JlZHV4LW1vZHVscy9yZWR1Y2VyUmVnaXN0cnkuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaXNvbW9ycGhpYy1mZXRjaFwiIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vY29tcG9uZW50cy9Mb2FkaW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vY29tcG9uZW50cy9Ob01hdGNoLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vQXBwLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJvdXRlci1jb25maWdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHByZXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yc1wiIl0sIm5hbWVzIjpbInJvdXRlcyIsInBhdGgiLCJleGFjdCIsImNvbXBvbmVudCIsIkxvYWRhYmxlIiwibG9hZGVyIiwibG9hZGluZyIsIkxvYWRpbmciLCJsb2FkRGF0YSIsImZldGNoUG9wdWxhclJlcG9zIiwic3BsaXQiLCJwb3AiLCJmZXRjaFVzZXIiLCJOb01hdGNoIiwibGFuZ3VhZ2UiLCJlbmNvZGVkVVJJIiwiZW5jb2RlVVJJIiwiZmV0Y2giLCJ0aGVuIiwiZGF0YSIsImpzb24iLCJyZXBvcyIsIml0ZW1zIiwiY2F0Y2giLCJlcnIiLCJjb25zb2xlIiwid2FybiIsInVzZXIiLCJpbml0aWFsU3RhdGUiLCJJTkNSRU1FTlQiLCJERUNSRU1FTlQiLCJBRERfVVNFUiIsImluY3JlbWVudCIsInR5cGUiLCJwYXlsb2FkIiwiZGVjcmVtZW50IiwiYWRkVXNlciIsInJlZHVjZXJOYW1lIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwiT2JqZWN0IiwiYXNzaWduIiwicmVkdWNlclJlZ2lzdHJ5IiwicmVnaXN0ZXIiLCJhcHAiLCJleHByZXNzIiwicG9ydCIsInVzZSIsImNvcnMiLCJzdGF0aWMiLCJnZXQiLCJyZXEiLCJyZXMiLCJuZXh0IiwiYWN0aXZlUm91dGUiLCJmaW5kIiwicm91dGUiLCJtYXRjaFBhdGgiLCJ1cmwiLCJwcm9taXNlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwicmVkdWNlcnMiLCJwcmVsb2FkZWRTdGF0ZSIsImdldFN0YXRlIiwiY29udGV4dCIsIm1hcmt1cCIsInJlbmRlclRvU3RyaW5nIiwic2VuZCIsInNlcmlhbGl6ZSIsInByZWxvYWRBbGwiLCJsaXN0ZW4iLCJsb2ciLCJjb21iaW5lUmVkdWNlcnMiLCJjb3VudGVyIiwiUmVkdWNlclJlZ2lzdHJ5IiwiX2VtaXRDaGFuZ2UiLCJfcmVkdWNlcnMiLCJuYW1lIiwiZ2V0UmVkdWNlcnMiLCJsaXN0ZW5lciIsInByb3BzIiwi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b2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgY2h1bmtzXG4gXHQvLyBcIjBcIiBtZWFucyBcImFscmVhZHkgbG9hZGVkXCJcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdDU6IDBcbiBcdH07XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuIFx0Ly8gVGhpcyBmaWxlIGNvbnRhaW5zIG9ubHkgdGhlIGVudHJ5IGNodW5rLlxuIFx0Ly8gVGhlIGNodW5rIGxvYWRpbmcgZnVuY3Rpb24gZm9yIGFkZGl0aW9uYWwgY2h1bmtzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmUgPSBmdW5jdGlvbiByZXF1aXJlRW5zdXJlKGNodW5rSWQpIHtcbiBcdFx0Ly8gXCIwXCIgaXMgdGhlIHNpZ25hbCBmb3IgXCJhbHJlYWR5IGxvYWRlZFwiXG4gXHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSAhPT0gMCkge1xuIFx0XHRcdHZhciBjaHVuayA9IHJlcXVpcmUoXCIuL1wiICsgY2h1bmtJZCArIFwiLnNlcnZlci5qc1wiKTtcbiBcdFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBjaHVuay5tb2R1bGVzLCBjaHVua0lkcyA9IGNodW5rLmlkcztcbiBcdFx0XHRmb3IodmFyIG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKVxuIFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRzW2ldXSA9IDA7XG4gXHRcdH1cbiBcdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuIFx0fTtcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cbiBcdC8vIHVuY2F0Y2hlZCBlcnJvciBoYW5kbGVyIGZvciB3ZWJwYWNrIHJ1bnRpbWVcbiBcdF9fd2VicGFja19yZXF1aXJlX18ub2UgPSBmdW5jdGlvbihlcnIpIHtcbiBcdFx0cHJvY2Vzcy5uZXh0VGljayhmdW5jdGlvbigpIHtcbiBcdFx0XHR0aHJvdyBlcnI7IC8vIGNhdGNoIHRoaXMgZXJyb3IgYnkgdXNpbmcgU3lzdGVtLmltcG9ydCgpLmNhdGNoKClcbiBcdFx0fSk7XG4gXHR9O1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDgpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDMwMWVmZmUwZWNiOWMxM2Y0ZjFmIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWFjdFwiXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gNSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVkdXhcIlxuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCJpbXBvcnQgeyBmZXRjaFBvcHVsYXJSZXBvcywgZmV0Y2hVc2VyIH0gZnJvbSAnLi9hcGknXHJcbmltcG9ydCBMb2FkYWJsZSBmcm9tIFwicmVhY3QtbG9hZGFibGVcIlxyXG5pbXBvcnQgTG9hZGluZyBmcm9tICcuL2NvbXBvbmVudHMvTG9hZGluZydcclxuaW1wb3J0IE5vTWF0Y2ggZnJvbSBcIi4vY29tcG9uZW50cy9Ob01hdGNoXCI7XHJcblxyXG5jb25zdCByb3V0ZXMgPSAgW1xyXG4gICAge1xyXG4gICAgICAgIHBhdGg6ICcvJyxcclxuICAgICAgICBleGFjdDogdHJ1ZSxcclxuICAgICAgICBjb21wb25lbnQ6IExvYWRhYmxlKHtcclxuICAgICAgICAgICAgbG9hZGVyOiAoKSA9PiBpbXBvcnQoJy4vY29tcG9uZW50cy9Ib21lJyksXHJcbiAgICAgICAgICAgIGxvYWRpbmc6IExvYWRpbmdcclxuICAgICAgICB9KVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBwYXRoOiAnL2xhbmd1YWdlcycsXHJcbiAgICAgICAgZXhhY3Q6IHRydWUsXHJcbiAgICAgICAgY29tcG9uZW50OiBMb2FkYWJsZSh7XHJcbiAgICAgICAgICAgIGxvYWRlcjogKCkgPT4gaW1wb3J0KCcuL2NvbXBvbmVudHMvTGFuZ3VhZ2VzJyksXHJcbiAgICAgICAgICAgIGxvYWRpbmc6IExvYWRpbmdcclxuICAgICAgICB9KVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBwYXRoOiAnL2xhbmd1YWdlcy86aWQnLFxyXG4gICAgICAgIGNvbXBvbmVudDogTG9hZGFibGUoe1xyXG4gICAgICAgICAgICBsb2FkZXI6ICgpID0+IGltcG9ydCgnLi9jb21wb25lbnRzL3JlcG9HcmlkJyksXHJcbiAgICAgICAgICAgIGxvYWRpbmc6IExvYWRpbmdcclxuICAgICAgICB9KSxcclxuICAgICAgICBsb2FkRGF0YTogKHBhdGggPSAnJykgPT4gZmV0Y2hQb3B1bGFyUmVwb3MoXHJcbiAgICAgICAgICAgICAgICBwYXRoLnNwbGl0KCcvJykucG9wKClcclxuICAgICAgICAgICAgKVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBwYXRoOiAnL3VzZXJzJyxcclxuICAgICAgICBleGFjdDogdHJ1ZSxcclxuICAgICAgICBjb21wb25lbnQ6IExvYWRhYmxlKHtcclxuICAgICAgICAgICAgbG9hZGVyOiAoKSA9PiBpbXBvcnQoJy4vY29tcG9uZW50cy9Vc2VycycpLFxyXG4gICAgICAgICAgICBsb2FkaW5nOiBMb2FkaW5nXHJcbiAgICAgICAgfSlcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgcGF0aDogJy91c2Vycy86aWQnLFxyXG4gICAgICAgIGNvbXBvbmVudDogTG9hZGFibGUoe1xyXG4gICAgICAgICAgICBsb2FkZXI6ICgpID0+IGltcG9ydCgnLi9jb21wb25lbnRzL3VzZXJHcmlkJyksXHJcbiAgICAgICAgICAgIGxvYWRpbmc6IExvYWRpbmdcclxuICAgICAgICB9KSxcclxuICAgICAgICBsb2FkRGF0YTogKHBhdGggPSAnJykgPT4gZmV0Y2hVc2VyKFxyXG4gICAgICAgICAgICAgICAgcGF0aC5zcGxpdCgnLycpLnBvcCgpXHJcbiAgICAgICAgICAgIClcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgcGF0aDogJyonLFxyXG4gICAgICAgIGNvbXBvbmVudDogIE5vTWF0Y2hcclxuICAgIH1cclxuXVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm91dGVzXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbW1vbi9yb3V0ZXMuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1sb2FkYWJsZVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlYWN0LWxvYWRhYmxlXCJcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtcm91dGVyLWRvbVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlYWN0LXJvdXRlci1kb21cIlxuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCJpbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy1mZXRjaCdcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmZXRjaFBvcHVsYXJSZXBvcyAobGFuZ3VhZ2UgPSAnYWxsJykge1xyXG4gICAgY29uc3QgZW5jb2RlZFVSSSA9IGVuY29kZVVSSShgaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS9zZWFyY2gvcmVwb3NpdG9yaWVzP3E9c3RhcnM6PjErbGFuZ3VhZ2U6JHtsYW5ndWFnZX0mc29ydD1zdGFycyZvcmRlcj1kZXNjJnR5cGU9UmVwb3NpdG9yaWVzYClcclxuXHJcbiAgICByZXR1cm4gZmV0Y2goZW5jb2RlZFVSSSlcclxuICAgICAgICAudGhlbihkYXRhID0+IGRhdGEuanNvbigpIClcclxuICAgICAgICAudGhlbihyZXBvcyA9PiByZXBvcy5pdGVtcylcclxuICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKGVycilcclxuICAgICAgICAgICAgcmV0dXJuIG51bGxcclxuICAgICAgICB9KVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hVc2VyKHVzZXIgPSAnICcpIHtcclxuICAgIGNvbnN0IGVuY29kZWRVUkkgPSBlbmNvZGVVUkkoYGh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvJHt1c2VyfWApXHJcblxyXG4gICAgcmV0dXJuIGZldGNoKGVuY29kZWRVUkkpXHJcbiAgICAgICAgLnRoZW4oZGF0YSA9PiBkYXRhLmpzb24oKSApXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihlcnIpXHJcbiAgICAgICAgICAgIHJldHVybiBudWxsXHJcbiAgICAgICAgfSlcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21tb24vYXBpLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gNSIsImltcG9ydCByZWR1Y2VyUmVnaXN0cnkgZnJvbSAnLi9yZWR1Y2VyUmVnaXN0cnknO1xyXG5cclxuLy8gSW5pdGlhbCBTdGF0ZVxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7fVxyXG5cclxuLy8gQ29uc3RhbnRzXHJcbmV4cG9ydCBjb25zdCBJTkNSRU1FTlQgPSBcIklOQ1JFTUVOVFwiXHJcbmV4cG9ydCBjb25zdCBERUNSRU1FTlQgPSBcIkRFQ1JFTUVOVFwiXHJcbmV4cG9ydCBjb25zdCBBRERfVVNFUiA9IFwiQUREX1VTRVJcIlxyXG5cclxuLy8gQWN0aW9uc1xyXG5leHBvcnQgY29uc3QgaW5jcmVtZW50ID0gKHVzZXIpID0+ICh7XHJcbiAgICB0eXBlOiBJTkNSRU1FTlQsXHJcbiAgICBwYXlsb2FkOiB1c2VyXHJcbn0pO1xyXG5leHBvcnQgY29uc3QgZGVjcmVtZW50ID0gKHVzZXIpID0+ICh7XHJcbiAgICB0eXBlOiBERUNSRU1FTlQsXHJcbiAgICBwYXlsb2FkOiB1c2VyXHJcbn0pO1xyXG5leHBvcnQgY29uc3QgYWRkVXNlciA9ICh1c2VyKSA9PiAoe1xyXG4gICAgdHlwZTogQUREX1VTRVIsXHJcbiAgICBwYXlsb2FkOiB1c2VyXHJcbn0pO1xyXG5cclxuLy8gUmVkdWNlciBOYW1lXHJcbmNvbnN0IHJlZHVjZXJOYW1lID0gJ2NvdW50ZXInO1xyXG5cclxuLy8gUmVkdWNlclxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pe1xyXG4gICAgc3dpdGNoKGFjdGlvbi50eXBlKXtcclxuICAgICAgICBjYXNlIEFERF9VU0VSOlxyXG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHsgW2FjdGlvbi5wYXlsb2FkXTogMCB9KVxyXG4gICAgICAgIGNhc2UgSU5DUkVNRU5UOlxyXG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHsgW2FjdGlvbi5wYXlsb2FkXTogKytzdGF0ZVthY3Rpb24ucGF5bG9hZF0gfSlcclxuICAgICAgICBjYXNlIERFQ1JFTUVOVDpcclxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7IFthY3Rpb24ucGF5bG9hZF06IC0tc3RhdGVbYWN0aW9uLnBheWxvYWRdIH0pXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgICB9XHJcbn1cclxuXHJcbi8vUmVnaXN0ZXIgUmVkdWNlclxyXG5yZWR1Y2VyUmVnaXN0cnkucmVnaXN0ZXIocmVkdWNlck5hbWUsIHJlZHVjZXIpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21tb24vcmVkdXgtbW9kdWxzL2NvdW50ZXJNb2R1bGUuanMiLCJpbXBvcnQgeyBTdGF0aWNSb3V0ZXIsIG1hdGNoUGF0aCB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCJcclxuaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tICdyZWFjdC1kb20vc2VydmVyJ1xyXG5pbXBvcnQgc2VyaWFsaXplIGZyb20gXCJzZXJpYWxpemUtamF2YXNjcmlwdFwiXHJcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCByZWR1Y2VycyBmcm9tICcuL3JlZHV4UmVkdWNlcnMnXHJcbmltcG9ydCByb3V0ZXMgZnJvbSAnLi4vY29tbW9uL3JvdXRlcydcclxuaW1wb3J0IExvYWRhYmxlIGZyb20gJ3JlYWN0LWxvYWRhYmxlJ1xyXG5pbXBvcnQgeyBjcmVhdGVTdG9yZSB9IGZyb20gJ3JlZHV4J1xyXG5pbXBvcnQgQXBwIGZyb20gJy4uL2NvbW1vbi9BcHAnXHJcbmltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGNvcnMgZnJvbSAnY29ycydcclxuXHJcbmNvbnN0IGFwcCA9IGV4cHJlc3MoKVxyXG5jb25zdCBwb3J0ID0gMzAwMDtcclxuXHJcbmFwcC51c2UoY29ycygpKVxyXG5cclxuYXBwLnVzZShleHByZXNzLnN0YXRpYygncHVibGljJykpXHJcblxyXG5hcHAuZ2V0KCAnKicgLCAocmVxLCByZXMsIG5leHQpID0+IHtcclxuICAgIGNvbnN0IGFjdGl2ZVJvdXRlID0gcm91dGVzLmZpbmQoKHJvdXRlKSA9PiBtYXRjaFBhdGgocmVxLnVybCwgcm91dGUpKSB8fCB7fVxyXG5cclxuICAgIGNvbnN0IHByb21pc2UgPSBhY3RpdmVSb3V0ZS5sb2FkRGF0YVxyXG4gICAgICAgID8gYWN0aXZlUm91dGUubG9hZERhdGEocmVxLnBhdGgpXHJcbiAgICAgICAgOiBQcm9taXNlLnJlc29sdmUoKVxyXG5cclxuXHJcbiAgICBwcm9taXNlXHJcbiAgICAgICAgLnRoZW4oIGRhdGEgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXJzKVxyXG4gICAgICAgICAgICBjb25zdCBwcmVsb2FkZWRTdGF0ZSA9IHN0b3JlLmdldFN0YXRlKClcclxuICAgICAgICAgICAgY29uc3QgY29udGV4dCA9IHsgZGF0YSB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBtYXJrdXAgPSByZW5kZXJUb1N0cmluZyhcclxuICAgICAgICAgICAgICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxTdGF0aWNSb3V0ZXIgbG9jYXRpb249e3JlcS51cmx9ICBjb250ZXh0PXtjb250ZXh0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEFwcCBkYXRhPXtkYXRhfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9TdGF0aWNSb3V0ZXI+XHJcbiAgICAgICAgICAgICAgICA8L1Byb3ZpZGVyPlxyXG4gICAgICAgICAgICApXHJcblxyXG4gICAgICAgICAgICByZXMuc2VuZChgXHJcbiAgICAgICAgICAgICAgICA8IWRvY3R5cGUgaHRtbD5cclxuICAgICAgICAgICAgICAgIDxodG1sPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIDxoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aXRsZT5NeSBhcHA8L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzY3JpcHQgc3JjPVwiL2J1bmRsZS5qc1wiIGRlZmVyPjwvc2NyaXB0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzY3JpcHQ+IHdpbmRvdy5fX0lOSVRJQUxfREFUQV9fID0gJHtzZXJpYWxpemUoZGF0YSl9IDwvc2NyaXB0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzY3JpcHQ+IHdpbmRvdy5fX1BSRUxPQURFRF9TVEFURV9fID0gJHtzZXJpYWxpemUocHJlbG9hZGVkU3RhdGUpfSA8L3NjcmlwdD4gXHJcbiAgICAgICAgICAgICAgICAgIDwvaGVhZD5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICA8Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiYXBwXCI+ICR7bWFya3VwfSA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9ib2R5PlxyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvaHRtbD5cclxuICAgICAgICAgICAgYClcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChuZXh0KVxyXG59KVxyXG5cclxuTG9hZGFibGUucHJlbG9hZEFsbCgpLnRoZW4oKCkgPT4ge1xyXG4gICAgYXBwLmxpc3RlbiggcG9ydCwgKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBTZXJ2ZXIgaXMgbGlzdGVuaW5nIG9uIHBvcnQ6ICR7cG9ydH1gKVxyXG4gICAgfSlcclxufSlcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2VydmVyL2luZGV4LmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZG9tL3NlcnZlclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlYWN0LWRvbS9zZXJ2ZXJcIlxuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzZXJpYWxpemUtamF2YXNjcmlwdFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInNlcmlhbGl6ZS1qYXZhc2NyaXB0XCJcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gNSIsImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4JztcclxuXHJcbmltcG9ydCByZWR1Y2VyICBmcm9tICcuLi9jb21tb24vcmVkdXgtbW9kdWxzL2NvdW50ZXJNb2R1bGUnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb21iaW5lUmVkdWNlcnMoe1xyXG4gICAgY291bnRlcjogcmVkdWNlclxyXG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2VydmVyL3JlZHV4UmVkdWNlcnMuanMiLCJleHBvcnQgY2xhc3MgUmVkdWNlclJlZ2lzdHJ5IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuX2VtaXRDaGFuZ2UgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuX3JlZHVjZXJzID0ge307XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UmVkdWNlcnMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHsgLi4udGhpcy5fcmVkdWNlcnMgfTtcclxuICAgIH1cclxuXHJcbiAgICByZWdpc3RlcihuYW1lLCByZWR1Y2VyKSB7XHJcbiAgICAgICAgdGhpcy5fcmVkdWNlcnMgPSB7IC4uLnRoaXMuX3JlZHVjZXJzLCBbbmFtZV06IHJlZHVjZXIgfTtcclxuICAgICAgICBpZiAodGhpcy5fZW1pdENoYW5nZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9lbWl0Q2hhbmdlKHRoaXMuZ2V0UmVkdWNlcnMoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNldENoYW5nZUxpc3RlbmVyKGxpc3RlbmVyKSB7XHJcbiAgICAgICAgdGhpcy5fZW1pdENoYW5nZSA9IGxpc3RlbmVyO1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCByZWR1Y2VyUmVnaXN0cnkgPSBuZXcgUmVkdWNlclJlZ2lzdHJ5KCk7XHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXJSZWdpc3RyeTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tbW9uL3JlZHV4LW1vZHVscy9yZWR1Y2VyUmVnaXN0cnkuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpc29tb3JwaGljLWZldGNoXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiaXNvbW9ycGhpYy1mZXRjaFwiXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2FkaW5nKHByb3BzKSB7XHJcbiAgICBpZiAocHJvcHMuZXJyb3IpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPHA+IEVycm9yISA8L3A+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eyBwcm9wcy5yZXRyeSB9PiBSZXRyeSA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIClcclxuICAgIH0gZWxzZSBpZiAocHJvcHMucGFzdERlbGF5KSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxwPkxvYWRpbmcuLi48L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGxcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21tb24vY29tcG9uZW50cy9Mb2FkaW5nLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTm9NYXRjaCAoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxoMT4gRXJyb3I6IEZvdXIgT2ggRm91ciA8L2gxPlxyXG4gICAgICAgICAgICA8cD4gSW52YWxpZCByb3V0LiA8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tbW9uL2NvbXBvbmVudHMvTm9NYXRjaC5qcyIsImltcG9ydCB7IHJlbmRlclJvdXRlcyB9IGZyb20gJ3JlYWN0LXJvdXRlci1jb25maWcnXHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHJvdXRlcyBmcm9tICcuL3JvdXRlcydcclxuaW1wb3J0IHsgUm91dGUsIFN3aXRjaCB9IGZyb20gJ3JlYWN0LXJvdXRlcidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxoMT5UaGlzIGlzIEFwcCByb290IHBhZ2UuPC9oMT5cclxuICAgICAgICAgICAgICAgIDxoci8+XHJcbiAgICAgICAgICAgICAgICB7cmVuZGVyUm91dGVzKHJvdXRlcyl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbW1vbi9BcHAuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yb3V0ZXItY29uZmlnXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVhY3Qtcm91dGVyLWNvbmZpZ1wiXG4vLyBtb2R1bGUgaWQgPSAxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yb3V0ZXJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWFjdC1yb3V0ZXJcIlxuLy8gbW9kdWxlIGlkID0gMThcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImV4cHJlc3NcIlxuLy8gbW9kdWxlIGlkID0gMTlcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvcnNcIlxuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSA1Il0sInNvdXJjZVJvb3QiOiIifQ==