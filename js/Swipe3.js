//import TouchByKey from './TouchByKey.js';
import Touch3 from './Touch3.js';

const enfeeble = 4; //ослабление
const distance = 50; // дистанция

class Swipe3 {

  constructor(elem) {
    //debugger;
    //this.elem = document.getElementById("ptr");
    this.ptrList = document.getElementById("ptr-list");
    this.touch = new Touch3();
  }

  listener() {
    this.ptrList.addEventListener("touchstart", this.handleStart.bind(this), false);
    this.ptrList.addEventListener("touchmove", this.handleMove.bind(this), false);
    this.ptrList.addEventListener("touchend", this.handleEnd.bind(this), false);
    this.ptrList.addEventListener("touchcancel", this.handleEnd.bind(this), false);
  }

  handleStart(evt) {
    //evt.preventDefault();
    //console.log("touchstart.");

    const touches = evt.targetTouches; //[0];
    const touch = touches[0];
    const parent = this.ptrList.parentElement;
    const elem = {
      scrollTop:parent.scrollTop,
      scrollHeight:parent.scrollHeight,
      clientHeight:parent.clientHeight,
    };
    this.touch.start(touch,elem);
  }

  handleMove(evt) {
    const touches = evt.targetTouches; //[0];
    const touch = touches[0];
    const parent = this.ptrList.parentElement;
    const elem = {
      scrollTop:parent.scrollTop,
      scrollHeight:parent.scrollHeight,
      clientHeight:parent.clientHeight,
    };
    this.touch.current(touch,elem);
    const distance = this.touch.distance;

    if (distance.direction === "UP") {
      this.ptrList.style.transform = `translateY(${distance.distance}px)`;
    } else if (distance.direction === "DOWN") {
      this.ptrList.style.transform = `translateY(-${distance.distance}px)`;
    } else {
      this.ptrList.style.transform = '';
    }

  }

  handleEnd(evt) {
    this.touch.reset();

    const distance = this.touch.distance;

    if (distance.direction === "UP") {
      this.ptrList.style.transform = `translateY(${distance.distance}px)`;
    } else if (distance.direction === "DOWN") {
      this.ptrList.style.transform = `translateY(-${distance.distance}px)`;
    } else {
      this.ptrList.style.transform = '';
    }
  }

  // handleCancel(evt) {
  //   //evt.preventDefault();
  //   console.log("touchcancel.");
  //   var touches = evt.changedTouches;
  //
  // }

}

export default Swipe3;

function touchEach(touches, f) {
  for (var i = touches.length - 1; i >= 0; i = i - 1) {
    var touch = touches[i];
    f.call(this._touchByKey, touch);
  }
}



