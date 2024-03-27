import { useQuery } from "@tanstack/react-query";

// 데이터 패칭 함수
const getUserData = (userId) => {
  return fetch(`/api/user/${userId}`).then((response) => response.json());
};

const UserProfile = ({ userId }) => {
  // useQuery를 사용하여 데이터를 가져온다. ['user', userId]는 쿼리 키를 의미
  const { data, isError, error, isLoading } = useQuery(["user", userId], () =>
    getUserData(userId)
  );

  if (isLoading) {
    // isLoading이 true일 때 로딩 화면을 렌더링
    return <div>Loading...</div>;
  }

  if (isError) {
    // isError가 true일 때 error객체의 message를 화면에 렌더링
    return <div>Error: {error.message}</div>;
  }

  return (
    // data의 요소들을 렌더링
    <div>
      <h1>User Profile</h1>
      <p>Name: {data.name}</p>
      <p>Email: {data.email}</p>
    </div>
  );
};
