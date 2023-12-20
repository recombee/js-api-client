(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("recombee", [], factory);
	else if(typeof exports === 'object')
		exports["recombee"] = factory();
	else
		root["recombee"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Base class for all the requests
 */

class Request {

  /**
   * Construct the basis of request
   * @param {string} method - GET/PUT/POST/DELETE
   * @param {string} path - Path to the endpoint
   * @param {number} timeout - Timeout in milliseconds
   * @param {boolean} ensureHttps - If true, always use HTTPS.
   */
  constructor(method, path, timeout, ensureHttps) {
    this.method = method;
    this.path = path;
    this.timeout = timeout;
    this.ensureHttps = ensureHttps;
  }
}

exports.Request = Request;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//http://stackoverflow.com/questions/31089801/extending-error-in-javascript-with-es6-syntax

/**
 * Base class for errors that occur because of errors in requests reported by API or because of a timeout
 */

class ApiError extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, this.constructor);
    } else {
      this.stack = new Error(message).stack;
    }
  }
}

exports.ApiError = ApiError;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const ae = __webpack_require__(1);

/**
 * Error thrown when a request did not succeed (did not return 200 or 201)
 */
class ResponseError extends ae.ApiError {
  /**
   * Create the exception
   * @param {Request} request - Request which caused the exception
   * @param {number} statusCode - The returned status code
   * @param {string} message - Error message from the API
   */
  constructor(request, statusCode, message) {
    super(message);
    this.request = request;
    this.statusCode = statusCode;
  }
}

exports.ResponseError = ResponseError;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const ae = __webpack_require__(1);

/**
 * Error thrown when a request is not processed within the timeout
 */
class TimeoutError extends ae.ApiError {
  /**
   * Create the exception
   * @param {Request} request - Request which caused the exception
   */
  constructor(request) {
    super(`Client did not get response within ${request.timeout} ms`);
    this.request = request;
  }
}

exports.TimeoutError = TimeoutError;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(5);


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 This file is auto-generated, do not edit
*/



exports.ApiClient = __webpack_require__(6).ApiClient;
exports.ApiError = __webpack_require__(1).ApiError;
exports.ResponseError = __webpack_require__(2).ResponseError;
exports.TimeoutError = __webpack_require__(3).TimeoutError;
exports.MergeUsers = __webpack_require__(9).MergeUsers;
exports.AddDetailView = __webpack_require__(10).AddDetailView;
exports.AddPurchase = __webpack_require__(11).AddPurchase;
exports.AddRating = __webpack_require__(12).AddRating;
exports.AddCartAddition = __webpack_require__(13).AddCartAddition;
exports.AddBookmark = __webpack_require__(14).AddBookmark;
exports.SetViewPortion = __webpack_require__(15).SetViewPortion;
exports.RecommendItemsToUser = __webpack_require__(16).RecommendItemsToUser;
exports.RecommendItemsToItem = __webpack_require__(17).RecommendItemsToItem;
exports.RecommendNextItems = __webpack_require__(18).RecommendNextItems;
exports.RecommendItemSegmentsToUser = __webpack_require__(19).RecommendItemSegmentsToUser;
exports.RecommendItemSegmentsToItem = __webpack_require__(20).RecommendItemSegmentsToItem;
exports.RecommendItemSegmentsToItemSegment = __webpack_require__(21).RecommendItemSegmentsToItemSegment;
exports.SearchItems = __webpack_require__(22).SearchItems;
exports.SearchItemSegments = __webpack_require__(23).SearchItemSegments;
exports.Batch = __webpack_require__(24).Batch;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const jsSHA = __webpack_require__(7);
const api_errors = __webpack_require__(8);

/**
  * Client for sending requests to Recombee and getting replies
  */
class ApiClient {

  /**
   * Construct the client
   * @param {string} databaseId - ID of your database
   * @param {string} publicToken - Corresponding public token
   * @param {Object} options - Other custom options
   */
  constructor(databaseId, publicToken, options) {
    this.databaseId = databaseId;
    this.publicToken = publicToken;
    this.options = options || {};
    this.baseUri = this._getBaseUri();
    this.useHttps = 'useHttps' in this.options ? this.options.useHttps : true;
    this.async = 'async' in this.options ? this.options.async : true;
  }

  _getRegionalBaseUri(region) {
    const uri = {
      'ap-se': 'client-rapi-ap-se.recombee.com',
      'ca-east': 'client-rapi-ca-east.recombee.com',
      'eu-west': 'client-rapi-eu-west.recombee.com',
      'us-west': 'client-rapi-us-west.recombee.com'
    }[region.toLowerCase()];

    if (uri === undefined) {
      throw new Error(`Region "${region}" is unknown. You may need to update the version of the SDK.`);
    }

    return uri;
  }

