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
              </span>