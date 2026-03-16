"use client";

import { motion } from "framer-motion";
import SectionWrapper from "../ui/SectionWrapper";
import Card from "../ui/Card";
import { investigationQuestions } from "../../data/scenarios";

const iconMap: Record<string, string> = {
  Route: "🛤️",
  TrendingUp: "📈",
  AlertTriangle: "⚠️",
  BarChart: "📊",
  Users: "👥",
  DollarSign: "💲",
};

export default function InvestigationQuestions() {
  return (
    <SectionWrapper id="investigate">
      <h2 className="text-3xl font-bold text-text-primary">
        What I&apos;d Investigate Next
      </h2>
      <p className="text-text-muted mt-2 mb-10">
        Questions that require Infobip&apos;s internal data to answer
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {investigationQuestions.map((q, index) => (
          <motion.div
            key={q.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="h-full flex flex-col">
              <span className="text-4xl mb-4 block">
                {iconMap[q.icon] ?? "❓"}
              </span>
              <h3 className="text-lg font-semibold text-text-primary">
                {q.title}
              </h3>
              <p className="text-sm text-text-muted mt-2 leading-relaxed flex-1">
                {q.description}
              </p>
              <span className="text-xs bg-accent/10 text-accent rounded-full px-3 py-1 mt-4 inline-block self-start">
                Requires Internal Data
              </span>
            </Card>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
