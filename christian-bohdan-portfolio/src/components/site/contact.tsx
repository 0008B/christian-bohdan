"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Phone, ArrowUpRight } from "lucide-react";
import { useLocale } from "@/lib/i18n";
import { SectionHeading } from "@/components/site/section-heading";

export function Contact() {
  const { t } = useLocale();

  const channels = [
    {
      icon: Mail,
      label: t.contact.emailLabel,
      value: t.contact.email,
      href: `mailto:${t.contact.email}`,
      external: false,
    },
    {
      icon: Linkedin,
      label: t.contact.linkedinLabel,
      value: t.contact.linkedinHandle,
      href: t.contact.linkedinUrl,
      external: true,
    },
    {
      icon: Phone,
      label: t.contact.phoneLabel,
      value: t.contact.phone,
      href: `tel:${t.contact.phone.replace(/\s+/g, "")}`,
      external: false,
    },
  ];

  return (
    <section id="contact" className="scroll-mt-20 border-t border-border/60" aria-labelledby="contact-title">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 md:py-24">
        <SectionHeading label={t.contact.label} title={t.contact.title} subtitle={t.contact.subtitle} />

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {channels.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              target={c.external ? "_blank" : undefined}
              rel={c.external ? "noopener noreferrer" : undefined}
              className="group flex items-center gap-4 rounded-xl border border-border bg-card p-5 transition-colors hover:border-brand/50 hover:bg-accent/50"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent text-brand transition-colors group-hover:bg-brand group-hover:text-on-brand">
                <c.icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="min-w-0">
                <span className="block font-mono text-xs uppercase tracking-wide text-muted-foreground">{c.label}</span>
                <span className="block truncate text-sm font-medium text-foreground">{c.value}</span>
              </span>
              {c.external ? (
                <ArrowUpRight className="ml-auto h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-link" aria-hidden="true" />
              ) : null}
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
