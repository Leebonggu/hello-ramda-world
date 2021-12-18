import R from 'ramda';

const numbers: number[] = R.range(1, 9 + 1);
R.tap(n => console.log(n))(numbers);

// tab
// 2차 고차함수 형태로 현재 값을 파악하게 도와주는 함수
// R.tap(callback)(array)