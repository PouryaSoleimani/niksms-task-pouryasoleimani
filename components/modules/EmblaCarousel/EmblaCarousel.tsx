"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useCallback } from "react";
import { EmblaOptionsType, EmblaCarouselType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import { NextButton, PrevButton, usePrevNextButtons } from "./EmblaCarouselArrowButtons";
import Image from "next/image";
import { cn } from "@/lib/utils";
import useIsMobile from "@/hooks/useIsMobile";

type SlideItem = { id: number; src: string };

type PropType = {
  slides: SlideItem[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);
  const isMobile = useIsMobile();

  console.info("IS MOBLIE =>", isMobile);

  const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;

    const resetOrStop = autoplay.options.stopOnInteraction === false ? autoplay.reset : autoplay.stop;

    resetOrStop();
  }, []);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi, onNavButtonClick);

  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi, onNavButtonClick);

  return (
    <section className={cn("embla relative inset-0 w-full", !isMobile && "embla_mask")} dir="rtl">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container mt-4 lg:mt-10 items-center justify-center-safe">
          {slides.map((slide: SlideItem) => (
            <div
              className="embla__slide flex-none basis-[80%] sm:basis-[70%] md:basis-[60%] lg:basis-[68%] h-46 min-[460px]:h-64 sm:h-72 lg:h-110 mx-auto lg:mx-2"
              key={slide.id}
            >
              <div className="embla__slide__number border-8 border-[#f2f2f0]">
                <Image src={slide.src} fill suppressHydrationWarning priority alt={`${slide.id}-image`} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/*//^ CONTROLS */}
      <div className="overflow-hidden flex items-center-safe justify-center">
        <div className="embla__controls -translate-x-6.25 min-[460px]:-translate-x-4 scale-[0.4] mx-auto lg:scale-75 flex items-center justify-center-safe py-4 -translate-y-4 lg:-translate-y-2 lg:py-6">
          <div className="embla__buttons translate-x-6 flex items-center justify-center gap-2">
            <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
            <div className="embla__dots px-6 py-5 rounded-full flex gap-4 bg-nik-primary">
              {scrollSnaps.map((_: any, index: number) => (
                <DotButton
                  key={index}
                  onClick={() => onDotButtonClick(index)}
                  className={"embla__dot".concat(index === selectedIndex ? " embla__dot--selected" : "")}
                />
              ))}
            </div>
            <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
