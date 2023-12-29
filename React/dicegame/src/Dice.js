import diceBlue01 from './assets/dice-blue-1.svg';

// 함수의 첫 글자는 대문자
function Dice() {
  // JS 사용은 중괄호로 감싸기
  // img같이 내용이 없는 태그는 self-closing <~~ />
  return <img src = {diceBlue01} alt="주사위" />
}

export default Dice;