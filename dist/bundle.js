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


var _classsNames;

__webpack_require__(4);

var _Swipe = __webpack_require__(5);

var _Swipe2 = _interopRequireDefault(_Swipe);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

window.onload = function () {
  startup();
};

//lconst resistance = 4; //ослабление
var distance = 50; // дистанция

var classsNames = (_classsNames = {
  COMMON: ["onrefresh"]
}, _defineProperty(_classsNames, DIRECTION.UP, ["onrefresh-up"]), _defineProperty(_classsNames, DIRECTION.DOWN, ["onrefresh-down"]), _classsNames);

function startup() {
  var elem = document.getElementById("ptr-list");
  var swipe = new _Swipe2.default(elem);
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
    this.grandpa = elem.parentElement.parentElement;
    this.touchElements = new _TouchElementList2.default();
    this.isActive = false;
    this.handleStart = this.handleStart.bind(this);
    this.handleMove = this.handleMove.bind(this);
    this.handleEnd = this.handleEnd.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleTransitionEnd = this.handleTransitionEnd.bind(this);
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
      this.listElement.addEventListener("touchstart", this.handleStart, false);
      this.listElement.addEventListener("touchmove", this.handleMove, false);
      this.listElement.addEventListener("touchend", this.handleEnd, false);
      this.listElement.addEventListener("touchcancel", this.handleCancel, false);
      this.listElement.addEventListener("transitionend", this.handleTransitionEnd, false);
      this.listElement.addEventListener("webkitTransitionEnd", this.handleTransitionEnd, false);
      this.listElement.addEventListener("oTransitionEnd", this.handleTransitionEnd, false);
      this.listElement.addEventListener("otransitionend", this.handleTransitionEnd, false);
    }
  }, {
    key: 'removeListener',
    value: function removeListener() {
      this.listElement.removeEventListener("touchstart", this.handleStart, false);
      this.listElement.removeEventListener("touchmove", this.handleMove, false);
      this.listElement.removeEventListener("touchend", this.handleEnd, false);
      this.listElement.removeEventListener("touchcancel", this.handleCancel, false);
      this.listElement.removeEventListener("transitionend", this.handleTransitionEnd, false);
      this.listElement.removeEventListener("webkitTransitionEnd", this.handleTransitionEnd, false);
      this.listElement.removeEventListener("oTransitionEnd", this.handleTransitionEnd, false);
      this.listElement.removeEventListener("otransitionend", this.handleTransitionEnd, false);
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
    key: 'handleStart',
    value: function handleStart(evt) {
      var touches = evt.changedTouches;

      var _grandpa = this.grandpa,
          scrollTop = _grandpa.scrollTop,
          scrollHeight = _grandpa.scrollHeight,
          clientHeight = _grandpa.clientHeight;


      this.touchElements.setTouchElements(touches, scrollTop, scrollHeight, clientHeight);

      if (this.hasOwnProperty("onTouchStart")) {
        this.onTouchStart(this.currentTouchElement, this.touchElements);
      }
    }
  }, {
    key: 'handleMove',
    value: function handleMove(evt) {
      var touches = evt.changedTouches;
      var touchElements = this._updateTouchElements(touches);
      var touchElement = touchElements.activeTouchElement;
      var motion = touchElement.motion;


      if (motion.direction === _constants.DIRECTION.NONE) {
        this.isActive = false;
        this._resetStyle();
      } else {
        // move UP or DOWN
        evt.preventDefault();
        this.isActive = true;

        var _resistanceDistance = (0, _resistanceDistance4.default)(motion.distance, resistance),
            _distance = _resistanceDistance.distance;

        this.listElement.style.transform = (0, _getTranslateYStyle2.default)(_distance);
      }

      if (this.hasOwnProperty("onTouchMove")) {
        this.onTouchMove(touchElement, this.touchElements);
      }
    }
  }, {
    key: '_updateTouchElements',
    value: function _updateTouchElements(touches) {
      var _grandpa2 = this.grandpa,
          scrollTop = _grandpa2.scrollTop,
          scrollHeight = _grandpa2.scrollHeight,
          clientHeight = _grandpa2.clientHeight;


      return this.touchElements.updateTouchElements(touches, scrollTop, scrollHeight, clientHeight);
    }
  }, {
    key: 'handleEnd',
    value: function handleEnd(evt) {
      var touchElement = this._handleRemove(evt);

      if (touchElement !== null && this.hasOwnProperty("onTouchEnd")) {
        this.onTouchEnd(touchElement, this.touchElements);
      }
    }
  }, {
    key: 'handleCancel',
    value: function handleCancel(evt) {
      var touchElement = this._handleRemove(evt);

      if (touchElement !== null && this.hasOwnProperty("onTouchCancel")) {
        this.onTouchCancel(touchElement, this.touchElements);
      }
    }
  }, {
    key: '_handleRemove',
    value: function _handleRemove(evt) {
      var touches = evt.changedTouches; // те, которые покинули экран

      // Удаляем все неактивные (оторванные) touch, в том числе и активный.
      var touchElements = this.touchElements.deleteTouchElements(touches);

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

      var _resistanceDistance2 = (0, _resistanceDistance4.default)(motion.distance, resistance),
          dist = _resistanceDistance2.distance,
          distanceAbs = _resistanceDistance2.distanceAbs;

      if (distanceAbs >= distance) {
        var _classNames2 = Swipe.getClassNames(motion.direction);
        this._addClass.apply(this, _toConsumableArray(_classNames2));
        this._onRefresh(dist, _classNames2);
      }
      this._setAfterRemoveTouchStyle();

      return prevActiveTouchElement; // touchElement or null
    }
  }, {
    key: '_onRefresh',
    value: function _onRefresh(distance, classNames) {
      if (this.hasOwnProperty("onRefresh")) {
        var promise = this.onRefresh(distance);
        var self = this;
        if (!(0, _check.isPromise)(promise)) {
          throw new Error('The onRefresh function`s return value must be must be the Promise');
        }
        promise.then(function () {
          var _self$_removeClass;

          (_self$_removeClass = self._removeClass).call.apply(_self$_removeClass, [self].concat(_toConsumableArray(classNames)));
        });
      }
    }
  }, {
    key: '_addClass',
    value: function _addClass() {
      var classList = this.grandpa.classList;
      classList.add.apply(classList, arguments);
    }
  }, {
    key: '_removeClass',
    value: function _removeClass() {
      var classList = this.grandpa.classList;
      classList.remove.apply(classList, arguments);
    }
  }, {
    key: '_setAfterRemoveTouchStyle',
    value: function _setStyle() {
      // #todo править получение стилей
      this.listElement.style = (0, _getAfterRemoveTouchStyle2.default)();
    }
  }, {
    key: '_resetStyle',
    value: function _resetStyle() {
      this.listElement.style = null;
    }
  }, {
    key: 'handleTransitionEnd',
    value: function handleTransitionEnd(evt) {
      if ((evt.type === "transitionend" || evt.type === "webkitTransitionEnd" || evt.type === "oTransitionEnd" || evt.type === "otransitionend") && evt.propertyName === "transform") {
        this.isActive = false;
        this._resetStyle();
      }
    }
  }], [{
    key: 'getClassNames',
    value: function getClassNames(direction) {
      var classNames = "";
      if (direction === _constants.DIRECTION.DOWN) {
        classNames = this.classNames.COMMON.concat(classNames.DOWN);
      } else if (direction === _constants.DIRECTION.UP) {
        classNames = this.classNames.COMMON.concat(classNames.UP);
      }
      return classNames;
    }
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

  return "-webkit-transform:translateY(0);" + "-ms-transform:translateY(0);" + "transform:translateY(0);" + ("-webkit-transition-duration:" + duration + "ms;") + ("transition-duration:" + duration + "ms;") + "-webkit-transition-timing-function:cubic-bezier(.33,.66,.66,1);" + "transition-timing-function:cubic-bezier(.33,.66,.66,1);" + ("-webkit-transition-delay:" + delay + "ms;") + ("transition-delay:" + delay + "ms;");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIDA2OWVmOWMyOTk5MjY4Y2Q4MTM2Iiwid2VicGFjazovLy9qcy9Ub3VjaC5qcyIsIndlYnBhY2s6Ly8vanMvRWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vanMvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy9qcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zdHlsZS9zdHlsZS5jc3M/NzJhMiIsIndlYnBhY2s6Ly8vanMvU3dpcGUuanMiLCJ3ZWJwYWNrOi8vL2pzL1RvdWNoRWxlbWVudExpc3QuanMiLCJ3ZWJwYWNrOi8vL2pzL1RvdWNoRWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vanMvdXRpbHMvY2hlY2suanMiLCJ3ZWJwYWNrOi8vL2pzL3V0aWxzL2dldFRyYW5zbGF0ZVlTdHlsZS5qcyIsIndlYnBhY2s6Ly8vanMvdXRpbHMvZ2V0QWZ0ZXJSZW1vdmVUb3VjaFN0eWxlLmpzIiwid2VicGFjazovLy9qcy91dGlscy9yZXNpc3RhbmNlRGlzdGFuY2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMDY5ZWY5YzI5OTkyNjhjZDgxMzYiLCJjbGFzcyBUb3VjaCB7XG4gIC8vIHN0YXJ0WTtcbiAgLy8gY3VycmVudFk7XG4gIC8vIGlkZW50aWZpZXI7XG5cbiAgY29uc3RydWN0b3IodG91Y2gpIHtcbiAgICB0aGlzLnN0YXJ0WSA9IHRoaXMuY3VycmVudFkgPSB0b3VjaC5jbGllbnRZO1xuICAgIHRoaXMuaWRlbnRpZmllciA9IHRvdWNoLmlkZW50aWZpZXI7XG4gIH1cblxuICB1cGRhdGUodG91Y2gpe1xuICAgIHRoaXMuY3VycmVudFkgPSB0b3VjaC5jbGllbnRZO1xuICB9XG5cbiAgLy8gcmVzZXQoKSB7XG4gIC8vICAgdGhpcy5zdGFydFkgPSAwO1xuICAvLyAgIHRoaXMuY3VycmVudFkgPSAwO1xuICAvLyAgIHRoaXMuaWRlbnRpZmllciA9IG51bGw7XG4gIC8vIH1cbn1cbmV4cG9ydCBkZWZhdWx0IFRvdWNoO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBqcy9Ub3VjaC5qcyIsImNsYXNzIEVsZW1lbnQge1xuICAvKipcbiAgICpcbiAgICogQHBhcmFtIHNjcm9sbFRvcCB7TnVtYmVyfVxuICAgKiBAcGFyYW0gc2Nyb2xsSGVpZ2h0IHtOdW1iZXJ9XG4gICAqIEBwYXJhbSBjbGllbnRIZWlnaHQge051bWJlcn1cbiAgICovXG4gIGNvbnN0cnVjdG9yKHNjcm9sbFRvcCwgc2Nyb2xsSGVpZ2h0LCBjbGllbnRIZWlnaHQpIHtcbiAgICB0aGlzLnNjcm9sbFRvcCA9IHNjcm9sbFRvcDtcbiAgICB0aGlzLnNjcm9sbEhlaWdodCA9IHNjcm9sbEhlaWdodDtcbiAgICB0aGlzLmNsaWVudEhlaWdodCA9IGNsaWVudEhlaWdodDtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0gZWxlbWVudCB7RWxlbWVudH1cbiAgICovXG4gIHVwZGF0ZShlbGVtZW50KSB7XG4gICAgdGhpcy5zY3JvbGxUb3AgPSBlbGVtZW50LnNjcm9sbFRvcDtcbiAgICB0aGlzLnNjcm9sbEhlaWdodCA9IGVsZW1lbnQuc2Nyb2xsSGVpZ2h0O1xuICAgIHRoaXMuY2xpZW50SGVpZ2h0ID0gZWxlbWVudC5jbGllbnRIZWlnaHQ7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWxlbWVudDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBqcy9FbGVtZW50LmpzIiwiZXhwb3J0IGNvbnN0IERJUkVDVElPTiA9IHtcbiAgVVA6ICdVUCcsXG4gIERPV046ICdET1dOJyxcbiAgTk9ORTogJ05PTkUnLFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBqcy9jb25zdGFudHMuanMiLCJpbXBvcnQgJy4uL3N0eWxlL3N0eWxlLmNzcyc7XG5pbXBvcnQgU3dpcGUgZnJvbSAnLi9Td2lwZSc7XG5cbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gIHN0YXJ0dXAoKTtcbn07XG5cbi8vbGNvbnN0IHJlc2lzdGFuY2UgPSA0OyAvL9C+0YHQu9Cw0LHQu9C10L3QuNC1XG5jb25zdCBkaXN0YW5jZSA9IDUwOyAvLyDQtNC40YHRgtCw0L3RhtC40Y9cblxuY29uc3QgY2xhc3NzTmFtZXMgPSB7XG4gIENPTU1PTjogW1wib25yZWZyZXNoXCJdLFxuICBbRElSRUNUSU9OLlVQXTogW1wib25yZWZyZXNoLXVwXCJdLFxuICBbRElSRUNUSU9OLkRPV05dOiBbXCJvbnJlZnJlc2gtZG93blwiXSxcbn07XG5cbmZ1bmN0aW9uIHN0YXJ0dXAoKSB7XG4gIGNvbnN0IGVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInB0ci1saXN0XCIpO1xuICBjb25zdCBzd2lwZSA9IG5ldyBTd2lwZShlbGVtKTtcbiAgc3dpcGUuYWRkTGlzdGVuZXIoKTtcblxuICBzd2lwZS5vblJlZnJlc2goZnVuY3Rpb24gKGRpc3RhbmNlKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAvLyDQv9C10YDQtdCy0LXQtNGR0YIg0L/RgNC+0LzQuNGBINCyINGB0L7RgdGC0L7Rj9C90LjQtSBmdWxmaWxsZWQg0YEg0YDQtdC30YPQu9GM0YLQsNGC0L7QvCBcInJlc3VsdFwiXG4gICAgICAgIHJlc29sdmUoXCJyZXN1bHQgXCIgKyBkaXN0YW5jZSk7XG4gICAgICB9LCAyMDAwKTtcblxuICAgIH0pO1xuICB9KTtcblxuICBzd2lwZS5jYWxsYmFja3Moe1xuICAgIG9uVG91Y2hNb3ZlOiBmdW5jdGlvbiAodG91Y2hFbGVtZW50KSB7XG4gICAgICBjb25zdCB7IG1vdGlvbiB9ID0gdG91Y2hFbGVtZW50O1xuICAgICAgY29uc29sZS5sb2cobW90aW9uLmRpc3RhbmNlKTtcbiAgICB9XG4gIH0pO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGpzL2luZGV4LmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3N0eWxlL3N0eWxlLmNzc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgVG91Y2hFbGVtZW50TGlzdCBmcm9tICcuL1RvdWNoRWxlbWVudExpc3QnO1xuaW1wb3J0IHsgRElSRUNUSU9OIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IHtcbiAgaXNQcm9taXNlLFxuICBpc0FycmF5LFxuICBpc1N0cmluZyxcbn0gZnJvbSAnLi91dGlscy9jaGVjayc7XG5pbXBvcnQgZ2V0VHJhbnNsYXRlWVN0eWxlIGZyb20gJy4vdXRpbHMvZ2V0VHJhbnNsYXRlWVN0eWxlJztcbmltcG9ydCBnZXRBZnRlclJlbW92ZVRvdWNoU3R5bGUgZnJvbSAnLi91dGlscy9nZXRBZnRlclJlbW92ZVRvdWNoU3R5bGUnO1xuaW1wb3J0IHJlc2lzdGFuY2VEaXN0YW5jZSBmcm9tICcuL3V0aWxzL3Jlc2lzdGFuY2VEaXN0YW5jZSc7XG5cbmNvbnN0IGNsYXNzTmFtZXMgPSB7XG4gIENPTU1PTjogW1wib25yZWZyZXNoXCJdLFxuICBbRElSRUNUSU9OLlVQXTogW1wib25yZWZyZXNoLXVwXCJdLFxuICBbRElSRUNUSU9OLkRPV05dOiBbXCJvbnJlZnJlc2gtZG93blwiXSxcbn07XG5cbmNsYXNzIFN3aXBlIHtcbiAgY29uc3RydWN0b3IoZWxlbSwgZGlzdGFuY2UgPSA1MCwgcmVzaXN0YW5jZSA9IDIsIGNsYXNzTmFtZXMgPSB7fSkge1xuICAgIHRoaXMubGlzdEVsZW1lbnQgPSBlbGVtO1xuICAgIHRoaXMucmVzaXN0YW5jZSA9IHJlc2lzdGFuY2U7XG4gICAgdGhpcy5kaXN0YW5jZSA9IGRpc3RhbmNlO1xuICAgIHRoaXMuY2xhc3NOYW1lcyA9IHRoaXMuX21lcmdlQ2xhc3NOYW1lcyhjbGFzc05hbWVzKTtcbiAgICB0aGlzLmdyYW5kcGEgPSBlbGVtLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICB0aGlzLnRvdWNoRWxlbWVudHMgPSBuZXcgVG91Y2hFbGVtZW50TGlzdCgpO1xuICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLmhhbmRsZVN0YXJ0ID0gdGhpcy5oYW5kbGVTdGFydC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlTW92ZSA9IHRoaXMuaGFuZGxlTW92ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlRW5kID0gdGhpcy5oYW5kbGVFbmQuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZUNhbmNlbCA9IHRoaXMuaGFuZGxlQ2FuY2VsLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVUcmFuc2l0aW9uRW5kID0gdGhpcy5oYW5kbGVUcmFuc2l0aW9uRW5kLmJpbmQodGhpcyk7XG4gIH1cblxuICBfbWVyZ2VDbGFzc05hbWVzKGNsc05hbWVzKSB7XG4gICAgbGV0IHJlc3VsdCA9IHt9O1xuICAgIE9iamVjdC5rZXlzKGNsYXNzTmFtZXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgY29uc3QgdmFsdWUgPSBjbGFzc05hbWVzW2tleV07XG4gICAgICBjb25zdCBjbHMgPSBjbHNOYW1lc1trZXldO1xuICAgICAgaWYgKGlzQXJyYXkoY2xzKSkge1xuICAgICAgICByZXN1bHRba2V5XSA9IFsuLi52YWx1ZSwgLi4uY2xzXTtcbiAgICAgIH0gZWxzZSBpZiAoaXNTdHJpbmcoY2xzKSkge1xuICAgICAgICByZXN1bHRba2V5XSA9IFsuLi52YWx1ZSwgY2xzXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdFtrZXldID0gdmFsdWU7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGFkZExpc3RlbmVyKCkge1xuICAgIHRoaXMubGlzdEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgdGhpcy5oYW5kbGVTdGFydCwgZmFsc2UpO1xuICAgIHRoaXMubGlzdEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLCB0aGlzLmhhbmRsZU1vdmUsIGZhbHNlKTtcbiAgICB0aGlzLmxpc3RFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLCB0aGlzLmhhbmRsZUVuZCwgZmFsc2UpO1xuICAgIHRoaXMubGlzdEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoY2FuY2VsXCIsIHRoaXMuaGFuZGxlQ2FuY2VsLCBmYWxzZSk7XG4gICAgdGhpcy5saXN0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwidHJhbnNpdGlvbmVuZFwiLCB0aGlzLmhhbmRsZVRyYW5zaXRpb25FbmQsIGZhbHNlKTtcbiAgICB0aGlzLmxpc3RFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ3ZWJraXRUcmFuc2l0aW9uRW5kXCIsIHRoaXMuaGFuZGxlVHJhbnNpdGlvbkVuZCwgZmFsc2UpO1xuICAgIHRoaXMubGlzdEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm9UcmFuc2l0aW9uRW5kXCIsIHRoaXMuaGFuZGxlVHJhbnNpdGlvbkVuZCwgZmFsc2UpO1xuICAgIHRoaXMubGlzdEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm90cmFuc2l0aW9uZW5kXCIsIHRoaXMuaGFuZGxlVHJhbnNpdGlvbkVuZCwgZmFsc2UpO1xuICB9XG5cbiAgcmVtb3ZlTGlzdGVuZXIoKSB7XG4gICAgdGhpcy5saXN0RWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCB0aGlzLmhhbmRsZVN0YXJ0LCBmYWxzZSk7XG4gICAgdGhpcy5saXN0RWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsIHRoaXMuaGFuZGxlTW92ZSwgZmFsc2UpO1xuICAgIHRoaXMubGlzdEVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsIHRoaXMuaGFuZGxlRW5kLCBmYWxzZSk7XG4gICAgdGhpcy5saXN0RWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2hjYW5jZWxcIiwgdGhpcy5oYW5kbGVDYW5jZWwsIGZhbHNlKTtcbiAgICB0aGlzLmxpc3RFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0cmFuc2l0aW9uZW5kXCIsIHRoaXMuaGFuZGxlVHJhbnNpdGlvbkVuZCwgZmFsc2UpO1xuICAgIHRoaXMubGlzdEVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIndlYmtpdFRyYW5zaXRpb25FbmRcIiwgdGhpcy5oYW5kbGVUcmFuc2l0aW9uRW5kLCBmYWxzZSk7XG4gICAgdGhpcy5saXN0RWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwib1RyYW5zaXRpb25FbmRcIiwgdGhpcy5oYW5kbGVUcmFuc2l0aW9uRW5kLCBmYWxzZSk7XG4gICAgdGhpcy5saXN0RWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwib3RyYW5zaXRpb25lbmRcIiwgdGhpcy5oYW5kbGVUcmFuc2l0aW9uRW5kLCBmYWxzZSk7XG4gIH1cblxuICBjYWxsYmFja3MoY2JzKSB7XG4gICAgaWYgKGNicy5oYXNPd25Qcm9wZXJ0eShcIm9uVG91Y2hTdGFydFwiKSkge1xuICAgICAgdGhpcy5vblRvdWNoU3RhcnQgPSBjYnMub25Ub3VjaFN0YXJ0O1xuICAgIH1cbiAgICBpZiAoY2JzLmhhc093blByb3BlcnR5KFwib25Ub3VjaE1vdmVcIikpIHtcbiAgICAgIHRoaXMub25Ub3VjaE1vdmUgPSBjYnMub25Ub3VjaE1vdmU7XG4gICAgfVxuICAgIGlmIChjYnMuaGFzT3duUHJvcGVydHkoXCJvblRvdWNoRW5kXCIpKSB7XG4gICAgICB0aGlzLm9uVG91Y2hFbmQgPSBjYnMub25Ub3VjaEVuZDtcbiAgICB9XG4gICAgaWYgKGNicy5oYXNPd25Qcm9wZXJ0eShcIm9uVG91Y2hDYW5jZWxcIikpIHtcbiAgICAgIHRoaXMub25Ub3VjaENhbmNlbCA9IGNicy5vblRvdWNoQ2FuY2VsO1xuICAgIH1cbiAgfVxuXG4gIG9uUmVmcmVzaChmdW5jKSB7XG4gICAgaWYgKHR5cGVvZiBmdW5jICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignb25SZWZyZXNoIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuICAgIH1cbiAgICB0aGlzLm9uUmVmcmVzaCA9IGZ1bmM7XG4gIH1cblxuICBoYW5kbGVTdGFydChldnQpIHtcbiAgICBjb25zdCB0b3VjaGVzID0gZXZ0LmNoYW5nZWRUb3VjaGVzO1xuXG4gICAgY29uc3Qge1xuICAgICAgICAgICAgc2Nyb2xsVG9wLFxuICAgICAgICAgICAgc2Nyb2xsSGVpZ2h0LFxuICAgICAgICAgICAgY2xpZW50SGVpZ2h0LFxuICAgICAgICAgIH0gPSB0aGlzLmdyYW5kcGE7XG5cbiAgICB0aGlzLnRvdWNoRWxlbWVudHMuc2V0VG91Y2hFbGVtZW50cyh0b3VjaGVzLCBzY3JvbGxUb3AsIHNjcm9sbEhlaWdodCwgY2xpZW50SGVpZ2h0KTtcblxuICAgIGlmICh0aGlzLmhhc093blByb3BlcnR5KFwib25Ub3VjaFN0YXJ0XCIpKSB7XG4gICAgICB0aGlzLm9uVG91Y2hTdGFydCh0aGlzLmN1cnJlbnRUb3VjaEVsZW1lbnQsIHRoaXMudG91Y2hFbGVtZW50cyk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlTW92ZShldnQpIHtcbiAgICBjb25zdCB0b3VjaGVzID0gZXZ0LmNoYW5nZWRUb3VjaGVzO1xuICAgIGNvbnN0IHRvdWNoRWxlbWVudHMgPSB0aGlzLl91cGRhdGVUb3VjaEVsZW1lbnRzKHRvdWNoZXMpO1xuICAgIGNvbnN0IHRvdWNoRWxlbWVudCA9IHRvdWNoRWxlbWVudHMuYWN0aXZlVG91Y2hFbGVtZW50O1xuICAgIGNvbnN0IHsgbW90aW9uIH0gPSB0b3VjaEVsZW1lbnQ7XG5cbiAgICBpZiAobW90aW9uLmRpcmVjdGlvbiA9PT0gRElSRUNUSU9OLk5PTkUpIHtcbiAgICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuX3Jlc2V0U3R5bGUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gbW92ZSBVUCBvciBET1dOXG4gICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRoaXMuaXNBY3RpdmUgPSB0cnVlO1xuICAgICAgY29uc3QgeyBkaXN0YW5jZSB9ID0gcmVzaXN0YW5jZURpc3RhbmNlKG1vdGlvbi5kaXN0YW5jZSwgcmVzaXN0YW5jZSk7XG4gICAgICB0aGlzLmxpc3RFbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IGdldFRyYW5zbGF0ZVlTdHlsZShkaXN0YW5jZSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaGFzT3duUHJvcGVydHkoXCJvblRvdWNoTW92ZVwiKSkge1xuICAgICAgdGhpcy5vblRvdWNoTW92ZSh0b3VjaEVsZW1lbnQsIHRoaXMudG91Y2hFbGVtZW50cyk7XG4gICAgfVxuICB9XG5cbiAgX3VwZGF0ZVRvdWNoRWxlbWVudHModG91Y2hlcykge1xuICAgIGNvbnN0IHtcbiAgICAgICAgICAgIHNjcm9sbFRvcCxcbiAgICAgICAgICAgIHNjcm9sbEhlaWdodCxcbiAgICAgICAgICAgIGNsaWVudEhlaWdodCxcbiAgICAgICAgICB9ID0gdGhpcy5ncmFuZHBhO1xuXG4gICAgcmV0dXJuIHRoaXMudG91Y2hFbGVtZW50cy51cGRhdGVUb3VjaEVsZW1lbnRzKHRvdWNoZXMsIHNjcm9sbFRvcCwgc2Nyb2xsSGVpZ2h0LCBjbGllbnRIZWlnaHQpO1xuICB9XG5cbiAgaGFuZGxlRW5kKGV2dCkge1xuICAgIGNvbnN0IHRvdWNoRWxlbWVudCA9IHRoaXMuX2hhbmRsZVJlbW92ZShldnQpO1xuXG4gICAgaWYgKHRvdWNoRWxlbWVudCAhPT0gbnVsbCAmJiB0aGlzLmhhc093blByb3BlcnR5KFwib25Ub3VjaEVuZFwiKSkge1xuICAgICAgdGhpcy5vblRvdWNoRW5kKHRvdWNoRWxlbWVudCwgdGhpcy50b3VjaEVsZW1lbnRzKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVDYW5jZWwoZXZ0KSB7XG4gICAgY29uc3QgdG91Y2hFbGVtZW50ID0gdGhpcy5faGFuZGxlUmVtb3ZlKGV2dCk7XG5cbiAgICBpZiAodG91Y2hFbGVtZW50ICE9PSBudWxsICYmIHRoaXMuaGFzT3duUHJvcGVydHkoXCJvblRvdWNoQ2FuY2VsXCIpKSB7XG4gICAgICB0aGlzLm9uVG91Y2hDYW5jZWwodG91Y2hFbGVtZW50LCB0aGlzLnRvdWNoRWxlbWVudHMpO1xuICAgIH1cbiAgfVxuXG4gIF9oYW5kbGVSZW1vdmUoZXZ0KSB7XG4gICAgY29uc3QgdG91Y2hlcyA9IGV2dC5jaGFuZ2VkVG91Y2hlczsgLy8g0YLQtSwg0LrQvtGC0L7RgNGL0LUg0L/QvtC60LjQvdGD0LvQuCDRjdC60YDQsNC9XG5cbiAgICAvLyDQo9C00LDQu9GP0LXQvCDQstGB0LUg0L3QtdCw0LrRgtC40LLQvdGL0LUgKNC+0YLQvtGA0LLQsNC90L3Ri9C1KSB0b3VjaCwg0LIg0YLQvtC8INGH0LjRgdC70LUg0Lgg0LDQutGC0LjQstC90YvQuS5cbiAgICBjb25zdCB0b3VjaEVsZW1lbnRzID0gdGhpcy50b3VjaEVsZW1lbnRzLmRlbGV0ZVRvdWNoRWxlbWVudHModG91Y2hlcyk7XG5cbiAgICAvLyDQldGB0LvQuCDQsiDQtNCw0L3QvdGL0Lkg0LzQvtC80LXQvdGCINGB0LrRgNC+0LvQuNC8INGB0L/QuNGB0L7Quiwg0YLQviDRgNC10LDQs9C40YDQvtCy0LDRgtGMINC90LUg0L3QsNC00L4gKNC90LXRgiDQsiDQtNCw0L3QvdGL0Lkg0LzQvtC80LXQvdGCINGN0YTRhNC10LrRgtCwXG4gICAgLy8gcHVsbC10by1yZWZyZXNoKS5cbiAgICBpZiAoIXRoaXMuaXNBY3RpdmUpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IHsgYWN0aXZlVG91Y2hFbGVtZW50LCBwcmV2QWN0aXZlVG91Y2hFbGVtZW50LCB9ID0gdG91Y2hFbGVtZW50cztcblxuICAgIGlmIChhY3RpdmVUb3VjaEVsZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8vINCS0YHQtSDQv9Cw0LvRjNGG0Ysg0L/QvtC60LjQvdGD0LvQuCDRjdC60YDQsNC9XG4gICAgLy8g0L/RgNC+0YbQtdC00YPRgNCwINC40L3QuNGG0LjQsNC70LjQt9Cw0YbQuNC4INC00L7QsdCw0LLQu9C10L3QuNGPINC60LvQsNGB0YHQvtCyINC4INC+0LHRgNCw0LHQvtGC0YfQuNC60L7QslxuICAgIGNvbnN0IHsgbW90aW9uIH0gPSBwcmV2QWN0aXZlVG91Y2hFbGVtZW50O1xuXG4gICAgY29uc3QgeyBkaXN0YW5jZTogZGlzdCwgZGlzdGFuY2VBYnMgfSA9IHJlc2lzdGFuY2VEaXN0YW5jZShtb3Rpb24uZGlzdGFuY2UsIHJlc2lzdGFuY2UpO1xuXG4gICAgaWYgKGRpc3RhbmNlQWJzID49IGRpc3RhbmNlKSB7XG4gICAgICBjb25zdCBjbGFzc05hbWVzID0gU3dpcGUuZ2V0Q2xhc3NOYW1lcyhtb3Rpb24uZGlyZWN0aW9uKTtcbiAgICAgIHRoaXMuX2FkZENsYXNzKC4uLmNsYXNzTmFtZXMpO1xuICAgICAgdGhpcy5fb25SZWZyZXNoKGRpc3QsIGNsYXNzTmFtZXMpO1xuICAgIH1cbiAgICB0aGlzLl9zZXRTdHlsZSgpO1xuXG4gICAgcmV0dXJuIHByZXZBY3RpdmVUb3VjaEVsZW1lbnQ7IC8vIHRvdWNoRWxlbWVudCBvciBudWxsXG4gIH1cblxuICBzdGF0aWMgZ2V0Q2xhc3NOYW1lcyhkaXJlY3Rpb24pIHtcbiAgICBsZXQgY2xhc3NOYW1lcyA9IFwiXCI7XG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gRElSRUNUSU9OLkRPV04pIHtcbiAgICAgIGNsYXNzTmFtZXMgPSB0aGlzLmNsYXNzTmFtZXMuQ09NTU9OLmNvbmNhdChjbGFzc05hbWVzLkRPV04pO1xuICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSBESVJFQ1RJT04uVVApIHtcbiAgICAgIGNsYXNzTmFtZXMgPSB0aGlzLmNsYXNzTmFtZXMuQ09NTU9OLmNvbmNhdChjbGFzc05hbWVzLlVQKTtcbiAgICB9XG4gICAgcmV0dXJuIGNsYXNzTmFtZXM7XG4gIH1cblxuICBfb25SZWZyZXNoKGRpc3RhbmNlLCBjbGFzc05hbWVzKSB7XG4gICAgaWYgKHRoaXMuaGFzT3duUHJvcGVydHkoXCJvblJlZnJlc2hcIikpIHtcbiAgICAgIGNvbnN0IHByb21pc2UgPSB0aGlzLm9uUmVmcmVzaChkaXN0YW5jZSk7XG4gICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgIGlmICghaXNQcm9taXNlKHByb21pc2UpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIG9uUmVmcmVzaCBmdW5jdGlvbmBzIHJldHVybiB2YWx1ZSBtdXN0IGJlIG11c3QgYmUgdGhlIFByb21pc2UnKTtcbiAgICAgIH1cbiAgICAgIHByb21pc2VcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIHNlbGYuX3JlbW92ZUNsYXNzLmNhbGwoc2VsZiwgLi4uY2xhc3NOYW1lcyk7XG4gICAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgX2FkZENsYXNzKCkge1xuICAgIGNvbnN0IGNsYXNzTGlzdCA9IHRoaXMuZ3JhbmRwYS5jbGFzc0xpc3Q7XG4gICAgY2xhc3NMaXN0LmFkZCguLi5hcmd1bWVudHMpO1xuICB9XG5cbiAgX3JlbW92ZUNsYXNzKCkge1xuICAgIGNvbnN0IGNsYXNzTGlzdCA9IHRoaXMuZ3JhbmRwYS5jbGFzc0xpc3Q7XG4gICAgY2xhc3NMaXN0LnJlbW92ZSguLi5hcmd1bWVudHMpO1xuICB9XG5cbiAgX3NldFN0eWxlKCkge1xuICAgIC8vICN0b2RvINC/0YDQsNCy0LjRgtGMINC/0L7Qu9GD0YfQtdC90LjQtSDRgdGC0LjQu9C10LlcbiAgICB0aGlzLmxpc3RFbGVtZW50LnN0eWxlID0gZ2V0QWZ0ZXJSZW1vdmVUb3VjaFN0eWxlKCk7XG4gIH1cblxuICBfcmVzZXRTdHlsZSgpIHtcbiAgICB0aGlzLmxpc3RFbGVtZW50LnN0eWxlID0gbnVsbDtcbiAgfVxuXG4gIGhhbmRsZVRyYW5zaXRpb25FbmQoZXZ0KSB7XG4gICAgaWYgKFxuICAgICAgKGV2dC50eXBlID09PSBcInRyYW5zaXRpb25lbmRcIlxuICAgICAgICB8fCBldnQudHlwZSA9PT0gXCJ3ZWJraXRUcmFuc2l0aW9uRW5kXCJcbiAgICAgICAgfHwgZXZ0LnR5cGUgPT09IFwib1RyYW5zaXRpb25FbmRcIlxuICAgICAgICB8fCBldnQudHlwZSA9PT0gXCJvdHJhbnNpdGlvbmVuZFwiKVxuICAgICAgJiYgZXZ0LnByb3BlcnR5TmFtZSA9PT0gXCJ0cmFuc2Zvcm1cIlxuICAgICkge1xuICAgICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgdGhpcy5fcmVzZXRTdHlsZSgpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTd2lwZTtcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGpzL1N3aXBlLmpzIiwiaW1wb3J0IFRvdWNoIGZyb20gJy4vVG91Y2gnO1xuaW1wb3J0IEVsZW1lbnQgZnJvbSAnLi9FbGVtZW50JztcbmltcG9ydCBUb3VjaEVsZW1lbnQgZnJvbSAnLi9Ub3VjaEVsZW1lbnQnO1xuXG5jbGFzcyBUb3VjaEVsZW1lbnRMaXN0IHtcbiAgX2FjdGl2ZVRvdWNoRWxlbWVudCA9IG51bGw7XG4gIGdldCBhY3RpdmVUb3VjaEVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FjdGl2ZVRvdWNoRWxlbWVudDtcbiAgfVxuXG4gIF9wcmV2QWN0aXZlVG91Y2hFbGVtZW50ID0gbnVsbDtcbiAgZ2V0IHByZXZBY3RpdmVUb3VjaEVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ByZXZBY3RpdmVUb3VjaEVsZW1lbnQ7XG4gIH1cblxuICBfdG91Y2hFbGVtZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIGdldCB0b3VjaEVsZW1lbnRzKCkge1xuICAgIHJldHVybiB0aGlzLl90b3VjaEVsZW1lbnRzO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSB0b3VjaGVzXG4gICAqIEBwYXJhbSBzY3JvbGxUb3BcbiAgICogQHBhcmFtIHNjcm9sbEhlaWdodFxuICAgKiBAcGFyYW0gY2xpZW50SGVpZ2h0XG4gICAqL1xuICBzZXRUb3VjaEVsZW1lbnRzKHRvdWNoZXMsIHNjcm9sbFRvcCwgc2Nyb2xsSGVpZ2h0LCBjbGllbnRIZWlnaHQpIHtcbiAgICBPYmplY3Qua2V5cyh0b3VjaGVzKS5tYXAoKGtleSkgPT4ge1xuICAgICAgY29uc3QgdG91Y2ggPSB0b3VjaGVzW2tleV07XG4gICAgICBjb25zdCB7IGlkZW50aWZpZXIgfSA9IHRvdWNoO1xuXG4gICAgICBsZXQgdG91Y2hFbGVtZW50cyA9IHRoaXMuX3RvdWNoRWxlbWVudHM7XG4gICAgICBpZiAodG91Y2hFbGVtZW50c1tpZGVudGlmaWVyXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRvdWNoRWxlbWVudHNbaWRlbnRpZmllcl0gPSBUb3VjaEVsZW1lbnRMaXN0LmJ1aWxkVG91Y2hFbGVtZW50KHRvdWNoLCBzY3JvbGxUb3AsIHNjcm9sbEhlaWdodCwgY2xpZW50SGVpZ2h0KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zdCBhY3RpdmVUb3VjaEVsZW1lbnQgPSB0aGlzLl9nZXRGaXJzdFRvdWNoRWxlbWVudCgpO1xuICAgIHRoaXMuX3NldEFjdGl2ZVRvdWNoRWxlbWVudChhY3RpdmVUb3VjaEVsZW1lbnQpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgdXBkYXRlVG91Y2hFbGVtZW50cyh0b3VjaGVzLCBzY3JvbGxUb3AsIHNjcm9sbEhlaWdodCwgY2xpZW50SGVpZ2h0KSB7XG4gICAgT2JqZWN0LmtleXModG91Y2hlcykubWFwKChrZXkpID0+IHtcbiAgICAgIGNvbnN0IHRvdWNoID0gdG91Y2hlc1trZXldO1xuICAgICAgY29uc3QgeyBpZGVudGlmaWVyIH0gPSB0b3VjaDtcblxuICAgICAgbGV0IHRvdWNoRWxlbWVudHMgPSB0aGlzLl90b3VjaEVsZW1lbnRzO1xuICAgICAgaWYgKHRvdWNoRWxlbWVudHNbaWRlbnRpZmllcl0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0b3VjaEVsZW1lbnRzW2lkZW50aWZpZXJdID0gVG91Y2hFbGVtZW50TGlzdC5idWlsZFRvdWNoRWxlbWVudCh0b3VjaCwgc2Nyb2xsVG9wLCBzY3JvbGxIZWlnaHQsIGNsaWVudEhlaWdodCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0b3VjaEVsZW1lbnRzW2lkZW50aWZpZXJdLnVwZGF0ZSh0b3VjaCwgc2Nyb2xsVG9wLCBzY3JvbGxIZWlnaHQsIGNsaWVudEhlaWdodCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBkZWxldGVUb3VjaEVsZW1lbnRzKHRvdWNoZXMpIHtcbiAgICBPYmplY3Qua2V5cyh0b3VjaGVzKS5tYXAoKGtleSkgPT4ge1xuICAgICAgY29uc3QgdG91Y2ggPSB0b3VjaGVzW2tleV07XG4gICAgICBjb25zdCB7IGlkZW50aWZpZXIgfSA9IHRvdWNoO1xuXG4gICAgICBpZiAodGhpcy5fdG91Y2hFbGVtZW50c1tpZGVudGlmaWVyXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLl90b3VjaEVsZW1lbnRzW2lkZW50aWZpZXJdO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgeyBpZGVudGlmaWVyIH0gPSB0aGlzLl9hY3RpdmVUb3VjaEVsZW1lbnQudG91Y2g7XG4gICAgaWYgKHRoaXMuX3RvdWNoRWxlbWVudHNbaWRlbnRpZmllcl0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8g0JXRgdC70Lgg0LDQutGC0LjQstC90YvQuSBhY3RpdmVUb3VjaEVsZW1lbnQg0LHRi9C7INGD0LTQsNC70LXQvSwg0YLQviDQv9C+0LvRg9GH0LDQtdC8INC90L7QstGL0LksINC10YHQu9C4INGC0LDQutC+0Lkg0LXRgdGC0YxcbiAgICAgIGNvbnN0IGFjdGl2ZVRvdWNoRWxlbWVudCA9IHRoaXMuX2dldEZpcnN0VG91Y2hFbGVtZW50KCk7IC8vdG91Y2hFbGVtZW50IG9yIG51bGxcbiAgICAgIHRoaXMuX3NldEFjdGl2ZVRvdWNoRWxlbWVudChhY3RpdmVUb3VjaEVsZW1lbnQpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfZ2V0Rmlyc3RUb3VjaEVsZW1lbnQoKSB7XG4gICAgbGV0IHRvdWNoRWxlbWVudCA9IG51bGw7XG4gICAgT2JqZWN0LmtleXModGhpcy5fdG91Y2hFbGVtZW50cykuc29tZShrZXkgPT4gKHRvdWNoRWxlbWVudCA9IHRoaXMuX3RvdWNoRWxlbWVudHNba2V5XSwgdHJ1ZSkpO1xuICAgIHJldHVybiB0b3VjaEVsZW1lbnQ7XG4gIH1cblxuICBfc2V0QWN0aXZlVG91Y2hFbGVtZW50KHRvdWNoRWxlbWVudCkge1xuICAgIHRoaXMuX3ByZXZBY3RpdmVUb3VjaEVsZW1lbnQgPSB0aGlzLmFjdGl2ZVRvdWNoRWxlbWVudDtcbiAgICB0aGlzLl9hY3RpdmVUb3VjaEVsZW1lbnQgPSB0b3VjaEVsZW1lbnQ7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG4gIHN0YXRpYyBidWlsZFRvdWNoRWxlbWVudCh0b3VjaCwgc2Nyb2xsVG9wLCBzY3JvbGxIZWlnaHQsIGNsaWVudEhlaWdodCkge1xuICAgIGNvbnN0IHsgaWRlbnRpZmllciB9ID0gdG91Y2g7XG4gICAgY29uc3QgdmFsdWUgPSBuZXcgVG91Y2godG91Y2gpO1xuICAgIGNvbnN0IGVsZW1lbnQgPSBuZXcgRWxlbWVudChzY3JvbGxUb3AsIHNjcm9sbEhlaWdodCwgY2xpZW50SGVpZ2h0KTtcbiAgICByZXR1cm4gKG5ldyBUb3VjaEVsZW1lbnQodmFsdWUsIGVsZW1lbnQpKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUb3VjaEVsZW1lbnRMaXN0O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBqcy9Ub3VjaEVsZW1lbnRMaXN0LmpzIiwiaW1wb3J0IFRvdWNoIGZyb20gJy4vVG91Y2gnO1xuaW1wb3J0IEVsZW1lbnQgZnJvbSAnLi9FbGVtZW50JztcbmltcG9ydCB7IERJUkVDVElPTiB9IGZyb20gJy4vY29uc3RhbnRzJztcblxuY2xhc3MgVG91Y2hFbGVtZW50IHtcbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSB0b3VjaCB7VG91Y2h9XG4gICAqIEBwYXJhbSBlbGVtZW50IHtFbGVtZW50fVxuICAgKi9cbiAgY29uc3RydWN0b3IodG91Y2gsIGVsZW1lbnQpIHtcbiAgICB0aGlzLnRvdWNoID0gdG91Y2g7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0gdG91Y2gge1RvdWNofVxuICAgKiBAcGFyYW0gc2Nyb2xsVG9wXG4gICAqIEBwYXJhbSBzY3JvbGxIZWlnaHRcbiAgICogQHBhcmFtIGNsaWVudEhlaWdodFxuICAgKi9cbiAgdXBkYXRlKHRvdWNoLCBzY3JvbGxUb3AsIHNjcm9sbEhlaWdodCwgY2xpZW50SGVpZ2h0KSB7XG4gICAgdGhpcy50b3VjaC51cGRhdGUodG91Y2gpO1xuICAgIHRoaXMuZWxlbWVudC51cGRhdGUoe1xuICAgICAgc2Nyb2xsVG9wLFxuICAgICAgc2Nyb2xsSGVpZ2h0LFxuICAgICAgY2xpZW50SGVpZ2h0XG4gICAgfSk7XG4gIH1cblxuICBnZXQgbW90aW9uKCkge1xuICAgIGNvbnN0IG1vdmVUb3VjaFRvcFkgPSB+fih0aGlzLnRvdWNoLmN1cnJlbnRZIC0gdGhpcy50b3VjaC5zdGFydFkpOyAvL3JvdW5kXG4gICAgY29uc3QgZGlzdGFuY2VUb3AgPSBtb3ZlVG91Y2hUb3BZIC0gdGhpcy5lbGVtZW50LnNjcm9sbFRvcDtcblxuICAgIGNvbnN0IG1vdmVUb3VjaEJvdHRvbVkgPSB+bW92ZVRvdWNoVG9wWSArIDE7IC8vcmV2ZXJzZVxuICAgIGNvbnN0IHNjcm9sbEJvdHRvbSA9IHRoaXMuZWxlbWVudC5zY3JvbGxIZWlnaHQgLSAodGhpcy5lbGVtZW50LnNjcm9sbFRvcCArIHRoaXMuZWxlbWVudC5jbGllbnRIZWlnaHQpO1xuICAgIGNvbnN0IGRpc3RhbmNlQm90dG9tID0gbW92ZVRvdWNoQm90dG9tWSAtIHNjcm9sbEJvdHRvbTtcblxuICAgIGlmIChkaXN0YW5jZVRvcCA+IDApIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGRpc3RhbmNlOiBkaXN0YW5jZVRvcCxcbiAgICAgICAgZGlyZWN0aW9uOiBESVJFQ1RJT04uVVAsXG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChkaXN0YW5jZUJvdHRvbSA+IDApIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGRpc3RhbmNlOiB+ZGlzdGFuY2VCb3R0b20gKyAxLFxuICAgICAgICBkaXJlY3Rpb246IERJUkVDVElPTi5ET1dOLFxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBkaXN0YW5jZTogbnVsbCxcbiAgICAgICAgZGlyZWN0aW9uOiBESVJFQ1RJT04uTk9ORSxcbiAgICAgIH07XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRvdWNoRWxlbWVudDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8ganMvVG91Y2hFbGVtZW50LmpzIiwiZXhwb3J0IGNvbnN0IGlzT2JqZWN0ID0gZnVuY3Rpb24gaXNPYmplY3Qob2JqKSB7XHJcbiAgcmV0dXJuIG9iaiAmJiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0JyAmJiBvYmouY29uc3RydWN0b3IgPT09IE9iamVjdDtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBpc0FycmF5ID0gZnVuY3Rpb24gaXNBcnJheShvYmopIHtcclxuICByZXR1cm4gb2JqICYmIHR5cGVvZiBvYmogPT09ICdvYmplY3QnICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gQXJyYXk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgaXNTdHJpbmcgPSBmdW5jdGlvbiBpc1N0cmluZyhvYmopIHtcclxuICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gJ3N0cmluZycgfHwgKHR5cGVvZiBvYmogPT09ICdvYmplY3QnICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3RyaW5nKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBpc1Byb21pc2UgPSBmdW5jdGlvbiBpc1Byb21pc2Uob2JqKSB7XHJcbiAgcmV0dXJuICEhb2JqICYmICh0eXBlb2Ygb2JqID09PSAnb2JqZWN0JyB8fCB0eXBlb2Ygb2JqID09PSAnZnVuY3Rpb24nKSAmJiB0eXBlb2Ygb2JqLnRoZW4gPT09ICdmdW5jdGlvbic7XHJcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGpzL3V0aWxzL2NoZWNrLmpzIiwiY29uc3QgZ2V0VHJhbnNsYXRlWVN0eWxlID0gZnVuY3Rpb24gZ2V0VHJhbnNsYXRlWVN0eWxlKGRpc3RhbmNlKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIGAtd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKCR7ZGlzdGFuY2V9cHgpO2AgK1xyXG4gICAgYC1tcy10cmFuc2Zvcm06dHJhbnNsYXRlWSgke2Rpc3RhbmNlfXB4KTtgICtcclxuICAgIGB0cmFuc2Zvcm06dHJhbnNsYXRlWSgke2Rpc3RhbmNlfXB4KWBcclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2V0VHJhbnNsYXRlWVN0eWxlO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBqcy91dGlscy9nZXRUcmFuc2xhdGVZU3R5bGUuanMiLCJjb25zdCBnZXRBZnRlclJlbW92ZVRvdWNoU3R5bGUgPSBmdW5jdGlvbiBnZXRBZnRlclJlbW92ZVRvdWNoU3R5bGUoZHVyYXRpb24gPSAzMDAsIGRlbGF5ID0gMCkge1xyXG4gIHJldHVybiAoXHJcbiAgICBgLXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgwKTtgICtcclxuICAgIGAtbXMtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoMCk7YCArXHJcbiAgICBgdHJhbnNmb3JtOnRyYW5zbGF0ZVkoMCk7YCArXHJcbiAgICBgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiR7ZHVyYXRpb259bXM7YCArXHJcbiAgICBgdHJhbnNpdGlvbi1kdXJhdGlvbjoke2R1cmF0aW9ufW1zO2AgK1xyXG4gICAgYC13ZWJraXQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC4zMywuNjYsLjY2LDEpO2AgK1xyXG4gICAgYHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllciguMzMsLjY2LC42NiwxKTtgICtcclxuICAgIGAtd2Via2l0LXRyYW5zaXRpb24tZGVsYXk6JHtkZWxheX1tcztgICtcclxuICAgIGB0cmFuc2l0aW9uLWRlbGF5OiR7ZGVsYXl9bXM7YCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnZXRBZnRlclJlbW92ZVRvdWNoU3R5bGU7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGpzL3V0aWxzL2dldEFmdGVyUmVtb3ZlVG91Y2hTdHlsZS5qcyIsImNvbnN0IHJlc2lzdGFuY2VEaXN0YW5jZSA9IGZ1bmN0aW9uIHJlc2lzdGFuY2VEaXN0YW5jZShkaXN0YW5jZSwgcmVzaXN0YW5jZSA9IDEpIHtcclxuICBjb25zdCByZXNEaXN0ID0gfn4oZGlzdGFuY2UgLyByZXNpc3RhbmNlKTsgLy9yb3VuZFxyXG5cclxuICBsZXQgcmVzaXN0YW5jZURpc3RhbmNlQWJzID0gcmVzRGlzdDtcclxuICBpZiAocmVzaXN0YW5jZURpc3RhbmNlQWJzIDwgMCkge1xyXG4gICAgcmVzaXN0YW5jZURpc3RhbmNlQWJzID0gfnJlc2lzdGFuY2VEaXN0YW5jZUFicyArIDE7IC8vcmV2ZXJzZVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGRpc3RhbmNlOiByZXNEaXN0LFxyXG4gICAgZGlzdGFuY2VBYnM6IHJlc2lzdGFuY2VEaXN0YW5jZUFicyxcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZXNpc3RhbmNlRGlzdGFuY2U7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGpzL3V0aWxzL3Jlc2lzdGFuY2VEaXN0YW5jZS5qcyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBOzs7Ozs7Ozs7Ozs7Ozs7QUM3REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJBO0FBQ0E7Ozs7OztBQU1BO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFHQTs7Ozs7Ozs7Ozs7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7Ozs7OztBQ3JDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUlBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFLQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUFBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFLQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVhBO0FBQUE7QUFDQTtBQUNBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBbkJBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQXVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBOzs7QUF0REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFpREE7Ozs7Ozs7Ozs7Ozs7OztBQ3hQQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7O0FBQ0E7Ozs7QUFDQTtBQUtBO0FBS0E7Ozs7Ozs7QUFLQTs7Ozs7OztBQU9BO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVEE7QUFDQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQXJGQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUE2RUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQUdBOzs7Ozs7Ozs7Ozs7Ozs7QUN2R0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUNBOzs7OztBQUtBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7Ozs7OztBQUdBOzs7Ozs7Ozs7Ozs7Ozs7QUMxREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNkQTtBQUNBO0FBS0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNSQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBVUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNiQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBOzs7QSIsInNvdXJjZVJvb3QiOiIifQ==