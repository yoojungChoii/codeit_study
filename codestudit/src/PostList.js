import { useQuery } from "@tanstack/react-query";
import { getPosts } from "./api";
import Post from "./Post";

function PostList() {
  const { data: postsData } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });

  const posts = postsData?.results ?? [];

  return (
    <div>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}
