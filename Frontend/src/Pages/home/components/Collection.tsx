import React from "react";
import Banner1 from "../../../assets/HomeImg/banner-1.webp";
import Banner2 from "../../../assets/HomeImg/banner-2.webp";
import lookbookImg from "../../../assets/HomeImg/lookbook.webp";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ProductData } from "../data";
import type { TItem, TOrderData } from "../types";
import Card from "../../../Components/Card";

const Collection = () => {
  return (
    <div className="flex w-full  gap-20 flex-col  px-5 sm:px-10 md:px-16 lg:px-24  xl:w-[1280px] ">
      <div className=" px-5 sm:px-10 md:px-16 lg:px-24 flex w-full justify-center gap-6 flex-wrap lg:flex-nowrap ">
        <div className="relative group rounded-2xl overflow-hidden  flex justify-center items-center  ">
          <img
            src={Banner1}
            alt=""
            className="    transform transition-transform duration-500 group-hover:scale-105   "
          />
          <div className="absolute flex flex-col gap-2 md:gap-4 justify-center items-center  h-full z-10 w-fill  ">
            <span className="text-white text-sm ">
              Free Shipping Over Order $150
            </span>
            <h1 className="text-white text-2xl md:text-4xl font-semibold">
              Spring Collection
            </h1>
            <button className="bg-white hover:text-white px-3 text-xs  cursor-pointer hover:bg-gray-950 hover:border-gray-950 border border-gray-200 py-2 rounded-4xl transform duration-300">
              Explore now
            </button>
          </div>
        </div>

        <div className="relative group rounded-2xl overflow-hidden  flex justify-center items-center  ">
          <img
            src={Banner2}
            alt=""
            className="   transform transition-transform duration-500 group-hover:scale-105    "
          />
          <div className="absolute flex flex-col gap-2 md:gap-4 justify-center items-center  h-full w-full z-10 w-fill  ">
            <span className="text-white text-sm ">New Weekend Sales Offer</span>
            <h1 className="text-white text-2xl md:text-4xl  font-semibold">
              -25% Off Items
            </h1>
            <button className="bg-white hover:text-white px-3 text-xs  cursor-pointer hover:bg-gray-950 hover:border-gray-950 border border-gray-200 py-2 rounded-4xl transform duration-300">
              Explore now
            </button>
          </div>
        </div>
      </div>
      <div className="LookbookCard flex lg:px-24 h-full flex-col md:flex-row  w-full gap-10 ">
        <img
          src={lookbookImg}
          alt=""
          className=" rounded-xl w-full  object-cover md:w-1/2 "
        />
        <div className=" flex flex-col py-8 gap-10 w-full md:w-1/2">
          <div className="flex justify-center flex-col">
            <h1 className=" text-2xl font-medium ">Shop the Lookbook</h1>
            <span className=" text-xs  ">
              Follow the most popular trends and get exclusive items from Foesta
              shop.
            </span>
          </div>

          <div className="w-full h-full">
            <Swiper
              slidesPerView={1.5}
              spaceBetween={30}
              navigation
              modules={[Navigation]}
              loop={true}
              className="mySwiper"
              breakpoints={{
                320: {
                  slidesPerView: 1,
                },
                420: {
                  slidesPerView: 1.5,
                },
                550: {
                  slidesPerView: 2,
                },
                770: {
                  slidesPerView: 1,
                },
                920: {
                  slidesPerView: 1.5,
                },
                1254: {
                  slidesPerView: 2,
                },
              }}
            >
              {ProductData.map((order: TOrderData, index: number) =>
                order.items.map((items: TItem, i: number) => (
                  <SwiperSlide
                    key={`${index}-${i}`}
                    className=" px-3  md:mx-5 lg:mx-6 flex "
                  >
                    <div className="relative">
                      <Card items={items} key={index} />
                    </div>
                  </SwiperSlide>
                ))
              )}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
