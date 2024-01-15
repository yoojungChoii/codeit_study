//버튼을 클릭하면 message prop으로 전달된 값을 경고 대화 상자에 보여주는 예제

// COntrolButton 함수를 생성 -> 컴포넌트다!
// button에 onClick 이벤트를 만들었다.
// alert를 주는 이벤트
const ControlButton = ({ message, children }) => {
  return <button onClick={() => alert(message)}>{children}</button>;
};

// ControlBUtton 컴포넌트를 사용.
// message prop으로 속성을 바꾸어준다.
const ControlPanel = () => {
  return (
    <>
      <ControlButton message="음악을 재생합니다.">▶ Play</ControlButton>
      <ControlButton message="재생을 중지합니다.">▣ Stop</ControlButton>
    </>
  );
};

//====================================================
// 이벤트 핸들러를 props로 전달하기

// Button 컴포넌트 : onClick과 children을 props로 받아 랜더링
// button의 내용은 children으로.
// button을 눌렀을 때는 onClick prop으로 받은 이벤트 발생
const Button = ({ onClick, children }) => {
  return <button onClick={onClick}>{children}</button>;
};

// PlayButton 컴포넌트 : musicName prop을 받아
// 재생 알림을 뜨게하는 handlePlayClick 함수를 만든다.
// 그리고  눌렀을 때 재생 알림이 뜨는 Play{$musicName} 버튼을 만든다.
const PlayButton = ({ musicName }) => {
  const handlePlayClick = () => {
    alert(`${musicName}을 재생합니다.`);
  };

  return <Button onClick={handlePlayClick}> Play "{musicName}"</Button>;
};

// StopButton 컴포넌트 : 눌렀을 때 재생중지 알람이 뜨는 버튼을 리턴함
const StopButton = () => {
  return <button onClick={() => alert("재생을 중지합니다.")}> Stop</button>;
};

// ControlPanel2 컴포넌트 : PlayButton 컴포넌트와 StopButton 컴포넌트를 사용.
const ControlPanel2 = () => {
  return (
    <>
      <PlayButton musicName="TRUST" />
      <StopButton />
    </>
  );
};
