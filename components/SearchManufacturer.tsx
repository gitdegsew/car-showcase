import Image from "next/image";
import { Fragment, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";

import { manufacturers } from "@constants";
import { SearchManuFacturerProps } from "@types";

const SearchManufacturer = ({ manufacturer, setManuFacturer }: SearchManuFacturerProps) => {
  const [query, setQuery] = useState("");

  const filteredManufacturers =
    query === ""
      ? manufacturers
      : manufacturers.filter((item) =>
          item
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <div className='search-manufacturer'>
      <Combobox value={manufacturer} onChange={setManuFacturer}>
        <div className='relative w-full'>
          {/* Button for the combobox. Click on the icon to see the complete dropdown */}
          <Combobox.Button className='absolute top-[14px]'>
            <Image
              src='/car-logo.svg'
              width={20}
              height={20}
              className='ml-4'
              alt='car logo'
            />
          </Combobox.Button>
          <Combobox.Input
            className='search-manufacturer__input'
            displayValue={(item: string) => item}
            onChange={(event) => setQuery(event.target.value)} // Update the search query when the input changes

          
           
                ))
              )}
           
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchManufacturer;
