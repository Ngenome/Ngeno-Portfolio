"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaGlobe, FaGooglePlay, FaAppStore, FaFileDownload, FaInstagram, FaExternalLinkAlt } from "react-icons/fa";
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

const CompactPortfolio = () => {
  return (
    <div className="min-h-screen bg-surface-dark text-white">
      {/* Top Navigation Bar */}
      <nav className="bg-surface-light border-b border-lime-default/20 px-4 py-3">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-lime-light font-bold text-lg">Kelvin Ng'eno</div>
          <div className="flex items-center gap-4">
            <a href="mailto:hello@ngenondumia.com"
              className="px-3 py-1 bg-lime-default text-surface-dark text-sm font-medium rounded hover:bg-lime-light transition-colors">
              Get In Touch
            </a>
            <a href="/resume.pdf" download
              className="px-3 py-1 border border-lime-default text-lime-light text-sm font-medium rounded hover:bg-lime-default hover:text-surface-dark transition-colors">
              <FaFileDownload className="inline w-3 h-3 mr-1" />
              Resume
            </a>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto p-4">
        {/* Header Section - Compact */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid lg:grid-cols-3 gap-8 mb-8"
        >
          {/* Left: Name & Title */}
          <div className="lg:col-span-2">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
              Kelvin Ng'eno
            </h1>
            <p className="text-xl text-lime-light mb-3">
              Full Stack Dev • AI Engineer • Mobile App Developer
            </p>
            <p className="text-gray-300 text-base leading-relaxed max-w-2xl">
              Cracked founder mode engineer building scalable solutions that solve real problems with frontier technology. 5+ years experience serving tens of thousands of users.
            </p>
          </div>

          {/* Right: Contact Info */}
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2 text-gray-300">
              <FaEnvelope className="w-4 h-4 text-lime-light" />
              <a href="mailto:hello@ngenondumia.com" className="hover:text-lime-light transition-colors">
                hello@ngenondumia.com
              </a>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <FaPhone className="w-4 h-4 text-lime-light" />
              <a href="tel:+254726299179" className="hover:text-lime-light transition-colors">
                +254 726 299 179
              </a>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <FaMapMarkerAlt className="w-4 h-4 text-lime-light" />
              <span>Nairobi, Kenya</span>
            </div>

            {/* Social Links - All of them */}
            <div className="flex gap-3 pt-2">
              {socialLinks.map((link) => (
                <a key={link.id} href={link.url} target="_blank" rel="noopener noreferrer"
                  className="text-gray-400 hover:text-lime-light transition-colors">
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column: Experience & Skills */}
          <div className="lg:col-span-2 space-y-8">

            {/* Experience Section */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h2 className="text-2xl font-bold text-white mb-4 border-b border-lime-default/30 pb-2">
                Experience
              </h2>
              <div className="space-y-4">
                {experiences.slice(0, 3).map((exp, index) => (
                  <div key={exp.id} className="border-l-2 border-lime-default/30 pl-4">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-1">
                      <h3 className="font-semibold text-white">{exp.role}</h3>
                      <span className="text-sm text-lime-light font-mono">{exp.duration}</span>
                    </div>
                    <p className="text-lime-light text-sm mb-2">
                      <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                        {exp.company}
                      </a>
                    </p>
                    <p className="text-gray-300 text-sm mb-2 leading-relaxed">{exp.description}</p>

                    {/* Top achievements */}
                    <ul className="space-y-1 text-sm text-gray-400 mb-2">
                      {exp.achievements.slice(0, 2).map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-lime-default text-xs mt-1">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1">
                      {exp.technologies.slice(0, 6).map((tech) => (
                        <span key={tech} className="px-2 py-0.5 text-xs bg-surface-light text-gray-300 rounded">
                          {tech}
                        </span>
                      ))}
                      {exp.technologies.length > 6 && (
                        <span className="px-2 py-0.5 text-xs text-gray-400">
                          +{exp.technologies.length - 6} more
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Skills Section - Compact Grid */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-white mb-4 border-b border-lime-default/30 pb-2">
                Skills & Technologies
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {["Frontend", "Backend", "Mobile", "AI/ML"].map((category) => {
                  const categorySkills = skills.filter(skill => {
                    if (category === "Frontend") return ["React", "Next.js", "TypeScript", "Tailwind CSS"].includes(skill.name);
                    if (category === "Backend") return ["Node.js", "Python", "PostgreSQL", "MongoDB"].includes(skill.name);
                    if (category === "Mobile") return ["React Native", "Flutter", "Swift", "Kotlin"].includes(skill.name);
                    if (category === "AI/ML") return ["TensorFlow", "PyTorch", "OpenAI", "Langchain"].includes(skill.name);
                    return false;
                  });

                  return (
                    <div key={category}>
                      <h3 className="text-lime-light font-semibold text-sm mb-2">{category}</h3>
                      <div className="space-y-1">
                        {categorySkills.slice(0, 6).map((skill) => (
                          <div key={skill.name} className="text-gray-300 text-xs">
                            {skill.name}
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.section>
          </div>

          {/* Right Column: Projects */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-2xl font-bold text-white mb-4 border-b border-lime-default/30 pb-2">
              Featured Projects
            </h2>

            <div className="grid gap-3">
              {projects.map((project) => (
                <div key={project.id} className="bg-surface-light rounded-lg p-3 border border-lime-default/10 hover:border-lime-default/30 transition-all">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-white text-sm">{project.title}</h3>
                  </div>

                  <p className="text-gray-300 text-xs mb-3 leading-relaxed">
                    {project.description.length > 120 ? project.description.substring(0, 120) + '...' : project.description}
                  </p>

                  {/* Clear Project Links with Domain Names */}
                  <div className="space-y-1 mb-3">
                    {project.links.live && (
                      <a href={project.links.live} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-2 text-lime-light hover:text-lime-default transition-colors text-xs">
                        <FaExternalLinkAlt className="w-3 h-3" />
                        <span className="bg-lime-default/10 px-2 py-0.5 rounded">
                          {extractDomain(project.links.live)}
                        </span>
                      </a>
                    )}
                    {project.links.github && (
                      <a href={project.links.github} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-400 hover:text-lime-light transition-colors text-xs">
                        <FaGithub className="w-3 h-3" />
                        <span>{extractDomain(project.links.github)}</span>
                      </a>
                    )}
                    {project.links.playStore && (
                      <a href={project.links.playStore} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors text-xs">
                        <FaGooglePlay className="w-3 h-3" />
                        <span>Play Store</span>
                      </a>
                    )}
                    {project.links.appStore && (
                      <a href={project.links.appStore} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-xs">
                        <FaAppStore className="w-3 h-3" />
                        <span>App Store</span>
                      </a>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span key={tech} className="px-2 py-0.5 text-xs bg-surface-dark text-lime-light rounded">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-0.5 text-xs text-gray-400">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

          </motion.section>
        </div>
      </div>
    </div>
  );
};

export default CompactPortfolio;