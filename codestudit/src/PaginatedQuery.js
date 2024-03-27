import { keepPreviousData } from "@tanstack/react-query";
import { useState } from "react";

// page와 limit(받아올 데이터 개수) 넘겨주면 api에서 그만큼 데이터를 fetch
async function getPosts(page = 0, limit = 10) {
  const response = await fetch(`${BASE_URL}/posts?page=${page}$limit=${limit}`);
  return await response.json();
}

const PAGE_LIMIT = 3;
function HomePage() {
  // 페이지의 상태 값 설정
  const [page, setPage] = useState(0);
  const {
    data: postsData,
    isPending,
    isError,
  } = useQuery({
    // page별로 데이터를 받아올 것이다
    queryKey: ["posts", page],
    // getPosts 해오는 함수에서 필요한 page와 limit 넘겨주기
    queryFn: () => getPosts(page, PAGE_LIMIT),
    // placeholderData의 속성이 keepPreviousData인 경우 이전 데이터를 계속 보여준다.
    placeholderData: keepPreviousData,
  });

  const posts = postsData?.results ?? [];

  return (
    <>
      <div>
        {currentUsername ? (
          loginMessage
        ) : (
          <button onClick={handleLoginButtonClick}>codeit으로 로그인</button>
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
        <button
          // 첫 페이지일 때 이전으로 가기 버튼을 비활성화
          disabled={page === 0}
          onClick={() => setPage((old) => Math.max(old - 1, 0))}
        >
          &lt;
        </button>
        <button
          // 아직 이전 데이터를 보여주고 있거나 더이상 보여줄 데이터가 없으면 버튼을 비활성화
          disabled={placeholderData || !postsData?.hasMore}
          onClick={() => setPage((old) => old + 1)}
        >
          &gt;
        </button>
      </div>
    </>
  );
}
