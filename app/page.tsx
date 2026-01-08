import GapComponent from "@/components/modules/Gap";
import HeaderComponent from "@/components/modules/Header";
import HeroComponent from "@/components/modules/Hero";
import TopSlider from "@/components/modules/TopSlider";

const HomePage = () => {
  return (
    <div className="w-screen m-0 lg:container 2xl:max-w-7xl! border lg:mx-auto py-5 border-sky-900 min-h-screen">
      <HeaderComponent />
      <HeroComponent />
      <TopSlider />
      <GapComponent />
    </div>
  );
};

export default HomePage;
