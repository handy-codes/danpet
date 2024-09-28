import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavbarPage from "@/components/Navbar";
import FooterPage from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Danglobal Atlantic Petroleum",
  description: "Danglobal - Redefining Energy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavbarPage/>
        {children}
        <FooterPage/>
      </body>
    </html>
  );
}
