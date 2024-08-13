// components/Modal.js
import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ isOpen, onClose, children }: any) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-[99999]">
      {/* Overlay */}
      <div
        className="absolute top-0 left-0 right-0 bottom-0 bg-violet-500 opacity-50"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-white overflow-auto">
        {children}
        <button
          onClick={onClose}
          className="hidden sm:absolute sm:top-2 sm:right-2"
        >
          Close
        </button>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
