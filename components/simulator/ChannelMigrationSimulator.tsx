"use client";
import { useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
  CartesianGrid,
} from "recharts";
import { useChannelMigration, regions } from "@/hooks/useChannelMigration";
import { COLORS } from "@/lib/colors";

interface ChartTooltipProps {
  active?: boolean;
  payload?: { name: string; value: number; color: string }[];
  label?: number;
}

function ChartTooltip({ active, payload, label }: ChartTooltipProps) {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-dark-card border border-dark-border rounded-lg px-3 py-2 text-sm shadow-lg">
      <p className="text-text-primary font-medium mb-1">{label}% SMS / {100 - (label ?? 0)}% WhatsApp</p>
      {payload.map((p, i) => (
        <p key={i} className="text-text-muted">
          {p.name}: <span style={{ color: p.color }}>${p.value.toLocaleString()}</span>
        </p>
      ))}
    </div>
  );
}

export default function ChannelMigrationSimulator() {
  const [region, setRegion] = useState("Western Europe");
  const [smsPercent, setSmsPercent] = useState(70);

  const { monthlyRevenue, grossMargin, marginPercent, chartData, insight } =
    useChannelMigration(region, smsPercent);

  return (
    <div className="bg-dark-card border border-accent/30 rounded-xl p-6 shadow-[0_0_30px_rgba(255,107,0,0.1)]">
      <h3 className="text-xl font-bold text-accent mb-6">Channel Migration Simulator</h3>

      {/* Controls */}
      <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
        <div className="flex-1">
          <label className="block text-text-muted text-sm mb-1">Region</label>
          <select
            value={region}
            onChange={(e) => setRegion(e.target.value)}
            className="w-full bg-dark-primary border border-dark-border rounded-lg px-3 py-2 text-text-primary text-sm focus:outline-none focus:border-accent"
          >
            {regions.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
        </div>

        <div className="flex-[2]">
          <div className="flex justify-between text-sm text-text-muted mb-1">
            <span>100% SMS</span>
            <span className="text-accent font-medium">
              {smsPercent}% SMS / {100 - smsPercent}% WhatsApp
            </span>
            <span>100% WhatsApp</span>
          </div>
          <input
            type="range"
            min={0}
            max={100}
            step={1}
            value={smsPercent}
            onChange={(e) => setSmsPercent(Number(e.target.value))}
            className="w-full h-2 rounded-lg appearance-none cursor-pointer accent-accent bg-dark-border [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-accent"
          />
        </div>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-dark-primary rounded-lg p-4 text-center">
          <p className="text-text-muted text-sm mb-1">Monthly Revenue</p>
          <p className="text-3xl font-bold text-text-primary">
            ${monthlyRevenue.toLocaleString("en-US", { maximumFractionDigits: 0 })}
          </p>
        </div>
        <div className="bg-dark-primary rounded-lg p-4 text-center">
          <p className="text-text-muted text-sm mb-1">Gross Margin</p>
          <p className="text-3xl font-bold text-margin-high">
            ${grossMargin.toLocaleString("en-US", { maximumFractionDigits: 0 })}
          </p>
          <p className="text-sm text-text-muted mt-1">{marginPercent.toFixed(1)}%</p>
        </div>
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={200}>
        <AreaChart data={chartData} margin={{ top: 5, right: 10, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke={COLORS.darkBorder} />
          <XAxis
            dataKey="smsPercent"
            tick={{ fill: COLORS.textMuted, fontSize: 11 }}
            tickFormatter={(v: number) => `${v}%`}
          />
          <YAxis tick={{ fill: COLORS.textMuted, fontSize: 11 }} tickFormatter={(v: number) => `$${(v / 1000).toFixed(0)}K`} />
          <Tooltip content={<ChartTooltip />} />
          <Area
            type="monotone"
            dataKey="revenue"
            name="Revenue"
            stroke={COLORS.accent}
            fill={COLORS.accent}
            fillOpacity={0.2}
          />
          <Area
            type="monotone"
            dataKey="margin"
            name="Margin"
            stroke={COLORS.marginHigh}
            fill={COLORS.marginHigh}
            fillOpacity={0.2}
          />
          <ReferenceLine x={smsPercent} stroke={COLORS.accent} strokeDasharray="4 4" strokeWidth={2} />
        </AreaChart>
      </ResponsiveContainer>

      {/* Insight */}
      <p className="text-text-muted text-sm mt-4 italic">{insight}</p>
    </div>
  );
}
