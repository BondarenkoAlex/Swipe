class Element {
  /**
   *
   * @param scrollTop {Number}
   * @param scrollHeight {Number}
   * @param clientHeight {Number}
   */
  constructor(scrollTop, scrollHeight, clientHeight) {
    this.scrollTop = scrollTop;
    this.scrollHeight = scrollHeight;
    this.clientHeight = clientHeight;
  }

  /**
   *
   * @param element {Element}
   */
  update(element) {
    this.scrollTop = element.scrollTop;
    this.scrollHeight = element.scrollHeight;
    this.clientHeight = element.clientHeight;
  }
}

export default Element;
