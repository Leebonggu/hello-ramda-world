import * as R from 'ramda';

const chainTwoFunc = (firstFn ,secondFn) => (x) => {
  console.log(x)
  return firstFn(secondFn(x), x);
}

const array = [1, 2, 3];

R.pipe(
  chainTwoFunc(R.append, R.head),
  R.tap(n => console.log(n)),
)(array)