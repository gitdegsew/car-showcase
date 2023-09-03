"use client";

import Image from "next/image";

import { CustomButton } from "@components";

const Hero = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById("discover");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
      <h1 className="hero__title">
      Find, book, rent a car—quick and super easy!
      </h1>
      <p className="hero__subtitle">
      Streamline your car rental experience with our effortless booking
      process.
      </p>
      <CustomButton
          title="Explore Cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
          />
      </div>
      <div className="hero__image-container">
      <div className="hero__image">
      <Image src="/hero.png" alt="hero" fill className="object-contain" />
      </div>
      <div className="hero__image-overlay" />

    <form className='searchbar' onSubmit={handleSearch}>
    <div className='searchbar__item'>
    <SearchManufacturer
          manufacturer={manufacturer}
          setManuFacturer={setManuFacturer}
          />
        <SearchButton otherClasses='sm:hidden' />
        </div>



      <Transition
            as={Fragment} // group multiple elements without introducing an additional DOM node i.e., <></>
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
            afterLeave={() => setQuery("")} // Reset the search query after the transition completes
            >
            <Combobox.Options
              className='absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'
              static
              >
              {filteredManufacturers.length === 0 && query !== "" ? (
                <Combobox.Option
                value={query}
                className='search-manufacturer__option'
                >
                  Create "{query}"
                  </Combobox.Option>
                  value={query}
                  className='search-manufacturer__option'
                  >

      
    </div>
  );
};

export default Hero;
