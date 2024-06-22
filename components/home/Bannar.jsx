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
      img: "/assets/banner-bg.jpg",
    },
    {
      img: "/assets/banner1.jpg",
    },
    {
      img: "/assets/banner2.jpg",
    },
  ];
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full "
    >
      <CarouselContent>
        {banner.map((ban, index) => (
          <CarouselItem key={index}>
            <div className="flex h-screen items-center justify-center">
              <Image
                className="w-full h-full object-fill"
                width={500}
                height={500}
                src={ban.img}
                alt=""
              />{" "}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="shadow" />
      <CarouselNext className="shadow" />
    </Carousel>
  );
};

export default Bannar;
