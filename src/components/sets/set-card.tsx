"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ImageLightbox } from "@/components/media/image-lightbox";
import type { FilmSet } from "@/types";
import { flowerEase } from "@/lib/motion-presets";
import { cn } from "@/lib/utils";

export type SetCardProps = {
  set: FilmSet;
  index?: number;
  className?: string;
};

export function SetCard({ set: s, index = 0, className }: SetCardProps) {
  const [imageFailed, setImageFailed] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const href = `/sets/${s.slug}`;

  return (
    <motion.article
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.48,
        delay: index * 0.06,
        ease: flowerEase,
      }}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.998 }}
      className={cn("h-full", className)}
    >
      <div
        className={cn(
          "group/frame frame-cinematic flex h-full flex-col overflow-hidden transition-[box-shadow] duration-[520ms] ease-exhibition",
          "hover:shadow-[inset_0_0_0_1px_hsl(var(--accent)/0.2),0_24px_48px_-24px_hsl(var(--foreground)/0.12)]",
        )}
      >
        <div className="relative z-0 aspect-[16/10] w-full overflow-hidden bg-muted/40">
          {!imageFailed ? (
            <>
              <img
                src={s.image16x9}
                alt={`${s.name} — environment plate`}
                className="absolute inset-0 h-full w-full object-cover object-center opacity-95 transition-opacity duration-500 group-hover/frame:opacity-100"
                onError={() => setImageFailed(true)}
                loading={index < 2 ? "eager" : "lazy"}
                decoding="async"
              />
              <button
                type="button"
                className="absolute inset-0 z-[2] m-0 cursor-zoom-in border-0 bg-transparent p-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                aria-haspopup="dialog"
                aria-expanded={lightboxOpen}
                aria-label={`View larger image — ${s.name}`}
                onClick={() => setLightboxOpen(true)}
              />
            </>
          ) : null}
          {imageFailed ? (
            <div
              className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-muted via-surface to-accent-subtle/25"
              aria-hidden
            >
              <span className="font-display text-4xl font-medium tracking-tight text-foreground/15">
                {s.name.slice(0, 1)}
              </span>
            </div>
          ) : null}
          <div
            className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-80 transition-opacity duration-500 group-hover/frame:opacity-95"
            aria-hidden
          />
          <span
            className="pointer-events-none absolute inset-0 z-[1] ring-1 ring-inset ring-foreground/[0.06]"
            aria-hidden
          />
        </div>

        <Link
          href={href}
          className="group/link relative z-0 flex flex-1 flex-col gap-3 border-t border-border/30 bg-surface/22 px-5 py-5 outline-none transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background md:px-6 md:py-6"
        >
          <div className="space-y-1">
            <p className="page-label text-[0.58rem] tracking-[0.26em]">World design</p>
            <h2 className="font-display text-2xl font-medium tracking-tight text-foreground md:text-[1.65rem]">
              {s.name}
            </h2>
          </div>
          <p className="line-clamp-3 flex-1 font-sans text-sm leading-relaxed text-muted-foreground">
            {s.summary}
          </p>
          <p className="line-clamp-2 font-sans text-xs italic leading-relaxed text-muted-foreground/90">
            {s.symbolicMeaning}
          </p>
          <p className="font-sans text-[0.65rem] font-medium uppercase tracking-[0.2em] text-accent/80">
            <span className="opacity-70 transition-opacity duration-300 group-hover/link:opacity-100">
              Open set file
            </span>
          </p>
        </Link>
      </div>

      {!imageFailed ? (
        <ImageLightbox
          open={lightboxOpen}
          onOpenChange={setLightboxOpen}
          src={s.image16x9}
          alt={`${s.name} — environment plate (full size)`}
        />
      ) : null}
    </motion.article>
  );
}
