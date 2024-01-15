//Arrow Funcion

//function 키워드를 지워주고 소괄호 오른편에 =>
let getTwice = (number) => {
  return number * 2;
};
// == 파라미터가 하나인 ArrowFunction은 소괄호 생략 가능
// 파라미터 없거나 두개 이상은 생략 불가
getTwice = number => number * 2;
// 리턴문만 있다면 중괄호와 리턴문 생략 가능

// 리턴값이 객체면 소괄호 한번 감싸주기
const getCodeit = () => ({ name : 'Codeit', });

console.log(getTwice(5));

const myBtn = document.querySelector('#myBtn');

//function 키워드를 지워주고 소괄호 오른편에 =>
myBtn.addEventListener('click', () => {
  console.log('button is clicked!');
})