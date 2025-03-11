(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["recombee"] = factory();
	else
		root["recombee"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/api-client.js":
/*!***************************!*\
  !*** ./src/api-client.js ***!
  \***************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var jsSHA = __webpack_require__(/*! jssha */ "./node_modules/.pnpm/jssha@3.3.1/node_modules/jssha/dist/sha.js");
var api_errors = __webpack_require__(/*! ./errors */ "./src/errors/index.js");

/**
 * Client for sending requests to Recombee and getting replies
 */
var ApiClient = /*#__PURE__*/function () {
  /**
   * Construct the client
   * @param {string} databaseId - ID of your database
   * @param {string} publicToken - Corresponding public token
   * @param {Object} options - Other custom options
   */
  function ApiClient(databaseId, publicToken, options) {
    _classCallCheck(this, ApiClient);
    this.databaseId = databaseId;
    this.publicToken = publicToken;
    this.options = options || {};
    this.baseUri = this._getBaseUri();
    this.useHttps = 'useHttps' in this.options ? this.options.useHttps : true;
    this.async = 'async' in this.options ? this.options.async : true;
    this.future_v6_fetch = 'future_v6_fetch' in this.options ? this.options.future_v6_fetch : false;
  }
  return _createClass(ApiClient, [{
    key: "_getRegionalBaseUri",
    value: function _getRegionalBaseUri(region) {
      var uri = {
        'ap-se': 'client-rapi-ap-se.recombee.com',
        'ca-east': 'client-rapi-ca-east.recombee.com',
        'eu-west': 'client-rapi-eu-west.recombee.com',
        'us-west': 'client-rapi-us-west.recombee.com'
      }[region.toLowerCase()];
      if (uri === undefined) {
        throw new Error("Region \"".concat(region, "\" is unknown. You may need to update the version of the SDK."));
      }
      return uri;
    }
  }, {
    key: "_getBaseUri",
    value: function _getBaseUri() {
      var baseUri = this.options.baseUri;
      if (this.options.region) {
        if (baseUri) {
          throw new Error('baseUri and region cannot be specified at the same time');
        }
        baseUri = this._getRegionalBaseUri(this.options.region);
      }
      return baseUri || 'client-rapi.recombee.com';
    }

    /**
     * Send the request to Recombee
     * @param {Request} request - Request to be sent
     * @param {Object} callback - Optional callback (send returns Promise if omitted)
     */
  }, {
    key: "send",
    value: function send(request, callback) {
      if (this.future_v6_fetch) {
        if (!(typeof globalThis === 'undefined' ? window.Promise : globalThis.Promise)) {
          throw new Error('future_v6_fetch requires Promises to be available.');
        }
        if (!this.async) {
          throw new Error('future_v6_fetch cannot be used with synchronous requests.');
        }
        if (callback === undefined) {
          return this._sendFetch(request);
        } else {
          return this._sendFetch(request).then(function (result) {
            return callback(null, result);
          })["catch"](callback);
        }
      }
      return this._sendXhr(request, callback);
    }
  }, {
    key: "_sendFetch",
    value: function () {
      var _sendFetch2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(request) {
        var url, response;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              url = this._getUrl(request);
              _context.prev = 1;
              _context.next = 4;
              return fetch(url, {
                method: 'POST',
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(request.bodyParameters()),
                signal: AbortSignal.timeout(request.timeout)
              });
            case 4:
              response = _context.sent;
              if (!response.ok) {
                _context.next = 11;
                break;
              }
              _context.next = 8;
              return response.json();
            case 8:
              return _context.abrupt("return", _context.sent);
            case 11:
              _context.t0 = api_errors.ResponseError;
              _context.t1 = request;
              _context.t2 = response.status;
              _context.next = 16;
              return response.text();
            case 16:
              _context.t3 = _context.sent;
              throw new _context.t0(_context.t1, _context.t2, _context.t3);
            case 18:
              _context.next = 27;
              break;
            case 20:
              _context.prev = 20;
              _context.t4 = _context["catch"](1);
              if (!(_context.t4.name === 'TimeoutError')) {
                _context.next = 26;
                break;
              }
              throw new api_errors.TimeoutError(request);
            case 26:
              throw _context.t4;
            case 27:
            case "end":
              return _context.stop();
          }
        }, _callee, this, [[1, 20]]);
      }));
      function _sendFetch(_x) {
        return _sendFetch2.apply(this, arguments);
      }
      return _sendFetch;
    }()
  }, {
    key: "_sendXhr",
    value: function _sendXhr(request, callback) {
      var Promise = typeof globalThis === 'undefined' ? window.Promise : globalThis.Promise;
      if (callback === undefined && Promise) {
        var sendXhr = this._sendXhr.bind(this);
        return new Promise(function (resolve, reject) {
          sendXhr(request, function (err, result) {
            return err ? reject(err) : resolve(result);
          });
        });
      }
      var url = this._getUrl(request);
      var xmlhttp = new XMLHttpRequest();
      xmlhttp.open('POST', url, this.async);
      xmlhttp.setRequestHeader('Accept', 'application/json');
      xmlhttp.setRequestHeader('Content-Type', 'application/json');
      if (this.async) xmlhttp.timeout = request.timeout;
      xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.responseText) {
          if (this.status == 200) {
            if (callback) return callback(null, JSON.parse(this.responseText));
          } else {
            if (callback) return callback(new api_errors.ResponseError(request, this.status, this.responseText));
          }
        }
      };
      xmlhttp.ontimeout = function () {
        if (callback) return callback(new api_errors.TimeoutError(request));
      };
      xmlhttp.send(JSON.stringify(request.bodyParameters()));
    }
  }, {
    key: "_getUrl",
    value: function _getUrl(request) {
      var signedUrl = this._signUrl(request.path);
      var url = (this.useHttps || request.ensureHttps ? 'https://' : 'http://') + this.baseUri + signedUrl;
      return url;
    }
  }, {
    key: "_signUrl",
    value: function _signUrl(req_part) {
      var url = '/' + this.databaseId + req_part;
      url += (req_part.indexOf('?') == -1 ? '?' : '&') + 'frontend_timestamp=' + parseInt(new Date().getTime() / 1000);
      var shaObj = new jsSHA('SHA-1', 'TEXT');
      shaObj.setHMACKey(this.publicToken, 'TEXT');
      shaObj.update(url);
      url += '&frontend_sign=' + shaObj.getHMAC('HEX');
      return url;
    }
  }]);
}();
exports.ApiClient = ApiClient;

/***/ }),

/***/ "./src/errors/api-error.js":
/*!*********************************!*\
  !*** ./src/errors/api-error.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


//http://stackoverflow.com/questions/31089801/extending-error-in-javascript-with-es6-syntax

/**
 * Base class for errors that occur because of errors in requests reported by API or because of a timeout
 */
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _wrapNativeSuper(t) { var r = "function" == typeof Map ? new Map() : void 0; return _wrapNativeSuper = function _wrapNativeSuper(t) { if (null === t || !_isNativeFunction(t)) return t; if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function"); if (void 0 !== r) { if (r.has(t)) return r.get(t); r.set(t, Wrapper); } function Wrapper() { return _construct(t, arguments, _getPrototypeOf(this).constructor); } return Wrapper.prototype = Object.create(t.prototype, { constructor: { value: Wrapper, enumerable: !1, writable: !0, configurable: !0 } }), _setPrototypeOf(Wrapper, t); }, _wrapNativeSuper(t); }
function _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _isNativeFunction(t) { try { return -1 !== Function.toString.call(t).indexOf("[native code]"); } catch (n) { return "function" == typeof t; } }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
var ApiError = /*#__PURE__*/function (_Error) {
  function ApiError(message) {
    var _this;
    _classCallCheck(this, ApiError);
    _this = _callSuper(this, ApiError, [message]);
    _this.name = _this.constructor.name;
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(_this, _this.constructor);
    } else {
      _this.stack = new Error(message).stack;
    }
    return _this;
  }
  _inherits(ApiError, _Error);
  return _createClass(ApiError);
}(/*#__PURE__*/_wrapNativeSuper(Error));
exports.ApiError = ApiError;

/***/ }),

/***/ "./src/errors/index.js":
/*!*****************************!*\
  !*** ./src/errors/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


exports.ApiError = __webpack_require__(/*! ./api-error */ "./src/errors/api-error.js").ApiError;
exports.ResponseError = __webpack_require__(/*! ./response-error */ "./src/errors/response-error.js").ResponseError;
exports.TimeoutError = __webpack_require__(/*! ./timeout-error */ "./src/errors/timeout-error.js").TimeoutError;

/***/ }),

/***/ "./src/errors/response-error.js":
/*!**************************************!*\
  !*** ./src/errors/response-error.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
var ae = __webpack_require__(/*! ./api-error */ "./src/errors/api-error.js");

/**
 * Error thrown when a request did not succeed (did not return 200 or 201)
 */
var ResponseError = /*#__PURE__*/function (_ae$ApiError) {
  /**
   * Create the exception
   * @param {Request} request - Request which caused the exception
   * @param {number} statusCode - The returned status code
   * @param {string} message - Error message from the API
   */
  function ResponseError(request, statusCode, message) {
    var _this;
    _classCallCheck(this, ResponseError);
    _this = _callSuper(this, ResponseError, [message]);
    _this.request = request;
    _this.statusCode = statusCode;
    return _this;
  }
  _inherits(ResponseError, _ae$ApiError);
  return _createClass(ResponseError);
}(ae.ApiError);
exports.ResponseError = ResponseError;

/***/ }),

/***/ "./src/errors/timeout-error.js":
/*!*************************************!*\
  !*** ./src/errors/timeout-error.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
var ae = __webpack_require__(/*! ./api-error */ "./src/errors/api-error.js");

/**
 * Error thrown when a request is not processed within the timeout
 */
var TimeoutError = /*#__PURE__*/function (_ae$ApiError) {
  /**
   * Create the exception
   * @param {Request} request - Request which caused the exception
   */
  function TimeoutError(request) {
    var _this;
    _classCallCheck(this, TimeoutError);
    _this = _callSuper(this, TimeoutError, ["Client did not get response within ".concat(request.timeout, " ms")]);
    _this.request = request;
    return _this;
  }
  _inherits(TimeoutError, _ae$ApiError);
  return _createClass(TimeoutError);
}(ae.ApiError);
exports.TimeoutError = TimeoutError;

/***/ }),

/***/ "./src/requests/add-bookmark.js":
/*!**************************************!*\
  !*** ./src/requests/add-bookmark.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/*
 This file is auto-generated, do not edit
*/



function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
var rqs = __webpack_require__(/*! ./request */ "./src/requests/request.js");

/**
 * Adds a bookmark of the given item made by the given user.
 */
var AddBookmark = /*#__PURE__*/function (_rqs$Request) {
  /**
   * Construct the request
   * @param {string} userId - User who bookmarked the item
   * @param {string} itemId - Bookmarked item
   * @param {Object} optional - Optional parameters given as an object with structure name of the parameter: value
   * - Allowed parameters:
   *     - *timestamp*
   *         - Type: string | number
   *         - Description: UTC timestamp of the bookmark as ISO8601-1 pattern or UTC epoch time. The default value is the current time.
   *     - *cascadeCreate*
   *         - Type: boolean
   *         - Description: Sets whether the given user/item should be created if not present in the database.
   *     - *recommId*
   *         - Type: string
   *         - Description: If this bookmark is based on a recommendation request, `recommId` is the id of the clicked recommendation.
   *     - *additionalData*
   *         - Type: object
   *         - Description: A dictionary of additional data for the interaction.
   */
  function AddBookmark(userId, itemId, optional) {
    var _this;
    _classCallCheck(this, AddBookmark);
    _this = _callSuper(this, AddBookmark, ['POST', '/bookmarks/', 9000, false]);
    _this.userId = userId;
    _this.itemId = itemId;
    optional = optional || {};
    _this.timestamp = optional.timestamp;
    _this.cascadeCreate = optional.cascadeCreate;
    _this.recommId = optional.recommId;
    _this.additionalData = optional.additionalData;
    return _this;
  }

  /**
   * Get body parameters
   * @return {Object} The values of body parameters (name of parameter: value of the parameter)
   */
  _inherits(AddBookmark, _rqs$Request);
  return _createClass(AddBookmark, [{
    key: "bodyParameters",
    value: function bodyParameters() {
      var params = {};
      params.userId = this.userId;
      params.itemId = this.itemId;
      if (this.timestamp !== undefined) params.timestamp = this.timestamp;
      if (this.cascadeCreate !== undefined) params.cascadeCreate = this.cascadeCreate;
      if (this.recommId !== undefined) params.recommId = this.recommId;
      if (this.additionalData !== undefined) params.additionalData = this.additionalData;
      params.cascadeCreate = this.cascadeCreate !== undefined ? this.cascadeCreate : true;
      return params;
    }
  }]);
}(rqs.Request);
exports.AddBookmark = AddBookmark;

/***/ }),

/***/ "./src/requests/add-cart-addition.js":
/*!*******************************************!*\
  !*** ./src/requests/add-cart-addition.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/*
 This file is auto-generated, do not edit
*/



function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
var rqs = __webpack_require__(/*! ./request */ "./src/requests/request.js");

/**
 * Adds a cart addition of the given item made by the given user.
 */
var AddCartAddition = /*#__PURE__*/function (_rqs$Request) {
  /**
   * Construct the request
   * @param {string} userId - User who added the item to the cart
   * @param {string} itemId - Item added to the cart
   * @param {Object} optional - Optional parameters given as an object with structure name of the parameter: value
   * - Allowed parameters:
   *     - *timestamp*
   *         - Type: string | number
   *         - Description: UTC timestamp of the cart addition as ISO8601-1 pattern or UTC epoch time. The default value is the current time.
   *     - *cascadeCreate*
   *         - Type: boolean
   *         - Description: Sets whether the given user/item should be created if not present in the database.
   *     - *amount*
   *         - Type: number
   *         - Description: Amount (number) added to cart. The default is 1. For example, if `user-x` adds two `item-y` during a single order (session...), the `amount` should equal 2.
   *     - *price*
   *         - Type: number
   *         - Description: Price of the added item. If `amount` is greater than 1, the sum of prices of all the items should be given.
   *     - *recommId*
   *         - Type: string
   *         - Description: If this cart addition is based on a recommendation request, `recommId` is the id of the clicked recommendation.
   *     - *additionalData*
   *         - Type: object
   *         - Description: A dictionary of additional data for the interaction.
   */
  function AddCartAddition(userId, itemId, optional) {
    var _this;
    _classCallCheck(this, AddCartAddition);
    _this = _callSuper(this, AddCartAddition, ['POST', '/cartadditions/', 9000, false]);
    _this.userId = userId;
    _this.itemId = itemId;
    optional = optional || {};
    _this.timestamp = optional.timestamp;
    _this.cascadeCreate = optional.cascadeCreate;
    _this.amount = optional.amount;
    _this.price = optional.price;
    _this.recommId = optional.recommId;
    _this.additionalData = optional.additionalData;
    return _this;
  }

  /**
   * Get body parameters
   * @return {Object} The values of body parameters (name of parameter: value of the parameter)
   */
  _inherits(AddCartAddition, _rqs$Request);
  return _createClass(AddCartAddition, [{
    key: "bodyParameters",
    value: function bodyParameters() {
      var params = {};
      params.userId = this.userId;
      params.itemId = this.itemId;
      if (this.timestamp !== undefined) params.timestamp = this.timestamp;
      if (this.cascadeCreate !== undefined) params.cascadeCreate = this.cascadeCreate;
      if (this.amount !== undefined) params.amount = this.amount;
      if (this.price !== undefined) params.price = this.price;
      if (this.recommId !== undefined) params.recommId = this.recommId;
      if (this.additionalData !== undefined) params.additionalData = this.additionalData;
      params.cascadeCreate = this.cascadeCreate !== undefined ? this.cascadeCreate : true;
      return params;
    }
  }]);
}(rqs.Request);
exports.AddCartAddition = AddCartAddition;

/***/ }),

/***/ "./src/requests/add-detail-view.js":
/*!*****************************************!*\
  !*** ./src/requests/add-detail-view.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/*
 This file is auto-generated, do not edit
*/



function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
var rqs = __webpack_require__(/*! ./request */ "./src/requests/request.js");

/**
 * Adds a detail view of the given item made by the given user.
 */
