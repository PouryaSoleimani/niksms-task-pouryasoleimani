import { EmblaOptionsType } from "embla-carousel";
import EmblaCarousel from "../EmblaCarousel/EmblaCarousel";

const TopSlider = () => {
  const OPTIONS: EmblaOptionsType = {
    dragFree: true,
    direction: "rtl",
    loop: true,
  };
  const SLIDES = [
    { id: 1, src: "/images/carousel-1/Frame_5.png" },
    { id: 2, src: "/images/carousel-1/Frame_5.png" },
    { id: 3, src: "/images/carousel-1/Frame_5.png" },
    { id: 4, src: "/images/carousel-1/Frame_5.png" },
    { id: 5, src: "/images/carousel-1/Frame_5.png" },
  ];
  return (
    <div className="h-100 lg:h-200 w-full bg-[#f2f2f0] rounded-[30px] p-6 flex items-center justify-center">
      <div className="bg-[#f2f2f0] flex flex-col w-full justify-start  h-full gap-4">
        <div className="w-full  font-bold  basis-1/12 text-xl text-nik-foreground h-fit p-5 rounded-2xl bg-white flex items-center-safe justify-between">
          <span>Slider</span>
          <span className="flex gap-2 items-center">
            اسلایدر
            <span className="text-6xl -translate-y-2.5 h-8 text-[#dffca1]">·</span>
          </span>
        </div>
        <div className="flex items-center-safe gap-4 basis-11/12  bg-white rounded-2xl">
          <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        </div>
      </div>
    </div>
  );
};

export default TopSlider;
