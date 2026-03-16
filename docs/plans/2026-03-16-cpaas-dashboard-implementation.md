# CPaaS Pricing Dashboard — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build an interactive Next.js dashboard showcasing Infobip CPaaS pricing analysis with animated charts, a channel migration simulator, and competitive analysis — deployed to Vercel.

**Architecture:** Single-page Next.js 14 App Router app with static export. All data lives as typed TypeScript constants. Seven scroll sections: Hero, KPI Bar, Channel Breakdown (tabbed), Profitability Dashboard (interactive simulator), Competitive Analysis, Investigation Questions, Footer. Framer Motion for scroll animations, Recharts for charts.

**Tech Stack:** Next.js 14, TypeScript, Tailwind CSS, Recharts, Framer Motion

---

## Task 1: Scaffold Next.js Project

**Files:**
- Create: `package.json`, `next.config.js`, `tailwind.config.ts`, `tsconfig.json`, `app/layout.tsx`, `app/page.tsx`, `app/globals.css`

**Step 1: Initialize Next.js project**

Run:
```bash
cd "C:/Users/dejvi/Desktop/Claude projects/Infobip_CPaaS_Pricing_Model_Analysis"
npx create-next-app@14 . --typescript --tailwind --eslint --app --src-dir=false --import-alias="@/*" --no-git
```

If directory not empty, move `Infobip_CPaaS_Pricing_Model_Analysis.md` and `docs/` aside, scaffold, then move back.

**Step 2: Install dependencies**

Run:
```bash
npm install recharts framer-motion
```

**Step 3: Configure Tailwind dark theme and custom colors**

Edit `tailwind.config.ts`:
```ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          primary: "#0D0F1A",
          card: "#161929",
          border: "#1E2235",
        },
        accent: {
          DEFAULT: "#FF6B00",
          light: "#FF8C38",
        },
        text: {
          primary: "#E8E9ED",
          muted: "#8B8FA3",
        },
        margin: {
          high: "#22C55E",
          medium: "#EAB308",
          low: "#EF4444",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
```

**Step 4: Set up globals.css**

Edit `app/globals.css`:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap');

html {
  scroll-behavior: smooth;
}

body {
  background-color: #0D0F1A;
  color: #E8E9ED;
}

::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-track {
  background: #0D0F1A;
}
::-webkit-scrollbar-thumb {
  background: #1E2235;
  border-radius: 4px;
}
::-webkit-scrollbar-thumb:hover {
  background: #FF6B00;
}
```

**Step 5: Set up layout.tsx**

Edit `app/layout.tsx`:
```tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CPaaS Pricing Model Analysis — David Mustac",
  description: "Interactive analysis of Infobip CPaaS messaging economics across SMS, WhatsApp, RCS & Viber",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
```

**Step 6: Stub page.tsx**

Edit `app/page.tsx`:
```tsx
export default function Home() {
  return (
    <main className="min-h-screen bg-dark-primary">
      <h1 className="text-4xl text-accent font-bold text-center pt-20">
        CPaaS Pricing Model Analysis
      </h1>
    </main>
  );
}
```

**Step 7: Verify it runs**

Run: `npm run dev`
Expected: Page loads at localhost:3000 with orange title on dark background.

**Step 8: Configure static export for Vercel**

Edit `next.config.js`:
```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
};
module.exports = nextConfig;
```

**Step 9: Verify build**

Run: `npm run build`
Expected: Static export to `out/` directory, no errors.

**Step 10: Commit**

```bash
git init
git add -A
git commit -m "feat: scaffold Next.js project with Tailwind dark theme and Infobip colors"
```

---

## Task 2: Data Layer

**Files:**
- Create: `data/smsRates.ts`
- Create: `data/whatsappRates.ts`
- Create: `data/rcsRates.ts`
- Create: `data/viberRates.ts`
- Create: `data/competitors.ts`
- Create: `data/scenarios.ts`
- Create: `data/types.ts`

**Step 1: Create shared types**

Create `data/types.ts`:
```ts
export interface SMSRate {
  region: string;
  country: string;
  infobipRate: number;
  twilioRate: number;
  priceDiff: number; // percentage cheaper (positive = Infobip cheaper)
  marginIndicator: "High" | "Medium-High" | "Medium" | "Low";
}

