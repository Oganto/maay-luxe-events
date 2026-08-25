type GlowColor = "plum" | "lavender" | "gold";

const colorMap: Record<GlowColor, string> = {
  plum: "bg-plum/25",
  lavender: "bg-lavender/25",
  gold: "bg-gold/20",
};

/**
 * Soft, slow-moving colour blobs for ambient depth behind a section.
 * Purely decorative — absolutely positioned, pointer-events disabled,
 * and the drift animation is skipped automatically under
 * prefers-reduced-motion (handled in globals.css).
 */
export default function AmbientGlow({
  colorA = "plum",
  colorB = "gold",
}: {
  colorA?: GlowColor;
  colorB?: GlowColor;
}) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className={`ambient-blob ambient-blob-a -left-24 -top-24 h-80 w-80 md:h-[28rem] md:w-[28rem] ${colorMap[colorA]}`}
      />
      <div
        className={`ambient-blob ambient-blob-b -bottom-24 -right-24 h-72 w-72 md:h-[26rem] md:w-[26rem] ${colorMap[colorB]}`}
      />
    </div>
  );
}
