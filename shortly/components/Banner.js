import Image from "next/image";
import Features from "../components/Features";
function Banner() {
  return (
    <div className="">
      <div className="flex items-center pl-10 ml-10 xl:mt-20">
        <div className="flex-col relative">
          <div className=" py-20 ">
            <h1 className=" md:text-6xl xl:text-8xl font-poppins font-bold">
              More than just <br />
              shorter links
            </h1>
            <p className=" md:text-base xl:text-3xl font-poppins text-gray-400">
              Build your brand's recognition and get detailed <br /> insights on
              how your links are performing
            </p>
            <div className="my-5">
              <button className=" text-white text-xl bg-shortly_cyan px-14 py-5 shadow-md rounded-full font-bold my-6 hover:shadow-xl active:scale-90 transition duration-150">
                Get Started
              </button>
            </div>
          </div>
        </div>
        <div className="absolute -right-24 pt-2 ">
          <Image
            width="950"
            height="950"
            src="/illustration-working.svg"
            objectPosition="right"
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
