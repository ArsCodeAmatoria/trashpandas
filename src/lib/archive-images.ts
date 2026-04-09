import fs from "fs";
import path from "path";

const ARCHIVE_DIR = path.join(process.cwd(), "public/archive");
const IMAGE_EXT = /\.(png|jpe?g|webp|gif)$/i;

/** Public URL paths for flat files in `public/archive`, sorted numerically when named `01.png`, etc. */
export function getArchiveImagePaths(): string[] {
  if (!fs.existsSync(ARCHIVE_DIR)) return [];
  return fs
    .readdirSync(ARCHIVE_DIR)
    .filter((f) => IMAGE_EXT.test(f) && !f.startsWith("."))
    .sort((a, b) => {
      const na = parseInt(/^(\d+)/.exec(a)?.[1] ?? "", 10);
      const nb = parseInt(/^(\d+)/.exec(b)?.[1] ?? "", 10);
      if (!Number.isNaN(na) && !Number.isNaN(nb) && na !== nb) return na - nb;
      return a.localeCompare(b, undefined, { numeric: true });
    })
    .map((f) => `/archive/${encodeURIComponent(f)}`);
}
