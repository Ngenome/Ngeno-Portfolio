// File: components/sections/Skills.tsx
import React, { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { SplitHeading } from "@/components/common/animations";
import { skillCategories, skills } from "@/data/skills";

const SkillsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const containerRef = useRef(null);

  // Filter skills based on selected category
  const filteredSkills =
    selectedCategory === "all"
      ? skills
      : skills.filter((skill) => skill.category === selectedCategory);

  return (
    <section
      ref={containerRef}
      id="skills"
      className="relative py-section bg-surface-dark overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-lime-default/5 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-lime-default/20 to-transparent" />
      </div>

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mb-24"
        >
          <p className="text-lime-light font-mono text-sm tracking-wider mb-4">
            EXPERTISE
          </p>
          <SplitHeading className="text-h1 font-display text-white mb-6">
            Technical Prowess &
            <br />
            Creative Innovation
          </SplitHeading>
          <p className="text-gray-400 text-body max-w-2xl">
            Combining cutting-edge technologies with creative problem-solving to
            build scalable, user-centric solutions that make an impact.
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
            {[
              { id: "all", title: "All Skills", icon: null },
              ...skillCategories,
            ].map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className={`relative p-4 rounded-xl border transition-all duration-300
                  ${
                    selectedCategory === category.id
                      ? "bg-lime-default/20 border-lime-default text-white"
                      : "bg-surface-light border-lime-default/10 text-gray-400 hover:border-lime-default/30"
                  }`}
              >
                {category.icon && (
                  <category.icon className="w-8 h-8 mx-auto mb-3 text-lime-light" />
                )}
                <p className="text-sm font-medium text-center">
                  {category.title}
                </p>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="group relative bg-surface-light rounded-lg p-6 border border-lime-default/10
                        hover:border-lime-default/30 transition-all duration-300"
              >
                {/* Hover gradient */}
                <div
                  className="absolute inset-0 bg-gradient-to-br from-lime-default/10 to-transparent 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"
                />

                <div className="relative">
                  <h4 className="text-white font-medium mb-2">{skill.name}</h4>
                  <p className="text-sm text-gray-400">
                    {
                      skillCategories.find((cat) => cat.id === skill.category)
                        ?.title
                    }
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state */}
        {filteredSkills.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12 text-gray-400"
          >
            No skills found in this category.
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default SkillsSection;
