import React from "react";
import { MdClose } from "react-icons/md";

const BudgetModal = ({ open, children, onClose }) => {
  if (!open) return null;
  return (
    <>
      <div className="top-0 bottom-0 left-0 right-0 fixed bg-[rgba(0,0,0,0.7)] z-999">
        <div className="fixed top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-md w-max p-5 z-999">
          <button
            className="absolute cursor-pointer right-1 top-1 ring-1"
            onClick={onClose}
          >
            <MdClose />
          </button>
          {children}
        </div>
      </div>
    </>
  );
};

export default BudgetModal;
