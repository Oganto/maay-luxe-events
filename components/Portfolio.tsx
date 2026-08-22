"use client";

import { useState, type MouseEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import PortfolioImage from "./PortfolioImage";
import { portfolioItems } from "@/lib/data";

export default function Portfolio() {
  const [lightboxId, setLightboxId] = useState<string | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const lightboxItem = portfolioItems.find((item) => item.id === lightboxId) ?? null;

  function handleMouseMove(e: MouseEvent<HTMLElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    setCursorPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  }

  return (
    <section id="portfolio" className="bg-porcelain py-24 md:py-36">
      <div className="container-editorial">
        <SectionHeading eyebrow="Our Work" title="Portfolio" align="left">
          Large, beautiful images with minimal text — letting the work speak.
        </SectionHeading>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-5 md:mt-16 lg:grid-cols-3">
          {portfolioItems.map((item, i) => (
            <motion.button
              type="button"
              key={item.id}
              initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
              whileInView={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, delay: (i % 6) * 0.06, ease: [0.76, 0, 0.24, 1] }}
              onClick={() => setLightboxId(item.id)}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
              onMouseMove={handleMouseMove}
              className={`group relative block overflow-hidden text-left md:cursor-none ${
                item.orientation === "portrait" ? "aspect-[3/4]" : "aspect-[4/3]"
              } ${item.featured ? "col-span-2" : ""}`}
            >
              <div className="h-full w-full overflow-hidden">
                <div className="h-full w-full transition-transform duration-700 ease-editorial group-hover:scale-105">
                  <PortfolioImage src={item.image} alt={item.title} />
                </div>
              </div>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/0 to-transparent opacity-70 transition-opacity duration-500 md:opacity-0 md:group-hover:opacity-100" />
              <div className="pointer-events-none absolute bottom-0 left-0 p-3 transition-all duration-500 sm:p-5 md:translate-y-3 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100">
                <p className="font-display text-sm italic text-ivory sm:text-lg">{item.title}</p>
              </div>

              {/* Custom "View" cursor tag — desktop only, follows the pointer while hovering */}
              <AnimatePresence>
                {hoveredId === item.id && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.6 }}
                    transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    style={{ left: cursorPos.x, top: cursorPos.y }}
                    className="pointer-events-none absolute z-10 hidden h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-ivory/95 md:flex"
                  >
                    <span className="font-body text-[0.62rem] font-semibold uppercase tracking-wide2 text-ink">
                      View
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Full-screen viewer */}
      <AnimatePresence>
        {lightboxItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/95 p-4 md:p-10"
            onClick={() => setLightboxId(null)}
            role="dialog"
            aria-modal="true"
            aria-label={lightboxItem.title}
          >
            <button
              type="button"
              aria-label="Close viewer"
              onClick={() => setLightboxId(null)}
              className="absolute right-6 top-6 font-body text-[0.72rem] uppercase tracking-wide2 text-ivory/80 hover:text-ivory"
            >
              Close
            </button>
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="flex max-h-[85vh] max-w-4xl flex-col items-center"
            >
              <PortfolioImage
                src={lightboxItem.image}
                alt={lightboxItem.title}
                className="max-h-[70vh] w-auto object-contain"
              />
              <div className="mt-5 max-w-lg text-center">
                <p className="font-display text-xl italic text-ivory">{lightboxItem.title}</p>
                {lightboxItem.caption && (
                  <p className="mt-2 font-body text-sm text-ivory/60">{lightboxItem.caption}</p>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
