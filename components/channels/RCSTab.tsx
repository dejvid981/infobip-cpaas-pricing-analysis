import { rcsRates, rcsFactors } from "@/data/rcsRates";
import InsightCard from "@/components/ui/InsightCard";

const impactColors: Record<string, string> = {
  Positive: "text-margin-high",
  Negative: "text-margin-low",
  Risk: "text-yellow-400",
};

export default function RCSTab() {
  return (
    <div className="space-y-8">
      <h3 className="text-2xl font-bold text-text-primary">
        RCS (Rich Communication Services)
      </h3>

      {/* Rate range table */}
      <div>
        <h4 className="text-lg font-semibold text-text-primary mb-4">
          Estimated Rate Ranges
        </h4>
        <div className="overflow-x-auto rounded-xl border border-dark-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-dark-card text-text-muted uppercase text-xs tracking-wider">
                <th className="text-left px-4 py-3 border-b border-dark-border">Message Type</th>
                <th className="text-right px-4 py-3 border-b border-dark-border">Rate Range</th>
                <th className="text-right px-4 py-3 border-b border-dark-border">vs SMS Premium</th>
                <th className="text-left px-4 py-3 border-b border-dark-border">Notes</th>
              </tr>
            </thead>
            <tbody>
              {rcsRates.map((r) => (
                <tr
                  key={r.messageType}
                  className="bg-dark-card/60 hover:bg-dark-border/30 transition-colors"
                >
                  <td className="px-4 py-3 border-b border-dark-border text-text-primary font-medium">
                    {r.messageType}
                  </td>
                  <td className="px-4 py-3 border-b border-dark-border text-right font-mono text-accent">
                    ${r.rateRange[0].toFixed(4)} – ${r.rateRange[1].toFixed(4)}
                  </td>
                  <td className="px-4 py-3 border-b border-dark-border text-right text-text-muted">
                    {r.vsSMSPremium}
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

      {/* Profitability factors table */}
      <div>
        <h4 className="text-lg font-semibold text-text-primary mb-4">
          Profitability Factors
        </h4>
        <div className="overflow-x-auto rounded-xl border border-dark-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-dark-card text-text-muted uppercase text-xs tracking-wider">
                <th className="text-left px-4 py-3 border-b border-dark-border">Factor</th>
                <th className="text-center px-4 py-3 border-b border-dark-border">Impact</th>
                <th className="text-left px-4 py-3 border-b border-dark-border">Detail</th>
              </tr>
            </thead>
            <tbody>
              {rcsFactors.map((f) => (
                <tr
                  key={f.factor}
                  className="bg-dark-card/60 hover:bg-dark-border/30 transition-colors"
                >
                  <td className="px-4 py-3 border-b border-dark-border text-text-primary font-medium">
                    {f.factor}
                  </td>
                  <td
                    className={`px-4 py-3 border-b border-dark-border text-center font-semibold ${
                      impactColors[f.impact] ?? "text-text-muted"
                    }`}
                  >
                    {f.impact}
                  </td>
                  <td className="px-4 py-3 border-b border-dark-border text-text-muted">
                    {f.detail}
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
        text="RCS is Infobip's strategic bet. Their MaaP platform lets MNOs monetize RCS traffic. This positions Infobip as infrastructure provider, not just messaging reseller. Margin potential is high but volume is still building."
      />
    </div>
  );
}
