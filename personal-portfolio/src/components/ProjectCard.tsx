"use client";

import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";
import { motion } from "framer-motion";
import { Tag } from "@/components/Tag";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.42, delay: index * 0.05 }}
      whileHover={{ y: -6, scale: 1.01 }}
      className="glass-panel rounded-lg p-6 shadow-soft"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold text-ink">{project.title}</h2>
          <p className="mt-3 text-sm leading-6 text-slate-600">{project.summary}</p>
        </div>
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noreferrer"
          aria-label={`${project.title} GitHub`}
          className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-white text-ink transition hover:border-signal/50"
        >
          <Github size={18} />
        </a>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <Tag key={item}>{item}</Tag>
        ))}
      </div>

      <ul className="mt-5 space-y-2">
        {project.highlights.map((highlight) => (
          <li key={highlight} className="flex gap-3 text-sm leading-6 text-slate-600">
            <span className="mt-2 size-2 shrink-0 rounded-full bg-circuit" />
            {highlight}
          </li>
        ))}
      </ul>

      <Link
        href={`/projects/${project.slug}`}
        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-signal transition hover:text-circuit"
      >
        View details
        <ArrowUpRight size={16} />
      </Link>
    </motion.article>
  );
}
