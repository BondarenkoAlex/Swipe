import TouchByKey from './TouchByKey.js';
import Touch2 from './Touch2.js';

const enfeeble = 4; //ослабление
const distance = 50; // дистанция


class Swipe {

  constructor(elem) {
    //debugger;
    this.elem = document.getElementById("ptr");
    this.ptrList = document.getElementById("ptr-list");
    this._touchByKey = new TouchByKey();
  }

  listener() {
    this.elem.addEventListener("touchstart", this.handleStart.bind(this), false);
    this.elem.addEventListener("touchend", this.handleEnd.bind(this), false);
    this.elem.addEventListener("touchcancel", this.handleCancel.bind(this), false);
    this.elem.addEventListener("touchmove", this.handleMove.bind(this), false);
  }

  handleStart(evt) {
    //evt.preventDefault();
    console.log("touchstart.");

    var touches = evt.changedTouches //[0];
    touchEach.call(this, touches, this._touchByKey.setTouch);
    //this._touchByKey.setTouch(touches)

  }

  handleMove(evt) {
    //evt.preventDefault();
    console.log("handlemove");
    var touches = evt.changedTouches; //[0];
    touchEach.call(this, touches, this._touchByKey.updateTouch);
    //this._touchByKey.updateTouch(touches)

    var parent = this.elem;
    const scrollTop = parent.scrollTop;

    const ptrList = this.ptrList;

    if ( scrollTop === 0 && (ptrList.style.transform == "translateY(0)" || ptrList.style.transform == "") ) {
      touchEach.call(this, touches, this._touchByKey.resetStart);
      ptrList.style.transform = "translateY(0px)"
    } else if (scrollTop === 0 && ptrList.transform != "") {
      const touch = this._touchByKey[0];
      ptrList.style.transform = `translateY(${-touch.difY/enfeeble}px)`;
    } else {
      ptrList.style.transform = "translateY(0)";
    }

    console.log(this._touchByKey);
  }

  handleEnd(evt) {
    //evt.preventDefault();
    console.log("touchend");

    var touches = evt.changedTouches; //[0];
    touchEach.call(this, touches, this._touchByKey.delete);
    //this._touchByKey.delete(touches)
  }

  handleCancel(evt) {
    //evt.preventDefault();
    console.log("touchcancel.");
    var touches = evt.changedTouches;

  }

}

export default Swipe;

function touchEach(touches, f) {
  for (var i = touches.length - 1; i >= 0; i = i - 1) {
    var touch = touches[i];
    f.call(this._touchByKey, touch);
  }
}



