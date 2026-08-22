"use client";

import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { brand } from "@/lib/data";
import { MagneticLink } from "./MagneticButton";

const line = {
  hidden: { opacity: 0, y: 28 },
  show: (delay: number) => ({
    opacity: 1,
    y: 0,
    // Offset so the hero's entrance begins right as the preloader curtain lifts
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: delay + 1.1 },
  }),
};

export default function Hero() {
  const [videoFailed, setVideoFailed] = useState(false);
  const { scrollY } = useScroll();
  const videoY = useTransform(scrollY, [0, 800], [0, 160]);
  const contentY = useTransform(scrollY, [0, 800], [0, 60]);
  const contentOpacity = useTransform(scrollY, [0, 500], [1, 0.2]);

  return (
    <section id="home" className="relative flex h-[100dvh] w-full items-end overflow-hidden bg-ink">
      {/* Background video — drop the real file at /public/assets/hero-video.mp4 */}
      {!videoFailed ? (
        <motion.video
          style={{ y: videoY }}
          className="absolute inset-0 h-[112%] w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/assets/hero-poster.jpg"
          onError={() => setVideoFailed(true)}
        >
          <source src="/assets/hero-video.mp4" type="video/mp4" />
        </motion.video>
      ) : (
        <div className="asset-placeholder absolute inset-0">
          <span>Hero video — add /assets/hero-video.mp4</span>
        </div>
      )}

      {/* Soft overlay for text readability */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(34,26,43,0.15) 0%, rgba(34,26,43,0.1) 45%, rgba(34,26,43,0.55) 100%)",
        }}
      />

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="container-editorial relative z-10 w-full pb-16 pt-40 md:pb-24"
      >
        <motion.p
          custom={0.1}
          initial="hidden"
          animate="show"
          variants={line}
          className="font-body text-[0.72rem] font-semibold uppercase tracking-wide3 text-lavender"
        >
          {brand.descriptor}
        </motion.p>

        <motion.h1
          custom={0.25}
          initial="hidden"
          animate="show"
          variants={line}
          className="mt-5 max-w-4xl font-display text-[clamp(2.8rem,8vw,6.4rem)] font-normal leading-[0.98] text-ivory"
        >
          {brand.name}
        </motion.h1>

        <motion.p
          custom={0.4}
          initial="hidden"
          animate="show"
          variants={line}
          className="mt-6 max-w-md font-display text-xl italic text-ivory/90 md:text-2xl"
        >
          {brand.tagline}
        </motion.p>

        <motion.div
          custom={0.55}
          initial="hidden"
          animate="show"
          variants={line}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <MagneticLink
            href="#contact"
            className="inline-flex items-center bg-ivory px-7 py-3.5 font-body text-[0.78rem] font-semibold uppercase tracking-wide2 text-ink transition-colors duration-300 hover:bg-lavender"
          >
            Plan Your Event
          </MagneticLink>
          <MagneticLink
            href="#portfolio"
            className="inline-flex items-center border border-ivory/50 px-7 py-3.5 font-body text-[0.78rem] font-semibold uppercase tracking-wide2 text-ivory transition-colors duration-300 hover:border-ivory hover:bg-ivory/10"
          >
            Explore Our Work
          </MagneticLink>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.8 }}
        className="absolute bottom-8 right-6 z-10 hidden items-center gap-3 md:right-12 md:flex"
      >
        <span className="h-10 w-px bg-ivory/50" />
        <span className="font-body text-[0.68rem] uppercase tracking-wide2 text-ivory/70">
          Scroll
        </span>
      </motion.div>
    </section>
  );
}
