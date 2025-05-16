import React, { useState } from "react";
import DarkLogo from "../../assets/_GigaHive.svg";
import { Link } from "react-router-dom";
import {
  FaRegHeart,
  FaRegUser,
} from "react-icons/fa";
import { MdOutlineSearch, MdOutlineShoppingCart } from "react-icons/md";

const Header: React.FC = () => {
  const [isUserLogin] = useState<boolean>(true);
  return (
    <div className="flex px-24 justify-between h-14 top-0 fixed backdrop-blur-2xl  bg-white z-40 items-center xl:-w-[1536px] w-full ">
      <img src={DarkLogo} className="w-24 text-black" alt="" />

      <ul className="flex gap-4 text-sm items-center  font-medium ">
        <Link
          to="/"
          className=" cursor-pointer text-[#111827]  hover:text-[#41b6ea] "
        >
          Home
        </Link>
        <Link
          to="/shop"
          className=" cursor-pointer text-[#111827]  hover:text-[#41b6ea] "
        >
          Shop
        </Link>
        <Link
          to="/about"
          className=" cursor-pointer text-[#111827]  hover:text-[#41b6ea] "
        >
          About
        </Link>
        <Link
          to="/contact"
          className=" cursor-pointer text-[#111827]  hover:text-[#41b6ea] "
        >
          Contact
        </Link>
      </ul>
      <div className="flex gap-4 items-center ">
        <MdOutlineSearch  className="cursor-pointer text-[#111827]  hover:text-[#41b6ea] text-2xl  " />
        <FaRegHeart className="cursor-pointer text-[#111827]  hover:text-[#41b6ea] text-xl  " />
        <MdOutlineShoppingCart className="cursor-pointer text-[#111827]  hover:text-[#41b6ea] text-xl  " />

        {isUserLogin ? (
          <button className="px-4  py-1  text-xs bg-[#cce7ff] cursor-pointer border rounded-md border-[#E5E7EB]  hover:bg-black/5 ">
            Login
          </button>
        ) : (
          <FaRegUser className="cursor-pointer text-[#111827]  hover:text-[#41b6ea] text-xl  " />
        )}
      </div>
    </div>
  );
};

export default Header;
