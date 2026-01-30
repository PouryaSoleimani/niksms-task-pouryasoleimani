"use client";
import PartitionComponent from "../Partition";
import RangeSlider from "./_components/RangeSlider";
import RangeSliderMobile from "./_components/RangeSliderMobile";

const RangeSliderComponent = () => {
  const handleChange = (value: number) => console.log("Selected value:", value);
  return (
    <PartitionComponent
      id="RANGE__SLIDER"
      faTitle="اسلایدر"
      enTitle="Slider"
      classNames={{ wrapper: "overflow-hidden", bottom: "h-[418px] lg:h-[208px]" }}
    >
      <div className="hidden md:block">
        <RangeSlider min={10} max={100} step={1} defaultValue={20} onChange={handleChange} />
      </div>

      <div className="md:hidden">
        <RangeSliderMobile min={10} max={100} step={1} defaultValue={25} onChange={handleChange} />
      </div>
    </PartitionComponent>
  );
};

export default RangeSliderComponent;
