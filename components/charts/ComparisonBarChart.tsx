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

interface DataPoint {
  country: string;
  infobip: number;
  twilio: number;
}

interface Props {
  data: DataPoint[];
}

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
          {entry.name}: ${entry.value.toFixed(4)}
        </p>
      ))}
    </div>
  );
}

export default function ComparisonBarChart({ data }: Props) {
  return (
    <div className="w-full h-[400px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          layout="vertical"
          margin={{ top: 10, right: 30, left: 80, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#2a2d3a" horizontal={false} />
          <XAxis
            type="number"
            tick={{ fill: "#9ca3af", fontSize: 12 }}
            tickFormatter={(v: number) => `$${v}`}
            axisLine={{ stroke: "#2a2d3a" }}
          />
          <YAxis
            type="category"
            dataKey="country"
            tick={{ fill: "#e5e7eb", fontSize: 13 }}
            axisLine={{ stroke: "#2a2d3a" }}
            width={75}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend
            wrapperStyle={{ color: "#e5e7eb", fontSize: 13 }}
          />
          <Bar
            dataKey="infobip"
            name="Infobip"
            fill="#FF6B00"
            radius={[0, 4, 4, 0]}
            isAnimationActive
            animationDuration={800}
          />
          <Bar
            dataKey="twilio"
            name="Twilio"
            fill="#4A4E69"
            radius={[0, 4, 4, 0]}
            isAnimationActive
            animationDuration={800}
            animationBegin={200}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
