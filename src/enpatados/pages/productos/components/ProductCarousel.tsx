import { useEffect, useState } from "react"
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function ProductCarousel() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <div className="mx-auto max-w-md">
      <Carousel
        setApi={setApi}
        className="w-full max-w-md"
        opts={{
          loop: true,
        }}
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="flex items-center justify-center"
            >
              <div
                className={`bg-[url("/spiderman.jpg")] bg-cover bg-center size-60 rounded-md`}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
        <div className="absolute bottom-2 left-0 right-0 text-center text-sm text-white">
          <span className="font-medium">{current}</span> / <span>{count}</span>
        </div>
      </Carousel>
    </div>
  )
}
