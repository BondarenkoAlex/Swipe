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
    return this;
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
    return this;
  }

  updateTouchElement(touch, scrollTop, scrollHeight, clientHeight) {
      const { identifier } = touch;

      let touchElement = this[identifier];
      if (touchElement === undefined) {
        touchElement = this._setTouchElement(touch, scrollTop, scrollHeight, clientHeight);
      } else {
        touchElement.update(touch, scrollTop, scrollHeight, clientHeight);
      }
    return touchElement;
  }

  deleteTouchElements(touches) {
    Object.keys(touches).map((key) => {
      const touch = touches[key];
      const { identifier } = touch;

      if (this[identifier] !== undefined) {
        delete this[identifier];
      }
    });
    return this;
  }

  getFirstTouchElement() {
    let touchElement = null;
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
    return this[identifier];
  }
}

export default TouchElementList;