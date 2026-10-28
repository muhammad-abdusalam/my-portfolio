import type { Metadata, Viewport } from "next";
import { cookies } from "next/headers";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { LanguageProvider } from "@/components/LanguageProvider";
import LanguageDirection from "@/components/LanguageDirection";
import { ThemeProvider } from "@/components/ThemeProvider";

export const instant = false;

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
    default: "Muhammad Adam | Frontend Developer",
    template: "%s | Muhammad Adam",
  },
  description:
    "Muhammad Adam is a frontend developer building modern, accessible, and responsive web experiences.",
  applicationName: "Muhammad Adam Portfolio",
  authors: [{ name: "Muhammad Adam" }],
  creator: "Muhammad Adam",
  openGraph: {
    type: "website",
    title: "Muhammad Adam | Frontend Developer",
    description:
      "Explore Muhammad Adam's portfolio, projects, and Frontend development skills.",
    siteName: "Muhammad Adam Portfolio",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Adam | Frontend Developer",
    description:
      "Explore Muhammad Adam's portfolio, projects, and Frontend development skills.",
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

export default async function RootLayout({ children }: RootLayoutProps) {
  const cookieStore = await cookies();

  const savedTheme = cookieStore.get("theme")?.value;
  const savedLanguage = cookieStore.get("language")?.value;

  const initialTheme =
    savedTheme === "dark" || savedTheme === "light" ? savedTheme : "light";

  const initialLanguage =
    savedLanguage === "ar" || savedLanguage === "en" ? savedLanguage : "en";

  return (
    <html
      lang={initialLanguage}
      dir={initialLanguage === "ar" ? "rtl" : "ltr"}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased ${initialTheme === "dark" ? "dark" : ""}`}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col bg-background font-sans text-foreground">
        <ThemeProvider initialTheme={initialTheme}>
          <LanguageProvider initialLanguage={initialLanguage}>
            <LanguageDirection />
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
