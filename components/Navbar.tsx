import Link from "next/link";
import Image from "next/image";


const NavBar = () => (
    <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent'>
    <Image
          src='/logo.svg'
        />
      </Link>



      <CustomButton
        />
        <CustomButton
      />
      <CustomButton
        title='Sign in'
        btnType='button'
      />
    </nav>
    </header>
);
export default NavBar;

