import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ryan The Developer",
  description: "Web Development Blog, Tools, Tutorials, and more.  An amazing resource for web developers of all skill levels.",
  keywords: [
    "web development",
    "web developer",
    "web development blog",
    "web development tutorials",
    "web development tools",
    "web development resources",
    "web development tips",
    "web development tricks",
    "web development techniques",
    "web development how to",
    "web development how-to",
    "web development howto",
    "web development how tos",
    "web development how-tos",
    "web development howtos",
    "web development guide",
    "web development guides",
    "web development course",
    "web development courses",
    "web development tutorial",
    "web development tutorials",
    "web development tool",
    "web development tools",
    "web development resource",
    "web development resources",
    "web development tip",
    "web development tips",
    "web development trick",
    "web development tricks",
    "web development technique",
    "web development techniques",
    "web development how to",
    "web development how-to",
    "web development howto",
    "web development how tos",
    "web development how-tos",
    "web development howtos",
    "web development guide",
    "web development guides",
    "web development course",
    "web development courses",
    "web development tutorial",
    "web development tutorials",
    "web development tool",
    "web development tools",
    "web development resource",
    "web development resources",
    "web development tip",
    "web development tips",
    "web development trick",
    "web development tricks",
    "web development technique",
    "web development techniques",
    "web development how to",
    "web development how-to",
    "web development howto",
    "web development how tos",
    "web development how-tos",
    "web development howtos",
    "web development guide",
    "web development guides",
    "web development course",
    "web development courses",
    "web development tutorial",
    "web development tutorials",
    "web development tool",
    "web development tools",
    "web development resource",
    "web development resources",
    "web development tip",
    "web development tips",
    "web development trick",
    "web development tricks",
    "web development technique",
    "web development techniques",
    "web development how to",
    "web development how-to",
    "web development howto",
    "web development how to"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <GoogleAnalytics gaId="G-ZMKLTV0RHT" />
      </body>
    </html>
  );
}
