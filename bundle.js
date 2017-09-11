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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Touch = function () {
  // startY;
  // currentY;
  // identifier;

  function Touch(touch) {
    _classCallCheck(this, Touch);

    this.startY = this.currentY = touch.clientY;
    this.identifier = touch.identifier;
  }

  _createClass(Touch, [{
    key: "update",
    value: function update(touch) {
      this.currentY = touch.clientY;
    }

    // reset() {
    //   this.startY = 0;
    //   this.currentY = 0;
    //   this.identifier = null;
    // }

  }]);

  return Touch;
}();

exports.default = Touch;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Element = function () {
  /**
   *
   * @param scrollTop {Number}
   * @param scrollHeight {Number}
   * @param clientHeight {Number}
   */
  function Element(scrollTop, scrollHeight, clientHeight) {
    _classCallCheck(this, Element);

    this.scrollTop = scrollTop;
    this.scrollHeight = scrollHeight;
    this.clientHeight = clientHeight;
  }

  /**
   *
   * @param element {Element}
   */


  _createClass(Element, [{
    key: "update",
    value: function update(element) {
      this.scrollTop = element.scrollTop;
      this.scrollHeight = element.scrollHeight;
      this.clientHeight = element.clientHeight;
    }
  }]);

  return Element;
}();

exports.default = Element;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var DIRECTION = exports.DIRECTION = {
  UP: 'UP',
  DOWN: 'DOWN',
  NONE: 'NONE'
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(4);

var _PullToRefresh = __webpack_require__(5);

var _PullToRefresh2 = _interopRequireDefault(_PullToRefresh);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import { DIRECTION } from './PullToRefresh/constants';

window.onload = function () {
  startup();
};

var resistance = 2; //ослабление
var distance = 50; // дистанция

// const classsNames = {
//   COMMON: ["onrefresh"],
//   [DIRECTION.UP]: ["onrefresh-up"],
//   [DIRECTION.DOWN]: ["onrefresh-down"],
// };

function startup() {
  var elem = document.getElementById("ptr-list");
  var swipe = new _PullToRefresh2.default(elem, distance, resistance);
  swipe.addListener();

  swipe.onRefresh(function (distance) {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        // переведёт промис в состояние fulfilled с результатом "result"
        resolve("result " + distance);
      }, 2000);
    });
  });

  swipe.callbacks({
    onTouchMove: function onTouchMove(touchElement) {
      var motion = touchElement.motion;

      console.log(motion.distance);
    }
  });
}

