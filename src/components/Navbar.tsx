import Link from "next/link";
import Menu from "./Menu";
import CartIcon from "./CartIcon";
import Image from "next/image";

const Navbar = () => {
  const user = true;
  return (
    <div className='h-12 text-red-500 p-4 flex justify-between items-center border-b-2 border-b-red-500 uppercase md:h-24 lg:px-20 xl:px-40'>
      <div className=' hidden md:flex gap-4 flex-1'>
        {/* LEFT LINKS */}
        <Link href={"/"}>Home</Link>
        <Link href={"/menu"}>Menu</Link>
        <Link href={"/"}>Contact</Link>
      </div>
      {/* logo */}

      <div className=' text-lg md:font-bold md:text-center'>
        <Link href={"/"}>Massimo</Link>
      </div>
      {/* mobile menu */}
      <div className='md:hidden'>
        <Menu />
      </div>
      {/* RIGHT LINKS */}
      <div className=' hidden md:flex gap-4 items-center justify-end flex-1'>
        <div className='flex md:absolute top-3 right-2 lg:static items-center gap-2 cursor-pointer bg-orange-300 px-1 rounded-md'>
          <Image
            src='/phone.png'
            sizes='100%'
            height={20}
            width={20}
            alt='phone'
          />
          <span>8217683972</span>
        </div>
        {!user ? (
          <Link href={"/login"}>Login</Link>
        ) : (
          <Link href={"/order"}>Order</Link>
        )}
        <CartIcon />
      </div>
    </div>
  );
};

export default Navbar;
