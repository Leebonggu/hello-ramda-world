import R from 'ramda';

/*
  람다 라이브러리 함수들은 자동 커리 방식으로 동작할 수 있도록 매개변수의 개수가 모두 정해져 있다
  따라서 가변인수 형태로 구현된 함수는 없다

  만약 아래와 같은 sum 함수를 N차 고차함수로 만들고 싶다면 R.curryN 함수를 사용할 수 있다.
  R.curryN는 N개의 매개변수를 가진 1차함수를 N개의 커리 매개변수를 가지는 N차 고차함수로 만든다
*/

const sum = (...numbers: number[]): number => (
  numbers.reduce((result: number, sum: number) => result + sum, 0)
)

const curreidSum = R.curryN(4, sum);

console.log(
  curreidSum(),
  curreidSum(1)(2),
  curreidSum(1)(2)(3),
  curreidSum(1)(2)(3)(4),
)