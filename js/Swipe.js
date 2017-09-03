import TouchElementList from './TouchElementList';
import { DIRECTION } from './constants';
import {
  isPromise,
  isArray,
  isString,
} from './utils/check';
import getTranslateYStyle from './utils/getTranslateYStyle';
import getAfterRemoveTouchStyle from './utils/getAfterRemoveTouchStyle';
import resistanceDistance from './utils/resistanceDistance';

const classNames = {
  COMMON: ["onrefresh"],
  [DIRECTION.UP]: ["onrefresh-up"],
  [DIRECTION.DOWN]: ["onrefresh-down"],
};

class Swipe {
  constructor(elem, distance = 50, resistance = 2, classNames = {}) {
    this.listElement = elem;
    this.resistance = resistance;
    this.distance = distance;
    this.classNames = this._mergeClassNames(classNames);
    this.grandpa = elem.parentElement.parentElement;
    this.touchElements = new TouchElementList();
    this.isActive = false;
    this.isOnRefreshActive = false;
    this.handleStart = this.handleStart.bind(this);
    this.handleMove = this.handleMove.bind(this);
    this.handleEnd = this.handleEnd.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleTransitionEnd = this.handleTransitionEnd.bind(this);
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
    this.listElement.addEventListener("touchstart", this.handleStart, false);
    this.listElement.addEventListener("touchmove", this.handleMove, false);
    this.listElement.addEventListener("touchend", this.handleEnd, false);
    this.listElement.addEventListener("touchcancel", this.handleCancel, false);
    this.listElement.addEventListener("transitionend", this.handleTransitionEnd, false);
    this.listElement.addEventListener("webkitTransitionEnd", this.handleTransitionEnd, false);
    this.listElement.addEventListener("oTransitionEnd", this.handleTransitionEnd, false);
    this.listElement.addEventListener("otransitionend", this.handleTransitionEnd, false);
  }

  removeListener() {
    this.listElement.removeEventListener("touchstart", this.handleStart, false);
    this.listElement.removeEventListener("touchmove", this.handleMove, false);
    this.listElement.removeEventListener("touchend", this.handleEnd, false);
    this.listElement.removeEventListener("touchcancel", this.handleCancel, false);
    this.listElement.removeEventListener("transitionend", this.handleTransitionEnd, false);
    this.listElement.removeEventListener("webkitTransitionEnd", this.handleTransitionEnd, false);
    this.listElement.removeEventListener("oTransitionEnd", this.handleTransitionEnd, false);
    this.listElement.removeEventListener("otransitionend", this.handleTransitionEnd, false);
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

  handleStart(evt) {
    const touches = evt.changedTouches;

    const {
            scrollTop,
            scrollHeight,
            clientHeight,
          } = this.grandpa;

    this.touchElements.setTouchElements(touches, scrollTop, scrollHeight, clientHeight);

    if (this.hasOwnProperty("onTouchStart")) {
      this.onTouchStart(this.currentTouchElement, this.touchElements);
    }
  }

  // todo запретить перезатирание свойства style без необходимости на то

  handleMove(evt) {
    const touches = evt.changedTouches;
    const touchElements = this._updateTouchElements(touches);
    const touchElement = touchElements.activeTouchElement;
    const { motion } = touchElement;

    if (motion.direction === DIRECTION.NONE) {
      this.isActive = false;
      this._resetStyle(); // todo не перезаписывать, если не надо
    } else {
      // move UP or DOWN
      evt.preventDefault();
      if (!this.isOnRefreshActive) {
        this.isActive = true;
        const { distance } = resistanceDistance(motion.distance, this.resistance);
        this._setTranslateYStyle(distance); // todo не перезаписывать, если не надо
      }
    }

    if (this.hasOwnProperty("onTouchMove")) {
      this.onTouchMove(touchElement, this.touchElements);
    }
  }

  _updateTouchElements(touches) {
    const {
            scrollTop,
            scrollHeight,
            clientHeight,
          } = this.grandpa;

    return this.touchElements.updateTouchElements(touches, scrollTop, scrollHeight, clientHeight);
  }

  handleEnd(evt) {
    const touchElement = this._handleRemove(evt);

    if (touchElement !== null && this.hasOwnProperty("onTouchEnd")) {
      this.onTouchEnd(touchElement, this.touchElements);
    }
  }

  handleCancel(evt) {
    const touchElement = this._handleRemove(evt);

    if (touchElement !== null && this.hasOwnProperty("onTouchCancel")) {
      this.onTouchCancel(touchElement, this.touchElements);
    }
  }

  _handleRemove(evt) {
    const touches = evt.changedTouches; // те, которые покинули экран

    // Удаляем все неактивные (оторванные) touch, в том числе и активный.
    const touchElements = this.touchElements.deleteTouchElements(touches);

    // Если в данный момент скролим список, то реагировать не надо (нет в данный момент эффекта
    // pull-to-refresh).
    if (!this.isActive) {
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
      const classNames = this._getClassNames(motion.direction);
      //this._addClass(...classNames);
      this._addClass(classNames);
      this._onRefresh(distance, classNames);
      this._setAfterRemoveTouchStyle(this.distance);
    }
    this._setAfterRemoveTouchStyle(null);

    return prevActiveTouchElement; // touchElement or null
  }

  _getClassNames(direction) {
    let classNames = "";
    if (direction === DIRECTION.DOWN) {
      classNames = this.classNames.COMMON.concat(this.classNames.DOWN);
    } else if (direction === DIRECTION.UP) {
      classNames = this.classNames.COMMON.concat(this.classNames.UP);
    }
    return classNames;
  }

  _onRefresh(distance, classNames) {
    if (this.hasOwnProperty("onRefresh")) {
      const promise = this.onRefresh(distance);
      const self = this;
      this.isOnRefreshActive = true;
      if (!isPromise(promise)) {
        throw new Error('The onRefresh function`s return value must be must be the Promise');
      }
      promise
        .then(() => {
          self.isOnRefreshActive = false;
          self._removeClass.call(self, classNames);
          self._setAfterRemoveTouchStyle(null);
          //self._reset.call(self, classNames);
        })
    }
  }

  _addClass(classNames) {
    const classList = this.grandpa.classList;
    classList.add(...classNames);
  }

  _removeClass(classNames) {
    const classList = this.grandpa.classList;
    classList.remove(...classNames);
  }

  _setTranslateYStyle(distance) {
    this.listElement.style = getTranslateYStyle(distance);
  }

  _setAfterRemoveTouchStyle(distance) {
    const dist = distance || 0;
    const translateY = getTranslateYStyle(distance);
    const otherStyle = getAfterRemoveTouchStyle();
    this.listElement.style = `${translateY}${otherStyle}`;
  }

  _resetStyle() {
    this.listElement.style = null;
  }

  handleTransitionEnd(evt) {
    if (
      (evt.type === "transitionend"
        || evt.type === "webkitTransitionEnd"
        || evt.type === "oTransitionEnd"
        || evt.type === "otransitionend")
      && evt.propertyName === "transform"
    ) {
      if (!this.isOnRefreshActive) {
        this.isActive = false;
        this._resetStyle();
      }
    }
  }

  // _reset(classNames) {
  //   this._removeClass(classNames);
  //   this._setAfterRemoveTouchStyle();
  //   this.isActive = false;
  //   this._resetStyle();
  // }
}

export default Swipe;

