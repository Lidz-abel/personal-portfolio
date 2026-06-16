import { InfoBlock } from "@/components/InfoBlock";
import { MotionSection } from "@/components/MotionSection";
import { profile } from "@/data/profile";

export default function AboutPage() {
  return (
    <main className="page-shell py-12 md:py-16">
      <MotionSection>
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-circuit">About</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-semibold text-ink md:text-5xl">
          Academic foundation, engineering practice, and long-term research focus.
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 md:text-lg">
          {profile.bio}
        </p>
      </MotionSection>

      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        <InfoBlock title="Education" items={profile.education} />
        <InfoBlock title="Personal Introduction" items={profile.introduction} />
        <InfoBlock title="Research Interests" items={profile.researchInterests} />
        <InfoBlock title="Current Learning Direction" items={profile.currentLearning} />
      </div>
    </main>
  );
}