var AddDetailView = /*#__PURE__*/function (_rqs$Request) {
  /**
   * Construct the request
   * @param {string} userId - User who viewed the item
   * @param {string} itemId - Viewed item
   * @param {Object} optional - Optional parameters given as an object with structure name of the parameter: value
   * - Allowed parameters:
   *     - *timestamp*
   *         - Type: string | number
   *         - Description: UTC timestamp of the view as ISO8601-1 pattern or UTC epoch time. The default value is the current time.
   *     - *duration*
   *         - Type: number
   *         - Description: Duration of the view
   *     - *cascadeCreate*
   *         - Type: boolean
   *         - Description: Sets whether the given user/item should be created if not present in the database.
   *     - *recommId*
   *         - Type: string
   *         - Description: If this detail view is based on a recommendation request, `recommId` is the id of the clicked recommendation.
   *     - *additionalData*
   *         - Type: object
   *         - Description: A dictionary of additional data for the interaction.
   */
  function AddDetailView(userId, itemId, optional) {
    var _this;
    _classCallCheck(this, AddDetailView);
    _this = _callSuper(this, AddDetailView, ['POST', '/detailviews/', 9000, false]);
    _this.userId = userId;
    _this.itemId = itemId;
    optional = optional || {};
    _this.timestamp = optional.timestamp;
    _this.duration = optional.duration;
    _this.cascadeCreate = optional.cascadeCreate;
    _this.recommId = optional.recommId;
    _this.additionalData = optional.additionalData;
    return _this;
  }

  /**
   * Get body parameters
   * @return {Object} The values of body parameters (name of parameter: value of the parameter)
   */
  _inherits(AddDetailView, _rqs$Request);
  return _createClass(AddDetailView, [{
    key: "bodyParameters",
    value: function bodyParameters() {
      var params = {};
      params.userId = this.userId;
      params.itemId = this.itemId;
      if (this.timestamp !== undefined) params.timestamp = this.timestamp;
      if (this.duration !== undefined) params.duration = this.duration;
      if (this.cascadeCreate !== undefined) params.cascadeCreate = this.cascadeCreate;
      if (this.recommId !== undefined) params.recommId = this.recommId;
      if (this.additionalData !== undefined) params.additionalData = this.additionalData;
      params.cascadeCreate = this.cascadeCreate !== undefined ? this.cascadeCreate : true;
      return params;
    }
  }]);
}(rqs.Request);
exports.AddDetailView = AddDetailView;

/***/ }),

/***/ "./src/requests/add-purchase.js":
/*!**************************************!*\
  !*** ./src/requests/add-purchase.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/*
 This file is auto-generated, do not edit
*/



function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
var rqs = __webpack_require__(/*! ./request */ "./src/requests/request.js");

/**
 * Adds a purchase of the given item made by the given user.
 */
var AddPurchase = /*#__PURE__*/function (_rqs$Request) {
  /**
   * Construct the request
   * @param {string} userId - User who purchased the item
   * @param {string} itemId - Purchased item
   * @param {Object} optional - Optional parameters given as an object with structure name of the parameter: value
   * - Allowed parameters:
   *     - *timestamp*
   *         - Type: string | number
   *         - Description: UTC timestamp of the purchase as ISO8601-1 pattern or UTC epoch time. The default value is the current time.
   *     - *cascadeCreate*
   *         - Type: boolean
   *         - Description: Sets whether the given user/item should be created if not present in the database.
   *     - *amount*
   *         - Type: number
   *         - Description: Amount (number) of purchased items. The default is 1. For example, if `user-x` purchases two `item-y` during a single order (session...), the `amount` should equal 2.
   *     - *price*
   *         - Type: number
   *         - Description: Price paid by the user for the item. If `amount` is greater than 1, the sum of prices of all the items should be given.
   *     - *profit*
   *         - Type: number
   *         - Description: Your profit from the purchased item. The profit is natural in the e-commerce domain (for example, if `user-x` purchases `item-y` for $100 and the gross margin is 30 %, then the profit is $30) but is also applicable in other domains (for example, at a news company it may be income from a displayed advertisement on article page). If `amount` is greater than 1, the sum of profit of all the items should be given.
   *     - *recommId*
   *         - Type: string
   *         - Description: If this purchase is based on a recommendation request, `recommId` is the id of the clicked recommendation.
   *     - *additionalData*
   *         - Type: object
   *         - Description: A dictionary of additional data for the interaction.
   */
  function AddPurchase(userId, itemId, optional) {
    var _this;
    _classCallCheck(this, AddPurchase);
    _this = _callSuper(this, AddPurchase, ['POST', '/purchases/', 9000, false]);
    _this.userId = userId;
    _this.itemId = itemId;
    optional = optional || {};
    _this.timestamp = optional.timestamp;
    _this.cascadeCreate = optional.cascadeCreate;
    _this.amount = optional.amount;
    _this.price = optional.price;
    _this.profit = optional.profit;
    _this.recommId = optional.recommId;
    _this.additionalData = optional.additionalData;
    return _this;
  }

  /**
   * Get body parameters
   * @return {Object} The values of body parameters (name of parameter: value of the parameter)
   */
  _inherits(AddPurchase, _rqs$Request);
  return _createClass(AddPurchase, [{
    key: "bodyParameters",
    value: function bodyParameters() {
      var params = {};
      params.userId = this.userId;
      params.itemId = this.itemId;
      if (this.timestamp !== undefined) params.timestamp = this.timestamp;
      if (this.cascadeCreate !== undefined) params.cascadeCreate = this.cascadeCreate;
      if (this.amount !== undefined) params.amount = this.amount;
      if (this.price !== undefined) params.price = this.price;
      if (this.profit !== undefined) params.profit = this.profit;
      if (this.recommId !== undefined) params.recommId = this.recommId;
      if (this.additionalData !== undefined) params.additionalData = this.additionalData;
      params.cascadeCreate = this.cascadeCreate !== undefined ? this.cascadeCreate : true;
      return params;
    }
  }]);
}(rqs.Request);
exports.AddPurchase = AddPurchase;

/***/ }),

/***/ "./src/requests/add-rating.js":
/*!************************************!*\
  !*** ./src/requests/add-rating.js ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/*
 This file is auto-generated, do not edit
*/



function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
var rqs = __webpack_require__(/*! ./request */ "./src/requests/request.js");

/**
 * Adds a rating of the given item made by the given user.
 */
var AddRating = /*#__PURE__*/function (_rqs$Request) {
  /**
   * Construct the request
   * @param {string} userId - User who submitted the rating
   * @param {string} itemId - Rated item
   * @param {number} rating - Rating rescaled to interval [-1.0,1.0], where -1.0 means the worst rating possible, 0.0 means neutral, and 1.0 means absolutely positive rating. For example, in the case of 5-star evaluations, rating = (numStars-3)/2 formula may be used for the conversion.
   * @param {Object} optional - Optional parameters given as an object with structure name of the parameter: value
   * - Allowed parameters:
   *     - *timestamp*
   *         - Type: string | number
   *         - Description: UTC timestamp of the rating as ISO8601-1 pattern or UTC epoch time. The default value is the current time.
   *     - *cascadeCreate*
   *         - Type: boolean
   *         - Description: Sets whether the given user/item should be created if not present in the database.
   *     - *recommId*
   *         - Type: string
   *         - Description: If this rating is based on a recommendation request, `recommId` is the id of the clicked recommendation.
   *     - *additionalData*
   *         - Type: object
   *         - Description: A dictionary of additional data for the interaction.
   */
  function AddRating(userId, itemId, rating, optional) {
    var _this;
    _classCallCheck(this, AddRating);
    _this = _callSuper(this, AddRating, ['POST', '/ratings/', 9000, false]);
    _this.userId = userId;
    _this.itemId = itemId;
    _this.rating = rating;
    optional = optional || {};
    _this.timestamp = optional.timestamp;
    _this.cascadeCreate = optional.cascadeCreate;
    _this.recommId = optional.recommId;
    _this.additionalData = optional.additionalData;
    return _this;
  }

  /**
   * Get body parameters
   * @return {Object} The values of body parameters (name of parameter: value of the parameter)
   */
  _inherits(AddRating, _rqs$Request);
  return _createClass(AddRating, [{
    key: "bodyParameters",
    value: function bodyParameters() {
      var params = {};
      params.userId = this.userId;
      params.itemId = this.itemId;
      params.rating = this.rating;
      if (this.timestamp !== undefined) params.timestamp = this.timestamp;
      if (this.cascadeCreate !== undefined) params.cascadeCreate = this.cascadeCreate;
      if (this.recommId !== undefined) params.recommId = this.recommId;
      if (this.additionalData !== undefined) params.additionalData = this.additionalData;
      params.cascadeCreate = this.cascadeCreate !== undefined ? this.cascadeCreate : true;
      return params;
    }
  }]);
}(rqs.Request);
exports.AddRating = AddRating;

/***/ }),

/***/ "./src/requests/batch.js":
/*!*******************************!*\
  !*** ./src/requests/batch.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
var rqs = __webpack_require__(/*! ./request */ "./src/requests/request.js");
var sum_timeouts = function sum_timeouts(requests) {
  return requests.map(function (r) {
    return r.timeout;
  }).reduce(function (a, b) {
    return a + b;
  }, 0);
};

/**
 * Batch processing allows you to submit any sequence of requests within a single HTTPS request.
 *
 * Any type of request from this SDK may be used in the Batch, and the Batch may combine different types of requests arbitrarily as well.
 *
 * Using Batch requests can be beneficial in situations such as synchronizing the catalog of items or uploading historical interaction data,
 * as sending the data in Batch is considerably faster than sending the individual requests (thanks to optimizations and reducing network and HTTPS overhead).
 *
 * @note The status code of the batch request itself is 200 even if the individual requests result in an error – you have to inspect the code values in the resulting array.
 */
var Batch = /*#__PURE__*/function (_rqs$Request) {
  /**
   * Construct the request
   * @param {Request[]} requests - Array containing the requests.
   * @param {Object} optional - Optional parameters given as an object with structure name of the parameter: value
   * - Allowed parameters:
   *     - *distinctRecomms*
   *         - Type: boolean
   *         - Description: Makes all the recommended items for a certain user distinct among multiple recommendation requests in the batch.
   */
  function Batch(requests, optional) {
    var _this;
    _classCallCheck(this, Batch);
    _this = _callSuper(this, Batch, ['POST', '/batch/', sum_timeouts(requests), true]);
    _this.requests = requests;
    optional = optional || {};
    _this.distinctRecomms = optional.distinctRecomms;
    return _this;
  }

  /**
   * Get body parameters
   * @return {Object} The values of body parameters (name of parameter: value of the parameter)
   */
  _inherits(Batch, _rqs$Request);
  return _createClass(Batch, [{
    key: "bodyParameters",
    value: function bodyParameters() {
      var _this2 = this;
      var reqs = this.requests.map(function (r) {
        return _this2._request_to_batch_object(r);
      });
      var result = {
        requests: reqs
      };
      if (this.distinctRecomms !== undefined) result.distinctRecomms = this.distinctRecomms;
      return result;
    }
  }, {
    key: "_request_to_batch_object",
    value: function _request_to_batch_object(req) {
      var bodyParameters = req.bodyParameters();
      return {
        method: req.method,
        path: req.path,
        params: Object.keys(bodyParameters).length ? bodyParameters : undefined
      };
    }
  }]);
}(rqs.Request);
exports.Batch = Batch;

/***/ }),

/***/ "./src/requests/merge-users.js":
/*!*************************************!*\
  !*** ./src/requests/merge-users.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/*
 This file is auto-generated, do not edit
*/



function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
var rqs = __webpack_require__(/*! ./request */ "./src/requests/request.js");

/**
 * Merges interactions (purchases, ratings, bookmarks, detail views ...) of two different users under a single user ID. This is especially useful for online e-commerce applications working with anonymous users identified by unique tokens such as the session ID. In such applications, it may often happen that a user owns a persistent account, yet accesses the system anonymously while, e.g., putting items into a shopping cart. At some point in time, such as when the user wishes to confirm the purchase, (s)he logs into the system using his/her username and password. The interactions made under anonymous session ID then become connected with the persistent account, and merging these two becomes desirable.
 * Merging happens between two users referred to as the *target* and the *source*. After the merge, all the interactions of the source user are attributed to the target user, and the source user is **deleted**.
 */
var MergeUsers = /*#__PURE__*/function (_rqs$Request) {
  /**
   * Construct the request
   * @param {string} targetUserId - ID of the target user.
   * @param {string} sourceUserId - ID of the source user.
   * @param {Object} optional - Optional parameters given as an object with structure name of the parameter: value
   * - Allowed parameters:
   *     - *cascadeCreate*
   *         - Type: boolean
   *         - Description: Sets whether the user *targetUserId* should be created if not present in the database.
   */
  function MergeUsers(targetUserId, sourceUserId, optional) {
    var _this;
    _classCallCheck(this, MergeUsers);
    _this = _callSuper(this, MergeUsers, ['PUT', "/users/".concat(encodeURIComponent(targetUserId), "/merge/").concat(encodeURIComponent(sourceUserId)), 30000, false]);
    _this.targetUserId = targetUserId;
    _this.sourceUserId = sourceUserId;
    optional = optional || {};
    _this.cascadeCreate = optional.cascadeCreate;
    return _this;
  }

  /**
   * Get body parameters
   * @return {Object} The values of body parameters (name of parameter: value of the parameter)
   */
  _inherits(MergeUsers, _rqs$Request);
  return _createClass(MergeUsers, [{
    key: "bodyParameters",
    value: function bodyParameters() {
      var params = {};
      params.cascadeCreate = this.cascadeCreate !== undefined ? this.cascadeCreate : true;
      return params;
    }
  }]);
}(rqs.Request);
exports.MergeUsers = MergeUsers;

/***/ }),

/***/ "./src/requests/recommend-item-segments-to-item-segment.js":
/*!*****************************************************************!*\
  !*** ./src/requests/recommend-item-segments-to-item-segment.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/*
 This file is auto-generated, do not edit
*/



function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
var rqs = __webpack_require__(/*! ./request */ "./src/requests/request.js");

/**
 * Recommends Segments from a result [Segmentation](https://docs.recombee.com/segmentations.html) that are the most relevant to a particular Segment from a context Segmentation.
 * Based on the used Segmentations, this endpoint can be used for example for:
 *   - Recommending the related brands to particular brand
 *   - Recommending the related brands to particular category
 *   - Recommending the related artists to a particular genre (assuming songs are the Items)
 * You need to set the used context and result Segmentation the Admin UI in the [Scenario settings](https://docs.recombee.com/scenarios) prior to using this endpoint.
 * The returned segments are sorted by relevance (first segment being the most relevant).
 * It is also possible to use POST HTTP method (for example in case of very long ReQL filter) - query parameters then become body parameters.
 */
