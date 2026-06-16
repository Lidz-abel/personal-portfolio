"use client";

import Image from "next/image";
import { Download, Github, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { profile } from "@/data/profile";

export function Hero() {
  return (
    <section className="grid-pattern border-b border-slate-200/70">
      <div className="page-shell grid min-h-[calc(100vh-4rem)] items-center gap-10 py-12 md:grid-cols-[1.1fr_0.9fr] md:py-16">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="inline-flex rounded-full border border-circuit/30 bg-white/80 px-4 py-2 text-sm font-semibold text-circuit shadow-sm">
            {profile.identity}
          </p>
          <h1 className="mt-6 max-w-3xl text-5xl font-semibold leading-tight text-ink md:text-7xl">
            {profile.name}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
            {profile.researchFocus}
          </p>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
            {profile.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={profile.resumeUrl}
              className="inline-flex items-center gap-2 rounded-lg bg-ink px-5 py-3 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-graphite"
            >
              <Download size={18} />
              Resume
            </a>
            <a
              href={profile.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-ink shadow-sm transition hover:-translate-y-0.5 hover:border-signal/40"
            >
              <Github size={18} />
              GitHub
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-ink shadow-sm transition hover:-translate-y-0.5 hover:border-circuit/50"
            >
              <Mail size={18} />
              Email
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="glass-panel relative overflow-hidden rounded-lg p-5 shadow-soft">
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-slate-100">
              <Image
                src="/avatar.svg"
                alt={`${profile.name} avatar`}
                width={900}
                height={1125}
                priority
                unoptimized
                className="h-full w-full object-cover"
              />
            </div>
            <div className="mt-5 grid grid-cols-2 gap-3">
              {profile.metrics.map((metric) => (
                <div key={metric.label} className="rounded-lg border border-slate-200 bg-white p-4">
                  <p className="text-2xl font-semibold text-ink">{metric.value}</p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
