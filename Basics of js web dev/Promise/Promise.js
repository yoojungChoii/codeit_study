// Promise 객체를 배운 후 fetch 함수 다시 알아보기
console.log('Start1');

fetch('https://jsonplaceholder.typicode.com/users')
// then 메소드는 Promise 객체가 가진 메소드

// pending -> fullfiled 상태가 될 때 (fetch 함수가 Response를 정상적으로 받았을 때)
// 실행할 콜백을 등록하는 then 메소드
// 작업 성공 결과는 첫 번째 콜백의 파라미터 (response)에 넘어온다.
// fullfied상태일 때 등록해둔 콜백이 실행된다. 
  .then((Response) => Response.text())
  //text()는 promise 객체를 리턴하는 메소드. 

  // 첫 번째 then 메소드 콜백이 실행되고 난 후 실행된다. 
  // then 뒤에는 계속 then을 사용 가능 : promise chaining
  .then((result) => { console.log(result); });

console.log('End');