import Hero from "@/components/sections/Hero";
import KPIBar from "@/components/sections/KPIBar";
import ChannelBreakdown from "@/components/sections/ChannelBreakdown";
import ProfitabilityDashboard from "@/components/sections/ProfitabilityDashboard";
import CompetitiveAnalysis from "@/components/sections/CompetitiveAnalysis";
import InvestigationQuestions from "@/components/sections/InvestigationQuestions";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-primary">
      <Hero />
      <KPIBar />
      <ChannelBreakdown />
      <ProfitabilityDashboard />
      <CompetitiveAnalysis />
      <InvestigationQuestions />
      <Footer />
    </main>
  );
}
