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
var DIRECTION = exports.DIRECTION = {
  UP: 'UP',
  DOWN: 'DOWN',
  NONE: 'NONE'
};

/***/ }),
/* 1 */
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
/* 2 */
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
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(4);

var _PullToRefresh = __webpack_require__(5);

var _PullToRefresh2 = _interopRequireDefault(_PullToRefresh);

var _constants = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var _constants = __webpack_require__(0);

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

var _Touch = __webpack_require__(1);

var _Touch2 = _interopRequireDefault(_Touch);

var _Element = __webpack_require__(2);

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

var _Touch = __webpack_require__(1);

var _Touch2 = _interopRequireDefault(_Touch);

var _Element = __webpack_require__(2);

var _Element2 = _interopRequireDefault(_Element);

var _constants = __webpack_require__(0);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIDY0NDVjOTgxODZiMWRkY2RlYjE2Iiwid2VicGFjazovLy9qcy9QdWxsVG9SZWZyZXNoL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vanMvUHVsbFRvUmVmcmVzaC9Ub3VjaC5qcyIsIndlYnBhY2s6Ly8vanMvUHVsbFRvUmVmcmVzaC9FbGVtZW50LmpzIiwid2VicGFjazovLy9qcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zdHlsZS9zdHlsZS5jc3M/NzJhMiIsIndlYnBhY2s6Ly8vanMvUHVsbFRvUmVmcmVzaC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vanMvUHVsbFRvUmVmcmVzaC9Ub3VjaEVsZW1lbnRMaXN0LmpzIiwid2VicGFjazovLy9qcy9QdWxsVG9SZWZyZXNoL1RvdWNoRWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vanMvUHVsbFRvUmVmcmVzaC91dGlscy9jaGVjay5qcyIsIndlYnBhY2s6Ly8vanMvUHVsbFRvUmVmcmVzaC91dGlscy9nZXRUcmFuc2xhdGVZU3R5bGUuanMiLCJ3ZWJwYWNrOi8vL2pzL1B1bGxUb1JlZnJlc2gvdXRpbHMvZ2V0VHJhbnNpdGlvblN0eWxlLmpzIiwid2VicGFjazovLy9qcy9QdWxsVG9SZWZyZXNoL3V0aWxzL3Jlc2lzdGFuY2VEaXN0YW5jZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAzKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA2NDQ1Yzk4MTg2YjFkZGNkZWIxNiIsImV4cG9ydCBjb25zdCBESVJFQ1RJT04gPSB7XG4gIFVQOiAnVVAnLFxuICBET1dOOiAnRE9XTicsXG4gIE5PTkU6ICdOT05FJyxcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8ganMvUHVsbFRvUmVmcmVzaC9jb25zdGFudHMuanMiLCJjbGFzcyBUb3VjaCB7XG4gIC8vIHN0YXJ0WTtcbiAgLy8gY3VycmVudFk7XG4gIC8vIGlkZW50aWZpZXI7XG5cbiAgY29uc3RydWN0b3IodG91Y2gpIHtcbiAgICB0aGlzLnN0YXJ0WSA9IHRoaXMuY3VycmVudFkgPSB0b3VjaC5jbGllbnRZO1xuICAgIHRoaXMuaWRlbnRpZmllciA9IHRvdWNoLmlkZW50aWZpZXI7XG4gIH1cblxuICB1cGRhdGUodG91Y2gpe1xuICAgIHRoaXMuY3VycmVudFkgPSB0b3VjaC5jbGllbnRZO1xuICB9XG5cbiAgLy8gcmVzZXQoKSB7XG4gIC8vICAgdGhpcy5zdGFydFkgPSAwO1xuICAvLyAgIHRoaXMuY3VycmVudFkgPSAwO1xuICAvLyAgIHRoaXMuaWRlbnRpZmllciA9IG51bGw7XG4gIC8vIH1cbn1cbmV4cG9ydCBkZWZhdWx0IFRvdWNoO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBqcy9QdWxsVG9SZWZyZXNoL1RvdWNoLmpzIiwiY2xhc3MgRWxlbWVudCB7XG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0gc2Nyb2xsVG9wIHtOdW1iZXJ9XG4gICAqIEBwYXJhbSBzY3JvbGxIZWlnaHQge051bWJlcn1cbiAgICogQHBhcmFtIGNsaWVudEhlaWdodCB7TnVtYmVyfVxuICAgKi9cbiAgY29uc3RydWN0b3Ioc2Nyb2xsVG9wLCBzY3JvbGxIZWlnaHQsIGNsaWVudEhlaWdodCkge1xuICAgIHRoaXMuc2Nyb2xsVG9wID0gc2Nyb2xsVG9wO1xuICAgIHRoaXMuc2Nyb2xsSGVpZ2h0ID0gc2Nyb2xsSGVpZ2h0O1xuICAgIHRoaXMuY2xpZW50SGVpZ2h0ID0gY2xpZW50SGVpZ2h0O1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSBlbGVtZW50IHtFbGVtZW50fVxuICAgKi9cbiAgdXBkYXRlKGVsZW1lbnQpIHtcbiAgICB0aGlzLnNjcm9sbFRvcCA9IGVsZW1lbnQuc2Nyb2xsVG9wO1xuICAgIHRoaXMuc2Nyb2xsSGVpZ2h0ID0gZWxlbWVudC5zY3JvbGxIZWlnaHQ7XG4gICAgdGhpcy5jbGllbnRIZWlnaHQgPSBlbGVtZW50LmNsaWVudEhlaWdodDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFbGVtZW50O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGpzL1B1bGxUb1JlZnJlc2gvRWxlbWVudC5qcyIsImltcG9ydCAnLi4vc3R5bGUvc3R5bGUuY3NzJztcbmltcG9ydCBQdWxsVG9SZWZyZXNoIGZyb20gJy4vUHVsbFRvUmVmcmVzaCc7XG5pbXBvcnQgeyBESVJFQ1RJT04gfSBmcm9tICcuL1B1bGxUb1JlZnJlc2gvY29uc3RhbnRzJztcblxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgc3RhcnR1cCgpO1xufTtcblxuY29uc3QgcmVzaXN0YW5jZSA9IDI7IC8v0L7RgdC70LDQsdC70LXQvdC40LVcbmNvbnN0IGRpc3RhbmNlID0gNTA7IC8vINC00LjRgdGC0LDQvdGG0LjRj1xuXG4vLyBjb25zdCBjbGFzc3NOYW1lcyA9IHtcbi8vICAgQ09NTU9OOiBbXCJvbnJlZnJlc2hcIl0sXG4vLyAgIFtESVJFQ1RJT04uVVBdOiBbXCJvbnJlZnJlc2gtdXBcIl0sXG4vLyAgIFtESVJFQ1RJT04uRE9XTl06IFtcIm9ucmVmcmVzaC1kb3duXCJdLFxuLy8gfTtcblxuZnVuY3Rpb24gc3RhcnR1cCgpIHtcbiAgY29uc3QgZWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHRyLWxpc3RcIik7XG4gIGNvbnN0IHN3aXBlID0gbmV3IFB1bGxUb1JlZnJlc2goZWxlbSwgZGlzdGFuY2UsIHJlc2lzdGFuY2UpO1xuICBzd2lwZS5hZGRMaXN0ZW5lcigpO1xuXG4gIHN3aXBlLm9uUmVmcmVzaChmdW5jdGlvbiAoZGlzdGFuY2UpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIC8vINC/0LXRgNC10LLQtdC00ZHRgiDQv9GA0L7QvNC40YEg0LIg0YHQvtGB0YLQvtGP0L3QuNC1IGZ1bGZpbGxlZCDRgSDRgNC10LfRg9C70YzRgtCw0YLQvtC8IFwicmVzdWx0XCJcbiAgICAgICAgcmVzb2x2ZShcInJlc3VsdCBcIiArIGRpc3RhbmNlKTtcbiAgICAgIH0sIDIwMDApO1xuXG4gICAgfSk7XG4gIH0pO1xuXG4gIHN3aXBlLmNhbGxiYWNrcyh7XG4gICAgb25Ub3VjaE1vdmU6IGZ1bmN0aW9uICh0b3VjaEVsZW1lbnQpIHtcbiAgICAgIGNvbnN0IHsgbW90aW9uIH0gPSB0b3VjaEVsZW1lbnQ7XG4gICAgICBjb25zb2xlLmxvZyhtb3Rpb24uZGlzdGFuY2UpO1xuICAgIH1cbiAgfSk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8ganMvaW5kZXguanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3R5bGUvc3R5bGUuY3NzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBUb3VjaEVsZW1lbnRMaXN0IGZyb20gJy4vVG91Y2hFbGVtZW50TGlzdCc7XG5pbXBvcnQgeyBESVJFQ1RJT04gfSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQge1xuICBpc1Byb21pc2UsXG4gIGlzQXJyYXksXG4gIGlzU3RyaW5nLFxuICBpc09iamVjdCxcbn0gZnJvbSAnLi91dGlscy9jaGVjayc7XG5pbXBvcnQgZ2V0VHJhbnNsYXRlWVN0eWxlIGZyb20gJy4vdXRpbHMvZ2V0VHJhbnNsYXRlWVN0eWxlJztcbmltcG9ydCBnZXRUcmFuc2l0aW9uU3R5bGUgZnJvbSAnLi91dGlscy9nZXRUcmFuc2l0aW9uU3R5bGUnO1xuaW1wb3J0IHJlc2lzdGFuY2VEaXN0YW5jZSBmcm9tICcuL3V0aWxzL3Jlc2lzdGFuY2VEaXN0YW5jZSc7XG5cbmNvbnN0IGNsYXNzTmFtZXMgPSB7XG4gIENPTU1PTjogW1wib25yZWZyZXNoXCJdLFxuICBbRElSRUNUSU9OLlVQXTogW1wib25yZWZyZXNoLXVwXCJdLFxuICBbRElSRUNUSU9OLkRPV05dOiBbXCJvbnJlZnJlc2gtZG93blwiXSxcbn07XG5cbmNsYXNzIFB1bGxUb1JlZnJlc2gge1xuICBjb25zdHJ1Y3RvcihlbGVtLCBkaXN0YW5jZSA9IDUwLCByZXNpc3RhbmNlID0gMiwgY2xhc3NOYW1lcyA9IHt9KSB7XG4gICAgdGhpcy5saXN0RWxlbWVudCA9IGVsZW07XG4gICAgdGhpcy5kaXN0YW5jZSA9IGRpc3RhbmNlO1xuICAgIHRoaXMucmVzaXN0YW5jZSA9IHJlc2lzdGFuY2U7XG4gICAgdGhpcy5jbGFzc05hbWVzID0gY2xhc3NOYW1lcztcbiAgICB0aGlzLl9ncmFuZHBhID0gZWxlbS5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgdGhpcy5fdG91Y2hFbGVtZW50cyA9IG5ldyBUb3VjaEVsZW1lbnRMaXN0KCk7XG4gICAgdGhpcy5faXNBY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLl9kaXN0YW5jZVJldmVyc2UgPSB+ZGlzdGFuY2UgKyAxOyAvLyByZXZlcnNlXG4gICAgdGhpcy5faXNSZWZyZXNoQWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5faGFuZGxlU3RhcnQgPSB0aGlzLl9oYW5kbGVTdGFydC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX2hhbmRsZU1vdmUgPSB0aGlzLl9oYW5kbGVNb3ZlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5faGFuZGxlRW5kID0gdGhpcy5faGFuZGxlRW5kLmJpbmQodGhpcyk7XG4gICAgdGhpcy5faGFuZGxlQ2FuY2VsID0gdGhpcy5faGFuZGxlQ2FuY2VsLmJpbmQodGhpcyk7XG4gICAgdGhpcy5faGFuZGxlVHJhbnNpdGlvbkVuZCA9IHRoaXMuX2hhbmRsZVRyYW5zaXRpb25FbmQuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGdldCBjbGFzc05hbWVzKCkge1xuICAgIHJldHVybiB0aGlzLl9jbGFzc05hbWVzO1xuICB9XG5cbiAgc2V0IGNsYXNzTmFtZXModmFsdWUpIHtcbiAgICBpZiAoIWlzT2JqZWN0KHZhbHVlKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjbGFzc05hbWVzIG11c3QgYmUgYSBvYmplY3QnKTtcbiAgICB9XG4gICAgdGhpcy5fY2xhc3NOYW1lcyA9IHRoaXMuX21lcmdlQ2xhc3NOYW1lcyh2YWx1ZSk7XG4gIH1cblxuICBfbWVyZ2VDbGFzc05hbWVzKGNsc05hbWVzKSB7XG4gICAgbGV0IHJlc3VsdCA9IHt9O1xuICAgIE9iamVjdC5rZXlzKGNsYXNzTmFtZXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgY29uc3QgdmFsdWUgPSBjbGFzc05hbWVzW2tleV07XG4gICAgICBjb25zdCBjbHMgPSBjbHNOYW1lc1trZXldO1xuICAgICAgaWYgKGlzQXJyYXkoY2xzKSkge1xuICAgICAgICByZXN1bHRba2V5XSA9IFsuLi52YWx1ZSwgLi4uY2xzXTtcbiAgICAgIH0gZWxzZSBpZiAoaXNTdHJpbmcoY2xzKSkge1xuICAgICAgICByZXN1bHRba2V5XSA9IFsuLi52YWx1ZSwgY2xzXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdFtrZXldID0gdmFsdWU7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGFkZExpc3RlbmVyKCkge1xuICAgIHRoaXMubGlzdEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgdGhpcy5faGFuZGxlU3RhcnQsIGZhbHNlKTtcbiAgICB0aGlzLmxpc3RFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIiwgdGhpcy5faGFuZGxlTW92ZSwgZmFsc2UpO1xuICAgIHRoaXMubGlzdEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsIHRoaXMuX2hhbmRsZUVuZCwgZmFsc2UpO1xuICAgIHRoaXMubGlzdEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoY2FuY2VsXCIsIHRoaXMuX2hhbmRsZUNhbmNlbCwgZmFsc2UpO1xuICB9XG5cbiAgcmVtb3ZlTGlzdGVuZXIoKSB7XG4gICAgdGhpcy5saXN0RWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCB0aGlzLl9oYW5kbGVTdGFydCwgZmFsc2UpO1xuICAgIHRoaXMubGlzdEVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLCB0aGlzLl9oYW5kbGVNb3ZlLCBmYWxzZSk7XG4gICAgdGhpcy5saXN0RWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIiwgdGhpcy5faGFuZGxlRW5kLCBmYWxzZSk7XG4gICAgdGhpcy5saXN0RWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2hjYW5jZWxcIiwgdGhpcy5faGFuZGxlQ2FuY2VsLCBmYWxzZSk7XG4gICAgdGhpcy5fcmVtb3ZlTGlzdGVuZXJUcmFuc2l0aW9uZW5kKCk7XG4gIH1cblxuICBfYWRkTGlzdGVuZXJUcmFuc2l0aW9uZW5kKCkge1xuICAgIHRoaXMubGlzdEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInRyYW5zaXRpb25lbmRcIiwgdGhpcy5faGFuZGxlVHJhbnNpdGlvbkVuZCwgZmFsc2UpO1xuICAgIHRoaXMubGlzdEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIndlYmtpdFRyYW5zaXRpb25FbmRcIiwgdGhpcy5faGFuZGxlVHJhbnNpdGlvbkVuZCwgZmFsc2UpO1xuICAgIHRoaXMubGlzdEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm9UcmFuc2l0aW9uRW5kXCIsIHRoaXMuX2hhbmRsZVRyYW5zaXRpb25FbmQsIGZhbHNlKTtcbiAgICB0aGlzLmxpc3RFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJvdHJhbnNpdGlvbmVuZFwiLCB0aGlzLl9oYW5kbGVUcmFuc2l0aW9uRW5kLCBmYWxzZSk7XG4gIH1cblxuICBfcmVtb3ZlTGlzdGVuZXJUcmFuc2l0aW9uZW5kKCkge1xuICAgIHRoaXMubGlzdEVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRyYW5zaXRpb25lbmRcIiwgdGhpcy5faGFuZGxlVHJhbnNpdGlvbkVuZCwgZmFsc2UpO1xuICAgIHRoaXMubGlzdEVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIndlYmtpdFRyYW5zaXRpb25FbmRcIiwgdGhpcy5faGFuZGxlVHJhbnNpdGlvbkVuZCwgZmFsc2UpO1xuICAgIHRoaXMubGlzdEVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm9UcmFuc2l0aW9uRW5kXCIsIHRoaXMuX2hhbmRsZVRyYW5zaXRpb25FbmQsIGZhbHNlKTtcbiAgICB0aGlzLmxpc3RFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJvdHJhbnNpdGlvbmVuZFwiLCB0aGlzLl9oYW5kbGVUcmFuc2l0aW9uRW5kLCBmYWxzZSk7XG4gIH1cblxuICBjYWxsYmFja3MoY2JzKSB7XG4gICAgaWYgKGNicy5oYXNPd25Qcm9wZXJ0eShcIm9uVG91Y2hTdGFydFwiKSkge1xuICAgICAgdGhpcy5vblRvdWNoU3RhcnQgPSBjYnMub25Ub3VjaFN0YXJ0O1xuICAgIH1cbiAgICBpZiAoY2JzLmhhc093blByb3BlcnR5KFwib25Ub3VjaE1vdmVcIikpIHtcbiAgICAgIHRoaXMub25Ub3VjaE1vdmUgPSBjYnMub25Ub3VjaE1vdmU7XG4gICAgfVxuICAgIGlmIChjYnMuaGFzT3duUHJvcGVydHkoXCJvblRvdWNoRW5kXCIpKSB7XG4gICAgICB0aGlzLm9uVG91Y2hFbmQgPSBjYnMub25Ub3VjaEVuZDtcbiAgICB9XG4gICAgaWYgKGNicy5oYXNPd25Qcm9wZXJ0eShcIm9uVG91Y2hDYW5jZWxcIikpIHtcbiAgICAgIHRoaXMub25Ub3VjaENhbmNlbCA9IGNicy5vblRvdWNoQ2FuY2VsO1xuICAgIH1cbiAgfVxuXG4gIG9uUmVmcmVzaChmdW5jKSB7XG4gICAgaWYgKHR5cGVvZiBmdW5jICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignb25SZWZyZXNoIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuICAgIH1cbiAgICB0aGlzLm9uUmVmcmVzaCA9IGZ1bmM7XG4gIH1cblxuICBfaGFuZGxlU3RhcnQoZXZ0KSB7XG4gICAgY29uc3QgdG91Y2hlcyA9IGV2dC5jaGFuZ2VkVG91Y2hlcztcblxuICAgIGNvbnN0IHtcbiAgICAgICAgICAgIHNjcm9sbFRvcCxcbiAgICAgICAgICAgIHNjcm9sbEhlaWdodCxcbiAgICAgICAgICAgIGNsaWVudEhlaWdodCxcbiAgICAgICAgICB9ID0gdGhpcy5fZ3JhbmRwYTtcblxuICAgIHRoaXMuX3RvdWNoRWxlbWVudHMuc2V0VG91Y2hFbGVtZW50cyh0b3VjaGVzLCBzY3JvbGxUb3AsIHNjcm9sbEhlaWdodCwgY2xpZW50SGVpZ2h0KTtcblxuICAgIGlmICh0aGlzLmhhc093blByb3BlcnR5KFwib25Ub3VjaFN0YXJ0XCIpKSB7XG4gICAgICB0aGlzLm9uVG91Y2hTdGFydCh0aGlzLmN1cnJlbnRUb3VjaEVsZW1lbnQsIHRoaXMuX3RvdWNoRWxlbWVudHMpO1xuICAgIH1cbiAgfVxuXG4gIF9oYW5kbGVNb3ZlKGV2dCkge1xuICAgIGNvbnN0IHRvdWNoZXMgPSBldnQuY2hhbmdlZFRvdWNoZXM7XG4gICAgY29uc3QgdG91Y2hFbGVtZW50cyA9IHRoaXMuX3VwZGF0ZVRvdWNoRWxlbWVudHModG91Y2hlcyk7XG4gICAgY29uc3QgdG91Y2hFbGVtZW50ID0gdG91Y2hFbGVtZW50cy5hY3RpdmVUb3VjaEVsZW1lbnQ7XG4gICAgY29uc3QgeyBtb3Rpb24gfSA9IHRvdWNoRWxlbWVudDtcblxuICAgIGlmIChtb3Rpb24uZGlyZWN0aW9uID09PSBESVJFQ1RJT04uTk9ORSkge1xuICAgICAgaWYgKHRoaXMuX2lzQWN0aXZlKSB7XG4gICAgICAgIHRoaXMuX2lzQWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX3Jlc2V0U3R5bGUoKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gbW92ZSBVUCBvciBET1dOXG4gICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGlmICghdGhpcy5faXNSZWZyZXNoQWN0aXZlKSB7XG4gICAgICAgIHRoaXMuX2lzQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fcmVtb3ZlTGlzdGVuZXJUcmFuc2l0aW9uZW5kKCk7XG4gICAgICAgIGNvbnN0IHsgZGlzdGFuY2UgfSA9IHJlc2lzdGFuY2VEaXN0YW5jZShtb3Rpb24uZGlzdGFuY2UsIHRoaXMucmVzaXN0YW5jZSk7XG4gICAgICAgIHRoaXMuX3NldFRyYW5zbGF0ZVlTdHlsZShkaXN0YW5jZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaGFzT3duUHJvcGVydHkoXCJvblRvdWNoTW92ZVwiKSkge1xuICAgICAgdGhpcy5vblRvdWNoTW92ZSh0b3VjaEVsZW1lbnQsIHRoaXMuX3RvdWNoRWxlbWVudHMpO1xuICAgIH1cbiAgfVxuXG4gIF91cGRhdGVUb3VjaEVsZW1lbnRzKHRvdWNoZXMpIHtcbiAgICBjb25zdCB7XG4gICAgICAgICAgICBzY3JvbGxUb3AsXG4gICAgICAgICAgICBzY3JvbGxIZWlnaHQsXG4gICAgICAgICAgICBjbGllbnRIZWlnaHQsXG4gICAgICAgICAgfSA9IHRoaXMuX2dyYW5kcGE7XG5cbiAgICByZXR1cm4gdGhpcy5fdG91Y2hFbGVtZW50cy51cGRhdGVUb3VjaEVsZW1lbnRzKHRvdWNoZXMsIHNjcm9sbFRvcCwgc2Nyb2xsSGVpZ2h0LCBjbGllbnRIZWlnaHQpO1xuICB9XG5cbiAgX2hhbmRsZUVuZChldnQpIHtcbiAgICBjb25zdCB0b3VjaEVsZW1lbnQgPSB0aGlzLl9oYW5kbGVSZW1vdmUoZXZ0KTtcblxuICAgIGlmICh0b3VjaEVsZW1lbnQgIT09IG51bGwgJiYgdGhpcy5oYXNPd25Qcm9wZXJ0eShcIm9uVG91Y2hFbmRcIikpIHtcbiAgICAgIHRoaXMub25Ub3VjaEVuZCh0b3VjaEVsZW1lbnQsIHRoaXMuX3RvdWNoRWxlbWVudHMpO1xuICAgIH1cbiAgfVxuXG4gIF9oYW5kbGVDYW5jZWwoZXZ0KSB7XG4gICAgY29uc3QgdG91Y2hFbGVtZW50ID0gdGhpcy5faGFuZGxlUmVtb3ZlKGV2dCk7XG5cbiAgICBpZiAodG91Y2hFbGVtZW50ICE9PSBudWxsICYmIHRoaXMuaGFzT3duUHJvcGVydHkoXCJvblRvdWNoQ2FuY2VsXCIpKSB7XG4gICAgICB0aGlzLm9uVG91Y2hDYW5jZWwodG91Y2hFbGVtZW50LCB0aGlzLl90b3VjaEVsZW1lbnRzKTtcbiAgICB9XG4gIH1cblxuICBfaGFuZGxlUmVtb3ZlKGV2dCkge1xuICAgIGNvbnN0IHRvdWNoZXMgPSBldnQuY2hhbmdlZFRvdWNoZXM7IC8vINGC0LUsINC60L7RgtC+0YDRi9C1INC/0L7QutC40L3Rg9C70Lgg0Y3QutGA0LDQvVxuXG4gICAgLy8g0KPQtNCw0LvRj9C10Lwg0LLRgdC1INC90LXQsNC60YLQuNCy0L3Ri9C1ICjQvtGC0L7RgNCy0LDQvdC90YvQtSkgdG91Y2gsINCyINGC0L7QvCDRh9C40YHQu9C1INC4INCw0LrRgtC40LLQvdGL0LkuXG4gICAgY29uc3QgdG91Y2hFbGVtZW50cyA9IHRoaXMuX3RvdWNoRWxlbWVudHMuZGVsZXRlVG91Y2hFbGVtZW50cyh0b3VjaGVzKTtcblxuICAgIC8vINCV0YHQu9C4INCyINC00LDQvdC90YvQuSDQvNC+0LzQtdC90YIg0YHQutGA0L7Qu9C40Lwg0YHQv9C40YHQvtC6LCDRgtC+INGA0LXQsNCz0LjRgNC+0LLQsNGC0Ywg0L3QtSDQvdCw0LTQviAo0L3QtdGCINCyINC00LDQvdC90YvQuSDQvNC+0LzQtdC90YIg0Y3RhNGE0LXQutGC0LBcbiAgICAvLyBwdWxsLXRvLXJlZnJlc2gpLlxuICAgIGlmICghdGhpcy5faXNBY3RpdmUpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IHsgYWN0aXZlVG91Y2hFbGVtZW50LCBwcmV2QWN0aXZlVG91Y2hFbGVtZW50LCB9ID0gdG91Y2hFbGVtZW50cztcblxuICAgIGlmIChhY3RpdmVUb3VjaEVsZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8vINCS0YHQtSDQv9Cw0LvRjNGG0Ysg0L/QvtC60LjQvdGD0LvQuCDRjdC60YDQsNC9XG4gICAgLy8g0L/RgNC+0YbQtdC00YPRgNCwINC40L3QuNGG0LjQsNC70LjQt9Cw0YbQuNC4INC00L7QsdCw0LLQu9C10L3QuNGPINC60LvQsNGB0YHQvtCyINC4INC+0LHRgNCw0LHQvtGC0YfQuNC60L7QslxuICAgIGNvbnN0IHsgbW90aW9uIH0gPSBwcmV2QWN0aXZlVG91Y2hFbGVtZW50O1xuXG4gICAgY29uc3QgeyBkaXN0YW5jZSwgZGlzdGFuY2VBYnMgfSA9IHJlc2lzdGFuY2VEaXN0YW5jZShtb3Rpb24uZGlzdGFuY2UsIHRoaXMucmVzaXN0YW5jZSk7XG5cbiAgICBpZiAoZGlzdGFuY2VBYnMgPj0gdGhpcy5kaXN0YW5jZSkge1xuICAgICAgY29uc3QgZGlyZWN0aW9uID0gbW90aW9uLmRpcmVjdGlvbjtcbiAgICAgIGxldCBkaXN0ID0gdGhpcy5kaXN0YW5jZTtcbiAgICAgIGlmIChkaXJlY3Rpb24gPT09IERJUkVDVElPTi5ET1dOKSB7XG4gICAgICAgIGRpc3QgPSB0aGlzLl9kaXN0YW5jZVJldmVyc2U7XG4gICAgICB9XG4gICAgICBjb25zdCBjbGFzc05hbWVzID0gdGhpcy5fZ2V0Q2xhc3NOYW1lc0J5QmlyZWN0aW9uKGRpcmVjdGlvbik7XG5cbiAgICAgIHRoaXMuX2FkZENsYXNzKGNsYXNzTmFtZXMpO1xuICAgICAgdGhpcy5fc2V0VHJhbnNpdGlvblN0eWxlKGRpc3QpO1xuICAgICAgdGhpcy5fb25SZWZyZXNoKGRpcmVjdGlvbiwgZGlzdCwgY2xhc3NOYW1lcyk7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fYWRkTGlzdGVuZXJUcmFuc2l0aW9uZW5kKCk7XG4gICAgICB0aGlzLl9zZXRUcmFuc2l0aW9uU3R5bGUobnVsbCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByZXZBY3RpdmVUb3VjaEVsZW1lbnQ7IC8vIHRvdWNoRWxlbWVudCBvciBudWxsXG4gIH1cblxuICBfZ2V0Q2xhc3NOYW1lc0J5QmlyZWN0aW9uKGRpcmVjdGlvbikge1xuICAgIGxldCBjbGFzc05hbWVzID0gXCJcIjtcbiAgICBpZiAoZGlyZWN0aW9uID09PSBESVJFQ1RJT04uRE9XTikge1xuICAgICAgY2xhc3NOYW1lcyA9IHRoaXMuY2xhc3NOYW1lcy5DT01NT04uY29uY2F0KHRoaXMuY2xhc3NOYW1lcy5ET1dOKTtcbiAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gRElSRUNUSU9OLlVQKSB7XG4gICAgICBjbGFzc05hbWVzID0gdGhpcy5jbGFzc05hbWVzLkNPTU1PTi5jb25jYXQodGhpcy5jbGFzc05hbWVzLlVQKTtcbiAgICB9XG4gICAgcmV0dXJuIGNsYXNzTmFtZXM7XG4gIH1cblxuICBfb25SZWZyZXNoKGRpcmVjdGlvbiwgZGlzdGFuY2UsIGNsYXNzTmFtZXMpIHtcbiAgICBpZiAodGhpcy5oYXNPd25Qcm9wZXJ0eShcIm9uUmVmcmVzaFwiKSkge1xuICAgICAgY29uc3QgcHJvbWlzZSA9IHRoaXMub25SZWZyZXNoKGRpcmVjdGlvbiwgZGlzdGFuY2UpO1xuICAgICAgY29uc3QgX3RoaXMgPSB0aGlzO1xuICAgICAgdGhpcy5faXNSZWZyZXNoQWN0aXZlID0gdHJ1ZTtcbiAgICAgIGlmICghaXNQcm9taXNlKHByb21pc2UpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIG9uUmVmcmVzaCBmdW5jdGlvbmBzIHJldHVybiB2YWx1ZSBtdXN0IGJlIG11c3QgYmUgdGhlIFByb21pc2UnKTtcbiAgICAgIH1cbiAgICAgIHByb21pc2VcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIF90aGlzLl9yZW1vdmVDbGFzcy5jYWxsKF90aGlzLCBjbGFzc05hbWVzKTtcbiAgICAgICAgICBfdGhpcy5fYWRkTGlzdGVuZXJUcmFuc2l0aW9uZW5kKCk7XG4gICAgICAgICAgX3RoaXMuX3NldFRyYW5zaXRpb25TdHlsZShudWxsKTtcbiAgICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBfYWRkQ2xhc3MoY2xhc3NOYW1lcykge1xuICAgIGNvbnN0IGNsYXNzTGlzdCA9IHRoaXMuX2dyYW5kcGEuY2xhc3NMaXN0O1xuICAgIGNsYXNzTGlzdC5hZGQoLi4uY2xhc3NOYW1lcyk7XG4gIH1cblxuICBfcmVtb3ZlQ2xhc3MoY2xhc3NOYW1lcykge1xuICAgIGNvbnN0IGNsYXNzTGlzdCA9IHRoaXMuX2dyYW5kcGEuY2xhc3NMaXN0O1xuICAgIGNsYXNzTGlzdC5yZW1vdmUoLi4uY2xhc3NOYW1lcyk7XG4gIH1cblxuICBfc2V0VHJhbnNsYXRlWVN0eWxlID0gKGZ1bmN0aW9uIElJRkUoKSB7XG4gICAgbGV0IF9kaXN0YW5jZSA9IG51bGw7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkaXN0YW5jZSkge1xuICAgICAgaWYgKF9kaXN0YW5jZSAhPT0gZGlzdGFuY2UpIHtcbiAgICAgICAgdGhpcy5saXN0RWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gZ2V0VHJhbnNsYXRlWVN0eWxlKGRpc3RhbmNlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pKCk7XG5cbiAgX3NldFRyYW5zaXRpb25TdHlsZShkaXN0YW5jZSkge1xuICAgIGNvbnN0IGRpc3QgPSBkaXN0YW5jZSB8fCAwO1xuICAgIGNvbnN0IHRyYW5zbGF0ZVkgPSBnZXRUcmFuc2xhdGVZU3R5bGUoZGlzdGFuY2UpO1xuICAgIGNvbnN0IG90aGVyU3R5bGUgPSBnZXRUcmFuc2l0aW9uU3R5bGUoKTtcbiAgICB0aGlzLmxpc3RFbGVtZW50LnN0eWxlLmNzc1RleHQgPSBgJHt0cmFuc2xhdGVZfSR7b3RoZXJTdHlsZX1gO1xuICB9XG5cbiAgX3Jlc2V0U3R5bGUoKSB7XG4gICAgdGhpcy5saXN0RWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gbnVsbDtcbiAgfVxuXG4gIF9oYW5kbGVUcmFuc2l0aW9uRW5kKGV2dCkge1xuICAgIGlmIChcbiAgICAgIChldnQudHlwZSA9PT0gXCJ0cmFuc2l0aW9uZW5kXCJcbiAgICAgIHx8IGV2dC50eXBlID09PSBcIndlYmtpdFRyYW5zaXRpb25FbmRcIlxuICAgICAgfHwgZXZ0LnR5cGUgPT09IFwib1RyYW5zaXRpb25FbmRcIlxuICAgICAgfHwgZXZ0LnR5cGUgPT09IFwib3RyYW5zaXRpb25lbmRcIilcbiAgICAgICYmIGV2dC5wcm9wZXJ0eU5hbWUgPT09IFwidHJhbnNmb3JtXCJcbiAgICApIHtcbiAgICAgIHRoaXMuX2lzQWN0aXZlID0gZmFsc2U7XG4gICAgICB0aGlzLl9pc1JlZnJlc2hBY3RpdmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuX3Jlc2V0U3R5bGUoKTtcbiAgICAgIHRoaXMuX3JlbW92ZUxpc3RlbmVyVHJhbnNpdGlvbmVuZCgpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQdWxsVG9SZWZyZXNoO1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8ganMvUHVsbFRvUmVmcmVzaC9pbmRleC5qcyIsImltcG9ydCBUb3VjaCBmcm9tICcuL1RvdWNoJztcbmltcG9ydCBFbGVtZW50IGZyb20gJy4vRWxlbWVudCc7XG5pbXBvcnQgVG91Y2hFbGVtZW50IGZyb20gJy4vVG91Y2hFbGVtZW50JztcblxuY2xhc3MgVG91Y2hFbGVtZW50TGlzdCB7XG4gIF9hY3RpdmVUb3VjaEVsZW1lbnQgPSBudWxsO1xuICBnZXQgYWN0aXZlVG91Y2hFbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLl9hY3RpdmVUb3VjaEVsZW1lbnQ7XG4gIH1cblxuICBfcHJldkFjdGl2ZVRvdWNoRWxlbWVudCA9IG51bGw7XG4gIGdldCBwcmV2QWN0aXZlVG91Y2hFbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLl9wcmV2QWN0aXZlVG91Y2hFbGVtZW50O1xuICB9XG5cbiAgX3RvdWNoRWxlbWVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICBnZXQgdG91Y2hFbGVtZW50cygpIHtcbiAgICByZXR1cm4gdGhpcy5fdG91Y2hFbGVtZW50cztcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0gdG91Y2hlc1xuICAgKiBAcGFyYW0gc2Nyb2xsVG9wXG4gICAqIEBwYXJhbSBzY3JvbGxIZWlnaHRcbiAgICogQHBhcmFtIGNsaWVudEhlaWdodFxuICAgKi9cbiAgc2V0VG91Y2hFbGVtZW50cyh0b3VjaGVzLCBzY3JvbGxUb3AsIHNjcm9sbEhlaWdodCwgY2xpZW50SGVpZ2h0KSB7XG4gICAgT2JqZWN0LmtleXModG91Y2hlcykubWFwKChrZXkpID0+IHtcbiAgICAgIGNvbnN0IHRvdWNoID0gdG91Y2hlc1trZXldO1xuICAgICAgY29uc3QgeyBpZGVudGlmaWVyIH0gPSB0b3VjaDtcblxuICAgICAgbGV0IHRvdWNoRWxlbWVudHMgPSB0aGlzLl90b3VjaEVsZW1lbnRzO1xuICAgICAgaWYgKHRvdWNoRWxlbWVudHNbaWRlbnRpZmllcl0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0b3VjaEVsZW1lbnRzW2lkZW50aWZpZXJdID0gVG91Y2hFbGVtZW50TGlzdC5idWlsZFRvdWNoRWxlbWVudCh0b3VjaCwgc2Nyb2xsVG9wLCBzY3JvbGxIZWlnaHQsIGNsaWVudEhlaWdodCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgY29uc3QgYWN0aXZlVG91Y2hFbGVtZW50ID0gdGhpcy5fZ2V0Rmlyc3RUb3VjaEVsZW1lbnQoKTtcbiAgICB0aGlzLl9zZXRBY3RpdmVUb3VjaEVsZW1lbnQoYWN0aXZlVG91Y2hFbGVtZW50KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHVwZGF0ZVRvdWNoRWxlbWVudHModG91Y2hlcywgc2Nyb2xsVG9wLCBzY3JvbGxIZWlnaHQsIGNsaWVudEhlaWdodCkge1xuICAgIE9iamVjdC5rZXlzKHRvdWNoZXMpLm1hcCgoa2V5KSA9PiB7XG4gICAgICBjb25zdCB0b3VjaCA9IHRvdWNoZXNba2V5XTtcbiAgICAgIGNvbnN0IHsgaWRlbnRpZmllciB9ID0gdG91Y2g7XG5cbiAgICAgIGxldCB0b3VjaEVsZW1lbnRzID0gdGhpcy5fdG91Y2hFbGVtZW50cztcbiAgICAgIGlmICh0b3VjaEVsZW1lbnRzW2lkZW50aWZpZXJdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdG91Y2hFbGVtZW50c1tpZGVudGlmaWVyXSA9IFRvdWNoRWxlbWVudExpc3QuYnVpbGRUb3VjaEVsZW1lbnQodG91Y2gsIHNjcm9sbFRvcCwgc2Nyb2xsSGVpZ2h0LCBjbGllbnRIZWlnaHQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdG91Y2hFbGVtZW50c1tpZGVudGlmaWVyXS51cGRhdGUodG91Y2gsIHNjcm9sbFRvcCwgc2Nyb2xsSGVpZ2h0LCBjbGllbnRIZWlnaHQpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZGVsZXRlVG91Y2hFbGVtZW50cyh0b3VjaGVzKSB7XG4gICAgT2JqZWN0LmtleXModG91Y2hlcykubWFwKChrZXkpID0+IHtcbiAgICAgIGNvbnN0IHRvdWNoID0gdG91Y2hlc1trZXldO1xuICAgICAgY29uc3QgeyBpZGVudGlmaWVyIH0gPSB0b3VjaDtcblxuICAgICAgaWYgKHRoaXMuX3RvdWNoRWxlbWVudHNbaWRlbnRpZmllcl0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBkZWxldGUgdGhpcy5fdG91Y2hFbGVtZW50c1tpZGVudGlmaWVyXTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IHsgaWRlbnRpZmllciB9ID0gdGhpcy5fYWN0aXZlVG91Y2hFbGVtZW50LnRvdWNoO1xuICAgIGlmICh0aGlzLl90b3VjaEVsZW1lbnRzW2lkZW50aWZpZXJdID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vINCV0YHQu9C4INCw0LrRgtC40LLQvdGL0LkgYWN0aXZlVG91Y2hFbGVtZW50INCx0YvQuyDRg9C00LDQu9C10L0sINGC0L4g0L/QvtC70YPRh9Cw0LXQvCDQvdC+0LLRi9C5LCDQtdGB0LvQuCDRgtCw0LrQvtC5INC10YHRgtGMXG4gICAgICBjb25zdCBhY3RpdmVUb3VjaEVsZW1lbnQgPSB0aGlzLl9nZXRGaXJzdFRvdWNoRWxlbWVudCgpOyAvL3RvdWNoRWxlbWVudCBvciBudWxsXG4gICAgICB0aGlzLl9zZXRBY3RpdmVUb3VjaEVsZW1lbnQoYWN0aXZlVG91Y2hFbGVtZW50KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2dldEZpcnN0VG91Y2hFbGVtZW50KCkge1xuICAgIGxldCB0b3VjaEVsZW1lbnQgPSBudWxsO1xuICAgIE9iamVjdC5rZXlzKHRoaXMuX3RvdWNoRWxlbWVudHMpLnNvbWUoa2V5ID0+ICh0b3VjaEVsZW1lbnQgPSB0aGlzLl90b3VjaEVsZW1lbnRzW2tleV0sIHRydWUpKTtcbiAgICByZXR1cm4gdG91Y2hFbGVtZW50O1xuICB9XG5cbiAgX3NldEFjdGl2ZVRvdWNoRWxlbWVudCh0b3VjaEVsZW1lbnQpIHtcbiAgICB0aGlzLl9wcmV2QWN0aXZlVG91Y2hFbGVtZW50ID0gdGhpcy5hY3RpdmVUb3VjaEVsZW1lbnQ7XG4gICAgdGhpcy5fYWN0aXZlVG91Y2hFbGVtZW50ID0gdG91Y2hFbGVtZW50O1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBzdGF0aWMgYnVpbGRUb3VjaEVsZW1lbnQodG91Y2gsIHNjcm9sbFRvcCwgc2Nyb2xsSGVpZ2h0LCBjbGllbnRIZWlnaHQpIHtcbiAgICBjb25zdCB7IGlkZW50aWZpZXIgfSA9IHRvdWNoO1xuICAgIGNvbnN0IHZhbHVlID0gbmV3IFRvdWNoKHRvdWNoKTtcbiAgICBjb25zdCBlbGVtZW50ID0gbmV3IEVsZW1lbnQoc2Nyb2xsVG9wLCBzY3JvbGxIZWlnaHQsIGNsaWVudEhlaWdodCk7XG4gICAgcmV0dXJuIChuZXcgVG91Y2hFbGVtZW50KHZhbHVlLCBlbGVtZW50KSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVG91Y2hFbGVtZW50TGlzdDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8ganMvUHVsbFRvUmVmcmVzaC9Ub3VjaEVsZW1lbnRMaXN0LmpzIiwiaW1wb3J0IFRvdWNoIGZyb20gJy4vVG91Y2gnO1xuaW1wb3J0IEVsZW1lbnQgZnJvbSAnLi9FbGVtZW50JztcbmltcG9ydCB7IERJUkVDVElPTiB9IGZyb20gJy4vY29uc3RhbnRzJztcblxuY2xhc3MgVG91Y2hFbGVtZW50IHtcbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSB0b3VjaCB7VG91Y2h9XG4gICAqIEBwYXJhbSBlbGVtZW50IHtFbGVtZW50fVxuICAgKi9cbiAgY29uc3RydWN0b3IodG91Y2gsIGVsZW1lbnQpIHtcbiAgICB0aGlzLnRvdWNoID0gdG91Y2g7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0gdG91Y2gge1RvdWNofVxuICAgKiBAcGFyYW0gc2Nyb2xsVG9wXG4gICAqIEBwYXJhbSBzY3JvbGxIZWlnaHRcbiAgICogQHBhcmFtIGNsaWVudEhlaWdodFxuICAgKi9cbiAgdXBkYXRlKHRvdWNoLCBzY3JvbGxUb3AsIHNjcm9sbEhlaWdodCwgY2xpZW50SGVpZ2h0KSB7XG4gICAgdGhpcy50b3VjaC51cGRhdGUodG91Y2gpO1xuICAgIHRoaXMuZWxlbWVudC51cGRhdGUoe1xuICAgICAgc2Nyb2xsVG9wLFxuICAgICAgc2Nyb2xsSGVpZ2h0LFxuICAgICAgY2xpZW50SGVpZ2h0XG4gICAgfSk7XG4gIH1cblxuICBnZXQgbW90aW9uKCkge1xuICAgIGNvbnN0IG1vdmVUb3VjaFRvcFkgPSB+fih0aGlzLnRvdWNoLmN1cnJlbnRZIC0gdGhpcy50b3VjaC5zdGFydFkpOyAvL3JvdW5kXG4gICAgY29uc3QgZGlzdGFuY2VUb3AgPSBtb3ZlVG91Y2hUb3BZIC0gdGhpcy5lbGVtZW50LnNjcm9sbFRvcDtcblxuICAgIGNvbnN0IG1vdmVUb3VjaEJvdHRvbVkgPSB+bW92ZVRvdWNoVG9wWSArIDE7IC8vcmV2ZXJzZVxuICAgIGNvbnN0IHNjcm9sbEJvdHRvbSA9IHRoaXMuZWxlbWVudC5zY3JvbGxIZWlnaHQgLSAodGhpcy5lbGVtZW50LnNjcm9sbFRvcCArIHRoaXMuZWxlbWVudC5jbGllbnRIZWlnaHQpO1xuICAgIGNvbnN0IGRpc3RhbmNlQm90dG9tID0gbW92ZVRvdWNoQm90dG9tWSAtIHNjcm9sbEJvdHRvbTtcblxuICAgIGlmIChkaXN0YW5jZVRvcCA+IDApIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGRpc3RhbmNlOiBkaXN0YW5jZVRvcCxcbiAgICAgICAgZGlyZWN0aW9uOiBESVJFQ1RJT04uVVAsXG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChkaXN0YW5jZUJvdHRvbSA+IDApIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGRpc3RhbmNlOiB+ZGlzdGFuY2VCb3R0b20gKyAxLFxuICAgICAgICBkaXJlY3Rpb246IERJUkVDVElPTi5ET1dOLFxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBkaXN0YW5jZTogbnVsbCxcbiAgICAgICAgZGlyZWN0aW9uOiBESVJFQ1RJT04uTk9ORSxcbiAgICAgIH07XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRvdWNoRWxlbWVudDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8ganMvUHVsbFRvUmVmcmVzaC9Ub3VjaEVsZW1lbnQuanMiLCJleHBvcnQgY29uc3QgaXNPYmplY3QgPSBmdW5jdGlvbiBpc09iamVjdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0JyAmJiBvYmouY29uc3RydWN0b3IgPT09IE9iamVjdDtcbn07XG5cbmV4cG9ydCBjb25zdCBpc0FycmF5ID0gZnVuY3Rpb24gaXNBcnJheShvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0JyAmJiBvYmouY29uc3RydWN0b3IgPT09IEFycmF5O1xufTtcblxuZXhwb3J0IGNvbnN0IGlzU3RyaW5nID0gZnVuY3Rpb24gaXNTdHJpbmcob2JqKSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqID09PSAnc3RyaW5nJyB8fCAodHlwZW9mIG9iaiA9PT0gJ29iamVjdCcgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTdHJpbmcpO1xufTtcblxuZXhwb3J0IGNvbnN0IGlzUHJvbWlzZSA9IGZ1bmN0aW9uIGlzUHJvbWlzZShvYmopIHtcbiAgcmV0dXJuICEhb2JqICYmICh0eXBlb2Ygb2JqID09PSAnb2JqZWN0JyB8fCB0eXBlb2Ygb2JqID09PSAnZnVuY3Rpb24nKSAmJiB0eXBlb2Ygb2JqLnRoZW4gPT09ICdmdW5jdGlvbic7XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBqcy9QdWxsVG9SZWZyZXNoL3V0aWxzL2NoZWNrLmpzIiwiY29uc3QgZ2V0VHJhbnNsYXRlWVN0eWxlID0gZnVuY3Rpb24gZ2V0VHJhbnNsYXRlWVN0eWxlKGRpc3RhbmNlKSB7XG4gIHJldHVybiAoXG4gICAgYC13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoJHtkaXN0YW5jZX1weCk7YCArXG4gICAgYC1tcy10cmFuc2Zvcm06dHJhbnNsYXRlWSgke2Rpc3RhbmNlfXB4KTtgICtcbiAgICBgdHJhbnNmb3JtOnRyYW5zbGF0ZVkoJHtkaXN0YW5jZX1weCk7YFxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0VHJhbnNsYXRlWVN0eWxlO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBqcy9QdWxsVG9SZWZyZXNoL3V0aWxzL2dldFRyYW5zbGF0ZVlTdHlsZS5qcyIsImNvbnN0IGdldFRyYW5zaXRpb25TdHlsZSA9IGZ1bmN0aW9uIGdldFRyYW5zaXRpb25TdHlsZShkdXJhdGlvbiA9IDMwMCwgZGVsYXkgPSAwKSB7XG4gIHJldHVybiAoXG4gICAgYC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjoke2R1cmF0aW9ufW1zO2AgK1xuICAgIGB0cmFuc2l0aW9uLWR1cmF0aW9uOiR7ZHVyYXRpb259bXM7YCArXG4gICAgYC13ZWJraXQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC4zMywuNjYsLjY2LDEpO2AgK1xuICAgIGB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjMzLC42NiwuNjYsMSk7YCArXG4gICAgYC13ZWJraXQtdHJhbnNpdGlvbi1kZWxheToke2RlbGF5fW1zO2AgK1xuICAgIGB0cmFuc2l0aW9uLWRlbGF5OiR7ZGVsYXl9bXM7YCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnZXRUcmFuc2l0aW9uU3R5bGU7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGpzL1B1bGxUb1JlZnJlc2gvdXRpbHMvZ2V0VHJhbnNpdGlvblN0eWxlLmpzIiwiY29uc3QgcmVzaXN0YW5jZURpc3RhbmNlID0gZnVuY3Rpb24gcmVzaXN0YW5jZURpc3RhbmNlKGRpc3RhbmNlLCByZXNpc3RhbmNlID0gMSkge1xuICBjb25zdCByZXNEaXN0ID0gfn4oZGlzdGFuY2UgLyByZXNpc3RhbmNlKTsgLy9yb3VuZFxuXG4gIGxldCByZXNpc3RhbmNlRGlzdGFuY2VBYnMgPSByZXNEaXN0O1xuICBpZiAocmVzaXN0YW5jZURpc3RhbmNlQWJzIDwgMCkge1xuICAgIHJlc2lzdGFuY2VEaXN0YW5jZUFicyA9IH5yZXNpc3RhbmNlRGlzdGFuY2VBYnMgKyAxOyAvL3JldmVyc2VcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZGlzdGFuY2U6IHJlc0Rpc3QsXG4gICAgZGlzdGFuY2VBYnM6IHJlc2lzdGFuY2VEaXN0YW5jZUFicyxcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVzaXN0YW5jZURpc3RhbmNlO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBqcy9QdWxsVG9SZWZyZXNoL3V0aWxzL3Jlc2lzdGFuY2VEaXN0YW5jZS5qcyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBOzs7Ozs7Ozs7O0FDN0RBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJBO0FBQ0E7Ozs7OztBQU1BO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFHQTs7Ozs7Ozs7O0FDeEJBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BOzs7Ozs7QUN0Q0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFLQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBS0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFLQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVhBO0FBQUE7QUFDQTtBQUNBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBbkJBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQXVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFyUUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FBMk5BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQTZCQTs7Ozs7Ozs7Ozs7Ozs7O0FDNVNBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7QUFDQTs7OztBQUNBO0FBS0E7QUFLQTs7Ozs7OztBQUtBOzs7Ozs7O0FBT0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFUQTtBQUNBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQUdBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FBckZBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7OztBQTZFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBR0E7Ozs7Ozs7Ozs7Ozs7OztBQ3ZHQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7OztBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTs7Ozs7O0FBR0E7Ozs7Ozs7Ozs7Ozs7OztBQzFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2RBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1JBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFPQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1ZBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7OztBIiwic291cmNlUm9vdCI6IiJ9