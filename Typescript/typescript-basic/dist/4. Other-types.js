"use strict";
// 1. 리터럴 타입
// : 값을 곧 타입으로 하는 타입
// let 혹은 const를 쓰느냐에 따라 타입이 다르게 추론
// -> const는 변수의 값을 타입으로 함, 그리고 그 타입은 숫자/문자열 타입에 포함
// 3. Union 타입
// : 한 타입이거나 또다른 타입이거나.
// | 버티컬 바 사용
// - 둘 중 하나만 받고싶을 때
function printSizes(product) {
    const availableSizes = product.sizes.join(", ");
    console.log(`구매 가능한 사이즈는 다음과 같습니다: ${availableSizes}`);
}
// 특정한 타입에 대해 뭔가 하고싶다면
// 'color'라는 프로퍼티가 있는지 in연산자로 확인해보기
if ("color" in product) {
    console.log(`색상 ${product.color}`);
}
