import type { SlideCard } from "@/data/types";

export function HeardSlide({
  slides,
  size = "lg",
}: {
  slides: SlideCard[];
  size?: "sm" | "lg";
  wash?: string;
}) {
  return (
    <div className={`leave leave-deck size-${size}`}>
      <div className={`deck-slides size-${size}`}>
        {slides.map((slide) => (
          <article
            key={`${slide.n}-${slide.title}`}
            className={`deck-tile${slide.voice ? ` voice-${slide.voice}` : ""}`}
          >
            <div className="deck-tile-bar">
              <span className="deck-kicker">{slide.kicker || "Note"}</span>
              <span className="deck-n">{slide.n}</span>
            </div>
            <h4 className="deck-tile-title">{slide.title}</h4>
            <p className="deck-map">{slide.body}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
