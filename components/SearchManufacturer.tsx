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
  item
  .toLowerCase()
  .replace(/\s+/g, "")
  .includes(query.toLowerCase().replace(/\s+/g, ""))

  );

  return (
    <div className='search-manufacturer'>
      <Combobox value={manufacturer} onChange={setManuFacturer}>
      <Image
              src='/car-logo.svg'
              width={20}
              height={20}
              className='ml-4'
              alt='car logo'
            />
          </Combobox.Button>
          </Combobox.Button>
