# CPaaS Pricing Model Analysis — Infobip Business Analyst Portfolio Project

**Prepared by:** David Mustač
**Purpose:** Demonstrate commercial analytics thinking for Infobip BA role
**Data Sources:** Infobip public pricing pages, Twilio published rates, Meta WhatsApp API documentation, industry reports

---

## Executive Summary

This analysis models CPaaS messaging economics across Infobip's core channels (SMS, WhatsApp, RCS, Viber) by region, volume tier, and use case. The goal: identify which channels are most profitable, which regions have margin pressure, and where Infobip's pricing strategy creates competitive advantage or vulnerability.

**Key Findings:**

- SMS remains Infobip's highest-margin channel in emerging markets (Africa, South Asia) where OTT penetration is low
- WhatsApp is eroding SMS revenue in India, Brazil, and Southeast Asia — but Infobip's markup on WhatsApp (~25-40% above Meta's base) creates a new margin layer
- RCS is the strategic wildcard — currently low volume but carrier-controlled pricing gives Infobip leverage as MNO partner (via MaaP platform)
- Viber dominates Eastern Europe/CIS markets where it's the default messaging app — high session-based margins with minimum commitment fees protecting revenue floor

---

## 1. Channel-by-Channel Pricing Breakdown

### 1.1 SMS (A2P — Application-to-Person)

Infobip's core revenue driver. Pay-as-you-go, charged per message segment (160 characters). Price varies by destination country and MNO route quality.

| Region | Country | Infobip Est. Rate | Twilio Rate | Infobip vs Twilio | Margin Indicator |
|--------|---------|------------------|-------------|-------------------|-----------------|
| North America | USA | $0.0075 | $0.0083 | 10% cheaper | Medium — carrier fees ($0.003-0.006) compress margin |
| North America | Canada | $0.0080 | $0.0085 | 6% cheaper | Medium |
| Western Europe | UK | $0.0420 | $0.0463 | 9% cheaper | High — premium market, direct MNO connections |
| Western Europe | Germany | $0.0550 | $0.0620 | 11% cheaper | High — strict regulation = higher barriers = higher prices |
| Western Europe | France | $0.0480 | $0.0530 | 9% cheaper | High |
| Eastern Europe | Croatia | $0.0280 | $0.0350 | 20% cheaper | High — Infobip home market advantage, direct carrier deals |
| Eastern Europe | Poland | $0.0220 | $0.0300 | 27% cheaper | High — strong Infobip position |
| South Asia | India | $0.0030 | $0.0040 | 25% cheaper | Low — ultra-competitive market, thin margins |
| Southeast Asia | Indonesia | $0.0250 | $0.0350 | 29% cheaper | Medium-High |
| Latin America | Brazil | $0.0350 | $0.0420 | 17% cheaper | Medium — growing WhatsApp substitution risk |
| Middle East | UAE | $0.0320 | $0.0380 | 16% cheaper | Medium-High |
| Africa | Nigeria | $0.0280 | $0.0380 | 26% cheaper | High — mobile-first market, SMS still dominant |
| Africa | South Africa | $0.0180 | $0.0250 | 28% cheaper | High |

**Key Insight:** Infobip's direct MNO connections (700+ carrier relationships) give them 10-30% pricing advantage over Twilio in most markets. The advantage is largest in emerging markets and Eastern Europe where Infobip has deeper carrier relationships.

**Volume-Based Discounts (Estimated):**

| Monthly Volume | Discount from Base Rate | Effective US Rate |
|---------------|----------------------|-------------------|
| < 10,000 | 0% (base rate) | $0.0075 |
| 10,000 – 100,000 | ~7-10% | $0.0068 |
| 100,000 – 1,000,000 | ~15-20% | $0.0060 |
| 1,000,000 – 10,000,000 | ~25-30% | $0.0053 |
| 10,000,000+ | Custom (negotiated) | $0.0040-0.0050 |

---

### 1.2 WhatsApp Business API

Charged per delivered message. Pricing set by Meta (base) + Infobip markup. Four message categories with different rates.

**Meta Base Rates (effective July 2025):**

| Category | USA | Germany | UK | India | Brazil | Nigeria |
|----------|-----|---------|-----|-------|--------|---------|
| Marketing | $0.025 | $0.1365 | $0.0942 | $0.0107 | $0.0625 | $0.0816 |
| Utility | $0.004 | $0.0456 | $0.0233 | $0.0042 | $0.0080 | $0.0042 |
| Authentication | $0.004 | $0.0456 | $0.0233 | $0.0042 | $0.0315 | $0.0042 |
| Service (24h window) | FREE | FREE | FREE | FREE | FREE | FREE |

**Infobip Estimated Markup (25-40% above Meta base):**

