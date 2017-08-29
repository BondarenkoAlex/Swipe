class Element {
  constructor() {
    this.scrollTop = 0;
    this.scrollHeight = 0;
    this.clientHeight = null;
  }

  setElement(value = {}) {
    this.scrollTop = value.scrollTop;
    this.scrollHeight = value.scrollHeight;
    this.clientHeight = value.clientHeight;
  }
}
