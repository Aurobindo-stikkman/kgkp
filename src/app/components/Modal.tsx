// components/Modal.js
import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ isOpen, onClose, children }: any) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-[99999]">
      {/* Overlay */}
      <div
        className="absolute top-0 left-0 right-0 bottom-0 bg-[#00000099] opacity-[60%]"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      {/* <div
        className="absolute top-0 left-0 right-0 bottom-0 bg-white flex flex-col overflow-auto lg:w-[873px] lg:min-h-[688px] lg:mx-auto lg:top-8 lg:rounded-[100px] methods-container"
      > */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-white flex flex-col overflow-auto lg:relative lg:max-h-full lg:w-[873px] lg:mx-auto lg:rounded-[100px] lg:top-8 methods-container">
        {children}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
