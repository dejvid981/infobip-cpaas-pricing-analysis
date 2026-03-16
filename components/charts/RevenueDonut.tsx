"use client";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { enterpriseScenario } from "@/data/scenarios";

const COLORS = ["#FF6B00", "#FF8C38", "#FFB380", "#E05500", "#CC4D00", "#FF9F5A"];

interface CustomTooltipProps {
  active?: boolean;
  payload?: { payload: { channel: string; revenue: number; marginPercent: number } }[];
}

function CustomTooltip({ active, payload }: CustomTooltipProps) {
  if (!active || !payload?.length) return null;
  const d = payload[0].payload;
  return (
    <div className="bg-dark-card border border-dark-border rounded-lg px-3 py-2 text-sm shadow-lg">
      <p className="text-text-primary font-medium">{d.channel}</p>
      <p className="text-text-muted">
        Revenue: <span className="text-accent">${d.revenue.toLocaleString()}</span>
      </p>
      <p className="text-text-muted">
        Margin: <span className="text-margin-high">{d.marginPercent}%</span>
      </p>
    </div>
  );
}

export default function RevenueDonut() {
  const data = enterpriseScenario.map((s) => ({
    channel: s.channel,
    revenue: s.revenue,
    marginPercent: s.marginPercent,
  }));

  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={data}
          dataKey="revenue"
          nameKey="channel"
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={100}
          paddingAngle={2}
          animationBegin={0}
          animationDuration={800}
        >
          {data.map((_, i) => (
            <Cell key={i} fill={COLORS[i % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip content={<CustomTooltip />} />
        <text
          x="50%"
          y="48%"
          textAnchor="middle"
          dominantBaseline="central"
          className="fill-text-primary text-xl font-bold"
        >
          $248K
        </text>
        <text
          x="50%"
          y="58%"
          textAnchor="middle"
          dominantBaseline="central"
          className="fill-text-muted text-xs"
        >
          Total Revenue
        </text>
      </PieChart>
    </ResponsiveContainer>
  );
}
