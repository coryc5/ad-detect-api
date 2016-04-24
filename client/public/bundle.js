/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _getAdFilters = __webpack_require__(5);

	var _getAdFilters2 = _interopRequireDefault(_getAdFilters);

	var _parseAds = __webpack_require__(8);

	var _parseAds2 = _interopRequireDefault(_parseAds);

	var _getUserInfo = __webpack_require__(9);

	var _getUserInfo2 = _interopRequireDefault(_getUserInfo);

	var _addUserInfo = __webpack_require__(4);

	var _addUserInfo2 = _interopRequireDefault(_addUserInfo);

	var _postAdObj = __webpack_require__(10);

	var _postAdObj2 = _interopRequireDefault(_postAdObj);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var adObj = {
	  images: [],
	  videos: []
	};

	var images = [].slice.call(window.parent.document.getElementsByTagName('img'));
	var videos = [].slice.call(window.parent.document.getElementsByTagName('video'));

	(0, _getAdFilters2.default)().then(_parseAds2.default.bind(null, images, videos, adObj)).then(_getUserInfo2.default).then(_addUserInfo2.default).then(_postAdObj2.default);

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// add geolocation data to ad object
	function addUserInfo(_ref) {
	  var adObj = _ref.adObj;
	  var userInfo = _ref.userInfo;

	  adObj.ip = userInfo.query;
	  adObj.city = userInfo.city;
	  adObj.state = userInfo.regionName;
	  adObj.country = userInfo.country;
	  adObj.zipCode = userInfo.zip;
	  adObj.date = new Date();

	  return adObj;
	}

	exports.default = addUserInfo;

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/* global XMLHttpRequest */

	// retrieve known ad filters from easylist cache
	function getAdFilters() {
	  return new Promise(function (resolve, reject) {
	    var xhr = new XMLHttpRequest();

	    xhr.open('GET', '/ads');
	    xhr.onload = function () {
	      if (xhr.status === 200) resolve(JSON.parse(xhr.response));else {
	        reject();
	      }
	    };

	    xhr.send();
	  });
	}

	exports.default = getAdFilters;

/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// iterate through images, detect ads and store them
	function parseImageAds(images, adObj, filters) {
	  images.forEach(function (image) {
	    var _iteratorNormalCompletion = true;
	    var _didIteratorError = false;
	    var _iteratorError = undefined;

	    try {
	      for (var _iterator = filters[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	        var filter = _step.value;

	        if (image.src.includes(filter)) {
	          var ad = {
	            src: image.src,
	            width: image.width,
	            height: image.height
	          };

	          adObj.images.push(ad);
	          break;
	        }
	      }
	    } catch (err) {
	      _didIteratorError = true;
	      _iteratorError = err;
	    } finally {
	      try {
	        if (!_iteratorNormalCompletion && _iterator.return) {
	          _iterator.return();
	        }
	      } finally {
	        if (_didIteratorError) {
	          throw _iteratorError;
	        }
	      }
	    }
	  });

	  return adObj;
	}

	exports.default = parseImageAds;

/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// iterate through vidoes, detect ads and store them
	function parseVideoAds(videos, adObj, filters) {
	  videos.forEach(function (video) {
	    var _iteratorNormalCompletion = true;
	    var _didIteratorError = false;
	    var _iteratorError = undefined;

	    try {
	      for (var _iterator = filters[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	        var filter = _step.value;

	        if (video.src.includes(filter)) {
	          var ad = {
	            src: video.src,
	            width: video.videoWidth,
	            height: video.videoHeight
	          };

	          adObj.videos.push(ad);
	          break;
	        }
	      }
	    } catch (err) {
	      _didIteratorError = true;
	      _iteratorError = err;
	    } finally {
	      try {
	        if (!_iteratorNormalCompletion && _iterator.return) {
	          _iterator.return();
	        }
	      } finally {
	        if (_didIteratorError) {
	          throw _iteratorError;
	        }
	      }
	    }
	  });

	  return adObj;
	}

	exports.default = parseVideoAds;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _parseImageAds = __webpack_require__(6);

	var _parseImageAds2 = _interopRequireDefault(_parseImageAds);

	var _parseVideoAds = __webpack_require__(7);

	var _parseVideoAds2 = _interopRequireDefault(_parseVideoAds);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function parseAds(images, videos, adObj, filters) {
	  adObj = (0, _parseImageAds2.default)(images, adObj, filters);
	  adObj = (0, _parseVideoAds2.default)(videos, adObj, filters);

	  return adObj;
	}

	exports.default = parseAds;

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/* global XMLHttpRequest */

	// retrieve user's geolocalation data
	function getUserInfo(adObj) {
	  return new Promise(function (resolve, reject) {
	    var xhr = new XMLHttpRequest();

	    xhr.open('GET', 'http://ip-api.com/json');
	    xhr.onload = function () {
	      if (xhr.status === 200) {
	        resolve({
	          adObj: adObj,
	          userInfo: JSON.parse(xhr.response)
	        });
	      } else {
	        reject();
	      }
	    };

	    xhr.send();
	  });
	}

	exports.default = getUserInfo;

/***/ },
/* 10 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/* global XMLHttpRequest */

	// send ad object to database
	function postAdObj(adObj) {
	  return new Promise(function (resolve, reject) {
	    var xhr = new XMLHttpRequest();

	    xhr.open('POST', '/database');
	    xhr.setRequestHeader('Content-Type', 'application/json');
	    xhr.onload = function () {
	      return resolve(xhr.status);
	    };

	    xhr.send(JSON.stringify(adObj));
	  });
	}

	exports.default = postAdObj;

/***/ }
/******/ ]);