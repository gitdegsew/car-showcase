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
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Find, book, rent a car—quick and super easy!
        </h1>

        <p className="hero__subtitle">
          Streamline your car rental experience with our effortless booking
          Streamline your car rental experience with our effortless booking
          process.
          <div className="flex-1 pt-36 padding-x">
      <div className="flex-1 pt-36 padding-x">

        <CustomButton
          title="Explore Cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          Streamline your car rental experience with our effortless booking
          handleClick={handleScroll}
        />

      </div>
      <div className="hero__image-container">
        </div>

      </div>
    </div>
  );
};

export default Hero;
