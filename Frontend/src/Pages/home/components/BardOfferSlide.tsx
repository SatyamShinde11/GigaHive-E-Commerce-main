import React from "react";

function BardOfferSlide() {
  return (
    <div className="relative overflow-hidden bg-gray-100  py-10 ">
      <div className="flex gap-20 animation-scroll ">
        {new Array(5).fill(null).map((_, index) => (
          <div key={index} className="flex gap-20">
            <h1 className="text-2xl  text-nowrap ">Limited Offer Sales!</h1>
            <h1 className="text-2xl font-semibold text-nowrap ">
              Hot Deal Products!
            </h1>
            <h1 className="text-2xl  text-nowrap ">Best Selling Items!</h1>
            <h1 className="text-2xl font-semibold text-nowrap ">
              Spring Collections!
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BardOfferSlide;
