"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const limitations = [
  "Infobip does not publish exact per-message rates — estimates based on public pricing calculators",
  "MNO termination fees are confidential — margin estimates use industry standard ranges",
  "Volume discount tiers estimated from publicly available information",
  "RCS pricing is highly fragmented and carrier-specific",
];

export default function Footer() {
  const [methodologyOpen, setMethodologyOpen] = useState(false);

  return (
    <footer className="bg-dark-card">
      {/* Top gradient border */}
      <div className="h-px bg-gradient-to-r from-transparent via-accent to-transparent" />

      <div className="py-12 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Top row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Left - Credits */}
            <div>
              <p className="text-lg font-semibold text-text-primary">
                Built by David Mustac
              </p>
              <a
                href="https://linkedin.com/in/david-mustac"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-2 text-sm text-text-muted hover:text-accent transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                Connect on LinkedIn
              </a>
            </div>

            {/* Center - Powered by */}
            <div className="text-center">
              <p className="text-sm text-text-muted">Powered by</p>
              <p className="text-lg font-semibold text-accent">Claude Code</p>
              <p className="text-xs text-text-muted">by Anthropic</p>
            </div>

            {/* Right - Data Sources */}
            <div className="md:text-right">
              <p className="text-sm text-text-muted mb-1">Data Sources</p>
              <p className="text-sm text-text-primary">
                Infobip, Twilio, Meta
              </p>
              <p className="text-xs text-text-muted">
                Public pricing data (2025)
              </p>
            </div>
          </div>

          {/* Methodology section */}
          <div className="mt-8 border-t border-dark-border pt-8">
            <button
              onClick={() => setMethodologyOpen(!methodologyOpen)}
              className="text-sm text-text-muted hover:text-accent cursor-pointer transition-colors"
            >
              View Methodology & Limitations{" "}
              <span
                className="inline-block transition-transform duration-200"
                style={{
                  transform: methodologyOpen
                    ? "rotate(180deg)"
                    : "rotate(0deg)",
                }}
              >
                ▼
              </span>
            </button>

            <AnimatePresence>
              {methodologyOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <ul className="mt-4 space-y-2">
                    {limitations.map((item, index) => (
                      <li
                        key={index}
                        className="text-sm text-text-muted flex items-start gap-2"
                      >
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-text-muted flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Bottom bar */}
          <div className="mt-8 pt-4 border-t border-dark-border">
            <p className="text-xs text-text-muted text-center">
              &copy; 2026 David Mustac. This analysis uses publicly available
              data for educational purposes.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
