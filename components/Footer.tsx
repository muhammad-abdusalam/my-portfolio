"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";

export default function Footer() {
  const { language } = useLanguage();
  const isArabic = language === "ar";
  const [currentYear, setCurrentYear] = useState(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="border-t border-border bg-background px-5 py-6 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-4 sm:flex-row">
        <p className="text-center text-sm leading-6 text-muted">
          {isArabic
            ? `© ${currentYear} محمد آدم، جميع الحقوق محفوظة.`
            : `© ${currentYear} Muhammad Adam, All rights reserved.`}
        </p>

        <nav
          aria-label={isArabic ? "روابط التواصل الاجتماعي" : "Social links"}
          className="flex items-center gap-5"
        >
          <a
            href="https://github.com/muhammad-abdusalam"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="rounded-md text-muted transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              className="h-5 w-5"
            >
              <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.1c-3.1.68-3.76-1.32-3.76-1.32-.5-1.3-1.24-1.65-1.24-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.72 1.16 1.72 1.16 1 1.72 2.63 1.22 3.27.93.1-.72.4-1.22.72-1.5-2.48-.28-5.09-1.24-5.09-5.5 0-1.22.44-2.22 1.16-3-.12-.28-.5-1.42.1-2.96 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.11-1.44 3.05-1.14 3.05-1.14.6 1.54.22 2.68.1 2.96.72.78 1.16 1.78 1.16 3 0 4.27-2.62 5.21-5.11 5.49.4.35.76 1.02.76 2.06v3.12c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
            </svg>
          </a>

          <a
            href="https://www.linkedin.com/in/muhammad-abdusalam/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="rounded-md text-muted transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              className="h-5 w-5"
            >
              <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.45H4.96V9.1h2.97v9.35ZM6.45 7.82a1.72 1.72 0 1 1 0-3.44 1.72 1.72 0 0 1 0 3.44Zm12 10.63h-2.97v-4.55c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.63H9.28V9.1h2.85v1.28h.04c.4-.74 1.37-1.52 2.81-1.52 3 0 3.56 1.97 3.56 4.53v5.06Z" />
            </svg>
          </a>
        </nav>
      </div>
    </footer>
  );
}
