// HandButton.js 컴포넌트에서 전달된 value를 받아와 
// 해당하는 아이콘을 표시한다.

import rockImg from './assets/rock.svg';
import scissorImg from './assets/scissor.svg';
import paperImg from './assets/paper.svg';

// 여러 변수에 저장할 때 객체에 묶는게 좋음
const IMAGES = {
  rock: rockImg,
  scissor: scissorImg,
  paper: paperImg,
};

// 함수의 첫 글자는 대문자
// img 같이 내용 없는 태그는 /로 self-closing 해야함

function HandIcon(props) {
  return (
      <img src={IMAGES[props.value]} alt="{props.value}" />
  )
}

// props를 파라미터로 넣는 대신 destructuring 문법을 사용
// function HandIcon({ value }) {
//   const src = IMAGES[value];
//   return <img src={src} alt={value} />;
// }


export default HandIcon;