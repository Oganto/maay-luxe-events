"use client";

import { motion } from "framer-motion";
import PortfolioImage from "./PortfolioImage";
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
            <p className="eyebrow mb-4 flex items-center gap-2">
              <span className="text-gold">✦</span>
              Our Vision
            </p>
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
            <p className="eyebrow mb-4 flex items-center gap-2">
              <span className="text-gold">✦</span>
              Our Mission
            </p>
            <p className="font-display text-2xl leading-snug text-ink md:text-[2rem]">
              {visionMission.mission}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Closing statement — full-bleed photo moment, a dramatic pause before Services */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-15%" }}
        transition={{ duration: 0.9 }}
        className="relative mt-20 flex h-[60vh] min-h-[380px] w-full items-center justify-center overflow-hidden md:mt-24 md:h-[70vh]"
      >
        <div className="absolute inset-0">
          <PortfolioImage
            src="/assets/events/event-08-inroom-proposal.jpg"
            alt="Candlelit proposal styling by Maay Luxe Events"
          />
        </div>
        <div className="absolute inset-0 bg-plum-deep/70" />
        <p className="relative z-10 mx-auto max-w-3xl px-6 text-center font-display text-[clamp(1.8rem,4vw,3rem)] italic leading-tight text-ivory">
          {visionMission.closing}
        </p>
      </motion.div>
    </section>
  );
}
