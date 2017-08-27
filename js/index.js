//import Swipe from './Swipe';
import Swipe2 from './Swipe2';

window.onload = function () {
  startup();
};

//let swipe = new Swipe(document.getElementById("ptr"));

function startup() {
  let swipe = new Swipe2();
  swipe.listener();
}
