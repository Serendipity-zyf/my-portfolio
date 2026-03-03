"use client";

import SectionTitle from "@/components/ui/SectionTitle";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SkillBar from "@/components/ui/SkillBar";
import { skills } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="bg-card-bg/30 py-24 px-6">
      <div className="mx-auto max-w-3xl">
        <SectionTitle title="Skills" subtitle="Technologies I work with" />

        <ScrollReveal>
          <div className="grid gap-5 sm:grid-cols-2">
            {skills.map((skill) => (
              <SkillBar key={skill.name} name={skill.name} level={skill.level} />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
