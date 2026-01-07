import Image from "next/image";

const HeroComponent = () => {
  return (
    <div dir="rtl" className="w-full border flex flex-col items-center justify-center h-100">
      <div className="flex items-center gap-3">
        <span className="text-[40px] font-bold text-nik-foreground">بزار کُدت</span>
        <Image
          src={"/images/header/header_logo.png"}
          className="h-20 w-14 -translate-y-3"
          width={500}
          height={500}
          alt="header-logo"
        />
        <span className="text-[40px] font-bold text-nik-foreground">حرف بزنه ...</span>
      </div>
      <div>
        <h3 className="text-[36px] font-medium text-nik-foreground">صفحه ای ساده اما به جزئیات ریز!</h3>
      </div>
      <div>
        <Image
          src={"/images/header/header_arrow.png"}
          className="h-26 w-16 translate-y-3"
          width={500}
          height={500}
          alt="header-logo"
        />
      </div>
    </div>
  );
};

export default HeroComponent;
