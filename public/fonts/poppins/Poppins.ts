import localFont from "next/font/local";

export const poppins = localFont({
  src: [
    {
      path: "./Poppins-ExtraLight.ttf",
      weight: "100",
    },
    {
      path: "./Poppins-Light.ttf",
      weight: "200",
    },
    {
      path: "./Poppins-Thin.ttf",
      weight: "300",
    },
    {
      path: "./Poppins-Regular.ttf",
      weight: "400",
    },
    {
      path: "./Poppins-Medium.ttf",
      weight: "500",
    },
    {
      path: "./Poppins-SemiBold.ttf",
      weight: "600",
    },
    {
      path: "./Poppins-Bold.ttf",
      weight: "700",
    },
    {
      path: "./Poppins-ExtraBold.ttf",
      weight: "800",
    },
    {
      path: "./Poppins-Black.ttf",
      weight: "900",
    },
  ],
  display: "swap",
  variable: "--poppins",
});