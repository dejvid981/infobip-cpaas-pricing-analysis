import Card from "./Card";

interface Props {
  title: string;
  text: string;
}

export default function InsightCard({ title, text }: Props) {
  return (
    <Card accent>
      <h4 className="text-accent font-semibold text-sm uppercase tracking-wider mb-2">{title}</h4>
      <p className="text-text-primary text-sm leading-relaxed">{text}</p>
    </Card>
  );
}
