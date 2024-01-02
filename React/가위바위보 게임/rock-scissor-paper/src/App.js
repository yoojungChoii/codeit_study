import Button from "./Button";
import HandButton from "./HandButton";
import HandIcon from "./HandIcon";
import { compareHand, generateRandomHand } from "./utils";
import useState from "react";

function getResult(me, other) {
  const comparison = compareHand(me, other);
  if (comparison > 0) return "승리";
  if (comparison < 0) return "패배";
  return "무승부";
}
function App() {
  // useState 함수 호출
  const [hand, setHand] = useState("rock");
  const [otherHand, setOtherHand] = useState("rock");

  const handleButtonClick = (nextHand) => {
    const newOtherHand = generateRandomHand();
    setHand(nextHand);
    setOtherHand(newOtherHand);
  };

  const handleClearClick = () => {
    setHand("rock");
    setOtherHand("rock");
  };

  return (
    <div>
      <Button onClick={handleClearClick}>처음부터</Button>
      <p>{getResult(hand, otherHand)}</p>
      <div>
        <HandIcon value={hand} />
        VS
        <HandIcon value={otherHand} />
      </div>
      <div>
        <HandButton value="rock" onClick={handleButtonClick} />
        <HandButton value="scissor" onClick={handleButtonClick} />
        <HandButton value="paper" onClick={handleButtonClick} />
      </div>
    </div>
  );
}

export default App;
