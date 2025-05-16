import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ProductData } from '../data';
import type { Item, OrderData } from '../types';
import Card from '../../../Components/Card';

function TrendingCard() {
   
  return (
    <div className="w-full px-24  flex flex-col gap-5  ">
        <h1 className="text-center text-2xl font-medium ">Trending product</h1>
        <span className="text-center text-xs  ">
          Follow the most popular trends and get exclusive items from Foesta
          shop.
        </span>
        <div>
          <Swiper
            slidesPerView={4.5}
            spaceBetween={30}
            navigation
            modules={[Navigation]}
            loop={true}
            className="mySwiper"
          >
            {ProductData.map((order: OrderData, index: number) =>
              order.items.map((items: Item, i: number) => (
                <SwiperSlide key={`${index}-${i}`} className="mx-8 px-2 flex  ">
                   <div className='relative'>
               <Card  items={items} key={index} />
  </div>
  
                </SwiperSlide>
              ))
            )}
          </Swiper>
        </div>
      </div>
  )
}

export default TrendingCard