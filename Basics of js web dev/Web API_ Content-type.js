// request 보낼 때 직접 Content-type 헤더 값 설정하기

// 보낼 객체의 정보
const newMember = {
  name: 'Jerry',
  email: 'jerry@codeit.kr',
  department: 'engineering',
};

// fetch 함수 사용
fetch('https://learn.codeit.kr/api/members', {
  // POST request method를 보낸다.
  method: 'POST',
  headers: { // 추가된 부분 : header 안에 headers 프로퍼티 생성
  // content-Type은 json 타입
    'Content-Type': 'application/json',
  },
  //추가할 정보를 string 타입으로 바꿔준다.
  body: JSON.stringify(newMember),
})
  .then((response) => response.text())
  .then((result) => { console.log(result); });