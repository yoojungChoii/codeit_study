//다음 중 객체의 프로퍼티와 메소드를 
//간결하게 표현한 방식이 아닌 것을 선택해 주세요.

//2.
const brand = 'Apple';

const ipad = {
  brand, // brand : brand,
  title: 'iPad',
};

//3.
function getAge() {
  const date = new Date();
  return date.getFullYear() - this.birth + 1;
}
let user = {
  getAge, // getAge : getAge
  name: 'codeit',
  birth: 2017,
};

//4.
user = {
  name: 'codeit',
  birth: 2017,
  getAge() { // function getAge() 
    const date = new Date();
    return date.getFullYear() - this.birth + 1;
  },
};

//5. xxxxx
// user = {
//   name: 'codeit',
//   birth: 2017,
//   () => { //Arrow Function은 반드시 이름이 필요함. 
//     const date = new Date();
//     //Arrow Function에서의 this는 window객체를 가리킴.
//     return date.getFullYear() - this.birth + 1;
//   },
// };