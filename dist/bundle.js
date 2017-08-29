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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Swipe = __webpack_require__(1);

var _Swipe2 = _interopRequireDefault(_Swipe);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.onload = function () {
  startup();
};

//let swipe = new Swipe(document.getElementById("ptr"));

//import Swipe from './Swipe';
function startup() {
  var swipe = new _Swipe2.default();
  swipe.listener();
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _TouchElementList = __webpack_require__(2);

var _TouchElementList2 = _interopRequireDefault(_TouchElementList);

var _constants = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var enfeeble = 4; //ослабление
var distance = 50; // дистанция

var Swipe = function () {
  function Swipe(elem) {
    _classCallCheck(this, Swipe);

    //debugger;
    //this.elem = document.getElementById("ptr");
    this.ptrList = document.getElementById("ptr-list");
    this.touchElementList = new _TouchElementList2.default();
    this.handleStart = this.handleStart.bind(this);
    this.handleMove = this.handleMove.bind(this);
    this.handleEnd = this.handleEnd.bind(this);
  }

  _createClass(Swipe, [{
    key: 'listener',
    value: function listener() {
      this.ptrList.addEventListener("touchstart", this.handleStart, false);
      this.ptrList.addEventListener("touchmove", this.handleMove, false);
      this.ptrList.addEventListener("touchend", this.handleEnd, false);
      this.ptrList.addEventListener("touchcancel", this.handleEnd, false);
    }
  }, {
    key: 'handleStart',
    value: function handleStart(evt) {
      var touches = evt.changedTouches;

      var parent = this.ptrList.parentElement;
      var scrollTop = parent.scrollTop,
          scrollHeight = parent.scrollHeight,
          clientHeight = parent.clientHeight;


      this.touchElementList.setTouchElements(touches, scrollTop, scrollHeight, clientHeight);
    }
  }, {
    key: 'handleMove',
    value: function handleMove(evt) {
      var touches = evt.targetTouches;

      var parent = this.ptrList.parentElement;
      var scrollTop = parent.scrollTop,
          scrollHeight = parent.scrollHeight,
          clientHeight = parent.clientHeight;


      this.touchElementList.updateTouchElements(touches, scrollTop, scrollHeight, clientHeight);
      var touchElement = this.touchElementList.getFirstTouchElement();

      var distance = touchElement.distance;


      if (distance.direction === _constants.DIRECTION.UP) {
        this.ptrList.style.transform = 'translateY(' + distance.distance + 'px)';
      } else if (distance.direction === _constants.DIRECTION.DOWN) {
        this.ptrList.style.transform = 'translateY(-' + distance.distance + 'px)';
      } else {
        this.ptrList.style.transform = '';
      }
    }
  }, {
    key: 'handleEnd',
    value: function handleEnd(evt) {
      var touches = evt.changedTouches;

      this.touchElementList.deleteTouchElements(touches);

      var touchElement = this.touchElementList.getFirstTouchElement();

      if (touchElement === undefined) {
        this.ptrList.style.transform = '';
      } else {
        var _distance = touchElement.distance;
        // #todo переписать, удалить

        if (_distance.direction === _constants.DIRECTION.UP) {
          this.ptrList.style.transform = 'translateY(' + _distance.distance + 'px)';
        } else if (_distance.direction === _constants.DIRECTION.DOWN) {
          this.ptrList.style.transform = 'translateY(-' + _distance.distance + 'px)';
        } else {
          this.ptrList.style.transform = '';
        }
      }
    }
  }]);

  return Swipe;
}();

exports.default = Swipe;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Touch = __webpack_require__(3);

var _Touch2 = _interopRequireDefault(_Touch);

var _Element = __webpack_require__(4);

var _Element2 = _interopRequireDefault(_Element);

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
      var value = new _Touch2.default(touch);
      var element = new _Element2.default(scrollTop, scrollHeight, clientHeight);
      this[identifier] = new TouchElement(value, element);
    }
  }]);

  return TouchElementList;
}();

exports.default = TouchElementList;

