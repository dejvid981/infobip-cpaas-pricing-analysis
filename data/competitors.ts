import type {
  ChannelComparison,
  UseCaseComparison,
  RegionalProfitability,
  Competitor,
  CompetitorWin,
  CompetitorLoss,
} from "./types";

export const channelComparison: ChannelComparison[] = [
  {
    channel: "SMS",
    avgCostPerMsg: 0.015,
    engagementRate: "5-15% open (est.)",
    costPerEngagement: "$0.10 – $0.30",
    marginEstimate: "35-50%",
  },
  {
    channel: "WhatsApp",
    avgCostPerMsg: 0.025,
    engagementRate: "45-60% open",
    costPerEngagement: "$0.04 – $0.06",
    marginEstimate: "20-35%",
  },
  {
    channel: "RCS",
    avgCostPerMsg: 0.02,
    engagementRate: "35-50% open",
    costPerEngagement: "$0.04 – $0.06",
    marginEstimate: "25-40%",
  },
  {
    channel: "Viber",
    avgCostPerMsg: 0.015,
    engagementRate: "50-70% open",
    costPerEngagement: "$0.02 – $0.03",
    marginEstimate: "40-55%",
  },
  {
    channel: "Email",
    avgCostPerMsg: 0.001,
    engagementRate: "15-25% open",
    costPerEngagement: "$0.004 – $0.007",
    marginEstimate: "70-85%",
  },
];

export const useCaseComparison: UseCaseComparison[] = [
  {
    useCase: "OTP / Authentication",
    bestChannel: "SMS",
    why: "Universal reach, no app required",
    cost100K: "$750 – $1,500",
  },
  {
    useCase: "Marketing promotion",
    bestChannel: "WhatsApp",
    why: "Rich media + 60% open rate",
    cost100K: "$2,500 – $6,000",
  },
  {
    useCase: "Transaction updates",
    bestChannel: "WhatsApp (utility)",
    why: "Free in 24h window, or $0.004-0.008",
    cost100K: "$400 – $800",
  },
  {
    useCase: "Customer support",
    bestChannel: "WhatsApp / Viber",
    why: "Free 24h session windows",
    cost100K: "$0 (within session)",
  },
  {
    useCase: "Re-engagement campaign",
    bestChannel: "RCS",
    why: "Rich carousels, no app download needed",
    cost100K: "$2,000 – $3,000",
  },
  {
    useCase: "Eastern Europe promo",
    bestChannel: "Viber",
    why: "Dominant app in region, session model",
    cost100K: "$1,500 – $2,500",
  },
  {
    useCase: "Africa / rural reach",
    bestChannel: "SMS",
    why: "Only channel with universal coverage",
    cost100K: "$1,800 – $2,800",
  },
];

export const regionalProfitability: RegionalProfitability[] = [
  {
    region: "Western Europe",
    mostProfitableChannel: "SMS + WhatsApp combo",
    marginRange: "40-55%",
    keyRisk: "GDPR compliance cost",
    strategicMove:
      "Bundle omnichannel, charge premium for compliance",
  },
  {
    region: "Eastern Europe",
    mostProfitableChannel: "Viber + SMS",
    marginRange: "45-60%",
    keyRisk: "Viber market dependency",
    strategicMove:
      "Lock in minimum commitments, upsell to omnichannel",
  },
  {
    region: "North America",
    mostProfitableChannel: "SMS (authentication)",
    marginRange: "30-40%",
    keyRisk: "Carrier fee increases, WhatsApp growth",
    strategicMove:
      "Focus on OTP/transactional where SMS is irreplaceable",
  },
  {
    region: "India",
    mostProfitableChannel: "WhatsApp",
    marginRange: "20-30%",
    keyRisk: "Ultra-competitive pricing, thin margins",
    strategicMove:
      "Volume play — win enterprise accounts, upsell platform",
  },
  {
    region: "Brazil",
    mostProfitableChannel: "WhatsApp + SMS",
    marginRange: "25-35%",
    keyRisk: "WhatsApp dominance reducing SMS volume",
    strategicMove:
      "Transition SMS customers to WhatsApp, protect margin with markup",
  },
  {
    region: "Southeast Asia",
    mostProfitableChannel: "SMS + WhatsApp",
    marginRange: "35-45%",
    keyRisk: "OTT channel fragmentation (Line, Zalo)",
    strategicMove:
      "Local channel partnerships alongside global channels",
  },
  {
    region: "Africa",
    mostProfitableChannel: "SMS",
    marginRange: "45-60%",
    keyRisk: "Low ARPU customers",
    strategicMove:
      "Mobile-first banking and government ID projects driving volume",
  },
  {
    region: "Middle East",
    mostProfitableChannel: "SMS + WhatsApp",
    marginRange: "35-50%",
    keyRisk: "Regulatory complexity per country",
    strategicMove:
      "Premium pricing justified by compliance expertise",
  },
];

