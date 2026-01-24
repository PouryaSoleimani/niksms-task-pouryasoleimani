"use client";
import Image from "next/image";
import FormRightComponent from "./FormRight";
import PartitionComponent from "../Partition";

const RegisterFormComponent = () => {
  return (
    <PartitionComponent id="REGISTER__FORM" faTitle="فرم ثبت نام" enTitle="Signup Form">
      {/* FORM LEFT */}
      <div
        id="FORM__LEFT"
        className="bg-[#dffca1] rounded-t-[10px] lg:rounded-tr-none py-6 lg:h-full w-full lg:basis-5/12 lg:rounded-l-2xl flex items-center-safe justify-center"
      >
        <h2 className="text-4xl lg:text-5xl flex flex-col gap-2.5 leading-12 tracking-wide text-nik-foreground font-extrabold lg:w-1/2 mx-auto">
          <span> Let&apos;s Make</span>
          <span className="flex gap-2 items-center">
            a<span className="bg-white rounded-lg w-52.75 h-15 flex items-center-safe px-2">Better</span>
          </span>
          <span>World Together</span>
        </h2>
      </div>

      {/* SMILEY__MOBILE */}
      <div id="SMILEY__MOBILE" className="block  lg:hidden px-3 -translate-y-12 relative inset-0 z-10 py-3 rounded-full bg-[#dffca1]">
        <Image src={"/images/form/Smiley.png"} width={48} height={48} alt="smiley" />
      </div>

      {/* SMILEY__DESKTOP */}
      <div id="SMILEY__DESKTOP" className="hidden lg:block px-3 -translate-x-12 relative inset-0 z-10 py-3 rounded-full bg-[#dffca1]">
        <Image src={"/images/form/Smiley.png"} width={48} height={48} alt="smiley" />
      </div>

      {/* FORM__RIGHT */}
      <div id="FORM__RIGHT" className="basis-7/12 w-full h-full p-8 lg:p-0 -translate-y-16 lg:-translate-y-0 flex items-center-safe justify-center">
        <FormRightComponent />
      </div>
    </PartitionComponent>
  );
};

export default RegisterFormComponent;
