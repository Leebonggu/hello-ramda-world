import R from 'ramda';

// 포인트 없는 함수
const array: number[] = R.range(1, 10);

const dump = R.pipe(
  R.tap(n => console.log(n))
)

dump(array);