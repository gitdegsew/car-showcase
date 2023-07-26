import Link from "next/link";
import Image from "next/image";

import CustomButton from "./CustomButton";

const NavBar = () => (
  <header className='w-full  absolute z-10'>
        <Image
          alt='logo'
      </Link>

      <CustomButton
        containerStyles='text-primary-blue rounded-full bg-white min-w-[130px]'
      />
)
