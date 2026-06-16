import { MotionSection } from "@/components/MotionSection";

type InfoBlockProps = {
  title: string;
  items: string[];
};

export function InfoBlock({ title, items }: InfoBlockProps) {
  return (
    <MotionSection className="glass-panel rounded-lg p-6 shadow-soft md:p-8">
      <h2 className="text-2xl font-semibold text-ink">{title}</h2>
      <ul className="mt-5 space-y-4">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-base leading-7 text-slate-600">
            <span className="mt-2.5 size-2 shrink-0 rounded-full bg-circuit" />
            {item}
          </li>
        ))}
      </ul>
    </MotionSection>
  );
}
