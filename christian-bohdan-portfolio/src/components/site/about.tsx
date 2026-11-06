"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Target, FileText } from "lucide-react";
import { useLocale } from "@/lib/i18n";
import { SectionHeading } from "@/components/site/section-heading";

const HIGHLIGHT_ICONS = [ShieldCheck, Target, FileText] as const;

export function About() {
  const { t } = useLocale();

  return (
    <section id="about" className="scroll-mt-20 border-t border-border/60" aria-labelledby="about-title">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 md:py-24">
        <SectionHeading label={t.about.label} title={t.about.title} />

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-14">
          {/* Paragraphs */}
          <div className="space-y-5">
            {t.about.paragraphs.map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="leading-relaxed text-muted-foreground"
              >
                {p}
              </motion.p>
            ))}
          </div>

          {/* Highlight cards */}
          <div className="space-y-4">
            {t.about.highlights.map((h, i) => {
              const Icon = HIGHLIGHT_ICONS[i % HIGHLIGHT_ICONS.length];
              return (
                <motion.div
                  key={h.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="flex gap-4 rounded-xl border border-border bg-card p-5 transition-colors hover:border-brand/40"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent text-brand">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-semibold">{h.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{h.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