var RecommendItemSegmentsToItemSegment = /*#__PURE__*/function (_rqs$Request) {
  /**
   * Construct the request
   * @param {string} contextSegmentId - ID of the segment from `contextSegmentationId` for which the recommendations are to be generated.
   * @param {string} targetUserId - ID of the user who will see the recommendations.
   * Specifying the *targetUserId* is beneficial because:
   * * It makes the recommendations personalized
   * * Allows the calculation of Actions and Conversions
   *   in the graphical user interface,
   *   as Recombee can pair the user who got recommendations
   *   and who afterward viewed/purchased an item.
   * If you insist on not specifying the user, pass `null`
   * (`None`, `nil`, `NULL` etc., depending on the language) to *targetUserId*.
   * Do not create some special dummy user for getting recommendations,
   * as it could mislead the recommendation models,
   * and result in wrong recommendations.
   * For anonymous/unregistered users, it is possible to use, for example, their session ID.
   * @param {number} count - Number of item segments to be recommended (N for the top-N recommendation).
   * @param {Object} optional - Optional parameters given as an object with structure name of the parameter: value
   * - Allowed parameters:
   *     - *scenario*
   *         - Type: string
   *         - Description: Scenario defines a particular application of recommendations. It can be, for example, "homepage", "cart", or "emailing".
   * You can set various settings to the [scenario](https://docs.recombee.com/scenarios.html) in the [Admin UI](https://admin.recombee.com). You can also see the performance of each scenario in the Admin UI separately, so you can check how well each application performs.
   * The AI that optimizes models to get the best results may optimize different scenarios separately or even use different models in each of the scenarios.
   *     - *cascadeCreate*
   *         - Type: boolean
   *         - Description: If the user does not exist in the database, returns a list of non-personalized recommendations and creates the user in the database. This allows, for example, rotations in the following recommendations for that user, as the user will be already known to the system.
   *     - *filter*
   *         - Type: string
   *         - Description: Boolean-returning [ReQL](https://docs.recombee.com/reql.html) expression which allows you to filter recommended segments based on the `segmentationId`.
   *     - *booster*
   *         - Type: string
   *         - Description: Number-returning [ReQL](https://docs.recombee.com/reql.html) expression which allows you to boost recommendation rate of some segments based on the `segmentationId`.
   *     - *logic*
   *         - Type: string | object
   *         - Description: Logic specifies the particular behavior of the recommendation models. You can pick tailored logic for your domain and use case.
   * See [this section](https://docs.recombee.com/recommendation_logics.html) for a list of available logics and other details.
   * The difference between `logic` and `scenario` is that `logic` specifies mainly behavior, while `scenario` specifies the place where recommendations are shown to the users.
   * Logic can also be set to a [scenario](https://docs.recombee.com/scenarios.html) in the [Admin UI](https://admin.recombee.com).
   *     - *expertSettings*
   *         - Type: object
   *         - Description: Dictionary of custom options.
   *     - *returnAbGroup*
   *         - Type: boolean
   *         - Description: If there is a custom AB-testing running, return the name of the group to which the request belongs.
   */
  function RecommendItemSegmentsToItemSegment(contextSegmentId, targetUserId, count, optional) {
    var _this;
    _classCallCheck(this, RecommendItemSegmentsToItemSegment);
    _this = _callSuper(this, RecommendItemSegmentsToItemSegment, ['POST', '/recomms/item-segments/item-segments/', 9000, false]);
    _this.contextSegmentId = contextSegmentId;
    _this.targetUserId = targetUserId;
    _this.count = count;
    optional = optional || {};
    _this.scenario = optional.scenario;
    _this.cascadeCreate = optional.cascadeCreate;
    _this.filter = optional.filter;
    _this.booster = optional.booster;
    _this.logic = optional.logic;
    _this.expertSettings = optional.expertSettings;
    _this.returnAbGroup = optional.returnAbGroup;
    return _this;
  }

  /**
   * Get body parameters
   * @return {Object} The values of body parameters (name of parameter: value of the parameter)
   */
  _inherits(RecommendItemSegmentsToItemSegment, _rqs$Request);
  return _createClass(RecommendItemSegmentsToItemSegment, [{
    key: "bodyParameters",
    value: function bodyParameters() {
      var params = {};
      params.contextSegmentId = this.contextSegmentId;
      params.targetUserId = this.targetUserId;
      params.count = this.count;
      if (this.scenario !== undefined) params.scenario = this.scenario;
      if (this.cascadeCreate !== undefined) params.cascadeCreate = this.cascadeCreate;
      if (this.filter !== undefined) params.filter = this.filter;
      if (this.booster !== undefined) params.booster = this.booster;
      if (this.logic !== undefined) params.logic = this.logic;
      if (this.expertSettings !== undefined) params.expertSettings = this.expertSettings;
      if (this.returnAbGroup !== undefined) params.returnAbGroup = this.returnAbGroup;
      params.cascadeCreate = this.cascadeCreate !== undefined ? this.cascadeCreate : true;
      return params;
    }
  }]);
}(rqs.Request);
exports.RecommendItemSegmentsToItemSegment = RecommendItemSegmentsToItemSegment;

/***/ }),

/***/ "./src/requests/recommend-item-segments-to-item.js":
/*!*********************************************************!*\
  !*** ./src/requests/recommend-item-segments-to-item.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/*
 This file is auto-generated, do not edit
*/



function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
var rqs = __webpack_require__(/*! ./request */ "./src/requests/request.js");

/**
 * Recommends Segments from a [Segmentation](https://docs.recombee.com/segmentations.html) that are the most relevant to a particular item.
 * Based on the used Segmentation, this endpoint can be used for example for:
 *   - Recommending the related categories
 *   - Recommending the related genres
 *   - Recommending the related brands
 *   - Recommending the related artists
 * You need to set the used Segmentation the Admin UI in the [Scenario settings](https://docs.recombee.com/scenarios) prior to using this endpoint.
 * The returned segments are sorted by relevance (first segment being the most relevant).
 * It is also possible to use POST HTTP method (for example in case of very long ReQL filter) - query parameters then become body parameters.
 */
var RecommendItemSegmentsToItem = /*#__PURE__*/function (_rqs$Request) {
  /**
   * Construct the request
   * @param {string} itemId - ID of the item for which the recommendations are to be generated.
   * @param {string} targetUserId - ID of the user who will see the recommendations.
   * Specifying the *targetUserId* is beneficial because:
   * * It makes the recommendations personalized
   * * Allows the calculation of Actions and Conversions
   *   in the graphical user interface,
   *   as Recombee can pair the user who got recommendations
   *   and who afterward viewed/purchased an item.
   * If you insist on not specifying the user, pass `null`
   * (`None`, `nil`, `NULL` etc., depending on the language) to *targetUserId*.
   * Do not create some special dummy user for getting recommendations,
   * as it could mislead the recommendation models,
   * and result in wrong recommendations.
   * For anonymous/unregistered users, it is possible to use, for example, their session ID.
   * @param {number} count - Number of item segments to be recommended (N for the top-N recommendation).
   * @param {Object} optional - Optional parameters given as an object with structure name of the parameter: value
   * - Allowed parameters:
   *     - *scenario*
   *         - Type: string
   *         - Description: Scenario defines a particular application of recommendations. It can be, for example, "homepage", "cart", or "emailing".
   * You can set various settings to the [scenario](https://docs.recombee.com/scenarios.html) in the [Admin UI](https://admin.recombee.com). You can also see the performance of each scenario in the Admin UI separately, so you can check how well each application performs.
   * The AI that optimizes models to get the best results may optimize different scenarios separately or even use different models in each of the scenarios.
   *     - *cascadeCreate*
   *         - Type: boolean
   *         - Description: If the user does not exist in the database, returns a list of non-personalized recommendations and creates the user in the database. This allows, for example, rotations in the following recommendations for that user, as the user will be already known to the system.
   *     - *filter*
   *         - Type: string
   *         - Description: Boolean-returning [ReQL](https://docs.recombee.com/reql.html) expression which allows you to filter recommended segments based on the `segmentationId`.
   *     - *booster*
   *         - Type: string
   *         - Description: Number-returning [ReQL](https://docs.recombee.com/reql.html) expression which allows you to boost recommendation rate of some segments based on the `segmentationId`.
   *     - *logic*
   *         - Type: string | object
   *         - Description: Logic specifies the particular behavior of the recommendation models. You can pick tailored logic for your domain and use case.
   * See [this section](https://docs.recombee.com/recommendation_logics.html) for a list of available logics and other details.
   * The difference between `logic` and `scenario` is that `logic` specifies mainly behavior, while `scenario` specifies the place where recommendations are shown to the users.
   * Logic can also be set to a [scenario](https://docs.recombee.com/scenarios.html) in the [Admin UI](https://admin.recombee.com).
   *     - *expertSettings*
   *         - Type: object
   *         - Description: Dictionary of custom options.
   *     - *returnAbGroup*
   *         - Type: boolean
   *         - Description: If there is a custom AB-testing running, return the name of the group to which the request belongs.
   */
  function RecommendItemSegmentsToItem(itemId, targetUserId, count, optional) {
    var _this;
    _classCallCheck(this, RecommendItemSegmentsToItem);
    _this = _callSuper(this, RecommendItemSegmentsToItem, ['POST', "/recomms/items/".concat(encodeURIComponent(itemId), "/item-segments/"), 9000, false]);
    _this.itemId = itemId;
    _this.targetUserId = targetUserId;
    _this.count = count;
    optional = optional || {};
    _this.scenario = optional.scenario;
    _this.cascadeCreate = optional.cascadeCreate;
    _this.filter = optional.filter;
    _this.booster = optional.booster;
    _this.logic = optional.logic;
    _this.expertSettings = optional.expertSettings;
    _this.returnAbGroup = optional.returnAbGroup;
    return _this;
  }

  /**
   * Get body parameters
   * @return {Object} The values of body parameters (name of parameter: value of the parameter)
   */
  _inherits(RecommendItemSegmentsToItem, _rqs$Request);
  return _createClass(RecommendItemSegmentsToItem, [{
    key: "bodyParameters",
    value: function bodyParameters() {
      var params = {};
      params.targetUserId = this.targetUserId;
      params.count = this.count;
      if (this.scenario !== undefined) params.scenario = this.scenario;
      if (this.cascadeCreate !== undefined) params.cascadeCreate = this.cascadeCreate;
      if (this.filter !== undefined) params.filter = this.filter;
      if (this.booster !== undefined) params.booster = this.booster;
      if (this.logic !== undefined) params.logic = this.logic;
      if (this.expertSettings !== undefined) params.expertSettings = this.expertSettings;
      if (this.returnAbGroup !== undefined) params.returnAbGroup = this.returnAbGroup;
      params.cascadeCreate = this.cascadeCreate !== undefined ? this.cascadeCreate : true;
      return params;
    }
  }]);
}(rqs.Request);
exports.RecommendItemSegmentsToItem = RecommendItemSegmentsToItem;

/***/ }),

/***/ "./src/requests/recommend-item-segments-to-user.js":
/*!*********************************************************!*\
  !*** ./src/requests/recommend-item-segments-to-user.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/*
 This file is auto-generated, do not edit
*/



function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
var rqs = __webpack_require__(/*! ./request */ "./src/requests/request.js");

/**
 * Recommends the top Segments from a [Segmentation](https://docs.recombee.com/segmentations.html) for a particular user, based on the user's past interactions.
 * Based on the used Segmentation, this endpoint can be used for example for:
 *   - Recommending the top categories for the user
 *   - Recommending the top genres for the user
 *   - Recommending the top brands for the user
 *   - Recommending the top artists for the user
 * You need to set the used Segmentation the Admin UI in the [Scenario settings](https://docs.recombee.com/scenarios) prior to using this endpoint.
 * The returned segments are sorted by relevance (first segment being the most relevant).
 * It is also possible to use POST HTTP method (for example in case of very long ReQL filter) - query parameters then become body parameters.
 */
var RecommendItemSegmentsToUser = /*#__PURE__*/function (_rqs$Request) {
  /**
   * Construct the request
   * @param {string} userId - ID of the user for whom personalized recommendations are to be generated.
   * @param {number} count - Number of item segments to be recommended (N for the top-N recommendation).
   * @param {Object} optional - Optional parameters given as an object with structure name of the parameter: value
   * - Allowed parameters:
   *     - *scenario*
   *         - Type: string
   *         - Description: Scenario defines a particular application of recommendations. It can be, for example, "homepage", "cart", or "emailing".
   * You can set various settings to the [scenario](https://docs.recombee.com/scenarios.html) in the [Admin UI](https://admin.recombee.com). You can also see the performance of each scenario in the Admin UI separately, so you can check how well each application performs.
   * The AI that optimizes models to get the best results may optimize different scenarios separately or even use different models in each of the scenarios.
   *     - *cascadeCreate*
   *         - Type: boolean
   *         - Description: If the user does not exist in the database, returns a list of non-personalized recommendations and creates the user in the database. This allows, for example, rotations in the following recommendations for that user, as the user will be already known to the system.
   *     - *filter*
   *         - Type: string
   *         - Description: Boolean-returning [ReQL](https://docs.recombee.com/reql.html) expression which allows you to filter recommended segments based on the `segmentationId`.
   *     - *booster*
   *         - Type: string
   *         - Description: Number-returning [ReQL](https://docs.recombee.com/reql.html) expression which allows you to boost recommendation rate of some segments based on the `segmentationId`.
   *     - *logic*
   *         - Type: string | object
   *         - Description: Logic specifies the particular behavior of the recommendation models. You can pick tailored logic for your domain and use case.
   * See [this section](https://docs.recombee.com/recommendation_logics.html) for a list of available logics and other details.
   * The difference between `logic` and `scenario` is that `logic` specifies mainly behavior, while `scenario` specifies the place where recommendations are shown to the users.
   * Logic can also be set to a [scenario](https://docs.recombee.com/scenarios.html) in the [Admin UI](https://admin.recombee.com).
   *     - *expertSettings*
   *         - Type: object
   *         - Description: Dictionary of custom options.
   *     - *returnAbGroup*
   *         - Type: boolean
   *         - Description: If there is a custom AB-testing running, return the name of the group to which the request belongs.
   */
  function RecommendItemSegmentsToUser(userId, count, optional) {
    var _this;
    _classCallCheck(this, RecommendItemSegmentsToUser);
    _this = _callSuper(this, RecommendItemSegmentsToUser, ['POST', "/recomms/users/".concat(encodeURIComponent(userId), "/item-segments/"), 9000, false]);
    _this.userId = userId;
    _this.count = count;
    optional = optional || {};
    _this.scenario = optional.scenario;
    _this.cascadeCreate = optional.cascadeCreate;
    _this.filter = optional.filter;
    _this.booster = optional.booster;
    _this.logic = optional.logic;
    _this.expertSettings = optional.expertSettings;
    _this.returnAbGroup = optional.returnAbGroup;
    return _this;
  }

  /**
   * Get body parameters
   * @return {Object} The values of body parameters (name of parameter: value of the parameter)
   */
  _inherits(RecommendItemSegmentsToUser, _rqs$Request);
  return _createClass(RecommendItemSegmentsToUser, [{
    key: "bodyParameters",
    value: function bodyParameters() {
      var params = {};
      params.count = this.count;
      if (this.scenario !== undefined) params.scenario = this.scenario;
      if (this.cascadeCreate !== undefined) params.cascadeCreate = this.cascadeCreate;
      if (this.filter !== undefined) params.filter = this.filter;
      if (this.booster !== undefined) params.booster = this.booster;
      if (this.logic !== undefined) params.logic = this.logic;
      if (this.expertSettings !== undefined) params.expertSettings = this.expertSettings;
      if (this.returnAbGroup !== undefined) params.returnAbGroup = this.returnAbGroup;
      params.cascadeCreate = this.cascadeCreate !== undefined ? this.cascadeCreate : true;
      return params;
    }
  }]);
}(rqs.Request);
exports.RecommendItemSegmentsToUser = RecommendItemSegmentsToUser;

/***/ }),

/***/ "./src/requests/recommend-items-to-item-segment.js":
/*!*********************************************************!*\
  !*** ./src/requests/recommend-items-to-item-segment.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/*
 This file is auto-generated, do not edit
*/



function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
var rqs = __webpack_require__(/*! ./request */ "./src/requests/request.js");

/**
 * Recommends Items that are the most relevant to a particular Segment from a context [Segmentation](https://docs.recombee.com/segmentations.html).
 * Based on the used Segmentation, this endpoint can be used for example for:
 * - Recommending articles related to a particular topic
 * - Recommending songs belonging to a particular genre
 * - Recommending products produced by a particular brand
 * You need to set the used context Segmentation in the Admin UI in the [Scenario settings](https://docs.recombee.com/scenarios) prior to using this endpoint.
 * The returned items are sorted by relevance (the first item being the most relevant).
 * It is also possible to use the POST HTTP method (for example, in the case of a very long ReQL filter) — query parameters then become body parameters.
 */
