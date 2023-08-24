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
      
);
const startArray = Array.from({ length: item?.rating }, (_, index) => (

export default CarDetails;