export interface SMSVolumeDiscount {
  tier: string;
  discount: string;
  effectiveUSRate: number;
}

export interface WhatsAppBaseRate {
  category: "Marketing" | "Utility" | "Authentication" | "Service";
  rates: Record<string, number>; // country -> rate
}

export interface WhatsAppMarkup {
  category: string;
  metaBase: number;
  infobipEst: number;
  markupPct: number;
  margin: number;
}

export interface RCSRate {
  messageType: string;
  rateRange: [number, number];
  vsSMSPremium: string;
  notes: string;
}

export interface ViberRate {
  component: string;
  rate: string;
  notes: string;
}

export interface ViberProfitability {
  profile: string;
  monthlySpend: string;
  marginEstimate: string;
  why: string;
}

export interface ChannelComparison {
  channel: string;
  avgCostPerMsg: number;
  engagementRate: string;
  costPerEngagement: string;
  marginEstimate: string;
}

export interface RegionalProfitability {
  region: string;
  mostProfitableChannel: string;
  marginRange: string;
  keyRisk: string;
  strategicMove: string;
}

export interface Competitor {
  name: string;
  carrierConnections: string;
  pricingModel: string;
  smsPriceAdvantage: string;
  whatsappMarkup: string;
  viberSupport: string;
  rcsStrategy: string;
  easternEurope: string;
  enterpriseFocus: string;
  revenue: string;
}

export interface ScenarioLine {
  channel: string;
  volume: number;
  rate: number;
  revenue: number;
  cogsPercent: number;
  cogs: number;
  grossMargin: number;
  marginPercent: number;
}

export interface InvestigationQuestion {
  id: number;
  title: string;
  description: string;
  icon: string; // emoji
}
```

**Step 2: Create SMS data**

Create `data/smsRates.ts` with all data from the markdown tables (Section 1.1).

**Step 3: Create WhatsApp data**

Create `data/whatsappRates.ts` with Meta base rates, Infobip markup data (Section 1.2).

**Step 4: Create RCS data**

Create `data/rcsRates.ts` (Section 1.3).

**Step 5: Create Viber data**

Create `data/viberRates.ts` (Section 1.4).

**Step 6: Create cross-channel and competitor data**

Create `data/competitors.ts` with competitor comparison, channel comparison, regional profitability (Sections 2-4).

**Step 7: Create scenario data**

Create `data/scenarios.ts` with enterprise scenario (Section 5) and investigation questions (Section 6).

**Step 8: Commit**

```bash
git add data/
git commit -m "feat: add typed data layer with all pricing and analysis data"
```

---

## Task 3: Reusable UI Components

**Files:**
- Create: `components/ui/SectionWrapper.tsx`
- Create: `components/ui/Card.tsx`
- Create: `components/ui/AnimatedCounter.tsx`
- Create: `components/ui/TabBar.tsx`
- Create: `components/ui/MarginBadge.tsx`
- Create: `components/ui/InsightCard.tsx`

**Step 1: SectionWrapper — scroll animation container**

Create `components/ui/SectionWrapper.tsx`:
```tsx
"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  id: string;
  children: ReactNode;
  className?: string;
}

export default function SectionWrapper({ id, children, className = "" }: Props) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto ${className}`}
    >
      {children}
    </motion.section>
  );
}
```

**Step 2: Card component**

Create `components/ui/Card.tsx`:
```tsx
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  accent?: boolean; // orange left border
}

export default function Card({ children, className = "", accent = false }: Props) {
  return (
    <div
      className={`bg-dark-card border border-dark-border rounded-xl p-6 ${
        accent ? "border-l-4 border-l-accent" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
```

**Step 3: AnimatedCounter — tick-up number on scroll**

Create `components/ui/AnimatedCounter.tsx`:
```tsx
"use client";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface Props {
  end: number;
  prefix?: string;
  suffix?: string;
  label: string;
  duration?: number;
}

export default function AnimatedCounter({ end, prefix = "", suffix = "", label, duration = 2000 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const startTime = Date.now();
    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setCount(Math.floor(eased * end));
      if (progress >= 1) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, end, duration]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl md:text-4xl font-bold text-text-primary">
        {prefix}
        {count.toLocaleString()}
        {suffix}
      </div>
      <div className="text-sm text-text-muted mt-1 uppercase tracking-wider">{label}</div>
      <div className="h-0.5 w-12 bg-accent mx-auto mt-2" />
    </div>
  );
}
```

**Step 4: TabBar**

Create `components/ui/TabBar.tsx`:
```tsx
"use client";
import { motion } from "framer-motion";

