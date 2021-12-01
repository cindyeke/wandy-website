import React from "react";
import "../scss/Modal.scss";

function Modal({
  show,
  closeModal,
  message,
  param1,
  param2,
  handleDeleteButton,
}) {
  if (!show) {
    return null;
  } else {
    document.querySelector("body").style.overflow = "hidden";
  }
  return (
    <>
      <div className="modalContainer">
        <div className="modal">
          <h3>{message}</h3>
          <p>You can't undo this action once it's done</p>
          <div className="actions">
            <button
              className="cancel"
              style={{ backgroundColor: "#c2bfb8" }}
              onClick={closeModal}
            >
              Cancel
            </button>
            <button onClick={() => handleDeleteButton(param1, param2)}>
              Delete
            </button>
          </div>
        </div>
      </div>
      <div className="cover"></div>
    </>
  );
}

export default Modal;