| Category | Meta Base (India) | Infobip Est. (India) | Markup | Infobip Margin |
|----------|------------------|---------------------|--------|---------------|
| Marketing | $0.0107 | $0.0134 | +25% | $0.0027/msg |
| Utility | $0.0042 | $0.0055 | +31% | $0.0013/msg |
| Authentication | $0.0042 | $0.0055 | +31% | $0.0013/msg |

**Key Insight:** WhatsApp is a margin opportunity, not just a channel. At 1M messages/month in India, Infobip's estimated WhatsApp margin = ~$2,700/month from markup alone — before platform fees. But the real play is upselling customers from WhatsApp-only to omnichannel (SMS + WhatsApp + email) where combined margins are 3-5x higher.

**Volume Discounts (Meta-mandated, effective July 2025):**
Utility and authentication messages receive automatic volume-based discounts per country per calendar month. Marketing messages do not receive volume discounts.

---

### 1.3 RCS (Rich Communication Services)

Carrier-controlled pricing. Infobip acts as aggregator via MaaP (Messaging as a Platform) for MNOs. Charged per delivered message, with rates varying by content type.

| Message Type | Estimated Rate Range | vs. SMS | Notes |
|-------------|---------------------|---------|-------|
| Basic text (A2P) | $0.0075 – $0.015 | 0-100% premium | Comparable to SMS in mature markets |
| Rich media (images, carousels) | $0.012 – $0.030 | 60-300% premium | Higher engagement justifies cost |
| Conversational (2-way) | $0.015 – $0.040 | 100-400% premium | Session-based, highest value |

**RCS Profitability Factors:**

| Factor | Impact on Margin | Detail |
|--------|-----------------|--------|
| Carrier billing control | Positive | MNOs set rates — Infobip MaaP gives them tools, takes revenue share |
| No Meta middleman | Positive | Unlike WhatsApp, no platform fee to Meta |
| Limited adoption | Negative | Low volume = high per-message infrastructure cost |
| Google dependency | Risk | Google Jibe platform controls RCS infrastructure |
| Apple iMessage gap | Negative | iOS users unreachable via RCS (as of early 2026) |

**Key Insight:** RCS is Infobip's strategic bet. Their MaaP platform lets MNOs monetize RCS traffic (which otherwise bypasses carrier networks). This positions Infobip as infrastructure provider, not just messaging reseller. Margin potential is high but volume is still building.

---

### 1.4 Viber Business Messages

Session-based pricing model unique among channels. Minimum commitment fees per active sender ID.

| Pricing Component | Rate | Notes |
|------------------|------|-------|
| Minimum commitment (priority markets) | €150/sender/month | Belarus, Bulgaria, Greece, Hungary, Iraq, Moldova, Russia, Ukraine, UAE |
| Minimum commitment (other markets) | €100/sender/month | All other destinations |
| Session message (within 24h) | €0.005 – €0.03 | Up to 60 messages per session at session rate |
| Promotional message | €0.02 – €0.08 | One-way marketing, varies by country |
| Transactional message | €0.01 – €0.04 | OTP, order updates, etc. |

**Viber Profitability Model:**

| Customer Profile | Monthly Spend | Margin Estimate | Why |
|-----------------|--------------|-----------------|-----|
| Small business (1 sender, 5K msgs) | €150 (minimum) | ~60% | Minimum commitment exceeds actual usage cost |
| Mid-market (3 senders, 50K msgs) | €450 + usage | ~45% | Good volume, still above commitment floor |
| Enterprise (10 senders, 500K msgs) | €1,500 + usage | ~35% | Volume discounts kick in, but base revenue secured |

**Key Insight:** Viber's minimum commitment model is genius for margin protection. Even low-usage customers pay €100-150/month minimum. In Eastern Europe/CIS where Viber is dominant, this creates predictable recurring revenue that SMS (pure pay-per-message) can't match.

---

## 2. Cross-Channel Profitability Comparison

### Cost per Message by Channel (Global Average)

| Channel | Avg. Cost/Message | Avg. Engagement Rate | Cost per Engagement | Margin Estimate |
|---------|------------------|---------------------|--------------------|-----------------|
| SMS | $0.015 | 5-15% open (est.) | $0.10 – $0.30 | 35-50% |
| WhatsApp | $0.025 (marketing) | 45-60% open | $0.04 – $0.06 | 20-35% |
| RCS | $0.020 (rich media) | 35-50% open | $0.04 – $0.06 | 25-40% |
| Viber | $0.015 (session) | 50-70% open | $0.02 – $0.03 | 40-55% |
| Email | $0.001 | 15-25% open | $0.004 – $0.007 | 70-85% |

### Which Channel Wins by Use Case?

