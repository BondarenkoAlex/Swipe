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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Swipe = function () {
  function Swipe(elem) {
    _classCallCheck(this, Swipe);

    //debugger;
    this.elem = elem || document.getElementById("ptr");
    this._touchByKey = new _TouchByKey2.default();
  }

  _createClass(Swipe, [{
    key: "listener",
    value: function listener() {
      this.elem.addEventListener("touchstart", this.handleStart.bind(this), false);
      this.elem.addEventListener("touchend", this.handleEnd.bind(this), false);
      this.elem.addEventListener("touchcancel", this.handleCancel.bind(this), false);
      this.elem.addEventListener("touchmove", this.handleMove.bind(this), false);
    }
  }, {
    key: "handleStart",
    value: function handleStart(evt) {
      evt.preventDefault();
      console.log("touchstart.");

      var touches = evt.changedTouches[0];
      this._touchByKey.setTouch(touches);
    }
  }, {
    key: "handleMove",
    value: function handleMove(evt) {
      evt.preventDefault();
      console.log("handlemove");
      var touches = evt.changedTouches[0];
      this._touchByKey.updateTouch(touches);
      console.log(this._touchByKey);
    }
  }, {
    key: "handleEnd",
    value: function handleEnd(evt) {
      evt.preventDefault();
      console.log("touchend");

      var touches = evt.changedTouches[0];
      //this._touchByKey.delete(touches)
    }
  }, {
    key: "handleCancel",
    value: function handleCancel(evt) {
      evt.preventDefault();
      console.log("touchcancel.");
      var touches = evt.changedTouches;
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
    this._touch = touch;
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

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIDlkOTc4MTMwOWZmMGEyZmUxOGNmIiwid2VicGFjazovLy9qcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vanMvU3dpcGUuanMiLCJ3ZWJwYWNrOi8vL2pzL1RvdWNoQnlLZXkuanMiLCJ3ZWJwYWNrOi8vL2pzL1RvdWNoLmpzIiwid2VicGFjazovLy9qcy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vL2pzL0RpcmVjdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA5ZDk3ODEzMDlmZjBhMmZlMThjZiIsImltcG9ydCBTd2lwZSBmcm9tICcuL1N3aXBlJztcclxuXHJcbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgc3RhcnR1cCgpO1xyXG59O1xyXG5cclxuLy9sZXQgc3dpcGUgPSBuZXcgU3dpcGUoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwdHJcIikpO1xyXG5cclxuZnVuY3Rpb24gc3RhcnR1cCgpIHtcclxuICBsZXQgc3dpcGUgPSBuZXcgU3dpcGUoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwdHJcIikpO1xyXG4gIHN3aXBlLmxpc3RlbmVyKCk7XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGpzL2luZGV4LmpzIiwiaW1wb3J0IFRvdWNoQnlLZXkgZnJvbSAnLi9Ub3VjaEJ5S2V5LmpzJztcclxuXHJcbmNsYXNzIFN3aXBlIHtcclxuXHJcbiAgY29uc3RydWN0b3IoZWxlbSkge1xyXG4gICAgLy9kZWJ1Z2dlcjtcclxuICAgIHRoaXMuZWxlbSA9IGVsZW0gfHwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwdHJcIik7XHJcbiAgICB0aGlzLl90b3VjaEJ5S2V5ID0gbmV3IFRvdWNoQnlLZXkoKTtcclxuICB9XHJcblxyXG4gIGxpc3RlbmVyKCkge1xyXG4gICAgdGhpcy5lbGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIHRoaXMuaGFuZGxlU3RhcnQuYmluZCh0aGlzKSwgZmFsc2UpO1xyXG4gICAgdGhpcy5lbGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLCB0aGlzLmhhbmRsZUVuZC5iaW5kKHRoaXMpLCBmYWxzZSk7XHJcbiAgICB0aGlzLmVsZW0uYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoY2FuY2VsXCIsIHRoaXMuaGFuZGxlQ2FuY2VsLmJpbmQodGhpcyksIGZhbHNlKTtcclxuICAgIHRoaXMuZWxlbS5hZGRFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsIHRoaXMuaGFuZGxlTW92ZS5iaW5kKHRoaXMpLCBmYWxzZSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVTdGFydChldnQpIHtcclxuICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc29sZS5sb2coXCJ0b3VjaHN0YXJ0LlwiKTtcclxuXHJcbiAgICB2YXIgdG91Y2hlcyA9IGV2dC5jaGFuZ2VkVG91Y2hlc1swXTtcclxuICAgIHRoaXMuX3RvdWNoQnlLZXkuc2V0VG91Y2godG91Y2hlcylcclxuXHJcbiAgfVxyXG5cclxuICBoYW5kbGVNb3ZlKGV2dCkge1xyXG4gICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zb2xlLmxvZyhcImhhbmRsZW1vdmVcIik7XHJcbiAgICB2YXIgdG91Y2hlcyA9IGV2dC5jaGFuZ2VkVG91Y2hlc1swXTtcclxuICAgIHRoaXMuX3RvdWNoQnlLZXkudXBkYXRlVG91Y2godG91Y2hlcylcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuX3RvdWNoQnlLZXkpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlRW5kKGV2dCkge1xyXG4gICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zb2xlLmxvZyhcInRvdWNoZW5kXCIpO1xyXG5cclxuXHJcbiAgICB2YXIgdG91Y2hlcyA9IGV2dC5jaGFuZ2VkVG91Y2hlc1swXTtcclxuICAgIC8vdGhpcy5fdG91Y2hCeUtleS5kZWxldGUodG91Y2hlcylcclxuICB9XHJcblxyXG4gIGhhbmRsZUNhbmNlbChldnQpIHtcclxuICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc29sZS5sb2coXCJ0b3VjaGNhbmNlbC5cIik7XHJcbiAgICB2YXIgdG91Y2hlcyA9IGV2dC5jaGFuZ2VkVG91Y2hlcztcclxuXHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3dpcGU7XHJcblxyXG5cclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBqcy9Td2lwZS5qcyIsImltcG9ydCBUb3VjaCBmcm9tICcuL1RvdWNoLmpzJztcclxuXHJcbmNsYXNzIFRvdWNoQnlLZXkge1xyXG4gIC8vX2J5S2V5ID0ge307XHJcblxyXG4gIHNldFRvdWNoKHRvdWNoKSB7XHJcbiAgICBjb25zdCB7IGlkZW50aWZpZXIgfSA9IHRvdWNoO1xyXG4gICAgdGhpc1tpZGVudGlmaWVyXSA9IG5ldyBUb3VjaCh0b3VjaCk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVUb3VjaCh0b3VjaCkge1xyXG4gICAgY29uc3QgeyBpZGVudGlmaWVyIH0gPSB0b3VjaDtcclxuICAgIHRoaXNbaWRlbnRpZmllcl0udXBkYXRlVG91Y2godG91Y2gpO1xyXG4gIH1cclxuXHJcbiAgZGVsZXRlKHRvdWNoKSB7XHJcbiAgICBjb25zdCB7IGlkZW50aWZpZXIgfSA9IHRvdWNoO1xyXG4gICAgZGVsZXRlIHRoaXNbaWRlbnRpZmllcl07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb3VjaEJ5S2V5O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBqcy9Ub3VjaEJ5S2V5LmpzIiwiaW1wb3J0IHtESVJFQ1RJT059IGZyb20gJy4vY29uc3RhbnRzJztcclxuaW1wb3J0IERpcmVjdGlvbiBmcm9tICcuL0RpcmVjdGlvbic7XHJcblxyXG5cclxuY2xhc3MgVG91Y2gge1xyXG4gIGNvbnN0cnVjdG9yKHRvdWNoKSB7XHJcbiAgICB0aGlzLmlkZW50aWZpZXIgPSB0b3VjaC5pZGVudGlmaWVyO1xyXG4gICAgdGhpcy5zdGFydFNjcmVlblggPSB0aGlzLnNjcmVlblggPSB0b3VjaC5zY3JlZW5YO1xyXG4gICAgdGhpcy5zdGFydFNjcmVlblkgPSB0aGlzLnNjcmVlblkgPSB0b3VjaC5zY3JlZW5ZO1xyXG4gICAgdGhpcy5zdGFydENsaWVudFggPSB0aGlzLmNsaWVudFggPSB0b3VjaC5jbGllbnRYO1xyXG4gICAgdGhpcy5zdGFydENsaWVudFkgPSB0aGlzLmNsaWVudFkgPSB0b3VjaC5jbGllbnRZO1xyXG4gICAgdGhpcy5zdGFydFBhZ2VYID0gdGhpcy5wYWdlWCA9IHRvdWNoLnBhZ2VYO1xyXG4gICAgdGhpcy5zdGFydFBhZ2VZID0gdGhpcy5wYWdlWSA9IHRvdWNoLnBhZ2VZO1xyXG4gICAgdGhpcy5fdG91Y2ggPSB0b3VjaDtcclxuICB9XHJcblxyXG4gIHVwZGF0ZVRvdWNoKHRvdWNoKSB7XHJcbiAgICB0aGlzLnNjcmVlblggPSB0b3VjaC5zY3JlZW5YO1xyXG4gICAgdGhpcy5zY3JlZW5ZID0gdG91Y2guc2NyZWVuWTtcclxuICAgIHRoaXMuY2xpZW50WCA9IHRvdWNoLmNsaWVudFg7XHJcbiAgICB0aGlzLmNsaWVudFkgPSB0b3VjaC5jbGllbnRZO1xyXG4gICAgdGhpcy5wYWdlWCA9IHRvdWNoLnBhZ2VYO1xyXG4gICAgdGhpcy5wYWdlWSA9IHRvdWNoLnBhZ2VZO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGRpZlgoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zdGFydENsaWVudFggLSB0aGlzLmNsaWVudFg7XHJcbiAgfVxyXG5cclxuICBnZXQgZGlmWSgpIHtcclxuICAgIHJldHVybiB0aGlzLnN0YXJ0Q2xpZW50WSAtIHRoaXMuY2xpZW50WTtcclxuICB9XHJcblxyXG4gIGdldCBkaXJlY3Rpb24oKSB7XHJcbiAgICBsZXQgZGlyZWN0aW9uID0gbmV3IERpcmVjdGlvbigpO1xyXG5cclxuICAgIGlmICh0aGlzLmRpZlggPCAwKSB7XHJcbiAgICAgIGRpcmVjdGlvbi5ob3IgPSBESVJFQ1RJT04uUklHSFQ7XHJcbiAgICB9IGVsc2UgaWYgKCB0aGlzLmRpZlggPiAwICkge1xyXG4gICAgICBkaXJlY3Rpb24uaG9yID0gRElSRUNUSU9OLkxFRlQ7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuZGlmWSA8IDApIHtcclxuICAgICAgZGlyZWN0aW9uLnZlciA9IERJUkVDVElPTi5ET1dOO1xyXG4gICAgfSBlbHNlIGlmICggdGhpcy5kaWZZID4gMCApIHtcclxuICAgICAgZGlyZWN0aW9uLnZlciA9IERJUkVDVElPTi5VUDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZGlyZWN0aW9uO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVG91Y2g7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGpzL1RvdWNoLmpzIiwiZXhwb3J0IGNvbnN0IERJUkVDVElPTiA9IHtcclxuICBMRUZUOiAnTEVGVCcsXHJcbiAgUklHSFQ6ICdSSUdIVCcsXHJcbiAgVVA6ICdVUCcsXHJcbiAgRE9XTjogJ0RPV04nLFxyXG59O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8ganMvY29uc3RhbnRzLmpzIiwiY2xhc3MgRGlyZWN0aW9uIHtcclxuICBfaG9yID0gbnVsbDtcclxuICBfdmVyID0gbnVsbDtcclxuICAvL1xyXG4gIC8vIGNvbnN0cnVjdG9yKGhvciwgdmVyKSB7XHJcbiAgLy8gICB0aGlzLl9ob3IgPSBob3I7XHJcbiAgLy8gICB0aGlzLl92ZXIgPSB2ZXI7XHJcbiAgLy8gfVxyXG5cclxuICBnZXQgaG9yKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2hvcjtcclxuICB9XHJcblxyXG4gIHNldCBob3IodmFsdWUpIHtcclxuICAgIHRoaXMuX2hvciA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHZlcigpIHtcclxuICAgIHJldHVybiB0aGlzLl92ZXI7XHJcbiAgfVxyXG5cclxuICBzZXQgdmVyKHZhbHVlKSB7XHJcbiAgICB0aGlzLl92ZXIgPSB2YWx1ZTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERpcmVjdGlvbjtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGpzL0RpcmVjdGlvbi5qcyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBOzs7Ozs7O0FDN0RBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ1hBO0FBQ0E7Ozs7Ozs7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7O0FBSUE7Ozs7Ozs7Ozs7Ozs7OztBQ3BEQTtBQUNBOzs7Ozs7O0FBQ0E7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQUdBOzs7Ozs7Ozs7Ozs7Ozs7QUNyQkE7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBR0E7Ozs7Ozs7Ozs7OztBQ3BEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7QUFDQTtBQUNBOzs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7O0FBR0E7OztBIiwic291cmNlUm9vdCI6IiJ9