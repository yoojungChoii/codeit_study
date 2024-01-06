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

//=========================================
// uSeState에 너비와 높이 데이터를 동시에 저장하는 객체를 전달하여 활용하는 예

const Area = () => {
  const [size, setSize] = useState({ width: 200, height: 100 });

  return (
    <div>
      <h1>
        너비 : {size.width}, 높이 : {size.height}
      </h1>
      <button
        onClick={() => {
          const copy = { ...size };
          copy.width += 20;
          setSize(copy);
        }}
      ></button>
      <button
        onClick={() => {
          const copy = { ...size };
          copy.height += 10;
          setSize(copy);
        }}
      >
        높이 증가
      </button>
    </div>
  );
};
