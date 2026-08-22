"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Align = "left" | "center";

export default function SectionHeading({
  eyebrow,
  title,
  align = "left",
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  align?: Align;
  children?: ReactNode;
}) {
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      {eyebrow && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className={`eyebrow mb-4 flex items-center gap-2 ${align === "center" ? "justify-center" : ""}`}
        >
          <span className="text-gold">✦</span>
          {eyebrow}
        </motion.p>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
        className="font-display font-normal text-ink text-[clamp(2.2rem,5vw,4.2rem)] leading-[1.05]"
      >
        {title}
      </motion.h2>
      {children && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
          className="mt-5 max-w-xl text-[0.98rem] leading-relaxed text-ink/70"
        >
          {children}
        </motion.div>
      )}
    </div>
  );
}
