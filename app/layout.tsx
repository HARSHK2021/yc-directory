import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import 'easymde/dist/easymde.min.css'
import { Toaster } from "@/components/ui/toaster";




const workSans = localFont({
  src: [
    {
      path: "./fonts/WorkSans-Black.ttf",
      weight: "900",
      style: "normal",
    },
    
  ],
  variable: "--font-work-sans",
});

export const metadata: Metadata = {
  title: "Yc Directory",
  description: "Pitch Vote Grow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${workSans.variable} antialiased`}
      >
        {children}
        <Toaster></Toaster>
      </body>
    </html>
  );
}
