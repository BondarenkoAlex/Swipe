import TouchElementList from './TouchElementList';
import { DIRECTION } from './constants';

const enfeeble = 4; //ослабление
const distance = 50; // дистанция

class Swipe {

  constructor(elem) {
    //debugger;
    //this.elem = document.getElementById("ptr");
    this.ptrList = document.getElementById("ptr-list");
    this.touchElementList = new TouchElementList();
    this.handleStart = this.handleStart.bind(this);
    this.handleMove = this.handleMove.bind(this);
    this.handleEnd = this.handleEnd.bind(this);
  }

  listener() {
    this.ptrList.addEventListener("touchstart", this.handleStart, false);
    this.ptrList.addEventListener("touchmove", this.handleMove, false);
    this.ptrList.addEventListener("touchend", this.handleEnd, false);
    this.ptrList.addEventListener("touchcancel", this.handleEnd, false);
  }

  handleStart(evt) {
    const touches = evt.changedTouches;

    const grandpa = this.ptrList.parentElement.parentElement;
    const {
            scrollTop,
            scrollHeight,
            clientHeight,
          } = grandpa;

    this.touchElementList.setTouchElements(touches, scrollTop, scrollHeight, clientHeight);
  }

  handleMove(evt) {
    const touches = evt.targetTouches;

    const grandpa = this.ptrList.parentElement.parentElement;
    const {
            scrollTop,
            scrollHeight,
            clientHeight,
          } = grandpa;

    this.touchElementList.updateTouchElements(touches, scrollTop, scrollHeight, clientHeight);
    const touchElement = this.touchElementList.getFirstTouchElement();

    const { distance } = touchElement;

    console.log("distance", distance);

    if (distance.direction === DIRECTION.UP) {
      evt.preventDefault();
      this.ptrList.style.transform = `translateY(${distance.distance}px)`;
    } else if (distance.direction === DIRECTION.DOWN) {
      evt.preventDefault();
      this.ptrList.style.transform = `translateY(-${distance.distance}px)`;
    } else {
      this.ptrList.style.transform = '';
    }

  }

  handleEnd(evt) {
    const touches = evt.changedTouches;

    this.touchElementList.deleteTouchElements(touches);

    const touchElement = this.touchElementList.getFirstTouchElement();

    if (touchElement === undefined) {
      this.ptrList.style.transform = '';
    } else {
      const { distance } = touchElement;
      // #todo переписать, удалить
      if (distance.direction === DIRECTION.UP) {
        this.ptrList.style.transform = `translateY(${distance.distance}px)`;
      } else if (distance.direction === DIRECTION.DOWN) {
        this.ptrList.style.transform = `translateY(-${distance.distance}px)`;
      } else {
        this.ptrList.style.transform = '';
      }
    }
  }

}

export default Swipe;




