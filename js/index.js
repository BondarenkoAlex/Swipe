import '../style/style.css';
import Swipe3 from './Swipe';

window.onload = function () {
  startup();
};

//let swipe = new Swipe(document.getElementById("ptr"));

function startup() {
  let swipe = new Swipe3();
  swipe.listener();
}
