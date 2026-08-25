"use client";

import { useState } from "react";

export default function PortfolioImage({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);

  // A custom className means this is a special context (e.g. the lightbox,
  // which shows the photo at true color) — skip the wrapper and grade
  // overlay there, they're only for default gallery/collage sizing.
  const isDefault = !className;
  const resolvedClassName = className ?? "h-full w-full object-cover";

  if (failed) {
    return (
      <div className={`asset-placeholder ${resolvedClassName}`}>
        <span>Add image at {src}</span>
      </div>
    );
  }

  // Plain <img> (not next/image) — this gallery is filled with real,
  // arbitrary-sized event photography the client will drop in directly,
  // so we avoid Next's fixed-dimension optimization pipeline here.
  const img = (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className={resolvedClassName}
    />
  );

  if (!isDefault) return img;

  return (
    <span className="relative block h-full w-full">
      {img}
      <span className="photo-grade" />
    </span>
  );
}
