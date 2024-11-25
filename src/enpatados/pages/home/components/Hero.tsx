const Hero = () => {
  return (
    <div className="w-full bg-yellow-50">
      <div className="flex flex-col lg:flex-row p-2 md:px-16 pb-20 lg:pb-28 gap-4 lg:gap-0 min-h-[500px]">
        <div className="flex flex-col w-full justify-center text-center lg:text-left gap-8">
          <h1 className="text-5xl font-bold leading-tight text-darken">
            {/* Somos */} <span className="text-blue-main">ENPATADOS</span>
          </h1>
          <p className="text-2xl">
            La vida es muy corta para usar medias aburridas {":)"}
          </p>
          <div className="w-full md:flex items-center justify-center lg:justify-start md:space-x-5">
            <button className="lg:mx-0 bg-blue-main text-white text-xl font-bold rounded-full py-4 px-9 focus:outline-none transform transition hover:scale-105 hover:bg-blue-main/90 duration-300 ease-in-out">
              Registrate
            </button>
          </div>
        </div>

        <div className="flex flex-col w-full justify-center items-center">
          <div className="relative rounded-full size-40 md:size-60 lg:size-80">
            <video
              src="/hero-video.mp4"
              autoPlay
              loop
              muted
              autoFocus={false}
              className="absolute rounded-full"
            ></video>
          </div>
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
