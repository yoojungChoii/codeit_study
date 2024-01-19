export default function MainPage() {
  // 모달이 열려있는지 여부를 나타냄
  const [isModalOpen, setIsModalOpen] = useState(false);

  // openModal함수는 모달을 열기 위해 호출됨.
  // setIsModalOpen(true)를 통해 isModalOpen 상태를 true로 변경
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    // [open Modal] 버튼을 클릭하면 onClick 이벤트 핸들러로 지정된
    // openMoal 함수가 실행되어 모달을 열어줌
    // openModal 함수 내에서 setIsModalOpen(true)가 호출되면
    // isModalOpen 상태가 true로 변경
    <div>
      <button type="button" onClick={openModal}>
        Open Modal
      </button>

      <ModalWindow isOpen={isModalOpen} closeModal={closeModal} />
    </div>
    // ModalWindow 컴포넌트는 isModalOpen 상태를ispOpen props로 받아와서 모달이 열려있는지 닫혀있는지 확인
  );

  // Open Modal 버튼을 클릭하면 openModal 함수가 실행되어
  // isModalOpen 상태가 true로 변경되고,
  // 이로 인해 ModalWindow 컴포넌트가 열린 상태로 렌더링되어
  // 모달이 화면에 나타나게 된다.
}
