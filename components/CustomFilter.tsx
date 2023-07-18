"use client";
import { Fragment, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Listbox, Transition } from "@headlessui/react";
import { CustomFilterProps } from "@types";
import { updateSearchParams } from "@utils";

export default function CustomFilter({ title, options }: CustomFilterProps) {
    const newPathName = updateSearchParams(title, e.value.toLowerCase());
    router.push(newPathName);
};

return (
    <div className='w-fit'>
      <Listbox
        value={selected}
        onChange={(e) => {

            setSelected(e); // Update the selected option in state
            handleUpdateParams(e); // Update the URL search parameters and navigate to the new URL
        }}
        >
        <div className='relative w-fit z-10'>
          {/* Button for the listbox */}
          <Listbox.Button className='custom-filter__btn'>
          <span className='block truncate'>{selected.title}</span>
          <Image src='/chevron-up-down.svg' width={20} height={20} className='ml-4 object-contain' alt='chevron_up-down' />
          </Listbox.Button>
          {/* Transition for displaying the options */}
          <Transition
            as={Fragment} // group multiple elements without introducing an additional DOM node i.e., <></>












