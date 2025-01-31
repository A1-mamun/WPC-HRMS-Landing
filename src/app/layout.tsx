import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

import { Footer, Header } from "@/sections";
import { HeroUIProvider } from "@heroui/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WorkPermitCloud Limited",
  description: "Your Virtual HR Manager",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <HeroUIProvider>
          <Header />
          {children}
          <Footer />
        </HeroUIProvider>
      </body>
    </html>
  );
}
