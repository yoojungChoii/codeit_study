// 똑같은 타입을 여러번 적으면 유지보수에 안좋음

// 이름은 대문자로 시작
interface Product {
  id: string;
  name: string;
  price: number;
  membersOnly?: boolean;
}

// 인터페이스는 상속이 가능하다.
interface ClothingProduct extends Product {
  sizes: Size[];
}

interface ShoeProduct extends Product {
  sizes: number[];
  handmade: boolean;
  color: string;
}

// 타입 지정하듯 인터페이스 이름을 적어주면 됨
const product1: ClothingProduct = {
  id: "c001",
  name: "코드잇 블랙 후드 집업",
  price: 129000,
  membersOnly: true,
  sizes: [Size.M],
};

const product2: Product = {
  id: "d001",
  name: "코드잇 텀블러",
  price: 25000,
};

// 함수의 타입 지정하는 interface
interface PrintProductFunction {
  (product: Product): void;
}

const printProduct: PrintProductFunction = (product) => {
  console.log(`${product.name}의 가격은 ${product.price}원입니다.`);
};
