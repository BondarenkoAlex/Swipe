//import Swipe from './Swipe';
import Swipe3 from './Swipe3';

window.onload = function () {
  startup();
};

//let swipe = new Swipe(document.getElementById("ptr"));

function startup() {
  let swipe = new Swipe3();
  swipe.listener();
}
