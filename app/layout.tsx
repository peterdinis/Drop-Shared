"use client"

import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import Navbar from "./components/navbar/Navbar";
import AuthContextProvider from "./providers/UserProvider";
import { Toaster } from "react-hot-toast";
import {RecoilRoot} from "recoil";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <AuthContextProvider>
          <RecoilRoot>
          <Navbar />
          {children}
          <Toaster />
          </RecoilRoot>
        </AuthContextProvider>
      </body>
    </html>
  );
}