var RecommendItemsToItemSegment = /*#__PURE__*/function (_rqs$Request) {
  /**
   * Construct the request
   * @param {string} contextSegmentId - ID of the segment from `contextSegmentationId` for which the recommendations are to be generated.
   * @param {string} targetUserId - ID of the user who will see the recommendations.
   * Specifying the *targetUserId* is beneficial because:
   * * It makes the recommendations personalized
   * * Allows the calculation of Actions and Conversions
   *   in the graphical user interface,
   *   as Recombee can pair the user who got recommendations
   *   and who afterward viewed/purchased an item.
   * If you insist on not specifying the user, pass `null`
   * (`None`, `nil`, `NULL` etc., depending on the language) to *targetUserId*.
   * Do not create some special dummy user for getting recommendations,
   * as it could mislead the recommendation models,
   * and result in wrong recommendations.
   * For anonymous/unregistered users, it is possible to use, for example, their session ID.
   * @param {number} count - Number of items to be recommended (N for the top-N recommendation).
   * @param {Object} optional - Optional parameters given as an object with structure name of the parameter: value
   * - Allowed parameters:
   *     - *scenario*
   *         - Type: string
   *         - Description: Scenario defines a particular application of recommendations. It can be, for example, "homepage", "cart", or "emailing".
   * You can set various settings to the [scenario](https://docs.recombee.com/scenarios.html) in the [Admin UI](https://admin.recombee.com). You can also see the performance of each scenario in the Admin UI separately, so you can check how well each application performs.
   * The AI that optimizes models to get the best results may optimize different scenarios separately or even use different models in each of the scenarios.
   *     - *cascadeCreate*
   *         - Type: boolean
   *         - Description: If an item of the given *itemId* or user of the given *targetUserId* doesn't exist in the database, it creates the missing entity/entities and returns some (non-personalized) recommendations. This allows, for example, rotations in the following recommendations for the user of the given *targetUserId*, as the user will be already known to the system.
   *     - *returnProperties*
   *         - Type: boolean
   *         - Description: With `returnProperties=true`, property values of the recommended items are returned along with their IDs in a JSON dictionary. The acquired property values can be used to easily display the recommended items to the user.
   * Example response:
   * ```json
   *   {
   *     "recommId": "0c6189e7-dc1a-429a-b613-192696309361",
   *     "recomms":
   *       [
   *         {
   *           "id": "tv-178",
   *           "values": {
   *             "description": "4K TV with 3D feature",
   *             "categories":   ["Electronics", "Televisions"],
   *             "price": 342,
   *             "url": "myshop.com/tv-178"
   *           }
   *         },
   *         {
   *           "id": "mixer-42",
   *           "values": {
   *             "description": "Stainless Steel Mixer",
   *             "categories":   ["Home & Kitchen"],
   *             "price": 39,
   *             "url": "myshop.com/mixer-42"
   *           }
   *         }
   *       ],
   *     "numberNextRecommsCalls": 0
   *   }
   * ```
   *     - *includedProperties*
   *         - Type: string[]
   *         - Description: Allows specifying which properties should be returned when `returnProperties=true` is set. The properties are given as a comma-separated list.
   * Example response for `includedProperties=description,price`:
   * ```json
   *   {
   *     "recommId": "6842c725-a79f-4537-a02c-f34d668a3f80",
   *     "recomms":
   *       [
   *         {
   *           "id": "tv-178",
   *           "values": {
   *             "description": "4K TV with 3D feature",
   *             "price": 342
   *           }
   *         },
   *         {
   *           "id": "mixer-42",
   *           "values": {
   *             "description": "Stainless Steel Mixer",
   *             "price": 39
   *           }
   *         }
   *       ],
   *     "numberNextRecommsCalls": 0
   *   }
   * ```
   *     - *filter*
   *         - Type: string
   *         - Description: Boolean-returning [ReQL](https://docs.recombee.com/reql.html) expression, which allows you to filter recommended items based on the values of their attributes.
   * Filters can also be assigned to a [scenario](https://docs.recombee.com/scenarios.html) in the [Admin UI](https://admin.recombee.com).
   *     - *booster*
   *         - Type: string
   *         - Description: Number-returning [ReQL](https://docs.recombee.com/reql.html) expression, which allows you to boost the recommendation rate of some items based on the values of their attributes.
   * Boosters can also be assigned to a [scenario](https://docs.recombee.com/scenarios.html) in the [Admin UI](https://admin.recombee.com).
   *     - *logic*
   *         - Type: string | object
   *         - Description: Logic specifies the particular behavior of the recommendation models. You can pick tailored logic for your domain and use case.
   * See [this section](https://docs.recombee.com/recommendation_logics.html) for a list of available logics and other details.
   * The difference between `logic` and `scenario` is that `logic` specifies mainly behavior, while `scenario` specifies the place where recommendations are shown to the users.
   * Logic can also be set to a [scenario](https://docs.recombee.com/scenarios.html) in the [Admin UI](https://admin.recombee.com).
   *     - *minRelevance*
   *         - Type: string
   *         - Description: **Expert option** If the *targetUserId* is provided:  Specifies the threshold of how relevant must the recommended items be to the user. Possible values one of: "low", "medium", "high". The default value is "low", meaning that the system attempts to recommend a number of items equal to *count* at any cost. If there is not enough data (such as interactions or item properties), this may even lead to bestseller-based recommendations being appended to reach the full *count*. This behavior may be suppressed by using "medium" or "high" values. In such case, the system only recommends items of at least the requested relevance and may return less than *count* items when there is not enough data to fulfill it.
   *     - *rotationRate*
   *         - Type: number
   *         - Description: **Expert option** If the *targetUserId* is provided: If your users browse the system in real-time, it may easily happen that you wish to offer them recommendations multiple times. Here comes the question: how much should the recommendations change? Should they remain the same, or should they rotate? Recombee API allows you to control this per request in a backward fashion. You may penalize an item for being recommended in the near past. For the specific user, `rotationRate=1` means maximal rotation, `rotationRate=0` means absolutely no rotation. You may also use, for example, `rotationRate=0.2` for only slight rotation of recommended items.
   *     - *rotationTime*
   *         - Type: number
   *         - Description: **Expert option** If the *targetUserId* is provided: Taking *rotationRate* into account, specifies how long it takes for an item to recover from the penalization. For example, `rotationTime=7200.0` means that items recommended less than 2 hours ago are penalized.
   *     - *expertSettings*
   *         - Type: object
   *         - Description: Dictionary of custom options.
   *     - *returnAbGroup*
   *         - Type: boolean
   *         - Description: If there is a custom AB-testing running, return the name of the group to which the request belongs.
   */
  function RecommendItemsToItemSegment(contextSegmentId, targetUserId, count, optional) {
    var _this;
    _classCallCheck(this, RecommendItemsToItemSegment);
    _this = _callSuper(this, RecommendItemsToItemSegment, ['POST', '/recomms/item-segments/items/', 9000, false]);
    _this.contextSegmentId = contextSegmentId;
    _this.targetUserId = targetUserId;
    _this.count = count;
    optional = optional || {};
    _this.scenario = optional.scenario;
    _this.cascadeCreate = optional.cascadeCreate;
    _this.returnProperties = optional.returnProperties;
    _this.includedProperties = optional.includedProperties;
    _this.filter = optional.filter;
    _this.booster = optional.booster;
    _this.logic = optional.logic;
    _this.minRelevance = optional.minRelevance;
    _this.rotationRate = optional.rotationRate;
    _this.rotationTime = optional.rotationTime;
    _this.expertSettings = optional.expertSettings;
    _this.returnAbGroup = optional.returnAbGroup;
    return _this;
  }

  /**
   * Get body parameters
   * @return {Object} The values of body parameters (name of parameter: value of the parameter)
   */
  _inherits(RecommendItemsToItemSegment, _rqs$Request);
  return _createClass(RecommendItemsToItemSegment, [{
    key: "bodyParameters",
    value: function bodyParameters() {
      var params = {};
      params.contextSegmentId = this.contextSegmentId;
      params.targetUserId = this.targetUserId;
      params.count = this.count;
      if (this.scenario !== undefined) params.scenario = this.scenario;
      if (this.cascadeCreate !== undefined) params.cascadeCreate = this.cascadeCreate;
      if (this.returnProperties !== undefined) params.returnProperties = this.returnProperties;
      if (this.includedProperties !== undefined) params.includedProperties = this.includedProperties;
      if (this.filter !== undefined) params.filter = this.filter;
      if (this.booster !== undefined) params.booster = this.booster;
      if (this.logic !== undefined) params.logic = this.logic;
      if (this.minRelevance !== undefined) params.minRelevance = this.minRelevance;
      if (this.rotationRate !== undefined) params.rotationRate = this.rotationRate;
      if (this.rotationTime !== undefined) params.rotationTime = this.rotationTime;
      if (this.expertSettings !== undefined) params.expertSettings = this.expertSettings;
      if (this.returnAbGroup !== undefined) params.returnAbGroup = this.returnAbGroup;
      params.cascadeCreate = this.cascadeCreate !== undefined ? this.cascadeCreate : true;
      return params;
    }
  }]);
}(rqs.Request);
exports.RecommendItemsToItemSegment = RecommendItemsToItemSegment;

/***/ }),

/***/ "./src/requests/recommend-items-to-item.js":
/*!*************************************************!*\
  !*** ./src/requests/recommend-items-to-item.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/*
 This file is auto-generated, do not edit
*/



function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
var rqs = __webpack_require__(/*! ./request */ "./src/requests/request.js");

/**
 * Recommends a set of items that are somehow related to one given item, *X*. A typical scenario is when the user *A* is viewing *X*. Then you may display items to the user that he might also be interested in. Recommend items to item request gives you Top-N such items, optionally taking the target user *A* into account.
 * The returned items are sorted by relevance (the first item being the most relevant).
 * Besides the recommended items, also a unique `recommId` is returned in the response. It can be used to:
 * - Let Recombee know that this recommendation was successful (e.g., user clicked one of the recommended items). See [Reported metrics](https://docs.recombee.com/admin_ui.html#reported-metrics).
 * - Get subsequent recommended items when the user scrolls down (*infinite scroll*) or goes to the next page. See [Recommend Next Items](https://docs.recombee.com/api.html#recommend-next-items).
 * It is also possible to use POST HTTP method (for example in the case of a very long ReQL filter) - query parameters then become body parameters.
 */
var RecommendItemsToItem = /*#__PURE__*/function (_rqs$Request) {
  /**
   * Construct the request
   * @param {string} itemId - ID of the item for which the recommendations are to be generated.
   * @param {string} targetUserId - ID of the user who will see the recommendations.
   * Specifying the *targetUserId* is beneficial because:
   * * It makes the recommendations personalized
   * * Allows the calculation of Actions and Conversions
   *   in the graphical user interface,
   *   as Recombee can pair the user who got recommendations
   *   and who afterward viewed/purchased an item.
   * If you insist on not specifying the user, pass `null`
   * (`None`, `nil`, `NULL` etc., depending on the language) to *targetUserId*.
   * Do not create some special dummy user for getting recommendations,
   * as it could mislead the recommendation models,
   * and result in wrong recommendations.
   * For anonymous/unregistered users, it is possible to use, for example, their session ID.
   * @param {number} count - Number of items to be recommended (N for the top-N recommendation).
   * @param {Object} optional - Optional parameters given as an object with structure name of the parameter: value
   * - Allowed parameters:
   *     - *scenario*
   *         - Type: string
   *         - Description: Scenario defines a particular application of recommendations. It can be, for example, "homepage", "cart", or "emailing".
   * You can set various settings to the [scenario](https://docs.recombee.com/scenarios.html) in the [Admin UI](https://admin.recombee.com). You can also see the performance of each scenario in the Admin UI separately, so you can check how well each application performs.
   * The AI that optimizes models to get the best results may optimize different scenarios separately or even use different models in each of the scenarios.
   *     - *cascadeCreate*
   *         - Type: boolean
   *         - Description: If an item of the given *itemId* or user of the given *targetUserId* doesn't exist in the database, it creates the missing entity/entities and returns some (non-personalized) recommendations. This allows, for example, rotations in the following recommendations for the user of the given *targetUserId*, as the user will be already known to the system.
   *     - *returnProperties*
   *         - Type: boolean
   *         - Description: With `returnProperties=true`, property values of the recommended items are returned along with their IDs in a JSON dictionary. The acquired property values can be used to easily display the recommended items to the user.
   * Example response:
   * ```json
   *   {
   *     "recommId": "0c6189e7-dc1a-429a-b613-192696309361",
   *     "recomms":
   *       [
   *         {
   *           "id": "tv-178",
   *           "values": {
   *             "description": "4K TV with 3D feature",
   *             "categories":   ["Electronics", "Televisions"],
   *             "price": 342,
   *             "url": "myshop.com/tv-178"
   *           }
   *         },
   *         {
   *           "id": "mixer-42",
   *           "values": {
   *             "description": "Stainless Steel Mixer",
   *             "categories":   ["Home & Kitchen"],
   *             "price": 39,
   *             "url": "myshop.com/mixer-42"
   *           }
   *         }
   *       ],
   *     "numberNextRecommsCalls": 0
   *   }
   * ```
   *     - *includedProperties*
   *         - Type: string[]
   *         - Description: Allows specifying which properties should be returned when `returnProperties=true` is set. The properties are given as a comma-separated list.
   * Example response for `includedProperties=description,price`:
   * ```json
   *   {
   *     "recommId": "6842c725-a79f-4537-a02c-f34d668a3f80",
   *     "recomms":
   *       [
   *         {
   *           "id": "tv-178",
   *           "values": {
   *             "description": "4K TV with 3D feature",
   *             "price": 342
   *           }
   *         },
   *         {
   *           "id": "mixer-42",
   *           "values": {
   *             "description": "Stainless Steel Mixer",
   *             "price": 39
   *           }
   *         }
   *       ],
   *     "numberNextRecommsCalls": 0
   *   }
   * ```
   *     - *filter*
   *         - Type: string
   *         - Description: Boolean-returning [ReQL](https://docs.recombee.com/reql.html) expression, which allows you to filter recommended items based on the values of their attributes.
   * Filters can also be assigned to a [scenario](https://docs.recombee.com/scenarios.html) in the [Admin UI](https://admin.recombee.com).
   *     - *booster*
   *         - Type: string
   *         - Description: Number-returning [ReQL](https://docs.recombee.com/reql.html) expression, which allows you to boost the recommendation rate of some items based on the values of their attributes.
   * Boosters can also be assigned to a [scenario](https://docs.recombee.com/scenarios.html) in the [Admin UI](https://admin.recombee.com).
   *     - *logic*
   *         - Type: string | object
   *         - Description: Logic specifies the particular behavior of the recommendation models. You can pick tailored logic for your domain and use case.
   * See [this section](https://docs.recombee.com/recommendation_logics.html) for a list of available logics and other details.
   * The difference between `logic` and `scenario` is that `logic` specifies mainly behavior, while `scenario` specifies the place where recommendations are shown to the users.
   * Logic can also be set to a [scenario](https://docs.recombee.com/scenarios.html) in the [Admin UI](https://admin.recombee.com).
   *     - *userImpact*
   *         - Type: number
   *         - Description: **Expert option** If *targetUserId* parameter is present, the recommendations are biased towards the given user. Using *userImpact*, you may control this bias. For an extreme case of `userImpact=0.0`, the interactions made by the user are not taken into account at all (with the exception of history-based blacklisting), for `userImpact=1.0`, you'll get a user-based recommendation. The default value is `0`.
   *     - *diversity*
   *         - Type: number
   *         - Description: **Expert option** Real number from [0.0, 1.0], which determines how mutually dissimilar the recommended items should be. The default value is 0.0, i.e., no diversification. Value 1.0 means maximal diversification.
   *     - *minRelevance*
   *         - Type: string
   *         - Description: **Expert option** If the *targetUserId* is provided:  Specifies the threshold of how relevant must the recommended items be to the user. Possible values one of: "low", "medium", "high". The default value is "low", meaning that the system attempts to recommend a number of items equal to *count* at any cost. If there is not enough data (such as interactions or item properties), this may even lead to bestseller-based recommendations being appended to reach the full *count*. This behavior may be suppressed by using "medium" or "high" values. In such case, the system only recommends items of at least the requested relevance and may return less than *count* items when there is not enough data to fulfill it.
   *     - *rotationRate*
   *         - Type: number
   *         - Description: **Expert option** If the *targetUserId* is provided: If your users browse the system in real-time, it may easily happen that you wish to offer them recommendations multiple times. Here comes the question: how much should the recommendations change? Should they remain the same, or should they rotate? Recombee API allows you to control this per request in a backward fashion. You may penalize an item for being recommended in the near past. For the specific user, `rotationRate=1` means maximal rotation, `rotationRate=0` means absolutely no rotation. You may also use, for example, `rotationRate=0.2` for only slight rotation of recommended items.
   *     - *rotationTime*
   *         - Type: number
   *         - Description: **Expert option** If the *targetUserId* is provided: Taking *rotationRate* into account, specifies how long it takes for an item to recover from the penalization. For example, `rotationTime=7200.0` means that items recommended less than 2 hours ago are penalized.
   *     - *expertSettings*
   *         - Type: object
   *         - Description: Dictionary of custom options.
   *     - *returnAbGroup*
   *         - Type: boolean
   *         - Description: If there is a custom AB-testing running, return the name of the group to which the request belongs.
   */
  function RecommendItemsToItem(itemId, targetUserId, count, optional) {
    var _this;
    _classCallCheck(this, RecommendItemsToItem);
    _this = _callSuper(this, RecommendItemsToItem, ['POST', "/recomms/items/".concat(encodeURIComponent(itemId), "/items/"), 9000, false]);
    _this.itemId = itemId;
    _this.targetUserId = targetUserId;
    _this.count = count;
    optional = optional || {};
    _this.scenario = optional.scenario;
    _this.cascadeCreate = optional.cascadeCreate;
    _this.returnProperties = optional.returnProperties;
    _this.includedProperties = optional.includedProperties;
    _this.filter = optional.filter;
    _this.booster = optional.booster;
    _this.logic = optional.logic;
    _this.userImpact = optional.userImpact;
    _this.diversity = optional.diversity;
    _this.minRelevance = optional.minRelevance;
    _this.rotationRate = optional.rotationRate;
    _this.rotationTime = optional.rotationTime;
    _this.expertSettings = optional.expertSettings;
    _this.returnAbGroup = optional.returnAbGroup;
    return _this;
  }

  /**
   * Get body parameters
   * @return {Object} The values of body parameters (name of parameter: value of the parameter)
   */
  _inherits(RecommendItemsToItem, _rqs$Request);
  return _createClass(RecommendItemsToItem, [{
    key: "bodyParameters",
    value: function bodyParameters() {
      var params = {};
      params.targetUserId = this.targetUserId;
      params.count = this.count;
      if (this.scenario !== undefined) params.scenario = this.scenario;
      if (this.cascadeCreate !== undefined) params.cascadeCreate = this.cascadeCreate;
      if (this.returnProperties !== undefined) params.returnProperties = this.returnProperties;
      if (this.includedProperties !== undefined) params.includedProperties = this.includedProperties;
      if (this.filter !== undefined) params.filter = this.filter;
      if (this.booster !== undefined) params.booster = this.booster;
      if (this.logic !== undefined) params.logic = this.logic;
      if (this.userImpact !== undefined) params.userImpact = this.userImpact;
      if (this.diversity !== undefined) params.diversity = this.diversity;
      if (this.minRelevance !== undefined) params.minRelevance = this.minRelevance;
      if (this.rotationRate !== undefined) params.rotationRate = this.rotationRate;
      if (this.rotationTime !== undefined) params.rotationTime = this.rotationTime;
      if (this.expertSettings !== undefined) params.expertSettings = this.expertSettings;
      if (this.returnAbGroup !== undefined) params.returnAbGroup = this.returnAbGroup;
      params.cascadeCreate = this.cascadeCreate !== undefined ? this.cascadeCreate : true;
      return params;
    }
  }]);
}(rqs.Request);
exports.RecommendItemsToItem = RecommendItemsToItem;

