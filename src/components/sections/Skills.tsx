"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { skillCategories } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="bg-card-bg/30 py-24 px-6">
      <div className="mx-auto max-w-5xl">
        <SectionTitle title="Skills" subtitle="Technologies I work with" />

        <div className="grid gap-5 sm:grid-cols-2">
          {skillCategories.map((cat, catIdx) => (
            <ScrollReveal key={cat.label} delay={catIdx * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${cat.gradient} p-6 shadow-lg transition-shadow duration-300 hover:shadow-2xl`}
              >
                {/* Decorative glow circle */}
                <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl transition-transform duration-500 group-hover:scale-150" />

                {/* Category header */}
                <div className="relative z-10">
                  <h3 className="text-lg font-bold text-white">{cat.label}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-white/70">
                    {cat.description}
                  </p>
                </div>

                {/* Skill chips */}
                <div className="relative z-10 mt-4 flex flex-wrap gap-2">
                  {cat.skills.map((skill) => {
                    const Icon = skill.icon;
                    return (
                      <span
                        key={skill.name}
                        className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm transition-colors duration-200 hover:bg-white/25"
                      >
                        <Icon className="text-sm text-white/90" />
                        {skill.name}
                      </span>
                    );
                  })}
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
