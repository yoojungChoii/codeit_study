import { useState } from "react";

const bucketItems = [
  "세계 일주 여행",
  "스카이 다이빙",
  "오로라 구경하기",
  "마라톤 완주",
];

// List 컴포넌트
// bucketList에 저장
// bucketItems를 map으로 순회한 것을.
// bucketItem에 <li>로 감싼 bucketItem(map으로 순회한 요소)를 저장
// {bucketList}를 ul태그로 감싸 리턴
const List = () => {
  const bucketList = bucketItems.map((bucketItem, index) => (
    <li key={index}>{bucketItem}</li>
  ));

  return (
    <>
      <h1>버킷리스트</h1>
      <ul>{bucketList}</ul>
    </>
  );
};

// key prop 설정은 고윳값이 없을 경우 리스트의 index를 사용할 수도 있다.
// 하지만 index 값을 key값으로 사용하는 것은 성능 저하 등의 문제로 권장하지 않음
// 배열에 id값을 지정 후 key값으로 활용 가능.

//===================================================
// 아이템 추가 구현
// : 앞선 예제에 state를 활용하여 배열에 새로운 요소를 추가
// React hook은 함수 컴포넌트 내부에서만 호출 가능. 따라서 배열을 List 컴포넌트 내부로 이동시킴

List = () => {
  //아이템을 추가하려면 아래 배열을 상태 컨트롤 할 수 있게 useState 사용하게 바꿔준다.
  const [item, setItem] = useState([
    { id: 0, name: "세계 일주 여행" },
    { id: 1, name: "스카이 다이빙" },
    { id: 2, name: "오로라 구경하기" },
    { id: 3, name: "마라톤 완주" },
  ]);

  // 입력 값 컨트롤 inputText로 받아올 것
  const [inputText, setValue] = useState("");
  // id값 컨트롤 id로 받아올 것 : 3까지 있으니까 4부터가 초기값
  const [id, setId] = useState(4);

  // 입력받으면 바뀌는 이벤트 정의
  // onChange 함수를 사용할 것 : 입력 필드의 값이 변경될 때 호출되는 콜백 함수
  // setValue : 입력값을 바꿔주는 setValue를 이벤트 값과 같게 바꿔줘야함
  const onChange = (e) => setValue(e.target.value);

  // onClick 이벤트 발생 시 바꿔줄 것들 정의
  const onClick = () => {
    const newItems = item.concat({
      id: id,
      name: inputText,
    });
    setItem(newItems);
    setId(id + 1);
    //입력값 초기화
    setValue("");
  };

  const bucketList = item.map((item) => <li key={item.id}>{item.name}</li>);

  return (
    // 이벤트 핸들러 함수를 입력 요소와 연결해서 입력 변경할 때마다 해당함수 실행
    <>
      <h1>버킷리스트</h1>
      <input value={inputText} onChange={onChange} />
      <button onClick={onClick}>추가하기</button>
      <ul>{bucketList}</ul>
    </>
  );
};

//=======================================================
// 아이템 제거 구현
// : 아이템에서 우클릭하면 배열에서 요소 제거
// arr.filter()

// onRemove 함수 : id를 받아와서 해당 아이템 제거 기능 구현
const onRemove = (id) => {
  const newItems = items.filter((name) => name.id !== id);
  setItem(newItems);
};

// items 배열 순회하며 각 아이템에 대해 '<li>' 엘리먼트 생성
const bucketList = items.map((item) => (
  <li
    key={item.id}
    // 우클릭 활용해서 아이템 제거 기능 추가
    onContextMenu={(e) => {
      onRemove(item.id);
      // 우클릭 시 브라우저의 기본 동작 차단
      e.preventDefault();
    }}
  >
    {item.name}
  </li>
));
