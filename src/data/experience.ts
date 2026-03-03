export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  tags: string[];
}

export const experiences: Experience[] = [
  {
    company: "Company A",
    role: "Senior Frontend Developer",
    period: "2023 - Present",
    description:
      "Led the frontend architecture for the main product, built component library and design system.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
  },
  {
    company: "Company B",
    role: "Full Stack Developer",
    period: "2021 - 2023",
    description:
      "Developed and maintained multiple web applications, improved CI/CD pipeline and deployment process.",
    tags: ["Vue.js", "Node.js", "PostgreSQL", "Docker"],
  },
  {
    company: "Company C",
    role: "Junior Developer",
    period: "2019 - 2021",
    description:
      "Started career building internal tools and customer-facing dashboards.",
    tags: ["JavaScript", "React", "Python", "REST API"],
  },
];
