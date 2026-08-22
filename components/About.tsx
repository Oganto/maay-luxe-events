"use client";

import { motion } from "framer-motion";
import PortfolioImage from "./PortfolioImage";
import { aboutIntro } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="bg-ivory py-28 md:py-36">
      <div className="container-editorial grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-8">
        {/* Editorial image collage — two offset frames rather than a flat block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative lg:col-span-5"
        >
          <div className="aspect-[4/5] w-[78%] overflow-hidden">
            <PortfolioImage
              src="/assets/events/event-07-white-rose-table.jpg"
              alt="White rose table styling by Maay Luxe Events"
            />
          </div>
          <div className="absolute bottom-[-10%] right-0 aspect-[4/5] w-[52%] overflow-hidden border-4 border-ivory shadow-xl">
            <PortfolioImage
              src="/assets/events/event-06-place-setting.jpg"
              alt="Elegant place setting by Maay Luxe Events"
            />
          </div>
        </motion.div>

        <div className="lg:col-span-6 lg:col-start-7">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6 }}
            className="eyebrow mb-4 flex items-center gap-2"
          >
            <span className="text-gold">✦</span>
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

          <div className="mt-8 flex flex-col gap-6">
            {aboutIntro.map((paragraph, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6, delay: 0.15 + i * 0.1 }}
                className="font-display text-xl leading-relaxed text-ink/80 md:text-2xl"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
