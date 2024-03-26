import { useQuery } from "@tanstack/react-query";
import { getPosts } from "./api";

function HomePage() {
  // queryKey 배열의 첫번째 요소는 쿼리의 식별자, 두번째 요소부터는 쿼리에 필요한 매개변수
  // queryFn은 백엔드에서 데이터를 받아오는 함수
  const result = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
    staleTime: 60 * 1000, // 데이터가 언제까지 fresh 상태를 유지할 것인가
    gcTime: 60 * 1000 * 10, // 가비지 컬렉션 타임이 지나면 캐시에서 삭제됨
  });
  console.log(result);

  return <div>홈페이지</div>;
}

export default HomePage;