/***/ }),
/* 4 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _classNames;

var _TouchElementList = __webpack_require__(6);

var _TouchElementList2 = _interopRequireDefault(_TouchElementList);

var _constants = __webpack_require__(2);

var _check = __webpack_require__(8);

var _getTranslateYStyle = __webpack_require__(9);

var _getTranslateYStyle2 = _interopRequireDefault(_getTranslateYStyle);

var _getTransitionStyle = __webpack_require__(10);

var _getTransitionStyle2 = _interopRequireDefault(_getTransitionStyle);

var _resistanceDistance3 = __webpack_require__(11);

var _resistanceDistance4 = _interopRequireDefault(_resistanceDistance3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var classNames = (_classNames = {
  COMMON: ["onrefresh"]
}, _defineProperty(_classNames, _constants.DIRECTION.UP, ["onrefresh-up"]), _defineProperty(_classNames, _constants.DIRECTION.DOWN, ["onrefresh-down"]), _classNames);

var PullToRefresh = function () {
  function PullToRefresh(elem) {
    var distance = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 50;
    var resistance = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2;
    var classNames = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    _classCallCheck(this, PullToRefresh);

    _initialiseProps.call(this);

    this.listElement = elem;
    this.distance = distance;
    this.resistance = resistance;
    this.classNames = classNames;
    this._grandpa = elem.parentElement.parentElement;
    this._touchElements = new _TouchElementList2.default();
    this._isActive = false;
    this._distanceReverse = ~distance + 1; // reverse
    this._isRefreshActive = false;
    this._handleStart = this._handleStart.bind(this);
    this._handleMove = this._handleMove.bind(this);
    this._handleEnd = this._handleEnd.bind(this);
    this._handleCancel = this._handleCancel.bind(this);
    this._handleTransitionEnd = this._handleTransitionEnd.bind(this);
  }

  _createClass(PullToRefresh, [{
    key: '_mergeClassNames',
    value: function _mergeClassNames(clsNames) {
      var result = {};
      Object.keys(classNames).forEach(function (key) {
        var value = classNames[key];
        var cls = clsNames[key];
        if ((0, _check.isArray)(cls)) {
          result[key] = [].concat(_toConsumableArray(value), _toConsumableArray(cls));
        } else if ((0, _check.isString)(cls)) {
          result[key] = [].concat(_toConsumableArray(value), [cls]);
        } else {
          result[key] = value;
        }
      });
      return result;
    }
  }, {
    key: 'addListener',
    value: function addListener() {
      this.listElement.addEventListener("touchstart", this._handleStart, false);
      this.listElement.addEventListener("touchmove", this._handleMove, false);
      this.listElement.addEventListener("touchend", this._handleEnd, false);
      this.listElement.addEventListener("touchcancel", this._handleCancel, false);
    }
  }, {
    key: 'removeListener',
    value: function removeListener() {
      this.listElement.removeEventListener("touchstart", this._handleStart, false);
      this.listElement.removeEventListener("touchmove", this._handleMove, false);
      this.listElement.removeEventListener("touchend", this._handleEnd, false);
      this.listElement.removeEventListener("touchcancel", this._handleCancel, false);
      this._removeListenerTransitionend();
    }
  }, {
    key: '_addListenerTransitionend',
    value: function _addListenerTransitionend() {
      this.listElement.addEventListener("transitionend", this._handleTransitionEnd, false);
      this.listElement.addEventListener("webkitTransitionEnd", this._handleTransitionEnd, false);
      this.listElement.addEventListener("oTransitionEnd", this._handleTransitionEnd, false);
      this.listElement.addEventListener("otransitionend", this._handleTransitionEnd, false);
    }
  }, {
    key: '_removeListenerTransitionend',
    value: function _removeListenerTransitionend() {
      this.listElement.removeEventListener("transitionend", this._handleTransitionEnd, false);
      this.listElement.removeEventListener("webkitTransitionEnd", this._handleTransitionEnd, false);
      this.listElement.removeEventListener("oTransitionEnd", this._handleTransitionEnd, false);
      this.listElement.removeEventListener("otransitionend", this._handleTransitionEnd, false);
    }
  }, {
    key: 'callbacks',
    value: function callbacks(cbs) {
      if (cbs.hasOwnProperty("onTouchStart")) {
        this.onTouchStart = cbs.onTouchStart;
      }
      if (cbs.hasOwnProperty("onTouchMove")) {
        this.onTouchMove = cbs.onTouchMove;
      }
      if (cbs.hasOwnProperty("onTouchEnd")) {
        this.onTouchEnd = cbs.onTouchEnd;
      }
      if (cbs.hasOwnProperty("onTouchCancel")) {
        this.onTouchCancel = cbs.onTouchCancel;
      }
    }
  }, {
    key: 'onRefresh',
    value: function onRefresh(func) {
      if (typeof func !== "function") {
        throw new Error('onRefresh must be a function');
      }
      this.onRefresh = func;
    }
  }, {
    key: '_handleStart',
    value: function _handleStart(evt) {
      var touches = evt.changedTouches;

      var _grandpa = this._grandpa,
          scrollTop = _grandpa.scrollTop,
          scrollHeight = _grandpa.scrollHeight,
          clientHeight = _grandpa.clientHeight;


      this._touchElements.setTouchElements(touches, scrollTop, scrollHeight, clientHeight);

      if (this.hasOwnProperty("onTouchStart")) {
        this.onTouchStart(this.currentTouchElement, this._touchElements);
      }
    }
  }, {
    key: '_handleMove',
    value: function _handleMove(evt) {
      var touches = evt.changedTouches;
      var touchElements = this._updateTouchElements(touches);
      var touchElement = touchElements.activeTouchElement;
      var motion = touchElement.motion;


      if (motion.direction === _constants.DIRECTION.NONE) {
        if (this._isActive) {
          this._isActive = false;
          this._resetStyle();
        }
      } else {
        // move UP or DOWN
        evt.preventDefault();
        if (!this._isRefreshActive) {
          this._isActive = true;
          this._removeListenerTransitionend();

          var _resistanceDistance = (0, _resistanceDistance4.default)(motion.distance, this.resistance),
              distance = _resistanceDistance.distance;

          this._setTranslateYStyle(distance);
        }
      }

      if (this.hasOwnProperty("onTouchMove")) {
        this.onTouchMove(touchElement, this._touchElements);
      }
    }
  }, {
    key: '_updateTouchElements',
    value: function _updateTouchElements(touches) {
      var _grandpa2 = this._grandpa,
          scrollTop = _grandpa2.scrollTop,
          scrollHeight = _grandpa2.scrollHeight,
          clientHeight = _grandpa2.clientHeight;


      return this._touchElements.updateTouchElements(touches, scrollTop, scrollHeight, clientHeight);
    }
  }, {
    key: '_handleEnd',
    value: function _handleEnd(evt) {
      var touchElement = this._handleRemove(evt);

      if (touchElement !== null && this.hasOwnProperty("onTouchEnd")) {
        this.onTouchEnd(touchElement, this._touchElements);
      }
    }
  }, {
    key: '_handleCancel',
    value: function _handleCancel(evt) {
      var touchElement = this._handleRemove(evt);

      if (touchElement !== null && this.hasOwnProperty("onTouchCancel")) {
        this.onTouchCancel(touchElement, this._touchElements);
      }
    }
  }, {
    key: '_handleRemove',
    value: function _handleRemove(evt) {
      var touches = evt.changedTouches; // те, которые покинули экран

      // Удаляем все неактивные (оторванные) touch, в том числе и активный.
      var touchElements = this._touchElements.deleteTouchElements(touches);

      // Если в данный момент скролим список, то реагировать не надо (нет в данный момент эффекта
      // pull-to-refresh).
      if (!this._isActive) {
        return null;
      }

      var activeTouchElement = touchElements.activeTouchElement,
          prevActiveTouchElement = touchElements.prevActiveTouchElement;


      if (activeTouchElement !== null) {
        return null;
      }

      // Все пальцы покинули экран
      // процедура инициализации добавления классов и обработчиков
      var motion = prevActiveTouchElement.motion;

      var _resistanceDistance2 = (0, _resistanceDistance4.default)(motion.distance, this.resistance),
          distance = _resistanceDistance2.distance,
          distanceAbs = _resistanceDistance2.distanceAbs;

      if (distanceAbs >= this.distance) {
        var direction = motion.direction;
        var dist = this.distance;
        if (direction === _constants.DIRECTION.DOWN) {
          dist = this._distanceReverse;
        }
        var _classNames2 = this._getClassNamesByBirection(direction);

        this._addClass(_classNames2);
        this._setTransitionStyle(dist);
        this._onRefresh(direction, dist, _classNames2);
      } else {
        this._addListenerTransitionend();
        this._setTransitionStyle(null);
      }

      return prevActiveTouchElement; // touchElement or null
    }
  }, {
    key: '_getClassNamesByBirection',
    value: function _getClassNamesByBirection(direction) {
      var classNames = "";
      if (direction === _constants.DIRECTION.DOWN) {
        classNames = this.classNames.COMMON.concat(this.classNames.DOWN);
      } else if (direction === _constants.DIRECTION.UP) {
        classNames = this.classNames.COMMON.concat(this.classNames.UP);
      }
      return classNames;
    }
  }, {
    key: '_onRefresh',
    value: function _onRefresh(direction, distance, classNames) {
      if (this.hasOwnProperty("onRefresh")) {
        var promise = this.onRefresh(direction, distance);
        var _this = this;
        this._isRefreshActive = true;
        if (!(0, _check.isPromise)(promise)) {
          throw new Error('The onRefresh function`s return value must be must be the Promise');
        }
        promise.then(function () {
          _this._removeClass.call(_this, classNames);
          _this._addListenerTransitionend();
          _this._setTransitionStyle(null);
        });
      }
    }
  }, {
    key: '_addClass',
    value: function _addClass(classNames) {
      var classList = this._grandpa.classList;
      classList.add.apply(classList, _toConsumableArray(classNames));
    }
  }, {
    key: '_removeClass',
    value: function _removeClass(classNames) {
      var classList = this._grandpa.classList;
      classList.remove.apply(classList, _toConsumableArray(classNames));
    }
  }, {
    key: '_setTransitionStyle',
    value: function _setTransitionStyle(distance) {
      var dist = distance || 0;
      var translateY = (0, _getTranslateYStyle2.default)(distance);
      var otherStyle = (0, _getTransitionStyle2.default)();
      this.listElement.style.cssText = '' + translateY + otherStyle;
    }
  }, {
    key: '_resetStyle',
    value: function _resetStyle() {
      this.listElement.style.cssText = null;
    }
  }, {
    key: '_handleTransitionEnd',
    value: function _handleTransitionEnd(evt) {
      if ((evt.type === "transitionend" || evt.type === "webkitTransitionEnd" || evt.type === "oTransitionEnd" || evt.type === "otransitionend") && evt.propertyName === "transform") {
        this._isActive = false;
        this._isRefreshActive = false;
        this._resetStyle();
        this._removeListenerTransitionend();
      }
    }
  }, {
    key: 'classNames',
    get: function get() {
      return this._classNames;
    },
    set: function set(value) {
      if (!(0, _check.isObject)(value)) {
        throw new Error('classNames must be a object');
      }
      this._classNames = this._mergeClassNames(value);
    }
  }]);

  return PullToRefresh;
}();

var _initialiseProps = function _initialiseProps() {
  this._setTranslateYStyle = function IIFE() {
    var _distance = null;
    return function (distance) {
      if (_distance !== distance) {
        this.listElement.style.cssText = (0, _getTranslateYStyle2.default)(distance);
      }
    };
  }();
};

exports.default = PullToRefresh;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Touch = __webpack_require__(0);

var _Touch2 = _interopRequireDefault(_Touch);

var _Element = __webpack_require__(1);

var _Element2 = _interopRequireDefault(_Element);

var _TouchElement = __webpack_require__(7);

var _TouchElement2 = _interopRequireDefault(_TouchElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TouchElementList = function () {
  function TouchElementList() {
    _classCallCheck(this, TouchElementList);

    this._activeTouchElement = null;
    this._prevActiveTouchElement = null;
    this._touchElements = Object.create(null);
  }

  _createClass(TouchElementList, [{
    key: 'setTouchElements',


    /**
     *
     * @param touches
     * @param scrollTop
     * @param scrollHeight
     * @param clientHeight
     */
    value: function setTouchElements(touches, scrollTop, scrollHeight, clientHeight) {
      var _this = this;

      Object.keys(touches).map(function (key) {
        var touch = touches[key];
        var identifier = touch.identifier;


        var touchElements = _this._touchElements;
        if (touchElements[identifier] === undefined) {
          touchElements[identifier] = TouchElementList.buildTouchElement(touch, scrollTop, scrollHeight, clientHeight);
        }
      });
      var activeTouchElement = this._getFirstTouchElement();
      this._setActiveTouchElement(activeTouchElement);
      return this;
    }
  }, {
    key: 'updateTouchElements',
    value: function updateTouchElements(touches, scrollTop, scrollHeight, clientHeight) {
      var _this2 = this;

      Object.keys(touches).map(function (key) {
        var touch = touches[key];
        var identifier = touch.identifier;


        var touchElements = _this2._touchElements;
        if (touchElements[identifier] === undefined) {
          touchElements[identifier] = TouchElementList.buildTouchElement(touch, scrollTop, scrollHeight, clientHeight);
        } else {
          touchElements[identifier].update(touch, scrollTop, scrollHeight, clientHeight);
        }
      });
      return this;
    }
  }, {
    key: 'deleteTouchElements',
    value: function deleteTouchElements(touches) {
      var _this3 = this;

      Object.keys(touches).map(function (key) {
        var touch = touches[key];
        var identifier = touch.identifier;


        if (_this3._touchElements[identifier] !== undefined) {
          delete _this3._touchElements[identifier];
        }
      });

      var identifier = this._activeTouchElement.touch.identifier;

      if (this._touchElements[identifier] === undefined) {
        // Если активный activeTouchElement был удален, то получаем новый, если такой есть
        var activeTouchElement = this._getFirstTouchElement(); //touchElement or null
        this._setActiveTouchElement(activeTouchElement);
      }

      return this;
    }

    /**
     * @private
     */

  }, {
    key: '_getFirstTouchElement',
    value: function _getFirstTouchElement() {
      var _this4 = this;

      var touchElement = null;
      Object.keys(this._touchElements).some(function (key) {
        return touchElement = _this4._touchElements[key], true;
      });
      return touchElement;
    }
  }, {
    key: '_setActiveTouchElement',
    value: function _setActiveTouchElement(touchElement) {
      this._prevActiveTouchElement = this.activeTouchElement;
      this._activeTouchElement = touchElement;
    }

    /**
     *
     * @private
     */

  }, {
    key: 'activeTouchElement',
    get: function get() {
      return this._activeTouchElement;
    }
  }, {
    key: 'prevActiveTouchElement',
    get: function get() {
      return this._prevActiveTouchElement;
    }
  }, {
    key: 'touchElements',
    get: function get() {
      return this._touchElements;
    }
  }], [{
    key: 'buildTouchElement',
    value: function buildTouchElement(touch, scrollTop, scrollHeight, clientHeight) {
      var identifier = touch.identifier;

      var value = new _Touch2.default(touch);
      var element = new _Element2.default(scrollTop, scrollHeight, clientHeight);
      return new _TouchElement2.default(value, element);
    }
  }]);

  return TouchElementList;
}();

exports.default = TouchElementList;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Touch = __webpack_require__(0);

var _Touch2 = _interopRequireDefault(_Touch);

var _Element = __webpack_require__(1);

var _Element2 = _interopRequireDefault(_Element);

