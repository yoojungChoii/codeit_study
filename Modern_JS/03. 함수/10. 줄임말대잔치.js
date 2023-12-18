// arguments : 전달한 argument를 전부 갖고 있는 객체
//             유사배열로서 indexing, .length, for of문 등 사용 가능


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