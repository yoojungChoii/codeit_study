import { useState } from "react";

// isLoggedIn이 true이면 인사를, 아니면 로그인하라는 안내를 반환.
// else가 아닌 return을 쓴 이유는 가독성 때문이다.
// JS에선 return이 사용된 즉시 함수가 종료된다.
const Greeting = (props) => {
  if (props.isLoggedIn) {
    return (
      <p>
        안녕하세요 <u>홍길동님</u>
      </p>
    );
  }

  return <p>로그인 후 이용하세요.</p>;
};

// Button 컴포넌트. name, onClick 프롭스
// {name}버튼을 클릭했을 때 {onClick} 프롭을 내려받아 작동
const Button = ({ name, onClick }) => {
  return <button onClick={onClick}>{name}</button>;
};

// isLoggedIn의 상태를 지정하는(useState) 함수 LoginPanel
// 기본 값은 false
const LoginPanel = () => {
  const [isLoggedIn, setState] = useState(false);

  // setState를 true가 되게 만들어주는 함수 handleLoginClick
  const handleLoginClick = () => {
    setState(true);
  };

  // setState를 false가 되게 만들어주는 함수 handleLogoutClick
  const handleLogoutClick = () => {
    setState(false);
  };

  // isLoggedIn이 true이면 Logout버튼 활성화, 클릭하면 isLoggedIn 상태가 true로 바뀜
  let button;
  if (isLoggedIn) {
    button = <Button name="Logout" onClick={handleLogoutClick} />;
  } else {
    button = <Button name="Login" onClick={handleLoginClick} />;
  }
  return (
    <>
      {button}
      <Greeting isLoggedIn={isLoggedIn} />
    </>
  );
};
