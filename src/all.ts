import * as R from 'ramda';
type Status = number;
type StatusList = Status[];
interface List {
  title: string;
  status: number[];
}

const status: StatusList = [1, 3,2,4];
const list: List[] = [
  {
    title: 'one',
    status: [1]
  },
  {
    title: 'two',
    status: [1, 2]
  },
  {
    title: 'three',
    status: [1, 2, 3]
  },
  {
    title: 'four',
    status: [1, 2, 3, 4]
  },
];


{
  // 1차
  const f = (list: List[]) => R.filter(
    li => status.every((v: Status) => li.status.includes(v)),
    list
  )

  console.log(f(list));

  //2차 ramda
  const isAllStatusIncluded = R.equals(true)
  const filterStatusRamdaWithEquals = (list: List[]) => R.filter(
    li => R.all(
      isAllStatusIncluded, // R.equals(true)
      R.map(selectedStatus => R.includes(selectedStatus, li.status || []), status), // array
    ), // booelan
    list, // array
  )

  console.log(filterStatusRamdaWithEquals(list));

  //3차 ramda 수정
  const filterStatusRamdaWithOnlyAll = (list: List[]) => R.filter(
    li => R.all((selectedStatus) => !R.isNil(li.status) && R.includes(selectedStatus, li.status))(status),
    list,
  )
  console.log(filterStatusRamdaWithOnlyAll(list));
}