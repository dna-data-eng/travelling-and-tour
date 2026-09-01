import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/site-config";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${siteConfig.name} | It's Your Time To Travel`,
  description:
    "Akwantufuo Travel Consult is a travel and study-abroad consultancy in Agona Swedru, Central Region, Ghana — flight booking, visa support, study abroad placement and destination guidance.",
  keywords: [
    "travel agency Agona Swedru",
    "Akwantufuo Travel Consult",
    "study abroad Ghana",
    "visa support Ghana",
    "flight booking Central Region",
  ],
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    title: `${siteConfig.name} | It's Your Time To Travel`,
    description:
      "Flight booking, visa support, study & work abroad placement, and destination guidance from Agona Swedru, Ghana.",
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_GH",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
