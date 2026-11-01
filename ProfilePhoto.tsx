import { useState } from "react";
import { cn } from "../utils/cn";

/** Owner-supplied portrait, served from Google Drive. */
export const PROFILE_PHOTO_URL =
  "https://drive.google.com/thumbnail?id=1HXZU_JRCvv8DbDft74ehmMpmqVjjQUCy&sz=s2000";

/** Local fallback kept in /public/images/profile.jpg. */
export const PROFILE_PHOTO_FALLBACK = "/images/profile.jpg";

/**
 * Read-only profile photo. Visitors cannot replace, edit or drag the image;
 * if the Drive URL fails, the bundled local copy is shown instead.
 */
export function ProfilePhoto({
  alt,
  className,
  loading = "lazy",
  priority = false,
}: {
  alt: string;
  className?: string;
  loading?: "lazy" | "eager";
  priority?: boolean;
}) {
  const [src, setSrc] = useState(PROFILE_PHOTO_URL);

  return (
    <img
      src={src}
      alt={alt}
      width={960}
      height={1200}
      loading={priority ? "eager" : loading}
      fetchPriority={priority ? "high" : "auto"}
      draggable={false}
      onDragStart={(event) => event.preventDefault()}
      onContextMenu={(event) => event.preventDefault()}
      onError={() => {
        if (src !== PROFILE_PHOTO_FALLBACK) setSrc(PROFILE_PHOTO_FALLBACK);
      }}
      className={cn("profile-photo", className)}
    />
  );
}
