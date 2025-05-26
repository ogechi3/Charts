import React from "react";
import type { IconType } from "react-icons";
import { CgProfile } from "react-icons/cg";
import { CiSettings, CiLogout } from "react-icons/ci";

const Profile = () => {
  return (
    <div className="absolute p-10 w-max text-[#273043] rounded-md z-9999 shadow-2xl right-0 top-15 bg-white">
      <div className="flex flex-row items-center gap-6">
        <CgProfile size={24} />{" "}
        <span className="">
          <h1>Thomas Jennifer</h1>
          <p className="">State Admin</p>
        </span>
      </div>
      <div className="">
        {items.map((item) => (
          <li
            key={item.name}
            className="flex flex-row items-center gap-8 mt-5 list-none text-[18] leading-6 cursor-pointer last:text-[#D32C1F]"
          >
            <item.icon className="w-5 h-5" /> <span>{item.name}</span>
          </li>
        ))}
      </div>
    </div>
  );
};

interface ITEMS {
  name: string;
  icon: IconType;
}

const items: ITEMS = [
  {
    name: "Profile",
    icon: CgProfile,
  },

  {
    name: "Settings",
    icon: CiSettings,
  },

  {
    name: "Log Out",
    icon: CiLogout,
  },
];

export default Profile;
