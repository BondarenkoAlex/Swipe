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
      var touches = evt.changedTouches;

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
      var touches = evt.changedTouches;
      var _grandpa2 = this.grandpa,
          scrollTop = _grandpa2.scrollTop,
          scrollHeight = _grandpa2.scrollHeight,
          clientHeight = _grandpa2.clientHeight;

      //const { identifier } = this.currentTouchElement.touch;
      //const touch = getTouchByIdentifier(touches, identifier);
      //
      //const touchElement = this.touchElements.updateTouchElement(touch, scrollTop, scrollHeight,
      // clientHeight);

      var touchElements = this.touchElements.updateTouchElements(touches, scrollTop, scrollHeight, clientHeight);
      var identifier = this.currentTouchElement.touch.identifier;

      var touchElement = touchElements[identifier];
      var motion = touchElement.motion;


      if (motion.direction === _constants.DIRECTION.NONE) {
        this.isActive = false;
        this.listElement.style.transform = null;
      } else {
        // move UP or DOWN
        evt.preventDefault();
        this.isActive = true;
        // #todo добавить другие свойства для кросбраузерности
        var distanceEnfeeble = ~~(motion.distance / resistance); //round
        this.listElement.style.transform = 'translateY(' + distanceEnfeeble + 'px)';
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
      // Если в данный момент скролим список, то реагировать не надо (нет в данный момент эффекта
      // pull-to-refresh).
      if (!this.isActive) {
        return null;
      }

      var touches = evt.changedTouches; // те, которые покинули экран
      //const touches = evt.touches;

      // const { identifier } = this.currentTouchElement.touch;
      //const touch = getTouchByIdentifier(touches, identifier);

      var _grandpa3 = this.grandpa,
          scrollTop = _grandpa3.scrollTop,
          scrollHeight = _grandpa3.scrollHeight,
          clientHeight = _grandpa3.clientHeight;


      var touchElements = this.touchElements.updateTouchElements(touches, scrollTop, scrollHeight, clientHeight);

      // Удаляем все неактивные (оторванные) touch, в том числе и активный.
      this.touchElements.deleteTouchElements(touches);
      // Получаем новый активный палец (если такой есть)
      var touchElementMemory = this.currentTouchElement;

      var identifier = this.currentTouchElement.touch.identifier;

      // поиск в "оторваных" пальцах расчетный палец по идентофикатору

      var isRemoveCurTouchElement = Object.keys(touches).some(function (key) {
        return touches[key].identifier === identifier;
      });

      // если touch по которому происходит рассчет не покинул экран, то выхдим сразу
      // (this.currentTouchElement - не изменился)
      if (!isRemoveCurTouchElement) {
        return null;
      }

      // получение актуального пальца по которому будет происходить расчет
      this.currentTouchElement = this.touchElements.getFirstTouchElement(); // TouchElement or null

      if (this.currentTouchElement !== null) {
        // есть взаимодействующие пальцы с экраном
        return null; //this.currentTouchElement;
      }

      // Все пальцы покинули экран
      // процедура инициализации добавления классов и обработчиков
      var motion = touchElementMemory.motion;


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

      return touchElementMemory; // touchElement or null
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIGQ3MjM3NTMwNjM0MTUyMTM5MmE4Iiwid2VicGFjazovLy9qcy9Ub3VjaC5qcyIsIndlYnBhY2s6Ly8vanMvRWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vanMvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy9qcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zdHlsZS9zdHlsZS5jc3M/NzJhMiIsIndlYnBhY2s6Ly8vanMvU3dpcGUuanMiLCJ3ZWJwYWNrOi8vL2pzL1RvdWNoRWxlbWVudExpc3QuanMiLCJ3ZWJwYWNrOi8vL2pzL1RvdWNoRWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vanMvdXRpbHMvaXNQcm9taXNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDMpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGQ3MjM3NTMwNjM0MTUyMTM5MmE4IiwiY2xhc3MgVG91Y2gge1xuICAvLyBzdGFydFk7XG4gIC8vIGN1cnJlbnRZO1xuICAvLyBpZGVudGlmaWVyO1xuXG4gIGNvbnN0cnVjdG9yKHRvdWNoKSB7XG4gICAgdGhpcy5zdGFydFkgPSB0aGlzLmN1cnJlbnRZID0gdG91Y2guY2xpZW50WTtcbiAgICB0aGlzLmlkZW50aWZpZXIgPSB0b3VjaC5pZGVudGlmaWVyO1xuICB9XG5cbiAgdXBkYXRlKHRvdWNoKXtcbiAgICB0aGlzLmN1cnJlbnRZID0gdG91Y2guY2xpZW50WTtcbiAgfVxuXG4gIC8vIHJlc2V0KCkge1xuICAvLyAgIHRoaXMuc3RhcnRZID0gMDtcbiAgLy8gICB0aGlzLmN1cnJlbnRZID0gMDtcbiAgLy8gICB0aGlzLmlkZW50aWZpZXIgPSBudWxsO1xuICAvLyB9XG59XG5leHBvcnQgZGVmYXVsdCBUb3VjaDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8ganMvVG91Y2guanMiLCJjbGFzcyBFbGVtZW50IHtcbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSBzY3JvbGxUb3Age051bWJlcn1cbiAgICogQHBhcmFtIHNjcm9sbEhlaWdodCB7TnVtYmVyfVxuICAgKiBAcGFyYW0gY2xpZW50SGVpZ2h0IHtOdW1iZXJ9XG4gICAqL1xuICBjb25zdHJ1Y3RvcihzY3JvbGxUb3AsIHNjcm9sbEhlaWdodCwgY2xpZW50SGVpZ2h0KSB7XG4gICAgdGhpcy5zY3JvbGxUb3AgPSBzY3JvbGxUb3A7XG4gICAgdGhpcy5zY3JvbGxIZWlnaHQgPSBzY3JvbGxIZWlnaHQ7XG4gICAgdGhpcy5jbGllbnRIZWlnaHQgPSBjbGllbnRIZWlnaHQ7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIGVsZW1lbnQge0VsZW1lbnR9XG4gICAqL1xuICB1cGRhdGUoZWxlbWVudCkge1xuICAgIHRoaXMuc2Nyb2xsVG9wID0gZWxlbWVudC5zY3JvbGxUb3A7XG4gICAgdGhpcy5zY3JvbGxIZWlnaHQgPSBlbGVtZW50LnNjcm9sbEhlaWdodDtcbiAgICB0aGlzLmNsaWVudEhlaWdodCA9IGVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVsZW1lbnQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8ganMvRWxlbWVudC5qcyIsImV4cG9ydCBjb25zdCBESVJFQ1RJT04gPSB7XG4gIFVQOiAnVVAnLFxuICBET1dOOiAnRE9XTicsXG4gIE5PTkU6ICdOT05FJyxcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8ganMvY29uc3RhbnRzLmpzIiwiaW1wb3J0ICcuLi9zdHlsZS9zdHlsZS5jc3MnO1xuaW1wb3J0IFN3aXBlIGZyb20gJy4vU3dpcGUnO1xuXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICBzdGFydHVwKCk7XG59O1xuXG4vL2xldCBzd2lwZSA9IG5ldyBTd2lwZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInB0clwiKSk7XG5cbmZ1bmN0aW9uIHN0YXJ0dXAoKSB7XG4gIGNvbnN0IGVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInB0ci1saXN0XCIpO1xuICBjb25zdCBzd2lwZSA9IG5ldyBTd2lwZShlbGVtKTtcbiAgc3dpcGUuYWRkTGlzdGVuZXIoKTtcblxuICBzd2lwZS5vblJlZnJlc2goZnVuY3Rpb24gKGRpc3RhbmNlKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAvLyDQv9C10YDQtdCy0LXQtNGR0YIg0L/RgNC+0LzQuNGBINCyINGB0L7RgdGC0L7Rj9C90LjQtSBmdWxmaWxsZWQg0YEg0YDQtdC30YPQu9GM0YLQsNGC0L7QvCBcInJlc3VsdFwiXG4gICAgICAgIHJlc29sdmUoXCJyZXN1bHQgXCIgKyBkaXN0YW5jZSk7XG4gICAgICB9LCAyMDAwKTtcblxuICAgIH0pO1xuICB9KTtcblxuICBzd2lwZS5jYWxsYmFja3Moe1xuICAgIG9uVG91Y2hNb3ZlOiBmdW5jdGlvbiAodG91Y2hFbGVtZW50KSB7XG4gICAgICBjb25zdCB7IG1vdGlvbiB9ID0gdG91Y2hFbGVtZW50O1xuICAgICAgY29uc29sZS5sb2cobW90aW9uLmRpc3RhbmNlKTtcbiAgICB9XG4gIH0pO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGpzL2luZGV4LmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3N0eWxlL3N0eWxlLmNzc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgVG91Y2hFbGVtZW50TGlzdCBmcm9tICcuL1RvdWNoRWxlbWVudExpc3QnO1xuaW1wb3J0IHsgRElSRUNUSU9OIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgaXNQcm9taXNlIH0gZnJvbSAnLi91dGlscy9pc1Byb21pc2UnO1xuXG5jb25zdCByZXNpc3RhbmNlID0gNDsgLy/QvtGB0LvQsNCx0LvQtdC90LjQtVxuY29uc3QgZGlzdGFuY2UgPSA1MDsgLy8g0LTQuNGB0YLQsNC90YbQuNGPXG5cbmNvbnN0IGNsYXNzc05hbWVzID0ge1xuICBDT01NT046IFtcInB1bGwtdG8tcmVmcmVzaC1vbnJlZnJlc2hcIl0sXG4gIFtESVJFQ1RJT04uVVBdOiBbXCJwdWxsLXRvLXJlZnJlc2gtb25yZWZyZXNoLXVwXCIsIFwiZHNkXCJdLFxuICBbRElSRUNUSU9OLkRPV05dOiBbXCJwdWxsLXRvLXJlZnJlc2gtb25yZWZyZXNoLWRvd25cIiwgXCJkc2Zkc2RzZlwiXSxcbn07XG5cbmNsYXNzIFN3aXBlIHtcbiAgY29uc3RydWN0b3IoZWxlbSkge1xuICAgIHRoaXMubGlzdEVsZW1lbnQgPSBlbGVtO1xuICAgIHRoaXMuZ3JhbmRwYSA9IGVsZW0ucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICAgIHRoaXMudG91Y2hFbGVtZW50cyA9IG5ldyBUb3VjaEVsZW1lbnRMaXN0KCk7XG4gICAgdGhpcy5jdXJyZW50VG91Y2hFbGVtZW50ID0gbnVsbDtcbiAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5oYW5kbGVTdGFydCA9IHRoaXMuaGFuZGxlU3RhcnQuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZU1vdmUgPSB0aGlzLmhhbmRsZU1vdmUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZUVuZCA9IHRoaXMuaGFuZGxlRW5kLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVDYW5jZWwgPSB0aGlzLmhhbmRsZUNhbmNlbC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlVHJhbnNpdGlvbkVuZCA9IHRoaXMuaGFuZGxlVHJhbnNpdGlvbkVuZC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgYWRkTGlzdGVuZXIoKSB7XG4gICAgdGhpcy5saXN0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCB0aGlzLmhhbmRsZVN0YXJ0LCBmYWxzZSk7XG4gICAgdGhpcy5saXN0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsIHRoaXMuaGFuZGxlTW92ZSwgZmFsc2UpO1xuICAgIHRoaXMubGlzdEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsIHRoaXMuaGFuZGxlRW5kLCBmYWxzZSk7XG4gICAgdGhpcy5saXN0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hjYW5jZWxcIiwgdGhpcy5oYW5kbGVDYW5jZWwsIGZhbHNlKTtcbiAgICB0aGlzLmxpc3RFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0cmFuc2l0aW9uZW5kXCIsIHRoaXMuaGFuZGxlVHJhbnNpdGlvbkVuZCwgZmFsc2UpO1xuICB9XG5cbiAgcmVtb3ZlTGlzdGVuZXIoKSB7XG4gICAgdGhpcy5saXN0RWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCB0aGlzLmhhbmRsZVN0YXJ0LCBmYWxzZSk7XG4gICAgdGhpcy5saXN0RWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsIHRoaXMuaGFuZGxlTW92ZSwgZmFsc2UpO1xuICAgIHRoaXMubGlzdEVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsIHRoaXMuaGFuZGxlRW5kLCBmYWxzZSk7XG4gICAgdGhpcy5saXN0RWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2hjYW5jZWxcIiwgdGhpcy5oYW5kbGVDYW5jZWwsIGZhbHNlKTtcbiAgICB0aGlzLmxpc3RFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0cmFuc2l0aW9uZW5kXCIsIHRoaXMuaGFuZGxlVHJhbnNpdGlvbkVuZCwgZmFsc2UpO1xuICB9XG5cbiAgY2FsbGJhY2tzKGNicykge1xuICAgIGlmIChjYnMuaGFzT3duUHJvcGVydHkoXCJvblRvdWNoU3RhcnRcIikpIHtcbiAgICAgIHRoaXMub25Ub3VjaFN0YXJ0ID0gY2JzLm9uVG91Y2hTdGFydDtcbiAgICB9XG4gICAgaWYgKGNicy5oYXNPd25Qcm9wZXJ0eShcIm9uVG91Y2hNb3ZlXCIpKSB7XG4gICAgICB0aGlzLm9uVG91Y2hNb3ZlID0gY2JzLm9uVG91Y2hNb3ZlO1xuICAgIH1cbiAgICBpZiAoY2JzLmhhc093blByb3BlcnR5KFwib25Ub3VjaEVuZFwiKSkge1xuICAgICAgdGhpcy5vblRvdWNoRW5kID0gY2JzLm9uVG91Y2hFbmQ7XG4gICAgfVxuICAgIGlmIChjYnMuaGFzT3duUHJvcGVydHkoXCJvblRvdWNoQ2FuY2VsXCIpKSB7XG4gICAgICB0aGlzLm9uVG91Y2hDYW5jZWwgPSBjYnMub25Ub3VjaENhbmNlbDtcbiAgICB9XG4gIH1cblxuICBvblJlZnJlc2goZnVuYykge1xuICAgIGlmICh0eXBlb2YgZnVuYyAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ29uUmVmcmVzaCBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcbiAgICB9XG4gICAgdGhpcy5vblJlZnJlc2ggPSBmdW5jO1xuICB9XG5cbiAgaGFuZGxlU3RhcnQoZXZ0KSB7XG4gICAgY29uc3QgdG91Y2hlcyA9IGV2dC5jaGFuZ2VkVG91Y2hlcztcblxuICAgIGNvbnN0IHtcbiAgICAgICAgICAgIHNjcm9sbFRvcCxcbiAgICAgICAgICAgIHNjcm9sbEhlaWdodCxcbiAgICAgICAgICAgIGNsaWVudEhlaWdodCxcbiAgICAgICAgICB9ID0gdGhpcy5ncmFuZHBhO1xuXG4gICAgdGhpcy50b3VjaEVsZW1lbnRzLnNldFRvdWNoRWxlbWVudHModG91Y2hlcywgc2Nyb2xsVG9wLCBzY3JvbGxIZWlnaHQsIGNsaWVudEhlaWdodCk7XG4gICAgY29uc3QgZmlyc3RUb3VjaCA9IHRoaXMudG91Y2hFbGVtZW50cy5nZXRGaXJzdFRvdWNoRWxlbWVudCgpO1xuXG4gICAgaWYgKGZpcnN0VG91Y2ggIT09IHRoaXMuY3VycmVudFRvdWNoRWxlbWVudCkge1xuICAgICAgdGhpcy5jdXJyZW50VG91Y2hFbGVtZW50ID0gZmlyc3RUb3VjaDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5oYXNPd25Qcm9wZXJ0eShcIm9uVG91Y2hTdGFydFwiKSkge1xuICAgICAgdGhpcy5vblRvdWNoU3RhcnQodGhpcy5jdXJyZW50VG91Y2hFbGVtZW50LCB0aGlzLnRvdWNoRWxlbWVudHMpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZU1vdmUoZXZ0KSB7XG4gICAgY29uc3QgdG91Y2hFbGVtZW50ID0gdGhpcy5fdXBkYXRlVG91Y2hFbGVtZW50KGV2dCk7XG5cbiAgICBpZiAodGhpcy5oYXNPd25Qcm9wZXJ0eShcIm9uVG91Y2hNb3ZlXCIpKSB7XG4gICAgICB0aGlzLm9uVG91Y2hNb3ZlKHRvdWNoRWxlbWVudCwgdGhpcy50b3VjaEVsZW1lbnRzKTtcbiAgICB9XG4gIH1cblxuICBfdXBkYXRlVG91Y2hFbGVtZW50KGV2dCkge1xuICAgIGNvbnN0IHRvdWNoZXMgPSBldnQuY2hhbmdlZFRvdWNoZXM7XG4gICAgY29uc3Qge1xuICAgICAgICAgICAgc2Nyb2xsVG9wLFxuICAgICAgICAgICAgc2Nyb2xsSGVpZ2h0LFxuICAgICAgICAgICAgY2xpZW50SGVpZ2h0LFxuICAgICAgICAgIH0gPSB0aGlzLmdyYW5kcGE7XG5cbiAgICAvL2NvbnN0IHsgaWRlbnRpZmllciB9ID0gdGhpcy5jdXJyZW50VG91Y2hFbGVtZW50LnRvdWNoO1xuICAgIC8vY29uc3QgdG91Y2ggPSBnZXRUb3VjaEJ5SWRlbnRpZmllcih0b3VjaGVzLCBpZGVudGlmaWVyKTtcbiAgICAvL1xuICAgIC8vY29uc3QgdG91Y2hFbGVtZW50ID0gdGhpcy50b3VjaEVsZW1lbnRzLnVwZGF0ZVRvdWNoRWxlbWVudCh0b3VjaCwgc2Nyb2xsVG9wLCBzY3JvbGxIZWlnaHQsXG4gICAgLy8gY2xpZW50SGVpZ2h0KTtcbiAgICBjb25zdCB0b3VjaEVsZW1lbnRzID0gdGhpcy50b3VjaEVsZW1lbnRzLnVwZGF0ZVRvdWNoRWxlbWVudHModG91Y2hlcywgc2Nyb2xsVG9wLCBzY3JvbGxIZWlnaHQsIGNsaWVudEhlaWdodCk7XG4gICAgY29uc3QgeyBpZGVudGlmaWVyIH0gPSB0aGlzLmN1cnJlbnRUb3VjaEVsZW1lbnQudG91Y2g7XG4gICAgY29uc3QgdG91Y2hFbGVtZW50ID0gdG91Y2hFbGVtZW50c1tpZGVudGlmaWVyXTtcbiAgICBjb25zdCB7IG1vdGlvbiB9ID0gdG91Y2hFbGVtZW50O1xuXG4gICAgaWYgKG1vdGlvbi5kaXJlY3Rpb24gPT09IERJUkVDVElPTi5OT05FKSB7XG4gICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG4gICAgICB0aGlzLmxpc3RFbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIG1vdmUgVVAgb3IgRE9XTlxuICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZTtcbiAgICAgIC8vICN0b2RvINC00L7QsdCw0LLQuNGC0Ywg0LTRgNGD0LPQuNC1INGB0LLQvtC50YHRgtCy0LAg0LTQu9GPINC60YDQvtGB0LHRgNCw0YPQt9C10YDQvdC+0YHRgtC4XG4gICAgICBjb25zdCBkaXN0YW5jZUVuZmVlYmxlID0gfn4obW90aW9uLmRpc3RhbmNlIC8gcmVzaXN0YW5jZSk7IC8vcm91bmRcbiAgICAgIHRoaXMubGlzdEVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVkoJHtkaXN0YW5jZUVuZmVlYmxlfXB4KWA7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRvdWNoRWxlbWVudDtcbiAgfVxuXG4gIGhhbmRsZUVuZChldnQpIHtcbiAgICBjb25zdCB0b3VjaEVsZW1lbnQgPSB0aGlzLl9oYW5kbGVSZW1vdmUoZXZ0KTtcblxuICAgIGlmICh0b3VjaEVsZW1lbnQgIT09IG51bGwgJiYgdGhpcy5oYXNPd25Qcm9wZXJ0eShcIm9uVG91Y2hFbmRcIikpIHtcbiAgICAgIHRoaXMub25Ub3VjaEVuZCh0b3VjaEVsZW1lbnQsIHRoaXMudG91Y2hFbGVtZW50cyk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlQ2FuY2VsKGV2dCkge1xuICAgIGNvbnN0IHRvdWNoRWxlbWVudCA9IHRoaXMuX2hhbmRsZVJlbW92ZShldnQpO1xuXG4gICAgaWYgKHRvdWNoRWxlbWVudCAhPT0gbnVsbCAmJiB0aGlzLmhhc093blByb3BlcnR5KFwib25Ub3VjaENhbmNlbFwiKSkge1xuICAgICAgdGhpcy5vblRvdWNoQ2FuY2VsKHRvdWNoRWxlbWVudCwgdGhpcy50b3VjaEVsZW1lbnRzKTtcbiAgICB9XG4gIH1cblxuICBfaGFuZGxlUmVtb3ZlKGV2dCkge1xuICAgIC8vINCV0YHQu9C4INCyINC00LDQvdC90YvQuSDQvNC+0LzQtdC90YIg0YHQutGA0L7Qu9C40Lwg0YHQv9C40YHQvtC6LCDRgtC+INGA0LXQsNCz0LjRgNC+0LLQsNGC0Ywg0L3QtSDQvdCw0LTQviAo0L3QtdGCINCyINC00LDQvdC90YvQuSDQvNC+0LzQtdC90YIg0Y3RhNGE0LXQutGC0LBcbiAgICAvLyBwdWxsLXRvLXJlZnJlc2gpLlxuICAgIGlmICghdGhpcy5pc0FjdGl2ZSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgdG91Y2hlcyA9IGV2dC5jaGFuZ2VkVG91Y2hlczsgLy8g0YLQtSwg0LrQvtGC0L7RgNGL0LUg0L/QvtC60LjQvdGD0LvQuCDRjdC60YDQsNC9XG4gICAgLy9jb25zdCB0b3VjaGVzID0gZXZ0LnRvdWNoZXM7XG5cbiAgICAvLyBjb25zdCB7IGlkZW50aWZpZXIgfSA9IHRoaXMuY3VycmVudFRvdWNoRWxlbWVudC50b3VjaDtcbiAgICAvL2NvbnN0IHRvdWNoID0gZ2V0VG91Y2hCeUlkZW50aWZpZXIodG91Y2hlcywgaWRlbnRpZmllcik7XG5cbiAgICBjb25zdCB7XG4gICAgICAgICAgICBzY3JvbGxUb3AsXG4gICAgICAgICAgICBzY3JvbGxIZWlnaHQsXG4gICAgICAgICAgICBjbGllbnRIZWlnaHQsXG4gICAgICAgICAgfSA9IHRoaXMuZ3JhbmRwYTtcblxuICAgIGNvbnN0IHRvdWNoRWxlbWVudHMgPSB0aGlzLnRvdWNoRWxlbWVudHMudXBkYXRlVG91Y2hFbGVtZW50cyh0b3VjaGVzLCBzY3JvbGxUb3AsIHNjcm9sbEhlaWdodCwgY2xpZW50SGVpZ2h0KTtcblxuICAgIC8vINCj0LTQsNC70Y/QtdC8INCy0YHQtSDQvdC10LDQutGC0LjQstC90YvQtSAo0L7RgtC+0YDQstCw0L3QvdGL0LUpIHRvdWNoLCDQsiDRgtC+0Lwg0YfQuNGB0LvQtSDQuCDQsNC60YLQuNCy0L3Ri9C5LlxuICAgIHRoaXMudG91Y2hFbGVtZW50cy5kZWxldGVUb3VjaEVsZW1lbnRzKHRvdWNoZXMpO1xuICAgIC8vINCf0L7Qu9GD0YfQsNC10Lwg0L3QvtCy0YvQuSDQsNC60YLQuNCy0L3Ri9C5INC/0LDQu9C10YYgKNC10YHQu9C4INGC0LDQutC+0Lkg0LXRgdGC0YwpXG4gICAgY29uc3QgdG91Y2hFbGVtZW50TWVtb3J5ID0gdGhpcy5jdXJyZW50VG91Y2hFbGVtZW50O1xuXG4gICAgY29uc3QgeyBpZGVudGlmaWVyIH0gPSB0aGlzLmN1cnJlbnRUb3VjaEVsZW1lbnQudG91Y2g7XG5cbiAgICAvLyDQv9C+0LjRgdC6INCyIFwi0L7RgtC+0YDQstCw0L3Ri9GFXCIg0L/QsNC70YzRhtCw0YUg0YDQsNGB0YfQtdGC0L3Ri9C5INC/0LDQu9C10YYg0L/QviDQuNC00LXQvdGC0L7RhNC40LrQsNGC0L7RgNGDXG4gICAgbGV0IGlzUmVtb3ZlQ3VyVG91Y2hFbGVtZW50ID0gT2JqZWN0LmtleXModG91Y2hlcykuc29tZShrZXkgPT4gdG91Y2hlc1trZXldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpO1xuXG4gICAgLy8g0LXRgdC70LggdG91Y2gg0L/QviDQutC+0YLQvtGA0L7QvNGDINC/0YDQvtC40YHRhdC+0LTQuNGCINGA0LDRgdGB0YfQtdGCINC90LUg0L/QvtC60LjQvdGD0Lsg0Y3QutGA0LDQvSwg0YLQviDQstGL0YXQtNC40Lwg0YHRgNCw0LfRg1xuICAgIC8vICh0aGlzLmN1cnJlbnRUb3VjaEVsZW1lbnQgLSDQvdC1INC40LfQvNC10L3QuNC70YHRjylcbiAgICBpZiAoIWlzUmVtb3ZlQ3VyVG91Y2hFbGVtZW50KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvLyDQv9C+0LvRg9GH0LXQvdC40LUg0LDQutGC0YPQsNC70YzQvdC+0LPQviDQv9Cw0LvRjNGG0LAg0L/QviDQutC+0YLQvtGA0L7QvNGDINCx0YPQtNC10YIg0L/RgNC+0LjRgdGF0L7QtNC40YLRjCDRgNCw0YHRh9C10YJcbiAgICB0aGlzLmN1cnJlbnRUb3VjaEVsZW1lbnQgPSB0aGlzLnRvdWNoRWxlbWVudHMuZ2V0Rmlyc3RUb3VjaEVsZW1lbnQoKTsgLy8gVG91Y2hFbGVtZW50IG9yIG51bGxcblxuICAgIGlmICh0aGlzLmN1cnJlbnRUb3VjaEVsZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIC8vINC10YHRgtGMINCy0LfQsNC40LzQvtC00LXQudGB0YLQstGD0Y7RidC40LUg0L/QsNC70YzRhtGLINGBINGN0LrRgNCw0L3QvtC8XG4gICAgICByZXR1cm4gbnVsbDsgLy90aGlzLmN1cnJlbnRUb3VjaEVsZW1lbnQ7XG4gICAgfVxuXG4gICAgLy8g0JLRgdC1INC/0LDQu9GM0YbRiyDQv9C+0LrQuNC90YPQu9C4INGN0LrRgNCw0L1cbiAgICAvLyDQv9GA0L7RhtC10LTRg9GA0LAg0LjQvdC40YbQuNCw0LvQuNC30LDRhtC40Lgg0LTQvtCx0LDQstC70LXQvdC40Y8g0LrQu9Cw0YHRgdC+0LIg0Lgg0L7QsdGA0LDQsdC+0YLRh9C40LrQvtCyXG4gICAgY29uc3QgeyBtb3Rpb24gfSA9IHRvdWNoRWxlbWVudE1lbW9yeTtcblxuICAgIGNvbnN0IGRpc3RhbmNlRW5mZWVibGUgPSB+fihtb3Rpb24uZGlzdGFuY2UgLyByZXNpc3RhbmNlKTsgLy9yb3VuZFxuXG4gICAgbGV0IGRpc3RhbmNlRW5mZWVibGVBYnMgPSBkaXN0YW5jZUVuZmVlYmxlOyAvLyBvbmx5IGZvciBjb21wYXJlXG4gICAgaWYgKG1vdGlvbi5kaXJlY3Rpb24gPT09IERJUkVDVElPTi5ET1dOKSB7XG4gICAgICBkaXN0YW5jZUVuZmVlYmxlQWJzID0gfmRpc3RhbmNlRW5mZWVibGVBYnMgKyAxO1xuICAgIH1cblxuICAgIGlmIChkaXN0YW5jZUVuZmVlYmxlQWJzID49IGRpc3RhbmNlKSB7XG4gICAgICBjb25zdCBjbGFzc05hbWVzID0gdGhpcy5fZ2V0Q2xhc3NOYW1lcyhtb3Rpb24uZGlyZWN0aW9uKTtcbiAgICAgIHRoaXMuX2FkZENsYXNzKC4uLmNsYXNzTmFtZXMpO1xuICAgICAgdGhpcy5fb25SZWZyZXNoKGRpc3RhbmNlRW5mZWVibGUsIGNsYXNzTmFtZXMpO1xuICAgIH1cbiAgICB0aGlzLl9zZXRTdHlsZSgpO1xuXG4gICAgcmV0dXJuIHRvdWNoRWxlbWVudE1lbW9yeTsgLy8gdG91Y2hFbGVtZW50IG9yIG51bGxcbiAgfVxuXG4gIF9nZXRDbGFzc05hbWVzKGRpcmVjdGlvbikge1xuICAgIGxldCBjbGFzc05hbWVzID0gXCJcIjtcbiAgICBpZiAoZGlyZWN0aW9uID09PSBESVJFQ1RJT04uRE9XTikge1xuICAgICAgY2xhc3NOYW1lcyA9IGNsYXNzc05hbWVzLkNPTU1PTi5jb25jYXQoY2xhc3NzTmFtZXMuRE9XTik7XG4gICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09IERJUkVDVElPTi5VUCkge1xuICAgICAgY2xhc3NOYW1lcyA9IGNsYXNzc05hbWVzLkNPTU1PTi5jb25jYXQoY2xhc3NzTmFtZXMuVVApO1xuICAgIH1cbiAgICByZXR1cm4gY2xhc3NOYW1lcztcbiAgfVxuXG4gIF9vblJlZnJlc2goZGlzdGFuY2UsIGNsYXNzTmFtZXMpIHtcbiAgICBpZiAodGhpcy5oYXNPd25Qcm9wZXJ0eShcIm9uUmVmcmVzaFwiKSkge1xuICAgICAgY29uc3QgcHJvbWlzZSA9IHRoaXMub25SZWZyZXNoKGRpc3RhbmNlKTtcbiAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgaWYgKCFpc1Byb21pc2UocHJvbWlzZSkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgb25SZWZyZXNoIGZ1bmN0aW9uYHMgcmV0dXJuIHZhbHVlIG11c3QgYmUgbXVzdCBiZSB0aGUgUHJvbWlzZScpO1xuICAgICAgfVxuICAgICAgcHJvbWlzZVxuICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgc2VsZi5fcmVtb3ZlQ2xhc3MuY2FsbChzZWxmLCAuLi5jbGFzc05hbWVzKTtcbiAgICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBfYWRkQ2xhc3MoKSB7XG4gICAgY29uc3QgY2xhc3NMaXN0ID0gdGhpcy5ncmFuZHBhLmNsYXNzTGlzdDtcbiAgICBjbGFzc0xpc3QuYWRkKC4uLmFyZ3VtZW50cyk7XG4gIH1cblxuICBfcmVtb3ZlQ2xhc3MoKSB7XG4gICAgY29uc3QgY2xhc3NMaXN0ID0gdGhpcy5ncmFuZHBhLmNsYXNzTGlzdDtcbiAgICBjbGFzc0xpc3QucmVtb3ZlKC4uLmFyZ3VtZW50cyk7XG4gIH1cblxuICBfc2V0U3R5bGUoKSB7XG4gICAgLy8gI3RvZG8g0L/RgNCw0LLQuNGC0Ywg0L/QvtC70YPRh9C10L3QuNC1INGB0YLQuNC70LXQuVxuICAgIHRoaXMubGlzdEVsZW1lbnQuc3R5bGUgPSBnZXRTdHlsZSgwKTtcbiAgfVxuXG4gIF9yZXNldFN0eWxlKCkge1xuICAgIHRoaXMubGlzdEVsZW1lbnQuc3R5bGUgPSBudWxsO1xuICB9XG5cbiAgaGFuZGxlVHJhbnNpdGlvbkVuZChldnQpIHtcbiAgICAvLyAjdG9kbyDQtNC+0LHQsNCy0LjRgtGMINC00YDRg9Cz0LjQtSDRgdCy0L7QudGB0YLQstCwINC00LvRjyDQutGA0L7RgdCx0YDQsNGD0LfQtdGA0L3QvtGB0YLQuCBcIm90cmFuc2l0aW9uZW5kXCJcbiAgICBpZiAoZXZ0LnR5cGUgPT09IFwidHJhbnNpdGlvbmVuZFwiICYmIGV2dC5wcm9wZXJ0eU5hbWUgPT09IFwidHJhbnNmb3JtXCIpIHtcbiAgICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuX3Jlc2V0U3R5bGUoKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3dpcGU7XG5cbmZ1bmN0aW9uIGdldFN0eWxlKGRpc3QpIHtcbiAgLy8gI3RvZG8g0LTQvtCx0LDQstC40YLRjCDQtNGA0YPQs9C40LUg0YHQstC+0LnRgdGC0LLQsCDQtNC70Y8g0LrRgNC+0YHQsdGA0LDRg9C30LXRgNC90L7RgdGC0LhcbiAgcmV0dXJuIChcbiAgICBgdHJhbnNmb3JtOnRyYW5zbGF0ZVkoJHtkaXN0fXB4KTtgICtcbiAgICAndHJhbnNpdGlvbi1kdXJhdGlvbjozMDBtczsnICtcbiAgICAndHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKDAuMzMsIDAuNjYsIDAuNjYsIDEpOycgK1xuICAgICd0cmFuc2l0aW9uLWRlbGF5Om1zJ1xuICApO1xufVxuXG5mdW5jdGlvbiBnZXRUb3VjaEJ5SWRlbnRpZmllcih0b3VjaGVzLCBpZGVudGlmaWVyKSB7XG4gIGxldCB0b3VjaDtcbiAgT2JqZWN0LmtleXModG91Y2hlcykuc29tZSgoa2V5KSA9PiB7XG4gICAgY29uc3QgdG91Y2hWYWx1ZSA9IHRvdWNoZXNba2V5XTtcbiAgICBjb25zdCBpc0ZpbmRlZCA9IHRvdWNoVmFsdWUuaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcjtcbiAgICBpZiAoaXNGaW5kZWQpIHtcbiAgICAgIHRvdWNoID0gdG91Y2hWYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGlzRmluZGVkO1xuICB9KTtcbiAgcmV0dXJuIHRvdWNoO1xufVxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8ganMvU3dpcGUuanMiLCJpbXBvcnQgVG91Y2ggZnJvbSAnLi9Ub3VjaCc7XG5pbXBvcnQgRWxlbWVudCBmcm9tICcuL0VsZW1lbnQnO1xuaW1wb3J0IFRvdWNoRWxlbWVudCBmcm9tICcuL1RvdWNoRWxlbWVudCc7XG5cbmNsYXNzIFRvdWNoRWxlbWVudExpc3Qge1xuICAvKipcbiAgICpcbiAgICogQHBhcmFtIHRvdWNoZXNcbiAgICogQHBhcmFtIHNjcm9sbFRvcFxuICAgKiBAcGFyYW0gc2Nyb2xsSGVpZ2h0XG4gICAqIEBwYXJhbSBjbGllbnRIZWlnaHRcbiAgICovXG4gIHNldFRvdWNoRWxlbWVudHModG91Y2hlcywgc2Nyb2xsVG9wLCBzY3JvbGxIZWlnaHQsIGNsaWVudEhlaWdodCkge1xuICAgIE9iamVjdC5rZXlzKHRvdWNoZXMpLm1hcCgoa2V5KSA9PiB7XG4gICAgICBjb25zdCB0b3VjaCA9IHRvdWNoZXNba2V5XTtcbiAgICAgIGNvbnN0IHsgaWRlbnRpZmllciB9ID0gdG91Y2g7XG5cbiAgICAgIGlmICh0aGlzW2lkZW50aWZpZXJdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5fc2V0VG91Y2hFbGVtZW50KHRvdWNoLCBzY3JvbGxUb3AsIHNjcm9sbEhlaWdodCwgY2xpZW50SGVpZ2h0KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHVwZGF0ZVRvdWNoRWxlbWVudHModG91Y2hlcywgc2Nyb2xsVG9wLCBzY3JvbGxIZWlnaHQsIGNsaWVudEhlaWdodCkge1xuICAgIE9iamVjdC5rZXlzKHRvdWNoZXMpLm1hcCgoa2V5KSA9PiB7XG4gICAgICBjb25zdCB0b3VjaCA9IHRvdWNoZXNba2V5XTtcbiAgICAgIGNvbnN0IHsgaWRlbnRpZmllciB9ID0gdG91Y2g7XG5cbiAgICAgIGxldCB0b3VjaEVsZW1lbnQgPSB0aGlzW2lkZW50aWZpZXJdO1xuICAgICAgaWYgKHRvdWNoRWxlbWVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuX3NldFRvdWNoRWxlbWVudCh0b3VjaCwgc2Nyb2xsVG9wLCBzY3JvbGxIZWlnaHQsIGNsaWVudEhlaWdodCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0b3VjaEVsZW1lbnQudXBkYXRlKHRvdWNoLCBzY3JvbGxUb3AsIHNjcm9sbEhlaWdodCwgY2xpZW50SGVpZ2h0KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHVwZGF0ZVRvdWNoRWxlbWVudCh0b3VjaCwgc2Nyb2xsVG9wLCBzY3JvbGxIZWlnaHQsIGNsaWVudEhlaWdodCkge1xuICAgICAgY29uc3QgeyBpZGVudGlmaWVyIH0gPSB0b3VjaDtcblxuICAgICAgbGV0IHRvdWNoRWxlbWVudCA9IHRoaXNbaWRlbnRpZmllcl07XG4gICAgICBpZiAodG91Y2hFbGVtZW50ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdG91Y2hFbGVtZW50ID0gdGhpcy5fc2V0VG91Y2hFbGVtZW50KHRvdWNoLCBzY3JvbGxUb3AsIHNjcm9sbEhlaWdodCwgY2xpZW50SGVpZ2h0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRvdWNoRWxlbWVudC51cGRhdGUodG91Y2gsIHNjcm9sbFRvcCwgc2Nyb2xsSGVpZ2h0LCBjbGllbnRIZWlnaHQpO1xuICAgICAgfVxuICAgIHJldHVybiB0b3VjaEVsZW1lbnQ7XG4gIH1cblxuICBkZWxldGVUb3VjaEVsZW1lbnRzKHRvdWNoZXMpIHtcbiAgICBPYmplY3Qua2V5cyh0b3VjaGVzKS5tYXAoKGtleSkgPT4ge1xuICAgICAgY29uc3QgdG91Y2ggPSB0b3VjaGVzW2tleV07XG4gICAgICBjb25zdCB7IGlkZW50aWZpZXIgfSA9IHRvdWNoO1xuXG4gICAgICBpZiAodGhpc1tpZGVudGlmaWVyXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzW2lkZW50aWZpZXJdO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZ2V0Rmlyc3RUb3VjaEVsZW1lbnQoKSB7XG4gICAgbGV0IHRvdWNoRWxlbWVudCA9IG51bGw7XG4gICAgT2JqZWN0LmtleXModGhpcykuc29tZShrZXkgPT4gKHRvdWNoRWxlbWVudCA9IHRoaXNba2V5XSwgdHJ1ZSkpO1xuICAgIHJldHVybiB0b3VjaEVsZW1lbnQ7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9zZXRUb3VjaEVsZW1lbnQodG91Y2gsIHNjcm9sbFRvcCwgc2Nyb2xsSGVpZ2h0LCBjbGllbnRIZWlnaHQpIHtcbiAgICBjb25zdCB7IGlkZW50aWZpZXIgfSA9IHRvdWNoO1xuICAgIGNvbnN0IHZhbHVlID0gbmV3IFRvdWNoKHRvdWNoKTtcbiAgICBjb25zdCBlbGVtZW50ID0gbmV3IEVsZW1lbnQoc2Nyb2xsVG9wLCBzY3JvbGxIZWlnaHQsIGNsaWVudEhlaWdodCk7XG4gICAgdGhpc1tpZGVudGlmaWVyXSA9IG5ldyBUb3VjaEVsZW1lbnQodmFsdWUsIGVsZW1lbnQpO1xuICAgIHJldHVybiB0aGlzW2lkZW50aWZpZXJdO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRvdWNoRWxlbWVudExpc3Q7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGpzL1RvdWNoRWxlbWVudExpc3QuanMiLCJpbXBvcnQgVG91Y2ggZnJvbSAnLi9Ub3VjaCc7XG5pbXBvcnQgRWxlbWVudCBmcm9tICcuL0VsZW1lbnQnO1xuaW1wb3J0IHsgRElSRUNUSU9OIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuXG5jbGFzcyBUb3VjaEVsZW1lbnQge1xuICAvKipcbiAgICpcbiAgICogQHBhcmFtIHRvdWNoIHtUb3VjaH1cbiAgICogQHBhcmFtIGVsZW1lbnQge0VsZW1lbnR9XG4gICAqL1xuICBjb25zdHJ1Y3Rvcih0b3VjaCwgZWxlbWVudCkge1xuICAgIHRoaXMudG91Y2ggPSB0b3VjaDtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSB0b3VjaCB7VG91Y2h9XG4gICAqIEBwYXJhbSBzY3JvbGxUb3BcbiAgICogQHBhcmFtIHNjcm9sbEhlaWdodFxuICAgKiBAcGFyYW0gY2xpZW50SGVpZ2h0XG4gICAqL1xuICB1cGRhdGUodG91Y2gsIHNjcm9sbFRvcCwgc2Nyb2xsSGVpZ2h0LCBjbGllbnRIZWlnaHQpIHtcbiAgICB0aGlzLnRvdWNoLnVwZGF0ZSh0b3VjaCk7XG4gICAgdGhpcy5lbGVtZW50LnVwZGF0ZSh7XG4gICAgICBzY3JvbGxUb3AsXG4gICAgICBzY3JvbGxIZWlnaHQsXG4gICAgICBjbGllbnRIZWlnaHRcbiAgICB9KTtcbiAgfVxuXG4gIGdldCBtb3Rpb24oKSB7XG4gICAgY29uc3QgbW92ZVRvdWNoVG9wWSA9IH5+KHRoaXMudG91Y2guY3VycmVudFkgLSB0aGlzLnRvdWNoLnN0YXJ0WSk7IC8vcm91bmRcbiAgICBjb25zdCBkaXN0YW5jZVRvcCA9IG1vdmVUb3VjaFRvcFkgLSB0aGlzLmVsZW1lbnQuc2Nyb2xsVG9wO1xuXG4gICAgY29uc3QgbW92ZVRvdWNoQm90dG9tWSA9IH5tb3ZlVG91Y2hUb3BZICsgMTsgLy9yZXZlcnNlXG4gICAgY29uc3Qgc2Nyb2xsQm90dG9tID0gdGhpcy5lbGVtZW50LnNjcm9sbEhlaWdodCAtICh0aGlzLmVsZW1lbnQuc2Nyb2xsVG9wICsgdGhpcy5lbGVtZW50LmNsaWVudEhlaWdodCk7XG4gICAgY29uc3QgZGlzdGFuY2VCb3R0b20gPSBtb3ZlVG91Y2hCb3R0b21ZIC0gc2Nyb2xsQm90dG9tO1xuXG4gICAgaWYgKGRpc3RhbmNlVG9wID4gMCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZGlzdGFuY2U6IGRpc3RhbmNlVG9wLFxuICAgICAgICBkaXJlY3Rpb246IERJUkVDVElPTi5VUCxcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGRpc3RhbmNlQm90dG9tID4gMCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZGlzdGFuY2U6IH5kaXN0YW5jZUJvdHRvbSArIDEsXG4gICAgICAgIGRpcmVjdGlvbjogRElSRUNUSU9OLkRPV04sXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGRpc3RhbmNlOiBudWxsLFxuICAgICAgICBkaXJlY3Rpb246IERJUkVDVElPTi5OT05FLFxuICAgICAgfTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVG91Y2hFbGVtZW50O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBqcy9Ub3VjaEVsZW1lbnQuanMiLCJleHBvcnQgY29uc3QgaXNQcm9taXNlID0gZnVuY3Rpb24gaXNQcm9taXNlKG9iaikge1xuICByZXR1cm4gISFvYmogJiYgKHR5cGVvZiBvYmogPT09ICdvYmplY3QnIHx8IHR5cGVvZiBvYmogPT09ICdmdW5jdGlvbicpICYmIHR5cGVvZiBvYmoudGhlbiA9PT0gJ2Z1bmN0aW9uJztcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8ganMvdXRpbHMvaXNQcm9taXNlLmpzIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0E7Ozs7Ozs7Ozs7Ozs7OztBQzdEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkE7QUFDQTs7Ozs7O0FBTUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQUdBOzs7Ozs7Ozs7Ozs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFIQTs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7Ozs7OztBQzlCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFLQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBYkE7QUFDQTtBQWNBO0FBZkE7QUFDQTtBQUNBO0FBZ0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFaQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFpQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF6QkE7QUFDQTtBQTJCQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTlDQTtBQUNBO0FBQ0E7QUErQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDNVJBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7QUFDQTs7Ozs7Ozs7QUFDQTs7Ozs7OztBQU9BO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQUlBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQUdBOzs7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUNBOzs7OztBQUtBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7Ozs7OztBQUdBOzs7Ozs7Ozs7Ozs7Ozs7QUMxREE7QUFDQTtBQUNBOzs7QSIsInNvdXJjZVJvb3QiOiIifQ==