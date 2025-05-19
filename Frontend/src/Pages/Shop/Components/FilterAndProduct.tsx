import React from "react";
import type { TItem, TOrderData } from "../../home/types";
import { ProductData } from "../../home/data";
import Card from "../../../Components/Card";
import { MdKeyboardArrowDown } from "react-icons/md";

const FilterAndProduct = () => {
  return (
    <div className="flex w-full gap-10 ">
      <div className="w-1/3 flex flex-col gap-5">
      <div className="text-xs">
      <span className=" cursor-pointer hover:underline ">Remove All</span>

      </div>
        <div className="border border-gray-200 rounded-md ">
          <h1 className="flex justify-between p-2 bg-gray-200 rounded-t-md items-center text-xs  ">
            Availability{" "}
            <MdKeyboardArrowDown className="cursor-pointer text-sm " />{" "}
          </h1>
          <div className="text-xs flex flex-col justify-between p-2 ">
            <div className="flex justify-between text-xs p-2">
              <div className="flex gap-2 ">
                <input type="checkbox" name="" id="InStock" />
                <span>In stock </span>
              </div>
              <span>(5)</span>
            </div>
            <div className="flex justify-between text-xs p-2">
              <div className="flex gap-2 ">
                <input type="checkbox" name="" id="InStock" />
                <span>In stock </span>
              </div>
              <span>(5)</span>
            </div>
          </div>
        </div>
        <div className="border border-gray-200 rounded-md ">
          <h1 className="flex justify-between p-2 bg-gray-200 rounded-t-md items-center text-xs  ">
            Price <MdKeyboardArrowDown className="cursor-pointer text-sm " />{" "}
          </h1>
          <div className="text-xs w-full gap-3 flex justify-between p-2 ">
            <div className="w-1/2">
              <span>From</span>
              <input
                type="number"
                className=" outline-none px-2 w-full border border-gray-200 rounded-md h-8 "
              />
            </div>
            -{" "}
            <div className="w-1/2">
              <span>To</span>
              <input
                type="number"
                className=" outline-none px-2 w-full border border-gray-200 rounded-md h-8 "
              />
            </div>
          </div>
        </div>
        <div className="border border-gray-200 rounded-md ">
          <h1 className="flex justify-between p-2 bg-gray-200 rounded-t-md items-center text-xs  ">
            Color <MdKeyboardArrowDown className="cursor-pointer text-sm " />{" "}
          </h1>
          <div className="text-xs flex flex-col justify-between p-2 ">
            <div className="text-xs flex justify-between p-2 ">
              <div className="flex gap-2">
                <input type="checkbox" name="" id="InStock" />
                <span>White </span>
              </div>
              <span>(5)</span>
            </div>
            <div className="text-xs flex justify-between p-2 ">
              <div className="flex gap-2">
                <input type="checkbox" name="" id="InStock" />
                <span>Blue</span>
              </div>
              <span>(5)</span>
            </div>
            <div className="text-xs flex justify-between p-2 ">
              <div className="flex gap-2">
                <input type="checkbox" name="" id="InStock" />
                <span>Yellow</span>
              </div>
              <span>(5)</span>
            </div>
          </div>
        </div>
        <div className="border border-gray-200 rounded-md ">
          <h1 className="flex justify-between p-2 bg-gray-200 rounded-t-md items-center text-xs  ">
            Size <MdKeyboardArrowDown className="cursor-pointer text-sm " />{" "}
          </h1>
          <div className="text-xs flex flex-col justify-between p-2 ">
            <div className="flex justify-between text-xs p-2">
              <div className="flex gap-2 ">
                <input type="checkbox" name="" id="InStock" />
                <span>Small</span>
              </div>
              <span>(5)</span>
            </div>{" "}
            <div className="flex justify-between text-xs p-2">
              <div className="flex gap-2 ">
                <input type="checkbox" name="" id="InStock" />
                <span>Medium </span>
              </div>
              <span>(5)</span>
            </div>{" "}
            <div className="flex justify-between text-xs p-2">
              <div className="flex gap-2 ">
                <input type="checkbox" name="" id="InStock" />
                <span>Large</span>
              </div>
              <span>(5)</span>
            </div>
          </div>
        </div>
        <div className="border border-gray-200 rounded-md ">
          <h1 className="flex justify-between p-2 bg-gray-200 rounded-t-md items-center text-xs  ">
            Brand <MdKeyboardArrowDown className="cursor-pointer text-sm " />{" "}
          </h1>
          <div className="text-xs flex flex-col justify-between p-2 ">
            <div className="flex justify-between text-xs p-2">
              <div className="flex gap-2 ">
                <input type="checkbox" name="" id="InStock" />
                <span>Foesta-demo</span>
              </div>
              <span>(5)</span>
            </div>{" "}
            <div className="flex justify-between text-xs p-2">
              <div className="flex gap-2 ">
                <input type="checkbox" name="" id="InStock" />
                <span>parthers-demo </span>
              </div>
              <span>(5)</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-between w-full gap-5 ">
        {ProductData.map((order: TOrderData) =>
          order.items.slice(0, 8).map((items: TItem, index: number) => (
            <div className="relative" key={items.title}>
              <Card items={items} key={index} ShowExtraAction={true} />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default FilterAndProduct;
