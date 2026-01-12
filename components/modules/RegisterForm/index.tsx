"use client";
import Image from "next/image";
import FormRightComponent from "./FormRight";

const RegisterFormComponent = () => {
  return (
    <div
      id="REGISTER__FORM"
      className="h-200 lg:h-180 w-full lg:w-[90%] mx-auto bg-[#f2f2f0]  lg:rounded-[30px] p-3.5 lg:p-6 flex items-center justify-center"
    >
      <div className="bg-[#f2f2f0] overflow-hidden rounded-lg flex flex-col w-full justify-start  h-full gap-2.5 lg:gap-4">
        {/* TOP SECTION */}
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

        {/* BOTTOM SECTION */}
        <div id="FORM__WRAPPER" className="flex flex-col lg:flex-row items-center-safe gap-4 basis-11/12 rounded-lg bg-white lg:rounded-[30px]">
          {/* FORM LEFT */}
          <div id="FORM__LEFT" className="bg-[#dffca1] py-6 lg:h-full w-full lg:basis-5/12 lg:rounded-l-2xl flex items-center-safe justify-center">
            <h2 className="text-4xl lg:text-5xl flex flex-col gap-2.5 leading-12 tracking-wide text-nik-foreground font-extrabold lg:w-1/2 mx-auto">
              <span> Let&apos;s Make</span>
              <span className="flex gap-2 items-center">
                a<span className="bg-white rounded-lg w-52.75 h-15 flex items-center-safe px-2">Better</span>
              </span>
              <span>World Together</span>
            </h2>
          </div>

          {/* SMILEY */}
          <div id="SMILEY__MOBILE" className="block lg:hidden px-3 -translate-y-12 relative inset-0 z-10 py-3 rounded-full bg-[#dffca1]">
            <Image src={"/images/form/Smiley.png"} width={48} height={48} alt="smiley" />
          </div>

          {/* SMILEY */}
          <div id="SMILEY__DESKTOP" className="hidden lg:block px-3 -translate-x-12 relative inset-0 z-10 py-3 rounded-full bg-[#dffca1]">
            <Image src={"/images/form/Smiley.png"} width={48} height={48} alt="smiley" />
          </div>

          {/* FORM__RIGHT */}
          <div
            id="FORM__RIGHT"
            className="basis-7/12 w-full h-full p-8 lg:p-0 -translate-y-16 lg:-translate-y-0 flex items-center-safe justify-center"
          >
            <FormRightComponent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterFormComponent;
