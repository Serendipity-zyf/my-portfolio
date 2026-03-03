export interface Project {
  title: string;
  description: string;
  image?: string;
  tags: string[];
  github?: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    title: "Portfolio Website",
    description:
      "A modern personal portfolio website built with Next.js and Tailwind CSS, deployed on GitHub Pages.",
    image: "/images/projects/portfolio.webp",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/yourusername/my-portfolio",
    demo: "https://yourusername.github.io",
  },
  {
    title: "Task Manager App",
    description:
      "A full-stack task management application with real-time updates and team collaboration features.",
    image: "/images/projects/taskmanager.webp",
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    github: "https://github.com/yourusername/task-manager",
  },
  {
    title: "Pixel Art Game",
    description:
      "A 2D pixel art adventure game built with Unity, featuring procedural level generation.",
    image: "/images/projects/pixelgame.webp",
    tags: ["Unity3D", "C#", "Pixel Art"],
    demo: "https://yourusername.itch.io/pixel-game",
  },
  {
    title: "CLI Toolkit",
    description:
      "A collection of developer productivity CLI tools for code generation and project scaffolding.",
    image: "/images/projects/cli.webp",
    tags: ["Rust", "CLI", "Open Source"],
    github: "https://github.com/yourusername/cli-toolkit",
  },
];
