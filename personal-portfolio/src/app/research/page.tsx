import { MotionSection } from "@/components/MotionSection";
import { researchDirections, readingList, reproductionPlans, futureDirections } from "@/data/research";

export default function ResearchPage() {
  return (
    <main className="page-shell py-12 md:py-16">
      <MotionSection>
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-circuit">Research</p>
        <h1 className="mt-3 text-4xl font-semibold text-ink md:text-5xl">
          Research direction and reading system
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 md:text-lg">
          A focused workspace for research questions, paper reading, reproduction plans, and
          future exploration across learning systems and efficient AI.
        </p>
      </MotionSection>

      <section className="mt-10 grid gap-5 md:grid-cols-2">
        {researchDirections.map((item) => (
          <article key={item.title} className="glass-panel rounded-lg p-6 shadow-soft">
            <h2 className="text-xl font-semibold text-ink">{item.title}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
          </article>
        ))}
      </section>

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        <ResearchList title="Paper Reading" items={readingList} />
        <ResearchList title="Reproduction Plan" items={reproductionPlans} />
        <ResearchList title="Future Direction" items={futureDirections} />
      </div>
    </main>
  );
}

function ResearchList({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="glass-panel rounded-lg p-6 shadow-soft">
      <h2 className="text-xl font-semibold text-ink">{title}</h2>
      <ul className="mt-5 space-y-4">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-6 text-slate-600">
            <span className="mt-2 size-2 shrink-0 rounded-full bg-circuit" />
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
