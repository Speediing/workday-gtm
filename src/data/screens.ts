import type { JobId } from "./types";

export type SiteKind = "granola" | "gmail" | "gdoc" | "sheets";

export type ChromeTab = {
  id: string;
  host: string;
  label: string;
};

export type ComputerBeat = {
  pill: string;
  host: string;
  path?: string;
  title: string;
  site: SiteKind;
  tabs: ChromeTab[];
};

const granola = { id: "granola", host: "granola.app", label: "Granola" };
const gmail = { id: "gmail", host: "mail.google.com", label: "Gmail" };
const gdoc = { id: "gdoc", host: "docs.google.com", label: "Docs" };
const sheets = { id: "sheets", host: "docs.google.com", label: "Sheets" };

export const SCREENS: Record<JobId, Record<string, ComputerBeat>> = {
  "implementation-plan": {
    m1: {
      pill: "Opening the call notes",
      host: "granola.app",
      path: "/notes/harbor-implementation",
      title: "Harbor implementation working session",
      site: "granola",
      tabs: [granola, gdoc, gmail],
    },
    m2: {
      pill: "Grouping decisions",
      host: "granola.app",
      path: "/notes/harbor-implementation",
      title: "Harbor implementation working session",
      site: "granola",
      tabs: [granola, gdoc, gmail],
    },
    m3: {
      pill: "Writing the plan",
      host: "docs.google.com",
      path: "/document/d/harbor-plan",
      title: "Harbor implementation plan",
      site: "gdoc",
      tabs: [granola, gdoc, gmail],
    },
    m4: {
      pill: "Plan draft parked",
      host: "docs.google.com",
      path: "/document/d/harbor-plan",
      title: "Harbor implementation plan",
      site: "gdoc",
      tabs: [granola, gdoc, gmail],
    },
    m5: {
      pill: "Drafting in Gmail, not sent",
      host: "mail.google.com",
      path: "/mail/u/0/#drafts",
      title: "Drafts",
      site: "gmail",
      tabs: [granola, gdoc, gmail],
    },
  },
  "sourced-answer": {
    m1: {
      pill: "Opening the question",
      host: "mail.google.com",
      path: "/mail/u/0/#inbox",
      title: "Inbox",
      site: "gmail",
      tabs: [gmail, gdoc],
    },
    m2: {
      pill: "Checking product and internal notes",
      host: "docs.google.com",
      path: "/document/d/harbor-sources",
      title: "Harbor sources",
      site: "gdoc",
      tabs: [gmail, gdoc],
    },
    m3: {
      pill: "Writing the sourced reply",
      host: "docs.google.com",
      path: "/document/d/harbor-reply",
      title: "Harbor sourced reply",
      site: "gdoc",
      tabs: [gmail, gdoc],
    },
    m4: {
      pill: "Drafting in Gmail, not sent",
      host: "mail.google.com",
      path: "/mail/u/0/#drafts",
      title: "Drafts",
      site: "gmail",
      tabs: [gmail, gdoc],
    },
    m5: {
      pill: "Drafting in Gmail, not sent",
      host: "mail.google.com",
      path: "/mail/u/0/#drafts",
      title: "Drafts",
      site: "gmail",
      tabs: [gmail, gdoc],
    },
  },
  "project-brief": {
    m1: {
      pill: "Scanning active projects",
      host: "docs.google.com",
      path: "/spreadsheets/d/harbor-week",
      title: "Harbor weekly project brief",
      site: "sheets",
      tabs: [sheets, gdoc],
    },
    m2: {
      pill: "Grouping work by project",
      host: "docs.google.com",
      path: "/document/d/harbor-week-notes",
      title: "Harbor week notes",
      site: "gdoc",
      tabs: [sheets, gdoc],
    },
    m3: {
      pill: "Building the review table",
      host: "docs.google.com",
      path: "/spreadsheets/d/harbor-week",
      title: "Harbor weekly project brief",
      site: "sheets",
      tabs: [sheets, gdoc],
    },
    m4: {
      pill: "Table parked. Nothing sent",
      host: "docs.google.com",
      path: "/spreadsheets/d/harbor-week",
      title: "Harbor weekly project brief",
      site: "sheets",
      tabs: [sheets, gdoc],
    },
  },
};

export function beatFor(
  jobId: JobId,
  messageId: string | undefined,
): ComputerBeat | undefined {
  if (!messageId) return undefined;
  return SCREENS[jobId]?.[messageId];
}