  _getBaseUri() {
    let baseUri = this.options.baseUri;
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
  send(request, callback) {
    var self = this;
    if (callback === undefined && window.Promise) {
      return new Promise(function (resolve, reject) {
        self.send(request, function (err, result) {
          err ? reject(err) : resolve(result);
        });
      });
    }

    var signedUrl = this._signUrl(request.path);
    var url = (this.useHttps || request.ensureHttps ? 'https://' : 'http://') + this.baseUri + signedUrl;

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("POST", url, this.async);
    xmlhttp.setRequestHeader("Accept", "application/json");
    xmlhttp.setRequestHeader("Content-Type", "application/json");

    if (this.async) xmlhttp.timeout = request.timeout;

    xmlhttp.onreadystatechange = function () {
      if (this.readyState == 4) {
        if (this.responseText) {
          if (this.status == 200) {
            if (callback) return callback(null, JSON.parse(this.responseText));
          } else {
            if (callback) return callback(new api_errors.ResponseError(request, this.status, this.responseText));
          }
        }
      }
    };
    xmlhttp.ontimeout = function () {
      if (callback) return callback(new api_errors.TimeoutError(request));
    };

    xmlhttp.send(JSON.stringify(request.bodyParameters()));
  }

  _signUrl(req_part) {
    let url = '/' + this.databaseId + req_part;
    url += (req_part.indexOf("?") == -1 ? "?" : "&") + "frontend_timestamp=" + parseInt(new Date().getTime() / 1000);

    let shaObj = new jsSHA("SHA-1", "TEXT");
    shaObj.setHMACKey(this.publicToken, "TEXT");
    shaObj.update(url);

    url += "&frontend_sign=" + shaObj.getHMAC("HEX");
    return url;
  }
}

exports.ApiClient = ApiClient;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_RESULT__;/*
 A JavaScript implementation of the SHA family of hashes, as
 defined in FIPS PUB 180-4 and FIPS PUB 202, as well as the corresponding
 HMAC implementation as defined in FIPS PUB 198a

 Copyright 2008-2020 Brian Turek, 1998-2009 Paul Johnston & Contributors
 Distributed under the BSD License
 See http://caligatio.github.com/jsSHA/ for more information
*/
(function(aa){function C(d,b,a){var h=0,k=[],m=0,g,l,c,f,n,q,u,r,I=!1,v=[],x=[],t,y=!1,z=!1,w=-1;a=a||{};g=a.encoding||"UTF8";t=a.numRounds||1;if(t!==parseInt(t,10)||1>t)throw Error("numRounds must a integer >= 1");if("SHA-1"===d)n=512,q=K,u=ba,f=160,r=function(b){return b.slice()};else if(0===d.lastIndexOf("SHA-",0))if(q=function(b,h){return L(b,h,d)},u=function(b,h,k,a){var e,f;if("SHA-224"===d||"SHA-256"===d)e=(h+65>>>9<<4)+15,f=16;else if("SHA-384"===d||"SHA-512"===d)e=(h+129>>>10<<
5)+31,f=32;else throw Error("Unexpected error in SHA-2 implementation");for(;b.length<=e;)b.push(0);b[h>>>5]|=128<<24-h%32;h=h+k;b[e]=h&4294967295;b[e-1]=h/4294967296|0;k=b.length;for(h=0;h<k;h+=f)a=L(b.slice(h,h+f),a,d);if("SHA-224"===d)b=[a[0],a[1],a[2],a[3],a[4],a[5],a[6]];else if("SHA-256"===d)b=a;else if("SHA-384"===d)b=[a[0].a,a[0].b,a[1].a,a[1].b,a[2].a,a[2].b,a[3].a,a[3].b,a[4].a,a[4].b,a[5].a,a[5].b];else if("SHA-512"===d)b=[a[0].a,a[0].b,a[1].a,a[1].b,a[2].a,a[2].b,a[3].a,a[3].b,a[4].a,
a[4].b,a[5].a,a[5].b,a[6].a,a[6].b,a[7].a,a[7].b];else throw Error("Unexpected error in SHA-2 implementation");return b},r=function(b){return b.slice()},"SHA-224"===d)n=512,f=224;else if("SHA-256"===d)n=512,f=256;else if("SHA-384"===d)n=1024,f=384;else if("SHA-512"===d)n=1024,f=512;else throw Error("Chosen SHA variant is not supported");else if(0===d.lastIndexOf("SHA3-",0)||0===d.lastIndexOf("SHAKE",0)){var F=6;q=D;r=function(b){var d=[],a;for(a=0;5>a;a+=1)d[a]=b[a].slice();return d};w=1;if("SHA3-224"===
d)n=1152,f=224;else if("SHA3-256"===d)n=1088,f=256;else if("SHA3-384"===d)n=832,f=384;else if("SHA3-512"===d)n=576,f=512;else if("SHAKE128"===d)n=1344,f=-1,F=31,z=!0;else if("SHAKE256"===d)n=1088,f=-1,F=31,z=!0;else throw Error("Chosen SHA variant is not supported");u=function(b,d,a,h,k){a=n;var e=F,f,g=[],m=a>>>5,l=0,c=d>>>5;for(f=0;f<c&&d>=a;f+=m)h=D(b.slice(f,f+m),h),d-=a;b=b.slice(f);for(d%=a;b.length<m;)b.push(0);f=d>>>3;b[f>>2]^=e<<f%4*8;b[m-1]^=2147483648;for(h=D(b,h);32*g.length<k;){b=h[l%
5][l/5|0];g.push(b.b);if(32*g.length>=k)break;g.push(b.a);l+=1;0===64*l%a&&(D(null,h),l=0)}return g}}else throw Error("Chosen SHA variant is not supported");c=M(b,g,w);l=A(d);this.setHMACKey=function(b,a,k){var e;if(!0===I)throw Error("HMAC key already set");if(!0===y)throw Error("Cannot set HMAC key after calling update");if(!0===z)throw Error("SHAKE is not supported for HMAC");g=(k||{}).encoding||"UTF8";a=M(a,g,w)(b);b=a.binLen;a=a.value;e=n>>>3;k=e/4-1;for(e<b/8&&(a=u(a,b,0,A(d),f));a.length<=
k;)a.push(0);for(b=0;b<=k;b+=1)v[b]=a[b]^909522486,x[b]=a[b]^1549556828;l=q(v,l);h=n;I=!0};this.update=function(b){var d,a,e,f=0,g=n>>>5;d=c(b,k,m);b=d.binLen;a=d.value;d=b>>>5;for(e=0;e<d;e+=g)f+n<=b&&(l=q(a.slice(e,e+g),l),f+=n);h+=f;k=a.slice(f>>>5);m=b%n;y=!0};this.getHash=function(b,a){var e,g,c,n;if(!0===I)throw Error("Cannot call getHash after setting HMAC key");c=N(a);if(!0===z){if(-1===c.shakeLen)throw Error("shakeLen must be specified in options");f=c.shakeLen}switch(b){case "HEX":e=function(b){return O(b,
f,w,c)};break;case "B64":e=function(b){return P(b,f,w,c)};break;case "BYTES":e=function(b){return Q(b,f,w)};break;case "ARRAYBUFFER":try{g=new ArrayBuffer(0)}catch(p){throw Error("ARRAYBUFFER not supported by this environment");}e=function(b){return R(b,f,w)};break;case "UINT8ARRAY":try{g=new Uint8Array(0)}catch(p){throw Error("UINT8ARRAY not supported by this environment");}e=function(b){return S(b,f,w)};break;default:throw Error("format must be HEX, B64, BYTES, ARRAYBUFFER, or UINT8ARRAY");}n=u(k.slice(),
m,h,r(l),f);for(g=1;g<t;g+=1)!0===z&&0!==f%32&&(n[n.length-1]&=16777215>>>24-f%32),n=u(n,f,0,A(d),f);return e(n)};this.getHMAC=function(b,a){var e,g,c,p;if(!1===I)throw Error("Cannot call getHMAC without first setting HMAC key");c=N(a);switch(b){case "HEX":e=function(b){return O(b,f,w,c)};break;case "B64":e=function(b){return P(b,f,w,c)};break;case "BYTES":e=function(b){return Q(b,f,w)};break;case "ARRAYBUFFER":try{e=new ArrayBuffer(0)}catch(v){throw Error("ARRAYBUFFER not supported by this environment");
}e=function(b){return R(b,f,w)};break;case "UINT8ARRAY":try{e=new Uint8Array(0)}catch(v){throw Error("UINT8ARRAY not supported by this environment");}e=function(b){return S(b,f,w)};break;default:throw Error("outputFormat must be HEX, B64, BYTES, ARRAYBUFFER, or UINT8ARRAY");}g=u(k.slice(),m,h,r(l),f);p=q(x,A(d));p=u(g,f,n,p,f);return e(p)}}function a(d,b){this.a=d;this.b=b}function T(d,b,a,h){var k,m,g,l,c;b=b||[0];a=a||0;m=a>>>3;c=-1===h?3:0;for(k=0;k<d.length;k+=1)l=k+m,g=l>>>2,b.length<=g&&b.push(0),
b[g]|=d[k]<<8*(c+l%4*h);return{value:b,binLen:8*d.length+a}}function O(a,b,e,h){var k="";b/=8;var m,g,c;c=-1===e?3:0;for(m=0;m<b;m+=1)g=a[m>>>2]>>>8*(c+m%4*e),k+="0123456789abcdef".charAt(g>>>4&15)+"0123456789abcdef".charAt(g&15);return h.outputUpper?k.toUpperCase():k}function P(a,b,e,h){var k="",m=b/8,g,c,p,f;f=-1===e?3:0;for(g=0;g<m;g+=3)for(c=g+1<m?a[g+1>>>2]:0,p=g+2<m?a[g+2>>>2]:0,p=(a[g>>>2]>>>8*(f+g%4*e)&255)<<16|(c>>>8*(f+(g+1)%4*e)&255)<<8|p>>>8*(f+(g+2)%4*e)&255,c=0;4>c;c+=1)8*g+6*c<=b?k+=
"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(p>>>6*(3-c)&63):k+=h.b64Pad;return k}function Q(a,b,e){var h="";b/=8;var k,c,g;g=-1===e?3:0;for(k=0;k<b;k+=1)c=a[k>>>2]>>>8*(g+k%4*e)&255,h+=String.fromCharCode(c);return h}function R(a,b,e){b/=8;var h,k=new ArrayBuffer(b),c,g;g=new Uint8Array(k);c=-1===e?3:0;for(h=0;h<b;h+=1)g[h]=a[h>>>2]>>>8*(c+h%4*e)&255;return k}function S(a,b,e){b/=8;var h,k=new Uint8Array(b),c;c=-1===e?3:0;for(h=0;h<b;h+=1)k[h]=a[h>>>2]>>>8*(c+h%4*e)&
255;return k}function N(a){var b={outputUpper:!1,b64Pad:"=",shakeLen:-1};a=a||{};b.outputUpper=a.outputUpper||!1;!0===a.hasOwnProperty("b64Pad")&&(b.b64Pad=a.b64Pad);if(!0===a.hasOwnProperty("shakeLen")){if(0!==a.shakeLen%8)throw Error("shakeLen must be a multiple of 8");b.shakeLen=a.shakeLen}if("boolean"!==typeof b.outputUpper)throw Error("Invalid outputUpper formatting option");if("string"!==typeof b.b64Pad)throw Error("Invalid b64Pad formatting option");return b}function M(a,b,e){switch(b){case "UTF8":case "UTF16BE":case "UTF16LE":break;
default:throw Error("encoding must be UTF8, UTF16BE, or UTF16LE");}switch(a){case "HEX":a=function(b,a,d){var g=b.length,c,p,f,n,q,u;if(0!==g%2)throw Error("String of HEX type must be in byte increments");a=a||[0];d=d||0;q=d>>>3;u=-1===e?3:0;for(c=0;c<g;c+=2){p=parseInt(b.substr(c,2),16);if(isNaN(p))throw Error("String of HEX type contains invalid characters");n=(c>>>1)+q;for(f=n>>>2;a.length<=f;)a.push(0);a[f]|=p<<8*(u+n%4*e)}return{value:a,binLen:4*g+d}};break;case "TEXT":a=function(a,d,c){var g,
l,p=0,f,n,q,u,r,t;d=d||[0];c=c||0;q=c>>>3;if("UTF8"===b)for(t=-1===e?3:0,f=0;f<a.length;f+=1)for(g=a.charCodeAt(f),l=[],128>g?l.push(g):2048>g?(l.push(192|g>>>6),l.push(128|g&63)):55296>g||57344<=g?l.push(224|g>>>12,128|g>>>6&63,128|g&63):(f+=1,g=65536+((g&1023)<<10|a.charCodeAt(f)&1023),l.push(240|g>>>18,128|g>>>12&63,128|g>>>6&63,128|g&63)),n=0;n<l.length;n+=1){r=p+q;for(u=r>>>2;d.length<=u;)d.push(0);d[u]|=l[n]<<8*(t+r%4*e);p+=1}else if("UTF16BE"===b||"UTF16LE"===b)for(t=-1===e?2:0,l="UTF16LE"===
b&&1!==e||"UTF16LE"!==b&&1===e,f=0;f<a.length;f+=1){g=a.charCodeAt(f);!0===l&&(n=g&255,g=n<<8|g>>>8);r=p+q;for(u=r>>>2;d.length<=u;)d.push(0);d[u]|=g<<8*(t+r%4*e);p+=2}return{value:d,binLen:8*p+c}};break;case "B64":a=function(b,a,d){var c=0,l,p,f,n,q,u,r,t;if(-1===b.search(/^[a-zA-Z0-9=+\/]+$/))throw Error("Invalid character in base-64 string");p=b.indexOf("=");b=b.replace(/\=/g,"");if(-1!==p&&p<b.length)throw Error("Invalid '=' found in base-64 string");a=a||[0];d=d||0;u=d>>>3;t=-1===e?3:0;for(p=
0;p<b.length;p+=4){q=b.substr(p,4);for(f=n=0;f<q.length;f+=1)l="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(q.charAt(f)),n|=l<<18-6*f;for(f=0;f<q.length-1;f+=1){r=c+u;for(l=r>>>2;a.length<=l;)a.push(0);a[l]|=(n>>>16-8*f&255)<<8*(t+r%4*e);c+=1}}return{value:a,binLen:8*c+d}};break;case "BYTES":a=function(b,a,d){var c,l,p,f,n,q;a=a||[0];d=d||0;p=d>>>3;q=-1===e?3:0;for(l=0;l<b.length;l+=1)c=b.charCodeAt(l),n=l+p,f=n>>>2,a.length<=f&&a.push(0),a[f]|=c<<8*(q+n%4*e);return{value:a,
binLen:8*b.length+d}};break;case "ARRAYBUFFER":try{a=new ArrayBuffer(0)}catch(h){throw Error("ARRAYBUFFER not supported by this environment");}a=function(b,a,d){return T(new Uint8Array(b),a,d,e)};break;case "UINT8ARRAY":try{a=new Uint8Array(0)}catch(h){throw Error("UINT8ARRAY not supported by this environment");}a=function(b,a,d){return T(b,a,d,e)};break;default:throw Error("format must be HEX, TEXT, B64, BYTES, ARRAYBUFFER, or UINT8ARRAY");}return a}function y(a,b){return a<<b|a>>>32-b}function U(d,
b){return 32<b?(b-=32,new a(d.b<<b|d.a>>>32-b,d.a<<b|d.b>>>32-b)):0!==b?new a(d.a<<b|d.b>>>32-b,d.b<<b|d.a>>>32-b):d}function x(a,b){return a>>>b|a<<32-b}function t(d,b){var e=null,e=new a(d.a,d.b);return e=32>=b?new a(e.a>>>b|e.b<<32-b&4294967295,e.b>>>b|e.a<<32-b&4294967295):new a(e.b>>>b-32|e.a<<64-b&4294967295,e.a>>>b-32|e.b<<64-b&4294967295)}function V(d,b){var e=null;return e=32>=b?new a(d.a>>>b,d.b>>>b|d.a<<32-b&4294967295):new a(0,d.a>>>b-32)}function ca(a,b,e){return a&b^~a&e}function da(d,
b,e){return new a(d.a&b.a^~d.a&e.a,d.b&b.b^~d.b&e.b)}function W(a,b,e){return a&b^a&e^b&e}function ea(d,b,e){return new a(d.a&b.a^d.a&e.a^b.a&e.a,d.b&b.b^d.b&e.b^b.b&e.b)}function fa(a){return x(a,2)^x(a,13)^x(a,22)}function ga(d){var b=t(d,28),e=t(d,34);d=t(d,39);return new a(b.a^e.a^d.a,b.b^e.b^d.b)}function ha(a){return x(a,6)^x(a,11)^x(a,25)}function ia(d){var b=t(d,14),e=t(d,18);d=t(d,41);return new a(b.a^e.a^d.a,b.b^e.b^d.b)}function ja(a){return x(a,7)^x(a,18)^a>>>3}function ka(d){var b=t(d,
1),e=t(d,8);d=V(d,7);return new a(b.a^e.a^d.a,b.b^e.b^d.b)}function la(a){return x(a,17)^x(a,19)^a>>>10}function ma(d){var b=t(d,19),e=t(d,61);d=V(d,6);return new a(b.a^e.a^d.a,b.b^e.b^d.b)}function G(a,b){var e=(a&65535)+(b&65535);return((a>>>16)+(b>>>16)+(e>>>16)&65535)<<16|e&65535}function na(a,b,e,h){var c=(a&65535)+(b&65535)+(e&65535)+(h&65535);return((a>>>16)+(b>>>16)+(e>>>16)+(h>>>16)+(c>>>16)&65535)<<16|c&65535}function H(a,b,e,h,c){var m=(a&65535)+(b&65535)+(e&65535)+(h&65535)+(c&65535);
return((a>>>16)+(b>>>16)+(e>>>16)+(h>>>16)+(c>>>16)+(m>>>16)&65535)<<16|m&65535}function oa(d,b){var e,h,c;e=(d.b&65535)+(b.b&65535);h=(d.b>>>16)+(b.b>>>16)+(e>>>16);c=(h&65535)<<16|e&65535;e=(d.a&65535)+(b.a&65535)+(h>>>16);h=(d.a>>>16)+(b.a>>>16)+(e>>>16);return new a((h&65535)<<16|e&65535,c)}function pa(d,b,e,h){var c,m,g;c=(d.b&65535)+(b.b&65535)+(e.b&65535)+(h.b&65535);m=(d.b>>>16)+(b.b>>>16)+(e.b>>>16)+(h.b>>>16)+(c>>>16);g=(m&65535)<<16|c&65535;c=(d.a&65535)+(b.a&65535)+(e.a&65535)+(h.a&65535)+
(m>>>16);m=(d.a>>>16)+(b.a>>>16)+(e.a>>>16)+(h.a>>>16)+(c>>>16);return new a((m&65535)<<16|c&65535,g)}function qa(d,b,e,h,c){var m,g,l;m=(d.b&65535)+(b.b&65535)+(e.b&65535)+(h.b&65535)+(c.b&65535);g=(d.b>>>16)+(b.b>>>16)+(e.b>>>16)+(h.b>>>16)+(c.b>>>16)+(m>>>16);l=(g&65535)<<16|m&65535;m=(d.a&65535)+(b.a&65535)+(e.a&65535)+(h.a&65535)+(c.a&65535)+(g>>>16);g=(d.a>>>16)+(b.a>>>16)+(e.a>>>16)+(h.a>>>16)+(c.a>>>16)+(m>>>16);return new a((g&65535)<<16|m&65535,l)}function B(d,b){return new a(d.a^b.a,d.b^
b.b)}function A(d){var b=[],e;if("SHA-1"===d)b=[1732584193,4023233417,2562383102,271733878,3285377520];else if(0===d.lastIndexOf("SHA-",0))switch(b=[3238371032,914150663,812702999,4144912697,4290775857,1750603025,1694076839,3204075428],e=[1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],d){case "SHA-224":break;case "SHA-256":b=e;break;case "SHA-384":b=[new a(3418070365,b[0]),new a(1654270250,b[1]),new a(2438529370,b[2]),new a(355462360,b[3]),new a(1731405415,
b[4]),new a(41048885895,b[5]),new a(3675008525,b[6]),new a(1203062813,b[7])];break;case "SHA-512":b=[new a(e[0],4089235720),new a(e[1],2227873595),new a(e[2],4271175723),new a(e[3],1595750129),new a(e[4],2917565137),new a(e[5],725511199),new a(e[6],4215389547),new a(e[7],327033209)];break;default:throw Error("Unknown SHA variant");}else if(0===d.lastIndexOf("SHA3-",0)||0===d.lastIndexOf("SHAKE",0))for(d=0;5>d;d+=1)b[d]=[new a(0,0),new a(0,0),new a(0,0),new a(0,0),new a(0,0)];else throw Error("No SHA variants supported");
return b}function K(a,b){var e=[],h,c,m,g,l,p,f;h=b[0];c=b[1];m=b[2];g=b[3];l=b[4];for(f=0;80>f;f+=1)e[f]=16>f?a[f]:y(e[f-3]^e[f-8]^e[f-14]^e[f-16],1),p=20>f?H(y(h,5),c&m^~c&g,l,1518500249,e[f]):40>f?H(y(h,5),c^m^g,l,1859775393,e[f]):60>f?H(y(h,5),W(c,m,g),l,2400959708,e[f]):H(y(h,5),c^m^g,l,3395469782,e[f]),l=g,g=m,m=y(c,30),c=h,h=p;b[0]=G(h,b[0]);b[1]=G(c,b[1]);b[2]=G(m,b[2]);b[3]=G(g,b[3]);b[4]=G(l,b[4]);return b}function ba(a,b,e,c){var k;for(k=(b+65>>>9<<4)+15;a.length<=k;)a.push(0);a[b>>>5]|=
128<<24-b%32;b+=e;a[k]=b&4294967295;a[k-1]=b/4294967296|0;b=a.length;for(k=0;k<b;k+=16)c=K(a.slice(k,k+16),c);return c}function L(d,b,e){var h,k,m,g,l,p,f,n,q,u,r,t,v,x,y,A,z,w,F,B,C,D,E=[],J;if("SHA-224"===e||"SHA-256"===e)u=64,t=1,D=Number,v=G,x=na,y=H,A=ja,z=la,w=fa,F=ha,C=W,B=ca,J=c;else if("SHA-384"===e||"SHA-512"===e)u=80,t=2,D=a,v=oa,x=pa,y=qa,A=ka,z=ma,w=ga,F=ia,C=ea,B=da,J=X;else throw Error("Unexpected error in SHA-2 implementation");e=b[0];h=b[1];k=b[2];m=b[3];g=b[4];l=b[5];p=b[6];f=b[7];
for(r=0;r<u;r+=1)16>r?(q=r*t,n=d.length<=q?0:d[q],q=d.length<=q+1?0:d[q+1],E[r]=new D(n,q)):E[r]=x(z(E[r-2]),E[r-7],A(E[r-15]),E[r-16]),n=y(f,F(g),B(g,l,p),J[r],E[r]),q=v(w(e),C(e,h,k)),f=p,p=l,l=g,g=v(m,n),m=k,k=h,h=e,e=v(n,q);b[0]=v(e,b[0]);b[1]=v(h,b[1]);b[2]=v(k,b[2]);b[3]=v(m,b[3]);b[4]=v(g,b[4]);b[5]=v(l,b[5]);b[6]=v(p,b[6]);b[7]=v(f,b[7]);return b}function D(d,b){var e,c,k,m,g=[],l=[];if(null!==d)for(c=0;c<d.length;c+=2)b[(c>>>1)%5][(c>>>1)/5|0]=B(b[(c>>>1)%5][(c>>>1)/5|0],new a(d[c+1],d[c]));
for(e=0;24>e;e+=1){m=A("SHA3-");for(c=0;5>c;c+=1){k=b[c][0];var p=b[c][1],f=b[c][2],n=b[c][3],q=b[c][4];g[c]=new a(k.a^p.a^f.a^n.a^q.a,k.b^p.b^f.b^n.b^q.b)}for(c=0;5>c;c+=1)l[c]=B(g[(c+4)%5],U(g[(c+1)%5],1));for(c=0;5>c;c+=1)for(k=0;5>k;k+=1)b[c][k]=B(b[c][k],l[c]);for(c=0;5>c;c+=1)for(k=0;5>k;k+=1)m[k][(2*c+3*k)%5]=U(b[c][k],Y[c][k]);for(c=0;5>c;c+=1)for(k=0;5>k;k+=1)b[c][k]=B(m[c][k],new a(~m[(c+1)%5][k].a&m[(c+2)%5][k].a,~m[(c+1)%5][k].b&m[(c+2)%5][k].b));b[0][0]=B(b[0][0],Z[e])}return b}var c,
X,Y,Z;c=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,
4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298];X=[new a(c[0],3609767458),new a(c[1],602891725),new a(c[2],3964484399),new a(c[3],2173295548),new a(c[4],4081628472),new a(c[5],3053834265),new a(c[6],2937671579),new a(c[7],3664609560),new a(c[8],2734883394),new a(c[9],1164996542),new a(c[10],1323610764),new a(c[11],3590304994),new a(c[12],4068182383),new a(c[13],
991336113),new a(c[14],633803317),new a(c[15],3479774868),new a(c[16],2666613458),new a(c[17],944711139),new a(c[18],2341262773),new a(c[19],2007800933),new a(c[20],1495990901),new a(c[21],1856431235),new a(c[22],3175218132),new a(c[23],2198950837),new a(c[24],3999719339),new a(c[25],766784016),new a(c[26],2566594879),new a(c[27],3203337956),new a(c[28],1034457026),new a(c[29],2466948901),new a(c[30],3758326383),new a(c[31],168717936),new a(c[32],1188179964),new a(c[33],1546045734),new a(c[34],1522805485),
new a(c[35],2643833823),new a(c[36],2343527390),new a(c[37],1014477480),new a(c[38],1206759142),new a(c[39],344077627),new a(c[40],1290863460),new a(c[41],3158454273),new a(c[42],3505952657),new a(c[43],106217008),new a(c[44],3606008344),new a(c[45],1432725776),new a(c[46],1467031594),new a(c[47],851169720),new a(c[48],3100823752),new a(c[49],1363258195),new a(c[50],3750685593),new a(c[51],3785050280),new a(c[52],3318307427),new a(c[53],3812723403),new a(c[54],2003034995),new a(c[55],3602036899),
new a(c[56],1575990012),new a(c[57],1125592928),new a(c[58],2716904306),new a(c[59],442776044),new a(c[60],593698344),new a(c[61],3733110249),new a(c[62],2999351573),new a(c[63],3815920427),new a(3391569614,3928383900),new a(3515267271,566280711),new a(3940187606,3454069534),new a(4118630271,4000239992),new a(116418474,1914138554),new a(174292421,2731055270),new a(289380356,3203993006),new a(460393269,320620315),new a(685471733,587496836),new a(852142971,1086792851),new a(1017036298,365543100),new a(1126000580,
2618297676),new a(1288033470,3409855158),new a(1501505948,4234509866),new a(1607167915,987167468),new a(1816402316,1246189591)];Z=[new a(0,1),new a(0,32898),new a(2147483648,32906),new a(2147483648,2147516416),new a(0,32907),new a(0,2147483649),new a(2147483648,2147516545),new a(2147483648,32777),new a(0,138),new a(0,136),new a(0,2147516425),new a(0,2147483658),new a(0,2147516555),new a(2147483648,139),new a(2147483648,32905),new a(2147483648,32771),new a(2147483648,32770),new a(2147483648,128),new a(0,
32778),new a(2147483648,2147483658),new a(2147483648,2147516545),new a(2147483648,32896),new a(0,2147483649),new a(2147483648,2147516424)];Y=[[0,36,3,41,18],[1,44,10,45,2],[62,6,43,15,61],[28,55,25,21,56],[27,20,39,8,14]]; true?!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(){return C}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):"undefined"!==typeof exports?("undefined"!==typeof module&&module.exports&&(module.exports=C),exports=C):aa.jsSHA=C})(this);


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.ApiError = __webpack_require__(1).ApiError;
exports.ResponseError = __webpack_require__(2).ResponseError;
exports.TimeoutError = __webpack_require__(3).TimeoutError;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 This file is auto-generated, do not edit
*/



