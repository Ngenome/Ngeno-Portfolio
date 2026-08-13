"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaArrowRight,
  FaBrain,
  FaEnvelope,
  FaExternalLinkAlt,
  FaFileDownload,
  FaGithub,
  FaMapMarkerAlt,
  FaMoon,
  FaPhone,
  FaSun,
} from "react-icons/fa";
import { experiences } from "@/data/experience";
import { projects } from "@/data/projects";

const publicLinks = [
  { name: "Navismart", url: "https://navismartai.com", icon: FaExternalLinkAlt },
  { name: "GitHub", url: "https://github.com/ngenome", icon: FaGithub },
  {
    name: "Hugging Face",
    url: "https://huggingface.co/InterstellarCG/",
    icon: FaBrain,
  },
];

const capabilityGroups = [
  {
    title: "AI engineering",
    items: [
      "Agentic workflows",
      "LangGraph & OpenAI Agents SDK",
      "RAG & semantic search",
      "OCR & document ingestion",
      "Embeddings & vector search",
    ],
  },
  {
    title: "Full-stack systems",
    items: [
      "Python & TypeScript",
      "Django & FastAPI",
      "React & Next.js",
      "PostgreSQL & Redis",
      "RBAC, encryption & audit logging",
    ],
  },
  {
    title: "ML & speech",
    items: [
      "PyTorch & Transformers",
      "Fine-tuning & LoRA",
      "ASR, Whisper & Zipformer",
      "Neural machine translation",
      "Hugging Face & Modal",
    ],
  },
  {
    title: "Product delivery",
    items: [
      "React Native & Expo",
      "AWS, Azure & Docker",
      "Automated testing & CI/CD",
      "Preview deployments",
      "Technical & product consulting",
    ],
  },
];

const writing = [
  {
    title: "The State of AI Coding in 2026",
    description:
      "A working developer's assessment of where AI-assisted development stands—what works, what doesn't, and what most people get wrong.",
    slug: "ai-coding-2026",
    tags: ["ai", "coding", "llm"],
    readingTime: "10 min read",
  },
  {
    title: "Fine-Tuning Gemma 3 for Kikuyu Translation",
    description:
      "How I trained a bidirectional English-Kikuyu translation model using LoRA and progressive fine-tuning.",
    slug: "kikuyu-translator",
    tags: ["ml", "nlp", "african-languages"],
    readingTime: "8 min read",
  },
];

const linkLabelByProject: Record<string, string> = {
  "navismart-ai": "Visit Navismart",
  "dissolve-software": "Visit Dissolve Software",
  "kikuyu-translator": "View on Hugging Face",
};

