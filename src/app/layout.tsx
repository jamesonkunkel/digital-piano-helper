import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CurrencyProvider } from "@/context/CurrencyContext";
import { ComparisonProvider } from "@/context/ComparisonContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Digital Piano Finder | Compare & Find Your Perfect Piano",
  description:
    "Find and compare digital pianos based on your skill level, budget, and preferences. Expert recommendations and detailed comparisons of top brands.",
  keywords:
    "digital piano, piano comparison, piano finder, digital piano reviews, piano buying guide",
  openGraph: {
    title: "Digital Piano Finder | Compare & Find Your Perfect Piano",
    description:
      "Find and compare digital pianos based on your skill level, budget, and preferences.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.jpg", // You'll need to add this image to your public folder
        width: 1200,
        height: 630,
        alt: "Digital Piano Finder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Piano Finder | Compare & Find Your Perfect Piano",
    description:
      "Find and compare digital pianos based on your skill level, budget, and preferences.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CurrencyProvider>
          <ComparisonProvider>{children}</ComparisonProvider>
        </CurrencyProvider>
      </body>
    </html>
  );
}
