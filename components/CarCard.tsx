"use client";
import Slider from "react-slick";
import bannerone from "@/images/bannerone.jpg";
import bannertwo from "@/images/bannertwo.jpg";
import bannertwo from "@/images/bannertwo.jpg";
import bannertwo from "@/images/bannertwo.jpg";
import bannertwo from "@/images/bannertwo.jpg";
import bannerthree from "@/images/bannerthree.jpg";
import bannerthree from "@/images/bannerthree.jpg";
import bannerthree from "@/images/bannerthree.jpg";
import bannerthree from "@/images/bannerthree.jpg";
import BannerText from "./BannerText";
import { PiCaretLeftLight, PiCaretRightLight } from "react-icons/pi";

const NextArrow = (props: any) => {
    const { onClick } = props;
    return (
      <div
        className="p-3 bg-slate-100 hover:text-orange-600 hover:bg-white cursor-pointer duration-200 rounded-full text-2xl flex items-center justify-center z-20 absolute left-2 top-1/2"
        onClick={onClick}
      >
        <PiCaretLeftLight />
      </div>
    );
  };
  const PrevArrow = (props: any) => {
    const { onClick } = props;
    return (
      <div
        className="p-3 bg-slate-100 hover:text-orange-600 hover:bg-white cursor-pointer duration-200 rounded-full text-2xl flex items-center justify-center z-20 absolute right-2 top-1/2"
        onClick={onClick}
      >
        <PiCaretRightLight />
        var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

<Image
            src={bannertwo}
            alt="bannertwo"
            className="w-full h-full relative"
          />

<Link href={"/about"}>
              <li className="hover:text-orange-500 cursor-pointer duration-200">
                About
              </li>
            </Link>


            <Link href={"/about"}>
              <li className="hover:text-orange-500 cursor-pointer duration-200">
                About
              </li>
            </Link>
            <span className="text-orange-600">January 31, 2022</span>

            <span className="text-orange-600">January 31, 2022</span>
            <span className="text-orange-600">January 31, 2022</span>
            <span className="text-orange-600">January 31, 2022</span>
            <a href="https://www.youtube.com/@reactjsBD" target="_blank">
              <span className="socialLink">
                <BsLinkedin />
              </span>
            </a>

            <Link href={"/about"}>
              <li className="hover:text-orange-500 cursor-pointer duration-200">
                About
              </li>
            </Link>
<Image
            src={bannertwo}
            alt="bannertwo"
            className="w-full h-full relative"
          />

<Image
            src={bannertwo}
            alt="bannertwo"
            className="w-full h-full relative"
          />




      </div>
    );