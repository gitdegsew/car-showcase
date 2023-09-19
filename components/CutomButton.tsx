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
        <div className="border-[1px] border-orange-600 py-1 px-4 rounded-full text-xs">
          <p>{calculatePercentage(item?.price, item?.oldPrice)}% off</p>
        </div>
        <div className="flex items-center gap-x-2">
          <p className="text-slate-500 line-through text-sm">
            <FormattedPrice amount={item?.oldPrice} />
          </p>
            <FormattedPrice amount={item?.price} />
          </p>
        </div>
    )}
  </button>
export default Button;




