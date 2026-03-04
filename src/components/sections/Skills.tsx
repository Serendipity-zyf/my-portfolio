"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { skillCategories, type SkillCategory } from "@/data/skills";

// ---------------------------------------------------------------------------
// TiltCard — 3D mouse-tracking perspective tilt
// ---------------------------------------------------------------------------
function TiltCard({
  cat,
}: {
  cat: SkillCategory;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 300, damping: 30 });
  const y = useSpring(rawY, { stiffness: 300, damping: 30 });
  const rotateX = useTransform(y, [-60, 60], [6, -6]);
  const rotateY = useTransform(x, [-60, 60], [-6, 6]);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current!.getBoundingClientRect();
    rawX.set(e.clientX - rect.left - rect.width / 2);
    rawY.set(e.clientY - rect.top - rect.height / 2);
  }

  function handleMouseLeave() {
    rawX.set(0);
    rawY.set(0);
  }

  return (
    <motion.div
      ref={ref}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`group relative h-full overflow-hidden rounded-2xl ${cat.bg} p-6 shadow-lg transition-shadow duration-300 hover:shadow-2xl`}
    >
      {/* Decorative glow circle */}
      <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl transition-transform duration-500 group-hover:scale-150" />

      {/* Shimmer glint on hover */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl">
        <div className="absolute inset-y-0 left-0 w-[60%] -translate-x-full skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-0 group-hover:translate-x-[280%] group-hover:opacity-100 transition-[transform,opacity] duration-700 ease-in-out" />
      </div>

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
  );
}

// ---------------------------------------------------------------------------
// Skills section
// ---------------------------------------------------------------------------
export default function Skills() {
  return (
    <section id="skills" className="bg-card-bg/30 py-24 px-6">
      <div className="mx-auto max-w-5xl">
        <SectionTitle title="Skills" subtitle="Technologies I work with" />

        <div className="grid gap-5 sm:grid-cols-2 [perspective:1000px]">
          {skillCategories.map((cat, catIdx) => (
            <ScrollReveal key={cat.label} delay={catIdx * 0.1} className="h-full">
              <TiltCard cat={cat} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
