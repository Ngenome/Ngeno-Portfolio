// File: components/sections/Experience.tsx
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { experiences } from "@/data/experience";
import { SplitHeading } from "@/components/common/animations";

const ExperienceCard = ({ experience, index }) => {
  const cardRef = useRef(null);
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="relative pl-8 md:pl-32 pb-16"
    >
      {/* Timeline line with gradient */}
      <div className="absolute left-0 top-0 h-full w-px md:w-24">
        <div className="h-full w-px md:h-px bg-gradient-to-r from-lime-default to-yellow-default opacity-20" />
        <motion.div
          className="absolute left-0 top-0 h-full w-px md:h-px bg-gradient-to-r from-lime-default to-yellow-default"
          initial={{ scaleY: 0, scaleX: 0 }}
          whileInView={{ scaleY: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{ originY: 0, originX: 0 }}
        />
      </div>

      {/* Timeline dot with pulsing effect */}
      <div className="absolute left-[-4px] md:left-24 top-0">
        <div className="relative w-2 h-2 md:w-3 md:h-3">
          <motion.div
            className="absolute inset-0 bg-lime-default rounded-full"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
          />
          <div className="absolute inset-0 bg-lime-default rounded-full animate-ping opacity-75" />
          <div className="absolute inset-[-4px] bg-lime-default rounded-full opacity-30 animate-pulse" />
        </div>
      </div>

      {/* Content Card */}
      <motion.div
        layout
        className="relative bg-surface-light rounded-xl p-6 md:p-8 border border-lime-default/10 
                 hover:border-lime-default/30 transition-colors duration-300"
      >
        {/* Date pill */}
        <div
          className="absolute -top-3 left-6 px-4 py-1 bg-surface-dark rounded-full 
                     border border-lime-default/20 text-lime-light text-sm"
        >
          {experience.duration}
        </div>

        <div className="pt-4">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <div>
              <motion.h3
                className="text-xl font-display text-white mb-1"
                layout
              >
                {experience.role}
              </motion.h3>
              <motion.a
                href={experience.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lime-light hover:text-lime-default transition-colors inline-flex items-center gap-1"
                whileHover={{ x: 5 }}
              >
                {experience.company}
                <span className="text-xs">→</span>
              </motion.a>
            </div>
            {/* <span className="text-sm text-gray-400">{experience.mode}</span> */}
          </div>

          {/* Description */}
          <motion.p className="text-gray-400 mb-6" layout>
            {experience.description}
          </motion.p>

          {/* Achievements */}
          <motion.div
            className={`grid gap-4 overflow-hidden transition-all duration-500 ${
              isExpanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
            }`}
          >
            <div className="min-h-0">
              <ul className="space-y-3">
                {experience.achievements.map((achievement, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start gap-2 text-gray-400"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <span className="text-lime-light mt-1.5">•</span>
                    {achievement}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Expand/Collapse Button */}
          <motion.button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-6 text-sm text-lime-light hover:text-lime-default transition-colors"
            whileHover={{ x: 5 }}
          >
            {isExpanded ? "Show Less" : "Show More"}
          </motion.button>

          {/* Technologies */}
          <div className="mt-6 pt-6 border-t border-lime-default/10">
            <div className="flex flex-wrap gap-2">
              {experience.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs rounded-full bg-surface-dark
                           text-lime-light border border-lime-default/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ExperienceSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Parallax effect for background elements
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <section
      ref={containerRef}
      id="experience"
      className="relative py-section bg-surface-dark overflow-hidden"
    >
      {/* Background Elements */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-lime-default/5 via-transparent to-transparent" />
      </motion.div>

      <div className="container mx-auto px-6 relative">
        {/* Section Header */}
        <div className="max-w-4xl mb-24">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-lime-light font-mono text-sm tracking-wider mb-4"
          >
            PROFESSIONAL JOURNEY
          </motion.p>
          <SplitHeading className="text-h1 font-display text-white mb-6">
            Experience &
            <br />
            Work History
          </SplitHeading>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-400 text-body max-w-2xl"
          >
            A timeline of my professional growth, key projects, and achievements
            in software development and innovation.
          </motion.p>
        </div>

        {/* Experience Timeline */}
        <div className="relative">
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
