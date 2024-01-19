import styled from "styled-components";

// Modal 스타일드 컴포넌트 정의
const ModalWrapper = styled.div`
  width: 612px;
  height: 454px;
  flex-shrink: 0;
  border-radius: 24px;
  background: var(--Grayscale-10, #fff);
  box-shadow: 0px 16px 20px 0px rgba(48, 48, 48, 0.62);
`;
// 오퍼시티 가운데 뜨게

// ModalHeader 스타일드 컴포넌트 정의
const ModalHeader = styled.header`
  // 여기에 헤더의 스타일을 추가
`;

// ModalContent 스타일드 컴포넌트 정의
const ModalContent = styled.div`
  // 내용의 스타일을 추가
`;

// ModalWindow 함수형 컴포넌트 정의
const ModalWindow = () => {
  return (
    <ModalWrapper>
      <ModalHeader>
        <div>
          <span>말풍선이미지</span>
          <span>질문을 작성하세요</span>
        </div>
        <div>x 이미지</div>
      </ModalHeader>
      <ModalContent>{/* 내용추가~~~~ */}</ModalContent>
    </ModalWrapper>
  );
};

export default ModalWindow;
