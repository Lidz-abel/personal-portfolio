import { MotionSection } from "@/components/MotionSection";
import { Tag } from "@/components/Tag";
import { notes } from "@/data/notes";

export default function NotesPage() {
  return (
    <main className="page-shell py-12 md:py-16">
      <MotionSection>
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-circuit">Notes</p>
        <h1 className="mt-3 text-4xl font-semibold text-ink md:text-5xl">
          Blog and learning notes
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 md:text-lg">
          Compact summaries of papers, implementation logs, and study notes. The data format is
          ready for future article pages or MDX integration.
        </p>
      </MotionSection>

      <section className="mt-10 grid gap-5">
        {notes.map((note) => (
          <article key={note.title} className="glass-panel rounded-lg p-6 shadow-soft md:p-8">
            <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
              <div>
                <p className="text-sm font-semibold text-circuit">{note.date}</p>
                <h2 className="mt-2 text-2xl font-semibold text-ink">{note.title}</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {note.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
            </div>
            <p className="mt-5 text-base leading-8 text-slate-600">{note.summary}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
