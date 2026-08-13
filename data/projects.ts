import { Project } from "../types";

export const projects: Project[] = [
  {
    id: "navismart-ai",
    title: "Navismart AI",
    description:
      "Immigration applicants and agencies need a safer, clearer way to navigate complex forms and supporting documents.",
    role:
      "As AI Engineer & CTO, I lead the agentic workflows, document-ingestion architecture, secure backend systems, and product delivery.",
    proof:
      "Agentic form guidance, OCR/VLM-assisted ingestion and document review, browser-use workflows, AI interview preparation, RBAC, PII encryption, audit logging, and preview deployments.",
    technologies: ["LangGraph", "OpenAI Agents SDK", "OCR/VLM", "FastAPI", "Django"],
    links: { live: "https://navismartai.com" },
    category: "ai",
    featured: true,
  },
  {
    id: "dissolve-software",
    title: "Dissolve Software",
    description:
      "SMEs and media teams need practical AI and product systems that fit their data, workflows, and operating constraints.",
    role:
      "As founder, I scope and deliver web, mobile, AI, and automation work from architecture through deployment.",
    proof:
      "Recent work spans agentic RAG and semantic search, digitization and image-similarity systems, model fine-tuning, ASR, and ML scoring prototypes; published work includes a Kikuyu ASR dataset with 153,000+ preprocessed rows.",
    technologies: ["RAG", "Semantic Search", "Computer Vision", "ASR", "MLOps"],
    links: { live: "https://www.dissolvesoftware.com" },
    category: "ai",
    featured: true,
  },
  {
    id: "kikuyu-translator",
    title: "Kikuyu-English Translator",
    description:
      "Kikuyu is underserved by general-purpose language technology, limiting useful translation tooling for local-language work.",
    role:
      "I prepared training data with OCR and VLM pipelines and fine-tuned Gemma 3 4B via LoRA for bidirectional translation.",
    proof:
      "A public model and related datasets that demonstrate hands-on low-resource language model development for an East African language.",
    technologies: ["Gemma 3 4B", "LoRA", "PyTorch", "OCR/VLM", "Hugging Face"],
    links: {
      live: "https://huggingface.co/InterstellarCG/kikuyu-translator-final",
    },
    category: "ai",
    featured: true,
  },
];
