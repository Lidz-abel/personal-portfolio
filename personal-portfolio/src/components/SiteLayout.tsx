import { Navbar } from "@/components/Navbar";

export function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <Navbar />
      {children}
      <footer className="page-shell border-t border-slate-200 py-8 text-sm text-slate-500">
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <span>© 2026 Lidz Abel. Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.</span>
          <span>Research-driven engineering portfolio.</span>
        </div>
      </footer>
    </div>
  );
}
