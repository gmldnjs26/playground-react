import styled from "styled-components";

const StModal = styled.div`
  & {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 10;
    background: rgba(0, 0, 0, 0.75);
  }
  & .modal {
    position: fixed;
    top: 30vh;
    left: 10%;
    width: 80%;
    z-index: 100;
    overflow: hidden;
  }
`;

const Modal = ({ closeModal }) => {
  const onClickHandler = () => {
    closeModal();
  };

  return (
    <StModal>
      <div className="modal">
        <div className="modal__header">Invalid Input</div>
        <div>please enter info</div>
        <button onClick={onClickHandler}>Okay</button>
      </div>
    </StModal>
  );
};

export default Modal;
