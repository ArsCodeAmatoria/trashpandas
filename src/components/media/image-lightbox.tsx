"use client";

import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

export type ImageLightboxProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  src: string;
  alt: string;
  className?: string;
};

/**
 * Full-viewport image overlay — backdrop dismiss, Escape, and explicit close control.
 */
export function ImageLightbox({ open, onOpenChange, src, alt, className }: ImageLightboxProps) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onOpenChange(false);
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onOpenChange]);

  if (typeof document === "undefined" || !open) return null;

  return createPortal(
    <div
      className={cn("fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8", className)}
      role="dialog"
      aria-modal="true"
      aria-label="Full-size image"
    >
      <button
        type="button"
        className="absolute inset-0 bg-background/88 backdrop-blur-md transition-opacity"
        aria-label="Close image"
        onClick={() => onOpenChange(false)}
      />

      <div className="relative z-[1] flex max-h-[min(92vh,100dvh)] max-w-[min(96vw,100dvw)] items-center justify-center">
        {/* Raw img: arbitrary exhibition assets + intrinsic sizing in overlay; next/image needs known dimensions/domain config. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          className="max-h-[min(92vh,100dvh)] max-w-full object-contain shadow-frame-outer ring-1 ring-border/40"
          draggable={false}
        />
      </div>

      <button
        ref={closeRef}
        type="button"
        className="absolute right-3 top-3 z-[2] flex h-10 w-10 items-center justify-center rounded-sm border border-border/50 bg-surface/90 text-muted-foreground shadow-frame-inset transition-subtle hover:border-border hover:bg-muted/50 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:right-5 sm:top-5"
        aria-label="Close"
        onClick={() => onOpenChange(false)}
      >
        <X className="h-4 w-4" strokeWidth={1.5} aria-hidden />
      </button>
    </div>,
    document.body,
  );
}
