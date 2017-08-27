//import { DIRECTION } from './constants';
//import Direction from './Direction';

class Touch2 {
  isStarted;
  startY;
  currentY;
  identifier;

  constructor(touch) {
    this.resetTouch();
  }

  startTouch(touch) {
    this.isStarted = true;
    this.startY = this.currentY = touch.clientY;
    this.identifier = touch.identifier;
  }

  updateTouch(touch) {
    this.currentY = touch.clientY;
  }

  resetTouch() {
    this.isStarted = false;
    this.startY = 0;
    this.currentY = 0;
    this.identifier = null;
  }

  get distance() {
    return this.currentY - this.startY;
  }
}

export default Touch2;