"use client";
import Image from "next/image";
import { CustomButtonProps } from "@types";


const Button = ({ isDisabled, btnType, containerStyles, textStyles, title, rightIcon, handleClick }: CustomButtonProps) => (
    <button
    disabled={isDisabled}
    type={btnType || "button"}
    className={`custom-btn ${containerStyles}`}
    >
    {rightIcon && (
        <Image
    )}
    <div className="flex items-center justify-between">
    <div className="border-[1px] border-orange-600 py-1 px-4 rounded-full text-xs">
      <p>{calculatePercentage(item?.price, item?.oldPrice)}% off</p>
    </div>
      <p className="text-slate-500 line-through text-sm">
      </p>
      <p className="font-semibold">
        <FormattedPrice amount={item?.price} />
      </p>
    </div>



