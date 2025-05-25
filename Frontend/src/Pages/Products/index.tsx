import React, { useRef, useState } from "react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import {
  MdAddShoppingCart,
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
  MdSend,
} from "react-icons/md";
import FooterImg from "../../assets/FooterImg";
import { Link, useLocation } from "react-router-dom";

const Index = () => {
  const { state } = useLocation();

  const { product } = state;

  const [inputNumber, setInputNumber] = useState<number>(1);
  const [isShowDescription, setIsShowDescription] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleIncrease = () => {
    if (inputNumber >= 10) return;
    setInputNumber(inputNumber + 1);
  };
  const handleDecrease = () => {
    if (inputNumber <= 1) return;
    setInputNumber(inputNumber - 1);
  };
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;

    const xPercent = (offsetX / rect.width) * 100;
    const yPercent = (offsetY / rect.height) * 100;

    container.style.setProperty("--zoom-x", `${xPercent}%`);
    container.style.setProperty("--zoom-y", `${yPercent}%`);
    container.style.setProperty("--display", "block");
  };
  const handleMouseLeave = () => {
    containerRef.current?.style.setProperty("--display", "none");
  };

  if (!state || !state.product) {
    return (
      <div className="mt-14 relative overflow-hidden flex flex-col gap-10 w-full h-[50vh] flex items-center justify-center  ">
        <h1 className="text-2xl font-medium text-gray-500 flex items-center gap-2">
          <MdAddShoppingCart />
          No product found
        </h1>
        <button className="bg-white hover:text-white px-3 text-xs  cursor-pointer hover:bg-gray-950 hover:border-gray-950 border border-gray-200 py-2 rounded-4xl transform duration-300">
          <Link to="/shop">Shop Now</Link>
        </button>
      </div>
    );
  }

  return (
    <div className="mt-14 relative overflow-hidden flex flex-col gap-10 w-full">
      <div className="bg-gray-100 py-10 flex flex-col gap-5 items-center w-full">
        <h1 className="text-2xl font-medium text-center">Products</h1>
        <div className="flex text-xs gap-2">
          <h1 className="text-gray-500">Home</h1>-
          <h1 className="text-gray-500">Shop</h1>-<h1>Product</h1>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center md:justify-start md:items-start md:flex-nowrap  px-5 sm:px-10 md:px-16 lg:px-24 w-full gap-5 2xl:w-[1536px]">
        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="w-full relative group md:w-1/2 overflow-hidden flex justify-center items-center "
          style={
            {
              "--url": `url(${product?.image})`,
              "--zoom-x": "0%",
              "--zoom-y": "0%",
              "--display": "none",
            } as React.CSSProperties
          }
        >
          <img
            src={product?.image}
            className="h-[90vh] flex w-full object-cover object-[0_0] "
          />
          <div
            className="absolute top-0 left-0 w-full h-full"
            style={{
              display: "var(--display)",
              backgroundImage: "var(--url)",
              backgroundColor: "black",
              backgroundSize: "200%",
              backgroundPosition: "var(--zoom-x) var(--zoom-y)",
              content: "''",
              pointerEvents: "none",
            }}
          ></div>
        </div>
        <div className="w-full md:w-1/2  flex flex-col gap-3 ">
          <div className="flex sm:flex-nowrap flex-wrap text-sm font-semibold ">
            <span className="text-gray-500">Product </span>-
            <p> {product.title}</p>
          </div>
          <h1 className="text-sm font-medium ">{product.title}</h1>
          <h2 className="text-sm">₹ {product.price}</h2>

          <p className=" text-sm flex items-center gap-2 ">
            <span>Color:</span>{" "}
            <span className="text-xs text-gray-700">{product.color}</span>{" "}
          </p>
          <p className=" text-sm flex items-center gap-2 ">
            <span>Size:</span>{" "}
            <span className="text-xs text-gray-700"> {product.size}</span>{" "}
          </p>

          <div className="flex gap-2 flex-col">
            <p className="text-sm">Quantity</p>
            <div className="flex gap-2  text-xs ">
              <div className="border-gray-200 border  flex items-center rounded-full px-4  ">
                <button onClick={handleDecrease} className=" cursor-pointer ">
                  -
                </button>
                <input
                  type="number"
                  value={inputNumber}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setInputNumber(
                      e?.target?.value ? Number(e.target.value) : 0
                    )
                  }
                  className="w-12 flex justify-center items-center outline-none p-2"
                />
                <button onClick={handleIncrease} className=" cursor-pointer ">
                  +
                </button>
              </div>
              <button className=" text-black  px-3 text-xs  cursor-pointer  border-gray-200  hover:bg-gray-950 hover:text-white border  py-2 rounded-md transform duration-300 ">
                Add to cart
              </button>
            </div>
          </div>
          <button className="bg-gray-950 hover:text-black text-white px-3 text-xs  cursor-pointer hover:bg-white hover:border-gray-200 border-gray-950 border  py-2 rounded-full transform duration-300 w-1/2 ">
            Buy it now
          </button>
          <div>
            <p className="text-sm">Guaranteed safe checkout</p>
            <FooterImg />
          </div>

          <div>
            <div className=" border-t border-b border-gray-200 py-3 w-full ">
              <div
                onClick={() => {
                  setIsShowDescription(!isShowDescription);
                }}
                className=" cursor-pointer flex items-center justify-between w-full  gap-2"
              >
                <h1 className="text-sm font-medium">Description</h1>
                {isShowDescription ? (
                  <MdOutlineKeyboardArrowUp />
                ) : (
                  <MdOutlineKeyboardArrowDown />
                )}
              </div>

              <p
                className={`${
                  isShowDescription ? "flex" : "hidden"
                } "text-xs text-gray-500 mt-2"`}
              >
                {product?.description}
              </p>
            </div>
          </div>

          <div className="flex gap-2">
            {/* <button className="text-md cursor-pointer hover:bg-black hover:text-white transition duration-300   items-center gap-2 border border-gray-200 rounded-md px-3 py-1 flex text-nowrap ">
              <FaFacebook />
              FaceBook
            </button>
            <button className="text-md cursor-pointer hover:bg-black hover:text-white transition duration-300   items-center gap-2 border border-gray-200 rounded-md px-3 py-1 flex text-nowrap ">
              <FaSquareXTwitter />X
            </button> */}
            <button className="text-md cursor-pointer hover:bg-gray-950 hover:text-white transition duration-300   items-center gap-2 border border-gray-200 rounded-md px-3 py-1 flex text-nowrap ">
              <MdSend />
              Share more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
