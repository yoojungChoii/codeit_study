
// arguments : 전달한 argument를 전부 갖고 있는 객체
//             유사배열로서 indexing, .length, for of문 등 사용 가능

//10. 줄임말대잔치
//arguments 객체를 활용해서 함수를 호출할 때 전달하는 단어들의 
//첫 글자만 따서 줄임말을 만들어주는 firstWords 함수를 완성하는 코드.

function firstWords() {
  let word = '';
  // arguments의 길이만큼 반복하는 반복문
  for(let i = 0; i < arguments.length; i++) {
    //word 변수에 arguments i번째 인자의 인덱스 0을 가진 글자 저장
     word += arguments[i][0]
  }
    console.log(word);  
}
firstWords('나만', '없어', '고양이');
firstWords('아니', '바나나말고', '라면먹어');
firstWords('만두', '반으로', '잘라먹네', '부지런하다');
firstWords('결국', '자바스크립트가', '해피한', '지름길');
firstWords('빨간색', '주황색', '노란색', '초록색', '파란색', '남색', '보라색');

//---------------------------------------------------

// - **Rest Parameter :**  
//  나머지 파라미터 전달 : …파라미터
//  배열 메소드 사용 가능.
// 11. 1세대는 거르는게 답

// rest parameter를 활용해서 함수를 호출할 때 여러 개의 아규먼트를 전달할 경우 첫 번째 아규먼트는 무시하고 
// 두 번째 아규먼트 부터 하나씩 콘솔에 출력하는 ignoreFirst 함수를 완성해 주세요!

//1번째 파라미터 제외한 나머지를 args로 전달
function ignoreFirst(gen1, ...args) {
  for (let rests of args) {
    console.log(rests)
  }
}
ignoreFirst('1세대', '2세대', '3세대');
ignoreFirst('곰팡이', '강아지', '고양이');
ignoreFirst(20, 9, 18, 19, 30, 34, 40);