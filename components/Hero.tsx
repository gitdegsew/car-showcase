"use client";
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
