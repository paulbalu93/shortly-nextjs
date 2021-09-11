import Image from "next/image";
import Link from "next/link";
function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white  px-5 py-5 md:px-10">
      {/* logo */}
      <div className="relative flex items-center h-10 cursor-pointer my-auto ">
        <Image
          src="/logo.svg"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      <div className="text-gray-500 flex items-center justify-between">
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
      
    </header>
  );
}

export default Header;
