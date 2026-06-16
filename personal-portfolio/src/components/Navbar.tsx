"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { navigation } from "@/data/navigation";
import { profile } from "@/data/profile";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-paper/82 backdrop-blur-xl">
      <nav className="page-shell flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-3 font-semibold text-ink" onClick={() => setOpen(false)}>
          <span className="flex size-9 items-center justify-center rounded-lg bg-ink text-sm text-white">
            LA
          </span>
          <span className="hidden sm:inline">{profile.name}</span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navigation.map((item) => {
            const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));

            return (
              <Link
                key={item.href}
                href={item.href}
                className="relative rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition hover:text-ink"
              >
                {active && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-lg bg-white shadow-sm"
                    transition={{ type: "spring", stiffness: 380, damping: 34 }}
                  />
                )}
                <span className="relative">{item.label}</span>
              </Link>
            );
          })}
        </div>

        <button
          type="button"
          aria-label="Toggle navigation"
          className="flex size-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-ink lg:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          className="border-t border-slate-200 bg-paper lg:hidden"
        >
          <div className="page-shell grid gap-2 py-4">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-semibold text-slate-700 hover:bg-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  );
}
