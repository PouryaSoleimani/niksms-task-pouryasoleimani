"use client";
import PartitionComponent from "../Partition";
import RangeSlider from "./_components/RangeSlider";
import RangeSliderMobile from "./_components/RangeSliderMobile";

const RangeSliderComponent = () => {
  return (
    <PartitionComponent
      id="RANGE__SLIDER"
      faTitle="اسلایدر"
      enTitle="Slider"
      classNames={{ wrapper: "overflow-hidden", bottom: "h-[418px] sm:h-[208px]" }}
    >
      <div className="hidden sm:block">
        <RangeSlider min={10} max={100} step={1} defaultValue={20} />
      </div>

      <div className="sm:hidden">
        <RangeSliderMobile min={10} max={100} step={1} defaultValue={20} />
      </div>
    </PartitionComponent>
  );
};

export default RangeSliderComponent;
