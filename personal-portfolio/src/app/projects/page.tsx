import { ProjectCard } from "@/components/ProjectCard";
import { MotionSection } from "@/components/MotionSection";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <main className="page-shell py-12 md:py-16">
      <MotionSection>
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-circuit">Projects</p>
        <h1 className="mt-3 text-4xl font-semibold text-ink md:text-5xl">
          Selected project work
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 md:text-lg">
          Practical implementations across machine learning, full-stack systems, and research
          reproduction. Each project includes goals, technical decisions, outcomes, and next steps.
        </p>
      </MotionSection>

      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
      </div>
    </main>
  );
}
