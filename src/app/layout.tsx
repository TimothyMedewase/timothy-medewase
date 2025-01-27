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
  title: "Timothy Medewase | Software Engineer & ML Engineer",
  description:
    "Experienced Software Engineer specializing in Machine Learning and AI.",
  icons: {
    icon: "/icon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
        <title>Timothy Medewase | Software Engineer & ML Engineer</title>

        <meta
          name="description"
          content="Experienced Software Engineer specializing in Machine Learning and AI."
        />
        <meta
          name="keywords"
          content="Software Engineer, Machine Learning Engineer, AI, React Developer, Timothy Medewase"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta
          name="google-site-verification"
          content="1qcDQWJ8xT3SG7Dpr78XCfBmOa3Ydl3yIZCyTsvA0wg"
        />
        <meta
          property="og:title"
          content="Timothy Medewase | Software Engineer & ML Engineer"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://timothy-medewase.vercel.app/"
        />
        <meta
          property="og:description"
          content="Aspiring Software Engineer specializing in Machine Learning and AI."
        />
        <meta
          property="og:image"
          content="https://timothy-medewase.vercel.app/social-preview.png"
        />
        <meta property="og:site_name" content="Timothy Medewase" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Timothy Medewase | Software Engineer & ML Engineer"
        />
        <meta
          name="twitter:description"
          content="Aspiring Software Engineer specializing in Machine Learning and AI."
        />
        <meta
          name="twitter:image"
          content="https://timothy-medewase.vercel.app/social-preview.png"
        />
        <link rel="canonical" href="https://timothy-medewase.vercel.app" />
        <link rel="canonical" href="https://medewaset.vercel.app" />
        <link rel="canonical" href="https://timothy-medewase.com" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://cdn.vercel-insights.com" />
        <link rel="icon" href="/icon.ico" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Timothy Medewase",
            jobTitle: "Software Engineer / Machine Learning Engineer",
            url: "https://timothy-medewase.vercel.app",
            sameAs: [
              "https://linkedin.com/in/timothy-medewase",
              "https://github.com/timothy-medewase",
            ],
            description:
              "Aspiring Software Engineer specializing in Machine Learning and AI.",
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://timothy-medewase.vercel.app",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Portfolio",
                item: "https://timothy-medewase.vercel.app/portfolio",
              },
            ],
          })}
        </script>
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
