"use client";

import { motion } from "framer-motion";
import { Award, BadgeCheck } from "lucide-react";
import { useLocale } from "@/lib/i18n";
import { SectionHeading } from "@/components/site/section-heading";

export function Certificates() {
  const { t } = useLocale();

  return (
    <section id="certs" className="scroll-mt-20 border-t border-border/60" aria-labelledby="certs-title">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 md:py-24">
        <SectionHeading label={t.certs.label} title={t.certs.title} subtitle={t.certs.subtitle} />

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {t.certs.items.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`relative rounded-xl border bg-card p-6 ${
                cert.highlight
                  ? "border-brand/50 glow-card"
                  : "border-border transition-colors hover:border-brand/40"
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <span
                  className={`flex h-11 w-11 items-center justify-center rounded-lg ${
                    cert.highlight ? "bg-brand text-on-brand" : "bg-accent text-brand"
                  }`}
                >
                  {cert.highlight ? (
                    <Award className="h-5 w-5" aria-hidden="true" />
                  ) : (
                    <BadgeCheck className="h-5 w-5" aria-hidden="true" />
                  )}
                </span>
                <span
                  className={`rounded-full px-2.5 py-1 font-mono text-xs ${
                    cert.highlight
                      ? "bg-brand font-bold text-on-brand"
                      : "border border-border bg-chip text-muted-foreground"
                  }`}
                >
                  {cert.badge}
                </span>
              </div>
              <p className="mt-4 font-mono text-sm text-link">{cert.year}</p>
              <h3 className="mt-1 text-lg font-semibold">{cert.name}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{cert.issuer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
