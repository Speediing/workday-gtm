import type { JobId } from "./types";

export type FleetComputer = {
  host: string;
  path: string;
  title: string;
  pill: string;
};

export type FleetBot = {
  id: string;
  name: string;
  blurb: string;
  color: string;
  jobId: JobId;
  status: string;
  computer: FleetComputer;
};

export const FLEET: FleetBot[] = [
  {
    id: "launch",
    name: "Launch",
    blurb: "Sits in the implementation call and drafts the customer plan.",
    color: "#E25A14",
    jobId: "implementation-plan",
    status: "On the call · writing the plan",
    computer: {
      host: "granola.app",
      path: "/notes/harbor-implementation",
      title: "Harbor implementation working session",
      pill: "Grouping decisions",
    },
  },
  {
    id: "relay",
    name: "Relay",
    blurb: "Finds product and internal answers, then drafts the reply.",
    color: "#0B5CAB",
    jobId: "sourced-answer",
    status: "Sources checked · draft waiting",
    computer: {
      host: "docs.google.com",
      path: "/document/d/harbor-reply",
      title: "Harbor sourced reply",
      pill: "Draft · not sent",
    },
  },
  {
    id: "brief",
    name: "Brief",
    blurb: "Reads the week's work and builds the project review table.",
    color: "#0F7A5A",
    jobId: "project-brief",
    status: "Friday review · table ready",
    computer: {
      host: "docs.google.com",
      path: "/spreadsheets/d/harbor-week",
      title: "Harbor weekly project brief",
      pill: "Grouped by project",
    },
  },
];
