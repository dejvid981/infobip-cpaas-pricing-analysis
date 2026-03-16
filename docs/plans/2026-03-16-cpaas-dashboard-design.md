# CPaaS Pricing Model Analysis — Dashboard Design

**Date:** 2026-03-16
**Author:** David Mustac
**Status:** Approved

## Tech Stack
- Next.js 14 (App Router, static export)
- Tailwind CSS (dark theme)
- Recharts (animated charts)
- Framer Motion (scroll animations)
- Deploy: Vercel free tier

## Color System
| Token | Value | Use |
|-------|-------|-----|
| bg-primary | #0D0F1A | Page background |
| bg-card | #161929 | Card surfaces |
| bg-card-border | #1E2235 | Subtle borders |
| accent | #FF6B00 | Infobip orange |
| accent-light | #FF8C38 | Gradients, hover |
| text-primary | #E8E9ED | Headings, body |
| text-muted | #8B8FA3 | Labels, secondary |
| green | #22C55E | High margin |
| yellow | #EAB308 | Medium margin |
| red | #EF4444 | Low margin / risk |

## Page Sections

### 1. Hero
- Full viewport, animated SVG revenue line background (orange gradient on dark)
- Name, title, subtitle, scroll indicator

### 2. KPI Bar
- Sticky on scroll, 4 animated counters: 13 Markets, 4 Channels, 10M Messages, $248K Revenue

### 3. Channel Breakdown
- Tabbed: SMS | WhatsApp | RCS | Viber
- Each: pricing table (heat-colored), bar chart (Infobip vs Twilio), insight card, volume discounts

### 4. Profitability Dashboard
- Panel A: Revenue donut + combo bar/line chart
- Panel B: Channel Migration Simulator (region dropdown + SMS↔WhatsApp slider + live margin calc)
- Panel C: Regional profitability table (expandable rows)

### 5. Competitive Analysis
- Horizontal grouped bar chart (4 competitors, 6 dimensions)
- Three cards: Wins, Losses, Strategic Positioning

### 6. What I'd Investigate Next
- 2x3 grid of question cards from Section 6 of analysis

### 7. Footer
- Credits, Claude Code badge, data sources, methodology

## Responsive
- Desktop: side-by-side charts
- Tablet: stacked vertical
- Mobile: single column, cards, scrollable tables

## Data Architecture
- Static typed constants in /data/*.ts
- Client-side simulator via useChannelMigration hook
- No API calls or database
