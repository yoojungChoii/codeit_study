// fetch 함수의 기분
fetch('api 주소')
  .then(res => res.json())
  .then(res => {
    // data를 응답 받은 후 동작할 코드
  });

  // GET method : fetch()의 default method
  fetch('https://api.google.com/user/3')
  .then(res => res.json())
  .then(res => {
    if (res.success) {
        console.log(`${res.user.name} 님 환영합니다`);
    }
  });


  // POST method : 
  fetch('https://api.google.com/user', {
    //두번째 인자
    method: 'post',
    // JSON형태 string타입으로 변환해서 전송하기
    body: JSON.stringify({
        name: "YJ",
        batch: 1
    })
  })
  // 이 res는 response의 정보를 담고있는 객체이다.
  // 응답으로 받은 JSON 데이터를 사용하기 위해선 응답 받은 객체의 JSON함수를 호추랗고 리턴해야함
  .then(res => res.json())
  // 두번째 tehn에서 응답 body의 데이터를 받을 수 있다. 
  .then(res => {
    if (res.success) {
        alert("저장 완료");
    }
  })