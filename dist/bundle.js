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


var _classsNames;

__webpack_require__(4);

var _Swipe = __webpack_require__(5);

var _Swipe2 = _interopRequireDefault(_Swipe);

var _constants = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

window.onload = function () {
  startup();
};

//lconst resistance = 4; //ослабление
var distance = 50; // дистанция

var classsNames = (_classsNames = {
  COMMON: ["onrefresh"]
}, _defineProperty(_classsNames, _constants.DIRECTION.UP, ["onrefresh-up"]), _defineProperty(_classsNames, _constants.DIRECTION.DOWN, ["onrefresh-down"]), _classsNames);

function startup() {
  var elem = document.getElementById("ptr-list");
  var swipe = new _Swipe2.default(elem, 50, 2, { COMMON: "erer" });
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

var _getAfterRemoveTouchStyle = __webpack_require__(10);

var _getAfterRemoveTouchStyle2 = _interopRequireDefault(_getAfterRemoveTouchStyle);

var _resistanceDistance3 = __webpack_require__(11);

var _resistanceDistance4 = _interopRequireDefault(_resistanceDistance3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var classNames = (_classNames = {
  COMMON: ["onrefresh"]
}, _defineProperty(_classNames, _constants.DIRECTION.UP, ["onrefresh-up"]), _defineProperty(_classNames, _constants.DIRECTION.DOWN, ["onrefresh-down"]), _classNames);

var Swipe = function () {
  function Swipe(elem) {
    var distance = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 50;
    var resistance = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2;
    var classNames = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    _classCallCheck(this, Swipe);

    this.listElement = elem;
    this.resistance = resistance;
    this.distance = distance;
    this.classNames = this._mergeClassNames(classNames);
    this._grandpa = elem.parentElement.parentElement;
    this._touchElements = new _TouchElementList2.default();
    this.isActive = false;
    this._isOnRefreshActive = false;
    this._handleStart = this._handleStart.bind(this);
    this._handleMove = this._handleMove.bind(this);
    this._handleEnd = this._handleEnd.bind(this);
    this._handleCancel = this._handleCancel.bind(this);
    this._handleTransitionEnd = this._handleTransitionEnd.bind(this);
  }

  _createClass(Swipe, [{
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
      this.listElement.addEventListener("transitionend", this._handleTransitionEnd, false);
      this.listElement.addEventListener("webkitTransitionEnd", this._handleTransitionEnd, false);
      this.listElement.addEventListener("oTransitionEnd", this._handleTransitionEnd, false);
      this.listElement.addEventListener("otransitionend", this._handleTransitionEnd, false);
    }
  }, {
    key: 'removeListener',
    value: function removeListener() {
      this.listElement.removeEventListener("touchstart", this._handleStart, false);
      this.listElement.removeEventListener("touchmove", this._handleMove, false);
      this.listElement.removeEventListener("touchend", this._handleEnd, false);
      this.listElement.removeEventListener("touchcancel", this._handleCancel, false);
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
    value: function handleStart(evt) {
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

    // todo запретить перезатирание свойства style без необходимости на то

  }, {
    key: '_handleMove',
    value: function handleMove(evt) {
      var touches = evt.changedTouches;
      var touchElements = this._updateTouchElements(touches);
      var touchElement = touchElements.activeTouchElement;
      var motion = touchElement.motion;


      if (motion.direction === _constants.DIRECTION.NONE) {
        this.isActive = false;
        this._resetStyle(); // todo не перезаписывать, если не надо
      } else {
        // move UP or DOWN
        evt.preventDefault();
        if (!this._isOnRefreshActive) {
          this.isActive = true;

          var _resistanceDistance = (0, _resistanceDistance4.default)(motion.distance, this.resistance),
              distance = _resistanceDistance.distance;

          this._setTranslateYStyle(distance); // todo не перезаписывать, если не надо
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
    value: function handleEnd(evt) {
      var touchElement = this._handleRemove(evt);

      if (touchElement !== null && this.hasOwnProperty("onTouchEnd")) {
        this.onTouchEnd(touchElement, this._touchElements);
      }
    }
  }, {
    key: '_handleCancel',
    value: function handleCancel(evt) {
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
      if (!this.isActive) {
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
        var _classNames2 = this._getClassNamesByBirection(motion.direction);
        //this._addClass(...classNames);
        this._addClass(_classNames2);
        this._onRefresh(distance, _classNames2);
        this._setAfterRemoveTouchStyle(this.distance);
      }
      this._setAfterRemoveTouchStyle(null);

      return prevActiveTouchElement; // touchElement or null
    }
  }, {
    key: '_getClassNamesByBirection',
    value: function _getClassNames(direction) {
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
    value: function _onRefresh(distance, classNames) {
      if (this.hasOwnProperty("onRefresh")) {
        var promise = this.onRefresh(distance);
        var self = this;
        this._isOnRefreshActive = true;
        if (!(0, _check.isPromise)(promise)) {
          throw new Error('The onRefresh function`s return value must be must be the Promise');
        }
        promise.then(function () {
          self._isOnRefreshActive = false;
          self._removeClass.call(self, classNames);
          self._setAfterRemoveTouchStyle(null);
          //self._reset.call(self, classNames);
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
    key: '_setTranslateYStyle',
    value: function _setTranslateYStyle(distance) {
      this.listElement.style = (0, _getTranslateYStyle2.default)(distance);
    }
  }, {
    key: '_setAfterRemoveTouchStyle',
    value: function _setAfterRemoveTouchStyle(distance) {
      var dist = distance || 0;
      var translateY = (0, _getTranslateYStyle2.default)(distance);
      var otherStyle = (0, _getAfterRemoveTouchStyle2.default)();
      this.listElement.style = '' + translateY + otherStyle;
    }
  }, {
    key: '_resetStyle',
    value: function _resetStyle() {
      this.listElement.style = null;
    }
  }, {
    key: '_handleTransitionEnd',
    value: function handleTransitionEnd(evt) {
      if ((evt.type === "transitionend" || evt.type === "webkitTransitionEnd" || evt.type === "oTransitionEnd" || evt.type === "otransitionend") && evt.propertyName === "transform") {
        if (!this._isOnRefreshActive) {
          this.isActive = false;
          this._resetStyle();
        }
      }
    }

    // _reset(classNames) {
    //   this._removeClass(classNames);
    //   this._setAfterRemoveTouchStyle();
    //   this.isActive = false;
    //   this._resetStyle();
    // }

  }]);

  return Swipe;
}();

exports.default = Swipe;

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
    key: '_touchElements',
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
  return "-webkit-transform:translateY(" + distance + "px);" + ("-ms-transform:translateY(" + distance + "px);") + ("transform:translateY(" + distance + "px)");
};

exports.default = getTranslateYStyle;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var getAfterRemoveTouchStyle = function getAfterRemoveTouchStyle() {
  var duration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 300;
  var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  return (
    /*`-webkit-transform:translateY(0);` +
    `-ms-transform:translateY(0);` +
    `transform:translateY(0);` +*/
    "-webkit-transition-duration:" + duration + "ms;" + ("transition-duration:" + duration + "ms;") + "-webkit-transition-timing-function:cubic-bezier(.33,.66,.66,1);" + "transition-timing-function:cubic-bezier(.33,.66,.66,1);" + ("-webkit-transition-delay:" + delay + "ms;") + ("transition-delay:" + delay + "ms;")
  );
};

exports.default = getAfterRemoveTouchStyle;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIDhkNWRlYzhjZTY0YTU4OTQ2ZmM3Iiwid2VicGFjazovLy9qcy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vL2pzL1RvdWNoLmpzIiwid2VicGFjazovLy9qcy9FbGVtZW50LmpzIiwid2VicGFjazovLy9qcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zdHlsZS9zdHlsZS5jc3M/NzJhMiIsIndlYnBhY2s6Ly8vanMvU3dpcGUuanMiLCJ3ZWJwYWNrOi8vL2pzL1RvdWNoRWxlbWVudExpc3QuanMiLCJ3ZWJwYWNrOi8vL2pzL1RvdWNoRWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vanMvdXRpbHMvY2hlY2suanMiLCJ3ZWJwYWNrOi8vL2pzL3V0aWxzL2dldFRyYW5zbGF0ZVlTdHlsZS5qcyIsIndlYnBhY2s6Ly8vanMvdXRpbHMvZ2V0QWZ0ZXJSZW1vdmVUb3VjaFN0eWxlLmpzIiwid2VicGFjazovLy9qcy91dGlscy9yZXNpc3RhbmNlRGlzdGFuY2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgOGQ1ZGVjOGNlNjRhNTg5NDZmYzciLCJleHBvcnQgY29uc3QgRElSRUNUSU9OID0ge1xuICBVUDogJ1VQJyxcbiAgRE9XTjogJ0RPV04nLFxuICBOT05FOiAnTk9ORScsXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGpzL2NvbnN0YW50cy5qcyIsImNsYXNzIFRvdWNoIHtcbiAgLy8gc3RhcnRZO1xuICAvLyBjdXJyZW50WTtcbiAgLy8gaWRlbnRpZmllcjtcblxuICBjb25zdHJ1Y3Rvcih0b3VjaCkge1xuICAgIHRoaXMuc3RhcnRZID0gdGhpcy5jdXJyZW50WSA9IHRvdWNoLmNsaWVudFk7XG4gICAgdGhpcy5pZGVudGlmaWVyID0gdG91Y2guaWRlbnRpZmllcjtcbiAgfVxuXG4gIHVwZGF0ZSh0b3VjaCl7XG4gICAgdGhpcy5jdXJyZW50WSA9IHRvdWNoLmNsaWVudFk7XG4gIH1cblxuICAvLyByZXNldCgpIHtcbiAgLy8gICB0aGlzLnN0YXJ0WSA9IDA7XG4gIC8vICAgdGhpcy5jdXJyZW50WSA9IDA7XG4gIC8vICAgdGhpcy5pZGVudGlmaWVyID0gbnVsbDtcbiAgLy8gfVxufVxuZXhwb3J0IGRlZmF1bHQgVG91Y2g7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGpzL1RvdWNoLmpzIiwiY2xhc3MgRWxlbWVudCB7XG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0gc2Nyb2xsVG9wIHtOdW1iZXJ9XG4gICAqIEBwYXJhbSBzY3JvbGxIZWlnaHQge051bWJlcn1cbiAgICogQHBhcmFtIGNsaWVudEhlaWdodCB7TnVtYmVyfVxuICAgKi9cbiAgY29uc3RydWN0b3Ioc2Nyb2xsVG9wLCBzY3JvbGxIZWlnaHQsIGNsaWVudEhlaWdodCkge1xuICAgIHRoaXMuc2Nyb2xsVG9wID0gc2Nyb2xsVG9wO1xuICAgIHRoaXMuc2Nyb2xsSGVpZ2h0ID0gc2Nyb2xsSGVpZ2h0O1xuICAgIHRoaXMuY2xpZW50SGVpZ2h0ID0gY2xpZW50SGVpZ2h0O1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSBlbGVtZW50IHtFbGVtZW50fVxuICAgKi9cbiAgdXBkYXRlKGVsZW1lbnQpIHtcbiAgICB0aGlzLnNjcm9sbFRvcCA9IGVsZW1lbnQuc2Nyb2xsVG9wO1xuICAgIHRoaXMuc2Nyb2xsSGVpZ2h0ID0gZWxlbWVudC5zY3JvbGxIZWlnaHQ7XG4gICAgdGhpcy5jbGllbnRIZWlnaHQgPSBlbGVtZW50LmNsaWVudEhlaWdodDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFbGVtZW50O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGpzL0VsZW1lbnQuanMiLCJpbXBvcnQgJy4uL3N0eWxlL3N0eWxlLmNzcyc7XG5pbXBvcnQgU3dpcGUgZnJvbSAnLi9Td2lwZSc7XG5pbXBvcnQgeyBESVJFQ1RJT04gfSBmcm9tICcuL2NvbnN0YW50cyc7XG5cbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gIHN0YXJ0dXAoKTtcbn07XG5cbi8vbGNvbnN0IHJlc2lzdGFuY2UgPSA0OyAvL9C+0YHQu9Cw0LHQu9C10L3QuNC1XG5jb25zdCBkaXN0YW5jZSA9IDUwOyAvLyDQtNC40YHRgtCw0L3RhtC40Y9cblxuY29uc3QgY2xhc3NzTmFtZXMgPSB7XG4gIENPTU1PTjogW1wib25yZWZyZXNoXCJdLFxuICBbRElSRUNUSU9OLlVQXTogW1wib25yZWZyZXNoLXVwXCJdLFxuICBbRElSRUNUSU9OLkRPV05dOiBbXCJvbnJlZnJlc2gtZG93blwiXSxcbn07XG5cbmZ1bmN0aW9uIHN0YXJ0dXAoKSB7XG4gIGNvbnN0IGVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInB0ci1saXN0XCIpO1xuICBjb25zdCBzd2lwZSA9IG5ldyBTd2lwZShlbGVtLDUwLDIsIHtDT01NT046IFwiZXJlclwifSk7XG4gIHN3aXBlLmFkZExpc3RlbmVyKCk7XG5cbiAgc3dpcGUub25SZWZyZXNoKGZ1bmN0aW9uIChkaXN0YW5jZSkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgLy8g0L/QtdGA0LXQstC10LTRkdGCINC/0YDQvtC80LjRgSDQsiDRgdC+0YHRgtC+0Y/QvdC40LUgZnVsZmlsbGVkINGBINGA0LXQt9GD0LvRjNGC0LDRgtC+0LwgXCJyZXN1bHRcIlxuICAgICAgICByZXNvbHZlKFwicmVzdWx0IFwiICsgZGlzdGFuY2UpO1xuICAgICAgfSwgMjAwMCk7XG5cbiAgICB9KTtcbiAgfSk7XG5cbiAgc3dpcGUuY2FsbGJhY2tzKHtcbiAgICBvblRvdWNoTW92ZTogZnVuY3Rpb24gKHRvdWNoRWxlbWVudCkge1xuICAgICAgY29uc3QgeyBtb3Rpb24gfSA9IHRvdWNoRWxlbWVudDtcbiAgICAgIGNvbnNvbGUubG9nKG1vdGlvbi5kaXN0YW5jZSk7XG4gICAgfVxuICB9KTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBqcy9pbmRleC5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zdHlsZS9zdHlsZS5jc3Ncbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFRvdWNoRWxlbWVudExpc3QgZnJvbSAnLi9Ub3VjaEVsZW1lbnRMaXN0JztcbmltcG9ydCB7IERJUkVDVElPTiB9IGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCB7XG4gIGlzUHJvbWlzZSxcbiAgaXNBcnJheSxcbiAgaXNTdHJpbmcsXG59IGZyb20gJy4vdXRpbHMvY2hlY2snO1xuaW1wb3J0IGdldFRyYW5zbGF0ZVlTdHlsZSBmcm9tICcuL3V0aWxzL2dldFRyYW5zbGF0ZVlTdHlsZSc7XG5pbXBvcnQgZ2V0QWZ0ZXJSZW1vdmVUb3VjaFN0eWxlIGZyb20gJy4vdXRpbHMvZ2V0QWZ0ZXJSZW1vdmVUb3VjaFN0eWxlJztcbmltcG9ydCByZXNpc3RhbmNlRGlzdGFuY2UgZnJvbSAnLi91dGlscy9yZXNpc3RhbmNlRGlzdGFuY2UnO1xuXG5jb25zdCBjbGFzc05hbWVzID0ge1xuICBDT01NT046IFtcIm9ucmVmcmVzaFwiXSxcbiAgW0RJUkVDVElPTi5VUF06IFtcIm9ucmVmcmVzaC11cFwiXSxcbiAgW0RJUkVDVElPTi5ET1dOXTogW1wib25yZWZyZXNoLWRvd25cIl0sXG59O1xuXG5jbGFzcyBTd2lwZSB7XG4gIGNvbnN0cnVjdG9yKGVsZW0sIGRpc3RhbmNlID0gNTAsIHJlc2lzdGFuY2UgPSAyLCBjbGFzc05hbWVzID0ge30pIHtcbiAgICB0aGlzLmxpc3RFbGVtZW50ID0gZWxlbTtcbiAgICB0aGlzLnJlc2lzdGFuY2UgPSByZXNpc3RhbmNlO1xuICAgIHRoaXMuZGlzdGFuY2UgPSBkaXN0YW5jZTtcbiAgICB0aGlzLmNsYXNzTmFtZXMgPSB0aGlzLl9tZXJnZUNsYXNzTmFtZXMoY2xhc3NOYW1lcyk7XG4gICAgdGhpcy5ncmFuZHBhID0gZWxlbS5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgdGhpcy50b3VjaEVsZW1lbnRzID0gbmV3IFRvdWNoRWxlbWVudExpc3QoKTtcbiAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5pc09uUmVmcmVzaEFjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMuaGFuZGxlU3RhcnQgPSB0aGlzLmhhbmRsZVN0YXJ0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVNb3ZlID0gdGhpcy5oYW5kbGVNb3ZlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVFbmQgPSB0aGlzLmhhbmRsZUVuZC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlQ2FuY2VsID0gdGhpcy5oYW5kbGVDYW5jZWwuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZVRyYW5zaXRpb25FbmQgPSB0aGlzLmhhbmRsZVRyYW5zaXRpb25FbmQuYmluZCh0aGlzKTtcbiAgfVxuXG4gIF9tZXJnZUNsYXNzTmFtZXMoY2xzTmFtZXMpIHtcbiAgICBsZXQgcmVzdWx0ID0ge307XG4gICAgT2JqZWN0LmtleXMoY2xhc3NOYW1lcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBjb25zdCB2YWx1ZSA9IGNsYXNzTmFtZXNba2V5XTtcbiAgICAgIGNvbnN0IGNscyA9IGNsc05hbWVzW2tleV07XG4gICAgICBpZiAoaXNBcnJheShjbHMpKSB7XG4gICAgICAgIHJlc3VsdFtrZXldID0gWy4uLnZhbHVlLCAuLi5jbHNdO1xuICAgICAgfSBlbHNlIGlmIChpc1N0cmluZyhjbHMpKSB7XG4gICAgICAgIHJlc3VsdFtrZXldID0gWy4uLnZhbHVlLCBjbHNdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0W2tleV0gPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgYWRkTGlzdGVuZXIoKSB7XG4gICAgdGhpcy5saXN0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCB0aGlzLmhhbmRsZVN0YXJ0LCBmYWxzZSk7XG4gICAgdGhpcy5saXN0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsIHRoaXMuaGFuZGxlTW92ZSwgZmFsc2UpO1xuICAgIHRoaXMubGlzdEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsIHRoaXMuaGFuZGxlRW5kLCBmYWxzZSk7XG4gICAgdGhpcy5saXN0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hjYW5jZWxcIiwgdGhpcy5oYW5kbGVDYW5jZWwsIGZhbHNlKTtcbiAgICB0aGlzLmxpc3RFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0cmFuc2l0aW9uZW5kXCIsIHRoaXMuaGFuZGxlVHJhbnNpdGlvbkVuZCwgZmFsc2UpO1xuICAgIHRoaXMubGlzdEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIndlYmtpdFRyYW5zaXRpb25FbmRcIiwgdGhpcy5oYW5kbGVUcmFuc2l0aW9uRW5kLCBmYWxzZSk7XG4gICAgdGhpcy5saXN0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwib1RyYW5zaXRpb25FbmRcIiwgdGhpcy5oYW5kbGVUcmFuc2l0aW9uRW5kLCBmYWxzZSk7XG4gICAgdGhpcy5saXN0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwib3RyYW5zaXRpb25lbmRcIiwgdGhpcy5oYW5kbGVUcmFuc2l0aW9uRW5kLCBmYWxzZSk7XG4gIH1cblxuICByZW1vdmVMaXN0ZW5lcigpIHtcbiAgICB0aGlzLmxpc3RFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIHRoaXMuaGFuZGxlU3RhcnQsIGZhbHNlKTtcbiAgICB0aGlzLmxpc3RFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIiwgdGhpcy5oYW5kbGVNb3ZlLCBmYWxzZSk7XG4gICAgdGhpcy5saXN0RWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIiwgdGhpcy5oYW5kbGVFbmQsIGZhbHNlKTtcbiAgICB0aGlzLmxpc3RFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaGNhbmNlbFwiLCB0aGlzLmhhbmRsZUNhbmNlbCwgZmFsc2UpO1xuICAgIHRoaXMubGlzdEVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRyYW5zaXRpb25lbmRcIiwgdGhpcy5oYW5kbGVUcmFuc2l0aW9uRW5kLCBmYWxzZSk7XG4gICAgdGhpcy5saXN0RWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwid2Via2l0VHJhbnNpdGlvbkVuZFwiLCB0aGlzLmhhbmRsZVRyYW5zaXRpb25FbmQsIGZhbHNlKTtcbiAgICB0aGlzLmxpc3RFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJvVHJhbnNpdGlvbkVuZFwiLCB0aGlzLmhhbmRsZVRyYW5zaXRpb25FbmQsIGZhbHNlKTtcbiAgICB0aGlzLmxpc3RFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJvdHJhbnNpdGlvbmVuZFwiLCB0aGlzLmhhbmRsZVRyYW5zaXRpb25FbmQsIGZhbHNlKTtcbiAgfVxuXG4gIGNhbGxiYWNrcyhjYnMpIHtcbiAgICBpZiAoY2JzLmhhc093blByb3BlcnR5KFwib25Ub3VjaFN0YXJ0XCIpKSB7XG4gICAgICB0aGlzLm9uVG91Y2hTdGFydCA9IGNicy5vblRvdWNoU3RhcnQ7XG4gICAgfVxuICAgIGlmIChjYnMuaGFzT3duUHJvcGVydHkoXCJvblRvdWNoTW92ZVwiKSkge1xuICAgICAgdGhpcy5vblRvdWNoTW92ZSA9IGNicy5vblRvdWNoTW92ZTtcbiAgICB9XG4gICAgaWYgKGNicy5oYXNPd25Qcm9wZXJ0eShcIm9uVG91Y2hFbmRcIikpIHtcbiAgICAgIHRoaXMub25Ub3VjaEVuZCA9IGNicy5vblRvdWNoRW5kO1xuICAgIH1cbiAgICBpZiAoY2JzLmhhc093blByb3BlcnR5KFwib25Ub3VjaENhbmNlbFwiKSkge1xuICAgICAgdGhpcy5vblRvdWNoQ2FuY2VsID0gY2JzLm9uVG91Y2hDYW5jZWw7XG4gICAgfVxuICB9XG5cbiAgb25SZWZyZXNoKGZ1bmMpIHtcbiAgICBpZiAodHlwZW9mIGZ1bmMgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdvblJlZnJlc2ggbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG4gICAgfVxuICAgIHRoaXMub25SZWZyZXNoID0gZnVuYztcbiAgfVxuXG4gIGhhbmRsZVN0YXJ0KGV2dCkge1xuICAgIGNvbnN0IHRvdWNoZXMgPSBldnQuY2hhbmdlZFRvdWNoZXM7XG5cbiAgICBjb25zdCB7XG4gICAgICAgICAgICBzY3JvbGxUb3AsXG4gICAgICAgICAgICBzY3JvbGxIZWlnaHQsXG4gICAgICAgICAgICBjbGllbnRIZWlnaHQsXG4gICAgICAgICAgfSA9IHRoaXMuZ3JhbmRwYTtcblxuICAgIHRoaXMudG91Y2hFbGVtZW50cy5zZXRUb3VjaEVsZW1lbnRzKHRvdWNoZXMsIHNjcm9sbFRvcCwgc2Nyb2xsSGVpZ2h0LCBjbGllbnRIZWlnaHQpO1xuXG4gICAgaWYgKHRoaXMuaGFzT3duUHJvcGVydHkoXCJvblRvdWNoU3RhcnRcIikpIHtcbiAgICAgIHRoaXMub25Ub3VjaFN0YXJ0KHRoaXMuY3VycmVudFRvdWNoRWxlbWVudCwgdGhpcy50b3VjaEVsZW1lbnRzKTtcbiAgICB9XG4gIH1cblxuICAvLyB0b2RvINC30LDQv9GA0LXRgtC40YLRjCDQv9C10YDQtdC30LDRgtC40YDQsNC90LjQtSDRgdCy0L7QudGB0YLQstCwIHN0eWxlINCx0LXQtyDQvdC10L7QsdGF0L7QtNC40LzQvtGB0YLQuCDQvdCwINGC0L5cblxuICBoYW5kbGVNb3ZlKGV2dCkge1xuICAgIGNvbnN0IHRvdWNoZXMgPSBldnQuY2hhbmdlZFRvdWNoZXM7XG4gICAgY29uc3QgdG91Y2hFbGVtZW50cyA9IHRoaXMuX3VwZGF0ZVRvdWNoRWxlbWVudHModG91Y2hlcyk7XG4gICAgY29uc3QgdG91Y2hFbGVtZW50ID0gdG91Y2hFbGVtZW50cy5hY3RpdmVUb3VjaEVsZW1lbnQ7XG4gICAgY29uc3QgeyBtb3Rpb24gfSA9IHRvdWNoRWxlbWVudDtcblxuICAgIGlmIChtb3Rpb24uZGlyZWN0aW9uID09PSBESVJFQ1RJT04uTk9ORSkge1xuICAgICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgdGhpcy5fcmVzZXRTdHlsZSgpOyAvLyB0b2RvINC90LUg0L/QtdGA0LXQt9Cw0L/QuNGB0YvQstCw0YLRjCwg0LXRgdC70Lgg0L3QtSDQvdCw0LTQvlxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBtb3ZlIFVQIG9yIERPV05cbiAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgaWYgKCF0aGlzLmlzT25SZWZyZXNoQWN0aXZlKSB7XG4gICAgICAgIHRoaXMuaXNBY3RpdmUgPSB0cnVlO1xuICAgICAgICBjb25zdCB7IGRpc3RhbmNlIH0gPSByZXNpc3RhbmNlRGlzdGFuY2UobW90aW9uLmRpc3RhbmNlLCB0aGlzLnJlc2lzdGFuY2UpO1xuICAgICAgICB0aGlzLl9zZXRUcmFuc2xhdGVZU3R5bGUoZGlzdGFuY2UpOyAvLyB0b2RvINC90LUg0L/QtdGA0LXQt9Cw0L/QuNGB0YvQstCw0YLRjCwg0LXRgdC70Lgg0L3QtSDQvdCw0LTQvlxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLmhhc093blByb3BlcnR5KFwib25Ub3VjaE1vdmVcIikpIHtcbiAgICAgIHRoaXMub25Ub3VjaE1vdmUodG91Y2hFbGVtZW50LCB0aGlzLnRvdWNoRWxlbWVudHMpO1xuICAgIH1cbiAgfVxuXG4gIF91cGRhdGVUb3VjaEVsZW1lbnRzKHRvdWNoZXMpIHtcbiAgICBjb25zdCB7XG4gICAgICAgICAgICBzY3JvbGxUb3AsXG4gICAgICAgICAgICBzY3JvbGxIZWlnaHQsXG4gICAgICAgICAgICBjbGllbnRIZWlnaHQsXG4gICAgICAgICAgfSA9IHRoaXMuZ3JhbmRwYTtcblxuICAgIHJldHVybiB0aGlzLnRvdWNoRWxlbWVudHMudXBkYXRlVG91Y2hFbGVtZW50cyh0b3VjaGVzLCBzY3JvbGxUb3AsIHNjcm9sbEhlaWdodCwgY2xpZW50SGVpZ2h0KTtcbiAgfVxuXG4gIGhhbmRsZUVuZChldnQpIHtcbiAgICBjb25zdCB0b3VjaEVsZW1lbnQgPSB0aGlzLl9oYW5kbGVSZW1vdmUoZXZ0KTtcblxuICAgIGlmICh0b3VjaEVsZW1lbnQgIT09IG51bGwgJiYgdGhpcy5oYXNPd25Qcm9wZXJ0eShcIm9uVG91Y2hFbmRcIikpIHtcbiAgICAgIHRoaXMub25Ub3VjaEVuZCh0b3VjaEVsZW1lbnQsIHRoaXMudG91Y2hFbGVtZW50cyk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlQ2FuY2VsKGV2dCkge1xuICAgIGNvbnN0IHRvdWNoRWxlbWVudCA9IHRoaXMuX2hhbmRsZVJlbW92ZShldnQpO1xuXG4gICAgaWYgKHRvdWNoRWxlbWVudCAhPT0gbnVsbCAmJiB0aGlzLmhhc093blByb3BlcnR5KFwib25Ub3VjaENhbmNlbFwiKSkge1xuICAgICAgdGhpcy5vblRvdWNoQ2FuY2VsKHRvdWNoRWxlbWVudCwgdGhpcy50b3VjaEVsZW1lbnRzKTtcbiAgICB9XG4gIH1cblxuICBfaGFuZGxlUmVtb3ZlKGV2dCkge1xuICAgIGNvbnN0IHRvdWNoZXMgPSBldnQuY2hhbmdlZFRvdWNoZXM7IC8vINGC0LUsINC60L7RgtC+0YDRi9C1INC/0L7QutC40L3Rg9C70Lgg0Y3QutGA0LDQvVxuXG4gICAgLy8g0KPQtNCw0LvRj9C10Lwg0LLRgdC1INC90LXQsNC60YLQuNCy0L3Ri9C1ICjQvtGC0L7RgNCy0LDQvdC90YvQtSkgdG91Y2gsINCyINGC0L7QvCDRh9C40YHQu9C1INC4INCw0LrRgtC40LLQvdGL0LkuXG4gICAgY29uc3QgdG91Y2hFbGVtZW50cyA9IHRoaXMudG91Y2hFbGVtZW50cy5kZWxldGVUb3VjaEVsZW1lbnRzKHRvdWNoZXMpO1xuXG4gICAgLy8g0JXRgdC70Lgg0LIg0LTQsNC90L3Ri9C5INC80L7QvNC10L3RgiDRgdC60YDQvtC70LjQvCDRgdC/0LjRgdC+0LosINGC0L4g0YDQtdCw0LPQuNGA0L7QstCw0YLRjCDQvdC1INC90LDQtNC+ICjQvdC10YIg0LIg0LTQsNC90L3Ri9C5INC80L7QvNC10L3RgiDRjdGE0YTQtdC60YLQsFxuICAgIC8vIHB1bGwtdG8tcmVmcmVzaCkuXG4gICAgaWYgKCF0aGlzLmlzQWN0aXZlKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCB7IGFjdGl2ZVRvdWNoRWxlbWVudCwgcHJldkFjdGl2ZVRvdWNoRWxlbWVudCwgfSA9IHRvdWNoRWxlbWVudHM7XG5cbiAgICBpZiAoYWN0aXZlVG91Y2hFbGVtZW50ICE9PSBudWxsKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvLyDQktGB0LUg0L/QsNC70YzRhtGLINC/0L7QutC40L3Rg9C70Lgg0Y3QutGA0LDQvVxuICAgIC8vINC/0YDQvtGG0LXQtNGD0YDQsCDQuNC90LjRhtC40LDQu9C40LfQsNGG0LjQuCDQtNC+0LHQsNCy0LvQtdC90LjRjyDQutC70LDRgdGB0L7QsiDQuCDQvtCx0YDQsNCx0L7RgtGH0LjQutC+0LJcbiAgICBjb25zdCB7IG1vdGlvbiB9ID0gcHJldkFjdGl2ZVRvdWNoRWxlbWVudDtcblxuICAgIGNvbnN0IHsgZGlzdGFuY2UsIGRpc3RhbmNlQWJzIH0gPSByZXNpc3RhbmNlRGlzdGFuY2UobW90aW9uLmRpc3RhbmNlLCB0aGlzLnJlc2lzdGFuY2UpO1xuXG4gICAgaWYgKGRpc3RhbmNlQWJzID49IHRoaXMuZGlzdGFuY2UpIHtcbiAgICAgIGNvbnN0IGNsYXNzTmFtZXMgPSB0aGlzLl9nZXRDbGFzc05hbWVzKG1vdGlvbi5kaXJlY3Rpb24pO1xuICAgICAgLy90aGlzLl9hZGRDbGFzcyguLi5jbGFzc05hbWVzKTtcbiAgICAgIHRoaXMuX2FkZENsYXNzKGNsYXNzTmFtZXMpO1xuICAgICAgdGhpcy5fb25SZWZyZXNoKGRpc3RhbmNlLCBjbGFzc05hbWVzKTtcbiAgICAgIHRoaXMuX3NldEFmdGVyUmVtb3ZlVG91Y2hTdHlsZSh0aGlzLmRpc3RhbmNlKTtcbiAgICB9XG4gICAgdGhpcy5fc2V0QWZ0ZXJSZW1vdmVUb3VjaFN0eWxlKG51bGwpO1xuXG4gICAgcmV0dXJuIHByZXZBY3RpdmVUb3VjaEVsZW1lbnQ7IC8vIHRvdWNoRWxlbWVudCBvciBudWxsXG4gIH1cblxuICBfZ2V0Q2xhc3NOYW1lcyhkaXJlY3Rpb24pIHtcbiAgICBsZXQgY2xhc3NOYW1lcyA9IFwiXCI7XG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gRElSRUNUSU9OLkRPV04pIHtcbiAgICAgIGNsYXNzTmFtZXMgPSB0aGlzLmNsYXNzTmFtZXMuQ09NTU9OLmNvbmNhdCh0aGlzLmNsYXNzTmFtZXMuRE9XTik7XG4gICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09IERJUkVDVElPTi5VUCkge1xuICAgICAgY2xhc3NOYW1lcyA9IHRoaXMuY2xhc3NOYW1lcy5DT01NT04uY29uY2F0KHRoaXMuY2xhc3NOYW1lcy5VUCk7XG4gICAgfVxuICAgIHJldHVybiBjbGFzc05hbWVzO1xuICB9XG5cbiAgX29uUmVmcmVzaChkaXN0YW5jZSwgY2xhc3NOYW1lcykge1xuICAgIGlmICh0aGlzLmhhc093blByb3BlcnR5KFwib25SZWZyZXNoXCIpKSB7XG4gICAgICBjb25zdCBwcm9taXNlID0gdGhpcy5vblJlZnJlc2goZGlzdGFuY2UpO1xuICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICB0aGlzLmlzT25SZWZyZXNoQWN0aXZlID0gdHJ1ZTtcbiAgICAgIGlmICghaXNQcm9taXNlKHByb21pc2UpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIG9uUmVmcmVzaCBmdW5jdGlvbmBzIHJldHVybiB2YWx1ZSBtdXN0IGJlIG11c3QgYmUgdGhlIFByb21pc2UnKTtcbiAgICAgIH1cbiAgICAgIHByb21pc2VcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIHNlbGYuaXNPblJlZnJlc2hBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICBzZWxmLl9yZW1vdmVDbGFzcy5jYWxsKHNlbGYsIGNsYXNzTmFtZXMpO1xuICAgICAgICAgIHNlbGYuX3NldEFmdGVyUmVtb3ZlVG91Y2hTdHlsZShudWxsKTtcbiAgICAgICAgICAvL3NlbGYuX3Jlc2V0LmNhbGwoc2VsZiwgY2xhc3NOYW1lcyk7XG4gICAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgX2FkZENsYXNzKGNsYXNzTmFtZXMpIHtcbiAgICBjb25zdCBjbGFzc0xpc3QgPSB0aGlzLmdyYW5kcGEuY2xhc3NMaXN0O1xuICAgIGNsYXNzTGlzdC5hZGQoLi4uY2xhc3NOYW1lcyk7XG4gIH1cblxuICBfcmVtb3ZlQ2xhc3MoY2xhc3NOYW1lcykge1xuICAgIGNvbnN0IGNsYXNzTGlzdCA9IHRoaXMuZ3JhbmRwYS5jbGFzc0xpc3Q7XG4gICAgY2xhc3NMaXN0LnJlbW92ZSguLi5jbGFzc05hbWVzKTtcbiAgfVxuXG4gIF9zZXRUcmFuc2xhdGVZU3R5bGUoZGlzdGFuY2UpIHtcbiAgICB0aGlzLmxpc3RFbGVtZW50LnN0eWxlID0gZ2V0VHJhbnNsYXRlWVN0eWxlKGRpc3RhbmNlKTtcbiAgfVxuXG4gIF9zZXRBZnRlclJlbW92ZVRvdWNoU3R5bGUoZGlzdGFuY2UpIHtcbiAgICBjb25zdCBkaXN0ID0gZGlzdGFuY2UgfHwgMDtcbiAgICBjb25zdCB0cmFuc2xhdGVZID0gZ2V0VHJhbnNsYXRlWVN0eWxlKGRpc3RhbmNlKTtcbiAgICBjb25zdCBvdGhlclN0eWxlID0gZ2V0QWZ0ZXJSZW1vdmVUb3VjaFN0eWxlKCk7XG4gICAgdGhpcy5saXN0RWxlbWVudC5zdHlsZSA9IGAke3RyYW5zbGF0ZVl9JHtvdGhlclN0eWxlfWA7XG4gIH1cblxuICBfcmVzZXRTdHlsZSgpIHtcbiAgICB0aGlzLmxpc3RFbGVtZW50LnN0eWxlID0gbnVsbDtcbiAgfVxuXG4gIGhhbmRsZVRyYW5zaXRpb25FbmQoZXZ0KSB7XG4gICAgaWYgKFxuICAgICAgKGV2dC50eXBlID09PSBcInRyYW5zaXRpb25lbmRcIlxuICAgICAgICB8fCBldnQudHlwZSA9PT0gXCJ3ZWJraXRUcmFuc2l0aW9uRW5kXCJcbiAgICAgICAgfHwgZXZ0LnR5cGUgPT09IFwib1RyYW5zaXRpb25FbmRcIlxuICAgICAgICB8fCBldnQudHlwZSA9PT0gXCJvdHJhbnNpdGlvbmVuZFwiKVxuICAgICAgJiYgZXZ0LnByb3BlcnR5TmFtZSA9PT0gXCJ0cmFuc2Zvcm1cIlxuICAgICkge1xuICAgICAgaWYgKCF0aGlzLmlzT25SZWZyZXNoQWN0aXZlKSB7XG4gICAgICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fcmVzZXRTdHlsZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIF9yZXNldChjbGFzc05hbWVzKSB7XG4gIC8vICAgdGhpcy5fcmVtb3ZlQ2xhc3MoY2xhc3NOYW1lcyk7XG4gIC8vICAgdGhpcy5fc2V0QWZ0ZXJSZW1vdmVUb3VjaFN0eWxlKCk7XG4gIC8vICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlO1xuICAvLyAgIHRoaXMuX3Jlc2V0U3R5bGUoKTtcbiAgLy8gfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTd2lwZTtcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGpzL1N3aXBlLmpzIiwiaW1wb3J0IFRvdWNoIGZyb20gJy4vVG91Y2gnO1xuaW1wb3J0IEVsZW1lbnQgZnJvbSAnLi9FbGVtZW50JztcbmltcG9ydCBUb3VjaEVsZW1lbnQgZnJvbSAnLi9Ub3VjaEVsZW1lbnQnO1xuXG5jbGFzcyBUb3VjaEVsZW1lbnRMaXN0IHtcbiAgX2FjdGl2ZVRvdWNoRWxlbWVudCA9IG51bGw7XG4gIGdldCBhY3RpdmVUb3VjaEVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FjdGl2ZVRvdWNoRWxlbWVudDtcbiAgfVxuXG4gIF9wcmV2QWN0aXZlVG91Y2hFbGVtZW50ID0gbnVsbDtcbiAgZ2V0IHByZXZBY3RpdmVUb3VjaEVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ByZXZBY3RpdmVUb3VjaEVsZW1lbnQ7XG4gIH1cblxuICBfdG91Y2hFbGVtZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIGdldCB0b3VjaEVsZW1lbnRzKCkge1xuICAgIHJldHVybiB0aGlzLl90b3VjaEVsZW1lbnRzO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSB0b3VjaGVzXG4gICAqIEBwYXJhbSBzY3JvbGxUb3BcbiAgICogQHBhcmFtIHNjcm9sbEhlaWdodFxuICAgKiBAcGFyYW0gY2xpZW50SGVpZ2h0XG4gICAqL1xuICBzZXRUb3VjaEVsZW1lbnRzKHRvdWNoZXMsIHNjcm9sbFRvcCwgc2Nyb2xsSGVpZ2h0LCBjbGllbnRIZWlnaHQpIHtcbiAgICBPYmplY3Qua2V5cyh0b3VjaGVzKS5tYXAoKGtleSkgPT4ge1xuICAgICAgY29uc3QgdG91Y2ggPSB0b3VjaGVzW2tleV07XG4gICAgICBjb25zdCB7IGlkZW50aWZpZXIgfSA9IHRvdWNoO1xuXG4gICAgICBsZXQgdG91Y2hFbGVtZW50cyA9IHRoaXMuX3RvdWNoRWxlbWVudHM7XG4gICAgICBpZiAodG91Y2hFbGVtZW50c1tpZGVudGlmaWVyXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRvdWNoRWxlbWVudHNbaWRlbnRpZmllcl0gPSBUb3VjaEVsZW1lbnRMaXN0LmJ1aWxkVG91Y2hFbGVtZW50KHRvdWNoLCBzY3JvbGxUb3AsIHNjcm9sbEhlaWdodCwgY2xpZW50SGVpZ2h0KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zdCBhY3RpdmVUb3VjaEVsZW1lbnQgPSB0aGlzLl9nZXRGaXJzdFRvdWNoRWxlbWVudCgpO1xuICAgIHRoaXMuX3NldEFjdGl2ZVRvdWNoRWxlbWVudChhY3RpdmVUb3VjaEVsZW1lbnQpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgdXBkYXRlVG91Y2hFbGVtZW50cyh0b3VjaGVzLCBzY3JvbGxUb3AsIHNjcm9sbEhlaWdodCwgY2xpZW50SGVpZ2h0KSB7XG4gICAgT2JqZWN0LmtleXModG91Y2hlcykubWFwKChrZXkpID0+IHtcbiAgICAgIGNvbnN0IHRvdWNoID0gdG91Y2hlc1trZXldO1xuICAgICAgY29uc3QgeyBpZGVudGlmaWVyIH0gPSB0b3VjaDtcblxuICAgICAgbGV0IHRvdWNoRWxlbWVudHMgPSB0aGlzLl90b3VjaEVsZW1lbnRzO1xuICAgICAgaWYgKHRvdWNoRWxlbWVudHNbaWRlbnRpZmllcl0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0b3VjaEVsZW1lbnRzW2lkZW50aWZpZXJdID0gVG91Y2hFbGVtZW50TGlzdC5idWlsZFRvdWNoRWxlbWVudCh0b3VjaCwgc2Nyb2xsVG9wLCBzY3JvbGxIZWlnaHQsIGNsaWVudEhlaWdodCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0b3VjaEVsZW1lbnRzW2lkZW50aWZpZXJdLnVwZGF0ZSh0b3VjaCwgc2Nyb2xsVG9wLCBzY3JvbGxIZWlnaHQsIGNsaWVudEhlaWdodCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBkZWxldGVUb3VjaEVsZW1lbnRzKHRvdWNoZXMpIHtcbiAgICBPYmplY3Qua2V5cyh0b3VjaGVzKS5tYXAoKGtleSkgPT4ge1xuICAgICAgY29uc3QgdG91Y2ggPSB0b3VjaGVzW2tleV07XG4gICAgICBjb25zdCB7IGlkZW50aWZpZXIgfSA9IHRvdWNoO1xuXG4gICAgICBpZiAodGhpcy5fdG91Y2hFbGVtZW50c1tpZGVudGlmaWVyXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLl90b3VjaEVsZW1lbnRzW2lkZW50aWZpZXJdO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgeyBpZGVudGlmaWVyIH0gPSB0aGlzLl9hY3RpdmVUb3VjaEVsZW1lbnQudG91Y2g7XG4gICAgaWYgKHRoaXMuX3RvdWNoRWxlbWVudHNbaWRlbnRpZmllcl0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8g0JXRgdC70Lgg0LDQutGC0LjQstC90YvQuSBhY3RpdmVUb3VjaEVsZW1lbnQg0LHRi9C7INGD0LTQsNC70LXQvSwg0YLQviDQv9C+0LvRg9GH0LDQtdC8INC90L7QstGL0LksINC10YHQu9C4INGC0LDQutC+0Lkg0LXRgdGC0YxcbiAgICAgIGNvbnN0IGFjdGl2ZVRvdWNoRWxlbWVudCA9IHRoaXMuX2dldEZpcnN0VG91Y2hFbGVtZW50KCk7IC8vdG91Y2hFbGVtZW50IG9yIG51bGxcbiAgICAgIHRoaXMuX3NldEFjdGl2ZVRvdWNoRWxlbWVudChhY3RpdmVUb3VjaEVsZW1lbnQpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfZ2V0Rmlyc3RUb3VjaEVsZW1lbnQoKSB7XG4gICAgbGV0IHRvdWNoRWxlbWVudCA9IG51bGw7XG4gICAgT2JqZWN0LmtleXModGhpcy5fdG91Y2hFbGVtZW50cykuc29tZShrZXkgPT4gKHRvdWNoRWxlbWVudCA9IHRoaXMuX3RvdWNoRWxlbWVudHNba2V5XSwgdHJ1ZSkpO1xuICAgIHJldHVybiB0b3VjaEVsZW1lbnQ7XG4gIH1cblxuICBfc2V0QWN0aXZlVG91Y2hFbGVtZW50KHRvdWNoRWxlbWVudCkge1xuICAgIHRoaXMuX3ByZXZBY3RpdmVUb3VjaEVsZW1lbnQgPSB0aGlzLmFjdGl2ZVRvdWNoRWxlbWVudDtcbiAgICB0aGlzLl9hY3RpdmVUb3VjaEVsZW1lbnQgPSB0b3VjaEVsZW1lbnQ7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG4gIHN0YXRpYyBidWlsZFRvdWNoRWxlbWVudCh0b3VjaCwgc2Nyb2xsVG9wLCBzY3JvbGxIZWlnaHQsIGNsaWVudEhlaWdodCkge1xuICAgIGNvbnN0IHsgaWRlbnRpZmllciB9ID0gdG91Y2g7XG4gICAgY29uc3QgdmFsdWUgPSBuZXcgVG91Y2godG91Y2gpO1xuICAgIGNvbnN0IGVsZW1lbnQgPSBuZXcgRWxlbWVudChzY3JvbGxUb3AsIHNjcm9sbEhlaWdodCwgY2xpZW50SGVpZ2h0KTtcbiAgICByZXR1cm4gKG5ldyBUb3VjaEVsZW1lbnQodmFsdWUsIGVsZW1lbnQpKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUb3VjaEVsZW1lbnRMaXN0O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBqcy9Ub3VjaEVsZW1lbnRMaXN0LmpzIiwiaW1wb3J0IFRvdWNoIGZyb20gJy4vVG91Y2gnO1xuaW1wb3J0IEVsZW1lbnQgZnJvbSAnLi9FbGVtZW50JztcbmltcG9ydCB7IERJUkVDVElPTiB9IGZyb20gJy4vY29uc3RhbnRzJztcblxuY2xhc3MgVG91Y2hFbGVtZW50IHtcbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSB0b3VjaCB7VG91Y2h9XG4gICAqIEBwYXJhbSBlbGVtZW50IHtFbGVtZW50fVxuICAgKi9cbiAgY29uc3RydWN0b3IodG91Y2gsIGVsZW1lbnQpIHtcbiAgICB0aGlzLnRvdWNoID0gdG91Y2g7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0gdG91Y2gge1RvdWNofVxuICAgKiBAcGFyYW0gc2Nyb2xsVG9wXG4gICAqIEBwYXJhbSBzY3JvbGxIZWlnaHRcbiAgICogQHBhcmFtIGNsaWVudEhlaWdodFxuICAgKi9cbiAgdXBkYXRlKHRvdWNoLCBzY3JvbGxUb3AsIHNjcm9sbEhlaWdodCwgY2xpZW50SGVpZ2h0KSB7XG4gICAgdGhpcy50b3VjaC51cGRhdGUodG91Y2gpO1xuICAgIHRoaXMuZWxlbWVudC51cGRhdGUoe1xuICAgICAgc2Nyb2xsVG9wLFxuICAgICAgc2Nyb2xsSGVpZ2h0LFxuICAgICAgY2xpZW50SGVpZ2h0XG4gICAgfSk7XG4gIH1cblxuICBnZXQgbW90aW9uKCkge1xuICAgIGNvbnN0IG1vdmVUb3VjaFRvcFkgPSB+fih0aGlzLnRvdWNoLmN1cnJlbnRZIC0gdGhpcy50b3VjaC5zdGFydFkpOyAvL3JvdW5kXG4gICAgY29uc3QgZGlzdGFuY2VUb3AgPSBtb3ZlVG91Y2hUb3BZIC0gdGhpcy5lbGVtZW50LnNjcm9sbFRvcDtcblxuICAgIGNvbnN0IG1vdmVUb3VjaEJvdHRvbVkgPSB+bW92ZVRvdWNoVG9wWSArIDE7IC8vcmV2ZXJzZVxuICAgIGNvbnN0IHNjcm9sbEJvdHRvbSA9IHRoaXMuZWxlbWVudC5zY3JvbGxIZWlnaHQgLSAodGhpcy5lbGVtZW50LnNjcm9sbFRvcCArIHRoaXMuZWxlbWVudC5jbGllbnRIZWlnaHQpO1xuICAgIGNvbnN0IGRpc3RhbmNlQm90dG9tID0gbW92ZVRvdWNoQm90dG9tWSAtIHNjcm9sbEJvdHRvbTtcblxuICAgIGlmIChkaXN0YW5jZVRvcCA+IDApIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGRpc3RhbmNlOiBkaXN0YW5jZVRvcCxcbiAgICAgICAgZGlyZWN0aW9uOiBESVJFQ1RJT04uVVAsXG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChkaXN0YW5jZUJvdHRvbSA+IDApIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGRpc3RhbmNlOiB+ZGlzdGFuY2VCb3R0b20gKyAxLFxuICAgICAgICBkaXJlY3Rpb246IERJUkVDVElPTi5ET1dOLFxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBkaXN0YW5jZTogbnVsbCxcbiAgICAgICAgZGlyZWN0aW9uOiBESVJFQ1RJT04uTk9ORSxcbiAgICAgIH07XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRvdWNoRWxlbWVudDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8ganMvVG91Y2hFbGVtZW50LmpzIiwiZXhwb3J0IGNvbnN0IGlzT2JqZWN0ID0gZnVuY3Rpb24gaXNPYmplY3Qob2JqKSB7XG4gIHJldHVybiBvYmogJiYgdHlwZW9mIG9iaiA9PT0gJ29iamVjdCcgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBPYmplY3Q7XG59O1xuXG5leHBvcnQgY29uc3QgaXNBcnJheSA9IGZ1bmN0aW9uIGlzQXJyYXkob2JqKSB7XG4gIHJldHVybiBvYmogJiYgdHlwZW9mIG9iaiA9PT0gJ29iamVjdCcgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBBcnJheTtcbn07XG5cbmV4cG9ydCBjb25zdCBpc1N0cmluZyA9IGZ1bmN0aW9uIGlzU3RyaW5nKG9iaikge1xuICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gJ3N0cmluZycgfHwgKHR5cGVvZiBvYmogPT09ICdvYmplY3QnICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3RyaW5nKTtcbn07XG5cbmV4cG9ydCBjb25zdCBpc1Byb21pc2UgPSBmdW5jdGlvbiBpc1Byb21pc2Uob2JqKSB7XG4gIHJldHVybiAhIW9iaiAmJiAodHlwZW9mIG9iaiA9PT0gJ29iamVjdCcgfHwgdHlwZW9mIG9iaiA9PT0gJ2Z1bmN0aW9uJykgJiYgdHlwZW9mIG9iai50aGVuID09PSAnZnVuY3Rpb24nO1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8ganMvdXRpbHMvY2hlY2suanMiLCJjb25zdCBnZXRUcmFuc2xhdGVZU3R5bGUgPSBmdW5jdGlvbiBnZXRUcmFuc2xhdGVZU3R5bGUoZGlzdGFuY2UpIHtcbiAgcmV0dXJuIChcbiAgICBgLXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgke2Rpc3RhbmNlfXB4KTtgICtcbiAgICBgLW1zLXRyYW5zZm9ybTp0cmFuc2xhdGVZKCR7ZGlzdGFuY2V9cHgpO2AgK1xuICAgIGB0cmFuc2Zvcm06dHJhbnNsYXRlWSgke2Rpc3RhbmNlfXB4KWBcbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldFRyYW5zbGF0ZVlTdHlsZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8ganMvdXRpbHMvZ2V0VHJhbnNsYXRlWVN0eWxlLmpzIiwiY29uc3QgZ2V0QWZ0ZXJSZW1vdmVUb3VjaFN0eWxlID0gZnVuY3Rpb24gZ2V0QWZ0ZXJSZW1vdmVUb3VjaFN0eWxlKGR1cmF0aW9uID0gMzAwLCBkZWxheSA9IDApIHtcbiAgcmV0dXJuIChcbiAgICAvKmAtd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKDApO2AgK1xuICAgIGAtbXMtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoMCk7YCArXG4gICAgYHRyYW5zZm9ybTp0cmFuc2xhdGVZKDApO2AgKyovXG4gICAgYC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjoke2R1cmF0aW9ufW1zO2AgK1xuICAgIGB0cmFuc2l0aW9uLWR1cmF0aW9uOiR7ZHVyYXRpb259bXM7YCArXG4gICAgYC13ZWJraXQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC4zMywuNjYsLjY2LDEpO2AgK1xuICAgIGB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjMzLC42NiwuNjYsMSk7YCArXG4gICAgYC13ZWJraXQtdHJhbnNpdGlvbi1kZWxheToke2RlbGF5fW1zO2AgK1xuICAgIGB0cmFuc2l0aW9uLWRlbGF5OiR7ZGVsYXl9bXM7YCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnZXRBZnRlclJlbW92ZVRvdWNoU3R5bGU7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGpzL3V0aWxzL2dldEFmdGVyUmVtb3ZlVG91Y2hTdHlsZS5qcyIsImNvbnN0IHJlc2lzdGFuY2VEaXN0YW5jZSA9IGZ1bmN0aW9uIHJlc2lzdGFuY2VEaXN0YW5jZShkaXN0YW5jZSwgcmVzaXN0YW5jZSA9IDEpIHtcbiAgY29uc3QgcmVzRGlzdCA9IH5+KGRpc3RhbmNlIC8gcmVzaXN0YW5jZSk7IC8vcm91bmRcblxuICBsZXQgcmVzaXN0YW5jZURpc3RhbmNlQWJzID0gcmVzRGlzdDtcbiAgaWYgKHJlc2lzdGFuY2VEaXN0YW5jZUFicyA8IDApIHtcbiAgICByZXNpc3RhbmNlRGlzdGFuY2VBYnMgPSB+cmVzaXN0YW5jZURpc3RhbmNlQWJzICsgMTsgLy9yZXZlcnNlXG4gIH1cblxuICByZXR1cm4ge1xuICAgIGRpc3RhbmNlOiByZXNEaXN0LFxuICAgIGRpc3RhbmNlQWJzOiByZXNpc3RhbmNlRGlzdGFuY2VBYnMsXG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlc2lzdGFuY2VEaXN0YW5jZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8ganMvdXRpbHMvcmVzaXN0YW5jZURpc3RhbmNlLmpzIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0E7Ozs7Ozs7Ozs7QUM3REE7QUFDQTtBQUNBO0FBQ0E7QUFIQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkE7QUFDQTs7Ozs7O0FBTUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQUdBOzs7Ozs7Ozs7OztBQ3hCQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7Ozs7OztBQ3RDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUlBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFLQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFLQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVhBO0FBQUE7QUFDQTtBQUNBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBbkJBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQXVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDbFJBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7QUFDQTs7OztBQUNBO0FBS0E7QUFLQTs7Ozs7OztBQUtBOzs7Ozs7O0FBT0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFUQTtBQUNBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQUdBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FBckZBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7OztBQTZFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBR0E7Ozs7Ozs7Ozs7Ozs7OztBQ3ZHQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7OztBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTs7Ozs7O0FBR0E7Ozs7Ozs7Ozs7Ozs7OztBQzFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2RBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1JBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBR0E7QUFKQTtBQVVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDYkE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTs7O0EiLCJzb3VyY2VSb290IjoiIn0=