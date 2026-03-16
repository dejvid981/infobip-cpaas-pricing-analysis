import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  accent?: boolean;
}

export default function Card({ children, className = "", accent = false }: Props) {
  return (
    <div
      className={`bg-dark-card border border-dark-border rounded-xl p-6 ${
        accent ? "border-l-4 border-l-accent" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
