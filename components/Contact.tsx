"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { brand } from "@/lib/data";
import { MagneticButtonEl } from "./MagneticButton";

type Status = "idle" | "submitting" | "success" | "error";

const inputClass =
  "w-full border-b border-ink/20 bg-transparent py-3 font-body text-sm text-ink placeholder:text-ink/40 focus:border-plum focus:outline-none transition-colors duration-300";

const labelClass = "font-body text-[0.68rem] uppercase tracking-wide2 text-ink/50";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="bg-plum-deep py-28 text-ivory md:py-36">
      <div className="container-editorial grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-body text-[0.72rem] font-semibold uppercase tracking-wide3 text-lavender"
          >
            Inquire
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-4 font-display text-[clamp(2.2rem,4.6vw,3.6rem)] leading-[1.05]"
          >
            Let&apos;s Create
            <br />
            Something Beautiful
          </motion.h2>

          <div className="mt-12 flex flex-col gap-5">
            <a
              href={`mailto:${brand.email}`}
              className="font-body text-sm text-ivory/80 underline decoration-ivory/30 underline-offset-4 transition-colors hover:text-ivory"
            >
              {brand.email}
            </a>
            <a
              href={brand.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="font-body text-sm text-ivory/80 underline decoration-ivory/30 underline-offset-4 transition-colors hover:text-ivory"
            >
              WhatsApp — {brand.whatsapp}
            </a>
            <a
              href={brand.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="font-body text-sm text-ivory/80 underline decoration-ivory/30 underline-offset-4 transition-colors hover:text-ivory"
            >
              {brand.instagramHandle}
            </a>
            <p className="font-body text-sm text-ivory/60">{brand.location}</p>
          </div>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          onSubmit={handleSubmit}
          className="lg:col-span-6 lg:col-start-7"
        >
          <div className="grid grid-cols-1 gap-x-8 gap-y-7 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className={labelClass}>Name</label>
              <input id="name" name="name" type="text" required className={inputClass} />
            </div>
            <div>
              <label htmlFor="email" className={labelClass}>Email</label>
              <input id="email" name="email" type="email" required className={inputClass} />
            </div>
            <div>
              <label htmlFor="phone" className={labelClass}>Phone</label>
              <input id="phone" name="phone" type="tel" className={inputClass} />
            </div>
            <div>
              <label htmlFor="eventType" className={labelClass}>Event Type</label>
              <input id="eventType" name="eventType" type="text" placeholder="Wedding, birthday, corporate…" className={inputClass} />
            </div>
            <div>
              <label htmlFor="eventDate" className={labelClass}>Event Date</label>
              <input id="eventDate" name="eventDate" type="date" className={inputClass} />
            </div>
            <div>
              <label htmlFor="location" className={labelClass}>Location</label>
              <input id="location" name="location" type="text" className={inputClass} />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="guestCount" className={labelClass}>Estimated Guest Count</label>
              <input id="guestCount" name="guestCount" type="number" min={1} className={inputClass} />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="vision" className={labelClass}>Tell us about your vision</label>
              <textarea id="vision" name="vision" rows={4} className={`${inputClass} resize-none`} />
            </div>
          </div>

          <MagneticButtonEl
            type="submit"
            disabled={status === "submitting"}
            strength={0.2}
            className="mt-10 inline-flex items-center bg-gold px-8 py-3.5 font-body text-[0.78rem] font-semibold uppercase tracking-wide2 text-ink transition-colors duration-300 hover:bg-lavender disabled:opacity-60"
          >
            {status === "submitting" ? "Sending…" : "Inquire With Maay Luxe"}
          </MagneticButtonEl>

          {status === "success" && (
            <p className="mt-4 font-body text-sm text-lavender">
              Thank you — we&apos;ve received your inquiry and will be in touch soon.
            </p>
          )}
          {status === "error" && (
            <p className="mt-4 font-body text-sm text-red-300">
              Something went wrong. Please try again, or reach us directly on WhatsApp or email.
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
