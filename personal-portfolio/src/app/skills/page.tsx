import { MotionSection } from "@/components/MotionSection";
import { Tag } from "@/components/Tag";
import { skillGroups } from "@/data/skills";

export default function SkillsPage() {
  return (
    <main className="page-shell py-12 md:py-16">
      <MotionSection>
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-circuit">Skills</p>
        <h1 className="mt-3 text-4xl font-semibold text-ink md:text-5xl">
          Technical stack by category
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 md:text-lg">
          A maintainable overview of engineering, research, and collaboration skills used across
          project implementation and academic exploration.
        </p>
      </MotionSection>

      <section className="mt-10 grid gap-5 md:grid-cols-2">
        {skillGroups.map((group) => (
          <article key={group.category} className="glass-panel rounded-lg p-6 shadow-soft">
            <h2 className="text-xl font-semibold text-ink">{group.category}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">{group.description}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <Tag key={item}>{item}</Tag>
              ))}
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
