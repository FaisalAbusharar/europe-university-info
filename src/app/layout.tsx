import type { Metadata } from "next";
import { Inter } from "next/font/google";
import {ThemeProvider} from './theme/ThemeProvider'
import "./styles/globals.css";
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "European Universities",
  description: "Created by Faisal Abusharar",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/*<ThemeProvider>*/}
      <body className={inter.className}>{children} <Analytics /></body>
      {/* </ThemeProvider> */}
    </html>
  );
}
