/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Home = __webpack_require__(6);

var _Home2 = _interopRequireDefault(_Home);

var _Languages = __webpack_require__(7);

var _Languages2 = _interopRequireDefault(_Languages);

var _Users = __webpack_require__(8);

var _Users2 = _interopRequireDefault(_Users);

var _Grid = __webpack_require__(9);

var _Grid2 = _interopRequireDefault(_Grid);

var _api = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = [{
    path: '/',
    exact: true,
    component: _Home2.default
}, {
    path: '/languages',
    exact: true,
    component: _Languages2.default
}, {
    path: '/languages/:id',
    component: _Grid2.default,
    fetchInitialData: function fetchInitialData() {
        var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
        return (0, _api.fetchPopularRepos)(path.split('/').pop());
    }
}, {
    path: '/users',
    exact: true,
    component: _Users2.default
}, {
    path: '/users/:id',
    component: _Grid2.default,
    fetchInitialData: function fetchInitialData() {
        var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
        return (0, _api.fetchPopularRepos)(path.split('/').pop());
    }
}];

exports.default = routes;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-router-config");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(5);

var _express2 = _interopRequireDefault(_express);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _routes = __webpack_require__(2);

var _routes2 = _interopRequireDefault(_routes);

var _cors = __webpack_require__(12);

var _cors2 = _interopRequireDefault(_cors);

var _server = __webpack_require__(13);

var _App = __webpack_require__(14);

var _App2 = _interopRequireDefault(_App);

var _serializeJavascript = __webpack_require__(15);

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

var _reactRouterDom = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var port = 3000;

app.use((0, _cors2.default)());

app.use(_express2.default.static('public'));

app.get('*', function (req, res, next) {
    var activeRoute = _routes2.default.find(function (route) {
        return (0, _reactRouterDom.matchPath)(req.url, route);
    }) || {};

    var promise = activeRoute.fetchInitialData ? activeRoute.fetchInitialData(req.path) : Promise.resolve();

    promise.then(function (data) {
        var context = { data: data };

        var markup = (0, _server.renderToString)(_react2.default.createElement(
            _reactRouterDom.StaticRouter,
            { location: req.url, context: context },
            _react2.default.createElement(_App2.default, { data: data })
        ));

        res.send('\n                <!doctype html>\n                <html>\n                \n                  <head>\n                    <title>SSR with RR</title>\n                    <script src="/bundle.js" defer></script>\n                    <script> window.__INITIAL_DATA__ = ' + (0, _serializeJavascript2.default)(data) + ' </script>\n                  </head>\n                \n                  <body>\n                    <div id="app"> ' + markup + ' </div>\n                  </body>\n                  \n                </html>\n            ');
    }).catch(next);
});