/***/ }),

/***/ "./src/requests/recommend-items-to-user.js":
/*!*************************************************!*\
  !*** ./src/requests/recommend-items-to-user.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/*
 This file is auto-generated, do not edit
*/



function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
var rqs = __webpack_require__(/*! ./request */ "./src/requests/request.js");

/**
 * Based on the user's past interactions (purchases, ratings, etc.) with the items, recommends top-N items that are most likely to be of high value for the given user.
 * The most typical use cases are recommendations on the homepage, in some "Picked just for you" section, or in email.
 * The returned items are sorted by relevance (the first item being the most relevant).
 * Besides the recommended items, also a unique `recommId` is returned in the response. It can be used to:
 * - Let Recombee know that this recommendation was successful (e.g., user clicked one of the recommended items). See [Reported metrics](https://docs.recombee.com/admin_ui.html#reported-metrics).
 * - Get subsequent recommended items when the user scrolls down (*infinite scroll*) or goes to the next page. See [Recommend Next Items](https://docs.recombee.com/api.html#recommend-next-items).
 * It is also possible to use POST HTTP method (for example in the case of a very long ReQL filter) - query parameters then become body parameters.
 */
var RecommendItemsToUser = /*#__PURE__*/function (_rqs$Request) {
  /**
   * Construct the request
   * @param {string} userId - ID of the user for whom personalized recommendations are to be generated.
   * @param {number} count - Number of items to be recommended (N for the top-N recommendation).
   * @param {Object} optional - Optional parameters given as an object with structure name of the parameter: value
   * - Allowed parameters:
   *     - *scenario*
   *         - Type: string
   *         - Description: Scenario defines a particular application of recommendations. It can be, for example, "homepage", "cart", or "emailing".
   * You can set various settings to the [scenario](https://docs.recombee.com/scenarios.html) in the [Admin UI](https://admin.recombee.com). You can also see the performance of each scenario in the Admin UI separately, so you can check how well each application performs.
   * The AI that optimizes models to get the best results may optimize different scenarios separately or even use different models in each of the scenarios.
   *     - *cascadeCreate*
   *         - Type: boolean
   *         - Description: If the user does not exist in the database, returns a list of non-personalized recommendations and creates the user in the database. This allows, for example, rotations in the following recommendations for that user, as the user will be already known to the system.
   *     - *returnProperties*
   *         - Type: boolean
   *         - Description: With `returnProperties=true`, property values of the recommended items are returned along with their IDs in a JSON dictionary. The acquired property values can be used to easily display the recommended items to the user.
   * Example response:
   * ```json
   *   {
   *     "recommId": "ce52ada4-e4d9-4885-943c-407db2dee837",
   *     "recomms":
   *       [
   *         {
   *           "id": "tv-178",
   *           "values": {
   *             "description": "4K TV with 3D feature",
   *             "categories":   ["Electronics", "Televisions"],
   *             "price": 342,
   *             "url": "myshop.com/tv-178"
   *           }
   *         },
   *         {
   *           "id": "mixer-42",
   *           "values": {
   *             "description": "Stainless Steel Mixer",
   *             "categories":   ["Home & Kitchen"],
   *             "price": 39,
   *             "url": "myshop.com/mixer-42"
   *           }
   *         }
   *       ],
   *      "numberNextRecommsCalls": 0
   *   }
   * ```
   *     - *includedProperties*
   *         - Type: string[]
   *         - Description: Allows specifying which properties should be returned when `returnProperties=true` is set. The properties are given as a comma-separated list.
   * Example response for `includedProperties=description,price`:
   * ```json
   *   {
   *     "recommId": "a86ee8d5-cd8e-46d1-886c-8b3771d0520b",
   *     "recomms":
   *       [
   *         {
   *           "id": "tv-178",
   *           "values": {
   *             "description": "4K TV with 3D feature",
   *             "price": 342
   *           }
   *         },
   *         {
   *           "id": "mixer-42",
   *           "values": {
   *             "description": "Stainless Steel Mixer",
   *             "price": 39
   *           }
   *         }
   *       ],
   *     "numberNextRecommsCalls": 0
   *   }
   * ```
   *     - *filter*
   *         - Type: string
   *         - Description: Boolean-returning [ReQL](https://docs.recombee.com/reql.html) expression, which allows you to filter recommended items based on the values of their attributes.
   * Filters can also be assigned to a [scenario](https://docs.recombee.com/scenarios.html) in the [Admin UI](https://admin.recombee.com).
   *     - *booster*
   *         - Type: string
   *         - Description: Number-returning [ReQL](https://docs.recombee.com/reql.html) expression, which allows you to boost the recommendation rate of some items based on the values of their attributes.
   * Boosters can also be assigned to a [scenario](https://docs.recombee.com/scenarios.html) in the [Admin UI](https://admin.recombee.com).
   *     - *logic*
   *         - Type: string | object
   *         - Description: Logic specifies the particular behavior of the recommendation models. You can pick tailored logic for your domain and use case.
   * See [this section](https://docs.recombee.com/recommendation_logics.html) for a list of available logics and other details.
   * The difference between `logic` and `scenario` is that `logic` specifies mainly behavior, while `scenario` specifies the place where recommendations are shown to the users.
   * Logic can also be set to a [scenario](https://docs.recombee.com/scenarios.html) in the [Admin UI](https://admin.recombee.com).
   *     - *diversity*
   *         - Type: number
   *         - Description: **Expert option** Real number from [0.0, 1.0], which determines how mutually dissimilar the recommended items should be. The default value is 0.0, i.e., no diversification. Value 1.0 means maximal diversification.
   *     - *minRelevance*
   *         - Type: string
   *         - Description: **Expert option** Specifies the threshold of how relevant must the recommended items be to the user. Possible values one of: "low", "medium", "high". The default value is "low", meaning that the system attempts to recommend a number of items equal to *count* at any cost. If there is not enough data (such as interactions or item properties), this may even lead to bestseller-based recommendations to be appended to reach the full *count*. This behavior may be suppressed by using "medium" or "high" values. In such a case, the system only recommends items of at least the requested relevance and may return less than *count* items when there is not enough data to fulfill it.
   *     - *rotationRate*
   *         - Type: number
   *         - Description: **Expert option** If your users browse the system in real-time, it may easily happen that you wish to offer them recommendations multiple times. Here comes the question: how much should the recommendations change? Should they remain the same, or should they rotate? Recombee API allows you to control this per request in a backward fashion. You may penalize an item for being recommended in the near past. For the specific user, `rotationRate=1` means maximal rotation, `rotationRate=0` means absolutely no rotation. You may also use, for example, `rotationRate=0.2` for only slight rotation of recommended items. Default: `0`.
   *     - *rotationTime*
   *         - Type: number
   *         - Description: **Expert option** Taking *rotationRate* into account, specifies how long it takes for an item to recover from the penalization. For example, `rotationTime=7200.0` means that items recommended less than 2 hours ago are penalized. Default: `7200.0`.
   *     - *expertSettings*
   *         - Type: object
   *         - Description: Dictionary of custom options.
   *     - *returnAbGroup*
   *         - Type: boolean
   *         - Description: If there is a custom AB-testing running, return the name of the group to which the request belongs.
   */
  function RecommendItemsToUser(userId, count, optional) {
    var _this;
    _classCallCheck(this, RecommendItemsToUser);
    _this = _callSuper(this, RecommendItemsToUser, ['POST', "/recomms/users/".concat(encodeURIComponent(userId), "/items/"), 9000, false]);
    _this.userId = userId;
    _this.count = count;
    optional = optional || {};
    _this.scenario = optional.scenario;
    _this.cascadeCreate = optional.cascadeCreate;
    _this.returnProperties = optional.returnProperties;
    _this.includedProperties = optional.includedProperties;
    _this.filter = optional.filter;
    _this.booster = optional.booster;
    _this.logic = optional.logic;
    _this.diversity = optional.diversity;
    _this.minRelevance = optional.minRelevance;
    _this.rotationRate = optional.rotationRate;
    _this.rotationTime = optional.rotationTime;
    _this.expertSettings = optional.expertSettings;
    _this.returnAbGroup = optional.returnAbGroup;
    return _this;
  }

  /**
   * Get body parameters
   * @return {Object} The values of body parameters (name of parameter: value of the parameter)
   */
  _inherits(RecommendItemsToUser, _rqs$Request);
  return _createClass(RecommendItemsToUser, [{
    key: "bodyParameters",
    value: function bodyParameters() {
      var params = {};
      params.count = this.count;
      if (this.scenario !== undefined) params.scenario = this.scenario;
      if (this.cascadeCreate !== undefined) params.cascadeCreate = this.cascadeCreate;
      if (this.returnProperties !== undefined) params.returnProperties = this.returnProperties;
      if (this.includedProperties !== undefined) params.includedProperties = this.includedProperties;
      if (this.filter !== undefined) params.filter = this.filter;
      if (this.booster !== undefined) params.booster = this.booster;
      if (this.logic !== undefined) params.logic = this.logic;
      if (this.diversity !== undefined) params.diversity = this.diversity;
      if (this.minRelevance !== undefined) params.minRelevance = this.minRelevance;
      if (this.rotationRate !== undefined) params.rotationRate = this.rotationRate;
      if (this.rotationTime !== undefined) params.rotationTime = this.rotationTime;
      if (this.expertSettings !== undefined) params.expertSettings = this.expertSettings;
      if (this.returnAbGroup !== undefined) params.returnAbGroup = this.returnAbGroup;
      params.cascadeCreate = this.cascadeCreate !== undefined ? this.cascadeCreate : true;
      return params;
    }
  }]);
}(rqs.Request);
exports.RecommendItemsToUser = RecommendItemsToUser;

/***/ }),

/***/ "./src/requests/recommend-next-items.js":
/*!**********************************************!*\
  !*** ./src/requests/recommend-next-items.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/*
 This file is auto-generated, do not edit
*/



function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
var rqs = __webpack_require__(/*! ./request */ "./src/requests/request.js");

/**
 * Returns items that shall be shown to a user as next recommendations when the user e.g. scrolls the page down (*infinite scroll*) or goes to the next page.
 * It accepts `recommId` of a base recommendation request (e.g., request from the first page) and the number of items that shall be returned (`count`).
 * The base request can be one of:
 *   - [Recommend Items to Item](https://docs.recombee.com/api.html#recommend-items-to-item)
 *   - [Recommend Items to User](https://docs.recombee.com/api.html#recommend-items-to-user)
 *   - [Recommend Items to Item Segment](https://docs.recombee.com/api.html#recommend-items-to-item-segment)
 *   - [Search Items](https://docs.recombee.com/api.html#search-items)
 * All the other parameters are inherited from the base request.
 * *Recommend next items* can be called many times for a single `recommId` and each call returns different (previously not recommended) items.
 * The number of *Recommend next items* calls performed so far is returned in the `numberNextRecommsCalls` field.
 * *Recommend next items* can be requested up to 30 minutes after the base request or a previous *Recommend next items* call.
 * For billing purposes, each call to *Recommend next items* is counted as a separate recommendation request.
 */
var RecommendNextItems = /*#__PURE__*/function (_rqs$Request) {
  /**
   * Construct the request
   * @param {string} recommId - ID of the base recommendation request for which next recommendations should be returned
   * @param {number} count - Number of items to be recommended
   */
  function RecommendNextItems(recommId, count) {
    var _this;
    _classCallCheck(this, RecommendNextItems);
    _this = _callSuper(this, RecommendNextItems, ['POST', "/recomms/next/items/".concat(encodeURIComponent(recommId)), 9000, false]);
    _this.recommId = recommId;
    _this.count = count;
    return _this;
  }

  /**
   * Get body parameters
   * @return {Object} The values of body parameters (name of parameter: value of the parameter)
   */
  _inherits(RecommendNextItems, _rqs$Request);
  return _createClass(RecommendNextItems, [{
    key: "bodyParameters",
    value: function bodyParameters() {
      var params = {};
      params.count = this.count;
      params.cascadeCreate = this.cascadeCreate !== undefined ? this.cascadeCreate : true;
      return params;
    }
  }]);
}(rqs.Request);
exports.RecommendNextItems = RecommendNextItems;

/***/ }),

/***/ "./src/requests/request.js":
/*!*********************************!*\
  !*** ./src/requests/request.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


/**
 * Base class for all the requests
 */
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
var Request = /*#__PURE__*/_createClass(
/**
 * Construct the basis of request
 * @param {string} method - GET/PUT/POST/DELETE
 * @param {string} path - Path to the endpoint
 * @param {number} timeout - Timeout in milliseconds
 * @param {boolean} ensureHttps - If true, always use HTTPS.
 */
function Request(method, path, timeout, ensureHttps) {
  _classCallCheck(this, Request);
  this.method = method;
  this.path = path;
  this.timeout = timeout;
  this.ensureHttps = ensureHttps;
});
exports.Request = Request;

/***/ }),

/***/ "./src/requests/search-item-segments.js":
/*!**********************************************!*\
  !*** ./src/requests/search-item-segments.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/*
 This file is auto-generated, do not edit
*/



function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
var rqs = __webpack_require__(/*! ./request */ "./src/requests/request.js");

/**
 * Full-text personalized search that returns Segments from a Segmentation. The results are based on the provided `searchQuery` and also on the user's past interactions (purchases, ratings, etc.).
 * Based on the used Segmentation, this endpoint can be used for example for:
 *   - Searching within categories or brands
 *   - Searching within genres or artists
 * For example if the user is searching for "iPhone" this endpoint can return "cell phones" category.
 * You need to set the used Segmentation the Admin UI in the Scenario settings prior to using this endpoint.
 * The returned segments are sorted by relevance (first segment being the most relevant).
 * It is also possible to use POST HTTP method (for example in case of very long ReQL filter) - query parameters then become body parameters.
 */
