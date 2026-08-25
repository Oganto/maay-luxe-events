"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  // No content yet — hide the section entirely rather than show a
  // placeholder. It reappears automatically once entries are added to
  // `testimonials` in lib/data.ts.
  if (testimonials.length === 0) return null;

  return (
    <section id="testimonials" className="bg-lavender-mist py-28 md:py-36">
      <div className="container-editorial">
        <SectionHeading eyebrow="Kind Words" title="From Our Clients" align="center" />

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
              <blockquote className="font-display text-lg italic leading-relaxed text-ink/90">
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
                  <p className="font-body text-xs uppercase tracking-wide2 text-ink/65">
                    {t.eventType}
                  </p>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
