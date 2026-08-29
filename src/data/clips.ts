import type { Clip, ClipId } from "./types";

function clip(id: ClipId, title: string, caption: string): Clip {
  return {
    id,
    file: `/api/media/krista-clips/${id}.mp4`,
    poster: `/media/krista-clips/${id}.jpg`,
    title,
    caption,
  };
}

export const CLIPS: Record<ClipId, Clip> = {
  "01-morning-inbox": clip(
    "01-morning-inbox",
    "Morning inbox",
    "7:30am weekday scan. Flags what needs a reply. Quiet if the inbox is empty.",
  ),
  "02-prospecting-pg": clip(
    "02-prospecting-pg",
    "Prospecting",
    "Five drafted emails. None send until she says so.",
  ),
  "03-slides-granola": clip(
    "03-slides-granola",
    "Slides from the room",
    "Granola is in. Slides writes the What we heard cards while she is still on the call.",
  ),
};
