console.log("안녕 타입스크립트!");

// 타입이 추론되는 경우는 타입 명시를 안해도 됨.
// 명시하면 타입을 확실하게.
let size: number = 100;

// 타입 스크립트는 정적 타이핑 언어 (변수에 타입이 정해지면 반드시 타입을 지켜야 함)

// 문자열 배열 타입
const cart: string[] = [];
cart.push("c001");
cart.push("c002");

// 문자열 배열의 배열
const carts: string[][] = [["c001", "c002"]];

// 배열 타입에는 크기가 정해져 있지 않다.

// 배열이지만 갯수를 명확하게 => 튜플 타입을 쓴다.
let mySize: [number, number, string] = [167, 28, "M"];

// 객체 타입 정의
let products: {
  id: string;
  name: string;
  // 옵셔널 프로퍼티 (조건에 따라 값이 정해지는)
  membersOnly?: boolean;
} = {
  id: "casdf",
  name: "코드잇",
};
// 옵셔널 프로퍼티
if (product.membersOnly) {
  console.log("회훤전용");
} else {
  console.log("일반");
}

// 프로퍼티 이름에 변수 쓰기
// JS에서(참고용)
let field = "field name";
let obj = {
  [field]: "field value",
};

// TS에서 프로퍼티의 개수를 알 수 없거나 정하고 싶지 않으면 타입만 지정
// 상품의 재고 숫자를 기록하는 객체 만들기
let stock: {
  [id: string]: number;
} = {
  casdf: 3,
  akkk: 100,
};

// 예시
// 변수 뒤에 :를 붙여야 타입을 지정할 수 있다.
const monster: {
  name: string;
  level: number;
  // 필수가 아님
  hasGold?: boolean;
  // 배열 타입은 이런식으로 나타냄
  skills: string[];
} = {
  name: "코드잇 고블린",
  level: 22,
  // 작은따옴표 잊지말기
  skills: ["태권도", "특공무술"],
};

// ============================
// any : JS와 똑같은 방식으로 만들어줌. 타입검사x
// 자동으로 타입을 알 수 없는 경우 어쩔 수 없이 any
// 이럴 땐 as 문법을 써서 타입을 정해주는데
// 이건 타입 단언이라고 함. 타입스크립트보다 타입을 내가 더 잘 알 때 사용할 수 있다.

const parsedProduct = JSON.parse('{ "name": "코드잇 토트백", "price": 12000 }');
// 이 경우엔 안의 타입을 알 수 없어서 any 타입이지만
// any 그대로 쓰기 보단 타입을 정해주자.
const parseProduct: {
  name: string;
  price: number;
} = JSON.parse('{ "name": "코드잇 토트백", "price": 12000 }');
// as로 단언하기
const parsingProduct = JSON.parse(
  '{ "name": "코드잇 토트백", "price": 12000 }'
) as {
  name: string;
  price: number;
};

// 함수에 타입 정의하기

// 파라미터 타입은 파라미터 옆에 콜론 적고 타입 써주면 됨
// 리턴의 타입은 () 옆에 :콜론 붙이고 타입 지정
// 옵셔널 파라미터는 ? 붙이기
// 기본값은 파라미터에 바로 선언.
function addToCart(id: string, quantity: number = 1): boolean {
  if (stock[id] < quantity) {
    return false;
  }
  return true;
}

// 함수 자체의 타입 정하기
const codeitmall: {
  stock: { [id: string]: number };
  cart: string[];
  addToCart: (id: string, quntity?: number) => boolean;
} = {
  stock: {
    c001: 3,
    c002: 1,
  },
  cart: [],
  addToCart,
};
// 아무 것도 리턴하지 않는 함수는 void 타입으로 지정 : void 함수이기 때문에
