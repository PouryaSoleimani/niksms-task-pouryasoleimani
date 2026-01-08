import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, X } from "lucide-react";
import Image from "next/image";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/animate-ui/components/radix/sheet";
const TabsComponent = () => {
  return (
    <div className="h-200 min-[460px]:h-108 sm:h-115 lg:h-180 w-full lg:w-[90%] mx-auto bg-[#f2f2f0]  lg:rounded-[30px] p-3.5 lg:p-6 flex items-center justify-center">
      <div className="bg-[#f2f2f0] overflow-hidden rounded-lg flex flex-col w-full justify-start  h-full gap-2.5 lg:gap-4">
        <div
          id="TOP"
          className="w-full font-bold basis-1/12 text-md lg:text-xl text-nik-foreground h-fit p-3 lg:p-5 rounded-lg lg:rounded-2xl bg-white flex items-center-safe justify-between"
        >
          <span>TabMenu</span>
          <span className="flex gap-2 items-center">
            تب منو
            <span className="text-6xl -translate-y-2.5 h-8 text-[#dffca1]">·</span>
          </span>
        </div>

        <div id="BOTTOM__TABS" className="flex items-center-safe gap-4 basis-11/12 rounded-lg bg-white lg:rounded-[30px]">
          <Tabs dir="rtl" defaultValue="1" className="overflow-hidden w-full h-full p-2.5">
            <TabsList
              id="TAB__LIST"
              className=" flex w-full overflow-x-auto overflow-y-hidden whitespace-nowrap gap-1 shrink-0! bg-[#dffca1] border border-[#D5f39B] rounded-lg scrollbar-hide touch-pan-x scroll-smooth snap-x snap-mandatory"
            >
              {tabList.map((item: TabItem) => (
                <TabsTrigger
                  key={item.id}
                  value={item.id.toString()}
                  className="no-scrollbar flex-none shrink-0 scrollbar-hide flex items-center gap-1.5 text-[#094020] font-bold w-32 h-9 cursor-pointer transition-all duration-300 "
                >
                  <Image src={item.iconHeader} width={20} height={20} alt={item.title} />
                  {item.title}
                </TabsTrigger>
              ))}
            </TabsList>
            {tabList.map((item: TabItem) => (
              <TabsContent key={item.id} value={item.id.toString()} className="p-1.5 flex flex-col gap-3 overflow-hidden">
                <div className="flex items-center-safe font-bold gap-2.5 text-lg">
                  <div className="bg-[#f2f2f0] p-1 rounded-md border border-[#E9EBE8]">
                    <Image src={item.iconTitle} width={20} height={20} alt={item.title} />
                  </div>
                  <h4>{item.title}</h4>
                </div>
                <div className="font-normal text-[#094020] leading-8">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
                  ستون و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد
                  گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد.
                </div>
                <div>
                  <Button variant={"focused"} className="rounded-lg mt-3.5 flex items-center text-[12px] justify-between text-sm w-35.75 h-10">
                    <p className="text-white font-medium text-[12px]"> اطلاعات بیشتر </p>
                    <ArrowLeft className="size-5.5" />
                  </Button>
                </div>
                <div id="TABS__VIDEO" className=" relative inset-0">
                  <Sheet>
                    <SheetTrigger>
                      <Image
                        src={"/images/tabs/Thumbnail.png"}
                        width={400}
                        height={200}
                        alt="thumbnail"
                        className="mt-10 w-full h-full object-fill"
                      />
                    </SheetTrigger>
                    <SheetContent showCloseButton={false} dir="rtl" side="bottom" className="border-t-6 h-84 border-t-[#dffca1] rounded-t-xl">
                      <SheetHeader className="inline-flex items-center justify-between ">
                        <p className="font-semibold text-md">پاپ آپ ویدیو</p>
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
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default TabsComponent;

type TabItem = { id: number; title: string; iconHeader: string; iconTitle: string };

const tabList: TabItem[] = [
  { id: 1, title: "منو شماره یک", iconHeader: "/images/tabs/header/1.png", iconTitle: "/images/tabs/header/11.png" },
  { id: 2, title: "منو شماره دو", iconHeader: "/images/tabs/header/2.png", iconTitle: "/images/tabs/header/2.png" },
  { id: 3, title: "منو شماره سه", iconHeader: "/images/tabs/header/3.png", iconTitle: "/images/tabs/header/3.png" },
  { id: 4, title: "منو شماره چهار", iconHeader: "/images/tabs/header/4.png", iconTitle: "/images/tabs/header/4.png" },
];
