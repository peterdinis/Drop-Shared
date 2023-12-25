import type { Metadata } from 'next'
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import Navbar from "./components/navbar/Navbar";
import AuthContextProvider from "./providers/UserProvider";
import { Toaster } from "@/components/ui/toaster"

export const metadata: Metadata = {
  title: 'Drop-Shared',
  description: 'Application for uploading / sharing files',
}

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
          <Navbar />
          {children}
          <Toaster />
        </AuthContextProvider>
      </body>
    </html>
  );
}
