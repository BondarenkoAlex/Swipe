class Direction {
  _hor = null;
  _ver = null;
  //
  // constructor(hor, ver) {
  //   this._hor = hor;
  //   this._ver = ver;
  // }

  get hor() {
    return this._hor;
  }

  set hor(value) {
    this._hor = value;
  }

  get ver() {
    return this._ver;
  }

  set ver(value) {
    this._ver = value;
  }
}

export default Direction;
