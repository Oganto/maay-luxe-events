"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/**
 * A brief, elegant brand reveal on first load — the wordmark draws in,
 * then the curtain lifts. Skips entirely on reduced-motion, and never
 * blocks interaction for more than ~1.4s even on a slow connection.
 */
export default function Preloader() {
  const [visible, setVisible] = useState(true);
  const [skip, setSkip] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setSkip(true);
      setVisible(false);
      return;
    }

    const timer = setTimeout(() => setVisible(false), 1400);
    return () => clearTimeout(timer);
  }, []);

  if (skip) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ clipPath: "inset(0% 0% 0% 0%)" }}
          exit={{ clipPath: "inset(0% 0% 100% 0%)" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink"
        >
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.02em" }}
            animate={{ opacity: 1, letterSpacing: "0.3em" }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-2xl text-ivory md:text-3xl"
          >
            MAAY LUXE
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
