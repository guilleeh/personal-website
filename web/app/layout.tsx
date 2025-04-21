import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Guillermo Hernandez Flores | Senior Full-Stack Engineer & AI Solutions Developer",
  description:
    "Senior Full-Stack Engineer specializing in scalable web applications and AI integration. UC Irvine CS graduate with expertise in Next.js, TypeScript, Python, and modern cloud technologies.",
  keywords:
    "Full-Stack Engineer, Web Developer, AI Solutions, Next.js, TypeScript, Python, React, AWS, Software Engineer, Guillermo Hernandez",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hernandezguillermo.com",
    siteName: "Guillermo Hernandez Flores Portfolio",
    title: "Guillermo Hernandez Flores | Senior Full-Stack Engineer",
    description:
      "Senior Full-Stack Engineer specializing in scalable web applications and AI integration. Expertise in Next.js, TypeScript, Python, and modern cloud technologies.",
    images: [
      {
        url: "/img/me.jpg",
        width: 1200,
        height: 630,
        alt: "Guillermo Hernandez",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Guillermo Hernandez Flores | Senior Full-Stack Engineer",
    description:
      "Senior Full-Stack Engineer specializing in scalable web applications and AI integration",
    images: ["/img/me.jpg"],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
