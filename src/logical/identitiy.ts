import * as R from 'ramda';
import { flapMap } from './flatMap';

// 구조상 필요할 곳이 있을 수 있다
const identity = x => x;

const unnest = flapMap(R.identity);

const array = [[1], [2], [3]];

R.pipe(
  unnest,
  R.tap(n => console.log(n))
)(array)
