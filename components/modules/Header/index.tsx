"use client";
import { Button } from "@/components/ui/button";
import { Circle, Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const HeaderComponent = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    console.info(isExpanded);
  }, [isExpanded]);

  return (
    <div className="flex items-center-safe justify-between px-4 relative left-0 top-0">
      <Button
        onClick={() => setIsExpanded(!isExpanded)}
        size={"auto"}
        variant={"default"}
        className=" rounded-full  p-2 px-3.5 lg:p-3 lg:px-6 flex items-center-safe justify-center font-bold gap-2 tracking-wide"
      >
        <p className="hidden lg:block">منو تسک ها</p>
        {isExpanded ? <X className="size-6" strokeWidth="2.5" /> : <Menu className="size-6" strokeWidth="2.5" />}
      </Button>
      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.ul
            className="border absolute top-14 left-8"
            initial={{ opacity: 0, y: 0 }}
            animate={{
              opacity: 1,
              y: 1,
              transition: { when: "beforeChildren", delayChildren: 0.3, staggerChildren: 0.7 },
            }}
            exit={{ opacity: 0, scale: 0 }}
            key="box"
          >
            {menuItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="bg-nik-primary flex items-center justify-end gap-2 px-4 py-2 rounded-full text-md font-semibold text-sm tracking-tight cursor-pointer hover:bg-(--nik-foreground) my-2"
              >
                {item.title}
                <Circle className="size-4" />
              </Link>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
      <p className="font-semibold text-nik-foreground text-xl"> پوریا سلیمانی</p>
    </div>
  );
};

export default HeaderComponent;

const menuItems = [
  { id: 1, title: "اسلایدر", href: "/" },
  { id: 2, title: "تب منو", href: "/" },
  { id: 3, title: "فرم ثبت نام", href: "/" },
  { id: 4, title: "رنج اسلایدر", href: "/" },
];
