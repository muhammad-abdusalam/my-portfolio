"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
  type Dispatch,
  type SetStateAction,
} from "react";

type Language = "en" | "ar";

type LanguageContextType = {
  language: Language;
  setLanguage: Dispatch<SetStateAction<Language>>;
};

type LanguageProviderProps = {
  children: ReactNode;
  initialLanguage: Language;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({
  children,
  initialLanguage,
}: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>(initialLanguage);

  useEffect(() => {
    document.cookie = `language=${language}; Path=/; Max-Age=31536000; SameSite=Lax`;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);

  if (context === null) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }

  return context;
}
