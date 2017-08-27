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

function startup() {
  var swipe = new _Swipe2.default(document.getElementById("ptr"));
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

var _TouchByKey = __webpack_require__(2);

var _TouchByKey2 = _interopRequireDefault(_TouchByKey);

var _Touch = __webpack_require__(6);

var _Touch2 = _interopRequireDefault(_Touch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var enfeeble = 4; //ослабление
var distance = 50; // дистанция


var Swipe = function () {
  function Swipe(elem) {
    _classCallCheck(this, Swipe);

    //debugger;
    this.elem = document.getElementById("ptr");
    this.ptrList = document.getElementById("ptr-list");
    this._touchByKey = new _TouchByKey2.default();
  }

  _createClass(Swipe, [{
    key: 'listener',
    value: function listener() {
      this.elem.addEventListener("touchstart", this.handleStart.bind(this), false);
      this.elem.addEventListener("touchend", this.handleEnd.bind(this), false);
      this.elem.addEventListener("touchcancel", this.handleCancel.bind(this), false);
      this.elem.addEventListener("touchmove", this.handleMove.bind(this), false);
    }
  }, {
    key: 'handleStart',
    value: function handleStart(evt) {
      //evt.preventDefault();
      console.log("touchstart.");

      var touches = evt.changedTouches; //[0];
      touchEach.call(this, touches, this._touchByKey.setTouch);
      //this._touchByKey.setTouch(touches)
    }
  }, {
    key: 'handleMove',
    value: function handleMove(evt) {
      //evt.preventDefault();
      console.log("handlemove");
      var touches = evt.changedTouches; //[0];
      touchEach.call(this, touches, this._touchByKey.updateTouch);
      //this._touchByKey.updateTouch(touches)

      var parent = this.elem;
      var scrollTop = parent.scrollTop;

      var ptrList = this.ptrList;

      if (scrollTop === 0 && (ptrList.style.transform == "translateY(0)" || ptrList.style.transform == "")) {
        touchEach.call(this, touches, this._touchByKey.resetStart);
        ptrList.style.transform = "translateY(0px)";
      } else if (scrollTop === 0 && ptrList.transform != "") {
        var touch = this._touchByKey[0];
        ptrList.style.transform = 'translateY(' + -touch.difY / enfeeble + 'px)';
      } else {
        ptrList.style.transform = "translateY(0)";
      }

      console.log(this._touchByKey);
    }
  }, {
    key: 'handleEnd',
    value: function handleEnd(evt) {
      //evt.preventDefault();
      console.log("touchend");

      var touches = evt.changedTouches; //[0];
      touchEach.call(this, touches, this._touchByKey.delete);
      //this._touchByKey.delete(touches)
    }
  }, {
    key: 'handleCancel',
    value: function handleCancel(evt) {
      //evt.preventDefault();
      console.log("touchcancel.");
      var touches = evt.changedTouches;
    }
  }]);

  return Swipe;
}();

exports.default = Swipe;


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

var _Touch = __webpack_require__(3);

var _Touch2 = _interopRequireDefault(_Touch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TouchByKey = function () {
  function TouchByKey() {
    _classCallCheck(this, TouchByKey);
  }

  _createClass(TouchByKey, [{
    key: 'setTouch',

    //_byKey = {};

    value: function setTouch(touch) {
      var identifier = touch.identifier;

      this[identifier] = new _Touch2.default(touch);
    }
  }, {
    key: 'updateTouch',
    value: function updateTouch(touch) {
      var identifier = touch.identifier;

      this[identifier].updateTouch(touch);
    }
  }, {
    key: 'resetStart',
    value: function resetStart(touch) {
      var identifier = touch.identifier;

      this[identifier].resetStart(touch);
    }
  }, {
    key: 'delete',
    value: function _delete(touch) {
      var identifier = touch.identifier;

      delete this[identifier];
    }
  }]);

  return TouchByKey;
}();

exports.default = TouchByKey;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constants = __webpack_require__(4);

var _Direction = __webpack_require__(5);

var _Direction2 = _interopRequireDefault(_Direction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Touch = function () {
  function Touch(touch) {
    _classCallCheck(this, Touch);

    this.identifier = touch.identifier;
    this.startScreenX = this.screenX = touch.screenX;
    this.startScreenY = this.screenY = touch.screenY;
    this.startClientX = this.clientX = touch.clientX;
    this.startClientY = this.clientY = touch.clientY;
    this.startPageX = this.pageX = touch.pageX;
    this.startPageY = this.pageY = touch.pageY;
    this.touch = touch;
  }

  _createClass(Touch, [{
    key: 'updateTouch',
    value: function updateTouch(touch) {
      this.screenX = touch.screenX;
      this.screenY = touch.screenY;
      this.clientX = touch.clientX;
      this.clientY = touch.clientY;
      this.pageX = touch.pageX;
      this.pageY = touch.pageY;
    }
  }, {
    key: 'resetStart',
    value: function resetStart(touch) {
      this.startScreenX = touch.screenX;
      this.startScreenY = touch.screenY;
      this.startClientX = touch.clientX;
      this.startClientY = touch.clientY;
      this.startPageX = touch.pageX;
      this.startPageY = touch.pageY;
    }
  }, {
    key: 'difX',
    get: function get() {
      return this.startClientX - this.clientX;
    }
  }, {
    key: 'difY',
    get: function get() {
      return this.startClientY - this.clientY;
    }
  }, {
    key: 'direction',
    get: function get() {
      var direction = new _Direction2.default();

      if (this.difX < 0) {
        direction.hor = _constants.DIRECTION.RIGHT;
      } else if (this.difX > 0) {
        direction.hor = _constants.DIRECTION.LEFT;
      }

      if (this.difY < 0) {
        direction.ver = _constants.DIRECTION.DOWN;
      } else if (this.difY > 0) {
        direction.ver = _constants.DIRECTION.UP;
      }

      return direction;
    }
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
var DIRECTION = exports.DIRECTION = {
  LEFT: 'LEFT',
  RIGHT: 'RIGHT',
  UP: 'UP',
  DOWN: 'DOWN'
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Direction = function () {
  function Direction() {
    _classCallCheck(this, Direction);

    this._hor = null;
    this._ver = null;
  }

  _createClass(Direction, [{
    key: "hor",

    //
    // constructor(hor, ver) {
    //   this._hor = hor;
    //   this._ver = ver;
    // }

    get: function get() {
      return this._hor;
    },
    set: function set(value) {
      this._hor = value;
    }
  }, {
    key: "ver",
    get: function get() {
      return this._ver;
    },
    set: function set(value) {
      this._ver = value;
    }
  }]);

  return Direction;
}();

exports.default = Direction;

/***/ }),
/* 6 */
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
    key: "startTouch",
    value: function startTouch(touch) {
      this.isStarted = true;
      this.startY = this.currentY = touch.clientY;
      this.identifier = touch.identifier;
    }
  }, {
    key: "updateTouch",
    value: function currentTouch(touch) {
      this.currentY = touch.clientY;
    }
  }, {
    key: "resetTouch",
    value: function resetTouch() {
      this.isStarted = false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIDFmNzM4MmUwYTc2NTgxNTY4NzI0Iiwid2VicGFjazovLy9qcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vanMvU3dpcGUuanMiLCJ3ZWJwYWNrOi8vL2pzL1RvdWNoQnlLZXkuanMiLCJ3ZWJwYWNrOi8vL2pzL1RvdWNoLmpzIiwid2VicGFjazovLy9qcy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vL2pzL0RpcmVjdGlvbi5qcyIsIndlYnBhY2s6Ly8vanMvVG91Y2gyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDFmNzM4MmUwYTc2NTgxNTY4NzI0IiwiaW1wb3J0IFN3aXBlIGZyb20gJy4vU3dpcGUnO1xuXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICBzdGFydHVwKCk7XG59O1xuXG4vL2xldCBzd2lwZSA9IG5ldyBTd2lwZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInB0clwiKSk7XG5cbmZ1bmN0aW9uIHN0YXJ0dXAoKSB7XG4gIGxldCBzd2lwZSA9IG5ldyBTd2lwZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInB0clwiKSk7XG4gIHN3aXBlLmxpc3RlbmVyKCk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8ganMvaW5kZXguanMiLCJpbXBvcnQgVG91Y2hCeUtleSBmcm9tICcuL1RvdWNoQnlLZXkuanMnO1xuaW1wb3J0IFRvdWNoMiBmcm9tICcuL1RvdWNoMi5qcyc7XG5cbmNvbnN0IGVuZmVlYmxlID0gNDsgLy/QvtGB0LvQsNCx0LvQtdC90LjQtVxuY29uc3QgZGlzdGFuY2UgPSA1MDsgLy8g0LTQuNGB0YLQsNC90YbQuNGPXG5cblxuY2xhc3MgU3dpcGUge1xuXG4gIGNvbnN0cnVjdG9yKGVsZW0pIHtcbiAgICAvL2RlYnVnZ2VyO1xuICAgIHRoaXMuZWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHRyXCIpO1xuICAgIHRoaXMucHRyTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHRyLWxpc3RcIik7XG4gICAgdGhpcy5fdG91Y2hCeUtleSA9IG5ldyBUb3VjaEJ5S2V5KCk7XG4gIH1cblxuICBsaXN0ZW5lcigpIHtcbiAgICB0aGlzLmVsZW0uYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgdGhpcy5oYW5kbGVTdGFydC5iaW5kKHRoaXMpLCBmYWxzZSk7XG4gICAgdGhpcy5lbGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLCB0aGlzLmhhbmRsZUVuZC5iaW5kKHRoaXMpLCBmYWxzZSk7XG4gICAgdGhpcy5lbGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGNhbmNlbFwiLCB0aGlzLmhhbmRsZUNhbmNlbC5iaW5kKHRoaXMpLCBmYWxzZSk7XG4gICAgdGhpcy5lbGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIiwgdGhpcy5oYW5kbGVNb3ZlLmJpbmQodGhpcyksIGZhbHNlKTtcbiAgfVxuXG4gIGhhbmRsZVN0YXJ0KGV2dCkge1xuICAgIC8vZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc29sZS5sb2coXCJ0b3VjaHN0YXJ0LlwiKTtcblxuICAgIHZhciB0b3VjaGVzID0gZXZ0LmNoYW5nZWRUb3VjaGVzIC8vWzBdO1xuICAgIHRvdWNoRWFjaC5jYWxsKHRoaXMsIHRvdWNoZXMsIHRoaXMuX3RvdWNoQnlLZXkuc2V0VG91Y2gpO1xuICAgIC8vdGhpcy5fdG91Y2hCeUtleS5zZXRUb3VjaCh0b3VjaGVzKVxuXG4gIH1cblxuICBoYW5kbGVNb3ZlKGV2dCkge1xuICAgIC8vZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc29sZS5sb2coXCJoYW5kbGVtb3ZlXCIpO1xuICAgIHZhciB0b3VjaGVzID0gZXZ0LmNoYW5nZWRUb3VjaGVzOyAvL1swXTtcbiAgICB0b3VjaEVhY2guY2FsbCh0aGlzLCB0b3VjaGVzLCB0aGlzLl90b3VjaEJ5S2V5LnVwZGF0ZVRvdWNoKTtcbiAgICAvL3RoaXMuX3RvdWNoQnlLZXkudXBkYXRlVG91Y2godG91Y2hlcylcblxuICAgIHZhciBwYXJlbnQgPSB0aGlzLmVsZW07XG4gICAgY29uc3Qgc2Nyb2xsVG9wID0gcGFyZW50LnNjcm9sbFRvcDtcblxuICAgIGNvbnN0IHB0ckxpc3QgPSB0aGlzLnB0ckxpc3Q7XG5cbiAgICBpZiAoIHNjcm9sbFRvcCA9PT0gMCAmJiAocHRyTGlzdC5zdHlsZS50cmFuc2Zvcm0gPT0gXCJ0cmFuc2xhdGVZKDApXCIgfHwgcHRyTGlzdC5zdHlsZS50cmFuc2Zvcm0gPT0gXCJcIikgKSB7XG4gICAgICB0b3VjaEVhY2guY2FsbCh0aGlzLCB0b3VjaGVzLCB0aGlzLl90b3VjaEJ5S2V5LnJlc2V0U3RhcnQpO1xuICAgICAgcHRyTGlzdC5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZVkoMHB4KVwiXG4gICAgfSBlbHNlIGlmIChzY3JvbGxUb3AgPT09IDAgJiYgcHRyTGlzdC50cmFuc2Zvcm0gIT0gXCJcIikge1xuICAgICAgY29uc3QgdG91Y2ggPSB0aGlzLl90b3VjaEJ5S2V5WzBdO1xuICAgICAgcHRyTGlzdC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWSgkey10b3VjaC5kaWZZL2VuZmVlYmxlfXB4KWA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHB0ckxpc3Quc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGVZKDApXCI7XG4gICAgfVxuXG4gICAgY29uc29sZS5sb2codGhpcy5fdG91Y2hCeUtleSk7XG4gIH1cblxuICBoYW5kbGVFbmQoZXZ0KSB7XG4gICAgLy9ldnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zb2xlLmxvZyhcInRvdWNoZW5kXCIpO1xuXG4gICAgdmFyIHRvdWNoZXMgPSBldnQuY2hhbmdlZFRvdWNoZXM7IC8vWzBdO1xuICAgIHRvdWNoRWFjaC5jYWxsKHRoaXMsIHRvdWNoZXMsIHRoaXMuX3RvdWNoQnlLZXkuZGVsZXRlKTtcbiAgICAvL3RoaXMuX3RvdWNoQnlLZXkuZGVsZXRlKHRvdWNoZXMpXG4gIH1cblxuICBoYW5kbGVDYW5jZWwoZXZ0KSB7XG4gICAgLy9ldnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zb2xlLmxvZyhcInRvdWNoY2FuY2VsLlwiKTtcbiAgICB2YXIgdG91Y2hlcyA9IGV2dC5jaGFuZ2VkVG91Y2hlcztcblxuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3dpcGU7XG5cbmZ1bmN0aW9uIHRvdWNoRWFjaCh0b3VjaGVzLCBmKSB7XG4gIGZvciAodmFyIGkgPSB0b3VjaGVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaSA9IGkgLSAxKSB7XG4gICAgdmFyIHRvdWNoID0gdG91Y2hlc1tpXTtcbiAgICBmLmNhbGwodGhpcy5fdG91Y2hCeUtleSwgdG91Y2gpO1xuICB9XG59XG5cblxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8ganMvU3dpcGUuanMiLCJpbXBvcnQgVG91Y2ggZnJvbSAnLi9Ub3VjaC5qcyc7XG5cbmNsYXNzIFRvdWNoQnlLZXkge1xuICAvL19ieUtleSA9IHt9O1xuXG4gIHNldFRvdWNoKHRvdWNoKSB7XG4gICAgY29uc3QgeyBpZGVudGlmaWVyIH0gPSB0b3VjaDtcbiAgICB0aGlzW2lkZW50aWZpZXJdID0gbmV3IFRvdWNoKHRvdWNoKTtcbiAgfVxuXG4gIHVwZGF0ZVRvdWNoKHRvdWNoKSB7XG4gICAgY29uc3QgeyBpZGVudGlmaWVyIH0gPSB0b3VjaDtcbiAgICB0aGlzW2lkZW50aWZpZXJdLnVwZGF0ZVRvdWNoKHRvdWNoKTtcbiAgfVxuXG4gIHJlc2V0U3RhcnQodG91Y2gpIHtcbiAgICBjb25zdCB7IGlkZW50aWZpZXIgfSA9IHRvdWNoO1xuICAgIHRoaXNbaWRlbnRpZmllcl0ucmVzZXRTdGFydCh0b3VjaCk7XG4gIH1cblxuICBkZWxldGUodG91Y2gpIHtcbiAgICBjb25zdCB7IGlkZW50aWZpZXIgfSA9IHRvdWNoO1xuICAgIGRlbGV0ZSB0aGlzW2lkZW50aWZpZXJdO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRvdWNoQnlLZXk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGpzL1RvdWNoQnlLZXkuanMiLCJpbXBvcnQgeyBESVJFQ1RJT04gfSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgRGlyZWN0aW9uIGZyb20gJy4vRGlyZWN0aW9uJztcblxuY2xhc3MgVG91Y2gge1xuICBjb25zdHJ1Y3Rvcih0b3VjaCkge1xuICAgIHRoaXMuaWRlbnRpZmllciA9IHRvdWNoLmlkZW50aWZpZXI7XG4gICAgdGhpcy5zdGFydFNjcmVlblggPSB0aGlzLnNjcmVlblggPSB0b3VjaC5zY3JlZW5YO1xuICAgIHRoaXMuc3RhcnRTY3JlZW5ZID0gdGhpcy5zY3JlZW5ZID0gdG91Y2guc2NyZWVuWTtcbiAgICB0aGlzLnN0YXJ0Q2xpZW50WCA9IHRoaXMuY2xpZW50WCA9IHRvdWNoLmNsaWVudFg7XG4gICAgdGhpcy5zdGFydENsaWVudFkgPSB0aGlzLmNsaWVudFkgPSB0b3VjaC5jbGllbnRZO1xuICAgIHRoaXMuc3RhcnRQYWdlWCA9IHRoaXMucGFnZVggPSB0b3VjaC5wYWdlWDtcbiAgICB0aGlzLnN0YXJ0UGFnZVkgPSB0aGlzLnBhZ2VZID0gdG91Y2gucGFnZVk7XG4gICAgdGhpcy50b3VjaCA9IHRvdWNoO1xuICB9XG5cbiAgdXBkYXRlVG91Y2godG91Y2gpIHtcbiAgICB0aGlzLnNjcmVlblggPSB0b3VjaC5zY3JlZW5YO1xuICAgIHRoaXMuc2NyZWVuWSA9IHRvdWNoLnNjcmVlblk7XG4gICAgdGhpcy5jbGllbnRYID0gdG91Y2guY2xpZW50WDtcbiAgICB0aGlzLmNsaWVudFkgPSB0b3VjaC5jbGllbnRZO1xuICAgIHRoaXMucGFnZVggPSB0b3VjaC5wYWdlWDtcbiAgICB0aGlzLnBhZ2VZID0gdG91Y2gucGFnZVk7XG4gIH1cblxuICByZXNldFN0YXJ0KHRvdWNoKSB7XG4gICAgdGhpcy5zdGFydFNjcmVlblggPSB0b3VjaC5zY3JlZW5YO1xuICAgIHRoaXMuc3RhcnRTY3JlZW5ZID0gdG91Y2guc2NyZWVuWTtcbiAgICB0aGlzLnN0YXJ0Q2xpZW50WCA9IHRvdWNoLmNsaWVudFg7XG4gICAgdGhpcy5zdGFydENsaWVudFkgPSB0b3VjaC5jbGllbnRZO1xuICAgIHRoaXMuc3RhcnRQYWdlWCA9IHRvdWNoLnBhZ2VYO1xuICAgIHRoaXMuc3RhcnRQYWdlWSA9IHRvdWNoLnBhZ2VZO1xuICB9XG5cbiAgZ2V0IGRpZlgoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhcnRDbGllbnRYIC0gdGhpcy5jbGllbnRYO1xuICB9XG5cbiAgZ2V0IGRpZlkoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhcnRDbGllbnRZIC0gdGhpcy5jbGllbnRZO1xuICB9XG5cbiAgZ2V0IGRpcmVjdGlvbigpIHtcbiAgICBsZXQgZGlyZWN0aW9uID0gbmV3IERpcmVjdGlvbigpO1xuXG4gICAgaWYgKHRoaXMuZGlmWCA8IDApIHtcbiAgICAgIGRpcmVjdGlvbi5ob3IgPSBESVJFQ1RJT04uUklHSFQ7XG4gICAgfSBlbHNlIGlmICh0aGlzLmRpZlggPiAwKSB7XG4gICAgICBkaXJlY3Rpb24uaG9yID0gRElSRUNUSU9OLkxFRlQ7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZGlmWSA8IDApIHtcbiAgICAgIGRpcmVjdGlvbi52ZXIgPSBESVJFQ1RJT04uRE9XTjtcbiAgICB9IGVsc2UgaWYgKHRoaXMuZGlmWSA+IDApIHtcbiAgICAgIGRpcmVjdGlvbi52ZXIgPSBESVJFQ1RJT04uVVA7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRpcmVjdGlvbjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUb3VjaDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8ganMvVG91Y2guanMiLCJleHBvcnQgY29uc3QgRElSRUNUSU9OID0ge1xuICBMRUZUOiAnTEVGVCcsXG4gIFJJR0hUOiAnUklHSFQnLFxuICBVUDogJ1VQJyxcbiAgRE9XTjogJ0RPV04nLFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBqcy9jb25zdGFudHMuanMiLCJjbGFzcyBEaXJlY3Rpb24ge1xuICBfaG9yID0gbnVsbDtcbiAgX3ZlciA9IG51bGw7XG4gIC8vXG4gIC8vIGNvbnN0cnVjdG9yKGhvciwgdmVyKSB7XG4gIC8vICAgdGhpcy5faG9yID0gaG9yO1xuICAvLyAgIHRoaXMuX3ZlciA9IHZlcjtcbiAgLy8gfVxuXG4gIGdldCBob3IoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2hvcjtcbiAgfVxuXG4gIHNldCBob3IodmFsdWUpIHtcbiAgICB0aGlzLl9ob3IgPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCB2ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZlcjtcbiAgfVxuXG4gIHNldCB2ZXIodmFsdWUpIHtcbiAgICB0aGlzLl92ZXIgPSB2YWx1ZTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEaXJlY3Rpb247XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8ganMvRGlyZWN0aW9uLmpzIiwiLy9pbXBvcnQgeyBESVJFQ1RJT04gfSBmcm9tICcuL2NvbnN0YW50cyc7XG4vL2ltcG9ydCBEaXJlY3Rpb24gZnJvbSAnLi9EaXJlY3Rpb24nO1xuXG5jbGFzcyBUb3VjaDIge1xuICBpc1N0YXJ0ZWQ7XG4gIHN0YXJ0WTtcbiAgY3VycmVudFk7XG4gIGlkZW50aWZpZXI7XG5cbiAgY29uc3RydWN0b3IodG91Y2gpIHtcbiAgICB0aGlzLnJlc2V0VG91Y2goKTtcbiAgfVxuXG4gIHN0YXJ0VG91Y2godG91Y2gpIHtcbiAgICB0aGlzLmlzU3RhcnRlZCA9IHRydWU7XG4gICAgdGhpcy5zdGFydFkgPSB0aGlzLmN1cnJlbnRZID0gdG91Y2guY2xpZW50WTtcbiAgICB0aGlzLmlkZW50aWZpZXIgPSB0b3VjaC5pZGVudGlmaWVyO1xuICB9XG5cbiAgY3VycmVudFRvdWNoKHRvdWNoKSB7XG4gICAgdGhpcy5jdXJyZW50WSA9IHRvdWNoLmNsaWVudFk7XG4gIH1cblxuICByZXNldFRvdWNoKCkge1xuICAgIHRoaXMuaXNTdGFydGVkID0gZmFsc2U7XG4gICAgdGhpcy5zdGFydFkgPSAwO1xuICAgIHRoaXMuY3VycmVudFkgPSAwO1xuICAgIHRoaXMuaWRlbnRpZmllciA9IG51bGw7XG4gIH1cblxuICBnZXQgZGlzdGFuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudFkgLSB0aGlzLnN0YXJ0WTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUb3VjaDI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGpzL1RvdWNoMi5qcyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBOzs7Ozs7O0FDN0RBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ1hBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7O0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNuRkE7QUFDQTs7Ozs7OztBQUNBOzs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFHQTs7Ozs7Ozs7Ozs7Ozs7O0FDMUJBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7O0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQUdBOzs7Ozs7Ozs7Ozs7QUM1REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBOzs7O0FBQ0E7QUFDQTs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7Ozs7OztBQUdBOzs7Ozs7Ozs7Ozs7Ozs7OztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7Ozs7O0FBR0E7OztBIiwic291cmNlUm9vdCI6IiJ9