const rqs = __webpack_require__(0);

/**
 * Merges interactions (purchases, ratings, bookmarks, detail views ...) of two different users under a single user ID. This is especially useful for online e-commerce applications working with anonymous users identified by unique tokens such as the session ID. In such applications, it may often happen that a user owns a persistent account, yet accesses the system anonymously while, e.g., putting items into a shopping cart. At some point in time, such as when the user wishes to confirm the purchase, (s)he logs into the system using his/her username and password. The interactions made under anonymous session ID then become connected with the persistent account, and merging these two becomes desirable.
 * Merging happens between two users referred to as the *target* and the *source*. After the merge, all the interactions of the source user are attributed to the target user, and the source user is **deleted**.
 */
class MergeUsers extends rqs.Request {

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
  constructor(targetUserId, sourceUserId, optional) {
    super('PUT', `/users/${encodeURIComponent(targetUserId)}/merge/${encodeURIComponent(sourceUserId)}`, 30000, false);
    this.targetUserId = targetUserId;
    this.sourceUserId = sourceUserId;
    optional = optional || {};
    this.cascadeCreate = optional.cascadeCreate;
  }

  /**
   * Get body parameters
   * @return {Object} The values of body parameters (name of parameter: value of the parameter)
   */
  bodyParameters() {
    let params = {};

    params.cascadeCreate = this.cascadeCreate !== undefined ? this.cascadeCreate : true;
    return params;
  }

}

