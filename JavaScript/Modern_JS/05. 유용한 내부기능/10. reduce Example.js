// reduce 메서드 : Accumulator를 이용해 이전 함수의 리턴 값을 전달 받고
// return값을 다음 함수에 전달해 리턴 값을 활용할 수 있는 메서드.
// 사용 예시
// const numbers = [1, 2, 3, 4];
// numbers.reduce((acc, el, i, arr) => {
// 	return nextAccValue;
// }, initialAccValue);

const data = [ 
  { company: 'Naber', month: 3 },
	{ company: 'Amajohn', month: 12 },
	{ company: 'Coogle', month: 10 },
  { company: 'Ittel', month: 6 },
  { company: 'Sasung', month: 4 },
  { company: 'CaCao', month: 3 },
	{ company: 'Microhard', month: 17 },
];

// data 객체에 reduce 메서드 적용.
// 이전 리턴 값을 전달 받을 acc,
// 현재 요소를 가리키는 el, 인덱스 i
const totalCareer = data.reduce((acc, el, i) => {
// acc에 현재요소의 month객체 값을 쌓아간다.
  return acc += el.month; 
  // 첫 reduce 시 acc에 초기 값을 줘야하기에 0을 줌
}, 0);

console.log(`상원이의 경력은 총 ${totalCareer}개월입니다.`);