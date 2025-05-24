import React from "react";
import { ProductData } from "../data";
import type { TItem, TOrderData } from "../../../types/types";
import Card from "../../../Components/Card";
import textImg from "../../../assets/HomeImg/RoundText.webp";

const FeaturedCollectionAndHotDeals = () => {
  return (
    <div className="flex gap-20 flex-col  ">
      <div className="relative  px-5 sm:px-10 md:px-24 flex  items-center flex-col gap-5 xl:w-[1280px]">
        <h1 className="text-center text-2xl font-medium ">
          Featured collection
        </h1>
        <span className="text-center text-xs  ">
          Follow the most popular trends and get exclusive items from Foesta
          shop.
        </span>

        <div className="flex flex-wrap justify-evenly w-full gap-5">
          {ProductData.map((order: TOrderData) =>
            order.items.slice(0, 8).map((items: TItem, index: number) => (
              <div className="relative" key={items.title}>
                <Card items={items} key={index} ShowExtraAction={true} />
              </div>
            ))
          )}
        </div>
      </div>
      <div className="relative w-full bg-gray-100   flex flex-col-reverse md:flex-row items-center  gap-5 ">
        <div className="flex w-full sm:w-1/2 flex-col py-5 justify-center items-center gap-5">
          <img src={textImg} alt="" className=" w-32 " />
          <h1 className="text-xl font-bold  text-center ">Hot Deals You Can’t Miss</h1>
          <span className="text-sm">
            Buy any products & take the gift voucher
          </span>
          <button className="bg-black text-white  py-3 px-6 text-xs  cursor-pointer hover:bg-transparent  hover:shadow-md hover:shadow-border hover:text-black  border border-gray-200  rounded-4xl transform duration-500 ">
            Button label
          </button>
        </div>
        <div className="w-full md:w-1/2">
          <iframe
            className="w-full h-96"
            src="https://www.youtube.com/embed/7m16dFI1AF8?rel=0&modestbranding=1&controls=1"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCollectionAndHotDeals;
