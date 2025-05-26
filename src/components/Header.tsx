import React, { useState } from "react";
import { BiExport } from "react-icons/bi";
import { IoShareSocialOutline } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
import ShareOption from "./ShareOption";
import TransferMethod from "./TransferMethod";

const Header = () => {
    const [share, setShare] = useState(false)
    const [transfer, setTransfer] = useState(false)
  return (
    <div className="border border-t-gray-300">
      <div className="flex flex-row justify-between pb-20 bg-[#273043] text-white px-4">
        <div className="">
          <h1 className="font-bold lg:text-2xl">Analytics Overview</h1>
          <p className="">Your to Date</p>
        </div>
        <div className="flex flex-row items-center space-x-6">
          <button className=" ring-1">
            <h1 className="flex p-2">
              Showing:This Year{" "}
              <span>
                <RiArrowDropDownLine />
              </span>
            </h1>
          </button>

          <button className="flex items-center gap-2 p-2 text-black bg-white rounded-[5px] ring-1 cursor-pointer" onClick={()=> setShare(!share)}>
            <IoShareSocialOutline /> <span>Share</span>
            {
                share && <ShareOption/>
            }
          </button>

          <button className="flex items-center gap-2 p-2 text-black bg-white rounded-[5px] ring-1 cursor-pointer" onClick={()=> setTransfer(!transfer)}>
            <BiExport /> <span>Export</span>
            {transfer && <TransferMethod/>}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
