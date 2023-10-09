import Link from "next/link";
import Image from "next/image";


const NavBar = () => (
    <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent'>
    <Image
          src='/logo.svg'
        />
      </Link>
          <Logo/>
      
      {/* Search Field */}
      <div className='w-full bg-white hidden border-[1px] md:flex items-center rounded-full gap-x-1 border-lightText/50 px-4 py-1.5 focus-within:border-orange-600' >
          <input
              type='text'
           />
      </div>
      {/* Login/Register */}
      {
          !session &&(<div onClick={()=>signIn()} className='headerDiv' >
          </div>)
      }
      {/* Cart button */}
              0

          </span>
         
      </div>



      <CustomButton
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

