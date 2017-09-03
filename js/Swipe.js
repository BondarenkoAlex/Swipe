import TouchElementList from './TouchElementList';
import { DIRECTION } from './constants';
import { isPromise } from './utils/isPromise';

const resistance = 4; //ослабление
const distance = 50; // дистанция

const classsNames = {
  COMMON: ["pull-to-refresh-onrefresh"],
  [DIRECTION.UP]: ["pull-to-refresh-onrefresh-up", "dsd"],
  [DIRECTION.DOWN]: ["pull-to-refresh-onrefresh-down", "dsfdsdsf"],
};

class Swipe {
  constructor(elem) {
    this.listElement = elem;
    this.grandpa = elem.parentElement.parentElement;
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
    this.listElement.addEventListener("touchstart", this.handleStart, false);
    this.listElement.addEventListener("touchmove", this.handleMove, false);
    this.listElement.addEventListener("touchend", this.handleEnd, false);
    this.listElement.addEventListener("touchcancel", this.handleCancel, false);
    this.listElement.addEventListener("transitionend", this.handleTransitionEnd, false);
  }

  removeListener() {
    this.listElement.removeEventListener("touchstart", this.handleStart, false);
    this.listElement.removeEventListener("touchmove", this.handleMove, false);
    this.listElement.removeEventListener("touchend", this.handleEnd, false);
    this.listElement.removeEventListener("touchcancel", this.handleCancel, false);
    this.listElement.removeEventListener("transitionend", this.handleTransitionEnd, false);
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
    const firstTouch = this.touchElements.getFirstTouchElement();

    if (firstTouch !== this.currentTouchElement) {
      this.currentTouchElement = firstTouch;
    }

    if (this.hasOwnProperty("onTouchStart")) {
      this.onTouchStart(this.currentTouchElement, this.touchElements);
    }
  }

  handleMove(evt) {
    const touchElement = this._updateTouchElement(evt);

    if (this.hasOwnProperty("onTouchMove")) {
      this.onTouchMove(touchElement, this.touchElements);
    }
  }

  _updateTouchElement(evt) {
    const touches = evt.changedTouches;
    const {
            scrollTop,
            scrollHeight,
            clientHeight,
          } = this.grandpa;

    //const { identifier } = this.currentTouchElement.touch;
    //const touch = getTouchByIdentifier(touches, identifier);
    //
    //const touchElement = this.touchElements.updateTouchElement(touch, scrollTop, scrollHeight,
    // clientHeight);
    const touchElements = this.touchElements.updateTouchElements(touches, scrollTop, scrollHeight, clientHeight);
    const { identifier } = this.currentTouchElement.touch;
    const touchElement = touchElements[identifier];
    const { motion } = touchElement;

    if (motion.direction === DIRECTION.NONE) {
      this.isActive = false;
      this.listElement.style.transform = null;
    } else {
      // move UP or DOWN
      evt.preventDefault();
      this.isActive = true;
      // #todo добавить другие свойства для кросбраузерности
      const distanceEnfeeble = ~~(motion.distance / resistance); //round
      this.listElement.style.transform = `translateY(${distanceEnfeeble}px)`;
    }

    return touchElement;
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
    // Если в данный момент скролим список, то реагировать не надо (нет в данный момент эффекта
    // pull-to-refresh).
    if (!this.isActive) {
      return null;
    }

    const touches = evt.changedTouches; // те, которые покинули экран
    //const touches = evt.touches;

    // const { identifier } = this.currentTouchElement.touch;
    //const touch = getTouchByIdentifier(touches, identifier);

    const {
            scrollTop,
            scrollHeight,
            clientHeight,
          } = this.grandpa;

    const touchElements = this.touchElements.updateTouchElements(touches, scrollTop, scrollHeight, clientHeight);

    // Удаляем все неактивные (оторванные) touch, в том числе и активный.
    this.touchElements.deleteTouchElements(touches);
    // Получаем новый активный палец (если такой есть)
    const touchElementMemory = this.currentTouchElement;

    const { identifier } = this.currentTouchElement.touch;

    // поиск в "оторваных" пальцах расчетный палец по идентофикатору
    let isRemoveCurTouchElement = Object.keys(touches).some(key => touches[key].identifier === identifier);

    // если touch по которому происходит рассчет не покинул экран, то выхдим сразу
    // (this.currentTouchElement - не изменился)
    if (!isRemoveCurTouchElement) {
      return null;
    }

    // получение актуального пальца по которому будет происходить расчет
    this.currentTouchElement = this.touchElements.getFirstTouchElement(); // TouchElement or null

    if (this.currentTouchElement !== null) {
      // есть взаимодействующие пальцы с экраном
      return null; //this.currentTouchElement;
    }

    // Все пальцы покинули экран
    // процедура инициализации добавления классов и обработчиков
    const { motion } = touchElementMemory;

    const distanceEnfeeble = ~~(motion.distance / resistance); //round

    let distanceEnfeebleAbs = distanceEnfeeble; // only for compare
    if (motion.direction === DIRECTION.DOWN) {
      distanceEnfeebleAbs = ~distanceEnfeebleAbs + 1;
    }

    if (distanceEnfeebleAbs >= distance) {
      const classNames = this._getClassNames(motion.direction);
      this._addClass(...classNames);
      this._onRefresh(distanceEnfeeble, classNames);
    }
    this._setStyle();

    return touchElementMemory; // touchElement or null
  }

  _getClassNames(direction) {
    let classNames = "";
    if (direction === DIRECTION.DOWN) {
      classNames = classsNames.COMMON.concat(classsNames.DOWN);
    } else if (direction === DIRECTION.UP) {
      classNames = classsNames.COMMON.concat(classsNames.UP);
    }
    return classNames;
  }

  _onRefresh(distance, classNames) {
    if (this.hasOwnProperty("onRefresh")) {
      const promise = this.onRefresh(distance);
      const self = this;
      if (!isPromise(promise)) {
        throw new Error('The onRefresh function`s return value must be must be the Promise');
      }
      promise
        .then(() => {
          self._removeClass.call(self, ...classNames);
        })
    }
  }

  _addClass() {
    const classList = this.grandpa.classList;
    classList.add(...arguments);
  }

  _removeClass() {
    const classList = this.grandpa.classList;
    classList.remove(...arguments);
  }

  _setStyle() {
    // #todo править получение стилей
    this.listElement.style = getStyle(0);
  }

  _resetStyle() {
    this.listElement.style = null;
  }

  handleTransitionEnd(evt) {
    // #todo добавить другие свойства для кросбраузерности "otransitionend"
    if (evt.type === "transitionend" && evt.propertyName === "transform") {
      this.isActive = false;
      this._resetStyle();
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

