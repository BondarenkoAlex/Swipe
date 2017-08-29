//import { DIRECTION } from './constants';
//import Direction from './Direction';

class Touch2 {
  isStartedUp;
  isStartedDown;
  startY;
  currentY;
  identifier;

  constructor(touch) {
    this.resetTouch();
  }

  startTouchUp(touch) {
    this.isStartedUp = true;
    this._startTouch(touch);
  }

  startTouchDown(touch) {
    this.isStartedDown = true;
    this._startTouch(touch);
  }

  /**
   * @private
   */
  _startTouch(touch) {
    this.startY = this.currentY = touch.clientY;
    this.identifier = touch.identifier;
  }


  updateTouch(touch) {
    this.currentY = touch.clientY;
  }

  resetTouch() {
    this.isStartedUp = false;
    this.isStartedDown = false;
    this.startY = 0;
    this.currentY = 0;
    this.identifier = null;
  }

  get distance() {
    return this.currentY - this.startY;
  }
}

export default Touch2;