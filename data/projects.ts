import { Project } from "../types";

export const projects: Project[] = [
  {
    id: "navismart-ai",
    title: "Navismart AI",
    description:
      "An AI immigration platform for navigating complex forms, supporting documents, document review, and interview preparation.",
    role:
      "AI Engineer & CTO leading agentic workflows, document ingestion, secure backend architecture, and product delivery.",
    proof:
      "Agentic form guidance, OCR/VLM-assisted ingestion and review, browser-use workflows, AI interview preparation, RBAC, PII encryption, audit logging, and preview deployments.",
    technologies: ["LangGraph", "OpenAI Agents SDK", "OCR/VLM", "FastAPI", "Django"],
    links: { live: "https://navismartai.com" },
    category: "ai",
    featured: true,
  },
  {
    id: "dissolve-software",
    title: "Dissolve Software",
    description:
      "Delivers practical web, mobile, AI, and automation systems for SMEs and media clients.",
    role:
      "Founder delivering web, mobile, AI, and automation systems for SMEs and media clients.",
    proof:
      "Recent work includes agentic RAG and semantic search, digitization and image-similarity systems, model fine-tuning, ASR, and ML scoring prototypes.",
    technologies: ["RAG", "Semantic Search", "Computer Vision", "ASR", "MLOps"],
    links: { live: "https://www.dissolvesoftware.com" },
    category: "ai",
    featured: true,
  },
  {
    id: "talanta-ai",
    title: "Talanta AI",
    description:
      "A mobile product that helps users create AI-assisted résumés and cover letters for job applications.",
    role:
      "Full Stack Mobile Developer who built the React Native app end-to-end, integrated backend APIs, and implemented multi-provider OAuth.",
    proof:
      "Scaled to 20,000+ active users across iOS and Android while making job-application creation faster with AI-powered generation.",
    technologies: ["React Native", "OAuth", "API Integration", "iOS", "Android"],
    links: { live: "https://talanta.ai" },
    category: "mobile",
    featured: true,
  },
  {
    id: "kikuyu-translator",
    title: "Kikuyu-English Translator",
    description:
      "A bidirectional translation model for Kikuyu and English, supporting practical local-language technology.",
    role:
      "Prepared training data with OCR and VLM pipelines and fine-tuned Gemma 3 4B via LoRA.",
    proof:
      "Published the model on Hugging Face alongside other models and datasets, including Kikuyu ASR data.",
    technologies: ["Gemma 3 4B", "LoRA", "PyTorch", "OCR/VLM", "Hugging Face"],
    links: {
      live: "https://huggingface.co/InterstellarCG/kikuyu-translator-final",
    },
    category: "ai",
    featured: true,
  },
];
