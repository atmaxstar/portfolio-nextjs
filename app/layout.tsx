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
    generator: 'v0.dev'
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
