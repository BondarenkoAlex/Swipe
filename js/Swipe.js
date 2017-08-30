import TouchElementList from './TouchElementList';
import { DIRECTION } from './constants';

const enfeeble = 4; //ослабление
const distance = 50; // дистанция

let startY = 0;

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
    this.ptrList.addEventListener("touchstart", this.handleStart, {passive: false } );
    this.ptrList.addEventListener("touchmove", this.handleMove, {passive: false } );
    this.ptrList.addEventListener("touchend", this.handleEnd, {passive: false } );
    this.ptrList.addEventListener("touchcancel", this.handleEnd, {passive: false } );
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

    startY = touches[0].clientY;
  }

  handleMove(evt) {
    const touches = evt.targetTouches;

    // console.log("distance", distance);
    // this.ptrList.style.transform = `translateY(${touches[0].clientY-startY}px)`;
    //   evt.preventDefault();
    //   evt.stopPropagation();

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
      //evt.stopPropagation();
      this.ptrList.style.transform = `translateY(${distance.distance}px)`;
      //return;
    } else if (distance.direction === DIRECTION.DOWN) {
      evt.preventDefault();
      //evt.stopPropagation();
      this.ptrList.style.transform = `translateY(-${distance.distance}px)`;
      //return;
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




