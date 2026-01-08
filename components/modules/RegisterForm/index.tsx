"use client";
import Image from "next/image";
import FormRightComponent from "./FormRight";

// import { useEffect, useState } from "react";

const RegisterFormComponent = () => {
  // const [word, setWord] = useState<"Better" | "Easier">("Better");

  // useEffect(() => {
  //   setInterval(() => {
  //     if (word === "Better") {
  //       setWord("Easier");
  //     } else {
  //       setWord("Better");
  //     }
  //     return;
  //   }, 2000);
  // },[]);

  return (
    <div className="h-200 lg:h-180 w-full lg:w-[90%] mx-auto bg-[#f2f2f0]  lg:rounded-[30px] p-3.5 lg:p-6 flex items-center justify-center">
      <div className="bg-[#f2f2f0] overflow-hidden rounded-lg flex flex-col w-full justify-start  h-full gap-2.5 lg:gap-4">
        <div
          id="TOP"
          className="w-full font-bold basis-1/12 text-md lg:text-xl text-nik-foreground h-fit p-3 lg:p-5 rounded-lg lg:rounded-2xl bg-white flex items-center-safe justify-between"
        >
          <span>Signup Form</span>
          <span className="flex gap-2 items-center">
            فرم ثبت نام
            <span className="text-6xl -translate-y-2.5 h-8 text-[#dffca1]">·</span>
          </span>
        </div>

        <div id="BOTTOM__TABS" className="flex items-center-safe gap-4 basis-11/12 rounded-lg bg-white lg:rounded-[30px]">
          <div id="FORM__LEFT" className="bg-[#dffca1] h-full basis-5/12 rounded-l-2xl flex items-center-safe justify-center">
            <h2 className="text-5xl flex flex-col gap-2.5 leading-12 tracking-wide text-nik-foreground font-extrabold w-1/2 mx-auto">
              <span> Let&apos;s Make</span>
              <span className="flex gap-2 items-center">
                a<span className="bg-white rounded-lg w-52.75 h-15 flex items-center-safe px-2">Better</span>
              </span>
              <span> World </span>
              <span> Together </span>
            </h2>
          </div>
          <div id="SMILEY" className="px-3 -translate-x-14 relative inset-0 z-10 py-3 rounded-full bg-[#dffca1]">
            <Image src={"/images/form/Smiley.png"} width={48} height={48} alt="smiley" />
          </div>
          <div id="FORM__RIGHT" className="basis-7/12">
            <FormRightComponent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterFormComponent;
