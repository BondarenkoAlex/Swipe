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
  var elem = document.getElementById("ptr-listElement");
  var swipe = new _Swipe2.default(elem);
  swipe.addListener();
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var enfeeble = 4; //ослабление
var distance = 50; // дистанция

var startY = 0;

var Swipe = function () {
  function Swipe(elem) {
    _classCallCheck(this, Swipe);

    //debugger;
    //this.elem = document.getElementById("ptr");
    this.listElement = elem;
    this.touchElements = new _TouchElementList2.default();
    this.handleStart = this.handleStart.bind(this);
    this.handleMove = this.handleMove.bind(this);
    this.handleEnd = this.handleEnd.bind(this);
  }

  _createClass(Swipe, [{
    key: 'addListener',
    value: function addListener() {
      this.listElement.addEventListener("touchstart", this.handleStart, true);
      this.listElement.addEventListener("touchmove", this.handleMove, true);
      this.listElement.addEventListener("touchend", this.handleEnd, true);
      this.listElement.addEventListener("touchcancel", this.handleEnd, true);
    }
  }, {
    key: 'removelistener',
    value: function removelistener() {
      this.listElement.removeEventListener("touchstart", this.handleStart, true);
      this.listElement.removeEventListener("touchmove", this.handleMove, true);
      this.listElement.removeEventListener("touchend", this.handleEnd, true);
      this.listElement.removeEventListener("touchcancel", this.handleEnd, true);
    }
  }, {
    key: 'handleStart',
    value: function handleStart(evt) {
      var touches = evt.changedTouches;

      var grandpa = this.listElement.parentElement.parentElement;
      var scrollTop = grandpa.scrollTop,
          scrollHeight = grandpa.scrollHeight,
          clientHeight = grandpa.clientHeight;


      this.touchElements.setTouchElements(touches, scrollTop, scrollHeight, clientHeight);

      startY = touches[0].clientY;
    }
  }, {
    key: 'handleMove',
    value: function handleMove(evt) {
      var touches = evt.targetTouches;

      // console.log("motion", motion);
      // this.listElement.style.transform = `translateY(${touches[0].clientY-startY}px)`;
      //   evt.preventDefault();
      //   evt.stopPropagation();

      var grandpa = this.listElement.parentElement.parentElement;
      var scrollTop = grandpa.scrollTop,
          scrollHeight = grandpa.scrollHeight,
          clientHeight = grandpa.clientHeight;


      this.touchElements.updateTouchElements(touches, scrollTop, scrollHeight, clientHeight);
      var touchElement = this.touchElements.getFirstTouchElement();

      var motion = touchElement.motion;


      console.log("distance", motion);

      if (motion.direction === _constants.DIRECTION.UP) {
        evt.preventDefault();
        //evt.stopPropagation();
        this.listElement.style.transform = 'translateY(' + motion.motion + 'px)';
        //return;
      } else if (motion.direction === _constants.DIRECTION.DOWN) {
        evt.preventDefault();
        //evt.stopPropagation();
        this.listElement.style.transform = 'translateY(-' + motion.motion + 'px)';
        //return;
      } else {
        this.listElement.style.transform = '';
      }
    }
  }, {
    key: 'handleEnd',
    value: function handleEnd(evt) {
      var touches = evt.changedTouches;

      this.touchElements.deleteTouchElements(touches);

      var touchElement = this.touchElements.getFirstTouchElement();

      if (touchElement === undefined) {
        this.listElement.style.transform = '';
      } else {
        var _distance = touchElement.motion;
        // #todo переписать, удалить

        if (_distance.direction === _constants.DIRECTION.UP) {
          this.listElement.style.transform = 'translateY(' + _distance.motion + 'px)';
        } else if (_distance.direction === _constants.DIRECTION.DOWN) {
          this.listElement.style.transform = 'translateY(-' + _distance.motion + 'px)';
        } else {
          this.listElement.style.transform = '';
        }
      }
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
    }
  }, {
    key: 'getFirstTouchElement',
    value: function getFirstTouchElement() {
      var _this4 = this;

      var touchElement = void 0;
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
      this.element.update({ scrollTop: scrollTop, scrollHeight: scrollHeight, clientHeight: clientHeight });
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
          distance: distanceBottom,
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

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIGU0OWYxMDFkZDA3NzFjYTE4NWE4Iiwid2VicGFjazovLy9qcy9Ub3VjaC5qcyIsIndlYnBhY2s6Ly8vanMvRWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vanMvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy9qcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zdHlsZS9zdHlsZS5jc3M/NzJhMiIsIndlYnBhY2s6Ly8vanMvU3dpcGUuanMiLCJ3ZWJwYWNrOi8vL2pzL1RvdWNoRWxlbWVudExpc3QuanMiLCJ3ZWJwYWNrOi8vL2pzL1RvdWNoRWxlbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAzKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBlNDlmMTAxZGQwNzcxY2ExODVhOCIsImNsYXNzIFRvdWNoIHtcbiAgLy8gc3RhcnRZO1xuICAvLyBjdXJyZW50WTtcbiAgLy8gaWRlbnRpZmllcjtcblxuICBjb25zdHJ1Y3Rvcih0b3VjaCkge1xuICAgIHRoaXMuc3RhcnRZID0gdGhpcy5jdXJyZW50WSA9IHRvdWNoLmNsaWVudFk7XG4gICAgdGhpcy5pZGVudGlmaWVyID0gdG91Y2guaWRlbnRpZmllcjtcbiAgfVxuXG4gIHVwZGF0ZSh0b3VjaCl7XG4gICAgdGhpcy5jdXJyZW50WSA9IHRvdWNoLmNsaWVudFk7XG4gIH1cblxuICAvLyByZXNldCgpIHtcbiAgLy8gICB0aGlzLnN0YXJ0WSA9IDA7XG4gIC8vICAgdGhpcy5jdXJyZW50WSA9IDA7XG4gIC8vICAgdGhpcy5pZGVudGlmaWVyID0gbnVsbDtcbiAgLy8gfVxufVxuZXhwb3J0IGRlZmF1bHQgVG91Y2g7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGpzL1RvdWNoLmpzIiwiY2xhc3MgRWxlbWVudCB7XG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0gc2Nyb2xsVG9wIHtOdW1iZXJ9XG4gICAqIEBwYXJhbSBzY3JvbGxIZWlnaHQge051bWJlcn1cbiAgICogQHBhcmFtIGNsaWVudEhlaWdodCB7TnVtYmVyfVxuICAgKi9cbiAgY29uc3RydWN0b3Ioc2Nyb2xsVG9wLCBzY3JvbGxIZWlnaHQsIGNsaWVudEhlaWdodCkge1xuICAgIHRoaXMuc2Nyb2xsVG9wID0gc2Nyb2xsVG9wO1xuICAgIHRoaXMuc2Nyb2xsSGVpZ2h0ID0gc2Nyb2xsSGVpZ2h0O1xuICAgIHRoaXMuY2xpZW50SGVpZ2h0ID0gY2xpZW50SGVpZ2h0O1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSBlbGVtZW50IHtFbGVtZW50fVxuICAgKi9cbiAgdXBkYXRlKGVsZW1lbnQpIHtcbiAgICB0aGlzLnNjcm9sbFRvcCA9IGVsZW1lbnQuc2Nyb2xsVG9wO1xuICAgIHRoaXMuc2Nyb2xsSGVpZ2h0ID0gZWxlbWVudC5zY3JvbGxIZWlnaHQ7XG4gICAgdGhpcy5jbGllbnRIZWlnaHQgPSBlbGVtZW50LmNsaWVudEhlaWdodDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFbGVtZW50O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGpzL0VsZW1lbnQuanMiLCJleHBvcnQgY29uc3QgRElSRUNUSU9OID0ge1xuICBVUDogJ1VQJyxcbiAgRE9XTjogJ0RPV04nLFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBqcy9jb25zdGFudHMuanMiLCJpbXBvcnQgJy4uL3N0eWxlL3N0eWxlLmNzcyc7XG5pbXBvcnQgU3dpcGUgZnJvbSAnLi9Td2lwZSc7XG5cbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gIHN0YXJ0dXAoKTtcbn07XG5cbi8vbGV0IHN3aXBlID0gbmV3IFN3aXBlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHRyXCIpKTtcblxuZnVuY3Rpb24gc3RhcnR1cCgpIHtcbiAgY29uc3QgZWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHRyLWxpc3RcIik7XG4gIGNvbnN0IHN3aXBlID0gbmV3IFN3aXBlKGVsZW0pO1xuICBzd2lwZS5hZGRMaXN0ZW5lcigpO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGpzL2luZGV4LmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3N0eWxlL3N0eWxlLmNzc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgVG91Y2hFbGVtZW50TGlzdCBmcm9tICcuL1RvdWNoRWxlbWVudExpc3QnO1xuaW1wb3J0IHsgRElSRUNUSU9OIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuXG5jb25zdCBlbmZlZWJsZSA9IDQ7IC8v0L7RgdC70LDQsdC70LXQvdC40LVcbmNvbnN0IGRpc3RhbmNlID0gNTA7IC8vINC00LjRgdGC0LDQvdGG0LjRj1xuXG5sZXQgc3RhcnRZID0gMDtcblxuY2xhc3MgU3dpcGUge1xuXG4gIGNvbnN0cnVjdG9yKGVsZW0pIHtcbiAgICAvL2RlYnVnZ2VyO1xuICAgIC8vdGhpcy5lbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwdHJcIik7XG4gICAgdGhpcy5wdHJMaXN0ID0gZWxlbTtcbiAgICB0aGlzLnRvdWNoRWxlbWVudExpc3QgPSBuZXcgVG91Y2hFbGVtZW50TGlzdCgpO1xuICAgIHRoaXMuaGFuZGxlU3RhcnQgPSB0aGlzLmhhbmRsZVN0YXJ0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVNb3ZlID0gdGhpcy5oYW5kbGVNb3ZlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVFbmQgPSB0aGlzLmhhbmRsZUVuZC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgYWRkTGlzdGVuZXIoKSB7XG4gICAgdGhpcy5wdHJMaXN0LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIHRoaXMuaGFuZGxlU3RhcnQsIHRydWUgKTtcbiAgICB0aGlzLnB0ckxpc3QuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLCB0aGlzLmhhbmRsZU1vdmUsIHRydWUgKTtcbiAgICB0aGlzLnB0ckxpc3QuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsIHRoaXMuaGFuZGxlRW5kLCB0cnVlICk7XG4gICAgdGhpcy5wdHJMaXN0LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGNhbmNlbFwiLCB0aGlzLmhhbmRsZUVuZCwgdHJ1ZSApO1xuICB9XG5cbiAgcmVtb3ZlbGlzdGVuZXIoKSB7XG4gICAgdGhpcy5wdHJMaXN0LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIHRoaXMuaGFuZGxlU3RhcnQsIHRydWUgKTtcbiAgICB0aGlzLnB0ckxpc3QucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLCB0aGlzLmhhbmRsZU1vdmUsIHRydWUgKTtcbiAgICB0aGlzLnB0ckxpc3QucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsIHRoaXMuaGFuZGxlRW5kLCB0cnVlICk7XG4gICAgdGhpcy5wdHJMaXN0LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaGNhbmNlbFwiLCB0aGlzLmhhbmRsZUVuZCwgdHJ1ZSApO1xuICB9XG5cbiAgaGFuZGxlU3RhcnQoZXZ0KSB7XG4gICAgY29uc3QgdG91Y2hlcyA9IGV2dC5jaGFuZ2VkVG91Y2hlcztcblxuICAgIGNvbnN0IGdyYW5kcGEgPSB0aGlzLnB0ckxpc3QucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICAgIGNvbnN0IHtcbiAgICAgICAgICAgIHNjcm9sbFRvcCxcbiAgICAgICAgICAgIHNjcm9sbEhlaWdodCxcbiAgICAgICAgICAgIGNsaWVudEhlaWdodCxcbiAgICAgICAgICB9ID0gZ3JhbmRwYTtcblxuICAgIHRoaXMudG91Y2hFbGVtZW50TGlzdC5zZXRUb3VjaEVsZW1lbnRzKHRvdWNoZXMsIHNjcm9sbFRvcCwgc2Nyb2xsSGVpZ2h0LCBjbGllbnRIZWlnaHQpO1xuXG4gICAgc3RhcnRZID0gdG91Y2hlc1swXS5jbGllbnRZO1xuICB9XG5cbiAgaGFuZGxlTW92ZShldnQpIHtcbiAgICBjb25zdCB0b3VjaGVzID0gZXZ0LnRhcmdldFRvdWNoZXM7XG5cbiAgICAvLyBjb25zb2xlLmxvZyhcImRpc3RhbmNlXCIsIGRpc3RhbmNlKTtcbiAgICAvLyB0aGlzLnB0ckxpc3Quc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVkoJHt0b3VjaGVzWzBdLmNsaWVudFktc3RhcnRZfXB4KWA7XG4gICAgLy8gICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAvLyAgIGV2dC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgIGNvbnN0IGdyYW5kcGEgPSB0aGlzLnB0ckxpc3QucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICAgIGNvbnN0IHtcbiAgICAgICAgICAgIHNjcm9sbFRvcCxcbiAgICAgICAgICAgIHNjcm9sbEhlaWdodCxcbiAgICAgICAgICAgIGNsaWVudEhlaWdodCxcbiAgICAgICAgICB9ID0gZ3JhbmRwYTtcblxuICAgIHRoaXMudG91Y2hFbGVtZW50TGlzdC51cGRhdGVUb3VjaEVsZW1lbnRzKHRvdWNoZXMsIHNjcm9sbFRvcCwgc2Nyb2xsSGVpZ2h0LCBjbGllbnRIZWlnaHQpO1xuICAgIGNvbnN0IHRvdWNoRWxlbWVudCA9IHRoaXMudG91Y2hFbGVtZW50TGlzdC5nZXRGaXJzdFRvdWNoRWxlbWVudCgpO1xuXG4gICAgY29uc3QgeyBkaXN0YW5jZSB9ID0gdG91Y2hFbGVtZW50O1xuXG4gICAgY29uc29sZS5sb2coXCJkaXN0YW5jZVwiLCBkaXN0YW5jZSk7XG5cbiAgICBpZiAoZGlzdGFuY2UuZGlyZWN0aW9uID09PSBESVJFQ1RJT04uVVApIHtcbiAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgLy9ldnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB0aGlzLnB0ckxpc3Quc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVkoJHtkaXN0YW5jZS5kaXN0YW5jZX1weClgO1xuICAgICAgLy9yZXR1cm47XG4gICAgfSBlbHNlIGlmIChkaXN0YW5jZS5kaXJlY3Rpb24gPT09IERJUkVDVElPTi5ET1dOKSB7XG4gICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIC8vZXZ0LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgdGhpcy5wdHJMaXN0LnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVZKC0ke2Rpc3RhbmNlLmRpc3RhbmNlfXB4KWA7XG4gICAgICAvL3JldHVybjtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5wdHJMaXN0LnN0eWxlLnRyYW5zZm9ybSA9ICcnO1xuICAgIH1cblxuICB9XG5cbiAgaGFuZGxlRW5kKGV2dCkge1xuICAgIGNvbnN0IHRvdWNoZXMgPSBldnQuY2hhbmdlZFRvdWNoZXM7XG5cbiAgICB0aGlzLnRvdWNoRWxlbWVudExpc3QuZGVsZXRlVG91Y2hFbGVtZW50cyh0b3VjaGVzKTtcblxuICAgIGNvbnN0IHRvdWNoRWxlbWVudCA9IHRoaXMudG91Y2hFbGVtZW50TGlzdC5nZXRGaXJzdFRvdWNoRWxlbWVudCgpO1xuXG4gICAgaWYgKHRvdWNoRWxlbWVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLnB0ckxpc3Quc3R5bGUudHJhbnNmb3JtID0gJyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHsgZGlzdGFuY2UgfSA9IHRvdWNoRWxlbWVudDtcbiAgICAgIC8vICN0b2RvINC/0LXRgNC10L/QuNGB0LDRgtGMLCDRg9C00LDQu9C40YLRjFxuICAgICAgaWYgKGRpc3RhbmNlLmRpcmVjdGlvbiA9PT0gRElSRUNUSU9OLlVQKSB7XG4gICAgICAgIHRoaXMucHRyTGlzdC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWSgke2Rpc3RhbmNlLmRpc3RhbmNlfXB4KWA7XG4gICAgICB9IGVsc2UgaWYgKGRpc3RhbmNlLmRpcmVjdGlvbiA9PT0gRElSRUNUSU9OLkRPV04pIHtcbiAgICAgICAgdGhpcy5wdHJMaXN0LnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVZKC0ke2Rpc3RhbmNlLmRpc3RhbmNlfXB4KWA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnB0ckxpc3Quc3R5bGUudHJhbnNmb3JtID0gJyc7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3dpcGU7XG5cblxuXG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBqcy9Td2lwZS5qcyIsImltcG9ydCBUb3VjaCBmcm9tICcuL1RvdWNoJztcbmltcG9ydCBFbGVtZW50IGZyb20gJy4vRWxlbWVudCc7XG5pbXBvcnQgVG91Y2hFbGVtZW50IGZyb20gJy4vVG91Y2hFbGVtZW50JztcblxuY2xhc3MgVG91Y2hFbGVtZW50TGlzdCB7XG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0gdG91Y2hlc1xuICAgKiBAcGFyYW0gc2Nyb2xsVG9wXG4gICAqIEBwYXJhbSBzY3JvbGxIZWlnaHRcbiAgICogQHBhcmFtIGNsaWVudEhlaWdodFxuICAgKi9cbiAgc2V0VG91Y2hFbGVtZW50cyh0b3VjaGVzLCBzY3JvbGxUb3AsIHNjcm9sbEhlaWdodCwgY2xpZW50SGVpZ2h0KSB7XG4gICAgT2JqZWN0LmtleXModG91Y2hlcykubWFwKChrZXkpID0+IHtcbiAgICAgIGNvbnN0IHRvdWNoID0gdG91Y2hlc1trZXldO1xuICAgICAgY29uc3QgeyBpZGVudGlmaWVyIH0gPSB0b3VjaDtcblxuICAgICAgaWYgKHRoaXNbaWRlbnRpZmllcl0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLl9zZXRUb3VjaEVsZW1lbnQodG91Y2gsIHNjcm9sbFRvcCwgc2Nyb2xsSGVpZ2h0LCBjbGllbnRIZWlnaHQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgdXBkYXRlVG91Y2hFbGVtZW50cyh0b3VjaGVzLCBzY3JvbGxUb3AsIHNjcm9sbEhlaWdodCwgY2xpZW50SGVpZ2h0KSB7XG4gICAgT2JqZWN0LmtleXModG91Y2hlcykubWFwKChrZXkpID0+IHtcbiAgICAgIGNvbnN0IHRvdWNoID0gdG91Y2hlc1trZXldO1xuICAgICAgY29uc3QgeyBpZGVudGlmaWVyIH0gPSB0b3VjaDtcblxuICAgICAgbGV0IHRvdWNoRWxlbWVudCA9IHRoaXNbaWRlbnRpZmllcl07XG4gICAgICBpZiAodG91Y2hFbGVtZW50ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5fc2V0VG91Y2hFbGVtZW50KHRvdWNoLCBzY3JvbGxUb3AsIHNjcm9sbEhlaWdodCwgY2xpZW50SGVpZ2h0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRvdWNoRWxlbWVudC51cGRhdGUodG91Y2gsIHNjcm9sbFRvcCwgc2Nyb2xsSGVpZ2h0LCBjbGllbnRIZWlnaHQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZGVsZXRlVG91Y2hFbGVtZW50cyh0b3VjaGVzKSB7XG4gICAgT2JqZWN0LmtleXModG91Y2hlcykubWFwKChrZXkpID0+IHtcbiAgICAgIGNvbnN0IHRvdWNoID0gdG91Y2hlc1trZXldO1xuICAgICAgY29uc3QgeyBpZGVudGlmaWVyIH0gPSB0b3VjaDtcblxuICAgICAgaWYgKHRoaXNbaWRlbnRpZmllcl0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBkZWxldGUgdGhpc1tpZGVudGlmaWVyXTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGdldEZpcnN0VG91Y2hFbGVtZW50KCkge1xuICAgIGxldCB0b3VjaEVsZW1lbnQ7XG4gICAgT2JqZWN0LmtleXModGhpcykuc29tZShrZXkgPT4gKHRvdWNoRWxlbWVudCA9IHRoaXNba2V5XSwgdHJ1ZSkpO1xuICAgIHJldHVybiB0b3VjaEVsZW1lbnQ7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9zZXRUb3VjaEVsZW1lbnQodG91Y2gsIHNjcm9sbFRvcCwgc2Nyb2xsSGVpZ2h0LCBjbGllbnRIZWlnaHQpIHtcbiAgICBjb25zdCB7IGlkZW50aWZpZXIgfSA9IHRvdWNoO1xuICAgIGNvbnN0IHZhbHVlID0gbmV3IFRvdWNoKHRvdWNoKTtcbiAgICBjb25zdCBlbGVtZW50ID0gbmV3IEVsZW1lbnQoc2Nyb2xsVG9wLCBzY3JvbGxIZWlnaHQsIGNsaWVudEhlaWdodCk7XG4gICAgdGhpc1tpZGVudGlmaWVyXSA9IG5ldyBUb3VjaEVsZW1lbnQodmFsdWUsIGVsZW1lbnQpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRvdWNoRWxlbWVudExpc3Q7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGpzL1RvdWNoRWxlbWVudExpc3QuanMiLCJpbXBvcnQgVG91Y2ggZnJvbSAnLi9Ub3VjaCc7XG5pbXBvcnQgRWxlbWVudCBmcm9tICcuL0VsZW1lbnQnO1xuaW1wb3J0IHsgRElSRUNUSU9OIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuXG5jbGFzcyBUb3VjaEVsZW1lbnQge1xuICAvKipcbiAgICpcbiAgICogQHBhcmFtIHRvdWNoIHtUb3VjaH1cbiAgICogQHBhcmFtIGVsZW1lbnQge0VsZW1lbnR9XG4gICAqL1xuICBjb25zdHJ1Y3Rvcih0b3VjaCwgZWxlbWVudCkge1xuICAgIHRoaXMudG91Y2ggPSB0b3VjaDtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSB0b3VjaCB7VG91Y2h9XG4gICAqIEBwYXJhbSBzY3JvbGxUb3BcbiAgICogQHBhcmFtIHNjcm9sbEhlaWdodFxuICAgKiBAcGFyYW0gY2xpZW50SGVpZ2h0XG4gICAqL1xuICB1cGRhdGUodG91Y2gsIHNjcm9sbFRvcCwgc2Nyb2xsSGVpZ2h0LCBjbGllbnRIZWlnaHQpIHtcbiAgICB0aGlzLnRvdWNoLnVwZGF0ZSh0b3VjaCk7XG4gICAgdGhpcy5lbGVtZW50LnVwZGF0ZSh7c2Nyb2xsVG9wLCBzY3JvbGxIZWlnaHQsIGNsaWVudEhlaWdodH0pO1xuICB9XG5cbiAgZ2V0IGRpc3RhbmNlKCkge1xuICAgIGNvbnN0IG1vdmVUb3VjaFRvcFkgPSB+fih0aGlzLnRvdWNoLmN1cnJlbnRZIC0gdGhpcy50b3VjaC5zdGFydFkpOyAvL3JvdW5kXG4gICAgY29uc3QgZGlzdGFuY2VUb3AgPSBtb3ZlVG91Y2hUb3BZIC0gdGhpcy5lbGVtZW50LnNjcm9sbFRvcDtcblxuICAgIGNvbnN0IG1vdmVUb3VjaEJvdHRvbVkgPSB+bW92ZVRvdWNoVG9wWSArIDE7IC8vcmV2ZXJzZVxuICAgIGNvbnN0IHNjcm9sbEJvdHRvbSA9IHRoaXMuZWxlbWVudC5zY3JvbGxIZWlnaHQgLSAodGhpcy5lbGVtZW50LnNjcm9sbFRvcCArIHRoaXMuZWxlbWVudC5jbGllbnRIZWlnaHQpO1xuICAgIGNvbnN0IGRpc3RhbmNlQm90dG9tID0gbW92ZVRvdWNoQm90dG9tWSAtIHNjcm9sbEJvdHRvbTtcblxuICAgIGlmIChkaXN0YW5jZVRvcCA+IDApIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGRpc3RhbmNlOiBkaXN0YW5jZVRvcCxcbiAgICAgICAgZGlyZWN0aW9uOiBESVJFQ1RJT04uVVAsXG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChkaXN0YW5jZUJvdHRvbSA+IDApIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGRpc3RhbmNlOiBkaXN0YW5jZUJvdHRvbSxcbiAgICAgICAgZGlyZWN0aW9uOiBESVJFQ1RJT04uRE9XTixcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZGlzdGFuY2U6IG51bGwsXG4gICAgICAgIGRpcmVjdGlvbjogbnVsbCxcbiAgICAgIH07XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRvdWNoRWxlbWVudDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8ganMvVG91Y2hFbGVtZW50LmpzIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0E7Ozs7Ozs7Ozs7Ozs7OztBQzdEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkE7QUFDQTs7Ozs7O0FBTUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQUdBOzs7Ozs7Ozs7Ozs7QUN4QkE7QUFDQTtBQUNBO0FBRkE7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFBQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ2JBOzs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBOzs7QUFBQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBYUE7QUFDQTtBQUNBO0FBakJBO0FBQ0E7QUFDQTtBQWtCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQUlBOzs7Ozs7Ozs7Ozs7Ozs7QUMvR0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7OztBQUNBOzs7Ozs7OztBQUNBOzs7Ozs7O0FBT0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQUlBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFHQTs7Ozs7Ozs7Ozs7Ozs7O0FDbEVBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTs7Ozs7O0FBR0E7OztBIiwic291cmNlUm9vdCI6IiJ9