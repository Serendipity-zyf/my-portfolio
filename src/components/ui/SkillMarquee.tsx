"use client";

import type { MarqueeSkill } from "@/data/skills";

interface SkillMarqueeProps {
  skills: MarqueeSkill[];
  direction?: "left" | "right";
  duration?: number;
}

export default function SkillMarquee({
  skills,
  direction = "left",
  duration = 30,
}: SkillMarqueeProps) {
  const animationName = direction === "left" ? "marquee-left" : "marquee-right";

  return (
    <div
      className="group relative overflow-hidden"
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
      }}
    >
      <div
        className="flex w-max gap-4 hover:[animation-play-state:paused]"
        style={{
          animation: `${animationName} ${duration}s linear infinite`,
        }}
      >
        {/* Original + clone for seamless loop */}
        {[...skills, ...skills].map((skill, i) => {
          const Icon = skill.icon;
          return (
            <div
              key={`${skill.name}-${i}`}
              aria-hidden={i >= skills.length}
              className={`flex shrink-0 items-center gap-2.5 rounded-xl bg-gradient-to-r ${skill.gradient} px-5 py-3 shadow-md transition-transform duration-200 hover:scale-105`}
            >
              <Icon className="text-lg text-white/90" />
              <span className="whitespace-nowrap text-sm font-semibold text-white">
                {skill.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
