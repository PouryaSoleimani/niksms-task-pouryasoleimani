import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const Estedad = localFont({
  src: "./../public/fonts/Estedad-FD[KSHD,wght].woff2",
});

export const metadata: Metadata = {
  title: "NIK-SMS TASK | POURYA SOLEIMANI",
  description: "",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${Estedad.className} antialiased`}>{children}</body>
    </html>
  );
}
