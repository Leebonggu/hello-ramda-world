import * as R from 'ramda';

// flip -> 함수의 매개변수 순서를 서로 바꿔주는 역할

const flip = cb => a => b => cb(b)(a);

const reverseSubstract = flip(R.subtract);

const newArray = R.pipe(
  R.map(reverseSubstract(10)),
  R.tap(a => console.log(a))
)(R.range(1, 9 + 1))

console.log(newArray);
