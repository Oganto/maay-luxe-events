"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import AmbientGlow from "./AmbientGlow";
import { services } from "@/lib/data";

export default function Services() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="services" className="relative overflow-hidden bg-ivory py-28 md:py-36">
      {/* Ambient brand-color depth — subtle, blurred, slowly drifting */}
      <AmbientGlow colorA="lavender" colorB="gold" />

      <div className="container-editorial relative">
        <SectionHeading eyebrow="What We Offer" title="Services" align="left" />

        <div className="mt-16 border-t border-plum/15">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.45, delay: (i % 5) * 0.05 }}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              className="group border-b border-plum/15 py-6 transition-opacity duration-300 md:py-7"
              style={{
                opacity: active === null || active === i ? 1 : 0.4,
              }}
            >
              <div className="flex flex-col justify-between gap-2 md:flex-row md:items-baseline md:gap-8">
                <div className="flex items-baseline gap-5">
                  <span className="font-body text-xs text-gold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-2xl text-ink transition-colors duration-300 group-hover:text-plum md:text-[1.9rem]">
                    {service.title}
                  </h3>
                </div>
                <p className="max-w-sm font-body text-[0.92rem] leading-relaxed text-ink/68 md:text-right">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
