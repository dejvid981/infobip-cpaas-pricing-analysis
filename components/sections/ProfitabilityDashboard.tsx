"use client";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Card from "@/components/ui/Card";
import RevenueDonut from "@/components/charts/RevenueDonut";
import RevenueMarginCombo from "@/components/charts/RevenueMarginCombo";
import ChannelMigrationSimulator from "@/components/simulator/ChannelMigrationSimulator";
import RegionalProfitabilityTable from "@/components/tables/RegionalProfitabilityTable";

export default function ProfitabilityDashboard() {
  return (
    <SectionWrapper id="profitability">
      <h2 className="text-3xl font-bold text-text-primary mb-2">Profitability Dashboard</h2>
      <p className="text-text-muted mb-8">
        Revenue breakdown, margin analysis, and interactive channel migration modeling across regions.
      </p>

      {/* Top row: charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <Card>
          <h3 className="text-lg font-semibold text-text-primary mb-4">Revenue by Channel</h3>
          <RevenueDonut />
        </Card>
        <Card>
          <h3 className="text-lg font-semibold text-text-primary mb-4">Revenue vs Margin %</h3>
          <RevenueMarginCombo />
        </Card>
      </div>

      {/* Middle: simulator */}
      <div className="mb-6">
        <ChannelMigrationSimulator />
      </div>

      {/* Bottom: table */}
      <Card>
        <h3 className="text-lg font-semibold text-text-primary mb-4">Regional Profitability Overview</h3>
        <RegionalProfitabilityTable />
      </Card>
    </SectionWrapper>
  );
}
