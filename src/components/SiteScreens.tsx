import type { Artifact, DemoMessage } from "@/data/types";
import type { ComputerBeat } from "@/data/screens";

function asGmail(artifact?: Artifact) {
  return artifact?.kind === "gmail" ? artifact : null;
}
function asOnePager(artifact?: Artifact) {
  return artifact?.kind === "one-pager" ? artifact : null;
}
function asPacket(artifact?: Artifact) {
  return artifact?.kind === "packet" ? artifact : null;
}
function asTable(artifact?: Artifact) {
  return artifact?.kind === "table" ? artifact : null;
}

export function SiteScreen({
  beat,
  message,
  account,
  sent,
}: {
  beat: ComputerBeat;
  message?: DemoMessage;
  account: string;
  sent: boolean;
}) {
  const artifact = message?.artifact;

  switch (beat.site) {
    case "granola":
      return <GranolaScreen account={account} />;
    case "gmail":
      return (
        <GmailScreen account={account} artifact={asGmail(artifact)} sent={sent} />
      );
    case "gdoc":
      return (
        <GdocScreen
          account={account}
          onePager={asOnePager(artifact)}
          packet={asPacket(artifact)}
        />
      );
    case "sheets":
      return <SheetsScreen account={account} artifact={asTable(artifact)} />;
    default: {
      const exhaustive: never = beat.site;
      return exhaustive;
    }
  }
}

function GranolaScreen({ account }: { account: string }) {
  return (
    <div className="site site-granola">
      <header>
        <strong>Granola</strong>
        <span>Live · last 20 min</span>
      </header>
      <p className="site-time">Still on the call · notes open</p>
      <ul>
        <li>
          <span>14:12</span> {account} wants a phased go-live, not a one-shot
          cutover.
        </li>
        <li>
          <span>14:18</span> Payroll is the first workstream. Time and absence
          come after.
        </li>
        <li>
          <span>14:21</span> Security wants SSO named before any extra products.
        </li>
        <li>
          <span>14:28</span> Tuesday working session. Bring the sample group and
          the security owner.
        </li>
        <li>
          <span>14:31</span> Launch is writing these into the plan as notes, not
          as quotes.
        </li>
      </ul>
    </div>
  );
}

function GmailScreen({
  account,
  artifact,
  sent,
}: {
  account: string;
  artifact: ReturnType<typeof asGmail>;
  sent: boolean;
}) {
  return (
    <div className="site site-gmail">
      <header>
        <strong>Gmail</strong>
        <em>{sent ? "Sent" : "Draft · not sent"}</em>
      </header>
      <p>
        <span>To</span>
        {artifact?.to || `${account} customer ops`}
      </p>
      <p>
        <span>Subject</span>
        {artifact?.subject || `${account} draft`}
      </p>
      <div>{artifact?.body || "Draft parked here until you tap Send."}</div>
    </div>
  );
}

function GdocScreen({
  account,
  onePager,
  packet,
}: {
  account: string;
  onePager: ReturnType<typeof asOnePager>;
  packet: ReturnType<typeof asPacket>;
}) {
  return (
    <div className="site site-gdoc">
      <header>
        <strong>Docs</strong>
        <span>
          {packet
            ? packet.title
            : onePager?.title || `${account} working note`}
        </span>
      </header>
      <article>
        {packet ? (
          packet.fields.map((field) => (
            <p key={field.label}>
              <b>{field.label}.</b> {field.value}
            </p>
          ))
        ) : onePager ? (
          onePager.sections.map((section) => (
            <p key={section.heading}>
              <b>{section.heading}.</b> {section.body}
            </p>
          ))
        ) : (
          <p>Working note for {account}.</p>
        )}
      </article>
    </div>
  );
}

function SheetsScreen({
  account,
  artifact,
}: {
  account: string;
  artifact: ReturnType<typeof asTable>;
}) {
  const cols = artifact?.columns ?? ["Project", "What moved", "Stuck on", "Next"];
  const rows = artifact?.rows ?? [
    [
      `${account} payroll go-live`,
      "Parallel run notes cleaned",
      "Sample group sign-off",
      "Tuesday working session",
    ],
    [
      "Absence rollout",
      "Config ready",
      "Sample group list",
      "Hold until payroll is clean",
    ],
    [
      "Reporting pack",
      "First draft written",
      "Your review",
      "Send after you edit",
    ],
  ];

  return (
    <div className="site site-sheets">
      <header>
        <span className="sheets-mark">Sheets</span>
        <strong>{artifact?.title || `${account} weekly project brief`}</strong>
      </header>
      <table>
        <thead>
          <tr>
            {cols.map((col) => (
              <th key={col}>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
