import TouchElementList from './TouchElementList';
import { DIRECTION } from './constants';
import { isPromise } from './utils/isPromise';

const resistance = 4; //ослабление
const distanceV = 50; // дистанция

class Swipe {
  constructor(elem) {
    this.listElement = elem;
    this.touchElements = new TouchElementList();
    this.currentTouchElement = null;
    this.isActive = false;
    this.handleStart = this.handleStart.bind(this);
    this.handleMove = this.handleMove.bind(this);
    this.handleEnd = this.handleEnd.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleTransitionEnd = this.handleTransitionEnd.bind(this);
  }

  addListener() {
    this.listElement.addEventListener("touchstart", this.handleStart, true);
    this.listElement.addEventListener("touchmove", this.handleMove, true);
    this.listElement.addEventListener("touchend", this.handleEnd, true);
    this.listElement.addEventListener("touchcancel", this.handleCancel, true);
    this.listElement.addEventListener("transitionend", this.handleTransitionEnd, true);
  }

  removeListener() {
    this.listElement.removeEventListener("touchstart", this.handleStart, true);
    this.listElement.removeEventListener("touchmove", this.handleMove, true);
    this.listElement.removeEventListener("touchend", this.handleEnd, true);
    this.listElement.removeEventListener("touchcancel", this.handleCancel, true);
    this.listElement.removeEventListener("transitionend", this.handleTransitionEnd, true);
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

  onRefresh(promise) {
    if (!isPromise(promise)) {
      throw new Error('onRefresh must be the Promise');
    }
    this.onRefresh = promise;
  }

  handleStart(evt) {
    const touches = evt.changedTouches;

    const grandpa = this.listElement.parentElement.parentElement;
    const {
            scrollTop,
            scrollHeight,
            clientHeight,
          } = grandpa;

    this.touchElements.setTouchElements(touches, scrollTop, scrollHeight, clientHeight);
    const firstTouch = this.touchElements.getFirstTouchElement();

    if (firstTouch !== this.currentTouchElement) {
      this.currentTouchElement = firstTouch;
    }

    if (this.hasOwnProperty("onTouchStart")) {
      this.onTouchStart(this.currentTouchElement, this.touchElements);
    }
  }

  handleMove(evt) {
    const touches = evt.targetTouches;

    const grandpa = this.listElement.parentElement.parentElement;
    const {
            scrollTop,
            scrollHeight,
            clientHeight,
          } = grandpa;

    const { identifier } = this.currentTouchElement.touch;
    const touch = getTouchByIdentifier(touches, identifier);
    const touchElement = this.touchElements.updateTouchElement(touch, scrollTop, scrollHeight, clientHeight);
    const { motion } = touchElement;

    this._transform(motion, evt);

    if (this.hasOwnProperty("onTouchMove")) {
      this.onTouchMove(touchElement, this.touchElements);
    }
  }

  _transform(motion, evt) {
    const style = this.listElement.style;
    if (motion.distance === null) {
      this.isActive = false;
      style.transform = null;
    } else {
      evt.preventDefault();
      const distanceEnfeeble = ~~(motion.distance / resistance); //round
      this.isActive = true;
      // #todo добавить другие свойства для кросбраузерности
      style.transform = `translateY(${distanceEnfeeble}px)`;

      let distanceAbs = distanceEnfeeble;
      if (distanceAbs < 0) {
        distanceAbs = ~distanceAbs + 1;
      }

      // if (distanceAbs >= distanceV) {
      //   this._setClass("active-up");
      //
      //   if (this.hasOwnProperty("onRefresh")) {
      //     this.onRefresh
      //       .then(()=> {
      //         this._resetStyle();
      //       })
      //   }
      // }
    }
  }

  _setClass(className) {
    const classList = this.listElement.classList;
    classList.add(className);
  }

  _removeClass(className) {
    const classList = this.listElement.classList;
    classList.remove(className);
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
    const touches = evt.changedTouches;

    const { identifier } = this.currentTouchElement.touch;
    const touch = getTouchByIdentifier(touches, identifier);

    if (touch === undefined) {
      return null;
    }

    if (!this.isActive) {
      return null;
    }

    this.touchElements.deleteTouchElements(touches);
    const touchElement = this.touchElements.getFirstTouchElement();

    if (touchElement === undefined) {
      this.currentTouchElement = null;
    }

    this._resetStyle();

    return touchElement;
  }

  _resetStyle() {
    const style = getStyle(0);

    this.listElement.style = style;
    //this._removeClass("active-up");

    this._setClass("active-up");

    const self = this;

    if (this.hasOwnProperty("onRefresh")) {
      this.onRefresh
        .then(()=> {
          self._removeClass("active-up");
        })
    }

  }

  handleTransitionEnd(evt) {
    //debugger;
    // #todo добавить другие свойства для кросбраузерности
    if (evt.type === "transitionend" && evt.propertyName === "transform") {
      this.isActive = false;
      this.listElement.style = null;
    }
  }
}

export default Swipe;

function getStyle(dist) {
  // #todo добавить другие свойства для кросбраузерности
  return (
    `transform:translateY(${dist}px);` +
    'transition-duration:300ms;' +
    'transition-timing-function:cubic-bezier(0.33, 0.66, 0.66, 1);' +
    'transition-delay:ms'
  );
}

function getTouchByIdentifier(touches, identifier) {
  let touch;
  Object.keys(touches).some((key) => {
    const touchValue = touches[key];
    const isFinded = touchValue.identifier === identifier;
    if (isFinded) {
      touch = touchValue;
    }
    return isFinded;
  });
  return touch;
}

