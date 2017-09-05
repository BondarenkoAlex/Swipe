const getTransitionStyle = function getTransitionStyle(duration = 300, delay = 0) {
  return (
    `-webkit-transition-duration:${duration}ms;` +
    `transition-duration:${duration}ms;` +
    `-webkit-transition-timing-function:cubic-bezier(.33,.66,.66,1);` +
    `transition-timing-function:cubic-bezier(.33,.66,.66,1);` +
    `-webkit-transition-delay:${delay}ms;` +
    `transition-delay:${delay}ms;`);
};

export default getTransitionStyle;