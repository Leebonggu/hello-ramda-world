import * as R from 'ramda';

const array = [1, 2, 3];


export const flapMap = (f) => R.pipe(
  R.map(f),
  R.flatten
)

R.pipe(
  flapMap((n: unknown) => [n, n]),
  R.tap(n => console.log(n)),
)(array);

// 매개변수 1개일 떄는 flatMap
