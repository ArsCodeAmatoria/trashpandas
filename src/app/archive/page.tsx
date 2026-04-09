import type { Metadata } from "next";
import { ArchiveScrapbook } from "@/components/archive/archive-scrapbook";
import { getArchiveImagePaths } from "@/lib/archive-images";
import { HOME_OG_IMAGE, SITE_DESCRIPTION } from "@/lib/site-metadata";

const description =
  "Development scrapbook — concept frames, color experiments, and fragments from the Trash Pandas archive.";

export const metadata: Metadata = {
  title: "Archive",
  description,
  openGraph: {
    title: "Archive · Trash Pandas",
    description: `${description} ${SITE_DESCRIPTION}`,
    url: "/archive",
    images: [{ url: HOME_OG_IMAGE, alt: "Trash Pandas — key art" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Archive · Trash Pandas",
    description: `${description} ${SITE_DESCRIPTION}`,
    images: [HOME_OG_IMAGE],
  },
  alternates: { canonical: "/archive" },
};

export default function ArchivePage() {
  const images = getArchiveImagePaths();

  return (
    <section className="space-y-12 md:space-y-16">
      <header className="max-w-2xl space-y-4">
        <p className="page-label">Room / scrapbook</p>
        <h1 className="title-display">Archive</h1>
        <p className="subtitle">{description}</p>
      </header>

      <ArchiveScrapbook images={images} />
    </section>
  );
}
