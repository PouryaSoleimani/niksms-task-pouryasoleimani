"use client";

import { useEffect, useState } from "react";

const useIsDesktop = (breakpoint = 1000) => {
  const [isDesktop, setIsDesktop] = useState<boolean | null>(null);

  useEffect(() => {
    const checkScreen = () => {
      setIsDesktop(window.innerWidth >= breakpoint);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, [breakpoint]);

  return isDesktop;
};

export default useIsDesktop;
