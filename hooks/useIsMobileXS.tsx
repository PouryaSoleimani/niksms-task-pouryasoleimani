"use client";

import { useEffect, useState } from "react";

const useIsMobileXS = (breakpoint = 460) => {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth <= breakpoint);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, [breakpoint]);

  return isMobile;
};

export default useIsMobileXS;
