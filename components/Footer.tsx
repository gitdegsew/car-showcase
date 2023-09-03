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

    const router = useRouter();

  const handleNavigation = () => {
    // Calculate the new limit based on the page number and navigation type
    const newLimit = (pageNumber + 1) * 10;

    // Update the "limit" search parameter in the URL with the new value
    const newPathname = updateSearchParams("limit", `${newLimit}`);
    
    router.push(newPathname);
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
export default ShowMore;
       