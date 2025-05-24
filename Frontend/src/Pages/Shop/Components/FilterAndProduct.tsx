import React, { useEffect, useState } from "react";
import type { TItem, TOrderData } from "../../../types/types";
import { ProductData } from "../../home/data";
import Card from "../../../Components/Card";
import { MdKeyboardArrowDown } from "react-icons/md";
import { filterData } from "../data";

const FilterAndProduct = () => {
  const [allProducts, setAllProducts] = useState<TItem[]>([]);
  const [productShowData, setProductShowData] = useState<TItem[]>([]);
  const [openSection, setOpenSection] = useState<Record<number, boolean>>({});
  const [filterValueArr, setFilterValueArr] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState({ from: "", to: "" });

  useEffect(() => {
    const allItems: TItem[] = ProductData.flatMap(
      (order: TOrderData) => order.items
    );

    setProductShowData(allItems);
    setAllProducts(allItems);
  }, []);

  const handleToggle = (id: number) => {
    setOpenSection((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleClickFilterValue = (value: string, checked: boolean) => {
    console.log(value, checked);
    if (!value) return;

    setFilterValueArr((prev) => {
      if (checked) {
        if (!prev.includes(value)) {
          return [...prev, value];
        }
        return prev;
      } else {
        return prev.filter((item) => item !== value);
      }
    });
  };

  const handleFilterPrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPriceRange((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleClearFilterValue = () => {
    setFilterValueArr([]);
  };

  useEffect(() => {
    const filterDatas = allProducts.filter((items: TItem) => {
      return filterValueArr.some(
        (value) =>
          items.title === value ||
          items.color === value ||
          items.size === value ||
          items.stock === value ||
          items.brand === value
      );
    });
    setProductShowData(filterDatas);
  }, [filterValueArr, priceRange]);

  return (
    <div className="flex w-full gap-10 relative ">
      <div className="w-1/3 md:relative md:flex hidden absolute top-0  flex-col gap-5">
        <div className="text-sm w-full">
          <span
            onClick={handleClearFilterValue}
            className=" cursor-pointer hover:underline "
          >
            Remove All
          </span>
          <div className="w-full text-xs flex flex-wrap gap-2">
            {filterValueArr.map((items: string, index: number) => {
              return (
                <p
                  key={index}
                  className=" cursor-pointer hover:underline border border-gray-200 py-1 px-2 rounded-md "
                >
                  {items}
                </p>
              );
            })}
          </div>
        </div>

        {filterData.map((items, index) => {
          return (
            <div key={+index} className="border border-gray-200 rounded-md ">
              <h1
                onClick={() => handleToggle(items.id)}
                className="flex justify-between p-2 bg-gray-200 rounded-t-md items-center text-xs  "
              >
                {items.title}{" "}
                <MdKeyboardArrowDown className="cursor-pointer text-sm " />{" "}
              </h1>

              {openSection[items.id] && (
                <div className="text-xs  flex flex-col justify-between p-2 ">
                  {items.type == "price" ? (
                    <div className="text-xs w-full gap-3 flex justify-between p-2 ">
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
                      -{" "}
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
                    items.options?.map((option, i) => (
                      <div
                        className={`flex justify-between text-xs p-2 ${
                          option?.count === 0 &&
                          " text-gray-400 cursor-not-allowed "
                        }  `}
                        key={`${option.label}-${i}`}
                      >
                        <label
                          className={`flex gap-2 `}
                          htmlFor={`${option.label}-${i}`}
                        >
                          <input
                            type="checkbox"
                            id={`${option.label}-${i}`}
                            onChange={(
                              e: React.ChangeEvent<HTMLInputElement>
                            ) => {
                              handleClickFilterValue(
                                option?.label,
                                e.target.checked
                              );
                            }}
                            disabled={option.count === 0}
                          />
                          <span className="text-gray-600">{option.label}</span>
                        </label>
                        <span>({option.count})</span>
                      </div>
                    ))
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="flex flex-wrap justify-center w-full gap-5 ">
        {productShowData.map((items: TItem, index: number) => (
          <div className="relative" key={items.title + index}>
            <Card items={items} key={index} ShowExtraAction={true} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterAndProduct;
