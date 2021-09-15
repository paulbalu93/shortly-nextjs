import Image from "next/image";
import Link from "next/link";
import MenuIcon from "@material-ui/icons/Menu";
function Header() {
  return (
    <div className="flex items-center px-5 py-4 lg:mx-28 mx-2 justify-between ">
      {/* logo */}
      <div className="mt-2 hidden md:flex">
        <Image src="/logo.svg" width={150} height={40} objectFit="contain" />
      </div>
      <div className="mt-2 md:hidden">
        <Image src="/logo.svg" width={120} height={36} objectFit="contain" />
      </div>
      <div className="hidden lg:flex text-gray-400  items-center justify-start space-x-8 font-poppins pl-12 flex-grow">
        <Link href="/">
          <a>Features</a>
        </Link>
        <Link href="/">
          <a>Pricing</a>
        </Link>

        <Link href="/">
          <a> Resources</a>
        </Link>
      </div>
      <div className="md:hidden ml-10 pl-20 text-gray-500">
        <MenuIcon fontSize="large" />
      </div>
      <div className="hidden lg:flex items-center justify-end z-50 ">
        <div className="hidden lg:flex">
          <button className=" hidden lg:inline-flex text-gray-500  px-10 py-4  font-poppins my-3 hover:shadow-xl hover:rounded-full active:scale-90 transition duration-150 cursor-pointer">
            Login
          </button>
        </div>
        <div className="hidden lg:flex">
          <button className=" text-white cursor-pointer bg-shortly_cyan px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
