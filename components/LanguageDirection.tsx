"use client";

import { useEffect } from "react";
import { useLanguage } from "@/components/LanguageProvider";

export default function LanguageDirection() {
  const { language } = useLanguage();

  useEffect(() => {
    const root = document.documentElement;
    const isArabic = language === "ar";

    root.lang = isArabic ? "ar" : "en";
    root.dir = isArabic ? "rtl" : "ltr";
  }, [language]);

  return null;
}
