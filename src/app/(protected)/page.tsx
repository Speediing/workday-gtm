import { CompareTable } from "@/components/CompareTable";
import { HeroDemo } from "@/components/HeroDemo";
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
              <HeroDemo />
            </section>
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
