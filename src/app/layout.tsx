import type { Metadata, Viewport } from "next";
import { Noto_Sans_Armenian, Noto_Serif_Armenian } from "next/font/google";
import "./globals.css";

const sansArmenian = Noto_Sans_Armenian({
  subsets: ["armenian"],
  weight: ["400", "700", "900"],
  variable: "--font-sans-arm",
  display: "swap",
});

const serifArmenian = Noto_Serif_Armenian({
  subsets: ["armenian"],
  weight: ["700", "900"],
  variable: "--font-serif-arm",
  display: "swap",
});

const PUBLIC_BASE_URL = process.env.NEXT_PUBLIC_APP_URL?.trim().replace(/\/+$/, "");

export const metadata: Metadata = {
  metadataBase: PUBLIC_BASE_URL ? new URL(PUBLIC_BASE_URL) : undefined,
  title: "ՎԱՂԸ ԳԱԼԻ՞Ս ԵՍ 🇦🇲 · Մայիսի 28",
  description: "Հայաստանի Հանրապետության Օրվա ամենախելագար արարողակարգը",
  openGraph: {
    title: "ՎԱՂԸ ԳԱԼԻ՞Ս ԵՍ 🇦🇲",
    description: "Ստուգիր քո հայրենասիրությունը. ՉԷ կոճակը փորձում է փախչել քեզնից",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: "#08070b",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="hy"
      suppressHydrationWarning
      className={`${sansArmenian.variable} ${serifArmenian.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
