import { Fragment } from "react";
import Image from "next/image";

const CarDetails = ({ isOpen, closeModal, car }: CarDetailsProps) => (
  <>
    <Transition appear show={isOpen} as={Fragment}>
      
    </Transition>
  </>
);

export default CarDetails;
