import Touch from './Touch';
import Element from './Element';
import TouchElement from './TouchElement';

class TouchElementList {
  _activeTouchElement = null;
  get activeTouchElement() {
    return this._activeTouchElement;
  }

  _prevActiveTouchElement = null;
  get prevActiveTouchElement() {
    return this._prevActiveTouchElement;
  }

  _touchElements = Object.create(null);
  get touchElements() {
    return this._touchElements;
  }

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

      let touchElements = this._touchElements;
      if (touchElements[identifier] === undefined) {
        touchElements[identifier] = TouchElementList.buildTouchElement(touch, scrollTop, scrollHeight, clientHeight);
      }
    });
    const activeTouchElement = this._getFirstTouchElement();
    this._setActiveTouchElement(activeTouchElement);
    return this;
  }

  updateTouchElements(touches, scrollTop, scrollHeight, clientHeight) {
    Object.keys(touches).map((key) => {
      const touch = touches[key];
      const { identifier } = touch;

      let touchElements = this._touchElements;
      if (touchElements[identifier] === undefined) {
        touchElements[identifier] = TouchElementList.buildTouchElement(touch, scrollTop, scrollHeight, clientHeight);
      } else {
        touchElements[identifier].update(touch, scrollTop, scrollHeight, clientHeight);
      }
    });
    return this;
  }

  deleteTouchElements(touches) {
    Object.keys(touches).map((key) => {
      const touch = touches[key];
      const { identifier } = touch;

      if (this._touchElements[identifier] !== undefined) {
        delete this._touchElements[identifier];
      }
    });

    const { identifier } = this._activeTouchElement.touch;
    if (this._touchElements[identifier] === undefined) {
      // Если активный activeTouchElement был удален, то получаем новый, если такой есть
      const activeTouchElement = this._getFirstTouchElement(); //touchElement or null
      this._setActiveTouchElement(activeTouchElement);
    }

    return this;
  }

  /**
   * @private
   */
  _getFirstTouchElement() {
    let touchElement = null;
    Object.keys(this._touchElements).some(key => (touchElement = this._touchElements[key], true));
    return touchElement;
  }

  _setActiveTouchElement(touchElement) {
    this._prevActiveTouchElement = this.activeTouchElement;
    this._activeTouchElement = touchElement;
  }

  /**
   *
   * @private
   */
  static buildTouchElement(touch, scrollTop, scrollHeight, clientHeight) {
    const { identifier } = touch;
    const value = new Touch(touch);
    const element = new Element(scrollTop, scrollHeight, clientHeight);
    return (new TouchElement(value, element));
  }
}

export default TouchElementList;