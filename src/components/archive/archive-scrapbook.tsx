"use client";

import { useCallback, useState } from "react";
import { ImageLightbox } from "@/components/media/image-lightbox";
import { cn } from "@/lib/utils";

function tiltClass(index: number): string {
  const classes = [
    "-rotate-[0.9deg]",
    "rotate-[0.65deg]",
    "-rotate-[0.45deg]",
    "rotate-[0.85deg]",
    "rotate-[0.35deg]",
    "-rotate-[0.75deg]",
  ];
  return classes[index % classes.length];
}

export type ArchiveScrapbookProps = {
  images: string[];
  className?: string;
};

/**
 * Column masonry with natural aspect thumbnails; opens shared lightbox on tap.
 */
export function ArchiveScrapbook({ images, className }: ArchiveScrapbookProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeSrc, setActiveSrc] = useState<string | null>(null);

  const openItem = useCallback((src: string) => {
    setActiveSrc(src);
    setLightboxOpen(true);
  }, []);

  const onLightboxOpenChange = useCallback((open: boolean) => {
    setLightboxOpen(open);
    if (!open) setActiveSrc(null);
  }, []);

  if (images.length === 0) {
    return (
      <p className="font-sans text-sm text-muted-foreground">
        No images in <code className="text-foreground/80">public/archive</code> yet. Add numbered files (01.png,
        02.png, …).
      </p>
    );
  }

  return (
    <div className={cn(className)}>
      <div className="columns-1 gap-x-5 gap-y-8 sm:columns-2 lg:columns-3 lg:gap-x-8 [&>article]:break-inside-avoid">
        {images.map((src, i) => (
          <article key={src} className="mb-8">
            <button
              type="button"
              onClick={() => openItem(src)}
              className={cn(
                "group w-full max-w-full bg-transparent p-0 text-left outline-none transition-[transform,filter] duration-500 ease-exhibition",
                "hover:scale-[1.02] hover:drop-shadow-[0_18px_36px_-12px_hsl(var(--foreground)/0.18)] focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                tiltClass(i),
              )}
              aria-haspopup="dialog"
              aria-label={`Open archive image ${i + 1} larger`}
            >
              <div className="frame-cinematic relative overflow-hidden bg-surface/35 p-2 shadow-frame-inset ring-1 ring-border/35 md:p-2.5">
                {/* eslint-disable-next-line @next/next/no-img-element -- natural aspect scrapbook tiles */}
                <img
                  src={src}
                  alt=""
                  className="h-auto w-full bg-muted/25"
                  loading={i < 6 ? "eager" : "lazy"}
                  decoding="async"
                  draggable={false}
                />
              </div>
            </button>
          </article>
        ))}
      </div>

      {activeSrc ? (
        <ImageLightbox
          open={lightboxOpen}
          onOpenChange={onLightboxOpenChange}
          src={activeSrc}
          alt="Archive image"
        />
      ) : null}
    </div>
  );
}
