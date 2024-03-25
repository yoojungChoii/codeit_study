import SearchForm from "@/components/SearchForm";
// 앨리어스 : 프로젝트 최상위 폴더 기준으로 경로 작성 가능 : @
import Link from "next/link";
import SearchForm from "@/components/SearchForm";

export default function Home() {
  return (
    <>
      <h1>Codeitmall</h1>
      <SearchForm />
      <ul>
        <li>
          <Link href="/products/1">첫 번째 상품</Link>
        </li>
        <li>
          <Link href="/products/2">두 번째 상품</Link>
        </li>
        <li>
          <Link href="/products/3">세 번째 상품</Link>
        </li>
      </ul>
    </>
  );
}
