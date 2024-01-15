// 클릭 이벤트가 발생하면 onClick prop으로 전달된 함수를 호출하며,
// HandIcon.js 컴포넌트에게 클릭된 버튼의 value를 전달한다.

import HandIcon from './HandIcon.js';

function HandButton({ value, onClick }) {
  const handleClick = () => onClick(value);
  return 
  // 아래 코드에서 HandButton 컴포넌트의 value prop을 
  // HandIcon 컴포넌트에 전달하고 있다. 
  // 이렇게 하면 HandIcon 컴포넌트에서는 
  // props.value를 통해 전달된 값을 받아와 사용할 수 있다.
    <button onClick = {handleClick}> 
      <HandIcon value = {value} />
    </button>;
}

export default HandButton;