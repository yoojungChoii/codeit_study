import { useState } from "react";
import { useMutation, useQuery, useQueryClinet } from "@tanstack/react-query";

const BASE_URL = "https://learn.codeit.kr/api/codestudit";

async function getUserInfo(username) {
  const response = await fetch(`${BASE_URL}/users/${username}`);
  return await response.json();
}

const HomePage = () => {
  const [currentUsername, setCurrentUsername] = useState("");

  const { data: userInfoData, isPending: isUserInfoPending } = useQuery({
    queryKey: ["useInfo"],
    queryFn: () => getUserInfo(currentUsername),
    enabled: !!currentUsername,
  });

  const handleLoginButtonClick = () => {
    setCurrentUsername("최유정");
  };

  const loginMessage = isUserInfoPending
    ? "로그인 중입니다..."
    : `${userInfoData?.name}님 환영합니다!`;

  if (isPending) return "로딩 중입니다...";

  if (isError) return "에러가 발생했습니다.";

  const posts = postsData?.results ?? [];

  return (
    <>
      <div>
        {currentUserName ? (
          loginMessage
        ) : (
          <button onClick={handleLoginButtonClick}> 최유정으로 로그인</button>
        )}
        <form onSubmit={handleSubmit}>
          <textarea
            name="content"
            value={content}
            onChange={handleInputChange}
          />
          <button disabled={!content} type="submit">
            업로드
          </button>
        </form>
      </div>
      <div>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              {post.user.name}: {post.content}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
