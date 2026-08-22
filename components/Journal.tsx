"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import PortfolioImage from "./PortfolioImage";
import { journalPosts } from "@/lib/data";

export default function Journal() {
  return (
    <section id="journal" className="bg-ivory py-28 md:py-36">
      <div className="container-editorial">
        <SectionHeading eyebrow="Journal" title="Inspiration & Notes" align="left">
          Ideas, palettes, and behind-the-scenes notes from the studio.
        </SectionHeading>

        {journalPosts.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 border border-ink/10 px-8 py-14 text-center"
          >
            <p className="font-display text-xl italic text-ink/70">
              The journal is being written.
            </p>
            <p className="mt-3 font-body text-sm text-ink/50">
              Add posts to <code>journalPosts</code> in{" "}
              <code>lib/data.ts</code> and they&apos;ll appear here automatically.
            </p>
          </motion.div>
        ) : (
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
                <p className="mt-2 font-body text-sm leading-relaxed text-ink/60">
                  {post.excerpt}
                </p>
              </motion.article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
