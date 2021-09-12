import Image from "next/image";
import Link from "next/link";
function Header() {
  return (
    <div className="flex items-center px-10 py-2 mx-5 ml-10">
      {/* logo */}
      <div className="mt-2 items-center  ">
        <Image src="/logo.svg" width={150} height={40} objectFit="contain" />
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
      <div className="flex align-items justify-end">
        <div>
          <button className=" text-gray-500  px-10 py-4  font-poppins my-3 hover:shadow-xl hover:rounded-full active:scale-90 transition duration-150">
            Login
          </button>
        </div>
        <div>
          <button className=" text-white bg-shortly_cyan px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
