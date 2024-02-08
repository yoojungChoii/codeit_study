"use strict";
// 똑같은 타입을 여러번 적으면 유지보수에 안좋음
// 타입 지정하듯 인터페이스 이름을 적어주면 됨
const product1 = {
    id: "c001",
    name: "코드잇 블랙 후드 집업",
    price: 129000,
    membersOnly: true,
    sizes: [Size.M],
};
const product2 = {
    id: "d001",
    name: "코드잇 텀블러",
    price: 25000,
};
const printProduct = (product) => {
    console.log(`${product.name}의 가격은 ${product.price}원입니다.`);
};
