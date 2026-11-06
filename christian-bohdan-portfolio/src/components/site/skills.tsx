"use client";

import { motion } from "framer-motion";
import { Radar, Crosshair, Zap, ShieldCheck, type LucideIcon } from "lucide-react";
import { useLocale } from "@/lib/i18n";
import { SectionHeading } from "@/components/site/section-heading";

const ICONS: Record<string, LucideIcon> = {
  radar: Radar,
  crosshair: Crosshair,
  zap: Zap,
  shield: ShieldCheck,
};

export function Skills() {
  const { t } = useLocale();

  return (
    <section id="skills" className="scroll-mt-20 border-t border-border/60" aria-labelledby="skills-title">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 md:py-24">
        <SectionHeading label={t.skills.label} title={t.skills.title} subtitle={t.skills.subtitle} />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {t.skills.groups.map((group, i) => {
            const Icon = ICONS[group.icon] ?? Radar;
            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="rounded-xl border border-border bg-card p-6 transition-colors hover:border-brand/40"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent text-brand">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-semibold">{group.title}</h3>
                <ul className="mt-3 flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-md border border-border bg-chip px-2 py-1 font-mono text-xs text-muted-foreground"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