var SearchItemSegments = /*#__PURE__*/function (_rqs$Request) {
  /**
   * Construct the request
   * @param {string} userId - ID of the user for whom personalized search will be performed.
   * @param {string} searchQuery - Search query provided by the user. It is used for the full-text search.
   * @param {number} count - Number of segments to be returned (N for the top-N results).
   * @param {Object} optional - Optional parameters given as an object with structure name of the parameter: value
   * - Allowed parameters:
   *     - *scenario*
   *         - Type: string
   *         - Description: Scenario defines a particular application of recommendations. It can be, for example, "homepage", "cart", or "emailing".
   * You can set various settings to the [scenario](https://docs.recombee.com/scenarios.html) in the [Admin UI](https://admin.recombee.com). You can also see the performance of each scenario in the Admin UI separately, so you can check how well each application performs.
   * The AI that optimizes models to get the best results may optimize different scenarios separately or even use different models in each of the scenarios.
   *     - *cascadeCreate*
   *         - Type: boolean
   *         - Description: If the user does not exist in the database, returns a list of non-personalized recommendations and creates the user in the database. This allows, for example, rotations in the following recommendations for that user, as the user will be already known to the system.
   *     - *filter*
   *         - Type: string
   *         - Description: Boolean-returning [ReQL](https://docs.recombee.com/reql.html) expression which allows you to filter recommended segments based on the `segmentationId`.
   *     - *booster*
   *         - Type: string
   *         - Description: Number-returning [ReQL](https://docs.recombee.com/reql.html) expression which allows you to boost recommendation rate of some segments based on the `segmentationId`.
   *     - *logic*
   *         - Type: string | object
   *         - Description: Logic specifies the particular behavior of the recommendation models. You can pick tailored logic for your domain and use case.
   * See [this section](https://docs.recombee.com/recommendation_logics.html) for a list of available logics and other details.
   * The difference between `logic` and `scenario` is that `logic` specifies mainly behavior, while `scenario` specifies the place where recommendations are shown to the users.
   * Logic can also be set to a [scenario](https://docs.recombee.com/scenarios.html) in the [Admin UI](https://admin.recombee.com).
   *     - *expertSettings*
   *         - Type: object
   *         - Description: Dictionary of custom options.
   *     - *returnAbGroup*
   *         - Type: boolean
   *         - Description: If there is a custom AB-testing running, return the name of the group to which the request belongs.
   */
  function SearchItemSegments(userId, searchQuery, count, optional) {
    var _this;
    _classCallCheck(this, SearchItemSegments);
    _this = _callSuper(this, SearchItemSegments, ['POST', "/search/users/".concat(encodeURIComponent(userId), "/item-segments/"), 9000, false]);
    _this.userId = userId;
    _this.searchQuery = searchQuery;
    _this.count = count;
    optional = optional || {};
    _this.scenario = optional.scenario;
    _this.cascadeCreate = optional.cascadeCreate;
    _this.filter = optional.filter;
    _this.booster = optional.booster;
    _this.logic = optional.logic;
    _this.expertSettings = optional.expertSettings;
    _this.returnAbGroup = optional.returnAbGroup;
    return _this;
  }

  /**
   * Get body parameters
   * @return {Object} The values of body parameters (name of parameter: value of the parameter)
   */
  _inherits(SearchItemSegments, _rqs$Request);
  return _createClass(SearchItemSegments, [{
    key: "bodyParameters",
    value: function bodyParameters() {
      var params = {};
      params.searchQuery = this.searchQuery;
      params.count = this.count;
      if (this.scenario !== undefined) params.scenario = this.scenario;
      if (this.cascadeCreate !== undefined) params.cascadeCreate = this.cascadeCreate;
      if (this.filter !== undefined) params.filter = this.filter;
      if (this.booster !== undefined) params.booster = this.booster;
      if (this.logic !== undefined) params.logic = this.logic;
      if (this.expertSettings !== undefined) params.expertSettings = this.expertSettings;
      if (this.returnAbGroup !== undefined) params.returnAbGroup = this.returnAbGroup;
      params.cascadeCreate = this.cascadeCreate !== undefined ? this.cascadeCreate : true;
      return params;
    }
  }]);
}(rqs.Request);
exports.SearchItemSegments = SearchItemSegments;

/***/ }),

/***/ "./src/requests/search-items.js":
/*!**************************************!*\
  !*** ./src/requests/search-items.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/*
 This file is auto-generated, do not edit
*/



function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
var rqs = __webpack_require__(/*! ./request */ "./src/requests/request.js");

/**
 * Full-text personalized search. The results are based on the provided `searchQuery` and also on the user's past interactions (purchases, ratings, etc.) with the items (items more suitable for the user are preferred in the results).
 * All the string and set item properties are indexed by the search engine.
 * This endpoint should be used in a search box on your website/app. It can be called multiple times as the user is typing the query in order to get the most viable suggestions based on the current state of the query, or once after submitting the whole query.
 * The returned items are sorted by relevance (the first item being the most relevant).
 * Besides the recommended items, also a unique `recommId` is returned in the response. It can be used to:
 * - Let Recombee know that this search was successful (e.g., user clicked one of the recommended items). See [Reported metrics](https://docs.recombee.com/admin_ui.html#reported-metrics).
 * - Get subsequent search results when the user scrolls down or goes to the next page. See [Recommend Next Items](https://docs.recombee.com/api.html#recommend-next-items).
 * It is also possible to use POST HTTP method (for example in the case of a very long ReQL filter) - query parameters then become body parameters.
 */
var SearchItems = /*#__PURE__*/function (_rqs$Request) {
  /**
   * Construct the request
   * @param {string} userId - ID of the user for whom personalized search will be performed.
   * @param {string} searchQuery - Search query provided by the user. It is used for the full-text search.
   * @param {number} count - Number of items to be returned (N for the top-N results).
   * @param {Object} optional - Optional parameters given as an object with structure name of the parameter: value
   * - Allowed parameters:
   *     - *scenario*
   *         - Type: string
   *         - Description: Scenario defines a particular search field in your user interface.
   * You can set various settings to the [scenario](https://docs.recombee.com/scenarios.html) in the [Admin UI](https://admin.recombee.com). You can also see the performance of each scenario in the Admin UI separately, so you can check how well each field performs.
   * The AI that optimizes models to get the best results may optimize different scenarios separately, or even use different models in each of the scenarios.
   *     - *cascadeCreate*
   *         - Type: boolean
   *         - Description: If the user does not exist in the database, returns a list of non-personalized search results and creates the user in the database. This allows, for example, rotations in the following recommendations for that user, as the user will be already known to the system.
   *     - *returnProperties*
   *         - Type: boolean
   *         - Description: With `returnProperties=true`, property values of the recommended items are returned along with their IDs in a JSON dictionary. The acquired property values can be used to easily display the recommended items to the user.
   * Example response:
   * ```json
   *   {
   *     "recommId": "ce52ada4-e4d9-4885-943c-407db2dee837",
   *     "recomms":
   *       [
   *         {
   *           "id": "tv-178",
   *           "values": {
   *             "description": "4K TV with 3D feature",
   *             "categories":   ["Electronics", "Televisions"],
   *             "price": 342,
   *             "url": "myshop.com/tv-178"
   *           }
   *         },
   *         {
   *           "id": "mixer-42",
   *           "values": {
   *             "description": "Stainless Steel Mixer",
   *             "categories":   ["Home & Kitchen"],
   *             "price": 39,
   *             "url": "myshop.com/mixer-42"
   *           }
   *         }
   *       ],
   *     "numberNextRecommsCalls": 0
   *   }
   * ```
   *     - *includedProperties*
   *         - Type: string[]
   *         - Description: Allows specifying which properties should be returned when `returnProperties=true` is set. The properties are given as a comma-separated list.
   * Example response for `includedProperties=description,price`:
   * ```json
   *   {
   *     "recommId": "a86ee8d5-cd8e-46d1-886c-8b3771d0520b",
   *     "recomms":
   *       [
   *         {
   *           "id": "tv-178",
   *           "values": {
   *             "description": "4K TV with 3D feature",
   *             "price": 342
   *           }
   *         },
   *         {
   *           "id": "mixer-42",
   *           "values": {
   *             "description": "Stainless Steel Mixer",
   *             "price": 39
   *           }
   *         }
   *       ],
   *     "numberNextRecommsCalls": 0
   *   }
   * ```
   *     - *filter*
   *         - Type: string
   *         - Description: Boolean-returning [ReQL](https://docs.recombee.com/reql.html) expression, which allows you to filter recommended items based on the values of their attributes.
   * Filters can also be assigned to a [scenario](https://docs.recombee.com/scenarios.html) in the [Admin UI](https://admin.recombee.com).
   *     - *booster*
   *         - Type: string
   *         - Description: Number-returning [ReQL](https://docs.recombee.com/reql.html) expression, which allows you to boost the recommendation rate of some items based on the values of their attributes.
   * Boosters can also be assigned to a [scenario](https://docs.recombee.com/scenarios.html) in the [Admin UI](https://admin.recombee.com).
   *     - *logic*
   *         - Type: string | object
   *         - Description: Logic specifies the particular behavior of the recommendation models. You can pick tailored logic for your domain and use case.
   * See [this section](https://docs.recombee.com/recommendation_logics.html) for a list of available logics and other details.
   * The difference between `logic` and `scenario` is that `logic` specifies mainly behavior, while `scenario` specifies the place where recommendations are shown to the users.
   * Logic can also be set to a [scenario](https://docs.recombee.com/scenarios.html) in the [Admin UI](https://admin.recombee.com).
   *     - *expertSettings*
   *         - Type: object
   *         - Description: Dictionary of custom options.
   *     - *returnAbGroup*
   *         - Type: boolean
   *         - Description: If there is a custom AB-testing running, return the name of the group to which the request belongs.
   */
  function SearchItems(userId, searchQuery, count, optional) {
    var _this;
    _classCallCheck(this, SearchItems);
    _this = _callSuper(this, SearchItems, ['POST', "/search/users/".concat(encodeURIComponent(userId), "/items/"), 9000, false]);
    _this.userId = userId;
    _this.searchQuery = searchQuery;
    _this.count = count;
    optional = optional || {};
    _this.scenario = optional.scenario;
    _this.cascadeCreate = optional.cascadeCreate;
    _this.returnProperties = optional.returnProperties;
    _this.includedProperties = optional.includedProperties;
    _this.filter = optional.filter;
    _this.booster = optional.booster;
    _this.logic = optional.logic;
    _this.expertSettings = optional.expertSettings;
    _this.returnAbGroup = optional.returnAbGroup;
    return _this;
  }

  /**
   * Get body parameters
   * @return {Object} The values of body parameters (name of parameter: value of the parameter)
   */
  _inherits(SearchItems, _rqs$Request);
  return _createClass(SearchItems, [{
    key: "bodyParameters",
    value: function bodyParameters() {
      var params = {};
      params.searchQuery = this.searchQuery;
      params.count = this.count;
      if (this.scenario !== undefined) params.scenario = this.scenario;
      if (this.cascadeCreate !== undefined) params.cascadeCreate = this.cascadeCreate;
      if (this.returnProperties !== undefined) params.returnProperties = this.returnProperties;
      if (this.includedProperties !== undefined) params.includedProperties = this.includedProperties;
      if (this.filter !== undefined) params.filter = this.filter;
      if (this.booster !== undefined) params.booster = this.booster;
      if (this.logic !== undefined) params.logic = this.logic;
      if (this.expertSettings !== undefined) params.expertSettings = this.expertSettings;
      if (this.returnAbGroup !== undefined) params.returnAbGroup = this.returnAbGroup;
      params.cascadeCreate = this.cascadeCreate !== undefined ? this.cascadeCreate : true;
      return params;
    }
  }]);
}(rqs.Request);
exports.SearchItems = SearchItems;

/***/ }),

/***/ "./src/requests/set-view-portion.js":
/*!******************************************!*\
  !*** ./src/requests/set-view-portion.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/*
 This file is auto-generated, do not edit
*/



function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
var rqs = __webpack_require__(/*! ./request */ "./src/requests/request.js");

/**
 * Sets viewed portion of an item (for example a video or article) by a user (at a session).
 * If you send a new request with the same (`userId`, `itemId`, `sessionId`), the portion gets updated.
 */
var SetViewPortion = /*#__PURE__*/function (_rqs$Request) {
  /**
   * Construct the request
   * @param {string} userId - User who viewed a portion of the item
   * @param {string} itemId - Viewed item
   * @param {number} portion - Viewed portion of the item (number between 0.0 (viewed nothing) and 1.0 (viewed full item) ). It should be the actual viewed part of the item, no matter the seeking. For example, if the user seeked immediately to half of the item and then viewed 10% of the item, the `portion` should still be `0.1`.
   * @param {Object} optional - Optional parameters given as an object with structure name of the parameter: value
   * - Allowed parameters:
   *     - *sessionId*
   *         - Type: string
   *         - Description: ID of the session in which the user viewed the item. Default is `null` (`None`, `nil`, `NULL` etc., depending on the language).
   *     - *timestamp*
   *         - Type: string | number
   *         - Description: UTC timestamp of the rating as ISO8601-1 pattern or UTC epoch time. The default value is the current time.
   *     - *cascadeCreate*
   *         - Type: boolean
   *         - Description: Sets whether the given user/item should be created if not present in the database.
   *     - *recommId*
   *         - Type: string
   *         - Description: If this view portion is based on a recommendation request, `recommId` is the id of the clicked recommendation.
   *     - *additionalData*
   *         - Type: object
   *         - Description: A dictionary of additional data for the interaction.
   */
  function SetViewPortion(userId, itemId, portion, optional) {
    var _this;
    _classCallCheck(this, SetViewPortion);
    _this = _callSuper(this, SetViewPortion, ['POST', '/viewportions/', 9000, false]);
    _this.userId = userId;
    _this.itemId = itemId;
    _this.portion = portion;
    optional = optional || {};
    _this.sessionId = optional.sessionId;
    _this.timestamp = optional.timestamp;
    _this.cascadeCreate = optional.cascadeCreate;
    _this.recommId = optional.recommId;
    _this.additionalData = optional.additionalData;
    return _this;
  }

  /**
   * Get body parameters
   * @return {Object} The values of body parameters (name of parameter: value of the parameter)
   */
  _inherits(SetViewPortion, _rqs$Request);
  return _createClass(SetViewPortion, [{
    key: "bodyParameters",
    value: function bodyParameters() {
      var params = {};
      params.userId = this.userId;
      params.itemId = this.itemId;
      params.portion = this.portion;
      if (this.sessionId !== undefined) params.sessionId = this.sessionId;
      if (this.timestamp !== undefined) params.timestamp = this.timestamp;
      if (this.cascadeCreate !== undefined) params.cascadeCreate = this.cascadeCreate;
      if (this.recommId !== undefined) params.recommId = this.recommId;
      if (this.additionalData !== undefined) params.additionalData = this.additionalData;
      params.cascadeCreate = this.cascadeCreate !== undefined ? this.cascadeCreate : true;
      return params;
    }
  }]);
}(rqs.Request);
exports.SetViewPortion = SetViewPortion;

/***/ }),

/***/ "./node_modules/.pnpm/jssha@3.3.1/node_modules/jssha/dist/sha.js":
/*!***********************************************************************!*\
  !*** ./node_modules/.pnpm/jssha@3.3.1/node_modules/jssha/dist/sha.js ***!
  \***********************************************************************/
