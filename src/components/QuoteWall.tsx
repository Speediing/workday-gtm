import { QUOTES } from "@/data/quotes";

const FEATURED_SOURCES = [
  "https://x.com/naval/status/2090497355649008059",
  "https://x.com/Austen/status/2087685264617406963",
  "https://x.com/AlexFinn/status/2089505950470459659",
  "https://x.com/GergelyOrosz/status/2090353329771631080",
  "https://x.com/clairevo/status/2090150050794225964",
  "https://x.com/bdistel/status/2089422456125546892",
];

function initials(name: string) {
  const parts = name.split(/\s+/).filter(Boolean);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return `${parts[0][0] || ""}${parts[parts.length - 1][0] || ""}`.toUpperCase();
}

export function QuoteWall() {
  const featuredQuotes = QUOTES.filter((quote) =>
    FEATURED_SOURCES.includes(quote.source),
  );

  return (
    <section id="testimonials" className="quotes">
      <h2>Testimonials</h2>
      <p className="section-lede">
        Public posts about Grok Bot. The words are theirs.
      </p>
      <div className="quote-thread">
        {featuredQuotes.map((quote) => (
          <article
            key={`${quote.handle}-${quote.date}-${quote.source}`}
            className="quote-row"
          >
            <div className="quote-who">
              <span className="quote-avatar" aria-hidden>
                {initials(quote.name)}
              </span>
              <div>
                <p className="quote-name">{quote.name}</p>
                <p className="quote-handle">{quote.handle}</p>
              </div>
            </div>
            <blockquote className="quote-bubble">{quote.quote}</blockquote>
            {quote.source ? (
              <a
                href={quote.source}
                target="_blank"
                rel="noopener noreferrer"
                className="quote-source"
              >
                Read source →
              </a>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}
