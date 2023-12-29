// 상태를 사용하려면 React의 기능이기 때문ㅇ
//React에 있는 상태를 사용하기에 import 해줘야한다.
// useState라는 상태 사용 메서드를 추가적으로 import
import React, {useState} from "react";
import OddEvenResult from "./OddEvenResult";

//props를 매개변수 통해 받아와 사용
const Counter = ({initialValue}) => {
const [count, setCount] = useState(initialValue);

const onIncrease = () => {
  setCount(count + 1);
}

const onDecrease = () => {
  setCount(count - 1);
}

  return (
    <div>
      <h2>{count}</h2>
      <button onClick = {onIncrease}>+</button>
      <button onClick = {onDecrease}>-</button>
      <OddEvenResult count = {count}/>
    </div>
  )
}

// Props의 기본 디폴트 값 설정
Counter.defaultProps = {
  initialValue:0
}

export default Counter;