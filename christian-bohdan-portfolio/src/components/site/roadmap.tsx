"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import { SectionHeading } from "@/components/site/section-heading";

export function Roadmap() {
  const { t } = useLocale();

  return (
    <section id="roadmap" className="scroll-mt-20 border-t border-border/60" aria-labelledby="roadmap-title">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 md:py-24">
        <SectionHeading label={t.roadmap.label} title={t.roadmap.title} subtitle={t.roadmap.subtitle} />

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {t.roadmap.items.map((item, i) => {
            const isNext = i === 0;
            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`relative rounded-xl border p-6 ${
                  isNext ? "border-brand/50 bg-card glow-card" : "border-border bg-card"
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="font-mono text-3xl font-bold text-brand/25" aria-hidden="true">
                    {item.step}
                  </span>
                  <span
                    className={`rounded-full px-2.5 py-1 font-mono text-xs ${
                      isNext
                        ? "bg-brand font-bold text-on-brand"
                        : "border border-border bg-chip text-muted-foreground"
                    }`}
                  >
                    {item.status}
                  </span>
                </div>
                <h3 className="mt-4 font-semibold leading-snug">{item.name}</h3>
                <p className="mt-0.5 font-mono text-xs text-muted-foreground">{item.org}</p>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
