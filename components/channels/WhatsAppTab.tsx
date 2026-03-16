import { whatsappBaseRates, whatsappMarkup } from "@/data/whatsappRates";
import InsightCard from "@/components/ui/InsightCard";

const countries = ["USA", "Germany", "UK", "India", "Brazil", "Nigeria"];

function fmt(n: number) {
  if (n === 0) return "Free";
  return `$${n.toFixed(4)}`;
}

export default function WhatsAppTab() {
  return (
    <div className="space-y-8">
      <h3 className="text-2xl font-bold text-text-primary">
        WhatsApp Business API
      </h3>

      {/* Meta base rates */}
      <div>
        <h4 className="text-lg font-semibold text-text-primary mb-4">
          Meta Base Rates (per conversation)
        </h4>
        <div className="overflow-x-auto rounded-xl border border-dark-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-dark-card text-text-muted uppercase text-xs tracking-wider">
                <th className="text-left px-4 py-3 border-b border-dark-border">Category</th>
                {countries.map((c) => (
                  <th key={c} className="text-right px-4 py-3 border-b border-dark-border">
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {whatsappBaseRates.map((row) => (
                <tr
                  key={row.category}
                  className="bg-dark-card/60 hover:bg-dark-border/30 transition-colors"
                >
                  <td className="px-4 py-3 border-b border-dark-border text-text-primary font-medium">
                    {row.category}
                  </td>
                  {countries.map((c) => (
                    <td
                      key={c}
                      className="px-4 py-3 border-b border-dark-border text-right font-mono text-text-muted"
                    >
                      {fmt(row.rates[c])}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Infobip markup (India example) */}
      <div>
        <h4 className="text-lg font-semibold text-text-primary mb-4">
          Infobip Markup Analysis (India)
        </h4>
        <div className="overflow-x-auto rounded-xl border border-dark-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-dark-card text-text-muted uppercase text-xs tracking-wider">
                <th className="text-left px-4 py-3 border-b border-dark-border">Category</th>
                <th className="text-right px-4 py-3 border-b border-dark-border">Meta Base</th>
                <th className="text-right px-4 py-3 border-b border-dark-border">Infobip Est.</th>
                <th className="text-right px-4 py-3 border-b border-dark-border">Markup %</th>
                <th className="text-right px-4 py-3 border-b border-dark-border">Margin</th>
              </tr>
            </thead>
            <tbody>
              {whatsappMarkup.map((row) => (
                <tr
                  key={row.category}
                  className="bg-dark-card/60 hover:bg-dark-border/30 transition-colors"
                >
                  <td className="px-4 py-3 border-b border-dark-border text-text-primary font-medium">
                    {row.category}
                  </td>
                  <td className="px-4 py-3 border-b border-dark-border text-right font-mono text-text-muted">
                    {fmt(row.metaBase)}
                  </td>
                  <td className="px-4 py-3 border-b border-dark-border text-right font-mono text-accent">
                    {fmt(row.infobipEst)}
                  </td>
                  <td className="px-4 py-3 border-b border-dark-border text-right text-margin-high font-medium">
                    {row.markupPct}%
                  </td>
                  <td className="px-4 py-3 border-b border-dark-border text-right font-mono text-margin-high">
                    {fmt(row.margin)}
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
        text="WhatsApp is a margin opportunity, not just a channel. At 1M messages/month in India, Infobip's estimated WhatsApp margin = ~$2,700/month from markup alone — before platform fees. But the real play is upselling customers from WhatsApp-only to omnichannel where combined margins are 3-5x higher."
      />
    </div>
  );
}
