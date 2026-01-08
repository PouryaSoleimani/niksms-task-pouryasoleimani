import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const TabsComponent = () => {
  return (
    <div className="h-90 min-[460px]:h-108 sm:h-115 lg:h-180 w-full lg:w-[90%] mx-auto bg-[#f2f2f0]  lg:rounded-[30px] p-3.5 lg:p-6 flex items-center justify-center">
      <div className="bg-[#f2f2f0] overflow-hidden rounded-lg flex flex-col w-full justify-start  h-full gap-2.5 lg:gap-4">
        <div
          id="TOP"
          className="w-full  font-bold basis-1/12 text-md lg:text-xl text-nik-foreground h-fit p-3 lg:p-5 rounded-lg lg:rounded-2xl bg-white flex items-center-safe justify-between"
        >
          <span>TabMenu</span>
          <span className="flex gap-2 items-center">
            تب منو
            <span className="text-6xl -translate-y-2.5 h-8 text-[#dffca1]">·</span>
          </span>
        </div>

        <div id="BOTTOM" className="flex items-center-safe gap-4 basis-11/12 rounded-lg bg-white lg:rounded-[30px]">
          <Tabs defaultValue="account">
            <TabsList>
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="password">Password</TabsTrigger>
            </TabsList>
            <TabsContent value="account">ACCOUNT</TabsContent>
            <TabsContent value="password">PASSWORD</TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default TabsComponent;

const tabList = [{ id: 1, title: "منو شماره یک", icon: "/images/tabs/header/1.png" }];
