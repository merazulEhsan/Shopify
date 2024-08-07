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
    <div className="px-5 grid grid-cols-12 justify-between space-x-2 my-2 container">
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
        className="col-span-9"
      >
        <CarouselContent>
          {banner.map((ban, index) => (
            <CarouselItem key={index}>
              <div className="flex items-center justify-center h-[520px]">
                <Image
                  className="w-full h-full object-fill rounded"
                  width={500}
                  height={500}
                  src={ban.img}
                  alt=""
                  quality={100}
                />{" "}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="shadow" />
        <CarouselNext className="shadow" />
      </Carousel>

      <div className="col-span-3 h-[530px] ">
        <div class="space-y-3 ">
          <div class="flex flex-wrap">
            <Image
              height={500}
              width={500}
              alt="gallery"
              class="block h-40 w-full rounded object-fill object-center"
              src="/assets/banner2.jpg"
            />
          </div>
          <div class="flex flex-wrap">
            <Image
              height={500}
              width={500}
              alt="gallery"
              class="block h-40 w-full rounded object-fill object-center"
              src="/assets/banner2.jpg"
            />
          </div>
          <div class="flex  space-x-3">
            <div class="w-1/2">
              <Image
                height={500}
                width={500}
                alt="gallery"
                class="block h-44 w-full rounded object-fill object-center"
                src="/assets/banner2.jpg"
              />
            </div>
            <div class="w-1/2">
              <Image
                height={500}
                width={500}
                alt="gallery"
                class="block h-44 w-full rounded object-fill object-center"
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
