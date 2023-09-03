"use client";
import {
    BsYoutube,
    BsGithub,
    BsLinkedin,
    BsFacebook,
    BsReddit,
} from "react-icons/bs";
import payment from "@/images/payment.png";
import Container from "./Container";
import Logo from "./Logo";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
    return (
    <div className="w-full flex-center gap-5 mt-10">
      {!isNext && (
        <CustomButton
        btnType="button"
        title="Show More"
        containerStyles="bg-primary-blue rounded-full text-white"
        handleClick={handleNavigation}
        />
      )}
    </div>
  );
};
       