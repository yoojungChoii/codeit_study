// HTMLElement 타입이나 Input에만 value를 쓸 수 있기 때문에
// Input 타입이라는 걸 명시해줘야함 -> HTMLInputElement
const usernameInput = document.getElementById("username") as HTMLInputElement;
const submitButton = document.getElementById("submit") as HTMLButtonElement;

usernameInput.focus();
// handleClick 자리에 function(e)를 직접 써주면 추론이 된다.
// 인라인 활용법이지만 추론할 때 써도 됨
submitButton.addEventListener("click", handleClick);

// 이벤트는 기본적으로 Event라는 타입을 사용.
// 하지만 굉장히 보편적이라 구체적으로 ->
function handleClick(e: Event) {
  e.preventDefault();
  const message = `${usernameInput.value}님 반갑습니다!`;
  alert(message);
}
