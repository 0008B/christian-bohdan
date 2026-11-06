"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import { SectionHeading } from "@/components/site/section-heading";

export function CoverLetter() {
  const { t } = useLocale();

  return (
    <section id="letter" className="scroll-mt-20 border-t border-border/60" aria-labelledby="letter-title">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 md:py-24">
        <SectionHeading label={t.letter.label} title={t.letter.title} />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5 }}
          className="mt-10 mx-auto max-w-3xl rounded-xl border border-border bg-card p-6 sm:p-10 shadow-[0_8px_40px_rgba(0,144,255,0.08)]"
        >
          <p className="leading-relaxed">{t.letter.salutation}</p>
          <div className="mt-4 space-y-4">
            {t.letter.paragraphs.map((p, i) => (
              <p key={i} className="leading-relaxed text-muted-foreground">
                {p}
              </p>
            ))}
          </div>
          <div className="mt-8">
            <p className="text-muted-foreground">{t.letter.closing}</p>
            <p className="mt-2 text-xl font-semibold text-link" style={{ fontFamily: "var(--font-geist-mono)" }}>
              {t.letter.signature}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