exports.MergeUsers = MergeUsers;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 This file is auto-generated, do not edit
*/



const rqs = __webpack_require__(0);

/**
 * Adds a detail view of the given item made by the given user.
 */
class AddDetailView extends rqs.Request {

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
  constructor(userId, itemId, optional) {
    super('POST', '/detailviews/', 3000, false);
    this.userId = userId;
    this.itemId = itemId;
    optional = optional || {};
    this.timestamp = optional.timestamp;
    this.duration = optional.duration;
    this.cascadeCreate = optional.cascadeCreate;
    this.recommId = optional.recommId;
    this.additionalData = optional.additionalData;
  }

  /**
   * Get body parameters
   * @return {Object} The values of body parameters (name of parameter: value of the parameter)
   */
  bodyParameters() {
    let params = {};
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

}

exports.AddDetailView = AddDetailView;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 This file is auto-generated, do not edit
*/



const rqs = __webpack_require__(0);

/**
 * Adds a purchase of the given item made by the given user.
 */
class AddPurchase extends rqs.Request {

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
  constructor(userId, itemId, optional) {
    super('POST', '/purchases/', 3000, false);
    this.userId = userId;
    this.itemId = itemId;
    optional = optional || {};
    this.timestamp = optional.timestamp;
    this.cascadeCreate = optional.cascadeCreate;
    this.amount = optional.amount;
    this.price = optional.price;
    this.profit = optional.profit;
    this.recommId = optional.recommId;
    this.additionalData = optional.additionalData;
  }

