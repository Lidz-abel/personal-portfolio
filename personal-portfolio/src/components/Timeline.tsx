"use client";

import { motion } from "framer-motion";
import { Tag } from "@/components/Tag";
import type { Experience } from "@/data/experience";

export function Timeline({ items }: { items: Experience[] }) {
  return (
    <section className="mt-10">
      <div className="relative border-l border-slate-300 pl-6 md:pl-10">
        {items.map((item, index) => (
          <motion.article
            key={`${item.period}-${item.title}`}
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.42, delay: index * 0.04 }}
            className="relative mb-6 glass-panel rounded-lg p-6 shadow-soft last:mb-0"
          >
            <span className="absolute -left-[31px] top-7 size-4 rounded-full border-4 border-paper bg-circuit md:-left-[47px]" />
            <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
              <div>
                <p className="text-sm font-semibold text-circuit">{item.period}</p>
                <h2 className="mt-2 text-2xl font-semibold text-ink">{item.title}</h2>
                <p className="mt-2 text-sm font-semibold text-slate-500">{item.organization}</p>
              </div>
              <Tag>{item.type}</Tag>
            </div>
            <p className="mt-5 text-base leading-8 text-slate-600">{item.description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