export const competitors: Competitor[] = [
  {
    name: "Infobip",
    carrierConnections: "700+ MNOs",
    pricingModel: "Pay-as-you-go",
    smsPriceAdvantage: "10-30% cheaper",
    whatsappMarkup: "~25-40%",
    viberSupport: "Strong (native)",
    rcsStrategy: "MaaP for MNOs",
    easternEurope: "Dominant",
    enterpriseFocus: "Mid-market + enterprise",
    revenue: "~$2.1B",
  },
  {
    name: "Twilio",
    carrierConnections: "500+ MNOs",
    pricingModel: "Pay-as-you-go",
    smsPriceAdvantage: "Benchmark",
    whatsappMarkup: "~20-35%",
    viberSupport: "Limited",
    rcsStrategy: "Basic API",
    easternEurope: "Weak",
    enterpriseFocus: "Enterprise",
    revenue: "~$4.2B",
  },
  {
    name: "Sinch/MessageBird",
    carrierConnections: "600+ MNOs",
    pricingModel: "Pay-as-you-go + bundles",
    smsPriceAdvantage: "5-15% cheaper",
    whatsappMarkup: "~25-35%",
    viberSupport: "Moderate",
    rcsStrategy: "Basic API",
    easternEurope: "Moderate",
    enterpriseFocus: "SMB + mid-market",
    revenue: "~$2.8B",
  },
  {
    name: "Vonage",
    carrierConnections: "400+ MNOs",
    pricingModel: "Tiered + pay-as-you-go",
    smsPriceAdvantage: "5-10% more expensive",
    whatsappMarkup: "~30-45%",
    viberSupport: "Weak",
    rcsStrategy: "Basic API",
    easternEurope: "Weak",
    enterpriseFocus: "Enterprise",
    revenue: "~$1.4B",
  },
];

export const competitorWins: CompetitorWin[] = [
  {
    scenario: "Eastern Europe SMS",
    advantage: "20-30% cheaper",
    why: "Direct MNO relationships, home market",
  },
  {
    scenario: "Emerging markets (Africa, SEA)",
    advantage: "25-30% cheaper",
    why: "Local infrastructure, direct routes",
  },
  {
    scenario: "Viber-heavy markets",
    advantage: "Only serious option",
    why: "Native Viber integration, Rakuten relationship",
  },
  {
    scenario: "MNO partnerships (RCS)",
    advantage: "Unique MaaP platform",
    why: "Competitors offer API only, not MNO monetization tools",
  },
];

export const competitorLosses: CompetitorLoss[] = [
  {
    scenario: "US high-volume SMS",
    disadvantage: "5-10% more expensive",
    why: "Twilio's US carrier relationships are deeper",
  },
  {
    scenario: "Developer experience",
    disadvantage: "Perception gap",
    why: "Twilio documentation and DevEx is industry benchmark",
  },
  {
    scenario: "Enterprise custom pricing",
    disadvantage: "Less aggressive",
    why: "Twilio/Sinch willing to discount deeper for $1M+ deals",
  },
];
