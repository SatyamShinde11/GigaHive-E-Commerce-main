import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import "./styles.css";

import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import checkOut from "../../assets/Footerimg.tsx";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { MdSend } from "react-icons/md";

const items = {
  title: "Modern Slim Fit Suit",
  price: 7000,
  image:
    "https://cdn.shopify.com/s/files/1/0638/6879/7087/files/11.png?v=1716285223",
  image2:
    "https://cdn.shopify.com/s/files/1/0638/6879/7087/files/2.png?v=1716285182",
  quantity: 1,
  variant: "Default Title",
  color: "Blue",
  size: "Medium",
  stock: "In stock",
  brand: "parthers-demo",
};

const index = () => {
  console.log("hii");
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  const [inputNumber, setInputNumber] = useState<number>(1);

  const handelIncrease = () => {
    if (inputNumber >= 10) return;

    setInputNumber(inputNumber + 1);
  };
  const handelDecrease = () => {
    if (inputNumber <= 1) return;

    setInputNumber(inputNumber - 1);
  };

  return (
    <div className="mt-14 relative overflow-hidden flex flex-col gap-10 w-full">
      <div className="bg-gray-100 py-10 flex flex-col gap-5 items-center w-full">
        <h1 className="text-2xl font-medium text-center">Products</h1>
        <div className="flex text-xs gap-2">
          <h1 className="text-gray-500">Home</h1>-
          <h1 className="text-gray-500">Shop</h1>-<h1>Product</h1>
        </div>
      </div>
      <div className="flex  px-5 sm:px-10 md:px-16 lg:px-24 w-full gap-5 2xl:w-[1536px]">
        <div className="w-1/2 ">
          <Swiper
            loop={true}
            spaceBetween={10}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2"
          >
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
            </SwiperSlide>
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            loop={true}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="w-1/2  flex flex-col gap-3 ">
          <div className="flex text-sm font-semibold ">
            <span className="text-gray-500">Product </span>-
            <p> {items.title}</p>
          </div>
          <h1 className="text-sm font-medium ">{items.title}</h1>
          <h2 className="text-sm">₹ {items.price}</h2>

          <p className=" text-sm flex items-center gap-2 ">
            <span>Color:</span>{" "}
            <span className="text-xs text-gray-700">{items.color}</span>{" "}
          </p>
          <p className=" text-sm flex items-center gap-2 ">
            <span>Size:</span>{" "}
            <span className="text-xs text-gray-700"> {items.size}</span>{" "}
          </p>

          <div className="flex gap-2 flex-col">
            <p className="text-sm">Quantity</p>
            <div className="flex gap-2  text-xs ">
              <div className="border-gray-200 border  flex items-center rounded-full px-4  ">
                <button onClick={handelDecrease} className=" cursor-pointer ">
                  -
                </button>
                <input
                  type="number"
                  value={inputNumber}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setInputNumber(e.target.value)
                  }
                  className="w-12 flex justify-center items-center outline-none p-2"
                />
                <button onClick={handelIncrease} className=" cursor-pointer ">
                  +
                </button>
              </div>
              <button className=" text-black  px-3 text-xs  cursor-pointer  border-gray-200 hover:shadow-xs hover:bg-gray-100 hover:shadow-gray-600 border  py-2 rounded-md transform duration-300 ">
                Add to cart
              </button>
            </div>
          </div>
          <button className="bg-gray-950 hover:text-black text-white px-3 text-xs  cursor-pointer hover:bg-white hover:border-gray-200 border-gray-950 border  py-2 rounded-full transform duration-300 w-1/2 ">
            Buy it now
          </button>
          <div>
            <p className="text-sm">Guaranteed safe checkout</p>
            <img src={checkOut} alt="" />
          </div>

          <div>
            <h1 className="text-sm font-semibold ">Description</h1>
            <p className="text-xs hidden">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel
              ratione quae porro dolor nihil harum aliquam, quis ab excepturi
              maiores voluptate aspernatur aliquid laudantium natus minus
              accusantium commodi assumenda facere corrupti! Quod veritatis,
              esse consectetur inventore aspernatur dolore magnam dicta ratione
              vero mollitia totam numquam sint! Adipisci cum iusto autem
              recusandae placeat eaque, corporis praesentium et culpa, neque
              vero tempora blanditiis voluptates doloribus. Ad ea repellendus
              sint cupiditate, amet, odit at hic praesentium quos quae pariatur,
              nihil impedit iusto laboriosam error eveniet maiores tempore
              sapiente voluptates? Harum consectetur esse qui beatae ipsa
              explicabo cumque quidem fuga omnis non soluta dignissimos magni
              quasi, delectus ipsum vero, expedita ullam exercitationem
              distinctio? Impedit adipisci natus quasi beatae, qui distinctio,
              unde ipsa earum minus dolorem, molestiae error. Obcaecati sint
              nemo cum. Eius repellendus ipsam in, voluptate debitis neque
              nesciunt ipsa sint nulla fugiat at inventore corporis nisi, optio
              quam consequuntur architecto, earum dignissimos placeat!
            </p>
          </div>
          <div className="flex gap-2">
            <button className="text-md items-center gap-2 border border-gray-200 rounded-md px-3 py-1 flex text-nowrap " ><FaFacebook />FaceBook</button>
            <button className="text-md items-center gap-2 border border-gray-200 rounded-md px-3 py-1 flex text-nowrap " ><FaSquareXTwitter />X</button>
            <button className="text-md items-center gap-2 border border-gray-200 rounded-md px-3 py-1 flex text-nowrap " ><MdSend />Share more</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
