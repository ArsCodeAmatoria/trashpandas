/** Shared OG description and image paths for link previews (set `NEXT_PUBLIC_SITE_URL` in production). */
export const SITE_DESCRIPTION =
  "Trash Pandas — an animated sci-fi adventure. When a meticulous raccoon finds a vortex to a world where the discarded thrive, he must choose between closing it to save both worlds or staying behind with the one who taught him what survival means.";

export const HOME_OG_IMAGE = "/characters/trashpandas.png";

/**
 * Base URL for resolving relative `openGraph.images` / `twitter.images`.
 * Prefer `NEXT_PUBLIC_SITE_URL` (e.g. https://trashpandas.example.com). On Vercel, `VERCEL_URL` is used as fallback.
 */
export function getMetadataBaseUrl(): URL {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (configured) {
    const normalized = configured.replace(/\/$/, "");
    return new URL(normalized.startsWith("http") ? normalized : `https://${normalized}`);
  }
  const vercel = process.env.VERCEL_URL?.trim();
  if (vercel) {
    return new URL(`https://${vercel.replace(/\/$/, "")}`);
  }
  return new URL("http://localhost:3000");
}
