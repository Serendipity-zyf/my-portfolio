import { IconType } from "react-icons";
import {
  SiPython,
  SiGodotengine,
  SiDocker,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiGit,
  SiLinux,
} from "react-icons/si";
import { FaRobot, FaLink, FaGamepad, FaAws } from "react-icons/fa6";
import { LuBrainCircuit } from "react-icons/lu";
import { TbDatabaseSearch, TbBinaryTree, TbSettingsAutomation } from "react-icons/tb";

export interface MarqueeSkill {
  name: string;
  icon: IconType;
  gradient: string;
}

const gradients = {
  ai: "from-violet-600 via-purple-600 to-indigo-700",
  lang: "from-blue-600 via-cyan-600 to-sky-600",
  tools: "from-emerald-600 via-teal-600 to-cyan-700",
  creative: "from-orange-500 via-rose-500 to-pink-600",
};

// Row 1: scrolls left
export const skillsRow1: MarqueeSkill[] = [
  { name: "LLM / Prompt Eng", icon: LuBrainCircuit, gradient: gradients.ai },
  { name: "Python", icon: SiPython, gradient: gradients.lang },
  { name: "AI Agent Frameworks", icon: FaRobot, gradient: gradients.ai },
  { name: "Docker", icon: SiDocker, gradient: gradients.tools },
  { name: "TypeScript", icon: SiTypescript, gradient: gradients.lang },
  { name: "RAG & Vector DB", icon: TbDatabaseSearch, gradient: gradients.ai },
  { name: "Godot / GDScript", icon: SiGodotengine, gradient: gradients.creative },
  { name: "Next.js", icon: SiNextdotjs, gradient: gradients.lang },
  { name: "CI/CD", icon: TbSettingsAutomation, gradient: gradients.tools },
];

// Row 2: scrolls right
export const skillsRow2: MarqueeSkill[] = [
  { name: "LangChain / LlamaIndex", icon: FaLink, gradient: gradients.ai },
  { name: "React", icon: SiReact, gradient: gradients.lang },
  { name: "Game Design", icon: FaGamepad, gradient: gradients.creative },
  { name: "Git", icon: SiGit, gradient: gradients.tools },
  { name: "DSA", icon: TbBinaryTree, gradient: gradients.lang },
  { name: "Linux", icon: SiLinux, gradient: gradients.tools },
  { name: "Tailwind CSS", icon: SiTailwindcss, gradient: gradients.lang },
  { name: "AWS", icon: FaAws, gradient: gradients.tools },
];
