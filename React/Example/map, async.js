// import { useEffect } from 'react';
import FetchFolderData from "../../../get-data/FetchFolderData";

// async 삭제 : async는 promise를 반환 : 에러뜬다
// useEffect 사용해서 해보기
function CardImage() {
  try {
    const folderData = FetchFolderData();
    // links에는 여러정보가 담긴 배열 데이터들이 있다.
    console.log(folderData);
    const dataArray = folderData.folder.links;
    // 배열에 접근해 데이터 중에서도 이미지 소스만 뽑아냄
    // data는 imageSource의 각 요소를 나타낸다.
    return (
      <div>
        {dataArray.map((data, index) => (
          <img
            key={data.id}
            src={data.imageSource}
            alt={`카드이미지-${index}`}
          />
        ))}
      </div>
    );
  } catch (error) {
    console.error("이미지 가져오다가 에러 났어용", error);
    return null;
  }
}

export default CardImage;
