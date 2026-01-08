import { EmblaOptionsType } from "embla-carousel";
import EmblaCarousel from "../EmblaCarousel/EmblaCarousel";

const TopSlider = () => {
  const OPTIONS: EmblaOptionsType = {
    dragFree: false,
    direction: "rtl",
    loop: true,
    align: "center",
    startIndex : 5
  };
  const SLIDES = [
    { id: 1, src: "/images/carousel-1/Frame_5.png" },
    { id: 2, src: "/images/carousel-1/Frame_5.png" },
    { id: 3, src: "/images/carousel-1/Frame_5.png" },
    { id: 4, src: "/images/carousel-1/Frame_5.png" },
    { id: 5, src: "/images/carousel-1/Frame_5.png" },
  ];

  return (
    <div className="h-90 min-[460px]:h-108 sm:h-115 lg:h-180 w-full lg:w-[90%] mx-auto bg-[#f2f2f0]  lg:rounded-[30px] p-3.5 lg:p-6 flex items-center justify-center">
      <div className="bg-[#f2f2f0] overflow-hidden rounded-lg flex flex-col w-full justify-start  h-full gap-2.5 lg:gap-4">
        <div
          id="TOP"
          className="w-full  font-bold basis-1/12 text-md lg:text-xl text-nik-foreground h-fit p-3 lg:p-5 rounded-lg lg:rounded-2xl bg-white flex items-center-safe justify-between"
        >
          <span>Slider</span>
          <span className="flex gap-2 items-center">
            اسلایدر
            <span className="text-6xl -translate-y-2.5 h-8 text-[#dffca1]">·</span>
          </span>
        </div>

        <div id="BOTTOM" className="flex items-center-safe gap-4 basis-11/12 rounded-lg bg-white lg:rounded-[30px]">
          <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        </div>
      </div>
    </div>
  );
};

export default TopSlider;
