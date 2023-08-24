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
    <Image
              src={item?.image}
              alt="product image"
              width={500}
              height={500}
              className="w-full h-full object-cover group-hover:scale-110 duration-200 rounded-t-lg"
            />
             <Image
              src={item?.image}
              alt="product image"
              width={500}
              height={500}
              className="w-full h-full object-cover group-hover:scale-110 duration-200 rounded-t-lg"
            />

<Image
              src={item?.image}
              alt="product image"
              width={500}
              height={500}
              className="w-full h-full object-cover group-hover:scale-110 duration-200 rounded-t-lg"
            />
      {item?.isNew && (
              <span className="absolute top-2 right-2 font-medium text-xs py-1 px-3 rounded-full bg-white group-hover:bg-orange-600 group-hover:text-white duration-200">
                New Arrival
              </span>
            )}
);
const startArray = Array.from({ length: item?.rating }, (_, index) => (

export default CarDetails;
