import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Space_Grotesk } from "next/font/google";
import { TooltipProvider } from "@/components/ui/tooltip";
import Script from "next/script";
import { Syne } from "next/font/google";
import CustomCursor from "@/components/CustomCursor";
import { GeistPixelSquare, GeistPixelGrid, GeistPixelCircle, GeistPixelTriangle, GeistPixelLine } from 'geist/font/pixel';
import "./globals.css";

const siteUrl = new URL("https://arghya-pal.vercel.app");
const socialImageUrl = new URL("/opengraph-image", siteUrl).toString();

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-syne",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: "Arghya Pal - Full Stack Developer ",
  description: "Arghya's Portfolio site.",
  icons: {
    icon: "/official/logo.png",
  },
  keywords: [
    "Full Stack Developer",
    "Next.js Portfolio",
    "React Developer",
    "Tailwind CSS",
    "Arghya Pal",
  ],
  openGraph: {
    title: "Arghya's Portfolio",
    description: "Arghya's Portfolio site.",
    url: "https://arghya-pal.vercel.app",
    siteName: "Arghya's Portfolio site",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    // Inherit the generated Open Graph image and its versioned URL.
    card: "summary_large_image",
    site: "@arghyapal07",
    creator: "@arghyapal07",
    title: "Arghya's Portfolio",
    description: "Full-Stack Dev.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <Script
          data-website-id="dfid_wVN5yIAv7uo506eTbSUQ5"
          data-domain="https://arghya-pal.vercel.app"
          src="https://datafa.st/js/script.js"
          strategy="afterInteractive"
        />
        <link rel="canonical" href="https://arghya-pal.vercel.app" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Arghya Pal",
              url: "https://arghya-pal.vercel.app",
              sameAs: [
                "https://github.com/ArghyaPal-07",
                "https://www.linkedin.com/in/arghya-pal-772049322/",
                "https://x.com/arghyapal07",
              ],
              jobTitle: "Full Stack Developer",
              image: socialImageUrl,
            }),
          }}
        />
      </head>

      <link rel="icon" href="/logo.png" />

      <body className={` ${geistSans.variable} ${geistMono.variable} ${GeistPixelSquare.variable} ${spaceGrotesk.variable} ${syne.variable} antialiased`}>
        <TooltipProvider>
          {children}
        </TooltipProvider>
        <Analytics />
        <CustomCursor />
      </body>
    </html>
  );
}
