"use client";
import Image from "next/image";
import FormRightComponent from "./FormRight";
import PartitionComponent from "../Partition";
import { cn } from "@/lib/utils";
import { poppins } from "@/public/fonts/poppins/Poppins";
import RotatingText from "@/components/customs/RotatingText";

const RegisterFormComponent = () => {
  return (
    <PartitionComponent
      id="REGISTER__FORM"
      faTitle="فرم ثبت نام"
      enTitle="Signup Form"
      classNames={{ wrapper: "h-[770px] sm:h-[850px] lg:h-[603px]", top: "h-[45px] lg:h-[61px]" }}
    >
      {/*//^ FORM LEFT */}
      <div
        id="FORM__LEFT"
        className="flex lg:justify-center items-center-safe bg-nik-primary px-5 py-1 rounded-t-[10px] lg:rounded-l-2xl lg:rounded-tr-none w-full h-[190px] lg:h-full lg:basis-5/12"
      >
        <h2
          className={cn(
            "flex flex-col w-fit h-[126px] font-bold text-[30px] text-nik-foreground lg:text-5xl leading-[42px] lg:basis-10/12",
            poppins.className,
          )}
        >
          <span className="flex items-center">
            Let <span className="m-0 italic -translate-x-1.5 translate-y-1">{"'"}</span>s Make
          </span>
          <span className="flex items-center gap-2">
            a
            <RotatingText
              texts={["Better", "Easier"]}
              mainClassName="px-4 bg-white text-nik-foreground text-bold *:-translate-y-0.75 overflow-hidden pb-px h-[37px] sm:py-1 md:py-2 items-center justify-center rounded-lg"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "keyframes", ease: "easeOut", duration: 0.4 }}
              rotationInterval={3000}
            />
          </span>
          <div className="flex items-center gap-2">
            <span>World</span>
            <span>together</span>
          </div>
          <div className="hidden lg:block relative inset-0">
            <Image
              src={"/images/form/Form_left_after.png"}
              alt="after_image"
              width={20}
              height={20}
              className="right-27 bottom-10 absolute w-[7.46px] h-[9.02px]"
            />
          </div>
        </h2>
      </div>

      {/*//& SMILEY__MOBILE */}
      <div id="SMILEY__MOBILE" className="lg:hidden block z-10 relative inset-0 bg-nik-primary px-2 py-2 rounded-full -translate-y-12">
        <Image src={"/images/form/Smiley.png"} width={38} height={38} alt="smiley" />
      </div>

      {/*//& SMILEY__DESKTOP */}
      <div id="SMILEY__DESKTOP" className="hidden lg:block z-10 relative inset-0 bg-nik-primary px-3 py-3 rounded-full -translate-x-12">
        <Image src={"/images/form/Smiley.png"} width={48} height={48} alt="smiley" />
      </div>

      {/*//^ FORM__RIGHT */}
      <div
        id="FORM__RIGHT"
        className="flex justify-center items-center-safe p-[25px] lg:p-0 w-full h-full -translate-y-16 lg:-translate-y-0 basis-7/12"
      >
        <FormRightComponent />
      </div>
    </PartitionComponent>
  );
};

export default RegisterFormComponent;
