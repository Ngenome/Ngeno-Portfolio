// src/data/skills.ts
import { Skill, SkillCategory } from "../types";
import {
  FaBrain,
  FaCode,
  FaMobile,
  FaCloud,
  FaDatabase,
  FaPalette,
  FaRobot,
  FaServer,
} from "react-icons/fa";

export const skillCategories: SkillCategory[] = [
  {
    id: "ai",
    title: "AI & Machine Learning",
    description:
      "Expertise in artificial intelligence, machine learning, and deep neural networks",
    icon: FaBrain,
  },
  {
    id: "frontend",
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces",
    icon: FaCode,
  },
  {
    id: "mobile",
    title: "Mobile Development",
    description: "Creating cross-platform mobile applications",
    icon: FaMobile,
  },
  {
    id: "backend",
    title: "Backend Development",
    description: "Developing robust server-side applications and APIs",
    icon: FaServer,
  },
  {
    id: "cloud",
    title: "Cloud & DevOps",
    description: "Cloud infrastructure and deployment automation",
    icon: FaCloud,
  },
  {
    id: "design",
    title: "Design & UI/UX",
    description: "Creating intuitive and appealing user experiences",
    icon: FaPalette,
  },
];

export const skills: Skill[] = [
  // AI & Machine Learning
  {
    name: "TensorFlow",
    icon: FaBrain,
    category: "ai",
  },
  {
    name: "PyTorch",
    icon: FaBrain,
    category: "ai",
  },
  {
    name: "Neural Networks",
    icon: FaBrain,
    category: "ai",
  },
  {
    name: "LLM Integration",
    icon: FaRobot,
    category: "ai",
  },
  {
    name: "AI Agents",
    icon: FaRobot,
    category: "ai",
  },
  {
    name: "Prompt Engineering",
    icon: FaRobot,
    category: "ai",
  },
  {
    name: "Computer Vision",
    icon: FaBrain,
    category: "ai",
  },

  // Frontend Development
  {
    name: "React",
    icon: FaCode,
    category: "frontend",
  },
  {
    name: "Next.js",
    icon: FaCode,
    category: "frontend",
  },
  {
    name: "TypeScript",
    icon: FaCode,
    category: "frontend",
  },
  {
    name: "Tailwind CSS",
    icon: FaCode,
    category: "frontend",
  },
  {
    name: "Redux",
    icon: FaCode,
    category: "frontend",
  },
  {
    name: "HTML5/CSS3",
    icon: FaCode,
    category: "frontend",
  },
  {
    name: "SASS",
    icon: FaCode,
    category: "frontend",
  },

  // Mobile Development
  {
    name: "React Native",
    icon: FaMobile,
    category: "mobile",
  },
  {
    name: "Expo",
    icon: FaMobile,
    category: "mobile",
  },
  {
    name: "iOS Development",
    icon: FaMobile,
    category: "mobile",
  },
  {
    name: "Android Development",
    icon: FaMobile,
    category: "mobile",
  },

  // Backend Development
  {
    name: "Django",
    icon: FaServer,
    category: "backend",
  },
  {
    name: "Python",
    icon: FaServer,
    category: "backend",
  },
  {
    name: "Node.js",
    icon: FaServer,
    category: "backend",
  },
  {
    name: "Express",
    icon: FaServer,
    category: "backend",
  },
  {
    name: "REST APIs",
    icon: FaServer,
    category: "backend",
  },
  {
    name: "GraphQL",
    icon: FaServer,
    category: "backend",
  },

  // Databases & Cloud
  {
    name: "PostgreSQL",
    icon: FaDatabase,
    category: "cloud",
  },
  {
    name: "MongoDB",
    icon: FaDatabase,
    category: "cloud",
  },
  {
    name: "MySQL",
    icon: FaDatabase,
    category: "cloud",
  },
  {
    name: "AWS",
    icon: FaCloud,
    category: "cloud",
  },
  {
    name: "Azure",
    icon: FaCloud,
    category: "cloud",
  },
  {
    name: "Docker",
    icon: FaCloud,
    category: "cloud",
  },
  {
    name: "Redis",
    icon: FaDatabase,
    category: "cloud",
  },

  // Design Tools
  {
    name: "Figma",
    icon: FaPalette,
    category: "design",
  },
  {
    name: "Canva",
    icon: FaPalette,
    category: "design",
  },
  {
    name: "Blender 3D",
    icon: FaPalette,
    category: "design",
  },
];
