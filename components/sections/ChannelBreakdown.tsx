"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import TabBar from "@/components/ui/TabBar";
import SMSTab from "@/components/channels/SMSTab";
import WhatsAppTab from "@/components/channels/WhatsAppTab";
import RCSTab from "@/components/channels/RCSTab";
import ViberTab from "@/components/channels/ViberTab";

const tabs = ["SMS", "WhatsApp", "RCS", "Viber"];

const panels = [SMSTab, WhatsAppTab, RCSTab, ViberTab];

export default function ChannelBreakdown() {
  const [active, setActive] = useState(0);
  const Panel = panels[active];

  return (
    <SectionWrapper id="channels">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-text-primary mb-3">
          Channel-by-Channel Pricing
        </h2>
        <p className="text-text-muted max-w-2xl mx-auto">
          Deep-dive into each messaging channel — rates, margins, and strategic
          positioning across global markets.
        </p>
      </div>

      <TabBar tabs={tabs} active={active} onChange={setActive} />

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.25 }}
        >
          <Panel />
        </motion.div>
      </AnimatePresence>
    </SectionWrapper>
  );
}
