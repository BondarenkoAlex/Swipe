import '../style/style.css';
import Swipe from './Swipe';

window.onload = function () {
  startup();
};

//let swipe = new Swipe(document.getElementById("ptr"));

function startup() {
  let swipe = new Swipe();
  swipe.listener();
}
