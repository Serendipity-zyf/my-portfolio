"use client";

import SectionTitle from "@/components/ui/SectionTitle";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { visitedCities } from "@/data/travel";

function latLngToXY(lat: number, lng: number, width: number, height: number) {
  const x = ((lng + 180) / 360) * width;
  const latRad = (lat * Math.PI) / 180;
  const mercN = Math.log(Math.tan(Math.PI / 4 + latRad / 2));
  const y = height / 2 - (mercN / Math.PI) * (height / 2);
  return { x, y };
}

export default function Travel() {
  const mapW = 800;
  const mapH = 450;

  return (
    <section id="travel" className="py-24 px-6">
      <div className="mx-auto max-w-4xl">
        <SectionTitle
          title="Travel"
          subtitle="Places I've been to"
        />

        <ScrollReveal>
          <div className="overflow-hidden rounded-2xl border border-border bg-white p-6">
            <svg
              viewBox={`0 0 ${mapW} ${mapH}`}
              className="w-full"
              aria-label="Travel map"
            >
              {/* Simple world background */}
              <rect
                width={mapW}
                height={mapH}
                fill="#f9fafb"
                rx={12}
              />
              {/* Grid lines */}
              {[...Array(7)].map((_, i) => (
                <line
                  key={`h${i}`}
                  x1={0}
                  y1={(mapH / 7) * (i + 1)}
                  x2={mapW}
                  y2={(mapH / 7) * (i + 1)}
                  stroke="#e5e7eb"
                  strokeWidth={0.5}
                />
              ))}
              {[...Array(11)].map((_, i) => (
                <line
                  key={`v${i}`}
                  x1={(mapW / 11) * (i + 1)}
                  y1={0}
                  x2={(mapW / 11) * (i + 1)}
                  y2={mapH}
                  stroke="#e5e7eb"
                  strokeWidth={0.5}
                />
              ))}

              {/* City dots */}
              {visitedCities.map((city) => {
                const { x, y } = latLngToXY(city.lat, city.lng, mapW, mapH);
                return (
                  <g key={city.name}>
                    {city.current && (
                      <circle
                        cx={x}
                        cy={y}
                        r={12}
                        fill="#3b82f6"
                        opacity={0.15}
                      />
                    )}
                    <circle
                      cx={x}
                      cy={y}
                      r={city.current ? 5 : 4}
                      fill={city.current ? "#3b82f6" : "#6b7280"}
                    />
                    <text
                      x={x}
                      y={y - 8}
                      textAnchor="middle"
                      fontSize={9}
                      fill="#374151"
                      fontWeight={city.current ? 600 : 400}
                    >
                      {city.name}
                    </text>
                  </g>
                );
              })}
            </svg>

            <div className="mt-4 flex flex-wrap gap-2 justify-center">
              {visitedCities.map((city) => (
                <span
                  key={city.name}
                  className={`rounded-full px-3 py-1 text-xs ${
                    city.current
                      ? "bg-accent/10 text-accent font-medium"
                      : "bg-card-bg text-muted"
                  }`}
                >
                  {city.current && "📍 "}
                  {city.name}, {city.country}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
