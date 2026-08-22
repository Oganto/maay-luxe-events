"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { brand, navLinks } from "@/lib/data";
import { MagneticLink } from "./MagneticButton";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // The nav sits over a dark hero video at the top of the page, then gets an
  // ivory background once scrolled — text needs to flip from light to dark
  // to stay legible in both states.
  const light = !scrolled && !menuOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-editorial ${
        scrolled || menuOpen
          ? "bg-ivory/90 backdrop-blur-md shadow-[0_1px_0_0_rgba(69,24,109,0.08)]"
          : "bg-transparent"
      }`}
    >
      <nav className="container-editorial flex h-20 items-center justify-between md:h-24">
        <a href="#home" className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ivory shadow-sm md:h-10 md:w-10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/logo-mark.png"
              alt="Maay Luxe Events monogram"
              className="h-6 w-6 object-contain md:h-7 md:w-7"
            />
          </span>
          <span
            className={`font-display text-lg tracking-wide2 transition-colors duration-500 md:text-xl ${
              light ? "text-ivory" : "text-ink"
            }`}
          >
            MAAY LUXE
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-9 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`font-body text-[0.78rem] font-medium uppercase tracking-wide2 transition-colors duration-500 hover:text-gold ${
                  light ? "text-ivory/90" : "text-ink/80"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <MagneticLink
            href="#contact"
            strength={0.25}
            className={`inline-flex items-center border px-6 py-2.5 font-body text-[0.75rem] font-semibold uppercase tracking-wide2 transition-colors duration-500 ${
              light
                ? "border-ivory/70 text-ivory hover:bg-ivory hover:text-plum"
                : "border-plum text-plum hover:bg-plum hover:text-ivory"
            }`}
          >
            Plan Your Event
          </MagneticLink>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
          className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-[6px] lg:hidden"
        >
          <span
            className={`block h-px w-6 transition-all duration-300 ${
              light ? "bg-ivory" : "bg-ink"
            } ${menuOpen ? "translate-y-[3.5px] rotate-45 !bg-ink" : ""}`}
          />
          <span
            className={`block h-px w-6 transition-all duration-300 ${
              light ? "bg-ivory" : "bg-ink"
            } ${menuOpen ? "-translate-y-[3.5px] -rotate-45 !bg-ink" : ""}`}
          />
        </button>
      </nav>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 top-0 z-40 flex h-[100dvh] flex-col justify-center bg-ivory lg:hidden"
          >
            <ul className="container-editorial flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05, duration: 0.4 }}
                >
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="font-display text-3xl text-ink"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
            <div className="container-editorial mt-10 flex flex-col gap-2 text-[0.8rem] uppercase tracking-wide2 text-ink/60">
              <a href={brand.whatsappUrl} target="_blank" rel="noreferrer">
                WhatsApp
              </a>
              <a href={brand.instagramUrl} target="_blank" rel="noreferrer">
                Instagram
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
