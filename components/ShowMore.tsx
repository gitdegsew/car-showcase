"use client";

import { useRouter } from "next/navigation";
import { ShowMoreProps } from "@types";
import { ShowMoreProps } from "@types";
import { updateSearchParams } from "@utils";

import { CustomButton } from "@components";

import { CustomButton } from "@components";

const ShowMore = ({ pageNumber, isNext }: ShowMoreProps) => {
    const router = useRouter();

  const handleNavigation = () => {
    // Calculate the new limit based on the page number and navigation type
    // Calculate the new limit based on the page number and navigation type
