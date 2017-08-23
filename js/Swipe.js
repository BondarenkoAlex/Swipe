import TouchByKey from './TouchByKey.js';

class Swipe {

  constructor(elem) {
    //debugger;
    this.elem = elem || document.getElementById("ptr");
    this._touchByKey = new TouchByKey();
  }

  listener() {
    this.elem.addEventListener("touchstart", this.handleStart.bind(this), false);
    this.elem.addEventListener("touchend", this.handleEnd.bind(this), false);
    this.elem.addEventListener("touchcancel", this.handleCancel.bind(this), false);
    this.elem.addEventListener("touchmove", this.handleMove.bind(this), false);
  }

  handleStart(evt) {
    evt.preventDefault();
    console.log("touchstart.");

    var touches = evt.changedTouches[0];
    this._touchByKey.setTouch(touches)

  }

  handleMove(evt) {
    evt.preventDefault();
    console.log("handlemove");
    var touches = evt.changedTouches[0];
    this._touchByKey.updateTouch(touches)
    console.log(this._touchByKey);
  }

  handleEnd(evt) {
    evt.preventDefault();
    console.log("touchend");


    var touches = evt.changedTouches[0];
    //this._touchByKey.delete(touches)
  }

  handleCancel(evt) {
    evt.preventDefault();
    console.log("touchcancel.");
    var touches = evt.changedTouches;

  }

}

export default Swipe;



