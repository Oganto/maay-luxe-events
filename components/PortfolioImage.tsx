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
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className={resolvedClassName}
    />
  );
}
