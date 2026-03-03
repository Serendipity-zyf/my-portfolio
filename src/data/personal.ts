import { FaGithub, FaTwitter, FaBilibili, FaInstagram } from "react-icons/fa6";

export const personalInfo = {
  name: "Your Name",
  city: "Shanghai, China",
  roles: [
    "Web Developer",
    "Game Developer",
    "Open Source Enthusiast",
    "Digital Nomad",
    "Creator",
  ],
  bio: "Passionate about building beautiful web experiences and exploring new technologies.",
  avatar: "/images/avatar.webp",
  socials: [
    { name: "GitHub", url: "https://github.com/yourusername", icon: FaGithub },
    { name: "Twitter", url: "https://twitter.com/yourusername", icon: FaTwitter },
    { name: "Bilibili", url: "https://space.bilibili.com/youruid", icon: FaBilibili },
    { name: "Instagram", url: "https://instagram.com/yourusername", icon: FaInstagram },
  ],
} as const;

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Favorites", href: "#favorites" },
  { label: "Travel", href: "#travel" },
] as const;
