//import TouchByKey from './TouchByKey.js';
import Touch2 from './Touch2.js';

const enfeeble = 4; //ослабление
const distance = 50; // дистанция

class Swipe2 {

  constructor(elem) {
    //debugger;
    //this.elem = document.getElementById("ptr");
    this.ptrList = document.getElementById("ptr-list");
    this.touch = new Touch2();
  }

  listener() {
    //this.ptrList.addEventListener("touchstart", this.handleStart.bind(this), false);
    this.ptrList.addEventListener("touchmove", this.handleMove.bind(this), false);
    this.ptrList.addEventListener("touchend", this.handleEnd.bind(this), false);
    this.ptrList.addEventListener("touchcancel", this.handleEnd.bind(this), false);
  }

  // handleStart(evt) {
  //   //evt.preventDefault();
  //   console.log("touchstart.");
  //
  //   var touches = evt.changedTouches //[0];
  //   touchEach.call(this, touches, this._touchByKey.setTouch);
  //   //this._touchByKey.setTouch(touches)
  //
  // }

  handleMove(evt) {
    //evt.preventDefault();
    console.log("handlemove");
    const touches = evt.targetTouches; //[0];
    const touchLength = touches.length;

    if (touchLength === 0) {
      return;
    }

    const touch = touches[0];
    const parent = this.ptrList.parentElement;
    const scrollTop = parent.scrollTop;
    const clientHeight = parent.clientHeight;
    const scrollHeight = parent.scrollHeight;
    console.log("scrollTop:", scrollTop);
    console.log("Дистанция до обновления:", this.touch.distance);
    if (scrollTop === 0 && this.touch.distance >= 0) {
      evt.preventDefault();
      if (this.touch.isStartedUp === false) {
        this.touch.startTouchUp(touch);
      } else {
        //if ( (touch.clientY - this.touch.startY) >= 0) {
        //  console.log("*********************");
        this.touch.updateTouch(touch);
        //}
        const dist = this.touch.distance;
        const ptrList = this.ptrList;
        const d = ~~(dist /*/ enfeeble*/); //round
        console.log("Дистанция:", d);
        ptrList.style.transform = `translateY(${d}px)`;
      }
    } else if (scrollHeight === scrollTop + clientHeight) {
      //доскролили до низа
      evt.preventDefault();
      if (this.touch.isStartedDown === false) {
        this.touch.startTouchDown(touch);
      } else {
        this.touch.updateTouch(touch);
        const dist = this.touch.distance;
        const ptrList = this.ptrList;
        const d = ~~(dist /*/ enfeeble*/); //round
        console.log("Дистанция:", d);
        ptrList.style.transform = `translateY(${d}px)`;
      }
    } else {
      /* скролинг списка */
    }
    // touchEach.call(this, touches, this._touchByKey.updateTouch);
    // //this._touchByKey.updateTouch(touches)
    //
    // const ptrList = this.ptrList;
    //
    // if (scrollTop === 0 && (ptrList.style.transform == "translateY(0)" ||
    // ptrList.style.transform == "")) { touchEach.call(this, touches,
    // this._touchByKey.resetStart); ptrList.style.transform = "translateY(0px)" } else if
    // (scrollTop === 0 && ptrList.transform != "") { const touch = this._touchByKey[0];
    // ptrList.style.transform = `translateY(${-touch.difY / enfeeble}px)`; } else {
    // ptrList.style.transform = "translateY(0)"; }

    console.log(this._touchByKey);
  }

  handleEnd(evt) {
    //evt.preventDefault();
    console.log("touchend");

    const touches = evt.changedTouches;
    for (var i = touches.length - 1; i >= 0; i = i - 1) {
      const touch = touches[i];
      if (this.touch.identifier === touch.identifier) {
        debugger;
        this.touch.resetTouch();
        break;
      }

    }

    //touchEach.call(this, touches, this._touchByKey.delete);
    //this._touchByKey.delete(touches)
  }

  // handleCancel(evt) {
  //   //evt.preventDefault();
  //   console.log("touchcancel.");
  //   var touches = evt.changedTouches;
  //
  // }

}

export default Swipe2;

function touchEach(touches, f) {
  for (var i = touches.length - 1; i >= 0; i = i - 1) {
    var touch = touches[i];
    f.call(this._touchByKey, touch);
  }
}



