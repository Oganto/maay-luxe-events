"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-lavender-mist py-28 md:py-36">
      <div className="container-editorial">
        <SectionHeading eyebrow="Kind Words" title="From Our Clients" align="center" />

        {testimonials.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto mt-16 max-w-lg border border-ink/10 bg-ivory/60 px-8 py-14 text-center"
          >
            <p className="font-display text-xl italic text-ink/70">
              Client testimonials are on their way.
            </p>
            <p className="mt-3 font-body text-sm text-ink/50">
              Add entries to <code>testimonials</code> in{" "}
              <code>lib/data.ts</code> and they&apos;ll appear here automatically.
            </p>
          </motion.div>
        ) : (
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <motion.figure
                key={t.name + i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="flex flex-col justify-between bg-ivory p-8"
              >
                <blockquote className="font-display text-lg italic leading-relaxed text-ink/85">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-3">
                  {t.photo && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={t.photo}
                      alt={t.name}
                      className="h-10 w-10 rounded-full object-cover"
                    />
                  )}
                  <div>
                    <p className="font-body text-sm font-semibold text-ink">{t.name}</p>
                    <p className="font-body text-xs uppercase tracking-wide2 text-ink/50">
                      {t.eventType}
                    </p>
                  </div>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
