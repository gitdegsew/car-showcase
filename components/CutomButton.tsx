"use client";
import Image from "next/image";
import { CustomButtonProps } from "@types";


const Button = ({ isDisabled, btnType, containerStyles, textStyles, title, rightIcon, handleClick }: CustomButtonProps) => (
    <button
    disabled={isDisabled}
    type={btnType || "button"}
    className={`custom-btn ${containerStyles}`}
    onClick={handleClick}
    >
    <span className={`flex-1 ${textStyles}`}>{title}</span>
    {rightIcon && (
      <div className="relative w-6 h-6">
        <Image
        <div className="flex items-center justify-between">
        <div className="flex items-center justify-between">
        <div className="flex items-center justify-between">
        <div className="flex items-center justify-between">
        <div className="flex items-center justify-between">
        </div>
          </p>
        <div className="flex items-center justify-between">
        </div>
        <div className="flex items-center justify-between">
    )}
  </button>
export default Button;




