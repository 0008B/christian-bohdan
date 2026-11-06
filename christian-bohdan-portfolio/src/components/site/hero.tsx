"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { useLocale } from "@/lib/i18n";
import { Terminal } from "@/components/site/terminal";
import { Button } from "@/components/ui/button";

export function Hero() {
  const { t } = useLocale();

  return (
    <section className="relative overflow-hidden" aria-labelledby="hero-title">
      <div className="bg-grid absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 pt-14 pb-16 md:pt-20 md:pb-24">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:items-center">
          {/* Text column */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-brand/40 bg-accent px-3.5 py-1.5 font-mono text-xs text-link">
                <span className="relative flex h-2 w-2" aria-hidden="true">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
                </span>
                {t.hero.badge}
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="mt-6 font-mono text-sm text-muted-foreground"
            >
              <span className="text-[#16a34a] dark:text-[#28c840]">➜</span> ~ {t.hero.name}
            </motion.p>

            <motion.h1
              id="hero-title"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-2 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.08]"
            >
              <span className="text-gradient">{t.hero.title}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="mt-6 max-w-xl text-base md:text-lg leading-relaxed text-muted-foreground"
            >
              {t.hero.pitch}
            </motion.p>

            <motion.ul
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 flex flex-wrap gap-2"
              aria-label="Focus areas"
            >
              {t.hero.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-md border border-border bg-panel px-2.5 py-1 font-mono text-xs text-link"
                >
                  #{tag.toLowerCase().replace(/[^a-zäöüß+0-9-]+/gi, "-")}
                </li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <Button asChild size="lg" className="font-semibold">
                <a href="#letter">
                  {t.hero.ctaLetter} <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-brand/50 text-link hover:bg-accent hover:text-foreground">
                <a href="#contact">
                  <Mail className="mr-1 h-4 w-4" /> {t.hero.ctaContact}
                </a>
              </Button>
            </motion.div>
          </div>

          {/* Visual column: photo + terminal */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-6"
          >
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              <div className="relative overflow-hidden rounded-2xl border border-border glow-card">
                <Image
                  src="/christian-bohdan.jpg"
                  alt={t.hero.photoAlt}
                  width={1200}
                  height={1102}
                  priority
                  className="h-auto w-full object-cover"
                />
                {/* corner brackets */}
                <span className="pointer-events-none absolute left-3 top-3 h-5 w-5 border-l-2 border-t-2 border-brand/80" aria-hidden="true" />
                <span className="pointer-events-none absolute right-3 top-3 h-5 w-5 border-r-2 border-t-2 border-brand/80" aria-hidden="true" />
                <span className="pointer-events-none absolute bottom-3 left-3 h-5 w-5 border-b-2 border-l-2 border-brand/80" aria-hidden="true" />
                <span className="pointer-events-none absolute bottom-3 right-3 h-5 w-5 border-b-2 border-r-2 border-brand/80" aria-hidden="true" />
                <div className="photo-fade absolute inset-x-0 bottom-0 px-5 pb-4 pt-10">
                  <p className="font-mono text-sm text-link">{t.hero.name}</p>
                  <p className="font-mono text-xs text-muted-foreground">{t.hero.title}</p>
                </div>
              </div>
            </div>

            <Terminal title={t.hero.terminalTitle} lines={t.hero.terminal} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
