"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
const Bannar = () => {
  const banner = [
    {
      img: "/assets/banner/banner3.jpg",
    },
    {
      img: "/assets/banner/banner1.jpg",
    },
    {
      img: "/assets/banner/banner2.jpg",
    },
  ];
  return (
    <div className="grid grid-cols-12 justify-between space-x-2 my-2 md:container">
      <Carousel
        plugins={[
          Autoplay({
            delay: 10000,
          }),
        ]}
        opts={{
          align: "start",
          loop: true,
        }}
        className="md:col-span-9 col-span-12 "
      >
        <CarouselContent>
          {banner.map((ban, index) => (
            <CarouselItem key={index}>
              <div className="flex items-center justify-center md:h-[520px]">
                <Image
                  className="w-full h-full object-fill md:rounded"
                  width={500}
                  height={500}
                  src={ban?.img}
                  alt=""
                  quality={100}
                />{" "}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="shadow text-white left-4" />
        <CarouselNext className="shadow text-white right-4 " />
      </Carousel>

      <div className="md:col-span-3 col-span-full md:h-[530px]">
        <div className="space-y-3 ">
          <div className="flex flex-wrap">
            <Image
              height={500}
              width={500}
              alt="gallery"
              className="block h-40 w-full rounded object-fill object-center"
              src="/assets/banner2.jpg"
            />
          </div>
          <div className="flex flex-wrap">
            <Image
              height={500}
              width={500}
              alt="gallery"
              className="block h-40 w-full rounded object-fill object-center"
              src="/assets/banner2.jpg"
            />
          </div>
          <div className="flex  space-x-3">
            <div className="w-1/2">
              <Image
                height={500}
                width={500}
                alt="gallery"
                className="block h-44 w-full rounded object-fill object-center"
                src="/assets/banner2.jpg"
              />
            </div>
            <div className="w-1/2">
              <Image
                height={500}
                width={500}
                alt="gallery"
                className="block h-44 w-full rounded object-fill object-center"
                src="/assets/banner2.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bannar;
