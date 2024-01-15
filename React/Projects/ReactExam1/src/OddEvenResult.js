//count를 props로 받고 있다.
const OddEvenResult = ({ count }) => {
  console.log(count);
  return <> {count % 2 === 0 ? "짝수" : "홀수"}</>
}

export default OddEvenResult;