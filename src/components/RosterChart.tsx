import { FLEET, type FleetBot } from "@/data/fleet";

function initials(bot: FleetBot) {
  return bot.name.slice(0, 2).toUpperCase();
}

function isLight(hex: string) {
  if (!hex.startsWith("#") || hex.length < 7) return false;
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return (r * 299 + g * 587 + b * 114) / 1000 > 180;
}

function MiniComputer({ bot }: { bot: FleetBot }) {
  return (
    <div className="fleet-computer" aria-hidden>
      <div className="fleet-chrome">
        <span className="fleet-dots">
          <i />
          <i />
          <i />
        </span>
        <code>
          {bot.computer.host}
          {bot.computer.path}
        </code>
      </div>
      <div className="fleet-screen">
        <p>{bot.computer.pill}</p>
        <strong>{bot.computer.title}</strong>
      </div>
    </div>
  );
}

function Card({ bot }: { bot: FleetBot }) {
  return (
    <a className="fleet-card" href={`#${bot.jobId}`}>
      <MiniComputer bot={bot} />
      <span
        className="org-avatar"
        style={{
          background: bot.color,
          color: isLight(bot.color) ? "#111" : "#fff",
        }}
        aria-hidden
      >
        {initials(bot)}
      </span>
      <span className="org-name">{bot.name}</span>
      <span className="org-blurb">{bot.blurb}</span>
      <span className="fleet-status">{bot.status}</span>
    </a>
  );
}

export function RosterChart() {
  return (
    <section id="roster" className="roster">
      <h2>A named agent for each job</h2>
      <p className="section-lede">
        Launch, Relay, and Brief each have a computer. A call, a question, or
        Friday review starts the work. Drafts stay drafts until you send.
      </p>

      <div className="fleet-grid">
        {FLEET.map((agent) => (
          <Card key={agent.id} bot={agent} />
        ))}
      </div>
    </section>
  );
}
