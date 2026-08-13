import { Experience } from "../types";

export const experiences: Experience[] = [
  {
    id: "navismart-ai",
    role: "AI Engineer & CTO",
    company: "Navismart AI",
    companyUrl: "https://navismartai.com",
    duration: "Feb 2025–Present",
    mode: "Full-time",
    logo: "/images/companies/navismart.svg",
    description:
      "Leading technical direction and delivery for an AI-powered immigration platform across agentic systems, backend architecture, security, and product development.",
    achievements: [
      "Built AI interview preparation and Browser Use workflows for live web interaction.",
      "Designed OCR and VLM-assisted document ingestion to extract, validate, and structure immigration documents.",
      "Orchestrated LangGraph and OpenAI Agents SDK workflows across form guidance, document review, tool use, and interview preparation.",
      "Designed Django and FastAPI services with async architecture, RBAC, PII encryption, audit logging, automated testing, and preview deployments.",
    ],
    technologies: ["LangGraph", "OpenAI Agents SDK", "OCR/VLM", "FastAPI", "Django", "PostgreSQL"],
  },
  {
    id: "dissolve-software",
    role: "Founder",
    company: "Dissolve Software",
    companyUrl: "https://www.dissolvesoftware.com",
    duration: "Jan 2024–Present",
    mode: "Founder",
    logo: "/images/companies/dissolve.png",
    description:
      "Founded a software consultancy delivering web, mobile, AI, and automation systems for SMEs and media clients.",
    achievements: [
      "Built agentic RAG, semantic search, reverse image search, and image-similarity systems for a Standard Digital digitization project.",
      "Fine-tuned models for code, SQL, and Kikuyu-English translation, supported by OCR and VLM training-data pipelines.",
      "Built ASR systems and ML scoring prototypes for credit risk, fraud, anomaly detection, and dynamic pricing.",
      "Published models and datasets on Hugging Face, including a Kikuyu ASR dataset with 153,000+ preprocessed rows.",
    ],
    technologies: ["LangChain", "LangGraph", "RAG", "PyTorch", "ASR", "Hugging Face"],
  },
  {
    id: "mes-dak",
    role: "Consultant Developer",
    company: "Mes & Dak Corporation",
    duration: "Oct 2024",
    mode: "Contract",
    description:
      "Completed a two-week consulting engagement reviewing architecture, database design, performance bottlenecks, and broken user flows for the M'Network and M'Butic platform.",
    achievements: [
      "Delivered an 80-page technical audit with prioritized recommendations for fixes and improvements.",
      "The development team implemented the recommendations, improving performance, stability, and user experience.",
    ],
    technologies: ["Architecture", "Database Design", "Performance", "Product Consulting"],
  },
  {
    id: "jobzy-limited",
    role: "Full Stack Mobile Developer",
    company: "Jobzy Limited",
    companyUrl: "https://talanta.ai",
    duration: "Mar 2024–Mar 2025",
    mode: "Full-time",
    logo: "/images/companies/jobzy.png",
    description:
      "Built the Talanta AI mobile app end-to-end with React Native, translating Figma designs into responsive product experiences and integrating backend APIs and OAuth authentication.",
    achievements: [
      "Scaled Talanta AI to 20,000+ active users across iOS and Android.",
      "Added AI-powered résumé and cover-letter generation to help users create job applications faster.",
    ],
    technologies: ["React Native", "OAuth", "API Integration", "iOS", "Android", "AI"],
  },
  {
    id: "mjenzi",
    role: "Full Stack Engineer",
    company: "M-jenzi",
    duration: "Jan 2023–Mar 2024",
    mode: "Full-time",
    logo: "/images/companies/mjenzi.png",
    description:
      "Built an award-winning multivendor e-commerce platform for construction materials, which placed 1st at the Kenya E-commerce Awards.",
    achievements: [
      "Designed vendor dashboards, an admin portal, and a React Native mobile app deployed to production.",
      "Optimized backend architecture, cutting load times by more than 40%.",
      "Built Buy Now, Pay Later payments and managed database design, DevOps, and AWS and Azure deployments.",
    ],
    technologies: ["Django", "React", "React Native", "PostgreSQL", "AWS", "Azure"],
  },
  {
    id: "wera",
    role: "Full Stack Developer",
    company: "Wera",
    duration: "Jun 2022–Nov 2022",
    mode: "Full-time",
    logo: "/images/companies/wera.png",
    description:
      "Built a service procurement platform end-to-end across web and mobile, enabling provider-client interactions.",
    achievements: [
      "Developed a Django REST Framework and PostgreSQL backend plus a React Native app for service providers.",
      "Handled the deployment pipeline from API setup through production web and mobile releases.",
    ],
    technologies: ["Django REST Framework", "PostgreSQL", "React Native", "Deployment"],
  },
  {
    id: "united-states-of-africa",
    role: "Frontend Developer",
    company: "United States of Africa",
    duration: "Feb 2022–Oct 2022",
    mode: "Part-time",
    description:
      "Implemented meeting-room, chat, and participant-management features for Zumaridi's video-conferencing platform.",
    achievements: [
      "Converted Figma designs into responsive React and Tailwind CSS interfaces for desktop and mobile.",
    ],
    technologies: ["React", "Tailwind CSS", "Figma"],
  },
  {
    id: "snobole",
    role: "Mobile Developer",
    company: "Snobole Software",
    duration: "Jan 2022–Jun 2022",
    mode: "Full-time",
    logo: "/images/companies/snobole.png",
    description:
      "Delivered a cross-platform laundry-services app with React Native and Expo, converting Adobe XD designs into responsive interfaces.",
    achievements: [
      "Integrated Stripe payments and applied accessibility and performance practices across Android and iOS.",
    ],
    technologies: ["React Native", "Expo", "Stripe", "Android", "iOS"],
  },
];
