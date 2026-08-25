"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { coreValues } from "@/lib/data";

export default function CoreValues() {
  return (
    <section className="bg-ink py-28 text-ivory md:py-36">
      <div className="container-editorial">
        <SectionHeading eyebrow="What We Stand On" title="Core Values" align="left" theme="dark" />

        <div className="mt-16 border-t border-ivory/15">
          {coreValues.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.06 }}
              className="group grid grid-cols-1 items-baseline gap-2 border-b border-ivory/15 py-6 md:grid-cols-12 md:gap-6 md:py-8"
            >
              <span className="font-body text-sm text-gold md:col-span-1">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display text-2xl text-ivory transition-colors duration-300 group-hover:text-lavender md:col-span-4 md:text-3xl">
                {value.title}
              </h3>
              <p className="font-body text-[0.95rem] leading-relaxed text-ivory/75 md:col-span-7">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