| Use Case | Best Channel | Why | Cost (est. 100K msgs) |
|----------|-------------|-----|----------------------|
| OTP / Authentication | SMS | Universal reach, no app required | $750 – $1,500 |
| Marketing promotion | WhatsApp | Rich media + 60% open rate | $2,500 – $6,000 |
| Transaction updates | WhatsApp (utility) | Free in 24h window, or $0.004-0.008 | $400 – $800 |
| Customer support | WhatsApp / Viber | Free 24h session windows | $0 (within session) |
| Re-engagement campaign | RCS | Rich carousels, no app download needed | $2,000 – $3,000 |
| Eastern Europe promo | Viber | Dominant app in region, session model | $1,500 – $2,500 |
| Africa / rural reach | SMS | Only channel with universal coverage | $1,800 – $2,800 |

---

## 3. Regional Profitability Heat Map

| Region | Most Profitable Channel | Margin Range | Key Risk | Strategic Move |
|--------|------------------------|-------------|----------|---------------|
| Western Europe | SMS + WhatsApp combo | 40-55% | GDPR compliance cost | Bundle omnichannel, charge premium for compliance |
| Eastern Europe | Viber + SMS | 45-60% | Viber market dependency | Lock in minimum commitments, upsell to omnichannel |
| North America | SMS (authentication) | 30-40% | Carrier fee increases, WhatsApp growth | Focus on OTP/transactional where SMS is irreplaceable |
| India | WhatsApp | 20-30% | Ultra-competitive pricing, thin margins | Volume play — win enterprise accounts, upsell platform |
| Brazil | WhatsApp + SMS | 25-35% | WhatsApp dominance reducing SMS volume | Transition SMS customers to WhatsApp, protect margin with markup |
| Southeast Asia | SMS + WhatsApp | 35-45% | OTT channel fragmentation (Line, Zalo) | Local channel partnerships alongside global channels |
| Africa | SMS | 45-60% | Low ARPU customers | Mobile-first banking and government ID projects driving volume |
| Middle East | SMS + WhatsApp | 35-50% | Regulatory complexity per country | Premium pricing justified by compliance expertise |

---

## 4. Competitive Positioning Analysis

### Infobip vs. Key Competitors

| Factor | Infobip | Twilio | Sinch/MessageBird | Vonage |
|--------|---------|--------|-------------------|--------|
| Global carrier connections | 700+ MNOs | 500+ MNOs | 600+ MNOs | 400+ MNOs |
| Pricing model | Pay-as-you-go | Pay-as-you-go | Pay-as-you-go + bundles | Tiered + pay-as-you-go |
| SMS price advantage | 10-30% cheaper | Benchmark | 5-15% cheaper | 5-10% more expensive |
| WhatsApp markup | ~25-40% | ~20-35% | ~25-35% | ~30-45% |
| Viber support | Strong (native) | Limited | Moderate | Weak |
| RCS strategy | MaaP for MNOs | Basic API | Basic API | Basic API |
| Eastern Europe strength | Dominant | Weak | Moderate | Weak |
| Enterprise focus | Mid-market + enterprise | Enterprise | SMB + mid-market | Enterprise |
| Revenue (2024 est.) | ~$2.1B | ~$4.2B | ~$2.8B | ~$1.4B |

### Where Infobip Wins on Price

| Scenario | Infobip Advantage | Why |
|----------|------------------|-----|
| Eastern Europe SMS | 20-30% cheaper | Direct MNO relationships, home market |
| Emerging markets (Africa, SEA) | 25-30% cheaper | Local infrastructure, direct routes |
| Viber-heavy markets | Only serious option | Native Viber integration, Rakuten relationship |
| MNO partnerships (RCS) | Unique MaaP platform | Competitors offer API only, not MNO monetization tools |

### Where Infobip Loses on Price

| Scenario | Infobip Disadvantage | Why |
|----------|---------------------|-----|
| US high-volume SMS | 5-10% more expensive | Twilio's US carrier relationships are deeper |
| Developer experience | Perception gap | Twilio documentation and DevEx is industry benchmark |
| Enterprise custom pricing | Less aggressive | Twilio/Sinch willing to discount deeper for $1M+ deals |

---

## 5. Profitability Scenario Modeling

### Scenario: Enterprise Customer — 10M messages/month, mixed channels

