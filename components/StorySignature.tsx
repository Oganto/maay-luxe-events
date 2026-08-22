"use client";

import { motion } from "framer-motion";
import { storySignatureLine } from "@/lib/data";

/**
 * The page's signature moment: after the founder's story, one line stands
 * alone in a full-viewport pause before the site moves on. Deliberately
 * quiet — this is the one place scale and whitespace do all the work.
 */
export default function StorySignature() {
  return (
    <section className="flex h-[70vh] min-h-[420px] w-full items-center justify-center bg-ivory md:h-[85vh]">
      <motion.p
        initial={{ opacity: 0, letterSpacing: "0.05em" }}
        whileInView={{ opacity: 1, letterSpacing: "0em" }}
        viewport={{ once: true, margin: "-20%" }}
        transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
        className="px-6 text-center font-display text-[clamp(2.4rem,7vw,5.5rem)] italic leading-[1.1] text-plum"
      >
        {storySignatureLine}
      </motion.p>
    </section>
  );
}
