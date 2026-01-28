"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaGooglePlay, FaAppStore, FaFileDownload, FaExternalLinkAlt, FaMoon, FaSun } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
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
  const [activeRole, setActiveRole] = useState<string | null>(null);

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

  const roleDescriptions: { [key: string]: string } = {
    'Full Stack Developer': 'Building complete web applications from frontend to backend, handling databases, APIs, and deployment.',
    'AI Engineer': 'Developing intelligent systems using machine learning, LLMs, and AI agents to solve complex problems.',
    'Mobile Developer': 'Creating native and cross-platform mobile applications for iOS and Android with React Native.'
  };

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
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className={`text-base md:text-xl font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>Kelvin Ng'eno</h1>
          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-colors ${
                isDark ? 'hover:bg-white/10 text-gray-300' : 'hover:bg-gray-100 text-gray-600'
              }`}
              aria-label="Toggle theme"
            >
              {isDark ? <FaSun className="w-4 h-4" /> : <FaMoon className="w-4 h-4" />}
            </button>
            <a href="mailto:hello@ngenondumia.com"
              className={`text-sm transition-colors ${
                isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
              }`}>
              Contact
            </a>
            <a href="https://docs.google.com/document/d/1MySvsINyYvUlBZZWAD6rRAUzhaXeXyVnSp6zZeVJy6E/edit?usp=sharing" target="_blank" rel="noopener noreferrer"
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
            <div className="flex flex-wrap items-center justify-start gap-2 text-xl">
              {['Full Stack Developer', 'AI Engineer', 'Mobile Developer'].map((role, index) => (
                <div key={role} className="relative inline-block">
                  <button
                    onClick={() => setActiveRole(activeRole === role ? null : role)}
                    className={`transition-colors hover:text-white ${isDark ? 'text-gray-400' : 'text-gray-600 hover:text-gray-900'}`}
                  >
                    {role}
                  </button>
                  {activeRole === role && (
                    <>
                      {/* Backdrop to close popover */}
                      <div
                        className="fixed inset-0 z-40"
                        onClick={() => setActiveRole(null)}
                      />
                      {/* Popover */}
                      <div className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-64 sm:w-80 p-4 rounded-lg shadow-lg z-50 ${
                        isDark ? 'bg-surface-light border border-white/10' : 'bg-white border border-gray-200'
                      }`}>
                        <div className={`text-sm leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                          {roleDescriptions[role]}
                        </div>
                        {/* Arrow */}
                        <div className={`absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 rotate-45 ${
                          isDark ? 'bg-surface-light border-t border-l border-white/10' : 'bg-white border-t border-l border-gray-200'
                        }`} />
                      </div>
                    </>
                  )}
                  {index < 2 && <span className={`mx-2 ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>·</span>}
                </div>
              ))}
            </div>
          </div>

          <p className={`text-lg max-w-2xl leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            Building scalable solutions that solve real problems with frontier technology.
            5+ years experience serving tens of thousands of users.
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
          <div className="flex gap-4 pt-2">
            {socialLinks.map((link) => (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 transition-colors ${
                  isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                }`}
                aria-label={link.id}
              >
                <link.icon className="w-5 h-5" />
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
            I'm a full stack developer with a deep passion for AI and machine learning. Over the past 5+ years,
            I've built and scaled applications serving tens of thousands of users across web and mobile platforms.
          </p>
          <p>
            My journey started with frontend development, but I quickly expanded into backend systems, mobile apps,
            and eventually AI/ML engineering. I love working at the intersection of these technologies, building
            intelligent systems that solve real-world problems. I'm passionate about building startups and creating
            solutions that make a real impact.
          </p>
          <p>
            Currently, I'm focused on AI agents, LLM integration, and building platforms that leverage cutting-edge
            AI to deliver exceptional user experiences. I'm also the founder of Dissolve Software, where I help
            businesses bring their ideas to life through custom software solutions.
          </p>
          <p>
            When I'm not coding, I'm exploring new technologies, contributing to open source, or learning about
            the latest developments in AI and software engineering.
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
                {exp.achievements.slice(0, 3).map((achievement, i) => (
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
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div key={project.id} className={`rounded-lg overflow-hidden transition-colors ${
              isDark ? 'bg-white/5 hover:bg-white/10' : 'bg-gray-50 hover:bg-gray-100'
            }`}>
              {/* Project Image */}
              {project.image && (
                <div className="relative h-48 w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}

              <div className="p-6">
                <h3 className={`text-xl font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>{project.title}</h3>
                <p className={`mb-4 leading-relaxed text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {project.description}
                </p>

              {/* Project Links */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.links.live && (
                  <a href={project.links.live} target="_blank" rel="noopener noreferrer"
                    className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg transition-all hover:scale-105 ${
                      isDark
                        ? 'bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 border border-blue-500/30'
                        : 'bg-blue-50 text-blue-600 hover:bg-blue-100 border border-blue-200'
                    }`}>
                    <FaExternalLinkAlt className="w-4 h-4" />
                    <span>Visit Site</span>
                  </a>
                )}
                {project.links.github && (
                  <a href={project.links.github} target="_blank" rel="noopener noreferrer"
                    className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg transition-all hover:scale-105 ${
                      isDark
                        ? 'bg-gray-500/20 text-gray-300 hover:bg-gray-500/30 border border-gray-500/30'
                        : 'bg-gray-50 text-gray-700 hover:bg-gray-100 border border-gray-200'
                    }`}>
                    <FaGithub className="w-4 h-4" />
                    <span>View Code</span>
                  </a>
                )}
                {project.links.playStore && (
                  <a href={project.links.playStore} target="_blank" rel="noopener noreferrer"
                    className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg transition-all hover:scale-105 ${
                      isDark
                        ? 'bg-green-500/20 text-green-400 hover:bg-green-500/30 border border-green-500/30'
                        : 'bg-green-50 text-green-600 hover:bg-green-100 border border-green-200'
                    }`}>
                    <FaGooglePlay className="w-4 h-4" />
                    <span>Play Store</span>
                  </a>
                )}
                {project.links.appStore && (
                  <a href={project.links.appStore} target="_blank" rel="noopener noreferrer"
                    className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg transition-all hover:scale-105 ${
                      isDark
                        ? 'bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 border border-blue-500/30'
                        : 'bg-blue-50 text-blue-600 hover:bg-blue-100 border border-blue-200'
                    }`}>
                    <FaAppStore className="w-4 h-4" />
                    <span>App Store</span>
                  </a>
                )}
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className={`px-2 py-1 text-xs rounded ${
                    isDark ? 'bg-white/5 text-gray-300' : 'bg-gray-200 text-gray-700'
                  }`}>
                    {tech}
                  </span>
                ))}
              </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className={`text-3xl font-bold mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>Skills & Technologies</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { name: "Frontend", color: "blue" },
            { name: "Backend", color: "green" },
            { name: "Mobile", color: "purple" },
            { name: "AI/ML", color: "orange" }
          ].map((category) => {
            const categorySkills = skills.filter(skill => {
              if (category.name === "Frontend") return ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js", "Redux"].includes(skill.name);
              if (category.name === "Backend") return ["Elixir", "Phoenix Framework", "Node.js", "Python", "PostgreSQL", "MongoDB", "Express", "Django"].includes(skill.name);
              if (category.name === "Mobile") return ["React Native", "Flutter", "Swift", "Kotlin"].includes(skill.name);
              if (category.name === "AI/ML") return ["PyTorch", "Neural Networks", "TensorFlow", "OpenAI Agents SDK", "LangGraph", "Scikit-learn", "Numpy"].includes(skill.name);
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
