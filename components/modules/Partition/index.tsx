import { cn } from "@/lib/utils";

interface PartitionProps {
  enTitle: string;
  faTitle: string;
  children: React.ReactNode;
  id?: string;
  classNames?: { wrapper?: string; bottom?: string; top?: string };
}

const PartitionComponent = ({ enTitle, children, faTitle, id, classNames }: PartitionProps) => {
  return (
    <div
      id={id}
      className={cn("w-full mx-auto bg-[#f2f2f0]  lg:rounded-[34px] p-3.5 lg:p-[24px] flex items-center justify-center", classNames?.wrapper)}
    >
      <div className="bg-[#f2f2f0] overflow-hidden rounded-lg flex flex-col w-full justify-start h-full gap-2.5 lg:gap-[14px]">
        {/* TOP SECTION */}
        <div
          id="TOP"
          className={cn(
            "w-full font-bold text-md lg:text-xl text-nik-foreground px-3 py-2 lg:p-[15px] rounded-lg lg:rounded-[18px] bg-white flex items-center-safe justify-between",
            classNames?.top,
          )}
        >
          <span>{enTitle}</span>
          <span className="flex gap-2 items-center">
            {faTitle}
            <span className="text-6xl -translate-y-2.5 h-8 text-nik-primary">·</span>
          </span>
        </div>

        {/* BOTTOM SECTION */}
        <div
          id="BOTTOM__WRAPPER"
          className={cn("flex flex-col lg:flex-row items-center-safe gap-4 rounded-lg bg-white lg:rounded-[22px]", classNames?.bottom)}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default PartitionComponent;
