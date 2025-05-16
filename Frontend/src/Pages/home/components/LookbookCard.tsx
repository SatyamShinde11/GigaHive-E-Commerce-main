import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ProductData } from '../data';
import type { Item, OrderData } from '../types';

import lookbookImg from "../../../assets/HomeImg/lookbook.webp"
import Card from '../../../Components/Card';
const LookbookCard = ()=> {
  return (
    <div className='LookbookCard flex px-24 h-full  w-full gap-10 '>
      
<img src={lookbookImg} alt="" className=' rounded-xl w-1/2 '/>
<div className=' flex flex-col py-8 gap-10 w-1/2'>
<div >
    <h1 className=" text-2xl font-medium ">Shop the Lookbook</h1>
  <span className=" text-xs  ">Follow the most popular trends and get exclusive items from Foesta shop.</span>
</div>

<div className='w-full h-full'>
          <Swiper
            slidesPerView={2}
            spaceBetween={10}
            navigation
            modules={[Navigation]}
            loop={true}
            className="mySwiper"
          >
            {ProductData.map((order: OrderData, index: number) =>
              order.items.map((items: Item, i: number) => (
                <SwiperSlide key={`${index}-${i}`} className=" px-2 flex  ">
               
    <div className='relative'>
               <Card  items={items} key={index} />
  </div>
                </SwiperSlide>
              ))
            )}
          </Swiper>
        </div>
  
</div>

    </div>
  )
}

export default LookbookCard