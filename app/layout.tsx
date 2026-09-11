import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { LenisProvider } from "@/components/lenis-provider"
import ClickSpark from "@/components/click-spark"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
})

export const metadata: Metadata = {
  title: "XOWAD — The Taste of Origin | TAPU Tea from Assam",
  description: "XOWAD is a premium house of brands rooted in origin. Discover TAPU — a Signature Assam Blend crafted from the finest Assam CTC teas. Close your eyes. Feel Assam.",
  keywords: ["XOWAD", "TAPU", "Assam tea", "premium tea", "CTC tea", "Indian tea brand", "origin tea", "Assam blend"],
}

export const viewport: Viewport = {
  themeColor: "#2D5016",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfairDisplay.variable} font-sans antialiased`}>
        <ClickSpark
          sparkColor="#B8963E"
          sparkSize={10}
          sparkRadius={18}
          sparkCount={6}
          duration={500}
          easing="ease-out"
        >
          <LenisProvider>{children}</LenisProvider>
        </ClickSpark>
        <Analytics />
      </body>
    </html>
  )
}
