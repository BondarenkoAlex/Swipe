import Touch from './Touch.js';

class TouchByKey {
  //_byKey = {};

  setTouch(touch) {
    const { identifier } = touch;
    this[identifier] = new Touch(touch);
  }

  updateTouch(touch) {
    const { identifier } = touch;
    this[identifier].updateTouch(touch);
  }

  resetStart(touch) {
    const { identifier } = touch;
    this[identifier].resetStart(touch);
  }

  delete(touch) {
    const { identifier } = touch;
    delete this[identifier];
  }
}

export default TouchByKey;