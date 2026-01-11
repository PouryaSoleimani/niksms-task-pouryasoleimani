import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

export const Estedad = localFont({
  src: "./../public/fonts/Estedad-FD[KSHD,wght].woff2",
});

// export const Poppins = localFont({
//   src : ''
// })

export const metadata: Metadata = {
  title: "NIK-SMS TASK | POURYA SOLEIMANI",
  description: "Nik-sms Task | Pourya Soleimani",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${Estedad.className} antialiased`}>{children}</body>
    </html>
  );
}
