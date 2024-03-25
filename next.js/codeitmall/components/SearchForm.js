import { useRouter } from "next/router";
import { useState } from "react";

// 초기값으로 initialValue 프롭 추가
export default function SearchForm({ initialValue = "" }) {
  // router 객체를 useRouter 훅에서 가져오기
  const router = useRouter();
  const [value, setValue] = useState(initialValue);

  function handleChange(e) {
    setValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    // value 값이 없으면 (검색값) 홈페이지로 이동
    if (!value) {
      router.push("/");
      return;
    }
    // router에 이동할 주소를 push를 통해 넘겨준다.
    router.push(`/search?q=${value}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="q" value={value} onChange={handleChange} />
      <button>검색</button>
    </form>
  );
}
