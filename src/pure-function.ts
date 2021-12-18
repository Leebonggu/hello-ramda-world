import R from 'ramda';

const originalArray: number[] = [1, 2, 3];
const resultArrray = R.pipe(
  R.map(R.add(1)),
)(originalArray);

console.log(originalArray);
console.log(resultArrray);