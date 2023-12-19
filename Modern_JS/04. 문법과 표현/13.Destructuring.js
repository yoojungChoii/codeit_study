//함수에서의 Destructuring 

//1. 리턴값이 배열일 때
function getArray() {
  return['컴퓨터', '냉장고', '세탁기'];
}
// el1부터 순서대로 컴퓨터, 냉장고, 세탁기
  const [el1, el2, el3] = getArray();

  console.log(el1);
  console.log(el2);
  console.log(el3);



//2. rest parameter가 배열이라는 점을 활용한 예시

//여러개의 argument를 전달 받는 함수가 아니라, 배열 하나를 argument로 전달 받게 만들 수 있다. 
function printWinners ([macbook, ipad, airpods, ...coupon]) { //argument는 rank라는 배열이다.
  console.log(`맥북 : ${macbook}`);
  console.log(`맥북 : ${ipad}`)
  console.log(`맥북 : ${airpods}`)
  console.log('코드잇 수강권 주인공은')

  for (let user of coupon) {
    console.log(`'${user}'님`);
  }
  
  console.log(`이상 총 ${coupon.length}명 입니다.`);
}

const ranks = ['효준', '효신', '재훈', '소원', '현승', '종훈'];
printWinners(ranks);



//3. 파라미터를 객체의 형태로 작성한 함수
const macbook = {
  title: '맥북 프로 16형',
  price: 3690000,
  color: 'silver',
  memory: '16GB',
  storage: '1TB SSD 저장 장치',
  display: '16형 Retina 디스플레이',
};

//파라미터에서 destructuring 문법을 사용
function printSummary({ title, color, price }) {
  console.log(`선택한 상품은 '${title}'입니다.`);
  console.log(`색상은 '${color}'이며,`);
  console.log(`가격은 '${price}'원 입니다.`);
}

printSummary(macbook);