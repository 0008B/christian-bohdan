"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useLocale } from "@/lib/i18n";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const { locale, setLocale, t } = useLocale();
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  const links = [
    { id: "about", label: t.nav.about },
    { id: "skills", label: t.nav.skills },
    { id: "labs", label: t.nav.labs },
    { id: "timeline", label: t.nav.timeline },
    { id: "certs", label: t.nav.certs },
    { id: "roadmap", label: t.nav.roadmap },
    { id: "letter", label: t.nav.letter },
    { id: "contact", label: t.nav.contact },
  ];

  // Anchors only resolve on the landing page; from subpages link to /#section.
  const hrefFor = (id: string) => (isHome ? `#${id}` : `/#${id}`);

  // Theme toggle: the .dark class on <html> is the source of truth
  // (set pre-paint by the inline script in the root layout).
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setDark(document.documentElement.classList.contains("dark"));
    });
    return () => window.cancelAnimationFrame(frame);
  }, []);

  // Until the visitor makes an explicit choice, follow the OS setting live
  // (e.g. automatic light/dark switching on the system).
  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = (event: MediaQueryListEvent) => {
      let stored: string | null = null;
      try {
        stored = window.localStorage.getItem("cb-theme");
      } catch {
        /* storage unavailable — treat as "no explicit choice" */
      }
      if (stored) return;
      document.documentElement.classList.toggle("dark", event.matches);
      setDark(event.matches);
    };
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      window.localStorage.setItem("cb-theme", next ? "dark" : "light");
    } catch {
      /* storage unavailable — theme still applies for this session */
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/70 bg-header/85 backdrop-blur-md">
      <nav className="mx-auto max-w-6xl px-4 sm:px-6" aria-label="Main navigation">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Brand */}
          <a href={isHome ? "#top" : "/"} className="flex items-center gap-3 group" aria-label="Christian Bohdan – zum Seitenanfang">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-brand/50 bg-panel font-mono text-sm font-bold text-brand transition-colors group-hover:bg-brand group-hover:text-on-brand">
              CB
            </span>
            <span className="hidden sm:block text-sm font-semibold tracking-wide">
              Christian Bohdan
              <span className="ml-2 hidden 2xl:inline font-mono text-xs font-normal text-muted-foreground">
                {"// "}{t.hero.title}
              </span>
            </span>
          </a>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <li key={l.id}>
                <a
                  href={hrefFor(l.id)}
                  className="whitespace-nowrap rounded-md px-2.5 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground hover:bg-accent"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            {/* Theme toggle (light default, dark on request) */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              aria-pressed={dark}
              aria-label={dark ? "Zu hellem Design wechseln" : "Zu dunklem Design wechseln"}
              className="text-muted-foreground hover:text-foreground"
            >
              <Sun className="hidden h-5 w-5 dark:block" aria-hidden="true" />
              <Moon className="block h-5 w-5 dark:hidden" aria-hidden="true" />
            </Button>

            {/* Language switch */}
            <div
              className="flex items-center rounded-lg border border-border bg-panel p-0.5 font-mono text-xs"
              role="group"
              aria-label="Sprache / Language"
            >
              {(["de", "en"] as const).map((lang) => (
                <button
                  key={lang}
                  type="button"
                  onClick={() => setLocale(lang)}
                  aria-pressed={locale === lang}
                  className={`rounded-md px-2.5 py-1.5 uppercase transition-colors ${
                    locale === lang
                      ? "bg-brand text-on-brand font-bold"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>

            {/* Mobile menu toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-muted-foreground hover:text-foreground"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Menü schließen" : "Menü öffnen"}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <ul id="mobile-menu" className="lg:hidden pb-4 grid grid-cols-2 gap-1">
            {links.map((l) => (
              <li key={l.id}>
                <a
                  href={hrefFor(l.id)}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:text-foreground hover:bg-accent"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
}
