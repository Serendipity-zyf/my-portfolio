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
      "Undergraduate studies in mathematics, building strong foundations in analysis, algebra, and computational methods.",
    tags: ["Mathematics", "Statistics", "Linear Algebra"],
  },
  {
    institution: "Sun Yat-sen University",
    role: "MSc Computer Science",
    period: "2022 – 2025",
    type: "education",
    description:
      "Graduate research on Product QA, LLM applications, and AI Agent systems.",
    tags: ["LLM", "AI Agent", "Product QA", "Research"],
  },
  {
    institution: "Tencent IEG",
    role: "Intern",
    period: "2024 – 2025",
    type: "work",
    description:
      "Interactive Entertainment Group internship, working on game-related AI and engineering projects.",
    tags: ["AI", "Gaming", "Engineering"],
  },
  {
    institution: "Meituan",
    role: "Ad Search Algorithm Engineer",
    period: "2025 – Present",
    type: "work",
    description:
      "Building and optimizing ad search algorithms for one of China's largest tech platforms.",
    tags: ["Search", "Algorithms", "Ads", "ML"],
  },
  {
    institution: "PhD Studies",
    role: "Doctoral Research (Planned)",
    period: "2027 – Future",
    type: "future",
    description: "Planning to pursue doctoral studies in AI/ML research.",
    tags: ["AI Research", "PhD"],
  },
];
