'use strict';
const isArr = x => Object.prototype.toString.call(x) === '[object Array]';
const isFn = x => Object.prototype.toString.call(x) === '[object Function]';
const difference = (a, b) => a - b;

module.exports = (arr, compare = difference) => {
  if (!isFn(compare)) {
    throw new TypeError(`Expected a function, got ${typeof compare}`);
  }

  if (!isArr(arr)) {
    throw new TypeError(`Expected an array, got ${typeof arr}`);
  }

  let a;
  let b;

  for (let i = 0; i <= arr.length; i++) {
    a = arr[i];

    for (let j = i + 1; j <= arr.length; j++) {
      b = arr[j];

      if (compare(a, b) > 0) {
        a = arr[j];
        b = arr[i];

        arr[i] = a;
        arr[j] = b;
      }
    }
  }

  return arr;
};
