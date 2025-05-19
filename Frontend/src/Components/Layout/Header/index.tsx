import React, { useState } from "react";
import DarkLogo from "../../../assets/_GigaHive.svg";
import { Link } from "react-router-dom";
import { FaRegHeart, FaRegUser } from "react-icons/fa";
import {
  MdOutlineSearch,
  MdOutlineShoppingCart,
  MdMenu,
  MdClose,
} from "react-icons/md";
import AutoSelectInput from "./Components/AutoSelectInput";

const index = () => {
  const [isUserLogin, setIsUserLogin] = useState<boolean>(false);
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);

  const [openInputPopUp, setOpenInputPopUp] = useState<boolean>(false);

  return (
    <div className="top-0 fixed xl:-w-[1536px] w-full z-40  bg-white  h-14   flex justify-center  ">
      <div className=" flex px-5 md:px-24 justify-between relative  h-full  backdrop-blur-2xl items-center w-full xl:w-[1280px] ">
        <img src={DarkLogo} className="w-24 text-black" alt="" />

        <ul className=" hidden md:flex  gap-4 text-sm items-center  font-medium ">
          {["home", "shop", "about", "contact"].map((page) => (
            <li key={page}>
              <Link
                to={`/${page === "home" ? "" : page}`}
                onClick={() => setIsOpenMenu(false)}
                className="text-gray-900 hover:text-blue-500"
              >
                {page}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex gap-4 items-center  ">
          <div className=" flex items-center">
            {openInputPopUp && (
              <AutoSelectInput onClose={() => setOpenInputPopUp(false)} />
            )}
            <MdOutlineSearch
              onClick={() => {
                setOpenInputPopUp(!openInputPopUp);
              }}
              className={`cursor-pointer ${
                openInputPopUp ? "text-blue-600" : "text-gray-900"
              }  hover:text-blue-500 text-2xl  `}
            />
          </div>

          <FaRegHeart className="cursor-pointer hidden md:flex text-gray-900  hover:text-blue-500 text-xl  " />
          <MdOutlineShoppingCart className="cursor-pointer text-gray-900  hover:text-blue-500 text-xl  " />

          {isUserLogin ? (
            <button className="px-4  py-1  text-xs bg-gray-100 cursor-pointer border rounded-md border-border  hover:bg-black/5 ">
              Login
            </button>
          ) : (
            <FaRegUser className="cursor-pointer text-gray-900  hover:text-blue-500 text-xl  " />
          )}
          <MdMenu
            onClick={() => setIsOpenMenu(!isOpenMenu)}
            className="cursor-pointer text-gray-900  hover:text-blue-500 text-xl md:hidden  "
          />

          {isOpenMenu && (
            <div className="w-full absolute bg-white h-screen  top-0 right-0 p-5 ">
              <div className="flex w-full justify-between">
                <img src={DarkLogo} className="w-24 text-black" alt="" />
                <MdClose
                  onClick={() => setIsOpenMenu(!isOpenMenu)}
                  className="cursor-pointer text-gray-900  hover:text-blue-500 text-xl md:hidden  "
                />
              </div>
              <div className="  md:hidden flex flex-col  top-10  gap-4 text-sm items-center  font-medium ">
                <ul className="  flex flex-col  top-10  gap-4 text-sm items-center  font-medium ">
                  {["home", "shop", "about", "contact"].map((page) => (
                    <li key={page}>
                      <Link
                        to={`/${page === "home" ? "" : page}`}
                        onClick={() => setIsOpenMenu(false)}
                        className="text-gray-900 hover:text-blue-500"
                      >
                        {page}
                      </Link>
                    </li>
                  ))}
                </ul>

                {isUserLogin ? (
                  <button className="px-4  py-1  text-xs bg-gray-100 cursor-pointer border rounded-md border-border  hover:bg-black/5 ">
                    Login
                  </button>
                ) : (
                  <span className="  flex     gap-4 text-xs items-center  font-medium   border rounded-md border-gray-200 p-2 cursor-pointer ">
                    <FaRegUser className="cursor-pointer text-gray-900  hover:text-blue-500 text-xl  " />
                    <span className="text-xs ">Log In</span>{" "}
                  </span>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default index;
