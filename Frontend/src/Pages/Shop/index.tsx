import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import FilterAndProduct from "./Components/FilterAndProduct";
import { ProductData } from "../home/data";

const Shop: React.FC = () => {
  const [showProductsLength, setShowProductsLength] = useState<number>(0);
  const data = ProductData[0]?.items;
  useEffect(() => {
    setShowProductsLength(data?.length);
  }, [data]);

  return (
    <div className="mt-14   relative overflow-hidden flex flex-col gap-10 justify-center w-full  ">
      <div className="bg-gray-100 py-10 flex flex-col gap-5 items-center w-full justify-center ">
        <h1 className="text-center text-2xl font-medium  ">Products</h1>
        <div className="flex text-xs gap-2 ">
          <h1 className=" text-gray-500">Home</h1>-<h1>Shop</h1>
        </div>
      </div>
      <div className=" flex flex-col  px-5 sm:px-10 md:px-16 lg:px-24 w-full gap-5 2xl:w-[1536px]">
        <div className="flex py-2 items-center  px-10 justify-between bg-gray-100 w-full rounded-md ">
          <div className="flex gap-3">
            <span className="text-md  cursor-pointer ">
              <FaBars className="rotate-90   h-4 " />
            </span>
            <span className="text-md  cursor-pointer ">
              <MdDashboard className="   h-4 " />
            </span>
          </div>
          <div className="flex gap-3 text-xs items-center ">
            <div className="flex items-center gap-2  ">
              <h2>Sort :</h2>
              <select name="" id="" className="outline-none p-1">
                <option value="" className="outline-none ">
                  Best selling
                </option>
                <option value="" className="outline-none ">
                  Featured
                </option>
                <option value="" className="outline-none ">
                  Alphabetically, A-Z
                </option>
                <option value="" className="outline-none ">
                  Alphabetically, Z-A
                </option>
                <option value="" className="outline-none ">
                  Price, low to high
                </option>
                <option value="" className="outline-none ">
                  Price, high to low
                </option>
                <option value="" className="outline-none ">
                  Date, old to new
                </option>
                <option value="" className="outline-none ">
                  Date, new to old
                </option>
              </select>
            </div>
            <span>{showProductsLength} Product</span>
          </div>
        </div>

        <FilterAndProduct />
      </div>
    </div>
  );
};

export default Shop;
