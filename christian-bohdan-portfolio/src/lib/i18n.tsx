"use client";

import React, { createContext, useCallback, useContext, useEffect, useState } from "react";
import { content, type Locale, type SiteContent } from "@/lib/site-content";

interface LocaleContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  t: SiteContent;
}

const LocaleContext = createContext<LocaleContextValue | null>(null);

const STORAGE_KEY = "cb-locale";

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("de");

  // Restore saved preference after hydration (avoids SSR mismatch).
  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      try {
        const saved = window.localStorage.getItem(STORAGE_KEY);
        if (saved === "de" || saved === "en") setLocaleState(saved);
      } catch {
        /* storage unavailable — keep default */
      }
    });
    return () => window.cancelAnimationFrame(frame);
  }, []);

  // Keep the document language in sync (accessibility + SEO).
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
  }, []);

  const toggleLocale = useCallback(() => {
    setLocaleState((prev) => {
      const next: Locale = prev === "de" ? "en" : "de";
      try {
        window.localStorage.setItem(STORAGE_KEY, next);
      } catch {
        /* ignore */
      }
      return next;
    });
  }, []);

  const value = React.useMemo<LocaleContextValue>(
    () => ({ locale, setLocale, toggleLocale, t: content[locale] }),
    [locale, setLocale, toggleLocale]
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale(): LocaleContextValue {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within LocaleProvider");
  return ctx;
}