  /**
   * Get body parameters
   * @return {Object} The values of body parameters (name of parameter: value of the parameter)
   */
  bodyParameters() {
    let params = {};
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

}

exports.AddPurchase = AddPurchase;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 This file is auto-generated, do not edit
*/



const rqs = __webpack_require__(0);

/**
 * Adds a rating of the given item made by the given user.
 */
class AddRating extends rqs.Request {

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
  constructor(userId, itemId, rating, optional) {
    super('POST', '/ratings/', 3000, false);
    this.userId = userId;
    this.itemId = itemId;
    this.rating = rating;
    optional = optional || {};
    this.timestamp = optional.timestamp;
    this.cascadeCreate = optional.cascadeCreate;
    this.recommId = optional.recommId;
    this.additionalData = optional.additionalData;
  }

  /**
   * Get body parameters
   * @return {Object} The values of body parameters (name of parameter: value of the parameter)
   */
  bodyParameters() {
    let params = {};
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

}

exports.AddRating = AddRating;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 This file is auto-generated, do not edit
*/



const rqs = __webpack_require__(0);

/**
 * Adds a cart addition of the given item made by the given user.
 */
class AddCartAddition extends rqs.Request {

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
  constructor(userId, itemId, optional) {
    super('POST', '/cartadditions/', 3000, false);
    this.userId = userId;
    this.itemId = itemId;
    optional = optional || {};
    this.timestamp = optional.timestamp;
    this.cascadeCreate = optional.cascadeCreate;
    this.amount = optional.amount;
    this.price = optional.price;
    this.recommId = optional.recommId;
    this.additionalData = optional.additionalData;
  }

