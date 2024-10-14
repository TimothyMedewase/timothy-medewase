import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import React from "react";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Timothy Medewase - Software Engineer",
  description: "Software Engineer/ Machine Learning Engineer",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Timothy Medewase - Software Engineer (ML)</title>

        <meta
          name="google-site-verification"
          content="1qcDQWJ8xT3SG7Dpr78XCfBmOa3Ydl3yIZCyTsvA0wg"
        />
        <meta
          property="og:title"
          content="Timothy Medewase - Software Engineer (AI/ML) "
        />
        <meta property="og:type" content="website" />

        <meta
          property="og:url"
          content="https://timothy-medewase.vercel.app/"
        />

        <meta
          property="og:description"
          content="Software Engineer (ML), CS + Math."
        />
        <meta property="og:site_name" content="Timothy Medewase" />

        <meta name="robots" content="index, follow"></meta>
        <meta name="robots" content="all"></meta>
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Analytics />
        </ThemeProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
