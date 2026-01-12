import Image from "next/image";

function loading() {
  return (
    <div className="min-w-screen border min-h-screen overflow-hidden absolute top-0 left-0 right-0 z-999 flex items-center-safe justify-center">
      <div className="flex flex-col w-full h-full items-center-safe justify-between gap-5 text-[#094020] font-semibold text-2xl tracking-tight">
        <Image  loading="eager" src={"/images/loading/Flower.ico"} width={50} height={50} alt="favicon" className="animate-spin" />
        <h5 className="text-center text-nik-foreground text-lg">در حال دریافت اطلاعات</h5>
      </div>
    </div>
  );
}

export default loading;
