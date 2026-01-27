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
              className="embla__slide flex-none basis-[78%] sm:basis-[70%] md:basis-[60%] lg:basis-[80%] h-46 min-[460px]:h-64 sm:h-80 lg:h-[365px] mx-auto lg:mx-1"
              key={slide.id}
            >
              <div className="embla__slide__number">
                <Image loading="eager" src={slide.src} fill suppressHydrationWarning priority alt={`${slide.id}-image`} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/*//^ CONTROLS */}
      <div className="scale-[0.4] min-[460px]:scale-50  -translate-y-2 min-[460px]:translate-y-1 sm:translate-y-1 md:-translate-y-1 lg:translate-y-1.5 sm:scale-[0.6] lg:scale-70 flex items-center-safe justify-center">
        <div className="flex items-center justify-center gap-2">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <div className="embla__dots px-6 py-4 rounded-full flex gap-4 bg-nik-primary">
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
    </section>
  );
};

export default EmblaCarousel;
