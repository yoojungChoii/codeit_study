import { useState } from 'react';
import Button from './Button';
import Dice from './Dice';

function random(n) {
  return Math.ceil(Math.random() * n);
}

function App() {
  // num은 현재값, setNum은 바꿔줄 값, 1은 초기값 
  const [num, setNum] = useState(1);
  const [sum, setSum] = useState(0);
  const [gameHistory, setGameHistory] = useState([]);

  //num 값을 3으로 바꿔주는 함수
  const handleRollClick = () => {
    const nextNum = random(6);
    setNum(nextNum);
    setSum(sum + nextNum);
    //push로 넣으면 참조형이기 때문에 바뀌지 않음
    //배열을 ...로 다시 넣어주고 nextNum까지 넣어서 새 배열 만들어줌
    gameHistory([...gameHistory, nextNum]);
    setGameHistory(gameHistory);
  };

  const handleClearClick = () => {
    setNum(1);
    setSum(0);
    setGameHistory([]);
  }

  // return은 소괄호로 감싸면 여러줄 작성 가능
  return (
  <div>
    <div>
      <Button onClick={handleRollClick}>던지기</Button>
      <Button onClick={handleClearClick}>처음부터</Button>
    </div>
    <div>
      <h2>나</h2>
      <Dice color = "blue" num={num} />
      <h2>총점</h2>
      <p>{sum}</p>
      <h2>기록</h2>
      <p>{gameHistory.join(', ')}</p>
    </div>
  </div>
  );
}

export default App;