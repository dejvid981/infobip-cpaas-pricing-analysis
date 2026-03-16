export interface SMSRate {
  region: string;
  country: string;
  infobipRate: number;
  twilioRate: number;
  priceDiff: number;
  marginIndicator: "High" | "Medium-High" | "Medium" | "Low";
}

export interface SMSVolumeDiscount {
  tier: string;
  discount: string;
  effectiveUSRate: number;
}

export interface WhatsAppBaseRate {
  category: "Marketing" | "Utility" | "Authentication" | "Service";
  rates: Record<string, number>;
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

export interface RCSFactor {
  factor: string;
  impact: string;
  detail: string;
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

export interface UseCaseComparison {
  useCase: string;
  bestChannel: string;
  why: string;
  cost100K: string;
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

export interface CompetitorWin {
  scenario: string;
  advantage: string;
  why: string;
}

export interface CompetitorLoss {
  scenario: string;
  disadvantage: string;
  why: string;
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
  icon: string;
}
