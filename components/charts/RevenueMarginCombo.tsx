"use client";
import {
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { enterpriseScenario } from "@/data/scenarios";
import { COLORS } from "@/lib/colors";

interface CustomTooltipProps {
  active?: boolean;
  payload?: { name: string; value: number; color: string }[];
  label?: string;
}

function CustomTooltip({ active, payload, label }: CustomTooltipProps) {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-dark-card border border-dark-border rounded-lg px-3 py-2 text-sm shadow-lg">
      <p className="text-text-primary font-medium mb-1">{label}</p>
      {payload.map((p, i) => (
        <p key={i} className="text-text-muted">
          {p.name}: <span style={{ color: p.color }}>
            {p.name === "Margin %" ? `${p.value}%` : `$${p.value.toLocaleString()}`}
          </span>
        </p>
      ))}
    </div>
  );
}

export default function RevenueMarginCombo() {
  const data = enterpriseScenario.map((s) => ({
    name: s.channel.length > 15 ? s.channel.slice(0, 14) + "..." : s.channel,
    revenue: s.revenue,
    marginPercent: s.marginPercent,
  }));

  return (
    <ResponsiveContainer width="100%" height={350}>
      <ComposedChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 40 }}>
        <CartesianGrid strokeDasharray="3 3" stroke={COLORS.darkBorder} />
        <XAxis
          dataKey="name"
          tick={{ fill: COLORS.textMuted, fontSize: 11 }}
          angle={-30}
          textAnchor="end"
          interval={0}
        />
        <YAxis
          yAxisId="left"
          tick={{ fill: COLORS.textMuted, fontSize: 11 }}
          tickFormatter={(v: number) => `$${(v / 1000).toFixed(0)}K`}
        />
        <YAxis
          yAxisId="right"
          orientation="right"
          tick={{ fill: COLORS.textMuted, fontSize: 11 }}
          tickFormatter={(v: number) => `${v}%`}
          domain={[0, 100]}
        />
        <Tooltip content={<CustomTooltip />} />
        <Bar yAxisId="left" dataKey="revenue" name="Revenue" fill={COLORS.accent} radius={[4, 4, 0, 0]} />
        <Line
          yAxisId="right"
          type="monotone"
          dataKey="marginPercent"
          name="Margin %"
          stroke="#FFFFFF"
          strokeWidth={2}
          dot={{ r: 4, fill: "#FFFFFF" }}
        />
      </ComposedChart>
    </ResponsiveContainer>
  );
}
