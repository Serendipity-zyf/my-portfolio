"use client";

import SectionTitle from "@/components/ui/SectionTitle";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="mx-auto max-w-4xl">
        <SectionTitle title="Experience" subtitle="Where I've worked" />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-border md:left-1/2" />

          {experiences.map((exp, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div
                className={`relative mb-12 pl-8 md:w-1/2 md:pl-0 ${
                  i % 2 === 0
                    ? "md:pr-12 md:text-right"
                    : "md:ml-auto md:pl-12"
                }`}
              >
                {/* Dot */}
                <div
                  className={`absolute top-1 h-3 w-3 rounded-full border-2 border-accent bg-white ${
                    i % 2 === 0
                      ? "left-[-6px] md:left-auto md:right-[-6px]"
                      : "left-[-6px] md:left-[-6px]"
                  }`}
                />

                <div className="rounded-2xl border border-border bg-white p-5 shadow-sm">
                  <p className="text-xs font-medium text-accent">{exp.period}</p>
                  <h3 className="mt-1 text-lg font-semibold text-foreground">
                    {exp.role}
                  </h3>
                  <p className="text-sm font-medium text-muted">{exp.company}</p>
                  <p className="mt-2 text-sm text-muted leading-relaxed">
                    {exp.description}
                  </p>
                  <div
                    className={`mt-3 flex flex-wrap gap-2 ${
                      i % 2 === 0 ? "md:justify-end" : ""
                    }`}
                  >
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-card-bg px-2.5 py-0.5 text-xs text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
