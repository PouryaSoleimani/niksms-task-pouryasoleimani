"use client";
import Image from "next/image";
import FormRightComponent from "./FormRight";
import PartitionComponent from "../Partition";
import { cn } from "@/lib/utils";
import { poppins } from "@/public/fonts/poppins/Poppins";

const RegisterFormComponent = () => {
  return (
    <PartitionComponent id="REGISTER__FORM" faTitle="فرم ثبت نام" enTitle="Signup Form">
      {/* FORM LEFT */}
      <div
        id="FORM__LEFT"
        className="bg-nik-primary rounded-t-[10px] lg:rounded-tr-none py-6 lg:h-full w-full lg:basis-5/12 lg:rounded-l-2xl flex items-center-safe justify-center"
      >
        <h2 className={cn("text-4xl lg:text-5xl flex flex-col gap-2.5 leading-12 tracking-wide text-nik-foreground font-extrabold lg:w-1/2 mx-auto", poppins.className)}>
          <span> Let&apos;s Make</span>
          <span className="flex items-center gap-2">
            a<span className="bg-white rounded-lg w-52.75 h-15 flex items-center-safe px-2">Better</span>
          </span>
          <span>World Together</span>
        </h2>
      </div>

      {/* SMILEY__MOBILE */}
      <div id="SMILEY__MOBILE" className="lg:hidden bg-nik-primary relative inset-0 z-10 block px-3 py-3 -translate-y-12 rounded-full">
        <Image src={"/images/form/Smiley.png"} width={48} height={48} alt="smiley" />
      </div>

      {/* SMILEY__DESKTOP */}
      <div id="SMILEY__DESKTOP" className="lg:block bg-nik-primary relative inset-0 z-10 hidden px-3 py-3 -translate-x-12 rounded-full">
        <Image src={"/images/form/Smiley.png"} width={48} height={48} alt="smiley" />
      </div>

      {/* FORM__RIGHT */}
      <div id="FORM__RIGHT" className="basis-7/12 lg:p-0 lg:-translate-y-0 items-center-safe flex justify-center w-full h-full p-8 -translate-y-16">
        <FormRightComponent />
      </div>
    </PartitionComponent>
  );
};

export default RegisterFormComponent;
