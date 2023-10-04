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
              </p>

              <div className="flex items-center gap-x-2">
              <p className="text-slate-500 line-through text-sm">
                <FormattedPrice amount={item?.oldPrice} />
              </p>
              <p className="font-semibold">
                <FormattedPrice amount={item?.price} />
              </p>
            </div>
            <p className="font-semibold">
                <FormattedPrice amount={item?.price} />
              </p>
              <p className="font-semibold">
                <FormattedPrice amount={item?.price} />
              </p>

              <p className="font-semibold">
 S                <FormattedPrice amount={item?.price} />
              </p>

              <p className="font-semibold">
                <FormattedPrice amount={item?.price} />
                <FormattedPrice amount={item?.price} />
                <FormattedPrice amount={item?.price} />
              </p>

              <p className="font-semibold">
              </p>
        </div>
            <div className="flex items-center gap-x-2">
                <FormattedPrice amount={item?.oldPrice} />
                <ul className="text-sm font-light mt-2 flex flex-col gap-y-2">
            <li className="flex flex-col">
              <span className="text-slate hover:text-orange-600 cursor-pointer duration-200">
                Where Music Is Headed Next
              </span>
              <span className="text-orange-600">January 31, 2022</span>
            </li>
            <li className="flex flex-col">
              <span className="text-slate hover:text-orange-600 cursor-pointer duration-200">
              </span>
          </ul>
  );
};

export default Hero;
