import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import type { TItem, TOrderData } from "../types";
import { Link } from "react-router-dom";
import { ProductData } from "../data";
import Card from "../../../Components/Card";

const Category = () => {
  return (
    <div
      className="flex flex-col gap-20  px-5 sm:px-10 md:px-16 lg:px-24 xl:w-[1280px]
"
    >
      <div className="w-full   ">
        <Swiper
          slidesPerView={4.5}
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
            520: {
              slidesPerView: 2,
            },
        
            720: {
              slidesPerView: 3,
            },

            920: {
              slidesPerView: 3.5,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
        >
          {ProductData.map((order: TOrderData, index: number) =>
            order.items.map((item: TItem, i: number) => (
              <SwiperSlide key={`${index}-${i}`} className="px-3   ">
                <div className="flex relative rounded-xl overflow-hidden flex-col items-center gap-2">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-80 w-64 object-cover  "
                  />
                  <div className="absolute bg-gray-900/10 h-full  w-full flex justify-center flex-col items-center gap-2 ">
                    <h1 className="text-white font-bold text-xl">Top Sales</h1>
                    <button className="bg-white hover:text-white px-3 text-xs  cursor-pointer hover:bg-gray-950 hover:border-gray-950 border border-gray-200 py-2 rounded-4xl transform duration-300">
                      <Link to="/shop">Shop Now</Link>
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))
          )}
        </Swiper>
      </div>
      <div className="w-full   flex flex-col gap-5  ">
        <h1 className="text-center text-2xl font-medium ">Trending product</h1>
        <span className="text-center text-xs  ">
          Follow the most popular trends and get exclusive items from Foesta
          shop.
        </span>
        <div>
          <Swiper
            slidesPerView={4.5}
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
              520: {
                slidesPerView: 2,
              },
            
              720: {
                slidesPerView: 3,
              },

              920: {
                slidesPerView: 3.5,
              },
              1224: {
                slidesPerView: 4,
              },
            }}
          >
            {ProductData.map((order: TOrderData, index: number) =>
              order.items.map((items: TItem, i: number) => (
                <SwiperSlide
                  key={`${index}-${i}`}
                  className="px-3  md:mx-5 lg:mx-2 flex  "
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
  );
};

export default Category;
