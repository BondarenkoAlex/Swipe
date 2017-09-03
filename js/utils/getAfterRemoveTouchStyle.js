const getAfterRemoveTouchStyle = function getAfterRemoveTouchStyle(duration = 300, delay = 0) {
  return (
    /*`-webkit-transform:translateY(0);` +
    `-ms-transform:translateY(0);` +
    `transform:translateY(0);` +*/
    `-webkit-transition-duration:${duration}ms;` +
    `transition-duration:${duration}ms;` +
    `-webkit-transition-timing-function:cubic-bezier(.33,.66,.66,1);` +
    `transition-timing-function:cubic-bezier(.33,.66,.66,1);` +
    `-webkit-transition-delay:${delay}ms;` +
    `transition-delay:${delay}ms;`);
};

export default getAfterRemoveTouchStyle;