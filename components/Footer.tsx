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
        <div className="w-full bg-darkText text-slate-100">
      <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
      <div className="flex flex-col gap-y-4">
      <Logo />
      <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa in
            sint incidunt, minima quos voluptates, nobis autem laborum earum est
            pariatur aperiam. Delectus consectetur maxime quidem veniam,
            corporis.
          </p>
          <a href="https://www.youtube.com/@reactjsBD" target="_blank">
              <span className="socialLink">
                <BsYoutube />
              </span>
            </a>
            <span className="socialLink">
                <BsGithub />
            </a>
              </span>

            </a>

            <li className="flex flex-col">
              <span className="text-slate hover:text-orange-600 cursor-pointer duration-200">
                Where Music Is Headed Next
              </span>
              <span className="text-orange-600">January 31, 2022</span>
            </li>
            <li className="flex flex-col">
              <span className="text-slate hover:text-orange-600 cursor-pointer duration-200">
                Where Music Is Headed Next
              </span>
              <span className="text-orange-600">January 31, 2022</span>
            </li>
            <li className="flex flex-col">
              <span className="text-slate hover:text-orange-600 cursor-pointer duration-200">
                Where Music Is Headed Next
              </span>
              <span className="text-orange-600">January 31, 2022</span>
            </li>
            <Image
            src={payment}
            alt="payment banner image"
            className="w-full h-10 object-cover"
          />

<Image
            src={payment}
            alt="payment banner image"
            className="w-full h-10 object-cover"
          />

<p className="text-base font-medium text-center">
          Oops! The page you are looking for does not exist. It might have been
          moved or deleted.
        </p>

        <p className="text-base font-medium text-center">
          Oops! The page you are looking for does not exist. It might have been
          moved or deleted.
        </p>

        <p className="text-base font-medium text-center">
          Oops! The page you are looking for does not exist. It might have been
          moved or deleted.
        </p>
          {/* Button for the listbox */}
          <Listbox.Button className='custom-filter__btn'>
            <span className='block truncate'>{selected.title}</span>
            <Image src='/chevron-up-down.svg' width={20} height={20} className='ml-4 object-contain' alt='chevron_up-down' />
          </Listbox.Button>

        <p className="text-base font-medium text-center">
          Oops! The page you are looking for does not exist. It might have been
          moved or deleted.
        </p>