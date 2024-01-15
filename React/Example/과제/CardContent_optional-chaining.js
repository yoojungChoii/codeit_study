import "./CardContent.css";
import FetchFolderData from "../../../get-data/FetchFolderData";

function CardContent() {
  try {
    const folderData = FetchFolderData();

    // 데이터 가져오는게 시간이 걸리는데 초기엔 null 값이기 때문에 발생하는 오류!
    //`null` 또는 `undefined` 값에서 속성을 읽으려는 시도를 방지하기 위해 조건 확인을 추가해야!!
    // → 옵션 체이닝 연산자 `?.`)를 사용하여 중첩된 속성에 안전하게 액세스할 수 있다.
    // 이렇게 하면 데이터가 아직 가져 오는 중일 때도 컴포넌트가 정상적으로 렌더링 됨.
    const dataArray = folderData?.folder?.links;
    // 배열에 접근해 데이터 중에서도 해당하는 내용 소스만 뽑아냄
    return (
      <div className="card-container">
        {dataArray.map((data, index) => (
          <div className="card">
            <div className="card-image">
              <img
                key={data.id}
                src={data.imageSource}
                alt={`카드이미지-${index}`}
              />
            </div>
            <div className="card-uploaded-when">
              <p>dd</p>
            </div>
            <div className="card-description">
              <p key={data.id}>{data.description}</p>
            </div>
            <div className="card-createdAt">
              <p key={data.id}>{data.createdAt}</p>
            </div>
          </div>
        ))}
      </div>
    );
  } catch (error) {
    console.error("데이터 가져오다가 에러 났어용", error);
    return null;
  }
}

export default CardContent;
