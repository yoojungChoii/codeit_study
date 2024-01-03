export async function getFoods() {
  //response에 await 후 fetch로 받은 값을 담는다
  const response = await fetch("https://learn.codeit.kr/{네자리번호}/foods");
  // body에는 response로 받은 값을 json으로 변환한 값을 담는다.
  const body = await response.json();
  return body;
}

// handleLoadClick함수 선언. async로 비동기 함수 선언
const handleLoadClick = async () => {
  const { foods } = await getFoods();
  setItems(foods);
};
