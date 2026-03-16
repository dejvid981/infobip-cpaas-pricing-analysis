"use client";

import { viberRates, viberProfitability } from "@/data/viberRates";
import InsightCard from "@/components/ui/InsightCard";

export default function ViberTab() {
  return (
    <div className="space-y-8">
      <h3 className="text-2xl font-bold text-text-primary">
        Viber Business Messages
      </h3>

      {/* Pricing components table */}
      <div>
        <h4 className="text-lg font-semibold text-text-primary mb-4">
          Pricing Components
        </h4>
        <div className="overflow-x-auto rounded-xl border border-dark-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-dark-card text-text-muted uppercase text-xs tracking-wider">
                <th className="text-left px-4 py-3 border-b border-dark-border">Component</th>
                <th className="text-right px-4 py-3 border-b border-dark-border">Rate</th>
                <th className="text-left px-4 py-3 border-b border-dark-border">Notes</th>
              </tr>
            </thead>
            <tbody>
              {viberRates.map((r) => (
                <tr
                  key={r.component}
                  className="bg-dark-card/60 hover:bg-dark-border/30 transition-colors"
                >
                  <td className="px-4 py-3 border-b border-dark-border text-text-primary font-medium">
                    {r.component}
                  </td>
                  <td className="px-4 py-3 border-b border-dark-border text-right font-mono text-accent">
                    {r.rate}
                  </td>
                  <td className="px-4 py-3 border-b border-dark-border text-text-muted">
                    {r.notes}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Profitability model table */}
      <div>
        <h4 className="text-lg font-semibold text-text-primary mb-4">
          Profitability Model
        </h4>
        <div className="overflow-x-auto rounded-xl border border-dark-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-dark-card text-text-muted uppercase text-xs tracking-wider">
                <th className="text-left px-4 py-3 border-b border-dark-border">Profile</th>
                <th className="text-right px-4 py-3 border-b border-dark-border">Monthly Spend</th>
                <th className="text-right px-4 py-3 border-b border-dark-border">Margin Est.</th>
                <th className="text-left px-4 py-3 border-b border-dark-border">Why</th>
              </tr>
            </thead>
            <tbody>
              {viberProfitability.map((p) => (
                <tr
                  key={p.profile}
                  className="bg-dark-card/60 hover:bg-dark-border/30 transition-colors"
                >
                  <td className="px-4 py-3 border-b border-dark-border text-text-primary font-medium">
                    {p.profile}
                  </td>
                  <td className="px-4 py-3 border-b border-dark-border text-right font-mono text-accent">
                    {p.monthlySpend}
                  </td>
                  <td className="px-4 py-3 border-b border-dark-border text-right text-margin-high font-semibold">
                    {p.marginEstimate}
                  </td>
                  <td className="px-4 py-3 border-b border-dark-border text-text-muted">
                    {p.why}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Insight */}
      <InsightCard
        title="Key Insight"
        text="Viber's minimum commitment model is genius for margin protection. Even low-usage customers pay \u20AC100-150/month minimum. In Eastern Europe/CIS where Viber is dominant, this creates predictable recurring revenue that SMS can't match."
      />
    </div>
  );
}