| Channel | Volume (msgs) | Rate | Revenue | Est. COGS (MNO/Meta fees) | Gross Margin |
|---------|--------------|------|---------|---------------------------|-------------|
| SMS (Europe) | 3,000,000 | $0.045 | $135,000 | $67,500 (50%) | $67,500 (50%) |
| SMS (India) | 2,000,000 | $0.003 | $6,000 | $4,200 (70%) | $1,800 (30%) |
| WhatsApp (Marketing) | 2,000,000 | $0.035 | $70,000 | $49,000 (70%) | $21,000 (30%) |
| WhatsApp (Utility) | 1,500,000 | $0.008 | $12,000 | $7,200 (60%) | $4,800 (40%) |
| Viber (Session) | 1,000,000 | $0.015 | $15,000 | $6,000 (40%) | $9,000 (60%) |
| RCS (Rich) | 500,000 | $0.020 | $10,000 | $5,000 (50%) | $5,000 (50%) |
| **TOTAL** | **10,000,000** | | **$248,000** | **$138,900** | **$109,100 (44%)** |

### What This Tells the BA Team

- **European SMS is the profit engine** — 27% of volume but 62% of gross margin dollars
- **India SMS is a volume play with thin margins** — 20% of volume, only 1.6% of margin dollars
- **Viber punches above its weight** — 10% of volume, 8.2% of margin dollars (highest margin %)
- **WhatsApp marketing is the growth opportunity** — decent margins + highest engagement rates
- **Channel mix optimization is the real BA job** — shifting 1M messages from India SMS to European WhatsApp utility would add ~$40K in monthly margin

---

## 6. Key Questions This Analysis Raises for Infobip

These are the questions a Business Analyst should investigate further:

1. **Route optimization:** Which SMS routes have the widest margin spread between Infobip's cost (MNO termination fee) and customer price? Where are margins being compressed by MNO rate increases?

2. **Channel migration patterns:** How many customers are shifting volume from SMS → WhatsApp? What's the net revenue impact? (If WhatsApp markup > SMS margin loss, migration is profitable)

3. **Viber dependency risk:** What percentage of Infobip's Eastern European revenue comes from Viber? If Viber loses market share to WhatsApp/Telegram, what's the revenue impact?

4. **RCS adoption curve:** At what volume does RCS become profitable per-route? Which MNOs are closest to breakeven on RCS traffic?

5. **Customer profitability segmentation:** Which customer segments (by industry, size, channel mix) generate the highest margin? Can we identify "ideal customer profiles" for the sales team?

6. **Pricing elasticity:** If Infobip raises SMS rates by 5% in Western Europe, what's the expected volume drop-off? Is the margin gain worth the volume loss?

---

## 7. How I'd Build This Into a Dashboard (Power BI Specification)

If hired, here's what I'd build in weeks 4-6:

### Dashboard 1: Revenue & Profitability Overview

**KPI Tiles:**
- Total monthly revenue
- Average margin %
- Revenue by channel (donut chart)
- Month-over-month growth rate

**Filters:** Time period, region, channel, customer segment

### Dashboard 2: Channel Profitability Deep-Dive

**Visuals:**
- Revenue vs. margin by channel (bar + line combo)
- Channel mix trend over time (stacked area)
- Top 10 customers by revenue with margin overlay
- SMS route profitability heat map (country × MNO)

### Dashboard 3: Competitive Pricing Monitor

**Visuals:**
- Infobip vs. competitor pricing by country (scatter plot)
- Price gap analysis by region (waterfall chart)
- Win/loss correlation with price differential

### Data Sources Required:
- Infobip billing/invoicing system (revenue per message per customer)
- MNO rate cards (cost per termination per route)
- Meta WhatsApp billing API (base cost per message)
- CRM data (customer segment, deal size, channel mix)

---

## Methodology & Data Limitations

**Data Sources Used:**
- Infobip public pricing pages (infobip.com/sms/pricing, /whatsapp-business/pricing, /viber-business/pricing, /rcs/pricing)
- Twilio public pricing (twilio.com/en-us/pricing/messaging)
- Meta WhatsApp Business API pricing documentation (effective July 2025)
- Industry reports: Juniper Research A2P SMS Market 2025-2030, IDC MarketScape CPaaS 2024
- Infobip CPaaS Leaderboard Report 2024

**Limitations:**
- Infobip does not publish exact per-message rates publicly — estimates based on public pricing calculators, industry comparisons, and reported benchmarks
- MNO termination fees (Infobip's actual cost) are confidential — margin estimates use industry standard ranges
- Volume discount tiers are estimated from publicly available information and industry norms
- Competitor rates may have changed since data collection
- RCS pricing is highly fragmented and carrier-specific — estimates represent market averages

**What I'd Need Access to (Once Hired):**
- Infobip's internal rate cards per MNO per route
- Actual customer billing data (anonymized) for margin analysis
- MNO contract terms and termination fee schedules
- Historical volume data by channel, region, customer segment
- Competitive intelligence on deal-level pricing

---

*This analysis was built in approximately 3 hours using publicly available data. With access to Infobip's internal data, the same framework would produce actionable pricing recommendations within 2 weeks.*
