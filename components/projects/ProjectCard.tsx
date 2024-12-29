// File: components/projects/ProjectCard.tsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaGlobe, FaGooglePlay, FaAppStore } from "react-icons/fa";
import { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Links configuration
  const links = [
    {
      icon: FaGlobe,
      url: project.links.live,
      label: "Visit Site",
      color: "primary",
    },
    {
      icon: FaGithub,
      url: project.links.github,
      label: "View Code",
      color: "accent",
    },
    {
      icon: FaGooglePlay,
      url: project.links.playStore,
      label: "Play Store",
      color: "primary",
    },
    {
      icon: FaAppStore,
      url: project.links.appStore,
      label: "App Store",
      color: "accent",
    },
  ].filter((link) => link.url); // Only show links that exist

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.19, 1, 0.22, 1],
      }}
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Card Content */}
      <div className="relative bg-surface-light rounded-2xl overflow-hidden">
        {/* Image Section */}
        <div className="aspect-video relative overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            animate={{
              scale: isHovered ? 1.05 : 1,
            }}
            transition={{ duration: 0.4 }}
          />

          {/* Overlay */}
          <motion.div
            className="absolute inset-0 bg-surface-dark/80 flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Links - Now always visible but animated */}
            <div className="flex gap-4 absolute bottom-6 left-6 z-20">
              {links.map((link, i) => (
                <motion.a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-full bg-${link.color}-default hover:bg-${link.color}-light 
                            transition-all duration-300 text-surface-dark`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: isHovered ? 1 : 0,
                    y: isHovered ? 0 : 20,
                  }}
                  transition={{
                    duration: 0.3,
                    delay: i * 0.1,
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <link.icon className="w-5 h-5" />
                  <span className="sr-only">{link.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Content Section */}
        <div className="p-6">
          <motion.h3
            className="font-display text-2xl font-bold text-primary-light mb-2"
            layout
          >
            {project.title}
          </motion.h3>

          <motion.p className="text-sm text-gray-400 mb-4 line-clamp-2" layout>
            {project.description}
          </motion.p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs rounded-full bg-surface-dark 
                         text-primary-light border border-primary-light/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
