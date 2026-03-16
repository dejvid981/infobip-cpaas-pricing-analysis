"use client";
import { useMemo } from "react";

const regionRates: Record<string, { smsRate: number; smsCogs: number; waRate: number; waCogs: number }> = {
  "Western Europe": { smsRate: 0.045, smsCogs: 0.0225, waRate: 0.035, waCogs: 0.0245 },
  "Eastern Europe": { smsRate: 0.025, smsCogs: 0.01, waRate: 0.025, waCogs: 0.0175 },
  "North America": { smsRate: 0.0075, smsCogs: 0.0045, waRate: 0.025, waCogs: 0.0175 },
  "India": { smsRate: 0.003, smsCogs: 0.0021, waRate: 0.0134, waCogs: 0.0107 },
  "Brazil": { smsRate: 0.035, smsCogs: 0.021, waRate: 0.0625, waCogs: 0.05 },
  "Southeast Asia": { smsRate: 0.025, smsCogs: 0.0125, waRate: 0.02, waCogs: 0.014 },
  "Africa": { smsRate: 0.023, smsCogs: 0.0092, waRate: 0.0816, waCogs: 0.0653 },
  "Middle East": { smsRate: 0.032, smsCogs: 0.016, waRate: 0.03, waCogs: 0.021 },
};

export const regions = Object.keys(regionRates);

export interface MigrationResult {
  monthlyRevenue: number;
  grossMargin: number;
  marginPercent: number;
  chartData: { smsPercent: number; revenue: number; margin: number; marginPct: number }[];
  insight: string;
}

const TOTAL_MESSAGES = 1_000_000;

function calculate(region: string, smsPercent: number) {
  const rates = regionRates[region];
  if (!rates) return null;

  const smsVolume = TOTAL_MESSAGES * (smsPercent / 100);
  const waVolume = TOTAL_MESSAGES * (1 - smsPercent / 100);

  const smsRevenue = smsVolume * rates.smsRate;
  const smsCost = smsVolume * rates.smsCogs;
  const waRevenue = waVolume * rates.waRate;
  const waCost = waVolume * rates.waCogs;

  const monthlyRevenue = smsRevenue + waRevenue;
  const totalCogs = smsCost + waCost;
  const grossMargin = monthlyRevenue - totalCogs;
  const marginPercent = monthlyRevenue > 0 ? (grossMargin / monthlyRevenue) * 100 : 0;

  return { monthlyRevenue, grossMargin, marginPercent };
}

export function useChannelMigration(region: string, smsPercent: number): MigrationResult {
  return useMemo(() => {
    const current = calculate(region, smsPercent);
    const baseline = calculate(region, 100);

    if (!current || !baseline) {
      return {
        monthlyRevenue: 0,
        grossMargin: 0,
        marginPercent: 0,
        chartData: [],
        insight: "Select a region to begin.",
      };
    }

    const chartData = Array.from({ length: 11 }, (_, i) => {
      const pct = i * 10;
      const r = calculate(region, pct)!;
      return {
        smsPercent: pct,
        revenue: Math.round(r.monthlyRevenue),
        margin: Math.round(r.grossMargin),
        marginPct: Math.round(r.marginPercent * 10) / 10,
      };
    });

    const diff = current.grossMargin - baseline.grossMargin;
    const diffSign = diff >= 0 ? "+" : "";
    const waPercent = 100 - smsPercent;

    const insight = `At ${smsPercent}% SMS / ${waPercent}% WhatsApp, monthly margin is $${current.grossMargin.toLocaleString("en-US", { maximumFractionDigits: 0 })} (${current.marginPercent.toFixed(1)}%). That is ${diffSign}$${diff.toLocaleString("en-US", { maximumFractionDigits: 0 })} compared to a 100% SMS baseline.`;

    return {
      monthlyRevenue: current.monthlyRevenue,
      grossMargin: current.grossMargin,
      marginPercent: current.marginPercent,
      chartData,
      insight,
    };
  }, [region, smsPercent]);
}
