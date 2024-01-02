import Button from './Button';
import Dice from './Dice';

function App() {
  // return은 소괄호로 감싸면 여러줄 작성 가능
  return (
  <div>
    <div>
      <Button>던지기</Button>
      <Button>처음부터</Button>
    </div>
    <Dice color="red" num={2}/>
  </div>
  );
}

export default App;