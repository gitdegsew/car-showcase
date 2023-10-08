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
              </p>
  </div>
  {/* user image */}
  {
      session &&(
          <Image 
          className="rounded-full object-cover"
      )
  }
  {
      session && (
          <div onClick={()=>signOut()} className="headerDiv" >
  <FiLogOut className="text-2xl" />
          Logout
      </p> 
  </div>
      )
  }
  </Container>
              </p>


        </div>
};

