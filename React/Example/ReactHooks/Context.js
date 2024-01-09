// Context : 데이터의 흐름이 부모 컴포넌트로부터 자식 컴포넌트에게 전달되는 props와 state와는 달리
// 데이터의 흐름과 상관없는 전역적인 데이터를 다룰 때 사용

import { createContext, useContext } from "react";

const HelloContext = createContext();

const App = () => {
  return (
    <HelloContext.Provider value="Hello, React!">
      <FirstCOmponent />
    </HelloContext.Provider>
  );
};

//...

const ComponentRequireingDate = () => {
  const value = useContext(HelloContext);
  return <h1>{value}</h1>;
};
