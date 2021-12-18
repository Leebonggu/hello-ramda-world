import * as R from 'ramda';

type NumToNumFunc = (n: number) => number

const apployDiscount = (minimun: number, discount: number): NumToNumFunc => (
  R.pipe(
    R.ifElse(
      R.flip(R.gte)(minimun),
      R.flip(R.subtract)(discount),
      R.identity,
    ),
    R.tap(amount => console.log(amount))
  )
)


const calcPrice = apployDiscount(5000, 500);

calcPrice(5000)
calcPrice(6000)
calcPrice(4500)