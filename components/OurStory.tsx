"use client";

import { motion } from "framer-motion";
import PortfolioImage from "./PortfolioImage";
import { ourStoryParagraphs } from "@/lib/data";

export default function OurStory() {
  return (
    <section className="bg-porcelain py-28 md:py-36">
      <div className="container-editorial grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <p className="eyebrow mb-4 text-plum">Our Story</p>
            <h2 className="font-display text-[clamp(2.2rem,4.4vw,3.4rem)] leading-[1.08] text-ink">
              From Curiosity to Craft.
              <br />
              From Moments to Maay Luxe.
            </h2>
            <div className="mt-10 aspect-[4/5] w-full max-w-sm overflow-hidden border-4 border-ivory shadow-xl">
              <PortfolioImage
                src="/assets/events/event-02-rooftop-proposal.jpg"
                alt="Styling by Maay Luxe Events"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-7 lg:col-span-6 lg:col-start-7">
          {ourStoryParagraphs.map((paragraph, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="font-body text-[1.05rem] leading-[1.85] text-ink/82"
            >
              {paragraph}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}
