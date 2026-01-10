import GapComponent from "@/components/modules/Gap";
import HeaderComponent from "@/components/modules/Header";
import HeroComponent from "@/components/modules/Hero";
import NumberSliderComponent from "@/components/modules/NumberSlider";
import RegisterFormComponent from "@/components/modules/RegisterForm";
import TabsComponent from "@/components/modules/Tabs";
import TopSlider from "@/components/modules/TopSlider";

const HomePage = () => {
  return (
    <div className="w-screen m-0 lg:container 2xl:max-w-7xl! border lg:mx-auto py-5 border-sky-900 min-h-screen">
      <HeaderComponent />
      <HeroComponent />
      <TopSlider />
      <GapComponent />
      <TabsComponent />
      <GapComponent />
      <RegisterFormComponent />
      <GapComponent />
      <NumberSliderComponent />
      <GapComponent />
    </div>
  );
};

export default HomePage;
