import * as R from 'ramda';

const array = [1, 2, 3];

R.pipe(
  R.chain(n => [n, n]),
  R.tap(n => console.log(n)),
)(array);

R.pipe(
  R.chain(R.append, R.head),
  R.tap(n => console.log(n)),
)(array)

// 매개변수 1개일 떄는 flatMap

export const flapMap = (f) => R.pipe(
  R.map(f),
  R.flatten
)