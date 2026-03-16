import Hero from "@/components/sections/Hero";
import KPIBar from "@/components/sections/KPIBar";

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-primary">
      <Hero />
      <KPIBar />
    </main>
  );
}
