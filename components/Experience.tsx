"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { experienceSteps } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="bg-plum-deep py-28 md:py-36">
      <div className="container-editorial">
        <SectionHeading
          eyebrow="How We Work"
          title="The Maay Experience"
          align="left"
          theme="dark"
        />

        <div className="mt-20 grid grid-cols-1 gap-x-6 gap-y-14 md:grid-cols-5">
          {experienceSteps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="relative pl-0"
            >
              <div className="mb-6 h-px w-full bg-ivory/15 md:mb-8" />
              <span className="font-display text-lg italic text-gold">{step.number}</span>
              <h3 className="mt-3 font-display text-2xl text-ivory">{step.title}</h3>
              <p className="mt-3 font-body text-[0.9rem] leading-relaxed text-ivory/75">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
