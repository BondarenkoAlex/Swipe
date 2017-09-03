export const isObject = function isObject(obj) {
  return obj && typeof obj === 'object' && obj.constructor === Object;
};

export const isArray = function isArray(obj) {
  return obj && typeof obj === 'object' && obj.constructor === Array;
};

export const isString = function isString(obj) {
  return typeof obj === 'string' || (typeof obj === 'object' && obj.constructor === String);
};

export const isPromise = function isPromise(obj) {
  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
};