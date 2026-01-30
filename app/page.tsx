import GapComponent from "@/components/modules/Gap";
import HeaderComponent from "@/components/modules/Header";
import HeroComponent from "@/components/modules/Hero";
import RangeSliderComponent from "@/components/modules/RangeSlider";
import RegisterFormComponent from "@/components/modules/RegisterForm";
import TabsComponent from "@/components/modules/Tabs";
import TheEndComponent from "@/components/modules/TheEnd";
import TopSlider from "@/components/modules/TopSlider";

const HomePage = () => {
  return (
    <div className="w-screen m-0 max-w-[1024px] lg:mx-auto py-5 border-sky-900 min-h-screen">
      <HeaderComponent />
      <HeroComponent />
      <TopSlider />
      <GapComponent />
      <TabsComponent />
      <GapComponent />
      <RegisterFormComponent />
      <GapComponent />
      <RangeSliderComponent />
      <TheEndComponent />
    </div>
  );
};

export default HomePage;
