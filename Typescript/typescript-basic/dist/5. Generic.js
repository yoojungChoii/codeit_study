"use strict";
// Generic
// <> 안에 그때그때 바뀌는 타입을 넣어 사용
// 정말 추론이 가능한 예인지 꼭 확인 후 사용해야한다!
// 추론 할 수 있는 정보가 주어져 있는지?
// T는 임의의 타입을 뜻한다.
// 파라미터인 items는 T배열로 정함
function printArray(items) {
    for (const item of items) {
        console.log(item);
    }
}
const point = [1, 2];
const fullname = ["김", "코드잇"];
// any 사용법
// 1. 웬만하면 쓰지마라
// 2. 쓰더라도 범위를 좁혀서 써라
function getLegth(arr) {
    return arr.length;
}
// x가 뭔지 모른다고 any를 줘버리면 모든 곳에서 any가 된다.
// 그렇기 때문에 한번 쓸 때마다 as로 정의해도..
