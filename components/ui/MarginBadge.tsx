interface Props {
  level: "High" | "Medium-High" | "Medium" | "Low";
}

const colors: Record<string, string> = {
  High: "bg-margin-high/20 text-margin-high",
  "Medium-High": "bg-margin-medium/20 text-margin-medium",
  Medium: "bg-margin-medium/20 text-margin-medium",
  Low: "bg-margin-low/20 text-margin-low",
};

export default function MarginBadge({ level }: Props) {
  return (
    <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${colors[level]}`}>
      {level}
    </span>
  );
}
