import { Fragment } from "react";
import Image from "next/image";

import { Dialog, Transition } from "@headlessui/react";
import { CarProps } from "@types";
import { generateCarImageUrl } from "@utils";

interface CarDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  car: CarProps;
}

const CarDetails = ({ isOpen, closeModal, car }: CarDetailsProps) => (
  
  const startArray = Array.from({ length: item?.rating }, (_, index) => (
  return (
    
    <div className="w-full rounded-lg overflow-hidden">

    <div className="w-full rounded-lg overflow-hidden">
    <Link href={{ pathname: "/product", query: { _id: item?._id } }}>
    <Link href={{ pathname: "/product", query: { _id: item?._id } }}>
  
    <div className="border-[1px] border-orange-600 py-1 px-4 rounded-full text-xs">
              <p>{calculatePercentage(item?.price, item?.oldPrice)}% off</p>
            </div>
            <div className="border-[1px] border-orange-600 py-1 px-4 rounded-full text-xs">
              <p>{calculatePercentage(item?.price, item?.oldPrice)}% off</p>
            </div>
            <div className="border-[1px] border-orange-600 py-1 px-4 rounded-full text-xs">
              <p>{calculatePercentage(item?.price, item?.oldPrice)}% off</p>
            </div>
            <div className="border-[1px] border-orange-600 py-1 px-4 rounded-full text-xs">
              <p>{calculatePercentage(item?.price, item?.oldPrice)}% off</p>
            </div>
            <div className="border-[1px] border-orange-600 py-1 px-4 rounded-full text-xs">
              <p>{calculatePercentage(item?.price, item?.oldPrice)}% off</p>
            </div>

            <p className="font-semibold">
                <FormattedPrice amount={item?.price} />
              </p>


export default CarDetails;
