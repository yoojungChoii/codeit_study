import SearchForm from "@/components/SearchForm";
import { useRouter } from "next/router";

export default function Search() {
  const router = useRouter();
  const { q } = router.query;

  return (
    // 검색어가 남아있게 하기 위해 initialValue(초기값)에 q 값을 내려줌
    <div>
      <h1>Search 페이지</h1>
      <SearchForm initialValue={q} />
      <h2> {q} 검색 결과</h2>
    </div>
  );
}
