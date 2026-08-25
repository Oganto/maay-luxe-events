"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import PortfolioImage from "./PortfolioImage";
import AmbientGlow from "./AmbientGlow";
import { aboutIntro } from "@/lib/data";
import { gsap } from "@/lib/gsap";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const backImageRef = useRef<HTMLDivElement>(null);
  const frontImageRef = useRef<HTMLDivElement>(null);

  // The two collage photos drift at slightly different speeds as the
  // section scrolls past — desktop-only, skipped for reduced motion.
  useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
      gsap.to(backImageRef.current, {
        yPercent: -8,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
      gsap.to(frontImageRef.current, {
        yPercent: 10,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });
    return () => mm.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="relative overflow-hidden bg-ivory py-28 md:py-36">
      <AmbientGlow colorA="lavender" colorB="plum" />
      <div className="container-editorial relative grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-8">
        {/* Editorial image collage — two offset frames, drifting at different speeds */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative lg:col-span-5"
        >
          <div ref={backImageRef} className="aspect-[4/5] w-[78%] overflow-hidden will-change-transform">
            <PortfolioImage
              src="/assets/events/event-07-white-rose-table.jpg"
              alt="White rose table styling by Maay Luxe Events"
            />
          </div>
          <div
            ref={frontImageRef}
            className="absolute bottom-[-10%] right-0 aspect-[4/5] w-[52%] overflow-hidden border-4 border-ivory shadow-xl will-change-transform"
          >
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
            className="eyebrow mb-4 flex items-center gap-2 text-plum"
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
                className="font-display text-xl leading-relaxed text-ink/88 md:text-2xl"
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

