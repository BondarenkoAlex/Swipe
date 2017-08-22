class Swipe {
  constructor(elem) {
    this.elem = elem || document.getElementById("ptr");
  }

  listener() {
    this.elem.addEventListener("touchstart", handleStart, false);
    this.elem.addEventListener("touchend", handleEnd, false);
    this.elem.addEventListener("touchcancel", handleCancel, false);
    this.elem.addEventListener("touchmove", handleMove, false);
  }

  handleStart(evt) {
    evt.preventDefault();
    log("touchstart.");

    var touches = evt.changedTouches;
    xDown = evt.touches[0].clientX;
    yDown = evt.touches[0].clientY;
  }

  handleMove(evt) {
    evt.preventDefault();

    var touches = evt.changedTouches;
    log("handleMove.");

    if (!xDown || !yDown) {
      return;
    }

    const xUp = evt.touches[0].clientX;
    const yUp = evt.touches[0].clientY;

    const xDiff = xDown - xUp;
    const yDiff = yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      if (xDiff > 0) {
        // left swipe
        console.log('left');
      } else {
        // right swipe
        console.log('right');
      }
    } else {
      if (yDiff > 0) {
        // up swipe
        console.log('up');
      } else {
        // down swipe
        console.log('down');
      }
    }
    // reset values
    xDown = null;
    yDown = null;

  }

  handleEnd(evt) {
    evt.preventDefault();
    log("touchend");

    var touches = evt.changedTouches;

  }

  handleCancel(evt) {
    evt.preventDefault();
    log("touchcancel.");
    var touches = evt.changedTouches;

  }

}
