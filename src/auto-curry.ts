import R from 'ramda';

// 람다 함수의 2가지 사용법
// 1. 일반함수
// 2. 고차함수

console.log(
  R.add(1, 2), // 3 
  R.add(1)(2), // 3
);