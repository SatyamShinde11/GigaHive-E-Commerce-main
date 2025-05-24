import React from "react";
import type { TItem } from "../types/types";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import { IoEyeOutline, IoHeartOutline } from "react-icons/io5";

type Props = {
  items: TItem;
  ShowExtraAction?: boolean;
};

const Card = ({ items, ShowExtraAction }: Props) => {
  const handelAddToCart = () => {

    console.log("Show to Log");
    
  };

  return (
    <>
      <div className="flex group bg-gray-100 h-80 w-64 relative rounded-xl overflow-hidden flex-col  items-center ">
        <img
          src={items.image}
          alt={items.title}
          className=" h-full w-full  inset-0  object-cover cursor-pointer absolute  transform-opacity  duration-500 group-hover:opacity-0 "
        />
        <img
          src={items.image2}
          alt={items.title}
          className=" h-full w-full inset-0  object-cover cursor-pointer absolute  transform-opacity  duration-500  opacity-0  group-hover:opacity-100 "
        />
        <div className="absolute h-full  w-full flex justify-end flex-col items-center gap-2 py-16  transform-opacity  duration-500  opacity-0  group-hover:opacity-100  ">
          {ShowExtraAction && (
            <span className="flex flex-col gap-2 absolute top-5 right-5">
              <IoEyeOutline className="w-8 cursor-pointer hover:shadow-xs shadow-black/50 h-8 p-2 bg-white rounded-full" />{" "}
              <IoHeartOutline className="w-8 cursor-pointer hover:shadow-xs shadow-black/50 h-8 p-2 bg-white rounded-full" />
            </span>
          )}
          <button
            onClick={handelAddToCart}
            className="bg-white hover:text-white px-3 text-xs  cursor-pointer hover:bg-gray-950 hover:border-gray-950 border border-gray-200 py-2 rounded-4xl transform duration-300"
          >
            <Link to="" className="flex gap-1 justify-center items-center  ">
              {" "}
              <FaPlus />
              Add Cart
            </Link>
          </button>
        </div>
      </div>
      <div className=" w-full flex flex-col justify-start gap-1 mt-4">
        <h2 className="text-xs ">{items.title}</h2>

        {ShowExtraAction && items?.discount_percent ? (
          <div className="flex gap-2 items-center ">
            <h2 className="text-xs line-through text-gray-600 ">
              Price : ₹{items.price}
            </h2>{" "}
            <h2 className="text-xs ">
              Price : ₹{(items.price * items?.discount_percent) / 100}
            </h2>
          </div>
        ) : (
          <h2 className="text-xs ">Price : ₹ {items.price}</h2>
        )}

        {items?.discount_percent && (
          <span className="absolute px-2 py-1 rounded-full top-2 left-4 z-30 text-xs bg-red-600 text-white font-medium  ">
            {items?.discount_percent} % sale
          </span>
        )}
      </div>
    </>
  );
};

export default Card;
