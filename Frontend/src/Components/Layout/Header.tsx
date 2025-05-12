import React, { useState } from "react";
import DarkLogo from "../../assets/_GigaHive.svg";
import { Link } from "react-router-dom";
import {
  FaRegHeart,
  FaRegUser,
  FaSearch,
  FaShoppingCart,
} from "react-icons/fa";

const Header: React.FC = () => {
  const [isUserLogin] = useState<boolean>(true);
  return (
    <div className="flex px-24 justify-between h-14 top-0 fixed backdrop-blur-2xl bg-white z-40 items-center xl:-w-[1536px] w-full ">
      <img src={DarkLogo} className="w-24 text-black" alt="" />

      <ul className="flex gap-5 text-sm items-center  font-semibold ">
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
      <div className="flex gap-5 text-xl items-center ">
        <FaSearch className="cursor-pointer text-[#111827]  hover:text-[#41b6ea]" />
        <FaRegHeart className="cursor-pointer text-[#111827]  hover:text-[#41b6ea]" />
        <FaShoppingCart className="cursor-pointer text-[#111827]  hover:text-[#41b6ea]" />

        {isUserLogin ? (
          <button className="px-4  py-1 font-semibold text-sm cursor-pointer border rounded-md border-[#E5E7EB]  hover:bg-black/5 ">
            Login
          </button>
        ) : (
          <FaRegUser className="cursor-pointer text-[#111827]  hover:text-[#41b6ea]" />
        )}
      </div>
    </div>
  );
};

export default Header;
