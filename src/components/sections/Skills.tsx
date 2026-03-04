"use client";

import SectionTitle from "@/components/ui/SectionTitle";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SkillMarquee from "@/components/ui/SkillMarquee";
import { skillsRow1, skillsRow2 } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="bg-card-bg/30 py-24">
      <div className="mx-auto max-w-5xl px-6">
        <SectionTitle title="Skills" subtitle="Technologies I work with" />
      </div>

      <ScrollReveal>
        <div className="space-y-4">
          <SkillMarquee skills={skillsRow1} direction="left" duration={32} />
          <SkillMarquee skills={skillsRow2} direction="right" duration={36} />
        </div>
      </ScrollReveal>
    </section>
  );
}
