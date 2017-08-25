import TouchByKey from './TouchByKey.js';

class Swipe {

  constructor(elem) {
    //debugger;
    this.elem = elem || document.getElementById("ptr");
    this._touchByKey = new TouchByKey();
  }

  addListener() {
    this.elem.addEventListener("touchstart", this.handleStart.bind(this), false);
    this.elem.addEventListener("touchend", this.handleEnd.bind(this), false);
    this.elem.addEventListener("touchcancel", this.handleCancel.bind(this), false);
    this.elem.addEventListener("touchmove", this.handleMove.bind(this), false);
  }

  handleStart(evt) {
    let scrollTop = this.elem.parentElement.scrollTop;
    if ( scrollTop > 0 ) return;
    evt.preventDefault();
    console.log("touchstart.");

    var touches = evt.changedTouches;
    for (var i = touches.length - 1; i >= 0; i = i - 1) {
      var item = touches[i];
      this._touchByKey.setTouch(item);
    }
    // for (var touch in touches) {
    //
    //   var item = touches[touch];
    //   this._touchByKey.setTouch(item);
    //   touches.forEach((item)=> {})
    // }
    // //this._touchByKey.setTouch(touches);

  }

  handleMove(evt) {
    let scrollTop = this.elem.parentElement.scrollTop;
    if ( scrollTop > 0 ) return;

    evt.preventDefault();
    console.log("handlemove");

    var touches = evt.changedTouches;
    for (var i = touches.length - 1; i >= 0; i = i - 1) {
      var item = touches[i];
      this._touchByKey.updateTouch(item);
    }

    console.log(this._touchByKey);
  }

  handleEnd(evt) {
    let scrollTop = this.elem.parentElement.scrollTop;
    if ( scrollTop > 0 ) return;

    evt.preventDefault();
    console.log("touchend");

    //var touches = evt.changedTouches;
    // for (var i = touches.length - 1; i >= 0; i = i - 1) {
    //   var item = touches[i];
    //   this._touchByKey.delete(item);
    // }
  }

  handleCancel(evt) {
    evt.preventDefault();
    console.log("touchcancel.");
    var touches = evt.changedTouches;

  }

}

export default Swipe;



