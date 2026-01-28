import { EmblaOptionsType } from "embla-carousel";
import EmblaCarousel from "../EmblaCarousel/EmblaCarousel";
import PartitionComponent from "../Partition";

const TopSlider = () => {
  const OPTIONS: EmblaOptionsType = {
    dragFree: false,
    direction: "rtl",
    loop: true,
    align: "center",
    startIndex: 4,
  };
  const SLIDES = [
    { id: 1, src: "/images/carousel-1/Frame_5.png" },
    { id: 2, src: "/images/carousel-1/Frame_6.png" },
    { id: 3, src: "/images/carousel-1/Frame_5.png" },
    { id: 4, src: "/images/carousel-1/Frame_6.png" },
    { id: 5, src: "/images/carousel-1/Frame_5.png" },
  ];

  return (
    <PartitionComponent enTitle="Slider" faTitle="اسلایدر" id="TOP__SLIDER" classNames={{ wrapper: 'h-[329px] min-[460px]:h-[420px] sm:h-[480px] lg:h-[627px]', bottom: "h-[504px]" }}>
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </PartitionComponent>
  );
};

export default TopSlider;
