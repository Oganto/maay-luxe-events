"use client";

import { motion } from "framer-motion";
import { visionMission } from "@/lib/data";

export default function VisionMission() {
  return (
    <section className="bg-lavender-mist py-28 md:py-36">
      <div className="container-editorial">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-2 md:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6 }}
          >
            <p className="eyebrow mb-4">Our Vision</p>
            <p className="font-display text-2xl leading-snug text-ink md:text-[2rem]">
              {visionMission.vision}
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="eyebrow mb-4">Our Mission</p>
            <p className="font-display text-2xl leading-snug text-ink md:text-[2rem]">
              {visionMission.mission}
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-20 border-t border-ink/10 pt-16 text-center md:mt-24 md:pt-20"
        >
          <p className="mx-auto max-w-3xl font-display text-[clamp(1.8rem,4vw,3rem)] italic leading-tight text-plum">
            {visionMission.closing}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