interface Props {
  tabs: string[];
  active: number;
  onChange: (index: number) => void;
}

export default function TabBar({ tabs, active, onChange }: Props) {
  return (
    <div className="flex gap-1 bg-dark-card rounded-lg p-1 border border-dark-border w-fit mx-auto mb-8">
      {tabs.map((tab, i) => (
        <button
          key={tab}
          onClick={() => onChange(i)}
          className={`relative px-6 py-2.5 rounded-md text-sm font-medium transition-colors ${
            active === i ? "text-white" : "text-text-muted hover:text-text-primary"
          }`}
        >
          {active === i && (
            <motion.div
              layoutId="tab-indicator"
              className="absolute inset-0 bg-accent rounded-md"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          <span className="relative z-10">{tab}</span>
        </button>
      ))}
    </div>
  );
}
```

**Step 5: MarginBadge**

Create `components/ui/MarginBadge.tsx`:
```tsx
interface Props {
  level: "High" | "Medium-High" | "Medium" | "Low";
}

const colors = {
  High: "bg-margin-high/20 text-margin-high",
  "Medium-High": "bg-margin-medium/20 text-margin-medium",
  Medium: "bg-margin-medium/20 text-margin-medium",
  Low: "bg-margin-low/20 text-margin-low",
};

export default function MarginBadge({ level }: Props) {
  return (
    <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${colors[level]}`}>
      {level}
    </span>
  );
}
```

**Step 6: InsightCard**

Create `components/ui/InsightCard.tsx`:
```tsx
import Card from "./Card";

interface Props {
  title: string;
  text: string;
}

export default function InsightCard({ title, text }: Props) {
  return (
    <Card accent>
      <h4 className="text-accent font-semibold text-sm uppercase tracking-wider mb-2">{title}</h4>
      <p className="text-text-primary text-sm leading-relaxed">{text}</p>
    </Card>
  );
}
```

**Step 7: Verify dev server still runs**

Run: `npm run dev`
Expected: No errors.

**Step 8: Commit**

```bash
git add components/
git commit -m "feat: add reusable UI components (SectionWrapper, Card, AnimatedCounter, TabBar, MarginBadge, InsightCard)"
```

---

## Task 4: Hero Section

**Files:**
- Create: `components/sections/Hero.tsx`
- Modify: `app/page.tsx`

**Step 1: Build Hero with animated SVG line background**

Create `components/sections/Hero.tsx`:
- Full viewport height (`h-screen`)
- SVG background: animated polyline path that draws itself (stroke-dashoffset animation) — represents a revenue chart line in orange gradient
- Centered text: Name, title, subtitle
- Scroll-down arrow with Framer Motion pulse animation
- Responsive text sizes

**Step 2: Add Hero to page.tsx**

Replace stub content with `<Hero />`.

**Step 3: Verify**

Run: `npm run dev`
Expected: Full-screen hero with animated line drawing and scroll indicator.

**Step 4: Commit**

```bash
git add components/sections/Hero.tsx app/page.tsx
git commit -m "feat: add hero section with animated SVG revenue line background"
```

---

## Task 5: KPI Bar Section

**Files:**
- Create: `components/sections/KPIBar.tsx`
- Modify: `app/page.tsx`

**Step 1: Build sticky KPI bar**

Create `components/sections/KPIBar.tsx`:
- Uses `AnimatedCounter` x4
- Becomes sticky (`sticky top-0 z-50`) with backdrop blur when scrolled past hero
- 4 counters in a row (2x2 on mobile): 13 Markets, 4 Channels, 10M Messages, $248K Revenue
- Dark background with subtle bottom border

**Step 2: Add to page.tsx after Hero**

**Step 3: Verify sticky behavior**

Run: `npm run dev`, scroll past hero.
Expected: KPI bar sticks to top, counters animate on first view.

**Step 4: Commit**

```bash
git add components/sections/KPIBar.tsx app/page.tsx
git commit -m "feat: add sticky KPI bar with animated counters"
```

---

## Task 6: Channel Breakdown Section (Tabbed)

**Files:**
- Create: `components/sections/ChannelBreakdown.tsx`
- Create: `components/charts/ComparisonBarChart.tsx`
- Create: `components/channels/SMSTab.tsx`
- Create: `components/channels/WhatsAppTab.tsx`
- Create: `components/channels/RCSTab.tsx`
- Create: `components/channels/ViberTab.tsx`
- Modify: `app/page.tsx`

**Step 1: Build ComparisonBarChart**

Create `components/charts/ComparisonBarChart.tsx`:
- Recharts `BarChart` with horizontal layout
- Two bars per country: Infobip (orange) and Twilio (grey #4A4E69)
- Animated bars, tooltip on hover
- Responsive container

**Step 2: Build SMSTab**

Create `components/channels/SMSTab.tsx`:
- Pricing table with heat-colored rate cells (green for low, red for high)
- `ComparisonBarChart` for Infobip vs Twilio
- `InsightCard` with SMS key insight
- Volume discount table

**Step 3: Build WhatsAppTab**

Create `components/channels/WhatsAppTab.tsx`:
- Meta base rates table (6 countries x 4 categories)
- Infobip markup table (India example)
- `InsightCard` with WhatsApp margin insight

**Step 4: Build RCSTab**

Create `components/channels/RCSTab.tsx`:
- Rate range table
- Profitability factors table with impact indicators
- `InsightCard` with RCS strategic insight

**Step 5: Build ViberTab**

Create `components/channels/ViberTab.tsx`:
- Pricing components table
- Profitability model table
- `InsightCard` with minimum commitment insight

**Step 6: Build ChannelBreakdown wrapper**

Create `components/sections/ChannelBreakdown.tsx`:
- `SectionWrapper` with heading "Channel-by-Channel Pricing"
- `TabBar` with SMS | WhatsApp | RCS | Viber
- Renders active tab component
- Framer Motion `AnimatePresence` for tab switch transitions

**Step 7: Add to page.tsx**

**Step 8: Verify all 4 tabs work**

Run: `npm run dev`, click each tab.
Expected: Smooth tab transitions, charts animate, tables display correctly.

**Step 9: Commit**

```bash
git add components/sections/ChannelBreakdown.tsx components/charts/ components/channels/
git commit -m "feat: add tabbed channel breakdown with comparison charts and insight cards"
```

---

## Task 7: Profitability Dashboard Section

**Files:**
- Create: `components/sections/ProfitabilityDashboard.tsx`
- Create: `components/charts/RevenueDonut.tsx`
- Create: `components/charts/RevenueMarginCombo.tsx`
- Create: `components/simulator/ChannelMigrationSimulator.tsx`
- Create: `hooks/useChannelMigration.ts`
- Create: `components/tables/RegionalProfitabilityTable.tsx`
- Modify: `app/page.tsx`

**Step 1: Build useChannelMigration hook**

Create `hooks/useChannelMigration.ts`:
```ts
// Input: region (string), smsPercent (0-100)
// Output: { monthlyRevenue, grossMargin, marginPercent, chartData[], insight }
// Logic: Given 1M total messages, split between SMS and WhatsApp based on slider
// Use region-specific rates from data layer to calculate revenue and margin
// Generate chart data points for the area chart (0% to 100% SMS in 10% steps)
```

**Step 2: Build RevenueDonut**

Create `components/charts/RevenueDonut.tsx`:
- Recharts `PieChart` with inner radius (donut)
- 5 slices: SMS Europe, SMS India, WhatsApp Marketing, WhatsApp Utility, Viber, RCS
- Orange gradient color scheme
- Center label showing total revenue
- Animated on mount

**Step 3: Build RevenueMarginCombo**

Create `components/charts/RevenueMarginCombo.tsx`:
- Recharts `ComposedChart` with `Bar` (revenue) + `Line` (margin %)
- Bars in orange shades, line in white
- Dual Y-axis (revenue left, margin % right)
- Tooltip showing both values

**Step 4: Build ChannelMigrationSimulator**

Create `components/simulator/ChannelMigrationSimulator.tsx`:
- Region dropdown (8 regions)
- Range slider styled in orange (input[type=range] custom CSS)
- Left label "100% SMS", right label "100% WhatsApp"
- Two large animated numbers: Monthly Revenue, Gross Margin (use `AnimatedCounter` logic)
- Recharts `AreaChart` showing revenue/margin curves as slider moves
- Dynamic insight text below that updates based on position
- The slider and numbers should update in real-time (no debounce)

**Step 5: Build RegionalProfitabilityTable**

Create `components/tables/RegionalProfitabilityTable.tsx`:
- 8 rows from regional profitability data
- Columns: Region, Best Channel, Margin Range, Key Risk, Strategic Move
- Margin cells color-coded with `MarginBadge` style
- Click row to expand with additional detail (Framer Motion `AnimatePresence`)

**Step 6: Build ProfitabilityDashboard wrapper**

Create `components/sections/ProfitabilityDashboard.tsx`:
- `SectionWrapper` with heading "Profitability Dashboard"
- Three panels in grid layout:
  - Top row: RevenueDonut (left) + RevenueMarginCombo (right)
  - Middle: ChannelMigrationSimulator (full width, highlighted card)
  - Bottom: RegionalProfitabilityTable (full width)

**Step 7: Add to page.tsx**

**Step 8: Verify simulator interactivity**

Run: `npm run dev`, change region dropdown and drag slider.
Expected: Numbers update live, chart redraws, insight text changes.

**Step 9: Commit**

```bash
git add components/sections/ProfitabilityDashboard.tsx components/charts/ components/simulator/ components/tables/ hooks/
git commit -m "feat: add profitability dashboard with interactive channel migration simulator"
```

---

## Task 8: Competitive Analysis Section

**Files:**
- Create: `components/sections/CompetitiveAnalysis.tsx`
- Create: `components/charts/CompetitorBarChart.tsx`
- Modify: `app/page.tsx`

**Step 1: Build CompetitorBarChart**

Create `components/charts/CompetitorBarChart.tsx`:
- Recharts horizontal `BarChart`
- 6 dimensions on Y-axis: Price Advantage, Global Reach, Channel Breadth, Enterprise Focus, Dev Experience, Revenue Scale
- 4 grouped bars per dimension (Infobip=orange, Twilio=blue-grey, Sinch=teal, Vonage=purple)
- Normalize values to 0-100 scale for comparison
- Animated bars, tooltip with details

**Step 2: Build CompetitiveAnalysis section**

Create `components/sections/CompetitiveAnalysis.tsx`:
- `SectionWrapper` with heading "Competitive Positioning"
- `CompetitorBarChart` at top
- Three `Card` components below in a row:
  - "Where Infobip Wins" (green accent) — 4 bullet points
  - "Where Infobip Loses" (red accent) — 3 bullet points
  - "Strategic Position" (orange accent) — summary
- Cards use Framer Motion staggered entrance

**Step 3: Add to page.tsx**

**Step 4: Verify**

Run: `npm run dev`
Expected: Grouped bar chart renders, three cards appear with stagger animation.

**Step 5: Commit**

```bash
git add components/sections/CompetitiveAnalysis.tsx components/charts/CompetitorBarChart.tsx
git commit -m "feat: add competitive analysis with grouped bar chart and positioning cards"
```

---

## Task 9: Investigation Questions Section

**Files:**
- Create: `components/sections/InvestigationQuestions.tsx`
- Modify: `app/page.tsx`

**Step 1: Build InvestigationQuestions**

Create `components/sections/InvestigationQuestions.tsx`:
- `SectionWrapper` with heading "What I'd Investigate Next"
- 2x3 grid (stacks to 1 column on mobile)
- Each card: emoji icon (large), title, one-sentence description, "Requires Internal Data" tag
- 6 questions from data/scenarios.ts
- Framer Motion staggered entrance (each card delays 0.1s)

**Step 2: Add to page.tsx**

**Step 3: Commit**

```bash
git add components/sections/InvestigationQuestions.tsx
git commit -m "feat: add investigation questions grid section"
```

---

## Task 10: Footer

**Files:**
- Create: `components/sections/Footer.tsx`
- Modify: `app/page.tsx`

**Step 1: Build Footer**

Create `components/sections/Footer.tsx`:
- Dark card background, full width
- Left: "Built by David Mustac" with LinkedIn icon/link
- Center: "Powered by Claude Code" badge
- Right: "Data: Infobip, Twilio, Meta public pricing (2025)"
- Expandable methodology disclaimer (click to expand)
- Subtle top border in orange gradient

**Step 2: Add to page.tsx**

**Step 3: Commit**

```bash
git add components/sections/Footer.tsx
git commit -m "feat: add footer with credits and methodology"
```

---

## Task 11: Assemble Page & Polish

**Files:**
- Modify: `app/page.tsx`
- Modify: various components for responsive fixes

**Step 1: Assemble all sections in page.tsx**

```tsx
import Hero from "@/components/sections/Hero";
import KPIBar from "@/components/sections/KPIBar";
import ChannelBreakdown from "@/components/sections/ChannelBreakdown";
import ProfitabilityDashboard from "@/components/sections/ProfitabilityDashboard";
import CompetitiveAnalysis from "@/components/sections/CompetitiveAnalysis";
import InvestigationQuestions from "@/components/sections/InvestigationQuestions";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-primary">
      <Hero />
      <KPIBar />
      <ChannelBreakdown />
      <ProfitabilityDashboard />
      <CompetitiveAnalysis />
      <InvestigationQuestions />
      <Footer />
    </main>
  );
}
```

**Step 2: Test full scroll experience on desktop**

Run: `npm run dev`
Scroll through entire page. Check:
- Hero animation plays
- KPI bar sticks and counters animate
- All 4 channel tabs work
- Simulator slider updates live
- Competitive chart renders
- Questions grid displays
- Footer expands methodology

**Step 3: Test mobile (use browser DevTools, 375px width)**

Check:
- Hero text readable, not clipped
- KPI bar is 2x2 grid
- Tab bar scrollable or stacked
- Simulator slider works on touch
- Tables scroll horizontally
- No horizontal overflow on any section

**Step 4: Fix any responsive issues found**

**Step 5: Commit**

```bash
git add -A
git commit -m "feat: assemble full page and polish responsive layout"
```

---

## Task 12: Build & Deploy to Vercel

**Step 1: Verify static build**

Run:
```bash
npm run build
```
Expected: No errors, `out/` directory created.

**Step 2: Test static build locally**

Run:
```bash
npx serve out
```
Expected: Full site works at localhost:3000.

**Step 3: Push to GitHub**

```bash
git remote add origin <github-repo-url>
git push -u origin main
```

**Step 4: Deploy to Vercel**

Run:
```bash
npx vercel --prod
```

Or connect GitHub repo to Vercel dashboard for auto-deploy.

**Step 5: Verify live URL**

Open Vercel URL, test full functionality.

**Step 6: Commit any deploy config**

```bash
git add -A
git commit -m "chore: add Vercel deployment config"
```

---

## Task Order Summary

| Task | What | Depends On |
|------|------|-----------|
| 1 | Scaffold Next.js | — |
| 2 | Data layer | 1 |
| 3 | UI components | 1 |
| 4 | Hero section | 3 |
| 5 | KPI bar | 3 |
| 6 | Channel breakdown | 2, 3 |
| 7 | Profitability dashboard | 2, 3 |
| 8 | Competitive analysis | 2, 3 |
| 9 | Investigation questions | 2, 3 |
| 10 | Footer | 3 |
| 11 | Assemble & polish | 4-10 |
| 12 | Build & deploy | 11 |

**Parallelizable:** Tasks 4+5 can run together. Tasks 6+7+8+9+10 can run together (all depend on 2+3 only).
