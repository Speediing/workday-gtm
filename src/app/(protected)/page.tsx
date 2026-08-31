import { CompareTable } from "@/components/CompareTable";
import { HeroDemo } from "@/components/HeroDemo";
import { HeroTelemetry } from "@/components/HeroTelemetry";
import { JobSection } from "@/components/JobSection";
import { QuoteWall } from "@/components/QuoteWall";
import { SiteNav } from "@/components/SiteNav";
import { JOBS } from "@/data/jobs";

export default function HomePage() {
  return (
    <main id="top">
      <div className="hero-watercolor">
        <HeroTelemetry />
        <SiteNav />
        <div className="report">
          <div className="hero-paper">
            <section className="hero">
              <HeroDemo />
            </section>
            <section className="usecase-framing">
              <p className="eyebrow">Three sample use cases</p>
              <h2>
                Grok Bot gives every seller their own fleet of always-available
                agent teammates. Anything your sellers do today can be done
                through Grok Bot.
              </h2>
              <p>These are three examples from millions — not the boundary.</p>
            </section>
            <div className="metric-grid">
              {JOBS.map((job) => (
                <a key={job.id} className="metric-card" href={`#${job.id}`}>
                  <div className="metric-card-top">
                    <p>Sample {String(job.number).padStart(2, "0")}</p>
                  </div>
                  <h2>{job.title}</h2>
                  <p className="metric-trigger">
                    Starts when {job.trigger.toLowerCase()}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="report">
        <div id="jobs">
          {JOBS.map((job) => (
            <JobSection key={job.id} job={job} />
          ))}
        </div>
        <CompareTable />
        <QuoteWall />
      </div>

      <footer className="site-footer">
        <div>
          <p className="footer-title">Cursor for Workday</p>
          <p>Grok Bot for Workday</p>
        </div>
        <address className="footer-contact">
          <p>Your Cursor contact</p>
          <strong>Brian Fox</strong>
          <a href="mailto:brian.fox@cursor.com">
            brian.fox@cursor.com
          </a>
        </address>
      </footer>
    </main>
  );
}
