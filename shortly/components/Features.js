import Image from "next/image";
import scode from "shrtco.de";
// import Axios from "axios";
import { useState } from "react";
function Features() {
  const [inputLink, setInputLink] = useState("");
  const [res, setRes] = useState("");
  console.log(inputLink);
  const handleLinkSubmit = async () => {
    const response = await scode.short({ url: inputLink });
    setRes(response);
    console.log(response);
  };
  // const handleLinkSubmit = async () => {
  //   const response = await fetch(`https://api.shrtco.de/v2/shorten`, {
  //     method: "POST",
  //     body: JSON.stringify(inputLink),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });
  //   const data = await response.json();
  //   console.log(data);
  //   // const response = await fetch("https://api.shrtco.de/v2/shorten", {
  //   //   method: "POST",
  //   //   body: JSON.stringify(url),
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // });
  // const data = await response.json();
  // console.log(data);
  // // const { data } = await Axios.post(
  // //   `https://cors-anywhere.herokuapp.com/https://api.shrtco.de/v2/shorten`,
  // //   {
  // //     url: url,
  // //   }
  // // );

  return (
    <div className="lg:mt-40 relative">
      <div className="lg:p-2"></div>

      <div className="bg-gray-200 mt-20 pt-20">
        <div className=" pt-20 mt-20 ">
          <div className="hidden lg:flex lg:text-6xl text-4xl  font-bold align-items justify-center  ">
            <h1> Advanced Statistics </h1>
          </div>
          <div className=" hidden lg:flex align-items justify-center font-poppins text-gray-500 mt-8 lg:text-2xl mb-28">
            <div>
              <p>
                Track how your links are performing across the web with <br />
              </p>

              <div className="font-poppins justify-center flex mt-1">
                <p>our advanced statistics dashboard</p>
              </div>
            </div>
          </div>
          <div className="lg:hidden text-4xl  font-bold flex align-items justify-center  ">
            <h1> Advanced Statistics </h1>
          </div>
          <div className="lg:hidden flex align-items justify-center font-poppins text-gray-500 mt-8 lg:text-2xl mb-28">
            <div>
              <p>Track how your links are performing</p>

              <div className="justify-center flex mt-1">
                <p>across the web with our advanced </p>
              </div>
              <div className=" justify-center flex mt-1">
                <p>statistics dashboard </p>
              </div>
            </div>
          </div>
        </div>
        {/* Feature details section */}
        <div className="pb-36 lg:mx-64">
          {/* container of 3 feature columns */}
          <div className="md:flex align-items lg:ml-10 mx-6 ">
            {/* first column */}
            <div className="bg-white shadow-sm rounded-lg relative md:w-[398px] md:h-[304px] pt-1  ">
              <div className="absolute lg:-top-14 lg:left-8 -top-14 left-32 rounded-full bg-dark_violet-light h-24 w-24 ">
                <div className="p-7">
                  <Image
                    src="/icon-brand-recognition.svg"
                    width="40"
                    height="40"
                    objectFit="contain"
                  />
                </div>
              </div>
              {/* desktop */}
              <h1 className="hidden lg:inline-flex text-2xl font-bold font-poppins mt-10 ml-8 mr-8">
                Brand Recognition
              </h1>
              <div className="hidden lg:inline-block pt-6 text-lg font-poppins  text-gray-500 ml-8">
                <p> Boost your brand recognition with</p>
                <p> each click. Generic links don't mean a </p>
                <p> thing. Branded links help instil</p>
                <p> confidence in your content</p>
              </div>
              {/* mobile */}
              <h1 className="text-2xl text-center lg:hidden font-bold font-poppins mt-16 mx-4">
                Brand Recognition
              </h1>
              <div className="pt-6 lg:hidden text-lg font-poppins text-center text-gray-500 mx-4">
                <p> Boost your brand recognition with</p>
                <p> each click. Generic links don't </p>
                <p> mean a thing. Branded links help </p>
                <p> instil confidence in your content</p>
              </div>
            </div>
            {/* line */}
            <div className="my-36 ">
              <div className="bg-shortly_cyan py-1 px-4 mt-6"></div>
            </div>
            {/* second column */}
            <div className="bg-white shadow-sm rounded-lg relative w-[398px] h-[304px] mt-12 ">
              <div className="absolute -top-14 left-8 rounded-full bg-dark_violet-light h-24 w-24">
                <div className="p-7">
                  <Image
                    src="/icon-detailed-records.svg"
                    width="40"
                    height="40"
                    objectFit="contain"
                  />
                </div>
              </div>
              <h1 className="text-2xl font-bold font-poppins pt-12 mt-8 ml-8 ">
                Detailed Records
              </h1>
              <div className="pt-5 text-lg font-poppins text-gray-500 ml-8 ">
                <p> Gain insights into who is clicking your</p>
                <p>links. Knowing when and where</p>
                <p> people engage with your content</p>
                <p> helps inform better decisions</p>
              </div>
            </div>
            <div className=" my-36">
              <div className="bg-shortly_cyan py-1 px-4 mt-6"></div>
            </div>
            {/* third column */}
            <div className="bg-white shadow-sm rounded-lg relative w-[398px] h-[304px] mt-24">
              <div className="absolute -top-14 left-8 rounded-full bg-dark_violet-light h-24 w-24 ">
                <div className="p-7">
                  <Image
                    src="/icon-fully-customizable.svg"
                    width="40"
                    height="40"
                    objectFit="contain"
                  />
                </div>
              </div>
              <h1 className="text-2xl font-bold font-poppins  pt-12 mt-8 ml-8 ">
                Fully Customizable
              </h1>
              <div className="pt-5 text-lg font-poppins text-gray-500 ml-8">
                <p> Improve brand awareness and</p>
                <p>content discoverability through</p>
                <p>customizable lnks, supercharging</p>
                <p>audience engagement</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-0 left-36  right-36 bg-shorten-desktop  rounded-lg bg-center bg-cover bg-dark_violet-light  z-50 ">
        <div className="flex items-center justify-center p-6 pl-12  py-10 ">
          {/* input box */}

          <div className="flex items-center bg-white rounded-lg py-4 px-12 md:shadow-sm m-5 p flex-grow hover:ring-2 hover:ring-red-500 active:placeholder-red-500 ">
            <input
              onChange={(e) => {
                setInputLink(e.target.value);
              }}
              type="text"
              placeholder="Shorten a link here..."
              className="h-12 
               rounded-l-md flex-grow outline-none"
            ></input>
          </div>

          <div className="flex items-center">
            <button
              className=" text-white text-2xl py-6 bg-shortly_cyan px-16 mr-16 shadow-md rounded-lg font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150"
              onClick={handleLinkSubmit}
            >
              Shorten it
            </button>
          </div>
        </div>
        {inputLink && (
          <div className="bg-white rounded-sm flex items-center ">
            <div className="px-20 pr-40  ">
              <p> {inputLink}</p>
            </div>
            <div className="flex justify-end ml-60 pl-80">
              {res && (
                <p className="mt-4 text-shortly_cyan">
                  {" "}
                  {res.result.full_short_link}
                </p>
              )}

              <div>
                <button className=" ml-60 text-white text-xs py-2 bg-shortly_cyan px-5 mr-16 shadow-md rounded-lg font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150">
                  Copy
                </button>
              </div>
            </div>

            <div></div>
            <div></div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Features;
