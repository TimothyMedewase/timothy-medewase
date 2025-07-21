import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import React from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Timothy Medewase | Software Engineer & ML Engineer",
  description:
    "Experienced Software Engineer specializing in Machine Learning and AI.",
  keywords:
    "Software Engineer, Machine Learning Engineer, AI, React Developer, Timothy Medewase",
  icons: {
    icon: "/icon.ico",
  },
  verification: {
    google: "1qcDQWJ8xT3SG7Dpr78XCfBmOa3Ydl3yIZCyTsvA0wg",
  },
  openGraph: {
    title: "Timothy Medewase | Software Engineer & ML Engineer",
    description:
      "Experienced Software Engineer specializing in Machine Learning and AI.",
    url: "https://timothy-medewase.com/",
    siteName: "Timothy Medewase",
    images: [
      {
        url: "https://timothy-medewase.com/social-preview.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Timothy Medewase | Software Engineer & ML Engineer",
    description:
      "Experienced Software Engineer specializing in Machine Learning and AI.",
    images: ["https://timothy-medewase.com/social-preview.png"],
  },
  alternates: {
    canonical: "https://timothy-medewase.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://cdn.vercel-insights.com" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Timothy Medewase",
              jobTitle: "Software Engineer / Machine Learning Engineer",
              url: "https://timothy-medewase.com",
              sameAs: [
                "https://linkedin.com/in/timothy-medewase",
                "https://github.com/timothy-medewase",
              ],
              description:
                "Experienced Software Engineer specializing in Machine Learning and AI.",
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://timothy-medewase.com",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Portfolio",
                  item: "https://timothy-medewase.vercel.com",
                },
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.className} bg-black text-white min-h-screen`}>
        <Navbar />
        {children}
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
