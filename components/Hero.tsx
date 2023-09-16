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
                <FormattedPrice amount={item?.price} />
              </p>
              <p className="font-semibold">
                <FormattedPrice amount={item?.price} />
              </p>

              <p className="font-semibold">
                <FormattedPrice amount={item?.price} />
              </p>

              <p className="font-semibold">
                <FormattedPrice amount={item?.price} />
              </p>
              <p className="font-semibold">
                <FormattedPrice amount={item?.price} />
              </p>
              <p className="font-semibold">
                <FormattedPrice amount={item?.price} />
              </p>
              <p className="font-semibold">
                <FormattedPrice amount={item?.price} />
              </p>
              <p className="font-semibold">
                <FormattedPrice amount={item?.price} />
              </p>
              <p className="font-semibold">
                <FormattedPrice amount={item?.price} />
              </p>
          </div>
        </div>

      </div>


      </div>
    
  );
};

export default Hero;
