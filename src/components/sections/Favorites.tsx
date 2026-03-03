"use client";

import SectionTitle from "@/components/ui/SectionTitle";
import ScrollReveal from "@/components/ui/ScrollReveal";
import StatCard from "@/components/ui/StatCard";
import { favorites } from "@/data/favorites";

export default function Favorites() {
  return (
    <section id="favorites" className="bg-card-bg/30 py-24 px-6">
      <div className="mx-auto max-w-5xl">
        <SectionTitle
          title="Favorites"
          subtitle="Movies, books, and games I've enjoyed"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {favorites.map((fav, i) => (
            <ScrollReveal key={fav.category} delay={i * 0.1}>
              <StatCard
                icon={fav.icon}
                category={fav.category}
                total={fav.total}
                items={fav.recent.map((r) => r.title)}
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
