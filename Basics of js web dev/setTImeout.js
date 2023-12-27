// setTimeout : 일정 시간이 지난 후에 원하는 함수를 예약 실행
function sayHi() {
  alert('안녕하세요.');
}
// 1000밀리초(1초) 이후에 sayHi 함수 실행
setTimeout(sayHi, 1000);