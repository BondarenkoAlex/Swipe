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
  swipe.addListener();
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
    key: "addListener",
    value: function addListener() {
      this.elem.addEventListener("touchstart", this.handleStart.bind(this), false);
      this.elem.addEventListener("touchend", this.handleEnd.bind(this), false);
      this.elem.addEventListener("touchcancel", this.handleCancel.bind(this), false);
      this.elem.addEventListener("touchmove", this.handleMove.bind(this), false);
    }
  }, {
    key: "handleStart",
    value: function handleStart(evt) {
      var _this = this;

      evt.preventDefault();
      console.log("touchstart.");

      var touches = evt.changedTouches;
      touches.forEach(function (item) {
        _this._touchByKey.setTouch(item);
      });
      //this._touchByKey.setTouch(touches);
    }
  }, {
    key: "handleMove",
    value: function handleMove(evt) {
      var _this2 = this;

      evt.preventDefault();
      console.log("handlemove");

      var touches = evt.changedTouches;
      touches.forEach(function (item) {
        _this2._touchByKey.updateTouch(item);
      });

      console.log(this._touchByKey);
    }
  }, {
    key: "handleEnd",
    value: function handleEnd(evt) {
      evt.preventDefault();
      console.log("touchend");

      //var touches = evt.changedTouches;
      //touches.forEach((item)=>{this._touchByKey.delete(item);});
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIDQ3ODZkY2NhMjdmMTJlZjVhNGI1Iiwid2VicGFjazovLy9qcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vanMvU3dpcGUuanMiLCJ3ZWJwYWNrOi8vL2pzL1RvdWNoQnlLZXkuanMiLCJ3ZWJwYWNrOi8vL2pzL1RvdWNoLmpzIiwid2VicGFjazovLy9qcy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vL2pzL0RpcmVjdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA0Nzg2ZGNjYTI3ZjEyZWY1YTRiNSIsImltcG9ydCBTd2lwZSBmcm9tICcuL1N3aXBlJztcblxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgc3RhcnR1cCgpO1xufTtcblxuLy9sZXQgc3dpcGUgPSBuZXcgU3dpcGUoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwdHJcIikpO1xuXG5mdW5jdGlvbiBzdGFydHVwKCkge1xuICBsZXQgc3dpcGUgPSBuZXcgU3dpcGUoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwdHJcIikpO1xuICBzd2lwZS5hZGRMaXN0ZW5lcigpO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGpzL2luZGV4LmpzIiwiaW1wb3J0IFRvdWNoQnlLZXkgZnJvbSAnLi9Ub3VjaEJ5S2V5LmpzJztcblxuY2xhc3MgU3dpcGUge1xuXG4gIGNvbnN0cnVjdG9yKGVsZW0pIHtcbiAgICAvL2RlYnVnZ2VyO1xuICAgIHRoaXMuZWxlbSA9IGVsZW0gfHwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwdHJcIik7XG4gICAgdGhpcy5fdG91Y2hCeUtleSA9IG5ldyBUb3VjaEJ5S2V5KCk7XG4gIH1cblxuICBhZGRMaXN0ZW5lcigpIHtcbiAgICB0aGlzLmVsZW0uYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgdGhpcy5oYW5kbGVTdGFydC5iaW5kKHRoaXMpLCBmYWxzZSk7XG4gICAgdGhpcy5lbGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLCB0aGlzLmhhbmRsZUVuZC5iaW5kKHRoaXMpLCBmYWxzZSk7XG4gICAgdGhpcy5lbGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGNhbmNlbFwiLCB0aGlzLmhhbmRsZUNhbmNlbC5iaW5kKHRoaXMpLCBmYWxzZSk7XG4gICAgdGhpcy5lbGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIiwgdGhpcy5oYW5kbGVNb3ZlLmJpbmQodGhpcyksIGZhbHNlKTtcbiAgfVxuXG4gIGhhbmRsZVN0YXJ0KGV2dCkge1xuICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnNvbGUubG9nKFwidG91Y2hzdGFydC5cIik7XG5cbiAgICB2YXIgdG91Y2hlcyA9IGV2dC5jaGFuZ2VkVG91Y2hlcztcbiAgICB0b3VjaGVzLmZvckVhY2goKGl0ZW0pPT57dGhpcy5fdG91Y2hCeUtleS5zZXRUb3VjaChpdGVtKTt9KVxuICAgIC8vdGhpcy5fdG91Y2hCeUtleS5zZXRUb3VjaCh0b3VjaGVzKTtcblxuICB9XG5cbiAgaGFuZGxlTW92ZShldnQpIHtcbiAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zb2xlLmxvZyhcImhhbmRsZW1vdmVcIik7XG5cbiAgICB2YXIgdG91Y2hlcyA9IGV2dC5jaGFuZ2VkVG91Y2hlcztcbiAgICB0b3VjaGVzLmZvckVhY2goKGl0ZW0pPT57dGhpcy5fdG91Y2hCeUtleS51cGRhdGVUb3VjaChpdGVtKTt9KTtcblxuICAgIGNvbnNvbGUubG9nKHRoaXMuX3RvdWNoQnlLZXkpO1xuICB9XG5cbiAgaGFuZGxlRW5kKGV2dCkge1xuICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnNvbGUubG9nKFwidG91Y2hlbmRcIik7XG5cbiAgICAvL3ZhciB0b3VjaGVzID0gZXZ0LmNoYW5nZWRUb3VjaGVzO1xuICAgIC8vdG91Y2hlcy5mb3JFYWNoKChpdGVtKT0+e3RoaXMuX3RvdWNoQnlLZXkuZGVsZXRlKGl0ZW0pO30pO1xuICAgIC8vdGhpcy5fdG91Y2hCeUtleS5kZWxldGUodG91Y2hlcylcbiAgfVxuXG4gIGhhbmRsZUNhbmNlbChldnQpIHtcbiAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zb2xlLmxvZyhcInRvdWNoY2FuY2VsLlwiKTtcbiAgICB2YXIgdG91Y2hlcyA9IGV2dC5jaGFuZ2VkVG91Y2hlcztcblxuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3dpcGU7XG5cblxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8ganMvU3dpcGUuanMiLCJpbXBvcnQgVG91Y2ggZnJvbSAnLi9Ub3VjaC5qcyc7XG5cbmNsYXNzIFRvdWNoQnlLZXkge1xuICAvL19ieUtleSA9IHt9O1xuXG4gIHNldFRvdWNoKHRvdWNoKSB7XG4gICAgY29uc3QgeyBpZGVudGlmaWVyIH0gPSB0b3VjaDtcbiAgICB0aGlzW2lkZW50aWZpZXJdID0gbmV3IFRvdWNoKHRvdWNoKTtcbiAgfVxuXG4gIHVwZGF0ZVRvdWNoKHRvdWNoKSB7XG4gICAgY29uc3QgeyBpZGVudGlmaWVyIH0gPSB0b3VjaDtcbiAgICB0aGlzW2lkZW50aWZpZXJdLnVwZGF0ZVRvdWNoKHRvdWNoKTtcbiAgfVxuXG4gIGRlbGV0ZSh0b3VjaCkge1xuICAgIGNvbnN0IHsgaWRlbnRpZmllciB9ID0gdG91Y2g7XG4gICAgZGVsZXRlIHRoaXNbaWRlbnRpZmllcl07XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVG91Y2hCeUtleTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8ganMvVG91Y2hCeUtleS5qcyIsImltcG9ydCB7RElSRUNUSU9OfSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgRGlyZWN0aW9uIGZyb20gJy4vRGlyZWN0aW9uJztcblxuXG5jbGFzcyBUb3VjaCB7XG4gIGNvbnN0cnVjdG9yKHRvdWNoKSB7XG4gICAgdGhpcy5pZGVudGlmaWVyID0gdG91Y2guaWRlbnRpZmllcjtcbiAgICB0aGlzLnN0YXJ0U2NyZWVuWCA9IHRoaXMuc2NyZWVuWCA9IHRvdWNoLnNjcmVlblg7XG4gICAgdGhpcy5zdGFydFNjcmVlblkgPSB0aGlzLnNjcmVlblkgPSB0b3VjaC5zY3JlZW5ZO1xuICAgIHRoaXMuc3RhcnRDbGllbnRYID0gdGhpcy5jbGllbnRYID0gdG91Y2guY2xpZW50WDtcbiAgICB0aGlzLnN0YXJ0Q2xpZW50WSA9IHRoaXMuY2xpZW50WSA9IHRvdWNoLmNsaWVudFk7XG4gICAgdGhpcy5zdGFydFBhZ2VYID0gdGhpcy5wYWdlWCA9IHRvdWNoLnBhZ2VYO1xuICAgIHRoaXMuc3RhcnRQYWdlWSA9IHRoaXMucGFnZVkgPSB0b3VjaC5wYWdlWTtcbiAgICB0aGlzLl90b3VjaCA9IHRvdWNoO1xuICB9XG5cbiAgdXBkYXRlVG91Y2godG91Y2gpIHtcbiAgICB0aGlzLnNjcmVlblggPSB0b3VjaC5zY3JlZW5YO1xuICAgIHRoaXMuc2NyZWVuWSA9IHRvdWNoLnNjcmVlblk7XG4gICAgdGhpcy5jbGllbnRYID0gdG91Y2guY2xpZW50WDtcbiAgICB0aGlzLmNsaWVudFkgPSB0b3VjaC5jbGllbnRZO1xuICAgIHRoaXMucGFnZVggPSB0b3VjaC5wYWdlWDtcbiAgICB0aGlzLnBhZ2VZID0gdG91Y2gucGFnZVk7XG4gIH1cblxuICBnZXQgZGlmWCgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGFydENsaWVudFggLSB0aGlzLmNsaWVudFg7XG4gIH1cblxuICBnZXQgZGlmWSgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGFydENsaWVudFkgLSB0aGlzLmNsaWVudFk7XG4gIH1cblxuICBnZXQgZGlyZWN0aW9uKCkge1xuICAgIGxldCBkaXJlY3Rpb24gPSBuZXcgRGlyZWN0aW9uKCk7XG5cbiAgICBpZiAodGhpcy5kaWZYIDwgMCkge1xuICAgICAgZGlyZWN0aW9uLmhvciA9IERJUkVDVElPTi5SSUdIVDtcbiAgICB9IGVsc2UgaWYgKCB0aGlzLmRpZlggPiAwICkge1xuICAgICAgZGlyZWN0aW9uLmhvciA9IERJUkVDVElPTi5MRUZUO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmRpZlkgPCAwKSB7XG4gICAgICBkaXJlY3Rpb24udmVyID0gRElSRUNUSU9OLkRPV047XG4gICAgfSBlbHNlIGlmICggdGhpcy5kaWZZID4gMCApIHtcbiAgICAgIGRpcmVjdGlvbi52ZXIgPSBESVJFQ1RJT04uVVA7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRpcmVjdGlvbjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUb3VjaDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8ganMvVG91Y2guanMiLCJleHBvcnQgY29uc3QgRElSRUNUSU9OID0ge1xuICBMRUZUOiAnTEVGVCcsXG4gIFJJR0hUOiAnUklHSFQnLFxuICBVUDogJ1VQJyxcbiAgRE9XTjogJ0RPV04nLFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBqcy9jb25zdGFudHMuanMiLCJjbGFzcyBEaXJlY3Rpb24ge1xuICBfaG9yID0gbnVsbDtcbiAgX3ZlciA9IG51bGw7XG4gIC8vXG4gIC8vIGNvbnN0cnVjdG9yKGhvciwgdmVyKSB7XG4gIC8vICAgdGhpcy5faG9yID0gaG9yO1xuICAvLyAgIHRoaXMuX3ZlciA9IHZlcjtcbiAgLy8gfVxuXG4gIGdldCBob3IoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2hvcjtcbiAgfVxuXG4gIHNldCBob3IodmFsdWUpIHtcbiAgICB0aGlzLl9ob3IgPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCB2ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZlcjtcbiAgfVxuXG4gIHNldCB2ZXIodmFsdWUpIHtcbiAgICB0aGlzLl92ZXIgPSB2YWx1ZTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEaXJlY3Rpb247XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8ganMvRGlyZWN0aW9uLmpzIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0E7Ozs7Ozs7QUM3REE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDWEE7QUFDQTs7Ozs7OztBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7QUFJQTs7Ozs7Ozs7Ozs7Ozs7O0FDdkRBO0FBQ0E7Ozs7Ozs7QUFDQTs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBR0E7Ozs7Ozs7Ozs7Ozs7OztBQ3JCQTtBQUNBO0FBQUE7QUFDQTs7Ozs7OztBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFHQTs7Ozs7Ozs7Ozs7O0FDcERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7OztBQUNBO0FBQ0E7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7Ozs7QUFHQTs7O0EiLCJzb3VyY2VSb290IjoiIn0=