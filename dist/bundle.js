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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); //import TouchByKey from './TouchByKey.js';


var _Touch = __webpack_require__(2);

var _Touch2 = _interopRequireDefault(_Touch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var enfeeble = 4; //ослабление
var distance = 50; // дистанция

var Swipe2 = function () {
  function Swipe2(elem) {
    _classCallCheck(this, Swipe2);

    //debugger;
    //this.elem = document.getElementById("ptr");
    this.ptrList = document.getElementById("ptr-list");
    this.touch = new _Touch2.default();
  }

  _createClass(Swipe2, [{
    key: "listener",
    value: function listener() {
      //this.ptrList.addEventListener("touchstart", this.handleStart.bind(this), false);
      this.ptrList.addEventListener("touchmove", this.handleMove.bind(this), false);
      this.ptrList.addEventListener("touchend", this.handleEnd.bind(this), false);
      this.ptrList.addEventListener("touchcancel", this.handleEnd.bind(this), false);
    }

    // handleStart(evt) {
    //   //evt.preventDefault();
    //   console.log("touchstart.");
    //
    //   var touches = evt.changedTouches //[0];
    //   touchEach.call(this, touches, this._touchByKey.setTouch);
    //   //this._touchByKey.setTouch(touches)
    //
    // }

  }, {
    key: "handleMove",
    value: function handleMove(evt) {
      //evt.preventDefault();
      console.log("handlemove");
      var touches = evt.targetTouches; //[0];
      var touchLength = touches.length;

      if (touchLength === 0) {
        return;
      }

      var touch = touches[0];
      var parent = this.ptrList.parentElement;
      var scrollTop = parent.scrollTop;
      var clientHeight = parent.clientHeight;
      var scrollHeight = parent.scrollHeight;
      console.log("scrollTop:", scrollTop);
      console.log("Дистанция до обновления:", this.touch.distance);
      if (scrollTop === 0 && this.touch.distance >= 0) {
        evt.preventDefault();
        if (this.touch.isStartedUp === false) {
          this.touch.startTouchUp(touch);
        } else {
          //if ( (touch.clientY - this.touch.startY) >= 0) {
          //  console.log("*********************");
          this.touch.updateTouch(touch);
          //}
          var dist = this.touch.distance;
          var ptrList = this.ptrList;
          var d = ~~dist /*/ enfeeble*/; //round
          console.log("Дистанция:", d);
          ptrList.style.transform = "translateY(" + d + "px)";
        }
      } else if (scrollHeight === scrollTop + clientHeight) {
        //доскролили до низа
        evt.preventDefault();
        if (this.touch.isStartedDown === false) {
          this.touch.startTouchDown(touch);
        } else {
          this.touch.updateTouch(touch);
          var _dist = this.touch.distance;
          var _ptrList = this.ptrList;
          var _d = ~~_dist /*/ enfeeble*/; //round
          console.log("Дистанция:", _d);
          _ptrList.style.transform = "translateY(" + _d + "px)";
        }
      } else {}
      /* скролинг списка */

      // touchEach.call(this, touches, this._touchByKey.updateTouch);
      // //this._touchByKey.updateTouch(touches)
      //
      // const ptrList = this.ptrList;
      //
      // if (scrollTop === 0 && (ptrList.style.transform == "translateY(0)" ||
      // ptrList.style.transform == "")) { touchEach.call(this, touches,
      // this._touchByKey.resetStart); ptrList.style.transform = "translateY(0px)" } else if
      // (scrollTop === 0 && ptrList.transform != "") { const touch = this._touchByKey[0];
      // ptrList.style.transform = `translateY(${-touch.difY / enfeeble}px)`; } else {
      // ptrList.style.transform = "translateY(0)"; }

      console.log(this._touchByKey);
    }
  }, {
    key: "handleEnd",
    value: function handleEnd(evt) {
      //evt.preventDefault();
      console.log("touchend");

      var touches = evt.changedTouches;
      for (var i = touches.length - 1; i >= 0; i = i - 1) {
        var touch = touches[i];
        if (this.touch.identifier === touch.identifier) {
          debugger;
          this.touch.resetTouch();
          break;
        }
      }

      //touchEach.call(this, touches, this._touchByKey.delete);
      //this._touchByKey.delete(touches)
    }

    // handleCancel(evt) {
    //   //evt.preventDefault();
    //   console.log("touchcancel.");
    //   var touches = evt.changedTouches;
    //
    // }

  }]);

  return Swipe2;
}();

exports.default = Swipe2;


function touchEach(touches, f) {
  for (var i = touches.length - 1; i >= 0; i = i - 1) {
    var touch = touches[i];
    f.call(this._touchByKey, touch);
  }
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//import { DIRECTION } from './constants';
//import Direction from './Direction';

var Touch2 = function () {
  function Touch2(touch) {
    _classCallCheck(this, Touch2);

    this.resetTouch();
  }

  _createClass(Touch2, [{
    key: "startTouchUp",
    value: function startTouchUp(touch) {
      this.isStartedUp = true;
      this._startTouch(touch);
    }
  }, {
    key: "startTouchDown",
    value: function startTouchDown(touch) {
      this.isStartedDown = true;
      this._startTouch(touch);
    }

    /**
     * @private
     */

  }, {
    key: "_startTouch",
    value: function _startTouch(touch) {
      this.startY = this.currentY = touch.clientY;
      this.identifier = touch.identifier;
    }
  }, {
    key: "updateTouch",
    value: function updateTouch(touch) {
      this.currentY = touch.clientY;
    }
  }, {
    key: "resetTouch",
    value: function resetTouch() {
      this.isStartedUp = false;
      this.isStartedDown = false;
      this.startY = 0;
      this.currentY = 0;
      this.identifier = null;
    }
  }, {
    key: "distance",
    get: function get() {
      return this.currentY - this.startY;
    }
  }]);

  return Touch2;
}();

exports.default = Touch2;

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIGY4Yjk5YmRhMDI3ZGM5Mjc2MDQ2Iiwid2VicGFjazovLy9qcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vanMvU3dpcGUyLmpzIiwid2VicGFjazovLy9qcy9Ub3VjaDIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZjhiOTliZGEwMjdkYzkyNzYwNDYiLCIvL2ltcG9ydCBTd2lwZSBmcm9tICcuL1N3aXBlJztcbmltcG9ydCBTd2lwZTIgZnJvbSAnLi9Td2lwZTInO1xuXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICBzdGFydHVwKCk7XG59O1xuXG4vL2xldCBzd2lwZSA9IG5ldyBTd2lwZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInB0clwiKSk7XG5cbmZ1bmN0aW9uIHN0YXJ0dXAoKSB7XG4gIGxldCBzd2lwZSA9IG5ldyBTd2lwZTIoKTtcbiAgc3dpcGUubGlzdGVuZXIoKTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBqcy9pbmRleC5qcyIsIi8vaW1wb3J0IFRvdWNoQnlLZXkgZnJvbSAnLi9Ub3VjaEJ5S2V5LmpzJztcclxuaW1wb3J0IFRvdWNoMiBmcm9tICcuL1RvdWNoMi5qcyc7XHJcblxyXG5jb25zdCBlbmZlZWJsZSA9IDQ7IC8v0L7RgdC70LDQsdC70LXQvdC40LVcclxuY29uc3QgZGlzdGFuY2UgPSA1MDsgLy8g0LTQuNGB0YLQsNC90YbQuNGPXHJcblxyXG5jbGFzcyBTd2lwZTIge1xyXG5cclxuICBjb25zdHJ1Y3RvcihlbGVtKSB7XHJcbiAgICAvL2RlYnVnZ2VyO1xyXG4gICAgLy90aGlzLmVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInB0clwiKTtcclxuICAgIHRoaXMucHRyTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHRyLWxpc3RcIik7XHJcbiAgICB0aGlzLnRvdWNoID0gbmV3IFRvdWNoMigpO1xyXG4gIH1cclxuXHJcbiAgbGlzdGVuZXIoKSB7XHJcbiAgICAvL3RoaXMucHRyTGlzdC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCB0aGlzLmhhbmRsZVN0YXJ0LmJpbmQodGhpcyksIGZhbHNlKTtcclxuICAgIHRoaXMucHRyTGlzdC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsIHRoaXMuaGFuZGxlTW92ZS5iaW5kKHRoaXMpLCBmYWxzZSk7XHJcbiAgICB0aGlzLnB0ckxpc3QuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsIHRoaXMuaGFuZGxlRW5kLmJpbmQodGhpcyksIGZhbHNlKTtcclxuICAgIHRoaXMucHRyTGlzdC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hjYW5jZWxcIiwgdGhpcy5oYW5kbGVFbmQuYmluZCh0aGlzKSwgZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgLy8gaGFuZGxlU3RhcnQoZXZ0KSB7XHJcbiAgLy8gICAvL2V2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIC8vICAgY29uc29sZS5sb2coXCJ0b3VjaHN0YXJ0LlwiKTtcclxuICAvL1xyXG4gIC8vICAgdmFyIHRvdWNoZXMgPSBldnQuY2hhbmdlZFRvdWNoZXMgLy9bMF07XHJcbiAgLy8gICB0b3VjaEVhY2guY2FsbCh0aGlzLCB0b3VjaGVzLCB0aGlzLl90b3VjaEJ5S2V5LnNldFRvdWNoKTtcclxuICAvLyAgIC8vdGhpcy5fdG91Y2hCeUtleS5zZXRUb3VjaCh0b3VjaGVzKVxyXG4gIC8vXHJcbiAgLy8gfVxyXG5cclxuICBoYW5kbGVNb3ZlKGV2dCkge1xyXG4gICAgLy9ldnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnNvbGUubG9nKFwiaGFuZGxlbW92ZVwiKTtcclxuICAgIGNvbnN0IHRvdWNoZXMgPSBldnQudGFyZ2V0VG91Y2hlczsgLy9bMF07XHJcbiAgICBjb25zdCB0b3VjaExlbmd0aCA9IHRvdWNoZXMubGVuZ3RoO1xyXG5cclxuICAgIGlmICh0b3VjaExlbmd0aCA9PT0gMCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdG91Y2ggPSB0b3VjaGVzWzBdO1xyXG4gICAgY29uc3QgcGFyZW50ID0gdGhpcy5wdHJMaXN0LnBhcmVudEVsZW1lbnQ7XHJcbiAgICBjb25zdCBzY3JvbGxUb3AgPSBwYXJlbnQuc2Nyb2xsVG9wO1xyXG4gICAgY29uc3QgY2xpZW50SGVpZ2h0ID0gcGFyZW50LmNsaWVudEhlaWdodDtcclxuICAgIGNvbnN0IHNjcm9sbEhlaWdodCA9IHBhcmVudC5zY3JvbGxIZWlnaHQ7XHJcbiAgICBjb25zb2xlLmxvZyhcInNjcm9sbFRvcDpcIiwgc2Nyb2xsVG9wKTtcclxuICAgIGNvbnNvbGUubG9nKFwi0JTQuNGB0YLQsNC90YbQuNGPINC00L4g0L7QsdC90L7QstC70LXQvdC40Y86XCIsIHRoaXMudG91Y2guZGlzdGFuY2UpO1xyXG4gICAgaWYgKHNjcm9sbFRvcCA9PT0gMCAmJiB0aGlzLnRvdWNoLmRpc3RhbmNlID49IDApIHtcclxuICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGlmICh0aGlzLnRvdWNoLmlzU3RhcnRlZFVwID09PSBmYWxzZSkge1xyXG4gICAgICAgIHRoaXMudG91Y2guc3RhcnRUb3VjaFVwKHRvdWNoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvL2lmICggKHRvdWNoLmNsaWVudFkgLSB0aGlzLnRvdWNoLnN0YXJ0WSkgPj0gMCkge1xyXG4gICAgICAgIC8vICBjb25zb2xlLmxvZyhcIioqKioqKioqKioqKioqKioqKioqKlwiKTtcclxuICAgICAgICB0aGlzLnRvdWNoLnVwZGF0ZVRvdWNoKHRvdWNoKTtcclxuICAgICAgICAvL31cclxuICAgICAgICBjb25zdCBkaXN0ID0gdGhpcy50b3VjaC5kaXN0YW5jZTtcclxuICAgICAgICBjb25zdCBwdHJMaXN0ID0gdGhpcy5wdHJMaXN0O1xyXG4gICAgICAgIGNvbnN0IGQgPSB+fihkaXN0IC8qLyBlbmZlZWJsZSovKTsgLy9yb3VuZFxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi0JTQuNGB0YLQsNC90YbQuNGPOlwiLCBkKTtcclxuICAgICAgICBwdHJMaXN0LnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVZKCR7ZH1weClgO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKHNjcm9sbEhlaWdodCA9PT0gc2Nyb2xsVG9wICsgY2xpZW50SGVpZ2h0KSB7XHJcbiAgICAgIC8v0LTQvtGB0LrRgNC+0LvQuNC70Lgg0LTQviDQvdC40LfQsFxyXG4gICAgICBldnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgaWYgKHRoaXMudG91Y2guaXNTdGFydGVkRG93biA9PT0gZmFsc2UpIHtcclxuICAgICAgICB0aGlzLnRvdWNoLnN0YXJ0VG91Y2hEb3duKHRvdWNoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnRvdWNoLnVwZGF0ZVRvdWNoKHRvdWNoKTtcclxuICAgICAgICBjb25zdCBkaXN0ID0gdGhpcy50b3VjaC5kaXN0YW5jZTtcclxuICAgICAgICBjb25zdCBwdHJMaXN0ID0gdGhpcy5wdHJMaXN0O1xyXG4gICAgICAgIGNvbnN0IGQgPSB+fihkaXN0IC8qLyBlbmZlZWJsZSovKTsgLy9yb3VuZFxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi0JTQuNGB0YLQsNC90YbQuNGPOlwiLCBkKTtcclxuICAgICAgICBwdHJMaXN0LnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVZKCR7ZH1weClgO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvKiDRgdC60YDQvtC70LjQvdCzINGB0L/QuNGB0LrQsCAqL1xyXG4gICAgfVxyXG4gICAgLy8gdG91Y2hFYWNoLmNhbGwodGhpcywgdG91Y2hlcywgdGhpcy5fdG91Y2hCeUtleS51cGRhdGVUb3VjaCk7XHJcbiAgICAvLyAvL3RoaXMuX3RvdWNoQnlLZXkudXBkYXRlVG91Y2godG91Y2hlcylcclxuICAgIC8vXHJcbiAgICAvLyBjb25zdCBwdHJMaXN0ID0gdGhpcy5wdHJMaXN0O1xyXG4gICAgLy9cclxuICAgIC8vIGlmIChzY3JvbGxUb3AgPT09IDAgJiYgKHB0ckxpc3Quc3R5bGUudHJhbnNmb3JtID09IFwidHJhbnNsYXRlWSgwKVwiIHx8XHJcbiAgICAvLyBwdHJMaXN0LnN0eWxlLnRyYW5zZm9ybSA9PSBcIlwiKSkgeyB0b3VjaEVhY2guY2FsbCh0aGlzLCB0b3VjaGVzLFxyXG4gICAgLy8gdGhpcy5fdG91Y2hCeUtleS5yZXNldFN0YXJ0KTsgcHRyTGlzdC5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZVkoMHB4KVwiIH0gZWxzZSBpZlxyXG4gICAgLy8gKHNjcm9sbFRvcCA9PT0gMCAmJiBwdHJMaXN0LnRyYW5zZm9ybSAhPSBcIlwiKSB7IGNvbnN0IHRvdWNoID0gdGhpcy5fdG91Y2hCeUtleVswXTtcclxuICAgIC8vIHB0ckxpc3Quc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVkoJHstdG91Y2guZGlmWSAvIGVuZmVlYmxlfXB4KWA7IH0gZWxzZSB7XHJcbiAgICAvLyBwdHJMaXN0LnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlWSgwKVwiOyB9XHJcblxyXG4gICAgY29uc29sZS5sb2codGhpcy5fdG91Y2hCeUtleSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVFbmQoZXZ0KSB7XHJcbiAgICAvL2V2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc29sZS5sb2coXCJ0b3VjaGVuZFwiKTtcclxuXHJcbiAgICBjb25zdCB0b3VjaGVzID0gZXZ0LmNoYW5nZWRUb3VjaGVzO1xyXG4gICAgZm9yICh2YXIgaSA9IHRvdWNoZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpID0gaSAtIDEpIHtcclxuICAgICAgY29uc3QgdG91Y2ggPSB0b3VjaGVzW2ldO1xyXG4gICAgICBpZiAodGhpcy50b3VjaC5pZGVudGlmaWVyID09PSB0b3VjaC5pZGVudGlmaWVyKSB7XHJcbiAgICAgICAgZGVidWdnZXI7XHJcbiAgICAgICAgdGhpcy50b3VjaC5yZXNldFRvdWNoKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy90b3VjaEVhY2guY2FsbCh0aGlzLCB0b3VjaGVzLCB0aGlzLl90b3VjaEJ5S2V5LmRlbGV0ZSk7XHJcbiAgICAvL3RoaXMuX3RvdWNoQnlLZXkuZGVsZXRlKHRvdWNoZXMpXHJcbiAgfVxyXG5cclxuICAvLyBoYW5kbGVDYW5jZWwoZXZ0KSB7XHJcbiAgLy8gICAvL2V2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIC8vICAgY29uc29sZS5sb2coXCJ0b3VjaGNhbmNlbC5cIik7XHJcbiAgLy8gICB2YXIgdG91Y2hlcyA9IGV2dC5jaGFuZ2VkVG91Y2hlcztcclxuICAvL1xyXG4gIC8vIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN3aXBlMjtcclxuXHJcbmZ1bmN0aW9uIHRvdWNoRWFjaCh0b3VjaGVzLCBmKSB7XHJcbiAgZm9yICh2YXIgaSA9IHRvdWNoZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpID0gaSAtIDEpIHtcclxuICAgIHZhciB0b3VjaCA9IHRvdWNoZXNbaV07XHJcbiAgICBmLmNhbGwodGhpcy5fdG91Y2hCeUtleSwgdG91Y2gpO1xyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8ganMvU3dpcGUyLmpzIiwiLy9pbXBvcnQgeyBESVJFQ1RJT04gfSBmcm9tICcuL2NvbnN0YW50cyc7XHJcbi8vaW1wb3J0IERpcmVjdGlvbiBmcm9tICcuL0RpcmVjdGlvbic7XHJcblxyXG5jbGFzcyBUb3VjaDIge1xyXG4gIGlzU3RhcnRlZFVwO1xyXG4gIGlzU3RhcnRlZERvd247XHJcbiAgc3RhcnRZO1xyXG4gIGN1cnJlbnRZO1xyXG4gIGlkZW50aWZpZXI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHRvdWNoKSB7XHJcbiAgICB0aGlzLnJlc2V0VG91Y2goKTtcclxuICB9XHJcblxyXG4gIHN0YXJ0VG91Y2hVcCh0b3VjaCkge1xyXG4gICAgdGhpcy5pc1N0YXJ0ZWRVcCA9IHRydWU7XHJcbiAgICB0aGlzLl9zdGFydFRvdWNoKHRvdWNoKTtcclxuICB9XHJcblxyXG4gIHN0YXJ0VG91Y2hEb3duKHRvdWNoKSB7XHJcbiAgICB0aGlzLmlzU3RhcnRlZERvd24gPSB0cnVlO1xyXG4gICAgdGhpcy5fc3RhcnRUb3VjaCh0b3VjaCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqL1xyXG4gIF9zdGFydFRvdWNoKHRvdWNoKSB7XHJcbiAgICB0aGlzLnN0YXJ0WSA9IHRoaXMuY3VycmVudFkgPSB0b3VjaC5jbGllbnRZO1xyXG4gICAgdGhpcy5pZGVudGlmaWVyID0gdG91Y2guaWRlbnRpZmllcjtcclxuICB9XHJcblxyXG5cclxuICB1cGRhdGVUb3VjaCh0b3VjaCkge1xyXG4gICAgdGhpcy5jdXJyZW50WSA9IHRvdWNoLmNsaWVudFk7XHJcbiAgfVxyXG5cclxuICByZXNldFRvdWNoKCkge1xyXG4gICAgdGhpcy5pc1N0YXJ0ZWRVcCA9IGZhbHNlO1xyXG4gICAgdGhpcy5pc1N0YXJ0ZWREb3duID0gZmFsc2U7XHJcbiAgICB0aGlzLnN0YXJ0WSA9IDA7XHJcbiAgICB0aGlzLmN1cnJlbnRZID0gMDtcclxuICAgIHRoaXMuaWRlbnRpZmllciA9IG51bGw7XHJcbiAgfVxyXG5cclxuICBnZXQgZGlzdGFuY2UoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50WSAtIHRoaXMuc3RhcnRZO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVG91Y2gyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBqcy9Ub3VjaDIuanMiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QTs7Ozs7OztBQzVEQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNaQTtBQUNBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbElBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7QUFHQTs7O0EiLCJzb3VyY2VSb290IjoiIn0=