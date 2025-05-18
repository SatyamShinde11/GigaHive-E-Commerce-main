import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import { slideData } from "../data";
import { Link } from "react-router-dom";
import { TbWorldPin } from "react-icons/tb";

const HeroSlide = () => {
  return (
    <div className="h-full  ">
      <div className=" hidden sm:flex   ">
        <Swiper
          navigation
          modules={[Navigation]}
          loop={true}
          className="mySwiper"
        >
          {slideData.map(({ btn, heading, id, img, para }, index: number) => (
            <SwiperSlide className="flex relative w-full" key={index + id}>
              <div className="absolute w-1/3 md:w-1/2 h-full flex justify-center items-start ml-20 md:ml-40 flex-col gap-4 ">
                <h1 className=" text-xl  md:text-6xl font-bold text-[#252222]  ">
                  {heading}
                </h1>
                <span className="text-xs md:text-sm font-medium ">{para}</span>
                <button className="bg-white px-2 md:px-4 py-1 md:py-2  text-xs md:text-sm  cursor-pointer hover:bg-[#41b7ea2c] border border-border rounded-4xl transform duration-300">
                  <Link to="/shop">{btn}</Link>
                </button>
              </div>
              <img src={img} className="h-full w-full" alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className=" flex sm:hidden   ">
        <Swiper
          navigation
          modules={[Navigation]}
          loop={true}
          className="mySwiper"
        >
          {slideData.map(
            ({ btn, MobileTitle, id, ImgMobile, para }, index: number) => (
              <SwiperSlide
                className="w-full  h-full flex  justify-center items-start  flex-col gap-5  "
                key={index + id}
              >
                <div>
                  <img src={ImgMobile} className="h-full w-full" alt="" />
                </div>
                <div className="relative flex flex-col justify-center gap-5 mt-5 items-center  ">
                  <h1 className=" text-xl  md:text-6xl font-bold text-[#252222]  ">
                    {MobileTitle}
                  </h1>
                  <span className="text-xs md:text-sm font-medium ">
                    {para}
                  </span>
                  <button className="bg-white px-4 py-2  text-xs  cursor-pointer hover:bg-[#41b7ea2c] border border-border rounded-4xl transform duration-300">
                    <Link to="/shop">{btn}</Link>
                  </button>
                </div>
              </SwiperSlide>
            )
          )}
        </Swiper>
      </div>

      <div className="flex w-full flex-wrap   ">
        {new Array(4).fill(null).map((_item, index) => (
          <div
            className="flex w-full sm:w-1/2 md:w-1/4 py-5 md:py-10 justify-center items-center gap-3 md:border-b border-r border-border  "
            key={index}
          >
            <TbWorldPin className="p-2 rounded-full w-14 h-14 border border-border" />
            <div className="flex flex-col gap-1">
              <h1 className="text-md">Worldwide Shipping</h1>
              <span className="text-sm text-nowrap">
                World Wide Free Shipping.
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSlide;
