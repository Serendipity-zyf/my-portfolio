export interface Skill {
  name: string;
  level: number; // 0-100
}

export const skills: Skill[] = [
  { name: "JavaScript / TypeScript", level: 90 },
  { name: "React / Next.js", level: 85 },
  { name: "Vue.js", level: 75 },
  { name: "Node.js", level: 80 },
  { name: "Python", level: 70 },
  { name: "Tailwind CSS", level: 90 },
  { name: "C++ / Rust", level: 50 },
  { name: "Unity3D / C#", level: 60 },
  { name: "Data Structures & Algorithms", level: 75 },
  { name: "DevOps / CI/CD", level: 65 },
];
