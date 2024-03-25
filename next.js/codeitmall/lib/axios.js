import axios from "axios";

// 이 instance를 실행할 때는 baseURL을 일일이 써주지 않고 경로만 써주면 됨
const instance = axios.create({
  baseURL: "https://learn.codeit.kr/api/codeitmall",
});

export default instance;
