import React from "react";
import ReactDOM from "react-dom";

import ModalWrapper from "./style";

function Modal({ children, onClose, open }) {
  const handleClose = () => {
    onClose && onClose()
  };

  if (open) {
    return (
      <ModalWrapper>
        <div className="modal-container" onClick={handleClose}></div>
          {children}
      </ModalWrapper>
    );
  } else {
    return <></>;
  }
}

export default function ModalPortal({ children, ...moreProps }) {
  return ReactDOM.createPortal(
    <Modal {...moreProps}>{children}</Modal>,
    document.getElementById("modal")
  );
}
