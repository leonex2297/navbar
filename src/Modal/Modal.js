import React, { useContext } from "react";
import "../Modal/modal.css";
import { AppContext, useGlobalContext } from "./Contaxt";

const Modal = () => {
  // const data = useContext(AppContext);
  const data = useGlobalContext();
  console.log(data);
  return (
    <div className="modal-container">
      <div className="modal-div">
        <button>Modal</button>
      </div>
    </div>
  );
};

export default Modal;