/***/ }),
/* 3 */
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
/* 4 */
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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var DIRECTION = exports.DIRECTION = {
  UP: 'UP',
  DOWN: 'DOWN'
};

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIDZjZGVlYjlhMjE3YmVhYzhmOGM1Iiwid2VicGFjazovLy9qcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vanMvU3dpcGUuanMiLCJ3ZWJwYWNrOi8vL2pzL1RvdWNoRWxlbWVudExpc3QuanMiLCJ3ZWJwYWNrOi8vL2pzL1RvdWNoLmpzIiwid2VicGFjazovLy9qcy9FbGVtZW50LmpzIiwid2VicGFjazovLy9qcy9jb25zdGFudHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNmNkZWViOWEyMTdiZWFjOGY4YzUiLCIvL2ltcG9ydCBTd2lwZSBmcm9tICcuL1N3aXBlJztcbmltcG9ydCBTd2lwZTMgZnJvbSAnLi9Td2lwZSc7XG5cbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gIHN0YXJ0dXAoKTtcbn07XG5cbi8vbGV0IHN3aXBlID0gbmV3IFN3aXBlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHRyXCIpKTtcblxuZnVuY3Rpb24gc3RhcnR1cCgpIHtcbiAgbGV0IHN3aXBlID0gbmV3IFN3aXBlMygpO1xuICBzd2lwZS5saXN0ZW5lcigpO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGpzL2luZGV4LmpzIiwiaW1wb3J0IFRvdWNoRWxlbWVudExpc3QgZnJvbSAnLi9Ub3VjaEVsZW1lbnRMaXN0JztcbmltcG9ydCB7IERJUkVDVElPTiB9IGZyb20gJy4vY29uc3RhbnRzJztcblxuY29uc3QgZW5mZWVibGUgPSA0OyAvL9C+0YHQu9Cw0LHQu9C10L3QuNC1XG5jb25zdCBkaXN0YW5jZSA9IDUwOyAvLyDQtNC40YHRgtCw0L3RhtC40Y9cblxuY2xhc3MgU3dpcGUge1xuXG4gIGNvbnN0cnVjdG9yKGVsZW0pIHtcbiAgICAvL2RlYnVnZ2VyO1xuICAgIC8vdGhpcy5lbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwdHJcIik7XG4gICAgdGhpcy5wdHJMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwdHItbGlzdFwiKTtcbiAgICB0aGlzLnRvdWNoRWxlbWVudExpc3QgPSBuZXcgVG91Y2hFbGVtZW50TGlzdCgpO1xuICAgIHRoaXMuaGFuZGxlU3RhcnQgPSB0aGlzLmhhbmRsZVN0YXJ0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVNb3ZlID0gdGhpcy5oYW5kbGVNb3ZlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVFbmQgPSB0aGlzLmhhbmRsZUVuZC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgbGlzdGVuZXIoKSB7XG4gICAgdGhpcy5wdHJMaXN0LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIHRoaXMuaGFuZGxlU3RhcnQsIGZhbHNlKTtcbiAgICB0aGlzLnB0ckxpc3QuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLCB0aGlzLmhhbmRsZU1vdmUsIGZhbHNlKTtcbiAgICB0aGlzLnB0ckxpc3QuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsIHRoaXMuaGFuZGxlRW5kLCBmYWxzZSk7XG4gICAgdGhpcy5wdHJMaXN0LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGNhbmNlbFwiLCB0aGlzLmhhbmRsZUVuZCwgZmFsc2UpO1xuICB9XG5cbiAgaGFuZGxlU3RhcnQoZXZ0KSB7XG4gICAgY29uc3QgdG91Y2hlcyA9IGV2dC5jaGFuZ2VkVG91Y2hlcztcblxuICAgIGNvbnN0IHBhcmVudCA9IHRoaXMucHRyTGlzdC5wYXJlbnRFbGVtZW50O1xuICAgIGNvbnN0IHtcbiAgICAgICAgICAgIHNjcm9sbFRvcCxcbiAgICAgICAgICAgIHNjcm9sbEhlaWdodCxcbiAgICAgICAgICAgIGNsaWVudEhlaWdodCxcbiAgICAgICAgICB9ID0gcGFyZW50O1xuXG4gICAgdGhpcy50b3VjaEVsZW1lbnRMaXN0LnNldFRvdWNoRWxlbWVudHModG91Y2hlcywgc2Nyb2xsVG9wLCBzY3JvbGxIZWlnaHQsIGNsaWVudEhlaWdodCk7XG4gIH1cblxuICBoYW5kbGVNb3ZlKGV2dCkge1xuICAgIGNvbnN0IHRvdWNoZXMgPSBldnQudGFyZ2V0VG91Y2hlcztcblxuICAgIGNvbnN0IHBhcmVudCA9IHRoaXMucHRyTGlzdC5wYXJlbnRFbGVtZW50O1xuICAgIGNvbnN0IHtcbiAgICAgICAgICAgIHNjcm9sbFRvcCxcbiAgICAgICAgICAgIHNjcm9sbEhlaWdodCxcbiAgICAgICAgICAgIGNsaWVudEhlaWdodCxcbiAgICAgICAgICB9ID0gcGFyZW50O1xuXG4gICAgdGhpcy50b3VjaEVsZW1lbnRMaXN0LnVwZGF0ZVRvdWNoRWxlbWVudHModG91Y2hlcywgc2Nyb2xsVG9wLCBzY3JvbGxIZWlnaHQsIGNsaWVudEhlaWdodCk7XG4gICAgY29uc3QgdG91Y2hFbGVtZW50ID0gdGhpcy50b3VjaEVsZW1lbnRMaXN0LmdldEZpcnN0VG91Y2hFbGVtZW50KCk7XG5cbiAgICBjb25zdCB7IGRpc3RhbmNlIH0gPSB0b3VjaEVsZW1lbnQ7XG5cbiAgICBpZiAoZGlzdGFuY2UuZGlyZWN0aW9uID09PSBESVJFQ1RJT04uVVApIHtcbiAgICAgIHRoaXMucHRyTGlzdC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWSgke2Rpc3RhbmNlLmRpc3RhbmNlfXB4KWA7XG4gICAgfSBlbHNlIGlmIChkaXN0YW5jZS5kaXJlY3Rpb24gPT09IERJUkVDVElPTi5ET1dOKSB7XG4gICAgICB0aGlzLnB0ckxpc3Quc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVkoLSR7ZGlzdGFuY2UuZGlzdGFuY2V9cHgpYDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5wdHJMaXN0LnN0eWxlLnRyYW5zZm9ybSA9ICcnO1xuICAgIH1cblxuICB9XG5cbiAgaGFuZGxlRW5kKGV2dCkge1xuICAgIGNvbnN0IHRvdWNoZXMgPSBldnQuY2hhbmdlZFRvdWNoZXM7XG5cbiAgICB0aGlzLnRvdWNoRWxlbWVudExpc3QuZGVsZXRlVG91Y2hFbGVtZW50cyh0b3VjaGVzKTtcblxuICAgIGNvbnN0IHRvdWNoRWxlbWVudCA9IHRoaXMudG91Y2hFbGVtZW50TGlzdC5nZXRGaXJzdFRvdWNoRWxlbWVudCgpO1xuXG4gICAgaWYgKHRvdWNoRWxlbWVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLnB0ckxpc3Quc3R5bGUudHJhbnNmb3JtID0gJyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHsgZGlzdGFuY2UgfSA9IHRvdWNoRWxlbWVudDtcbiAgICAgIC8vICN0b2RvINC/0LXRgNC10L/QuNGB0LDRgtGMLCDRg9C00LDQu9C40YLRjFxuICAgICAgaWYgKGRpc3RhbmNlLmRpcmVjdGlvbiA9PT0gRElSRUNUSU9OLlVQKSB7XG4gICAgICAgIHRoaXMucHRyTGlzdC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWSgke2Rpc3RhbmNlLmRpc3RhbmNlfXB4KWA7XG4gICAgICB9IGVsc2UgaWYgKGRpc3RhbmNlLmRpcmVjdGlvbiA9PT0gRElSRUNUSU9OLkRPV04pIHtcbiAgICAgICAgdGhpcy5wdHJMaXN0LnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVZKC0ke2Rpc3RhbmNlLmRpc3RhbmNlfXB4KWA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnB0ckxpc3Quc3R5bGUudHJhbnNmb3JtID0gJyc7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3dpcGU7XG5cblxuXG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBqcy9Td2lwZS5qcyIsImltcG9ydCBUb3VjaCBmcm9tICcuL1RvdWNoJztcbmltcG9ydCBFbGVtZW50IGZyb20gJy4vRWxlbWVudCc7XG5cbmNsYXNzIFRvdWNoRWxlbWVudExpc3Qge1xuICAvKipcbiAgICpcbiAgICogQHBhcmFtIHRvdWNoZXNcbiAgICogQHBhcmFtIHNjcm9sbFRvcFxuICAgKiBAcGFyYW0gc2Nyb2xsSGVpZ2h0XG4gICAqIEBwYXJhbSBjbGllbnRIZWlnaHRcbiAgICovXG4gIHNldFRvdWNoRWxlbWVudHModG91Y2hlcywgc2Nyb2xsVG9wLCBzY3JvbGxIZWlnaHQsIGNsaWVudEhlaWdodCkge1xuICAgIE9iamVjdC5rZXlzKHRvdWNoZXMpLm1hcCgoa2V5KSA9PiB7XG4gICAgICBjb25zdCB0b3VjaCA9IHRvdWNoZXNba2V5XTtcbiAgICAgIGNvbnN0IHsgaWRlbnRpZmllciB9ID0gdG91Y2g7XG5cbiAgICAgIGlmICh0aGlzW2lkZW50aWZpZXJdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5fc2V0VG91Y2hFbGVtZW50KHRvdWNoLCBzY3JvbGxUb3AsIHNjcm9sbEhlaWdodCwgY2xpZW50SGVpZ2h0KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHVwZGF0ZVRvdWNoRWxlbWVudHModG91Y2hlcywgc2Nyb2xsVG9wLCBzY3JvbGxIZWlnaHQsIGNsaWVudEhlaWdodCkge1xuICAgIE9iamVjdC5rZXlzKHRvdWNoZXMpLm1hcCgoa2V5KSA9PiB7XG4gICAgICBjb25zdCB0b3VjaCA9IHRvdWNoZXNba2V5XTtcbiAgICAgIGNvbnN0IHsgaWRlbnRpZmllciB9ID0gdG91Y2g7XG5cbiAgICAgIGxldCB0b3VjaEVsZW1lbnQgPSB0aGlzW2lkZW50aWZpZXJdO1xuICAgICAgaWYgKHRvdWNoRWxlbWVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuX3NldFRvdWNoRWxlbWVudCh0b3VjaCwgc2Nyb2xsVG9wLCBzY3JvbGxIZWlnaHQsIGNsaWVudEhlaWdodCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0b3VjaEVsZW1lbnQudXBkYXRlKHRvdWNoLCBzY3JvbGxUb3AsIHNjcm9sbEhlaWdodCwgY2xpZW50SGVpZ2h0KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGRlbGV0ZVRvdWNoRWxlbWVudHModG91Y2hlcykge1xuICAgIE9iamVjdC5rZXlzKHRvdWNoZXMpLm1hcCgoa2V5KSA9PiB7XG4gICAgICBjb25zdCB0b3VjaCA9IHRvdWNoZXNba2V5XTtcbiAgICAgIGNvbnN0IHsgaWRlbnRpZmllciB9ID0gdG91Y2g7XG5cbiAgICAgIGlmICh0aGlzW2lkZW50aWZpZXJdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgZGVsZXRlIHRoaXNbaWRlbnRpZmllcl07XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBnZXRGaXJzdFRvdWNoRWxlbWVudCgpe1xuICAgIGxldCB0b3VjaEVsZW1lbnQ7XG4gICAgT2JqZWN0LmtleXModGhpcykuc29tZShrZXk9Pih0b3VjaEVsZW1lbnQgPSB0aGlzW2tleV0sIHRydWUpKTtcbiAgICByZXR1cm4gdG91Y2hFbGVtZW50O1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfc2V0VG91Y2hFbGVtZW50KHRvdWNoLCBzY3JvbGxUb3AsIHNjcm9sbEhlaWdodCwgY2xpZW50SGVpZ2h0KSB7XG4gICAgY29uc3QgdmFsdWUgPSBuZXcgVG91Y2godG91Y2gpO1xuICAgIGNvbnN0IGVsZW1lbnQgPSBuZXcgRWxlbWVudChzY3JvbGxUb3AsIHNjcm9sbEhlaWdodCwgY2xpZW50SGVpZ2h0KTtcbiAgICB0aGlzW2lkZW50aWZpZXJdID0gbmV3IFRvdWNoRWxlbWVudCh2YWx1ZSwgZWxlbWVudCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVG91Y2hFbGVtZW50TGlzdDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8ganMvVG91Y2hFbGVtZW50TGlzdC5qcyIsImNsYXNzIFRvdWNoIHtcbiAgLy8gc3RhcnRZO1xuICAvLyBjdXJyZW50WTtcbiAgLy8gaWRlbnRpZmllcjtcblxuICBjb25zdHJ1Y3Rvcih0b3VjaCkge1xuICAgIHRoaXMuc3RhcnRZID0gdGhpcy5jdXJyZW50WSA9IHRvdWNoLmNsaWVudFk7XG4gICAgdGhpcy5pZGVudGlmaWVyID0gdG91Y2guaWRlbnRpZmllcjtcbiAgfVxuXG4gIHVwZGF0ZSh0b3VjaCl7XG4gICAgdGhpcy5jdXJyZW50WSA9IHRvdWNoLmNsaWVudFk7XG4gIH1cblxuICAvLyByZXNldCgpIHtcbiAgLy8gICB0aGlzLnN0YXJ0WSA9IDA7XG4gIC8vICAgdGhpcy5jdXJyZW50WSA9IDA7XG4gIC8vICAgdGhpcy5pZGVudGlmaWVyID0gbnVsbDtcbiAgLy8gfVxufVxuZXhwb3J0IGRlZmF1bHQgVG91Y2g7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGpzL1RvdWNoLmpzIiwiY2xhc3MgRWxlbWVudCB7XG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0gc2Nyb2xsVG9wIHtOdW1iZXJ9XG4gICAqIEBwYXJhbSBzY3JvbGxIZWlnaHQge051bWJlcn1cbiAgICogQHBhcmFtIGNsaWVudEhlaWdodCB7TnVtYmVyfVxuICAgKi9cbiAgY29uc3RydWN0b3Ioc2Nyb2xsVG9wLCBzY3JvbGxIZWlnaHQsIGNsaWVudEhlaWdodCkge1xuICAgIHRoaXMuc2Nyb2xsVG9wID0gc2Nyb2xsVG9wO1xuICAgIHRoaXMuc2Nyb2xsSGVpZ2h0ID0gc2Nyb2xsSGVpZ2h0O1xuICAgIHRoaXMuY2xpZW50SGVpZ2h0ID0gY2xpZW50SGVpZ2h0O1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSBlbGVtZW50IHtFbGVtZW50fVxuICAgKi9cbiAgdXBkYXRlKGVsZW1lbnQpIHtcbiAgICB0aGlzLnNjcm9sbFRvcCA9IGVsZW1lbnQuc2Nyb2xsVG9wO1xuICAgIHRoaXMuc2Nyb2xsSGVpZ2h0ID0gZWxlbWVudC5zY3JvbGxIZWlnaHQ7XG4gICAgdGhpcy5jbGllbnRIZWlnaHQgPSBlbGVtZW50LmNsaWVudEhlaWdodDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFbGVtZW50O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGpzL0VsZW1lbnQuanMiLCJleHBvcnQgY29uc3QgRElSRUNUSU9OID0ge1xuICBVUDogJ1VQJyxcbiAgRE9XTjogJ0RPV04nLFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBqcy9jb25zdGFudHMuanMiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QTs7Ozs7OztBQzVEQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ1pBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBUUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBWkE7QUFDQTtBQUNBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQUlBOzs7Ozs7Ozs7Ozs7Ozs7QUN2RkE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7OztBQUNBOzs7Ozs7OztBQUNBOzs7Ozs7O0FBT0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQUdBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2hFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkE7QUFDQTs7Ozs7O0FBTUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQUdBOzs7Ozs7Ozs7Ozs7QUN4QkE7QUFDQTtBQUNBO0FBRkE7OztBIiwic291cmNlUm9vdCI6IiJ9