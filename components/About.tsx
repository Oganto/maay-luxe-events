"use client";

import { motion } from "framer-motion";
import { aboutIntro } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="bg-ivory py-28 md:py-36">
      <div className="container-editorial grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-5">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6 }}
            className="eyebrow mb-4"
          >
            About
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="font-display text-[clamp(2.4rem,5vw,4rem)] leading-[1.03] text-ink"
          >
            About Maay
          </motion.h2>
        </div>

        <div className="flex flex-col gap-6 lg:col-span-6 lg:col-start-7">
          {aboutIntro.map((paragraph, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
              className="font-display text-xl leading-relaxed text-ink/80 md:text-2xl"
            >
              {paragraph}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}