/***/ (function(module) {

/**
 * A JavaScript implementation of the SHA family of hashes - defined in FIPS PUB 180-4, FIPS PUB 202,
 * and SP 800-185 - as well as the corresponding HMAC implementation as defined in FIPS PUB 198-1.
 *
 * Copyright 2008-2023 Brian Turek, 1998-2009 Paul Johnston & Contributors
 * Distributed under the BSD License
 * See http://caligatio.github.com/jsSHA/ for more information
 *
 * Two ECMAScript polyfill functions carry the following license:
 *
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with
 * the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, EITHER EXPRESS OR IMPLIED,
 * INCLUDING WITHOUT LIMITATION ANY IMPLIED WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
 * MERCHANTABLITY OR NON-INFRINGEMENT.
 *
 * See the Apache Version 2.0 License for specific language governing permissions and limitations under the License.
 */
!function(n,r){ true?module.exports=r():0}(this,(function(){"use strict";var n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",r="ARRAYBUFFER not supported by this environment",t="UINT8ARRAY not supported by this environment";function e(n,r,t,e){var i,o,u,f=r||[0],s=(t=t||0)>>>3,w=-1===e?3:0;for(i=0;i<n.length;i+=1)o=(u=i+s)>>>2,f.length<=o&&f.push(0),f[o]|=n[i]<<8*(w+e*(u%4));return{value:f,binLen:8*n.length+t}}function i(i,o,u){switch(o){case"UTF8":case"UTF16BE":case"UTF16LE":break;default:throw new Error("encoding must be UTF8, UTF16BE, or UTF16LE")}switch(i){case"HEX":return function(n,r,t){return function(n,r,t,e){var i,o,u,f;if(0!=n.length%2)throw new Error("String of HEX type must be in byte increments");var s=r||[0],w=(t=t||0)>>>3,a=-1===e?3:0;for(i=0;i<n.length;i+=2){if(o=parseInt(n.substr(i,2),16),isNaN(o))throw new Error("String of HEX type contains invalid characters");for(u=(f=(i>>>1)+w)>>>2;s.length<=u;)s.push(0);s[u]|=o<<8*(a+e*(f%4))}return{value:s,binLen:4*n.length+t}}(n,r,t,u)};case"TEXT":return function(n,r,t){return function(n,r,t,e,i){var o,u,f,s,w,a,h,c,v=0,A=t||[0],E=(e=e||0)>>>3;if("UTF8"===r)for(h=-1===i?3:0,f=0;f<n.length;f+=1)for(u=[],128>(o=n.charCodeAt(f))?u.push(o):2048>o?(u.push(192|o>>>6),u.push(128|63&o)):55296>o||57344<=o?u.push(224|o>>>12,128|o>>>6&63,128|63&o):(f+=1,o=65536+((1023&o)<<10|1023&n.charCodeAt(f)),u.push(240|o>>>18,128|o>>>12&63,128|o>>>6&63,128|63&o)),s=0;s<u.length;s+=1){for(w=(a=v+E)>>>2;A.length<=w;)A.push(0);A[w]|=u[s]<<8*(h+i*(a%4)),v+=1}else for(h=-1===i?2:0,c="UTF16LE"===r&&1!==i||"UTF16LE"!==r&&1===i,f=0;f<n.length;f+=1){for(o=n.charCodeAt(f),!0===c&&(o=(s=255&o)<<8|o>>>8),w=(a=v+E)>>>2;A.length<=w;)A.push(0);A[w]|=o<<8*(h+i*(a%4)),v+=2}return{value:A,binLen:8*v+e}}(n,o,r,t,u)};case"B64":return function(r,t,e){return function(r,t,e,i){var o,u,f,s,w,a,h=0,c=t||[0],v=(e=e||0)>>>3,A=-1===i?3:0,E=r.indexOf("=");if(-1===r.search(/^[a-zA-Z0-9=+/]+$/))throw new Error("Invalid character in base-64 string");if(r=r.replace(/=/g,""),-1!==E&&E<r.length)throw new Error("Invalid '=' found in base-64 string");for(o=0;o<r.length;o+=4){for(s=r.substr(o,4),f=0,u=0;u<s.length;u+=1)f|=n.indexOf(s.charAt(u))<<18-6*u;for(u=0;u<s.length-1;u+=1){for(w=(a=h+v)>>>2;c.length<=w;)c.push(0);c[w]|=(f>>>16-8*u&255)<<8*(A+i*(a%4)),h+=1}}return{value:c,binLen:8*h+e}}(r,t,e,u)};case"BYTES":return function(n,r,t){return function(n,r,t,e){var i,o,u,f,s=r||[0],w=(t=t||0)>>>3,a=-1===e?3:0;for(o=0;o<n.length;o+=1)i=n.charCodeAt(o),u=(f=o+w)>>>2,s.length<=u&&s.push(0),s[u]|=i<<8*(a+e*(f%4));return{value:s,binLen:8*n.length+t}}(n,r,t,u)};case"ARRAYBUFFER":try{new ArrayBuffer(0)}catch(n){throw new Error(r)}return function(n,r,t){return function(n,r,t,i){return e(new Uint8Array(n),r,t,i)}(n,r,t,u)};case"UINT8ARRAY":try{new Uint8Array(0)}catch(n){throw new Error(t)}return function(n,r,t){return e(n,r,t,u)};default:throw new Error("format must be HEX, TEXT, B64, BYTES, ARRAYBUFFER, or UINT8ARRAY")}}function o(e,i,o,u){switch(e){case"HEX":return function(n){return function(n,r,t,e){var i,o,u="0123456789abcdef",f="",s=r/8,w=-1===t?3:0;for(i=0;i<s;i+=1)o=n[i>>>2]>>>8*(w+t*(i%4)),f+=u.charAt(o>>>4&15)+u.charAt(15&o);return e.outputUpper?f.toUpperCase():f}(n,i,o,u)};case"B64":return function(r){return function(r,t,e,i){var o,u,f,s,w,a="",h=t/8,c=-1===e?3:0;for(o=0;o<h;o+=3)for(s=o+1<h?r[o+1>>>2]:0,w=o+2<h?r[o+2>>>2]:0,f=(r[o>>>2]>>>8*(c+e*(o%4))&255)<<16|(s>>>8*(c+e*((o+1)%4))&255)<<8|w>>>8*(c+e*((o+2)%4))&255,u=0;u<4;u+=1)a+=8*o+6*u<=t?n.charAt(f>>>6*(3-u)&63):i.b64Pad;return a}(r,i,o,u)};case"BYTES":return function(n){return function(n,r,t){var e,i,o="",u=r/8,f=-1===t?3:0;for(e=0;e<u;e+=1)i=n[e>>>2]>>>8*(f+t*(e%4))&255,o+=String.fromCharCode(i);return o}(n,i,o)};case"ARRAYBUFFER":try{new ArrayBuffer(0)}catch(n){throw new Error(r)}return function(n){return function(n,r,t){var e,i=r/8,o=new ArrayBuffer(i),u=new Uint8Array(o),f=-1===t?3:0;for(e=0;e<i;e+=1)u[e]=n[e>>>2]>>>8*(f+t*(e%4))&255;return o}(n,i,o)};case"UINT8ARRAY":try{new Uint8Array(0)}catch(n){throw new Error(t)}return function(n){return function(n,r,t){var e,i=r/8,o=-1===t?3:0,u=new Uint8Array(i);for(e=0;e<i;e+=1)u[e]=n[e>>>2]>>>8*(o+t*(e%4))&255;return u}(n,i,o)};default:throw new Error("format must be HEX, B64, BYTES, ARRAYBUFFER, or UINT8ARRAY")}}var u=4294967296,f=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],s=[3238371032,914150663,812702999,4144912697,4290775857,1750603025,1694076839,3204075428],w=[1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],a="Chosen SHA variant is not supported",h="Cannot set numRounds with MAC";function c(n,r){var t,e,i=n.binLen>>>3,o=r.binLen>>>3,u=i<<3,f=4-i<<3;if(i%4!=0){for(t=0;t<o;t+=4)e=i+t>>>2,n.value[e]|=r.value[t>>>2]<<u,n.value.push(0),n.value[e+1]|=r.value[t>>>2]>>>f;return(n.value.length<<2)-4>=o+i&&n.value.pop(),{value:n.value,binLen:n.binLen+r.binLen}}return{value:n.value.concat(r.value),binLen:n.binLen+r.binLen}}function v(n){var r={outputUpper:!1,b64Pad:"=",outputLen:-1},t=n||{},e="Output length must be a multiple of 8";if(r.outputUpper=t.outputUpper||!1,t.b64Pad&&(r.b64Pad=t.b64Pad),t.outputLen){if(t.outputLen%8!=0)throw new Error(e);r.outputLen=t.outputLen}else if(t.shakeLen){if(t.shakeLen%8!=0)throw new Error(e);r.outputLen=t.shakeLen}if("boolean"!=typeof r.outputUpper)throw new Error("Invalid outputUpper formatting option");if("string"!=typeof r.b64Pad)throw new Error("Invalid b64Pad formatting option");return r}function A(n,r,t,e){var o=n+" must include a value and format";if(!r){if(!e)throw new Error(o);return e}if(void 0===r.value||!r.format)throw new Error(o);return i(r.format,r.encoding||"UTF8",t)(r.value)}var E=function(){function n(n,r,t){var e=t||{};if(this.t=r,this.i=e.encoding||"UTF8",this.numRounds=e.numRounds||1,isNaN(this.numRounds)||this.numRounds!==parseInt(this.numRounds,10)||1>this.numRounds)throw new Error("numRounds must a integer >= 1");this.o=n,this.u=[],this.h=0,this.v=!1,this.A=0,this.l=!1,this.S=[],this.H=[]}return n.prototype.update=function(n){var r,t=0,e=this.p>>>5,i=this.m(n,this.u,this.h),o=i.binLen,u=i.value,f=o>>>5;for(r=0;r<f;r+=e)t+this.p<=o&&(this.U=this.R(u.slice(r,r+e),this.U),t+=this.p);return this.A+=t,this.u=u.slice(t>>>5),this.h=o%this.p,this.v=!0,this},n.prototype.getHash=function(n,r){var t,e,i=this.T,u=v(r);if(this.C){if(-1===u.outputLen)throw new Error("Output length must be specified in options");i=u.outputLen}var f=o(n,i,this.F,u);if(this.l&&this.K)return f(this.K(u));for(e=this.g(this.u.slice(),this.h,this.A,this.L(this.U),i),t=1;t<this.numRounds;t+=1)this.C&&i%32!=0&&(e[e.length-1]&=16777215>>>24-i%32),e=this.g(e,i,0,this.B(this.o),i);return f(e)},n.prototype.setHMACKey=function(n,r,t){if(!this.k)throw new Error("Variant does not support HMAC");if(this.v)throw new Error("Cannot set MAC key after calling update");var e=i(r,(t||{}).encoding||"UTF8",this.F);this.Y(e(n))},n.prototype.Y=function(n){var r,t=this.p>>>3,e=t/4-1;if(1!==this.numRounds)throw new Error(h);if(this.l)throw new Error("MAC key already set");for(t<n.binLen/8&&(n.value=this.g(n.value,n.binLen,0,this.B(this.o),this.T));n.value.length<=e;)n.value.push(0);for(r=0;r<=e;r+=1)this.S[r]=909522486^n.value[r],this.H[r]=1549556828^n.value[r];this.U=this.R(this.S,this.U),this.A=this.p,this.l=!0},n.prototype.getHMAC=function(n,r){var t=v(r);return o(n,this.T,this.F,t)(this.N())},n.prototype.N=function(){var n;if(!this.l)throw new Error("Cannot call getHMAC without first setting MAC key");var r=this.g(this.u.slice(),this.h,this.A,this.L(this.U),this.T);return n=this.R(this.H,this.B(this.o)),n=this.g(r,this.T,this.p,n,this.T)},n}(),l=function(n,r){return l=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(n[t]=r[t])},l(n,r)};function b(n,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function t(){this.constructor=n}l(n,r),n.prototype=null===r?Object.create(r):(t.prototype=r.prototype,new t)}function S(n,r){return n<<r|n>>>32-r}function H(n,r){return n>>>r|n<<32-r}function d(n,r){return n>>>r}function p(n,r,t){return n^r^t}function y(n,r,t){return n&r^~n&t}function m(n,r,t){return n&r^n&t^r&t}function U(n){return H(n,2)^H(n,13)^H(n,22)}function R(n,r){var t=(65535&n)+(65535&r);return(65535&(n>>>16)+(r>>>16)+(t>>>16))<<16|65535&t}function T(n,r,t,e){var i=(65535&n)+(65535&r)+(65535&t)+(65535&e);return(65535&(n>>>16)+(r>>>16)+(t>>>16)+(e>>>16)+(i>>>16))<<16|65535&i}function C(n,r,t,e,i){var o=(65535&n)+(65535&r)+(65535&t)+(65535&e)+(65535&i);return(65535&(n>>>16)+(r>>>16)+(t>>>16)+(e>>>16)+(i>>>16)+(o>>>16))<<16|65535&o}function F(n){return H(n,7)^H(n,18)^d(n,3)}function K(n){return H(n,6)^H(n,11)^H(n,25)}function g(n){return[1732584193,4023233417,2562383102,271733878,3285377520]}function L(n,r){var t,e,i,o,u,f,s,w=[];for(t=r[0],e=r[1],i=r[2],o=r[3],u=r[4],s=0;s<80;s+=1)w[s]=s<16?n[s]:S(w[s-3]^w[s-8]^w[s-14]^w[s-16],1),f=s<20?C(S(t,5),y(e,i,o),u,1518500249,w[s]):s<40?C(S(t,5),p(e,i,o),u,1859775393,w[s]):s<60?C(S(t,5),m(e,i,o),u,2400959708,w[s]):C(S(t,5),p(e,i,o),u,3395469782,w[s]),u=o,o=i,i=S(e,30),e=t,t=f;return r[0]=R(t,r[0]),r[1]=R(e,r[1]),r[2]=R(i,r[2]),r[3]=R(o,r[3]),r[4]=R(u,r[4]),r}function B(n,r,t,e){for(var i,o=15+(r+65>>>9<<4),f=r+t;n.length<=o;)n.push(0);for(n[r>>>5]|=128<<24-r%32,n[o]=4294967295&f,n[o-1]=f/u|0,i=0;i<n.length;i+=16)e=L(n.slice(i,i+16),e);return e}"function"==typeof SuppressedError&&SuppressedError;var k=function(n){function r(r,t,e){var o=this;if("SHA-1"!==r)throw new Error(a);var u=e||{};return(o=n.call(this,r,t,e)||this).k=!0,o.K=o.N,o.F=-1,o.m=i(o.t,o.i,o.F),o.R=L,o.L=function(n){return n.slice()},o.B=g,o.g=B,o.U=[1732584193,4023233417,2562383102,271733878,3285377520],o.p=512,o.T=160,o.C=!1,u.hmacKey&&o.Y(A("hmacKey",u.hmacKey,o.F)),o}return b(r,n),r}(E);function Y(n){return"SHA-224"==n?s.slice():w.slice()}function N(n,r){var t,e,i,o,u,s,w,a,h,c,v,A,E=[];for(t=r[0],e=r[1],i=r[2],o=r[3],u=r[4],s=r[5],w=r[6],a=r[7],v=0;v<64;v+=1)E[v]=v<16?n[v]:T(H(A=E[v-2],17)^H(A,19)^d(A,10),E[v-7],F(E[v-15]),E[v-16]),h=C(a,K(u),y(u,s,w),f[v],E[v]),c=R(U(t),m(t,e,i)),a=w,w=s,s=u,u=R(o,h),o=i,i=e,e=t,t=R(h,c);return r[0]=R(t,r[0]),r[1]=R(e,r[1]),r[2]=R(i,r[2]),r[3]=R(o,r[3]),r[4]=R(u,r[4]),r[5]=R(s,r[5]),r[6]=R(w,r[6]),r[7]=R(a,r[7]),r}var I=function(n){function r(r,t,e){var o=this;if("SHA-224"!==r&&"SHA-256"!==r)throw new Error(a);var f=e||{};return(o=n.call(this,r,t,e)||this).K=o.N,o.k=!0,o.F=-1,o.m=i(o.t,o.i,o.F),o.R=N,o.L=function(n){return n.slice()},o.B=Y,o.g=function(n,t,e,i){return function(n,r,t,e,i){for(var o,f=15+(r+65>>>9<<4),s=r+t;n.length<=f;)n.push(0);for(n[r>>>5]|=128<<24-r%32,n[f]=4294967295&s,n[f-1]=s/u|0,o=0;o<n.length;o+=16)e=N(n.slice(o,o+16),e);return"SHA-224"===i?[e[0],e[1],e[2],e[3],e[4],e[5],e[6]]:e}(n,t,e,i,r)},o.U=Y(r),o.p=512,o.T="SHA-224"===r?224:256,o.C=!1,f.hmacKey&&o.Y(A("hmacKey",f.hmacKey,o.F)),o}return b(r,n),r}(E),M=function(n,r){this.I=n,this.M=r};function X(n,r){var t;return r>32?(t=64-r,new M(n.M<<r|n.I>>>t,n.I<<r|n.M>>>t)):0!==r?(t=32-r,new M(n.I<<r|n.M>>>t,n.M<<r|n.I>>>t)):n}function z(n,r){var t;return r<32?(t=32-r,new M(n.I>>>r|n.M<<t,n.M>>>r|n.I<<t)):(t=64-r,new M(n.M>>>r|n.I<<t,n.I>>>r|n.M<<t))}function O(n,r){return new M(n.I>>>r,n.M>>>r|n.I<<32-r)}function j(n,r,t){return new M(n.I&r.I^~n.I&t.I,n.M&r.M^~n.M&t.M)}function _(n,r,t){return new M(n.I&r.I^n.I&t.I^r.I&t.I,n.M&r.M^n.M&t.M^r.M&t.M)}function x(n){var r=z(n,28),t=z(n,34),e=z(n,39);return new M(r.I^t.I^e.I,r.M^t.M^e.M)}function P(n,r){var t,e;t=(65535&n.M)+(65535&r.M);var i=(65535&(e=(n.M>>>16)+(r.M>>>16)+(t>>>16)))<<16|65535&t;return t=(65535&n.I)+(65535&r.I)+(e>>>16),e=(n.I>>>16)+(r.I>>>16)+(t>>>16),new M((65535&e)<<16|65535&t,i)}function V(n,r,t,e){var i,o;i=(65535&n.M)+(65535&r.M)+(65535&t.M)+(65535&e.M);var u=(65535&(o=(n.M>>>16)+(r.M>>>16)+(t.M>>>16)+(e.M>>>16)+(i>>>16)))<<16|65535&i;return i=(65535&n.I)+(65535&r.I)+(65535&t.I)+(65535&e.I)+(o>>>16),o=(n.I>>>16)+(r.I>>>16)+(t.I>>>16)+(e.I>>>16)+(i>>>16),new M((65535&o)<<16|65535&i,u)}function Z(n,r,t,e,i){var o,u;o=(65535&n.M)+(65535&r.M)+(65535&t.M)+(65535&e.M)+(65535&i.M);var f=(65535&(u=(n.M>>>16)+(r.M>>>16)+(t.M>>>16)+(e.M>>>16)+(i.M>>>16)+(o>>>16)))<<16|65535&o;return o=(65535&n.I)+(65535&r.I)+(65535&t.I)+(65535&e.I)+(65535&i.I)+(u>>>16),u=(n.I>>>16)+(r.I>>>16)+(t.I>>>16)+(e.I>>>16)+(i.I>>>16)+(o>>>16),new M((65535&u)<<16|65535&o,f)}function q(n,r){return new M(n.I^r.I,n.M^r.M)}function D(n){var r=z(n,1),t=z(n,8),e=O(n,7);return new M(r.I^t.I^e.I,r.M^t.M^e.M)}function G(n){var r=z(n,14),t=z(n,18),e=z(n,41);return new M(r.I^t.I^e.I,r.M^t.M^e.M)}var J=[new M(f[0],3609767458),new M(f[1],602891725),new M(f[2],3964484399),new M(f[3],2173295548),new M(f[4],4081628472),new M(f[5],3053834265),new M(f[6],2937671579),new M(f[7],3664609560),new M(f[8],2734883394),new M(f[9],1164996542),new M(f[10],1323610764),new M(f[11],3590304994),new M(f[12],4068182383),new M(f[13],991336113),new M(f[14],633803317),new M(f[15],3479774868),new M(f[16],2666613458),new M(f[17],944711139),new M(f[18],2341262773),new M(f[19],2007800933),new M(f[20],1495990901),new M(f[21],1856431235),new M(f[22],3175218132),new M(f[23],2198950837),new M(f[24],3999719339),new M(f[25],766784016),new M(f[26],2566594879),new M(f[27],3203337956),new M(f[28],1034457026),new M(f[29],2466948901),new M(f[30],3758326383),new M(f[31],168717936),new M(f[32],1188179964),new M(f[33],1546045734),new M(f[34],1522805485),new M(f[35],2643833823),new M(f[36],2343527390),new M(f[37],1014477480),new M(f[38],1206759142),new M(f[39],344077627),new M(f[40],1290863460),new M(f[41],3158454273),new M(f[42],3505952657),new M(f[43],106217008),new M(f[44],3606008344),new M(f[45],1432725776),new M(f[46],1467031594),new M(f[47],851169720),new M(f[48],3100823752),new M(f[49],1363258195),new M(f[50],3750685593),new M(f[51],3785050280),new M(f[52],3318307427),new M(f[53],3812723403),new M(f[54],2003034995),new M(f[55],3602036899),new M(f[56],1575990012),new M(f[57],1125592928),new M(f[58],2716904306),new M(f[59],442776044),new M(f[60],593698344),new M(f[61],3733110249),new M(f[62],2999351573),new M(f[63],3815920427),new M(3391569614,3928383900),new M(3515267271,566280711),new M(3940187606,3454069534),new M(4118630271,4000239992),new M(116418474,1914138554),new M(174292421,2731055270),new M(289380356,3203993006),new M(460393269,320620315),new M(685471733,587496836),new M(852142971,1086792851),new M(1017036298,365543100),new M(1126000580,2618297676),new M(1288033470,3409855158),new M(1501505948,4234509866),new M(1607167915,987167468),new M(1816402316,1246189591)];function Q(n){return"SHA-384"===n?[new M(3418070365,s[0]),new M(1654270250,s[1]),new M(2438529370,s[2]),new M(355462360,s[3]),new M(1731405415,s[4]),new M(41048885895,s[5]),new M(3675008525,s[6]),new M(1203062813,s[7])]:[new M(w[0],4089235720),new M(w[1],2227873595),new M(w[2],4271175723),new M(w[3],1595750129),new M(w[4],2917565137),new M(w[5],725511199),new M(w[6],4215389547),new M(w[7],327033209)]}function W(n,r){var t,e,i,o,u,f,s,w,a,h,c,v,A,E,l,b,S=[];for(t=r[0],e=r[1],i=r[2],o=r[3],u=r[4],f=r[5],s=r[6],w=r[7],c=0;c<80;c+=1)c<16?(v=2*c,S[c]=new M(n[v],n[v+1])):S[c]=V((A=S[c-2],E=void 0,l=void 0,b=void 0,E=z(A,19),l=z(A,61),b=O(A,6),new M(E.I^l.I^b.I,E.M^l.M^b.M)),S[c-7],D(S[c-15]),S[c-16]),a=Z(w,G(u),j(u,f,s),J[c],S[c]),h=P(x(t),_(t,e,i)),w=s,s=f,f=u,u=P(o,a),o=i,i=e,e=t,t=P(a,h);return r[0]=P(t,r[0]),r[1]=P(e,r[1]),r[2]=P(i,r[2]),r[3]=P(o,r[3]),r[4]=P(u,r[4]),r[5]=P(f,r[5]),r[6]=P(s,r[6]),r[7]=P(w,r[7]),r}var $=function(n){function r(r,t,e){var o=this;if("SHA-384"!==r&&"SHA-512"!==r)throw new Error(a);var f=e||{};return(o=n.call(this,r,t,e)||this).K=o.N,o.k=!0,o.F=-1,o.m=i(o.t,o.i,o.F),o.R=W,o.L=function(n){return n.slice()},o.B=Q,o.g=function(n,t,e,i){return function(n,r,t,e,i){for(var o,f=31+(r+129>>>10<<5),s=r+t;n.length<=f;)n.push(0);for(n[r>>>5]|=128<<24-r%32,n[f]=4294967295&s,n[f-1]=s/u|0,o=0;o<n.length;o+=32)e=W(n.slice(o,o+32),e);return"SHA-384"===i?[e[0].I,e[0].M,e[1].I,e[1].M,e[2].I,e[2].M,e[3].I,e[3].M,e[4].I,e[4].M,e[5].I,e[5].M]:[e[0].I,e[0].M,e[1].I,e[1].M,e[2].I,e[2].M,e[3].I,e[3].M,e[4].I,e[4].M,e[5].I,e[5].M,e[6].I,e[6].M,e[7].I,e[7].M]}(n,t,e,i,r)},o.U=Q(r),o.p=1024,o.T="SHA-384"===r?384:512,o.C=!1,f.hmacKey&&o.Y(A("hmacKey",f.hmacKey,o.F)),o}return b(r,n),r}(E),nn=[new M(0,1),new M(0,32898),new M(2147483648,32906),new M(2147483648,2147516416),new M(0,32907),new M(0,2147483649),new M(2147483648,2147516545),new M(2147483648,32777),new M(0,138),new M(0,136),new M(0,2147516425),new M(0,2147483658),new M(0,2147516555),new M(2147483648,139),new M(2147483648,32905),new M(2147483648,32771),new M(2147483648,32770),new M(2147483648,128),new M(0,32778),new M(2147483648,2147483658),new M(2147483648,2147516545),new M(2147483648,32896),new M(0,2147483649),new M(2147483648,2147516424)],rn=[[0,36,3,41,18],[1,44,10,45,2],[62,6,43,15,61],[28,55,25,21,56],[27,20,39,8,14]];function tn(n){var r,t=[];for(r=0;r<5;r+=1)t[r]=[new M(0,0),new M(0,0),new M(0,0),new M(0,0),new M(0,0)];return t}function en(n){var r,t=[];for(r=0;r<5;r+=1)t[r]=n[r].slice();return t}function on(n,r){var t,e,i,o,u,f,s,w,a,h=[],c=[];if(null!==n)for(e=0;e<n.length;e+=2)r[(e>>>1)%5][(e>>>1)/5|0]=q(r[(e>>>1)%5][(e>>>1)/5|0],new M(n[e+1],n[e]));for(t=0;t<24;t+=1){for(o=tn(),e=0;e<5;e+=1)h[e]=(u=r[e][0],f=r[e][1],s=r[e][2],w=r[e][3],a=r[e][4],new M(u.I^f.I^s.I^w.I^a.I,u.M^f.M^s.M^w.M^a.M));for(e=0;e<5;e+=1)c[e]=q(h[(e+4)%5],X(h[(e+1)%5],1));for(e=0;e<5;e+=1)for(i=0;i<5;i+=1)r[e][i]=q(r[e][i],c[e]);for(e=0;e<5;e+=1)for(i=0;i<5;i+=1)o[i][(2*e+3*i)%5]=X(r[e][i],rn[e][i]);for(e=0;e<5;e+=1)for(i=0;i<5;i+=1)r[e][i]=q(o[e][i],new M(~o[(e+1)%5][i].I&o[(e+2)%5][i].I,~o[(e+1)%5][i].M&o[(e+2)%5][i].M));r[0][0]=q(r[0][0],nn[t])}return r}function un(n){var r,t,e=0,i=[0,0],o=[4294967295&n,n/u&2097151];for(r=6;r>=0;r--)0===(t=o[r>>2]>>>8*r&255)&&0===e||(i[e+1>>2]|=t<<8*(e+1),e+=1);return e=0!==e?e:1,i[0]|=e,{value:e+1>4?i:[i[0]],binLen:8+8*e}}function fn(n){return c(un(n.binLen),n)}function sn(n,r){var t,e=un(r),i=r>>>2,o=(i-(e=c(e,n)).value.length%i)%i;for(t=0;t<o;t++)e.value.push(0);return e.value}var wn=function(n){function r(r,t,e){var o=this,u=6,f=0,s=e||{};if(1!==(o=n.call(this,r,t,e)||this).numRounds){if(s.kmacKey||s.hmacKey)throw new Error(h);if("CSHAKE128"===o.o||"CSHAKE256"===o.o)throw new Error("Cannot set numRounds for CSHAKE variants")}switch(o.F=1,o.m=i(o.t,o.i,o.F),o.R=on,o.L=en,o.B=tn,o.U=tn(),o.C=!1,r){case"SHA3-224":o.p=f=1152,o.T=224,o.k=!0,o.K=o.N;break;case"SHA3-256":o.p=f=1088,o.T=256,o.k=!0,o.K=o.N;break;case"SHA3-384":o.p=f=832,o.T=384,o.k=!0,o.K=o.N;break;case"SHA3-512":o.p=f=576,o.T=512,o.k=!0,o.K=o.N;break;case"SHAKE128":u=31,o.p=f=1344,o.T=-1,o.C=!0,o.k=!1,o.K=null;break;case"SHAKE256":u=31,o.p=f=1088,o.T=-1,o.C=!0,o.k=!1,o.K=null;break;case"KMAC128":u=4,o.p=f=1344,o.X(e),o.T=-1,o.C=!0,o.k=!1,o.K=o.O;break;case"KMAC256":u=4,o.p=f=1088,o.X(e),o.T=-1,o.C=!0,o.k=!1,o.K=o.O;break;case"CSHAKE128":o.p=f=1344,u=o.j(e),o.T=-1,o.C=!0,o.k=!1,o.K=null;break;case"CSHAKE256":o.p=f=1088,u=o.j(e),o.T=-1,o.C=!0,o.k=!1,o.K=null;break;default:throw new Error(a)}return o.g=function(n,r,t,e,i){return function(n,r,t,e,i,o,u){var f,s,w=0,a=[],h=i>>>5,c=r>>>5;for(f=0;f<c&&r>=i;f+=h)e=on(n.slice(f,f+h),e),r-=i;for(n=n.slice(f),r%=i;n.length<h;)n.push(0);for(n[(f=r>>>3)>>2]^=o<<f%4*8,n[h-1]^=2147483648,e=on(n,e);32*a.length<u&&(s=e[w%5][w/5|0],a.push(s.M),!(32*a.length>=u));)a.push(s.I),0==64*(w+=1)%i&&(on(null,e),w=0);return a}(n,r,0,e,f,u,i)},s.hmacKey&&o.Y(A("hmacKey",s.hmacKey,o.F)),o}return b(r,n),r.prototype.j=function(n,r){var t=function(n){var r=n||{};return{funcName:A("funcName",r.funcName,1,{value:[],binLen:0}),customization:A("Customization",r.customization,1,{value:[],binLen:0})}}(n||{});r&&(t.funcName=r);var e=c(fn(t.funcName),fn(t.customization));if(0!==t.customization.binLen||0!==t.funcName.binLen){for(var i=sn(e,this.p>>>3),o=0;o<i.length;o+=this.p>>>5)this.U=this.R(i.slice(o,o+(this.p>>>5)),this.U),this.A+=this.p;return 4}return 31},r.prototype.X=function(n){var r=function(n){var r=n||{};return{kmacKey:A("kmacKey",r.kmacKey,1),funcName:{value:[1128353099],binLen:32},customization:A("Customization",r.customization,1,{value:[],binLen:0})}}(n||{});this.j(n,r.funcName);for(var t=sn(fn(r.kmacKey),this.p>>>3),e=0;e<t.length;e+=this.p>>>5)this.U=this.R(t.slice(e,e+(this.p>>>5)),this.U),this.A+=this.p;this.l=!0},r.prototype.O=function(n){var r=c({value:this.u.slice(),binLen:this.h},function(n){var r,t,e=0,i=[0,0],o=[4294967295&n,n/u&2097151];for(r=6;r>=0;r--)0==(t=o[r>>2]>>>8*r&255)&&0===e||(i[e>>2]|=t<<8*e,e+=1);return i[(e=0!==e?e:1)>>2]|=e<<8*e,{value:e+1>4?i:[i[0]],binLen:8+8*e}}(n.outputLen));return this.g(r.value,r.binLen,this.A,this.L(this.U),n.outputLen)},r}(E);return function(){function n(n,r,t){if("SHA-1"==n)this._=new k(n,r,t);else if("SHA-224"==n||"SHA-256"==n)this._=new I(n,r,t);else if("SHA-384"==n||"SHA-512"==n)this._=new $(n,r,t);else{if("SHA3-224"!=n&&"SHA3-256"!=n&&"SHA3-384"!=n&&"SHA3-512"!=n&&"SHAKE128"!=n&&"SHAKE256"!=n&&"CSHAKE128"!=n&&"CSHAKE256"!=n&&"KMAC128"!=n&&"KMAC256"!=n)throw new Error(a);this._=new wn(n,r,t)}}return n.prototype.update=function(n){return this._.update(n),this},n.prototype.getHash=function(n,r){return this._.getHash(n,r)},n.prototype.setHMACKey=function(n,r,t){this._.setHMACKey(n,r,t)},n.prototype.getHMAC=function(n,r){return this._.getHMAC(n,r)},n}()}));
//# sourceMappingURL=sha.js.map


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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
var exports = __webpack_exports__;
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*
 This file is auto-generated, do not edit
*/



exports.ApiClient = __webpack_require__(/*! ./api-client */ "./src/api-client.js").ApiClient;
exports.ApiError = __webpack_require__(/*! ./errors/api-error */ "./src/errors/api-error.js").ApiError;
exports.ResponseError = __webpack_require__(/*! ./errors/response-error */ "./src/errors/response-error.js").ResponseError;
exports.TimeoutError = __webpack_require__(/*! ./errors/timeout-error */ "./src/errors/timeout-error.js").TimeoutError;
exports.MergeUsers = __webpack_require__(/*! ./requests/merge-users */ "./src/requests/merge-users.js").MergeUsers;
exports.AddDetailView = __webpack_require__(/*! ./requests/add-detail-view */ "./src/requests/add-detail-view.js").AddDetailView;
exports.AddPurchase = __webpack_require__(/*! ./requests/add-purchase */ "./src/requests/add-purchase.js").AddPurchase;
exports.AddRating = __webpack_require__(/*! ./requests/add-rating */ "./src/requests/add-rating.js").AddRating;
exports.AddCartAddition = __webpack_require__(/*! ./requests/add-cart-addition */ "./src/requests/add-cart-addition.js").AddCartAddition;
exports.AddBookmark = __webpack_require__(/*! ./requests/add-bookmark */ "./src/requests/add-bookmark.js").AddBookmark;
exports.SetViewPortion = __webpack_require__(/*! ./requests/set-view-portion */ "./src/requests/set-view-portion.js").SetViewPortion;
exports.RecommendItemsToUser = __webpack_require__(/*! ./requests/recommend-items-to-user */ "./src/requests/recommend-items-to-user.js").RecommendItemsToUser;
exports.RecommendItemsToItem = __webpack_require__(/*! ./requests/recommend-items-to-item */ "./src/requests/recommend-items-to-item.js").RecommendItemsToItem;
exports.RecommendItemsToItemSegment = __webpack_require__(/*! ./requests/recommend-items-to-item-segment */ "./src/requests/recommend-items-to-item-segment.js").RecommendItemsToItemSegment;
exports.RecommendNextItems = __webpack_require__(/*! ./requests/recommend-next-items */ "./src/requests/recommend-next-items.js").RecommendNextItems;
exports.RecommendItemSegmentsToUser = __webpack_require__(/*! ./requests/recommend-item-segments-to-user */ "./src/requests/recommend-item-segments-to-user.js").RecommendItemSegmentsToUser;
exports.RecommendItemSegmentsToItem = __webpack_require__(/*! ./requests/recommend-item-segments-to-item */ "./src/requests/recommend-item-segments-to-item.js").RecommendItemSegmentsToItem;
exports.RecommendItemSegmentsToItemSegment = __webpack_require__(/*! ./requests/recommend-item-segments-to-item-segment */ "./src/requests/recommend-item-segments-to-item-segment.js").RecommendItemSegmentsToItemSegment;
exports.SearchItems = __webpack_require__(/*! ./requests/search-items */ "./src/requests/search-items.js").SearchItems;
exports.SearchItemSegments = __webpack_require__(/*! ./requests/search-item-segments */ "./src/requests/search-item-segments.js").SearchItemSegments;
exports.Batch = __webpack_require__(/*! ./requests/batch */ "./src/requests/batch.js").Batch;
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=recombee-api-client.js.map