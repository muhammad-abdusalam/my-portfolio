"use client";

import { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";
import { useTheme } from "@/components/ThemeProvider";

export default function Navbar() {
  const { language, setLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isEnglish = language === "en";

  const links = [
    { href: "#about", en: "About", ar: "من أنا" },
    { href: "#skills", en: "Skills", ar: "مهاراتي" },
    { href: "#projects", en: "Projects", ar: "مشاريعي" },
    { href: "#contact", en: "Contact", ar: "تواصل معي" },
  ];

  const controlClass =
    "inline-flex min-h-10 items-center justify-center rounded-lg border border-border bg-surface px-3 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary hover:bg-surface-secondary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary motion-reduce:transition-none";

  function closeMenu() {
    setIsMenuOpen(false);
  }

  function handleLogoClick() {
    closeMenu();

    if (window.location.pathname === "/") {
      window.scrollTo({
        top: 0,
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "auto"
          : "smooth",
      });
    }
  }

  function handleLanguageChange() {
    setLanguage(isEnglish ? "ar" : "en");
    closeMenu();
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur">
      <nav
        aria-label={isEnglish ? "Main navigation" : "التنقل الرئيسي"}
        className="mx-auto flex min-h-20 w-full max-w-7xl items-center justify-between gap-3 px-4 sm:gap-4 sm:px-6 lg:px-8"
      >
        <Link
          href="/"
          onClick={handleLogoClick}
          aria-label={
            isEnglish ? "Muhammad Adam — Home" : "محمد آدم — الصفحة الرئيسية"
          }
          className="flex min-w-0 shrink items-center gap-2 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary sm:gap-3"
        >
          <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary text-sm font-bold text-on-primary sm:size-11">
            MA
          </span>

          <span className="truncate text-sm font-semibold tracking-tight text-foreground sm:text-lg">
            {isEnglish ? "Muhammad Adam" : "محمد آدم"}
          </span>
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md py-2 text-sm font-medium text-muted transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary motion-reduce:transition-none"
            >
              {isEnglish ? link.en : link.ar}
            </a>
          ))}
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            onClick={handleLanguageChange}
            aria-label={isEnglish ? "Switch to Arabic" : "Switch to English"}
            className={controlClass}
          >
            {isEnglish ? "AR" : "EN"}
          </button>

          <button
            type="button"
            onClick={toggleTheme}
            aria-label={
              theme === "light"
                ? isEnglish
                  ? "Switch to dark mode"
                  : "التبديل إلى الوضع الداكن"
                : isEnglish
                  ? "Switch to light mode"
                  : "التبديل إلى الوضع الفاتح"
            }
            className={controlClass}
          >
            <span aria-hidden="true" className="me-2">
              {theme === "light" ? "☾" : "☀"}
            </span>
            <span className="hidden sm:inline">
              {theme === "light"
                ? isEnglish
                  ? "Dark"
                  : "داكن"
                : isEnglish
                  ? "Light"
                  : "فاتح"}
            </span>
          </button>

          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={
              isMenuOpen
                ? isEnglish
                  ? "Close navigation menu"
                  : "إغلاق قائمة التنقل"
                : isEnglish
                  ? "Open navigation menu"
                  : "فتح قائمة التنقل"
            }
            className={`${controlClass} md:hidden`}
          >
            {isMenuOpen ? (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                aria-hidden="true"
                className="size-5"
              >
                <path d="m18 6-12 12M6 6l12 12" />
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                aria-hidden="true"
                className="size-5"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      <div
        id="mobile-navigation"
        hidden={!isMenuOpen}
        className="border-t border-border bg-background px-4 py-3 md:hidden sm:px-6"
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-1">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="rounded-lg px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-surface-secondary hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary motion-reduce:transition-none"
            >
              {isEnglish ? link.en : link.ar}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
