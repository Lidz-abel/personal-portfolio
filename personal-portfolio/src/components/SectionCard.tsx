"use client";

import Link from "next/link";
import { ArrowUpRight, BookOpen, Briefcase, Code2, Cpu, GraduationCap, Mail, UserRound } from "lucide-react";
import { motion } from "framer-motion";

const iconMap = {
  user: UserRound,
  code: Code2,
  book: BookOpen,
  cpu: Cpu,
  graduation: GraduationCap,
  briefcase: Briefcase,
  mail: Mail
};

type SectionCardProps = {
  title: string;
  description: string;
  href: string;
  icon: keyof typeof iconMap;
  index: number;
};

export function SectionCard({ title, description, href, icon, index }: SectionCardProps) {
  const Icon = iconMap[icon];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.42, delay: index * 0.04 }}
      whileHover={{ y: -6, scale: 1.015 }}
    >
      <Link
        href={href}
        className="glass-panel group flex min-h-48 flex-col justify-between rounded-lg p-6 shadow-soft"
      >
        <div>
          <div className="mb-5 flex size-11 items-center justify-center rounded-lg bg-white text-signal shadow-sm">
            <Icon size={20} />
          </div>
          <h3 className="text-xl font-semibold text-ink">{title}</h3>
          <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
        </div>
        <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-signal group-hover:text-circuit">
          Open
          <ArrowUpRight size={16} />
        </span>
      </Link>
    </motion.div>
  );
}
