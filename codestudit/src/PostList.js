import { useQuery } from "@tanstack/react-query";
import { getPosts } from "./api";
import Post from "./Post";

function PostList() {
  // 포스트 전체를 가져오는 예시 코드
  const { data: postsData } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });

  const posts = postsData?.results ?? [];

  // 포스트 중에서도 특정 유저 이름만 가져올 때
  const username = "최유정";
  const { userData: postsDataByUsername } = useQuery({
    queryKey: ["posts", username],
    // 아규먼트를 전달해주는 상황에선 화살표 함수로 만들어 전달
    queryFn: () => getPostByUsername(username),
  });
  console.log(postsDataByUsername);

  // 파라미터 활용한 쿼리 키.
  // 특정 유저이름을 가진 포스트 중에서 private 상태의 포스트만 받아오기
  const { data: postsDataByUsernamePrivate } = userQuery({
    queryKey: ["posts", username, { status: private }],
    queryFn: () => postsDataByUsernamePrivate(username),
  });

  return (
    <div>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
      <div>유저이름: {userData.user}</div>
    </div>
  );
}
