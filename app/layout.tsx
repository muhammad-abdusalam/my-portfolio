import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { LanguageProvider } from "@/components/LanguageProvider";
import LanguageDirection from "@/components/LanguageDirection";
import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  ? new URL(process.env.NEXT_PUBLIC_SITE_URL)
  : undefined;

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: "Muhammad Adam | Full-Stack Developer",
    template: "%s | Muhammad Adam",
  },
  description:
    "Muhammad Adam is a full-stack developer building modern, accessible, and responsive web experiences.",
  applicationName: "Muhammad Adam Portfolio",
  authors: [{ name: "Muhammad Adam" }],
  creator: "Muhammad Adam",
  openGraph: {
    type: "website",
    title: "Muhammad Adam | Full-Stack Developer",
    description:
      "Explore Muhammad Adam's portfolio, projects, and full-stack development skills.",
    siteName: "Muhammad Adam Portfolio",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Adam | Full-Stack Developer",
    description:
      "Explore Muhammad Adam's portfolio, projects, and full-stack development skills.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#06111f" },
  ],
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      dir="ltr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col bg-background font-sans text-foreground">
        <ThemeProvider>
          <LanguageProvider>
            <LanguageDirection />
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
