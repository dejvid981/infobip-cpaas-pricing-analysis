"use client";

import AnimatedCounter from "@/components/ui/AnimatedCounter";

export default function KPIBar() {
  return (
    <div className="sticky top-0 z-50 bg-dark-primary/95 backdrop-blur-md border-b border-dark-border py-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <AnimatedCounter end={13} label="Markets Analyzed" />
          <AnimatedCounter end={4} label="Channels Compared" />
          <AnimatedCounter end={10} suffix="M" label="Messages Modeled" />
          <AnimatedCounter end={248} prefix="$" suffix="K" label="Revenue Scenario" />
        </div>
      </div>
    </div>
  );
}
