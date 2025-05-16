import React from "react";
import { ProductData } from "../data";
import type { Item, OrderData } from "../types";
import Card from "../../../Components/Card";

const FeaturedCollection = () => {
  return (
    <div className="relative px-24 flex  items-center flex-col gap-5 ">
      <h1 className="text-center text-2xl font-medium ">Featured collection</h1>
      <span className="text-center text-xs  ">
        Follow the most popular trends and get exclusive items from Foesta shop.
      </span>

      <div className="flex flex-wrap justify-evenly w-full gap-5">
        {ProductData.map((order: OrderData, index: number) =>
          order.items.slice(0, 8).map((items: Item) => (
            <div className="relative">
              <Card items={items} key={index} ShowExtraAction={true} />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default FeaturedCollection;