  /**
   * Get body parameters
   * @return {Object} The values of body parameters (name of parameter: value of the parameter)
   */
  bodyParameters() {
    let params = {};
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

}

exports.AddCartAddition = AddCartAddition;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 This file is auto-generated, do not edit
*/



const rqs = __webpack_require__(0);

/**
 * Adds a bookmark of the given item made by the given user.
 */
class AddBookmark extends rqs.Request {

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
  constructor(userId, itemId, optional) {
    super('POST', '/bookmarks/', 3000, false);
    this.userId = userId;
    this.itemId = itemId;
    optional = optional || {};
    this.timestamp = optional.timestamp;
    this.cascadeCreate = optional.cascadeCreate;
    this.recommId = optional.recommId;
    this.additionalData = optional.additionalData;
  }

  /**
   * Get body parameters
   * @return {Object} The values of body parameters (name of parameter: value of the parameter)
   */
  bodyParameters() {
    let params = {};
    params.userId = this.userId;
    params.itemId = this.itemId;

    if (this.timestamp !== undefined) params.timestamp = this.timestamp;

    if (this.cascadeCreate !== undefined) params.cascadeCreate = this.cascadeCreate;

    if (this.recommId !== undefined) params.recommId = this.recommId;

    if (this.additionalData !== undefined) params.additionalData = this.additionalData;

    params.cascadeCreate = this.cascadeCreate !== undefined ? this.cascadeCreate : true;
    return params;
  }

}

exports.AddBookmark = AddBookmark;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 This file is auto-generated, do not edit
*/



const rqs = __webpack_require__(0);

/**
 * Sets viewed portion of an item (for example a video or article) by a user (at a session).
 * If you send a new request with the same (`userId`, `itemId`, `sessionId`), the portion gets updated.
 */
class SetViewPortion extends rqs.Request {

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
  constructor(userId, itemId, portion, optional) {
    super('POST', '/viewportions/', 3000, false);
    this.userId = userId;
    this.itemId = itemId;
    this.portion = portion;
    optional = optional || {};
    this.sessionId = optional.sessionId;
    this.timestamp = optional.timestamp;
    this.cascadeCreate = optional.cascadeCreate;
    this.recommId = optional.recommId;
    this.additionalData = optional.additionalData;
  }

  /**
   * Get body parameters
   * @return {Object} The values of body parameters (name of parameter: value of the parameter)
   */
  bodyParameters() {
    let params = {};
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

}

exports.SetViewPortion = SetViewPortion;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 This file is auto-generated, do not edit
*/



const rqs = __webpack_require__(0);

/**
 * Based on the user's past interactions (purchases, ratings, etc.) with the items, recommends top-N items that are most likely to be of high value for the given user.
 * The most typical use cases are recommendations on the homepage, in some "Picked just for you" section, or in email.
 * The returned items are sorted by relevance (the first item being the most relevant).
 * Besides the recommended items, also a unique `recommId` is returned in the response. It can be used to:
 * - Let Recombee know that this recommendation was successful (e.g., user clicked one of the recommended items). See [Reported metrics](https://docs.recombee.com/admin_ui.html#reported-metrics).
 * - Get subsequent recommended items when the user scrolls down (*infinite scroll*) or goes to the next page. See [Recommend Next Items](https://docs.recombee.com/api.html#recommend-next-items).
 * It is also possible to use POST HTTP method (for example in the case of a very long ReQL filter) - query parameters then become body parameters.
 */
class RecommendItemsToUser extends rqs.Request {

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
   * ```
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
   * ```
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
  constructor(userId, count, optional) {
    super('POST', `/recomms/users/${encodeURIComponent(userId)}/items/`, 9000, false);
    this.userId = userId;
    this.count = count;
    optional = optional || {};
    this.scenario = optional.scenario;
    this.cascadeCreate = optional.cascadeCreate;
    this.returnProperties = optional.returnProperties;
    this.includedProperties = optional.includedProperties;
    this.filter = optional.filter;
    this.booster = optional.booster;
    this.logic = optional.logic;
    this.diversity = optional.diversity;
    this.minRelevance = optional.minRelevance;
    this.rotationRate = optional.rotationRate;
    this.rotationTime = optional.rotationTime;
    this.expertSettings = optional.expertSettings;
    this.returnAbGroup = optional.returnAbGroup;
  }

