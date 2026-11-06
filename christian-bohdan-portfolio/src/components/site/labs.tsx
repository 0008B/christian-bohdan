"use client";

import { motion } from "framer-motion";
import { Info } from "lucide-react";
import { useLocale } from "@/lib/i18n";
import { SectionHeading } from "@/components/site/section-heading";

export function Labs() {
  const { t } = useLocale();

  return (
    <section id="labs" className="scroll-mt-20 border-t border-border/60" aria-labelledby="labs-title">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 md:py-24">
        <SectionHeading label={t.labs.label} title={t.labs.title} subtitle={t.labs.subtitle} />

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {t.labs.cards.map((card, i) => (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 transition-colors hover:border-brand/40"
            >
              <span
                className="pointer-events-none absolute right-4 top-3 font-mono text-4xl font-bold text-brand/10 transition-colors group-hover:text-brand/20"
                aria-hidden="true"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="inline-flex rounded-md border border-brand/40 bg-accent px-2.5 py-1 font-mono text-xs text-link">
                {card.tag}
              </span>
              <h3 className="mt-3 text-lg font-semibold">{card.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.desc}</p>
            </motion.article>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 flex items-start gap-2 rounded-lg border border-dashed border-border bg-chip/60 px-4 py-3 font-mono text-xs leading-relaxed text-muted-foreground"
        >
          <Info className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
          <span>{"// "}{t.labs.note}</span>
        </motion.p>
      </div>
    </section>
  );
}
