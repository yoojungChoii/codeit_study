function GetTodolist() {
  // 서버로 리퀘스트를 보내고 리스폰스를 받는 함수
  // 파라미터로 넘어온 url로 리퀘스트를 보낸다.
  fetch("/todos")
    // 서버로부터 받은 response를 사용, 처리하는 부분
    // response는 하나의 객체가 되어 파라미터가 된다.
    // response가 온 다음에야 실행되는 '콜백 함수'
    // then은 promise의 메서드.
    // 콜백을 '등록'해주는 메서드 (실행이 아님)
    .then((response) => response.text())
    // 이전 콜백의 리턴 값인 response.text()가 result-파라미터로 넘어감
    // : response의 내용
    .then((result) => {
      console.log(result);
    });
  return result;
}

fetch("") // fetch는 promise를 리턴,
  // promise는 상태 정보를 가짐. 성공했나? 실패했나?
  // then은 그 promise 객체의 메서드
  // -> fullfiled 상태가 됐을 때 실행할 콜백을 등록하는 메소드
  // 작업성공결과는 첫번째 콜백의 파라미터(response)로 넘어옴
  .then((response) => response.text())
  // text는 프로미스 객체를 리턴한다.
  // then메소드는 새로운 각각의 프로미스 객체를 리턴하기 때문에
  // then메소드 뒤에 then메소드를 또 붙일 수 있다.
  // promise 객체 이외의 값을 갖게되면 fullfiled상태
  .then((result) => {
    console.log(result);
  });

// async와 await
fetch("")
  .then((response) => response.text())
  .then((result) => {
    console.log(result);
  });

// async는 함수 안에 비동기적으로 실행될 부분이 있다는 것을 의미
async function fetch() {
  // 그건 바로 await이 붙은 코드. -> 기다리다
  // await은 프로미스 객체를 리턴하는 코드 앞에 붙였다.
  // await은 뒤의 코드를 실행 후 그 코드가 리턴하는 프로미스 객체를 기다려줌
  // fullfiled 상태가 되면 작업 성공 결과를 추출해서 리턴.
  const response = await fetch("");
  const result = await response.text();
  console.log(result);
}
fetch();
