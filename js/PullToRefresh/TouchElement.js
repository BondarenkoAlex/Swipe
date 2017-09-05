import Touch from './Touch';
import Element from './Element';
import { DIRECTION } from './constants';

class TouchElement {
  /**
   *
   * @param touch {Touch}
   * @param element {Element}
   */
  constructor(touch, element) {
    this.touch = touch;
    this.element = element;
  }

  /**
   *
   * @param touch {Touch}
   * @param scrollTop
   * @param scrollHeight
   * @param clientHeight
   */
  update(touch, scrollTop, scrollHeight, clientHeight) {
    this.touch.update(touch);
    this.element.update({
      scrollTop,
      scrollHeight,
      clientHeight
    });
  }

  get motion() {
    const moveTouchTopY = ~~(this.touch.currentY - this.touch.startY); //round
    const distanceTop = moveTouchTopY - this.element.scrollTop;

    const moveTouchBottomY = ~moveTouchTopY + 1; //reverse
    const scrollBottom = this.element.scrollHeight - (this.element.scrollTop + this.element.clientHeight);
    const distanceBottom = moveTouchBottomY - scrollBottom;

    if (distanceTop > 0) {
      return {
        distance: distanceTop,
        direction: DIRECTION.UP,
      }
    } else if (distanceBottom > 0) {
      return {
        distance: ~distanceBottom + 1,
        direction: DIRECTION.DOWN,
      }
    } else {
      return {
        distance: null,
        direction: DIRECTION.NONE,
      };
    }
  }
}

export default TouchElement;