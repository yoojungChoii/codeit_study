import { useState } from "react";

const counter = () => {
  // state 생성
  const [state, setState] = useState(0);

  return (
    <div>
      <h1>State 값 : {state}</h1>
      <button onClick={() => setState(state + 1)}>1씩 증가</button>
    </div>
  );
};
