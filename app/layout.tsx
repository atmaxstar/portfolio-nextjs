import type React from "react"
import type { Metadata } from "next"
import { Outfit, Caveat } from "next/font/google"
import "./globals.css"

// Outfitフォントの設定
const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700"],
})

// Caveatフォントの設定
const caveat = Caveat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-caveat",
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Atsutoshi Honda - Portfolio",
  description: "Atsutoshi Honda のポートフォリオサイト",
  generator: 'v0.dev',
  icons: {
    icon: '/icon.png',
    apple: '/icon.png',
  },
  openGraph: {
    title: "Atsutoshi Honda - Portfolio",
    description: "Atsutoshi Honda のポートフォリオサイト",
    type: "website",
    locale: "ja_JP",
    images: [
      {
        url: "/icon.png",
        width: 1200,
        height: 630,
        alt: "Atsutoshi Honda Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Atsutoshi Honda - Portfolio",
    description: "Atsutoshi Honda のポートフォリオサイト",
    images: ["/icon.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja" className={`${outfit.variable} ${caveat.variable}`}>
      <body>{children}</body>
    </html>
  )
}
