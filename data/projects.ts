// src/data/projects.ts
import { Project } from "../types";

export const projects: Project[] = [
  {
    id: "galexia",
    title: "Galexia (In Development)",
    description:
      "AI-powered educational platform that transforms questions into interactive visualizations. 13 visualization types including flowcharts, timelines, concept maps, 3D molecules, and animated canvases. Uses AI to dynamically generate the right visualization for any topic.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Vercel AI SDK",
      "React Flow",
      "Three.js",
      "Mermaid",
      "p5.js",
      "Tailwind CSS",
    ],
    links: {
      github: "https://github.com/Ngenome/cognex-ai",
    },
    category: "ai",
    featured: true,
  },
  {
    id: "kikuyu-translator",
    title: "Kikuyu Translator (English ↔ Gĩkũyũ)",
    description:
      "A fine-tuned Gemma 3 4B translation model for bidirectional English-Kikuyu translation. Trained through 4 progressive stages over 55+ hours on 141k translation pairs including Bible, FLORES-200, Bloom Library, agricultural terminology, and synthetic data. Features LoRA fine-tuning achieving 0.746 final loss.",
    image: "/images/projects/kikuyu-translator.png",
    technologies: [
      "Python",
      "PyTorch",
      "Unsloth",
      "LoRA",
      "Gemma 3",
      "Hugging Face",
      "NLP",
      "Machine Learning",
      "Low-Resource Languages",
    ],
    links: {
      live: "https://huggingface.co/InterstellarCG/kikuyu-translator-final",
      github: "https://huggingface.co/datasets/InterstellarCG/kikuyu-translation-data",
    },
    category: "ai",
    featured: true,
  },
  {
    id: "navismart-ai",
    title: "Navismart AI",
    description:
      "AI-powered immigration platform serving 2k+ users across 50+ countries. Features eligibility checks, smart form filling, AI guidance, multilingual support, and secure application tracking.",
    image: "/images/projects/navismart-ai.png",
    technologies: [
      "FastAPI",
      "Python",
      "AI",
      "LLMs",
      "Machine Learning",
      "OpenAI Agents SDK",
      "LangGraph",
      "React",
      "PostgreSQL",
      "AWS",
    ],
    links: {
      live: "https://navismartai.com",
      github: "https://app.navismartai.com",
    },
    category: "ai",
    featured: true,
  },
  {
    id: "talent-app",
    title: "Talanta AI App (Jobzy Limited)",
    description:
      "An AI Powered Job Search React Native mobile app for iOS, Android, and Huawei devices, enabling seamless job searches with advanced filters, personalized job alerts, and intuitive navigation. You can use AI to generate Resumes, CVs, and Cover Letters as well as job application emails.",
    image: "/images/projects/talent-app.png",
    technologies: [
      "React Native",
      "Expo",
      "iOS",
      "Android",
      "API Integration",
      "AI",
      "OpenAI",
    ],
    links: {
      live: "https://talanta.ai",
      playStore:
        "https://play.google.com/store/apps/details?id=com.enochk.jobzy_talent",
      appStore: "https://apps.apple.com/us/app/talent-by-jobzy/id6479216045",
    },
    category: "mobile",
    featured: true,
  },
  {
    id: "m-farmz",
    title: "M-Farmz",
    description:
      "Custom farm management software with mobile application and admin site. Helps clients manage their farm activities, track expenses, income, and overall farm operations.",
    image: "/mfarmz.png",
    technologies: ["React", "Django", "React Native", "PostgreSQL", "Azure"],
    links: {
      live: "https://mfarmz.azurewebsites.net/",
    },
    category: "web",
    featured: true,
  },
  {
    id: "m-jenzi-platform",
    title: "M-jenzi Platform",
    description:
      "Construction e-commerce platform connecting clients with service providers. Platform includes vendor dashboard, client interface, and mobile applications.",
    image: "/m-jenzi-web.png",
    technologies: ["React", "Django", "React Native", "PostgreSQL"],
    links: {
      live: "https://www.m-jenzi.com/",
    },
    category: "web",
    featured: true,
  },
  {
    id: "m-jenzi-app",
    title: "M-jenzi Mobile App",
    description:
      "Mobile application for purchasing construction materials and requesting services from providers. Integrated with the main M-jenzi platform.",
    image: "/m-jenzi-app.png",
    technologies: ["React Native", "Expo", "API Integration"],
    links: {
      playStore:
        "https://play.google.com/store/apps/details?id=com.mjenzi.client",
    },
    category: "mobile",
    featured: true,
  },
  {
    id: "m-jenzi-vendor",
    title: "M-Jenzi Vendor Dashboard",
    description:
      "Comprehensive vendor management dashboard where vendors can register and manage their products. Complete e-commerce management solution.",
    image: "/mjenzi.png",
    technologies: ["React", "TypeScript", "Tailwind CSS", "API Integration"],
    links: {
      live: "https://vendor.m-jenzi.com",
    },
    category: "web",
    featured: true,
  },
  {
    id: "medialabs-agency",
    title: "Media Labs Agency Page",
    description: "A landing page for a marketing agency",
    image: "/images/projects/medialabs.png",
    technologies: ["Nextjs", "TypeScript", "Tailwind CSS"],
    links: {
      live: "https://www.medialabs.agency",
    },
    category: "web",
    featured: true,
  },
];
