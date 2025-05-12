import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import HomeImg1 from "../assets/HomeImg/slider-1.webp";
import HomeImg2 from "../assets/HomeImg/slider-2.webp";
import HomeImg3 from "../assets/HomeImg/slider-3.webp";
import { Link } from "react-router-dom";

interface HomeData {
  id: number;
  img: string;
  heading: string;
  para: string;
  btn: string;
}

const Home: React.FC = () => {
  const [homeData] = useState([
    {
      id: 1,
      img: HomeImg1,
      heading: " Summer Style <br /> Sensations.",
      para: " Having plain clothing makes you look ordinary. We can assist you <br /> in choosing the right dresses with Foesta.",
      btn: "Shop now",
    },
    {
      id: 2,
      img: HomeImg2,
      heading: " Winter Style <br /> Delights.",
      para: " Having plain clothing makes you look ordinary. We can assist you <br /> in choosing the right dresses with Foesta.",
      btn: "Shop now",
    },
    {
      id: 3,
      img: HomeImg3,
      heading: " Spring Style <br /> Inspirations.",
      para: " Having plain clothing makes you look ordinary. We can assist you <br /> in choosing the right dresses with Foesta.",
      btn: "Shop now",
    },
  ]);

  return (
    <div className="mt-14 relative  overflow-hidden flex flex-col gap-5">
        
      <div>
        <Swiper
          navigation={true}
          modules={[Navigation]}
          loop={true}
          className="mySwiper"
        >
          {homeData.map((items: HomeData) => {
            console.log(items);
            const { btn, heading, id, img, para } = items;

            return (
              <SwiperSlide className=" flex relative w-full" key={id}>
                <div className="absolute w-1/2 h-full flex justify-center items-start ml-40 flex-col gap-4 ">
                  <h1 className="text-6xl font-bold text-[#252222] ">
                    {heading.split("<br />").map((line, index) => (
                      <span key={index}>
                        {line}
                        <br />
                      </span>
                    ))}
                  </h1>
                  <p className="text-sm font-medium ">
                    {para.split("<br />").map((line, index) => (
                      <span key={index}>
                        {line}
                        <br />
                      </span>
                    ))}
                  </p>
                  <button className="bg-white px-4 text-sm  font-semibold cursor-pointer hover:bg-[#41b7ea2c] border  border-[#E5E7EB] py-2 rounded-4xl transform duration-300 ">
                  <Link to="/shop">
                    {btn}
                  </Link>
                  </button>
                </div>
                <img src={img} className="h-full w-full " alt="" />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Home;
