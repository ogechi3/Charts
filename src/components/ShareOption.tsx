import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { PiPaperclipHorizontal } from "react-icons/pi";

const ShareOption = () => {
  return (
    <div className="absolute z-20 p-4 text-black bg-white rounded-lg shadow-lg cursor-pointer w-max top-32">
      <div className="flex flex-col space-y-6">
        <div className="flex flex-row items-center gap-3 hover:text-blue-900">
          <MdOutlineEmail />
          <p className="">Email this file</p>
        </div>
        <div className="flex flex-row items-center gap-3 hover:text-blue-900">
          <PiPaperclipHorizontal />
          <p className="">Copy Link</p>
        </div>
      </div>
    </div>
  );
};

export default ShareOption;