app.listen(port, function () {
    console.log('Server is listening on port: ' + port);
});

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = Home;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Home() {
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'h2',
            null,
            'This is Home page.'
        ),
        _react2.default.createElement(
            _reactRouterDom.NavLink,
            { activeStyle: { fontWeight: 'bold' }, to: '/languages' },
            'Languages'
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
            _reactRouterDom.NavLink,
            { activeStyle: { fontWeight: 'bold' }, to: '/users' },
            'Users'
        )
    );
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = Languages;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Languages() {
    var languages = [{
        name: 'All',
        param: 'all'
    }, {
        name: 'JavaScript',
        param: 'javascript'
    }, {
        name: 'Ruby',
        param: 'ruby'
    }, {
        name: 'Python',
        param: 'python'
    }, {
        name: 'Java',
        param: 'java'
    }];

    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'h2',
            null,
            'This is Languages page.'
        ),
        _react2.default.createElement(
            'ul',
            null,
            languages.map(function (_ref) {
                var name = _ref.name,
                    param = _ref.param;
                return _react2.default.createElement(
                    'li',
                    { key: param },
                    _react2.default.createElement(
                        _reactRouterDom.NavLink,
                        { activeStyle: { fontWeight: 'bold' }, to: '/languages/' + param },
                        name
                    )
                );
            })
        )
    );
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = Users;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Users() {
    var users = [{
        name: 'Me',
        param: 'VladislavArkavenko'
    }, {
        name: 'Igor',
        param: 'polkpolio1'
    }, {
        name: 'Someone',
        param: 'someone'
    }];

    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'h2',
            null,
            'This is Users page.'
        ),
        _react2.default.createElement(
            'ul',
            null,
            users.map(function (_ref) {
                var name = _ref.name,
                    param = _ref.param;
                return _react2.default.createElement(
                    'li',
                    { key: param },
                    _react2.default.createElement(
                        _reactRouterDom.NavLink,
                        { activeStyle: { fontWeight: 'bold' }, to: '/users/' + param },
                        name
                    )
                );
            })
        )
    );
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Grid = function (_Component) {
    _inherits(Grid, _Component);

    function Grid(props) {
        _classCallCheck(this, Grid);

        var _this = _possibleConstructorReturn(this, (Grid.__proto__ || Object.getPrototypeOf(Grid)).call(this, props));

        var repos = void 0;

        if (false) {
            repos = window.__INITIAL_DATA__;
            delete window.__INITIAL_DATA__;
        } else {
            repos = props.staticContext.data;
        }

        _this.state = {
            repos: repos,
            loading: repos ? false : true
        };

        _this.fetchRepos = _this.fetchRepos.bind(_this);
        return _this;
    }

    _createClass(Grid, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (!this.state.repos) {
                this.fetchRepos(this.props.match.params.id);
            }
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps) {
            if (prevProps.match.params.id !== this.props.match.params.id) {
                this.fetchRepos(this.props.match.params.id);
            }
        }
    }, {
        key: 'fetchRepos',
        value: function fetchRepos(lang) {
            var _this2 = this;

            this.setState(function () {
                return {
                    loading: true
                };
            });

            this.props.fetchInitialData(lang).then(function (repos) {
                return _this2.setState(function () {
                    return {
                        repos: repos,
                        loading: false
                    };
                });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _state = this.state,
                repos = _state.repos,
                loading = _state.loading;


            if (loading) {
                return _react2.default.createElement(
                    'p',
                    null,
                    'Loading...'
                );
            }

            return _react2.default.createElement(
                'ul',
                { style: { display: 'flex', flexWrap: 'wrap' } },
                repos.map(function (_ref) {
                    var name = _ref.name,
                        owner = _ref.owner,
                        stargazers_count = _ref.stargazers_count,
                        html_url = _ref.html_url;
                    return _react2.default.createElement(
                        'li',
                        { key: name, style: { margin: 30 } },
                        _react2.default.createElement(
                            'ul',
                            null,
                            _react2.default.createElement(
                                'li',
                                null,
                                _react2.default.createElement(
                                    'a',
                                    { href: html_url },
                                    name
                                )
                            ),
                            _react2.default.createElement(
                                'li',
                                null,
                                '@',
                                owner.login
                            ),
                            _react2.default.createElement(
                                'li',
                                null,
                                stargazers_count,
                                ' stars'
                            )
                        )
                    );
                })
            );
        }
    }]);

    return Grid;
}(_react.Component);

exports.default = Grid;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.fetchPopularRepos = fetchPopularRepos;

var _isomorphicFetch = __webpack_require__(11);

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function fetchPopularRepos() {
    var language = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'all';

    var encodedURI = encodeURI('https://api.github.com/search/repositories?q=stars:>1+language:' + language + '&sort=stars&order=desc&type=Repositories');

    return (0, _isomorphicFetch2.default)(encodedURI).then(function (data) {
        return data.json();
    }).then(function (repos) {
        return repos.items;
    }).catch(function (err) {
        console.warn(err);
        return null;
    });
}
//
// export function fetchUsers(user = '') {
//     const encodedURI = encodeURI(`https://api.github.com/users/${user}`)
//
//     return fetch(encodedURI)
//         .then(data => data.json() )
//         .catch(err => {
//             console.warn(err)
//             return null
//         });
// }

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _routes = __webpack_require__(2);

var _routes2 = _interopRequireDefault(_routes);

var _reactRouterConfig = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
    _inherits(App, _Component);

    function App() {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
    }

    _createClass(App, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'h1',
                    null,
                    'This is App root page.'
                ),
                _react2.default.createElement('hr', null),
                (0, _reactRouterConfig.renderRoutes)(_routes2.default)
            );
        }
    }]);

    return App;
}(_react.Component);

