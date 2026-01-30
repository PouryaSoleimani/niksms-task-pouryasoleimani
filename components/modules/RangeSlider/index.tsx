"use client";
import PartitionComponent from "../Partition";
import RangeSlider from "./_components";

const RangeSliderComponent = () => {
  return (
    <PartitionComponent id="RANGE__SLIDER" faTitle="اسلایدر" enTitle="Slider" classNames={{ }}>
      <RangeSlider min={10} max={100} step={10} defaultValue={20} onChange={(value) => console.log("Selected value:", value)} />
    </PartitionComponent>
  );
};

export default RangeSliderComponent;
