import Touch from './Touch';
import Element from './Element';
import TouchElement from './TouchElement';

class TouchElementList {
  /**
   *
   * @param touches
   * @param scrollTop
   * @param scrollHeight
   * @param clientHeight
   */
  setTouchElements(touches, scrollTop, scrollHeight, clientHeight) {
    Object.keys(touches).map((key) => {
      const touch = touches[key];
      const { identifier } = touch;

      if (this[identifier] === undefined) {
        this._setTouchElement(touch, scrollTop, scrollHeight, clientHeight);
      }
    });
  }

  updateTouchElements(touches, scrollTop, scrollHeight, clientHeight) {
    Object.keys(touches).map((key) => {
      const touch = touches[key];
      const { identifier } = touch;

      let touchElement = this[identifier];
      if (touchElement === undefined) {
        this._setTouchElement(touch, scrollTop, scrollHeight, clientHeight);
      } else {
        touchElement.update(touch, scrollTop, scrollHeight, clientHeight);
      }
    });
  }

  deleteTouchElements(touches) {
    Object.keys(touches).map((key) => {
      const touch = touches[key];
      const { identifier } = touch;

      if (this[identifier] !== undefined) {
        delete this[identifier];
      }
    });
  }

  getFirstTouchElement() {
    let touchElement;
    Object.keys(this).some(key => (touchElement = this[key], true));
    return touchElement;
  }

  /**
   *
   * @private
   */
  _setTouchElement(touch, scrollTop, scrollHeight, clientHeight) {
    const { identifier } = touch;
    const value = new Touch(touch);
    const element = new Element(scrollTop, scrollHeight, clientHeight);
    this[identifier] = new TouchElement(value, element);
  }
}

export default TouchElementList;