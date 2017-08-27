import { DIRECTION } from './constants';
import Direction from './Direction';

class Touch {
  constructor(touch) {
    this.identifier = touch.identifier;
    this.startScreenX = this.screenX = touch.screenX;
    this.startScreenY = this.screenY = touch.screenY;
    this.startClientX = this.clientX = touch.clientX;
    this.startClientY = this.clientY = touch.clientY;
    this.startPageX = this.pageX = touch.pageX;
    this.startPageY = this.pageY = touch.pageY;
    this.touch = touch;
  }

  updateTouch(touch) {
    this.screenX = touch.screenX;
    this.screenY = touch.screenY;
    this.clientX = touch.clientX;
    this.clientY = touch.clientY;
    this.pageX = touch.pageX;
    this.pageY = touch.pageY;
  }

  resetStart(touch) {
    this.startScreenX = touch.screenX;
    this.startScreenY = touch.screenY;
    this.startClientX = touch.clientX;
    this.startClientY = touch.clientY;
    this.startPageX = touch.pageX;
    this.startPageY = touch.pageY;
  }

  get difX() {
    return this.startClientX - this.clientX;
  }

  get difY() {
    return this.startClientY - this.clientY;
  }

  get direction() {
    let direction = new Direction();

    if (this.difX < 0) {
      direction.hor = DIRECTION.RIGHT;
    } else if (this.difX > 0) {
      direction.hor = DIRECTION.LEFT;
    }

    if (this.difY < 0) {
      direction.ver = DIRECTION.DOWN;
    } else if (this.difY > 0) {
      direction.ver = DIRECTION.UP;
    }

    return direction;
  }
}

export default Touch;