import { Download, Github, Mail, MapPin } from "lucide-react";
import { MotionSection } from "@/components/MotionSection";
import { profile } from "@/data/profile";

const contactItems = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail
  },
  {
    label: "GitHub",
    value: profile.githubLabel,
    href: profile.githubUrl,
    icon: Github
  },
  {
    label: "Resume",
    value: "Download PDF",
    href: profile.resumeUrl,
    icon: Download
  },
  {
    label: "Location",
    value: profile.location,
    href: "#",
    icon: MapPin
  }
];

export default function ContactPage() {
  return (
    <main className="page-shell py-12 md:py-16">
      <MotionSection>
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-circuit">Contact</p>
        <h1 className="mt-3 text-4xl font-semibold text-ink md:text-5xl">
          Open to research and engineering conversations
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 md:text-lg">
          Use the links below for collaboration, project discussion, resume requests, or academic
          exchange.
        </p>
      </MotionSection>

      <section className="mt-10 grid gap-5 md:grid-cols-2">
        {contactItems.map((item) => {
          const Icon = item.icon;
          const isPlain = item.href === "#";

          const content = (
            <>
              <div className="flex size-12 items-center justify-center rounded-lg bg-ink text-white">
                <Icon size={20} />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
                  {item.label}
                </p>
                <p className="mt-2 text-lg font-semibold text-ink">{item.value}</p>
              </div>
            </>
          );

          if (isPlain) {
            return (
              <div key={item.label} className="glass-panel flex items-center gap-5 rounded-lg p-6 shadow-soft">
                {content}
              </div>
            );
          }

          return (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noreferrer" : undefined}
              className="glass-panel flex items-center gap-5 rounded-lg p-6 shadow-soft transition hover:-translate-y-1 hover:border-signal/40"
            >
              {content}
            </a>
          );
        })}
      </section>
    </main>
  );
}
