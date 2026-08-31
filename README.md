# Workday x SpaceXAI

Passworded site. Grok Bot from SpaceXAI, for Workday GTM.

## What it is

Three named agents on one page. Launch turns an implementation call into a plan. Relay turns a hard question into a sourced draft. Brief turns a weekly review into a project table. Each job has a short problem statement, scene-in-time frames, and an interactive Grok Bot demo. Below that: a comparison table and the public Grok Bot quote wall.

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
