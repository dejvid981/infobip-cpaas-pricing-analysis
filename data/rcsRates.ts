import type { RCSRate, RCSFactor } from "./types";

export const rcsRates: RCSRate[] = [
  {
    messageType: "Basic text (A2P)",
    rateRange: [0.0075, 0.015],
    vsSMSPremium: "0-100% premium",
    notes: "Comparable to SMS in mature markets",
  },
  {
    messageType: "Rich media (images, carousels)",
    rateRange: [0.012, 0.03],
    vsSMSPremium: "60-300% premium",
    notes: "Higher engagement justifies cost",
  },
  {
    messageType: "Conversational (2-way)",
    rateRange: [0.015, 0.04],
    vsSMSPremium: "100-400% premium",
    notes: "Session-based, highest value",
  },
];

export const rcsFactors: RCSFactor[] = [
  {
    factor: "Carrier billing control",
    impact: "Positive",
    detail:
      "MNOs set rates — Infobip MaaP gives them tools, takes revenue share",
  },
  {
    factor: "No Meta middleman",
    impact: "Positive",
    detail: "Unlike WhatsApp, no platform fee to Meta",
  },
  {
    factor: "Limited adoption",
    impact: "Negative",
    detail: "Low volume = high per-message infrastructure cost",
  },
  {
    factor: "Google dependency",
    impact: "Risk",
    detail: "Google Jibe platform controls RCS infrastructure",
  },
  {
    factor: "Apple iMessage gap",
    impact: "Negative",
    detail: "iOS users unreachable via RCS (as of early 2026)",
  },
];
