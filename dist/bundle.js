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
  DOWN: 'DOWN'
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

  var promise = new Promise(function (resolve, reject) {

    setTimeout(function () {
      // переведёт промис в состояние fulfilled с результатом "result"
      resolve("result");
    }, 5000);
  });

  swipe.onRefresh(function (distance) {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        // переведёт промис в состояние fulfilled с результатом "result"
        resolve("result " + distance);
      }, 5000);
    });
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

var _TouchElementList = __webpack_require__(6);

var _TouchElementList2 = _interopRequireDefault(_TouchElementList);

var _constants = __webpack_require__(2);

var _isPromise = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var resistance = 4; //ослабление
var distance = 50; // дистанция

var Swipe = function () {
  function Swipe(elem) {
    _classCallCheck(this, Swipe);

    this.listElement = elem;
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
      this.listElement.addEventListener("touchstart", this.handleStart, true);
      this.listElement.addEventListener("touchmove", this.handleMove, true);
      this.listElement.addEventListener("touchend", this.handleEnd, true);
      this.listElement.addEventListener("touchcancel", this.handleCancel, true);
      this.listElement.addEventListener("transitionend", this.handleTransitionEnd, true);
    }
  }, {
    key: 'removeListener',
    value: function removeListener() {
      this.listElement.removeEventListener("touchstart", this.handleStart, true);
      this.listElement.removeEventListener("touchmove", this.handleMove, true);
      this.listElement.removeEventListener("touchend", this.handleEnd, true);
      this.listElement.removeEventListener("touchcancel", this.handleCancel, true);
      this.listElement.removeEventListener("transitionend", this.handleTransitionEnd, true);
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
      evt.preventDefault();
      var touches = evt.changedTouches;

      var grandpa = this.listElement.parentElement.parentElement;
      var scrollTop = grandpa.scrollTop,
          scrollHeight = grandpa.scrollHeight,
          clientHeight = grandpa.clientHeight;


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
      this._updateTouchElement(evt);

      if (this.hasOwnProperty("onTouchMove")) {
        this.onTouchMove(touchElement, this.touchElements);
      }
    }
  }, {
    key: '_updateTouchElement',
    value: function _updateTouchElement(evt) {
      var touches = evt.targetTouches;
      var grandpa = this.listElement.parentElement.parentElement;
      var scrollTop = grandpa.scrollTop,
          scrollHeight = grandpa.scrollHeight,
          clientHeight = grandpa.clientHeight;
      var identifier = this.currentTouchElement.touch.identifier;

      var touch = getTouchByIdentifier(touches, identifier);

      var _touchElements$update = this.touchElements.updateTouchElement(touch, scrollTop, scrollHeight, clientHeight),
          motion = _touchElements$update.motion;
      //this._setTransform(motion, evt);

      if (motion.direction === _constants.DIRECTION.DOWN || motion.direction === _constants.DIRECTION.UP) {
        this.isActive = false;
        this.listElement.style.transform = null;
      } else {
        evt.preventDefault();
        this.isActive = true;
        // #todo добавить другие свойства для кросбраузерности
        var distanceEnfeeble = ~~(motion.distance / resistance); //round
        this.listElement.style.transform = 'translateY(' + distanceEnfeeble + 'px)';
      }
    }

    // _setTransform(motion, evt) {
    //   if (motion.distance === null) {
    //     this.isActive = false;
    //     this.listElement.style.transform = null;
    //   } else {
    //     evt.preventDefault();
    //     this.isActive = true;
    //     // #todo добавить другие свойства для кросбраузерности
    //     const distanceEnfeeble = ~~(motion.distance / resistance); //round
    //     this.listElement.style.transform = `translateY(${distanceEnfeeble}px)`;
    //   }
    // }

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
      evt.preventDefault();
      var touches = evt.changedTouches;

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
        this._updateTouchElement(evt);
      } else {
        // процедура инициализации добавления классов и обработчиков
        var motion = this.currentTouchElement.motion;

        var distanceEnfeeble = ~~(motion.distance / resistance); //round
        if (distanceEnfeeble >= distance) {
          this._setClass("active-up");
        }
        this._setStyle();
        this._onRefresh(distanceEnfeeble);
      }

      //this._pullRefreshInit();

      //this._resetStyle();

      return touchElement;
    }
  }, {
    key: '_onRefresh',
    value: function _onRefresh(distance) {
      if (this.hasOwnProperty("onRefresh")) {
        var promise = this.onRefresh(distance);
        var _removeClass = this._removeClass;
        if (!(0, _isPromise.isPromise)(promise)) {
          throw new Error('The onRefresh function`s return value must be must be the Promise');
        }
        promise.then(function () {
          _removeClass("active-up");
        });
      }
    }

    // _pullRefreshInit() {
    //   this._setClass("active-up");
    // }

  }, {
    key: '_setClass',
    value: function _setClass(className) {
      var classList = this.listElement.classList;
      classList.add(className);
    }
  }, {
    key: '_removeClass',
    value: function _removeClass(className) {
      var classList = this.listElement.classList;
      classList.remove(className);
    }
  }, {
    key: '_setStyle',
    value: function _setStyle() {
      var style = getStyle(0);
      this.listElement.style = style;
    }
  }, {
    key: '_resetStyle',
    value: function _resetStyle() {
      //const style = getStyle(0);

      this.listElement.style = null;
      //this._removeClass("active-up");

      // this._setClass("active-up");
      //
      // const self = this;
      //
      // if (this.hasOwnProperty("onRefresh")) {
      //   this.onRefresh
      //     .then(() => {
      //       self._removeClass("active-up");
      //     })
      // }
    }
  }, {
    key: 'handleTransitionEnd',
    value: function handleTransitionEnd(evt) {
      //debugger;
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
          direction: null
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIDlmNmFlNmQ4NjJlMDlhMWY1MGI0Iiwid2VicGFjazovLy9qcy9Ub3VjaC5qcyIsIndlYnBhY2s6Ly8vanMvRWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vanMvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy9qcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zdHlsZS9zdHlsZS5jc3M/NzJhMiIsIndlYnBhY2s6Ly8vanMvU3dpcGUuanMiLCJ3ZWJwYWNrOi8vL2pzL1RvdWNoRWxlbWVudExpc3QuanMiLCJ3ZWJwYWNrOi8vL2pzL1RvdWNoRWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vanMvdXRpbHMvaXNQcm9taXNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDMpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDlmNmFlNmQ4NjJlMDlhMWY1MGI0IiwiY2xhc3MgVG91Y2gge1xuICAvLyBzdGFydFk7XG4gIC8vIGN1cnJlbnRZO1xuICAvLyBpZGVudGlmaWVyO1xuXG4gIGNvbnN0cnVjdG9yKHRvdWNoKSB7XG4gICAgdGhpcy5zdGFydFkgPSB0aGlzLmN1cnJlbnRZID0gdG91Y2guY2xpZW50WTtcbiAgICB0aGlzLmlkZW50aWZpZXIgPSB0b3VjaC5pZGVudGlmaWVyO1xuICB9XG5cbiAgdXBkYXRlKHRvdWNoKXtcbiAgICB0aGlzLmN1cnJlbnRZID0gdG91Y2guY2xpZW50WTtcbiAgfVxuXG4gIC8vIHJlc2V0KCkge1xuICAvLyAgIHRoaXMuc3RhcnRZID0gMDtcbiAgLy8gICB0aGlzLmN1cnJlbnRZID0gMDtcbiAgLy8gICB0aGlzLmlkZW50aWZpZXIgPSBudWxsO1xuICAvLyB9XG59XG5leHBvcnQgZGVmYXVsdCBUb3VjaDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8ganMvVG91Y2guanMiLCJjbGFzcyBFbGVtZW50IHtcbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSBzY3JvbGxUb3Age051bWJlcn1cbiAgICogQHBhcmFtIHNjcm9sbEhlaWdodCB7TnVtYmVyfVxuICAgKiBAcGFyYW0gY2xpZW50SGVpZ2h0IHtOdW1iZXJ9XG4gICAqL1xuICBjb25zdHJ1Y3RvcihzY3JvbGxUb3AsIHNjcm9sbEhlaWdodCwgY2xpZW50SGVpZ2h0KSB7XG4gICAgdGhpcy5zY3JvbGxUb3AgPSBzY3JvbGxUb3A7XG4gICAgdGhpcy5zY3JvbGxIZWlnaHQgPSBzY3JvbGxIZWlnaHQ7XG4gICAgdGhpcy5jbGllbnRIZWlnaHQgPSBjbGllbnRIZWlnaHQ7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIGVsZW1lbnQge0VsZW1lbnR9XG4gICAqL1xuICB1cGRhdGUoZWxlbWVudCkge1xuICAgIHRoaXMuc2Nyb2xsVG9wID0gZWxlbWVudC5zY3JvbGxUb3A7XG4gICAgdGhpcy5zY3JvbGxIZWlnaHQgPSBlbGVtZW50LnNjcm9sbEhlaWdodDtcbiAgICB0aGlzLmNsaWVudEhlaWdodCA9IGVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVsZW1lbnQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8ganMvRWxlbWVudC5qcyIsImV4cG9ydCBjb25zdCBESVJFQ1RJT04gPSB7XG4gIFVQOiAnVVAnLFxuICBET1dOOiAnRE9XTicsXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGpzL2NvbnN0YW50cy5qcyIsImltcG9ydCAnLi4vc3R5bGUvc3R5bGUuY3NzJztcbmltcG9ydCBTd2lwZSBmcm9tICcuL1N3aXBlJztcblxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgc3RhcnR1cCgpO1xufTtcblxuLy9sZXQgc3dpcGUgPSBuZXcgU3dpcGUoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwdHJcIikpO1xuXG5mdW5jdGlvbiBzdGFydHVwKCkge1xuICBjb25zdCBlbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwdHItbGlzdFwiKTtcbiAgY29uc3Qgc3dpcGUgPSBuZXcgU3dpcGUoZWxlbSk7XG4gIHN3aXBlLmFkZExpc3RlbmVyKCk7XG5cbiAgbGV0IHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIC8vINC/0LXRgNC10LLQtdC00ZHRgiDQv9GA0L7QvNC40YEg0LIg0YHQvtGB0YLQvtGP0L3QuNC1IGZ1bGZpbGxlZCDRgSDRgNC10LfRg9C70YzRgtCw0YLQvtC8IFwicmVzdWx0XCJcbiAgICAgIHJlc29sdmUoXCJyZXN1bHRcIik7XG4gICAgfSwgNTAwMCk7XG5cbiAgfSk7XG5cbiAgc3dpcGUub25SZWZyZXNoKGZ1bmN0aW9uIChkaXN0YW5jZSkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgLy8g0L/QtdGA0LXQstC10LTRkdGCINC/0YDQvtC80LjRgSDQsiDRgdC+0YHRgtC+0Y/QvdC40LUgZnVsZmlsbGVkINGBINGA0LXQt9GD0LvRjNGC0LDRgtC+0LwgXCJyZXN1bHRcIlxuICAgICAgICByZXNvbHZlKFwicmVzdWx0IFwiK2Rpc3RhbmNlKTtcbiAgICAgIH0sIDUwMDApO1xuXG4gICAgfSk7XG4gIH0pO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGpzL2luZGV4LmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3N0eWxlL3N0eWxlLmNzc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgVG91Y2hFbGVtZW50TGlzdCBmcm9tICcuL1RvdWNoRWxlbWVudExpc3QnO1xuaW1wb3J0IHsgRElSRUNUSU9OIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgaXNQcm9taXNlIH0gZnJvbSAnLi91dGlscy9pc1Byb21pc2UnO1xuXG5jb25zdCByZXNpc3RhbmNlID0gNDsgLy/QvtGB0LvQsNCx0LvQtdC90LjQtVxuY29uc3QgZGlzdGFuY2UgPSA1MDsgLy8g0LTQuNGB0YLQsNC90YbQuNGPXG5cbmNsYXNzIFN3aXBlIHtcbiAgY29uc3RydWN0b3IoZWxlbSkge1xuICAgIHRoaXMubGlzdEVsZW1lbnQgPSBlbGVtO1xuICAgIHRoaXMudG91Y2hFbGVtZW50cyA9IG5ldyBUb3VjaEVsZW1lbnRMaXN0KCk7XG4gICAgdGhpcy5jdXJyZW50VG91Y2hFbGVtZW50ID0gbnVsbDtcbiAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5oYW5kbGVTdGFydCA9IHRoaXMuaGFuZGxlU3RhcnQuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZU1vdmUgPSB0aGlzLmhhbmRsZU1vdmUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZUVuZCA9IHRoaXMuaGFuZGxlRW5kLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVDYW5jZWwgPSB0aGlzLmhhbmRsZUNhbmNlbC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlVHJhbnNpdGlvbkVuZCA9IHRoaXMuaGFuZGxlVHJhbnNpdGlvbkVuZC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgYWRkTGlzdGVuZXIoKSB7XG4gICAgdGhpcy5saXN0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCB0aGlzLmhhbmRsZVN0YXJ0LCB0cnVlKTtcbiAgICB0aGlzLmxpc3RFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIiwgdGhpcy5oYW5kbGVNb3ZlLCB0cnVlKTtcbiAgICB0aGlzLmxpc3RFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLCB0aGlzLmhhbmRsZUVuZCwgdHJ1ZSk7XG4gICAgdGhpcy5saXN0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hjYW5jZWxcIiwgdGhpcy5oYW5kbGVDYW5jZWwsIHRydWUpO1xuICAgIHRoaXMubGlzdEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInRyYW5zaXRpb25lbmRcIiwgdGhpcy5oYW5kbGVUcmFuc2l0aW9uRW5kLCB0cnVlKTtcbiAgfVxuXG4gIHJlbW92ZUxpc3RlbmVyKCkge1xuICAgIHRoaXMubGlzdEVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgdGhpcy5oYW5kbGVTdGFydCwgdHJ1ZSk7XG4gICAgdGhpcy5saXN0RWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsIHRoaXMuaGFuZGxlTW92ZSwgdHJ1ZSk7XG4gICAgdGhpcy5saXN0RWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIiwgdGhpcy5oYW5kbGVFbmQsIHRydWUpO1xuICAgIHRoaXMubGlzdEVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRvdWNoY2FuY2VsXCIsIHRoaXMuaGFuZGxlQ2FuY2VsLCB0cnVlKTtcbiAgICB0aGlzLmxpc3RFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0cmFuc2l0aW9uZW5kXCIsIHRoaXMuaGFuZGxlVHJhbnNpdGlvbkVuZCwgdHJ1ZSk7XG4gIH1cblxuICBjYWxsYmFja3MoY2JzKSB7XG4gICAgaWYgKGNicy5oYXNPd25Qcm9wZXJ0eShcIm9uVG91Y2hTdGFydFwiKSkge1xuICAgICAgdGhpcy5vblRvdWNoU3RhcnQgPSBjYnMub25Ub3VjaFN0YXJ0O1xuICAgIH1cbiAgICBpZiAoY2JzLmhhc093blByb3BlcnR5KFwib25Ub3VjaE1vdmVcIikpIHtcbiAgICAgIHRoaXMub25Ub3VjaE1vdmUgPSBjYnMub25Ub3VjaE1vdmU7XG4gICAgfVxuICAgIGlmIChjYnMuaGFzT3duUHJvcGVydHkoXCJvblRvdWNoRW5kXCIpKSB7XG4gICAgICB0aGlzLm9uVG91Y2hFbmQgPSBjYnMub25Ub3VjaEVuZDtcbiAgICB9XG4gICAgaWYgKGNicy5oYXNPd25Qcm9wZXJ0eShcIm9uVG91Y2hDYW5jZWxcIikpIHtcbiAgICAgIHRoaXMub25Ub3VjaENhbmNlbCA9IGNicy5vblRvdWNoQ2FuY2VsO1xuICAgIH1cbiAgfVxuXG4gIG9uUmVmcmVzaChmdW5jKSB7XG4gICAgaWYgKHR5cGVvZiBmdW5jICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignb25SZWZyZXNoIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuICAgIH1cbiAgICB0aGlzLm9uUmVmcmVzaCA9IGZ1bmM7XG4gIH1cblxuICBoYW5kbGVTdGFydChldnQpIHtcbiAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCB0b3VjaGVzID0gZXZ0LmNoYW5nZWRUb3VjaGVzO1xuXG4gICAgY29uc3QgZ3JhbmRwYSA9IHRoaXMubGlzdEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICAgIGNvbnN0IHtcbiAgICAgICAgICAgIHNjcm9sbFRvcCxcbiAgICAgICAgICAgIHNjcm9sbEhlaWdodCxcbiAgICAgICAgICAgIGNsaWVudEhlaWdodCxcbiAgICAgICAgICB9ID0gZ3JhbmRwYTtcblxuICAgIHRoaXMudG91Y2hFbGVtZW50cy5zZXRUb3VjaEVsZW1lbnRzKHRvdWNoZXMsIHNjcm9sbFRvcCwgc2Nyb2xsSGVpZ2h0LCBjbGllbnRIZWlnaHQpO1xuICAgIGNvbnN0IGZpcnN0VG91Y2ggPSB0aGlzLnRvdWNoRWxlbWVudHMuZ2V0Rmlyc3RUb3VjaEVsZW1lbnQoKTtcblxuICAgIGlmIChmaXJzdFRvdWNoICE9PSB0aGlzLmN1cnJlbnRUb3VjaEVsZW1lbnQpIHtcbiAgICAgIHRoaXMuY3VycmVudFRvdWNoRWxlbWVudCA9IGZpcnN0VG91Y2g7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaGFzT3duUHJvcGVydHkoXCJvblRvdWNoU3RhcnRcIikpIHtcbiAgICAgIHRoaXMub25Ub3VjaFN0YXJ0KHRoaXMuY3VycmVudFRvdWNoRWxlbWVudCwgdGhpcy50b3VjaEVsZW1lbnRzKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVNb3ZlKGV2dCkge1xuICAgIHRoaXMuX3VwZGF0ZVRvdWNoRWxlbWVudChldnQpO1xuXG4gICAgaWYgKHRoaXMuaGFzT3duUHJvcGVydHkoXCJvblRvdWNoTW92ZVwiKSkge1xuICAgICAgdGhpcy5vblRvdWNoTW92ZSh0b3VjaEVsZW1lbnQsIHRoaXMudG91Y2hFbGVtZW50cyk7XG4gICAgfVxuICB9XG5cbiAgX3VwZGF0ZVRvdWNoRWxlbWVudChldnQpIHtcbiAgICBjb25zdCB0b3VjaGVzID0gZXZ0LnRhcmdldFRvdWNoZXM7XG4gICAgY29uc3QgZ3JhbmRwYSA9IHRoaXMubGlzdEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICAgIGNvbnN0IHtcbiAgICAgICAgICAgIHNjcm9sbFRvcCxcbiAgICAgICAgICAgIHNjcm9sbEhlaWdodCxcbiAgICAgICAgICAgIGNsaWVudEhlaWdodCxcbiAgICAgICAgICB9ID0gZ3JhbmRwYTtcblxuICAgIGNvbnN0IHsgaWRlbnRpZmllciB9ID0gdGhpcy5jdXJyZW50VG91Y2hFbGVtZW50LnRvdWNoO1xuICAgIGNvbnN0IHRvdWNoID0gZ2V0VG91Y2hCeUlkZW50aWZpZXIodG91Y2hlcywgaWRlbnRpZmllcik7XG4gICAgY29uc3QgeyBtb3Rpb24gfSA9IHRoaXMudG91Y2hFbGVtZW50cy51cGRhdGVUb3VjaEVsZW1lbnQodG91Y2gsIHNjcm9sbFRvcCwgc2Nyb2xsSGVpZ2h0LCBjbGllbnRIZWlnaHQpO1xuICAgIC8vdGhpcy5fc2V0VHJhbnNmb3JtKG1vdGlvbiwgZXZ0KTtcblxuICAgIGlmIChtb3Rpb24uZGlyZWN0aW9uID09PSBESVJFQ1RJT04uRE9XTlxuICAgICAgfHwgbW90aW9uLmRpcmVjdGlvbiA9PT0gRElSRUNUSU9OLlVQKSB7XG4gICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG4gICAgICB0aGlzLmxpc3RFbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdGhpcy5pc0FjdGl2ZSA9IHRydWU7XG4gICAgICAvLyAjdG9kbyDQtNC+0LHQsNCy0LjRgtGMINC00YDRg9Cz0LjQtSDRgdCy0L7QudGB0YLQstCwINC00LvRjyDQutGA0L7RgdCx0YDQsNGD0LfQtdGA0L3QvtGB0YLQuFxuICAgICAgY29uc3QgZGlzdGFuY2VFbmZlZWJsZSA9IH5+KG1vdGlvbi5kaXN0YW5jZSAvIHJlc2lzdGFuY2UpOyAvL3JvdW5kXG4gICAgICB0aGlzLmxpc3RFbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVZKCR7ZGlzdGFuY2VFbmZlZWJsZX1weClgO1xuICAgIH1cbiAgfVxuXG4gIC8vIF9zZXRUcmFuc2Zvcm0obW90aW9uLCBldnQpIHtcbiAgLy8gICBpZiAobW90aW9uLmRpc3RhbmNlID09PSBudWxsKSB7XG4gIC8vICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG4gIC8vICAgICB0aGlzLmxpc3RFbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IG51bGw7XG4gIC8vICAgfSBlbHNlIHtcbiAgLy8gICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAvLyAgICAgdGhpcy5pc0FjdGl2ZSA9IHRydWU7XG4gIC8vICAgICAvLyAjdG9kbyDQtNC+0LHQsNCy0LjRgtGMINC00YDRg9Cz0LjQtSDRgdCy0L7QudGB0YLQstCwINC00LvRjyDQutGA0L7RgdCx0YDQsNGD0LfQtdGA0L3QvtGB0YLQuFxuICAvLyAgICAgY29uc3QgZGlzdGFuY2VFbmZlZWJsZSA9IH5+KG1vdGlvbi5kaXN0YW5jZSAvIHJlc2lzdGFuY2UpOyAvL3JvdW5kXG4gIC8vICAgICB0aGlzLmxpc3RFbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVZKCR7ZGlzdGFuY2VFbmZlZWJsZX1weClgO1xuICAvLyAgIH1cbiAgLy8gfVxuXG4gIGhhbmRsZUVuZChldnQpIHtcbiAgICBjb25zdCB0b3VjaEVsZW1lbnQgPSB0aGlzLl9oYW5kbGVSZW1vdmUoZXZ0KTtcblxuICAgIGlmICh0b3VjaEVsZW1lbnQgIT09IG51bGwgJiYgdGhpcy5oYXNPd25Qcm9wZXJ0eShcIm9uVG91Y2hFbmRcIikpIHtcbiAgICAgIHRoaXMub25Ub3VjaEVuZCh0b3VjaEVsZW1lbnQsIHRoaXMudG91Y2hFbGVtZW50cyk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlQ2FuY2VsKGV2dCkge1xuICAgIGNvbnN0IHRvdWNoRWxlbWVudCA9IHRoaXMuX2hhbmRsZVJlbW92ZShldnQpO1xuXG4gICAgaWYgKHRvdWNoRWxlbWVudCAhPT0gbnVsbCAmJiB0aGlzLmhhc093blByb3BlcnR5KFwib25Ub3VjaENhbmNlbFwiKSkge1xuICAgICAgdGhpcy5vblRvdWNoQ2FuY2VsKHRvdWNoRWxlbWVudCwgdGhpcy50b3VjaEVsZW1lbnRzKTtcbiAgICB9XG4gIH1cblxuICBfaGFuZGxlUmVtb3ZlKGV2dCkge1xuICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHRvdWNoZXMgPSBldnQuY2hhbmdlZFRvdWNoZXM7XG5cbiAgICBjb25zdCB7IGlkZW50aWZpZXIgfSA9IHRoaXMuY3VycmVudFRvdWNoRWxlbWVudC50b3VjaDtcbiAgICBjb25zdCB0b3VjaCA9IGdldFRvdWNoQnlJZGVudGlmaWVyKHRvdWNoZXMsIGlkZW50aWZpZXIpO1xuXG4gICAgLy8g0JXRgdC70Lgg0LfQsNC60L7QvdGH0LjQu9GB0Y8gdG91Y2gg0L/QsNC70YzRhtCwLCDQutC+0YLQvtGA0YvQuSDQvdC1INCw0LrRgtC40LLQvdGL0LkgKNC90LUg0L7QsdGA0LDQsdCw0YLRi9Cy0LDQtdC8LCDRgdGB0YvQu9C60LAg0L3QtSDQvdCw0YXQvtC00LjRgtGB0Y8g0LJcbiAgICAvLyB0aGlzLmN1cnJlbnRUb3VjaEVsZW1lbnQpLCDRgtC+INC40LPQvdC+0YDQuNGA0YPQtdC8INC+0LHRgNCw0LHQvtGC0LrRgyDQvdC10LDQutGC0YPQsNC70YzQvdC+0LPQviDQutC+0YHQsNC90LjRj1xuICAgIGlmICh0b3VjaCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvLyDQldGB0LvQuCDQsiDQtNCw0L3QvdGL0Lkg0LzQvtC80LXQvdGCINGB0LrRgNC+0LvQuNC8INGB0L/QuNGB0L7Quiwg0YLQviDRgNC10LDQs9C40YDQvtCy0LDRgtGMINC90LUg0L3QsNC00L4gKNC90LXRgiDQsiDQtNCw0L3QvdGL0Lkg0LzQvtC80LXQvdGCINGN0YTRhNC10LrRgtCwXG4gICAgLy8gcHVsbC10by1yZWZyZXNoKS5cbiAgICBpZiAoIXRoaXMuaXNBY3RpdmUpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8vINCj0LTQsNC70Y/QtdC8INCy0YHQtSDQvdC10LDQutGC0LjQstC90YvQtSAo0L7RgtC+0YDQstCw0L3QvdGL0LUpIHRvdWNoLCDQsiDRgtC+0Lwg0YfQuNGB0LvQtSDQuCDQsNC60YLQuNCy0L3Ri9C5LlxuICAgIHRoaXMudG91Y2hFbGVtZW50cy5kZWxldGVUb3VjaEVsZW1lbnRzKHRvdWNoZXMpO1xuICAgIC8vINCf0L7Qu9GD0YfQsNC10Lwg0L/QtdGA0LLRi9C5IHRvdWNoLCDQtdGB0LvQuCDQtdGB0YLRjCDRgtCw0LrQuNC1ICjQsNC60YLQuNCy0L3Ri9C5IHRvdWNoKVxuICAgIGNvbnN0IHRvdWNoRWxlbWVudCA9IHRoaXMudG91Y2hFbGVtZW50cy5nZXRGaXJzdFRvdWNoRWxlbWVudCgpOyAvLyBUb3VjaEVsZW1lbnQgb3IgbnVsbFxuXG4gICAgaWYgKHRvdWNoRWxlbWVudCAhPT0gbnVsbCkge1xuICAgICAgLy8g0L/RgNC+0YbQtdC00YPRgNCwINC+0LHQvdC+0LLQu9C10L3QuNGPIHRvdWNoINC+0LHRitC10LrRgtCwXG4gICAgICB0aGlzLl91cGRhdGVUb3VjaEVsZW1lbnQoZXZ0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8g0L/RgNC+0YbQtdC00YPRgNCwINC40L3QuNGG0LjQsNC70LjQt9Cw0YbQuNC4INC00L7QsdCw0LLQu9C10L3QuNGPINC60LvQsNGB0YHQvtCyINC4INC+0LHRgNCw0LHQvtGC0YfQuNC60L7QslxuICAgICAgY29uc3QgeyBtb3Rpb24gfSA9IHRoaXMuY3VycmVudFRvdWNoRWxlbWVudDtcbiAgICAgIGNvbnN0IGRpc3RhbmNlRW5mZWVibGUgPSB+fihtb3Rpb24uZGlzdGFuY2UgLyByZXNpc3RhbmNlKTsgLy9yb3VuZFxuICAgICAgaWYgKGRpc3RhbmNlRW5mZWVibGUgPj0gZGlzdGFuY2UpIHtcbiAgICAgICAgdGhpcy5fc2V0Q2xhc3MoXCJhY3RpdmUtdXBcIik7XG4gICAgICB9XG4gICAgICB0aGlzLl9zZXRTdHlsZSgpO1xuICAgICAgdGhpcy5fb25SZWZyZXNoKGRpc3RhbmNlRW5mZWVibGUpO1xuICAgIH1cblxuICAgIC8vdGhpcy5fcHVsbFJlZnJlc2hJbml0KCk7XG5cbiAgICAvL3RoaXMuX3Jlc2V0U3R5bGUoKTtcblxuICAgIHJldHVybiB0b3VjaEVsZW1lbnQ7XG4gIH1cblxuICBfb25SZWZyZXNoKGRpc3RhbmNlKSB7XG4gICAgaWYgKHRoaXMuaGFzT3duUHJvcGVydHkoXCJvblJlZnJlc2hcIikpIHtcbiAgICAgIGNvbnN0IHByb21pc2UgPSB0aGlzLm9uUmVmcmVzaChkaXN0YW5jZSk7XG4gICAgICBjb25zdCBfcmVtb3ZlQ2xhc3MgPSB0aGlzLl9yZW1vdmVDbGFzcztcbiAgICAgIGlmICghaXNQcm9taXNlKHByb21pc2UpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIG9uUmVmcmVzaCBmdW5jdGlvbmBzIHJldHVybiB2YWx1ZSBtdXN0IGJlIG11c3QgYmUgdGhlIFByb21pc2UnKTtcbiAgICAgIH1cbiAgICAgIHByb21pc2VcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIF9yZW1vdmVDbGFzcyhcImFjdGl2ZS11cFwiKTtcbiAgICAgICAgfSlcbiAgICB9XG4gIH1cblxuICAvLyBfcHVsbFJlZnJlc2hJbml0KCkge1xuICAvLyAgIHRoaXMuX3NldENsYXNzKFwiYWN0aXZlLXVwXCIpO1xuICAvLyB9XG5cbiAgX3NldENsYXNzKGNsYXNzTmFtZSkge1xuICAgIGNvbnN0IGNsYXNzTGlzdCA9IHRoaXMubGlzdEVsZW1lbnQuY2xhc3NMaXN0O1xuICAgIGNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgfVxuXG4gIF9yZW1vdmVDbGFzcyhjbGFzc05hbWUpIHtcbiAgICBjb25zdCBjbGFzc0xpc3QgPSB0aGlzLmxpc3RFbGVtZW50LmNsYXNzTGlzdDtcbiAgICBjbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XG4gIH1cblxuICBfc2V0U3R5bGUoKSB7XG4gICAgY29uc3Qgc3R5bGUgPSBnZXRTdHlsZSgwKTtcbiAgICB0aGlzLmxpc3RFbGVtZW50LnN0eWxlID0gc3R5bGU7XG4gIH1cblxuICBfcmVzZXRTdHlsZSgpIHtcbiAgICAvL2NvbnN0IHN0eWxlID0gZ2V0U3R5bGUoMCk7XG5cbiAgICB0aGlzLmxpc3RFbGVtZW50LnN0eWxlID0gbnVsbDtcbiAgICAvL3RoaXMuX3JlbW92ZUNsYXNzKFwiYWN0aXZlLXVwXCIpO1xuXG4gICAgLy8gdGhpcy5fc2V0Q2xhc3MoXCJhY3RpdmUtdXBcIik7XG4gICAgLy9cbiAgICAvLyBjb25zdCBzZWxmID0gdGhpcztcbiAgICAvL1xuICAgIC8vIGlmICh0aGlzLmhhc093blByb3BlcnR5KFwib25SZWZyZXNoXCIpKSB7XG4gICAgLy8gICB0aGlzLm9uUmVmcmVzaFxuICAgIC8vICAgICAudGhlbigoKSA9PiB7XG4gICAgLy8gICAgICAgc2VsZi5fcmVtb3ZlQ2xhc3MoXCJhY3RpdmUtdXBcIik7XG4gICAgLy8gICAgIH0pXG4gICAgLy8gfVxuXG4gIH1cblxuICBoYW5kbGVUcmFuc2l0aW9uRW5kKGV2dCkge1xuICAgIC8vZGVidWdnZXI7XG4gICAgLy8gI3RvZG8g0LTQvtCx0LDQstC40YLRjCDQtNGA0YPQs9C40LUg0YHQstC+0LnRgdGC0LLQsCDQtNC70Y8g0LrRgNC+0YHQsdGA0LDRg9C30LXRgNC90L7RgdGC0LggXCJvdHJhbnNpdGlvbmVuZFwiXG4gICAgaWYgKGV2dC50eXBlID09PSBcInRyYW5zaXRpb25lbmRcIiAmJiBldnQucHJvcGVydHlOYW1lID09PSBcInRyYW5zZm9ybVwiKSB7XG4gICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG4gICAgICB0aGlzLl9yZXNldFN0eWxlKCk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN3aXBlO1xuXG5mdW5jdGlvbiBnZXRTdHlsZShkaXN0KSB7XG4gIC8vICN0b2RvINC00L7QsdCw0LLQuNGC0Ywg0LTRgNGD0LPQuNC1INGB0LLQvtC50YHRgtCy0LAg0LTQu9GPINC60YDQvtGB0LHRgNCw0YPQt9C10YDQvdC+0YHRgtC4XG4gIHJldHVybiAoXG4gICAgYHRyYW5zZm9ybTp0cmFuc2xhdGVZKCR7ZGlzdH1weCk7YCArXG4gICAgJ3RyYW5zaXRpb24tZHVyYXRpb246MzAwbXM7JyArXG4gICAgJ3RyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllcigwLjMzLCAwLjY2LCAwLjY2LCAxKTsnICtcbiAgICAndHJhbnNpdGlvbi1kZWxheTptcydcbiAgKTtcbn1cblxuZnVuY3Rpb24gZ2V0VG91Y2hCeUlkZW50aWZpZXIodG91Y2hlcywgaWRlbnRpZmllcikge1xuICBsZXQgdG91Y2g7XG4gIE9iamVjdC5rZXlzKHRvdWNoZXMpLnNvbWUoKGtleSkgPT4ge1xuICAgIGNvbnN0IHRvdWNoVmFsdWUgPSB0b3VjaGVzW2tleV07XG4gICAgY29uc3QgaXNGaW5kZWQgPSB0b3VjaFZhbHVlLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXI7XG4gICAgaWYgKGlzRmluZGVkKSB7XG4gICAgICB0b3VjaCA9IHRvdWNoVmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBpc0ZpbmRlZDtcbiAgfSk7XG4gIHJldHVybiB0b3VjaDtcbn1cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGpzL1N3aXBlLmpzIiwiaW1wb3J0IFRvdWNoIGZyb20gJy4vVG91Y2gnO1xuaW1wb3J0IEVsZW1lbnQgZnJvbSAnLi9FbGVtZW50JztcbmltcG9ydCBUb3VjaEVsZW1lbnQgZnJvbSAnLi9Ub3VjaEVsZW1lbnQnO1xuXG5jbGFzcyBUb3VjaEVsZW1lbnRMaXN0IHtcbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSB0b3VjaGVzXG4gICAqIEBwYXJhbSBzY3JvbGxUb3BcbiAgICogQHBhcmFtIHNjcm9sbEhlaWdodFxuICAgKiBAcGFyYW0gY2xpZW50SGVpZ2h0XG4gICAqL1xuICBzZXRUb3VjaEVsZW1lbnRzKHRvdWNoZXMsIHNjcm9sbFRvcCwgc2Nyb2xsSGVpZ2h0LCBjbGllbnRIZWlnaHQpIHtcbiAgICBPYmplY3Qua2V5cyh0b3VjaGVzKS5tYXAoKGtleSkgPT4ge1xuICAgICAgY29uc3QgdG91Y2ggPSB0b3VjaGVzW2tleV07XG4gICAgICBjb25zdCB7IGlkZW50aWZpZXIgfSA9IHRvdWNoO1xuXG4gICAgICBpZiAodGhpc1tpZGVudGlmaWVyXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuX3NldFRvdWNoRWxlbWVudCh0b3VjaCwgc2Nyb2xsVG9wLCBzY3JvbGxIZWlnaHQsIGNsaWVudEhlaWdodCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB1cGRhdGVUb3VjaEVsZW1lbnRzKHRvdWNoZXMsIHNjcm9sbFRvcCwgc2Nyb2xsSGVpZ2h0LCBjbGllbnRIZWlnaHQpIHtcbiAgICBPYmplY3Qua2V5cyh0b3VjaGVzKS5tYXAoKGtleSkgPT4ge1xuICAgICAgY29uc3QgdG91Y2ggPSB0b3VjaGVzW2tleV07XG4gICAgICBjb25zdCB7IGlkZW50aWZpZXIgfSA9IHRvdWNoO1xuXG4gICAgICBsZXQgdG91Y2hFbGVtZW50ID0gdGhpc1tpZGVudGlmaWVyXTtcbiAgICAgIGlmICh0b3VjaEVsZW1lbnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLl9zZXRUb3VjaEVsZW1lbnQodG91Y2gsIHNjcm9sbFRvcCwgc2Nyb2xsSGVpZ2h0LCBjbGllbnRIZWlnaHQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdG91Y2hFbGVtZW50LnVwZGF0ZSh0b3VjaCwgc2Nyb2xsVG9wLCBzY3JvbGxIZWlnaHQsIGNsaWVudEhlaWdodCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB1cGRhdGVUb3VjaEVsZW1lbnQodG91Y2gsIHNjcm9sbFRvcCwgc2Nyb2xsSGVpZ2h0LCBjbGllbnRIZWlnaHQpIHtcbiAgICAgIGNvbnN0IHsgaWRlbnRpZmllciB9ID0gdG91Y2g7XG5cbiAgICAgIGxldCB0b3VjaEVsZW1lbnQgPSB0aGlzW2lkZW50aWZpZXJdO1xuICAgICAgaWYgKHRvdWNoRWxlbWVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRvdWNoRWxlbWVudCA9IHRoaXMuX3NldFRvdWNoRWxlbWVudCh0b3VjaCwgc2Nyb2xsVG9wLCBzY3JvbGxIZWlnaHQsIGNsaWVudEhlaWdodCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0b3VjaEVsZW1lbnQudXBkYXRlKHRvdWNoLCBzY3JvbGxUb3AsIHNjcm9sbEhlaWdodCwgY2xpZW50SGVpZ2h0KTtcbiAgICAgIH1cbiAgICByZXR1cm4gdG91Y2hFbGVtZW50O1xuICB9XG5cbiAgZGVsZXRlVG91Y2hFbGVtZW50cyh0b3VjaGVzKSB7XG4gICAgT2JqZWN0LmtleXModG91Y2hlcykubWFwKChrZXkpID0+IHtcbiAgICAgIGNvbnN0IHRvdWNoID0gdG91Y2hlc1trZXldO1xuICAgICAgY29uc3QgeyBpZGVudGlmaWVyIH0gPSB0b3VjaDtcblxuICAgICAgaWYgKHRoaXNbaWRlbnRpZmllcl0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBkZWxldGUgdGhpc1tpZGVudGlmaWVyXTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGdldEZpcnN0VG91Y2hFbGVtZW50KCkge1xuICAgIGxldCB0b3VjaEVsZW1lbnQgPSBudWxsO1xuICAgIE9iamVjdC5rZXlzKHRoaXMpLnNvbWUoa2V5ID0+ICh0b3VjaEVsZW1lbnQgPSB0aGlzW2tleV0sIHRydWUpKTtcbiAgICByZXR1cm4gdG91Y2hFbGVtZW50O1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfc2V0VG91Y2hFbGVtZW50KHRvdWNoLCBzY3JvbGxUb3AsIHNjcm9sbEhlaWdodCwgY2xpZW50SGVpZ2h0KSB7XG4gICAgY29uc3QgeyBpZGVudGlmaWVyIH0gPSB0b3VjaDtcbiAgICBjb25zdCB2YWx1ZSA9IG5ldyBUb3VjaCh0b3VjaCk7XG4gICAgY29uc3QgZWxlbWVudCA9IG5ldyBFbGVtZW50KHNjcm9sbFRvcCwgc2Nyb2xsSGVpZ2h0LCBjbGllbnRIZWlnaHQpO1xuICAgIHRoaXNbaWRlbnRpZmllcl0gPSBuZXcgVG91Y2hFbGVtZW50KHZhbHVlLCBlbGVtZW50KTtcbiAgICByZXR1cm4gdGhpc1tpZGVudGlmaWVyXTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUb3VjaEVsZW1lbnRMaXN0O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBqcy9Ub3VjaEVsZW1lbnRMaXN0LmpzIiwiaW1wb3J0IFRvdWNoIGZyb20gJy4vVG91Y2gnO1xuaW1wb3J0IEVsZW1lbnQgZnJvbSAnLi9FbGVtZW50JztcbmltcG9ydCB7IERJUkVDVElPTiB9IGZyb20gJy4vY29uc3RhbnRzJztcblxuY2xhc3MgVG91Y2hFbGVtZW50IHtcbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSB0b3VjaCB7VG91Y2h9XG4gICAqIEBwYXJhbSBlbGVtZW50IHtFbGVtZW50fVxuICAgKi9cbiAgY29uc3RydWN0b3IodG91Y2gsIGVsZW1lbnQpIHtcbiAgICB0aGlzLnRvdWNoID0gdG91Y2g7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0gdG91Y2gge1RvdWNofVxuICAgKiBAcGFyYW0gc2Nyb2xsVG9wXG4gICAqIEBwYXJhbSBzY3JvbGxIZWlnaHRcbiAgICogQHBhcmFtIGNsaWVudEhlaWdodFxuICAgKi9cbiAgdXBkYXRlKHRvdWNoLCBzY3JvbGxUb3AsIHNjcm9sbEhlaWdodCwgY2xpZW50SGVpZ2h0KSB7XG4gICAgdGhpcy50b3VjaC51cGRhdGUodG91Y2gpO1xuICAgIHRoaXMuZWxlbWVudC51cGRhdGUoe1xuICAgICAgc2Nyb2xsVG9wLFxuICAgICAgc2Nyb2xsSGVpZ2h0LFxuICAgICAgY2xpZW50SGVpZ2h0XG4gICAgfSk7XG4gIH1cblxuICBnZXQgbW90aW9uKCkge1xuICAgIGNvbnN0IG1vdmVUb3VjaFRvcFkgPSB+fih0aGlzLnRvdWNoLmN1cnJlbnRZIC0gdGhpcy50b3VjaC5zdGFydFkpOyAvL3JvdW5kXG4gICAgY29uc3QgZGlzdGFuY2VUb3AgPSBtb3ZlVG91Y2hUb3BZIC0gdGhpcy5lbGVtZW50LnNjcm9sbFRvcDtcblxuICAgIGNvbnN0IG1vdmVUb3VjaEJvdHRvbVkgPSB+bW92ZVRvdWNoVG9wWSArIDE7IC8vcmV2ZXJzZVxuICAgIGNvbnN0IHNjcm9sbEJvdHRvbSA9IHRoaXMuZWxlbWVudC5zY3JvbGxIZWlnaHQgLSAodGhpcy5lbGVtZW50LnNjcm9sbFRvcCArIHRoaXMuZWxlbWVudC5jbGllbnRIZWlnaHQpO1xuICAgIGNvbnN0IGRpc3RhbmNlQm90dG9tID0gbW92ZVRvdWNoQm90dG9tWSAtIHNjcm9sbEJvdHRvbTtcblxuICAgIGlmIChkaXN0YW5jZVRvcCA+IDApIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGRpc3RhbmNlOiBkaXN0YW5jZVRvcCxcbiAgICAgICAgZGlyZWN0aW9uOiBESVJFQ1RJT04uVVAsXG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChkaXN0YW5jZUJvdHRvbSA+IDApIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGRpc3RhbmNlOiB+ZGlzdGFuY2VCb3R0b20gKyAxLFxuICAgICAgICBkaXJlY3Rpb246IERJUkVDVElPTi5ET1dOLFxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBkaXN0YW5jZTogbnVsbCxcbiAgICAgICAgZGlyZWN0aW9uOiBudWxsLFxuICAgICAgfTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVG91Y2hFbGVtZW50O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBqcy9Ub3VjaEVsZW1lbnQuanMiLCJleHBvcnQgY29uc3QgaXNQcm9taXNlID0gZnVuY3Rpb24gaXNQcm9taXNlKG9iaikge1xuICByZXR1cm4gISFvYmogJiYgKHR5cGVvZiBvYmogPT09ICdvYmplY3QnIHx8IHR5cGVvZiBvYmogPT09ICdmdW5jdGlvbicpICYmIHR5cGVvZiBvYmoudGhlbiA9PT0gJ2Z1bmN0aW9uJztcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8ganMvdXRpbHMvaXNQcm9taXNlLmpzIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0E7Ozs7Ozs7Ozs7Ozs7OztBQzdEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkE7QUFDQTs7Ozs7O0FBTUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQUdBOzs7Ozs7Ozs7Ozs7QUN4QkE7QUFDQTtBQUNBO0FBRkE7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFBQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7Ozs7QUNoQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFTQTtBQUNBO0FBWEE7QUFBQTtBQVlBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDblJBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7QUFDQTs7Ozs7Ozs7QUFDQTs7Ozs7OztBQU9BO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQUlBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQUdBOzs7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUNBOzs7OztBQUtBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7Ozs7OztBQUdBOzs7Ozs7Ozs7Ozs7Ozs7QUMxREE7QUFDQTtBQUNBOzs7QSIsInNvdXJjZVJvb3QiOiIifQ==