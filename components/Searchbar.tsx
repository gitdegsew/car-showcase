"use client";
import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useRouter } from "next/navigation";
import { useRouter } from "next/navigation";


import SearchManufacturer from "./SearchManufacturer";
const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
    <button type='submit' className={`-ml-3 z-10 ${otherClasses}`}>
  <button type='submit' className={`-ml-3 z-10 ${otherClasses}`}>

  <Image
      src={"/magnifying-glass.svg"}
      alt={"magnifying glass"}
      width={40}
      height={40}
      className='object-contain'
      />
  </button>
  const SearchBar = () => {
  const [manufacturer, setManuFacturer] = useState("");
  const [model, setModel] = useState("");
  const [model, setModel] = useState("");
  const router = useRouter();
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.preventDefault();

    e.preventDefault();
    if (manufacturer.trim() === "" && model.trim() === "") {
        if (manufacturer.trim() === "" && model.trim() === "") {
            return alert("Please provide some input");
        }
        updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase());
    };

  const updateSearchParams = (model: string, manufacturer: string) => {

    // Create a new URLSearchParams object using the current URL search parameters
    // Create a new URLSearchParams object using the current URL search parameters
    const searchParams = new URLSearchParams(window.location.search);

    // Update or delete the 'model' search parameter based on the 'model' value

    if (model) {
      searchParams.set("model", model);
    } else {
        searchParams.delete("model");

    }
    // Update or delete the 'manufacturer' search parameter based on the 'manufacturer' value
    // Update or delete the 'manufacturer' search parameter based on the 'manufacturer' value
    if (manufacturer) {
        if (manufacturer) {
            searchParams.set("manufacturer", manufacturer);
            searchParams.set("manufacturer", manufacturer);
        } else {
            searchParams.delete("model");
        }
