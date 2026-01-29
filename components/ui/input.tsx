import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "file:inline-flex flex selection:bg-primary dark:bg-input/30 file:bg-transparent disabled:opacity-50 shadow-xs px-3 py-2 border border-[#e2e2e2] focus-within:border-nik-primary active:border-nik-primary file:border-0 rounded-md outline-none w-full min-w-0 file:h-7 file:font-medium selection:text-primary-foreground placeholder:text-[#323232] placeholder:text-[13px] file:text-foreground md:text-sm file:text-sm text-base transition-[color,box-shadow] disabled:cursor-not-allowed disabled:pointer-events-none",
        "focus-visible:border-nik-primary dark:focus-visible:border-nik-primary focus:border-nik-primary dark:focus:border-nik-primary",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive aria-invalid:border-destructive",
        "placeholder:opacity-50",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
