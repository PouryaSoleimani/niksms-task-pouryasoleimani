"use client";
import Image from "next/image";
import PartitionComponent from "../Partition";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTrigger } from "@/components/animate-ui/components/radix/sheet";
import { SheetTitle } from "@/components/animate-ui/primitives/radix/sheet";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

import { tabList } from "./mocks/data";
import { TabItem } from "./mocks/types";

import { ArrowLeft, X } from "lucide-react";

import useIsMobileXS from "@/hooks/useIsMobileXS";
import useIsMobile from "@/hooks/useIsMobile";
import useIsTablet from "@/hooks/useIsTablet";
import useIsDesktop from "@/hooks/useIsDesktop";
import { DialogClose } from "@radix-ui/react-dialog";
import CustomImageComponent from "@/components/customs/CustomImageComponent";

const TabsComponent = () => {
  const isXS = useIsMobileXS();
  const isTablet = useIsTablet();
  const isMobile = useIsMobile();
  const isDesktop = useIsDesktop();

  console.info("is DESKTOP =>", isDesktop);
  return (
    <PartitionComponent
      enTitle="TabMenu"
      faTitle="تب منو"
      id="TAB__MENU"
      classNames={{ wrapper: "h-[634px] sm:h-[750px] lg:h-[627px]", top: "h-[45px] lg:h-[61px]", bottom: "xs:pb-0 lg:pb-4" }}
    >
      <Tabs dir="rtl" defaultValue="1" className="overflow-hidden w-full h-full p-2.5 pb-0">
        <TabsList className="TAB__LIST flex w-full lg:w-[92%] lg:mx-auto lg:mt-8 overflow-x-auto lg:overflow-x-hidden overflow-y-hidden whitespace-nowrap gap-1 shrink-0! bg-nik-primary border border-[#D5f39B] rounded-lg lg:rounded-2xl scrollbar-hide touch-pan-x scroll-smooth snap-x snap-mandatory">
          {tabList.map((item: TabItem) => (
            <TabsTrigger
              key={item.id}
              value={item.id.toString()}
              className="no-scrollbar flex-none shrink-0 scrollbar-hide flex items-center gap-1.5 text-nik-foreground font-bold w-32 lg:w-[24%] lg:overflow-hidden h-9 lg:h-11 cursor-pointer transition-all duration-300 lg:rounded-xl"
            >
              <Image src={item.iconHeader} width={20} height={20} alt={item.title} />
              {item.title}
            </TabsTrigger>
          ))}
        </TabsList>

        {tabList.map((item: TabItem) => (
          <TabsContent key={item.id} value={item.id.toString()} className="mt-4 lg:px-16 flex flex-col lg:flex-row gap-3 overflow-hidden">
            {/* TOP SECTION */}
            <div className="xs:p-3 sm:p-4 md:p-6 h-1/2 md:h-1/3 lg:p-3 lg:flex lg:flex-col lg:justify-start lg:gap-2 lg:basis-8/12">
              <div className="flex items-center-safe font-bold gap-1.5 lg:gap-3 text-lg">
                <div className="bg-[#f2f2f0] p-1 rounded-md border border-[#E9EBE8]">
                  <Image src={item.iconTitle} width={isMobile == true ? 15 : 26} height={isMobile == true ? 15 : 26} alt={item.title} />
                </div>
                <h4 className="text-sm sm:text-md md:text-lg font-bold text-nik-foreground">{item.title}</h4>
              </div>
              <div className="font-normal mt-2 text-justify text-nik-foreground leading-6 sm:leading-8 text-xs sm:text-sm md:text-[16px] md:leading-8 lg:leading-8 lg:text-[14px] lg:w-[421px]">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
                ستون و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد
                گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد.
              </div>
              <div className="lg:mt-10">
                <Button
                  variant={"focused"}
                  className="rounded-lg group mt-5 flex items-center text-[12px] md:text-[14px] justify-between text-sm w-35.75 md:w-40 lg:w-43.25 h-10 lg:h-11"
                >
                  <p className="text-white! font-medium text-[12px] lg:text-[14px]"> اطلاعات بیشتر </p>
                  <ArrowLeft className="size-5.5 group-hover:-translate-x-1 transition-all duration-300" />
                </Button>
              </div>
            </div>
            {/*//^ BOTTOM SECTION */}
            <div id="TABS__VIDEO" className="relative basis-1/3 h-[215px] md:h-1/2 lg:h-auto lg:basis-1/2 inset-0 flex items-center justify-center">
              {isDesktop == true ? (
                <Dialog>
                  <DialogTrigger className="bg-transparent p-2 pb-0 lg:rounded-t-[24px] lg:p-3 lg:bg-nik-gray">
                    <Image
                      src={isTablet == true && item.mobileThumbnail ? item.mobileThumbnail : item.thumbnail}
                      width={isXS ? 400 : 600}
                      height={isXS ? 200 : 400}
                      alt="thumbnail"
                      className="mt-4 xs:mt-2 lg:mt-0 rounded-t-[17px] h-full"
                    />
                  </DialogTrigger>
                  <DialogContent className="border w-fit p-6 mx-auto rounded-4xl">
                    <DialogHeader className="flex items-center px-1 justify-between flex-row">
                      <DialogClose className="mr-auto size-8 " />
                      <DialogTitle className="text-[20px] text-nik-foreground font-semibold">پاپ آپ ویدیو</DialogTitle>
                    </DialogHeader>
                    <div className="flex items-center-safe justify-center py-2">
                      <CustomImageComponent
                        src={"/images/tabs/Popup__mobile.png"}
                        width={2041}
                        height={574}
                        skeletonClassName="w-full h-full"
                        alt="pop_up"
                      />
                    </div>
                  </DialogContent>
                </Dialog>
              ) : (
                <Sheet>
                  <SheetTrigger className="bg-transparent p-2 pb-0 lg:rounded-t-[24px] lg:p-3 lg:bg-nik-gray">
                    <Image
                      src={isTablet == true && item.mobileThumbnail ? item.mobileThumbnail : item.thumbnail}
                      width={isXS ? 400 : 600}
                      height={isXS ? 200 : 400}
                      alt="thumbnail"
                      className="mt-4 xs:mt-2 lg:mt-0 rounded-t-[17px] h-full"
                    />
                  </SheetTrigger>
                  <SheetContent showCloseButton={false} dir="rtl" side="bottom" className="border-t-6 h-84 border-t-nik-primary rounded-t-xl">
                    <SheetHeader className="inline-flex items-center justify-between ">
                      <SheetTitle className="font-semibold text-md">پاپ آپ ویدیو</SheetTitle>
                      <SheetClose asChild>
                        <Button variant={"ghost"} className="rounded-md py-3 size-10 w-auto h-auto">
                          <X className="size-6" />
                        </Button>
                      </SheetClose>
                    </SheetHeader>
                    <div className="flex items-center-safe justify-center py-2">
                      <Image src={"/images/tabs/Popup__mobile.png"} width={350} height={350} alt="pop_up" />
                    </div>
                  </SheetContent>
                </Sheet>
              )}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </PartitionComponent>
  );
};

export default TabsComponent;
