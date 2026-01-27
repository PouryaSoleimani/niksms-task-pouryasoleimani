"use client";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Circle } from "lucide-react";

const HeaderComponent = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="items-center-safe relative top-0 left-0 flex justify-between">
      <label className={cn("main border border-transparent hover:border-nik-foreground ", isExpanded && "bg-nik-foreground text-nik-primary")}>
        <p className="lg:block hidden text-sm">منو تسک ها</p>
        <input className="inp" type="checkbox" checked={!isExpanded} onChange={() => setIsExpanded(!isExpanded)} />
        <div className={cn("bar", isExpanded && "expanded max-[820px]:-translate-x-1")}>
          <span className={cn("top bar-list", isExpanded && "bg-nik-primary")}></span>
          <span className={cn("middle bar-list", isExpanded && "bg-nik-primary")}></span>
          <span className={cn("bottom bar-list", isExpanded && "bg-nik-primary")}></span>
        </div>
        <section className="menu-container bg-black">
          {menuItems.map((item: MenuItem) => (
            <Link key={item.id} href={item.href} className="menu-list flex items-center-safe gap-1.5">
              <Circle className={cn("size-4", isExpanded && "fill-nik-primary")} />
              {item.title}
            </Link>
          ))}
        </section>
      </label>

      <p className="text-nik-foreground text-xl font-semibold"> پوریا سلیمانی</p>
    </div>
  );
};

export default HeaderComponent;

type MenuItem = { id: number; title: string; href: string };

const menuItems: Array<MenuItem> = [
  { id: 1, title: "اسلایدر", href: "#TOP__SLIDER" },
  { id: 2, title: "تب منو", href: "#TAB__MENU" },
  { id: 3, title: "فرم ثبت نام", href: "#REGISTER__FORM" },
  { id: 4, title: "رنج اسلایدر", href: "#RANGE__SLIDER" },
];
