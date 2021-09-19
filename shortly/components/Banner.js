import Image from "next/image";
import Features from "../components/Features";
function Banner() {
  return (
    <div className="">
      <div className="md:flex md:items-center lg:pl-9 pl-1 lg:ml-24 ml-2 xl:mt-20 relative">
        <div className="md:hidden h-[280px]"></div>
        <div className="hidden md:inline-flex md:flex-col  lg:py-20 py-6 mt-20 ">
          <div className=" text-4xl md:text-6xl xl:text-8xl font-poppins font-bold ">
            <h1> More than just </h1>
            <h1 className="mt-2"> shorter links </h1>
          </div>
          <div className="md:text-base xl:text-3xl font-poppins text-gray-400 leading-relaxed mt-4  md:text-left">
            <p> Build your brand's recognition and get detailed</p>
            <p className="mt-2"> insights on how your links are performing</p>
          </div>
          <div className="my-5">
            <button className=" text-white text-xl bg-shortly_cyan md:px-14 py-5 shadow-md rounded-full font-bold my-6 hover:shadow-xl active:scale-90 transition duration-150">
              Get Started
            </button>
          </div>
        </div>
        <div className="md:hidden  lg:py-20 py-6 mt-20 ">
          <div className=" text-4xl md:text-6xl xl:text-8xl font-poppins font-bold text-center ">
            <h1> More than just </h1>
            <h1 className="mt-2"> shorter links </h1>
          </div>
          <div className="md:text-base xl:text-3xl font-poppins text-gray-400 leading-relaxed mt-4 text-center md:text-left">
            <p> Build your brand's recognition and get </p>
            <p className="mt-2"> detailed insights on how your </p>
            <p className="mt-2"> links are performing</p>
          </div>
          <div className="my-5 px-6 mx-12">
            <button className=" text-white text-xl bg-shortly_cyan px-12 py-4 shadow-md rounded-full font-bold my-6 hover:shadow-xl active:scale-90 transition duration-150">
              Get Started
            </button>
          </div>
        </div>
        <div className="h-[400px] w-[500px] sm:h-[400px] sm:w-[300] lg:h-[700px] lg:w-[700px] xl:h-[400px] 2xl:h-[1000px] 2xl:w-[1000px] absolute lg:-right-40 lg:left-200 -top-10 -right-36 lg:-top-56  pt-2 overflow-hidden">
          <Image
            layout="fill"
            src="/illustration-working.svg"
            // objectPosition="right"
            objectFit="contain"
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
