import test from 'ava';
import zuhlektion from '.';

test('throws a TypeError if `compare` is not a function', t => {
  const err = t.throws(() => zuhlektion([], 123), TypeError);
  t.is(err.message, 'Expected a function, got number');

  t.notThrows(() => zuhlektion([], () => {}));
});

test('throws a TypeError if `arr` is not an array', t => {
  const err = t.throws(() => zuhlektion(123), TypeError);
  t.is(err.message, 'Expected an array, got number');

  t.notThrows(() => zuhlektion([]));
});

test('returns `arr` if `arr` is empty', t => {
  const arr = [];
  const sorted = zuhlektion(arr);

  t.deepEqual(sorted, arr);
});

test('correctly sorts an array of numbers', t => {
  const arr = [ 9, 7, 4, 2, 1, 3, 8, 6, 5, ];
  const sorted = zuhlektion(arr);
  const expected = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, ];

  t.deepEqual(sorted, expected);
});

test('correctly sorts duplicate values', t => {
  const arr = [ 9, 3, 9, 9, 4, 3, 4, 1, ];
  const sorted = zuhlektion(arr);
  const expected = [ 1, 3, 3, 4, 4, 9, 9, 9, ];

  t.deepEqual(sorted, expected);
});

test('correctly sorts with a custom compare function', t => {
  const arr = [ 9, 7, 4, 2, 1, 3, 8, 6, 5, ];
  const compare = (a, b) => b - a;
  const sorted = zuhlektion(arr, compare);
  const expected = [ 9, 8, 7, 6, 5, 4, 3, 2, 1, ];

  t.deepEqual(sorted, expected);
});
