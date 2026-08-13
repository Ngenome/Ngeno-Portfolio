"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaEnvelope, FaExternalLinkAlt, FaFileDownload, FaGithub, FaMapMarkerAlt, FaMoon, FaPhone, FaSun } from "react-icons/fa";
import { skills } from "@/data/skills";
import { projects } from "@/data/projects";
import { experiences } from "@/data/experience";
import { socialLinks } from "@/data/social";

// Helper function to extract domain from URL
const extractDomain = (url: string) => {
  try {
    const domain = new URL(url).hostname.replace('www.', '');
    return domain;
  } catch {
    return url;
  }
};

const Portfolio = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      setIsDark(false);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <div className={`min-h-screen transition-colors duration-300 relative ${isDark ? 'bg-surface-dark text-white' : 'bg-white text-gray-900'}`}>
      {/* Network Mesh Background - Left Side Only */}
      <div className="fixed inset-y-0 left-0 w-[25%] pointer-events-none">
        <div className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(${isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)'} 1px, transparent 1px),
              linear-gradient(90deg, ${isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)'} 1px, transparent 1px),
              radial-gradient(circle at 20px 20px, ${isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'} 2px, transparent 2px)
            `,
            backgroundSize: '40px 40px, 40px 40px, 40px 40px',
            maskImage: 'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)',
            WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
      {/* Simple Header */}
      <header className={`sticky top-0 z-50 backdrop-blur-sm border-b transition-colors duration-300 ${
        isDark ? 'bg-surface-dark/95 border-white/10' : 'bg-white/95 border-gray-200'
      }`}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center gap-3">
          <h1 className={`shrink-0 text-sm sm:text-xl font-semibold whitespace-nowrap ${isDark ? 'text-white' : 'text-gray-900'}`}>Kelvin Ng'eno</h1>
          <div className="flex items-center gap-2 sm:gap-4">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-colors ${
                isDark ? 'hover:bg-white/10 text-gray-300' : 'hover:bg-gray-100 text-gray-600'
              }`}
              aria-label="Toggle theme"
            >
              {isDark ? <FaSun className="w-4 h-4" /> : <FaMoon className="w-4 h-4" />}
            </button>
            <Link href="/blog"
              className={`text-sm transition-colors ${
                isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
              }`}>
              Blog
            </Link>
            <a href="#work-with-me"
              className={`hidden sm:inline text-sm transition-colors ${
                isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
              }`}>
              Work with me
            </a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer"
              className={`flex items-center gap-2 px-4 py-2 text-sm rounded transition-colors ${
                isDark ? 'bg-white/10 hover:bg-white/20' : 'bg-gray-100 hover:bg-gray-200'
              }`}>
              <FaFileDownload className="w-3 h-3" />
              Resume
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="space-y-6">
          <div>
            <h2 className={`text-4xl md:text-6xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Kelvin Ng'eno
            </h2>
            <p className={`text-xl ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              AI Engineer &amp; Full-Stack Product Builder
            </p>
          </div>

          <p className={`text-lg max-w-2xl leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            AI engineer and full-stack product leader building agentic systems, ML infrastructure,
            and practical products.
          </p>

          {/* Contact Info */}
          <div className="flex flex-wrap gap-6 pt-4">
            <a href="mailto:hello@ngenondumia.com" className={`flex items-center gap-2 transition-colors ${
              isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
            }`}>
              <FaEnvelope className="w-4 h-4" />
              <span className="text-sm">hello@ngenondumia.com</span>
            </a>
            <a href="tel:+254726299179" className={`flex items-center gap-2 transition-colors ${
              isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
            }`}>
              <FaPhone className="w-4 h-4" />
              <span className="text-sm">+254 726 299 179</span>
            </a>
            <div className={`flex items-center gap-2 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              <FaMapMarkerAlt className="w-4 h-4" />
              <span className="text-sm">Nairobi, Kenya</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap gap-x-5 gap-y-3 pt-2">
            {socialLinks.map((link) => (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 text-sm transition-colors ${
                  isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                }`}
                aria-label={link.name}
              >
                <link.icon className="w-4 h-4" />
                <span>{link.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className={`text-3xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>About Me</h2>
        <div className={`text-lg leading-relaxed space-y-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
          <p>
            I&apos;m an AI engineer and full-stack product builder in Nairobi. I started in web and mobile,
            and that product grounding still shapes how I build AI: the system has to be secure,
            understandable, and useful to the person on the other side of it.
          </p>
          <p>
            At Navismart AI, I lead agentic workflows for immigration guidance, OCR and VLM-assisted
            document ingestion, document review, browser interaction, and interview preparation. The
            platform runs on secure Django and FastAPI services with RBAC, PII encryption, and audit logging.
          </p>
          <p>
            I also founded Dissolve Software, where I build web, mobile, AI, and automation systems for
            SMEs and media clients. That work has included agentic RAG and semantic search, digitization
            and image-similarity systems, model fine-tuning, speech recognition, and ML scoring prototypes.
          </p>
          <p>
            The East African context is part of the work. I&apos;ve shipped Talanta AI to 20,000+ active
            iOS and Android users, fine-tuned a Kikuyu-English translation model, and published Kikuyu
            ASR data on Hugging Face. I like building products that make local-language technology useful.
          </p>
        </div>
      </section>

      {/* Experience Section */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className={`text-3xl font-bold mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={exp.id}>
              <div className="pb-8">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-2">
                <div className="flex items-start gap-4 flex-1">
                  {exp.logo && (
                    <div className={`flex-shrink-0 w-12 h-12 relative rounded ${
                      (exp.id === 'mjenzi' || exp.id === 'jobzy' || exp.id === 'jobzy-limited') ? 'bg-white p-1' : ''
                    }`}>
                      <Image
                        src={exp.id === 'navismart-ai' && !isDark ? '/images/companies/navismart-dark.svg' : exp.logo}
                        alt={`${exp.company} logo`}
                        fill
                        className="object-contain"
                      />
                    </div>
                  )}
                  <div>
                    <h3 className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>{exp.role}</h3>
                    <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                      <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer" className={`transition-colors ${
                        isDark ? 'hover:text-white' : 'hover:text-gray-900'
                      }`}>
                        {exp.company}
                      </a>
                    </p>
                  </div>
                </div>
                <span className={`text-sm font-mono flex-shrink-0 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>{exp.duration}</span>
              </div>

              <p className={`mb-4 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{exp.description}</p>

              {/* Key achievements */}
              <ul className="space-y-2 mb-4">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className={`flex items-start gap-3 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    <span className={`mt-1 ${isDark ? 'text-white/50' : 'text-gray-400'}`}>•</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span key={tech} className={`px-3 py-1 text-xs rounded-full ${
                    isDark ? 'bg-white/5 text-gray-300' : 'bg-gray-100 text-gray-700'
                  }`}>
                    {tech}
                  </span>
                ))}
              </div>
              </div>
              {index < experiences.length - 1 && (
                <hr className={`border-t ${isDark ? 'border-white/10' : 'border-gray-200'}`} />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className={`text-3xl font-bold mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>Projects</h2>
        <div className={`divide-y border-y ${isDark ? 'divide-white/10 border-white/10' : 'divide-gray-200 border-gray-200'}`}>
          {projects.map((project) => (
            <article key={project.id} className="py-8">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <h3 className={`text-xl font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>{project.title}</h3>
                  <p className={`leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {project.description}
                  </p>
                </div>
                {project.links.live && (
                  <a href={project.links.live} target="_blank" rel="noopener noreferrer"
                    className={`flex-shrink-0 inline-flex items-center gap-2 text-sm font-medium ${
                      isDark ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'
                    }`}>
                    {extractDomain(project.links.live)} <FaExternalLinkAlt className="w-3 h-3" />
                  </a>
                )}
              </div>
              <p className={`text-sm mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <span className="font-semibold">Role:</span> {project.role}
              </p>
              <p className={`text-sm leading-relaxed mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                <span className={`font-semibold ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Proof:</span> {project.proof}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className={`px-2 py-1 text-xs rounded ${
                    isDark ? 'bg-white/5 text-gray-300' : 'bg-gray-100 text-gray-700'
                  }`}>
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
        <div className="flex flex-wrap gap-6 pt-6">
          <a href="https://navismartai.com" target="_blank" rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 text-sm ${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'}`}>
            Navismart AI <FaExternalLinkAlt className="w-3 h-3" />
          </a>
          <a href="https://github.com/ngenome" target="_blank" rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 text-sm ${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'}`}>
            <FaGithub className="w-4 h-4" /> GitHub
          </a>
          <a href="https://huggingface.co/InterstellarCG/" target="_blank" rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 text-sm ${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'}`}>
            Hugging Face <FaExternalLinkAlt className="w-3 h-3" />
          </a>
        </div>
      </section>

      {/* Work With Me Section */}
      <section id="work-with-me" className="max-w-5xl mx-auto px-6 py-16 scroll-mt-24">
        <div className={`rounded-xl border p-8 sm:p-10 ${
          isDark ? 'border-white/10 bg-white/5' : 'border-gray-200 bg-gray-50'
        }`}>
          <p className={`text-sm font-medium uppercase tracking-widest mb-3 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
            Work with me
          </p>
          <h2 className={`text-3xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Build the useful version.
          </h2>
          <p className={`max-w-2xl leading-relaxed mb-6 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            I take on AI systems, full-stack product work, mobile delivery, and focused technical or
            product consulting—from agentic and document workflows to production backends and apps.
          </p>
          <a
            href="mailto:hello@ngenondumia.com?subject=Project%20inquiry"
            className={`inline-flex items-center gap-2 px-5 py-3 rounded-lg font-medium transition-colors ${
              isDark ? 'bg-white text-gray-900 hover:bg-gray-200' : 'bg-gray-900 text-white hover:bg-gray-700'
            }`}
          >
            <FaEnvelope className="w-4 h-4" />
            hello@ngenondumia.com
          </a>
        </div>
      </section>

      {/* Skills Section */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className={`text-3xl font-bold mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>Skills & Technologies</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { name: "AI Engineering", color: "orange" },
            { name: "Full-Stack Systems", color: "green" },
            { name: "ML & Speech", color: "blue" },
            { name: "Product Delivery", color: "purple" }
          ].map((category) => {
            const categorySkills = skills.filter(skill => {
              if (category.name === "AI Engineering") return ["AI Agents", "OpenAI Agents SDK", "LangGraph", "Browser Use", "RAG & Semantic Search", "OCR & VLM Pipelines"].includes(skill.name);
              if (category.name === "Full-Stack Systems") return ["Python", "Django", "FastAPI", "PostgreSQL", "Redis", "React", "Next.js", "TypeScript"].includes(skill.name);
              if (category.name === "ML & Speech") return ["PyTorch", "TensorFlow", "Scikit-learn", "Hugging Face", "Whisper & ASR"].includes(skill.name);
              if (category.name === "Product Delivery") return ["React Native", "Expo", "AWS", "Azure", "Docker", "CI/CD Pipelines"].includes(skill.name);
              return false;
            });

            const colorClasses = {
              blue: isDark ? 'text-blue-400 border-blue-400/30' : 'text-blue-600 border-blue-600/30',
              green: isDark ? 'text-green-400 border-green-400/30' : 'text-green-600 border-green-600/30',
              purple: isDark ? 'text-purple-400 border-purple-400/30' : 'text-purple-600 border-purple-600/30',
              orange: isDark ? 'text-orange-400 border-orange-400/30' : 'text-orange-600 border-orange-600/30'
            };

            return (
              <div key={category.name} className={`border-l-2 pl-4 ${colorClasses[category.color as keyof typeof colorClasses]}`}>
                <h3 className={`font-semibold mb-4 ${colorClasses[category.color as keyof typeof colorClasses].split(' ')[0]}`}>{category.name}</h3>
                <ul className="space-y-2">
                  {categorySkills.map((skill) => (
                    <li key={skill.name} className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      {skill.name}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      {/* Writing Section */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Writing</h2>
          <Link href="/blog" className={`flex items-center gap-2 text-sm transition-colors ${
            isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
          }`}>
            All posts <FaArrowRight className="w-3 h-3" />
          </Link>
        </div>
        <div className="space-y-6">
          {[
            {
              title: "The State of AI Coding in 2026",
              description: "A working developer's honest assessment of where AI-assisted development actually stands — what works, what doesn't, and what most people get wrong.",
              slug: "ai-coding-2026",
              tags: ["ai", "coding", "llm"],
              readingTime: "10 min read",
            },
            {
              title: "Fine-Tuning Gemma 3 for Kikuyu Translation",
              description: "How I trained a bidirectional English-Kikuyu translation model using LoRA and progressive fine-tuning.",
              slug: "kikuyu-translator",
              tags: ["ml", "nlp", "african-languages"],
              readingTime: "8 min read",
            },
          ].map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
              <div className={`p-6 rounded-lg transition-colors ${
                isDark ? 'bg-white/5 hover:bg-white/10' : 'bg-gray-50 hover:bg-gray-100'
              }`}>
                <h3 className={`text-xl font-semibold mb-2 group-hover:translate-x-1 transition-transform ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  {post.title}
                </h3>
                <p className={`leading-relaxed text-sm mb-3 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {post.description}
                </p>
                <div className="flex items-center gap-3">
                  <span className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                    {post.readingTime}
                  </span>
                  <span className={isDark ? 'text-gray-700' : 'text-gray-300'}>&middot;</span>
                  <div className="flex gap-2">
                    {post.tags.map((tag) => (
                      <span key={tag} className={`text-xs px-2 py-0.5 rounded-full ${
                        isDark ? 'bg-white/5 text-gray-400' : 'bg-gray-200 text-gray-600'
                      }`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className={`border-t mt-20 ${isDark ? 'border-white/10' : 'border-gray-200'}`}>
        <div className="max-w-5xl mx-auto px-6 py-8">
          <p className={`text-center text-sm ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
            © {new Date().getFullYear()} Kelvin Ng'eno. All rights reserved.
          </p>
        </div>
      </footer>
      </div>
    </div>
  );
};

export default Portfolio;
