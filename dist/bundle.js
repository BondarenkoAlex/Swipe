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

var _Swipe = __webpack_require__(5);

var _Swipe2 = _interopRequireDefault(_Swipe);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.onload = function () {
  startup();
};

//let swipe = new Swipe(document.getElementById("ptr"));

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

var _classsNames;

var _TouchElementList = __webpack_require__(6);

var _TouchElementList2 = _interopRequireDefault(_TouchElementList);

var _constants = __webpack_require__(2);

var _isPromise = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var resistance = 4; //ослабление
var distance = 50; // дистанция

var classsNames = (_classsNames = {
  COMMON: ["pull-to-refresh-onrefresh"]
}, _defineProperty(_classsNames, _constants.DIRECTION.UP, ["pull-to-refresh-onrefresh-up", "dsd"]), _defineProperty(_classsNames, _constants.DIRECTION.DOWN, ["pull-to-refresh-onrefresh-down", "dsfdsdsf"]), _classsNames);

var Swipe = function () {
  function Swipe(elem) {
    _classCallCheck(this, Swipe);

    this.listElement = elem;
    this.grandpa = elem.parentElement.parentElement;
    this.touchElements = new _TouchElementList2.default();
    this.currentTouchElement = null;
    this.isActive = false;
    this.handleStart = this.handleStart.bind(this);
    this.handleMove = this.handleMove.bind(this);
    this.handleEnd = this.handleEnd.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleTransitionEnd = this.handleTransitionEnd.bind(this);
  }

  _createClass(Swipe, [{
    key: 'addListener',
    value: function addListener() {
      this.listElement.addEventListener("touchstart", this.handleStart, false);
      this.listElement.addEventListener("touchmove", this.handleMove, false);
      this.listElement.addEventListener("touchend", this.handleEnd, false);
      this.listElement.addEventListener("touchcancel", this.handleCancel, false);
      this.listElement.addEventListener("transitionend", this.handleTransitionEnd, false);
    }
  }, {
    key: 'removeListener',
    value: function removeListener() {
      this.listElement.removeEventListener("touchstart", this.handleStart, false);
      this.listElement.removeEventListener("touchmove", this.handleMove, false);
      this.listElement.removeEventListener("touchend", this.handleEnd, false);
      this.listElement.removeEventListener("touchcancel", this.handleCancel, false);
      this.listElement.removeEventListener("transitionend", this.handleTransitionEnd, false);
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
      //const touches = evt.changedTouches;
      var touches = evt.touches;

      var _grandpa = this.grandpa,
          scrollTop = _grandpa.scrollTop,
          scrollHeight = _grandpa.scrollHeight,
          clientHeight = _grandpa.clientHeight;


      this.touchElements.setTouchElements(touches, scrollTop, scrollHeight, clientHeight);
      var firstTouch = this.touchElements.getFirstTouchElement();

      if (firstTouch !== this.currentTouchElement) {
        this.currentTouchElement = firstTouch;
      }

      if (this.hasOwnProperty("onTouchStart")) {
        this.onTouchStart(this.currentTouchElement, this.touchElements);
      }
    }
  }, {
    key: 'handleMove',
    value: function handleMove(evt) {
      var touchElement = this._updateTouchElement(evt);

      if (this.hasOwnProperty("onTouchMove")) {
        this.onTouchMove(touchElement, this.touchElements);
      }
    }
  }, {
    key: '_updateTouchElement',
    value: function _updateTouchElement(evt) {
      //const touches = evt.changedTouches;
      var touches = evt.touches;
      var _grandpa2 = this.grandpa,
          scrollTop = _grandpa2.scrollTop,
          scrollHeight = _grandpa2.scrollHeight,
          clientHeight = _grandpa2.clientHeight;
      var identifier = this.currentTouchElement.touch.identifier;

      var touch = getTouchByIdentifier(touches, identifier);
      var touchElement = this.touchElements.updateTouchElement(touch, scrollTop, scrollHeight, clientHeight);
      var motion = touchElement.motion;


      if (motion.direction === _constants.DIRECTION.DOWN || motion.direction === _constants.DIRECTION.UP) {
        evt.preventDefault();
        this.isActive = true;
        // #todo добавить другие свойства для кросбраузерности
        var distanceEnfeeble = ~~(motion.distance / resistance); //round
        this.listElement.style.transform = 'translateY(' + distanceEnfeeble + 'px)';
      } else {
        this.isActive = false;
        this.listElement.style.transform = null;
      }

      return touchElement;
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
      //const touches = evt.changedTouches;
      var touches = evt.touches;

      var identifier = this.currentTouchElement.touch.identifier;

      var touch = getTouchByIdentifier(touches, identifier);

      // Если закончился touch пальца, который не активный (не обрабатываем, ссылка не находится в
      // this.currentTouchElement), то игнорируем обработку неактуального косания
      if (touch === undefined) {
        return null;
      }

      // Если в данный момент скролим список, то реагировать не надо (нет в данный момент эффекта
      // pull-to-refresh).
      if (!this.isActive) {
        return null;
      }

      // Удаляем все неактивные (оторванные) touch, в том числе и активный.
      this.touchElements.deleteTouchElements(touches);
      // Получаем первый touch, если есть такие (активный touch)
      var touchElement = this.touchElements.getFirstTouchElement(); // TouchElement or null

      if (touchElement !== null) {
        // процедура обновления touch объекта
        var _touchElement = this._updateTouchElement(evt);
      } else {
        // процедура инициализации добавления классов и обработчиков
        var motion = this.currentTouchElement.motion;


        var distanceEnfeeble = ~~(motion.distance / resistance); //round
        var distanceEnfeebleAbs = distanceEnfeeble; // only for compare
        if (motion.direction === _constants.DIRECTION.DOWN) {
          distanceEnfeebleAbs = ~distanceEnfeebleAbs + 1;
        }
        if (distanceEnfeebleAbs >= distance) {
          var classNames = this._getClassNames(motion.direction);
          this._addClass.apply(this, _toConsumableArray(classNames));
          this._onRefresh(distanceEnfeeble, classNames);
        }
        this._setStyle();
      }

      return touchElement; // touchElement or null
    }
  }, {
    key: '_getClassNames',
    value: function _getClassNames(direction) {
      var classNames = "";
      if (direction === _constants.DIRECTION.DOWN) {
        classNames = classsNames.COMMON.concat(classsNames.DOWN);
      } else if (direction === _constants.DIRECTION.UP) {
        classNames = classsNames.COMMON.concat(classsNames.UP);
      }
      return classNames;
    }
  }, {
    key: '_onRefresh',
    value: function _onRefresh(distance, classNames) {
      if (this.hasOwnProperty("onRefresh")) {
        var promise = this.onRefresh(distance);
        var self = this;
        if (!(0, _isPromise.isPromise)(promise)) {
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
    key: '_setStyle',
    value: function _setStyle() {
      // #todo править получение стилей
      this.listElement.style = getStyle(0);
    }
  }, {
    key: '_resetStyle',
    value: function _resetStyle() {
      this.listElement.style = null;
    }
  }, {
    key: 'handleTransitionEnd',
    value: function handleTransitionEnd(evt) {
      // #todo добавить другие свойства для кросбраузерности "otransitionend"
      if (evt.type === "transitionend" && evt.propertyName === "transform") {
        this.isActive = false;
        this._resetStyle();
      }
    }
  }]);

  return Swipe;
}();

exports.default = Swipe;


function getStyle(dist) {
  // #todo добавить другие свойства для кросбраузерности
  return 'transform:translateY(' + dist + 'px);' + 'transition-duration:300ms;' + 'transition-timing-function:cubic-bezier(0.33, 0.66, 0.66, 1);' + 'transition-delay:ms';
}

function getTouchByIdentifier(touches, identifier) {
  var touch = void 0;
  Object.keys(touches).some(function (key) {
    var touchValue = touches[key];
    var isFinded = touchValue.identifier === identifier;
    if (isFinded) {
      touch = touchValue;
    }
    return isFinded;
  });
  return touch;
}

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


        if (_this[identifier] === undefined) {
          _this._setTouchElement(touch, scrollTop, scrollHeight, clientHeight);
        }
      });
      return this;
    }
  }, {
    key: 'updateTouchElements',
    value: function updateTouchElements(touches, scrollTop, scrollHeight, clientHeight) {
      var _this2 = this;

      Object.keys(touches).map(function (key) {
        var touch = touches[key];
        var identifier = touch.identifier;


        var touchElement = _this2[identifier];
        if (touchElement === undefined) {
          _this2._setTouchElement(touch, scrollTop, scrollHeight, clientHeight);
        } else {
          touchElement.update(touch, scrollTop, scrollHeight, clientHeight);
        }
      });
      return this;
    }
  }, {
    key: 'updateTouchElement',
    value: function updateTouchElement(touch, scrollTop, scrollHeight, clientHeight) {
      var identifier = touch.identifier;


      var touchElement = this[identifier];
      if (touchElement === undefined) {
        touchElement = this._setTouchElement(touch, scrollTop, scrollHeight, clientHeight);
      } else {
        touchElement.update(touch, scrollTop, scrollHeight, clientHeight);
      }
      return touchElement;
    }
  }, {
    key: 'deleteTouchElements',
    value: function deleteTouchElements(touches) {
      var _this3 = this;

      Object.keys(touches).map(function (key) {
        var touch = touches[key];
        var identifier = touch.identifier;


        if (_this3[identifier] !== undefined) {
          delete _this3[identifier];
        }
      });
      return this;
    }
  }, {
    key: 'getFirstTouchElement',
    value: function getFirstTouchElement() {
      var _this4 = this;

      var touchElement = null;
      Object.keys(this).some(function (key) {
        return touchElement = _this4[key], true;
      });
      return touchElement;
    }

    /**
     *
     * @private
     */

  }, {
    key: '_setTouchElement',
    value: function _setTouchElement(touch, scrollTop, scrollHeight, clientHeight) {
      var identifier = touch.identifier;

      var value = new _Touch2.default(touch);
      var element = new _Element2.default(scrollTop, scrollHeight, clientHeight);
      this[identifier] = new _TouchElement2.default(value, element);
      return this[identifier];
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

var isPromise = exports.isPromise = function isPromise(obj) {
  return !!obj && ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
};

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIDM1NTUxMGVkZmZiZWRhYzNkZDg3Iiwid2VicGFjazovLy9qcy9Ub3VjaC5qcyIsIndlYnBhY2s6Ly8vanMvRWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vanMvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy9qcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zdHlsZS9zdHlsZS5jc3M/NzJhMiIsIndlYnBhY2s6Ly8vanMvU3dpcGUuanMiLCJ3ZWJwYWNrOi8vL2pzL1RvdWNoRWxlbWVudExpc3QuanMiLCJ3ZWJwYWNrOi8vL2pzL1RvdWNoRWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vanMvdXRpbHMvaXNQcm9taXNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDMpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDM1NTUxMGVkZmZiZWRhYzNkZDg3IiwiY2xhc3MgVG91Y2gge1xuICAvLyBzdGFydFk7XG4gIC8vIGN1cnJlbnRZO1xuICAvLyBpZGVudGlmaWVyO1xuXG4gIGNvbnN0cnVjdG9yKHRvdWNoKSB7XG4gICAgdGhpcy5zdGFydFkgPSB0aGlzLmN1cnJlbnRZID0gdG91Y2guY2xpZW50WTtcbiAgICB0aGlzLmlkZW50aWZpZXIgPSB0b3VjaC5pZGVudGlmaWVyO1xuICB9XG5cbiAgdXBkYXRlKHRvdWNoKXtcbiAgICB0aGlzLmN1cnJlbnRZID0gdG91Y2guY2xpZW50WTtcbiAgfVxuXG4gIC8vIHJlc2V0KCkge1xuICAvLyAgIHRoaXMuc3RhcnRZID0gMDtcbiAgLy8gICB0aGlzLmN1cnJlbnRZID0gMDtcbiAgLy8gICB0aGlzLmlkZW50aWZpZXIgPSBudWxsO1xuICAvLyB9XG59XG5leHBvcnQgZGVmYXVsdCBUb3VjaDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8ganMvVG91Y2guanMiLCJjbGFzcyBFbGVtZW50IHtcbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSBzY3JvbGxUb3Age051bWJlcn1cbiAgICogQHBhcmFtIHNjcm9sbEhlaWdodCB7TnVtYmVyfVxuICAgKiBAcGFyYW0gY2xpZW50SGVpZ2h0IHtOdW1iZXJ9XG4gICAqL1xuICBjb25zdHJ1Y3RvcihzY3JvbGxUb3AsIHNjcm9sbEhlaWdodCwgY2xpZW50SGVpZ2h0KSB7XG4gICAgdGhpcy5zY3JvbGxUb3AgPSBzY3JvbGxUb3A7XG4gICAgdGhpcy5zY3JvbGxIZWlnaHQgPSBzY3JvbGxIZWlnaHQ7XG4gICAgdGhpcy5jbGllbnRIZWlnaHQgPSBjbGllbnRIZWlnaHQ7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIGVsZW1lbnQge0VsZW1lbnR9XG4gICAqL1xuICB1cGRhdGUoZWxlbWVudCkge1xuICAgIHRoaXMuc2Nyb2xsVG9wID0gZWxlbWVudC5zY3JvbGxUb3A7XG4gICAgdGhpcy5zY3JvbGxIZWlnaHQgPSBlbGVtZW50LnNjcm9sbEhlaWdodDtcbiAgICB0aGlzLmNsaWVudEhlaWdodCA9IGVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVsZW1lbnQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8ganMvRWxlbWVudC5qcyIsImV4cG9ydCBjb25zdCBESVJFQ1RJT04gPSB7XG4gIFVQOiAnVVAnLFxuICBET1dOOiAnRE9XTicsXG4gIE5PTkU6ICdOT05FJyxcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8ganMvY29uc3RhbnRzLmpzIiwiaW1wb3J0ICcuLi9zdHlsZS9zdHlsZS5jc3MnO1xuaW1wb3J0IFN3aXBlIGZyb20gJy4vU3dpcGUnO1xuXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICBzdGFydHVwKCk7XG59O1xuXG4vL2xldCBzd2lwZSA9IG5ldyBTd2lwZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInB0clwiKSk7XG5cbmZ1bmN0aW9uIHN0YXJ0dXAoKSB7XG4gIGNvbnN0IGVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInB0ci1saXN0XCIpO1xuICBjb25zdCBzd2lwZSA9IG5ldyBTd2lwZShlbGVtKTtcbiAgc3dpcGUuYWRkTGlzdGVuZXIoKTtcblxuICBzd2lwZS5vblJlZnJlc2goZnVuY3Rpb24gKGRpc3RhbmNlKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAvLyDQv9C10YDQtdCy0LXQtNGR0YIg0L/RgNC+0LzQuNGBINCyINGB0L7RgdGC0L7Rj9C90LjQtSBmdWxmaWxsZWQg0YEg0YDQtdC30YPQu9GM0YLQsNGC0L7QvCBcInJlc3VsdFwiXG4gICAgICAgIHJlc29sdmUoXCJyZXN1bHQgXCIgKyBkaXN0YW5jZSk7XG4gICAgICB9LCAyMDAwKTtcblxuICAgIH0pO1xuICB9KTtcblxuICBzd2lwZS5jYWxsYmFja3Moe1xuICAgIG9uVG91Y2hNb3ZlOiBmdW5jdGlvbiAodG91Y2hFbGVtZW50KSB7XG4gICAgICBjb25zdCB7IG1vdGlvbiB9ID0gdG91Y2hFbGVtZW50O1xuICAgICAgY29uc29sZS5sb2cobW90aW9uLmRpc3RhbmNlKTtcbiAgICB9XG4gIH0pO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGpzL2luZGV4LmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3N0eWxlL3N0eWxlLmNzc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgVG91Y2hFbGVtZW50TGlzdCBmcm9tICcuL1RvdWNoRWxlbWVudExpc3QnO1xuaW1wb3J0IHsgRElSRUNUSU9OIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgaXNQcm9taXNlIH0gZnJvbSAnLi91dGlscy9pc1Byb21pc2UnO1xuXG5jb25zdCByZXNpc3RhbmNlID0gNDsgLy/QvtGB0LvQsNCx0LvQtdC90LjQtVxuY29uc3QgZGlzdGFuY2UgPSA1MDsgLy8g0LTQuNGB0YLQsNC90YbQuNGPXG5cbmNvbnN0IGNsYXNzc05hbWVzID0ge1xuICBDT01NT046IFtcInB1bGwtdG8tcmVmcmVzaC1vbnJlZnJlc2hcIl0sXG4gIFtESVJFQ1RJT04uVVBdOiBbXCJwdWxsLXRvLXJlZnJlc2gtb25yZWZyZXNoLXVwXCIsIFwiZHNkXCJdLFxuICBbRElSRUNUSU9OLkRPV05dOiBbXCJwdWxsLXRvLXJlZnJlc2gtb25yZWZyZXNoLWRvd25cIiwgXCJkc2Zkc2RzZlwiXSxcbn07XG5cbmNsYXNzIFN3aXBlIHtcbiAgY29uc3RydWN0b3IoZWxlbSkge1xuICAgIHRoaXMubGlzdEVsZW1lbnQgPSBlbGVtO1xuICAgIHRoaXMuZ3JhbmRwYSA9IGVsZW0ucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICAgIHRoaXMudG91Y2hFbGVtZW50cyA9IG5ldyBUb3VjaEVsZW1lbnRMaXN0KCk7XG4gICAgdGhpcy5jdXJyZW50VG91Y2hFbGVtZW50ID0gbnVsbDtcbiAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5oYW5kbGVTdGFydCA9IHRoaXMuaGFuZGxlU3RhcnQuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZU1vdmUgPSB0aGlzLmhhbmRsZU1vdmUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZUVuZCA9IHRoaXMuaGFuZGxlRW5kLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVDYW5jZWwgPSB0aGlzLmhhbmRsZUNhbmNlbC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlVHJhbnNpdGlvbkVuZCA9IHRoaXMuaGFuZGxlVHJhbnNpdGlvbkVuZC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgYWRkTGlzdGVuZXIoKSB7XG4gICAgdGhpcy5saXN0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCB0aGlzLmhhbmRsZVN0YXJ0LCBmYWxzZSk7XG4gICAgdGhpcy5saXN0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsIHRoaXMuaGFuZGxlTW92ZSwgZmFsc2UpO1xuICAgIHRoaXMubGlzdEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsIHRoaXMuaGFuZGxlRW5kLCBmYWxzZSk7XG4gICAgdGhpcy5saXN0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hjYW5jZWxcIiwgdGhpcy5oYW5kbGVDYW5jZWwsIGZhbHNlKTtcbiAgICB0aGlzLmxpc3RFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0cmFuc2l0aW9uZW5kXCIsIHRoaXMuaGFuZGxlVHJhbnNpdGlvbkVuZCwgZmFsc2UpO1xuICB9XG5cbiAgcmVtb3ZlTGlzdGVuZXIoKSB7XG4gICAgdGhpcy5saXN0RWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCB0aGlzLmhhbmRsZVN0YXJ0LCBmYWxzZSk7XG4gICAgdGhpcy5saXN0RWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsIHRoaXMuaGFuZGxlTW92ZSwgZmFsc2UpO1xuICAgIHRoaXMubGlzdEVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsIHRoaXMuaGFuZGxlRW5kLCBmYWxzZSk7XG4gICAgdGhpcy5saXN0RWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2hjYW5jZWxcIiwgdGhpcy5oYW5kbGVDYW5jZWwsIGZhbHNlKTtcbiAgICB0aGlzLmxpc3RFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0cmFuc2l0aW9uZW5kXCIsIHRoaXMuaGFuZGxlVHJhbnNpdGlvbkVuZCwgZmFsc2UpO1xuICB9XG5cbiAgY2FsbGJhY2tzKGNicykge1xuICAgIGlmIChjYnMuaGFzT3duUHJvcGVydHkoXCJvblRvdWNoU3RhcnRcIikpIHtcbiAgICAgIHRoaXMub25Ub3VjaFN0YXJ0ID0gY2JzLm9uVG91Y2hTdGFydDtcbiAgICB9XG4gICAgaWYgKGNicy5oYXNPd25Qcm9wZXJ0eShcIm9uVG91Y2hNb3ZlXCIpKSB7XG4gICAgICB0aGlzLm9uVG91Y2hNb3ZlID0gY2JzLm9uVG91Y2hNb3ZlO1xuICAgIH1cbiAgICBpZiAoY2JzLmhhc093blByb3BlcnR5KFwib25Ub3VjaEVuZFwiKSkge1xuICAgICAgdGhpcy5vblRvdWNoRW5kID0gY2JzLm9uVG91Y2hFbmQ7XG4gICAgfVxuICAgIGlmIChjYnMuaGFzT3duUHJvcGVydHkoXCJvblRvdWNoQ2FuY2VsXCIpKSB7XG4gICAgICB0aGlzLm9uVG91Y2hDYW5jZWwgPSBjYnMub25Ub3VjaENhbmNlbDtcbiAgICB9XG4gIH1cblxuICBvblJlZnJlc2goZnVuYykge1xuICAgIGlmICh0eXBlb2YgZnVuYyAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ29uUmVmcmVzaCBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcbiAgICB9XG4gICAgdGhpcy5vblJlZnJlc2ggPSBmdW5jO1xuICB9XG5cbiAgaGFuZGxlU3RhcnQoZXZ0KSB7XG4gICAgLy9jb25zdCB0b3VjaGVzID0gZXZ0LmNoYW5nZWRUb3VjaGVzO1xuICAgIGNvbnN0IHRvdWNoZXMgPSBldnQudG91Y2hlcztcblxuICAgIGNvbnN0IHtcbiAgICAgICAgICAgIHNjcm9sbFRvcCxcbiAgICAgICAgICAgIHNjcm9sbEhlaWdodCxcbiAgICAgICAgICAgIGNsaWVudEhlaWdodCxcbiAgICAgICAgICB9ID0gdGhpcy5ncmFuZHBhO1xuXG4gICAgdGhpcy50b3VjaEVsZW1lbnRzLnNldFRvdWNoRWxlbWVudHModG91Y2hlcywgc2Nyb2xsVG9wLCBzY3JvbGxIZWlnaHQsIGNsaWVudEhlaWdodCk7XG4gICAgY29uc3QgZmlyc3RUb3VjaCA9IHRoaXMudG91Y2hFbGVtZW50cy5nZXRGaXJzdFRvdWNoRWxlbWVudCgpO1xuXG4gICAgaWYgKGZpcnN0VG91Y2ggIT09IHRoaXMuY3VycmVudFRvdWNoRWxlbWVudCkge1xuICAgICAgdGhpcy5jdXJyZW50VG91Y2hFbGVtZW50ID0gZmlyc3RUb3VjaDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5oYXNPd25Qcm9wZXJ0eShcIm9uVG91Y2hTdGFydFwiKSkge1xuICAgICAgdGhpcy5vblRvdWNoU3RhcnQodGhpcy5jdXJyZW50VG91Y2hFbGVtZW50LCB0aGlzLnRvdWNoRWxlbWVudHMpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZU1vdmUoZXZ0KSB7XG4gICAgY29uc3QgdG91Y2hFbGVtZW50ID0gdGhpcy5fdXBkYXRlVG91Y2hFbGVtZW50KGV2dCk7XG5cbiAgICBpZiAodGhpcy5oYXNPd25Qcm9wZXJ0eShcIm9uVG91Y2hNb3ZlXCIpKSB7XG4gICAgICB0aGlzLm9uVG91Y2hNb3ZlKHRvdWNoRWxlbWVudCwgdGhpcy50b3VjaEVsZW1lbnRzKTtcbiAgICB9XG4gIH1cblxuICBfdXBkYXRlVG91Y2hFbGVtZW50KGV2dCkge1xuICAgIC8vY29uc3QgdG91Y2hlcyA9IGV2dC5jaGFuZ2VkVG91Y2hlcztcbiAgICBjb25zdCB0b3VjaGVzID0gZXZ0LnRvdWNoZXM7XG4gICAgY29uc3Qge1xuICAgICAgICAgICAgc2Nyb2xsVG9wLFxuICAgICAgICAgICAgc2Nyb2xsSGVpZ2h0LFxuICAgICAgICAgICAgY2xpZW50SGVpZ2h0LFxuICAgICAgICAgIH0gPSB0aGlzLmdyYW5kcGE7XG5cbiAgICBjb25zdCB7IGlkZW50aWZpZXIgfSA9IHRoaXMuY3VycmVudFRvdWNoRWxlbWVudC50b3VjaDtcbiAgICBjb25zdCB0b3VjaCA9IGdldFRvdWNoQnlJZGVudGlmaWVyKHRvdWNoZXMsIGlkZW50aWZpZXIpO1xuICAgIGNvbnN0IHRvdWNoRWxlbWVudCA9IHRoaXMudG91Y2hFbGVtZW50cy51cGRhdGVUb3VjaEVsZW1lbnQodG91Y2gsIHNjcm9sbFRvcCwgc2Nyb2xsSGVpZ2h0LCBjbGllbnRIZWlnaHQpO1xuICAgIGNvbnN0IHsgbW90aW9uIH0gPSB0b3VjaEVsZW1lbnQ7XG5cbiAgICBpZiAobW90aW9uLmRpcmVjdGlvbiA9PT0gRElSRUNUSU9OLkRPV05cbiAgICAgIHx8IG1vdGlvbi5kaXJlY3Rpb24gPT09IERJUkVDVElPTi5VUCkge1xuICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZTtcbiAgICAgIC8vICN0b2RvINC00L7QsdCw0LLQuNGC0Ywg0LTRgNGD0LPQuNC1INGB0LLQvtC50YHRgtCy0LAg0LTQu9GPINC60YDQvtGB0LHRgNCw0YPQt9C10YDQvdC+0YHRgtC4XG4gICAgICBjb25zdCBkaXN0YW5jZUVuZmVlYmxlID0gfn4obW90aW9uLmRpc3RhbmNlIC8gcmVzaXN0YW5jZSk7IC8vcm91bmRcbiAgICAgIHRoaXMubGlzdEVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVkoJHtkaXN0YW5jZUVuZmVlYmxlfXB4KWA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcbiAgICAgIHRoaXMubGlzdEVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gdG91Y2hFbGVtZW50O1xuICB9XG5cbiAgaGFuZGxlRW5kKGV2dCkge1xuICAgIGNvbnN0IHRvdWNoRWxlbWVudCA9IHRoaXMuX2hhbmRsZVJlbW92ZShldnQpO1xuXG4gICAgaWYgKHRvdWNoRWxlbWVudCAhPT0gbnVsbCAmJiB0aGlzLmhhc093blByb3BlcnR5KFwib25Ub3VjaEVuZFwiKSkge1xuICAgICAgdGhpcy5vblRvdWNoRW5kKHRvdWNoRWxlbWVudCwgdGhpcy50b3VjaEVsZW1lbnRzKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVDYW5jZWwoZXZ0KSB7XG4gICAgY29uc3QgdG91Y2hFbGVtZW50ID0gdGhpcy5faGFuZGxlUmVtb3ZlKGV2dCk7XG5cbiAgICBpZiAodG91Y2hFbGVtZW50ICE9PSBudWxsICYmIHRoaXMuaGFzT3duUHJvcGVydHkoXCJvblRvdWNoQ2FuY2VsXCIpKSB7XG4gICAgICB0aGlzLm9uVG91Y2hDYW5jZWwodG91Y2hFbGVtZW50LCB0aGlzLnRvdWNoRWxlbWVudHMpO1xuICAgIH1cbiAgfVxuXG4gIF9oYW5kbGVSZW1vdmUoZXZ0KSB7XG4gICAgLy9jb25zdCB0b3VjaGVzID0gZXZ0LmNoYW5nZWRUb3VjaGVzO1xuICAgIGNvbnN0IHRvdWNoZXMgPSBldnQudG91Y2hlcztcblxuICAgIGNvbnN0IHsgaWRlbnRpZmllciB9ID0gdGhpcy5jdXJyZW50VG91Y2hFbGVtZW50LnRvdWNoO1xuICAgIGNvbnN0IHRvdWNoID0gZ2V0VG91Y2hCeUlkZW50aWZpZXIodG91Y2hlcywgaWRlbnRpZmllcik7XG5cbiAgICAvLyDQldGB0LvQuCDQt9Cw0LrQvtC90YfQuNC70YHRjyB0b3VjaCDQv9Cw0LvRjNGG0LAsINC60L7RgtC+0YDRi9C5INC90LUg0LDQutGC0LjQstC90YvQuSAo0L3QtSDQvtCx0YDQsNCx0LDRgtGL0LLQsNC10LwsINGB0YHRi9C70LrQsCDQvdC1INC90LDRhdC+0LTQuNGC0YHRjyDQslxuICAgIC8vIHRoaXMuY3VycmVudFRvdWNoRWxlbWVudCksINGC0L4g0LjQs9C90L7RgNC40YDRg9C10Lwg0L7QsdGA0LDQsdC+0YLQutGDINC90LXQsNC60YLRg9Cw0LvRjNC90L7Qs9C+INC60L7RgdCw0L3QuNGPXG4gICAgaWYgKHRvdWNoID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8vINCV0YHQu9C4INCyINC00LDQvdC90YvQuSDQvNC+0LzQtdC90YIg0YHQutGA0L7Qu9C40Lwg0YHQv9C40YHQvtC6LCDRgtC+INGA0LXQsNCz0LjRgNC+0LLQsNGC0Ywg0L3QtSDQvdCw0LTQviAo0L3QtdGCINCyINC00LDQvdC90YvQuSDQvNC+0LzQtdC90YIg0Y3RhNGE0LXQutGC0LBcbiAgICAvLyBwdWxsLXRvLXJlZnJlc2gpLlxuICAgIGlmICghdGhpcy5pc0FjdGl2ZSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLy8g0KPQtNCw0LvRj9C10Lwg0LLRgdC1INC90LXQsNC60YLQuNCy0L3Ri9C1ICjQvtGC0L7RgNCy0LDQvdC90YvQtSkgdG91Y2gsINCyINGC0L7QvCDRh9C40YHQu9C1INC4INCw0LrRgtC40LLQvdGL0LkuXG4gICAgdGhpcy50b3VjaEVsZW1lbnRzLmRlbGV0ZVRvdWNoRWxlbWVudHModG91Y2hlcyk7XG4gICAgLy8g0J/QvtC70YPRh9Cw0LXQvCDQv9C10YDQstGL0LkgdG91Y2gsINC10YHQu9C4INC10YHRgtGMINGC0LDQutC40LUgKNCw0LrRgtC40LLQvdGL0LkgdG91Y2gpXG4gICAgbGV0IHRvdWNoRWxlbWVudCA9IHRoaXMudG91Y2hFbGVtZW50cy5nZXRGaXJzdFRvdWNoRWxlbWVudCgpOyAvLyBUb3VjaEVsZW1lbnQgb3IgbnVsbFxuXG4gICAgaWYgKHRvdWNoRWxlbWVudCAhPT0gbnVsbCkge1xuICAgICAgLy8g0L/RgNC+0YbQtdC00YPRgNCwINC+0LHQvdC+0LLQu9C10L3QuNGPIHRvdWNoINC+0LHRitC10LrRgtCwXG4gICAgICBsZXQgdG91Y2hFbGVtZW50ID0gdGhpcy5fdXBkYXRlVG91Y2hFbGVtZW50KGV2dCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vINC/0YDQvtGG0LXQtNGD0YDQsCDQuNC90LjRhtC40LDQu9C40LfQsNGG0LjQuCDQtNC+0LHQsNCy0LvQtdC90LjRjyDQutC70LDRgdGB0L7QsiDQuCDQvtCx0YDQsNCx0L7RgtGH0LjQutC+0LJcbiAgICAgIGNvbnN0IHsgbW90aW9uIH0gPSB0aGlzLmN1cnJlbnRUb3VjaEVsZW1lbnQ7XG5cbiAgICAgIGNvbnN0IGRpc3RhbmNlRW5mZWVibGUgPSB+fihtb3Rpb24uZGlzdGFuY2UgLyByZXNpc3RhbmNlKTsgLy9yb3VuZFxuICAgICAgbGV0IGRpc3RhbmNlRW5mZWVibGVBYnMgPSBkaXN0YW5jZUVuZmVlYmxlOyAvLyBvbmx5IGZvciBjb21wYXJlXG4gICAgICBpZiAobW90aW9uLmRpcmVjdGlvbiA9PT0gRElSRUNUSU9OLkRPV04pIHtcbiAgICAgICAgZGlzdGFuY2VFbmZlZWJsZUFicyA9IH5kaXN0YW5jZUVuZmVlYmxlQWJzICsgMTtcbiAgICAgIH1cbiAgICAgIGlmIChkaXN0YW5jZUVuZmVlYmxlQWJzID49IGRpc3RhbmNlKSB7XG4gICAgICAgIGNvbnN0IGNsYXNzTmFtZXMgPSB0aGlzLl9nZXRDbGFzc05hbWVzKG1vdGlvbi5kaXJlY3Rpb24pO1xuICAgICAgICB0aGlzLl9hZGRDbGFzcyguLi5jbGFzc05hbWVzKTtcbiAgICAgICAgdGhpcy5fb25SZWZyZXNoKGRpc3RhbmNlRW5mZWVibGUsIGNsYXNzTmFtZXMpO1xuICAgICAgfVxuICAgICAgdGhpcy5fc2V0U3R5bGUoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdG91Y2hFbGVtZW50OyAvLyB0b3VjaEVsZW1lbnQgb3IgbnVsbFxuICB9XG5cbiAgX2dldENsYXNzTmFtZXMoZGlyZWN0aW9uKSB7XG4gICAgbGV0IGNsYXNzTmFtZXMgPSBcIlwiO1xuICAgIGlmIChkaXJlY3Rpb24gPT09IERJUkVDVElPTi5ET1dOKSB7XG4gICAgICBjbGFzc05hbWVzID0gY2xhc3NzTmFtZXMuQ09NTU9OLmNvbmNhdChjbGFzc3NOYW1lcy5ET1dOKTtcbiAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gRElSRUNUSU9OLlVQKSB7XG4gICAgICBjbGFzc05hbWVzID0gY2xhc3NzTmFtZXMuQ09NTU9OLmNvbmNhdChjbGFzc3NOYW1lcy5VUCk7XG4gICAgfVxuICAgIHJldHVybiBjbGFzc05hbWVzO1xuICB9XG5cbiAgX29uUmVmcmVzaChkaXN0YW5jZSwgY2xhc3NOYW1lcykge1xuICAgIGlmICh0aGlzLmhhc093blByb3BlcnR5KFwib25SZWZyZXNoXCIpKSB7XG4gICAgICBjb25zdCBwcm9taXNlID0gdGhpcy5vblJlZnJlc2goZGlzdGFuY2UpO1xuICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICBpZiAoIWlzUHJvbWlzZShwcm9taXNlKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBvblJlZnJlc2ggZnVuY3Rpb25gcyByZXR1cm4gdmFsdWUgbXVzdCBiZSBtdXN0IGJlIHRoZSBQcm9taXNlJyk7XG4gICAgICB9XG4gICAgICBwcm9taXNlXG4gICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICBzZWxmLl9yZW1vdmVDbGFzcy5jYWxsKHNlbGYsIC4uLmNsYXNzTmFtZXMpO1xuICAgICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIF9hZGRDbGFzcygpIHtcbiAgICBjb25zdCBjbGFzc0xpc3QgPSB0aGlzLmdyYW5kcGEuY2xhc3NMaXN0O1xuICAgIGNsYXNzTGlzdC5hZGQoLi4uYXJndW1lbnRzKTtcbiAgfVxuXG4gIF9yZW1vdmVDbGFzcygpIHtcbiAgICBjb25zdCBjbGFzc0xpc3QgPSB0aGlzLmdyYW5kcGEuY2xhc3NMaXN0O1xuICAgIGNsYXNzTGlzdC5yZW1vdmUoLi4uYXJndW1lbnRzKTtcbiAgfVxuXG4gIF9zZXRTdHlsZSgpIHtcbiAgICAvLyAjdG9kbyDQv9GA0LDQstC40YLRjCDQv9C+0LvRg9GH0LXQvdC40LUg0YHRgtC40LvQtdC5XG4gICAgdGhpcy5saXN0RWxlbWVudC5zdHlsZSA9IGdldFN0eWxlKDApO1xuICB9XG5cbiAgX3Jlc2V0U3R5bGUoKSB7XG4gICAgdGhpcy5saXN0RWxlbWVudC5zdHlsZSA9IG51bGw7XG4gIH1cblxuICBoYW5kbGVUcmFuc2l0aW9uRW5kKGV2dCkge1xuICAgIC8vICN0b2RvINC00L7QsdCw0LLQuNGC0Ywg0LTRgNGD0LPQuNC1INGB0LLQvtC50YHRgtCy0LAg0LTQu9GPINC60YDQvtGB0LHRgNCw0YPQt9C10YDQvdC+0YHRgtC4IFwib3RyYW5zaXRpb25lbmRcIlxuICAgIGlmIChldnQudHlwZSA9PT0gXCJ0cmFuc2l0aW9uZW5kXCIgJiYgZXZ0LnByb3BlcnR5TmFtZSA9PT0gXCJ0cmFuc2Zvcm1cIikge1xuICAgICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgdGhpcy5fcmVzZXRTdHlsZSgpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTd2lwZTtcblxuZnVuY3Rpb24gZ2V0U3R5bGUoZGlzdCkge1xuICAvLyAjdG9kbyDQtNC+0LHQsNCy0LjRgtGMINC00YDRg9Cz0LjQtSDRgdCy0L7QudGB0YLQstCwINC00LvRjyDQutGA0L7RgdCx0YDQsNGD0LfQtdGA0L3QvtGB0YLQuFxuICByZXR1cm4gKFxuICAgIGB0cmFuc2Zvcm06dHJhbnNsYXRlWSgke2Rpc3R9cHgpO2AgK1xuICAgICd0cmFuc2l0aW9uLWR1cmF0aW9uOjMwMG1zOycgK1xuICAgICd0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoMC4zMywgMC42NiwgMC42NiwgMSk7JyArXG4gICAgJ3RyYW5zaXRpb24tZGVsYXk6bXMnXG4gICk7XG59XG5cbmZ1bmN0aW9uIGdldFRvdWNoQnlJZGVudGlmaWVyKHRvdWNoZXMsIGlkZW50aWZpZXIpIHtcbiAgbGV0IHRvdWNoO1xuICBPYmplY3Qua2V5cyh0b3VjaGVzKS5zb21lKChrZXkpID0+IHtcbiAgICBjb25zdCB0b3VjaFZhbHVlID0gdG91Y2hlc1trZXldO1xuICAgIGNvbnN0IGlzRmluZGVkID0gdG91Y2hWYWx1ZS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyO1xuICAgIGlmIChpc0ZpbmRlZCkge1xuICAgICAgdG91Y2ggPSB0b3VjaFZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gaXNGaW5kZWQ7XG4gIH0pO1xuICByZXR1cm4gdG91Y2g7XG59XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBqcy9Td2lwZS5qcyIsImltcG9ydCBUb3VjaCBmcm9tICcuL1RvdWNoJztcbmltcG9ydCBFbGVtZW50IGZyb20gJy4vRWxlbWVudCc7XG5pbXBvcnQgVG91Y2hFbGVtZW50IGZyb20gJy4vVG91Y2hFbGVtZW50JztcblxuY2xhc3MgVG91Y2hFbGVtZW50TGlzdCB7XG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0gdG91Y2hlc1xuICAgKiBAcGFyYW0gc2Nyb2xsVG9wXG4gICAqIEBwYXJhbSBzY3JvbGxIZWlnaHRcbiAgICogQHBhcmFtIGNsaWVudEhlaWdodFxuICAgKi9cbiAgc2V0VG91Y2hFbGVtZW50cyh0b3VjaGVzLCBzY3JvbGxUb3AsIHNjcm9sbEhlaWdodCwgY2xpZW50SGVpZ2h0KSB7XG4gICAgT2JqZWN0LmtleXModG91Y2hlcykubWFwKChrZXkpID0+IHtcbiAgICAgIGNvbnN0IHRvdWNoID0gdG91Y2hlc1trZXldO1xuICAgICAgY29uc3QgeyBpZGVudGlmaWVyIH0gPSB0b3VjaDtcblxuICAgICAgaWYgKHRoaXNbaWRlbnRpZmllcl0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLl9zZXRUb3VjaEVsZW1lbnQodG91Y2gsIHNjcm9sbFRvcCwgc2Nyb2xsSGVpZ2h0LCBjbGllbnRIZWlnaHQpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgdXBkYXRlVG91Y2hFbGVtZW50cyh0b3VjaGVzLCBzY3JvbGxUb3AsIHNjcm9sbEhlaWdodCwgY2xpZW50SGVpZ2h0KSB7XG4gICAgT2JqZWN0LmtleXModG91Y2hlcykubWFwKChrZXkpID0+IHtcbiAgICAgIGNvbnN0IHRvdWNoID0gdG91Y2hlc1trZXldO1xuICAgICAgY29uc3QgeyBpZGVudGlmaWVyIH0gPSB0b3VjaDtcblxuICAgICAgbGV0IHRvdWNoRWxlbWVudCA9IHRoaXNbaWRlbnRpZmllcl07XG4gICAgICBpZiAodG91Y2hFbGVtZW50ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5fc2V0VG91Y2hFbGVtZW50KHRvdWNoLCBzY3JvbGxUb3AsIHNjcm9sbEhlaWdodCwgY2xpZW50SGVpZ2h0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRvdWNoRWxlbWVudC51cGRhdGUodG91Y2gsIHNjcm9sbFRvcCwgc2Nyb2xsSGVpZ2h0LCBjbGllbnRIZWlnaHQpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgdXBkYXRlVG91Y2hFbGVtZW50KHRvdWNoLCBzY3JvbGxUb3AsIHNjcm9sbEhlaWdodCwgY2xpZW50SGVpZ2h0KSB7XG4gICAgICBjb25zdCB7IGlkZW50aWZpZXIgfSA9IHRvdWNoO1xuXG4gICAgICBsZXQgdG91Y2hFbGVtZW50ID0gdGhpc1tpZGVudGlmaWVyXTtcbiAgICAgIGlmICh0b3VjaEVsZW1lbnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0b3VjaEVsZW1lbnQgPSB0aGlzLl9zZXRUb3VjaEVsZW1lbnQodG91Y2gsIHNjcm9sbFRvcCwgc2Nyb2xsSGVpZ2h0LCBjbGllbnRIZWlnaHQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdG91Y2hFbGVtZW50LnVwZGF0ZSh0b3VjaCwgc2Nyb2xsVG9wLCBzY3JvbGxIZWlnaHQsIGNsaWVudEhlaWdodCk7XG4gICAgICB9XG4gICAgcmV0dXJuIHRvdWNoRWxlbWVudDtcbiAgfVxuXG4gIGRlbGV0ZVRvdWNoRWxlbWVudHModG91Y2hlcykge1xuICAgIE9iamVjdC5rZXlzKHRvdWNoZXMpLm1hcCgoa2V5KSA9PiB7XG4gICAgICBjb25zdCB0b3VjaCA9IHRvdWNoZXNba2V5XTtcbiAgICAgIGNvbnN0IHsgaWRlbnRpZmllciB9ID0gdG91Y2g7XG5cbiAgICAgIGlmICh0aGlzW2lkZW50aWZpZXJdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgZGVsZXRlIHRoaXNbaWRlbnRpZmllcl07XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBnZXRGaXJzdFRvdWNoRWxlbWVudCgpIHtcbiAgICBsZXQgdG91Y2hFbGVtZW50ID0gbnVsbDtcbiAgICBPYmplY3Qua2V5cyh0aGlzKS5zb21lKGtleSA9PiAodG91Y2hFbGVtZW50ID0gdGhpc1trZXldLCB0cnVlKSk7XG4gICAgcmV0dXJuIHRvdWNoRWxlbWVudDtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX3NldFRvdWNoRWxlbWVudCh0b3VjaCwgc2Nyb2xsVG9wLCBzY3JvbGxIZWlnaHQsIGNsaWVudEhlaWdodCkge1xuICAgIGNvbnN0IHsgaWRlbnRpZmllciB9ID0gdG91Y2g7XG4gICAgY29uc3QgdmFsdWUgPSBuZXcgVG91Y2godG91Y2gpO1xuICAgIGNvbnN0IGVsZW1lbnQgPSBuZXcgRWxlbWVudChzY3JvbGxUb3AsIHNjcm9sbEhlaWdodCwgY2xpZW50SGVpZ2h0KTtcbiAgICB0aGlzW2lkZW50aWZpZXJdID0gbmV3IFRvdWNoRWxlbWVudCh2YWx1ZSwgZWxlbWVudCk7XG4gICAgcmV0dXJuIHRoaXNbaWRlbnRpZmllcl07XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVG91Y2hFbGVtZW50TGlzdDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8ganMvVG91Y2hFbGVtZW50TGlzdC5qcyIsImltcG9ydCBUb3VjaCBmcm9tICcuL1RvdWNoJztcbmltcG9ydCBFbGVtZW50IGZyb20gJy4vRWxlbWVudCc7XG5pbXBvcnQgeyBESVJFQ1RJT04gfSBmcm9tICcuL2NvbnN0YW50cyc7XG5cbmNsYXNzIFRvdWNoRWxlbWVudCB7XG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0gdG91Y2gge1RvdWNofVxuICAgKiBAcGFyYW0gZWxlbWVudCB7RWxlbWVudH1cbiAgICovXG4gIGNvbnN0cnVjdG9yKHRvdWNoLCBlbGVtZW50KSB7XG4gICAgdGhpcy50b3VjaCA9IHRvdWNoO1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIHRvdWNoIHtUb3VjaH1cbiAgICogQHBhcmFtIHNjcm9sbFRvcFxuICAgKiBAcGFyYW0gc2Nyb2xsSGVpZ2h0XG4gICAqIEBwYXJhbSBjbGllbnRIZWlnaHRcbiAgICovXG4gIHVwZGF0ZSh0b3VjaCwgc2Nyb2xsVG9wLCBzY3JvbGxIZWlnaHQsIGNsaWVudEhlaWdodCkge1xuICAgIHRoaXMudG91Y2gudXBkYXRlKHRvdWNoKTtcbiAgICB0aGlzLmVsZW1lbnQudXBkYXRlKHtcbiAgICAgIHNjcm9sbFRvcCxcbiAgICAgIHNjcm9sbEhlaWdodCxcbiAgICAgIGNsaWVudEhlaWdodFxuICAgIH0pO1xuICB9XG5cbiAgZ2V0IG1vdGlvbigpIHtcbiAgICBjb25zdCBtb3ZlVG91Y2hUb3BZID0gfn4odGhpcy50b3VjaC5jdXJyZW50WSAtIHRoaXMudG91Y2guc3RhcnRZKTsgLy9yb3VuZFxuICAgIGNvbnN0IGRpc3RhbmNlVG9wID0gbW92ZVRvdWNoVG9wWSAtIHRoaXMuZWxlbWVudC5zY3JvbGxUb3A7XG5cbiAgICBjb25zdCBtb3ZlVG91Y2hCb3R0b21ZID0gfm1vdmVUb3VjaFRvcFkgKyAxOyAvL3JldmVyc2VcbiAgICBjb25zdCBzY3JvbGxCb3R0b20gPSB0aGlzLmVsZW1lbnQuc2Nyb2xsSGVpZ2h0IC0gKHRoaXMuZWxlbWVudC5zY3JvbGxUb3AgKyB0aGlzLmVsZW1lbnQuY2xpZW50SGVpZ2h0KTtcbiAgICBjb25zdCBkaXN0YW5jZUJvdHRvbSA9IG1vdmVUb3VjaEJvdHRvbVkgLSBzY3JvbGxCb3R0b207XG5cbiAgICBpZiAoZGlzdGFuY2VUb3AgPiAwKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBkaXN0YW5jZTogZGlzdGFuY2VUb3AsXG4gICAgICAgIGRpcmVjdGlvbjogRElSRUNUSU9OLlVQLFxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZGlzdGFuY2VCb3R0b20gPiAwKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBkaXN0YW5jZTogfmRpc3RhbmNlQm90dG9tICsgMSxcbiAgICAgICAgZGlyZWN0aW9uOiBESVJFQ1RJT04uRE9XTixcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZGlzdGFuY2U6IG51bGwsXG4gICAgICAgIGRpcmVjdGlvbjogRElSRUNUSU9OLk5PTkUsXG4gICAgICB9O1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUb3VjaEVsZW1lbnQ7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGpzL1RvdWNoRWxlbWVudC5qcyIsImV4cG9ydCBjb25zdCBpc1Byb21pc2UgPSBmdW5jdGlvbiBpc1Byb21pc2Uob2JqKSB7XG4gIHJldHVybiAhIW9iaiAmJiAodHlwZW9mIG9iaiA9PT0gJ29iamVjdCcgfHwgdHlwZW9mIG9iaiA9PT0gJ2Z1bmN0aW9uJykgJiYgdHlwZW9mIG9iai50aGVuID09PSAnZnVuY3Rpb24nO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBqcy91dGlscy9pc1Byb21pc2UuanMiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QTs7Ozs7Ozs7Ozs7Ozs7O0FDN0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQTtBQUNBOzs7Ozs7QUFNQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBR0E7Ozs7Ozs7Ozs7OztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUhBOzs7Ozs7Ozs7QUNBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTs7Ozs7O0FDOUJBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUtBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBU0E7QUFDQTtBQVhBO0FBQ0E7QUFDQTtBQVlBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUN0UUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7OztBQUNBOzs7Ozs7OztBQUNBOzs7Ozs7O0FBT0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FBSUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBR0E7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7OztBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTs7Ozs7O0FBR0E7Ozs7Ozs7Ozs7Ozs7OztBQzFEQTtBQUNBO0FBQ0E7OztBIiwic291cmNlUm9vdCI6IiJ9