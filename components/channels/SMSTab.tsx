"use client";

import { smsRates, smsVolumeDiscounts } from "@/data/smsRates";
import MarginBadge from "@/components/ui/MarginBadge";
import InsightCard from "@/components/ui/InsightCard";
import ComparisonBarChart from "@/components/charts/ComparisonBarChart";

const chartData = smsRates.map((r) => ({
  country: r.country,
  infobip: r.infobipRate,
  twilio: r.twilioRate,
}));

function fmt(n: number) {
  return `$${n.toFixed(4)}`;
}

export default function SMSTab() {
  return (
    <div className="space-y-8">
      <h3 className="text-2xl font-bold text-text-primary">
        SMS (A2P — Application-to-Person)
      </h3>

      {/* Pricing table */}
      <div className="overflow-x-auto rounded-xl border border-dark-border">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-dark-card text-text-muted uppercase text-xs tracking-wider">
              <th className="text-left px-4 py-3 border-b border-dark-border">Region</th>
              <th className="text-left px-4 py-3 border-b border-dark-border">Country</th>
              <th className="text-right px-4 py-3 border-b border-dark-border">Infobip Rate</th>
              <th className="text-right px-4 py-3 border-b border-dark-border">Twilio Rate</th>
              <th className="text-right px-4 py-3 border-b border-dark-border">Difference</th>
              <th className="text-center px-4 py-3 border-b border-dark-border">Margin</th>
            </tr>
          </thead>
          <tbody>
            {smsRates.map((r) => (
              <tr
                key={r.country}
                className="bg-dark-card/60 hover:bg-dark-border/30 transition-colors"
              >
                <td className="px-4 py-3 border-b border-dark-border text-text-muted">
                  {r.region}
                </td>
                <td className="px-4 py-3 border-b border-dark-border text-text-primary font-medium">
                  {r.country}
                </td>
                <td className="px-4 py-3 border-b border-dark-border text-right text-accent font-mono">
                  {fmt(r.infobipRate)}
                </td>
                <td className="px-4 py-3 border-b border-dark-border text-right text-text-muted font-mono">
                  {fmt(r.twilioRate)}
                </td>
                <td className="px-4 py-3 border-b border-dark-border text-right text-margin-high font-medium">
                  {r.priceDiff}% cheaper
                </td>
                <td className="px-4 py-3 border-b border-dark-border text-center">
                  <MarginBadge level={r.marginIndicator} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Comparison chart */}
      <div className="bg-dark-card border border-dark-border rounded-xl p-6">
        <h4 className="text-lg font-semibold text-text-primary mb-4">
          Infobip vs Twilio — SMS Rate Comparison by Country
        </h4>
        <ComparisonBarChart data={chartData} />
      </div>

      {/* Insight */}
      <InsightCard
        title="Key Insight"
        text="Infobip's direct MNO connections (700+ carrier relationships) give them 10-30% pricing advantage over Twilio in most markets. The advantage is largest in emerging markets and Eastern Europe where Infobip has deeper carrier relationships."
      />

      {/* Volume discount table */}
      <div>
        <h4 className="text-lg font-semibold text-text-primary mb-4">
          Volume Discount Tiers (US Example)
        </h4>
        <div className="overflow-x-auto rounded-xl border border-dark-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-dark-card text-text-muted uppercase text-xs tracking-wider">
                <th className="text-left px-4 py-3 border-b border-dark-border">
                  Monthly Volume
                </th>
                <th className="text-left px-4 py-3 border-b border-dark-border">
                  Discount
                </th>
                <th className="text-right px-4 py-3 border-b border-dark-border">
                  Effective US Rate
                </th>
              </tr>
            </thead>
            <tbody>
              {smsVolumeDiscounts.map((d) => (
                <tr
                  key={d.tier}
                  className="bg-dark-card/60 hover:bg-dark-border/30 transition-colors"
                >
                  <td className="px-4 py-3 border-b border-dark-border text-text-primary font-medium">
                    {d.tier}
                  </td>
                  <td className="px-4 py-3 border-b border-dark-border text-text-muted">
                    {d.discount}
                  </td>
                  <td className="px-4 py-3 border-b border-dark-border text-right text-accent font-mono">
                    {fmt(d.effectiveUSRate)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
