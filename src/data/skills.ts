import { IconType } from "react-icons";
import { SiPython, SiGodotengine, SiDocker, SiTypescript } from "react-icons/si";
import { FaRobot, FaLink, FaGamepad } from "react-icons/fa6";
import { LuBrainCircuit } from "react-icons/lu";
import { TbDatabaseSearch, TbBinaryTree } from "react-icons/tb";

export interface Skill {
  name: string;
  icon: IconType;
}

export interface SkillCategory {
  label: string;
  description: string;
  gradient: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    label: "AI & ML",
    description:
      "Building intelligent agents and exploring the frontier of large language models, RAG pipelines, and prompt engineering.",
    gradient: "from-violet-600 via-purple-600 to-indigo-700",
    skills: [
      { name: "LLM / Prompt Eng", icon: LuBrainCircuit },
      { name: "AI Agent Frameworks", icon: FaRobot },
      { name: "RAG & Vector DB", icon: TbDatabaseSearch },
      { name: "LangChain / LlamaIndex", icon: FaLink },
    ],
  },
  {
    label: "Languages",
    description:
      "Proficient in Python for AI/backend and TypeScript for full-stack web development. Strong foundation in data structures and algorithms.",
    gradient: "from-blue-600 via-cyan-600 to-sky-600",
    skills: [
      { name: "Python", icon: SiPython },
      { name: "TypeScript / JS", icon: SiTypescript },
      { name: "DSA", icon: TbBinaryTree },
    ],
  },
  {
    label: "Tools & Infra",
    description:
      "Containerized deployments, CI/CD pipelines, and cloud infrastructure for scalable AI applications.",
    gradient: "from-emerald-600 via-teal-600 to-cyan-700",
    skills: [{ name: "Docker / DevOps", icon: SiDocker }],
  },
  {
    label: "Creative",
    description:
      "Indie game development with Godot engine. Designing mechanics, narratives, and interactive experiences from scratch.",
    gradient: "from-orange-500 via-rose-500 to-pink-600",
    skills: [
      { name: "Godot / GDScript", icon: SiGodotengine },
      { name: "Game Design", icon: FaGamepad },
    ],
  },
];
