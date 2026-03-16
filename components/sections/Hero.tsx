"use client";

import { motion } from "framer-motion";

const chartPath =
  "M0,300 L80,280 L160,260 L240,270 L320,240 L400,220 L480,200 L560,180 L640,190 L720,160 L800,140 L880,120 L960,100 L1040,80 L1120,60 L1200,40";

export default function Hero() {
  return (
    <section className="h-screen relative overflow-hidden flex items-center justify-center">
      {/* Animated SVG background */}
      <div className="absolute inset-0 pointer-events-none">
        <svg
          viewBox="0 0 1200 400"
          preserveAspectRatio="xMidYMid slice"
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="strokeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FF6B00" />
              <stop offset="100%" stopColor="#FF8C38" />
            </linearGradient>
            <linearGradient id="fillGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FF6B00" stopOpacity="0.05" />
              <stop offset="100%" stopColor="#FF6B00" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Filled area below the line */}
          <path
            d={`${chartPath} L1200,400 L0,400 Z`}
            fill="url(#fillGradient)"
            className="animate-[fadeIn_2s_ease-in_forwards] opacity-0"
          />

          {/* Animated line */}
          <path
            d={chartPath}
            fill="none"
            stroke="url(#strokeGradient)"
            strokeWidth="2"
            opacity="0.1"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="animate-[drawLine_3s_ease-in-out_forwards]"
            style={{
              strokeDasharray: 2000,
              strokeDashoffset: 2000,
            }}
          />
        </svg>
      </div>

      {/* Centered content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4">
        <span className="text-text-muted uppercase tracking-widest text-xs mb-4">
          Portfolio Project
        </span>

        <h1 className="text-5xl md:text-7xl font-bold text-text-primary">
          David Mustac
        </h1>

        <h2 className="text-2xl md:text-3xl text-accent font-semibold mt-4">
          CPaaS Pricing Model Analysis
        </h2>

        <p className="text-lg text-text-muted mt-4 max-w-2xl text-center">
          Modeling messaging economics across SMS, WhatsApp, RCS &amp; Viber for 13
          markets
        </p>

        <span className="mt-6 inline-block border border-dark-border rounded-full px-4 py-1.5 text-sm text-text-muted">
          Prepared for Infobip Business Analyst Role
        </span>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-text-muted"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </motion.div>

    </section>
  );
}
