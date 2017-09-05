import TouchElementList from './TouchElementList';
import { DIRECTION } from './constants';
import {
  isPromise,
  isArray,
  isString,
  isObject,
} from './utils/check';
import getTranslateYStyle from './utils/getTranslateYStyle';
import getTransitionStyle from './utils/getTransitionStyle';
import resistanceDistance from './utils/resistanceDistance';

const classNames = {
  COMMON: ["onrefresh"],
  [DIRECTION.UP]: ["onrefresh-up"],
  [DIRECTION.DOWN]: ["onrefresh-down"],
};

class Swipe {
  constructor(elem, distance = 50, resistance = 2, classNames = {}) {
    this.listElement = elem;
    this.distance = distance;
    this.resistance = resistance;
    this.classNames = classNames;
    this._grandpa = elem.parentElement.parentElement;
    this._touchElements = new TouchElementList();
    this._isActive = false;
    this._distanceReverse = ~distance + 1; // reverse
    this._isRefreshActive = false;
    this._handleStart = this._handleStart.bind(this);
    this._handleMove = this._handleMove.bind(this);
    this._handleEnd = this._handleEnd.bind(this);
    this._handleCancel = this._handleCancel.bind(this);
    this._handleTransitionEnd = this._handleTransitionEnd.bind(this);
  }

  get classNames() {
    return this._classNames;
  }

  set classNames(value) {
    if (!isObject(value)) {
      throw new Error('classNames must be a object');
    }
    this._classNames = this._mergeClassNames(value);
  }

  _mergeClassNames(clsNames) {
    let result = {};
    Object.keys(classNames).forEach((key) => {
      const value = classNames[key];
      const cls = clsNames[key];
      if (isArray(cls)) {
        result[key] = [...value, ...cls];
      } else if (isString(cls)) {
        result[key] = [...value, cls];
      } else {
        result[key] = value;
      }
    });
    return result;
  }

  addListener() {
    this.listElement.addEventListener("touchstart", this._handleStart, false);
    this.listElement.addEventListener("touchmove", this._handleMove, false);
    this.listElement.addEventListener("touchend", this._handleEnd, false);
    this.listElement.addEventListener("touchcancel", this._handleCancel, false);
  }

  removeListener() {
    this.listElement.removeEventListener("touchstart", this._handleStart, false);
    this.listElement.removeEventListener("touchmove", this._handleMove, false);
    this.listElement.removeEventListener("touchend", this._handleEnd, false);
    this.listElement.removeEventListener("touchcancel", this._handleCancel, false);
    this._removeListenerTransitionend();
  }

  _addListenerTransitionend() {
    this.listElement.addEventListener("transitionend", this._handleTransitionEnd, false);
    this.listElement.addEventListener("webkitTransitionEnd", this._handleTransitionEnd, false);
    this.listElement.addEventListener("oTransitionEnd", this._handleTransitionEnd, false);
    this.listElement.addEventListener("otransitionend", this._handleTransitionEnd, false);
  }

  _removeListenerTransitionend() {
    this.listElement.removeEventListener("transitionend", this._handleTransitionEnd, false);
    this.listElement.removeEventListener("webkitTransitionEnd", this._handleTransitionEnd, false);
    this.listElement.removeEventListener("oTransitionEnd", this._handleTransitionEnd, false);
    this.listElement.removeEventListener("otransitionend", this._handleTransitionEnd, false);
  }

