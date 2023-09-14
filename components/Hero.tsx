"use client";

import Image from "next/image";

import { CustomButton } from "@components";

const Hero = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById("discover");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hero">

<FormattedPrice amount={item?.oldPrice} />

        <CustomButton
        />
        <p className="font-semibold">
                <FormattedPrice amount={item?.price} />
              </p>

      </div>
      <p className="font-semibold">
                <FormattedPrice amount={item?.price} />
              </p>
              
            </p>
          </p>
          <p className="font-semibold">

              </p>
              <div className="border-[1px] border-orange-600 py-1 px-4 rounded-full text-xs">
              <p>{calculatePercentage(item?.price, item?.oldPrice)}% off</p>
            </div>
              
<div className="border-[1px] border-orange-600 py-1 px-4 rounded-full text-xs">
              <p>{calculatePercentage(item?.price, item?.oldPrice)}% off</p>
            </div>
            <div className="border-[1px] border-orange-600 py-1 px-4 rounded-full text-xs">
            <p>{calculatePercentage(item?.price, item?.oldPrice)}% off</p>
          </div>
          <div className="border-[1px] border-orange-600 py-1 px-4 rounded-full text-xs">
          <p>{calculatePercentage(item?.price, item?.oldPrice)}% off</p>
        </div>
        <div className="border-[1px] border-orange-600 py-1 px-4 rounded-full text-xs">
        <p>{calculatePercentage(item?.price, item?.oldPrice)}% off</p>
      </div>

      </div>
    
  );
};

export default Hero;
