/* eslint-disable react/prop-types */

import { useEffect } from "react";
import "./Modal.css"; // Add custom styles here

const Modal = ({ message, onClose }) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.target.className === "modal-overlay") {
        onClose();
      }
    };
    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, [onClose]);

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <p>{message}</p>
        <button onClick={onClose}>OK</button>
      </div>
    </div>
  );
};

export default Modal;
