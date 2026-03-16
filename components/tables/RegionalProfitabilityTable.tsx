"use client";
import { Fragment, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { regionalProfitability } from "@/data/competitors";

function marginColor(range: string): string {
  // Parse first number from range like "40-55%"
  const match = range.match(/(\d+)/);
  const low = match ? parseInt(match[1], 10) : 0;
  if (low >= 40) return "text-margin-high";
  if (low >= 25) return "text-margin-medium";
  return "text-margin-low";
}

export default function RegionalProfitabilityTable() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-dark-border text-text-muted text-left">
            <th className="py-3 px-4 font-medium">Region</th>
            <th className="py-3 px-4 font-medium">Best Channel</th>
            <th className="py-3 px-4 font-medium">Margin Range</th>
            <th className="py-3 px-4 font-medium">Key Risk</th>
            <th className="py-3 px-4 font-medium hidden md:table-cell">Strategic Move</th>
          </tr>
        </thead>
        <tbody>
          {regionalProfitability.map((row, i) => (
            <Fragment key={row.region}>
              <tr
                role="button"
                tabIndex={0}
                aria-expanded={expanded === i}
                onClick={() => setExpanded(expanded === i ? null : i)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setExpanded(expanded === i ? null : i);
                  }
                }}
                className="border-b border-dark-border/50 hover:bg-dark-border/30 transition cursor-pointer"
              >
                <td className="py-3 px-4 text-text-primary font-medium">{row.region}</td>
                <td className="py-3 px-4 text-text-primary">{row.mostProfitableChannel}</td>
                <td className={`py-3 px-4 font-semibold ${marginColor(row.marginRange)}`}>
                  {row.marginRange}
                </td>
                <td className="py-3 px-4 text-text-muted">{row.keyRisk}</td>
                <td className="py-3 px-4 text-text-muted hidden md:table-cell">{row.strategicMove}</td>
              </tr>
              <AnimatePresence>
                {expanded === i && (
                  <tr>
                    <td colSpan={5}>
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 py-3 bg-dark-primary/50 text-text-muted text-sm md:hidden">
                          <span className="font-medium text-text-primary">Strategic Move:</span>{" "}
                          {row.strategicMove}
                        </div>
                        <div className="px-4 py-3 bg-dark-primary/50 text-text-muted text-sm">
                          <span className="font-medium text-text-primary">{row.region}</span> — The most
                          profitable channel mix is <span className="text-accent">{row.mostProfitableChannel}</span>{" "}
                          with margins of <span className={marginColor(row.marginRange)}>{row.marginRange}</span>.
                          Primary risk factor: {row.keyRisk.toLowerCase()}. Recommended approach:{" "}
                          {row.strategicMove.toLowerCase()}.
                        </div>
                      </motion.div>
                    </td>
                  </tr>
                )}
              </AnimatePresence>
            </Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}
