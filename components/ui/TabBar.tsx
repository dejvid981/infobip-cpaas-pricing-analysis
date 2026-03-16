"use client";
import { motion } from "framer-motion";

interface Props {
  tabs: string[];
  active: number;
  onChange: (index: number) => void;
}

export default function TabBar({ tabs, active, onChange }: Props) {
  return (
    <div className="flex gap-1 bg-dark-card rounded-lg p-1 border border-dark-border w-fit mx-auto mb-8">
      {tabs.map((tab, i) => (
        <button
          key={tab}
          onClick={() => onChange(i)}
          className={`relative px-6 py-2.5 rounded-md text-sm font-medium transition-colors ${
            active === i ? "text-white" : "text-text-muted hover:text-text-primary"
          }`}
        >
          {active === i && (
            <motion.div
              layoutId="tab-indicator"
              className="absolute inset-0 bg-accent rounded-md"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          <span className="relative z-10">{tab}</span>
        </button>
      ))}
    </div>
  );
}
