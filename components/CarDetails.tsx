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
  <>
    <Transition appear show={isOpen} as={Fragment}>
    <Dialog as='div' className='relative z-10' onClose={closeModal}>
    <Transition.Child
          as={Fragment}
          
        >

    </Transition>
  </>
);

export default CarDetails;
