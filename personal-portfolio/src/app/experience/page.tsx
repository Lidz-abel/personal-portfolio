import { Timeline } from "@/components/Timeline";
import { MotionSection } from "@/components/MotionSection";
import { experiences } from "@/data/experience";

export default function ExperiencePage() {
  return (
    <main className="page-shell py-12 md:py-16">
      <MotionSection>
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-circuit">Experience</p>
        <h1 className="mt-3 text-4xl font-semibold text-ink md:text-5xl">
          Education, research, projects, and competitions
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 md:text-lg">
          A chronological timeline that connects academic progress with practical system building.
        </p>
      </MotionSection>

      <Timeline items={experiences} />
    </main>
  );
}
