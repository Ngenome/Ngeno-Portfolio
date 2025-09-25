// File: components/sections/Experience.tsx
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { experiences } from "@/data/experience";
import { SplitHeading } from "@/components/common/animations";

const ExperienceCard = ({ experience, index }) => {
  // Show only top 2-3 achievements for better scannability
  const topAchievements = experience.achievements.slice(0, 3);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative flex gap-6 group"
    >
      {/* Timeline */}
      <div className="flex flex-col items-center">
        {/* Timeline dot */}
        <div className="w-3 h-3 rounded-full bg-lime-default flex-shrink-0 relative z-10">
          <div className="absolute inset-0 rounded-full bg-lime-default animate-ping opacity-40" />
        </div>
        {/* Timeline line */}
        {index < experiences.length - 1 && (
          <div className="w-px h-full bg-gray-800 mt-4" />
        )}
      </div>

      {/* Content */}
      <div className="flex-1 pb-8">
        {/* Header */}
        <div className="mb-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
            <h3 className="text-xl font-display text-white">
              {experience.role}
            </h3>
            <span className="text-sm text-lime-light font-mono">
              {experience.duration}
            </span>
          </div>

          <a
            href={experience.companyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg text-lime-light hover:text-lime-default transition-colors
                     inline-flex items-center gap-1 group/link"
          >
            {experience.company}
            <span className="text-xs opacity-60 group-hover/link:opacity-100 transition-opacity">→</span>
          </a>
        </div>

        {/* Description */}
        <p className="text-gray-400 mb-3 leading-relaxed text-sm">
          {experience.description}
        </p>

        {/* Key Achievements - Always visible */}
        <ul className="space-y-1 mb-3">
          {topAchievements.map((achievement, i) => (
            <li key={i} className="flex items-start gap-2 text-gray-300">
              <span className="text-lime-default mt-1.5 text-xs">•</span>
              <span className="text-sm leading-relaxed">{achievement}</span>
            </li>
          ))}
        </ul>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {experience.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs rounded bg-surface-light text-gray-400
                       border border-lime-default/20 hover:border-lime-default/40 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="relative py-section-compact bg-surface-dark"
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-4xl mb-8">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-lime-light font-mono text-sm tracking-wider mb-4"
          >
            EXPERIENCE
          </motion.p>
          <SplitHeading className="text-h1 font-display text-white mb-6">
            Work History
          </SplitHeading>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-400 text-body max-w-2xl"
          >
            5+ years building web and mobile applications serving tens of thousands of users.
            Experience across the entire stack with a focus on measurable impact.
          </motion.p>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-4xl">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
