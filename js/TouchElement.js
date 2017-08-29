//import { DIRECTION } from './constants';
//import Direction from './Direction';
import Touch from './Touch';
import Element from './Element';
import { DIRECTION } from './constants';

class TouchElement {
  constructor() {
    this.touch = new Touch();
    this.element = new Element();
  }

  start(touch, elem) {
    this.touch.startY = this.touch.currentY = touch.clientY;
    this.touch.identifier = touch.identifier;
    this.element.setElement(elem);
  }

  current(touch, elem) {
    this.touch.currentY = touch.clientY;
    this.element.setElement(elem);
  }

  get distance() {
    const moveTouchTopY = ~~(this.touch.currentY - this.touch.startY); //round
    const distanceTop = moveTouchTopY - this.elem.scrollTop;

    const moveTouchBottomY = ~moveTouchTopY + 1; //reverse
    const scrollBottom = this.elem.scrollHeight - (this.elem.scrollTop + this.elem.clientHeight);
    const distanceBottom = moveTouchBottomY - scrollBottom;

    // #todo вынести, чтобы ссылка была всегда одна и таже
    let result = {
      distance: null,
      direction: null,
    };

    if (distanceTop > 0) {
      result = {
        distance: distanceTop,
        direction: DIRECTION.UP,
      }
    } else if (distanceBottom > 0) {
      result = {
        distance: distanceBottom,
        direction: DIRECTION.DOWN,
      }
    }
    return result;
  }
}

export default TouchElement;