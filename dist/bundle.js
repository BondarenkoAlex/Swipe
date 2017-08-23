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

    debugger;
    this.elem = elem || document.getElementById("ptr");
    this._touchByKey = new _TouchByKey2.default();
  }

  _createClass(Swipe, [{
    key: "listener",
    value: function listener() {
      this.elem.addEventListener("touchstart", this.handleStart, false);
      this.elem.addEventListener("touchend", this.handleEnd, false);
      this.elem.addEventListener("touchcancel", this.handleCancel, false);
      this.elem.addEventListener("touchmove", this.handleMove, false);
    }
  }, {
    key: "handleStart",
    value: function handleStart(evt) {
      evt.preventDefault();
      log("touchstart.");

      var touches = evt.changedTouches[0];
      this._touchByKey.setTouch(touches);
    }
  }, {
    key: "handleMove",
    value: function handleMove(evt) {
      evt.preventDefault();

      var touches = evt.changedTouches[0];
      this._touchByKey.updateTouch(touches);
    }
  }, {
    key: "handleEnd",
    value: function handleEnd(evt) {
      evt.preventDefault();
      log("touchend");

      var touches = evt.changedTouches[0];
      this._touchByKey.delete(touches);
    }
  }, {
    key: "handleCancel",
    value: function handleCancel(evt) {
      evt.preventDefault();
      log("touchcancel.");
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

    this.instanceProperty = "bork";
    this._byKey = {};
  }

  _createClass(TouchByKey, [{
    key: "setTouch",
    value: function setTouch(touch) {
      var identifier = touch.identifier;

      this._byKey[identifier] = new _Touch2.default(touch);
    }
  }, {
    key: "updateTouch",
    value: function updateTouch(touch) {
      var identifier = touch.identifier;

      this._byKey[identifier].updateTouch(touch);
    }
  }, {
    key: "delete",
    value: function _delete(touch) {
      var identifier = touch.identifier;

      delete this._byKey[identifier];
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
  }

  _createClass(Touch, [{
    key: "updateTouch",
    value: function updateTouch(touch) {
      this.screenX = touch.screenX;
      this.screenY = touch.screenY;
      this.clientX = touch.clientX;
      this.clientY = touch.clientY;
      this.pageX = touch.pageX;
      this.pageY = touch.pageY;
    }
  }]);

  return Touch;
}();

exports.default = Touch;

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIGZhNDE4NmQ3ZjhhMDQwN2ZlMTg4Iiwid2VicGFjazovLy9qcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vanMvU3dpcGUuanMiLCJ3ZWJwYWNrOi8vL2pzL1RvdWNoQnlLZXkuanMiLCJ3ZWJwYWNrOi8vL2pzL1RvdWNoLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGZhNDE4NmQ3ZjhhMDQwN2ZlMTg4IiwiaW1wb3J0IFN3aXBlIGZyb20gJy4vU3dpcGUnO1xuXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICBzdGFydHVwKCk7XG59O1xuXG4vL2xldCBzd2lwZSA9IG5ldyBTd2lwZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInB0clwiKSk7XG5cbmZ1bmN0aW9uIHN0YXJ0dXAoKSB7XG4gIGxldCBzd2lwZSA9IG5ldyBTd2lwZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInB0clwiKSk7XG4gIHN3aXBlLmxpc3RlbmVyKCk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8ganMvaW5kZXguanMiLCJpbXBvcnQgVG91Y2hCeUtleSBmcm9tICcuL1RvdWNoQnlLZXkuanMnO1xuXG5jbGFzcyBTd2lwZSB7XG5cbiAgY29uc3RydWN0b3IoZWxlbSkge1xuICAgIGRlYnVnZ2VyO1xuICAgIHRoaXMuZWxlbSA9IGVsZW0gfHwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwdHJcIik7XG4gICAgdGhpcy5fdG91Y2hCeUtleSA9IG5ldyBUb3VjaEJ5S2V5KCk7XG4gIH1cblxuICBsaXN0ZW5lcigpIHtcbiAgICB0aGlzLmVsZW0uYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgdGhpcy5oYW5kbGVTdGFydCwgZmFsc2UpO1xuICAgIHRoaXMuZWxlbS5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIiwgdGhpcy5oYW5kbGVFbmQsIGZhbHNlKTtcbiAgICB0aGlzLmVsZW0uYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoY2FuY2VsXCIsIHRoaXMuaGFuZGxlQ2FuY2VsLCBmYWxzZSk7XG4gICAgdGhpcy5lbGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIiwgdGhpcy5oYW5kbGVNb3ZlLCBmYWxzZSk7XG4gIH1cblxuICBoYW5kbGVTdGFydChldnQpIHtcbiAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICBsb2coXCJ0b3VjaHN0YXJ0LlwiKTtcblxuICAgIHZhciB0b3VjaGVzID0gZXZ0LmNoYW5nZWRUb3VjaGVzWzBdO1xuICAgIHRoaXMuX3RvdWNoQnlLZXkuc2V0VG91Y2godG91Y2hlcylcblxuICB9XG5cbiAgaGFuZGxlTW92ZShldnQpIHtcbiAgICBldnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIHZhciB0b3VjaGVzID0gZXZ0LmNoYW5nZWRUb3VjaGVzWzBdO1xuICAgIHRoaXMuX3RvdWNoQnlLZXkudXBkYXRlVG91Y2godG91Y2hlcylcblxuICB9XG5cbiAgaGFuZGxlRW5kKGV2dCkge1xuICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGxvZyhcInRvdWNoZW5kXCIpO1xuXG5cbiAgICB2YXIgdG91Y2hlcyA9IGV2dC5jaGFuZ2VkVG91Y2hlc1swXTtcbiAgICB0aGlzLl90b3VjaEJ5S2V5LmRlbGV0ZSh0b3VjaGVzKVxuICB9XG5cbiAgaGFuZGxlQ2FuY2VsKGV2dCkge1xuICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGxvZyhcInRvdWNoY2FuY2VsLlwiKTtcbiAgICB2YXIgdG91Y2hlcyA9IGV2dC5jaGFuZ2VkVG91Y2hlcztcblxuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3dpcGU7XG5cblxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8ganMvU3dpcGUuanMiLCJpbXBvcnQgVG91Y2ggZnJvbSAnLi9Ub3VjaC5qcyc7XG5cbmNsYXNzIFRvdWNoQnlLZXkge1xuICBpbnN0YW5jZVByb3BlcnR5ID0gXCJib3JrXCI7XG4gIF9ieUtleSA9IHt9O1xuXG4gIHNldFRvdWNoKHRvdWNoKSB7XG4gICAgY29uc3QgeyBpZGVudGlmaWVyIH0gPSB0b3VjaDtcbiAgICB0aGlzLl9ieUtleVtpZGVudGlmaWVyXSA9IG5ldyBUb3VjaCh0b3VjaCk7XG4gIH1cblxuICB1cGRhdGVUb3VjaCh0b3VjaCkge1xuICAgIGNvbnN0IHsgaWRlbnRpZmllciB9ID0gdG91Y2g7XG4gICAgdGhpcy5fYnlLZXlbaWRlbnRpZmllcl0udXBkYXRlVG91Y2godG91Y2gpO1xuICB9XG5cbiAgZGVsZXRlKHRvdWNoKSB7XG4gICAgY29uc3QgeyBpZGVudGlmaWVyIH0gPSB0b3VjaDtcbiAgICBkZWxldGUgdGhpcy5fYnlLZXlbaWRlbnRpZmllcl07XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVG91Y2hCeUtleTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8ganMvVG91Y2hCeUtleS5qcyIsImNsYXNzIFRvdWNoIHtcbiAgY29uc3RydWN0b3IodG91Y2gpIHtcbiAgICB0aGlzLmlkZW50aWZpZXIgPSB0b3VjaC5pZGVudGlmaWVyO1xuICAgIHRoaXMuc3RhcnRTY3JlZW5YID0gdGhpcy5zY3JlZW5YID0gdG91Y2guc2NyZWVuWDtcbiAgICB0aGlzLnN0YXJ0U2NyZWVuWSA9IHRoaXMuc2NyZWVuWSA9IHRvdWNoLnNjcmVlblk7XG4gICAgdGhpcy5zdGFydENsaWVudFggPSB0aGlzLmNsaWVudFggPSB0b3VjaC5jbGllbnRYO1xuICAgIHRoaXMuc3RhcnRDbGllbnRZID0gdGhpcy5jbGllbnRZID0gdG91Y2guY2xpZW50WTtcbiAgICB0aGlzLnN0YXJ0UGFnZVggPSB0aGlzLnBhZ2VYID0gdG91Y2gucGFnZVg7XG4gICAgdGhpcy5zdGFydFBhZ2VZID0gdGhpcy5wYWdlWSA9IHRvdWNoLnBhZ2VZO1xuICB9XG5cbiAgdXBkYXRlVG91Y2godG91Y2gpIHtcbiAgICB0aGlzLnNjcmVlblggPSB0b3VjaC5zY3JlZW5YO1xuICAgIHRoaXMuc2NyZWVuWSA9IHRvdWNoLnNjcmVlblk7XG4gICAgdGhpcy5jbGllbnRYID0gdG91Y2guY2xpZW50WDtcbiAgICB0aGlzLmNsaWVudFkgPSB0b3VjaC5jbGllbnRZO1xuICAgIHRoaXMucGFnZVggPSB0b3VjaC5wYWdlWDtcbiAgICB0aGlzLnBhZ2VZID0gdG91Y2gucGFnZVk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVG91Y2g7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGpzL1RvdWNoLmpzIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0E7Ozs7Ozs7QUM3REE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDWEE7QUFDQTs7Ozs7OztBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7O0FBSUE7Ozs7Ozs7Ozs7Ozs7OztBQ3BEQTtBQUNBOzs7Ozs7O0FBQ0E7Ozs7QUFDQTtBQUNBOzs7OztBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQUdBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3RCQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBR0E7OztBIiwic291cmNlUm9vdCI6IiJ9