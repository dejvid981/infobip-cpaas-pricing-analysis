import type { ViberRate, ViberProfitability } from "./types";

export const viberRates: ViberRate[] = [
  {
    component: "Minimum commitment (priority markets)",
    rate: "€150/sender/month",
    notes:
      "Belarus, Bulgaria, Greece, Hungary, Iraq, Moldova, Russia, Ukraine, UAE",
  },
  {
    component: "Minimum commitment (other markets)",
    rate: "€100/sender/month",
    notes: "All other destinations",
  },
  {
    component: "Session message (within 24h)",
    rate: "€0.005 – €0.03",
    notes: "Up to 60 messages per session at session rate",
  },
  {
    component: "Promotional message",
    rate: "€0.02 – €0.08",
    notes: "One-way marketing, varies by country",
  },
  {
    component: "Transactional message",
    rate: "€0.01 – €0.04",
    notes: "OTP, order updates, etc.",
  },
];

export const viberProfitability: ViberProfitability[] = [
  {
    profile: "Small business (1 sender, 5K msgs)",
    monthlySpend: "€150 (minimum)",
    marginEstimate: "~60%",
    why: "Minimum commitment exceeds actual usage cost",
  },
  {
    profile: "Mid-market (3 senders, 50K msgs)",
    monthlySpend: "€450 + usage",
    marginEstimate: "~45%",
    why: "Good volume, still above commitment floor",
  },
  {
    profile: "Enterprise (10 senders, 500K msgs)",
    monthlySpend: "€1,500 + usage",
    marginEstimate: "~35%",
    why: "Volume discounts kick in, but base revenue secured",
  },
];
