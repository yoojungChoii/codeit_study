// this
function printThisTitle() {
  console.log(this.title);
}

const courseA = {
  title: '프로그래밍 기초 in JavaScript',
  printTitle: printThisTitle, // courseA(this)의 title을 가리킴
};

const courseB = {
  title: '컴퓨터 개론',
  printTitle: courseA.printTitle, //couseA의 printTitle은 this.title이다.
};

const courseC = {
  title: '웹 퍼블리싱',
  printTitle: courseB.printTitle, //couseB의 printTitle은 t
};

courseA.printTitle();
courseB.printTitle();
courseC.printTitle();