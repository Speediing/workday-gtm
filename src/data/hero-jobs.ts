export type HeroJobIcon =
  | "outbound"
  | "research"
  | "follow-up"
  | "deal-desk"
  | "pipeline"
  | "renewal"
  | "competitive"
  | "chief-of-staff";

export type HeroJob = {
  name: string;
  icon: HeroJobIcon;
  account: string;
  signal: string;
  work: string;
  result: string;
  user: string;
  bot: string;
};

export const HERO_JOBS: HeroJob[] = [
  {
    name: "Room Ops",
    icon: "follow-up",
    account: "Acme",
    signal: "Customer call started",
    work: "I am following Granola for their language and product signals, then updating the open deck while the call is live.",
    result: "Customer-specific slides ready",
    user: "keep the deck and one-pager as drafts",
    bot: "kept. nothing sent.",
  },
  {
    name: "Paper",
    icon: "deal-desk",
    account: "Acme",
    signal: "Procurement questions landed overnight",
    work: "I checked billing, finance, and packaging, then drafted a sourced reply while you were offline.",
    result: "Sourced procurement reply ready",
    user: "leave it for me to send",
    bot: "left. the draft is waiting.",
  },
  {
    name: "Outbound",
    icon: "outbound",
    account: "Acme",
    signal: "Target account entered your list",
    work: "I researched the account, wrote the 3-why, and drafted LinkedIn, email, and an Acme page.",
    result: "Three personalized drafts ready",
    user: "keep every channel in draft",
    bot: "kept. zero sent.",
  },
];
