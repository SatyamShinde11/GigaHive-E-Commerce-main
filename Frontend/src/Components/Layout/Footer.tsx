import React from "react";
import { MdArrowForward } from "react-icons/md";
import { Link } from "react-router-dom";
import FooterImg from "../../assets/FooterImg";
import { BrandImg } from "../../Pages/home/data";
import type { TBrandImg } from "../../types/types";

const Footer: React.FC = () => {
  return (
    <div className="mt-20 flex justify-center ">
      <div className="flex flex-col  xl:w-[1280px] ">
       <div className="overflow-hidden py-10 bg-gray-100 border-b border-gray-200">
  <div className="flex justify-evenly gap-20 scroll-loop w-full  ">
    {BrandImg.map((items: TBrandImg, index: number) => (
      <img
        src={items.BrandImg}
        key={index}
        className="h-16"
        alt=""
      />
    ))}
  </div>
</div>

        <div className="bg-gray-100 w-full">
          <div className="flex  flex-wrap  sm:justify-between gap-6 py-10 px-5 sm:px-10 md:px-24">
            <ul className="flex flex-col gap-4 ">
              <h1 className="text-2xl font-medium ">Contact Info</h1>
              <div className="flex flex-col gap-3">
                <li className="text-sm text-gray-600 ">
                  <span>Find a location nearest you.</span>
                </li>
                <li className="text-sm text-gray-600 ">
                  <p className="text-black ">Hotline:</p>
                  <span>(+00) 123 - 4568</span>
                </li>
                <li className="text-sm text-gray-600 ">
                  <p className="text-black ">Address:</p>
                  <span>512 Howard Street #19 San Francisco.USA.</span>
                </li>
              </div>
            </ul>

            <ul className="flex flex-col gap-4 ">
              <h1 className="text-2xl font-medium ">Quick Links</h1>
              <div className="flex flex-col gap-3">
                <li className="text-sm text-gray-600 ">
                  <Link to="/">My Account</Link>
                </li>
                <li className="text-sm text-gray-600 ">
                  <Link to="/">Cart</Link>
                </li>
                <li className="text-sm text-gray-600 ">
                  <Link to="/">Wishlist</Link>
                </li>
                <li className="text-sm text-gray-600 ">
                  <Link to="/">Product Compare</Link>
                </li>
              </div>
            </ul>
            <ul className="flex flex-col gap-4 ">
              <h1 className="text-2xl font-medium ">Information</h1>
              <div className="flex flex-col gap-3">
                <li className="text-sm text-gray-600 ">
                  <Link to="/">Privacy Policy</Link>
                </li>
                <li className="text-sm text-gray-600 ">
                  <Link to="/">Refund Policy</Link>
                </li>
                <li className="text-sm text-gray-600 ">
                  <Link to="/">Shipping & Return</Link>
                </li>
                <li className="text-sm text-gray-600 ">
                  <Link to="/">Terms & Conditions</Link>
                </li>
              </div>
            </ul>
            <ul className="flex flex-col gap-4 ">
              <h1 className="text-2xl font-medium ">Let's Get In Touch</h1>
              <div>
                <span className="text-gray-600 text-sm">
                  Subscribe to our newsletter to receive news on update.
                </span>
                <div className="border border-gray-200  bg-white flex w-full h-10 rounded-md justify-center items-center ">
                  <input type="email" className="w-full p-2 outline-none" />
                  <MdArrowForward className="cursor-pointer  w-10 h-full p-2" />
                </div>
              </div>
            </ul>
          </div>
          <div className="flex flex-wrap  justify-center sm:justify-between border-t  w-full  border-gray-200 gap-2  py-10 px-5 sm:px-10 md:px-24">
            <span>@2025 Foesta shopify theme</span>
            <FooterImg />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
