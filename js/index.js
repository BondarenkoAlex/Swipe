import '../style/style.css';
import Swipe from './Swipe';

window.onload = function () {
  startup();
};

//let swipe = new Swipe(document.getElementById("ptr"));

function startup() {
  const elem = document.getElementById("ptr-list");
  const swipe = new Swipe(elem);
  swipe.addListener();

  let promise = new Promise((resolve, reject) => {

    setTimeout(() => {
      // переведёт промис в состояние fulfilled с результатом "result"
      resolve("result");
    }, 5000);

  });

  swipe.onRefresh(promise);
}
