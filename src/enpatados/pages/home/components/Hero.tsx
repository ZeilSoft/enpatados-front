import { Button } from "@/components/ui/button"
import { Icon } from "@iconify/react/dist/iconify.js"

const Hero = () => {
  return (
    <div className="w-full bg-gray-main">
      <div className="flex flex-col lg:flex-row p-2 md:px-16 pb-20 gap-4 lg:gap-0 min-h-[500px]">
        <div className="flex flex-col w-full justify-center text-center lg:text-left gap-8">
          <h1 className="text-5xl font-bold leading-tight text-darken">
            {/* Somos */} <span className="text-blue-main">ENPATADOS</span>
          </h1>
          <p className="text-2xl">
            La vida es muy corta para usar medias aburridas {":)"}
          </p>
          <div className="w-full md:flex items-center justify-center lg:justify-start md:space-x-5">
            <Button
              variant="blue"
              className="font-normal py-6 px-8 text-base flex gap-2"
            >
              Compra ahora
              <Icon icon="lucide:arrow-right" />
            </Button>
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
    </div>
  )
}
export default Hero
