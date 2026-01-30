"use client";
import CustomImageComponent from "@/components/customs/CustomImageComponent";
import useIsMobile from "@/hooks/useIsMobile";

const TheEndComponent = () => {
  const isMobile = useIsMobile();
  return (
    <div className={"w-full h-[130px] center mt-5"}>
      {isMobile ? (
        <CustomImageComponent src={"/images/the-end/the_end_mobile.png"} alt="the_end_mobile" width={324} height={180} className="mx-auto" />
      ) : (
        <CustomImageComponent
          src={"/images/the-end/the_end_desktop.png"}
          alt="the_end_mobile"
          width={776}
          height={317}
          className="mx-auto -translate-y-3"
        />
      )}
    </div>
  );
};

export default TheEndComponent;
