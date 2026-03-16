"use client";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Card from "@/components/ui/Card";
import CompetitorBarChart from "@/components/charts/CompetitorBarChart";
import { competitorWins, competitorLosses } from "@/data/competitors";

export default function CompetitiveAnalysis() {
  return (
    <SectionWrapper id="competitive">
      <h2 className="text-3xl font-bold text-text-primary mb-2">
        Competitive Positioning
      </h2>
      <p className="text-text-muted mb-8">
        Infobip vs. key CPaaS competitors across six dimensions
      </p>

      <Card className="mb-8">
        <CompetitorBarChart />
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0 }}
        >
          <Card className="border-l-4 border-l-margin-high h-full">
            <h3 className="text-lg font-semibold text-text-primary mb-4">
              Where Infobip Wins
            </h3>
            <ul className="space-y-4">
              {competitorWins.map((win) => (
                <li key={win.scenario}>
                  <p className="font-bold text-text-primary">{win.scenario}</p>
                  <p className="text-sm text-text-primary">{win.advantage}</p>
                  <p className="text-sm text-text-muted">{win.why}</p>
                </li>
              ))}
            </ul>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Card className="border-l-4 border-l-margin-low h-full">
            <h3 className="text-lg font-semibold text-text-primary mb-4">
              Where Infobip Loses
            </h3>
            <ul className="space-y-4">
              {competitorLosses.map((loss) => (
                <li key={loss.scenario}>
                  <p className="font-bold text-text-primary">{loss.scenario}</p>
                  <p className="text-sm text-text-primary">{loss.disadvantage}</p>
                  <p className="text-sm text-text-muted">{loss.why}</p>
                </li>
              ))}
            </ul>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="border-l-4 border-l-accent h-full">
            <h3 className="text-lg font-semibold text-text-primary mb-4">
              Strategic Position
            </h3>
            <p className="text-sm text-text-muted leading-relaxed">
              Infobip&apos;s strongest position is in emerging markets and Eastern
              Europe where direct MNO relationships create a 20-30% pricing moat.
              The RCS MaaP platform is a unique strategic asset no competitor can
              match. The main vulnerability is developer experience perception and
              US high-volume SMS pricing.
            </p>
          </Card>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
