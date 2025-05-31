import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Cybersecurity Portfolio | Penetration Testing & Security Research",
  description:
    "Professional portfolio of a Certified Ethical Hacker and cybersecurity specialist focusing on penetration testing and security research.",
  keywords: ["cybersecurity", "penetration testing", "ethical hacking", "CEH", "security research"],
  generator: 'v0.dev',
  icons: {
    icon: [
      { url: "/icon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/svg+xml" },
    ],
  },
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