  /**
   * Get body parameters
   * @return {Object} The values of body parameters (name of parameter: value of the parameter)
   */
  bodyParameters() {
    let params = {};
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

}

exports.RecommendItemsToUser = RecommendItemsToUser;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 This file is auto-generated, do not edit
*/



const rqs = __webpack_require__(0);

/**
 * Recommends a set of items that are somehow related to one given item, *X*. A typical scenario is when the user *A* is viewing *X*. Then you may display items to the user that he might also be interested in. Recommend items to item request gives you Top-N such items, optionally taking the target user *A* into account.
 * The returned items are sorted by relevance (the first item being the most relevant).
 * Besides the recommended items, also a unique `recommId` is returned in the response. It can be used to:
 * - Let Recombee know that this recommendation was successful (e.g., user clicked one of the recommended items). See [Reported metrics](https://docs.recombee.com/admin_ui.html#reported-metrics).
 * - Get subsequent recommended items when the user scrolls down (*infinite scroll*) or goes to the next page. See [Recommend Next Items](https://docs.recombee.com/api.html#recommend-next-items).
 * It is also possible to use POST HTTP method (for example in the case of a very long ReQL filter) - query parameters then become body parameters.
 */
class RecommendItemsToItem extends rqs.Request {

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
   * ```
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
   * ```
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
  constructor(itemId, targetUserId, count, optional) {
    super('POST', `/recomms/items/${encodeURIComponent(itemId)}/items/`, 9000, false);
    this.itemId = itemId;
    this.targetUserId = targetUserId;
    this.count = count;
    optional = optional || {};
    this.scenario = optional.scenario;
    this.cascadeCreate = optional.cascadeCreate;
    this.returnProperties = optional.returnProperties;
    this.includedProperties = optional.includedProperties;
    this.filter = optional.filter;
    this.booster = optional.booster;
    this.logic = optional.logic;
    this.userImpact = optional.userImpact;
    this.diversity = optional.diversity;
    this.minRelevance = optional.minRelevance;
    this.rotationRate = optional.rotationRate;
    this.rotationTime = optional.rotationTime;
    this.expertSettings = optional.expertSettings;
    this.returnAbGroup = optional.returnAbGroup;
  }

  /**
   * Get body parameters
   * @return {Object} The values of body parameters (name of parameter: value of the parameter)
   */
  bodyParameters() {
    let params = {};
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

}

exports.RecommendItemsToItem = RecommendItemsToItem;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 This file is auto-generated, do not edit
*/



const rqs = __webpack_require__(0);

/**
 * Returns items that shall be shown to a user as next recommendations when the user e.g. scrolls the page down (*infinite scroll*) or goes to the next page.
 * It accepts `recommId` of a base recommendation request (e.g., request from the first page) and the number of items that shall be returned (`count`).
 * The base request can be one of:
 *   - [Recommend items to item](https://docs.recombee.com/api.html#recommend-items-to-item)
 *   - [Recommend items to user](https://docs.recombee.com/api.html#recommend-items-to-user)
 *   - [Search items](https://docs.recombee.com/api.html#search-items)
 * All the other parameters are inherited from the base request.
 * *Recommend next items* can be called many times for a single `recommId` and each call returns different (previously not recommended) items.
 * The number of *Recommend next items* calls performed so far is returned in the `numberNextRecommsCalls` field.
 * *Recommend next items* can be requested up to 30 minutes after the base request or a previous *Recommend next items* call.
 * For billing purposes, each call to *Recommend next items* is counted as a separate recommendation request.
 */
class RecommendNextItems extends rqs.Request {

  /**
   * Construct the request
   * @param {string} recommId - ID of the base recommendation request for which next recommendations should be returned
   * @param {number} count - Number of items to be recommended
   */
  constructor(recommId, count) {
    super('POST', `/recomms/next/items/${encodeURIComponent(recommId)}`, 9000, false);
    this.recommId = recommId;
    this.count = count;
  }

  /**
   * Get body parameters
   * @return {Object} The values of body parameters (name of parameter: value of the parameter)
   */
  bodyParameters() {
    let params = {};
    params.count = this.count;

    params.cascadeCreate = this.cascadeCreate !== undefined ? this.cascadeCreate : true;
    return params;
  }

}

exports.RecommendNextItems = RecommendNextItems;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 This file is auto-generated, do not edit
*/



const rqs = __webpack_require__(0);

/**
 * Recommends the top Segments from a Segmentation for a particular user, based on the user's past interactions.
 * Based on the used Segmentation, this endpoint can be used for example for:
 *   - Recommending the top categories for the user
 *   - Recommending the top genres for the user
 *   - Recommending the top brands for the user
 *   - Recommending the top artists for the user
 * You need to set the used Segmentation the Admin UI in the Scenario settings prior to using this endpoint.
 * The returned segments are sorted by relevance (first segment being the most relevant).
 * It is also possible to use POST HTTP method (for example in case of very long ReQL filter) - query parameters then become body parameters.
 */
class RecommendItemSegmentsToUser extends rqs.Request {

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
  constructor(userId, count, optional) {
    super('POST', `/recomms/users/${encodeURIComponent(userId)}/item-segments/`, 9000, false);
    this.userId = userId;
    this.count = count;
    optional = optional || {};
    this.scenario = optional.scenario;
    this.cascadeCreate = optional.cascadeCreate;
    this.filter = optional.filter;
    this.booster = optional.booster;
    this.logic = optional.logic;
    this.expertSettings = optional.expertSettings;
    this.returnAbGroup = optional.returnAbGroup;
  }