exports.default = App;

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNjdmYWE5NjQ1OThlMWU0N2Q5OWIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yb3V0ZXItZG9tXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9yb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtcm91dGVyLWNvbmZpZ1wiIiwid2VicGFjazovLy8uL3NyYy9zZXJ2ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXhwcmVzc1wiIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvSG9tZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL0xhbmd1YWdlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL1VzZXJzLmpzIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvR3JpZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL2FwaS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpc29tb3JwaGljLWZldGNoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWRvbS9zZXJ2ZXJcIiIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL0FwcC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzZXJpYWxpemUtamF2YXNjcmlwdFwiIl0sIm5hbWVzIjpbInJvdXRlcyIsInBhdGgiLCJleGFjdCIsImNvbXBvbmVudCIsIkhvbWUiLCJMYW5ndWFnZXMiLCJHcmlkIiwiZmV0Y2hJbml0aWFsRGF0YSIsInNwbGl0IiwicG9wIiwiVXNlcnMiLCJhcHAiLCJwb3J0IiwidXNlIiwiZXhwcmVzcyIsInN0YXRpYyIsImdldCIsInJlcSIsInJlcyIsIm5leHQiLCJhY3RpdmVSb3V0ZSIsImZpbmQiLCJyb3V0ZSIsInVybCIsInByb21pc2UiLCJQcm9taXNlIiwicmVzb2x2ZSIsInRoZW4iLCJjb250ZXh0IiwiZGF0YSIsIm1hcmt1cCIsInNlbmQiLCJjYXRjaCIsImxpc3RlbiIsImNvbnNvbGUiLCJsb2ciLCJmb250V2VpZ2h0IiwibGFuZ3VhZ2VzIiwibmFtZSIsInBhcmFtIiwibWFwIiwidXNlcnMiLCJwcm9wcyIsInJlcG9zIiwiX19pc0Jyb3dzZXJfXyIsIndpbmRvdyIsIl9fSU5JVElBTF9EQVRBX18iLCJzdGF0aWNDb250ZXh0Iiwic3RhdGUiLCJsb2FkaW5nIiwiZmV0Y2hSZXBvcyIsImJpbmQiLCJtYXRjaCIsInBhcmFtcyIsImlkIiwicHJldlByb3BzIiwibGFuZyIsInNldFN0YXRlIiwiZGlzcGxheSIsImZsZXhXcmFwIiwib3duZXIiLCJzdGFyZ2F6ZXJzX2NvdW50IiwiaHRtbF91cmwiLCJtYXJnaW4iLCJsb2dpbiIsIkNvbXBvbmVudCIsImZldGNoUG9wdWxhclJlcG9zIiwibGFuZ3VhZ2UiLCJlbmNvZGVkVVJJIiwiZW5jb2RlVVJJIiwianNvbiIsIml0ZW1zIiwid2FybiIsImVyciIsIkFwcCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDN0RBLGtDOzs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7OztBQ0FBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQSxJQUFN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STs7Ozs7Ozs7Ozs7O1FDcEVDNEQsaUIsR0FBQUEsaUI7O0FBRmhCOzs7Ozs7QUFFTyxTQUFTQSxpQkFBVCxHQUE4QztBQUFBLFFBQWxCQyxRQUFrQix1RUFBUCxLQUFPOztBQUNqRCxRQUFNQyxhQUFhQyw4RUFBNEVGLFFBQTVFLDhDQUFuQjs7QUFFQSxXQUFPLCtCQUFNQyxVQUFOLEVBQ0Z6QyxJQURFLENBQ0c7QUFBQSxlQUFRRSxLQUFLeUMsSUFBTCxFQUFSO0FBQUEsS0FESCxFQUVGM0MsSUFGRSxDQUVHO0FBQUEsZUFBU2dCLE1BQU00QixLQUFmO0FBQUEsS0FGSCxFQUdGdkMsS0FIRSxDQUdJLGVBQU87QUFDVkUsZ0JBQVFzQyxJQUFSLENBQWFDLEdBQWI7QUFDQSxlQUFPLElBQVA7QUFDSCxLQU5FLENBQVA7QUFPSDtBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSTs7Ozs7O0FDdkJBLDZDOzs7Ozs7QUNBQSxpQzs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7Ozs7OztBQ0FBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7OztJQUdNQyxHOzs7Ozs7Ozs7OztpQ0FDTztBQUNMLG1CQUNJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREo7QUFFSSx5REFGSjtBQUdPLHFEQUFhMUUsZ0JBQWI7QUFIUCxhQURKO0FBT0g7Ozs7RUFUYWlFLGdCOztrQkFZSFMsRzs7Ozs7O0FDakJmLGlEIiwiZmlsZSI6InNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA0KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA2N2ZhYTk2NDU5OGUxZTQ3ZDk5YiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVhY3RcIlxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yb3V0ZXItZG9tXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVhY3Qtcm91dGVyLWRvbVwiXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBIb21lIGZyb20gJy4vSG9tZSdcclxuaW1wb3J0IExhbmd1YWdlcyBmcm9tICcuL0xhbmd1YWdlcydcclxuaW1wb3J0IFVzZXJzIGZyb20gJy4vVXNlcnMnXHJcbmltcG9ydCBHcmlkIGZyb20gJy4vR3JpZCdcclxuaW1wb3J0IHsgZmV0Y2hQb3B1bGFyUmVwb3MgfSBmcm9tICcuL2FwaSdcclxuXHJcbmNvbnN0IHJvdXRlcyA9ICBbXHJcbiAgICB7XHJcbiAgICAgICAgcGF0aDogJy8nLFxyXG4gICAgICAgIGV4YWN0OiB0cnVlLFxyXG4gICAgICAgIGNvbXBvbmVudDogSG9tZVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBwYXRoOiAnL2xhbmd1YWdlcycsXHJcbiAgICAgICAgZXhhY3Q6IHRydWUsXHJcbiAgICAgICAgY29tcG9uZW50OiBMYW5ndWFnZXNcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgcGF0aDogJy9sYW5ndWFnZXMvOmlkJyxcclxuICAgICAgICBjb21wb25lbnQ6IEdyaWQsXHJcbiAgICAgICAgZmV0Y2hJbml0aWFsRGF0YTogKHBhdGggPSAnJykgPT4gZmV0Y2hQb3B1bGFyUmVwb3MoXHJcbiAgICAgICAgICAgIHBhdGguc3BsaXQoJy8nKS5wb3AoKVxyXG4gICAgICAgIClcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgcGF0aDogJy91c2VycycsXHJcbiAgICAgICAgZXhhY3Q6IHRydWUsXHJcbiAgICAgICAgY29tcG9uZW50OiBVc2Vyc1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBwYXRoOiAnL3VzZXJzLzppZCcsXHJcbiAgICAgICAgY29tcG9uZW50OiBHcmlkLFxyXG4gICAgICAgIGZldGNoSW5pdGlhbERhdGE6IChwYXRoID0gJycpID0+IGZldGNoUG9wdWxhclJlcG9zKFxyXG4gICAgICAgICAgICBwYXRoLnNwbGl0KCcvJykucG9wKClcclxuICAgICAgICApXHJcbiAgICB9XHJcbl1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvdXRlc1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zaGFyZWQvcm91dGVzLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtcm91dGVyLWNvbmZpZ1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlYWN0LXJvdXRlci1jb25maWdcIlxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJ1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCByb3V0ZXMgZnJvbSAnLi4vc2hhcmVkL3JvdXRlcydcclxuaW1wb3J0IGNvcnMgZnJvbSAnY29ycydcclxuaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tICdyZWFjdC1kb20vc2VydmVyJ1xyXG5pbXBvcnQgQXBwIGZyb20gJy4uL3NoYXJlZC9BcHAnXHJcbmltcG9ydCBzZXJpYWxpemUgZnJvbSBcInNlcmlhbGl6ZS1qYXZhc2NyaXB0XCJcclxuaW1wb3J0IHsgU3RhdGljUm91dGVyLCBtYXRjaFBhdGggfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiXHJcblxyXG5cclxuY29uc3QgYXBwID0gZXhwcmVzcygpXHJcbmNvbnN0IHBvcnQgPSAzMDAwO1xyXG5cclxuYXBwLnVzZShjb3JzKCkpXHJcblxyXG5hcHAudXNlKGV4cHJlc3Muc3RhdGljKCdwdWJsaWMnKSlcclxuXHJcbmFwcC5nZXQoICcqJyAsIChyZXEsIHJlcywgbmV4dCkgPT4ge1xyXG4gICAgY29uc3QgYWN0aXZlUm91dGUgPSByb3V0ZXMuZmluZCgocm91dGUpID0+IG1hdGNoUGF0aChyZXEudXJsLCByb3V0ZSkpIHx8IHt9XHJcblxyXG4gICAgY29uc3QgcHJvbWlzZSA9IGFjdGl2ZVJvdXRlLmZldGNoSW5pdGlhbERhdGFcclxuICAgICAgICA/IGFjdGl2ZVJvdXRlLmZldGNoSW5pdGlhbERhdGEocmVxLnBhdGgpXHJcbiAgICAgICAgOiBQcm9taXNlLnJlc29sdmUoKVxyXG5cclxuICAgIHByb21pc2VcclxuICAgICAgICAudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgY29uc3QgY29udGV4dCA9IHsgZGF0YSB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBtYXJrdXAgPSByZW5kZXJUb1N0cmluZyhcclxuICAgICAgICAgICAgICAgIDxTdGF0aWNSb3V0ZXIgbG9jYXRpb249e3JlcS51cmx9ICBjb250ZXh0PXtjb250ZXh0fT5cclxuICAgICAgICAgICAgICAgICAgICA8QXBwIGRhdGE9e2RhdGF9Lz5cclxuICAgICAgICAgICAgICAgIDwvU3RhdGljUm91dGVyPlxyXG4gICAgICAgICAgICApXHJcblxyXG4gICAgICAgICAgICByZXMuc2VuZChgXHJcbiAgICAgICAgICAgICAgICA8IWRvY3R5cGUgaHRtbD5cclxuICAgICAgICAgICAgICAgIDxodG1sPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIDxoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aXRsZT5TU1Igd2l0aCBSUjwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNjcmlwdCBzcmM9XCIvYnVuZGxlLmpzXCIgZGVmZXI+PC9zY3JpcHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNjcmlwdD4gd2luZG93Ll9fSU5JVElBTF9EQVRBX18gPSAke3NlcmlhbGl6ZShkYXRhKX0gPC9zY3JpcHQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvaGVhZD5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICA8Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiYXBwXCI+ICR7bWFya3VwfSA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9ib2R5PlxyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvaHRtbD5cclxuICAgICAgICAgICAgYClcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChuZXh0KVxyXG59KVxyXG5cclxuXHJcbmFwcC5saXN0ZW4oIHBvcnQsICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGBTZXJ2ZXIgaXMgbGlzdGVuaW5nIG9uIHBvcnQ6ICR7cG9ydH1gKVxyXG59KVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zZXJ2ZXIvaW5kZXguanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiZXhwcmVzc1wiXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7TmF2TGlua30gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxoMj5UaGlzIGlzIEhvbWUgcGFnZS48L2gyPlxyXG4gICAgICAgICAgICA8TmF2TGluayBhY3RpdmVTdHlsZT17e2ZvbnRXZWlnaHQ6ICdib2xkJ319IHRvPXtgL2xhbmd1YWdlc2B9PlxyXG4gICAgICAgICAgICAgICAgTGFuZ3VhZ2VzXHJcbiAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgICAgPCBiciAvPlxyXG4gICAgICAgICAgICA8TmF2TGluayBhY3RpdmVTdHlsZT17e2ZvbnRXZWlnaHQ6ICdib2xkJ319IHRvPXtgL3VzZXJzYH0+XHJcbiAgICAgICAgICAgICAgICBVc2Vyc1xyXG4gICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NoYXJlZC9Ib21lLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtOYXZMaW5rfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGFuZ3VhZ2VzKCkge1xyXG4gICAgY29uc3QgbGFuZ3VhZ2VzID0gW3tcclxuICAgICAgICBuYW1lOiAnQWxsJyxcclxuICAgICAgICBwYXJhbTogJ2FsbCdcclxuICAgIH0sIHtcclxuICAgICAgICBuYW1lOiAnSmF2YVNjcmlwdCcsXHJcbiAgICAgICAgcGFyYW06ICdqYXZhc2NyaXB0JyxcclxuICAgIH0sIHtcclxuICAgICAgICBuYW1lOiAnUnVieScsXHJcbiAgICAgICAgcGFyYW06ICdydWJ5JyxcclxuICAgIH0sIHtcclxuICAgICAgICBuYW1lOiAnUHl0aG9uJyxcclxuICAgICAgICBwYXJhbTogJ3B5dGhvbicsXHJcbiAgICB9LCB7XHJcbiAgICAgICAgbmFtZTogJ0phdmEnLFxyXG4gICAgICAgIHBhcmFtOiAnamF2YScsXHJcbiAgICB9XVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGgyPlRoaXMgaXMgTGFuZ3VhZ2VzIHBhZ2UuPC9oMj5cclxuICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAge2xhbmd1YWdlcy5tYXAoKHsgbmFtZSwgcGFyYW0gfSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e3BhcmFtfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkxpbmsgYWN0aXZlU3R5bGU9e3tmb250V2VpZ2h0OiAnYm9sZCd9fSB0bz17YC9sYW5ndWFnZXMvJHtwYXJhbX1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zaGFyZWQvTGFuZ3VhZ2VzLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtOYXZMaW5rfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVzZXJzKCkge1xyXG4gICAgY29uc3QgdXNlcnMgPSBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdNZScsXHJcbiAgICAgICAgICAgICAgICBwYXJhbTogJ1ZsYWRpc2xhdkFya2F2ZW5rbydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ0lnb3InLFxyXG4gICAgICAgICAgICAgICAgcGFyYW06ICdwb2xrcG9saW8xJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ1NvbWVvbmUnLFxyXG4gICAgICAgICAgICAgICAgcGFyYW06ICdzb21lb25lJyxcclxuICAgICAgICAgICAgfVxyXG4gICAgXVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGgyPlRoaXMgaXMgVXNlcnMgcGFnZS48L2gyPlxyXG4gICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICB7dXNlcnMubWFwKCh7IG5hbWUsIHBhcmFtIH0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtwYXJhbX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIGFjdGl2ZVN0eWxlPXt7Zm9udFdlaWdodDogJ2JvbGQnfX0gdG89e2AvdXNlcnMvJHtwYXJhbX1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zaGFyZWQvVXNlcnMuanMiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcblxyXG5jbGFzcyBHcmlkIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcclxuICAgICAgICBzdXBlcihwcm9wcylcclxuXHJcbiAgICAgICAgbGV0IHJlcG9zXHJcblxyXG4gICAgICAgIGlmIChfX2lzQnJvd3Nlcl9fKSB7XHJcbiAgICAgICAgICAgIHJlcG9zID0gd2luZG93Ll9fSU5JVElBTF9EQVRBX19cclxuICAgICAgICAgICAgZGVsZXRlIHdpbmRvdy5fX0lOSVRJQUxfREFUQV9fXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmVwb3MgPSBwcm9wcy5zdGF0aWNDb250ZXh0LmRhdGFcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHJlcG9zLFxyXG4gICAgICAgICAgICBsb2FkaW5nOiByZXBvcyA/IGZhbHNlIDogdHJ1ZSxcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZmV0Y2hSZXBvcyA9IHRoaXMuZmV0Y2hSZXBvcy5iaW5kKHRoaXMpXHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQgKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS5yZXBvcykge1xyXG4gICAgICAgICAgICB0aGlzLmZldGNoUmVwb3ModGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMuaWQpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZFVwZGF0ZSAocHJldlByb3BzKSB7XHJcbiAgICAgICAgaWYgKHByZXZQcm9wcy5tYXRjaC5wYXJhbXMuaWQgIT09IHRoaXMucHJvcHMubWF0Y2gucGFyYW1zLmlkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmV0Y2hSZXBvcyh0aGlzLnByb3BzLm1hdGNoLnBhcmFtcy5pZClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZmV0Y2hSZXBvcyAobGFuZykge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoICgpID0+ICh7XHJcbiAgICAgICAgICAgIGxvYWRpbmc6IHRydWVcclxuICAgICAgICB9KSApXHJcblxyXG4gICAgICAgIHRoaXMucHJvcHMuZmV0Y2hJbml0aWFsRGF0YShsYW5nKVxyXG4gICAgICAgICAgICAudGhlbiggcmVwb3MgPT4gdGhpcy5zZXRTdGF0ZSggKCkgPT4gKHtcclxuICAgICAgICAgICAgICAgIHJlcG9zLFxyXG4gICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgIH0pICkgKVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IHJlcG9zLCBsb2FkaW5nIH0gPSB0aGlzLnN0YXRlXHJcblxyXG4gICAgICAgIGlmIChsb2FkaW5nKSB7XHJcbiAgICAgICAgICAgIHJldHVybiA8cD5Mb2FkaW5nLi4uPC9wPlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPHVsIHN0eWxlPXt7ZGlzcGxheTogJ2ZsZXgnLCBmbGV4V3JhcDogJ3dyYXAnfX0+XHJcbiAgICAgICAgICAgICAgICB7cmVwb3MubWFwKCh7IG5hbWUsIG93bmVyLCBzdGFyZ2F6ZXJzX2NvdW50LCBodG1sX3VybCB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17bmFtZX0gc3R5bGU9e3ttYXJnaW46IDMwfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPXtodG1sX3VybH0+e25hbWV9PC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+QHtvd25lci5sb2dpbn08L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPntzdGFyZ2F6ZXJzX2NvdW50fSBzdGFyczwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgR3JpZFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zaGFyZWQvR3JpZC5qcyIsImltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLWZldGNoJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoUG9wdWxhclJlcG9zIChsYW5ndWFnZSA9ICdhbGwnKSB7XHJcbiAgICBjb25zdCBlbmNvZGVkVVJJID0gZW5jb2RlVVJJKGBodHRwczovL2FwaS5naXRodWIuY29tL3NlYXJjaC9yZXBvc2l0b3JpZXM/cT1zdGFyczo+MStsYW5ndWFnZToke2xhbmd1YWdlfSZzb3J0PXN0YXJzJm9yZGVyPWRlc2MmdHlwZT1SZXBvc2l0b3JpZXNgKVxyXG5cclxuICAgIHJldHVybiBmZXRjaChlbmNvZGVkVVJJKVxyXG4gICAgICAgIC50aGVuKGRhdGEgPT4gZGF0YS5qc29uKCkgKVxyXG4gICAgICAgIC50aGVuKHJlcG9zID0+IHJlcG9zLml0ZW1zKVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oZXJyKVxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgICAgIH0pO1xyXG59XHJcbi8vXHJcbi8vIGV4cG9ydCBmdW5jdGlvbiBmZXRjaFVzZXJzKHVzZXIgPSAnJykge1xyXG4vLyAgICAgY29uc3QgZW5jb2RlZFVSSSA9IGVuY29kZVVSSShgaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy8ke3VzZXJ9YClcclxuLy9cclxuLy8gICAgIHJldHVybiBmZXRjaChlbmNvZGVkVVJJKVxyXG4vLyAgICAgICAgIC50aGVuKGRhdGEgPT4gZGF0YS5qc29uKCkgKVxyXG4vLyAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4vLyAgICAgICAgICAgICBjb25zb2xlLndhcm4oZXJyKVxyXG4vLyAgICAgICAgICAgICByZXR1cm4gbnVsbFxyXG4vLyAgICAgICAgIH0pO1xyXG4vLyB9XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NoYXJlZC9hcGkuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpc29tb3JwaGljLWZldGNoXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiaXNvbW9ycGhpYy1mZXRjaFwiXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29yc1wiXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1kb20vc2VydmVyXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVhY3QtZG9tL3NlcnZlclwiXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCByb3V0ZXMgZnJvbSAnLi9yb3V0ZXMnXHJcbmltcG9ydCB7IHJlbmRlclJvdXRlcyB9IGZyb20gJ3JlYWN0LXJvdXRlci1jb25maWcnXHJcblxyXG5cclxuY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGgxPlRoaXMgaXMgQXBwIHJvb3QgcGFnZS48L2gxPlxyXG4gICAgICAgICAgICAgICAgPGhyLz5cclxuICAgICAgICAgICAgICAgICB7IHJlbmRlclJvdXRlcyhyb3V0ZXMpIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHBcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NoYXJlZC9BcHAuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzZXJpYWxpemUtamF2YXNjcmlwdFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInNlcmlhbGl6ZS1qYXZhc2NyaXB0XCJcbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=