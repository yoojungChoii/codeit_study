"use strict";
console.log("안녕 타입스크립트!");
// 타입이 추론되는 경우는 타입 명시를 안해도 됨.
// 명시하면 타입을 확실하게.
let size = 100;
// 타입 스크립트는 정적 타이핑 언어 (변수에 타입이 정해지면 반드시 타입을 지켜야 함)
// 타입은 타입 검사에만 쓰이고 실제 실행 코드에는 쓰이지 않음 
// -> npm run build 시에는 js에 type을 명시한 코드가 사라짐