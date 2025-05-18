import React, { useEffect, useState } from "react";
import { MdClose, MdOutlineSearch } from "react-icons/md";
import { ProductData } from "../../../../Pages/home/data";
import type { TItem } from "../../../../Pages/home/types";
import { Link } from "react-router-dom";
interface ChildrenType {
  onClose: () => void;
}

const AutoSelectInput = ({ onClose }: ChildrenType) => {
  const [inputValue, setInputValue] = useState<string>("");

  const handelInputValue = (val: string) => {
    setInputValue(val);
  };

  // const handelClear = () => {
  //   setInputValue("");
  // };
  return (
    <div className="absolute flex right-0 w-full z-50  h-28 sm:h-40  text-black bg-white  top-0 ">
      <div className="relative flex flex-col w-full p-1 justify-center   items-center border rounded-md border-[#e5e7eb]  ">
        <div className="flex  w-full p-1 justify-center  gap-5 items-center">
          <div className=" md:w-1/2   flex w-full p-3 justify-center items-start border rounded-full border-[#e5e7eb] my-2 ">
            <input
              type="text"
              value={inputValue}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handelInputValue(e?.target?.value)
              }
              className="w-full px-2   text-sm outline-none "
            />
            <MdOutlineSearch className="cursor-pointer w-[10%] sm:w-[5%] " />
          </div>
          <MdClose onClick={onClose} className="cursor-pointer  " />
        </div>

        {inputValue && (
          <SelectionOption value={inputValue} onSelect={handelInputValue} />
        )}
      </div>
    </div>
  );
};

const SelectionOption = ({
  value,
  onSelect,
}: {
  value: string;
  onSelect: (val: string) => void;
}) => {
  const [filterData, setFilterData] = useState<TItem[]>();
  const data = ProductData[0]?.items;
  useEffect(() => {
    setFilterData(
      data?.filter((items) =>
        items.title.toLowerCase().includes(value.toLowerCase())
      )
    );
  }, [value]);

  return (
    <div
      className=" 
     px-2 md:w-1/2 w-full overflow-auto absolute z-50 top-28  text-black bg-white   border rounded-md border-[#e5e7eb]   "
    >
      {filterData?.map((item: TItem, i: number) => {
        return (
          <Link
            to=""
            key={i}
            onClick={() => onSelect(item.title)}
            className=" py-1 border-b  text-sm my-2 border-[#e5e7eb] flex items-center gap-3  "
          >
            <img
              src={item.image}
              className="w-10 h-10  object-cover  rounded-md"
              alt=""
            />
            <div>
              <p>{item.title}</p>
              <span className=" text-gray-600 text-xs ">{item.price}</span>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default AutoSelectInput;
