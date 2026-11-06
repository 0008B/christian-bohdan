"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import { SectionHeading } from "@/components/site/section-heading";

export function Timeline() {
  const { t } = useLocale();

  return (
    <section id="timeline" className="scroll-mt-20 border-t border-border/60" aria-labelledby="timeline-title">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 md:py-24">
        <SectionHeading label={t.timeline.label} title={t.timeline.title} subtitle={t.timeline.subtitle} />

        <div className="mt-10 space-y-0">
          {t.timeline.entries.map((entry, i) => (
            <motion.div
              key={entry.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="grid gap-2 md:grid-cols-[180px_1fr] md:gap-8"
            >
              <p className="pt-1 font-mono text-sm text-link md:text-right">{entry.period}</p>
              <div className="relative border-l border-border pb-10 pl-6 last:pb-0">
                <span
                  className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full border-2 border-brand bg-background"
                  aria-hidden="true"
                />
                <h3 className="font-semibold">{entry.title}</h3>
                <p className="mt-0.5 font-mono text-xs text-muted-foreground">{entry.org}</p>
                {entry.desc ? <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{entry.desc}</p> : null}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