  callbacks(cbs) {
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

  onRefresh(func) {
    if (typeof func !== "function") {
      throw new Error('onRefresh must be a function');
    }
    this.onRefresh = func;
  }

  _handleStart(evt) {
    const touches = evt.changedTouches;

    const {
            scrollTop,
            scrollHeight,
            clientHeight,
          } = this._grandpa;

    this._touchElements.setTouchElements(touches, scrollTop, scrollHeight, clientHeight);

    if (this.hasOwnProperty("onTouchStart")) {
      this.onTouchStart(this.currentTouchElement, this._touchElements);
    }
  }

  _handleMove(evt) {
    const touches = evt.changedTouches;
    const touchElements = this._updateTouchElements(touches);
    const touchElement = touchElements.activeTouchElement;
    const { motion } = touchElement;

    if (motion.direction === DIRECTION.NONE) {
      if (this._isActive) {
        this._isActive = false;
        this._resetStyle();
      }
    } else {
      // move UP or DOWN
      evt.preventDefault();
      if (!this._isRefreshActive) {
        this._isActive = true;
        this._removeListenerTransitionend();
        const { distance } = resistanceDistance(motion.distance, this.resistance);
        this._setTranslateYStyle(distance);
      }
    }

    if (this.hasOwnProperty("onTouchMove")) {
      this.onTouchMove(touchElement, this._touchElements);
    }
  }

  _updateTouchElements(touches) {
    const {
            scrollTop,
            scrollHeight,
            clientHeight,
          } = this._grandpa;

    return this._touchElements.updateTouchElements(touches, scrollTop, scrollHeight, clientHeight);
  }

  _handleEnd(evt) {
    const touchElement = this._handleRemove(evt);

    if (touchElement !== null && this.hasOwnProperty("onTouchEnd")) {
      this.onTouchEnd(touchElement, this._touchElements);
    }
  }

  _handleCancel(evt) {
    const touchElement = this._handleRemove(evt);

    if (touchElement !== null && this.hasOwnProperty("onTouchCancel")) {
      this.onTouchCancel(touchElement, this._touchElements);
    }
  }

  _handleRemove(evt) {
    const touches = evt.changedTouches; // те, которые покинули экран

    // Удаляем все неактивные (оторванные) touch, в том числе и активный.
    const touchElements = this._touchElements.deleteTouchElements(touches);

    // Если в данный момент скролим список, то реагировать не надо (нет в данный момент эффекта
    // pull-to-refresh).
    if (!this._isActive) {
      return null;
    }

    const { activeTouchElement, prevActiveTouchElement, } = touchElements;

    if (activeTouchElement !== null) {
      return null;
    }

    // Все пальцы покинули экран
    // процедура инициализации добавления классов и обработчиков
    const { motion } = prevActiveTouchElement;

    const { distance, distanceAbs } = resistanceDistance(motion.distance, this.resistance);

    if (distanceAbs >= this.distance) {
      const direction = motion.direction;
      let dist = this.distance;
      if (direction === DIRECTION.DOWN) {
        dist = this._distanceReverse;
      }
      const classNames = this._getClassNamesByBirection(direction);

      this._addClass(classNames);
      this._setTransitionStyle(dist);
      this._onRefresh(direction, dist, classNames);

    } else {
      this._addListenerTransitionend();
      this._setTransitionStyle(null);
    }

    return prevActiveTouchElement; // touchElement or null
  }

  _getClassNamesByBirection(direction) {
    let classNames = "";
    if (direction === DIRECTION.DOWN) {
      classNames = this.classNames.COMMON.concat(this.classNames.DOWN);
    } else if (direction === DIRECTION.UP) {
      classNames = this.classNames.COMMON.concat(this.classNames.UP);
    }
    return classNames;
  }

  _onRefresh(direction, distance, classNames) {
    if (this.hasOwnProperty("onRefresh")) {
      const promise = this.onRefresh(direction, distance);
      const _this = this;
      this._isRefreshActive = true;
      if (!isPromise(promise)) {
        throw new Error('The onRefresh function`s return value must be must be the Promise');
      }
      promise
        .then(() => {
          _this._removeClass.call(_this, classNames);
          _this._addListenerTransitionend();
          _this._setTransitionStyle(null);
        })
    }
  }

  _addClass(classNames) {
    const classList = this._grandpa.classList;
    classList.add(...classNames);
  }

  _removeClass(classNames) {
    const classList = this._grandpa.classList;
    classList.remove(...classNames);
  }

  _setTranslateYStyle = (function IIFE() {
    let _distance = null;
    return function (distance) {
      if (_distance !== distance) {
        this.listElement.style.cssText = getTranslateYStyle(distance);
      }
    }
  })();

  _setTransitionStyle(distance) {
    const dist = distance || 0;
    const translateY = getTranslateYStyle(distance);
    const otherStyle = getTransitionStyle();
    this.listElement.style.cssText = `${translateY}${otherStyle}`;
  }

  _resetStyle() {
    this.listElement.style.cssText = null;
  }

  _handleTransitionEnd(evt) {
    if (
      (evt.type === "transitionend"
      || evt.type === "webkitTransitionEnd"
      || evt.type === "oTransitionEnd"
      || evt.type === "otransitionend")
      && evt.propertyName === "transform"
    ) {
      this._isActive = false;
      this._isRefreshActive = false;
      this._resetStyle();
      this._removeListenerTransitionend();
    }
  }
}

export default Swipe;

