"use client";

import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { useLocale } from "@/lib/i18n";

export function Footer() {
  const { t } = useLocale();

  return (
    <footer className="mt-auto border-t border-border/60 bg-footer">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-6 sm:flex-row sm:px-6">
        <p className="text-center font-mono text-xs text-muted-foreground">{t.footer.rights}</p>
        <div className="flex items-center gap-4">
          <Link
            href="/impressum"
            className="font-mono text-xs text-muted-foreground transition-colors hover:text-link"
          >
            {t.footer.impressumLink}
          </Link>
          <Link
            href="/datenschutz"
            className="font-mono text-xs text-muted-foreground transition-colors hover:text-link"
          >
            {t.footer.datenschutzLink}
          </Link>
          <a
            href="#top"
            aria-label="Back to top"
            className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-brand/50 hover:text-link"
          >
            <ArrowUp className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
