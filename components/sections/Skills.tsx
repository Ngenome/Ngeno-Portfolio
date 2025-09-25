// File: components/sections/Skills.tsx
import React from "react";
import { motion } from "framer-motion";
import { SplitHeading } from "@/components/common/animations";
import { skillCategories, skills } from "@/data/skills";

const SkillsSection = () => {
  // Group skills by category for organized display
  const groupedSkills = skillCategories.reduce((acc, category) => {
    acc[category.id] = skills.filter(skill => skill.category === category.id);
    return acc;
  }, {} as Record<string, typeof skills>);

  return (
    <section
      id="skills"
      className="relative py-section-compact bg-surface-dark"
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mb-8"
        >
          <p className="text-lime-light font-mono text-sm tracking-wider mb-4">
            EXPERTISE
          </p>
          <SplitHeading className="text-h1 font-display text-white mb-6">
            Skills & Technologies
          </SplitHeading>
          <p className="text-gray-400 text-body max-w-2xl">
            5+ years building production-ready applications across AI, full-stack web, and mobile ecosystems.
            Experience leading teams and delivering award-winning platforms.
          </p>
        </motion.div>

        {/* Skills Grid - Clean & Minimal */}
        <div className="space-y-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="group"
            >
              {/* Category Title */}
              <div className="flex items-center gap-4 mb-3">
                <div className="text-lime-light">
                  <category.icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-display text-white">
                  {category.title}
                </h3>
                <div className="flex-1 h-px bg-gray-800" />
              </div>

              {/* Skills List */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                {groupedSkills[category.id]?.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: categoryIndex * 0.1 + skillIndex * 0.05
                    }}
                    className="flex items-center gap-3 group/skill py-1"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-lime-default flex-shrink-0" />
                    <span className="text-gray-300 group-hover/skill:text-white transition-colors duration-300">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
