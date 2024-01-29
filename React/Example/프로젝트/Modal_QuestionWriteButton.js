import React, { useState } from "react";
import styled from "styled-components";
import ModalWindow from "../Modal/ModalWindow";

function QuestionWriteButton() {
  // 모달 상태를 관리하는 state 만들어서 기본값은 false로 줌
  const [modalOpen, setModalOpen] = useState(false);
  // modalOpen의 상태를 false로 만들어주는 handle 함수 정의
  // -> handle은 모달을 닫는 역할. setModalOpen을 호출해 modalOpen을 false로 만든다.
  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    // modalOpen이 true일 때만 ModalWindow가 호출된다.
    // ModalWindow에는 closeButton이라는 prop을 전달해서
    // 해당 prop에서 handleCloseModal 함수를 사용할 수 있게 한다 (닫기)
    <>
      {modalOpen && <ModalWindow closeButton={handleCloseModal} />}
      <QuestionButton
        onClick={() => {
          setModalOpen(true);
        }}
      >
        <QuestionWriteText>질문 작성하기</QuestionWriteText>
      </QuestionButton>
    </>
  );
}

const QuestionButton = styled.button`
  display: flex;
  position: absolute;
  right: 24px;
  bottom: 24px;
  width: 208px;
  height: 54px;
  padding: 12px 24px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 200px;
  background: var(--Brown-40, #542f1a);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border: none;
`;

const QuestionWriteText = styled.p`
  color: var(--Grayscale-10, #fff);
  font-feature-settings: "clig" off, "liga" off;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px;
`;

export default QuestionWriteButton;
