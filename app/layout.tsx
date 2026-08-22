import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import Preloader from "@/components/Preloader";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  style: ["normal", "italic"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const siteUrl = "https://maayluxeevents.com"; // TODO: replace with production domain

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "MAAY LUXE EVENTS | Luxury Event Planning, Design & Styling",
  description:
    "Maay Luxe Events creates beautifully curated celebrations through thoughtful planning, distinctive design, and seamless execution in Lagos, Nigeria.",
  keywords: [
    "luxury event planner Lagos",
    "wedding planner Lagos",
    "event design and styling Nigeria",
    "Maay Luxe Events",
  ],
  openGraph: {
    title: "MAAY LUXE EVENTS | Luxury Event Planning, Design & Styling",
    description:
      "Creating Moments that Define Memories — luxury event design, planning & styling in Lagos, Nigeria.",
    url: siteUrl,
    siteName: "Maay Luxe Events",
    // TODO: replace with a real Open Graph image at /public/assets/og-image.jpg (1200x630)
    images: ["/assets/og-image.jpg"],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MAAY LUXE EVENTS | Luxury Event Planning, Design & Styling",
    description: "Creating Moments that Define Memories.",
    images: ["/assets/og-image.jpg"],
  },
  icons: {
    icon: "/assets/favicon.ico",
    apple: "/assets/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${manrope.variable}`}>
      <body className="font-body bg-ivory text-ink antialiased">
        <Preloader />
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
