import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Toaster } from "@/components/ui/toaster"
import { CursorEffect } from "@/components/cursor-effect"
import { Suspense } from "react"
import { FloatingChatbot } from "@/components/floating-chatbot"

import "./globals.css"

export const metadata: Metadata = {
  title: "Shivam Sonawane",
  description:
    "Master's student at Arizona State University, passionate about Full-Stack Development, AI/ML, and Cloud Computing. 3x Hackathon Winner. Explore my projects, experience, and technical expertise.",
  keywords: [
    "Full-Stack Developer",
    "Software Engineer",
    "Computer Science",
    "AI Engineer",
    "Machine Learning",
    "AWS",
    "React",
    "Node.js",
    "Python",
    "TypeScript",
    "JavaScript",
    "Spring Boot",
    "MongoDB",
    "PostgreSQL",
    "LangChain",
    "Cloud Computing",
    "Serverless Architecture",
  ],
  authors: [{ name: "Shivam Sonawane", url: "https://linkedin.com/in/shivam-sonawane" }],
  creator: "Shivam Sonawane",
  icons: {
    icon: [
      { url: "/images/SS_logo.png", sizes: "64x64", type: "image/png" },
      { url: "/images/SS_logo.png", sizes: "32x32", type: "image/png" },
      { url: "/images/SS_logo.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/images/SS_logo.png",
    apple: "/images/SS_logo.png",
  },
  openGraph: {
    title: "Shivam Sonawane | Full-Stack Developer & AI Engineer",
    description:
      "Master's student at Arizona State University. 3x Hackathon Winner. Building scalable full-stack applications and AI-powered solutions.",
    url: "https://shivamsonawane.com",
    siteName: "Shivam Sonawane Portfolio",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/shivam-portrait.png",
        width: 500,
        height: 500,
        alt: "Shivam Sonawane - Full-Stack Developer & AI Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shivam Sonawane | Full-Stack Developer & AI Engineer",
    description:
      "Master's student at Arizona State University. 3x Hackathon Winner building scalable applications with React, Node.js, AWS, and AI/ML.",
    images: ["/images/shivam-portrait.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Add your Google Search Console verification code
  },
  generator: "Next.js",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/images/sslogo.png" />
        <link rel="apple-touch-icon" href="/images/sslogo.png" />
        <meta name="theme-color" content="#252525" />
        <meta name="msapplication-navbutton-color" content="#252525" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body
        className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}
        style={{ backgroundColor: "#252525" }}
      >
        <CursorEffect />
        <Suspense fallback={null}>
          {children}
          <FloatingChatbot/>
          <Toaster />
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
