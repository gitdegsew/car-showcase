import Link from "next/link";
import Image from "next/image";


const NavBar = () => (
    <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent'>
    <Image
          src='/logo.svg'
        />
      </Link>
      <div className='bg-bodyColor h-20' >
      <Container className='h-full flex items-center space-x-1 justify-between md:justify-center'  >
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
          <AiOutlineUser className="text-2xl" />
              <p className='text-sm font-semibold ' >login/register</p>
          </div>)
      }
      {/* Cart button */}
      <div className='bg-black hover:bg-slate-950 rounded-full text-slate-100 hover:text-white flex items-center justify-center gap-x-1 px-3 py-1.5 border-[1px] border-black hover:border-orange-600 duration-200 relative' >
          <span className='bg-white text-xs text-orange-600 rounded-full font-semibold absolute -right-2 -top-1 w-5 h-5 flex items-center justify-center shadow-xl shadow-black' >
              0

          </span>
         
      </div>



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

