import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "file:text-foreground placeholder:text-[#323232] selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-[#b1afaf] flex h-10 w-full min-w-0 rounded-sm border px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-[#dffca1] focus-visible:ring-[1px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive aria-invalid:border-destructive",
        "placeholder:opacity-50",
        className
      )}
      {...props}
    />
  );
}

export { Input };
