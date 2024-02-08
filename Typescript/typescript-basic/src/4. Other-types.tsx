// 1. 리터럴 타입
// : 값을 곧 타입으로 하는 타입
// let 혹은 const를 쓰느냐에 따라 타입이 다르게 추론
// -> const는 변수의 값을 타입으로 함, 그리고 그 타입은 숫자/문자열 타입에 포함

// 2. 타입 별칭
// : 타입에 이름을 붙여줄 수 있음
// 이 이름을 쓰면 이 타입이다. 이름을 붙여서 여기저기서 사용 -> 유지보수를 수월하게 한다.
// Cart의 타입은 string[]
type Cart = string[];
// 객체는 인터페이스 사용을 권장
interface product {
  id: string;
  name: string;
}

// 3. Union 타입
// : 한 타입이거나 또다른 타입이거나.
// | 버티컬 바 사용
// - 둘 중 하나만 받고싶을 때
function printSizes(product: ClothingProduct | ShoeProduct) {
  const availableSizes = product.sizes.join(", ");
  console.log(`구매 가능한 사이즈는 다음과 같습니다: ${availableSizes}`);
}
// 특정한 타입에 대해 뭔가 하고싶다면
// 'color'라는 프로퍼티가 있는지 in연산자로 확인해보기
if ("color" in product) {
  console.log(`색상 ${product.color}`);
}

// 4. intersection 타입
// : 타입을 합치는 방법. 두 타입의 성질을 모두 갖는다.
// type 별칭을 쓴 Product 라는 타입에 Id의 타입도 가져와서 사용
// type Product = Id & {
//   name : string;
// }


// 5. keyof
// 모든 프로퍼티 이름에 해당하는 타입을 한번에 만들 수 있다.
interface Product {
  id: string;
  name: string;
  price: number;
  membersOnly?: boolean;
}
// type ProductProperty = 'id' | 'name' | 'price' | 'membersOnly';
// =============================
// 위 처럼 하나하나 리터럴 타입을 직접 유니언 하는 것 보다 이렇게 한번에. 
type ProductProperty = keyof Product;


// 6. typeof
// 어떤 값의 타입을 문자열로 만들어주는 연산자이지만
// typescript 코드에선 타입으로 연산된다.
// JS 코드 : 결과가 문자열
console.log(typeof product)
// TS 코드 : 결과가 타입 : product의 타입을 product3에 바로 갖다쓴다. 
let product3: typeof product