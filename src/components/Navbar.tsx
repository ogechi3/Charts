import React, { useState } from "react";
import { BsFileBarGraph } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoSettingsOutline } from "react-icons/io5";
import { MdClose, MdDashboard, MdGrading } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
import { TbGraph, TbMessageCheck } from "react-icons/tb";
import Profile from "./Profile";
import Header from "./Header";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <nav className="text-white bg-[#273043] z-20 ">
        <div className="flex items-center justify-between p-4">
          <div className="">logo</div>

          {/* DESKTOP SCREEN */}
          <ul className="items-center gap-8 text-[18px] hidden md:flex ">
            <li className="p-2 rounded-full hover:bg-blue-600">
              <a href="/" className="flex items-center gap-2">
                <MdDashboard size={24} className="" /> Dashboard
              </a>
            </li>
            <li>
              <a href="/" className="flex items-center gap-2">
                <TbGraph size={24} /> Revenue
              </a>
            </li>
            <li>
              <a href="/" className="flex items-center gap-2">
                <BsFileBarGraph size={24} /> Expenditure
              </a>
            </li>
            <li>
              <a href="/" className="flex items-center gap-2">
                <TbMessageCheck size={24} /> Budget Planning
              </a>
            </li>
            <li>
              <a href="/" className="flex items-center gap-2">
                <MdGrading size={24} /> Reports
              </a>
            </li>
          </ul>

          <IoSettingsOutline size={24} className="text-white" />

          <div
            className="flex flex-row items-center gap-2 cursor-pointer"
            onClick={() => setProfileOpen(!profileOpen)}
          >
            {" "}
            <CgProfile size={24} />{" "}
            <span className="">
              <h1>Thomas Jennifer</h1>
              <p className="">State Admin</p>
            </span>
            <RiArrowDropDownLine size={24} />
          </div>
          {profileOpen && <Profile />}

          {/* HAMBURGERMENU */}

          <div className="cursor-pointer md:hidden">
            <button onClick={toggleMenu} className="cursor-pointer">
              {isOpen ? <MdClose size={24} /> : <GiHamburgerMenu size={24} />}
            </button>
          </div>

          {/* MOBILE SCREEN */}
        </div>
        {isOpen && (
          <div
            className={`md:hidden absolute bg-[#273043] top-18 w-full flex flex-col items-center left-0 transform transition-transform ${
              isOpen ? "opacity-100" : "opacity-0"
            }`}
            style={{ transition: "transform 0.3s ease, opacity 0.3s" }}
          >
            <ul className="items-center py-8 gap-8 text-[18px]">
              <li className="">
                <a href="/" className="flex items-center py-3">
                  <MdDashboard size={24} className="" /> Dashboard
                </a>
              </li>
              <li>
                <a href="/" className="flex items-center py-3">
                  <TbGraph size={24} /> Revenue
                </a>
              </li>
              <li>
                <a href="/" className="flex items-center py-3">
                  <BsFileBarGraph size={24} /> Expenditure
                </a>
              </li>
              <li>
                <a href="/" className="flex items-center py-3">
                  <TbMessageCheck size={24} /> Budget Planning
                </a>
              </li>
              <li>
                <a href="/" className="flex items-center py-3">
                  <MdGrading size={24} /> Reports
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
      {/* <Header/> */}
    </>
  );
};

export default Navbar;
