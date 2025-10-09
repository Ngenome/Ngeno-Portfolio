"use client";

import React from "react";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaGooglePlay, FaAppStore, FaFileDownload, FaExternalLinkAlt } from "react-icons/fa";
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
  return (
    <div className="min-h-screen bg-surface-dark text-white">
      {/* Simple Header */}
      <header className="sticky top-0 z-50 bg-surface-dark/95 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold text-white">Kelvin Ng'eno</h1>
          <div className="flex items-center gap-4">
            <a href="mailto:hello@ngenondumia.com"
              className="text-sm text-gray-300 hover:text-white transition-colors">
              Contact
            </a>
            <a href="/resume.pdf" download
              className="flex items-center gap-2 px-4 py-2 text-sm bg-white/10 hover:bg-white/20 rounded transition-colors">
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
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Kelvin Ng'eno
            </h2>
            <p className="text-xl text-gray-400">
              Full Stack Developer · AI Engineer · Mobile Developer
            </p>
          </div>

          <p className="text-lg text-gray-300 max-w-2xl leading-relaxed">
            Building scalable solutions that solve real problems with frontier technology.
            5+ years experience serving tens of thousands of users.
          </p>

          {/* Contact Info */}
          <div className="flex flex-wrap gap-6 pt-4">
            <a href="mailto:hello@ngenondumia.com" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
              <FaEnvelope className="w-4 h-4" />
              <span className="text-sm">hello@ngenondumia.com</span>
            </a>
            <a href="tel:+254726299179" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
              <FaPhone className="w-4 h-4" />
              <span className="text-sm">+254 726 299 179</span>
            </a>
            <div className="flex items-center gap-2 text-gray-300">
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
                className="p-2 text-gray-400 hover:text-white transition-colors"
                aria-label={link.id}
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-white mb-8">Experience</h2>
        <div className="space-y-10">
          {experiences.map((exp) => (
            <div key={exp.id} className="border-l-2 border-white/20 pl-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-2">
                <div className="flex items-start gap-4 flex-1">
                  {exp.logo && (
                    <div className="flex-shrink-0 w-12 h-12 relative">
                      <Image
                        src={exp.logo}
                        alt={`${exp.company} logo`}
                        fill
                        className="object-contain"
                      />
                    </div>
                  )}
                  <div>
                    <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
                    <p className="text-gray-400">
                      <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                        {exp.company}
                      </a>
                    </p>
                  </div>
                </div>
                <span className="text-sm text-gray-500 font-mono flex-shrink-0">{exp.duration}</span>
              </div>

              <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>

              {/* Key achievements */}
              <ul className="space-y-2 mb-4">
                {exp.achievements.slice(0, 3).map((achievement, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-400">
                    <span className="text-white/50 mt-1">•</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span key={tech} className="px-3 py-1 text-xs bg-white/5 text-gray-300 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-white mb-8">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="bg-white/5 rounded-lg p-6 hover:bg-white/10 transition-colors">
              <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4 leading-relaxed text-sm">
                {project.description}
              </p>

              {/* Project Links */}
              <div className="flex flex-wrap gap-3 mb-4">
                {project.links.live && (
                  <a href={project.links.live} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors">
                    <FaExternalLinkAlt className="w-3 h-3" />
                    <span>{extractDomain(project.links.live)}</span>
                  </a>
                )}
                {project.links.github && (
                  <a href={project.links.github} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors">
                    <FaGithub className="w-3 h-3" />
                    <span>Code</span>
                  </a>
                )}
                {project.links.playStore && (
                  <a href={project.links.playStore} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors">
                    <FaGooglePlay className="w-3 h-3" />
                    <span>Play Store</span>
                  </a>
                )}
                {project.links.appStore && (
                  <a href={project.links.appStore} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors">
                    <FaAppStore className="w-3 h-3" />
                    <span>App Store</span>
                  </a>
                )}
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="px-2 py-1 text-xs bg-white/5 text-gray-300 rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-white mb-8">Skills & Technologies</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {["Frontend", "Backend", "Mobile", "AI/ML"].map((category) => {
            const categorySkills = skills.filter(skill => {
              if (category === "Frontend") return ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js", "Redux"].includes(skill.name);
              if (category === "Backend") return ["Node.js", "Python", "PostgreSQL", "MongoDB", "Express", "Django"].includes(skill.name);
              if (category === "Mobile") return ["React Native", "Flutter", "Swift", "Kotlin"].includes(skill.name);
              if (category === "AI/ML") return ["TensorFlow", "PyTorch", "OpenAI", "Langchain", "Scikit-learn", "Pandas"].includes(skill.name);
              return false;
            });

            return (
              <div key={category}>
                <h3 className="text-white font-semibold mb-4">{category}</h3>
                <ul className="space-y-2">
                  {categorySkills.map((skill) => (
                    <li key={skill.name} className="text-sm text-gray-400">
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
      <footer className="border-t border-white/10 mt-20">
        <div className="max-w-5xl mx-auto px-6 py-8">
          <p className="text-center text-sm text-gray-500">
            © {new Date().getFullYear()} Kelvin Ng'eno. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
