import React, { useEffect, useState } from "react";
import { FaFilter } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import FilterAndProduct from "./Components/FilterAndProduct";
import { ProductData } from "../home/data";
import SortByDropdown from "./Components/SortByDropdown";

const Shop: React.FC = () => {
  const [showProductsLength, setShowProductsLength] = useState<number>(0);
  const [openFilterPopUp, setOpenFilterPopUp] = useState<boolean>(false);

  const data = ProductData[0]?.items;

  useEffect(() => {
    setShowProductsLength(data?.length || 0);
  }, [data]);

  const toggleFilterPopUp = () => setOpenFilterPopUp((prev) => !prev);

  return (
    <div className="mt-14 relative overflow-hidden flex flex-col gap-10 w-full">
      <div className="bg-gray-100 py-10 flex flex-col gap-5 items-center w-full">
        <h1 className="text-2xl font-medium text-center">Shop</h1>
        <div className="flex text-xs gap-2">
          <h1 className="text-gray-500">Home</h1>-<h1>Shop</h1>
        </div>
      </div>

      <div className="flex flex-col px-5 sm:px-10 md:px-16 lg:px-24 w-full gap-5 2xl:w-[1536px]">
        <div className="flex py-2 items-center px-10 justify-between md:bg-gray-100 w-full rounded-md">
          <div className="md:hidden">
            <button
              onClick={toggleFilterPopUp}
              className="flex items-center gap-2 border cursor-pointer bg-gray-100 rounded-md hover:bg-white transition duration-500 text-xs text-gray-800 border-gray-200 px-2 py-2"
            >
              <FaFilter />
              Filter and sort
            </button>
          </div>

          <div className="gap-3 md:flex hidden">
            <span className="text-md cursor-pointer">
              <MdDashboard className="h-4" />
            </span>
          </div>

          <div className="flex gap-3 text-xs items-center">
            <div className="items-center gap-2 hidden md:flex">
              <h2>Sort by :</h2>
              <SortByDropdown />
            </div>
            <span>
              {showProductsLength} Product{showProductsLength !== 1 && "s"}
            </span>
          </div>
        </div>

        <FilterAndProduct
          openFilterPopUp={openFilterPopUp}
          toggleFilterPopUp={toggleFilterPopUp}
        />
      </div>
    </div>
  );
};

export default Shop;
