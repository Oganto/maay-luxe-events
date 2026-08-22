"use client";

import { useRef, useState, type ReactNode, type MouseEvent } from "react";
import { motion } from "framer-motion";

const spring = { type: "spring" as const, stiffness: 150, damping: 12, mass: 0.4 };

function useMagnetic(strength: number) {
  const ref = useRef<HTMLElement | null>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  function onMouseMove(e: MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setOffset({ x: x * strength, y: y * strength });
  }

  function onMouseLeave() {
    setOffset({ x: 0, y: 0 });
  }

  return { ref, offset, onMouseMove, onMouseLeave };
}

/**
 * A restrained "magnetic" hover effect for the site's primary CTAs —
 * the button drifts gently toward the cursor, then springs back.
 * Purely decorative; falls back to a static element automatically
 * since touch devices don't fire mousemove.
 */
export function MagneticLink({
  children,
  className,
  href,
  target,
  rel,
  strength = 0.3,
}: {
  children: ReactNode;
  className?: string;
  href: string;
  target?: string;
  rel?: string;
  strength?: number;
}) {
  const { ref, offset, onMouseMove, onMouseLeave } = useMagnetic(strength);
  return (
    <motion.a
      ref={ref as React.Ref<HTMLAnchorElement>}
      href={href}
      target={target}
      rel={rel}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      animate={{ x: offset.x, y: offset.y }}
      transition={spring}
      className={className}
    >
      {children}
    </motion.a>
  );
}

export function MagneticButtonEl({
  children,
  className,
  type = "button",
  disabled,
  strength = 0.3,
}: {
  children: ReactNode;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  strength?: number;
}) {
  const { ref, offset, onMouseMove, onMouseLeave } = useMagnetic(strength);
  return (
    <motion.button
      ref={ref as React.Ref<HTMLButtonElement>}
      type={type}
      disabled={disabled}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      animate={{ x: offset.x, y: offset.y }}
      transition={spring}
      className={className}
    >
      {children}
    </motion.button>
  );
}
