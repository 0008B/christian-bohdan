"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  label: string;
  title: string;
  subtitle?: string;
}

export function SectionHeading({ label, title, subtitle }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="max-w-2xl"
    >
      <p className="font-mono text-sm text-link mb-3 flex items-center gap-2">
        <span className="text-brand">$</span>
        <span>./{label}</span>
        <span className="h-px flex-1 max-w-24 bg-border" aria-hidden="true" />
      </p>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">{title}</h2>
      {subtitle ? <p className="mt-3 text-muted-foreground leading-relaxed">{subtitle}</p> : null}
    </motion.div>
  );
}
