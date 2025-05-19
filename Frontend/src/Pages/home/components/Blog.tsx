import React from "react";
import { MdOutlineDateRange } from "react-icons/md";
import BlogImg from "../../../assets/HomeImg/blog1_510f2033-6572-4823-918c-534ec70baa8b_720x.webp";
function Blog() {
  return (
    <div className="w-full flex flex-col justify-center items-center  px-5 sm:px-10 md:px-16 lg:px-24  gap-8  xl:w-[1280px]">
      <div className="flex flex-col justify-center items-center ">
        <h1 className="text-center text-2xl font-medium ">Our Latest Blog</h1>
        <span className="text-center text-xs  ">
          Follow the most popular trends and get exclusive items from Foesta
          shop.
        </span>
      </div>

      <div className="w-full flex justify-center flex-wrap md:flex-nowrap lg:gap-5 gap-5 md:gap-2  ">
        {new Array(3).fill(null).map((items, index: number) => (
          <div
            key={index}
            className="flex-col flex bg-gray-100 w-80 lg:w-96 gap-2 rounded-md hover:shadow-md  "
          >
            <img src={BlogImg} alt="" />
            <div className=" p-5 flex flex-col gap-5 justify-start items-start  ">
              <div className="flex text-xs items-center gap-2 text-gray-600">
                <MdOutlineDateRange />
                <span >Mar 30, 2024</span>
              </div>
              <p className=" text-md text-gray-800">
                Maximizing Efficiency without Sacrificing Creativity.
              </p>
              <button className="border text-sm border-gray-300 px-4 py-2 cursor-pointer hover:bg-black hover:text-white rounded-md transition duration-500  ">
                Read more
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
