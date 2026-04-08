import { project } from "@/data/project";

/**
 * Logline cut into three beats for the credits reel (story-first).
 * Keep in sync with `project.logline` when the logline changes.
 */
export const creditsLoglineSlides = [
  "When a control-obsessed raccoon discovers a hidden vortex linking Earth to a chaotic world where his kind truly belongs,",
  "he must choose between closing it to save both worlds—",
  "or staying behind with the one who showed him what survival really means.",
] as const;

/** One short line under each billing card — story texture, not legal. */
export const creditsBillingStoryBridges = [
  "Zero-waste order on one side — instinct and appetite on the other.",
  "Pitch, script, and exhibition draft — collaborators to be announced.",
  "Animated feature in development; look, pipeline, and partners still ahead.",
] as const;

/** Synopsis → sentence beats for Act I–III texture in the reel. */
export function creditsSynopsisSlides(): readonly string[] {
  const parts = project.synopsis
    .trim()
    .split(/(?<=[.!?])\s+/)
    .map((s) => s.trim())
    .filter((s) => s.length > 0);
  return parts;
}

/** First index of the song cue cards (fixed front matter before `lyricSongs`). */
export const CREDITS_SONG_BLOCK_START_INDEX = 16;
