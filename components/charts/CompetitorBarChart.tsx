"use client";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
} from "recharts";
import { COLORS } from "@/lib/colors";

const data = [
  { dimension: "Price Advantage", infobip: 90, twilio: 60, sinch: 75, vonage: 55 },
  { dimension: "Global Reach", infobip: 85, twilio: 80, sinch: 78, vonage: 65 },
  { dimension: "Channel Breadth", infobip: 95, twilio: 70, sinch: 72, vonage: 60 },
  { dimension: "Enterprise Focus", infobip: 75, twilio: 90, sinch: 65, vonage: 80 },
  { dimension: "Dev Experience", infobip: 65, twilio: 95, sinch: 60, vonage: 70 },
  { dimension: "Revenue Scale", infobip: 50, twilio: 100, sinch: 67, vonage: 33 },
];

function CustomTooltip({
  active,
  payload,
  label,
}: {
  active?: boolean;
  payload?: { value: number; name: string; color: string }[];
  label?: string;
}) {
  if (!active || !payload) return null;
  return (
    <div className="bg-dark-primary border border-dark-border rounded-lg p-3 shadow-lg">
      <p className="text-text-primary font-medium mb-1">{label}</p>
      {payload.map((entry) => (
        <p key={entry.name} className="text-sm" style={{ color: entry.color }}>
          {entry.name}: {entry.value}
        </p>
      ))}
    </div>
  );
}

export default function CompetitorBarChart() {
  return (
    <div className="w-full h-[400px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          layout="vertical"
          margin={{ top: 10, right: 30, left: 100, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#2a2d3a" horizontal={false} />
          <XAxis
            type="number"
            domain={[0, 100]}
            tick={{ fill: "#9ca3af", fontSize: 12 }}
            axisLine={{ stroke: "#2a2d3a" }}
          />
          <YAxis
            type="category"
            dataKey="dimension"
            tick={{ fill: "#e5e7eb", fontSize: 13 }}
            axisLine={{ stroke: "#2a2d3a" }}
            width={95}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend wrapperStyle={{ color: "#e5e7eb", fontSize: 13 }} />
          <Bar
            dataKey="infobip"
            name="Infobip"
            fill={COLORS.accent}
            radius={[0, 4, 4, 0]}
            isAnimationActive
            animationDuration={800}
          />
          <Bar
            dataKey="twilio"
            name="Twilio"
            fill={COLORS.indigoBlue}
            radius={[0, 4, 4, 0]}
            isAnimationActive
            animationDuration={800}
            animationBegin={200}
          />
          <Bar
            dataKey="sinch"
            name="Sinch"
            fill={COLORS.sinchTeal}
            radius={[0, 4, 4, 0]}
            isAnimationActive
            animationDuration={800}
            animationBegin={400}
          />
          <Bar
            dataKey="vonage"
            name="Vonage"
            fill={COLORS.vonagePurple}
            radius={[0, 4, 4, 0]}
            isAnimationActive
            animationDuration={800}
            animationBegin={600}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
