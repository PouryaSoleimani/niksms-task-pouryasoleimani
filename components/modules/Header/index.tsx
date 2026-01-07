import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const HeaderComponent = () => {
  return (
    <div className="flex items-center-safe justify-between px-4">
      <Button
        size={"auto"}
        variant={"default"}
        className=" rounded-full p-2 px-3.5 lg:p-3 lg:px-6 flex items-center-safe justify-center font-bold gap-2 tracking-wide"
      >
        <p className="hidden lg:block">منو تسک ها</p>
        <Menu className="size-6" strokeWidth="2.5" />
      </Button>
      <p className="font-semibold text-nik-foreground text-xl"> پوریا سلیمانی</p>
    </div>
  );
};

export default HeaderComponent;
