// 백엔드로부터 모든 포스트 목록을 받아오는 함수

const BASE_URL = "https://learn.codeit.kr/api/codestudit";

export async function getPosts() {
  const response = await fetch(`${BASE_URL}/posts`);
  return await response.json();
}
