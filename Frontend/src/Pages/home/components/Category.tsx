import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import type { Item, OrderData } from '../types';
import { Link } from 'react-router-dom';
import { ProductData } from '../data';

const Category = () => {
  return (
    
      <div className="w-full px-24  ">
        <Swiper
         slidesPerView={4.5}
          navigation
          modules={[Navigation]}
          loop={true}
          className="mySwiper"
        >
          {ProductData.map((order: OrderData, index: number) =>
            order.items.map((item: Item, i: number) => (
              <SwiperSlide key={`${index}-${i}`} className="px-3 ">
               <div className="flex relative rounded-xl overflow-hidden flex-col items-center gap-2">
                   <img
                     src={item.image}
                     alt={item.title}
                     className="h-80 w-64 object-cover "
                   />
                   <div className="absolute bg-[#061e291f] h-full  w-full flex justify-center flex-col items-center gap-2 ">
            <h1 className="text-white font-bold text-xl">Top Sales</h1>
             <button className="bg-white hover:text-white px-2 text-xs  cursor-pointer hover:bg-[#41b7ea2c] border border-[#E5E7EB] py-1 rounded-4xl transform duration-300">
                   <Link to="/shop">Shop Now</Link>
                 </button>
                   </div>
                 </div>
              </SwiperSlide>
            ))
          )}
        </Swiper>
      </div>
  )
}

export default Category