const Portfolio = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    setIsDark(localStorage.getItem("theme") !== "light");
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  const surface = isDark ? "bg-surface-dark text-white" : "bg-white text-gray-900";
  const heading = isDark ? "text-white" : "text-gray-900";
  const body = isDark ? "text-gray-300" : "text-gray-700";
  const muted = isDark ? "text-gray-400" : "text-gray-600";
  const divider = isDark ? "border-white/10" : "border-gray-200";
  const panel = isDark ? "bg-white/[0.04]" : "bg-gray-50";

  return (
    <div className={`relative min-h-screen transition-colors duration-300 ${surface}`}>
      <div className="pointer-events-none fixed inset-y-0 left-0 w-1/4">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(${isDark ? "rgba(255,255,255,.08)" : "rgba(0,0,0,.08)"} 1px, transparent 1px), linear-gradient(90deg, ${isDark ? "rgba(255,255,255,.08)" : "rgba(0,0,0,.08)"} 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
            maskImage: "linear-gradient(to right, black, transparent)",
            WebkitMaskImage: "linear-gradient(to right, black, transparent)",
          }}
        />
      </div>

      <div className="relative z-10">
        <header
          className={`sticky top-0 z-50 border-b backdrop-blur-sm ${
            isDark ? "border-white/10 bg-surface-dark/95" : "border-gray-200 bg-white/95"
          }`}
        >
          <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-6 py-4">
            <a href="#top" className={`text-base font-semibold md:text-xl ${heading}`}>
              Kelvin Ng&apos;eno
            </a>
            <div className="flex items-center gap-3 sm:gap-4">
              <button
                onClick={() => setIsDark((current) => !current)}
                className={`rounded-lg p-2 transition-colors ${
                  isDark ? "text-gray-300 hover:bg-white/10" : "text-gray-600 hover:bg-gray-100"
                }`}
                aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
              >
                {isDark ? <FaSun className="h-4 w-4" /> : <FaMoon className="h-4 w-4" />}
              </button>
              <Link href="/blog" className={`hidden text-sm transition-colors sm:block ${muted}`}>
                Blog
              </Link>
              <a href="#work-with-me" className={`text-sm transition-colors ${muted}`}>
                Contact
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 rounded px-3 py-2 text-sm transition-colors sm:px-4 ${
                  isDark ? "bg-white/10 hover:bg-white/20" : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                <FaFileDownload className="h-3 w-3" />
                <span className="hidden sm:inline">Résumé</span>
              </a>
            </div>
          </div>
        </header>

        <main id="top">
          <section className="mx-auto max-w-5xl px-6 py-20 md:py-24">
            <p className={`mb-4 text-sm font-medium uppercase tracking-[0.18em] ${muted}`}>
              Nairobi, Kenya · Building for East Africa and beyond
            </p>
            <h1 className={`max-w-4xl text-4xl font-bold leading-tight md:text-6xl ${heading}`}>
              AI Engineer &amp; Full-Stack Product Builder
            </h1>
            <p className={`mt-6 max-w-3xl text-xl leading-relaxed md:text-2xl ${body}`}>
              I build agentic systems, ML infrastructure, and practical products—from secure AI backends to mobile experiences used at scale.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {publicLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                    isDark
                      ? "border-white/15 text-gray-200 hover:border-white/40 hover:bg-white/5"
                      : "border-gray-300 text-gray-700 hover:border-gray-500 hover:bg-gray-50"
                  }`}
                >
                  <link.icon className="h-4 w-4" />
                  {link.name}
                </a>
              ))}
            </div>

            <div className={`mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm ${muted}`}>
              <a href="mailto:hello@ngenondumia.com" className="flex items-center gap-2 hover:underline">
                <FaEnvelope className="h-4 w-4" /> hello@ngenondumia.com
              </a>
              <a href="tel:+254726299179" className="flex items-center gap-2 hover:underline">
                <FaPhone className="h-4 w-4" /> +254 726 299 179
              </a>
              <span className="flex items-center gap-2">
                <FaMapMarkerAlt className="h-4 w-4" /> Nairobi, Kenya
              </span>
            </div>
          </section>

          <section className="mx-auto max-w-5xl px-6 py-16">
            <h2 className={`mb-6 text-3xl font-bold ${heading}`}>About Me</h2>
            <div className={`max-w-4xl space-y-5 text-lg leading-relaxed ${body}`}>
              <p>
                I&apos;m an AI engineer and full-stack product builder in Nairobi. I started in web and mobile, and that product grounding still shapes how I build AI: the system has to be secure, understandable, and useful to the person on the other side of it.
              </p>
              <p>
                At Navismart AI, I lead agentic workflows for immigration guidance, OCR and VLM-assisted document ingestion, document review, browser interaction, and interview preparation. The product runs on Django and FastAPI services designed around RBAC, PII encryption, audit logging, testing, and preview deployments.
              </p>
              <p>
                I also founded Dissolve Software, where I build web, mobile, AI, and automation systems for SMEs and media clients. That work has included agentic RAG and semantic search, digitization and image-similarity systems, model fine-tuning, speech recognition, and ML scoring prototypes.
              </p>
              <p>
                The East African context is part of the work, not a footnote. I&apos;ve shipped consumer products such as Talanta AI to 20,000+ active iOS and Android users, fine-tuned a Kikuyu-English translation model, and published Kikuyu ASR data on Hugging Face. I like building the infrastructure and products that make local-language technology genuinely usable.
              </p>
            </div>
          </section>

          <section className="mx-auto max-w-5xl px-6 py-16">
            <div className="mb-8 max-w-2xl">
              <h2 className={`text-3xl font-bold ${heading}`}>Selected Work</h2>
              <p className={`mt-3 ${muted}`}>
                A focused selection of current AI engineering and product work.
              </p>
            </div>
            <div className={`divide-y border-y ${divider}`}>
              {projects.map((project, index) => (
                <article key={project.id} className="grid gap-5 py-8 md:grid-cols-[2fr_3fr] md:gap-12">
                  <div>
                    <p className={`mb-2 font-mono text-xs ${muted}`}>0{index + 1}</p>
                    <h3 className={`text-2xl font-semibold ${heading}`}>{project.title}</h3>
                    {project.links.live ? (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`mt-4 inline-flex items-center gap-2 text-sm font-medium underline decoration-1 underline-offset-4 ${
                          isDark ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {linkLabelByProject[project.id]}
                        <FaExternalLinkAlt className="h-3 w-3" />
                      </a>
                    ) : null}
                  </div>
                  <div className="space-y-4">
                    <p className={`leading-relaxed ${body}`}>
                      <span className={`font-semibold ${heading}`}>Problem and user: </span>
                      {project.description}
                    </p>
                    <p className={`leading-relaxed ${body}`}>
                      <span className={`font-semibold ${heading}`}>My ownership: </span>
                      {project.role}
                    </p>
                    <p className={`leading-relaxed ${body}`}>
                      <span className={`font-semibold ${heading}`}>Proof: </span>
                      {project.proof}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {project.technologies.map((technology) => (
                        <span
                          key={technology}
                          className={`rounded-full px-3 py-1 text-xs ${
                            isDark ? "bg-white/5 text-gray-300" : "bg-gray-100 text-gray-700"
                          }`}
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-5 text-sm">
              <a
                href="https://github.com/ngenome"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 font-medium hover:underline ${heading}`}
              >
                <FaGithub /> GitHub
              </a>
              <a
                href="https://huggingface.co/InterstellarCG/"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 font-medium hover:underline ${heading}`}
              >
                <FaBrain /> Hugging Face models &amp; datasets
              </a>
            </div>
          </section>

          <section className="mx-auto max-w-5xl px-6 py-16">
            <h2 className={`mb-8 text-3xl font-bold ${heading}`}>Experience</h2>
            <div className="space-y-8">
              {experiences.map((experience, index) => (
                <article key={experience.id}>
                  <div className="pb-8">
                    <div className="mb-4 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                      <div className="flex items-start gap-4">
                        {experience.logo ? (
                          <div
                            className={`relative h-12 w-12 flex-shrink-0 rounded ${
                              experience.id === "mjenzi" || experience.id === "jobzy-limited" ? "bg-white p-1" : ""
                            }`}
                          >
                            <Image
                              src={
                                experience.id === "navismart-ai" && !isDark
                                  ? "/images/companies/navismart-dark.svg"
                                  : experience.logo
                              }
                              alt=""
                              fill
                              sizes="48px"
                              className="object-contain"
                            />
                          </div>
                        ) : null}
                        <div>
                          <h3 className={`text-xl font-semibold ${heading}`}>{experience.role}</h3>
                          {experience.companyUrl ? (
                            <a
                              href={experience.companyUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`${muted} hover:underline`}
                            >
                              {experience.company}
                            </a>
                          ) : (
                            <p className={muted}>{experience.company}</p>
                          )}
                        </div>
                      </div>
                      <span className={`flex-shrink-0 font-mono text-sm ${muted}`}>
                        {experience.duration}
                      </span>
                    </div>
                    <p className={`mb-4 max-w-4xl leading-relaxed ${body}`}>{experience.description}</p>
                    <ul className={`max-w-4xl space-y-2 ${muted}`}>
                      {experience.achievements.map((achievement) => (
                        <li key={achievement} className="flex items-start gap-3">
                          <span className="mt-1 opacity-60">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {experience.technologies.map((technology) => (
                        <span
                          key={technology}
                          className={`rounded-full px-3 py-1 text-xs ${
                            isDark ? "bg-white/5 text-gray-300" : "bg-gray-100 text-gray-700"
                          }`}
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>
                  {index < experiences.length - 1 ? <hr className={`border-t ${divider}`} /> : null}
                </article>
              ))}
            </div>
          </section>

          <section className="mx-auto max-w-5xl px-6 py-16">
            <h2 className={`mb-8 text-3xl font-bold ${heading}`}>Capabilities</h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {capabilityGroups.map((group) => (
                <div key={group.title} className={`border-l-2 pl-4 ${divider}`}>
                  <h3 className={`mb-4 font-semibold ${heading}`}>{group.title}</h3>
                  <ul className={`space-y-2 text-sm ${muted}`}>
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="mx-auto max-w-5xl px-6 py-16">
            <div className="mb-8 flex items-center justify-between gap-4">
              <h2 className={`text-3xl font-bold ${heading}`}>Writing</h2>
              <Link href="/blog" className={`flex items-center gap-2 text-sm ${muted}`}>
                All posts <FaArrowRight className="h-3 w-3" />
              </Link>
            </div>
            <div className="space-y-4">
              {writing.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
                  <article className={`rounded-lg p-6 transition-colors ${panel}`}>
                    <h3 className={`text-xl font-semibold ${heading}`}>{post.title}</h3>
                    <p className={`mt-2 text-sm leading-relaxed ${muted}`}>{post.description}</p>
                    <div className={`mt-3 flex flex-wrap items-center gap-2 text-xs ${muted}`}>
                      <span>{post.readingTime}</span>
                      <span aria-hidden="true">·</span>
                      {post.tags.map((tag) => (
                        <span key={tag}>#{tag}</span>
                      ))}
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </section>

          <section id="work-with-me" className="mx-auto max-w-5xl px-6 py-16 md:py-20">
            <div className={`rounded-2xl border p-8 md:p-12 ${divider} ${panel}`}>
              <p className={`mb-3 text-sm font-medium uppercase tracking-[0.18em] ${muted}`}>
                Work with me
              </p>
              <h2 className={`max-w-3xl text-3xl font-bold leading-tight md:text-4xl ${heading}`}>
                Bring me the difficult product and engineering problems.
              </h2>
              <p className={`mt-5 max-w-3xl text-lg leading-relaxed ${body}`}>
                I work on AI systems, full-stack products, mobile applications, and focused technical or product consulting engagements—from early architecture through production delivery.
              </p>
              <a
                href="mailto:hello@ngenondumia.com?subject=Project%20inquiry"
                className={`mt-8 inline-flex items-center gap-2 rounded-lg px-5 py-3 font-medium transition-colors ${
                  isDark ? "bg-white text-gray-950 hover:bg-gray-200" : "bg-gray-950 text-white hover:bg-gray-800"
                }`}
              >
                <FaEnvelope className="h-4 w-4" />
                hello@ngenondumia.com
              </a>
            </div>
          </section>
        </main>

        <footer className={`mt-12 border-t ${divider}`}>
          <div className={`mx-auto flex max-w-5xl flex-col gap-3 px-6 py-8 text-sm sm:flex-row sm:items-center sm:justify-between ${muted}`}>
            <p>© {new Date().getFullYear()} Kelvin Ng&apos;eno.</p>
            <div className="flex gap-4">
              {publicLinks.map((link) => (
                <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Portfolio;
