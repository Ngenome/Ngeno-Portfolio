// src/data/projects.ts
import { Project } from "../types";

export const projects: Project[] = [
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
  {
    id: "claude-ai-chatbot-ui-and-backend",
    title: "Claude AI Chatbot UI and Backend",
    description:
      "An open source feature rich, developer friendly, modifiable chatbot UI and backend for Claude AI. Supports projects.",
    image: "/images/projects/claude-amazon-bedrock-chatbot.png",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Django",
      "ClaudeAI",
      "Amazon Bedrock",
    ],
    links: {
      github:
        "https://github.com/Ngenome/anthropic-claude-aws-bedrock-chat-application-django-and-react/",
    },
    category: "ai",
    featured: true,
  },
  {
    id: "audio-transcription",
    title: "Audio Transcription with OpenAI Whisper",
    description:
      "Implementation of OpenAI's open source Whisper model for audio transcription using PyTorch.",
    image: "/images/projects/openai-whisper.png",
    technologies: ["PyTorch", "Python", "OpenAI", "Machine Learning"],
    links: {
      github:
        "https://colab.research.google.com/drive/1UgeKSqfoBGmpA4UtNHFBKqZtcyXuMx-1",
    },
    category: "ai",
    featured: true,
  },
  {
    id: "tortoise-tts",
    title: "Text to Speech with Tortoise TTS",
    description:
      "Implementation of Tortoise TTS for high-quality text-to-speech conversion.",
    image: "/images/projects/tortoise-tts.png",
    technologies: ["Python", "TTS", "Machine Learning"],
    links: {
      github:
        "https://colab.research.google.com/drive/1z6Dr0dWameD37dZt5tkGFEFisg6f1XdW",
    },
    category: "ai",
    featured: true,
  },
  {
    id: "fashion-gan",
    title: "FashionGAN",
    description:
      "Implementation of Generative Adversarial Network for fashion image generation.",
    image: "/images/projects/fashion-gan.png",
    technologies: ["Python", "GAN", "PyTorch", "Machine Learning"],
    links: {
      github:
        "https://colab.research.google.com/drive/1PTd9tmu3MFIPpRq4hRfzsQVJbj7uBtsW",
    },
    category: "ai",
    featured: true,
  },
];
