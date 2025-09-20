import { Experience } from "../types";

export const experiences: Experience[] = [
  {
    id: "navismart-ai",
    role: "Full Stack Developer & CTO",
    company: "Navismart AI",
    companyUrl: "https://navismartai.com",
    duration: "Feb 2025 - Present",
    mode: "Full-time",
    description:
      "Leading a team to build navismartai.com, an AI-powered immigration platform for individuals and agencies.",
    achievements: [
      "Migrated backend from Django to FastAPI to improve async throughput and concurrency under load",
      "Designed and implemented AI agent workflows using OpenAI Agents SDK and Langgraph",
      "Implemented PII security with field-level encryption at rest, RBAC, audit logging, and secrets management",
      "Made key architecture decisions to balance performance, maintainability, and cost",
    ],
    technologies: ["FastAPI", "Python", "OpenAI Agents SDK", "LangGraph", "React", "PostgreSQL", "AWS"],
  },
  {
    id: "dissolve-software",
    role: "Founder",
    company: "Dissolve Software",
    companyUrl: "https://www.dissolvesoftware.com/",
    duration: "2024 – Present",
    mode: "Full-time",
    description:
      "Founded a software consultancy delivering custom solutions for web and mobile apps.",
    achievements: [
      "Managed client relationships, contracts, and delivery, gaining business-side experience",
      "Built apps for SMEs in e-commerce, service platforms, and internal tools",
    ],
    technologies: ["React", "Django", "React Native", "AWS", "AI/ML"],
  },
  {
    id: "mes-dak",
    role: "Consultant Developer",
    company: "Mes & Dak Corporation",
    companyUrl: "#",
    duration: "Oct 2024",
    mode: "Contract",
    description:
      "Conducted a 2-week consulting contract reviewing code and UI/UX for M'Network and M'Butic platforms.",
    achievements: [
      "Identified performance bottlenecks and UI/UX issues and delivered optimization recommendations",
      "Redesigned key UI components to improve usability and user flow",
    ],
    technologies: ["React", "UI/UX", "Performance Optimization"],
  },
  {
    id: "mjenzi",
    role: "Full Stack Engineer",
    company: "M-jenzi",
    companyUrl: "https://www.m-jenzi.com/",
    duration: "Jan 2023 - Mar 2024",
    mode: "Freelance",
    description:
      "Built award-winning multivendor e-commerce platform for construction materials (1st place Kenya E-commerce Award).",
    achievements: [
      "Designed and developed vendor dashboards, admin portal, and the mobile app",
      "Optimized architecture, cutting load times by over 40% and improving user experience",
      "Built robust payment systems including Buy Now, Pay Later (BNPL) support, improving accessibility and sales",
      "Managed database design, DevOps, and deployments on AWS and Azure",
    ],
    technologies: ["Django", "React", "React Native", "PostgreSQL", "Azure", "AWS"],
  },
  {
    id: "jobzy",
    role: "Full Stack Mobile Developer",
    company: "Jobzy Limited",
    companyUrl: "https://www.jobzy.africa/",
    duration: "Mar 2024 - Mar 2025",
    mode: "Freelance",
    description:
      "Built three apps in the Jobzy ecosystem (Talanta AI App, Service Provider App, Client App).",
    achievements: [
      "Scaled Talanta AI App to 20k+ active users across web, iOS, and Android",
      "Added AI-powered resume and cover letter generation, improving user engagement",
      "Contributed to Jobzy winning Startup of the Year",
      "Delivered full stack with React Native, Django, PostgreSQL, Azure",
    ],
    technologies: ["React Native", "Django", "PostgreSQL", "Azure", "AI"],
  },
  {
    id: "wera",
    role: "Full Stack Developer",
    company: "Wera",
    companyUrl: "https://wera.app",
    duration: "Jun 2022 – Nov 2022",
    mode: "Freelance",
    description:
      "Developed a service procurement platform with a React Native mobile app and Django backend.",
    achievements: [
      "Built real-time chat with web sockets for better in app buyer-seller communication",
    ],
    technologies: [
      "React Native",
      "Django",
      "PostgreSQL",
      "WebSockets",
    ],
  },
  {
    id: "snobole",
    role: "Mobile App Developer",
    company: "Snobole Software",
    companyUrl: "https://snobole.com",
    duration: "Jan 2022 – Jun 2022",
    mode: "Freelance",
    description: "Built a laundry service app using React Native and Expo.",
    achievements: [
      "Converted UI/UX designs from Adobe XD to code",
      "Integrated Stripe payments for seamless user checkout",
    ],
    technologies: ["React Native", "Expo", "Stripe", "Adobe XD"],
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
      "Developed Navismart AI platform for immigration assistance",
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
