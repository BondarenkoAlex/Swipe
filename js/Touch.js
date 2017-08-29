class Touch {
  startY;
  currentY;
  identifier;

  constructor() {
    this.reset();
  }

  reset() {
    this.startY = 0;
    this.currentY = 0;
    this.identifier = null;
  }
}
export default Touch;