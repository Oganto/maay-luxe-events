"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { brand } from "@/lib/data";
import { MagneticLink } from "./MagneticButton";
import PortfolioImage from "./PortfolioImage";
import { gsap } from "@/lib/gsap";

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
  const sectionRef = useRef<HTMLElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Slow ambient zoom, independent of scroll — the "film opening" feel
      gsap.fromTo(
        mediaRef.current,
        { scale: 1.06 },
        { scale: 1.16, duration: 12, ease: "none" }
      );

      // Scroll-scrubbed: background continues to scale/drift and the content
      // fades and lifts away as the visitor scrolls past the hero, so the
      // next section feels like it's emerging from underneath rather than
      // cutting in abruptly.
      gsap.to(mediaRef.current, {
        scale: 1.32,
        yPercent: 12,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(contentRef.current, {
        yPercent: 30,
        opacity: 0.15,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "70% top",
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative flex h-[100dvh] w-full items-end overflow-hidden bg-ink"
    >
      {/* Background — real hero video once provided; a real event photo with a
          slow cinematic zoom in the meantime, never a placeholder graphic. */}
      <div ref={mediaRef} className="absolute inset-0 h-full w-full will-change-transform">
        {!videoFailed ? (
          <video
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster="/assets/hero-poster.jpg"
            onError={() => setVideoFailed(true)}
          >
            <source src="/assets/hero-video.mp4" type="video/mp4" />
          </video>
        ) : (
          <PortfolioImage
            src="/assets/events/event-01-hall-reception.jpg"
            alt="Maay Luxe Events — hall reception styling"
            className="h-full w-full object-cover"
          />
        )}
      </div>

      {/* Soft overlay for text readability */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(29,17,41,0.25) 0%, rgba(29,17,41,0.15) 45%, rgba(29,17,41,0.65) 100%)",
        }}
      />

      <div ref={contentRef} className="container-editorial relative z-10 w-full pb-16 pt-40 md:pb-24">
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
            className="inline-flex items-center bg-[linear-gradient(90deg,#4E1480_0%,#33105A_55%,#D4A94A_100%)] bg-[length:230%_100%] bg-left px-7 py-3.5 font-body text-[0.78rem] font-semibold uppercase tracking-wide2 text-ivory shadow-[0_8px_30px_-8px_rgba(78,20,128,0.6)] transition-[background-position,box-shadow,color] duration-700 hover:bg-right hover:text-ink hover:shadow-[0_8px_30px_-6px_rgba(212,169,74,0.5)]"
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
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.8 }}
        className="absolute bottom-8 right-6 z-10 hidden items-center gap-3 md:right-12 md:flex"
      >
        <span className="h-10 w-px bg-ivory/50" />
        <span className="font-body text-[0.68rem] uppercase tracking-wide2 text-ivory/85">
          Scroll
        </span>
      </motion.div>

      {/* Seamless hand-off into the next section, rather than a hard cut */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-24 md:h-32"
        style={{ background: "linear-gradient(180deg, transparent 0%, #FAF6EF 100%)" }}
      />
    </section>
  );
}
