// src/data/experience.ts
import { Experience } from "../types";

export const experiences: Experience[] = [
  {
    id: "dissolve-software",
    role: "Founder",
    company: "Dissolve Software",
    companyUrl: "https://www.dissolvesoftware.com/",
    duration: "January 2024 - Present",
    mode: "Full-time",
    description:
      "Founded and leading a software company that builds custom solutions for clients. Specializing in web development, mobile apps, and AI integration.",
    achievements: [
      "Developed comprehensive farm management software",
      "Built construction company website and mobile application",
      "Created job procurement platform",
      "Implemented AI-powered solutions for clients",
    ],
    technologies: ["React", "Django", "React Native", "AWS", "AI/ML"],
  },
  {
    id: "mjenzi",
    role: "Front End & Backend Engineer, Mobile App Developer",
    company: "M-jenzi",
    companyUrl: "https://www.m-jenzi.com/",
    duration: "Jan 2023 - March 2024",
    mode: "Freelance",
    description:
      "Led development of construction sector e-commerce platform connecting service providers with customers.",
    achievements: [
      "Developed Django backend API",
      "Created vendor dashboard for product management",
      "Built main website using React",
      "Developed mobile app using React Native",
      "Received #1 Kenya E-commerce Award for Construction Websites",
    ],
    technologies: ["Django", "React", "React Native", "PostgreSQL", "Azure"],
  },
  {
    id: "jobzy",
    role: "Full Stack Developer",
    company: "Jobzy",
    companyUrl: "https://www.jobzy.africa/",
    duration: "Nov 2022 - Present",
    mode: "Freelance",
    description:
      "Developed a revolutionary platform for service procurement with separate apps for clients and service providers.",
    achievements: [
      "Built complete client and provider mobile applications",
      "Developed backend API with Django",
      "Implemented real-time features and notifications",
      "Created admin dashboard for platform management",
      "Integrated payment systems and service matching algorithms",
    ],
    technologies: [
      "React Native",
      "Django",
      "PostgreSQL",
      "Redux",
      "WebSocket",
    ],
  },
  {
    id: "wera",
    role: "Full Stack Developer",
    company: "Wera",
    companyUrl: "https://wera.app",
    duration: "June 2022 - Nov 2022",
    mode: "Freelance",
    description:
      "Developed a comprehensive service procurement and e-commerce platform.",
    achievements: [
      "Built full-stack e-commerce and service procurement platform",
      "Developed backend API with Django",
      "Created responsive website using Next.js",
      "Implemented user authentication and authorization",
      "Integrated payment gateways and order management",
    ],
    technologies: [
      "Next.js",
      "Django",
      "PostgreSQL",
      "AWS",
      "Payment Integration",
    ],
  },
  {
    id: "snobole",
    role: "Mobile App Developer",
    company: "Snobole Software",
    companyUrl: "https://snobole.com",
    duration: "Jan 2022 - June 2022",
    mode: "Freelance",
    description: "Developed mobile applications for various client projects.",
    achievements: [
      "Developed complete laundry service mobile application",
      "Implemented real-time order tracking",
      "Created user-friendly interface and booking system",
      "Integrated payment processing and user management",
    ],
    technologies: ["React Native", "Node.js", "MongoDB", "Express", "Redux"],
  },
  {
    id: "ai-research",
    role: "AI/ML Developer",
    company: "Independent Research",
    duration: "2023 - Present",
    mode: "Personal Projects",
    description:
      "Conducted independent research and development in AI and machine learning.",
    achievements: [
      "Implemented various AI models including LLMs and GANs",
      "Developed audio transcription systems using OpenAI Whisper",
      "Created text-to-speech solutions with Tortoise TTS",
      "Built and deployed AI-powered applications",
      "Developed ManticeAI.com platform for AI tools access",
    ],
    technologies: [
      "Python",
      "TensorFlow",
      "PyTorch",
      "LLMs",
      "Neural Networks",
      "Computer Vision",
    ],
  },
];
