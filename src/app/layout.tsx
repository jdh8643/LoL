import type { Metadata } from "next";

import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/layout.tsx/header";

const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "리그오브레전드 데이터베이스",
  description: "리그오브레전드 데이터베이스",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      
      <body className={inter.className}>
        <Header />
        {children}</body>


    </html>
  );
}
