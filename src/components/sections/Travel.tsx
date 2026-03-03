"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { visitedCities, type City } from "@/data/travel";

const TravelMap = dynamic(() => import("@/components/ui/TravelMap"), {
  ssr: false,
  loading: () => (
    <div className="h-[400px] sm:h-[500px] animate-pulse rounded-2xl bg-gray-100" />
  ),
});

// ---------------------------------------------------------------------------
// Derived stats
// ---------------------------------------------------------------------------
const countries = [...new Set(visitedCities.map((c) => c.country))];
const continentMap: Record<string, string> = {
  China: "Asia",
  Japan: "Asia",
  Indonesia: "Asia",
  Australia: "Oceania",
  USA: "Americas",
};
const continents = [...new Set(countries.map((c) => continentMap[c] ?? "Other"))];

const homeCity = visitedCities.find((c) => c.home);
const currentCity = visitedCities.find((c) => c.current);
const domesticCities = visitedCities.filter(
  (c) => c.country === "China" && !c.home && !c.current
);
const internationalCities = visitedCities.filter((c) => c.country !== "China");

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

function StatBadge({ value, label, delay = 0 }: { value: number; label: string; delay?: number }) {
  return (
    <motion.div
      className="flex flex-col items-center gap-0.5"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <span className="text-2xl font-bold text-foreground">{value}</span>
      <span className="text-xs text-muted uppercase tracking-widest">{label}</span>
    </motion.div>
  );
}

function CityChip({ city, badge, delay = 0 }: { city: City; badge?: "home" | "current" | "international"; delay?: number }) {
  const badgeStyles: Record<string, string> = {
    home: "bg-orange-50 text-orange-600 border-orange-200",
    current: "bg-blue-50 text-blue-600 border-blue-200",
    international: "bg-violet-50 text-violet-600 border-violet-200",
  };
  const base = badge
    ? badgeStyles[badge]
    : "bg-slate-50 text-slate-500 border-slate-200";

  return (
    <motion.span
      className={`inline-flex items-center gap-1 rounded-full border px-3 py-1 text-xs font-medium ${base}`}
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay }}
    >
      {city.name}
      {badge === "home" && <span className="ml-0.5 opacity-70">Home</span>}
      {badge === "current" && <span className="ml-0.5 opacity-70">Now</span>}
      {badge === "international" && (
        <span className="ml-0.5 opacity-60 font-normal">{city.country}</span>
      )}
    </motion.span>
  );
}

// ---------------------------------------------------------------------------
// Main section
// ---------------------------------------------------------------------------

export default function Travel() {
  return (
    <section id="travel" className="py-24 px-6">
      <div className="mx-auto max-w-5xl">
        <SectionTitle
          title="Travel"
          subtitle="Cities and places I've explored around the world"
        />

        {/* Stats bar */}
        <ScrollReveal className="mb-8">
          <div className="flex justify-center gap-10 sm:gap-16">
            <StatBadge value={visitedCities.length} label="Cities" delay={0} />
            <div className="w-px bg-border" />
            <StatBadge value={countries.length} label="Countries" delay={0.1} />
            <div className="w-px bg-border" />
            <StatBadge value={continents.length} label="Continents" delay={0.2} />
          </div>
        </ScrollReveal>

        {/* Map */}
        <ScrollReveal>
          <div className="overflow-hidden rounded-2xl border border-border shadow-sm">
            <TravelMap />
          </div>
        </ScrollReveal>

        {/* City chips grouped by region */}
        <ScrollReveal delay={0.15} className="mt-8 space-y-4">
          {homeCity && (
            <div className="flex flex-wrap items-center gap-2">
              <span className="w-24 shrink-0 text-xs font-semibold uppercase tracking-widest text-muted">
                Home
              </span>
              <CityChip city={homeCity} badge="home" delay={0} />
            </div>
          )}

          {currentCity && (
            <div className="flex flex-wrap items-center gap-2">
              <span className="w-24 shrink-0 text-xs font-semibold uppercase tracking-widest text-muted">
                Current
              </span>
              <CityChip city={currentCity} badge="current" delay={0.05} />
            </div>
          )}

          <div className="flex flex-wrap items-center gap-2">
            <span className="w-24 shrink-0 text-xs font-semibold uppercase tracking-widest text-muted">
              China
            </span>
            <div className="flex flex-wrap gap-2">
              {domesticCities.map((city, i) => (
                <CityChip key={city.name} city={city} delay={0.05 * i} />
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="w-24 shrink-0 text-xs font-semibold uppercase tracking-widest text-muted">
              Int&apos;l
            </span>
            <div className="flex flex-wrap gap-2">
              {internationalCities.map((city, i) => (
                <CityChip key={city.name} city={city} badge="international" delay={0.05 * i} />
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
