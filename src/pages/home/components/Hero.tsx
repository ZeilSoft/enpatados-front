const Hero = () => {
  return (
    <div className="w-full bg-white">
      <div className="flex flex-col lg:flex-row px-16 pb-20 lg:pb-28 gap-4 lg:gap-0 h-[500px]">
        <div className="flex flex-col w-full justify-center text-center lg:text-left">
          <h1 className="my-4 text-5xl font-bold leading-tight text-darken">
            Somos <span className="text-blue-main">Dona y Anu</span>
          </h1>
          <p className="leading-normal text-2xl mb-8">
            La vida es muy corta para usar medias aburridas {":)"}
          </p>
          <div className="w-full md:flex items-center justify-center lg:justify-start md:space-x-5">
            <button className="lg:mx-0 bg-blue-main text-white text-xl font-bold rounded-full py-4 px-9 focus:outline-none transform transition hover:scale-105 hover:bg-blue-main/90 duration-300 ease-in-out">
              Registrate
            </button>
            {/*  <div className="flex items-center justify-center space-x-3 mt-5 md:mt-0 focus:outline-none transform transition hover:scale-110 duration-300 ease-in-out">
              <button className="bg-white w-14 h-14 rounded-full flex items-center justify-center">
                <svg
                  className="w-5 h-5 ml-2"
                  viewBox="0 0 24 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.5751 12.8097C23.2212 13.1983 23.2212 14.135 22.5751 14.5236L1.51538 27.1891C0.848878 27.5899 5.91205e-07 27.1099 6.25202e-07 26.3321L1.73245e-06 1.00123C1.76645e-06 0.223477 0.848877 -0.256572 1.51538 0.14427L22.5751 12.8097Z"
                    fill="#23BDEE"
                  />
                </svg>
              </button>
              <span className="cursor-pointer">Watch how it works</span>
            </div> */}
          </div>
        </div>

        <div className="flex flex-col w-full justify-center items-center">
          {/* <img
            data-aos="fade-up"
            data-aos-once="true"
            className="size-72 mx-auto 2xl:-mb-20"
            src="hero.webp"
            alt="hero image"
          /> */}
          <video src="/hero-video.mp4" autoPlay loop muted></video>
        </div>
      </div>
      <div className="-mt-14 sm:-mt-24 lg:-mt-36 z-40 relative text-lilac-main">
        <svg
          className="xl:h-40 xl:w-full"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
    </div>
  )
}
export default Hero
