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
exports.fetchPopularRepos = fetchPopularRepos;
exports.fetchUser = fetchUser;

var _isomorphicFetch = __webpack_require__(10);

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

function fetchUser() {
    var user = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'someone';

    var encodedURI = encodeURI('https://api.github.com/users/' + user);

    return (0, _isomorphicFetch2.default)(encodedURI).then(function (data) {
        return data.json();
    }).catch(function (err) {
        console.warn(err);
        return null;
    });
}

/***/ }),
/* 3 */
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

var _repoGrid = __webpack_require__(9);

var _repoGrid2 = _interopRequireDefault(_repoGrid);

var _userGrid = __webpack_require__(11);

var _userGrid2 = _interopRequireDefault(_userGrid);

var _api = __webpack_require__(2);

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
    component: _repoGrid2.default,
    loadData: function loadData() {
        var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
        return (0, _api.fetchPopularRepos)(path.split('/').pop());
    }
}, {
    path: '/users',
    exact: true,
    component: _Users2.default
}, {
    path: '/users/:id',
    component: _userGrid2.default,
    loadData: function loadData() {
        var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
        return (0, _api.fetchUser)(path.split('/').pop());
    }
}];

exports.default = routes;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(5);

var _express2 = _interopRequireDefault(_express);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _routes = __webpack_require__(3);

var _routes2 = _interopRequireDefault(_routes);

var _cors = __webpack_require__(12);

var _cors2 = _interopRequireDefault(_cors);

var _server = __webpack_require__(13);

var _App = __webpack_require__(14);

var _App2 = _interopRequireDefault(_App);

var _serializeJavascript = __webpack_require__(16);

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

    var promise = activeRoute.loadData ? activeRoute.loadData(req.path) : Promise.resolve();

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

