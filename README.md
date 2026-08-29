# Workday x SpaceXAI

Passworded site. Grok Bot from SpaceXAI, for Workday GTM.

## What it is

Three Workday GTM use cases on one page. Room Ops updates the open deck
during discovery, Paper drafts sourced answers to overnight procurement
questions, and Outbound researches target accounts before drafting personalized
outreach. Each job includes a problem statement, storyboard, and interactive
Grok Bot demo.

## Run locally

```bash
cp .env.example .env.local
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Default password is `land2expand` (override with `SITE_PASSWORD`).

## Checks

```bash
npm run check:customer
npm run lint
npm run build
```

## Deploy

Set `SITE_PASSWORD=land2expand` and deploy to the `jasonwiker` Vercel scope.
The production alias is `workday-grokbot.vercel.app`.
