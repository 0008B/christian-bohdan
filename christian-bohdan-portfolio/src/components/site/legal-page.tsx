"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useLocale } from "@/lib/i18n";
import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";

/**
 * Shared layout for the standalone legal pages (/impressum, /datenschutz),
 * so the landing page stays clean. The legal content itself stays in German
 * (required for a German site owner); in English mode a short note explains this.
 */
export function LegalPage({ doc }: { doc: "impressum" | "datenschutz" }) {
  const { t } = useLocale();
  const isImpressum = doc === "impressum";
  const page = isImpressum ? t.impressum : t.datenschutz;

  return (
    <div id="top" className="flex min-h-screen flex-col bg-background text-foreground">
      <Navbar />
      <main className="flex-1">
        <article className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6 md:py-16" aria-labelledby="legal-title">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-md font-mono text-sm text-link transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            {t.legalPage.backLabel}
          </Link>

          <p className="mb-3 mt-10 flex items-center gap-2 font-mono text-sm text-link">
            <span className="text-brand">$</span>
            <span>./{doc}</span>
            <span className="h-px max-w-24 flex-1 bg-border" aria-hidden="true" />
          </p>
          <h1 id="legal-title" className="break-words text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {page.title}
          </h1>

          {page.langNote ? (
            <p className="mt-6 text-sm italic text-muted-foreground">{page.langNote}</p>
          ) : null}

          <div className="mt-8 space-y-8 text-sm leading-relaxed text-muted-foreground">
            {page.blocks.map((block) => (
              <section key={block.heading}>
                <h2 className="font-semibold text-foreground">{block.heading}</h2>
                {block.paragraphs?.map((p, i) => (
                  <p key={i} className="mt-2">
                    {p}
                  </p>
                ))}
                {block.lines?.length ? (
                  <ul className="mt-2 space-y-1">
                    {block.lines.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
          </div>

          <div className="mt-12 border-t border-border/60 pt-6">
            <Link
              href={isImpressum ? "/datenschutz" : "/impressum"}
              className="font-mono text-sm text-link transition-colors hover:text-foreground"
            >
              {isImpressum ? t.legalPage.viewDatenschutz : t.legalPage.viewImpressum}
            </Link>
            <p className="mt-3 font-mono text-xs text-muted-foreground">{t.legalPage.updated}</p>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
