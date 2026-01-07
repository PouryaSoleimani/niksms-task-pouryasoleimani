import Image from "next/image";
import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const TopSlider = () => {
  return (
    <div className="border-4 h-100 lg:h-200 w-full border-red-600 bg-stone-100 rounded-4xl p-4 flex items-center justify-center">
      <div className="bg-stone-100 flex flex-col w-full justify-start border h-full gap-5">
        <div className="w-full  font-bold  basis-1/12 text-xl text-nik-foreground h-fit p-5 rounded-2xl bg-white flex items-center-safe justify-between">
          <span>Slider</span>
          <span className="flex gap-2 items-center">
            اسلایدر
            <span className="text-6xl -translate-y-2.5 h-8 text-[#dffca1]">·</span>
          </span>
        </div>
        <div className="flex items-center-safe gap-4 basis-11/12 border border-blue-500 bg-white rounded-2xl">
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full"
          >
            <CarouselContent>
              <CarouselItem className="border-2">
                <Image
                  src={"/images/header/header_logo.png"}
                  width={500}
                  height={500}
                  alt="image"
                  className="aspect-video rounded-2xl"
                />
              </CarouselItem>
              <CarouselItem className="border-2">
                <Image
                  src={"/images/header/header_logo.png"}
                  width={500}
                  height={500}
                  alt="image"
                  className="aspect-video  rounded-2xl"
                />
              </CarouselItem>
              <CarouselItem className="border-2">
                <Image
                  src={"/images/header/header_logo.png"}
                  width={500}
                  height={500}
                  alt="image"
                  className="aspect-video  rounded-2xl"
                />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default TopSlider;
