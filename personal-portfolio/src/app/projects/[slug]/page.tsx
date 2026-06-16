import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Github } from "lucide-react";
import { MotionSection } from "@/components/MotionSection";
import { Tag } from "@/components/Tag";
import { getProjectBySlug, projects } from "@/data/projects";

type ProjectDetailPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: ProjectDetailPageProps): Metadata {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return {
      title: "Project Not Found"
    };
  }

  return {
    title: `${project.title} | Project`,
    description: project.summary
  };
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  const detailSections = [
    ["Project Background", project.detail.background],
    ["Project Goals", project.detail.goals],
    ["Technical Solution", project.detail.solution],
    ["Core Implementation", project.detail.implementation],
    ["Experimental Results", project.detail.results],
    ["Improvement Direction", project.detail.future]
  ];

  return (
    <main className="page-shell py-12 md:py-16">
      <MotionSection>
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm font-semibold text-signal transition hover:text-circuit"
        >
          <ArrowLeft size={16} />
          Back to projects
        </Link>
        <div className="mt-8 max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-circuit">
            Project Detail
          </p>
          <h1 className="mt-3 text-4xl font-semibold text-ink md:text-5xl">
            {project.title}
          </h1>
          <p className="mt-5 text-base leading-8 text-slate-600 md:text-lg">
            {project.summary}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <Tag key={item}>{item}</Tag>
            ))}
          </div>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-7 inline-flex items-center gap-2 rounded-lg bg-ink px-5 py-3 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-graphite"
          >
            <Github size={18} />
            View GitHub
          </a>
        </div>
      </MotionSection>

      <div className="mt-10 grid gap-5">
        {detailSections.map(([title, content]) => (
          <section key={title} className="glass-panel rounded-lg p-6 shadow-soft md:p-8">
            <h2 className="text-2xl font-semibold text-ink">{title}</h2>
            <p className="mt-4 text-base leading-8 text-slate-600">{content}</p>
          </section>
        ))}
      </div>
    </main>
  );
}
