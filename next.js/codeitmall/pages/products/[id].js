import { useRouter } from "next/router";

export default function Setting() {
  const router = useRouter();
  const { id } = router.query;

  return <div>Products 1 페이지</div>;
}