var _constants = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TouchElement = function () {
  /**
   *
   * @param touch {Touch}
   * @param element {Element}
   */
  function TouchElement(touch, element) {
    _classCallCheck(this, TouchElement);

    this.touch = touch;
    this.element = element;
  }

  /**
   *
   * @param touch {Touch}
   * @param scrollTop
   * @param scrollHeight
   * @param clientHeight
   */


  _createClass(TouchElement, [{
    key: 'update',
    value: function update(touch, scrollTop, scrollHeight, clientHeight) {
      this.touch.update(touch);
      this.element.update({
        scrollTop: scrollTop,
        scrollHeight: scrollHeight,
        clientHeight: clientHeight
      });
    }
  }, {
    key: 'motion',
    get: function get() {
      var moveTouchTopY = ~~(this.touch.currentY - this.touch.startY); //round
      var distanceTop = moveTouchTopY - this.element.scrollTop;

      var moveTouchBottomY = ~moveTouchTopY + 1; //reverse
      var scrollBottom = this.element.scrollHeight - (this.element.scrollTop + this.element.clientHeight);
      var distanceBottom = moveTouchBottomY - scrollBottom;

      if (distanceTop > 0) {
        return {
          distance: distanceTop,
          direction: _constants.DIRECTION.UP
        };
      } else if (distanceBottom > 0) {
        return {
          distance: ~distanceBottom + 1,
          direction: _constants.DIRECTION.DOWN
        };
      } else {
        return {
          distance: null,
          direction: _constants.DIRECTION.NONE
        };
      }
    }
  }]);

  return TouchElement;
}();

exports.default = TouchElement;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var isObject = exports.isObject = function isObject(obj) {
  return obj && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' && obj.constructor === Object;
};

var isArray = exports.isArray = function isArray(obj) {
  return obj && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' && obj.constructor === Array;
};

