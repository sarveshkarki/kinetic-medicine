import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/footer";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Kinetic Medicine - NDIS Exercise Physiology | Expert Care for NDIS Participants",
  description:
    "Leading NDIS exercise physiology services in Sydney. Helping NDIS participants achieve their health and mobility goals through personalized exercise programs. NDIS registered provider.",
  keywords:
    "exercise physiologist, exercise physiology near me, ndis exercise physiologist, exercise physiology ndis, ndis exercise physiology, ndis exercise physiology near me, psychosocial support, sport and exercise physiology, sports exercise physiologist, sports physiologist, allied health practitioner, manage chronic pain",
  openGraph: {
    title: "Kinetic Medicine - NDIS Exercise Physiology",
    description:
      "Expert exercise physiology services for NDIS participants. Improve your mobility, strength, and independence with personalized programs.",
    type: "website",
    locale: "en_AU",
  },
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={inter.className}
        style={{ fontFamily: "Roboto, sans-serif" }}
      >
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
