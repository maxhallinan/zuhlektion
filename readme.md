# zuhlektion

Simple in-place selection sort.


## Install

```
$ npm install --save zuhlektion
```


## Usage

```js
const zuhlektion = require('zuhlektion');

zuhlektion([ 9, 7, 4, 2, 1, 3, 8, 6, 5, ]);
//=> [ 1, 2, 3, 4, 5, 6, 7, 8, 9, ]

zuhlektion([ 9, 7, 4, 2, 1, 3, 8, 6, 5, ], (a, b) => b - a);
//=> [ 9, 8, 7, 6, 5, 4, 3, 2, 1, ]
```


## API

### zuhlektion(arr, compare)

Sorts `arr` in place and returns `arr`.

#### arr

Type: `Array`

The array to sort.

#### compare(a, b)

Type: `Function`
Default: `(a, b) => a - b`

A function that defines the sort order by comparing two elements of `arr`:

- `compare(a, b) < 0`: `a` is sorted lower than `b`;
- `compare(a, b) > 0`: `b` is sorted lower than `a`;
- `compare(a, b) === 0`: `a` and `b` retain their relative positions.


## License

MIT © [Max Hallinan](https://github.com/maxhallinan)
