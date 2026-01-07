import Image from "next/image";

const HeroComponent = () => {
  return (
    <div dir="rtl" className="w-full border flex flex-col items-center justify-center h-80 lg:h-100">
      <div className="flex items-center gap-2 lg:gap-3">
        <span className="text-[22px] lg:text-[40px] font-extrabold lg:font-bold text-nik-foreground">بزار کُدت</span>
        <Image
          src={"/images/header/header_logo.png"}
          className="h-14 lg:h-20 w-10 lg:w-14 -translate-y-3 lg:-translate-y-3"
          width={500}
          height={500}
          alt="header-logo"
        />
        <span className="text-[22px] lg:text-[40px] font-extrabold lg:font-bold text-nik-foreground">حرف بزنه...</span>
      </div>
      <div>
        <h3 className="text-[18px] lg:text-[36px] font-medium text-nik-foreground">صفحه ای ساده اما به جزئیات ریز!</h3>
      </div>
      <div>
        <Image
          src={"/images/header/header_arrow.png"}
          className="w-8 lg:w-16 h-18 lg:h-30  translate-y-3"
          width={500}
          height={500}
          alt="header-logo"
        />
      </div>
    </div>
  );
};

export default HeroComponent;
