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
          <p className="font-semibold">

              </p>
              
            </div>
          </div>
        </div>

      </div>


      </div>
    
  );
};

export default Hero;
