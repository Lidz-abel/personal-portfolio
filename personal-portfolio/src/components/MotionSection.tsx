"use client";

import { motion } from "framer-motion";

type MotionSectionProps = {
  children: React.ReactNode;
  className?: string;
};

export function MotionSection({ children, className }: MotionSectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.section>
  );
}
