import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
 
import { slideData } from "../data";
import { Link } from "react-router-dom";
import { TbWorldPin } from "react-icons/tb";

const HeroSlide = () => {
  return (
    <div>
      <div>
        <Swiper
          navigation
          modules={[Navigation]}
          loop={true}
          className="mySwiper"
        >
          {slideData.map(({ btn, heading, id, img, para }) => (
            <SwiperSlide className="flex relative w-full" key={id}>
              <div className="absolute w-1/2 h-full flex justify-center items-start ml-40 flex-col gap-4 ">
                <h1 className="text-6xl font-bold text-[#252222] ">
                  {heading}
                </h1>
                <span className="text-sm font-medium ">{para}</span>
                <button className="bg-white px-4 text-sm  cursor-pointer hover:bg-[#41b7ea2c] border border-[#E5E7EB] py-2 rounded-4xl transform duration-300">
                  <Link to="/shop">{btn}</Link>
                </button>
              </div>
              <img src={img} className="h-full w-full" alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex w-full flex-wrap">
        {new Array(4).fill(null).map((_item, index) => (
          <div
            className="flex w-1/4 py-10 justify-center items-center gap-3 border-b border-r border-[#E5E7EB]"
            key={index}
          >
            <TbWorldPin className="p-2 rounded-full w-14 h-14 border border-[#E5E7EB]" />
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
}

export default HeroSlide;
