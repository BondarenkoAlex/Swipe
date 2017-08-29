//import { DIRECTION } from './constants';
//import Direction from './Direction';

class Touch3 {
  touch = {
    startY: 0,
    currentY: 0,
    identifier: null,
  };
  elem = {
    scrollTop: 0,
    scrollHeight: 0,
    clientHeight: 0,
  };

  constant = {
    UP: 'UP',
    DOWN: 'DOWN',
  };

  start(touch, elem) {
    this.touch.startY = touch.clientY;
    this.touch.identifier = touch.identifier;
    this.elem = elem;
  }

  current(touch, elem) {
    this.touch.currentY = touch.clientY;
    this.elem = elem;
  }

  reset() {
    this.touch = {
      startY: 0,
      currentY: 0,
      identifier: null,
    };
    this.elem = {
      scrollTop: 0,
      scrollHeight: 0,
      clientHeight: 0,
    };
  }

  get distance() {
    const moveTouchTopY = ~~(this.touch.currentY - this.touch.startY); //round
    const moveTouchBottomY = ~moveTouchTopY + 1; //reverse

    const distanceTop = moveTouchTopY - this.elem.scrollTop; // <=0 не реагировать, >0 реагировать

    const scrollBottom = this.elem.scrollHeight - (this.elem.scrollTop + this.elem.clientHeight);
    const distanceBottom = moveTouchBottomY - scrollBottom; // <=0 не реагировать, >0 реагировать

    //console.log("distanceTop    ", distanceTop);
    //console.log("distanceBottom ", distanceBottom);

    let result = {
      distance: null,
      direction: null,
    };

    if ( distanceTop > 0 ) {
      result = {
        distance: distanceTop,
        direction: this.constant.UP,
      }
    } else if ( distanceBottom > 0 ) {
      result = {
        distance: distanceBottom,
        direction: this.constant.DOWN,
      }
    }
    return result;
  }
}

export default Touch3;