export interface TimelineEntry {
  institution: string;
  role: string;
  period: string;
  type: "education" | "work" | "future";
  description: string;
  tags: string[];
}

export const timelineEntries: TimelineEntry[] = [
  {
    institution: "Hohai University",
    role: "BSc Mathematics",
    period: "2018 – 2022",
    type: "education",
    description:
      "Undergraduate studies in pure and applied mathematics. Built strong foundations in real analysis, linear algebra, probability theory, and numerical computation.",
    tags: ["Mathematics", "Statistics", "Probability"],
  },
  {
    institution: "Sun Yat-sen University",
    role: "MSc Computer Science",
    period: "2022 – 2025",
    type: "education",
    description:
      "Graduate research focused on product question answering, large language model applications, and autonomous AI agent systems. Published work on LLM-driven solutions.",
    tags: ["LLM", "AI Agent", "NLP", "Research"],
  },
  {
    institution: "Tencent IEG",
    role: "Intern",
    period: "2024 – 2025",
    type: "work",
    description:
      "Interned at the Interactive Entertainment Group. Applied AI and ML techniques to game-related engineering challenges and user experience optimization.",
    tags: ["AI", "Gaming", "ML", "Engineering"],
  },
  {
    institution: "Meituan",
    role: "Ad Search Algorithm Engineer",
    period: "2025 – Present",
    type: "work",
    description:
      "Designing and optimizing ad search ranking algorithms and relevance models for one of China's largest local services platforms.",
    tags: ["Search", "Ranking", "Ads", "ML"],
  },
  {
    institution: "PhD Studies",
    role: "Doctoral Research (Planned)",
    period: "2027 – Future",
    type: "future",
    description: "Planning to pursue doctoral studies, deepening research in AI, machine learning, and intelligent agent systems.",
    tags: ["AI Research", "ML", "PhD"],
  },
];
