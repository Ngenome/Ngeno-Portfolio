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

      {/* Hero Section - Creative & Visual */}
      <div className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          {/* Animated Grid Background */}
          <div className="absolute inset-0 opacity-5">
            <div className="h-full w-full"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(134, 239, 172, 0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(134, 239, 172, 0.1) 1px, transparent 1px)
                `,
                backgroundSize: '40px 40px'
              }}
            />
          </div>

          {/* Floating Geometric Shapes */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="absolute inset-0"
          >
            <div className="absolute top-20 left-10 w-20 h-20 bg-lime-default/10 rounded-full blur-xl"></div>
            <div className="absolute top-40 right-20 w-32 h-32 bg-lime-light/5 rotate-45 blur-lg"></div>
            <div className="absolute bottom-32 left-1/4 w-16 h-16 bg-lime-default/15 rounded-lg rotate-12 blur-sm"></div>
            <div className="absolute bottom-20 right-1/3 w-24 h-24 bg-lime-light/8 rounded-full blur-xl"></div>
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-5 gap-8 items-center">

            {/* Main Content - Left */}
            <div className="lg:col-span-3 text-center lg:text-left">

              {/* Animated Greeting */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center justify-center lg:justify-start gap-2 mb-4"
              >
                <div className="w-2 h-2 bg-lime-default rounded-full animate-pulse"></div>
                <span className="text-lime-light font-mono text-sm">Hello, I'm</span>
              </motion.div>

              {/* Name with Gradient */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl md:text-7xl lg:text-8xl font-black mb-4"
              >
                <span className="bg-gradient-to-r from-white via-lime-light to-lime-default bg-clip-text text-transparent">
                  Kelvin
                </span>
                <br />
                <span className="text-white">Ng'eno</span>
              </motion.h1>

              {/* Animated Roles */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mb-6"
              >
                <div className="text-xl md:text-2xl text-lime-light font-light tracking-wide">
                  <span className="font-mono text-lime-default/80">&lt;</span>
                  <motion.span
                    key="role"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mx-2"
                  >
                    Full Stack Developer
                  </motion.span>
                  <span className="font-mono text-lime-default/80">/&gt;</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-3 mt-2 text-gray-400 text-sm">
                  <span>AI Engineer</span>
                  <div className="w-1 h-1 bg-lime-default rounded-full"></div>
                  <span>Mobile Developer</span>
                  <div className="w-1 h-1 bg-lime-default rounded-full"></div>
                  <span>Tech Lead</span>
                </div>
              </motion.div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="text-gray-300 text-lg leading-relaxed max-w-2xl mb-8"
              >
                Founder mode engineer building{" "}
                <span className="text-lime-light font-medium">scalable solutions</span> that solve real problems with{" "}
                <span className="text-lime-light font-medium">frontier technology</span>.{" "}
                <span className="text-white font-semibold">5+ years</span> experience serving{" "}
                <span className="text-white font-semibold">tens of thousands</span> of users.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <a href="mailto:hello@ngenondumia.com"
                  className="group px-8 py-4 bg-lime-default text-surface-dark font-semibold rounded-lg hover:bg-lime-light transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-lime-default/25">
                  <span className="flex items-center gap-2">
                    Let's Build Something
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                      →
                    </motion.span>
                  </span>
                </a>
                <a href="/resume.pdf" download
                  className="group px-8 py-4 border-2 border-lime-default/50 text-lime-light font-semibold rounded-lg hover:border-lime-default hover:bg-lime-default/10 transition-all duration-300">
                  <span className="flex items-center gap-2">
                    <FaFileDownload className="w-4 h-4 group-hover:animate-bounce" />
                    Download Resume
                  </span>
                </a>
              </motion.div>
            </div>

            {/* Right Side - Contact Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="lg:col-span-2"
            >
              <div className="relative">
                {/* Glowing Border Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-lime-default to-lime-light rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>

                <div className="relative bg-surface-light/50 backdrop-blur-sm border border-lime-default/20 rounded-2xl p-6 space-y-4">
                  <h3 className="text-white font-semibold text-lg mb-4 flex items-center gap-2">
                    <div className="w-2 h-2 bg-lime-default rounded-full animate-pulse"></div>
                    Get In Touch
                  </h3>

                  <div className="space-y-3">
                    <a href="mailto:hello@ngenondumia.com"
                      className="flex items-center gap-3 text-gray-300 hover:text-lime-light transition-colors group p-2 rounded-lg hover:bg-lime-default/5">
                      <div className="p-2 bg-lime-default/10 rounded-lg group-hover:bg-lime-default/20 transition-colors">
                        <FaEnvelope className="w-4 h-4 text-lime-light" />
                      </div>
                      <span className="text-sm">hello@ngenondumia.com</span>
                    </a>

                    <a href="tel:+254726299179"
                      className="flex items-center gap-3 text-gray-300 hover:text-lime-light transition-colors group p-2 rounded-lg hover:bg-lime-default/5">
                      <div className="p-2 bg-lime-default/10 rounded-lg group-hover:bg-lime-default/20 transition-colors">
                        <FaPhone className="w-4 h-4 text-lime-light" />
                      </div>
                      <span className="text-sm">+254 726 299 179</span>
                    </a>

                    <div className="flex items-center gap-3 text-gray-300 p-2">
                      <div className="p-2 bg-lime-default/10 rounded-lg">
                        <FaMapMarkerAlt className="w-4 h-4 text-lime-light" />
                      </div>
                      <span className="text-sm">Nairobi, Kenya</span>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="pt-4 border-t border-lime-default/20">
                    <p className="text-gray-400 text-xs mb-3">Connect with me</p>
                    <div className="flex gap-3">
                      {socialLinks.map((link, index) => (
                        <motion.a
                          key={link.id}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 1.0 + index * 0.1 }}
                          className="p-2 bg-surface-dark/50 rounded-lg text-gray-400 hover:text-lime-light hover:bg-lime-default/10 transition-all duration-300 hover:scale-110"
                        >
                          <link.icon className="w-5 h-5" />
                        </motion.a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-4">

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
                {experiences.map((exp, index) => (
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