var isString = exports.isString = function isString(obj) {
  return typeof obj === 'string' || (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' && obj.constructor === String;
};

var isPromise = exports.isPromise = function isPromise(obj) {
  return !!obj && ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var getTranslateYStyle = function getTranslateYStyle(distance) {
  return "-webkit-transform:translateY(" + distance + "px);" + ("-ms-transform:translateY(" + distance + "px);") + ("transform:translateY(" + distance + "px);");
};

exports.default = getTranslateYStyle;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var getTransitionStyle = function getTransitionStyle() {
  var duration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 300;
  var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  return "-webkit-transition-duration:" + duration + "ms;" + ("transition-duration:" + duration + "ms;") + "-webkit-transition-timing-function:cubic-bezier(.33,.66,.66,1);" + "transition-timing-function:cubic-bezier(.33,.66,.66,1);" + ("-webkit-transition-delay:" + delay + "ms;") + ("transition-delay:" + delay + "ms;");
};

exports.default = getTransitionStyle;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var resistanceDistance = function resistanceDistance(distance) {
  var resistance = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  var resDist = ~~(distance / resistance); //round

  var resistanceDistanceAbs = resDist;
  if (resistanceDistanceAbs < 0) {
    resistanceDistanceAbs = ~resistanceDistanceAbs + 1; //reverse
  }

  return {
    distance: resDist,
    distanceAbs: resistanceDistanceAbs
  };
};

exports.default = resistanceDistance;

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIGRmYjdmMmFkNTRmM2U4NzBlZTNhIiwid2VicGFjazovLy9qcy9QdWxsVG9SZWZyZXNoL1RvdWNoLmpzIiwid2VicGFjazovLy9qcy9QdWxsVG9SZWZyZXNoL0VsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vL2pzL1B1bGxUb1JlZnJlc2gvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy9qcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zdHlsZS9zdHlsZS5jc3M/NzJhMiIsIndlYnBhY2s6Ly8vanMvUHVsbFRvUmVmcmVzaC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vanMvUHVsbFRvUmVmcmVzaC9Ub3VjaEVsZW1lbnRMaXN0LmpzIiwid2VicGFjazovLy9qcy9QdWxsVG9SZWZyZXNoL1RvdWNoRWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vanMvUHVsbFRvUmVmcmVzaC91dGlscy9jaGVjay5qcyIsIndlYnBhY2s6Ly8vanMvUHVsbFRvUmVmcmVzaC91dGlscy9nZXRUcmFuc2xhdGVZU3R5bGUuanMiLCJ3ZWJwYWNrOi8vL2pzL1B1bGxUb1JlZnJlc2gvdXRpbHMvZ2V0VHJhbnNpdGlvblN0eWxlLmpzIiwid2VicGFjazovLy9qcy9QdWxsVG9SZWZyZXNoL3V0aWxzL3Jlc2lzdGFuY2VEaXN0YW5jZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAzKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBkZmI3ZjJhZDU0ZjNlODcwZWUzYSIsImNsYXNzIFRvdWNoIHtcbiAgLy8gc3RhcnRZO1xuICAvLyBjdXJyZW50WTtcbiAgLy8gaWRlbnRpZmllcjtcblxuICBjb25zdHJ1Y3Rvcih0b3VjaCkge1xuICAgIHRoaXMuc3RhcnRZID0gdGhpcy5jdXJyZW50WSA9IHRvdWNoLmNsaWVudFk7XG4gICAgdGhpcy5pZGVudGlmaWVyID0gdG91Y2guaWRlbnRpZmllcjtcbiAgfVxuXG4gIHVwZGF0ZSh0b3VjaCl7XG4gICAgdGhpcy5jdXJyZW50WSA9IHRvdWNoLmNsaWVudFk7XG4gIH1cblxuICAvLyByZXNldCgpIHtcbiAgLy8gICB0aGlzLnN0YXJ0WSA9IDA7XG4gIC8vICAgdGhpcy5jdXJyZW50WSA9IDA7XG4gIC8vICAgdGhpcy5pZGVudGlmaWVyID0gbnVsbDtcbiAgLy8gfVxufVxuZXhwb3J0IGRlZmF1bHQgVG91Y2g7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGpzL1B1bGxUb1JlZnJlc2gvVG91Y2guanMiLCJjbGFzcyBFbGVtZW50IHtcbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSBzY3JvbGxUb3Age051bWJlcn1cbiAgICogQHBhcmFtIHNjcm9sbEhlaWdodCB7TnVtYmVyfVxuICAgKiBAcGFyYW0gY2xpZW50SGVpZ2h0IHtOdW1iZXJ9XG4gICAqL1xuICBjb25zdHJ1Y3RvcihzY3JvbGxUb3AsIHNjcm9sbEhlaWdodCwgY2xpZW50SGVpZ2h0KSB7XG4gICAgdGhpcy5zY3JvbGxUb3AgPSBzY3JvbGxUb3A7XG4gICAgdGhpcy5zY3JvbGxIZWlnaHQgPSBzY3JvbGxIZWlnaHQ7XG4gICAgdGhpcy5jbGllbnRIZWlnaHQgPSBjbGllbnRIZWlnaHQ7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIGVsZW1lbnQge0VsZW1lbnR9XG4gICAqL1xuICB1cGRhdGUoZWxlbWVudCkge1xuICAgIHRoaXMuc2Nyb2xsVG9wID0gZWxlbWVudC5zY3JvbGxUb3A7XG4gICAgdGhpcy5zY3JvbGxIZWlnaHQgPSBlbGVtZW50LnNjcm9sbEhlaWdodDtcbiAgICB0aGlzLmNsaWVudEhlaWdodCA9IGVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVsZW1lbnQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8ganMvUHVsbFRvUmVmcmVzaC9FbGVtZW50LmpzIiwiZXhwb3J0IGNvbnN0IERJUkVDVElPTiA9IHtcbiAgVVA6ICdVUCcsXG4gIERPV046ICdET1dOJyxcbiAgTk9ORTogJ05PTkUnLFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBqcy9QdWxsVG9SZWZyZXNoL2NvbnN0YW50cy5qcyIsImltcG9ydCAnLi4vc3R5bGUvc3R5bGUuY3NzJztcbmltcG9ydCBQdWxsVG9SZWZyZXNoIGZyb20gJy4vUHVsbFRvUmVmcmVzaCc7XG4vL2ltcG9ydCB7IERJUkVDVElPTiB9IGZyb20gJy4vUHVsbFRvUmVmcmVzaC9jb25zdGFudHMnO1xuXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICBzdGFydHVwKCk7XG59O1xuXG5jb25zdCByZXNpc3RhbmNlID0gMjsgLy/QvtGB0LvQsNCx0LvQtdC90LjQtVxuY29uc3QgZGlzdGFuY2UgPSA1MDsgLy8g0LTQuNGB0YLQsNC90YbQuNGPXG5cbi8vIGNvbnN0IGNsYXNzc05hbWVzID0ge1xuLy8gICBDT01NT046IFtcIm9ucmVmcmVzaFwiXSxcbi8vICAgW0RJUkVDVElPTi5VUF06IFtcIm9ucmVmcmVzaC11cFwiXSxcbi8vICAgW0RJUkVDVElPTi5ET1dOXTogW1wib25yZWZyZXNoLWRvd25cIl0sXG4vLyB9O1xuXG5mdW5jdGlvbiBzdGFydHVwKCkge1xuICBjb25zdCBlbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwdHItbGlzdFwiKTtcbiAgY29uc3Qgc3dpcGUgPSBuZXcgUHVsbFRvUmVmcmVzaChlbGVtLCBkaXN0YW5jZSwgcmVzaXN0YW5jZSk7XG4gIHN3aXBlLmFkZExpc3RlbmVyKCk7XG5cbiAgc3dpcGUub25SZWZyZXNoKGZ1bmN0aW9uIChkaXN0YW5jZSkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgLy8g0L/QtdGA0LXQstC10LTRkdGCINC/0YDQvtC80LjRgSDQsiDRgdC+0YHRgtC+0Y/QvdC40LUgZnVsZmlsbGVkINGBINGA0LXQt9GD0LvRjNGC0LDRgtC+0LwgXCJyZXN1bHRcIlxuICAgICAgICByZXNvbHZlKFwicmVzdWx0IFwiICsgZGlzdGFuY2UpO1xuICAgICAgfSwgMjAwMCk7XG5cbiAgICB9KTtcbiAgfSk7XG5cbiAgc3dpcGUuY2FsbGJhY2tzKHtcbiAgICBvblRvdWNoTW92ZTogZnVuY3Rpb24gKHRvdWNoRWxlbWVudCkge1xuICAgICAgY29uc3QgeyBtb3Rpb24gfSA9IHRvdWNoRWxlbWVudDtcbiAgICAgIGNvbnNvbGUubG9nKG1vdGlvbi5kaXN0YW5jZSk7XG4gICAgfVxuICB9KTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBqcy9pbmRleC5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zdHlsZS9zdHlsZS5jc3Ncbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFRvdWNoRWxlbWVudExpc3QgZnJvbSAnLi9Ub3VjaEVsZW1lbnRMaXN0JztcbmltcG9ydCB7IERJUkVDVElPTiB9IGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCB7XG4gIGlzUHJvbWlzZSxcbiAgaXNBcnJheSxcbiAgaXNTdHJpbmcsXG4gIGlzT2JqZWN0LFxufSBmcm9tICcuL3V0aWxzL2NoZWNrJztcbmltcG9ydCBnZXRUcmFuc2xhdGVZU3R5bGUgZnJvbSAnLi91dGlscy9nZXRUcmFuc2xhdGVZU3R5bGUnO1xuaW1wb3J0IGdldFRyYW5zaXRpb25TdHlsZSBmcm9tICcuL3V0aWxzL2dldFRyYW5zaXRpb25TdHlsZSc7XG5pbXBvcnQgcmVzaXN0YW5jZURpc3RhbmNlIGZyb20gJy4vdXRpbHMvcmVzaXN0YW5jZURpc3RhbmNlJztcblxuY29uc3QgY2xhc3NOYW1lcyA9IHtcbiAgQ09NTU9OOiBbXCJvbnJlZnJlc2hcIl0sXG4gIFtESVJFQ1RJT04uVVBdOiBbXCJvbnJlZnJlc2gtdXBcIl0sXG4gIFtESVJFQ1RJT04uRE9XTl06IFtcIm9ucmVmcmVzaC1kb3duXCJdLFxufTtcblxuY2xhc3MgUHVsbFRvUmVmcmVzaCB7XG4gIGNvbnN0cnVjdG9yKGVsZW0sIGRpc3RhbmNlID0gNTAsIHJlc2lzdGFuY2UgPSAyLCBjbGFzc05hbWVzID0ge30pIHtcbiAgICB0aGlzLmxpc3RFbGVtZW50ID0gZWxlbTtcbiAgICB0aGlzLmRpc3RhbmNlID0gZGlzdGFuY2U7XG4gICAgdGhpcy5yZXNpc3RhbmNlID0gcmVzaXN0YW5jZTtcbiAgICB0aGlzLmNsYXNzTmFtZXMgPSBjbGFzc05hbWVzO1xuICAgIHRoaXMuX2dyYW5kcGEgPSBlbGVtLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICB0aGlzLl90b3VjaEVsZW1lbnRzID0gbmV3IFRvdWNoRWxlbWVudExpc3QoKTtcbiAgICB0aGlzLl9pc0FjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMuX2Rpc3RhbmNlUmV2ZXJzZSA9IH5kaXN0YW5jZSArIDE7IC8vIHJldmVyc2VcbiAgICB0aGlzLl9pc1JlZnJlc2hBY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLl9oYW5kbGVTdGFydCA9IHRoaXMuX2hhbmRsZVN0YXJ0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5faGFuZGxlTW92ZSA9IHRoaXMuX2hhbmRsZU1vdmUuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9oYW5kbGVFbmQgPSB0aGlzLl9oYW5kbGVFbmQuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9oYW5kbGVDYW5jZWwgPSB0aGlzLl9oYW5kbGVDYW5jZWwuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9oYW5kbGVUcmFuc2l0aW9uRW5kID0gdGhpcy5faGFuZGxlVHJhbnNpdGlvbkVuZC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgZ2V0IGNsYXNzTmFtZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NsYXNzTmFtZXM7XG4gIH1cblxuICBzZXQgY2xhc3NOYW1lcyh2YWx1ZSkge1xuICAgIGlmICghaXNPYmplY3QodmFsdWUpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsYXNzTmFtZXMgbXVzdCBiZSBhIG9iamVjdCcpO1xuICAgIH1cbiAgICB0aGlzLl9jbGFzc05hbWVzID0gdGhpcy5fbWVyZ2VDbGFzc05hbWVzKHZhbHVlKTtcbiAgfVxuXG4gIF9tZXJnZUNsYXNzTmFtZXMoY2xzTmFtZXMpIHtcbiAgICBsZXQgcmVzdWx0ID0ge307XG4gICAgT2JqZWN0LmtleXMoY2xhc3NOYW1lcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBjb25zdCB2YWx1ZSA9IGNsYXNzTmFtZXNba2V5XTtcbiAgICAgIGNvbnN0IGNscyA9IGNsc05hbWVzW2tleV07XG4gICAgICBpZiAoaXNBcnJheShjbHMpKSB7XG4gICAgICAgIHJlc3VsdFtrZXldID0gWy4uLnZhbHVlLCAuLi5jbHNdO1xuICAgICAgfSBlbHNlIGlmIChpc1N0cmluZyhjbHMpKSB7XG4gICAgICAgIHJlc3VsdFtrZXldID0gWy4uLnZhbHVlLCBjbHNdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0W2tleV0gPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgYWRkTGlzdGVuZXIoKSB7XG4gICAgdGhpcy5saXN0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCB0aGlzLl9oYW5kbGVTdGFydCwgZmFsc2UpO1xuICAgIHRoaXMubGlzdEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLCB0aGlzLl9oYW5kbGVNb3ZlLCBmYWxzZSk7XG4gICAgdGhpcy5saXN0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIiwgdGhpcy5faGFuZGxlRW5kLCBmYWxzZSk7XG4gICAgdGhpcy5saXN0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hjYW5jZWxcIiwgdGhpcy5faGFuZGxlQ2FuY2VsLCBmYWxzZSk7XG4gIH1cblxuICByZW1vdmVMaXN0ZW5lcigpIHtcbiAgICB0aGlzLmxpc3RFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIHRoaXMuX2hhbmRsZVN0YXJ0LCBmYWxzZSk7XG4gICAgdGhpcy5saXN0RWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsIHRoaXMuX2hhbmRsZU1vdmUsIGZhbHNlKTtcbiAgICB0aGlzLmxpc3RFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLCB0aGlzLl9oYW5kbGVFbmQsIGZhbHNlKTtcbiAgICB0aGlzLmxpc3RFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaGNhbmNlbFwiLCB0aGlzLl9oYW5kbGVDYW5jZWwsIGZhbHNlKTtcbiAgICB0aGlzLl9yZW1vdmVMaXN0ZW5lclRyYW5zaXRpb25lbmQoKTtcbiAgfVxuXG4gIF9hZGRMaXN0ZW5lclRyYW5zaXRpb25lbmQoKSB7XG4gICAgdGhpcy5saXN0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwidHJhbnNpdGlvbmVuZFwiLCB0aGlzLl9oYW5kbGVUcmFuc2l0aW9uRW5kLCBmYWxzZSk7XG4gICAgdGhpcy5saXN0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwid2Via2l0VHJhbnNpdGlvbkVuZFwiLCB0aGlzLl9oYW5kbGVUcmFuc2l0aW9uRW5kLCBmYWxzZSk7XG4gICAgdGhpcy5saXN0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwib1RyYW5zaXRpb25FbmRcIiwgdGhpcy5faGFuZGxlVHJhbnNpdGlvbkVuZCwgZmFsc2UpO1xuICAgIHRoaXMubGlzdEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm90cmFuc2l0aW9uZW5kXCIsIHRoaXMuX2hhbmRsZVRyYW5zaXRpb25FbmQsIGZhbHNlKTtcbiAgfVxuXG4gIF9yZW1vdmVMaXN0ZW5lclRyYW5zaXRpb25lbmQoKSB7XG4gICAgdGhpcy5saXN0RWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwidHJhbnNpdGlvbmVuZFwiLCB0aGlzLl9oYW5kbGVUcmFuc2l0aW9uRW5kLCBmYWxzZSk7XG4gICAgdGhpcy5saXN0RWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwid2Via2l0VHJhbnNpdGlvbkVuZFwiLCB0aGlzLl9oYW5kbGVUcmFuc2l0aW9uRW5kLCBmYWxzZSk7XG4gICAgdGhpcy5saXN0RWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwib1RyYW5zaXRpb25FbmRcIiwgdGhpcy5faGFuZGxlVHJhbnNpdGlvbkVuZCwgZmFsc2UpO1xuICAgIHRoaXMubGlzdEVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm90cmFuc2l0aW9uZW5kXCIsIHRoaXMuX2hhbmRsZVRyYW5zaXRpb25FbmQsIGZhbHNlKTtcbiAgfVxuXG4gIGNhbGxiYWNrcyhjYnMpIHtcbiAgICBpZiAoY2JzLmhhc093blByb3BlcnR5KFwib25Ub3VjaFN0YXJ0XCIpKSB7XG4gICAgICB0aGlzLm9uVG91Y2hTdGFydCA9IGNicy5vblRvdWNoU3RhcnQ7XG4gICAgfVxuICAgIGlmIChjYnMuaGFzT3duUHJvcGVydHkoXCJvblRvdWNoTW92ZVwiKSkge1xuICAgICAgdGhpcy5vblRvdWNoTW92ZSA9IGNicy5vblRvdWNoTW92ZTtcbiAgICB9XG4gICAgaWYgKGNicy5oYXNPd25Qcm9wZXJ0eShcIm9uVG91Y2hFbmRcIikpIHtcbiAgICAgIHRoaXMub25Ub3VjaEVuZCA9IGNicy5vblRvdWNoRW5kO1xuICAgIH1cbiAgICBpZiAoY2JzLmhhc093blByb3BlcnR5KFwib25Ub3VjaENhbmNlbFwiKSkge1xuICAgICAgdGhpcy5vblRvdWNoQ2FuY2VsID0gY2JzLm9uVG91Y2hDYW5jZWw7XG4gICAgfVxuICB9XG5cbiAgb25SZWZyZXNoKGZ1bmMpIHtcbiAgICBpZiAodHlwZW9mIGZ1bmMgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdvblJlZnJlc2ggbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG4gICAgfVxuICAgIHRoaXMub25SZWZyZXNoID0gZnVuYztcbiAgfVxuXG4gIF9oYW5kbGVTdGFydChldnQpIHtcbiAgICBjb25zdCB0b3VjaGVzID0gZXZ0LmNoYW5nZWRUb3VjaGVzO1xuXG4gICAgY29uc3Qge1xuICAgICAgICAgICAgc2Nyb2xsVG9wLFxuICAgICAgICAgICAgc2Nyb2xsSGVpZ2h0LFxuICAgICAgICAgICAgY2xpZW50SGVpZ2h0LFxuICAgICAgICAgIH0gPSB0aGlzLl9ncmFuZHBhO1xuXG4gICAgdGhpcy5fdG91Y2hFbGVtZW50cy5zZXRUb3VjaEVsZW1lbnRzKHRvdWNoZXMsIHNjcm9sbFRvcCwgc2Nyb2xsSGVpZ2h0LCBjbGllbnRIZWlnaHQpO1xuXG4gICAgaWYgKHRoaXMuaGFzT3duUHJvcGVydHkoXCJvblRvdWNoU3RhcnRcIikpIHtcbiAgICAgIHRoaXMub25Ub3VjaFN0YXJ0KHRoaXMuY3VycmVudFRvdWNoRWxlbWVudCwgdGhpcy5fdG91Y2hFbGVtZW50cyk7XG4gICAgfVxuICB9XG5cbiAgX2hhbmRsZU1vdmUoZXZ0KSB7XG4gICAgY29uc3QgdG91Y2hlcyA9IGV2dC5jaGFuZ2VkVG91Y2hlcztcbiAgICBjb25zdCB0b3VjaEVsZW1lbnRzID0gdGhpcy5fdXBkYXRlVG91Y2hFbGVtZW50cyh0b3VjaGVzKTtcbiAgICBjb25zdCB0b3VjaEVsZW1lbnQgPSB0b3VjaEVsZW1lbnRzLmFjdGl2ZVRvdWNoRWxlbWVudDtcbiAgICBjb25zdCB7IG1vdGlvbiB9ID0gdG91Y2hFbGVtZW50O1xuXG4gICAgaWYgKG1vdGlvbi5kaXJlY3Rpb24gPT09IERJUkVDVElPTi5OT05FKSB7XG4gICAgICBpZiAodGhpcy5faXNBY3RpdmUpIHtcbiAgICAgICAgdGhpcy5faXNBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fcmVzZXRTdHlsZSgpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBtb3ZlIFVQIG9yIERPV05cbiAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgaWYgKCF0aGlzLl9pc1JlZnJlc2hBY3RpdmUpIHtcbiAgICAgICAgdGhpcy5faXNBY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLl9yZW1vdmVMaXN0ZW5lclRyYW5zaXRpb25lbmQoKTtcbiAgICAgICAgY29uc3QgeyBkaXN0YW5jZSB9ID0gcmVzaXN0YW5jZURpc3RhbmNlKG1vdGlvbi5kaXN0YW5jZSwgdGhpcy5yZXNpc3RhbmNlKTtcbiAgICAgICAgdGhpcy5fc2V0VHJhbnNsYXRlWVN0eWxlKGRpc3RhbmNlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5oYXNPd25Qcm9wZXJ0eShcIm9uVG91Y2hNb3ZlXCIpKSB7XG4gICAgICB0aGlzLm9uVG91Y2hNb3ZlKHRvdWNoRWxlbWVudCwgdGhpcy5fdG91Y2hFbGVtZW50cyk7XG4gICAgfVxuICB9XG5cbiAgX3VwZGF0ZVRvdWNoRWxlbWVudHModG91Y2hlcykge1xuICAgIGNvbnN0IHtcbiAgICAgICAgICAgIHNjcm9sbFRvcCxcbiAgICAgICAgICAgIHNjcm9sbEhlaWdodCxcbiAgICAgICAgICAgIGNsaWVudEhlaWdodCxcbiAgICAgICAgICB9ID0gdGhpcy5fZ3JhbmRwYTtcblxuICAgIHJldHVybiB0aGlzLl90b3VjaEVsZW1lbnRzLnVwZGF0ZVRvdWNoRWxlbWVudHModG91Y2hlcywgc2Nyb2xsVG9wLCBzY3JvbGxIZWlnaHQsIGNsaWVudEhlaWdodCk7XG4gIH1cblxuICBfaGFuZGxlRW5kKGV2dCkge1xuICAgIGNvbnN0IHRvdWNoRWxlbWVudCA9IHRoaXMuX2hhbmRsZVJlbW92ZShldnQpO1xuXG4gICAgaWYgKHRvdWNoRWxlbWVudCAhPT0gbnVsbCAmJiB0aGlzLmhhc093blByb3BlcnR5KFwib25Ub3VjaEVuZFwiKSkge1xuICAgICAgdGhpcy5vblRvdWNoRW5kKHRvdWNoRWxlbWVudCwgdGhpcy5fdG91Y2hFbGVtZW50cyk7XG4gICAgfVxuICB9XG5cbiAgX2hhbmRsZUNhbmNlbChldnQpIHtcbiAgICBjb25zdCB0b3VjaEVsZW1lbnQgPSB0aGlzLl9oYW5kbGVSZW1vdmUoZXZ0KTtcblxuICAgIGlmICh0b3VjaEVsZW1lbnQgIT09IG51bGwgJiYgdGhpcy5oYXNPd25Qcm9wZXJ0eShcIm9uVG91Y2hDYW5jZWxcIikpIHtcbiAgICAgIHRoaXMub25Ub3VjaENhbmNlbCh0b3VjaEVsZW1lbnQsIHRoaXMuX3RvdWNoRWxlbWVudHMpO1xuICAgIH1cbiAgfVxuXG4gIF9oYW5kbGVSZW1vdmUoZXZ0KSB7XG4gICAgY29uc3QgdG91Y2hlcyA9IGV2dC5jaGFuZ2VkVG91Y2hlczsgLy8g0YLQtSwg0LrQvtGC0L7RgNGL0LUg0L/QvtC60LjQvdGD0LvQuCDRjdC60YDQsNC9XG5cbiAgICAvLyDQo9C00LDQu9GP0LXQvCDQstGB0LUg0L3QtdCw0LrRgtC40LLQvdGL0LUgKNC+0YLQvtGA0LLQsNC90L3Ri9C1KSB0b3VjaCwg0LIg0YLQvtC8INGH0LjRgdC70LUg0Lgg0LDQutGC0LjQstC90YvQuS5cbiAgICBjb25zdCB0b3VjaEVsZW1lbnRzID0gdGhpcy5fdG91Y2hFbGVtZW50cy5kZWxldGVUb3VjaEVsZW1lbnRzKHRvdWNoZXMpO1xuXG4gICAgLy8g0JXRgdC70Lgg0LIg0LTQsNC90L3Ri9C5INC80L7QvNC10L3RgiDRgdC60YDQvtC70LjQvCDRgdC/0LjRgdC+0LosINGC0L4g0YDQtdCw0LPQuNGA0L7QstCw0YLRjCDQvdC1INC90LDQtNC+ICjQvdC10YIg0LIg0LTQsNC90L3Ri9C5INC80L7QvNC10L3RgiDRjdGE0YTQtdC60YLQsFxuICAgIC8vIHB1bGwtdG8tcmVmcmVzaCkuXG4gICAgaWYgKCF0aGlzLl9pc0FjdGl2ZSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgeyBhY3RpdmVUb3VjaEVsZW1lbnQsIHByZXZBY3RpdmVUb3VjaEVsZW1lbnQsIH0gPSB0b3VjaEVsZW1lbnRzO1xuXG4gICAgaWYgKGFjdGl2ZVRvdWNoRWxlbWVudCAhPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLy8g0JLRgdC1INC/0LDQu9GM0YbRiyDQv9C+0LrQuNC90YPQu9C4INGN0LrRgNCw0L1cbiAgICAvLyDQv9GA0L7RhtC10LTRg9GA0LAg0LjQvdC40YbQuNCw0LvQuNC30LDRhtC40Lgg0LTQvtCx0LDQstC70LXQvdC40Y8g0LrQu9Cw0YHRgdC+0LIg0Lgg0L7QsdGA0LDQsdC+0YLRh9C40LrQvtCyXG4gICAgY29uc3QgeyBtb3Rpb24gfSA9IHByZXZBY3RpdmVUb3VjaEVsZW1lbnQ7XG5cbiAgICBjb25zdCB7IGRpc3RhbmNlLCBkaXN0YW5jZUFicyB9ID0gcmVzaXN0YW5jZURpc3RhbmNlKG1vdGlvbi5kaXN0YW5jZSwgdGhpcy5yZXNpc3RhbmNlKTtcblxuICAgIGlmIChkaXN0YW5jZUFicyA+PSB0aGlzLmRpc3RhbmNlKSB7XG4gICAgICBjb25zdCBkaXJlY3Rpb24gPSBtb3Rpb24uZGlyZWN0aW9uO1xuICAgICAgbGV0IGRpc3QgPSB0aGlzLmRpc3RhbmNlO1xuICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gRElSRUNUSU9OLkRPV04pIHtcbiAgICAgICAgZGlzdCA9IHRoaXMuX2Rpc3RhbmNlUmV2ZXJzZTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGNsYXNzTmFtZXMgPSB0aGlzLl9nZXRDbGFzc05hbWVzQnlCaXJlY3Rpb24oZGlyZWN0aW9uKTtcblxuICAgICAgdGhpcy5fYWRkQ2xhc3MoY2xhc3NOYW1lcyk7XG4gICAgICB0aGlzLl9zZXRUcmFuc2l0aW9uU3R5bGUoZGlzdCk7XG4gICAgICB0aGlzLl9vblJlZnJlc2goZGlyZWN0aW9uLCBkaXN0LCBjbGFzc05hbWVzKTtcblxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9hZGRMaXN0ZW5lclRyYW5zaXRpb25lbmQoKTtcbiAgICAgIHRoaXMuX3NldFRyYW5zaXRpb25TdHlsZShudWxsKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJldkFjdGl2ZVRvdWNoRWxlbWVudDsgLy8gdG91Y2hFbGVtZW50IG9yIG51bGxcbiAgfVxuXG4gIF9nZXRDbGFzc05hbWVzQnlCaXJlY3Rpb24oZGlyZWN0aW9uKSB7XG4gICAgbGV0IGNsYXNzTmFtZXMgPSBcIlwiO1xuICAgIGlmIChkaXJlY3Rpb24gPT09IERJUkVDVElPTi5ET1dOKSB7XG4gICAgICBjbGFzc05hbWVzID0gdGhpcy5jbGFzc05hbWVzLkNPTU1PTi5jb25jYXQodGhpcy5jbGFzc05hbWVzLkRPV04pO1xuICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSBESVJFQ1RJT04uVVApIHtcbiAgICAgIGNsYXNzTmFtZXMgPSB0aGlzLmNsYXNzTmFtZXMuQ09NTU9OLmNvbmNhdCh0aGlzLmNsYXNzTmFtZXMuVVApO1xuICAgIH1cbiAgICByZXR1cm4gY2xhc3NOYW1lcztcbiAgfVxuXG4gIF9vblJlZnJlc2goZGlyZWN0aW9uLCBkaXN0YW5jZSwgY2xhc3NOYW1lcykge1xuICAgIGlmICh0aGlzLmhhc093blByb3BlcnR5KFwib25SZWZyZXNoXCIpKSB7XG4gICAgICBjb25zdCBwcm9taXNlID0gdGhpcy5vblJlZnJlc2goZGlyZWN0aW9uLCBkaXN0YW5jZSk7XG4gICAgICBjb25zdCBfdGhpcyA9IHRoaXM7XG4gICAgICB0aGlzLl9pc1JlZnJlc2hBY3RpdmUgPSB0cnVlO1xuICAgICAgaWYgKCFpc1Byb21pc2UocHJvbWlzZSkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgb25SZWZyZXNoIGZ1bmN0aW9uYHMgcmV0dXJuIHZhbHVlIG11c3QgYmUgbXVzdCBiZSB0aGUgUHJvbWlzZScpO1xuICAgICAgfVxuICAgICAgcHJvbWlzZVxuICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgX3RoaXMuX3JlbW92ZUNsYXNzLmNhbGwoX3RoaXMsIGNsYXNzTmFtZXMpO1xuICAgICAgICAgIF90aGlzLl9hZGRMaXN0ZW5lclRyYW5zaXRpb25lbmQoKTtcbiAgICAgICAgICBfdGhpcy5fc2V0VHJhbnNpdGlvblN0eWxlKG51bGwpO1xuICAgICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIF9hZGRDbGFzcyhjbGFzc05hbWVzKSB7XG4gICAgY29uc3QgY2xhc3NMaXN0ID0gdGhpcy5fZ3JhbmRwYS5jbGFzc0xpc3Q7XG4gICAgY2xhc3NMaXN0LmFkZCguLi5jbGFzc05hbWVzKTtcbiAgfVxuXG4gIF9yZW1vdmVDbGFzcyhjbGFzc05hbWVzKSB7XG4gICAgY29uc3QgY2xhc3NMaXN0ID0gdGhpcy5fZ3JhbmRwYS5jbGFzc0xpc3Q7XG4gICAgY2xhc3NMaXN0LnJlbW92ZSguLi5jbGFzc05hbWVzKTtcbiAgfVxuXG4gIF9zZXRUcmFuc2xhdGVZU3R5bGUgPSAoZnVuY3Rpb24gSUlGRSgpIHtcbiAgICBsZXQgX2Rpc3RhbmNlID0gbnVsbDtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGRpc3RhbmNlKSB7XG4gICAgICBpZiAoX2Rpc3RhbmNlICE9PSBkaXN0YW5jZSkge1xuICAgICAgICB0aGlzLmxpc3RFbGVtZW50LnN0eWxlLmNzc1RleHQgPSBnZXRUcmFuc2xhdGVZU3R5bGUoZGlzdGFuY2UpO1xuICAgICAgfVxuICAgIH1cbiAgfSkoKTtcblxuICBfc2V0VHJhbnNpdGlvblN0eWxlKGRpc3RhbmNlKSB7XG4gICAgY29uc3QgZGlzdCA9IGRpc3RhbmNlIHx8IDA7XG4gICAgY29uc3QgdHJhbnNsYXRlWSA9IGdldFRyYW5zbGF0ZVlTdHlsZShkaXN0YW5jZSk7XG4gICAgY29uc3Qgb3RoZXJTdHlsZSA9IGdldFRyYW5zaXRpb25TdHlsZSgpO1xuICAgIHRoaXMubGlzdEVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IGAke3RyYW5zbGF0ZVl9JHtvdGhlclN0eWxlfWA7XG4gIH1cblxuICBfcmVzZXRTdHlsZSgpIHtcbiAgICB0aGlzLmxpc3RFbGVtZW50LnN0eWxlLmNzc1RleHQgPSBudWxsO1xuICB9XG5cbiAgX2hhbmRsZVRyYW5zaXRpb25FbmQoZXZ0KSB7XG4gICAgaWYgKFxuICAgICAgKGV2dC50eXBlID09PSBcInRyYW5zaXRpb25lbmRcIlxuICAgICAgfHwgZXZ0LnR5cGUgPT09IFwid2Via2l0VHJhbnNpdGlvbkVuZFwiXG4gICAgICB8fCBldnQudHlwZSA9PT0gXCJvVHJhbnNpdGlvbkVuZFwiXG4gICAgICB8fCBldnQudHlwZSA9PT0gXCJvdHJhbnNpdGlvbmVuZFwiKVxuICAgICAgJiYgZXZ0LnByb3BlcnR5TmFtZSA9PT0gXCJ0cmFuc2Zvcm1cIlxuICAgICkge1xuICAgICAgdGhpcy5faXNBY3RpdmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2lzUmVmcmVzaEFjdGl2ZSA9IGZhbHNlO1xuICAgICAgdGhpcy5fcmVzZXRTdHlsZSgpO1xuICAgICAgdGhpcy5fcmVtb3ZlTGlzdGVuZXJUcmFuc2l0aW9uZW5kKCk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFB1bGxUb1JlZnJlc2g7XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBqcy9QdWxsVG9SZWZyZXNoL2luZGV4LmpzIiwiaW1wb3J0IFRvdWNoIGZyb20gJy4vVG91Y2gnO1xuaW1wb3J0IEVsZW1lbnQgZnJvbSAnLi9FbGVtZW50JztcbmltcG9ydCBUb3VjaEVsZW1lbnQgZnJvbSAnLi9Ub3VjaEVsZW1lbnQnO1xuXG5jbGFzcyBUb3VjaEVsZW1lbnRMaXN0IHtcbiAgX2FjdGl2ZVRvdWNoRWxlbWVudCA9IG51bGw7XG4gIGdldCBhY3RpdmVUb3VjaEVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FjdGl2ZVRvdWNoRWxlbWVudDtcbiAgfVxuXG4gIF9wcmV2QWN0aXZlVG91Y2hFbGVtZW50ID0gbnVsbDtcbiAgZ2V0IHByZXZBY3RpdmVUb3VjaEVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ByZXZBY3RpdmVUb3VjaEVsZW1lbnQ7XG4gIH1cblxuICBfdG91Y2hFbGVtZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIGdldCB0b3VjaEVsZW1lbnRzKCkge1xuICAgIHJldHVybiB0aGlzLl90b3VjaEVsZW1lbnRzO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSB0b3VjaGVzXG4gICAqIEBwYXJhbSBzY3JvbGxUb3BcbiAgICogQHBhcmFtIHNjcm9sbEhlaWdodFxuICAgKiBAcGFyYW0gY2xpZW50SGVpZ2h0XG4gICAqL1xuICBzZXRUb3VjaEVsZW1lbnRzKHRvdWNoZXMsIHNjcm9sbFRvcCwgc2Nyb2xsSGVpZ2h0LCBjbGllbnRIZWlnaHQpIHtcbiAgICBPYmplY3Qua2V5cyh0b3VjaGVzKS5tYXAoKGtleSkgPT4ge1xuICAgICAgY29uc3QgdG91Y2ggPSB0b3VjaGVzW2tleV07XG4gICAgICBjb25zdCB7IGlkZW50aWZpZXIgfSA9IHRvdWNoO1xuXG4gICAgICBsZXQgdG91Y2hFbGVtZW50cyA9IHRoaXMuX3RvdWNoRWxlbWVudHM7XG4gICAgICBpZiAodG91Y2hFbGVtZW50c1tpZGVudGlmaWVyXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRvdWNoRWxlbWVudHNbaWRlbnRpZmllcl0gPSBUb3VjaEVsZW1lbnRMaXN0LmJ1aWxkVG91Y2hFbGVtZW50KHRvdWNoLCBzY3JvbGxUb3AsIHNjcm9sbEhlaWdodCwgY2xpZW50SGVpZ2h0KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zdCBhY3RpdmVUb3VjaEVsZW1lbnQgPSB0aGlzLl9nZXRGaXJzdFRvdWNoRWxlbWVudCgpO1xuICAgIHRoaXMuX3NldEFjdGl2ZVRvdWNoRWxlbWVudChhY3RpdmVUb3VjaEVsZW1lbnQpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgdXBkYXRlVG91Y2hFbGVtZW50cyh0b3VjaGVzLCBzY3JvbGxUb3AsIHNjcm9sbEhlaWdodCwgY2xpZW50SGVpZ2h0KSB7XG4gICAgT2JqZWN0LmtleXModG91Y2hlcykubWFwKChrZXkpID0+IHtcbiAgICAgIGNvbnN0IHRvdWNoID0gdG91Y2hlc1trZXldO1xuICAgICAgY29uc3QgeyBpZGVudGlmaWVyIH0gPSB0b3VjaDtcblxuICAgICAgbGV0IHRvdWNoRWxlbWVudHMgPSB0aGlzLl90b3VjaEVsZW1lbnRzO1xuICAgICAgaWYgKHRvdWNoRWxlbWVudHNbaWRlbnRpZmllcl0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0b3VjaEVsZW1lbnRzW2lkZW50aWZpZXJdID0gVG91Y2hFbGVtZW50TGlzdC5idWlsZFRvdWNoRWxlbWVudCh0b3VjaCwgc2Nyb2xsVG9wLCBzY3JvbGxIZWlnaHQsIGNsaWVudEhlaWdodCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0b3VjaEVsZW1lbnRzW2lkZW50aWZpZXJdLnVwZGF0ZSh0b3VjaCwgc2Nyb2xsVG9wLCBzY3JvbGxIZWlnaHQsIGNsaWVudEhlaWdodCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBkZWxldGVUb3VjaEVsZW1lbnRzKHRvdWNoZXMpIHtcbiAgICBPYmplY3Qua2V5cyh0b3VjaGVzKS5tYXAoKGtleSkgPT4ge1xuICAgICAgY29uc3QgdG91Y2ggPSB0b3VjaGVzW2tleV07XG4gICAgICBjb25zdCB7IGlkZW50aWZpZXIgfSA9IHRvdWNoO1xuXG4gICAgICBpZiAodGhpcy5fdG91Y2hFbGVtZW50c1tpZGVudGlmaWVyXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLl90b3VjaEVsZW1lbnRzW2lkZW50aWZpZXJdO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgeyBpZGVudGlmaWVyIH0gPSB0aGlzLl9hY3RpdmVUb3VjaEVsZW1lbnQudG91Y2g7XG4gICAgaWYgKHRoaXMuX3RvdWNoRWxlbWVudHNbaWRlbnRpZmllcl0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8g0JXRgdC70Lgg0LDQutGC0LjQstC90YvQuSBhY3RpdmVUb3VjaEVsZW1lbnQg0LHRi9C7INGD0LTQsNC70LXQvSwg0YLQviDQv9C+0LvRg9GH0LDQtdC8INC90L7QstGL0LksINC10YHQu9C4INGC0LDQutC+0Lkg0LXRgdGC0YxcbiAgICAgIGNvbnN0IGFjdGl2ZVRvdWNoRWxlbWVudCA9IHRoaXMuX2dldEZpcnN0VG91Y2hFbGVtZW50KCk7IC8vdG91Y2hFbGVtZW50IG9yIG51bGxcbiAgICAgIHRoaXMuX3NldEFjdGl2ZVRvdWNoRWxlbWVudChhY3RpdmVUb3VjaEVsZW1lbnQpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfZ2V0Rmlyc3RUb3VjaEVsZW1lbnQoKSB7XG4gICAgbGV0IHRvdWNoRWxlbWVudCA9IG51bGw7XG4gICAgT2JqZWN0LmtleXModGhpcy5fdG91Y2hFbGVtZW50cykuc29tZShrZXkgPT4gKHRvdWNoRWxlbWVudCA9IHRoaXMuX3RvdWNoRWxlbWVudHNba2V5XSwgdHJ1ZSkpO1xuICAgIHJldHVybiB0b3VjaEVsZW1lbnQ7XG4gIH1cblxuICBfc2V0QWN0aXZlVG91Y2hFbGVtZW50KHRvdWNoRWxlbWVudCkge1xuICAgIHRoaXMuX3ByZXZBY3RpdmVUb3VjaEVsZW1lbnQgPSB0aGlzLmFjdGl2ZVRvdWNoRWxlbWVudDtcbiAgICB0aGlzLl9hY3RpdmVUb3VjaEVsZW1lbnQgPSB0b3VjaEVsZW1lbnQ7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG4gIHN0YXRpYyBidWlsZFRvdWNoRWxlbWVudCh0b3VjaCwgc2Nyb2xsVG9wLCBzY3JvbGxIZWlnaHQsIGNsaWVudEhlaWdodCkge1xuICAgIGNvbnN0IHsgaWRlbnRpZmllciB9ID0gdG91Y2g7XG4gICAgY29uc3QgdmFsdWUgPSBuZXcgVG91Y2godG91Y2gpO1xuICAgIGNvbnN0IGVsZW1lbnQgPSBuZXcgRWxlbWVudChzY3JvbGxUb3AsIHNjcm9sbEhlaWdodCwgY2xpZW50SGVpZ2h0KTtcbiAgICByZXR1cm4gKG5ldyBUb3VjaEVsZW1lbnQodmFsdWUsIGVsZW1lbnQpKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUb3VjaEVsZW1lbnRMaXN0O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBqcy9QdWxsVG9SZWZyZXNoL1RvdWNoRWxlbWVudExpc3QuanMiLCJpbXBvcnQgVG91Y2ggZnJvbSAnLi9Ub3VjaCc7XG5pbXBvcnQgRWxlbWVudCBmcm9tICcuL0VsZW1lbnQnO1xuaW1wb3J0IHsgRElSRUNUSU9OIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuXG5jbGFzcyBUb3VjaEVsZW1lbnQge1xuICAvKipcbiAgICpcbiAgICogQHBhcmFtIHRvdWNoIHtUb3VjaH1cbiAgICogQHBhcmFtIGVsZW1lbnQge0VsZW1lbnR9XG4gICAqL1xuICBjb25zdHJ1Y3Rvcih0b3VjaCwgZWxlbWVudCkge1xuICAgIHRoaXMudG91Y2ggPSB0b3VjaDtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSB0b3VjaCB7VG91Y2h9XG4gICAqIEBwYXJhbSBzY3JvbGxUb3BcbiAgICogQHBhcmFtIHNjcm9sbEhlaWdodFxuICAgKiBAcGFyYW0gY2xpZW50SGVpZ2h0XG4gICAqL1xuICB1cGRhdGUodG91Y2gsIHNjcm9sbFRvcCwgc2Nyb2xsSGVpZ2h0LCBjbGllbnRIZWlnaHQpIHtcbiAgICB0aGlzLnRvdWNoLnVwZGF0ZSh0b3VjaCk7XG4gICAgdGhpcy5lbGVtZW50LnVwZGF0ZSh7XG4gICAgICBzY3JvbGxUb3AsXG4gICAgICBzY3JvbGxIZWlnaHQsXG4gICAgICBjbGllbnRIZWlnaHRcbiAgICB9KTtcbiAgfVxuXG4gIGdldCBtb3Rpb24oKSB7XG4gICAgY29uc3QgbW92ZVRvdWNoVG9wWSA9IH5+KHRoaXMudG91Y2guY3VycmVudFkgLSB0aGlzLnRvdWNoLnN0YXJ0WSk7IC8vcm91bmRcbiAgICBjb25zdCBkaXN0YW5jZVRvcCA9IG1vdmVUb3VjaFRvcFkgLSB0aGlzLmVsZW1lbnQuc2Nyb2xsVG9wO1xuXG4gICAgY29uc3QgbW92ZVRvdWNoQm90dG9tWSA9IH5tb3ZlVG91Y2hUb3BZICsgMTsgLy9yZXZlcnNlXG4gICAgY29uc3Qgc2Nyb2xsQm90dG9tID0gdGhpcy5lbGVtZW50LnNjcm9sbEhlaWdodCAtICh0aGlzLmVsZW1lbnQuc2Nyb2xsVG9wICsgdGhpcy5lbGVtZW50LmNsaWVudEhlaWdodCk7XG4gICAgY29uc3QgZGlzdGFuY2VCb3R0b20gPSBtb3ZlVG91Y2hCb3R0b21ZIC0gc2Nyb2xsQm90dG9tO1xuXG4gICAgaWYgKGRpc3RhbmNlVG9wID4gMCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZGlzdGFuY2U6IGRpc3RhbmNlVG9wLFxuICAgICAgICBkaXJlY3Rpb246IERJUkVDVElPTi5VUCxcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGRpc3RhbmNlQm90dG9tID4gMCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZGlzdGFuY2U6IH5kaXN0YW5jZUJvdHRvbSArIDEsXG4gICAgICAgIGRpcmVjdGlvbjogRElSRUNUSU9OLkRPV04sXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGRpc3RhbmNlOiBudWxsLFxuICAgICAgICBkaXJlY3Rpb246IERJUkVDVElPTi5OT05FLFxuICAgICAgfTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVG91Y2hFbGVtZW50O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBqcy9QdWxsVG9SZWZyZXNoL1RvdWNoRWxlbWVudC5qcyIsImV4cG9ydCBjb25zdCBpc09iamVjdCA9IGZ1bmN0aW9uIGlzT2JqZWN0KG9iaikge1xuICByZXR1cm4gb2JqICYmIHR5cGVvZiBvYmogPT09ICdvYmplY3QnICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0O1xufTtcblxuZXhwb3J0IGNvbnN0IGlzQXJyYXkgPSBmdW5jdGlvbiBpc0FycmF5KG9iaikge1xuICByZXR1cm4gb2JqICYmIHR5cGVvZiBvYmogPT09ICdvYmplY3QnICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gQXJyYXk7XG59O1xuXG5leHBvcnQgY29uc3QgaXNTdHJpbmcgPSBmdW5jdGlvbiBpc1N0cmluZyhvYmopIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmogPT09ICdzdHJpbmcnIHx8ICh0eXBlb2Ygb2JqID09PSAnb2JqZWN0JyAmJiBvYmouY29uc3RydWN0b3IgPT09IFN0cmluZyk7XG59O1xuXG5leHBvcnQgY29uc3QgaXNQcm9taXNlID0gZnVuY3Rpb24gaXNQcm9taXNlKG9iaikge1xuICByZXR1cm4gISFvYmogJiYgKHR5cGVvZiBvYmogPT09ICdvYmplY3QnIHx8IHR5cGVvZiBvYmogPT09ICdmdW5jdGlvbicpICYmIHR5cGVvZiBvYmoudGhlbiA9PT0gJ2Z1bmN0aW9uJztcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGpzL1B1bGxUb1JlZnJlc2gvdXRpbHMvY2hlY2suanMiLCJjb25zdCBnZXRUcmFuc2xhdGVZU3R5bGUgPSBmdW5jdGlvbiBnZXRUcmFuc2xhdGVZU3R5bGUoZGlzdGFuY2UpIHtcbiAgcmV0dXJuIChcbiAgICBgLXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgke2Rpc3RhbmNlfXB4KTtgICtcbiAgICBgLW1zLXRyYW5zZm9ybTp0cmFuc2xhdGVZKCR7ZGlzdGFuY2V9cHgpO2AgK1xuICAgIGB0cmFuc2Zvcm06dHJhbnNsYXRlWSgke2Rpc3RhbmNlfXB4KTtgXG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnZXRUcmFuc2xhdGVZU3R5bGU7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGpzL1B1bGxUb1JlZnJlc2gvdXRpbHMvZ2V0VHJhbnNsYXRlWVN0eWxlLmpzIiwiY29uc3QgZ2V0VHJhbnNpdGlvblN0eWxlID0gZnVuY3Rpb24gZ2V0VHJhbnNpdGlvblN0eWxlKGR1cmF0aW9uID0gMzAwLCBkZWxheSA9IDApIHtcbiAgcmV0dXJuIChcbiAgICBgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiR7ZHVyYXRpb259bXM7YCArXG4gICAgYHRyYW5zaXRpb24tZHVyYXRpb246JHtkdXJhdGlvbn1tcztgICtcbiAgICBgLXdlYmtpdC10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjMzLC42NiwuNjYsMSk7YCArXG4gICAgYHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllciguMzMsLjY2LC42NiwxKTtgICtcbiAgICBgLXdlYmtpdC10cmFuc2l0aW9uLWRlbGF5OiR7ZGVsYXl9bXM7YCArXG4gICAgYHRyYW5zaXRpb24tZGVsYXk6JHtkZWxheX1tcztgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldFRyYW5zaXRpb25TdHlsZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8ganMvUHVsbFRvUmVmcmVzaC91dGlscy9nZXRUcmFuc2l0aW9uU3R5bGUuanMiLCJjb25zdCByZXNpc3RhbmNlRGlzdGFuY2UgPSBmdW5jdGlvbiByZXNpc3RhbmNlRGlzdGFuY2UoZGlzdGFuY2UsIHJlc2lzdGFuY2UgPSAxKSB7XG4gIGNvbnN0IHJlc0Rpc3QgPSB+fihkaXN0YW5jZSAvIHJlc2lzdGFuY2UpOyAvL3JvdW5kXG5cbiAgbGV0IHJlc2lzdGFuY2VEaXN0YW5jZUFicyA9IHJlc0Rpc3Q7XG4gIGlmIChyZXNpc3RhbmNlRGlzdGFuY2VBYnMgPCAwKSB7XG4gICAgcmVzaXN0YW5jZURpc3RhbmNlQWJzID0gfnJlc2lzdGFuY2VEaXN0YW5jZUFicyArIDE7IC8vcmV2ZXJzZVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBkaXN0YW5jZTogcmVzRGlzdCxcbiAgICBkaXN0YW5jZUFiczogcmVzaXN0YW5jZURpc3RhbmNlQWJzLFxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCByZXNpc3RhbmNlRGlzdGFuY2U7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGpzL1B1bGxUb1JlZnJlc2gvdXRpbHMvcmVzaXN0YW5jZURpc3RhbmNlLmpzIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0E7Ozs7Ozs7Ozs7Ozs7OztBQzdEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkE7QUFDQTs7Ozs7O0FBTUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQUdBOzs7Ozs7Ozs7Ozs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFIQTs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7Ozs7OztBQ3RDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUtBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFLQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWEE7QUFBQTtBQUNBO0FBQ0E7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFuQkE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBdUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQXJRQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUEyTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBNkJBOzs7Ozs7Ozs7Ozs7Ozs7QUM1U0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7OztBQUNBOzs7O0FBQ0E7QUFLQTtBQUtBOzs7Ozs7O0FBS0E7Ozs7Ozs7QUFPQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVRBO0FBQ0E7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUFyRkE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7O0FBNkVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFHQTs7Ozs7Ozs7Ozs7Ozs7O0FDdkdBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBOzs7Ozs7QUFHQTs7Ozs7Ozs7Ozs7Ozs7O0FDMURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDZEE7QUFDQTtBQUtBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDUkE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQU9BO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDVkE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTs7O0EiLCJzb3VyY2VSb290IjoiIn0=