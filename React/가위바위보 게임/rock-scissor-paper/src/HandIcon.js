import rock from './assets/rock.svg'

// 함수의 첫 글자는 Rock
function HandIcon() {
// img 같이 내용 없는 태그는 /로 self-closing 해야함
// return JSX태그
  return <img src = {rock} alt = "rock" />;
}

export default HandIcon;