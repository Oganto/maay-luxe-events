"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import PortfolioImage from "./PortfolioImage";
import { journalPosts } from "@/lib/data";

export default function Journal() {
  // No content yet — hide the section entirely rather than show a
  // placeholder. It reappears automatically once entries are added to
  // `journalPosts` in lib/data.ts.
  if (journalPosts.length === 0) return null;

  return (
    <section id="journal" className="bg-ivory py-28 md:py-36">
      <div className="container-editorial">
        <SectionHeading eyebrow="Journal" title="Inspiration & Notes" align="left">
          Ideas, palettes, and behind-the-scenes notes from the studio.
        </SectionHeading>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {journalPosts.map((post, i) => (
            <motion.article
              key={post.title + i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <PortfolioImage src={post.image} alt={post.title} />
              </div>
              <p className="mt-5 font-body text-[0.68rem] uppercase tracking-wide2 text-plum">
                {post.category}
              </p>
              <h3 className="mt-2 font-display text-xl text-ink">{post.title}</h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-ink/72">
                {post.excerpt}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
