class Touch {
  // startY;
  // currentY;
  // identifier;

  constructor(touch) {
    this.startY = this.currentY = touch.clientY;
    this.identifier = touch.identifier;
  }

  update(touch){
    this.currentY = touch.clientY;
  }

  // reset() {
  //   this.startY = 0;
  //   this.currentY = 0;
  //   this.identifier = null;
  // }
}
export default Touch;