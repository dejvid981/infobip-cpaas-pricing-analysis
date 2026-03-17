# Infobip CPaaS Pricing Model Analysis

An interactive dashboard analyzing Infobip's CPaaS messaging pricing across SMS, WhatsApp, RCS, and Viber — covering 13 markets, benchmarked against Twilio, with a 10M messages/month enterprise scenario.

**[Live Demo](https://infobip-cpaas-pricing-analysis.vercel.app)**

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38bdf8?logo=tailwindcss)
![Deployed on Vercel](https://img.shields.io/badge/Deployed-Vercel-black?logo=vercel)

---

## What This Analyzes

| Dimension | Detail |
|-----------|--------|
| **Channels** | SMS, WhatsApp Business, RCS (MaaP), Viber Business |
| **Markets** | 13 countries across Europe, LATAM, APAC, MEA, North America |
| **Benchmark** | Infobip vs Twilio per-message rates |
| **Scenario** | Enterprise client sending 10M messages/month |
| **Metrics** | Revenue, gross margin, cost structure, channel profitability |

## Key Findings

- **European SMS** is 27% of volume but 62% of gross margin dollars — the profit engine
- **WhatsApp** markup of 25-40% above Meta's base creates a new margin layer, not cannibalization
- **Viber's** minimum commitment model (€100-150/month per sender) delivers predictable recurring revenue
- **RCS via MaaP** positions Infobip as carrier infrastructure, not a reseller

## Features

### Animated KPI Bar
Counters tick up on scroll — 13 markets, 4 channels, 10M messages, $248K revenue scenario.

### Channel Breakdown Tabs
Switch between SMS, WhatsApp, RCS, and Viber. Each tab shows:
- Pricing heat map across countries
- Infobip vs Twilio comparison bar charts
- Key insight cards
- Volume discount tables (SMS/WhatsApp)

### Profitability Dashboard
- Revenue donut chart by channel
- Revenue + margin combo chart
- Regional profitability table with expandable rows

### Channel Migration Simulator
Drag a slider from 100% SMS to 100% WhatsApp for any region. Watch revenue and margin shift in real-time. See the exact crossover point where channel economics flip.

### Competitive Analysis
Horizontal grouped bar chart — Infobip vs Twilio vs Sinch vs Vonage across price, reach, channel support, enterprise focus, dev experience, and revenue.

### What I'd Investigate Next
Six open questions that require internal data — route optimization, margin elasticity, enterprise discount impact, churn correlation, and more.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router, static export) |
| Language | TypeScript |
| Styling | Tailwind CSS 4 (dark theme) |
| Charts | Recharts |
| Animations | Framer Motion |
| Deployment | Vercel |

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with dark theme
│   ├── page.tsx            # Main page assembling all sections
│   └── globals.css         # Global styles
├── components/
│   ├── sections/           # Page sections (Hero, KPI, Channel Breakdown, etc.)
│   ├── charts/             # Chart components (Donut, Combo, Comparison bars)
│   ├── simulator/          # Channel Migration Simulator
│   ├── tables/             # Data tables
│   ├── channels/           # Per-channel tab content
│   └── ui/                 # Reusable UI (AnimatedCounter, Card, TabBar, etc.)
├── data/                   # All pricing data as typed TypeScript constants
│   ├── smsRates.ts
│   ├── whatsappRates.ts
│   ├── rcsRates.ts
│   ├── viberRates.ts
│   ├── competitors.ts
│   ├── scenarios.ts
│   └── types.ts
├── hooks/                  # Custom React hooks
└── lib/                    # Utility functions
```

## Running Locally

```bash
git clone https://github.com/dejvid981/infobip-cpaas-pricing-analysis.git
cd infobip-cpaas-pricing-analysis
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Data Sources

All data sourced from publicly available pricing pages:

- [Infobip](https://www.infobip.com/pricing) — SMS, WhatsApp, RCS, Viber published rates
- [Twilio](https://www.twilio.com/en-us/pricing) — SMS and WhatsApp published rates
- [Meta](https://developers.facebook.com/docs/whatsapp/pricing/) — WhatsApp Business Platform conversation pricing

Margin estimates are modeled using industry-standard MNO termination fee ranges. No confidential or insider data was used.

## Author

**David Mustac** — [LinkedIn](https://www.linkedin.com/in/david-mustac/)

Built with [Claude Code](https://claude.ai/code) in a single session.

## License

MIT
