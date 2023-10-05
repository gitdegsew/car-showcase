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
              </p>
            </div>
              </p>
              </p>


        </div>
            <div className="flex items-center gap-x-2">
                Where Music Is Headed Next
};

