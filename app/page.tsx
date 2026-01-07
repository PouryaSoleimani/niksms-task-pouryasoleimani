import HeaderComponent from "@/components/modules/Header";
import HeroComponent from "@/components/modules/Hero";

const HomePage = () => {
  return (
    <div className="container border mx-auto py-5 border-sky-900 min-h-screen">
      <HeaderComponent />
      <HeroComponent />
    </div>
  );
};

export default HomePage;
