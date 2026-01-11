"use client";
const useIsMobile = () => {
  const screenWidth = window && window.innerWidth;
  const isMobile = screenWidth <= 640;
  return isMobile;
};

export default useIsMobile;
