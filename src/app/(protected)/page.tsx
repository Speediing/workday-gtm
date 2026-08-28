import { CompareTable } from "@/components/CompareTable";
import { HeroTelemetry } from "@/components/HeroTelemetry";
import { JobSection } from "@/components/JobSection";
import { QuoteWall } from "@/components/QuoteWall";
import { RosterChart } from "@/components/RosterChart";
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
              <div>
                <p className="eyebrow">Workday x SpaceXAI</p>
                <h1>Agents that keep customer work moving.</h1>
                <p className="hero-intro">
                  A call starts. A hard question lands. Friday review comes
                  around. Launch, Relay, and Brief pick up the work on their own
                  computers. You decide what gets sent.
                </p>
              </div>
            </section>

            <section className="usecase-framing">
              <p className="eyebrow">Three sample use cases</p>
              <h2>The work starts before someone remembers to prompt it.</h2>
              <p>Each example ends with something your team can use.</p>
            </section>

            <div className="metric-grid">
              {JOBS.map((job) => (
                <a
                  key={job.id}
                  className="metric-card"
                  href={`#${job.id}`}
                >
                  <div className="metric-card-top">
                    <p>Sample {String(job.number).padStart(2, "0")}</p>
                  </div>
                  <h2>{job.title}</h2>
                  <p className="metric-trigger">Starts when {job.trigger.toLowerCase()}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="report">
        <RosterChart />
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
