import classes from "./Modal.module.css";
import React from "react";
import ReactDOM from "react-dom";

const Backdrop = () => {
  return <div className={classes.backdrop} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <React.Fragment>
          <Backdrop />
          <ModalOverlay>{props.children}</ModalOverlay>
        </React.Fragment>,
        document.getElementById("overlay")
      )}
    </React.Fragment>
  );
};

export default Modal;
