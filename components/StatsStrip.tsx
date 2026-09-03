"use client";

import { motion } from "framer-motion";
import AmbientGlow from "./AmbientGlow";
import { stats } from "@/lib/data";

export default function StatsStrip() {
  // No real numbers yet — hide rather than show placeholders or invented
  // figures. Add entries to `stats` in lib/data.ts and this appears
  // automatically, right under the Hero.
  if (stats.length === 0) return null;

  return (
    <section className="relative overflow-hidden bg-ink py-14 md:py-20">
      <AmbientGlow colorA="plum" colorB="gold" />
      <div className="container-editorial relative">
        <div className="grid grid-cols-2 gap-y-10 md:grid-cols-4 md:gap-y-0">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="text-center"
            >
              <p className="font-display text-4xl text-gold md:text-5xl">{stat.value}</p>
              <p className="mt-2 font-body text-[0.7rem] uppercase tracking-wide2 text-ivory/75">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