  /**
   * Get body parameters
   * @return {Object} The values of body parameters (name of parameter: value of the parameter)
   */
  bodyParameters() {
    let params = {};
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

}

exports.RecommendItemSegmentsToUser = RecommendItemSegmentsToUser;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 This file is auto-generated, do not edit
*/



const rqs = __webpack_require__(0);

/**
 * Recommends Segments from a Segmentation that are the most relevant to a particular item.
 * Based on the used Segmentation, this endpoint can be used for example for:
 *   - Recommending the related categories
 *   - Recommending the related genres
 *   - Recommending the related brands
 *   - Recommending the related artists
 * You need to set the used Segmentation the Admin UI in the Scenario settings prior to using this endpoint.
 * The returned segments are sorted by relevance (first segment being the most relevant).
 * It is also possible to use POST HTTP method (for example in case of very long ReQL filter) - query parameters then become body parameters.
 */
class RecommendItemSegmentsToItem extends rqs.Request {

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
  constructor(itemId, targetUserId, count, optional) {
    super('POST', `/recomms/items/${encodeURIComponent(itemId)}/item-segments/`, 9000, false);
    this.itemId = itemId;
    this.targetUserId = targetUserId;
    this.count = count;
    optional = optional || {};
    this.scenario = optional.scenario;
    this.cascadeCreate = optional.cascadeCreate;
    this.filter = optional.filter;
    this.booster = optional.booster;
    this.logic = optional.logic;
    this.expertSettings = optional.expertSettings;
    this.returnAbGroup = optional.returnAbGroup;
  }

  /**
   * Get body parameters
   * @return {Object} The values of body parameters (name of parameter: value of the parameter)
   */
  bodyParameters() {
    let params = {};
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

}

exports.RecommendItemSegmentsToItem = RecommendItemSegmentsToItem;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 This file is auto-generated, do not edit
*/



const rqs = __webpack_require__(0);

/**
 * Recommends Segments from a result Segmentation that are the most relevant to a particular Segment from a context Segmentation.
 * Based on the used Segmentations, this endpoint can be used for example for:
 *   - Recommending the related brands to particular brand
 *   - Recommending the related brands to particular category
 *   - Recommending the related artists to a particular genre (assuming songs are the Items)
 * You need to set the used context and result Segmentation the Admin UI in the Scenario settings prior to using this endpoint.
 * The returned segments are sorted by relevance (first segment being the most relevant).
 * It is also possible to use POST HTTP method (for example in case of very long ReQL filter) - query parameters then become body parameters.
 */
class RecommendItemSegmentsToItemSegment extends rqs.Request {

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
  constructor(contextSegmentId, targetUserId, count, optional) {
    super('POST', '/recomms/item-segments/item-segments/', 9000, false);
    this.contextSegmentId = contextSegmentId;
    this.targetUserId = targetUserId;
    this.count = count;
    optional = optional || {};
    this.scenario = optional.scenario;
    this.cascadeCreate = optional.cascadeCreate;
    this.filter = optional.filter;
    this.booster = optional.booster;
    this.logic = optional.logic;
    this.expertSettings = optional.expertSettings;
    this.returnAbGroup = optional.returnAbGroup;
  }

  /**
   * Get body parameters
   * @return {Object} The values of body parameters (name of parameter: value of the parameter)
   */
  bodyParameters() {
    let params = {};
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

}

exports.RecommendItemSegmentsToItemSegment = RecommendItemSegmentsToItemSegment;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 This file is auto-generated, do not edit
*/



const rqs = __webpack_require__(0);

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
class SearchItems extends rqs.Request {

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
   * ```
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
   * ```
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
  constructor(userId, searchQuery, count, optional) {
    super('POST', `/search/users/${encodeURIComponent(userId)}/items/`, 9000, false);
    this.userId = userId;
    this.searchQuery = searchQuery;
    this.count = count;
    optional = optional || {};
    this.scenario = optional.scenario;
    this.cascadeCreate = optional.cascadeCreate;
    this.returnProperties = optional.returnProperties;
    this.includedProperties = optional.includedProperties;
    this.filter = optional.filter;
    this.booster = optional.booster;
    this.logic = optional.logic;
    this.expertSettings = optional.expertSettings;
    this.returnAbGroup = optional.returnAbGroup;
  }

  /**
   * Get body parameters
   * @return {Object} The values of body parameters (name of parameter: value of the parameter)
   */
  bodyParameters() {
    let params = {};
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

}

exports.SearchItems = SearchItems;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 This file is auto-generated, do not edit
*/



const rqs = __webpack_require__(0);

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
class SearchItemSegments extends rqs.Request {

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
  constructor(userId, searchQuery, count, optional) {
    super('POST', `/search/users/${encodeURIComponent(userId)}/item-segments/`, 9000, false);
    this.userId = userId;
    this.searchQuery = searchQuery;
    this.count = count;
    optional = optional || {};
    this.scenario = optional.scenario;
    this.cascadeCreate = optional.cascadeCreate;
    this.filter = optional.filter;
    this.booster = optional.booster;
    this.logic = optional.logic;
    this.expertSettings = optional.expertSettings;
    this.returnAbGroup = optional.returnAbGroup;
  }

  /**
   * Get body parameters
   * @return {Object} The values of body parameters (name of parameter: value of the parameter)
   */
  bodyParameters() {
    let params = {};
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

}

exports.SearchItemSegments = SearchItemSegments;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const rqs = __webpack_require__(0);

var sum_timeouts = requests => {
  return requests.map(r => r.timeout).reduce((a, b) => a + b, 0);
};

/**
 * In many cases, it may be desirable to execute multiple requests at once. For example, when synchronizing the catalog of items in a periodical manner, you would have to execute a sequence of thousands of separate POST requests, which is very ineffective and may take a very long time to complete. Most notably, network latencies can make execution of such sequence very slow and even if executed in multiple parallel threads, there will still be unreasonable overhead caused by the HTTP(s). To avoid the mentioned problems, batch processing may be used, encapsulating a sequence of requests into a single HTTPS request.
 * Batch processing allows you to submit arbitrary sequence of requests and the batch may combine different types of requests arbitrarily as well.
 * Note that the status code of the batch request itself is 200 even if the individual requests result in error – you have to inspect the code values in the resulting array.
  */
class Batch extends rqs.Request {

  /**
   * Construct the request
   * @param {Request[]} requests - Array containing the requests.
   * @param {Object} optional - Optional parameters given as an object with structure name of the parameter: value
   * - Allowed parameters:
   *     - *distinctRecomms*
   *         - Type: boolean
   *         - Description: Makes all the recommended items for a certain user distinct among multiple recommendation requests in the batch.
   */
  constructor(requests, optional) {
    super('POST', '/batch/', sum_timeouts(requests), true);
    this.requests = requests;
    optional = optional || {};
    this.distinctRecomms = optional.distinctRecomms;
  }

  /**
   * Get body parameters
   * @return {Object} The values of body parameters (name of parameter: value of the parameter)
   */
  bodyParameters() {
    let reqs = this.requests.map(r => this._request_to_batch_object(r));
    let result = { requests: reqs };

    if (this.distinctRecomms !== undefined) result.distinctRecomms = this.distinctRecomms;

    return result;
  }

  _request_to_batch_object(req) {
    const bodyParameters = req.bodyParameters();
    return {
      method: req.method,
      path: req.path,
      params: Object.keys(bodyParameters).length ? bodyParameters : undefined
    };
  }

}

exports.Batch = Batch;

/***/ })
/******/ ]);
});
//# sourceMappingURL=recombee-api-client.js.map