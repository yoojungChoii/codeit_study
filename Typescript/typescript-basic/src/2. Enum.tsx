// 열거형 Enum
// Enum의 기본 값은 0부터 시작
// => 따라서 Enum을 사용할 떈 미리 값을 정해두는게 좋음 
// (if문에서 0의 값이 false를 뜻하는 것과 겹칠 수 있음)

// 정확하게 정해진 값을 사용하기 위함
enum Size {
  S = 'S',
  M = 'M',
  L = 'L',
  XL = 'XL',
}

let product: {
  id: string;
  name: string;
  price: number;
  membersOnly?: boolean;
  sizes: Size[];
} = {
  id: "c001",
  name: "코드잇 블랙 후디",
  price: 129000,
  // 객체처럼 점 표기법으로 사용한다.
  sizes: [Size.M, Size.L],
};
