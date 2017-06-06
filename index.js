'use strict';
const isArr = x => Object.prototype.toString.call(x) === '[object Array]';
const isFn = x => Object.prototype.toString.call(x) === '[object Function]';

module.exports = (compare, arr) => {
  if (!isFn(compare)) {
    throw new TypeError(`Expected a function, got ${typeof compare}`);
  }

  if (!isArr(arr)) {
    throw new TypeError(`Expected an array, got ${typeof arr}`);
  }

  return arr;
};
