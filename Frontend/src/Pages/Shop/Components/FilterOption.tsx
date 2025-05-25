import React from "react";
import { MdArrowRightAlt } from "react-icons/md";
import type { TFilterOption, TFilterData } from "../../../types/types";
import useFilterProducts from "../../../Hook/useFilterProducts";

interface optionDataOptionProps {
  onBack: (item:TFilterData) => void;
  optionData: TFilterData;
  options?: TFilterOption[];
}

const optionDataOption: React.FC<optionDataOptionProps> = ({
  onBack,
  optionData,
}) => {
  const { priceRange, handleClickFilterValue, handleFilterPrice } =
    useFilterProducts();

  return (
    <div className="flex flex-col overflow-auto gap-5 p-3 h-full  top-0">
      <div
        className="flex items-center gap-5 p-3 cursor-pointer"
        onClick={onBack}
      >
        <MdArrowRightAlt className="text-2xl rotate-180" />
        <h1 className="text-sm">{optionData?.title}</h1>
      </div>

      <div>
        {
          <div className="text-xs flex flex-col justify-between p-2">
            {optionData?.type === "price" ? (
              <div className="flex gap-3 justify-between">
                <div className="w-1/2">
                  <span className="text-gray-600">From</span>
                  <input
                    type="number"
                    name="from"
                    value={priceRange.from}
                    onChange={handleFilterPrice}
                    className="outline-none px-2 w-full border border-gray-200 rounded-md h-8"
                  />
                </div>
                -
                <div className="w-1/2">
                  <span className="text-gray-600">To</span>
                  <input
                    type="number"
                    name="to"
                    value={priceRange.to}
                    onChange={handleFilterPrice}
                    className="outline-none px-2 w-full border border-gray-200 rounded-md h-8"
                  />
                </div>
              </div>
            ) : (
              optionData.options?.map((items: TFilterOption, i: number) => (
                <div
                  className={`flex justify-between text-xs p-2 ${
                    items?.count === 0 && " text-gray-400 cursor-not-allowed "
                  }  `}
                  key={`${items.label}-${i}`}
                >
                  <label
                    className="flex gap-2 "
                    htmlFor={`${items.label}-${i}`}
                  >
                    <input
                      type="checkbox"
                      id={`${items.label}-${i}`}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        handleClickFilterValue(items?.label, e.target.checked);
                      }}
                      disabled={items.count === 0}
                    />
                    <span className="text-gray-600 cursor-pointer ">
                      {items.label}
                    </span>
                  </label>
                  <span>({items.count})</span>
                </div>
              ))
            )}
          </div>
        }
      </div>
    </div>
  );
};

export default React.memo(optionDataOption);
