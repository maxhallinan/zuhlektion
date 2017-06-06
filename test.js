import test from 'ava';
import zuhlektion from '.';

test('throws a TypeError if `compare` is not a function', t => {
  const err = t.throws(() => zuhlektion(123, []), TypeError);
  t.is(err.message, 'Expected a function, got number');

  t.notThrows(() => zuhlektion(() => {}, []));
});

test('throws a TypeError if `arr` is not an array', t => {
  const err = t.throws(() => zuhlektion(() => {}, 123), TypeError);
  t.is(err.message, 'Expected an array, got number');

  t.notThrows(() => zuhlektion(() => {}, []));
});
