function Features() {
  return (
    <div className="mt-40 relative">
      <div className="p-2"></div>

      <div className="bg-gray-100 mt-20 pt-20">
        <div className=" pt-20 mt-20 ">
          <div className="text-6xl  font-bold flex align-items justify-center  ">
            <h1> Advanced Statistics </h1>
          </div>
          <div className=" flex align-items justify-center font-poppins text-gray-500 mt-8 text-2xl">
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
        <div className="ml-20">
          <div className="grid grid-cols-3 ml-20 ">
            <div className="bg-white ">
              <h1 className="text-3xl font-bold font-poppins">
                Brand Recognition
              </h1>
              <div>
                <p> Boost your brand recognition with</p>
                <p> each click. Generic links don't mean a </p>
                <p> thing. Branded links help instil</p>
                <p> confidence in your content</p>
              </div>
            </div>
            <div>
              <h1> Detailed Records</h1>
              <div>
                <p> Gain insights into who is clicking your</p>
                <p>links. Knowing when and where</p>
                <p> people engage with your content</p>
                <p> helps inform better decisions</p>
              </div>
            </div>
            <div>
              <h1> Fully Customizable</h1>
              <div>
                <p> Improve brand awareness and</p>
                <p>content discoverability through</p>
                <p>customizable lnks, supercharging</p>
                <p>audience engagement</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-0 left-60  right-60 bg-shorten-desktop  rounded-lg bg-center bg-cover bg-dark_violet-light  z-50 ">
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
