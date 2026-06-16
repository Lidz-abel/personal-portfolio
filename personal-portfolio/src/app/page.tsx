import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/Hero";
import { SectionCard } from "@/components/SectionCard";
import { MotionSection } from "@/components/MotionSection";
import { profile } from "@/data/profile";

const sections = [
  {
    title: "About Me",
    description: "Education, background, research interests, and current focus.",
    href: "/about",
    icon: "user"
  },
  {
    title: "Projects",
    description: "Selected engineering, AI, and systems projects with implementation notes.",
    href: "/projects",
    icon: "code"
  },
  {
    title: "Research",
    description: "Reading tracks, reproduction plans, and future academic directions.",
    href: "/research",
    icon: "book"
  },
  {
    title: "Skills",
    description: "Programming languages, frameworks, ML tooling, and research workflows.",
    href: "/skills",
    icon: "cpu"
  },
  {
    title: "Experience",
    description: "Timeline of education, projects, competitions, and research activities.",
    href: "/experience",
    icon: "graduation"
  },
  {
    title: "Notes",
    description: "Study notes, paper summaries, and engineering reflections.",
    href: "/notes",
    icon: "briefcase"
  },
  {
    title: "Contact",
    description: "Email, GitHub, resume download, and collaboration channels.",
    href: "/contact",
    icon: "mail"
  }
] as const;

export default function Home() {
  return (
    <main>
      <Hero />

      <MotionSection className="page-shell py-12 md:py-16">
        <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-circuit">
              Explore
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-ink md:text-4xl">
              Navigate the portfolio
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-slate-600 md:text-base">
            {profile.shortIntro}
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sections.map((section, index) => (
            <SectionCard key={section.href} {...section} index={index} />
          ))}
          <a
            href="/contact"
            className="group glass-panel flex min-h-48 flex-col justify-between rounded-lg p-6 shadow-soft transition hover:-translate-y-1 hover:border-signal/40"
          >
            <div>
              <div className="mb-5 flex size-11 items-center justify-center rounded-lg bg-ink text-white">
                <ArrowRight size={20} />
              </div>
              <h3 className="text-xl font-semibold text-ink">Start a conversation</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Reach out for research collaboration, project discussion, or resume review.
              </p>
            </div>
            <span className="mt-6 text-sm font-semibold text-signal group-hover:text-circuit">
              Contact now
            </span>
          </a>
        </div>
      </MotionSection>
    </main>
  );
}
