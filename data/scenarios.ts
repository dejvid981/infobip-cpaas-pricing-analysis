import type { ScenarioLine, InvestigationQuestion } from "./types";

export const enterpriseScenario: ScenarioLine[] = [
  {
    channel: "SMS (Europe)",
    volume: 3000000,
    rate: 0.045,
    revenue: 135000,
    cogsPercent: 50,
    cogs: 67500,
    grossMargin: 67500,
    marginPercent: 50,
  },
  {
    channel: "SMS (India)",
    volume: 2000000,
    rate: 0.003,
    revenue: 6000,
    cogsPercent: 70,
    cogs: 4200,
    grossMargin: 1800,
    marginPercent: 30,
  },
  {
    channel: "WhatsApp (Marketing)",
    volume: 2000000,
    rate: 0.035,
    revenue: 70000,
    cogsPercent: 70,
    cogs: 49000,
    grossMargin: 21000,
    marginPercent: 30,
  },
  {
    channel: "WhatsApp (Utility)",
    volume: 1500000,
    rate: 0.008,
    revenue: 12000,
    cogsPercent: 60,
    cogs: 7200,
    grossMargin: 4800,
    marginPercent: 40,
  },
  {
    channel: "Viber (Session)",
    volume: 1000000,
    rate: 0.015,
    revenue: 15000,
    cogsPercent: 40,
    cogs: 6000,
    grossMargin: 9000,
    marginPercent: 60,
  },
  {
    channel: "RCS (Rich)",
    volume: 500000,
    rate: 0.02,
    revenue: 10000,
    cogsPercent: 50,
    cogs: 5000,
    grossMargin: 5000,
    marginPercent: 50,
  },
];

export const enterpriseScenarioTotal: ScenarioLine = {
  channel: "TOTAL",
  volume: 10000000,
  rate: 0,
  revenue: 248000,
  cogsPercent: 56,
  cogs: 138900,
  grossMargin: 109100,
  marginPercent: 44,
};

export const investigationQuestions: InvestigationQuestion[] = [
  {
    id: 1,
    title: "Route optimization",
    description:
      "Which SMS routes have the widest margin spread between Infobip's cost (MNO termination fee) and customer price? Where are margins being compressed by MNO rate increases?",
    icon: "Route",
  },
  {
    id: 2,
    title: "Channel migration patterns",
    description:
      "How many customers are shifting volume from SMS to WhatsApp? What's the net revenue impact? (If WhatsApp markup > SMS margin loss, migration is profitable)",
    icon: "TrendingUp",
  },
  {
    id: 3,
    title: "Viber dependency risk",
    description:
      "What percentage of Infobip's Eastern European revenue comes from Viber? If Viber loses market share to WhatsApp/Telegram, what's the revenue impact?",
    icon: "AlertTriangle",
  },
  {
    id: 4,
    title: "RCS adoption curve",
    description:
      "At what volume does RCS become profitable per-route? Which MNOs are closest to breakeven on RCS traffic?",
    icon: "BarChart",
  },
  {
    id: 5,
    title: "Customer profitability segmentation",
    description:
      "Which customer segments (by industry, size, channel mix) generate the highest margin? Can we identify \"ideal customer profiles\" for the sales team?",
    icon: "Users",
  },
  {
    id: 6,
    title: "Pricing elasticity",
    description:
      "If Infobip raises SMS rates by 5% in Western Europe, what's the expected volume drop-off? Is the margin gain worth the volume loss?",
    icon: "DollarSign",
  },
];
