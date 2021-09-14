import Image from "next/image";
function Features() {
  return (
    <div className="mt-40 relative">
      <div className="p-2"></div>

      <div className="bg-gray-200 mt-20 pt-20">
        <div className=" pt-20 mt-20 ">
          <div className="text-6xl  font-bold flex align-items justify-center  ">
            <h1> Advanced Statistics </h1>
          </div>
          <div className=" flex align-items justify-center font-poppins text-gray-500 mt-8 text-2xl mb-28">
            <div>
              <p>
                Track how your links are performing across the web with <br />
              </p>

              <div className="font-poppins justify-center flex mt-1">
                <p>our advanced statistics dashboard</p>
              </div>
            </div>
          </div>
        </div>
        {/* Feature details section */}
        <div className="pb-10 mx-28">
          {/* container of 3 feature columns */}
          <div className="flex align-items ml-10">
            {/* first column */}
            <div className="bg-white shadow-sm rounded-lg relative w-[398px] h-[304px] ">
              <div className="absolute -top-14 rounded-full bg-dark_violet-light h-24 w-24 ">
                <div className="p-7">
                  <Image
                    src="/icon-brand-recognition.svg"
                    width="40"
                    height="40"
                    objectFit="contain"
                  />
                </div>
              </div>
            </div>
            {/* second column */}
            <div className="bg-white shadow-sm rounded-lg relative w-[398px] h-[304px] "></div>
            {/* third column */}
            <div className="bg-white shadow-sm rounded-lg relative w-[398px] h-[304px] "></div>
          </div>
        </div>
      </div>
      <div className="absolute top-0 left-36  right-36 bg-shorten-desktop  rounded-lg bg-center bg-cover bg-dark_violet-light  z-50 ">
        <div className="flex items-center justify-center p-6 pl-12  py-10 ">
          {/* input box */}
          <div className="flex items-center bg-white rounded-lg py-4 px-12 md:shadow-sm m-5 p flex-grow hover:ring-2 hover:ring-red-500 ">
            <input
              // value={searchInput}
              onChange={(e) => {
                setSearchInput(e.target.value);
              }}
              type="text"
              placeholder="Shorten a link here..."
              className="h-12 
               rounded-l-md flex-grow outline-none"
            ></input>
          </div>

          <div className="flex items-center">
            <button className=" text-white text-2xl py-6 bg-shortly_cyan px-16 mr-16 shadow-md rounded-lg font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150">
              Shorten it
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
