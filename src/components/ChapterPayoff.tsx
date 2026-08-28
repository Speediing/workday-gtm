import type { StoryBeat } from "@/data/types";
import { ArtifactCard } from "./ArtifactCard";

export function ChapterPayoff({
  beat,
  value,
}: {
  beat: StoryBeat;
  wash?: string;
  value?: string;
}) {
  const slides = beat.slides;
  const artifact = beat.artifact;

  let body = null;
  if (slides?.length) {
    body = (
      <div className="leave leave-artifact">
        <ArtifactCard
          artifact={{ kind: "slides", title: "Slides", cards: slides }}
        />
      </div>
    );
  } else if (artifact) {
    body = (
      <div className="leave leave-artifact">
        <ArtifactCard artifact={artifact} />
      </div>
    );
  }

  if (!body) return null;

  return (
    <div className="chapter-payoff">
      <p className="payoff-label">
        {beat.when ? <span>{beat.when}</span> : null}
        {beat.label}
      </p>
      {body}
      {value ? <p className="leave-value">{value}</p> : null}
    </div>
  );
}
