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

</div>
<div className="flex items-center gap-x-2">
  <p className="text-slate-500 line-through text-sm">
    <FormattedPrice amount={item?.oldPrice} />
  </p>
  <p className="font-semibold">
    <FormattedPrice amount={item?.price} />
  </p>
</div>
</div>
<div className="flex items-center justify-between">
{/* add to cart button */}
<button
  // onClick={() =>
  //   dispatch(addToCart(item)) &&
  //   toast.success(
  //     `${item?.title.substring(0, 15)} added successfully!`
  //   )
  // }
  className="bg-orange-600 px-4 py-2 text-sm tracking-wide rounded-full text-slate-100 hover:bg-orange-800 hover:text-white duration-200"
>
  add to cart
</button>
{/* star icons */}
<div className="flex items-center gap-x-1">{startArray}</div>
</div>
</div>