var _api = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RepoGrid = function (_Component) {
    _inherits(RepoGrid, _Component);

    function RepoGrid(props) {
        _classCallCheck(this, RepoGrid);

        var _this = _possibleConstructorReturn(this, (RepoGrid.__proto__ || Object.getPrototypeOf(RepoGrid)).call(this, props));

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

    _createClass(RepoGrid, [{
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

            (0, _api.fetchPopularRepos)(lang).then(function (repos) {
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

    return RepoGrid;
}(_react.Component);

exports.default = RepoGrid;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _api = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UserGrid = function (_Component) {
    _inherits(UserGrid, _Component);

    function UserGrid(props) {
        _classCallCheck(this, UserGrid);

        var _this = _possibleConstructorReturn(this, (UserGrid.__proto__ || Object.getPrototypeOf(UserGrid)).call(this, props));

        var user = void 0;

        if (false) {
            user = window.__INITIAL_DATA__;
            delete window.__INITIAL_DATA__;
        } else {
            user = props.staticContext.data;
        }

        _this.state = {
            user: user,
            loading: user ? false : true
        };

        _this.getUser = _this.getUser.bind(_this);
        return _this;
    }

    _createClass(UserGrid, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (!this.state.user) {
                this.getUser(this.props.match.params.id);
            }
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps) {
            if (prevProps.match.params.id !== this.props.match.params.id) {
                this.getUser(this.props.match.params.id);
            }
        }
    }, {
        key: 'getUser',
        value: function getUser(name) {
            var _this2 = this;

            this.setState(function () {
                return {
                    loading: true
                };
            });

            (0, _api.fetchUser)(name).then(function (user) {
                return _this2.setState(function () {
                    return {
                        user: user,
                        loading: false
                    };
                });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _state = this.state,
                user = _state.user,
                loading = _state.loading;


            if (loading) {
                return _react2.default.createElement(
                    'p',
                    null,
                    'Loading...'
                );
            }

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement('img', { src: user.avatar_url, alt: 'Avatar' }),
                _react2.default.createElement(
                    'a',
                    { href: user.url },
                    _react2.default.createElement(
                        'h5',
                        null,
                        user.login
                    )
                ),
                _react2.default.createElement(
                    'p',
                    null,
                    'Followers: ',
                    user.followers
                ),
                _react2.default.createElement(
                    'p',
                    null,
                    'Following: ',
                    user.following
                )
            );
        }
    }]);

    return UserGrid;
}(_react.Component);

exports.default = UserGrid;

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

var _routes = __webpack_require__(3);

var _routes2 = _interopRequireDefault(_routes);

var _reactRouterConfig = __webpack_require__(15);

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

module.exports = require("react-router-config");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOTlmMTU1OTQ5OGYyMTUzMDg0ODkiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yb3V0ZXItZG9tXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9yb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHByZXNzXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9Ib21lLmpzIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvTGFuZ3VhZ2VzLmpzIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvVXNlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9yZXBvR3JpZC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpc29tb3JwaGljLWZldGNoXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC91c2VyR3JpZC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtZG9tL3NlcnZlclwiIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvQXBwLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJvdXRlci1jb25maWdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzZXJpYWxpemUtamF2YXNjcmlwdFwiIl0sIm5hbWVzIjpbImZldGNoUG9wdWxhclJlcG9zIiwiZmV0Y2hVc2VyIiwibGFuZ3VhZ2UiLCJlbmNvZGVkVVJJIiwiZW5jb2RlVVJJIiwidGhlbiIsImRhdGEiLCJqc29uIiwicmVwb3MiLCJpdGVtcyIsImNhdGNoIiwiY29uc29sZSIsIndhcm4iLCJlcnIiLCJ1c2VyIiwicm91dGVzIiwicGF0aCIsImV4YWN0IiwiY29tcG9uZW50IiwiSG9tZSIsIkxhbmd1YWdlcyIsIlJlcG9HcmlkIiwibG9hZERhdGEiLCJzcGxpdCIsInBvcCIsIlVzZXJzIiwiVXNlckdyaWQiLCJhcHAiLCJwb3J0IiwidXNlIiwiZXhwcmVzcyIsInN0YXRpYyIsImdldCIsInJlcSIsInJlcyIsIm5leHQiLCJhY3RpdmVSb3V0ZSIsImZpbmQiLCJyb3V0ZSIsInVybCIsInByb21pc2UiLCJQcm9taXNlIiwicmVzb2x2ZSIsImNvbnRleHQiLCJtYXJrdXAiLCJzZW5kIiwibGlzdGVuIiwibG9nIiwiZm9udFdlaWdodCIsImxhbmd1YWdlcyIsIm5hbWUiLCJwYXJhbSIsIm1hcCIsInVzZXJzIiwicHJvcHMiLCJfX2lzQnJvd3Nlcl9fIiwid2luZG93IiwiX19JTklUSUFMX0RBVEFfXyIsInN0YXRpY0NvbnRleHQiLCJzdGF0ZSIsImxvYWRpbmciLCJmZXRjaFJlcG9zIiwiYmluZCIsIm1hdGNoIiwicGFyYW1zIiwiaWQiLCJwcmV2UHJvcHMiLCJsYW5nIiwic2V0U3RhdGUiLCJkaXNwbGF5IiwiZmxleFdyYXAiLCJvd25lciIsInN0YXJnYXplcnNfY291bnQiLCJodG1sX3VybCIsIm1hcmdpbiIsImxvZ2luIiwiQ29tcG9uZW50IiwiZ2V0VXNlciIsImF2YXRhcl91cmwiLCJmb2xsb3dlcnMiLCJmb2xsb3dpbmciLCJBcHAiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFB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QURUOzs7QUFHTCxnQkFBSUEsT0FBSixFQUFhO0FBQ1QsdUJBQU87QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBUDtBQUNIOztBQUVELG1CQUNJO0FBQUE7QUFBQTtBQUNJLHVEQUFLLEtBQUs5QyxLQUFLZ0UsVUFBZixFQUEyQixLQUFJLFFBQS9CLEdBREo7QUFFSTtBQUFBO0FBQUEsc0JBQUcsTUFBTWhFLEtBQUt5QixHQUFkO0FBQ0k7QUFBQTtBQUFBO0FBQUt6Qiw2QkFBSzZEO0FBQVY7QUFESixpQkFGSjtBQUtJO0FBQUE7QUFBQTtBQUFBO0FBQWU3RCx5QkFBS2lFO0FBQXBCLGlCQUxKO0FBTUk7QUFBQTtBQUFBO0FBQUE7QUFBZWpFLHlCQUFLa0U7QUFBcEI7QUFOSixhQURKO0FBVUg7Ozs7RUE5RGtCSixnQjs7a0JBaUVSbEQsUTs7Ozs7O0FDcEVmLGlDOzs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7O0lBR011RCxHOzs7Ozs7Ozs7OztpQ0FDTztBQUNMLG1CQUNJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREo7QUFFSSx5REFGSjtBQUdPLHFEQUFhbEUsZ0JBQWI7QUFIUCxhQURKO0FBT0g7Ozs7RUFUYTZELGdCOztrQkFZSEssRzs7Ozs7O0FDakJmLGdEOzs7Ozs7QUNBQSxpRCIsImZpbGUiOiJzZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgOTlmMTU1OTQ5OGYyMTUzMDg0ODkiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlYWN0XCJcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtcm91dGVyLWRvbVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlYWN0LXJvdXRlci1kb21cIlxuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy1mZXRjaCdcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmZXRjaFBvcHVsYXJSZXBvcyAobGFuZ3VhZ2UgPSAnYWxsJykge1xyXG4gICAgY29uc3QgZW5jb2RlZFVSSSA9IGVuY29kZVVSSShgaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS9zZWFyY2gvcmVwb3NpdG9yaWVzP3E9c3RhcnM6PjErbGFuZ3VhZ2U6JHtsYW5ndWFnZX0mc29ydD1zdGFycyZvcmRlcj1kZXNjJnR5cGU9UmVwb3NpdG9yaWVzYClcclxuXHJcbiAgICByZXR1cm4gZmV0Y2goZW5jb2RlZFVSSSlcclxuICAgICAgICAudGhlbihkYXRhID0+IGRhdGEuanNvbigpIClcclxuICAgICAgICAudGhlbihyZXBvcyA9PiByZXBvcy5pdGVtcylcclxuICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKGVycilcclxuICAgICAgICAgICAgcmV0dXJuIG51bGxcclxuICAgICAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoVXNlcih1c2VyID0gJ3NvbWVvbmUnKSB7XHJcbiAgICBjb25zdCBlbmNvZGVkVVJJID0gZW5jb2RlVVJJKGBodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzLyR7dXNlcn1gKVxyXG5cclxuICAgIHJldHVybiBmZXRjaChlbmNvZGVkVVJJKVxyXG4gICAgICAgIC50aGVuKGRhdGEgPT4gZGF0YS5qc29uKCkgKVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oZXJyKVxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgICAgIH0pO1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NoYXJlZC9hcGkuanMiLCJpbXBvcnQgSG9tZSBmcm9tICcuL0hvbWUnXHJcbmltcG9ydCBMYW5ndWFnZXMgZnJvbSAnLi9MYW5ndWFnZXMnXHJcbmltcG9ydCBVc2VycyBmcm9tICcuL1VzZXJzJ1xyXG5pbXBvcnQgUmVwb0dyaWQgZnJvbSAnLi9yZXBvR3JpZCdcclxuaW1wb3J0IFVzZXJHcmlkIGZyb20gJy4vdXNlckdyaWQnXHJcbmltcG9ydCB7IGZldGNoUG9wdWxhclJlcG9zLCBmZXRjaFVzZXIgfSBmcm9tICcuL2FwaSdcclxuXHJcbmNvbnN0IHJvdXRlcyA9ICBbXHJcbiAgICB7XHJcbiAgICAgICAgcGF0aDogJy8nLFxyXG4gICAgICAgIGV4YWN0OiB0cnVlLFxyXG4gICAgICAgIGNvbXBvbmVudDogSG9tZVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBwYXRoOiAnL2xhbmd1YWdlcycsXHJcbiAgICAgICAgZXhhY3Q6IHRydWUsXHJcbiAgICAgICAgY29tcG9uZW50OiBMYW5ndWFnZXNcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgcGF0aDogJy9sYW5ndWFnZXMvOmlkJyxcclxuICAgICAgICBjb21wb25lbnQ6IFJlcG9HcmlkLFxyXG4gICAgICAgIGxvYWREYXRhOiAocGF0aCA9ICcnKSA9PiBmZXRjaFBvcHVsYXJSZXBvcyhcclxuICAgICAgICAgICAgICAgIHBhdGguc3BsaXQoJy8nKS5wb3AoKVxyXG4gICAgICAgICAgICApXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHBhdGg6ICcvdXNlcnMnLFxyXG4gICAgICAgIGV4YWN0OiB0cnVlLFxyXG4gICAgICAgIGNvbXBvbmVudDogVXNlcnNcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgcGF0aDogJy91c2Vycy86aWQnLFxyXG4gICAgICAgIGNvbXBvbmVudDogVXNlckdyaWQsXHJcbiAgICAgICAgbG9hZERhdGE6IChwYXRoID0gJycpID0+IGZldGNoVXNlcihcclxuICAgICAgICAgICAgICAgIHBhdGguc3BsaXQoJy8nKS5wb3AoKVxyXG4gICAgICAgICAgICApXHJcbiAgICB9XHJcbl1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvdXRlc1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zaGFyZWQvcm91dGVzLmpzIiwiaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcydcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgcm91dGVzIGZyb20gJy4uL3NoYXJlZC9yb3V0ZXMnXHJcbmltcG9ydCBjb3JzIGZyb20gJ2NvcnMnXHJcbmltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSAncmVhY3QtZG9tL3NlcnZlcidcclxuaW1wb3J0IEFwcCBmcm9tICcuLi9zaGFyZWQvQXBwJ1xyXG5pbXBvcnQgc2VyaWFsaXplIGZyb20gXCJzZXJpYWxpemUtamF2YXNjcmlwdFwiXHJcbmltcG9ydCB7IFN0YXRpY1JvdXRlciwgbWF0Y2hQYXRoIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIlxyXG5cclxuXHJcbmNvbnN0IGFwcCA9IGV4cHJlc3MoKVxyXG5jb25zdCBwb3J0ID0gMzAwMDtcclxuXHJcbmFwcC51c2UoY29ycygpKVxyXG5cclxuYXBwLnVzZShleHByZXNzLnN0YXRpYygncHVibGljJykpXHJcblxyXG5hcHAuZ2V0KCAnKicgLCAocmVxLCByZXMsIG5leHQpID0+IHtcclxuICAgIGNvbnN0IGFjdGl2ZVJvdXRlID0gcm91dGVzLmZpbmQoKHJvdXRlKSA9PiBtYXRjaFBhdGgocmVxLnVybCwgcm91dGUpKSB8fCB7fVxyXG5cclxuXHJcbiAgICBjb25zdCBwcm9taXNlID0gYWN0aXZlUm91dGUubG9hZERhdGFcclxuICAgICAgICA/IGFjdGl2ZVJvdXRlLmxvYWREYXRhKHJlcS5wYXRoKVxyXG4gICAgICAgIDogUHJvbWlzZS5yZXNvbHZlKClcclxuXHJcblxyXG4gICAgcHJvbWlzZVxyXG4gICAgICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBjb250ZXh0ID0geyBkYXRhIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IG1hcmt1cCA9IHJlbmRlclRvU3RyaW5nKFxyXG4gICAgICAgICAgICAgICAgPFN0YXRpY1JvdXRlciBsb2NhdGlvbj17cmVxLnVybH0gIGNvbnRleHQ9e2NvbnRleHR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxBcHAgZGF0YT17ZGF0YX0vPlxyXG4gICAgICAgICAgICAgICAgPC9TdGF0aWNSb3V0ZXI+XHJcbiAgICAgICAgICAgIClcclxuXHJcbiAgICAgICAgICAgIHJlcy5zZW5kKGBcclxuICAgICAgICAgICAgICAgIDwhZG9jdHlwZSBodG1sPlxyXG4gICAgICAgICAgICAgICAgPGh0bWw+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgPGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRpdGxlPlNTUiB3aXRoIFJSPC90aXRsZT5cclxuICAgICAgICAgICAgICAgICAgICA8c2NyaXB0IHNyYz1cIi9idW5kbGUuanNcIiBkZWZlcj48L3NjcmlwdD5cclxuICAgICAgICAgICAgICAgICAgICA8c2NyaXB0PiB3aW5kb3cuX19JTklUSUFMX0RBVEFfXyA9ICR7c2VyaWFsaXplKGRhdGEpfSA8L3NjcmlwdD5cclxuICAgICAgICAgICAgICAgICAgPC9oZWFkPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIDxib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJhcHBcIj4gJHttYXJrdXB9IDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2JvZHk+XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9odG1sPlxyXG4gICAgICAgICAgICBgKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKG5leHQpXHJcbn0pXHJcblxyXG5cclxuYXBwLmxpc3RlbiggcG9ydCwgKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coYFNlcnZlciBpcyBsaXN0ZW5pbmcgb24gcG9ydDogJHtwb3J0fWApXHJcbn0pXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NlcnZlci9pbmRleC5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJleHByZXNzXCJcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtOYXZMaW5rfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGgyPlRoaXMgaXMgSG9tZSBwYWdlLjwvaDI+XHJcbiAgICAgICAgICAgIDxOYXZMaW5rIGFjdGl2ZVN0eWxlPXt7Zm9udFdlaWdodDogJ2JvbGQnfX0gdG89e2AvbGFuZ3VhZ2VzYH0+XHJcbiAgICAgICAgICAgICAgICBMYW5ndWFnZXNcclxuICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICA8IGJyIC8+XHJcbiAgICAgICAgICAgIDxOYXZMaW5rIGFjdGl2ZVN0eWxlPXt7Zm9udFdlaWdodDogJ2JvbGQnfX0gdG89e2AvdXNlcnNgfT5cclxuICAgICAgICAgICAgICAgIFVzZXJzXHJcbiAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2hhcmVkL0hvbWUuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge05hdkxpbmt9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYW5ndWFnZXMoKSB7XHJcbiAgICBjb25zdCBsYW5ndWFnZXMgPSBbe1xyXG4gICAgICAgIG5hbWU6ICdBbGwnLFxyXG4gICAgICAgIHBhcmFtOiAnYWxsJ1xyXG4gICAgfSwge1xyXG4gICAgICAgIG5hbWU6ICdKYXZhU2NyaXB0JyxcclxuICAgICAgICBwYXJhbTogJ2phdmFzY3JpcHQnLFxyXG4gICAgfSwge1xyXG4gICAgICAgIG5hbWU6ICdSdWJ5JyxcclxuICAgICAgICBwYXJhbTogJ3J1YnknLFxyXG4gICAgfSwge1xyXG4gICAgICAgIG5hbWU6ICdQeXRob24nLFxyXG4gICAgICAgIHBhcmFtOiAncHl0aG9uJyxcclxuICAgIH0sIHtcclxuICAgICAgICBuYW1lOiAnSmF2YScsXHJcbiAgICAgICAgcGFyYW06ICdqYXZhJyxcclxuICAgIH1dXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aDI+VGhpcyBpcyBMYW5ndWFnZXMgcGFnZS48L2gyPlxyXG4gICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICB7bGFuZ3VhZ2VzLm1hcCgoeyBuYW1lLCBwYXJhbSB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17cGFyYW19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TmF2TGluayBhY3RpdmVTdHlsZT17e2ZvbnRXZWlnaHQ6ICdib2xkJ319IHRvPXtgL2xhbmd1YWdlcy8ke3BhcmFtfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NoYXJlZC9MYW5ndWFnZXMuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge05hdkxpbmt9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVXNlcnMoKSB7XHJcbiAgICBjb25zdCB1c2VycyA9IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ01lJyxcclxuICAgICAgICAgICAgICAgIHBhcmFtOiAnVmxhZGlzbGF2QXJrYXZlbmtvJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnSWdvcicsXHJcbiAgICAgICAgICAgICAgICBwYXJhbTogJ3BvbGtwb2xpbzEnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnU29tZW9uZScsXHJcbiAgICAgICAgICAgICAgICBwYXJhbTogJ3NvbWVvbmUnLFxyXG4gICAgICAgICAgICB9XHJcbiAgICBdXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aDI+VGhpcyBpcyBVc2VycyBwYWdlLjwvaDI+XHJcbiAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgIHt1c2Vycy5tYXAoKHsgbmFtZSwgcGFyYW0gfSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e3BhcmFtfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkxpbmsgYWN0aXZlU3R5bGU9e3tmb250V2VpZ2h0OiAnYm9sZCd9fSB0bz17YC91c2Vycy8ke3BhcmFtfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NoYXJlZC9Vc2Vycy5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgZmV0Y2hQb3B1bGFyUmVwb3MgfSBmcm9tICcuL2FwaSdcclxuXHJcbmNsYXNzIFJlcG9HcmlkIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcclxuICAgICAgICBzdXBlcihwcm9wcylcclxuXHJcbiAgICAgICAgbGV0IHJlcG9zXHJcblxyXG4gICAgICAgIGlmIChfX2lzQnJvd3Nlcl9fKSB7XHJcbiAgICAgICAgICAgIHJlcG9zID0gd2luZG93Ll9fSU5JVElBTF9EQVRBX19cclxuICAgICAgICAgICAgZGVsZXRlIHdpbmRvdy5fX0lOSVRJQUxfREFUQV9fXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmVwb3MgPSBwcm9wcy5zdGF0aWNDb250ZXh0LmRhdGFcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHJlcG9zLFxyXG4gICAgICAgICAgICBsb2FkaW5nOiByZXBvcyA/IGZhbHNlIDogdHJ1ZSxcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZmV0Y2hSZXBvcyA9IHRoaXMuZmV0Y2hSZXBvcy5iaW5kKHRoaXMpXHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQgKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS5yZXBvcykge1xyXG4gICAgICAgICAgICB0aGlzLmZldGNoUmVwb3ModGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMuaWQpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZFVwZGF0ZSAocHJldlByb3BzKSB7XHJcbiAgICAgICAgaWYgKHByZXZQcm9wcy5tYXRjaC5wYXJhbXMuaWQgIT09IHRoaXMucHJvcHMubWF0Y2gucGFyYW1zLmlkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmV0Y2hSZXBvcyh0aGlzLnByb3BzLm1hdGNoLnBhcmFtcy5pZClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZmV0Y2hSZXBvcyAobGFuZykge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoICgpID0+ICh7XHJcbiAgICAgICAgICAgIGxvYWRpbmc6IHRydWVcclxuICAgICAgICB9KSApXHJcblxyXG4gICAgICAgIGZldGNoUG9wdWxhclJlcG9zKGxhbmcpXHJcbiAgICAgICAgICAgIC50aGVuKCByZXBvcyA9PiB0aGlzLnNldFN0YXRlKCAoKSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgcmVwb3MsXHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgfSkgKSApXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgcmVwb3MsIGxvYWRpbmcgfSA9IHRoaXMuc3RhdGVcclxuXHJcbiAgICAgICAgaWYgKGxvYWRpbmcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDxwPkxvYWRpbmcuLi48L3A+XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8dWwgc3R5bGU9e3tkaXNwbGF5OiAnZmxleCcsIGZsZXhXcmFwOiAnd3JhcCd9fT5cclxuICAgICAgICAgICAgICAgIHtyZXBvcy5tYXAoKHsgbmFtZSwgb3duZXIsIHN0YXJnYXplcnNfY291bnQsIGh0bWxfdXJsIH0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtuYW1lfSBzdHlsZT17e21hcmdpbjogMzB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9e2h0bWxfdXJsfT57bmFtZX08L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5Ae293bmVyLmxvZ2lufTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+e3N0YXJnYXplcnNfY291bnR9IHN0YXJzPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXBvR3JpZFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zaGFyZWQvcmVwb0dyaWQuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpc29tb3JwaGljLWZldGNoXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiaXNvbW9ycGhpYy1mZXRjaFwiXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGZldGNoVXNlciB9IGZyb20gJy4vYXBpJ1xyXG5cclxuY2xhc3MgVXNlckdyaWQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xyXG4gICAgICAgIHN1cGVyKHByb3BzKVxyXG5cclxuICAgICAgICBsZXQgdXNlclxyXG5cclxuICAgICAgICBpZiAoX19pc0Jyb3dzZXJfXykge1xyXG4gICAgICAgICAgICB1c2VyID0gd2luZG93Ll9fSU5JVElBTF9EQVRBX19cclxuICAgICAgICAgICAgZGVsZXRlIHdpbmRvdy5fX0lOSVRJQUxfREFUQV9fXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdXNlciA9IHByb3BzLnN0YXRpY0NvbnRleHQuZGF0YVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgdXNlcixcclxuICAgICAgICAgICAgbG9hZGluZzogdXNlciA/IGZhbHNlIDogdHJ1ZSxcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZ2V0VXNlciA9IHRoaXMuZ2V0VXNlci5iaW5kKHRoaXMpXHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQgKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS51c2VyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0VXNlcih0aGlzLnByb3BzLm1hdGNoLnBhcmFtcy5pZClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkVXBkYXRlIChwcmV2UHJvcHMpIHtcclxuICAgICAgICBpZiAocHJldlByb3BzLm1hdGNoLnBhcmFtcy5pZCAhPT0gdGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMuaWQpIHtcclxuICAgICAgICAgICAgdGhpcy5nZXRVc2VyKHRoaXMucHJvcHMubWF0Y2gucGFyYW1zLmlkKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRVc2VyIChuYW1lKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSggKCkgPT4gKHtcclxuICAgICAgICAgICAgbG9hZGluZzogdHJ1ZVxyXG4gICAgICAgIH0pIClcclxuXHJcbiAgICAgICAgZmV0Y2hVc2VyKG5hbWUpXHJcbiAgICAgICAgICAgIC50aGVuKCB1c2VyID0+IHRoaXMuc2V0U3RhdGUoICgpID0+ICh7XHJcbiAgICAgICAgICAgICAgICB1c2VyLFxyXG4gICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgIH0pICkgKVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IHVzZXIsIGxvYWRpbmcgfSA9IHRoaXMuc3RhdGVcclxuXHJcbiAgICAgICAgaWYgKGxvYWRpbmcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDxwPkxvYWRpbmcuLi48L3A+XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e3VzZXIuYXZhdGFyX3VybH0gYWx0PVwiQXZhdGFyXCIvPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj17dXNlci51cmx9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNT57dXNlci5sb2dpbn08L2g1PlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPHA+Rm9sbG93ZXJzOiB7dXNlci5mb2xsb3dlcnN9PC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+Rm9sbG93aW5nOiB7dXNlci5mb2xsb3dpbmd9PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVzZXJHcmlkXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NoYXJlZC91c2VyR3JpZC5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcnNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb3JzXCJcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWRvbS9zZXJ2ZXJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWFjdC1kb20vc2VydmVyXCJcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHJvdXRlcyBmcm9tICcuL3JvdXRlcydcclxuaW1wb3J0IHsgcmVuZGVyUm91dGVzIH0gZnJvbSAncmVhY3Qtcm91dGVyLWNvbmZpZydcclxuXHJcblxyXG5jbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8aDE+VGhpcyBpcyBBcHAgcm9vdCBwYWdlLjwvaDE+XHJcbiAgICAgICAgICAgICAgICA8aHIvPlxyXG4gICAgICAgICAgICAgICAgIHsgcmVuZGVyUm91dGVzKHJvdXRlcykgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcFxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2hhcmVkL0FwcC5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJvdXRlci1jb25maWdcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWFjdC1yb3V0ZXItY29uZmlnXCJcbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNlcmlhbGl6ZS1qYXZhc2NyaXB0XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwic2VyaWFsaXplLWphdmFzY3JpcHRcIlxuLy8gbW9kdWxlIGlkID0gMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==