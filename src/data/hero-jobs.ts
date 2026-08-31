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
    name: "Launch",
    icon: "outbound",
    account: "Sample customer",
    signal: "Implementation call started",
    work: "I stayed on the call and drafted the implementation plan from the decisions. The plan stays with you.",
    result: "Implementation plan draft ready",
    user: "keep it as a draft, i will review",
    bot: "kept. nothing sent.",
  },
  {
    name: "Relay",
    icon: "research",
    account: "Sample customer",
    signal: "Customer question landed",
    work: "I checked the product docs and the matching internal note, then drafted the sourced reply.",
    result: "Sourced reply draft ready",
    user: "leave it for me to send",
    bot: "left. the draft is waiting.",
  },
  {
    name: "Follow-up",
    icon: "follow-up",
    account: "Sample customer",
    signal: "Customer call ended",
    work: "I wrote the recap from the call notes, including the next working session. It stays a draft.",
    result: "Call recap draft ready",
    user: "i will send the recap after i edit",
    bot: "sounds good. the draft stays here.",
  },
  {
    name: "Deal Desk",
    icon: "deal-desk",
    account: "Sample customer",
    signal: "Procurement checklist received",
    work: "I checked the procurement list against the standard answers and drafted the open items.",
    result: "Procurement check draft ready",
    user: "hold the open items for me",
    bot: "held. nothing routed yet.",
  },
  {
    name: "Pipeline",
    icon: "pipeline",
    account: "Sample customer",
    signal: "Quiet deals need a look",
    work: "I reviewed the quiet deals and drafted a hygiene list of what still needs an owner.",
    result: "Pipeline hygiene draft ready",
    user: "i will brief the account owners",
    bot: "ready when you are. nothing sent.",
  },
  {
    name: "Renewal",
    icon: "renewal",
    account: "Sample customer",
    signal: "Renewal date landed on the calendar",
    work: "I pulled the current notes and drafted a renewal prep brief for the account team.",
    result: "Renewal prep draft ready",
    user: "keep this for the account review",
    bot: "kept. i will refresh it if the date moves.",
  },
  {
    name: "Intel",
    icon: "competitive",
    account: "Sample customer",
    signal: "Another vendor came up on the call",
    work: "I pulled the buyer concern from the notes and drafted comparison notes for the next call.",
    result: "Competitive research draft ready",
    user: "add it to tomorrow's call brief",
    bot: "added to the draft brief. you still send it.",
  },
  {
    name: "Brief",
    icon: "chief-of-staff",
    account: "Sample customer",
    signal: "Friday review came around",
    work: "I grouped the week's work by project and drafted the review table.",
    result: "Weekly review draft ready",
    user: "i will edit this before friday",
    bot: "good. the table stays a draft.",
  },
];
