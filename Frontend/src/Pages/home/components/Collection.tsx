import React from 'react'
import Banner1 from "../../../assets/HomeImg/banner-1.webp";
import Banner2 from "../../../assets/HomeImg/banner-2.webp";

const  Collection = () =>{
  return (
     <div className="px-24 flex w-full gap-6 ">
        <div className="relative group rounded-2xl overflow-hidden  flex justify-center items-center  ">
          <img
            src={Banner1}
            alt=""
            className="    transform transition-transform duration-500 group-hover:scale-105   "
          />
          <div className="absolute flex flex-col gap-4 justify-center items-center  h-full z-10 w-fill  ">
            <span className="text-white text-sm ">
              Free Shipping Over Order $150
            </span>
            <h1 className="text-white text-4xl font-semibold">
              Spring Collection
            </h1>
            <button className=" cursor-pointer hover:bg-black hover:text-white transition duration-500 bg-white px-4 py-2 text-xs rounded-full ">
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
          <div className="absolute flex flex-col gap-4 justify-center items-center  h-full w-full z-10 w-fill  ">
            <span className="text-white text-sm ">New Weekend Sales Offer</span>
            <h1 className="text-white text-4xl font-semibold">
              -25% Off Items
            </h1>
            <button className=" cursor-pointer hover:bg-black hover:text-white transition duration-500 bg-white px-4 py-2 text-xs rounded-full ">
              Explore now
            </button>
          </div>
        </div>
      </div>
  )
}

export default Collection