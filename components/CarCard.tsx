"use client";

import { useState } from "react";
import Image from "next/image";

import { calculateCarRent, generateCarImageUrl } from "@utils";
import { CarProps } from "@types";
import CustomButton from "./CustomButton";
import CarDetails from "./CarDetails";


interface CarCardProps {
    car: CarProps;
  }

const CarCard = () => {
  return (
    <div>CarCard</div>
  )
}

export default CarCard