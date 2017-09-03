import '../style/style.css';
import Swipe from './Swipe';
import { DIRECTION } from './constants';

window.onload = function () {
  startup();
};

//lconst resistance = 4; //ослабление
const distance = 50; // дистанция

const classsNames = {
  COMMON: ["onrefresh"],
  [DIRECTION.UP]: ["onrefresh-up"],
  [DIRECTION.DOWN]: ["onrefresh-down"],
};

function startup() {
  const elem = document.getElementById("ptr-list");
  const swipe = new Swipe(elem,50,2, {COMMON: "erer"});
  swipe.addListener();

  swipe.onRefresh(function (distance) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // переведёт промис в состояние fulfilled с результатом "result"
        resolve("result " + distance);
      }, 2000);

    });
  });

  swipe.callbacks({
    onTouchMove: function (touchElement) {
      const { motion } = touchElement;
      console.log(motion.distance);
    }
  });
}
