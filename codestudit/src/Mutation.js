import { useMutation, useQueryClient } from "@tanstack/react-query";

// 데이터 업데이트 함수
const updateUser = (userId, updateData) => {
  return fetch(`/api/user/${userId}`, {
    method: "PUT",
    body: JSON.stringify(updateData),
  }).then((response) => response.json());
};

UserProfileEditor = ({ userId }) => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation(
    (updatedData) => updateUser(userId, updatedData),
    {
      // update 성공 시점에
      onSuccess: () => {
        // 데이터 업데이트 후 캐시를 재로드
        queryClient.invalidateQueries(["user", userId]);
      },
    }
  );

  const handleSubmit = (updatedData) => {
    // mutate는 자동 실행이 되지 않기 때문에 submit 시 mutate 실행시켜줘야함
    mutate(updatedData);
  };

  return (
    <div>
      <h2>Edit User Profile</h2>
      <UserForm onSubmit={handleSubmit} />
    </div>
  );
};
