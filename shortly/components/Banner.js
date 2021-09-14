import Image from "next/image";
import Features from "../components/Features";
function Banner() {
  return (
    <div className="">
      <div className="flex items-center pl-9 ml-24 xl:mt-20  relative">
        <div className="flex-col ">
          <div className=" py-20 ">
            <div className=" md:text-6xl xl:text-8xl font-poppins font-bold ">
              <h1> More than just </h1>
              <h1 className="mt-2"> shorter links </h1>
            </div>
            <div className=" md:text-base xl:text-3xl font-poppins text-gray-400 leading-relaxed mt-4">
              <p> Build your brand's recognition and get detailed</p>
              <p className="mt-2"> insights on how your links are performing</p>
            </div>
            <div className="my-5">
              <button className=" text-white text-xl bg-shortly_cyan px-14 py-5 shadow-md rounded-full font-bold my-6 hover:shadow-xl active:scale-90 transition duration-150">
                Get Started
              </button>
            </div>
          </div>
        </div>
        <div className="absolute -right-44 pt-2 overflow-hidden">
          <Image
            width="950"
            height="950"
            src="/illustration-working.svg"
            objectPosition="right"
            objectFit="contain"
            className="overflow-hidden"
          />
        </div>
      </div>
      <div className="pt-10">
        <Features />
      </div>
    </div>
  );
}

export default Banner;
