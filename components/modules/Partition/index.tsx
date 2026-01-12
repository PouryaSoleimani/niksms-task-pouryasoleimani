interface PartitionProps {
  enTitle: string;
  faTitle: string;
  children: React.ReactNode;
  id?: string;
}
const PartitionComponent = ({ enTitle, children, faTitle, id }: PartitionProps) => {
  return (
    <div id={id} className="h-200 lg:h-180 w-full lg:w-[90%] mx-auto bg-[#f2f2f0]  lg:rounded-[30px] p-3.5 lg:p-6 flex items-center justify-center">
      <div className="bg-[#f2f2f0] overflow-hidden rounded-lg flex flex-col w-full justify-start  h-full gap-2.5 lg:gap-4">
        {/* TOP SECTION */}
        <div
          id="TOP"
          className="w-full font-bold basis-1/12 text-md lg:text-xl text-nik-foreground h-fit p-3 lg:p-5 rounded-lg lg:rounded-2xl bg-white flex items-center-safe justify-between"
        >
          <span>{enTitle}</span>
          <span className="flex gap-2 items-center">
            {faTitle}
            <span className="text-6xl -translate-y-2.5 h-8 text-[#dffca1]">·</span>
          </span>
        </div>

        {/* BOTTOM SECTION */}
        <div id="BOTTOM__WRAPPER" className="flex flex-col lg:flex-row items-center-safe gap-4 basis-11/12 rounded-lg bg-white lg:rounded-[30px]">
          {children}
        </div>
      </div>
    </div>
  );
};

export default PartitionComponent;
